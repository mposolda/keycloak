import { default as RealmRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/realmRepresentation';

type RealmSettingsLoginTabProps = {
    realm: RealmRepresentation;
    refresh: () => void;
};
export declare const RealmSettingsLoginTab: ({ realm, refresh, }: RealmSettingsLoginTabProps) => import("react/jsx-runtime").JSX.Element;
export {};
