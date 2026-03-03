/*
 * Copyright 2016 Red Hat, Inc. and/or its affiliates
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
package org.keycloak.tests.oauth;

import jakarta.ws.rs.client.Entity;
import jakarta.ws.rs.client.WebTarget;

import org.keycloak.OAuthErrorException;
import org.keycloak.admin.client.resource.ClientResource;
import org.keycloak.common.enums.SslRequired;
import org.keycloak.protocol.oidc.OIDCLoginProtocol;

import org.keycloak.protocol.oidc.OIDCLoginProtocolFactory;
import org.keycloak.representations.idm.ClientRepresentation;
import org.keycloak.representations.idm.ClientScopeRepresentation;

import org.keycloak.testframework.annotations.InjectClient;
import org.keycloak.testframework.realm.ManagedClient;

import org.openqa.selenium.Cookie;
import jakarta.ws.rs.core.Form;
import jakarta.ws.rs.core.HttpHeaders;
import jakarta.ws.rs.core.Response;

import org.apache.http.client.methods.CloseableHttpResponse;

import org.hamcrest.MatcherAssert;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;

import org.keycloak.OAuth2Constants;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.resource.RealmResource;
import org.keycloak.admin.client.resource.RealmsResource;
import org.keycloak.common.util.Time;
import org.keycloak.connections.infinispan.InfinispanConnectionProvider;
import org.keycloak.cookie.CookieType;
import org.keycloak.events.Details;
import org.keycloak.events.Errors;
import org.keycloak.events.EventType;
import org.keycloak.jose.jws.JWSInput;
import org.keycloak.jose.jws.JWSInputException;
import org.keycloak.models.AccountRoles;
import org.keycloak.models.Constants;
import org.keycloak.models.utils.KeycloakModelUtils;
import org.keycloak.protocol.oidc.OIDCConfigAttributes;
import org.keycloak.representations.AccessToken;
import org.keycloak.representations.IDToken;
import org.keycloak.representations.RefreshToken;
import org.keycloak.representations.idm.EventRepresentation;
import org.keycloak.representations.idm.RealmEventsConfigRepresentation;
import org.keycloak.representations.idm.RealmRepresentation;
import org.keycloak.representations.idm.RoleRepresentation;
import org.keycloak.testframework.annotations.InjectAdminClient;
import org.keycloak.testframework.annotations.InjectEvents;
import org.keycloak.testframework.annotations.InjectRealm;
import org.keycloak.testframework.annotations.InjectUser;
import org.keycloak.testframework.annotations.KeycloakIntegrationTest;
import org.keycloak.testframework.events.EventAssertion;
import org.keycloak.testframework.events.Events;
import org.keycloak.testframework.oauth.OAuthClient;
import org.keycloak.testframework.oauth.annotations.InjectOAuthClient;
import org.keycloak.testframework.realm.ClientConfigBuilder;
import org.keycloak.testframework.realm.ManagedRealm;
import org.keycloak.testframework.realm.ManagedUser;
import org.keycloak.testframework.realm.RealmConfig;
import org.keycloak.testframework.realm.RealmConfigBuilder;
import org.keycloak.testframework.realm.UserConfigBuilder;
import org.keycloak.testframework.remote.runonserver.InjectRunOnServer;
import org.keycloak.testframework.remote.runonserver.RunOnServerClient;
import org.keycloak.testframework.remote.timeoffset.InjectTimeOffSet;
import org.keycloak.testframework.remote.timeoffset.TimeOffSet;
import org.keycloak.testframework.ui.annotations.InjectPage;
import org.keycloak.testframework.ui.annotations.InjectWebDriver;
import org.keycloak.testframework.ui.page.LoginPage;
import org.keycloak.testframework.ui.webdriver.ManagedWebDriver;
import org.keycloak.tests.common.TestRealmUserConfig;
import org.keycloak.tests.utils.Assert;
import org.keycloak.testsuite.util.AccountHelper;
import org.keycloak.testsuite.util.oauth.AbstractHttpPostRequest;
import org.keycloak.testsuite.util.oauth.AbstractOAuthClient;
import org.keycloak.testsuite.util.oauth.AccessTokenResponse;
import org.keycloak.util.BasicAuthHelper;

import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.concurrent.TimeUnit;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.allOf;
import static org.hamcrest.Matchers.greaterThan;
import static org.hamcrest.Matchers.greaterThanOrEqualTo;
import static org.hamcrest.Matchers.lessThanOrEqualTo;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import static org.keycloak.connections.infinispan.InfinispanConnectionProvider.CLIENT_SESSION_CACHE_NAME;
import static org.keycloak.connections.infinispan.InfinispanConnectionProvider.USER_SESSION_CACHE_NAME;
import static org.keycloak.events.Errors.INVALID_REQUEST;

/**
 * @author <a href="mailto:sthorger@redhat.com">Stian Thorgersen</a>
 */
@KeycloakIntegrationTest
public class RefreshTokenTest {

    public static final int ALLOWED_CLOCK_SKEW = 3;

    @InjectOAuthClient
    OAuthClient oauth;

    @InjectAdminClient(mode = InjectAdminClient.Mode.BOOTSTRAP)
    Keycloak adminClient;

    @InjectRunOnServer
    RunOnServerClient runOnServer;

    @InjectWebDriver
    ManagedWebDriver driver;

    @InjectEvents
    Events events;

    @InjectTimeOffSet
    TimeOffSet timeOffSet;

    @InjectPage
    LoginPage loginPage;

    @InjectRealm(config = RefreshTokenTestRealmConfig.class)
    protected ManagedRealm realm;

    @InjectUser(config = TestRealmUserConfig.class)
    protected ManagedUser user;

    @InjectClient(attachTo = "test-app")
    ManagedClient managedClient;

    public static class RefreshTokenTestRealmConfig implements RealmConfig {

        @Override
        public RealmConfigBuilder configure(RealmConfigBuilder realm) {
            realm.addClient("service-account-app")
                    .serviceAccountsEnabled(true)
                    .attribute(OIDCConfigAttributes.USE_REFRESH_TOKEN_FOR_CLIENT_CREDENTIALS_GRANT, "true")
                    .secret("secret");
            realm.addRole("user");
            return realm;
        }
    }

    @BeforeEach
    public void before() {
        enableRefreshTokenEvents(realm);
        AccountHelper.logout(realm.admin(), user.getUsername());
    }

    public static void enableRefreshTokenEvents(ManagedRealm realm) {
        RealmEventsConfigRepresentation realmEventsConfig = realm.admin().getRealmEventsConfig();
        List<String> enabledEventTypes = realmEventsConfig.getEnabledEventTypes();
        if (!enabledEventTypes.contains(EventType.REFRESH_TOKEN.name())) {
            enabledEventTypes.addAll(List.of(EventType.REFRESH_TOKEN.name(), EventType.REFRESH_TOKEN_ERROR.name()));
            realm.admin().updateRealmEventsConfig(realmEventsConfig);
        }
    }

    // TODO:mposolda remove this
//    @Before
//    public void clientConfiguration() {
//        ClientManager.realm(adminClient.realm("test")).clientId("test-app").directAccessGrant(true);
//    }
//    @Override
//    public void addTestRealms(List<RealmRepresentation> testRealms) {
//
//        RealmBuilder realm = RealmBuilder.edit(realmRepresentation)
//                .testEventListener();
//
//        testRealms.add(realm.build());
//
//    }

    /**
     * KEYCLOAK-547
     *
     */
    @Test
    public void nullRefreshToken() {
        class RefreshRequestWithoutRefreshTokenParameter extends AbstractHttpPostRequest<RefreshRequestWithoutRefreshTokenParameter, AccessTokenResponse> {

            RefreshRequestWithoutRefreshTokenParameter(AbstractOAuthClient<?> client) {
                super(client);
            }

            @Override
            protected String getEndpoint() {
                return client.getEndpoints().getToken();
            }

            protected void initRequest() {
                parameter(OAuth2Constants.GRANT_TYPE, OAuth2Constants.REFRESH_TOKEN);
                scope(false);
            }

            @Override
            protected AccessTokenResponse toResponse(CloseableHttpResponse response) throws IOException {
                return new AccessTokenResponse(response);
            }

        }
        AccessTokenResponse response = new RefreshRequestWithoutRefreshTokenParameter(oauth).send();
        assertEquals(400, response.getStatusCode());
        assertEquals("invalid_request", response.getError());
        events.clear();
    }

    @Test
    public void invalidRefreshToken() {
        AccessTokenResponse response = oauth.doRefreshTokenRequest("invalid");
        assertEquals(400, response.getStatusCode());
        assertEquals("invalid_grant", response.getError());
        events.clear();
    }

    // TODO:mposolda remove
    private void pause() {
        try {
            System.err.println("Sleeping");
            Thread.sleep(10000000);
        } catch (InterruptedException ie) {
            throw new RuntimeException(ie);
        }
    }

    @Test
    public void refreshTokenStructure() {
        oauth.loginForm().nonce("123456").doLogin("test-user@localhost", "password");

        EventRepresentation loginEvent = events.poll();
        EventAssertion.assertSuccess(loginEvent)
                .type(EventType.LOGIN);

        String code = oauth.parseLoginResponse().getCode();

        AccessTokenResponse tokenResponse = oauth.doAccessTokenRequest(code);
        AccessToken token = oauth.verifyToken(tokenResponse.getAccessToken());
        assertNull(token.getNonce());

        IDToken idToken = oauth.verifyToken(tokenResponse.getIdToken());
        assertEquals("123456", idToken.getNonce());

        String refreshTokenString = tokenResponse.getRefreshToken();
        RefreshToken refreshToken = oauth.parseRefreshToken(refreshTokenString);

        EventAssertion.assertSuccess(events.poll())
                .type(EventType.CODE_TO_TOKEN);

        assertNotNull(refreshTokenString);

        assertNull(refreshToken.getNonce());
        assertNull(refreshToken.getRealmAccess(), "RealmAccess should be null for RefreshTokens");
        assertTrue(refreshToken.getResourceAccess().isEmpty(), "ResourceAccess should be null for RefreshTokens");
    }

