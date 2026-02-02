package org.keycloak.authentication;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;

import org.keycloak.common.util.Base64Url;
import org.keycloak.util.JsonSerialization;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class RequiredActionUserConfig {

    private Map<String, Object> configAsMap = new HashMap<>();

    @JsonAnyGetter
    public Map<String, Object> getConfigAsMap() {
        return configAsMap;
    }

    @JsonAnySetter
    public void setConfigAsMap(String name, Object value) {
        this.configAsMap.put(name, value);
    }

    // TODO:mposolda javadoc
    public String asConfigString() {
        try {
            return Base64Url.encode(JsonSerialization.writeValueAsBytes(this));
        } catch (IOException ioe) {
            throw new IllegalStateException("Cannot parse object '" + this + "' to JSON.", ioe);
        }
    }
}
