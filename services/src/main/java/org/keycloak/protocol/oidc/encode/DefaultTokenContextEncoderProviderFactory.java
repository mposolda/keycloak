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

package org.keycloak.protocol.oidc.encode;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import org.keycloak.Config;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.KeycloakSessionFactory;
import org.keycloak.protocol.oidc.grants.OAuth2GrantType;
import org.keycloak.protocol.oidc.grants.OAuth2GrantTypeFactory;

/**
 * @author <a href="mailto:mposolda@redhat.com">Marek Posolda</a>
 */
public class DefaultTokenContextEncoderProviderFactory implements TokenContextEncoderProviderFactory {

    Map<String, AccessTokenContext.SessionType> sessionTypesByShortcut;
    Map<String, AccessTokenContext.TokenType> tokenTypesByShortcut;
    Map<String, String> grantsByShortcuts;
    Map<String, String> grantsToShortcuts;

    @Override
    public TokenContextEncoderProvider create(KeycloakSession session) {
        return new DefaultTokenContextEncoderProvider(session, sessionTypesByShortcut, tokenTypesByShortcut, grantsByShortcuts, grantsToShortcuts);
    }

    @Override
    public void init(Config.Scope config) {
        sessionTypesByShortcut = new HashMap<>();
        for (AccessTokenContext.SessionType st : AccessTokenContext.SessionType.values()) {
            sessionTypesByShortcut.put(st.getShortcut(), st);
        }
        sessionTypesByShortcut = Collections.unmodifiableMap(sessionTypesByShortcut);

        tokenTypesByShortcut = new HashMap<>();
        for (AccessTokenContext.TokenType tt : AccessTokenContext.TokenType.values()) {
            tokenTypesByShortcut.put(tt.getShortcut(), tt);
        }
        tokenTypesByShortcut = Collections.unmodifiableMap(tokenTypesByShortcut);
    }

    @Override
    public void postInit(KeycloakSessionFactory factory) {
        grantsByShortcuts = new HashMap<>();
        grantsToShortcuts = new HashMap<>();

        factory.getProviderFactoriesStream(OAuth2GrantType.class)
                .forEach((factory1) -> {
                    OAuth2GrantTypeFactory gtf = (OAuth2GrantTypeFactory) factory1;
                    String grantName = gtf.getId();
                    String grantShortcut = gtf.getShortcut();
                    grantsByShortcuts.put(grantShortcut, grantName);
                    grantsToShortcuts.put(grantName, grantShortcut);
                });
        grantsByShortcuts.put(DefaultTokenContextEncoderProvider.UNKNOWN, DefaultTokenContextEncoderProvider.UNKNOWN);
        grantsToShortcuts.put(DefaultTokenContextEncoderProvider.UNKNOWN, DefaultTokenContextEncoderProvider.UNKNOWN);

        // Validation if there are not duplicated shortcuts (for example when introducing new grant impl...)
        if (grantsByShortcuts.size() != grantsToShortcuts.size()) {
            throw new IllegalStateException("Different lengths of maps. grantsByShortcuts.size=" + grantsByShortcuts.size() + ", grantsToShortcuts.size=" + grantsToShortcuts.size() + ". Make sure that there is no grant with same ID or shortcut like other grants");
        }

        grantsByShortcuts = Collections.unmodifiableMap(grantsByShortcuts);
        grantsToShortcuts = Collections.unmodifiableMap(grantsToShortcuts);
    }

    @Override
    public void close() {

    }

    @Override
    public String getId() {
        return "default";
    }
}
