import { default as RealmRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/realmRepresentation';

type RealmSettingsSessionsTabProps = {
    realm: RealmRepresentation;
    save: (realm: RealmRepresentation) => void;
};
export declare const RealmSettingsSessionsTab: ({ realm, save, }: RealmSettingsSessionsTabProps) => import("react/jsx-runtime").JSX.Element;
export {};
