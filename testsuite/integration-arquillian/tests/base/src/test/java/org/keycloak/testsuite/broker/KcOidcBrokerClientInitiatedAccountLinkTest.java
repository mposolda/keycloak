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

import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.keycloak.admin.client.resource.RealmResource;
import org.keycloak.common.util.UriUtils;
import org.keycloak.models.Constants;
import org.keycloak.representations.idm.ClientRepresentation;
import org.keycloak.testsuite.Assert;
import org.keycloak.testsuite.AssertEvents;
import org.keycloak.testsuite.util.AccountHelper;
import org.keycloak.testsuite.util.oauth.OAuthClient;
import org.keycloak.utils.BrokerUtil;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

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

    @Test
    public void testAccountLinkingSuccess() throws Exception {
        // Login to "consumer" realm with password
        oauth.clientId("broker-app");
        loginPage.open(bc.consumerRealmName());
        loginPage.login("user1", "password");
        appPage.assertCurrent();
        String userSessionId = oauth.parseLoginResponse().getSessionState();

        // Check that user is not linked to the IDP
        assertFalse(AccountHelper.isIdentityProviderLinked(adminClient.realm(bc.consumerRealmName()), "user1", bc.getIDPAlias()));

        // Redirect to link account on behalf of "broker-app" and login to the IDP
        URI clientInitiatedAccountLinkUri = BrokerUtil.createClientInitiatedLinkURI("broker-app", oauth.getRedirectUri(), bc.getIDPAlias(), bc.consumerRealmName(), userSessionId, new URI(OAuthClient.AUTH_SERVER_ROOT)).getAccountLinkUri();
        driver.navigate().to(clientInitiatedAccountLinkUri.toString());
        loginPage.login(bc.getUserLogin(), bc.getUserPassword());

        grantPage.assertCurrent();
        grantPage.accept();

        appPage.assertCurrent();
        Assert.assertNull(getErrorParameter());

        // Check that user is linked to the IDP
        assertTrue(AccountHelper.isIdentityProviderLinked(adminClient.realm(bc.consumerRealmName()), "user1", bc.getIDPAlias()));
    }

    // TODO:mposolda Test incorrect hash parameter

    // TODO:mposolda Test user already linked to different account

    // TODO:mposolda Test consent rejected

    private String getErrorParameter() throws Exception {
        return UriUtils.decodeQueryString(new URL(driver.getCurrentUrl()).getQuery()).getFirst(Constants.IDP_CLIENT_LINK_ERROR_PARAM);
    }

}
