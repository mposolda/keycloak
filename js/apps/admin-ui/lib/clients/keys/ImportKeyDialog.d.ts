type ImportKeyDialogProps = {
    toggleDialog: () => void;
    save: (importFile: ImportFile) => void;
};
export type ImportFile = {
    keystoreFormat: string;
    keyAlias: string;
    storePassword: string;
    file: {
        value?: string;
        filename: string;
    };
};
export declare const ImportKeyDialog: ({ save, toggleDialog, }: ImportKeyDialogProps) => import("react/jsx-runtime").JSX.Element;
export {};
