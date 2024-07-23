import { default as ScopeRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/scopeRepresentation';
import { PermissionScopeRepresentation } from './Scopes';

type DeleteScopeDialogProps = {
    clientId: string;
    selectedScope: PermissionScopeRepresentation | ScopeRepresentation | undefined;
    refresh: () => void;
    open: boolean;
    toggleDialog: () => void;
};
export declare const DeleteScopeDialog: ({ clientId, selectedScope, refresh, open, toggleDialog, }: DeleteScopeDialogProps) => import("react/jsx-runtime").JSX.Element;
export {};
