package org.keycloak.protocol.oid4vc.issuance.requiredactions;

import org.jboss.logging.Logger;

import org.keycloak.Config;
import org.keycloak.authentication.InitiatedActionSupport;
import org.keycloak.authentication.RequiredActionContext;
import org.keycloak.authentication.RequiredActionFactory;
import org.keycloak.authentication.RequiredActionProvider;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.KeycloakSessionFactory;
import org.keycloak.protocol.oid4vc.OID4VCEnvironmentProviderFactory;
import org.keycloak.sessions.AuthenticationSessionModel;

import static org.keycloak.constants.OID4VCIConstants.VERIFIABLE_CREDENTIAL_OFFER_PROVIDER_ID;

public class VerifiableCredentialOfferAction implements RequiredActionProvider, RequiredActionFactory, OID4VCEnvironmentProviderFactory {

    private static final Logger logger = Logger.getLogger(VerifiableCredentialOfferAction.class);

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
        logger.infof("Evaluate triggers invoked for '%s' and model '%s'" + context.getAction(), context.getRequiredActionModel().getName());
        // TODO:mposolda
    }

    @Override
    public void requiredActionChallenge(RequiredActionContext context) {
        logger.infof("Required action challenge invoked for: " + context.getAction(), context.getRequiredActionModel().getName());
        // TODO:mposolda
    }

    @Override
    public void processAction(RequiredActionContext context) {
        logger.infof("Process invoked for: " + context.getAction());
        // TODO:mposolda not sure if "processAction" makes sense for this impl...
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
}
