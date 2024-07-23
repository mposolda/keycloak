import { default as RealmRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/realmRepresentation';

type RealmSettingsEmailTabProps = {
    realm: RealmRepresentation;
    save: (realm: RealmRepresentation) => void;
};
export declare const RealmSettingsEmailTab: ({ realm, save, }: RealmSettingsEmailTabProps) => import("react/jsx-runtime").JSX.Element;
export {};
