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

package org.keycloak.testsuite.admin.uiext;

import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import jakarta.ws.rs.core.Response;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.keycloak.admin.client.resource.ClientResource;
import org.keycloak.admin.client.resource.ClientScopeResource;
import org.keycloak.broker.provider.util.SimpleHttp;
import org.keycloak.common.util.KeycloakUriBuilder;
import org.keycloak.protocol.oidc.OIDCLoginProtocol;
import org.keycloak.protocol.oidc.OIDCLoginProtocolFactory;
import org.keycloak.protocol.oidc.mappers.AllowedWebOriginsProtocolMapper;
import org.keycloak.protocol.oidc.mappers.OIDCAttributeMapperHelper;
import org.keycloak.representations.idm.ClientRepresentation;
import org.keycloak.representations.idm.ProtocolMapperRepresentation;
import org.keycloak.testsuite.admin.ApiUtil;
import org.keycloak.testsuite.admin.client.AbstractProtocolMapperTest;
import org.keycloak.testsuite.util.ClientBuilder;
import org.keycloak.testsuite.util.OAuthClient;

/**
 * @author <a href="mailto:mposolda@redhat.com">Marek Posolda</a>
 */
public class ClientScopeEffectiveProtocolMapperTest extends AbstractProtocolMapperTest {

    private CloseableHttpClient httpClient;

    @Before
    public void before() {
        httpClient = HttpClientBuilder.create().build();
    }

