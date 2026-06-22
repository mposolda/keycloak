package org.keycloak.protocol.oidc.refresh;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import org.keycloak.OAuth2Constants;
import org.keycloak.OAuthErrorException;
import org.keycloak.common.util.SecretGenerator;
import org.keycloak.events.Details;
import org.keycloak.events.EventBuilder;
import org.keycloak.models.AuthenticatedClientSessionModel;
import org.keycloak.models.ClientModel;
import org.keycloak.models.ClientSessionContext;
import org.keycloak.models.Constants;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.RealmModel;
import org.keycloak.models.UserSessionModel;
import org.keycloak.models.utils.SessionExpirationUtils;
import org.keycloak.protocol.oidc.OIDCAdvancedConfigWrapper;
import org.keycloak.protocol.oidc.TokenManager;
import org.keycloak.representations.AccessToken;
import org.keycloak.representations.AuthorizationDetailsJSONRepresentation;
import org.keycloak.representations.RefreshToken;
import org.keycloak.util.TokenUtil;

import static org.keycloak.models.Constants.AUTHORIZATION_DETAILS_RESPONSE;

/**
 * Default refresh token provider. Requires valid user session, which is referenced in the refresh token, to be present in Keycloak storage
 */
public class DefaultRefreshTokenProvider extends AbstractRefreshTokenProvider implements RefreshTokenProvider {

    private final KeycloakSession session;

    public DefaultRefreshTokenProvider(KeycloakSession session) {
        this.session = session;
    }

    @Override
    public boolean supports(InitialRefreshTokenContext initialRefreshTokenCtx) {
        return true; // TODO:mposolda
    }

    @Override
    public RefreshToken generateRefreshToken(InitialRefreshTokenContext initialRefreshTokenCtx) {
        ClientSessionContext clientSessionCtx = initialRefreshTokenCtx.clientSessionCtx();
        TokenManager.AccessTokenResponseBuilder responseBuilder = initialRefreshTokenCtx.responseBuilder();
        AccessToken accessToken = responseBuilder.getAccessToken();
        AuthenticatedClientSessionModel clientSession = clientSessionCtx.getClientSession();

        // TODO:mposolda put those 3 lines back to accessTokenResponseBuilder? Or not?
        RefreshToken refreshToken = new RefreshToken(accessToken, initialRefreshTokenCtx.confirmation());
        refreshToken.id(SecretGenerator.getInstance().generateSecureID());
        refreshToken.issuedNow();

        clientSession.setTimestamp(refreshToken.getIat().intValue());
        UserSessionModel userSession = clientSession.getUserSession();
        userSession.setLastSessionRefresh(refreshToken.getIat().intValue());
        if (initialRefreshTokenCtx.offlineTokenRequested()) {
            refreshToken.type(TokenUtil.TOKEN_TYPE_OFFLINE);
            if (userSession.getRealm().isOfflineSessionMaxLifespanEnabled()) {
                refreshToken.exp(getExpiration(clientSessionCtx, userSession,true));
            }
            responseBuilder.createOrUpdateOfflineSession();
        } else {
            refreshToken.exp(getExpiration(clientSessionCtx, userSession, false));
        }
        final ClientModel[] resquestedAudienceClients = clientSessionCtx.getAttribute(Constants.REQUESTED_AUDIENCE_CLIENTS, ClientModel[].class);
        if (resquestedAudienceClients != null) {
            refreshToken.getOtherClaims().put(Constants.REQUESTED_AUDIENCE, Arrays.stream(resquestedAudienceClients)
                    .map(ClientModel::getClientId)
                    .collect(Collectors.toSet()));
        }

        return refreshToken;
    }

    @Override
    public boolean supports(RefreshTokenContext ctx) {
        // TODO: This would be changed...
        return true;
    }

