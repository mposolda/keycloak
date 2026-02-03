package org.keycloak.protocol.oid4vc.issuance.requiredactions;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.zxing.WriterException;

import jakarta.ws.rs.core.Response;

import org.jboss.logging.Logger;

import org.keycloak.Config;
import org.keycloak.authentication.InitiatedActionSupport;
import org.keycloak.authentication.RequiredActionContext;
import org.keycloak.authentication.RequiredActionFactory;
import org.keycloak.authentication.RequiredActionProvider;
import org.keycloak.authentication.RequiredActionUserConfig;
import org.keycloak.common.util.SecretGenerator;
import org.keycloak.constants.OID4VCIConstants;
import org.keycloak.events.Details;
import org.keycloak.events.EventBuilder;
import org.keycloak.forms.login.LoginFormsProvider;
import org.keycloak.models.ClientScopeModel;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.KeycloakSessionFactory;
import org.keycloak.models.RealmModel;
import org.keycloak.models.oid4vci.CredentialScopeModel;
import org.keycloak.models.utils.KeycloakModelUtils;
import org.keycloak.protocol.oid4vc.OID4VCEnvironmentProviderFactory;
import org.keycloak.protocol.oid4vc.issuance.OID4VCIssuerWellKnownProvider;
import org.keycloak.protocol.oid4vc.issuance.OffsetTimeProvider;
import org.keycloak.protocol.oid4vc.issuance.TimeProvider;
import org.keycloak.protocol.oid4vc.issuance.credentialoffer.CredentialOfferStorage;
import org.keycloak.protocol.oid4vc.model.CredentialsOffer;
import org.keycloak.protocol.oid4vc.model.PreAuthorizedCode;
import org.keycloak.protocol.oid4vc.model.PreAuthorizedGrant;
import org.keycloak.provider.ProviderConfigProperty;
import org.keycloak.provider.ProviderConfigurationBuilder;
import org.keycloak.sessions.AuthenticationSessionModel;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import static org.keycloak.constants.OID4VCIConstants.CLIENT_SCOPE_NAME;
import static org.keycloak.constants.OID4VCIConstants.CREDENTIAL_OFFER_NONCE;
import static org.keycloak.constants.OID4VCIConstants.VERIFIABLE_CREDENTIAL_OFFER_PROVIDER_ID;
import static org.keycloak.protocol.oid4vc.issuance.OID4VCIssuerEndpoint.CODE_LIFESPAN_REALM_ATTRIBUTE_KEY;
import static org.keycloak.protocol.oid4vc.issuance.OID4VCIssuerEndpoint.DEFAULT_CODE_LIFESPAN_S;

public class VerifiableCredentialOfferAction implements RequiredActionProvider, RequiredActionFactory, OID4VCEnvironmentProviderFactory {

    private static final Logger logger = Logger.getLogger(VerifiableCredentialOfferAction.class);

    private final TimeProvider timeProvider;

    public VerifiableCredentialOfferAction() {
        this.timeProvider = new OffsetTimeProvider();
    }

    @Override
    public String getDisplayText() {
        return "Register Verifiable Credential Offer";
    }

    @Override
    public RequiredActionProvider create(KeycloakSession session) {
        return this;
    }

    @Override
    public void init(Config.Scope config) {
    }

    @Override
    public void postInit(KeycloakSessionFactory factory) {
    }

    @Override
    public String getId() {
        return VERIFIABLE_CREDENTIAL_OFFER_PROVIDER_ID;
    }

    @Override
    public void evaluateTriggers(RequiredActionContext context) {
        logger.infof("Evaluate triggers invoked for '%s'", context.getAction());
        // TODO:mposolda
    }

