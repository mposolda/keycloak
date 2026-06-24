package org.keycloak.protocol.oid4vc.refresh;

import java.util.List;

import jakarta.ws.rs.core.HttpHeaders;
import jakarta.ws.rs.core.UriInfo;

import org.keycloak.OAuth2Constants;
import org.keycloak.OAuthErrorException;
import org.keycloak.common.ClientConnection;
import org.keycloak.events.EventBuilder;
import org.keycloak.models.AuthenticatedClientSessionModel;
import org.keycloak.models.ClientModel;
import org.keycloak.models.ClientSessionContext;
import org.keycloak.models.Constants;
import org.keycloak.models.IssuedVerifiableCredentialModel;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.RealmModel;
import org.keycloak.models.UserModel;
import org.keycloak.models.UserSessionModel;
import org.keycloak.models.oid4vci.CredentialScopeModel;
import org.keycloak.protocol.oid4vc.model.OID4VCAuthorizationDetail;
import org.keycloak.protocol.oid4vc.utils.CredentialScopeUtils;
import org.keycloak.protocol.oid4vc.utils.OID4VCUtil;
import org.keycloak.protocol.oidc.OIDCLoginProtocol;
import org.keycloak.protocol.oidc.TokenManager;
import org.keycloak.protocol.oidc.encode.AccessTokenContext;
import org.keycloak.protocol.oidc.encode.TokenContextEncoderProvider;
import org.keycloak.protocol.oidc.refresh.AbstractRefreshTokenProvider;
import org.keycloak.protocol.oidc.refresh.InitialRefreshTokenContext;
import org.keycloak.protocol.oidc.refresh.RefreshTokenContext;
import org.keycloak.protocol.oidc.refresh.RefreshTokenProvider;
import org.keycloak.representations.AccessToken;
import org.keycloak.representations.AuthorizationDetailsJSONRepresentation;
import org.keycloak.representations.RefreshToken;
import org.keycloak.services.Urls;
import org.keycloak.services.managers.AuthenticationManager;
import org.keycloak.services.managers.AuthenticationSessionManager;
import org.keycloak.services.managers.UserSessionManager;
import org.keycloak.sessions.AuthenticationSessionModel;
import org.keycloak.sessions.RootAuthenticationSessionModel;

import org.jboss.logging.Logger;

import static org.keycloak.OAuth2Constants.AUTHORIZATION_CODE;
import static org.keycloak.OAuth2Constants.REFRESH_TOKEN;
import static org.keycloak.OID4VCConstants.OPENID_CREDENTIAL;
import static org.keycloak.constants.OID4VCIConstants.OID4VC_PROTOCOL;
import static org.keycloak.models.Constants.AUTHORIZATION_DETAILS_RESPONSE;
import static org.keycloak.models.UserSessionModel.SessionPersistenceState.TRANSIENT;

public class OID4VCIRefreshTokenProvider extends AbstractRefreshTokenProvider implements RefreshTokenProvider {

    private static final Logger logger = Logger.getLogger(OID4VCIRefreshTokenProvider.class);

    public OID4VCIRefreshTokenProvider(KeycloakSession session) {
        super(session);
    }

    @Override
    public boolean supports(InitialRefreshTokenContext initialRefreshTokenCtx) {
        ClientSessionContext clientSessionCtx = initialRefreshTokenCtx.clientSessionCtx();

        // Supported only for authorization_code grant type and refresh-token grant
        String grantType = clientSessionCtx.getAttribute(Constants.GRANT_TYPE, String.class);
        if (!AUTHORIZATION_CODE.equals(grantType) && !REFRESH_TOKEN.equals(grantType)) {
            return false;
        }

        // Check any 'oid4vci' client scope is present
        return clientSessionCtx.getClientScopesStream()
                .anyMatch(it -> OID4VC_PROTOCOL.equals(it.getProtocol()));
    }

