import { default as ResourceServerRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/resourceServerRepresentation';

type ImportDialogProps = {
    onConfirm: (value: ResourceServerRepresentation) => void;
    closeDialog: () => void;
};
export declare const ImportDialog: ({ onConfirm, closeDialog }: ImportDialogProps) => import("react/jsx-runtime").JSX.Element;
export {};
