import { default as RealmRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/realmRepresentation';

type RealmSettingsSessionsTabProps = {
    realm: RealmRepresentation;
    save: (realm: RealmRepresentation) => void;
    reset?: () => void;
};
export declare const RealmSettingsTokensTab: ({ realm, reset, save, }: RealmSettingsSessionsTabProps) => import("react/jsx-runtime").JSX.Element;
export {};
