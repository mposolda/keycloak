package org.keycloak.tests.oauth;

import org.hamcrest.MatcherAssert;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;

import org.junit.jupiter.api.Test;

import org.keycloak.OAuthErrorException;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.events.Details;
import org.keycloak.events.EventType;
import org.keycloak.models.Constants;
import org.keycloak.representations.RefreshToken;
import org.keycloak.representations.idm.ClientScopeRepresentation;
import org.keycloak.representations.idm.EventRepresentation;
import org.keycloak.representations.idm.RealmRepresentation;
import org.keycloak.representations.idm.UserSessionRepresentation;
import org.keycloak.testframework.annotations.InjectAdminClient;
import org.keycloak.testframework.annotations.InjectClient;
import org.keycloak.testframework.annotations.InjectEvents;
import org.keycloak.testframework.annotations.InjectRealm;
import org.keycloak.testframework.annotations.InjectUser;
import org.keycloak.testframework.annotations.KeycloakIntegrationTest;
import org.keycloak.testframework.events.EventAssertion;
import org.keycloak.testframework.events.Events;
import org.keycloak.testframework.oauth.OAuthClient;
import org.keycloak.testframework.oauth.annotations.InjectOAuthClient;
import org.keycloak.testframework.realm.ManagedClient;
import org.keycloak.testframework.realm.ManagedRealm;
import org.keycloak.testframework.realm.ManagedUser;
import org.keycloak.testframework.remote.runonserver.InjectRunOnServer;
import org.keycloak.testframework.remote.runonserver.RunOnServerClient;
import org.keycloak.testframework.remote.timeoffset.InjectTimeOffSet;
import org.keycloak.testframework.remote.timeoffset.TimeOffSet;
import org.keycloak.testframework.ui.annotations.InjectPage;
import org.keycloak.testframework.ui.annotations.InjectWebDriver;
import org.keycloak.testframework.ui.page.LoginPage;
import org.keycloak.testframework.ui.webdriver.BrowserTabUtils;
import org.keycloak.testframework.ui.webdriver.ManagedWebDriver;
import org.keycloak.tests.common.TestRealmUserConfig;
import org.keycloak.testsuite.util.AccountHelper;
import org.keycloak.testsuite.util.oauth.AccessTokenResponse;
import org.keycloak.testsuite.util.oauth.IntrospectionResponse;
import org.keycloak.testsuite.util.oauth.UserInfoResponse;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import static org.keycloak.tests.oauth.RefreshTokenTest.enableRefreshTokenEvents;

/**
 * Test for the scenarios of refresh-token with "revokeRefreshToken" enabled on realm
 */
@KeycloakIntegrationTest
public class RefreshTokenRevokeTest {

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

    @InjectRealm(config = RefreshTokenTest.RefreshTokenTestRealmConfig.class)
    protected ManagedRealm realm;

    @InjectUser(config = TestRealmUserConfig.class)
    protected ManagedUser user;

    @InjectClient(attachTo = "test-app")
    ManagedClient managedClient;

    @BeforeEach
    public void before() {
        enableRefreshTokenEvents(realm);
        AccountHelper.logout(realm.admin(), user.getUsername());
    }


    @Test
    public void refreshTokenReuseTokenWithoutRefreshTokensRevoked() {
        oauth.doLogin("test-user@localhost", "password");

        EventRepresentation loginEvent = events.poll();
        EventAssertion.assertSuccess(loginEvent)
                .userId(user.getId());

        String sessionId = loginEvent.getSessionId();

        String code = oauth.parseLoginResponse().getCode();

        AccessTokenResponse response1 = oauth.doAccessTokenRequest(code);
        RefreshToken refreshToken1 = oauth.parseRefreshToken(response1.getRefreshToken());

        EventAssertion.assertSuccess(events.poll())
                .type(EventType.CODE_TO_TOKEN);

        AccessTokenResponse response2 = oauth.doRefreshTokenRequest(response1.getRefreshToken());
        assertEquals(200, response2.getStatusCode());

        EventAssertion.assertSuccess(events.poll())
                .sessionId(sessionId)
                .details(Details.REFRESH_TOKEN_ID, refreshToken1.getId())
                .type(EventType.REFRESH_TOKEN);

        AccessTokenResponse response3 = oauth.doRefreshTokenRequest(response1.getRefreshToken());

        assertEquals(200, response3.getStatusCode());

        EventAssertion.assertSuccess(events.poll())
                .sessionId(sessionId)
                .details(Details.REFRESH_TOKEN_ID, refreshToken1.getId())
                .type(EventType.REFRESH_TOKEN);
    }


