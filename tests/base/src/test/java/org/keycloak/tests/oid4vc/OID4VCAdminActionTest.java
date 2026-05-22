package org.keycloak.tests.oid4vc;

import jakarta.mail.internet.MimeMessage;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;

import org.junit.jupiter.api.Test;

import org.keycloak.admin.client.resource.UserResource;
import org.keycloak.events.admin.OperationType;
import org.keycloak.events.admin.ResourceType;
import org.keycloak.models.Constants;
import org.keycloak.models.UserModel;
import org.keycloak.representations.idm.UserRepresentation;
import org.keycloak.representations.idm.oid4vc.CredentialOfferActionConfig;
import org.keycloak.testframework.annotations.InjectAdminEvents;
import org.keycloak.testframework.annotations.InjectUser;
import org.keycloak.testframework.annotations.KeycloakIntegrationTest;
import org.keycloak.testframework.events.AdminEventAssertion;
import org.keycloak.testframework.events.AdminEvents;
import org.keycloak.testframework.mail.MailServer;
import org.keycloak.testframework.mail.annotations.InjectMailServer;
import org.keycloak.testframework.realm.ManagedUser;
import org.keycloak.testframework.realm.UserBuilder;
import org.keycloak.testframework.ui.annotations.InjectPage;
import org.keycloak.testframework.ui.page.OID4VCCredentialOfferPage;
import org.keycloak.tests.utils.Assert;
import org.keycloak.tests.utils.MailUtils;
import org.keycloak.tests.utils.admin.AdminEventPaths;

import java.io.IOException;
import java.util.LinkedList;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import static org.keycloak.constants.OID4VCIConstants.VERIFIABLE_CREDENTIAL_OFFER_PROVIDER_ID;

//Test for sending credential-offer by the administrator to the user
@KeycloakIntegrationTest(config = OID4VCIssuerTestBase.VCTestServerConfig.class)
public class OID4VCAdminActionTest extends OID4VCIssuerTestBase {

    @InjectPage
    OID4VCCredentialOfferPage credentialOfferPage;

    @InjectUser(config = OID4VCActionTest.OID4VCTestUserConfig.class)
    ManagedUser user;

    @InjectMailServer
    MailServer mailServer;

    @InjectAdminEvents
    AdminEvents adminEvents;

    OID4VCTestContext ctx;

    @BeforeEach
    void beforeEach() {
        ctx = new OID4VCTestContext(client, minimalJwtTypeCredentialScope);
        user.admin().logout();
    }

    @Test
    public void testAdminCredentialOfferEmailSuccess() throws Exception {
        adminEvents.clear(); // TODO:mposolda do I need this?

        CredentialOfferActionConfig actionConfig = getActionConfig(minimalJwtTypeCredentialConfigurationIdName, null, false);
        user.admin().verifiableCredentials().sendCredentialOffer(null, null, null, actionConfig);

        AdminEventAssertion.assertEvent(adminEvents.poll(), OperationType.ACTION, AdminEventPaths.userVerifiableCredentialsPath(user.getId()) + "/send-credential-offer", null, ResourceType.USER);

        Assertions.assertEquals(1, mailServer.getReceivedMessages().length);

        MimeMessage message = mailServer.getReceivedMessages()[0];

        MailUtils.EmailBody body = MailUtils.getBody(message);

        assertTrue(body.getText().contains("Your administrator has just informed you that in your Test account you can claim verifiable credential"));
        assertTrue(body.getText().contains("vc-with-minimal-config-id"));
        assertTrue(body.getText().contains("This link will expire within 12 hours"));

        String link = MailUtils.getPasswordResetEmailLink(body);

        driver.open(link);
//
//        proceedPage.assertCurrent();
//        assertThat(proceedPage.getInfo(), Matchers.containsString("Update Password"));
//        proceedPage.clickProceedLink();
//        passwordUpdatePage.assertCurrent();
//
//        passwordUpdatePage.changePassword("new-pass", "new-pass");
//
//        assertThat(driver.getCurrentUrl(), Matchers.containsString("client_id=" + Constants.ACCOUNT_MANAGEMENT_CLIENT_ID));
//
//        assertEquals("Your account has been updated.", infoPage.getInfo());
//
//        driver.open(link);
//
//        errorPage.assertCurrent();
//        assertEquals("Action expired. Please continue with login now.", errorPage.getError());
    }

    private CredentialOfferActionConfig getActionConfig(String credentialConfigId, String clientId, boolean preAuthorized) {
        CredentialOfferActionConfig cfg = new CredentialOfferActionConfig();
        cfg.setCredentialConfigurationId(credentialConfigId);
        cfg.setPreAuthorized(preAuthorized);
        cfg.setClientId(clientId);
        return cfg;
    }
}
