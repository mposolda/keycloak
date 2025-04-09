/*
 * Copyright 2025 Red Hat, Inc. and/or its affiliates
 *  and other contributors as indicated by the @author tags.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

package org.keycloak.testsuite.broker;

import java.net.URI;
import java.net.URL;
import java.util.List;

import jakarta.ws.rs.core.Response;
import org.hamcrest.Matchers;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.keycloak.admin.client.resource.RealmResource;
import org.keycloak.authentication.RequiredActionContext;
import org.keycloak.broker.provider.IdpLinkAction;
import org.keycloak.common.util.MultivaluedHashMap;
import org.keycloak.common.util.UriUtils;
import org.keycloak.events.Details;
import org.keycloak.events.Errors;
import org.keycloak.events.EventType;
import org.keycloak.models.Constants;
import org.keycloak.representations.idm.ClientRepresentation;
import org.keycloak.representations.idm.UserRepresentation;
import org.keycloak.testsuite.Assert;
import org.keycloak.testsuite.AssertEvents;
import org.keycloak.testsuite.util.AccountHelper;
import org.keycloak.testsuite.util.oauth.OAuthClient;
import org.keycloak.utils.BrokerUtil;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.keycloak.testsuite.broker.BrokerTestConstants.IDP_OIDC_ALIAS;

/**
 * Test for client-initiated-account linking of the custom application
 *
 * @author <a href="mailto:mposolda@redhat.com">Marek Posolda</a>
 */
public class KcOidcBrokerClientInitiatedAccountLinkTest extends AbstractInitializedBaseBrokerTest {

    private static final BrokerConfiguration BROKER_CONFIG_INSTANCE = new KcOidcBrokerConfiguration() {

        @Override
        public List<ClientRepresentation> createProviderClients() {
            List<ClientRepresentation> providerClients = super.createProviderClients();
            providerClients.get(0).setConsentRequired(true);
            return providerClients;
        }
    };

    @Rule
    public AssertEvents events = new AssertEvents(this);

    @Override
    protected BrokerConfiguration getBrokerConfiguration() {
        return BROKER_CONFIG_INSTANCE;
    }

    @Before
    public void recreateConsumerUser() {
        RealmResource providerRealmResource = realmsResouce().realm(bc.providerRealmName());

        String consumerUserID1 = createUser(bc.consumerRealmName(), "user1", "password", "User1", "Last", "user1@keycloak.org",
                user -> user.setEmailVerified(true));
        String consumerUserID2 = createUser(bc.consumerRealmName(), "user2", "password", "User2", "Last", "user2@keycloak.org",
                user -> user.setEmailVerified(true));
        getCleanup(bc.consumerRealmName()).addUserId(consumerUserID1);
    }

    // Test deprecated mechanism for client-initiated account linking
    @Test
    public void testAccountLinkingSuccess_legacyClientInitiatedAccountLinking() throws Exception {
        String userSessionId = loginToConsumer();

        // Redirect to link account on behalf of "broker-app" and login to the IDP
        URI clientInitiatedAccountLinkUri = BrokerUtil.createClientInitiatedLinkURI("broker-app", oauth.getRedirectUri(), bc.getIDPAlias(), bc.consumerRealmName(), userSessionId, new URI(OAuthClient.AUTH_SERVER_ROOT)).getAccountLinkUri();
        driver.navigate().to(clientInitiatedAccountLinkUri.toString());
        loginPage.login(bc.getUserLogin(), bc.getUserPassword());

        grantPage.assertCurrent();
        grantPage.accept();

        appPage.assertCurrent();
        assertKcActionParams(null, null, null);

        // Check that user is linked to the IDP
        assertTrue(AccountHelper.isIdentityProviderLinked(adminClient.realm(bc.consumerRealmName()), "user1", bc.getIDPAlias()));
    }

    @Test
    public void testAccountLinkingSuccess() throws Exception {
        loginToConsumer();

        // Redirect to link account on behalf of "broker-app" and login to the IDP
        String kcAction = getKcActionParamForLinkIdp(bc.getIDPAlias());
        oauth.loginForm().kcAction(kcAction).open();
        loginPage.login(bc.getUserLogin(), bc.getUserPassword());

        events.clear();
        grantPage.assertCurrent();
        grantPage.accept();

        appPage.assertCurrent();
        assertKcActionParams(IdpLinkAction.PROVIDER_ID, RequiredActionContext.KcActionStatus.SUCCESS.name().toLowerCase(), null);

        // Check that user is linked to the IDP
        assertTrue(AccountHelper.isIdentityProviderLinked(adminClient.realm(bc.consumerRealmName()), "user1", bc.getIDPAlias()));

        assertEvents((providerRealmId, providerUserId, consumerRealmId, consumerUserId, consumerUsername) -> {
            assertProviderEventsSuccess(providerRealmId, providerUserId);
            assertConsumerSuccessLinkEvents(consumerRealmId, consumerUserId, consumerUsername);
        });
    }