    @Test
    public void refreshTokenRequest() {
        RoleRepresentation userRole = this.realm.admin().roles().get("user").toRepresentation();
        this.user.admin().roles().realmLevel().add(List.of(userRole));

        oauth.loginForm().nonce("123456").doLogin("test-user@localhost", "password");

        EventRepresentation loginEvent = events.poll();
        EventAssertion.assertSuccess(loginEvent)
                .userId(user.getId())
                .clientId("test-app")
                .hasSessionId()
                .type(EventType.LOGIN);

        String sessionId = loginEvent.getSessionId();

        String code = oauth.parseLoginResponse().getCode();

        AccessTokenResponse tokenResponse = oauth.doAccessTokenRequest(code);
        AccessToken token = oauth.verifyToken(tokenResponse.getAccessToken());
        assertNull(token.getNonce());

        IDToken idToken = oauth.verifyToken(tokenResponse.getIdToken(), IDToken.class);
        assertEquals("123456", idToken.getNonce());

        assertNotNull(tokenResponse.getRefreshToken());
        RefreshToken refreshToken = oauth.parseRefreshToken(tokenResponse.getRefreshToken());

        EventRepresentation tokenEvent = events.poll();
        EventAssertion.assertSuccess(tokenEvent)
                .userId(user.getId())
                .sessionId(sessionId)
                .isCodeId()
                .clientId("test-app")
                .type(EventType.CODE_TO_TOKEN);

        assertEquals("Bearer", tokenResponse.getTokenType());

        assertThat(token.getExp() - Time.currentTime(), allOf(greaterThanOrEqualTo(200L), lessThanOrEqualTo(350L)));
        long actual = refreshToken.getExp() - Time.currentTime();
        assertThat(actual, allOf(greaterThanOrEqualTo(1799L - ALLOWED_CLOCK_SKEW), lessThanOrEqualTo(1800L + ALLOWED_CLOCK_SKEW)));

        assertEquals(sessionId, refreshToken.getSessionId());
        assertNull(refreshToken.getNonce());

        AccessTokenResponse response = oauth.doRefreshTokenRequest(tokenResponse.getRefreshToken());
        AccessToken refreshedToken = oauth.verifyToken(response.getAccessToken());
        RefreshToken refreshedRefreshToken = oauth.parseRefreshToken(response.getRefreshToken());

        assertEquals(200, response.getStatusCode());

        assertEquals(sessionId, refreshedToken.getSessionId());
        assertEquals(sessionId, refreshedRefreshToken.getSessionId());

        assertThat(response.getExpiresIn(), allOf(greaterThanOrEqualTo(250), lessThanOrEqualTo(300)));
        assertThat(refreshedToken.getExp() - Time.currentTime(), allOf(greaterThanOrEqualTo(250L - ALLOWED_CLOCK_SKEW), lessThanOrEqualTo(300L + ALLOWED_CLOCK_SKEW)));

        assertThat(refreshedToken.getExp() - token.getExp(), allOf(greaterThanOrEqualTo(0L), lessThanOrEqualTo(10L)));
        assertThat(refreshedRefreshToken.getExp() - refreshToken.getExp(), allOf(greaterThanOrEqualTo(0L), lessThanOrEqualTo(10L)));

        // "test-app" should not be an audience in the refresh token
        assertEquals("test-app", refreshedRefreshToken.getIssuedFor());
        assertFalse(refreshedRefreshToken.hasAudience("test-app"));

        assertNotEquals(token.getId(), refreshedToken.getId());
        assertNotEquals(refreshToken.getId(), refreshedRefreshToken.getId());

        assertEquals("Bearer", response.getTokenType());

        Assert.assertEquals(user.getId(), refreshedToken.getSubject());
        assertNotEquals("test-user@localhost", refreshedToken.getSubject());

        assertTrue(refreshedToken.getRealmAccess().isUserInRole("user"));

        assertTrue(refreshedToken.getResourceAccess(Constants.ACCOUNT_MANAGEMENT_CLIENT_ID).isUserInRole(AccountRoles.MANAGE_ACCOUNT));

        EventRepresentation refreshEvent = events.poll();
        EventAssertion.assertSuccess(refreshEvent)
                .userId(user.getId())
                .sessionId(sessionId)
                .details(Details.REFRESH_TOKEN_ID, refreshToken.getId())
                .clientId("test-app")
                .type(EventType.REFRESH_TOKEN);
        assertNotEquals(tokenEvent.getDetails().get(Details.TOKEN_ID), refreshEvent.getDetails().get(Details.TOKEN_ID));
        assertNotEquals(tokenEvent.getDetails().get(Details.REFRESH_TOKEN_ID), refreshEvent.getDetails().get(Details.UPDATED_REFRESH_TOKEN_ID));

        assertNull(refreshedToken.getNonce());

        idToken =  oauth.verifyToken(response.getIdToken(), IDToken.class);
        assertNull(idToken.getNonce()); // null after refresh as recommended by spec

        assertNotNull(response.getRefreshToken());
        refreshToken = oauth.parseRefreshToken(response.getRefreshToken());
        assertEquals(sessionId, refreshToken.getSessionId());
        assertNull(refreshToken.getNonce());
    }

    @Test
    public void refreshTokenWithDifferentIssuer() {
        oauth.doLogin("test-user@localhost", "password");

        EventAssertion.assertSuccess(events.poll())
                .type(EventType.LOGIN);

        String code = oauth.parseLoginResponse().getCode();

        AccessTokenResponse response = oauth.doAccessTokenRequest(code);
        String refreshTokenString = response.getRefreshToken();

        EventAssertion.assertSuccess(events.poll())
                .type(EventType.CODE_TO_TOKEN);

        String invalidIssuerRefreshToken = encodeRefreshToken(refreshTokenString);
        invalidIssuerRefreshToken = invalidIssuerRefreshToken.replaceAll("\"", ""); // TODO:mposolda strange why is this needed? Maybe error in testingClient?
        response = oauth.doRefreshTokenRequest(invalidIssuerRefreshToken);

        Assert.assertEquals(400, response.getStatusCode());
        Assert.assertEquals("invalid_grant", response.getError());
        assertThat(response.getErrorDescription(), Matchers.startsWith("Invalid token issuer."));
        EventAssertion.assertError(events.poll())
                .type(EventType.REFRESH_TOKEN_ERROR)
                .error(Errors.INVALID_TOKEN);
    }

    private String encodeRefreshToken(String encodedRefreshToken) {
        return runOnServer.fetchString(session -> {
            try {
                JWSInput input = new JWSInput(encodedRefreshToken);
                RefreshToken refreshToken = input.readJsonContent(RefreshToken.class);

                refreshToken.issuer("https://fake-issuer");
                String encodedToken = session.tokens().encode(refreshToken);
                return encodedToken;
            } catch (JWSInputException ioe) {
                throw new RuntimeException("Failed to encode token: " + encodedRefreshToken);
            }
        });
    }


    @Test
    public void refreshingTokenLoadsSessionIntoCache() {
        oauth.doLogin("test-user@localhost", "password");

        String code = oauth.parseLoginResponse().getCode();

        AccessTokenResponse response = oauth.doAccessTokenRequest(code);
        String refreshTokenString = response.getRefreshToken();

        // Test when neither client nor user session is in the cache
        runOnServer.run(session -> {
            session.getProvider(InfinispanConnectionProvider.class).getCache(USER_SESSION_CACHE_NAME).clear();
            session.getProvider(InfinispanConnectionProvider.class).getCache(CLIENT_SESSION_CACHE_NAME).clear();
        });

        response = oauth.doRefreshTokenRequest(refreshTokenString);
        Assert.assertEquals(200, response.getStatusCode());

        runOnServer.run(session -> {
            MatcherAssert.assertThat(session.getProvider(InfinispanConnectionProvider.class).getCache(USER_SESSION_CACHE_NAME).size(),
                    greaterThan(0));
            MatcherAssert.assertThat(session.getProvider(InfinispanConnectionProvider.class).getCache(CLIENT_SESSION_CACHE_NAME).size(),
                    greaterThan(0));
        });

        // Test is only the client session is missing
        runOnServer.run(session -> session.getProvider(InfinispanConnectionProvider.class).getCache(CLIENT_SESSION_CACHE_NAME).clear());

        response = oauth.doRefreshTokenRequest(refreshTokenString);
        Assert.assertEquals(200, response.getStatusCode());

        runOnServer.run(session -> {
            MatcherAssert.assertThat(session.getProvider(InfinispanConnectionProvider.class).getCache(USER_SESSION_CACHE_NAME).size(),
                    greaterThan(0));
            MatcherAssert.assertThat(session.getProvider(InfinispanConnectionProvider.class).getCache(CLIENT_SESSION_CACHE_NAME).size(),
                    greaterThan(0));
        });

    }

    @Test
    public void refreshTokenWithAccessToken() {
        oauth.doLogin("test-user@localhost", "password");

        String code = oauth.parseLoginResponse().getCode();

        AccessTokenResponse tokenResponse = oauth.doAccessTokenRequest(code);
        String accessTokenString = tokenResponse.getAccessToken();

        AccessTokenResponse response = oauth.doRefreshTokenRequest(accessTokenString);
        Assert.assertNotEquals(200, response.getStatusCode());
    }

    @Test
    public void testDoNotResolveOfflineUserSessionIfAuthenticationSessionIsInvalidated() {
        oauth.scope("offline_access");
        try {
            testDoNotResolveUserSessionIfAuthenticationSessionIsInvalidated();
        } finally {
            oauth.scope(null);
        }
    }

    @Test
    public void testDoNotResolveUserSessionIfAuthenticationSessionIsInvalidated() {
        String realmName = KeycloakModelUtils.generateId();
        RealmsResource realmsResource = adminClient.realms();
        RealmRepresentation realm = new RealmRepresentation();
        realm.setRealm(realmName);
        realm.setEnabled(true);
        realmsResource.create(realm);
        RealmResource realmResource = realmsResource.realm(realmName);
        realm = realmResource.toRepresentation();

        String origRealm = oauth.getRealm();
        String origClientId = oauth.getClientId();
        String origClientSecret = oauth.config().getClientSecret();

        try {
            realm.setSsoSessionMaxLifespan((int) TimeUnit.MINUTES.toSeconds(2));
            realm.setSsoSessionIdleTimeout((int) TimeUnit.MINUTES.toSeconds(2));
            realm.setAccessTokenLifespan((int) TimeUnit.MINUTES.toSeconds(1));
            realmResource.update(realm);

            realmResource.clients().create(ClientConfigBuilder.create()
                    .clientId("public-client")
                    .redirectUris("*")
                    .publicClient(true)
                    .build()).close();

            realmResource.users()
                    .create(UserConfigBuilder.create().username("alice")
                            .firstName("alice")
                            .lastName("alice")
                            .email("alice@keycloak.org")
                            .password("alice").roles("offline_access").build()).close();
            realmResource.users()
                    .create(UserConfigBuilder.create().username("bob")
                            .firstName("bob")
                            .lastName("bob")
                            .email("bob@keycloak.org")
                            .password("bob").roles("offline_access").build()).close();

            oauth.realm(realmName);
            oauth.client("public-client");

            oauth.doLogin("alice", "alice");
            String aliceCode = oauth.parseLoginResponse().getCode();
            AccessTokenResponse tokenResponse = oauth.doAccessTokenRequest(aliceCode);
            AccessToken aliceAt = oauth.verifyToken(tokenResponse.getAccessToken());

            timeOffSet.set((int) TimeUnit.MINUTES.toSeconds(2));

            oauth.doLogin("bob", "bob");
            String bobCode = oauth.parseLoginResponse().getCode();

            assertNotEquals(aliceCode, bobCode);

            tokenResponse = oauth.doAccessTokenRequest(bobCode);
            String refreshToken = tokenResponse.getRefreshToken();
            tokenResponse = oauth.doRefreshTokenRequest(refreshToken);
            AccessToken bobAt = oauth.verifyToken(tokenResponse.getAccessToken());

            assertNotEquals(aliceAt.getSessionId(), bobAt.getSessionId());
            assertEquals("bob", bobAt.getPreferredUsername());
        } finally {
            timeOffSet.set(0);
            realmResource.remove();
            oauth.realm(origRealm);
            oauth.client(origClientId, origClientSecret);
        }
    }

