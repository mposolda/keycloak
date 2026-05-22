package org.keycloak.representations.idm.oid4vc;

import com.fasterxml.jackson.annotation.JsonProperty;

import org.keycloak.common.util.Base64Url;
import org.keycloak.util.JsonSerialization;

import java.io.IOException;

// TODO:mposolda add some more description to the parameters of this action
public class CredentialOfferActionConfig {

    public static final String CREDENTIAL_CONFIGURATION_ID = "credential_configuration_id";
    public static final String CLIENT_ID = "client_id";
    public static final String PRE_AUTHORIZED = "pre_authorized";

    @JsonProperty(CREDENTIAL_CONFIGURATION_ID)
    private String credentialConfigurationId;

    @JsonProperty(CLIENT_ID)
    private String clientId;

    @JsonProperty(PRE_AUTHORIZED)
    private Boolean preAuthorized;

    public String getCredentialConfigurationId() {
        return credentialConfigurationId;
    }

    public void setCredentialConfigurationId(String credentialConfigurationId) {
        this.credentialConfigurationId = credentialConfigurationId;
    }

    public String getClientId() {
        return clientId;
    }

    public void setClientId(String clientId) {
        this.clientId = clientId;
    }

    public Boolean getPreAuthorized() {
        return preAuthorized;
    }

    public void setPreAuthorized(Boolean preAuthorized) {
        this.preAuthorized = preAuthorized;
    }

    @Override
    public String toString() {
        return "CredentialOfferUserConfig{" +
                "credentialConfigurationId='" + credentialConfigurationId + '\'' +
                ", clientId='" + clientId + '\'' +
                ", preAuthorized='" + preAuthorized + '\'' +
                '}';
    }

    // Encode to the string, which can be used as parameter of AIA
    public String asEncodedParameter() throws IOException {
        byte[] bytes = JsonSerialization.writeValueAsBytes(this);
        return Base64Url.encode(bytes);
    }

    // Encode to the string, which can be used as parameter of AIA
    public static CredentialOfferActionConfig decodeConfig(String configStr) throws IOException {
        byte[] bytes = Base64Url.decode(configStr);
        return JsonSerialization.readValue(bytes, CredentialOfferActionConfig.class);
    }
}
