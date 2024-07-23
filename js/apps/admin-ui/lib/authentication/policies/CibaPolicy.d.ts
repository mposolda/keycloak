import { default as RealmRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/realmRepresentation';

type CibaPolicyProps = {
    realm: RealmRepresentation;
    realmUpdated: (realm: RealmRepresentation) => void;
};
export declare const CibaPolicy: ({ realm, realmUpdated }: CibaPolicyProps) => import("react/jsx-runtime").JSX.Element;
export {};
