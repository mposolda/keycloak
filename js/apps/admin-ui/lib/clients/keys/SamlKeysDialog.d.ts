import { default as KeycloakAdminClient } from '@keycloak/keycloak-admin-client';
import { default as KeyStoreConfig } from '@keycloak/keycloak-admin-client/lib/defs/keystoreConfig';
import { KeyTypes } from './SamlKeys';

type SamlKeysDialogProps = {
    id: string;
    attr: KeyTypes;
    onClose: () => void;
    onCancel: () => void;
};
export type SamlKeysDialogForm = KeyStoreConfig & {
    file: File;
};
export declare const submitForm: (adminClient: KeycloakAdminClient, form: SamlKeysDialogForm, id: string, attr: KeyTypes, callback: (error?: unknown) => void) => Promise<void>;
export declare const SamlKeysDialog: ({ id, attr, onClose, onCancel, }: SamlKeysDialogProps) => import("react/jsx-runtime").JSX.Element;
export {};
