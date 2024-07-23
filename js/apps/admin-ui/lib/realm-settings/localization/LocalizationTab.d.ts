import { default as RealmRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/realmRepresentation';

type LocalizationTabProps = {
    save: (realm: RealmRepresentation) => void;
    realm: RealmRepresentation;
    tableData: Record<string, string>[] | undefined;
};
export declare const LocalizationTab: ({ save, realm, tableData, }: LocalizationTabProps) => import("react/jsx-runtime").JSX.Element;
export {};
