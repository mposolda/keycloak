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

package org.keycloak.protocol.oidc.utils;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import org.keycloak.models.ClientSessionContext;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.UserSessionModel;
import org.keycloak.protocol.oidc.mappers.AbstractOIDCProtocolMapper;

/**
 * Ability to encode some context into access token ID (For example lightweight access token or regular token etc, online session or offline session etc)
 *
 * @author <a href="mailto:mposolda@redhat.com">Marek Posolda</a>
 */
public class AccessTokenContext {

    private final SessionType sessionType;
    private final TokenType tokenType;
    private String grantType; // TODO:mposolda final

    public static final String UNKNOWN = "unk";

    public static final String SESSION_TYPE_PREFIX = "st";
    public static final String TOKEN_TYPE_PREFIX = "tt";
    public static final String GRANT_TYPE_PREFIX = "gt";

    private static final Map<String, SessionType> SESSION_TYPES_BY_SHORTCUT;
    private static final Map<String, TokenType> TOKEN_TYPES_BY_SHORTCUT;

    static {
        SESSION_TYPES_BY_SHORTCUT = new HashMap<>();
        for (SessionType st : SessionType.values()) {
            SESSION_TYPES_BY_SHORTCUT.put(st.getShortcut(), st);
        }
        TOKEN_TYPES_BY_SHORTCUT = new HashMap<>();
        for (TokenType tt : TokenType.values()) {
            TOKEN_TYPES_BY_SHORTCUT.put(tt.getShortcut(), tt);
        }
    }

    public enum SessionType {
        ONLINE("on"),
        OFFLINE("off"),
        TRANSIENT("tr"),
        UNKNOWN("unk");

        private final String shortcut;

        SessionType(String shortcut) {
            this.shortcut = shortcut;
        }

        public String getShortcut() {
            return shortcut;
        }
    }

    public enum TokenType {
        REGULAR("rt"),
        LIGHTWEIGHT("lt"),
        UNKNOWN("unk");

        private final String shortcut;

        TokenType(String shortcut) {
            this.shortcut = shortcut;
        }

        public String getShortcut() {
            return shortcut;
        }
    }

    // TODO:mposolda grant type...

    // TODO:mposolda unit test or switch it to private?
    AccessTokenContext(SessionType sessionType, TokenType tokenType, String grantType) {
        Objects.requireNonNull(sessionType, "Null sessionType not allowed");
        Objects.requireNonNull(tokenType, "Null tokenType not allowed");
        Objects.requireNonNull(grantType, "Null grantType not allowed");
        this.sessionType = sessionType;
        this.tokenType = tokenType;
        this.grantType = grantType;
    }

    public static AccessTokenContext fromClientSessionCtx(KeycloakSession session, ClientSessionContext clientSessionContext) {
        SessionType sessionType;
        UserSessionModel userSession = clientSessionContext.getClientSession().getUserSession();
        if (userSession.getPersistenceState() == UserSessionModel.SessionPersistenceState.TRANSIENT) {
             sessionType = SessionType.TRANSIENT;
        } else {
            sessionType = userSession.isOffline() ? SessionType.OFFLINE : SessionType.ONLINE;
        }

        boolean useLightweightToken = AbstractOIDCProtocolMapper.getShouldUseLightweightToken(session);
        TokenType tokenType = useLightweightToken ? TokenType.LIGHTWEIGHT : TokenType.REGULAR;

        // TODO:mposolda implement grant type...
        String grantType = null;

        return new AccessTokenContext(sessionType, tokenType, grantType);
    }

    public static AccessTokenContext fromTokenId(String encodedTokenId) {
        int indexOf = encodedTokenId.indexOf(':');
        if (indexOf == -1) {
            return new AccessTokenContext(SessionType.UNKNOWN, TokenType.UNKNOWN, UNKNOWN);
        } else {
            String encodedChunks = encodedTokenId.substring(0, indexOf);
            String[] chunks = encodedChunks.split("_");

            SessionType st = null;
            TokenType tt = null;
            String gt = null;
            // TODO:mposolda grant types
            for (String chunk : chunks) {
                int dotIndex = chunk.indexOf('.');
                if (dotIndex == -1) {
                    throw new IllegalArgumentException("Incorrect token id: " + encodedTokenId + ". No dot present in the chunk: " + chunk);
                }
                String prefix = chunk.substring(0, dotIndex);
                String value = chunk.substring(dotIndex);
                switch (prefix) {
                    case SESSION_TYPE_PREFIX:
                        st = SESSION_TYPES_BY_SHORTCUT.get(value);
                        if (st == null) {
                            throw new IllegalArgumentException("Incorrect token id: " + encodedTokenId + ". Unknown value '" + chunk + "' for session type");
                        }
                        break;
                    case TOKEN_TYPE_PREFIX:
                        tt = TOKEN_TYPES_BY_SHORTCUT.get(value);
                        if (tt == null) {
                            throw new IllegalArgumentException("Incorrect token id: " + encodedTokenId + ". Unknown value '" + chunk + "' for token type");
                        }
                        break;
                    case GRANT_TYPE_PREFIX:
                        // TODO:mposolda implement
                        gt = null;
                        break;
                    default: throw new IllegalArgumentException("Incorrect token id: " + encodedTokenId + ". Unknown prefix: " + prefix);
                }
            }
            return new AccessTokenContext(st, tt, gt);
        }
    }

    public String encodeTokenId(String rawId) {
        if (sessionType == SessionType.UNKNOWN) {
            throw new IllegalStateException("Cannot encode token with unknown sessionType");
        }
        if (tokenType == TokenType.UNKNOWN) {
            throw new IllegalStateException("Cannot encode token with unknown tokenType");
        }
        if (UNKNOWN.equals(grantType)) {
            throw new IllegalStateException("Cannot encode token with unknown grantType");
        }

        return SESSION_TYPE_PREFIX + '.' + sessionType + "_" +
               TOKEN_TYPE_PREFIX + '.' + tokenType + "_" +
               GRANT_TYPE_PREFIX + '.' + grantType + ":" +
               rawId;
    }

    public SessionType getSessionType() {
        return sessionType;
    }

    public TokenType getTokenType() {
        return tokenType;
    }

    public String getGrantType() {
        return grantType;
    }
}
