package org.keycloak.protocol.oid4vc.issuance.requiredactions;

import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.core.UriBuilder;
import jakarta.ws.rs.core.UriInfo;

import org.jboss.logging.Logger;

import org.keycloak.TokenVerifier;
import org.keycloak.authentication.AuthenticationProcessor;
import org.keycloak.authentication.actiontoken.AbstractActionTokenHandler;
import org.keycloak.authentication.actiontoken.ActionTokenContext;
import org.keycloak.authentication.actiontoken.TokenUtils;
import org.keycloak.common.Profile;
import org.keycloak.events.Errors;
import org.keycloak.events.EventType;
import org.keycloak.forms.login.LoginFormsProvider;
import org.keycloak.models.Constants;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.RealmModel;
import org.keycloak.models.UserModel;
import org.keycloak.models.oid4vci.CredentialScopeModel;
import org.keycloak.protocol.oid4vc.utils.CredentialScopeUtils;
import org.keycloak.protocol.oid4vc.utils.OID4VCUtil;
import org.keycloak.protocol.oidc.OIDCLoginProtocol;
import org.keycloak.protocol.oidc.utils.RedirectUtils;
import org.keycloak.representations.idm.oid4vc.CredentialOfferActionConfig;
import org.keycloak.services.ErrorResponse;
import org.keycloak.services.Urls;
import org.keycloak.services.managers.AuthenticationManager;
import org.keycloak.services.messages.Messages;
import org.keycloak.sessions.AuthenticationSessionCompoundId;
import org.keycloak.sessions.AuthenticationSessionModel;

import java.io.IOException;
import java.util.List;

import static org.keycloak.constants.OID4VCIConstants.VERIFIABLE_CREDENTIAL_OFFER_PROVIDER_ID;

public class CredentialOfferActionTokenHandler extends AbstractActionTokenHandler<CredentialOfferActionToken>  {

    private static final Logger logger = Logger.getLogger(CredentialOfferActionTokenHandler.class);

    public CredentialOfferActionTokenHandler() {
        super(
                CredentialOfferActionToken.TOKEN_TYPE,
                CredentialOfferActionToken.class,
                Messages.INVALID_CODE,
                EventType.VERIFIABLE_CREDENTIAL_CREATE_OFFER, // TODO:mposolda is it correct event? Or is dedicated event-type needed?
                Errors.NOT_ALLOWED
        );
    }

    @Override
    public TokenVerifier.Predicate<? super CredentialOfferActionToken>[] getVerifiers(ActionTokenContext<CredentialOfferActionToken> tokenContext) {
        return TokenUtils.predicates(
                TokenUtils.checkThat(
                        // either redirect URI is not specified or must be valid for the client
                        t -> t.getRedirectUri() == null
                                || RedirectUtils.verifyRedirectUri(tokenContext.getSession(), t.getRedirectUri(),
                                tokenContext.getAuthenticationSession().getClient()) != null,
                        Errors.INVALID_REDIRECT_URI,
                        Messages.INVALID_REDIRECT_URI
                ),

                verifyEmail(tokenContext),
                verifyCredentialOfferAction(tokenContext)
        );
    }