    @After
    public void after() {
        try {
            httpClient.close();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Test
    public void testClientScopeEffectiveMappers() throws Exception {
        ClientScopeResource rolesScope = ApiUtil.findClientScopeByName(testRealmResource(), "roles");
        ProtocolMapperRepresentation audienceMapper = findMapperByName(rolesScope.getProtocolMappers().getMappers(), OIDCLoginProtocolFactory.AUDIENCE_RESOLVE);

        String clientScopeId = rolesScope.toRepresentation().getId();
        String protocolMapperId = audienceMapper.getId();
        Map<String, String> origConfig = audienceMapper.getConfig();

        try {
            // Update mapper to not contain default values
            audienceMapper.getConfig().remove(OIDCAttributeMapperHelper.INCLUDE_IN_ACCESS_TOKEN);
            audienceMapper.getConfig().remove(OIDCAttributeMapperHelper.INCLUDE_IN_INTROSPECTION);
            rolesScope.getProtocolMappers().update(protocolMapperId, audienceMapper);

            // Test default values not available by default endpoint
            audienceMapper = rolesScope.getProtocolMappers().getMapperById(protocolMapperId);
            Assert.assertNull(audienceMapper.getConfig().get(OIDCAttributeMapperHelper.INCLUDE_IN_ACCESS_TOKEN));
            Assert.assertNull(audienceMapper.getConfig().get(OIDCAttributeMapperHelper.INCLUDE_IN_INTROSPECTION));

            // Test default values available by "ui-ext" endpoint of admin console extension. Effective values should be the default values
            audienceMapper = getEffectiveProtocolMapperOfClientScope(clientScopeId, protocolMapperId);
            Assert.assertEquals("true", audienceMapper.getConfig().get(OIDCAttributeMapperHelper.INCLUDE_IN_ACCESS_TOKEN));
            Assert.assertEquals("true", audienceMapper.getConfig().get(OIDCAttributeMapperHelper.INCLUDE_IN_INTROSPECTION));

            // Update specific values to mapper
            audienceMapper.getConfig().put(OIDCAttributeMapperHelper.INCLUDE_IN_ACCESS_TOKEN, "true");
            audienceMapper.getConfig().put(OIDCAttributeMapperHelper.INCLUDE_IN_INTROSPECTION, "false");
            rolesScope.getProtocolMappers().update(protocolMapperId, audienceMapper);

            // Get mapper by normal way
            audienceMapper = rolesScope.getProtocolMappers().getMapperById(protocolMapperId);
            Assert.assertEquals("true", audienceMapper.getConfig().get(OIDCAttributeMapperHelper.INCLUDE_IN_ACCESS_TOKEN));
            Assert.assertEquals("false", audienceMapper.getConfig().get(OIDCAttributeMapperHelper.INCLUDE_IN_INTROSPECTION));

            // Get effective mapper. Default values won't be used as they are explicitly set
            audienceMapper = getEffectiveProtocolMapperOfClientScope(clientScopeId, protocolMapperId);
            Assert.assertEquals("true", audienceMapper.getConfig().get(OIDCAttributeMapperHelper.INCLUDE_IN_ACCESS_TOKEN));
            Assert.assertEquals("false", audienceMapper.getConfig().get(OIDCAttributeMapperHelper.INCLUDE_IN_INTROSPECTION));
        } finally {
            audienceMapper.getConfig().putAll(origConfig);
            rolesScope.getProtocolMappers().update(protocolMapperId, audienceMapper);
        }
    }

    @Test
    public void testClientEffectiveMappers() throws Exception {
        // Create client and protocol mapper
        String clientUuid = "fooclientid";
        ClientRepresentation client = ClientBuilder.create()
                .id(clientUuid)
                .clientId("foo")
                .protocol(OIDCLoginProtocol.LOGIN_PROTOCOL)
                .enabled(true)
                .build();
        Response response = testRealmResource().clients().create(client);
        Assert.assertEquals(201, response.getStatus());
        getCleanup().addClientUuid(clientUuid);
        response.close();

        ProtocolMapperRepresentation webOriginsMapper = makeMapper(OIDCLoginProtocol.LOGIN_PROTOCOL, "web-origins", AllowedWebOriginsProtocolMapper.PROVIDER_ID, Collections.emptyMap());
        ClientResource clientResource = testRealmResource().clients().get(clientUuid);
        response = clientResource.getProtocolMappers().createMapper(webOriginsMapper);
        String protocolMapperId = ApiUtil.getCreatedId(response);
        Assert.assertEquals(201, response.getStatus());
        response.close();

        // Test default values not available by default endpoint
        webOriginsMapper = clientResource.getProtocolMappers().getMapperById(protocolMapperId);
        Assert.assertNull(webOriginsMapper.getConfig().get(OIDCAttributeMapperHelper.INCLUDE_IN_ACCESS_TOKEN));
        Assert.assertNull(webOriginsMapper.getConfig().get(OIDCAttributeMapperHelper.INCLUDE_IN_INTROSPECTION));

        // Test default values available by "ui-ext" endpoint of admin console extension. Effective values should be the default values
        webOriginsMapper = getEffectiveProtocolMapperOfClient(clientUuid, protocolMapperId);
        Assert.assertEquals("true", webOriginsMapper.getConfig().get(OIDCAttributeMapperHelper.INCLUDE_IN_ACCESS_TOKEN));
        Assert.assertEquals("true", webOriginsMapper.getConfig().get(OIDCAttributeMapperHelper.INCLUDE_IN_INTROSPECTION));

        // Update specific values to mapper
        webOriginsMapper.getConfig().put(OIDCAttributeMapperHelper.INCLUDE_IN_ACCESS_TOKEN, "true");
        webOriginsMapper.getConfig().put(OIDCAttributeMapperHelper.INCLUDE_IN_INTROSPECTION, "false");
        clientResource.getProtocolMappers().update(protocolMapperId, webOriginsMapper);

        // Get mapper by normal way
        webOriginsMapper = clientResource.getProtocolMappers().getMapperById(protocolMapperId);
        Assert.assertEquals("true", webOriginsMapper.getConfig().get(OIDCAttributeMapperHelper.INCLUDE_IN_ACCESS_TOKEN));
        Assert.assertEquals("false", webOriginsMapper.getConfig().get(OIDCAttributeMapperHelper.INCLUDE_IN_INTROSPECTION));

        // Get effective mapper. Default values won't be used as they are explicitly set
        webOriginsMapper = getEffectiveProtocolMapperOfClient(clientUuid, protocolMapperId);
        Assert.assertEquals("true", webOriginsMapper.getConfig().get(OIDCAttributeMapperHelper.INCLUDE_IN_ACCESS_TOKEN));
        Assert.assertEquals("false", webOriginsMapper.getConfig().get(OIDCAttributeMapperHelper.INCLUDE_IN_INTROSPECTION));
    }

    private ProtocolMapperRepresentation findMapperByName(List<ProtocolMapperRepresentation> mappers, String mapperName) {
        return mappers.stream()
                .filter(mapper -> mapperName.equals(mapper.getName()))
                .findFirst().orElse(null);
    }

    private ProtocolMapperRepresentation getEffectiveProtocolMapperOfClientScope(String clientScopeId, String protocolMapperId) throws IOException {
        String protocolMapperAdminExtUrl = KeycloakUriBuilder
                .fromPath(OAuthClient.AUTH_SERVER_ROOT + "/admin/realms/test/ui-ext/client-scopes/{clientScopeId}/mappers/{protocolMapperId}")
                .buildAsString(clientScopeId, protocolMapperId);

        return sendRequest(protocolMapperAdminExtUrl);
    }

    private ProtocolMapperRepresentation getEffectiveProtocolMapperOfClient(String clientUuid, String protocolMapperId) throws IOException {
        String protocolMapperAdminExtUrl = KeycloakUriBuilder
                .fromPath(OAuthClient.AUTH_SERVER_ROOT + "/admin/realms/test/ui-ext/clients/{clientUuId}/mappers/{protocolMapperId}")
                .buildAsString(clientUuid, protocolMapperId);

        return sendRequest(protocolMapperAdminExtUrl);
    }

    private ProtocolMapperRepresentation sendRequest(String protocolMapperAdminExtUrl) throws IOException {
        SimpleHttp response = SimpleHttp.doGet(protocolMapperAdminExtUrl, httpClient).auth(adminClient.tokenManager().getAccessTokenString());
        return response.asJson(ProtocolMapperRepresentation.class);
    }
}