    @Test
    public void refreshTokenReuseTokenWithRefreshTokensRevoked() {
        realm.updateWithCleanup(r -> r.revokeRefreshToken(true));

        oauth.doLogin("test-user@localhost", "password");

        EventRepresentation loginEvent = events.poll();
        EventAssertion.assertSuccess(loginEvent)
                .userId(user.getId());

        String sessionId = loginEvent.getSessionId();

        String code = oauth.parseLoginResponse().getCode();

        AccessTokenResponse response1 = oauth.doAccessTokenRequest(code);
        RefreshToken refreshToken1 = oauth.parseRefreshToken(response1.getRefreshToken());

        EventAssertion.assertSuccess(events.poll())
                .type(EventType.CODE_TO_TOKEN);

        AccessTokenResponse response2 = oauth.doRefreshTokenRequest(response1.getRefreshToken());
        RefreshToken refreshToken2 = oauth.parseRefreshToken(response2.getRefreshToken());

        assertEquals(200, response2.getStatusCode());

        EventAssertion.assertSuccess(events.poll())
                .sessionId(sessionId)
                .details(Details.REFRESH_TOKEN_ID, refreshToken1.getId())
                .type(EventType.REFRESH_TOKEN);

        AccessTokenResponse response3 = oauth.doRefreshTokenRequest(response1.getRefreshToken());

        assertEquals(400, response3.getStatusCode());

        EventAssertion.assertError(events.poll())
                .sessionId(sessionId)
                .details(Details.REFRESH_TOKEN_ID, refreshToken1.getId())
                .type(EventType.REFRESH_TOKEN_ERROR)
                .error("invalid_token");

        // Client session invalidated hence old refresh token not valid anymore
        AccessTokenResponse response4 = oauth.doRefreshTokenRequest(response2.getRefreshToken());
        assertEquals(400, response4.getStatusCode());
        EventAssertion.assertError(events.poll())
                .sessionId(sessionId)
                .details(Details.REFRESH_TOKEN_ID, refreshToken2.getId())
                .type(EventType.REFRESH_TOKEN_ERROR)
                .error("invalid_token");
    }


