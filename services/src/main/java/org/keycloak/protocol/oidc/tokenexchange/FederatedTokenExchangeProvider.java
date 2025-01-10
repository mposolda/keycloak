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

package org.keycloak.protocol.oidc.tokenexchange;

import jakarta.ws.rs.core.Response;
import org.keycloak.OAuth2Constants;
import org.keycloak.OAuthErrorException;
import org.keycloak.events.Details;
import org.keycloak.events.Errors;
import org.keycloak.events.EventBuilder;
import org.keycloak.jose.jws.JWSInput;
import org.keycloak.jose.jws.JWSInputException;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.RealmModel;
import org.keycloak.protocol.oidc.TokenExchangeContext;
import org.keycloak.protocol.oidc.TokenExchangeProvider;
import org.keycloak.representations.JsonWebToken;
import org.keycloak.services.CorsErrorResponseException;
import org.keycloak.services.Urls;
import org.keycloak.services.cors.Cors;

/**
 * Provider for external-internal or internal-external token exchange, where identity providers are involved
 *
 * @author <a href="mailto:mposolda@redhat.com">Marek Posolda</a>
 */
public class FederatedTokenExchangeProvider implements TokenExchangeProvider {

    @Override
    public boolean supports(TokenExchangeContext context) {
        String requestedIssuer = context.getFormParams().getFirst(OAuth2Constants.REQUESTED_ISSUER);
        if (requestedIssuer != null) {
            // Internal-external token exchange
            return true;
        }

        return isExternalInternalRequest(context);
    }

    @Override
    public Response exchange(TokenExchangeContext context) {
        // TODO:mposolda implement
        return null;
    }

    @Override
    public void close() {

    }

    // Is it the request for external-internal token exchange?
    // TODO:mposolda reuse this code elsewhere
    private boolean isExternalInternalRequest(TokenExchangeContext context) {
        String subjectToken = context.getParams().getSubjectToken();
        KeycloakSession session = context.getSession();
        RealmModel realm = context.getRealm();
        EventBuilder event = context.getEvent();
        Cors cors = context.getCors();
        if (subjectToken != null) {
            String subjectTokenType = context.getParams().getSubjectTokenType();
            String realmIssuerUrl = Urls.realmIssuer(session.getContext().getUri().getBaseUri(), realm.getName());
            String subjectIssuer = context.getFormParams().getFirst(OAuth2Constants.SUBJECT_ISSUER);

            if (subjectIssuer == null && OAuth2Constants.JWT_TOKEN_TYPE.equals(subjectTokenType)) {
                try {
                    JWSInput jws = new JWSInput(subjectToken);
                    JsonWebToken jwt = jws.readJsonContent(JsonWebToken.class);
                    subjectIssuer = jwt.getIssuer();
                } catch (JWSInputException e) {
                    event.detail(Details.REASON, "unable to parse jwt subject_token");
                    event.error(Errors.INVALID_TOKEN);
                    throw new CorsErrorResponseException(cors, OAuthErrorException.INVALID_REQUEST, "Invalid token type, must be access token", Response.Status.BAD_REQUEST);
                }
            }

            if (subjectIssuer != null && !realmIssuerUrl.equals(subjectIssuer)) {
                event.detail(OAuth2Constants.SUBJECT_ISSUER, subjectIssuer);
                return true;
            }
        }
        return false;
    }
}
