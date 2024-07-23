import { default as KeyStoreConfig } from '@keycloak/keycloak-admin-client/lib/defs/keystoreConfig';

type GenerateKeyDialogProps = {
    clientId: string;
    toggleDialog: () => void;
    save: (keyStoreConfig: KeyStoreConfig) => void;
};
type KeyFormProps = {
    useFile?: boolean;
    isSaml?: boolean;
    hasPem?: boolean;
};
export declare const getFileExtension: (format: string) => string | undefined;
export declare const KeyForm: ({ isSaml, hasPem, useFile, }: KeyFormProps) => import("react/jsx-runtime").JSX.Element;
export declare const GenerateKeyDialog: ({ clientId, save, toggleDialog, }: GenerateKeyDialogProps) => import("react/jsx-runtime").JSX.Element;
export {};
