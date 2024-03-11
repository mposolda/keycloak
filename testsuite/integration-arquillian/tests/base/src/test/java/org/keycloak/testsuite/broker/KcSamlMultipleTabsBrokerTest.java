/*
 * Copyright 2024 Red Hat, Inc. and/or its affiliates
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

import org.hamcrest.Matchers;
import org.junit.Assert;
import org.junit.Rule;
import org.junit.Test;
import org.keycloak.OAuthErrorException;
import org.keycloak.models.Constants;
import org.keycloak.testsuite.updaters.RealmAttributeUpdater;
import org.keycloak.testsuite.util.BrowserTabUtil;
import org.keycloak.testsuite.util.InfinispanTestTimeServiceRule;
import org.keycloak.testsuite.util.OAuthClient;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.keycloak.testsuite.broker.BrokerTestTools.waitForPage;

/**
 * TODO: Cleanup this and maybe make some common superclass with KcOidcMultipleTabsBrokerTest?
 *
 * @author <a href="mailto:mposolda@redhat.com">Marek Posolda</a>
 */
public class KcSamlMultipleTabsBrokerTest extends AbstractInitializedBaseBrokerTest {

    @Rule
    public InfinispanTestTimeServiceRule ispnTestTimeService = new InfinispanTestTimeServiceRule(this);

    @Override
    protected BrokerConfiguration getBrokerConfiguration() {
        return KcSamlBrokerConfiguration.INSTANCE;
    }

    // Similar to MultipleTabsLoginTest.multipleTabsParallelLogin but with IDP brokering test involved
    @Test
    public void testAuthenticationExpiredWithMoreBrowserTabs_finishIdpLoginInTab1AfterExpiration() {
        try (BrowserTabUtil tabUtil = BrowserTabUtil.getInstanceAndSetEnv(driver)) {
            // Open login page in tab1 and click "login with IDP"
            oauth.clientId("broker-app");
            loginPage.open(bc.consumerRealmName());
            loginPage.clickSocial(bc.getIDPAlias());

            // Open login page in tab 2
            tabUtil.newTab(oauth.getLoginFormUrl());
            assertThat(tabUtil.getCountOfTabs(), Matchers.equalTo(2));
            Assert.assertTrue(loginPage.isCurrent("consumer"));
            getLogger().infof("URL in tab2: %s", driver.getCurrentUrl()); // TODO:mposolda remove or switch to debug?

            setTimeOffset(7200000);

            // Finish login in tab2
            loginPage.clickSocial(bc.getIDPAlias());
            Assert.assertEquals(loginPage.getError(), "Your login attempt timed out. Login will start from the beginning.");
            logInWithBroker(bc);

            waitForPage(driver, "update account information", false);
            updateAccountInformationPage.assertCurrent();
            Assert.assertTrue("We must be on consumer realm right now",
                    driver.getCurrentUrl().contains("/auth/realms/" + bc.consumerRealmName() + "/"));
            updateAccountInformationPage.updateAccountInformation(bc.getUserLogin(), bc.getUserEmail(), "Firstname", "Lastname");
            appPage.assertCurrent();

            // Login in provider realm will redirect back to consumer with "authentication expired" error. That one will redirect straight to client due the "clientData" in IdentityBrokerState
            tabUtil.closeTab(1);
            assertThat(tabUtil.getCountOfTabs(), Matchers.equalTo(1));
            loginPage.login(bc.getUserLogin(), bc.getUserPassword());
            // TODO:mposolda events?
            // Being on "You are already logged-in" now. No way to redirect to client due "clientData" are null in RelayState of SAML IDP
            loginPage.assertCurrent("consumer");
            Assert.assertEquals("You are already logged in.", loginPage.getInstruction());
        }
    }

    @Test
    public void testAuthenticationExpiredWithMoreBrowserTabs_finishIdpLoginInTab1AfterExpirationAfterRedirectBackToIDP() throws Exception {
        try (BrowserTabUtil tabUtil = BrowserTabUtil.getInstanceAndSetEnv(driver);
             AutoCloseable realmUpdater = new RealmAttributeUpdater(adminClient.realm(bc.consumerRealmName()))
                     .setAccessCodeLifespanLogin(7200)
                     .update()
        ) {
            // Open login page in tab1 and click "login with IDP"
            oauth.clientId("broker-app");
            loginPage.open(bc.consumerRealmName());
            loginPage.clickSocial(bc.getIDPAlias());

            // Open login page in tab 2
            tabUtil.newTab(oauth.getLoginFormUrl());
            assertThat(tabUtil.getCountOfTabs(), Matchers.equalTo(2));
            Assert.assertTrue(loginPage.isCurrent("consumer"));
            getLogger().infof("URL in tab2: %s", driver.getCurrentUrl()); // TODO:mposolda remove or switch to debug?

            setTimeOffset(3600);

            // Finish login in tab2
            logInWithBroker(bc);

            waitForPage(driver, "update account information", false);
            updateAccountInformationPage.assertCurrent();
            Assert.assertTrue("We must be on consumer realm right now",
                    driver.getCurrentUrl().contains("/auth/realms/" + bc.consumerRealmName() + "/"));
            updateAccountInformationPage.updateAccountInformation(bc.getUserLogin(), bc.getUserEmail(), "Firstname", "Lastname");
            appPage.assertCurrent();

            // Login in provider realm will redirect back to consumer with "authentication expired" error. That one will redirect straight to client due the "clientData" in IdentityBrokerState
            tabUtil.closeTab(1);
            assertThat(tabUtil.getCountOfTabs(), Matchers.equalTo(1));
            loginPage.login(bc.getUserLogin(), bc.getUserPassword());

            // We are redirected back to IDP where user is logged-in right away. Then being redirected back to consumer and then back to client right away. Authentication session on "consumer" realm is still valid, so no error here.
            // TODO:mposolda test events?
            appPage.assertCurrent();
            OAuthClient.AuthorizationEndpointResponse authzResponse = new OAuthClient.AuthorizationEndpointResponse(oauth);
            org.keycloak.testsuite.Assert.assertNotNull(authzResponse.getCode());
            org.keycloak.testsuite.Assert.assertNull(authzResponse.getError());
        }
    }
    
}
