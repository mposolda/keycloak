package org.keycloak.protocol.oidc.mappers;

import org.keycloak.common.Profile;
import org.keycloak.common.util.Time;
import org.keycloak.models.ClientSessionContext;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.ProtocolMapperModel;
import org.keycloak.models.SingleUseObjectProvider;
import org.keycloak.models.UserSessionModel;
import org.keycloak.provider.EnvironmentDependentProviderFactory;
import org.keycloak.provider.ProviderConfigProperty;
import org.keycloak.representations.AccessToken;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.keycloak.representations.IDToken.SESSION_ID;
import static org.keycloak.representations.JsonWebToken.AZP;
import static org.keycloak.representations.JsonWebToken.SUBJECT;

public class LightWeightAccessTokenMapper extends AbstractOIDCProtocolMapper implements OIDCAccessTokenMapper, EnvironmentDependentProviderFactory {
    public static String LIGHT_WEIGHT_ACCESS_TOKEN_PROVIDER_ID = "oidc-light-weight-access-token-mapper";
    private static final List<ProviderConfigProperty> configProperties = new ArrayList<>();

    public static final String EXCLUDE_FROM_ACCESS_TOKEN = "exclude.from.accessToken";

    static {
        ProviderConfigProperty property = new ProviderConfigProperty();
        property.setName(EXCLUDE_FROM_ACCESS_TOKEN);
        property.setLabel("Exclude sid and sub and azp from Access Token");
        property.setType(ProviderConfigProperty.BOOLEAN_TYPE);
        property.setDefaultValue("true");
        property.setHelpText("Exclude sub and sid and azp from Access Token and store them in keycloak's cache memory. " +
                "The excluded information can be obtained at the token introspection endpoint. " +
                "If you set this to on and use pairwise subject identifier ," +
                " you have to set Add to access token of pairwise subject identifier to Off.");
        configProperties.add(property);
    }

    @Override
    public String getDisplayCategory() {
        return TOKEN_MAPPER_CATEGORY;
    }

    @Override
    public String getDisplayType() {
        return "Light weight access token";
    }

    @Override
    public String getHelpText() {
        return "Delete the information contained by default in the access token. " +
                "The deleted information can be obtained at the token introspection endpoint.";
    }

    @Override
    public List<ProviderConfigProperty> getConfigProperties() {
        return configProperties;
    }

    @Override
    public String getId() {
        return LIGHT_WEIGHT_ACCESS_TOKEN_PROVIDER_ID;
    }

    @Override
    public AccessToken transformAccessToken(AccessToken token, ProtocolMapperModel mappingModel, KeycloakSession session,
                                            UserSessionModel userSession, ClientSessionContext clientSessionCtx) {
        if (excludeFromAccessToken(mappingModel)) {
            Map<String, String> data = new HashMap<>();
            UserSessionModel.SessionPersistenceState persistenceState = userSession.getPersistenceState();
            if (persistenceState == null || persistenceState == UserSessionModel.SessionPersistenceState.PERSISTENT) {
                data.put(SESSION_ID, token.getSessionState());
            } else {
                // persistenceState is TRANSIENT
                data.put(SUBJECT, token.getSubject());
            }
            data.put(AZP, token.getIssuedFor());
            SingleUseObjectProvider singleUseStore = session.singleUseObjects();
            int currentTime = Time.currentTime();
            long lifespanSeconds = Math.max(token.getExp() - currentTime, 10);
            singleUseStore.put(token.getId(), lifespanSeconds, data);
            token.setSessionState(null);
            token.issuedFor(null);
            token.subject(null);
        }
        token.setScope(null);
        token.setAuth_time(null);
        token.issuer(null);
        return token;
    }

    private boolean excludeFromAccessToken(ProtocolMapperModel mappingModel) {
        String excludeFromAccessToken = mappingModel.getConfig().get(EXCLUDE_FROM_ACCESS_TOKEN);
        return "true".equals(excludeFromAccessToken);
    }

    @Override
    public boolean isSupported() {
        return Profile.isFeatureEnabled(Profile.Feature.LIGHT_WEIGHT_ACCESS_TOKEN);
    }
}
