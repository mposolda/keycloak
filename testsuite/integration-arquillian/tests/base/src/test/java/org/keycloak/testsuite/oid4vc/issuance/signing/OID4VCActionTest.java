package org.keycloak.testsuite.oid4vc.issuance.signing;

import org.apache.http.HttpStatus;
import org.jboss.arquillian.graphene.page.Page;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Rule;

import org.junit.Test;

import org.keycloak.admin.client.resource.UserResource;
import org.keycloak.events.Details;
import org.keycloak.events.EventType;
import org.keycloak.models.oid4vci.CredentialScopeModel;
import org.keycloak.protocol.oid4vc.issuance.OID4VCAuthorizationDetailResponse;
import org.keycloak.protocol.oid4vc.issuance.requiredactions.VerifiableCredentialOfferAction;
import org.keycloak.protocol.oid4vc.model.CredentialIssuer;
import org.keycloak.protocol.oid4vc.model.CredentialOfferURI;
import org.keycloak.protocol.oid4vc.model.CredentialResponse;
import org.keycloak.protocol.oid4vc.model.CredentialsOffer;
import org.keycloak.protocol.oid4vc.model.PreAuthorizedCode;
import org.keycloak.protocol.oidc.representations.OIDCConfigurationRepresentation;
import org.keycloak.representations.idm.ClientScopeRepresentation;
import org.keycloak.representations.idm.UserRepresentation;
import org.keycloak.testsuite.AssertEvents;
import org.keycloak.testsuite.admin.ApiUtil;
import org.keycloak.testsuite.pages.OID4VCCredentialOfferPage;
import org.keycloak.testsuite.util.oauth.AccessTokenResponse;
import org.keycloak.testsuite.util.oauth.OpenIDProviderConfigurationResponse;
import org.keycloak.testsuite.util.oauth.oid4vc.CredentialIssuerMetadataResponse;
import org.keycloak.testsuite.util.oauth.oid4vc.CredentialOfferResponse;
import org.keycloak.testsuite.util.oauth.oid4vc.CredentialOfferUriResponse;
import org.keycloak.testsuite.util.oauth.oid4vc.Oid4vcCredentialResponse;

import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import static org.keycloak.constants.OID4VCIConstants.VERIFIABLE_CREDENTIAL_OFFER_PROVIDER_ID;

// TODO:mposolda maybe test for more credential formats?
public class OID4VCActionTest extends OID4VCIssuerEndpointTest {

    @Rule
    public AssertEvents events = new AssertEvents(this);

    @Page
    private OID4VCCredentialOfferPage credentialOfferPage;

    private Oid4vcTestContext ctx;

    protected static class Oid4vcTestContext {
        CredentialIssuer credentialIssuer;
        OIDCConfigurationRepresentation openidConfig;
    }

    @Before
    public void prepareOid4vcTestContext() throws Exception {
        Oid4vcTestContext ctx = new Oid4vcTestContext();
        CredentialIssuerMetadataResponse issuerMetadataResponse = oauth.oid4vc().issuerMetadataRequest()
                .endpoint(getRealmMetadataPath(TEST_REALM_NAME))
                .send();
        assertEquals(HttpStatus.SC_OK, issuerMetadataResponse.getStatusCode());
        ctx.credentialIssuer = issuerMetadataResponse.getMetadata();

        OpenIDProviderConfigurationResponse openIDProviderConfigurationResponse = oauth.wellknownRequest()
                .url(ctx.credentialIssuer.getAuthorizationServers().get(0))
                .send();
        assertEquals(HttpStatus.SC_OK, openIDProviderConfigurationResponse.getStatusCode());
        ctx.openidConfig = openIDProviderConfigurationResponse.getOidcConfiguration();

        this.ctx = ctx;
    }


    protected String getCredentialFormat() {
        return "sd_jwt_vc";
    }


    protected ClientScopeRepresentation getCredentialClientScope() {
        return sdJwtTypeCredentialClientScope;
    }


