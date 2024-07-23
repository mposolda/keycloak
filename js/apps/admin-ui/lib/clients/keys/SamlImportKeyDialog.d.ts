import { KeyTypes } from './SamlKeys';

type SamlImportKeyDialogProps = {
    id: string;
    attr: KeyTypes;
    onClose: () => void;
};
export declare const SamlImportKeyDialog: ({ id, attr, onClose, }: SamlImportKeyDialogProps) => import("react/jsx-runtime").JSX.Element;
export {};
