/*
 * Copyright 2017 Red Hat, Inc. and/or its affiliates
 * and other contributors as indicated by the @author tags.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.keycloak.testsuite.crossdc;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Set;
import java.util.stream.Collectors;

import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.container.test.api.TargetsContainer;
import org.jboss.shrinkwrap.api.spec.WebArchive;
import org.junit.Before;
import org.junit.Test;
import org.keycloak.models.FederatedIdentityModel;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.RealmModel;
import org.keycloak.models.UserModel;
import org.keycloak.representations.idm.RealmRepresentation;
import org.keycloak.services.managers.RealmManager;
import org.keycloak.testsuite.AbstractTestRealmKeycloakTest;
import org.keycloak.testsuite.Assert;
import org.keycloak.testsuite.client.KeycloakTestingClient;
import org.keycloak.testsuite.runonserver.RunOnServerDeployment;

import static org.keycloak.testsuite.admin.AbstractAdminTest.loadJson;


/**
 * @author <a href="mailto:mposolda@redhat.com">Marek Posolda</a>
 */
public class UserStorageCrossDCTest extends AbstractAdminCrossDCTest {

    @Deployment(name = "dc0")
    @TargetsContainer(QUALIFIER_AUTH_SERVER_DC_0_NODE_1)
    public static WebArchive deployDC0() {
        return RunOnServerDeployment.create(
                BruteForceCrossDCTest.class,
                AbstractAdminCrossDCTest.class,
                AbstractCrossDCTest.class,
                AbstractTestRealmKeycloakTest.class,
                UserStorageCrossDCTest.class,
                KeycloakTestingClient.class
        );
    }

    @Deployment(name = "dc1")
    @TargetsContainer(QUALIFIER_AUTH_SERVER_DC_1_NODE_1)
    public static WebArchive deployDC1() {
        return RunOnServerDeployment.create(
                BruteForceCrossDCTest.class,
                AbstractAdminCrossDCTest.class,
                AbstractCrossDCTest.class,
                AbstractTestRealmKeycloakTest.class,
                UserStorageCrossDCTest.class,
                KeycloakTestingClient.class
        );
    }


    @Before
    public void reImportRealms() {
        log.infof("Re-importing realms");

        // Re-import realm in DB1
        KeycloakTestingClient testingClient1 = getTestingClientForStartedNodeInDc(0);
        testingClient1.server().run(session -> {

            reImportRealm(session);

        });

        // Re-import realm in DB2
        KeycloakTestingClient testingClient2 = getTestingClientForStartedNodeInDc(1);
        testingClient2.server().run(session -> {

            reImportRealm(session);

        });
    }

    private static final String SUMMIT_REALM = "summit";

    public static void reImportRealm(KeycloakSession session) {
        // Check if realm exists. Delete if yes
        RealmManager mgr = new RealmManager(session);
        RealmModel realm = mgr.getRealmByName(SUMMIT_REALM);
        if (realm != null) {
            mgr.removeRealm(realm);
        }

        String realmFile = System.getProperty("realm.file");

        // Import realm
        try {
            RealmRepresentation rep = loadJson(new FileInputStream(realmFile), RealmRepresentation.class);
            realm = mgr.importRealm(rep);
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }
    }