    @Test
    public void testAccountLinkingConsentRejected() throws Exception {
        loginToConsumer();

        // Redirect to link account on behalf of "broker-app" and login to the IDP
        String kcAction = getKcActionParamForLinkIdp(bc.getIDPAlias());
        oauth.loginForm().kcAction(kcAction).open();
        loginPage.login(bc.getUserLogin(), bc.getUserPassword());

        events.clear();
        grantPage.assertCurrent();
        grantPage.cancel();

        appPage.assertCurrent();
        assertKcActionParams(IdpLinkAction.PROVIDER_ID, RequiredActionContext.KcActionStatus.CANCELLED.name().toLowerCase(), null);

        // Check that user is not linked to the IDP
        assertFalse(AccountHelper.isIdentityProviderLinked(adminClient.realm(bc.consumerRealmName()), "user1", bc.getIDPAlias()));

        assertEvents((providerRealmId, providerUserId, consumerRealmId, consumerUserId, consumerUsername) -> {
            // Provider login - rejected consent screen
            events.expect(EventType.LOGIN_ERROR)
                    .realm(providerRealmId)
                    .user(providerUserId)
                    .client(bc.getIDPClientIdInProviderRealm())
                    .session((String)null)
                    .detail(Details.USERNAME, bc.getUserLogin())
                    .error(Errors.REJECTED_BY_USER)
                    .assertEvent();

            // Consumer - rejected provider consent screen event propagated
            events.expect(EventType.FEDERATED_IDENTITY_LINK_ERROR)
                    .realm(consumerRealmId)
                    .client("broker-app")
                    .user(consumerUserId)
                    .detail(Details.USERNAME, consumerUsername)
                    .detail(Details.IDENTITY_PROVIDER, IDP_OIDC_ALIAS)
                    .error(Errors.REJECTED_BY_USER)
                    .assertEvent();

            events.expect(EventType.LOGIN)
                    .realm(consumerRealmId)
                    .client("broker-app")
                    .user(consumerUserId)
                    .session(Matchers.any(String.class))
                    .detail(Details.USERNAME, consumerUsername)
                    .assertEvent();

            events.assertEmpty();
        });
    }


    @Test
    public void testAccountLinkingDifferentUserLinked() throws Exception {
        // Link IDP to user "user2"
        Response response = AccountHelper.addIdentityProvider(adminClient.realm(bc.consumerRealmName()), "user2", adminClient.realm(bc.providerRealmName()), bc.getUserLogin(), bc.getIDPAlias());
        Assert.assertEquals(204, response.getStatus());

        // Linking the user "user1" to same IDP should fail
        loginToConsumer();

        String kcAction = getKcActionParamForLinkIdp(bc.getIDPAlias());
        oauth.loginForm().kcAction(kcAction).open();
        loginPage.login(bc.getUserLogin(), bc.getUserPassword());

        events.clear();
        grantPage.assertCurrent();
        grantPage.accept();

        appPage.assertCurrent();
        assertKcActionParams(IdpLinkAction.PROVIDER_ID, RequiredActionContext.KcActionStatus.ERROR.name().toLowerCase(), Errors.IDENTITY_PROVIDER_ALREADY_LINKED);

        // Check that user is not linked to the IDP
        assertFalse(AccountHelper.isIdentityProviderLinked(adminClient.realm(bc.consumerRealmName()), "user1", bc.getIDPAlias()));

        assertEvents((providerRealmId, providerUserId, consumerRealmId, consumerUserId, consumerUsername) -> {
            assertProviderEventsSuccess(providerRealmId, providerUserId);

            String user2Id = adminClient.realm(bc.consumerRealmName()).users().search("user2").iterator().next().getId();

            events.expect(EventType.FEDERATED_IDENTITY_LINK_ERROR)
                    .realm(consumerRealmId)
                    .client("broker-app")
                    .user(consumerUserId)
                    .detail(Details.USERNAME, consumerUsername)
                    .detail(Details.IDENTITY_PROVIDER, IDP_OIDC_ALIAS)
                    .error(Errors.IDENTITY_PROVIDER_ALREADY_LINKED)
                    .assertEvent();

            events.expect(EventType.LOGIN)
                    .realm(consumerRealmId)
                    .client("broker-app")
                    .user(consumerUserId)
                    .session(Matchers.any(String.class))
                    .detail(Details.USERNAME, consumerUsername)
                    .assertEvent();

            events.assertEmpty();
        });
    }

