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

package org.keycloak.services.clientpolicy.executor;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.keycloak.Config;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.KeycloakSessionFactory;
import org.keycloak.provider.ProviderConfigProperty;

/**
 * @author <a href="mailto:mposolda@redhat.com">Marek Posolda</a>
 */
public class TokenExchangeExecutorFactory implements ClientPolicyExecutorProviderFactory {

    public static final String PROVIDER_ID = "token-exchange-policy";

//    public static final String ALLOWED_SCOPES = "allowed-scopes";
//
//    private static final ProviderConfigProperty ALLOWED_SCOPES_PROPERTY = new ProviderConfigProperty(
//            ALLOWED_SCOPES, "Require Client Assertion", "If this is ON, then parameter 'client_assertion' will be required in the requests and request will fail if it is not present. " +
//            "If false, then parameter 'client_assertion' is not required in the requests, which is convenient for example for clients authenticating with MTLS. When 'client_assertion' parameter is present in the request, " +
//            "then the algorithm on the JWT from specified client assertion is always checked regardless of the value of this switch", ProviderConfigProperty.BOOLEAN_TYPE, false);

    private static final List<ProviderConfigProperty> configProperties = new ArrayList<ProviderConfigProperty>();

    static {
        ProviderConfigProperty property;
        property = new ProviderConfigProperty("allowed-scopes", "Allowed scopes", "Which scopes are allowed", ProviderConfigProperty.MULTIVALUED_LIST_TYPE, "profile");
        List<String> updateProfileValues = Arrays.asList("profile", "email", "address", "offline_access", "phone");
        property.setOptions(updateProfileValues);
        configProperties.add(property);

        property = new ProviderConfigProperty("allowed-token-types", "Allowed requested token types", "Which requested token types are allowed", ProviderConfigProperty.MULTIVALUED_LIST_TYPE, "access-token");
        updateProfileValues = Arrays.asList("access-token", "refresh-token", "id-token", "saml2-assertion");
        property.setOptions(updateProfileValues);
        configProperties.add(property);

        property = new ProviderConfigProperty("allow-when-consent-required", "Allow when audience has Consent required",
                "Allow to exchange when audience client has Consent required. Option 'only-when-granted' means that token exchange is allowed if subject user already granted consent to the target client for all requested scopes",
                ProviderConfigProperty.MULTIVALUED_LIST_TYPE, "never");
        updateProfileValues = Arrays.asList("never", "only-when-granted", "always");
        property.setOptions(updateProfileValues);
        configProperties.add(property);

        property = new ProviderConfigProperty("allow-public-clients-to-exchange", "Allow public clients to exchange", "Are public clients allowed to exchange tokens", ProviderConfigProperty.BOOLEAN_TYPE, false);
        configProperties.add(property);

        property = new ProviderConfigProperty("allow-public-clients-as-audience", "Allow public clients as audience", "Are public clients allowed when they are audience", ProviderConfigProperty.BOOLEAN_TYPE, false);
        configProperties.add(property);



    }

    @Override
    public ClientPolicyExecutorProvider create(KeycloakSession session) {
        return new TokenExchangeExecutor(session);
    }

    @Override
    public void init(Config.Scope config) {
    }

    @Override
    public void postInit(KeycloakSessionFactory factory) {
    }

    @Override
    public void close() {
    }

    @Override
    public String getId() {
        return PROVIDER_ID;
    }

    @Override
    public String getHelpText() {
        return "It allows to configure what things are allowed for token exchange";
    }

    @Override
    public List<ProviderConfigProperty> getConfigProperties() {
        return configProperties;
    }
}
