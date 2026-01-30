package org.keycloak.testsuite.oid4vc.issuance.model;

import org.junit.Assert;
import org.junit.Test;

import org.keycloak.common.util.Time;
import org.keycloak.protocol.oid4vc.issuance.OID4VCAuthorizationDetailResponse;
import org.keycloak.protocol.oid4vc.issuance.OID4VCIssuerWellKnownProvider;
import org.keycloak.protocol.oid4vc.issuance.credentialoffer.CredentialOfferStorage;
import org.keycloak.protocol.oid4vc.model.CredentialsOffer;
import org.keycloak.protocol.oid4vc.model.PreAuthorizedCode;
import org.keycloak.protocol.oid4vc.model.PreAuthorizedGrant;
import org.keycloak.representations.idm.RealmRepresentation;
import org.keycloak.testsuite.oid4vc.issuance.signing.OID4VCIssuerEndpointTest;
import org.keycloak.testsuite.oid4vc.issuance.signing.OID4VCTest;

import java.util.List;

public class OID4VCCredentialOfferStorageTest extends OID4VCTest {

    @Override
    public void configureTestRealm(RealmRepresentation testRealm) {
        testRealm.setVerifiableCredentialsEnabled(true);
    }

    @Test
    public void testCredentialOfferStorageLookup() {
        // Create credential-offer
        getTestingClient()
                .server(TEST_REALM_NAME)
                .run(session -> {
                    CredentialsOffer credOffer = new CredentialsOffer()
                            .setCredentialIssuer("https://simple")
                            .setGrants(new PreAuthorizedGrant().setPreAuthorizedCode(new PreAuthorizedCode().setPreAuthorizedCode("test-code")))
                            .setCredentialConfigurationIds(List.of(jwtTypeCredentialConfigurationIdName));

                    CredentialOfferStorage offerStorage = session.getProvider(CredentialOfferStorage.class);
                    CredentialOfferStorage.CredentialOfferState offerState = new CredentialOfferStorage.CredentialOfferState(credOffer, null, "john", Time.currentTime() + 600);

                    OID4VCAuthorizationDetailResponse authDetailsResponse = new OID4VCAuthorizationDetailResponse();
                    authDetailsResponse.setCredentialIdentifiers(List.of("123"));
                    offerState.setAuthorizationDetails(authDetailsResponse);

                    offerStorage.putOfferState(session, offerState);
                });

        // Test lookup by various things
        getTestingClient()
                .server(TEST_REALM_NAME)
                .run(session -> {
                    /// Test lookup by preAuthorized code works
                    CredentialOfferStorage offerStorage = session.getProvider(CredentialOfferStorage.class);
                    CredentialOfferStorage.CredentialOfferState offerState = offerStorage.findOfferStateByCode(session, "test-code");
                    Assert.assertNotNull(offerState);

                    // Test lookup works by nonce
                    String nonce = offerState.getNonce();
                    offerState = offerStorage.findOfferStateByNonce(session, nonce);
                    Assert.assertNotNull(offerState);
                    Assert.assertEquals("test-code", offerState.getPreAuthorizedCode().get());

                    // Test lookup by credentialIdentifiers works
                    offerState = offerStorage.findOfferStateByCredentialId(session, "123");
                    Assert.assertNotNull(offerState);
                    Assert.assertEquals("test-code", offerState.getPreAuthorizedCode().get());
                    Assert.assertEquals(nonce, offerState.getNonce());

                    // Test unknown code does not find anything
                    offerState = offerStorage.findOfferStateByCode(session, "unknown-code");
                    Assert.assertNull(offerState);
                });
    }

    @Test
    public void testCredentialOfferStorageLookupByUser() {
        // Create few credential-offers
        getTestingClient()
                .server(TEST_REALM_NAME)
                .run(session -> {
                    CredentialsOffer credOffer = new CredentialsOffer()
                            .setCredentialIssuer("https://simple")
                            .setGrants(new PreAuthorizedGrant().setPreAuthorizedCode(new PreAuthorizedCode().setPreAuthorizedCode("test-code")))
                            .setCredentialConfigurationIds(List.of(jwtTypeCredentialConfigurationIdName));

                    CredentialOfferStorage offerStorage = session.getProvider(CredentialOfferStorage.class);
                    CredentialOfferStorage.CredentialOfferState offerState = new CredentialOfferStorage.CredentialOfferState(credOffer, null, "john", Time.currentTime() + 600);

                    OID4VCAuthorizationDetailResponse authDetailsResponse = new OID4VCAuthorizationDetailResponse();
                    authDetailsResponse.setCredentialIdentifiers(List.of("123"));
                    offerState.setAuthorizationDetails(authDetailsResponse);

                    offerStorage.putOfferState(session, offerState);
                });


    }


}