    protected OID4VCAuthorizationDetailsFlowTestBase.Oid4vcTestContext prepareOid4vcTestContext(String token) throws Exception {
        OID4VCAuthorizationDetailsFlowTestBase.Oid4vcTestContext ctx = new OID4VCAuthorizationDetailsFlowTestBase.Oid4vcTestContext();

        String credentialConfigurationId = getCredentialClientScope().getAttributes().get(CredentialScopeModel.CONFIGURATION_ID);

        // Clear events before credential offer URI request
        events.clear();

        CredentialOfferUriResponse credentialOfferURIResponse = oauth.oid4vc().credentialOfferUriRequest()
                .endpoint(getCredentialOfferUriUrl(credentialConfigurationId))
                .bearerToken(token)
                .send();
        assertEquals(HttpStatus.SC_OK, credentialOfferURIResponse.getStatusCode());
        CredentialOfferURI credentialOfferURI = credentialOfferURIResponse.getCredentialOfferURI();

        // Verify CREDENTIAL_OFFER_REQUEST event was fired
        events.expect(EventType.VERIFIABLE_CREDENTIAL_OFFER_REQUEST)
                .client(client.getClientId())
                .user(AssertEvents.isUUID())
                .session(AssertEvents.isSessionId())
                .detail(Details.USERNAME, "john")
                .detail(Details.CREDENTIAL_TYPE, credentialConfigurationId)
                .assertEvent();

        // Clear events before credential offer request
        events.clear();

        CredentialOfferResponse credentialOfferResponse = oauth.oid4vc().credentialOfferRequest()
                .endpoint(credentialOfferURI.getIssuer() + "/" + credentialOfferURI.getNonce())
                .send();
        assertEquals(HttpStatus.SC_OK, credentialOfferResponse.getStatusCode());
        ctx.credentialsOffer = credentialOfferResponse.getCredentialsOffer();

        // Verify CREDENTIAL_OFFER_REQUEST event was fired (unauthenticated endpoint)
        events.expect(EventType.VERIFIABLE_CREDENTIAL_OFFER_REQUEST)
                .client(client.getClientId())
                .user(AssertEvents.isUUID())
                .session((String) null)
                .detail(Details.CREDENTIAL_TYPE, credentialConfigurationId)
                .assertEvent();

        CredentialIssuerMetadataResponse issuerMetadataResponse = oauth.oid4vc().issuerMetadataRequest()
                .endpoint(ctx.credentialsOffer.getIssuerMetadataUrl())
                .send();
        assertEquals(HttpStatus.SC_OK, issuerMetadataResponse.getStatusCode());
        ctx.credentialIssuer = issuerMetadataResponse.getMetadata();

        OpenIDProviderConfigurationResponse openIDProviderConfigurationResponse = oauth.wellknownRequest()
                .url(ctx.credentialIssuer.getAuthorizationServers().get(0))
                .send();
        assertEquals(HttpStatus.SC_OK, openIDProviderConfigurationResponse.getStatusCode());
        ctx.openidConfig = openIDProviderConfigurationResponse.getOidcConfiguration();

        return ctx;
    }

    private VerifiableCredentialOfferAction.CredentialOfferUserConfig requiredActionConfig() {
        VerifiableCredentialOfferAction.CredentialOfferUserConfig cfg = new VerifiableCredentialOfferAction.CredentialOfferUserConfig();
        cfg.setClientScopeName("sd-jwt-credential");
        return cfg;
    }

