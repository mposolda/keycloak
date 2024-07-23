import { default as ClientScopeRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/clientScopeRepresentation';
import { ClientScopeType } from '../../components/client-scope/ClientScopeTypes';

export type AddScopeDialogProps = {
    clientScopes: ClientScopeRepresentation[];
    clientName?: string;
    open: boolean;
    toggleDialog: () => void;
    onAdd: (scopes: {
        scope: ClientScopeRepresentation;
        type?: ClientScopeType;
    }[]) => void;
    isClientScopesConditionType?: boolean;
};
export declare const AddScopeDialog: ({ clientScopes: scopes, clientName, open, toggleDialog, onAdd, isClientScopesConditionType, }: AddScopeDialogProps) => import("react/jsx-runtime").JSX.Element;
