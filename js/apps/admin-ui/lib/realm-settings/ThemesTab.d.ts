import { default as RealmRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/realmRepresentation';

type RealmSettingsThemesTabProps = {
    realm: RealmRepresentation;
    save: (realm: RealmRepresentation) => void;
};
export declare const RealmSettingsThemesTab: ({ realm, save, }: RealmSettingsThemesTabProps) => import("react/jsx-runtime").JSX.Element;
export {};
