import { default as RealmRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/realmRepresentation';
import { UserProfileConfig } from '@keycloak/keycloak-admin-client/lib/defs/userProfileMetadata';

export interface UIRealmRepresentation extends RealmRepresentation {
    upConfig?: UserProfileConfig;
}
export declare const RealmSettingsTabs: () => import("react/jsx-runtime").JSX.Element;
