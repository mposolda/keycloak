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

package org.keycloak.protocol;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TODO:mposolda not sure if here is best place for this class...
 *
 * @author <a href="mailto:mposolda@redhat.com">Marek Posolda</a>
 */
public class ClientData {

    @JsonProperty("ru")
    private String redirectUri;

    @JsonProperty("rt") // TODO:mposolda do we need both "rt" and "rm"?
    private String responseType;

    @JsonProperty("rm")
    private String responseMode;

    @JsonProperty("st")
    private String state;

    public ClientData() {
    }

    public ClientData(String redirectUri, String responseType, String responseMode, String state) {
        this.redirectUri = redirectUri;
        this.responseType = responseType;
        this.responseMode = responseMode;
        this.state = state;
    }

    public String getRedirectUri() {
        return redirectUri;
    }

    public void setRedirectUri(String redirectUri) {
        this.redirectUri = redirectUri;
    }

    public String getResponseType() {
        return responseType;
    }

    public void setResponseType(String responseType) {
        this.responseType = responseType;
    }

    public String getResponseMode() {
        return responseMode;
    }

    public void setResponseMode(String responseMode) {
        this.responseMode = responseMode;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    @Override
    public String toString() {
        return String.format("ClientData [ redirectUri=%s, responseType=%s, responseMode=%s, state=%s ]", redirectUri, responseType, responseMode, state);
    }
}
