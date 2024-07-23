import { default as RealmRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/realmRepresentation';

type PasswordPolicyProps = {
    realm: RealmRepresentation;
    realmUpdated: (realm: RealmRepresentation) => void;
};
export declare const PasswordPolicy: ({ realm, realmUpdated, }: PasswordPolicyProps) => import("react/jsx-runtime").JSX.Element;
export {};
