package org.keycloak.admin.ui.rest;

import jakarta.ws.rs.NotFoundException;
import jakarta.ws.rs.PathParam;
import org.keycloak.events.admin.ResourceType;
import org.keycloak.models.ClientModel;
import org.keycloak.models.ClientScopeModel;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.RealmModel;
import org.keycloak.services.ForbiddenException;
import org.keycloak.services.resources.admin.AdminEventBuilder;
import org.keycloak.services.resources.admin.permissions.AdminPermissionEvaluator;

import jakarta.ws.rs.Path;

public final class AdminExtResource {
    private KeycloakSession session;
    private RealmModel realm;
    private AdminPermissionEvaluator auth;
    private AdminEventBuilder adminEvent;

    public AdminExtResource(KeycloakSession session, RealmModel realm, AdminPermissionEvaluator auth, AdminEventBuilder adminEvent) {
        this.session = session;
        this.realm = realm;
        this.auth = auth;
        this.adminEvent = adminEvent;
    }

    @Path("/authentication-management")
    public AuthenticationManagementResource authenticationManagement() {
        return new AuthenticationManagementResource(session, realm, auth);
    }

    @Path("/brute-force-user")
    public BruteForceUsersResource bruteForceUsers() {
        return new BruteForceUsersResource(session, realm, auth);
    }

    @Path("/available-roles")
    public AvailableRoleMappingResource availableRoles() {
        return new AvailableRoleMappingResource(session, realm, auth);
    }

    @Path("/effective-roles")
    public EffectiveRoleMappingResource effectiveRoles() {
        return new EffectiveRoleMappingResource(session, realm, auth);
    }

    @Path("/sessions")
    public SessionsResource sessions() {
        return new SessionsResource(session, realm, auth);
    }

    @Path("/realms")
    public UIRealmsResource realms() {
        return new UIRealmsResource(session);
    }

    @Path("/")
    public UIRealmResource realm() {
        return new UIRealmResource(session, auth, adminEvent);
    }

    @Path("/users")
    public UsersResource users() {
        return new UsersResource(session);
    }

    @Path("/client-scopes/{client-scope-id}")
    public UIProtocolMappersResource protocolMappersByClientScope(final @PathParam("client-scope-id") String id) {
        this.adminEvent.resource(ResourceType.CLIENT_SCOPE);
        auth.clients().requireListClientScopes();
        ClientScopeModel clientScope = realm.getClientScopeById(id);
        if (clientScope == null) {
            throw new NotFoundException("Could not find client scope");
        }

        AdminPermissionEvaluator.RequirePermissionCheck manageCheck = () -> auth.clients().requireManage(clientScope);
        AdminPermissionEvaluator.RequirePermissionCheck viewCheck = () -> auth.clients().requireView(clientScope);
        return new UIProtocolMappersResource(session, clientScope, auth, adminEvent, manageCheck, viewCheck);
    }

    @Path("/clients/{client-uuid}")
    public UIProtocolMappersResource protocolMappersByClient(final @PathParam("client-uuid") String id) {
        this.adminEvent.resource(ResourceType.CLIENT);
        ClientModel clientModel = realm.getClientById(id);
        if (clientModel == null) {
            // we do this to make sure somebody can't phish ids
            if (auth.clients().canList()) throw new NotFoundException("Could not find client");
            else throw new ForbiddenException();
        }
        session.getContext().setClient(clientModel);

        AdminPermissionEvaluator.RequirePermissionCheck manageCheck = () -> auth.clients().requireManage(clientModel);
        AdminPermissionEvaluator.RequirePermissionCheck viewCheck = () -> auth.clients().requireView(clientModel);
        return new UIProtocolMappersResource(session, clientModel, auth, adminEvent, manageCheck, viewCheck);
    }
}
