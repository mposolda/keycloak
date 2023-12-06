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

package org.keycloak.admin.ui.rest;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.NotFoundException;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.parameters.Parameter;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.jboss.logging.Logger;
import org.jboss.resteasy.annotations.cache.NoCache;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.ProtocolMapperContainerModel;
import org.keycloak.models.ProtocolMapperModel;
import org.keycloak.models.RealmModel;
import org.keycloak.models.utils.ModelToRepresentation;
import org.keycloak.models.utils.RepresentationToModel;
import org.keycloak.protocol.ProtocolMapper;
import org.keycloak.representations.idm.ProtocolMapperRepresentation;
import org.keycloak.services.resources.KeycloakOpenAPI;
import org.keycloak.services.resources.admin.AdminEventBuilder;
import org.keycloak.services.resources.admin.ProtocolMappersResource;
import org.keycloak.services.resources.admin.permissions.AdminPermissionEvaluator;

/**
 * @author <a href="mailto:mposolda@redhat.com">Marek Posolda</a>
 */
public class UIProtocolMappersResource {

    protected static final Logger logger = Logger.getLogger(UIProtocolMappersResource.class);

    private final KeycloakSession session;
    private final RealmModel realm;
    private final ProtocolMappersResource delegate;

    public UIProtocolMappersResource(KeycloakSession session, ProtocolMapperContainerModel client, AdminPermissionEvaluator auth,
                                     AdminEventBuilder adminEvent,
                                     AdminPermissionEvaluator.RequirePermissionCheck managePermission,
                                     AdminPermissionEvaluator.RequirePermissionCheck viewPermission) {
        this.session = session;
        this.realm = session.getContext().getRealm();
        this.delegate = new ProtocolMappersResource(session, client, auth, adminEvent, managePermission, viewPermission);
    }

    /**
     * Get mapper by id
     *
     * @param id Mapper id
     * @return
     */
    @GET
    @NoCache
    @Path("mappers/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Tag(name = KeycloakOpenAPI.Admin.Tags.PROTOCOL_MAPPERS)
    @Operation(summary = "Get mapper by id")
    public ProtocolMapperRepresentation getMapperById(@Parameter(description = "Mapper id") @PathParam("id") String id) {
        ProtocolMapperRepresentation rep = this.delegate.getMapperById(id);
        ProtocolMapperModel effective = getEffectiveProtocolMapperRep(RepresentationToModel.toModel(rep));
        return ModelToRepresentation.toRepresentation(effective);
    }

    private ProtocolMapperModel getEffectiveProtocolMapperRep(ProtocolMapperModel model) {
        ProtocolMapper mapper = (ProtocolMapper) session.getKeycloakSessionFactory().getProviderFactory(ProtocolMapper.class, model.getProtocolMapper());
        if (mapper == null) {
            logger.warnf("Protocol mapper provider '%s' not found. Configured on mapper with ID '%s'", model.getProtocolMapper(), model.getId());
            throw new NotFoundException("Protocol mapper provider not found");
        }

        return mapper.getEffectiveModel(session, realm, model);
    }
}