    @Override
    public TokenManager.AccessTokenResponseBuilder refreshAccessToken(RefreshTokenContext ctx) throws OAuthErrorException {
        RealmModel realm = ctx.realm();
        TokenManager tokenManager = ctx.tokenManager();
        RefreshToken oldRefreshToken = ctx.oldRefreshToken();
        EventBuilder event = ctx.event();
        ClientModel authorizedClient = ctx.authorizedClient();
        String scopeParameter = ctx.scopeParameter();

        if (realm.isRevokeRefreshToken()) {
            // If refresh tokens are revoked, we need to serialize all requests to avoid wrong conclusions.
            // This needs to be called before we load the user session from the database or the cache
            createTemporaryExclusiveLockForTokenRefreshOperation(session, oldRefreshToken, tokenManager);
        }

        event.session(oldRefreshToken.getSessionState())
                .detail(Details.REFRESH_TOKEN_ID, oldRefreshToken.getId())
                .detail(Details.REFRESH_TOKEN_TYPE, oldRefreshToken.getType());

        if (oldRefreshToken.getSubject() != null) {
            event.detail(Details.REFRESH_TOKEN_SUB, oldRefreshToken.getSubject());
        }

        // Setup clientScopes from refresh token to the context
        String oldTokenScope = oldRefreshToken.getScope();
        //The requested scope MUST NOT include any scope not originally granted by the resource owner
        //if scope parameter is not null, remove every scope that is not part of scope parameter
        if (scopeParameter != null && ! scopeParameter.isEmpty()) {
            Set<String> scopeParamScopes = Arrays.stream(scopeParameter.split(" ")).collect(Collectors.toSet());
            oldTokenScope = Arrays.stream(oldTokenScope.split(" "))
                    .map(transformScopes(session, scopeParamScopes))
                    .filter(Objects::nonNull)
                    .collect(Collectors.joining(" "));
        }
        
        TokenManager.TokenValidation validation = tokenManager.validateToken(session, session.getContext().getUri(), ctx.connection(), realm, oldRefreshToken, ctx.headers(), oldTokenScope);

        session.getContext().setUserSession(validation.userSession);
        AuthenticatedClientSessionModel clientSession = validation.clientSessionCtx.getClientSession();
        OIDCAdvancedConfigWrapper clientConfig = OIDCAdvancedConfigWrapper.fromClientModel(authorizedClient);

        // validate authorizedClient is same as validated client
        if (!clientSession.getClient().getId().equals(authorizedClient.getId())) {
            throw new OAuthErrorException(OAuthErrorException.INVALID_GRANT, "Invalid refresh token. Token client and authorized client don't match");
        }

        validateTokenReuseForRefresh(session, realm, oldRefreshToken, validation, tokenManager);

        event.user(validation.userSession.getUser());

        if (oldRefreshToken.getAuthorization() != null) {
            validation.newToken.setAuthorization(oldRefreshToken.getAuthorization());
        }

        final Collection<String> requestedAud = (Collection<String>) oldRefreshToken.getOtherClaims().get(Constants.REQUESTED_AUDIENCE);
        if (requestedAud != null) {
            validation.clientSessionCtx.setAttribute(Constants.REQUESTED_AUDIENCE_CLIENTS,
                    requestedAud.stream()
                            .map(clientId -> session.clients().getClientByClientId(realm, clientId))
                            .filter(Objects::nonNull)
                            .toArray(ClientModel[]::new));
        }

        validation.clientSessionCtx.setAttribute(OAuth2Constants.RESOURCE, ctx.resourceParameter());

        TokenManager.AccessTokenResponseBuilder responseBuilder = tokenManager.responseBuilder(realm, authorizedClient, event, session,
                validation.userSession, validation.clientSessionCtx).offlineToken( TokenUtil.TOKEN_TYPE_OFFLINE.equals(oldRefreshToken.getType())).accessToken(validation.newToken);

        // Copy authorization_details from refresh token to new access token and to accessTokenResponse (if present)
        List<AuthorizationDetailsJSONRepresentation> authorizationDetails = oldRefreshToken.getAuthorizationDetails();
        if (authorizationDetails != null) {
            validation.newToken.setAuthorizationDetails(authorizationDetails);
            validation.clientSessionCtx.setAttribute(AUTHORIZATION_DETAILS_RESPONSE, authorizationDetails);
        }

        if (clientConfig.isUseRefreshToken()) {
            //refresh token must have same scope as old refresh token (type, scope, expiration)
            responseBuilder.generateRefreshToken(oldRefreshToken, clientSession);
        }

        if (validation.newToken.getAuthorization() != null
                && clientConfig.isUseRefreshToken()) {
            responseBuilder.getRefreshToken().setAuthorization(validation.newToken.getAuthorization());
        }

        String scopeParam = clientSession.getNote(OAuth2Constants.SCOPE);
        if (TokenUtil.isOIDCRequest(scopeParam)) {
            responseBuilder.generateIDToken().generateAccessTokenHash();
        }

        storeRefreshTimingInformation(event, oldRefreshToken, validation.newToken);

        responseBuilder.requestRefreshToken(oldRefreshToken);

        return responseBuilder;
    }

    private Long getExpiration(ClientSessionContext clientSessionCtx, UserSessionModel userSession, boolean offline) {
        ClientModel client = clientSessionCtx.getClientSession().getClient();
        RealmModel realm = client.getRealm();
        long expiration = SessionExpirationUtils.calculateClientSessionIdleTimestamp(
                offline, userSession.isRememberMe(),
                TimeUnit.SECONDS.toMillis(clientSessionCtx.getClientSession().getTimestamp()),
                realm, client);
        long lifespan = SessionExpirationUtils.calculateClientSessionMaxLifespanTimestamp(
                offline, userSession.isRememberMe(),
                TimeUnit.SECONDS.toMillis(clientSessionCtx.getClientSession().getStarted()),
                TimeUnit.SECONDS.toMillis(userSession.getStarted()),
                realm, client);
        expiration = lifespan > 0? Math.min(expiration, lifespan) : expiration;

        return TimeUnit.MILLISECONDS.toSeconds(expiration);
    }

}
