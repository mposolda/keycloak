import { default as RealmRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/realmRepresentation';

type HeadersFormProps = {
    realm: RealmRepresentation;
    save: (realm: RealmRepresentation) => void;
};
export declare const HeadersForm: ({ realm, save }: HeadersFormProps) => import("react/jsx-runtime").JSX.Element;
export {};