    @Override
    public RefreshToken generateRefreshToken(InitialRefreshTokenContext initialRefreshTokenCtx) {
        ClientSessionContext clientSessionCtx = initialRefreshTokenCtx.clientSessionCtx();
        TokenManager.AccessTokenResponseBuilder responseBuilder = initialRefreshTokenCtx.responseBuilder();
        AccessToken accessToken = responseBuilder.getAccessToken();
        AuthenticatedClientSessionModel clientSession = clientSessionCtx.getClientSession();
        UserModel user = clientSession.getUserSession().getUser();

        logger.tracev("Generating refresh token for oid4vci. Realm: {0}, user: {1}, client: {2}", session.getContext().getRealm().getName(),
                user.getUsername(), session.getContext().getClient().getClientId());

        RefreshToken refreshToken = createRefreshToken(accessToken, initialRefreshTokenCtx.confirmation(), OID4VCIRefreshTokenProviderFactory.PROVIDER_ID);

        if (initialRefreshTokenCtx.offlineTokenRequested()) {
            throw new IllegalStateException("Unsupported to request offline access together with oid4vci credential");
        } else {
            refreshToken.exp(getExpiration(clientSessionCtx, user));
        }

        // Likely should not need to support this for OID4VCI refresh tokens
        final ClientModel[] requestedAudienceClients = clientSessionCtx.getAttribute(Constants.REQUESTED_AUDIENCE_CLIENTS, ClientModel[].class);
        if (requestedAudienceClients != null) {
            throw new IllegalStateException("Unsupported to request audience clients together with oid4vci");
        }

        // Not reference to the sessionId should be within refresh-token or access-token. As userSession might be transient user session at this point
        if (shouldUseTransientSession(responseBuilder.getAccessToken())) {
            refreshToken.setSessionId(null);
            initialRefreshTokenCtx.event().session((String) null);
        }

        decorateAccessToken(responseBuilder.getAccessToken());

        return refreshToken;
    }

    private void decorateAccessToken(AccessToken accessToken) {
        if (shouldUseTransientSession(accessToken)) {
            accessToken.setSessionId(null);
        }
        // TODO: Should possibly update "aud" of the access token to Keycloak issuer URL. Other updates?
    }

    // This might be possibly updated to always return true. As sessionId is not needed on refresh-token nor access-token even on the initial issuance (during authorization_code grant)
    private boolean shouldUseTransientSession(AccessToken accessToken) {
        TokenContextEncoderProvider encoder = session.getProvider(TokenContextEncoderProvider.class);
        return (encoder.getTokenContextFromTokenId(accessToken.getId()).getSessionType() == AccessTokenContext.SessionType.TRANSIENT);
    }

    @Override
    public boolean supports(RefreshTokenContext ctx) {
        RefreshToken oldRefreshToken = ctx.oldRefreshToken();
        return OID4VCIRefreshTokenProviderFactory.PROVIDER_ID.equals(oldRefreshToken.getProvider());
    }


