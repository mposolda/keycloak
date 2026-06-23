package org.keycloak.protocol.oid4vc.refresh;

import org.jboss.logging.Logger;

import org.keycloak.OAuthErrorException;
import org.keycloak.common.util.SecretGenerator;
import org.keycloak.models.AuthenticatedClientSessionModel;
import org.keycloak.models.ClientModel;
import org.keycloak.models.ClientSessionContext;
import org.keycloak.models.Constants;
import org.keycloak.models.IssuedVerifiableCredentialModel;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.UserModel;
import org.keycloak.models.UserSessionModel;
import org.keycloak.models.oid4vci.CredentialScopeModel;
import org.keycloak.protocol.oid4vc.model.OID4VCAuthorizationDetail;
import org.keycloak.protocol.oid4vc.utils.CredentialScopeUtils;
import org.keycloak.protocol.oid4vc.utils.OID4VCUtil;
import org.keycloak.protocol.oidc.TokenManager;
import org.keycloak.protocol.oidc.refresh.AbstractRefreshTokenProvider;
import org.keycloak.protocol.oidc.refresh.InitialRefreshTokenContext;
import org.keycloak.protocol.oidc.refresh.RefreshTokenContext;
import org.keycloak.protocol.oidc.refresh.RefreshTokenProvider;
import org.keycloak.representations.AccessToken;
import org.keycloak.representations.AuthorizationDetailsJSONRepresentation;
import org.keycloak.representations.RefreshToken;
import org.keycloak.util.TokenUtil;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import static org.keycloak.OAuth2Constants.AUTHORIZATION_CODE;
import static org.keycloak.OID4VCConstants.OPENID_CREDENTIAL;
import static org.keycloak.constants.OID4VCIConstants.OID4VC_PROTOCOL;
import static org.keycloak.models.Constants.AUTHORIZATION_DETAILS_RESPONSE;

public class OID4VCIRefreshTokenProvider extends AbstractRefreshTokenProvider implements RefreshTokenProvider {

    private static final Logger logger = Logger.getLogger(OID4VCIRefreshTokenProvider.class);

    private KeycloakSession session;

    public OID4VCIRefreshTokenProvider(KeycloakSession session) {
        this.session = session;
    }

    @Override
    public boolean supports(InitialRefreshTokenContext initialRefreshTokenCtx) {
        ClientSessionContext clientSessionCtx = initialRefreshTokenCtx.clientSessionCtx();

        // Supported only for authorization_code grant type TODO:mposolda should be refresh-token grant as well?
        String grantType = clientSessionCtx.getAttribute(Constants.GRANT_TYPE, String.class);
        if (!AUTHORIZATION_CODE.equals(grantType)) {
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

        // TODO:mposolda trace
        logger.infov("Generating refresh token for oid4vci. Realm: {0}, user: {1}, client: {2}", session.getContext().getRealm().getName(),
                user.getUsername(), session.getContext().getClient().getClientId());


        // TODO:mposolda put those 3 lines back to accessTokenResponseBuilder? Or not?
        RefreshToken refreshToken = new RefreshToken(accessToken, initialRefreshTokenCtx.confirmation(), OID4VCIRefreshTokenProviderFactory.PROVIDER_ID);
        refreshToken.id(SecretGenerator.getInstance().generateSecureID());
        refreshToken.issuedNow();

        if (initialRefreshTokenCtx.offlineTokenRequested()) {
            throw new IllegalStateException("Unsupported to request offline access together with oid4vci credential");
        } else {
            refreshToken.exp(getExpiration(clientSessionCtx, user));
        }

        // TODO:mposolda is this ok? Probably yes...
        final ClientModel[] requestedAudienceClients = clientSessionCtx.getAttribute(Constants.REQUESTED_AUDIENCE_CLIENTS, ClientModel[].class);
        if (requestedAudienceClients != null) {
            throw new IllegalStateException("Unsupported to request audience clients together with oid4vci");
        }

        return refreshToken;
    }

    @Override
    public boolean supports(RefreshTokenContext ctx) {
        RefreshToken oldRefreshToken = ctx.oldRefreshToken();
        return OID4VCIRefreshTokenProviderFactory.PROVIDER_ID.equals(oldRefreshToken.getProvider());
    }

    @Override
    public TokenManager.AccessTokenResponseBuilder refreshAccessToken(RefreshTokenContext ctx) throws OAuthErrorException {
        // TODO:mposolda
        return null;
    }

    private long getExpiration(ClientSessionContext clientSessionCtx, UserModel user) {
        List<AuthorizationDetailsJSONRepresentation> authzDetails = clientSessionCtx.getAttribute(AUTHORIZATION_DETAILS_RESPONSE, List.class);
        if (authzDetails == null || authzDetails.isEmpty()) {
            throw new IllegalStateException("Authorization details not found in the client session context");
        }
        List<OID4VCAuthorizationDetail> oid4vcAuthzDetails = authzDetails.stream()
                .filter(authzDetail -> OPENID_CREDENTIAL.equals(authzDetail.getType()))
                .map(authzDetail -> authzDetail.asSubtype(OID4VCAuthorizationDetail.class))
                .toList();
        // Aligned with other places in Keycloak codebase to support single VC TODO:mposolda doublecheck if this is true? But I think it is per OID4VCIssuerEndpoint
        if (oid4vcAuthzDetails.size() != 1) {
            throw new IllegalStateException("Supporting single OID4VCI authorization detail for now");
        }
        OID4VCAuthorizationDetail oid4vcAuthzDetail = oid4vcAuthzDetails.get(0);

        CredentialScopeModel credentialScopeModel = CredentialScopeUtils.findCredentialScopeModelByConfigurationId(session.getContext().getRealm(), clientSessionCtx::getClientScopesStream, oid4vcAuthzDetail.getCredentialConfigurationId());
        if (credentialScopeModel == null) {
            throw new IllegalStateException("Not found credential scope model in current clientSessionCtx with credential configuration id: " + oid4vcAuthzDetail.getCredentialConfigurationId());
        }

        IssuedVerifiableCredentialModel issuedVerifiableCredentialModel = OID4VCUtil.checkIssuedVerifiableCredential(session, user, oid4vcAuthzDetail.getIssuedCredentialId(), credentialScopeModel, clientSessionCtx.getClientSession().getClient());
        return (issuedVerifiableCredentialModel.getExpiresAt() / 1000); // Expiry saved on credential is in milliseconds
    }
}