    @Test
    public void testTimeoutWhenReUsingPreviousAuthenticationSession() {
        String realmName = KeycloakModelUtils.generateId();
        RealmsResource realmsResource = adminClient.realms();
        realmsResource.create(RealmConfigBuilder.create().name(realmName).build());
        RealmResource realmResource = realmsResource.realm(realmName);
        RealmRepresentation realm = realmResource.toRepresentation();

        String origRealm = oauth.getRealm();
        String origClientId = oauth.getClientId();
        String origClientSecret = oauth.config().getClientSecret();

        try {
            realm.setSsoSessionMaxLifespan((int) TimeUnit.MINUTES.toSeconds(2));
            realm.setSsoSessionIdleTimeout((int) TimeUnit.MINUTES.toSeconds(2));
            realm.setAccessTokenLifespan((int) TimeUnit.MINUTES.toSeconds(1));
            realmResource.update(realm);

            realmResource.clients().create(ClientConfigBuilder.create()
                    .clientId("public-client")
                    .redirectUris("*")
                    .publicClient(true)
                    .build()).close();

            realmResource.users()
                    .create(UserConfigBuilder.create().username("alice")
                            .firstName("alice")
                            .lastName("alice")
                            .email("alice@keycloak.org")
                            .password("alice").roles("offline_access").build()).close();
            realmResource.users()
                    .create(UserConfigBuilder.create().username("bob")
                            .firstName("bob")
                            .lastName("bob")
                            .email("bob@keycloak.org")
                            .password("bob").roles("offline_access").build()).close();

            oauth.realm(realmName);
            oauth.client("public-client");

            oauth.openLoginForm();

            Cookie authSessionCookie = driver.cookies().get(CookieType.AUTH_SESSION_ID.getName());

            oauth.fillLoginForm("alice", "alice");

            oauth.parseLoginResponse().getCode();
            driver.cookies().deleteAll();

            // Enforce login page to be able to delete cookies here (as appPage is on different domain)
            oauth.loginForm().prompt(OIDCLoginProtocol.PROMPT_VALUE_LOGIN).open();
            driver.cookies().deleteAll();

            oauth.openLoginForm();
            driver.cookies().add(authSessionCookie);
            oauth.fillLoginForm("bob", "bob");
            Assert.assertEquals("Your login attempt timed out. Login will start from the beginning.", loginPage.getError());
        } finally {
            timeOffSet.set(0);

            realmResource.remove();
            oauth.realm(origRealm);
            oauth.client(origClientId, origClientSecret);
        }
    }

    /**
     * KEYCLOAK-15437
     */
    @Test
    public void tokenRefreshWithAccessTokenShouldReturnIdTokenWithAccessTokenHash() {
        oauth.doLogin("test-user@localhost", "password");

        String code = oauth.parseLoginResponse().getCode();

        AccessTokenResponse tokenResponse = oauth.doAccessTokenRequest(code);
        String refreshToken = tokenResponse.getRefreshToken();

        AccessTokenResponse response = oauth.doRefreshTokenRequest(refreshToken);
        Assert.assertEquals(200, response.getStatusCode());
        IDToken idToken = oauth.verifyToken(response.getIdToken());
        Assert.assertNotNull("AccessTokenHash should not be null after token refresh", idToken.getAccessTokenHash());
    }

    public static void assertScopes(String expectedScope, String receivedScope) {
        Collection<String> expectedScopes = Arrays.stream(expectedScope.split(" ")).sorted().toList();
        Collection<String> receivedScopes = Arrays.stream(receivedScope.split(" ")).sorted().toList();
        assertTrue(expectedScopes.containsAll(receivedScopes) && receivedScopes.containsAll(expectedScopes),
                "Not matched. Expected scopes: " + expectedScopes + ", Received scopes: " + receivedScopes);
    }

    @Test
    public void refreshTokenReuseTokenWithoutRefreshTokensRevokedWithLessScopes() {
        //add phone,address as optional scope and request them
        ClientScopeRepresentation phoneScope = findClientScopeByName("phone");
        ClientScopeRepresentation addressScope = findClientScopeByName("address");

        managedClient.admin().addOptionalClientScope(phoneScope.getId());
        managedClient.admin().addOptionalClientScope(addressScope.getId());

        try {
            oauth.doLogin("test-user@localhost", "password");

            oauth.parseLoginResponse().getCode();

            String optionalScope = "phone address";
            oauth.scope(optionalScope);
            AccessTokenResponse response1 = oauth.doPasswordGrantRequest("test-user@localhost", "password");
            RefreshToken refreshToken1 = oauth.parseRefreshToken(response1.getRefreshToken());
            assertScopes("openid basic email roles service_account web-origins acr profile address phone",  refreshToken1.getScope());

            timeOffSet.set(2);

            String scope = "email phone";
            oauth.scope(scope);
            AccessTokenResponse response2 = oauth.doRefreshTokenRequest(response1.getRefreshToken());
            assertEquals(200, response2.getStatusCode());
            assertScopes("openid email phone profile",  response2.getScope());
            RefreshToken refreshToken2 = oauth.parseRefreshToken(response2.getRefreshToken());
            assertNotNull(refreshToken2);
            assertScopes("openid acr roles phone address email profile basic service_account web-origins",  refreshToken2.getScope());

        } finally {
            timeOffSet.set(0);
            oauth.scope(null);
            managedClient.admin().removeOptionalClientScope(phoneScope.getId());
            managedClient.admin().removeOptionalClientScope(addressScope.getId());
        }
    }

    @Test
    public void refreshTokenReuseTokenScopeParameterNotInRefreshToken() {
        try {
            //scope parameter consists scope that is not part of scope refresh token => error thrown
            oauth.doLogin("test-user@localhost", "password");

            String code = oauth.parseLoginResponse().getCode();

            AccessTokenResponse response1 = oauth.doAccessTokenRequest(code);
            RefreshToken refreshToken1 = oauth.parseRefreshToken(response1.getRefreshToken());
            assertScopes("openid basic email roles service_account web-origins acr profile",  refreshToken1.getScope());

            timeOffSet.set(2);

            String scope = "openid email ssh_public_key";
            oauth.scope(scope);
            AccessTokenResponse response2 = oauth.doRefreshTokenRequest(response1.getRefreshToken());
            assertEquals(400, response2.getStatusCode());
            assertEquals(OAuthErrorException.INVALID_SCOPE, response2.getError());

        } finally {
            timeOffSet.set(0);
            oauth.scope(null);
        }
    }

    private ClientScopeRepresentation findClientScopeByName(String name) {
        return realm.admin().clientScopes().findAll().stream()
                .filter((ClientScopeRepresentation clientScope) -> name.equals(clientScope.getName()))
                .findFirst().get();
    }

    @Test
    public void refreshWithOptionalClientScopeWithIncludeInTokenScopeDisabled() {
        //set roles client scope as optional
        ClientScopeRepresentation rolesScope = findClientScopeByName(OIDCLoginProtocolFactory.ROLES_SCOPE);
        managedClient.admin().removeDefaultClientScope(rolesScope.getId());
        managedClient.admin().addOptionalClientScope(rolesScope.getId());

        try {
            oauth.scope("roles");
            oauth.doLogin("test-user@localhost", "password");

            String code = oauth.parseLoginResponse().getCode();

            AccessTokenResponse response = oauth.doAccessTokenRequest(code);
            AccessToken accessToken = oauth.verifyToken(response.getAccessToken());
            RefreshToken refreshToken = oauth.parseRefreshToken(response.getRefreshToken());

            assertScopes("openid email profile",  accessToken.getScope());
            assertScopes("openid basic email roles service_account web-origins acr profile",  refreshToken.getScope());

            Assert.assertNotNull(accessToken.getRealmAccess());
            Assert.assertNotNull(accessToken.getResourceAccess());

            oauth.scope(null);

            response = oauth.doRefreshTokenRequest(response.getRefreshToken());

            accessToken = oauth.verifyToken(response.getAccessToken());
            refreshToken = oauth.parseRefreshToken(response.getRefreshToken());

            assertScopes("openid email profile",  accessToken.getScope());
            assertScopes("openid basic email roles service_account web-origins acr profile",  refreshToken.getScope());

            Assert.assertNotNull(accessToken.getRealmAccess());
            Assert.assertNotNull(accessToken.getResourceAccess());

        } finally {
            managedClient.admin().removeOptionalClientScope(rolesScope.getId());
            managedClient.admin().addDefaultClientScope(rolesScope.getId());
        }
    }

    private void processExpectedValidRefresh(String sessionId, RefreshToken requestToken, String refreshToken) {
        AccessTokenResponse response2 = oauth.doRefreshTokenRequest(refreshToken);
        assertEquals(200, response2.getStatusCode());
        EventAssertion.assertSuccess(events.poll())
                .sessionId(sessionId)
                .details(Details.REFRESH_TOKEN_ID, requestToken.getId())
                .type(EventType.REFRESH_TOKEN);
    }


    @Test
    public void refreshTokenClientDisabled() {
        oauth.doLogin("test-user@localhost", "password");

        String code = oauth.parseLoginResponse().getCode();

        AccessTokenResponse response = oauth.doAccessTokenRequest(code);
        String refreshTokenString = response.getRefreshToken();
        events.clear();

        managedClient.updateWithCleanup(c -> c.enabled(false));

        response = oauth.doRefreshTokenRequest(refreshTokenString);

        assertEquals(401, response.getStatusCode());
        assertEquals("invalid_client", response.getError());

        EventAssertion.assertError(events.poll())
                .type(EventType.REFRESH_TOKEN_ERROR)
                .error(Errors.CLIENT_DISABLED);
        managedClient.updateWithCleanup(c -> c.enabled(true));
    }

    @Test
    public void refreshTokenUserSessionRemoved() {
        oauth.doLogin("test-user@localhost", "password");

        String code = oauth.parseLoginResponse().getCode();
        AccessTokenResponse tokenResponse = oauth.doAccessTokenRequest(code);
        String sessionId = tokenResponse.getSessionState();

        events.clear();

        realm.admin().deleteSession(sessionId, false);

        tokenResponse = oauth.doRefreshTokenRequest(tokenResponse.getRefreshToken());

        assertEquals(400, tokenResponse.getStatusCode());
        assertNull(tokenResponse.getAccessToken());
        assertNull(tokenResponse.getRefreshToken());

        EventAssertion.assertError(events.poll())
                .type(EventType.REFRESH_TOKEN_ERROR)
                .error(Errors.INVALID_TOKEN);

        events.clear();
    }

