package org.keycloak.protocol.oidc.refresh;

import org.keycloak.models.ClientSessionContext;
import org.keycloak.protocol.oidc.TokenManager;
import org.keycloak.representations.AccessToken;

public record InitialRefreshTokenContext(ClientSessionContext clientSessionCtx, TokenManager.AccessTokenResponseBuilder responseBuilder, boolean offlineTokenRequested, AccessToken.Confirmation confirmation) {
}