    @Override
    public void requiredActionChallenge(RequiredActionContext context) {
        CredentialOfferUserConfig userConfig = getUserConfig(context);
        if (userConfig == null) {
            throwError(String.format("No config available on required action '%s' for the user '%s' in the realm '%s'", context.getAction(), context.getUser().getUsername(), context.getRealm().getName()), null);
        }
        String userConfigString = userConfig.asConfigString();
        // TODO:mposolda debug or trace or remove
        logger.infof("Required action challenge invoked for provider '%s' and config '%s'", context.getAction(), userConfig.asConfigString());


        AuthenticationSessionModel authSession = context.getAuthenticationSession();
        String actionName = context.getAction();

        // This is to make sure that credentialOffer can be obtained only once per user required-action and there cannot be multiple credential offers created for single
        // required-action assignment. User should not be able to create multiple credential offers by retrieving same required-action in multiple different browsers
        boolean isRequiredActionOnUser = context.getUser().getRequiredActionsStream()
                .anyMatch(actionName::equals);
        if (isRequiredActionOnUser){
            context.getUser().removeRequiredAction(actionName);
            authSession.addRequiredAction(actionName);
        }

        String nonce = context.getAuthenticationSession().getAuthNote(CREDENTIAL_OFFER_NONCE);
        if (nonce == null) {
            CredentialOfferStorage.CredentialOfferState credOfferState = createCredentialsOffer(context);
            nonce = credOfferState.getNonce();
            context.getAuthenticationSession().setAuthNote(CREDENTIAL_OFFER_NONCE, credOfferState.getNonce());
        }

        LoginFormsProvider form = context.form();
        try {
            form.setAttribute("credentialOffer", new CredentialOfferBean(context.getSession(), nonce));
        } catch (WriterException | IOException ex) {
            String message = "Error when generating credential-offer QR code " + ex.getMessage();
            throwError(message, ex);
        }

        // TODO:mposolda should throw the "success" event now or would it be thrown by framework?


        Response response = form.createForm("oid4vc-credential-offer.ftl");
        context.challenge(response);
    }


    // TODO:mposolda should handle "get" or "create"
    private CredentialOfferStorage.CredentialOfferState createCredentialsOffer(RequiredActionContext context) {
        boolean preAuthorized = true; // TODO:mposolda Always true for now. Should be different in some cases?

        KeycloakSession session = context.getSession();
        RealmModel realm = context.getRealm();
        EventBuilder eventBuilder = context.getEvent();

        CredentialOfferUserConfig userConfig = getUserConfig(context);
        String clientScopeName = userConfig != null ? userConfig.getClientScopeName() : null;

        if (clientScopeName == null) {
            throwError(String.format("Client scope not configured in the realm '%s' and action of user '%s'.", realm.getName(), context.getUser().getUsername()), null);
        }

        ClientScopeModel clientScope = KeycloakModelUtils.getClientScopeByName(realm, clientScopeName);
        if (clientScope == null) {
            throwError(String.format("Client scope '%s' not found in the realm '%s'.", clientScopeName, realm.getName()), null);
        }

        if (!OID4VCIConstants.OID4VC_PROTOCOL.equals(clientScope.getProtocol())) {
            throwError(String.format("Client scope '%s' in the realm '%s' has incorrect protocol '%s'.", clientScopeName, realm.getName(), clientScope.getProtocol()), null);
        }

        String credentialConfigurationId = clientScope.getAttribute(CredentialScopeModel.CONFIGURATION_ID);
        if (credentialConfigurationId == null) {
            throwError(String.format("Credential configuration ID attribute not found on client scope '%s' in the realm '%s'.", clientScopeName, realm.getName()), null);
        }

        // TODO:mposolda should if code below for creating credential-offer should be externalized to some utility to re-use the similar code from OID4VCIssuerEndpoint.getCredentialOfferURI
        CredentialsOffer credOffer = new CredentialsOffer()
                .setCredentialIssuer(OID4VCIssuerWellKnownProvider.getIssuer(session.getContext()))
                .setCredentialConfigurationIds(List.of(credentialConfigurationId));

        int preAuthorizedCodeLifeSpan = Optional.ofNullable(realm.getAttribute(CODE_LIFESPAN_REALM_ATTRIBUTE_KEY))
                .map(Integer::valueOf)
                .orElse(DEFAULT_CODE_LIFESPAN_S);
        int expiration = timeProvider.currentTimeSeconds() + preAuthorizedCodeLifeSpan;
        CredentialOfferStorage.CredentialOfferState offerState = new CredentialOfferStorage.CredentialOfferState(credOffer, null, context.getUser().getId(), expiration, true);

        if (preAuthorized) {
            String code = "urn:oid4vci:code:" + SecretGenerator.getInstance().randomString(64);
            credOffer.setGrants(new PreAuthorizedGrant().setPreAuthorizedCode(
                    new PreAuthorizedCode().setPreAuthorizedCode(code)));
        }

        CredentialOfferStorage offerStorage = session.getProvider(CredentialOfferStorage.class);
        offerStorage.putOfferState(session, offerState);

        // TODO:mposolda should be eventually debug
        logger.infof("Stored credential offer state: [ids=%s, cid=%s, uid=%s, nonce=%s]",
                credOffer.getCredentialConfigurationIds(), offerState.getClientId(), offerState.getUserId(), offerState.getNonce());

        // TODO:mposolda this is probably not needed? In the REST API, it points to the clientSession of the "admin" user (which indeed is different than the one used during pre-authz flow)
        // Store the credential configuration IDs in a predictable location for token processing
        // This allows the authorization details processor to easily retrieve the configuration IDs
        // without having to search through all session notes or parse the full credential offer
//        String credentialConfigIdsJson = JsonSerialization.valueAsString(credOffer.getCredentialConfigurationIds());
//        clientSession.setNote(CREDENTIAL_CONFIGURATION_IDS_NOTE, credentialConfigIdsJson);
//        logger.debugf("Stored credential configuration IDs for token processing: %s", credentialConfigIdsJson);

        // Add event details
        eventBuilder.detail(Details.VERIFIABLE_CREDENTIAL_PRE_AUTHORIZED, String.valueOf(preAuthorized));
        if (offerState.getUserId() != null) {
            eventBuilder.detail(Details.VERIFIABLE_CREDENTIAL_TARGET_USER_ID, offerState.getUserId());
        }

        return offerState;
    }

