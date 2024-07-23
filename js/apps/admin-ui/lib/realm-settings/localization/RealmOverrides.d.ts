import { default as RealmRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/realmRepresentation';
import { KeyValueType } from '../../components/key-value-form/key-value-convert';

type RealmOverridesProps = {
    internationalizationEnabled: boolean;
    watchSupportedLocales: string[];
    realm: RealmRepresentation;
    tableData: Record<string, string>[] | undefined;
};
export type TranslationForm = {
    key: string;
    value: string;
    translation: KeyValueType;
};
export declare enum RowEditAction {
    Save = "save",
    Cancel = "cancel",
    Edit = "edit",
    Delete = "delete"
}
export declare const RealmOverrides: ({ internationalizationEnabled, watchSupportedLocales, realm, tableData, }: RealmOverridesProps) => import("react/jsx-runtime").JSX.Element;
export {};
