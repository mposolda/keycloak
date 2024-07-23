import { default as RealmRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/realmRepresentation';

type OtpPolicyProps = {
    realm: RealmRepresentation;
    realmUpdated: (realm: RealmRepresentation) => void;
};
export declare const OtpPolicy: ({ realm, realmUpdated }: OtpPolicyProps) => import("react/jsx-runtime").JSX.Element;
export {};
