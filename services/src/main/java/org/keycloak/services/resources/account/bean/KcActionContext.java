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

package org.keycloak.services.resources.account.bean;

import jakarta.ws.rs.core.MultivaluedMap;
import org.keycloak.models.Constants;
import org.keycloak.models.KeycloakSession;

/**
 * @author <a href="mailto:mposolda@redhat.com">Marek Posolda</a>
 */
public class KcActionContext {

    private final String kcAction;
    private final String kcActionStatus; // TODO:mposolda should it be enum or rather not?
    private final String kcActionErrorDetails;

    public KcActionContext(KeycloakSession session) {
        MultivaluedMap<String, String> queryParams = session.getContext().getUri().getQueryParameters();
        this.kcAction = queryParams.getFirst(Constants.KC_ACTION);
        this.kcActionStatus = queryParams.getFirst(Constants.KC_ACTION_STATUS);
        this.kcActionErrorDetails = queryParams.getFirst(Constants.KC_ACTION_ERROR_DETAILS);
    }

    public String getKcAction() {
        return kcAction;
    }

    public String getKcActionStatus() {
        return kcActionStatus;
    }

    public String getKcActionErrorDetails() {
        return kcActionErrorDetails;
    }
}