    @Test
    public void refreshTokenReuseOnDifferentTab() {
        BrowserTabUtils browserTabs = driver.tabs();
        try {
            realm.updateWithCleanup(r -> r.revokeRefreshToken(true));

            //login with tab 1
            oauth.doLogin("test-user@localhost", "password");
            EventRepresentation loginEvent = events.poll();
            EventAssertion.assertSuccess(loginEvent)
                    .userId(user.getId());
            String sessionId = loginEvent.getSessionId();
            String code = oauth.parseLoginResponse().getCode();

            AccessTokenResponse response1 = oauth.doAccessTokenRequest(code);
            RefreshToken refreshToken1 = oauth.parseRefreshToken(response1.getRefreshToken());
            EventAssertion.assertSuccess(events.poll())
                    .type(EventType.CODE_TO_TOKEN);
            assertNotNull(refreshToken1.getOtherClaims().get(Constants.REUSE_ID));
            assertNotEquals(refreshToken1.getOtherClaims().get(Constants.REUSE_ID), refreshToken1.getId());

            //login with tab 2
            browserTabs.newTab(oauth.loginForm().build());
            MatcherAssert.assertThat(browserTabs.getCountOfTabs(), Matchers.equalTo(2));

            loginEvent = events.poll();
            EventAssertion.assertSuccess(loginEvent)
                    .userId(user.getId());
            sessionId = loginEvent.getSessionId();
            code = oauth.parseLoginResponse().getCode();

            AccessTokenResponse responseNew = oauth.doAccessTokenRequest(code);
            RefreshToken refreshTokenNew = oauth.parseRefreshToken(responseNew.getRefreshToken());

            EventAssertion.assertSuccess(events.poll())
                    .type(EventType.CODE_TO_TOKEN);
            assertNotNull(refreshToken1.getOtherClaims().get(Constants.REUSE_ID));
            assertNotEquals(refreshTokenNew.getOtherClaims().get(Constants.REUSE_ID), refreshTokenNew.getId());
            assertNotEquals(refreshToken1.getOtherClaims().get(Constants.REUSE_ID), refreshTokenNew.getOtherClaims().get(Constants.REUSE_ID));

            timeOffSet.set(10);

            //refresh with token from tab 1
            AccessTokenResponse response2 = oauth.doRefreshTokenRequest(response1.getRefreshToken());
            assertEquals(200, response2.getStatusCode());
            RefreshToken refreshToken2 = oauth.parseRefreshToken(response2.getRefreshToken());
            EventAssertion.assertSuccess(events.poll())
                    .type(EventType.REFRESH_TOKEN)
                    .sessionId(sessionId)
                    .details(Details.REFRESH_TOKEN_ID, refreshToken1.getId())
                    .details(Details.UPDATED_REFRESH_TOKEN_ID, refreshToken2.getId());

            assertNotEquals(refreshToken2.getOtherClaims().get(Constants.REUSE_ID), refreshToken2.getId());
            assertEquals(refreshToken1.getOtherClaims().get(Constants.REUSE_ID), refreshToken2.getOtherClaims().get(Constants.REUSE_ID));

            //refresh with token from tab 2
            AccessTokenResponse responseNew1 = oauth.doRefreshTokenRequest(responseNew.getRefreshToken());
            assertEquals(200, responseNew1.getStatusCode());
            RefreshToken refreshTokenNew1 = oauth.parseRefreshToken(responseNew1.getRefreshToken());
            EventAssertion.assertSuccess(events.poll())
                    .sessionId(sessionId)
                    .details(Details.REFRESH_TOKEN_ID, refreshTokenNew.getId())
                    .type(EventType.REFRESH_TOKEN);

            assertNotEquals(refreshTokenNew1.getOtherClaims().get(Constants.REUSE_ID), refreshTokenNew1.getId());
            assertEquals(refreshTokenNew.getOtherClaims().get(Constants.REUSE_ID), refreshTokenNew1.getOtherClaims().get(Constants.REUSE_ID));

            //try refresh token reuse with token from tab 2
            responseNew1 = oauth.doRefreshTokenRequest(responseNew.getRefreshToken());
            assertEquals(400, responseNew1.getStatusCode());
        } finally {
            timeOffSet.set(0);
            browserTabs.closeTabs();
        }
    }