    @Override
    protected TokenManager.TokenValidation validateToken(KeycloakSession session, UriInfo uriInfo, ClientConnection connection, RealmModel realm,
                                                         RefreshToken oldToken, HttpHeaders headers, String scope, ClientModel client,
                                                         TokenManager tokenManager, EventBuilder event) throws OAuthErrorException {
        List<AuthorizationDetailsJSONRepresentation> authzDetails = oldToken.getAuthorizationDetails();
        if (authzDetails == null || authzDetails.isEmpty()) {
            throw new OAuthErrorException("Authorization details not found in the old refresh token");
        }
        OID4VCAuthorizationDetail oid4vcAuthzDetail = getOid4vcAuthzDetail(authzDetails);

        // Find user
        UserModel user = getUser(realm, oldToken);
        if (user == null) {
            throw new OAuthErrorException(OAuthErrorException.INVALID_GRANT, "Invalid refresh token", "Unknown user");
        }
        if (!user.isEnabled()) {
            throw new OAuthErrorException(OAuthErrorException.INVALID_GRANT, "User disabled", "User disabled");
        }

        // Create transient sessions
        RootAuthenticationSessionModel rootAuthSession = new AuthenticationSessionManager(session).createAuthenticationSession(realm, false);
        AuthenticationSessionModel authSession = rootAuthSession.createAuthenticationSession(client);

        authSession.setAuthenticatedUser(user);
        authSession.setProtocol(OIDCLoginProtocol.LOGIN_PROTOCOL);
        authSession.setClientNote(OIDCLoginProtocol.ISSUER, Urls.realmIssuer(session.getContext().getUri().getBaseUri(), realm.getName()));
        authSession.setClientNote(OIDCLoginProtocol.SCOPE_PARAM, scope);

        UserSessionModel userSession = new UserSessionManager(session).createUserSession(authSession.getParentSession().getId(), realm, user, user.getUsername(),
                connection.getRemoteHost(), "oid4vci-refresh-token", false, null, null, TRANSIENT);

        event.session(userSession);

        AuthenticationManager.setClientScopesInSession(session, authSession);
        ClientSessionContext clientSessionCtx = TokenManager.attachAuthenticationSession(session, userSession, authSession);
        clientSessionCtx.setAttribute(Constants.GRANT_TYPE, OAuth2Constants.REFRESH_TOKEN);

        CredentialScopeModel credentialScopeModel = CredentialScopeUtils.findCredentialScopeModelByConfigurationId(session.getContext().getRealm(), clientSessionCtx::getClientScopesStream, oid4vcAuthzDetail.getCredentialConfigurationId());
        if (credentialScopeModel == null) {
            throw new IllegalStateException("Not found credential scope model in current clientSessionCtx with credential configuration id: " + oid4vcAuthzDetail.getCredentialConfigurationId());
        }

        OID4VCUtil.checkIssuedVerifiableCredential(session, user, oid4vcAuthzDetail.getIssuedCredentialId(), credentialScopeModel, clientSessionCtx.getClientSession().getClient());

        return new TokenManager.TokenValidation(user, userSession, clientSessionCtx);
    }

    // Might be eventually overriden for the scenarios where user not available in Keycloak DB
    protected UserModel getUser(RealmModel realm, RefreshToken oldToken) {
        return session.users().getUserById(realm, oldToken.getSubject());
    }


    private long getExpiration(ClientSessionContext clientSessionCtx, UserModel user) {
        List<AuthorizationDetailsJSONRepresentation> authzDetails = clientSessionCtx.getAttribute(AUTHORIZATION_DETAILS_RESPONSE, List.class);
        if (authzDetails == null || authzDetails.isEmpty()) {
            throw new IllegalStateException("Authorization details not found in the client session context");
        }

        OID4VCAuthorizationDetail oid4vcAuthzDetail = getOid4vcAuthzDetail(authzDetails);

        CredentialScopeModel credentialScopeModel = CredentialScopeUtils.findCredentialScopeModelByConfigurationId(session.getContext().getRealm(), clientSessionCtx::getClientScopesStream, oid4vcAuthzDetail.getCredentialConfigurationId());
        if (credentialScopeModel == null) {
            throw new IllegalStateException("Not found credential scope model in current clientSessionCtx with credential configuration id: " + oid4vcAuthzDetail.getCredentialConfigurationId());
        }

        IssuedVerifiableCredentialModel issuedVerifiableCredentialModel = OID4VCUtil.checkIssuedVerifiableCredential(session, user, oid4vcAuthzDetail.getIssuedCredentialId(), credentialScopeModel, clientSessionCtx.getClientSession().getClient());
        return (issuedVerifiableCredentialModel.getExpiresAt() / 1000); // Expiry saved on credential is in milliseconds
    }

    private OID4VCAuthorizationDetail getOid4vcAuthzDetail(List<AuthorizationDetailsJSONRepresentation> authzDetails) {
        List<OID4VCAuthorizationDetail> oid4vcAuthzDetails = authzDetails.stream()
                .filter(authzDetail -> OPENID_CREDENTIAL.equals(authzDetail.getType()))
                .map(authzDetail -> authzDetail.asSubtype(OID4VCAuthorizationDetail.class))
                .toList();
        // Aligned with other places in Keycloak codebase to support single VC TODO:mposolda doublecheck if this is true? But I think it is per OID4VCIssuerEndpoint
        if (oid4vcAuthzDetails.size() != 1) {
            throw new IllegalStateException("Supporting single OID4VCI authorization detail for now");
        }
        return oid4vcAuthzDetails.get(0);
    }
}
