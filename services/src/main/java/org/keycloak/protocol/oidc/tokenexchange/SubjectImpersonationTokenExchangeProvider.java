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
import org.keycloak.protocol.oidc.TokenExchangeContext;

/**
 * Provider for token-exchange subject impersonation where subject of the token is changed.
 *
 * This is Keycloak proprietary and it is not related to standard token-exchange impersonation described in
 * the specification https://datatracker.ietf.org/doc/html/rfc8693 where the subject in the tokens are not changed. That one is covered by {@link StandardTokenExchangeProvider}
 *
 * @author <a href="mailto:mposolda@redhat.com">Marek Posolda</a>
 */
public class SubjectImpersonationTokenExchangeProvider extends AbstractTokenExchangeProvider {

    @Override
    public boolean supports(TokenExchangeContext context) {
        String requestedSubject = context.getFormParams().getFirst(OAuth2Constants.REQUESTED_SUBJECT);
        return requestedSubject != null;
    }

    @Override
    protected Response tokenExchange() {
        // TODO:mposolda implement
    }
}