    @Test
    public void refreshTokenReuseTokenWithRefreshTokensRevokedAfterSingleReuse() {
        realm.updateWithCleanup(r ->
                r.revokeRefreshToken(true)
                        .refreshTokenMaxReuse(1)

        );

        oauth.doLogin("test-user@localhost", "password");

        EventRepresentation loginEvent = events.poll();
        EventAssertion.assertSuccess(loginEvent)
                .userId(user.getId());

        String sessionId = loginEvent.getSessionId();

        String code = oauth.parseLoginResponse().getCode();

        AccessTokenResponse initialResponse = oauth.doAccessTokenRequest(code);
        RefreshToken initialRefreshToken = oauth.parseRefreshToken(initialResponse.getRefreshToken());

        EventAssertion.assertSuccess(events.poll())
                .type(EventType.CODE_TO_TOKEN);

        // Initial refresh.
        AccessTokenResponse responseFirstUse = oauth.doRefreshTokenRequest(initialResponse.getRefreshToken());
        RefreshToken newTokenFirstUse = oauth.parseRefreshToken(responseFirstUse.getRefreshToken());

        assertEquals(200, responseFirstUse.getStatusCode());

        EventAssertion.assertSuccess(events.poll())
                .sessionId(sessionId)
                .details(Details.REFRESH_TOKEN_ID, initialRefreshToken.getId())
                .type(EventType.REFRESH_TOKEN);

        // Second refresh (allowed).
        AccessTokenResponse responseFirstReuse = oauth.doRefreshTokenRequest(initialResponse.getRefreshToken());
        RefreshToken newTokenFirstReuse = oauth.parseRefreshToken(responseFirstReuse.getRefreshToken());
        String userId = newTokenFirstReuse.getSubject();

        assertEquals(200, responseFirstReuse.getStatusCode());

        EventAssertion.assertSuccess(events.poll())
                .sessionId(sessionId)
                .details(Details.REFRESH_TOKEN_ID, initialRefreshToken.getId())
                .details(Details.REFRESH_TOKEN_SUB, userId)
                .type(EventType.REFRESH_TOKEN);

        // Token reused twice, became invalid.
        AccessTokenResponse responseSecondReuse = oauth.doRefreshTokenRequest(initialResponse.getRefreshToken());

        assertEquals(400, responseSecondReuse.getStatusCode());

        EventAssertion.assertError(events.poll())
                .sessionId(sessionId)
                .details(Details.REFRESH_TOKEN_ID, initialRefreshToken.getId())
                .details(Details.REFRESH_TOKEN_SUB, userId)
                .type(EventType.REFRESH_TOKEN_ERROR).error("invalid_token");

        // Refresh token from first use became invalid.
        AccessTokenResponse responseUseOfInvalidatedRefreshToken =
                oauth.doRefreshTokenRequest(responseFirstUse.getRefreshToken());

        assertEquals(400, responseUseOfInvalidatedRefreshToken.getStatusCode());

        EventAssertion.assertError(events.poll())
                .sessionId(sessionId)
                .details(Details.REFRESH_TOKEN_ID, newTokenFirstUse.getId())
                .details(Details.REFRESH_TOKEN_SUB, userId)
                .type(EventType.REFRESH_TOKEN_ERROR).error("invalid_token");

        // Refresh token from reuse is not valid. Client session was invalidated
        AccessTokenResponse responseUseOfValidRefreshToken =
                oauth.doRefreshTokenRequest(responseFirstReuse.getRefreshToken());

        assertEquals(400, responseUseOfValidRefreshToken.getStatusCode());

        EventAssertion.assertError(events.poll())
                .sessionId(sessionId)
                .details(Details.REFRESH_TOKEN_ID, newTokenFirstReuse.getId())
                .details(Details.REFRESH_TOKEN_SUB, userId)
                .type(EventType.REFRESH_TOKEN_ERROR).error("invalid_token");
    }

    @Test
    public void refreshTokenReuseOfExistingTokenAfterEnablingReuseRevokation() {
        oauth.doLogin("test-user@localhost", "password");

        EventRepresentation loginEvent = events.poll();
        EventAssertion.assertSuccess(loginEvent)
                .userId(user.getId());
        String sessionId = loginEvent.getSessionId();

        String code = oauth.parseLoginResponse().getCode();

        AccessTokenResponse initialResponse = oauth.doAccessTokenRequest(code);
        RefreshToken initialRefreshToken = oauth.parseRefreshToken(initialResponse.getRefreshToken());

        EventAssertion.assertSuccess(events.poll())
                .type(EventType.CODE_TO_TOKEN);

        // Infinite reuse allowed
        processExpectedValidRefresh(sessionId, initialRefreshToken, initialResponse.getRefreshToken());
        processExpectedValidRefresh(sessionId, initialRefreshToken, initialResponse.getRefreshToken());
        processExpectedValidRefresh(sessionId, initialRefreshToken, initialResponse.getRefreshToken());

        realm.updateWithCleanup(r ->
                r.revokeRefreshToken(true)
                        .refreshTokenMaxReuse(1)

        );

        // Config changed, we start tracking reuse.
        processExpectedValidRefresh(sessionId, initialRefreshToken, initialResponse.getRefreshToken());
        processExpectedValidRefresh(sessionId, initialRefreshToken, initialResponse.getRefreshToken());

        AccessTokenResponse responseReuseExceeded = oauth.doRefreshTokenRequest(initialResponse.getRefreshToken());

        assertEquals(400, responseReuseExceeded.getStatusCode());

        EventAssertion.assertError(events.poll())
                .sessionId(sessionId)
                .details(Details.REFRESH_TOKEN_ID, initialRefreshToken.getId())
                .details(Details.REFRESH_TOKEN_SUB, user.getId())
                .type(EventType.REFRESH_TOKEN_ERROR).error("invalid_token");
    }

