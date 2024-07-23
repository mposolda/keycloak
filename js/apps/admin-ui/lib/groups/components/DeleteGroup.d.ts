import { default as GroupRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/groupRepresentation';

type DeleteConfirmProps = {
    selectedRows: GroupRepresentation[];
    show: boolean;
    toggleDialog: () => void;
    refresh: () => void;
};
export declare const DeleteGroup: ({ selectedRows, show, toggleDialog, refresh, }: DeleteConfirmProps) => import("react/jsx-runtime").JSX.Element;
export {};