    @Test
    public void testRequiredActionFlow() throws Exception {
        // Add required action to user
        UserResource user = ApiUtil.findUserByUsernameId(testRealm(), "john");
        UserRepresentation userRep = user.toRepresentation();
        userRep.setRequiredActions(List.of(VERIFIABLE_CREDENTIAL_OFFER_PROVIDER_ID + ":" + requiredActionConfig().asConfigString()));
        user.update(userRep);

        // Login as user. Check required-action displayed
        oauth.client(client.getClientId(), "password");
        oauth.loginForm().doLogin("john", "password");

        credentialOfferPage.assertCurrent();
        String credentialOfferUri = credentialOfferPage.getCredentialOfferUri();

        // TODO:mposolda test event that credential-offer created now instead of events.clear();
        events.clear();

        // Refresh screen. Should be still same action as before and test that there are not new events
        driver.navigate().refresh();
        credentialOfferPage.assertCurrent();
        Assert.assertEquals(credentialOfferUri, credentialOfferPage.getCredentialOfferUri());
        events.assertEmpty();

        // Pre-authorized code flow with credential exchange
        CredentialOfferResponse credentialOfferResponse = oauth.oid4vc().credentialOfferRequest()
                .endpoint(credentialOfferUri)
                .send();
        assertEquals(HttpStatus.SC_OK, credentialOfferResponse.getStatusCode());
        CredentialsOffer credOffer = credentialOfferResponse.getCredentialsOffer();

        // Verify CREDENTIAL_OFFER_REQUEST event was fired (unauthenticated endpoint)
        events.expect(EventType.VERIFIABLE_CREDENTIAL_OFFER_REQUEST)
                .client((String) null)
                .user(AssertEvents.isUUID())
                .session((String) null)
                .detail(Details.CREDENTIAL_TYPE, "sd-jwt-credential-config-id")
                .assertEvent();

        PreAuthorizedCode preAuthorizedCode = credOffer.getGrants().getPreAuthorizedCode();
        AccessTokenResponse tokenResponse = oauth.oid4vc()
                .preAuthorizedCodeGrantRequest(preAuthorizedCode.getPreAuthorizedCode())
                .endpoint(ctx.openidConfig.getTokenEndpoint())
                .send();

        List<OID4VCAuthorizationDetailResponse> authDetailsResponse = tokenResponse.getOid4vcAuthorizationDetails();
        assertNotNull("authorization_details should be present in the response", authDetailsResponse);
        assertEquals(1, authDetailsResponse.size());
        assertNotNull("Credential identifiers should be present", authDetailsResponse.get(0).getCredentialIdentifiers());
        assertEquals(1, authDetailsResponse.get(0).getCredentialIdentifiers().size());
        String credentialIdentifier = authDetailsResponse.get(0).getCredentialIdentifiers().get(0);

        // TODO:mposolda test event from pre-authorized code flow and do not call "events.clear()" here
        events.clear();

        Oid4vcCredentialResponse credentialResponse = oauth.oid4vc().credentialRequest()
                .endpoint(ctx.credentialIssuer.getCredentialEndpoint())
                .bearerToken(tokenResponse.getAccessToken())
                .credentialIdentifier(credentialIdentifier)
                .send();

        assertEquals(HttpStatus.SC_OK, credentialResponse.getStatusCode());

        // Parse the credential response
        CredentialResponse parsedResponse = credentialResponse.getCredentialResponse();
        assertNotNull("Credential response should not be null", parsedResponse);
        assertNotNull("Credentials should be present", parsedResponse.getCredentials());
        assertEquals("Should have exactly one credential", 1, parsedResponse.getCredentials().size());

        // Verify CREDENTIAL_REQUEST event was fired
        events.expect(EventType.VERIFIABLE_CREDENTIAL_REQUEST)
                .client(client.getClientId())
                .user(AssertEvents.isUUID())
                .session(AssertEvents.isSessionId())
                .detail(Details.USERNAME, "john")
                .detail(Details.CREDENTIAL_TYPE, "sd-jwt-credential-config-id")
                .assertEvent();

        // Continue browser login. Should be fine
        credentialOfferPage.clickContinueButton();
        String code = oauth.parseLoginResponse().getCode();
        assertNotNull("Authorization code should not be null", code);

        // Check user does not have required action anymore
        userRep = user.toRepresentation();
        Assert.assertTrue("User not expected to have any required actions, but he has: " + userRep.getRequiredActions(), userRep.getRequiredActions().isEmpty());
    }

}
