import { KeyTypes } from './SamlKeys';

type ExportSamlKeyDialogProps = {
    clientId: string;
    close: () => void;
    keyType: KeyTypes;
};
export declare const ExportSamlKeyDialog: ({ clientId, close, keyType, }: ExportSamlKeyDialogProps) => import("react/jsx-runtime").JSX.Element;
export {};