    @Test
    public void loginTest() throws Exception {
        enableDcOnLoadBalancer(DC.SECOND);

        //log.infof("Sleeping");
        //Thread.sleep(30000000);

        // TEST 1 - Remove user if exists, then add user on DC1, then lookup him by username, email, ID on DC2

        // Check if user exists and remove him afterwards
        KeycloakTestingClient testingClient1 = getTestingClientForStartedNodeInDc(0);
        testingClient1.server().run(session -> {
            RealmModel realm = session.realms().getRealmByName(SUMMIT_REALM);
            UserModel user = session.users().getUserByUsername("john@email.cz", realm);
            if (user != null) {
                session.users().removeUser(realm, user);
            }
        });

        // Add user with email in DC1
        testingClient1.server().run(session -> {
            RealmModel realm = session.realms().getRealmByName(SUMMIT_REALM);
            UserModel user = session.users().addUser(realm, "john@email.cz");
            user.setEnabled(true);
            user.setEmail("john@email.cz");
        });

        // Check user is available on DC2
        KeycloakTestingClient testingClient2 = getTestingClientForStartedNodeInDc(1);
        testingClient2.server().run(session -> {
            RealmModel realm = session.realms().getRealmByName(SUMMIT_REALM);

            // Assert lookup by email
            UserModel user = session.users().getUserByEmail("john@email.cz", realm);
            Assert.assertNotNull(user);
            Assert.assertEquals("john@email.cz", user.getUsername());
            Assert.assertEquals("john@email.cz", user.getEmail());
            Assert.assertTrue(user.isEnabled());

            // Assert lookup by username
            user = session.users().getUserByUsername("john@email.cz", realm);
            Assert.assertNotNull(user);
            Assert.assertEquals("john@email.cz", user.getUsername());
            Assert.assertEquals("john@email.cz", user.getEmail());
            Assert.assertTrue(user.isEnabled());

            // Assert lookup by id - bypass cache
            user = session.userStorageManager().getUserById(user.getId(), realm);
            Assert.assertNotNull(user);
            Assert.assertEquals("john@email.cz", user.getUsername());
            Assert.assertEquals("john@email.cz", user.getEmail());
            Assert.assertTrue(user.isEnabled());
        });


        // TEST 2 - Disable user on DC1 and check it's disabled on DC2. Re-enable user on DC1
        testingClient1.server().run(session -> {
            RealmModel realm = session.realms().getRealmByName(SUMMIT_REALM);
            UserModel user = session.users().getUserByUsername("john@email.cz", realm);
            user.setEnabled(false);
        });

        testingClient2.server().run(session -> {
            RealmModel realm = session.realms().getRealmByName(SUMMIT_REALM);

            // Assert lookup by email
            UserModel user = session.users().getUserByEmail("john@email.cz", realm);
            Assert.assertFalse(user.isEnabled());

            user.setEnabled(true);
        });

        // TEST 3 - Update user (firstName, lastName, email) on DC2 and check it's updated on DC1 too. Check lookup by username + email works correctly
        testingClient2.server().run(session -> {
            RealmModel realm = session.realms().getRealmByName(SUMMIT_REALM);

            // Assert lookup by email
            UserModel user = session.users().getUserByEmail("john@email.cz", realm);

            user.setFirstName("John");
            user.setLastName("Wood");
            user.setEmail("john-new@email.cz");
        });

        testingClient1.server().run(session -> {
            RealmModel realm = session.realms().getRealmByName(SUMMIT_REALM);

            UserModel user = session.users().getUserByUsername("john@email.cz", realm);
            Assert.assertNotNull(user);
            Assert.assertEquals("john@email.cz", user.getUsername());
            Assert.assertEquals("john-new@email.cz", user.getEmail());
            Assert.assertEquals("John", user.getFirstName());
            Assert.assertEquals("Wood", user.getLastName());
            Assert.assertTrue(user.isEnabled());

            // Lookup by old email should fail
            //Assert.assertNull(session.users().getUserByEmail("john@email.cz", realm));

            // Lookup by new email should pass
            user = session.users().getUserByEmail("john-new@email.cz", realm);
            Assert.assertNotNull(user);
            Assert.assertEquals("john@email.cz", user.getUsername());
            Assert.assertEquals("john-new@email.cz", user.getEmail());
            Assert.assertEquals("John", user.getFirstName());
            Assert.assertEquals("Wood", user.getLastName());
            Assert.assertTrue(user.isEnabled());
        });

        // TEST 4 - Add federation link on DC1 and assert federation link available on DC2. Also assert lookup by federation link works on DC2
        log.info("Before adding federation link");
        testingClient1.server().run(session -> {
            RealmModel realm = session.realms().getRealmByName(SUMMIT_REALM);
            UserModel user = session.users().getUserByUsername("john@email.cz", realm);

            FederatedIdentityModel socialLink = new FederatedIdentityModel("google", "mposolda-id", "mposolda@gmail.com");
            session.users().addFederatedIdentity(realm, user, socialLink);

        });

        log.info("Before reading federation link");

        testingClient2.server().run(session -> {
            RealmModel realm = session.realms().getRealmByName(SUMMIT_REALM);

            FederatedIdentityModel socialLink = new FederatedIdentityModel("google", "mposolda-id", "mposolda@gmail.com");
            UserModel user = session.users().getUserByFederatedIdentity(socialLink, realm);
            Assert.assertNotNull(user);
            Assert.assertEquals("john@email.cz", user.getUsername());
            Assert.assertEquals("john-new@email.cz", user.getEmail());

            FederatedIdentityModel socialLink2 = session.users().getFederatedIdentity(user, "google", realm);
            Assert.assertEquals(socialLink, socialLink2);

            Set<FederatedIdentityModel> fedIdentities = session.users().getFederatedIdentities(user, realm);
            Assert.assertEquals(1, fedIdentities.size());
            Assert.assertEquals(socialLink, fedIdentities.iterator().next());
        });


        // TEST 5 - Add another federation link on DC1 and assert federation link available on DC2. Also assert lookup by second federation link works on DC2
        testingClient1.server().run(session -> {
            RealmModel realm = session.realms().getRealmByName(SUMMIT_REALM);
            UserModel user = session.users().getUserByUsername("john@email.cz", realm);

            FederatedIdentityModel socialLink = new FederatedIdentityModel("developers", "mposolda-id-2", "mposolda@redhat.com");
            session.users().addFederatedIdentity(realm, user, socialLink);

        });

        testingClient2.server().run(session -> {
            RealmModel realm = session.realms().getRealmByName(SUMMIT_REALM);

            FederatedIdentityModel badLink = new FederatedIdentityModel("developers", "mposolda-id", "mposolda@gmail.com");
            Assert.assertNull(session.users().getUserByFederatedIdentity(badLink, realm));

            FederatedIdentityModel socialLink = new FederatedIdentityModel("developers", "mposolda-id-2", "mposolda@redhat.com");
            UserModel user = session.users().getUserByFederatedIdentity(socialLink, realm);
            Assert.assertNotNull(user);
            Assert.assertEquals("john@email.cz", user.getUsername());
            Assert.assertEquals("john-new@email.cz", user.getEmail());

            FederatedIdentityModel socialLink2 = session.users().getFederatedIdentity(user, "google", realm);
            Assert.assertEquals(new FederatedIdentityModel("google", "mposolda-id", "mposolda@gmail.com"), socialLink2);

            socialLink2 = session.users().getFederatedIdentity(user, "developers", realm);
            Assert.assertEquals(socialLink, socialLink2);

            Set<FederatedIdentityModel> fedIdentities = session.users().getFederatedIdentities(user, realm);
            Assert.assertEquals(2, fedIdentities.size());
            Set<String> linkProviders = fedIdentities.stream()
                    .map(fedLink -> fedLink.getIdentityProvider())
                    .collect(Collectors.toSet());
            Assert.assertEquals(2, linkProviders.size());
            Assert.assertTrue(linkProviders.contains("google"));
            Assert.assertTrue(linkProviders.contains("developers"));

        });

        // TEST 6 - Unlink federation link 1 on DC2 and assert it's not available on DC1. Just the federationLink1 will be available.
        testingClient2.server().run(session -> {
            RealmModel realm = session.realms().getRealmByName(SUMMIT_REALM);
            UserModel user = session.users().getUserByUsername("john@email.cz", realm);

            session.users().removeFederatedIdentity(realm, user, "developers");

        });

        testingClient1.server().run(session -> {
            RealmModel realm = session.realms().getRealmByName(SUMMIT_REALM);

            // Developers not available
            FederatedIdentityModel socialLink = new FederatedIdentityModel("developers", "mposolda-id-2", "mposolda@redhat.com");
            Assert.assertNull(session.users().getUserByFederatedIdentity(socialLink, realm));

            // Google still available
            socialLink = new FederatedIdentityModel("google", "mposolda-id", "mposolda@gmail.com");
            UserModel user = session.users().getUserByFederatedIdentity(socialLink, realm);
            Assert.assertNotNull(user);
            Assert.assertEquals("john@email.cz", user.getUsername());
            Assert.assertEquals("john-new@email.cz", user.getEmail());

            FederatedIdentityModel socialLink2 = session.users().getFederatedIdentity(user, "google", realm);
            Assert.assertEquals(socialLink, socialLink2);

            Set<FederatedIdentityModel> fedIdentities = session.users().getFederatedIdentities(user, realm);
            Assert.assertEquals(1, fedIdentities.size());
            Assert.assertEquals(socialLink, fedIdentities.iterator().next());

        });

        // ADVANCED TESTS

        // TEST 7 - CRUD passwords

        // TEST 8 - TOTP

        // TEST 9 - Searching, counting, pagination...

        // TEST 10 -- roles + groups. Doublecheck if we need them...

    }
}