    private void processExpectedValidRefresh(String sessionId, RefreshToken requestToken, String refreshToken) {
        AccessTokenResponse response2 = oauth.doRefreshTokenRequest(refreshToken);
        assertEquals(200, response2.getStatusCode());
        EventAssertion.assertSuccess(events.poll())
                .sessionId(sessionId)
                .details(Details.REFRESH_TOKEN_ID, requestToken.getId())
                .type(EventType.REFRESH_TOKEN);
    }

    // Returns true if "test-user@localhost" has any user session with client session for "test-app"
    private boolean hasClientSessionForTestApp() {
        List<UserSessionRepresentation> userSessions = user.admin().getUserSessions();
        return userSessions.stream()
                .anyMatch(userSession -> userSession.getClients().containsValue("test-app"));
    }


    @Test
    public void refreshTokenReuseOfExistingTokenAfterDisablingReuseRevokation() {
        realm.updateWithCleanup(r ->
                r.revokeRefreshToken(true)
                        .refreshTokenMaxReuse(1)

        );

        oauth.doLogin("test-user@localhost", "password");

        EventRepresentation loginEvent = events.poll();
        EventAssertion.assertSuccess(loginEvent)
                .userId(user.getId());
        String sessionId = loginEvent.getSessionId();

        String code = oauth.parseLoginResponse().getCode();

        AccessTokenResponse initialResponse = oauth.doAccessTokenRequest(code);
        RefreshToken initialRefreshToken = oauth.parseRefreshToken(initialResponse.getRefreshToken());

        EventAssertion.assertSuccess(events.poll())
                .type(EventType.CODE_TO_TOKEN);

        // Single reuse authorized.
        processExpectedValidRefresh(sessionId, initialRefreshToken, initialResponse.getRefreshToken());
        processExpectedValidRefresh(sessionId, initialRefreshToken, initialResponse.getRefreshToken());

        AccessTokenResponse responseReuseExceeded = oauth.doRefreshTokenRequest(initialResponse.getRefreshToken());

        assertEquals(400, responseReuseExceeded.getStatusCode());

        EventAssertion.assertError(events.poll())
                .sessionId(sessionId)
                .details(Details.REFRESH_TOKEN_ID, initialRefreshToken.getId())
                .type(EventType.REFRESH_TOKEN_ERROR).error("invalid_token");

        RealmRepresentation realmRep = realm.admin().toRepresentation();
        realmRep.setRevokeRefreshToken(false);
        realm.admin().update(realmRep);

        // Config changed, token cannot be used again at this point due the client session invalidated
        AccessTokenResponse responseReuseExceeded2 = oauth.doRefreshTokenRequest(initialResponse.getRefreshToken());
        assertEquals(400, responseReuseExceeded2.getStatusCode());
        EventAssertion.assertError(events.poll())
                .sessionId(sessionId)
                .details(Details.REFRESH_TOKEN_ID, initialRefreshToken.getId())
                .type(EventType.REFRESH_TOKEN_ERROR).error("invalid_token");
    }