    // TODO:mposolda Test user does not have roles
    @Test
    public void testAccountLinkingDifferentUserLinked() throws Exception {

    }

    // TODO:mposolda test rejected provider consent during regular authentication (or in different test?)

    private String loginToConsumer() {
        // Login to "consumer" realm with password
        oauth.clientId("broker-app");
        loginPage.open(bc.consumerRealmName());
        loginPage.login("user1", "password");
        appPage.assertCurrent();
        String userSessionId = oauth.parseLoginResponse().getSessionState();

        // Check that user is not linked to the IDP
        assertFalse(AccountHelper.isIdentityProviderLinked(adminClient.realm(bc.consumerRealmName()), "user1", bc.getIDPAlias()));

        return userSessionId;
    }

    private static String getKcActionParamForLinkIdp(String providerAlias) {
        return IdpLinkAction.PROVIDER_ID + ":" + providerAlias;
    }

    private void assertKcActionParams(String expectedKcAction, String expectedKcActionStatus, String expectedKcActionError) throws Exception {
        MultivaluedHashMap<String, String> params = UriUtils.decodeQueryString(new URL(driver.getCurrentUrl()).getQuery());
        Assert.assertEquals(expectedKcAction, params.getFirst(Constants.KC_ACTION));
        Assert.assertEquals(expectedKcActionStatus, params.getFirst(Constants.KC_ACTION_STATUS));
        Assert.assertEquals(expectedKcActionError, params.getFirst(Constants.KC_ACTION_ERROR_DETAILS));
    }

    @FunctionalInterface
    public interface EventDataConsumer {
        void accept(String providerRealmId, String providerUserId, String consumerRealmId, String consumerUserId, String consumerUsername);
    }

    private void assertEvents(EventDataConsumer assertImpl) {
        RealmResource providerRealm = adminClient.realm(bc.providerRealmName());
        String providerRealmId = providerRealm.toRepresentation().getId();
        UserRepresentation providerUser = providerRealm.users().search(bc.getUserLogin()).iterator().next();
        String providerUserId = providerUser.getId();

        String username = "user1";
        RealmResource consumerRealm = adminClient.realm(bc.consumerRealmName());
        String consumerRealmId = consumerRealm.toRepresentation().getId();
        UserRepresentation consumerUser = consumerRealm.users().search(username).iterator().next();
        String consumerUserId = consumerUser.getId();

        assertImpl.accept(providerRealmId, providerUserId, consumerRealmId, consumerUserId, username);
    }

    private void assertProviderEventsSuccess(String providerRealmId, String providerUserId) {
        events.expect(EventType.LOGIN)
                .realm(providerRealmId)
                .user(providerUserId)
                .client(bc.getIDPClientIdInProviderRealm())
                .session(Matchers.any(String.class))
                .detail(Details.USERNAME, bc.getUserLogin())
                .assertEvent();

        events.expect(EventType.CODE_TO_TOKEN)
                .session(Matchers.any(String.class))
                .realm(providerRealmId)
                .user(providerUserId)
                .client(bc.getIDPClientIdInProviderRealm())
                .assertEvent();

        events.expect(EventType.USER_INFO_REQUEST)
                .session(Matchers.any(String.class))
                .realm(providerRealmId)
                .user(providerUserId)
                .client(bc.getIDPClientIdInProviderRealm())
                .assertEvent();
    }

    private void assertConsumerSuccessLinkEvents(String consumerRealmId, String consumerUserId, String username) {
        events.expect(EventType.FEDERATED_IDENTITY_LINK)
                .realm(consumerRealmId)
                .client("broker-app")
                .user(consumerUserId)
                .detail(Details.USERNAME, username)
                .detail(Details.IDENTITY_PROVIDER, IDP_OIDC_ALIAS)
                .detail(Details.IDENTITY_PROVIDER_USERNAME, bc.getUserLogin())
                .detail(Details.IDENTITY_PROVIDER_BROKER_SESSION_ID,  Matchers.startsWith(bc.getIDPAlias()))
                .assertEvent();

        events.expect(EventType.LOGIN)
                .realm(consumerRealmId)
                .client("broker-app")
                .user(consumerUserId)
                .session(Matchers.any(String.class))
                .detail(Details.USERNAME, username)
                .assertEvent();

        events.assertEmpty();
    }


}