    // TODO:mposolda probably proper error response?
    private void throwError(String message, Exception cause) {
        if (cause == null) {
            logger.warn(message);
        } else {
            logger.warn(message, cause);
        }
        throw new IllegalStateException(message);
    }

    @Override
    public void processAction(RequiredActionContext context) {
        logger.infof("Process invoked for: " + context.getAction());
        context.success(); //
    }

    @Override
    public void close() {
    }

    @Override
    public InitiatedActionSupport initiatedActionSupport() {
        // TODO:mposolda
        return RequiredActionProvider.super.initiatedActionSupport();
    }

    @Override
    public void initiatedActionCanceled(KeycloakSession session, AuthenticationSessionModel authSession) {
        // TODO:mposolda
        RequiredActionProvider.super.initiatedActionCanceled(session, authSession);
    }

    @Override
    public List<ProviderConfigProperty> getConfigMetadataPerUser(RealmModel realm) {
        List<String> oid4vciClientScopes = realm.getClientScopesStream()
                .filter(clientScope -> OID4VCIConstants.OID4VC_PROTOCOL.equals(clientScope.getName()))
                .map(ClientScopeModel::getName)
                .toList();
        return ProviderConfigurationBuilder.create()
                .property()
                .name(CLIENT_SCOPE_NAME)
                .label("Client scope")
                .helpText("OID4VCI client scope. The credential offer would be created for the corresponding OID4VCI credential linked with this client scope.")
                .type(ProviderConfigProperty.STRING_TYPE)
                .options(oid4vciClientScopes.toArray(new String[0]))
                .add()
                .build();
    }

    @Override
    public Class<? extends RequiredActionUserConfig> getRequiredActionUserConfigClass(RealmModel realm) {
        return CredentialOfferUserConfig.class;
    }

    public static class CredentialOfferUserConfig extends RequiredActionUserConfig {

        @JsonProperty(CLIENT_SCOPE_NAME)
        private String clientScopeName;

        public String getClientScopeName() {
            return clientScopeName;
        }

        public void setClientScopeName(String clientScopeName) {
            this.clientScopeName = clientScopeName;
        }
    }

    private static CredentialOfferUserConfig getUserConfig(RequiredActionContext ctx) {
        if (ctx.getUserConfig() == null) {
            return null;
        } else {
            return (CredentialOfferUserConfig) ctx.getUserConfig();
        }
    }
}
