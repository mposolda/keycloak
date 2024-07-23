import { default as RealmRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/realmRepresentation';

type WebauthnPolicyProps = {
    realm: RealmRepresentation;
    realmUpdated: (realm: RealmRepresentation) => void;
    isPasswordLess?: boolean;
};
export declare const WebauthnPolicy: ({ realm, realmUpdated, isPasswordLess, }: WebauthnPolicyProps) => import("react/jsx-runtime").JSX.Element;
export {};
