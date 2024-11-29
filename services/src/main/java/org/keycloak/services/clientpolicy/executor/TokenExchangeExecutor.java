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


import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.jboss.logging.Logger;
import org.keycloak.models.KeycloakSession;
import org.keycloak.representations.idm.ClientPolicyExecutorConfigurationRepresentation;
import org.keycloak.services.clientpolicy.ClientPolicyContext;
import org.keycloak.services.clientpolicy.ClientPolicyException;

/**
 * @author <a href="mailto:mposolda@redhat.com">Marek Posolda</a>
 */
public class TokenExchangeExecutor implements ClientPolicyExecutorProvider<TokenExchangeExecutor.Configuration> {

    private static final Logger logger = Logger.getLogger(SecureSigningAlgorithmForSignedJwtExecutor.class);

    private final KeycloakSession session;
    private TokenExchangeExecutor.Configuration configuration;

    public TokenExchangeExecutor(KeycloakSession session) {
        this.session = session;
    }

    @Override
    public void setupConfiguration(TokenExchangeExecutor.Configuration config) {
        this.configuration = config;
    }

    @Override
    public Class<TokenExchangeExecutor.Configuration> getExecutorConfigurationClass() {
        return TokenExchangeExecutor.Configuration.class;
    }

    @Override
    public String getProviderId() {
        return TokenExchangeExecutorFactory.PROVIDER_ID;
    }

    public static class Configuration extends ClientPolicyExecutorConfigurationRepresentation {

        @JsonProperty("allowed-scopes")
        protected List<String> allowedScopes;

        public List<String> getAllowedScopes() {
            return allowedScopes;
        }

        public void setAllowedScopes(List<String> allowedScopes) {
            this.allowedScopes = allowedScopes;
        }
    }

    @Override
    public void executeOnEvent(ClientPolicyContext context) throws ClientPolicyException {
        switch (context.getEvent()) {
            case TOKEN_REQUEST:
            case SERVICE_ACCOUNT_TOKEN_REQUEST:
            case TOKEN_REFRESH:
            case TOKEN_REVOKE:
            case TOKEN_INTROSPECT:
            case LOGOUT_REQUEST:
//                boolean isRequireClientAssertion = Optional.ofNullable(configuration.isRequireClientAssertion()).orElse(Boolean.FALSE).booleanValue();
//                HttpRequest req = session.getContext().getHttpRequest();
//                String clientAssertion = req.getDecodedFormParameters().getFirst(OAuth2Constants.CLIENT_ASSERTION);
//                if (!isRequireClientAssertion && ObjectUtil.isBlank(clientAssertion)) {
//                    break;
//                }
//
//                JWSInput jws = null;
//                try {
//                    jws = new JWSInput(clientAssertion);
//                } catch (JWSInputException e) {
//                    throw new ClientPolicyException(OAuthErrorException.INVALID_REQUEST, "not allowed input format.");
//                }
//                verifySecureSigningAlgorithm(jws.getHeader().getAlgorithm().name());
                break;
            default:
                return;
        }
    }
}