    // Doublecheck that with "revokeRefreshToken" and revoked tokens, the SSO re-authentication won't cause old tokens to be valid again
    @Test
    public void refreshTokenReuseTokenWithRefreshTokensRevokedAndSSOReauthentication() throws Exception {
        try {
            // Initial login
            realm.updateWithCleanup(r ->
                    r.revokeRefreshToken(true)
            );

            oauth.doLogin("test-user@localhost", "password");

            EventRepresentation loginEvent = events.poll();
            EventAssertion.assertSuccess(loginEvent)
                    .userId(user.getId());
            String sessionId = loginEvent.getSessionId();

            String code = oauth.parseLoginResponse().getCode();

            AccessTokenResponse response1 = oauth.doAccessTokenRequest(code);
            RefreshToken refreshToken1 = oauth.parseRefreshToken(response1.getRefreshToken());

            EventAssertion.assertSuccess(events.poll())
                    .type(EventType.CODE_TO_TOKEN);

            // Refresh token for the first time - should pass
            AccessTokenResponse response2 = oauth.doRefreshTokenRequest(response1.getRefreshToken());
            RefreshToken refreshToken2 = oauth.parseRefreshToken(response2.getRefreshToken());

            assertEquals(200, response2.getStatusCode());

            EventAssertion.assertSuccess(events.poll())
                    .sessionId(sessionId)
                    .details(Details.REFRESH_TOKEN_ID, refreshToken1.getId())
                    .type(EventType.REFRESH_TOKEN);

            // Client sessions is available now
            assertTrue(hasClientSessionForTestApp());

            // Refresh token for the second time - should fail and invalidate client session

            AccessTokenResponse response3 = oauth.doRefreshTokenRequest(response1.getRefreshToken());

            assertEquals(400, response3.getStatusCode());

            EventAssertion.assertError(events.poll())
                    .sessionId(sessionId)
                    .details(Details.REFRESH_TOKEN_ID, refreshToken1.getId())
                    .type(EventType.REFRESH_TOKEN_ERROR).error("invalid_token");

            // No client sessions available after revoke
            assertFalse(hasClientSessionForTestApp());

            // Introspection with the accessToken from the first authentication. This should fail
            IntrospectionResponse introspectionResponse = oauth.doIntrospectionAccessTokenRequest(response1.getAccessToken());
            assertFalse(introspectionResponse.asTokenMetadata().isActive());
            events.clear();

            // SSO re-authentication
            timeOffSet.set(2);
            oauth.openLoginForm();

            loginEvent = events.poll();
            EventAssertion.assertSuccess(loginEvent)
                    .userId(user.getId());
            sessionId = loginEvent.getSessionId();
            code = oauth.parseLoginResponse().getCode();

            AccessTokenResponse response4 = oauth.doAccessTokenRequest(code);
            oauth.parseRefreshToken(response4.getRefreshToken());
            events.clear();

            // Client sessions should be available again now after re-authentication
            assertTrue(hasClientSessionForTestApp());

            // Introspection again with the accessToken from the very first authentication. This should fail as the access token was obtained for the old client session before SSO re-authentication
            introspectionResponse = oauth.doIntrospectionAccessTokenRequest(response1.getAccessToken());
            assertFalse(introspectionResponse.asTokenMetadata().isActive());
            events.clear();

            // Try userInfo with the same old access token. Should fail as well
            UserInfoResponse userInfo = oauth.doUserInfoRequest(response1.getAccessToken());
            assertEquals(401, userInfo.getStatusCode());
            assertEquals(OAuthErrorException.INVALID_TOKEN, userInfo.getError());

            events.clear();

            // Try to refresh with one of the old refresh tokens before SSO re-authentication - should fail
            AccessTokenResponse response5 = oauth.doRefreshTokenRequest(response2.getRefreshToken());
            assertEquals(400, response5.getStatusCode());
            EventAssertion.assertError(events.poll())
                    .sessionId(sessionId)
                    .details(Details.REFRESH_TOKEN_ID, refreshToken2.getId())
                    .type(EventType.REFRESH_TOKEN_ERROR).error("invalid_token");
        } finally {
            timeOffSet.set(0);
        }
    }

}
