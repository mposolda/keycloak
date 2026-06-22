package org.keycloak.protocol.oidc.refresh;

import org.keycloak.OAuthErrorException;
import org.keycloak.models.ClientSessionContext;
import org.keycloak.protocol.oidc.TokenManager;
import org.keycloak.provider.Provider;
import org.keycloak.representations.RefreshToken;

/**
 * Provider responsible for verification of refresh tokens and issuing of new refresh tokens
 */
public interface RefreshTokenProvider extends Provider {

    // TODO:mposolda javadoc (Triggered during initial issuance of refresh token)
    boolean supports(InitialRefreshTokenContext initialRefreshTokenCtx);

    // TODO:mposolda javadoc (Triggered during initial issuance of refresh token)
    RefreshToken generateRefreshToken(InitialRefreshTokenContext initialRefreshTokenCtx);

    /**
     * @param ctx Context, which contains old refresh token and some other data
     * @return True if this provider supports verification of the refresh token from the context
     */
    boolean supports(RefreshTokenContext ctx);

    /**
     * Invoked during refresh-token request. Implements verifications related to old refresh token and creates token-response if all the verifications are successful
     *
     * @param ctx Context, which contains old refresh token and some other data
     * @return successful token-response with new tokens and data, which would be returned in the successful token response
     * @throws OAuthErrorException In case that validation failed or some other issue happened during token refresh
     */
    TokenManager.AccessTokenResponseBuilder refreshAccessToken(RefreshTokenContext ctx) throws OAuthErrorException;

    @Override
    default void close() {
    }

}