    @Override
    public Response handleToken(CredentialOfferActionToken token, ActionTokenContext<CredentialOfferActionToken> tokenContext) {
        AuthenticationSessionModel authSession = tokenContext.getAuthenticationSession();
        final UriInfo uriInfo = tokenContext.getUriInfo();
        final RealmModel realm = tokenContext.getRealm();
        final KeycloakSession session = tokenContext.getSession();
        final UserModel user = tokenContext.getAuthenticationSession().getAuthenticatedUser();

        if (tokenContext.isAuthenticationSessionFresh()) {
            // Update the authentication session in the token
            String authSessionEncodedId = AuthenticationSessionCompoundId.fromAuthSession(authSession).getEncodedId();
            token.setCompoundAuthenticationSessionId(authSessionEncodedId);
            UriBuilder builder = Urls.actionTokenBuilder(uriInfo.getBaseUri(), token.serialize(session, realm, uriInfo),
                    authSession.getClient().getClientId(), authSession.getTabId(), AuthenticationProcessor.getClientData(session, authSession));
            String confirmUri = builder.build(realm.getName()).toString();

            String credentialConfigId = token.getActionConfig().getCredentialConfigurationId();
            CredentialScopeModel credScope = CredentialScopeUtils.findCredentialScopeModelByConfigurationId(
                    realm, () -> session.clientScopes().getClientScopesStream(realm), credentialConfigId);
            String displayName = CredentialScopeUtils.getCredentialDisplayName(session, user, credScope);

            return session.getProvider(LoginFormsProvider.class)
                    .setAuthenticationSession(authSession)
                    .setUser(authSession.getAuthenticatedUser())
                    .setSuccess(Messages.CONFIRM_CLAIM_CREDENTIAL, displayName)
                    .setAttribute(Constants.TEMPLATE_ATTR_ACTION_URI, confirmUri)
                    .createInfoPage();
        }

        String redirectUri = RedirectUtils.verifyRedirectUri(tokenContext.getSession(), token.getRedirectUri(), authSession.getClient());

        if (redirectUri != null) {
            authSession.setAuthNote(AuthenticationManager.SET_REDIRECT_URI_AFTER_REQUIRED_ACTIONS, "true");

            authSession.setRedirectUri(redirectUri);
            authSession.setClientNote(OIDCLoginProtocol.REDIRECT_URI_PARAM, redirectUri);
        }

        try {
            authSession.setClientNote(Constants.KC_ACTION, VERIFIABLE_CREDENTIAL_OFFER_PROVIDER_ID);
            authSession.setClientNote(Constants.KC_ACTION_PARAMETER, token.getActionConfig().asEncodedParameter());
        } catch (IOException ioe) {
            logger.error("Invalid credential configuration action", ioe);
            throw ErrorResponse.error("Invalid credential configuration action", Response.Status.BAD_REQUEST);
        }

        // verify user email as we know it is valid as this entry point would never have gotten here.
        user.setEmailVerified(true);

        String nextAction = AuthenticationManager.nextRequiredAction(tokenContext.getSession(), authSession, tokenContext.getRequest(), tokenContext.getEvent());
        return AuthenticationManager.redirectToRequiredActions(tokenContext.getSession(), tokenContext.getRealm(), authSession, tokenContext.getUriInfo(), nextAction);
    }

    @Override
    public boolean canUseTokenRepeatedly(CredentialOfferActionToken token, ActionTokenContext<CredentialOfferActionToken> tokenContext) {
        return false;
    }

    // TODO:mposolda polish this. Should this be moved to separate method used also by UserVerifiableCredentialResource verifications?
    // Verify OID4VCI action is valid for user
    protected TokenVerifier.Predicate<CredentialOfferActionToken> verifyCredentialOfferAction(ActionTokenContext<CredentialOfferActionToken> tokenContext) {
        RealmModel realm = tokenContext.getRealm();
        KeycloakSession session = tokenContext.getSession();
        UserModel user = tokenContext.getAuthenticationSession().getAuthenticatedUser();

        if (!Profile.isFeatureEnabled(Profile.Feature.OID4VC_VCI)) {
            throw ErrorResponse.error("Feature " + Profile.Feature.OID4VC_VCI.getKey() + " not enabled", Response.Status.BAD_REQUEST);
        }
        if (!realm.isVerifiableCredentialsEnabled()) {
            throw ErrorResponse.error("Verifiable credentials not enabled for the realm", Response.Status.BAD_REQUEST);
        }

        return TokenUtils.checkThat(t -> {
            CredentialOfferActionConfig credentialOfferConfig = t.getActionConfig();
                    if (credentialOfferConfig == null) {
                        throw ErrorResponse.error("Credential offer configuration missing", Response.Status.BAD_REQUEST);
                    }
                    if (credentialOfferConfig.getCredentialConfigurationId() == null) {
                        throw ErrorResponse.error("Credential configuration ID was missing", Response.Status.BAD_REQUEST);
                    }
                    String credentialConfigId = credentialOfferConfig.getCredentialConfigurationId();
                    CredentialScopeModel credScope = CredentialScopeUtils.findCredentialScopeModelByConfigurationId(
                            realm, () -> session.clientScopes().getClientScopesStream(realm), credentialConfigId);
                    if (credScope == null) {
                        throw ErrorResponse.error("Client scope was not found for specified credential configuration ID", Response.Status.BAD_REQUEST);
                    }
                    if (!OID4VCUtil.hasVerifiableCredential(session, user, credScope)) {
                        throw ErrorResponse.error("User does not have requested credential scope", Response.Status.BAD_REQUEST);
                    }
                    return true;
                },
                Errors.RESOLVE_REQUIRED_ACTIONS, Messages.INVALID_TOKEN_REQUIRED_ACTIONS
        );
    }
}
