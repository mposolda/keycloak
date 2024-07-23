import { default as RealmRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/realmRepresentation';

type SecurityDefensesProps = {
    realm: RealmRepresentation;
    save: (realm: RealmRepresentation) => void;
};
export declare const SecurityDefenses: ({ realm, save }: SecurityDefensesProps) => import("react/jsx-runtime").JSX.Element;
export {};