    @Test
    public void refreshTokenAfterUserLogoutAndLoginAgain() {
        String refreshToken1 = loginAndForceNewLoginPage();

        oauth.doLogout(refreshToken1);
        events.clear();

        try {
            // Continue with login
            timeOffSet.set(2);
            driver.navigate().refresh();
            oauth.fillLoginForm("test-user@localhost", "password");

            AccessTokenResponse tokenResponse2;
            String code = oauth.parseLoginResponse().getCode();
            tokenResponse2 = oauth.doAccessTokenRequest(code);

            // Now try refresh with the original refreshToken1 created in logged-out userSession. It should fail
            AccessTokenResponse responseReuseExceeded = oauth.doRefreshTokenRequest(refreshToken1);
            assertEquals(400, responseReuseExceeded.getStatusCode());

            // Finally try with valid refresh token
            responseReuseExceeded = oauth.doRefreshTokenRequest(tokenResponse2.getRefreshToken());
            assertEquals(200, responseReuseExceeded.getStatusCode());
        } finally {
            timeOffSet.set(0);
        }
    }
//
//    @Test
//    public void refreshTokenAfterAdminLogoutAllAndLoginAgain() {
//        String refreshToken1 = loginAndForceNewLoginPage();
//
//        adminClient.realm("test").logoutAll();
//        // Must wait for server to execute the request. Sometimes, there is issue with the execution and another tests failed, because of this.
//        WaitUtils.pause(500);
//
//        events.clear();
//
//        try {
//            // Continue with login
//            setTimeOffset(2);
//            driver.navigate().refresh();
//            oauth.fillLoginForm("test-user@localhost", "password");
//
//            assertFalse(loginPage.isCurrent());
//
//            AccessTokenResponse tokenResponse2;
//            String code = oauth.parseLoginResponse().getCode();
//            tokenResponse2 = oauth.doAccessTokenRequest(code);
//
//            // Now try refresh with the original refreshToken1 created in logged-out userSession. It should fail
//            AccessTokenResponse responseReuseExceeded = oauth.doRefreshTokenRequest(refreshToken1);
//            assertEquals(400, responseReuseExceeded.getStatusCode());
//
//            // Finally try with valid refresh token
//            responseReuseExceeded = oauth.doRefreshTokenRequest(tokenResponse2.getRefreshToken());
//            assertEquals(200, responseReuseExceeded.getStatusCode());
//        } finally {
//            resetTimeOffset();
//        }
//    }
//
//    @Test
//    public void refreshTokenAfterUserAdminLogoutEndpointAndLoginAgain() {
//        try {
//            String refreshToken1 = loginAndForceNewLoginPage();
//
//            RefreshToken refreshTokenParsed1 = oauth.parseRefreshToken(refreshToken1);
//            String userId = refreshTokenParsed1.getSubject();
//            UserResource user = adminClient.realm("test").users().get(userId);
//            user.logout();
//
//            // Continue with login
//            setTimeOffset(2);
//            driver.navigate().refresh();
//            oauth.fillLoginForm("test-user@localhost", "password");
//
//            assertFalse(loginPage.isCurrent());
//
//            AccessTokenResponse tokenResponse2;
//            String code = oauth.parseLoginResponse().getCode();
//            tokenResponse2 = oauth.doAccessTokenRequest(code);
//
//            // Now try refresh with the original refreshToken1 created in logged-out userSession. It should fail
//            AccessTokenResponse responseReuseExceeded = oauth.doRefreshTokenRequest(refreshToken1);
//            assertEquals(400, responseReuseExceeded.getStatusCode());
//
//            // Finally try with valid refresh token
//            responseReuseExceeded = oauth.doRefreshTokenRequest(tokenResponse2.getRefreshToken());
//            assertEquals(200, responseReuseExceeded.getStatusCode());
//        } finally {
//            resetTimeOffset();
//            // Need to reset not-before of user, which was updated during user.logout()
//            testingClient.server().run(session -> {
//                RealmModel realm = session.realms().getRealmByName("test");
//                UserModel user = session.users().getUserByUsername(realm, "test-user@localhost");
//                session.users().setNotBeforeForUser(realm, user, 0);
//            });
//        }
//    }
//
//    @Test
//    public void testUserSessionRefreshAndIdle() {
//        oauth.doLogin("test-user@localhost", "password");
//
//        EventRepresentation loginEvent = events.expectLogin().assertEvent();
//
//        String sessionId = loginEvent.getSessionId();
//
//        String code = oauth.parseLoginResponse().getCode();
//        AccessTokenResponse tokenResponse = oauth.doAccessTokenRequest(code);
//
//        events.poll();
//
//        String refreshId = oauth.parseRefreshToken(tokenResponse.getRefreshToken()).getId();
//
//        int last = testingClient.testing().getLastSessionRefresh("test", sessionId, false);
//
//        setTimeOffset(2);
//
//        tokenResponse = oauth.doRefreshTokenRequest(tokenResponse.getRefreshToken());
//
//        oauth.verifyToken(tokenResponse.getAccessToken());
//        oauth.parseRefreshToken(tokenResponse.getRefreshToken());
//
//        assertEquals(200, tokenResponse.getStatusCode());
//
//        int next = testingClient.testing().getLastSessionRefresh("test", sessionId, false);
//
//        Assert.assertNotEquals(last, next);
//
//        RealmResource realmResource = adminClient.realm("test");
//        int lastAccessTokenLifespan = realmResource.toRepresentation().getAccessTokenLifespan();
//        int originalIdle = realmResource.toRepresentation().getSsoSessionIdleTimeout();
//
//        try {
//            RealmManager.realm(realmResource).accessTokenLifespan(100000);
//
//            setTimeOffset(4);
//            tokenResponse = oauth.doRefreshTokenRequest(tokenResponse.getRefreshToken());
//
//            next = testingClient.testing().getLastSessionRefresh("test", sessionId, false);
//
//            // lastSEssionRefresh should be updated because access code lifespan is higher than sso idle timeout
//            assertThat(next, allOf(greaterThan(last), lessThan(last + 50)));
//
//            RealmManager.realm(realmResource).ssoSessionIdleTimeout(1);
//
//            events.clear();
//            // Needs to add some additional time due the tollerance allowed by IDLE_TIMEOUT_WINDOW_SECONDS
//            setTimeOffset(6 + (ProfileAssume.isFeatureEnabled(Profile.Feature.PERSISTENT_USER_SESSIONS) ? 0 : SessionTimeoutHelper.IDLE_TIMEOUT_WINDOW_SECONDS));
//            tokenResponse = oauth.doRefreshTokenRequest(tokenResponse.getRefreshToken());
//
//            // test idle timeout
//            assertEquals(400, tokenResponse.getStatusCode());
//            assertNull(tokenResponse.getAccessToken());
//            assertNull(tokenResponse.getRefreshToken());
//
//            events.expectRefresh(refreshId, sessionId).error(Errors.INVALID_TOKEN);
//
//        } finally {
//            RealmManager.realm(realmResource).ssoSessionIdleTimeout(originalIdle).accessTokenLifespan(lastAccessTokenLifespan);
//            events.clear();
//            resetTimeOffset();
//        }
//
//    }
//
//    @Test
//    public void testUserSessionRefreshAndIdleRememberMe() throws Exception {
//        RealmResource testRealm = adminClient.realm("test");
//
//        try (Closeable ignored = new RealmAttributeUpdater(testRealm)
//                .updateWith(r -> {
//                    r.setRememberMe(true);
//                    r.setSsoSessionIdleTimeoutRememberMe(500);
//                    r.setSsoSessionIdleTimeout(100);
//                }).update()) {
//            oauth.openLoginForm();
//            loginPage.setRememberMe(true);
//            loginPage.login("test-user@localhost", "password");
//
//            EventRepresentation loginEvent = events.expectLogin().assertEvent();
//
//            String sessionId = loginEvent.getSessionId();
//
//            String code = oauth.parseLoginResponse().getCode();
//            AccessTokenResponse tokenResponse = oauth.doAccessTokenRequest(code);
//
//            events.poll();
//
//            String refreshId = oauth.parseRefreshToken(tokenResponse.getRefreshToken()).getId();
//            int last = testingClient.testing().getLastSessionRefresh("test", sessionId, false);
//
//            setTimeOffset(110 + (ProfileAssume.isFeatureEnabled(Profile.Feature.PERSISTENT_USER_SESSIONS) ? 0 : SessionTimeoutHelper.IDLE_TIMEOUT_WINDOW_SECONDS));
//            tokenResponse = oauth.doRefreshTokenRequest(tokenResponse.getRefreshToken());
//            oauth.verifyToken(tokenResponse.getAccessToken());
//            oauth.parseRefreshToken(tokenResponse.getRefreshToken());
//            assertEquals(200, tokenResponse.getStatusCode());
//
//            int next = testingClient.testing().getLastSessionRefresh("test", sessionId, false);
//            Assert.assertNotEquals(last, next);
//
//            events.clear();
//            // Needs to add some additional time due the tollerance allowed by IDLE_TIMEOUT_WINDOW_SECONDS
//            setTimeOffset(620 + 2 * (ProfileAssume.isFeatureEnabled(Profile.Feature.PERSISTENT_USER_SESSIONS) ? 0 : SessionTimeoutHelper.IDLE_TIMEOUT_WINDOW_SECONDS));
//            tokenResponse = oauth.doRefreshTokenRequest(tokenResponse.getRefreshToken());
//
//            // test idle remember me timeout
//            assertEquals(400, tokenResponse.getStatusCode());
//            assertNull(tokenResponse.getAccessToken());
//            assertNull(tokenResponse.getRefreshToken());
//
//            events.expectRefresh(refreshId, sessionId).error(Errors.INVALID_TOKEN);
//            events.clear();
//
//        } finally {
//            resetTimeOffset();
//        }
//    }

// TODO:mposolda probably uncomment and fix
//
//    private String getClientSessionUuid(final String userSessionId, String clientId) {
//        return testingClient.server().fetch(session -> {
//            RealmModel realmModel = session.realms().getRealmByName("test");
//            ClientModel clientModel = realmModel.getClientByClientId(clientId);
//            UserSessionModel userSession = session.sessions().getUserSession(realmModel, userSessionId);
//            AuthenticatedClientSessionModel clientSession = userSession.getAuthenticatedClientSessionByClient(clientModel.getId());
//            return clientSession.getId();
//        }, String.class);
//    }
//
//    private int checkIfUserAndClientSessionExist(final String userSessionId, final String clientId, final String clientSessionId) {
//        return testingClient.server().fetch(session -> {
//            RealmModel realmModel = session.realms().getRealmByName("test");
//            ClientModel clientModel = realmModel.getClientByClientId(clientId);
//            UserSessionModel userSession = session.sessions().getUserSession(realmModel, userSessionId);
//            if (userSession != null) {
//                AuthenticatedClientSessionModel clientSession = userSession.getAuthenticatedClientSessionByClient(clientModel.getId());
//                return clientSession != null && clientSessionId.equals(clientSession.getId())? 2 : 1;
//            }
//            return 0;
//        }, Integer.class);
//    }

//    @Test
//    public void refreshTokenUserSessionMaxLifespan() throws Exception {
//        RealmResource realmResource = adminClient.realm("test");
//        getTestingClient().testing().setTestingInfinispanTimeService();
//        try (Closeable ignored = new RealmAttributeUpdater(realmResource)
//                .updateWith(r -> {
//                    r.setSsoSessionMaxLifespan(3600);
//                    r.setSsoSessionIdleTimeout(7200);
//                }).update()) {
//            oauth.doLogin("test-user@localhost", "password");
//            EventRepresentation loginEvent = events.expectLogin().assertEvent();
//
//            String sessionId = loginEvent.getSessionId();
//
//            String code = oauth.parseLoginResponse().getCode();
//            AccessTokenResponse tokenResponse = oauth.doAccessTokenRequest(code);
//            assertTrue("Invalid ExpiresIn", 0 < tokenResponse.getRefreshExpiresIn() && tokenResponse.getRefreshExpiresIn() <= 3600);
//            final String clientSessionId = getClientSessionUuid(sessionId, loginEvent.getClientId());
//            assertEquals(2, checkIfUserAndClientSessionExist(sessionId, loginEvent.getClientId(), clientSessionId));
//
//            events.poll();
//
//            setTimeOffset(1800);
//
//            String refreshId = oauth.parseRefreshToken(tokenResponse.getRefreshToken()).getId();
//            tokenResponse = oauth.doRefreshTokenRequest(tokenResponse.getRefreshToken());
//            assertTrue("Invalid ExpiresIn", 0 < tokenResponse.getRefreshExpiresIn() && tokenResponse.getRefreshExpiresIn() <= 1800);
//            assertEquals(2, checkIfUserAndClientSessionExist(sessionId, loginEvent.getClientId(), clientSessionId));
//            events.expectRefresh(refreshId, sessionId).assertEvent();
//
//            setTimeOffset(3700);
//            oauth.parseRefreshToken(tokenResponse.getRefreshToken());
//            tokenResponse = oauth.doRefreshTokenRequest(tokenResponse.getRefreshToken());
//
//            assertEquals(400, tokenResponse.getStatusCode());
//            assertNull(tokenResponse.getAccessToken());
//            assertNull(tokenResponse.getRefreshToken());
//            events.expect(EventType.REFRESH_TOKEN).error(Errors.INVALID_TOKEN).user((String) null).assertEvent();
//            assertEquals(0, checkIfUserAndClientSessionExist(sessionId, loginEvent.getClientId(), clientSessionId));
//        } finally {
//            getTestingClient().testing().revertTestingInfinispanTimeService();
//            events.clear();
//            resetTimeOffset();
//        }
//    }
//
//    @Test
//    public void refreshTokenUserClientMaxLifespanSmallerThanSession() throws Exception {
//        RealmResource realmResource = adminClient.realm("test");
//        getTestingClient().testing().setTestingInfinispanTimeService();
//        try (Closeable ignored = new RealmAttributeUpdater(realmResource)
//                .updateWith(r -> {
//                    r.setSsoSessionMaxLifespan(3600);
//                    r.setSsoSessionIdleTimeout(7200);
//                    r.setClientSessionMaxLifespan(1000);
//                    r.setClientSessionIdleTimeout(7200);
//                }).update()) {
//
//            oauth.doLogin("test-user@localhost", "password");
//            EventRepresentation loginEvent = events.expectLogin().assertEvent();
//
//            String sessionId = loginEvent.getSessionId();
//
//            String code = oauth.parseLoginResponse().getCode();
//            AccessTokenResponse tokenResponse = oauth.doAccessTokenRequest(code);
//            assertTrue("Invalid ExpiresIn", 0 < tokenResponse.getRefreshExpiresIn() && tokenResponse.getRefreshExpiresIn() <= 1000);
//            String clientSessionId = getClientSessionUuid(sessionId, loginEvent.getClientId());
//            assertEquals(2, checkIfUserAndClientSessionExist(sessionId, loginEvent.getClientId(), clientSessionId));
//
//            events.poll();
//
//            setTimeOffset(600);
//            String refreshId = oauth.parseRefreshToken(tokenResponse.getRefreshToken()).getId();
//            tokenResponse = oauth.doRefreshTokenRequest(tokenResponse.getRefreshToken());
//            assertTrue("Invalid ExpiresIn", 0 < tokenResponse.getRefreshExpiresIn() && tokenResponse.getRefreshExpiresIn() <= 400);
//            assertEquals(2, checkIfUserAndClientSessionExist(sessionId, loginEvent.getClientId(), clientSessionId));
//            events.expectRefresh(refreshId, sessionId).assertEvent();
//
//            setTimeOffset(1100);
//            tokenResponse = oauth.doRefreshTokenRequest(tokenResponse.getRefreshToken());
//            assertEquals(400, tokenResponse.getStatusCode());
//            assertNull(tokenResponse.getAccessToken());
//            assertNull(tokenResponse.getRefreshToken());
//            events.expect(EventType.REFRESH_TOKEN).error(Errors.INVALID_TOKEN).user((String) null).assertEvent();
//            assertEquals(1, checkIfUserAndClientSessionExist(sessionId, loginEvent.getClientId(), clientSessionId));
//
//            setTimeOffset(1600);
//            oauth.openLoginForm();
//            loginEvent = events.expectLogin().assertEvent();
//            sessionId = loginEvent.getSessionId();
//            code = oauth.parseLoginResponse().getCode();
//            tokenResponse = oauth.doAccessTokenRequest(code);
//            assertTrue("Invalid ExpiresIn", 0 < tokenResponse.getRefreshExpiresIn() && tokenResponse.getRefreshExpiresIn() <= 1000);
//            events.expectCodeToToken(loginEvent.getDetails().get(Details.CODE_ID), sessionId).assertEvent();
//
//            clientSessionId = getClientSessionUuid(sessionId, loginEvent.getClientId());
//            assertEquals(2, checkIfUserAndClientSessionExist(sessionId, loginEvent.getClientId(), clientSessionId));
//
//            setTimeOffset(3700);
//            tokenResponse = oauth.doRefreshTokenRequest(tokenResponse.getRefreshToken());
//            assertEquals(400, tokenResponse.getStatusCode());
//            assertNull(tokenResponse.getAccessToken());
//            assertNull(tokenResponse.getRefreshToken());
//            events.expect(EventType.REFRESH_TOKEN).error(Errors.INVALID_TOKEN).user((String) null).assertEvent();
//            assertEquals(0, checkIfUserAndClientSessionExist(sessionId, loginEvent.getClientId(), clientSessionId));
//        } finally {
//            getTestingClient().testing().revertTestingInfinispanTimeService();
//            events.clear();
//            resetTimeOffset();
//        }
//    }
//
//    @Test
//    public void refreshTokenUserSessionMaxLifespanModifiedAfterTokenRefresh() throws Exception {
//        RealmResource realmResource = adminClient.realm("test");
//        getTestingClient().testing().setTestingInfinispanTimeService();
//
//        try (Closeable ignored = new RealmAttributeUpdater(realmResource)
//                .updateWith(r -> {
//                    r.setSsoSessionMaxLifespan(7200);
//                    r.setSsoSessionIdleTimeout(7200);
//                    r.setClientSessionMaxLifespan(7200);
//                    r.setClientSessionIdleTimeout(7200);
//                }).update()) {
//            oauth.doLogin("test-user@localhost", "password");
//            EventRepresentation loginEvent = events.expectLogin().assertEvent();
//
//            String sessionId = loginEvent.getSessionId();
//
//            String code = oauth.parseLoginResponse().getCode();
//            AccessTokenResponse tokenResponse = oauth.doAccessTokenRequest(code);
//            assertTrue("Invalid ExpiresIn", 0 < tokenResponse.getRefreshExpiresIn() && tokenResponse.getRefreshExpiresIn() <= 7200);
//            final String clientSessionId = getClientSessionUuid(sessionId, loginEvent.getClientId());
//            assertEquals(2, checkIfUserAndClientSessionExist(sessionId, loginEvent.getClientId(), clientSessionId));
//
//            events.poll();
//
//            RealmRepresentation rep = realmResource.toRepresentation();
//            rep.setSsoSessionMaxLifespan(3600);
//            rep.setClientSessionMaxLifespan(3600);
//            realmResource.update(rep);
//
//            setTimeOffset(3700);
//            tokenResponse = oauth.doRefreshTokenRequest(tokenResponse.getRefreshToken());
//            assertEquals(400, tokenResponse.getStatusCode());
//            assertNull(tokenResponse.getAccessToken());
//            assertNull(tokenResponse.getRefreshToken());
//            events.assertRefreshTokenErrorAndMaybeSessionExpired(sessionId, loginEvent.getUserId(), loginEvent.getClientId());
//            assertEquals(0, checkIfUserAndClientSessionExist(sessionId, loginEvent.getClientId(), clientSessionId));
//        } finally {
//            getTestingClient().testing().revertTestingInfinispanTimeService();
//            events.clear();
//            resetTimeOffset();
//        }
//    }
//
//    @Test
//    public void refreshTokenClientSessionMaxLifespanModifiedAfterTokenRefresh() throws Exception {
//        RealmResource realmResource = adminClient.realm("test");
//        getTestingClient().testing().setTestingInfinispanTimeService();
//
//        try (Closeable ignored = new RealmAttributeUpdater(realmResource)
//                .updateWith(r -> {
//                    r.setSsoSessionMaxLifespan(7200);
//                    r.setSsoSessionIdleTimeout(7200);
//                    r.setClientSessionMaxLifespan(7200);
//                    r.setClientSessionIdleTimeout(7200);
//                }).update()) {
//            oauth.doLogin("test-user@localhost", "password");
//            EventRepresentation loginEvent = events.expectLogin().assertEvent();
//
//            String sessionId = loginEvent.getSessionId();
//
//            String code = oauth.parseLoginResponse().getCode();
//            AccessTokenResponse tokenResponse = oauth.doAccessTokenRequest(code);
//            assertEquals(200, tokenResponse.getStatusCode());
//            assertTrue("Invalid ExpiresIn: " + tokenResponse.getRefreshExpiresIn(), 0 < tokenResponse.getRefreshExpiresIn() && tokenResponse.getRefreshExpiresIn() <= 7200);
//            String clientSessionId = getClientSessionUuid(sessionId, loginEvent.getClientId());
//            assertEquals(2, checkIfUserAndClientSessionExist(sessionId, loginEvent.getClientId(), clientSessionId));
//
//            events.poll();
//
//            RealmRepresentation rep = realmResource.toRepresentation();
//            rep.setClientSessionMaxLifespan(3600);
//            realmResource.update(rep);
//
//            setTimeOffset(3700);
//            tokenResponse = oauth.doRefreshTokenRequest(tokenResponse.getRefreshToken());
//            assertEquals(400, tokenResponse.getStatusCode());
//            assertNull(tokenResponse.getAccessToken());
//            assertNull(tokenResponse.getRefreshToken());
//            events.expect(EventType.REFRESH_TOKEN).error(Errors.INVALID_TOKEN).session(sessionId).user((String) null).assertEvent();
//            assertEquals(1, checkIfUserAndClientSessionExist(sessionId, loginEvent.getClientId(), clientSessionId));
//
//            setTimeOffset(4200);
//            oauth.openLoginForm();
//            loginEvent = events.expectLogin().assertEvent();
//            sessionId = loginEvent.getSessionId();
//            code = oauth.parseLoginResponse().getCode();
//            tokenResponse = oauth.doAccessTokenRequest(code);
//            assertEquals(200, tokenResponse.getStatusCode());
//            assertTrue("Invalid ExpiresIn: " + tokenResponse.getRefreshExpiresIn(), 0 < tokenResponse.getRefreshExpiresIn() && tokenResponse.getRefreshExpiresIn() <= 3000);
//            events.expectCodeToToken(loginEvent.getDetails().get(Details.CODE_ID), sessionId).assertEvent();
//
//            clientSessionId = getClientSessionUuid(sessionId, loginEvent.getClientId());
//            assertEquals(2, checkIfUserAndClientSessionExist(sessionId, loginEvent.getClientId(), clientSessionId));
//
//            setTimeOffset(7300);
//            tokenResponse = oauth.doRefreshTokenRequest(tokenResponse.getRefreshToken());
//            assertEquals(400, tokenResponse.getStatusCode());
//            assertNull(tokenResponse.getAccessToken());
//            assertNull(tokenResponse.getRefreshToken());
//            events.expect(EventType.REFRESH_TOKEN).error(Errors.INVALID_TOKEN).user((String) null).assertEvent();
//            assertEquals(0, checkIfUserAndClientSessionExist(sessionId, loginEvent.getClientId(), clientSessionId));
//        } finally {
//            getTestingClient().testing().revertTestingInfinispanTimeService();
//            events.clear();
//            resetTimeOffset();
//        }
//    }
//
//    @Test
//    public void silentLoginClientSessionMaxLifespanModifiedAfterTokenRefresh() throws Exception {
//        RealmResource realmResource = adminClient.realm("test");
//        getTestingClient().testing().setTestingInfinispanTimeService();
//
//        try (Closeable ignored = new RealmAttributeUpdater(realmResource)
//                .updateWith(r -> {
//                    r.setSsoSessionMaxLifespan(7200);
//                    r.setSsoSessionIdleTimeout(7200);
//                    r.setClientSessionMaxLifespan(7200);
//                    r.setClientSessionIdleTimeout(7200);
//                }).update()) {
//
//            oauth.doLogin("test-user@localhost", "password");
//            EventRepresentation loginEvent = events.expectLogin().assertEvent();
//
//            String sessionId = loginEvent.getSessionId();
//
//            String code = oauth.parseLoginResponse().getCode();
//            AccessTokenResponse tokenResponse = oauth.doAccessTokenRequest(code);
//            assertTrue("Invalid ExpiresIn", 0 < tokenResponse.getRefreshExpiresIn() && tokenResponse.getRefreshExpiresIn() <= 7200);
//            String clientSessionId = getClientSessionUuid(sessionId, loginEvent.getClientId());
//            assertEquals(2, checkIfUserAndClientSessionExist(sessionId, loginEvent.getClientId(), clientSessionId));
//
//            events.poll();
//
//            RealmRepresentation rep = realmResource.toRepresentation();
//            rep.setClientSessionMaxLifespan(3600);
//            realmResource.update(rep);
//
//            setTimeOffset(4200);
//            oauth.openLoginForm();
//            loginEvent = events.expectLogin().assertEvent();
//            sessionId = loginEvent.getSessionId();
//            code = oauth.parseLoginResponse().getCode();
//            tokenResponse = oauth.doAccessTokenRequest(code);
//            assertTrue("Invalid ExpiresIn", 0 < tokenResponse.getRefreshExpiresIn() && tokenResponse.getRefreshExpiresIn() <= 3000);
//            events.expectCodeToToken(loginEvent.getDetails().get(Details.CODE_ID), sessionId).assertEvent();
//
//            clientSessionId = getClientSessionUuid(sessionId, loginEvent.getClientId());
//            assertEquals(2, checkIfUserAndClientSessionExist(sessionId, loginEvent.getClientId(), clientSessionId));
//
//            setTimeOffset(7300);
//            tokenResponse = oauth.doRefreshTokenRequest(tokenResponse.getRefreshToken());
//            assertEquals(400, tokenResponse.getStatusCode());
//            assertNull(tokenResponse.getAccessToken());
//            assertNull(tokenResponse.getRefreshToken());
//            events.expect(EventType.REFRESH_TOKEN).error(Errors.INVALID_TOKEN).user((String) null).assertEvent();
//            assertEquals(0, checkIfUserAndClientSessionExist(sessionId, loginEvent.getClientId(), clientSessionId));
//        } finally {
//            getTestingClient().testing().revertTestingInfinispanTimeService();
//            events.clear();
//            resetTimeOffset();
//        }
//    }
//
//    /**
//     * KEYCLOAK-1267
//     * @throws Exception
//     */
//    @Test
//    public void refreshTokenUserSessionMaxLifespanWithRememberMe() throws Exception {
//
//        RealmResource testRealm = adminClient.realm("test");
//
//        try (Closeable ignored = new RealmAttributeUpdater(testRealm)
//                .updateWith(r -> {
//                    r.setRememberMe(true);
//                    r.setSsoSessionMaxLifespanRememberMe(100);
//                    r.setSsoSessionMaxLifespan(50);
//                }).update()) {
//
//            oauth.openLoginForm();
//            loginPage.setRememberMe(true);
//            loginPage.login("test-user@localhost", "password");
//
//            EventRepresentation loginEvent = events.expectLogin().assertEvent();
//
//            String sessionId = loginEvent.getSessionId();
//
//            String code = oauth.parseLoginResponse().getCode();
//            AccessTokenResponse tokenResponse = oauth.doAccessTokenRequest(code);
//
//            events.poll();
//
//            String refreshId = oauth.parseRefreshToken(tokenResponse.getRefreshToken()).getId();
//
//            setTimeOffset(110);
//
//            tokenResponse = oauth.doRefreshTokenRequest(tokenResponse.getRefreshToken());
//
//            assertEquals(400, tokenResponse.getStatusCode());
//            assertNull(tokenResponse.getAccessToken());
//            assertNull(tokenResponse.getRefreshToken());
//
//            events.expectRefresh(refreshId, sessionId).error(Errors.INVALID_TOKEN);
//            events.clear();
//
//        } finally {
//            resetTimeOffset();
//        }
//    }
//
//    @Test
//    public void refreshTokenClientSessionMaxLifespan() {
//        RealmResource realm = adminClient.realm("test");
//        RealmRepresentation rep = realm.toRepresentation();
//        Integer originalSsoSessionMaxLifespan = rep.getSsoSessionMaxLifespan();
//
//        ClientResource client = ApiUtil.findClientByClientId(adminClient.realm("test"), "test-app");
//        ClientRepresentation clientRepresentation = client.toRepresentation();
//
//        getTestingClient().testing().setTestingInfinispanTimeService();
//
//        try {
//            rep.setSsoSessionMaxLifespan(1000);
//            realm.update(rep);
//
//            clientRepresentation.getAttributes().put(OIDCConfigAttributes.CLIENT_SESSION_MAX_LIFESPAN, "500");
//            client.update(clientRepresentation);
//
//            oauth.doLogin("test-user@localhost", "password");
//
//            EventRepresentation loginEvent = events.expectLogin().assertEvent();
//            String sessionId = loginEvent.getSessionId();
//
//            String code = oauth.parseLoginResponse().getCode();
//            AccessTokenResponse tokenResponse = oauth.doAccessTokenRequest(code);
//
//            events.poll();
//
//            String refreshId = oauth.parseRefreshToken(tokenResponse.getRefreshToken()).getId();
//
//            tokenResponse = oauth.doRefreshTokenRequest(tokenResponse.getRefreshToken());
//            assertTrue("Invalid RefreshExpiresIn" + tokenResponse.getRefreshExpiresIn(), 0 < tokenResponse.getRefreshExpiresIn() && tokenResponse.getRefreshExpiresIn() <= 500);
//
//            setTimeOffset(100);
//
//            tokenResponse = oauth.doRefreshTokenRequest(tokenResponse.getRefreshToken());
//            assertTrue("Invalid RefreshExpiresIn", 0 < tokenResponse.getRefreshExpiresIn() && tokenResponse.getRefreshExpiresIn() <= 400);
//
//            setTimeOffset(600);
//
//            oauth.openLoginForm();
//            code = oauth.parseLoginResponse().getCode();
//
//            tokenResponse = oauth.doAccessTokenRequest(code);
//            assertEquals(200, tokenResponse.getStatusCode());
//            assertTrue("Invalid RefreshExpiresIn" + tokenResponse.getRefreshExpiresIn(), 0 < tokenResponse.getRefreshExpiresIn() && tokenResponse.getRefreshExpiresIn() <= 400);
//
//            setTimeOffset(700);
//
//            tokenResponse = oauth.doRefreshTokenRequest(tokenResponse.getRefreshToken());
//            assertEquals(200, tokenResponse.getStatusCode());
//            assertTrue("Invalid RefreshExpiresIn" + tokenResponse.getRefreshExpiresIn(), 0 < tokenResponse.getRefreshExpiresIn() && tokenResponse.getRefreshExpiresIn() <= 300);
//
//            setTimeOffset(1100);
//
//            tokenResponse = oauth.doRefreshTokenRequest(tokenResponse.getRefreshToken());
//            assertEquals(400, tokenResponse.getStatusCode());
//            assertNull(tokenResponse.getAccessToken());
//            assertNull(tokenResponse.getRefreshToken());
//
//            events.expectRefresh(refreshId, sessionId).error(Errors.INVALID_TOKEN);
//        } finally {
//            rep.setSsoSessionMaxLifespan(originalSsoSessionMaxLifespan);
//            realm.update(rep);
//            clientRepresentation.getAttributes().put(OIDCConfigAttributes.CLIENT_SESSION_MAX_LIFESPAN, null);
//            client.update(clientRepresentation);
//
//            events.clear();
//            resetTimeOffset();
//            getTestingClient().testing().revertTestingInfinispanTimeService();
//        }
//    }
//
//    /**
//     * This is a very esoteric test specific to bug <a href="https://github.com/keycloak/keycloak/issues/38591">#38591</a>.
//     * Consider removing or rewriting the test if the loading of sessions from the database has changed and no longer
//     * updates the client session timestamp. It is also specific to the case when the idle timeout of a client is reduced
//     * while some client sessions already exist.
//     */
//    @Test
//    public void refreshTokenClientSessionIdleTimeoutTwoClientsWithReloadingFromDatabase() {
//        ProfileAssume.assumeFeatureEnabled(Profile.Feature.PERSISTENT_USER_SESSIONS);
//
//        RealmResource realm = adminClient.realm("test");
//
//        ClientResource client = ApiUtil.findClientByClientId(adminClient.realm("test"), "test-app");
//        ClientRepresentation clientRepresentation = client.toRepresentation();
//
//        // Duplicate the primary client to have two clients to test with
//        ClientRepresentation clientRepresentation2 = client.toRepresentation();
//        clientRepresentation2.setClientId("test-app2");
//        clientRepresentation2.getAttributes().put(CLIENT_SESSION_IDLE_TIMEOUT, "500");
//        clientRepresentation2.setId(null);
//        try (Response resp = realm.clients().create(clientRepresentation2)) {
//            String clientUUID = ApiUtil.getCreatedId(resp);
//            getCleanup().addClientUuid(clientUUID);
//        }
//
//        getTestingClient().testing().setTestingInfinispanTimeService();
//
//        try {
//            oauth.doLogin("test-user@localhost", "password");
//
//            EventRepresentation loginEvent = events.expectLogin().assertEvent();
//            String sessionId = loginEvent.getSessionId();
//
//            String code = oauth.parseLoginResponse().getCode();
//            AccessTokenResponse tokenResponse = oauth.doAccessTokenRequest(code);
//
//            // Reduce the idle time so that the originally issued refresh token is valid, but it will be considered invalid due to the client configuration
//            clientRepresentation.getAttributes().put(CLIENT_SESSION_IDLE_TIMEOUT, "500");
//            client.update(clientRepresentation);
//
//            oauth.client("test-app2", "password");
//
//            // We are already logged in due to the token
//            oauth.openLoginForm();
//
//            String code2 = oauth.parseLoginResponse().getCode();
//            AccessTokenResponse tokenResponse2 = oauth.doAccessTokenRequest(code2);
//
//            assertThat(sessionId, Matchers.equalTo(tokenResponse2.getSessionState()));
//
//            setTimeOffset(100);
//
//            tokenResponse2 = oauth.doRefreshTokenRequest(tokenResponse2.getRefreshToken());
//            assertEquals(200, tokenResponse2.getStatusCode());
//            assertTrue("Invalid RefreshExpiresIn: " + tokenResponse2.getRefreshExpiresIn(), 0 < tokenResponse2.getRefreshExpiresIn() && tokenResponse2.getRefreshExpiresIn() <= 500);
//
//            // Clear all entries from the cache to enforce re-loading the data from the database
//            testingClient.server("test").run(session -> {
//                InfinispanConnectionProvider connections = session.getProvider(InfinispanConnectionProvider.class);
//                if (connections != null) {
//                    Cache<String, SessionEntityWrapper<UserSessionEntity>> sessionCache = connections.getCache(USER_SESSION_CACHE_NAME);
//                    Cache<UUID, SessionEntityWrapper<AuthenticatedClientSessionEntity>> clientSessionCache = connections.getCache(CLIENT_SESSION_CACHE_NAME);
//                    if (sessionCache != null) {
//                        sessionCache.clear();
//                    }
//                    if (clientSessionCache != null) {
//                        clientSessionCache.clear();
//                    }
//                }
//            });
//
//            setTimeOffset(550);
//            oauth.client("test-app", "password");
//            events.poll();
//
//            // The client session of the first client should have expired by now
//            String refreshId = oauth.parseRefreshToken(tokenResponse.getRefreshToken()).getId();
//            tokenResponse = oauth.doRefreshTokenRequest(tokenResponse.getRefreshToken());
//
//            assertEquals(400, tokenResponse.getStatusCode());
//            assertNull(tokenResponse.getAccessToken());
//            assertNull(tokenResponse.getRefreshToken());
//            events.expectRefresh(refreshId, sessionId).error(Errors.INVALID_TOKEN);
//
//        } finally {
//            clientRepresentation.getAttributes().put(CLIENT_SESSION_IDLE_TIMEOUT, null);
//            client.update(clientRepresentation);
//
//            events.clear();
//            resetTimeOffset();
//            getTestingClient().testing().revertTestingInfinispanTimeService();
//        }
//    }
//
    @Test
    public void testCheckSsl() {
        try {
            AccessTokenResponse tokenResponse = oauth.doPasswordGrantRequest("test-user@localhost", "password");
            String refreshToken = tokenResponse.getRefreshToken();
            assertNotNull(refreshToken);

            if (!oauth.getEndpoints().getIssuer().startsWith("https://")) {   // test checkSsl
                RealmRepresentation realmRep = realm.admin().toRepresentation();
                String origSslRequired = realmRep.getSslRequired();
                realmRep.setSslRequired(SslRequired.ALL.toString());
                realm.admin().update(realmRep);

                try {
                    AccessTokenResponse response = oauth.doRefreshTokenRequest(refreshToken);
                    assertEquals(403, response.getStatusCode());
                    assertEquals(INVALID_REQUEST, response.getError());
                    assertEquals("HTTPS required", response.getErrorDescription());
                } finally {
                    realmRep.setSslRequired(origSslRequired);
                    realm.admin().update(realmRep);
                }
            }

            AccessTokenResponse response = oauth.doRefreshTokenRequest(refreshToken);
            assertEquals(200, response.getStatusCode());
            assertNotNull(response.getRefreshToken());
        } finally {
            events.clear();
        }

    }
//
//    @Test
//    public void refreshTokenUserDisabled() {
//        oauth.doLogin("test-user@localhost", "password");
//
//        EventRepresentation loginEvent = events.expectLogin().assertEvent();
//
//        String sessionId = loginEvent.getSessionId();
//        String codeId = loginEvent.getDetails().get(Details.CODE_ID);
//
//        String code = oauth.parseLoginResponse().getCode();
//
//        AccessTokenResponse response = oauth.doAccessTokenRequest(code);
//        String refreshTokenString = response.getRefreshToken();
//        RefreshToken refreshToken = oauth.parseRefreshToken(refreshTokenString);
//
//        events.expectCodeToToken(codeId, sessionId).assertEvent();
//
//        try {
//            UserManager.realm(adminClient.realm("test")).username("test-user@localhost").enabled(false);
//            response = oauth.doRefreshTokenRequest(refreshTokenString);
//            assertEquals(400, response.getStatusCode());
//            assertEquals("invalid_grant", response.getError());
//
//            events.expectRefresh(refreshToken.getId(), sessionId).user((String) null).clearDetails().error(Errors.INVALID_TOKEN).assertEvent();
//        } finally {
//            UserManager.realm(adminClient.realm("test")).username("test-user@localhost").enabled(true);
//        }
//    }
//
//    @Test
//    public void refreshTokenUserDeleted() {
//        String userId = createUser("test", "temp-user@localhost", "password");
//        oauth.doLogin("temp-user@localhost", "password");
//
//        EventRepresentation loginEvent = events.expectLogin().user(userId).assertEvent();
//
//        String sessionId = loginEvent.getSessionId();
//        String codeId = loginEvent.getDetails().get(Details.CODE_ID);
//
//        String code = oauth.parseLoginResponse().getCode();
//
//        AccessTokenResponse response = oauth.doAccessTokenRequest(code);
//        String refreshTokenString = response.getRefreshToken();
//        RefreshToken refreshToken = oauth.parseRefreshToken(refreshTokenString);
//
//        events.expectCodeToToken(codeId, sessionId).user(userId).assertEvent();
//
//        adminClient.realm("test").users().delete(userId).close();
//
//        response = oauth.doRefreshTokenRequest(refreshTokenString);
//        assertEquals(400, response.getStatusCode());
//        assertEquals("invalid_grant", response.getError());
//
//        events.expectRefresh(refreshToken.getId(), sessionId).user((String) null).clearDetails().error(Errors.INVALID_TOKEN).assertEvent();
//    }
//
    @Test
    public void refreshTokenServiceAccount() {
        String origClientId = oauth.config().getClientId();
        String origClientSecret = oauth.config().getClientSecret();
        try {
            AccessTokenResponse response = oauth.client("service-account-app", "secret").doClientCredentialsGrantAccessTokenRequest();
            assertNotNull(response.getRefreshToken());
            response = oauth.doRefreshTokenRequest(response.getRefreshToken());
            assertNotNull(response.getRefreshToken());
        } finally {
            oauth.client(origClientId, origClientSecret);
        }
    }
//
//    @Test
//    public void testClientSessionMaxLifespan() {
//        ClientResource client = ApiUtil.findClientByClientId(adminClient.realm("test"), "test-app");
//        ClientRepresentation clientRepresentation = client.toRepresentation();
//
//        RealmResource realm = adminClient.realm("test");
//        RealmRepresentation rep = realm.toRepresentation();
//        Integer originalSsoSessionMaxLifespan = rep.getSsoSessionMaxLifespan();
//        int ssoSessionMaxLifespan = rep.getSsoSessionIdleTimeout() - 100;
//        Integer originalClientSessionMaxLifespan = rep.getClientSessionMaxLifespan();
//
//        try {
//            rep.setSsoSessionMaxLifespan(ssoSessionMaxLifespan);
//            realm.update(rep);
//
//            oauth.doLogin("test-user@localhost", "password");
//            String code = oauth.parseLoginResponse().getCode();
//            AccessTokenResponse response = oauth.doAccessTokenRequest(code);
//            assertEquals(200, response.getStatusCode());
//            Assert.assertExpiration(response.getRefreshExpiresIn(), ssoSessionMaxLifespan);
//
//            rep.setClientSessionMaxLifespan(ssoSessionMaxLifespan - 100);
//            realm.update(rep);
//
//            String refreshToken = response.getRefreshToken();
//            response = oauth.doRefreshTokenRequest(refreshToken);
//            assertEquals(200, response.getStatusCode());
//            Assert.assertExpiration(response.getRefreshExpiresIn(), ssoSessionMaxLifespan - 100);
//
//            clientRepresentation.getAttributes().put(OIDCConfigAttributes.CLIENT_SESSION_MAX_LIFESPAN,
//                    Integer.toString(ssoSessionMaxLifespan - 200));
//            client.update(clientRepresentation);
//
//            refreshToken = response.getRefreshToken();
//            response = oauth.doRefreshTokenRequest(refreshToken);
//            assertEquals(200, response.getStatusCode());
//            Assert.assertExpiration(response.getRefreshExpiresIn(), ssoSessionMaxLifespan - 200);
//        } finally {
//            rep.setSsoSessionMaxLifespan(originalSsoSessionMaxLifespan);
//            rep.setClientSessionMaxLifespan(originalClientSessionMaxLifespan);
//            realm.update(rep);
//            clientRepresentation.getAttributes().put(OIDCConfigAttributes.CLIENT_SESSION_MAX_LIFESPAN, null);
//            client.update(clientRepresentation);
//        }
//    }
//
//    @Test
//    public void testClientSessionIdleTimeout() {
//        ClientResource client = ApiUtil.findClientByClientId(adminClient.realm("test"), "test-app");
//        ClientRepresentation clientRepresentation = client.toRepresentation();
//
//        RealmResource realm = adminClient.realm("test");
//        RealmRepresentation rep = realm.toRepresentation();
//        int ssoSessionIdleTimeout = rep.getSsoSessionIdleTimeout();
//        Integer originalClientSessionIdleTimeout = rep.getClientSessionIdleTimeout();
//
//        try {
//            oauth.doLogin("test-user@localhost", "password");
//            String code = oauth.parseLoginResponse().getCode();
//            AccessTokenResponse response = oauth.doAccessTokenRequest(code);
//            assertEquals(200, response.getStatusCode());
//            Assert.assertExpiration(response.getRefreshExpiresIn(), ssoSessionIdleTimeout);
//
//            rep.setClientSessionIdleTimeout(ssoSessionIdleTimeout - 100);
//            realm.update(rep);
//
//            String refreshToken = response.getRefreshToken();
//            response = oauth.doRefreshTokenRequest(refreshToken);
//            assertEquals(200, response.getStatusCode());
//            Assert.assertExpiration(response.getRefreshExpiresIn(), ssoSessionIdleTimeout - 100);
//
//            clientRepresentation.getAttributes().put(CLIENT_SESSION_IDLE_TIMEOUT,
//                    Integer.toString(ssoSessionIdleTimeout - 200));
//            client.update(clientRepresentation);
//
//            refreshToken = response.getRefreshToken();
//            response = oauth.doRefreshTokenRequest(refreshToken);
//            assertEquals(200, response.getStatusCode());
//            Assert.assertExpiration(response.getRefreshExpiresIn(), ssoSessionIdleTimeout - 200);
//        } finally {
//            rep.setClientSessionIdleTimeout(originalClientSessionIdleTimeout);
//            realm.update(rep);
//            clientRepresentation.getAttributes().put(CLIENT_SESSION_IDLE_TIMEOUT, null);
//            client.update(clientRepresentation);
//        }
//    }
//
//    @Test // KEYCLOAK-17323
//    public void testRefreshTokenWhenClientSessionTimeoutPassedButRealmDidNot() {
//        //noinspection resource
//        getCleanup()
//                .addCleanup(new RealmAttributeUpdater(adminClient.realm("test"))
//                        .setSsoSessionIdleTimeout(2592000) // 30 Days
//                        .setSsoSessionMaxLifespan(86313600) // 999 Days
//                        .update()
//                )
//                .addCleanup(ClientAttributeUpdater.forClient(adminClient, "test", "test-app")
//                        .setAttribute(CLIENT_SESSION_IDLE_TIMEOUT, "60") // 1 minute
//                        .setAttribute(CLIENT_SESSION_MAX_LIFESPAN, "65") // 1 minute 5 seconds
//                        .update()
//                );
//
//        getTestingClient().testing().setTestingInfinispanTimeService();
//        try {
//            oauth.doLogin("test-user@localhost", "password");
//            String code = oauth.parseLoginResponse().getCode();
//            AccessTokenResponse response = oauth.doAccessTokenRequest(code);
//            assertEquals(200, response.getStatusCode());
//            Assert.assertExpiration(response.getExpiresIn(), 65);
//
//            setTimeOffset(70);
//
//            oauth.openLoginForm();
//            code = oauth.parseLoginResponse().getCode();
//            AccessTokenResponse response2 = oauth.doAccessTokenRequest(code);
//            Assert.assertExpiration(response2.getExpiresIn(), 65);
//        } finally {
//            getTestingClient().testing().revertTestingInfinispanTimeService();
//            resetTimeOffset();
//        }
//    }
//
//    @Test
//    public void refreshTokenRequestNoRefreshToken() {
//        ClientResource client = ApiUtil.findClientByClientId(adminClient.realm("test"), "test-app");
//        ClientRepresentation clientRepresentation = client.toRepresentation();
//
//        oauth.doLogin("test-user@localhost", "password");
//
//        String code = oauth.parseLoginResponse().getCode();
//
//        AccessTokenResponse tokenResponse = oauth.doAccessTokenRequest(code);
//
//        String refreshTokenString = tokenResponse.getRefreshToken();
//
//        clientRepresentation.getAttributes().put(OIDCConfigAttributes.USE_REFRESH_TOKEN, "false");
//        client.update(clientRepresentation);
//        AccessTokenResponse response = oauth.doRefreshTokenRequest(refreshTokenString);
//
//        assertNotNull(response.getAccessToken());
//        assertNull(response.getRefreshToken());
//
//        clientRepresentation.getAttributes().put(OIDCConfigAttributes.USE_REFRESH_TOKEN, "true");
//        client.update(clientRepresentation);
//    }
//
//    @Test
//    public void tokenRefreshRequest_ClientRS384_RealmRS384() throws Exception {
//        conductTokenRefreshRequest(Constants.INTERNAL_SIGNATURE_ALGORITHM, Algorithm.RS384, Algorithm.RS384);
//    }
//
//    @Test
//    public void tokenRefreshRequest_ClientRS512_RealmRS256() throws Exception {
//        conductTokenRefreshRequest(Constants.INTERNAL_SIGNATURE_ALGORITHM, Algorithm.RS512, Algorithm.RS256);
//    }
//
//    @Test
//    public void tokenRefreshRequest_ClientES256_RealmRS256() throws Exception {
//        conductTokenRefreshRequest(Constants.INTERNAL_SIGNATURE_ALGORITHM, Algorithm.ES256, Algorithm.RS256);
//    }
//
//    @Test
//    public void tokenRefreshRequest_ClientES384_RealmES384() throws Exception {
//        conductTokenRefreshRequest(Constants.INTERNAL_SIGNATURE_ALGORITHM, Algorithm.ES384, Algorithm.ES384);
//    }
//
//    @Test
//    public void tokenRefreshRequest_ClientES512_RealmRS256() throws Exception {
//        conductTokenRefreshRequest(Constants.INTERNAL_SIGNATURE_ALGORITHM, Algorithm.ES512, Algorithm.RS256);
//    }
//
//    @Test
//    public void tokenRefreshRequest_ClientPS256_RealmRS256() throws Exception {
//        conductTokenRefreshRequest(Constants.INTERNAL_SIGNATURE_ALGORITHM, Algorithm.PS256, Algorithm.RS256);
//    }
//
//    @Test
//    public void tokenRefreshRequest_ClientPS384_RealmES384() throws Exception {
//        conductTokenRefreshRequest(Constants.INTERNAL_SIGNATURE_ALGORITHM, Algorithm.PS384, Algorithm.ES384);
//    }
//
//    @Test
//    public void tokenRefreshRequest_ClientPS512_RealmPS256() throws Exception {
//        conductTokenRefreshRequest(Constants.INTERNAL_SIGNATURE_ALGORITHM, Algorithm.PS512, Algorithm.PS256);
//    }

//    private void conductTokenRefreshRequest(String                                                                                                                              expectedRefreshAlg, String expectedAccessAlg, String expectedIdTokenAlg) throws Exception {
//        try {
//            // Realm setting is used for ID Token signature algorithm
//            TokenSignatureUtil.changeRealmTokenSignatureProvider(adminClient, expectedIdTokenAlg);
//            TokenSignatureUtil.changeClientAccessTokenSignatureProvider(ApiUtil.findClientByClientId(adminClient.realm("test"), "test-app"), expectedAccessAlg);
//            refreshToken(expectedRefreshAlg, expectedAccessAlg, expectedIdTokenAlg);
//        } finally {
//            TokenSignatureUtil.changeRealmTokenSignatureProvider(adminClient, Algorithm.RS256);
//            TokenSignatureUtil.changeClientAccessTokenSignatureProvider(ApiUtil.findClientByClientId(adminClient.realm("test"), "test-app"), Algorithm.RS256);
//        }
//    }
//
//    private void refreshToken(String expectedRefreshAlg, String expectedAccessAlg, String expectedIdTokenAlg) throws Exception {
//        oauth.doLogin("test-user@localhost", "password");
//
//        EventRepresentation loginEvent = events.expectLogin().assertEvent();
//
//        String sessionId = loginEvent.getSessionId();
//        String codeId = loginEvent.getDetails().get(Details.CODE_ID);
//
//        String code = oauth.parseLoginResponse().getCode();
//
//        AccessTokenResponse tokenResponse = oauth.doAccessTokenRequest(code);
//
//        JWSHeader header = new JWSInput(tokenResponse.getAccessToken()).getHeader();
//        assertEquals(expectedAccessAlg, header.getAlgorithm().name());
//        assertEquals("JWT", header.getType());
//        assertNull(header.getContentType());
//
//        header = new JWSInput(tokenResponse.getIdToken()).getHeader();
//        assertEquals(expectedIdTokenAlg, header.getAlgorithm().name());
//        assertEquals("JWT", header.getType());
//        assertNull(header.getContentType());
//
//        header = new JWSInput(tokenResponse.getRefreshToken()).getHeader();
//        assertEquals(expectedRefreshAlg, header.getAlgorithm().name());
//        assertEquals("JWT", header.getType());
//        assertNull(header.getContentType());
//
//        AccessToken token = oauth.verifyToken(tokenResponse.getAccessToken());
//        String refreshTokenString = tokenResponse.getRefreshToken();
//        RefreshToken refreshToken = oauth.parseRefreshToken(refreshTokenString);
//
//        EventRepresentation tokenEvent = events.expectCodeToToken(codeId, sessionId).assertEvent();
//
//        assertNotNull(refreshTokenString);
//
//        assertEquals("Bearer", tokenResponse.getTokenType());
//
//        assertEquals(sessionId, refreshToken.getSessionId());
//
//        AccessTokenResponse response = oauth.doRefreshTokenRequest(refreshTokenString);
//        if (response.getError() != null || response.getErrorDescription() != null) {
//            log.debugf("Refresh token error: %s, error description: %s", response.getError(), response.getErrorDescription());
//        }
//
//        AccessToken refreshedToken = oauth.verifyToken(response.getAccessToken());
//        RefreshToken refreshedRefreshToken = oauth.parseRefreshToken(response.getRefreshToken());
//
//        assertEquals(200, response.getStatusCode());
//
//        assertEquals(sessionId, refreshedToken.getSessionId());
//        assertEquals(sessionId, refreshedRefreshToken.getSessionId());
//
//        Assert.assertNotEquals(token.getId(), refreshedToken.getId());
//        Assert.assertNotEquals(refreshToken.getId(), refreshedRefreshToken.getId());
//
//        assertEquals("Bearer", response.getTokenType());
//
//        Assert.assertEquals(ApiUtil.findUserByUsername(adminClient.realm("test"), "test-user@localhost").getId(), refreshedToken.getSubject());
//        // The following check is not valid anymore since file store does have the same ID, and is redundant due to the previous line
//        // Assert.assertNotEquals("test-user@localhost", refreshedToken.getSubject());
//
//        EventRepresentation refreshEvent = events.expectRefresh(tokenEvent.getDetails().get(Details.REFRESH_TOKEN_ID), sessionId).assertEvent();
//        Assert.assertNotEquals(tokenEvent.getDetails().get(Details.TOKEN_ID), refreshEvent.getDetails().get(Details.TOKEN_ID));
//        Assert.assertNotEquals(tokenEvent.getDetails().get(Details.REFRESH_TOKEN_ID), refreshEvent.getDetails().get(Details.UPDATED_REFRESH_TOKEN_ID));
//    }

