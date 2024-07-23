import { default as RealmRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/realmRepresentation';

type BruteForceDetectionProps = {
    realm: RealmRepresentation;
    save: (realm: RealmRepresentation) => void;
};
export declare const BruteForceDetection: ({ realm, save, }: BruteForceDetectionProps) => import("react/jsx-runtime").JSX.Element;
export {};
