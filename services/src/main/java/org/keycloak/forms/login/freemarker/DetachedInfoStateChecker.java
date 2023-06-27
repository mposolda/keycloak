/*
 * Copyright 2023 Red Hat, Inc. and/or its affiliates
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

package org.keycloak.forms.login.freemarker;

import java.util.List;
import java.util.Set;

import jakarta.ws.rs.core.UriInfo;
import org.jboss.logging.Logger;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.RealmModel;
import org.keycloak.models.utils.KeycloakModelUtils;
import org.keycloak.services.managers.AuthenticationManager;
import org.keycloak.services.util.CookieHelper;

/**
 * @author <a href="mailto:mposolda@redhat.com">Marek Posolda</a>
 */
public class DetachedInfoStateChecker {

    private static final Logger logger = Logger.getLogger(DetachedInfoStateChecker.class);

    private static final String STATE_CHECKER_COOKIE_NAME = "KC_STATE_CHECKER";
    public static final String STATE_CHECKER_PARAM = "kc_state_checker";

    private final KeycloakSession session;
    private final RealmModel realm;

    public DetachedInfoStateChecker(KeycloakSession session, RealmModel realm) {
        this.session = session;
        this.realm = realm;
    }

    public String generateAndSetCookie() {
        UriInfo uriInfo = session.getContext().getHttpRequest().getUri();
        String path = AuthenticationManager.getRealmCookiePath(realm, uriInfo);
        boolean secureOnly = realm.getSslRequired().isRequired(session.getContext().getConnection());

        String currentStateCheckerInUrl = uriInfo.getQueryParameters().getFirst(STATE_CHECKER_PARAM);

        String newValue = KeycloakModelUtils.generateId();
        String newCookieValue = currentStateCheckerInUrl == null ? newValue : currentStateCheckerInUrl + "." + newValue;
        int cookieMaxAge = realm.getAccessCodeLifespanUserAction();

        // TODO:mposolda maybe trace
        logger.infof("Generating new %s cookie. Previous state: %s, New state: %s, Cookie lifespan: %d", STATE_CHECKER_COOKIE_NAME, currentStateCheckerInUrl, newValue, cookieMaxAge);

        CookieHelper.addCookie(STATE_CHECKER_COOKIE_NAME, newCookieValue, path, null, null, cookieMaxAge, secureOnly, true, session);
        return newValue;
    }

    public boolean verifyStateCheckerParameter(String stateCheckerParam) {
        Set<String> cookieVal = CookieHelper.getCookieValue(session, STATE_CHECKER_COOKIE_NAME);

        // TODO:mposolda trace?
        logger.infof("State checker cookies: %s, State checker param: %s", cookieVal, stateCheckerParam);

        if (cookieVal == null || cookieVal.isEmpty()) {
            return false;
        }

        String cookie = cookieVal.iterator().next();
        String[] cookieStates = cookie.split("\\.");
        if (cookieStates.length > 2) {
            throw new IllegalStateException("Expected size at max 2");
        }

        // May want to compare with the old state (when refreshing info/error page) or with new state (when changing locale on the info/error page)
        for (String cookieState : cookieStates) {
            if (cookieState.equals(stateCheckerParam)) {
                return true;
            }
        }

        return false;
    }
}