    private String loginAndForceNewLoginPage() {
        oauth.doLogin("test-user@localhost", "password");

        EventRepresentation loginEvent = events.poll();
        EventAssertion.assertSuccess(loginEvent)
                .userId(user.getId())
                .clientId("test-app")
                .hasSessionId()
                .type(EventType.LOGIN);

        String sessionId = loginEvent.getSessionId();

        String code = oauth.parseLoginResponse().getCode();
        AccessTokenResponse tokenResponse = oauth.doAccessTokenRequest(code);

        EventAssertion.assertSuccess(events.poll())
                .type(EventType.CODE_TO_TOKEN);

        // Assert refresh successful
        String refreshToken = tokenResponse.getRefreshToken();
        RefreshToken refreshTokenParsed1 = oauth.parseRefreshToken(tokenResponse.getRefreshToken());
        processExpectedValidRefresh(sessionId, refreshTokenParsed1, refreshToken);

        // Open the tab with prompt=login. AuthenticationSession will be created with same ID like userSession
        oauth.loginForm()
                .prompt(OIDCLoginProtocol.PROMPT_VALUE_LOGIN)
                .open();

        loginPage.assertCurrent();
        Assert.assertEquals("test-user@localhost", loginPage.getAttemptedUsername());

        return refreshToken;
    }
}
