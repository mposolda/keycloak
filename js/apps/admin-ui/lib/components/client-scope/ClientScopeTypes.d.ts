import { default as ClientScopeRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/clientScopeRepresentation';
import { default as KeycloakAdminClient } from '@keycloak/keycloak-admin-client';
import { TFunction } from 'i18next';
import { SelectProps } from '@patternfly/react-core';

export declare enum ClientScope {
    default = "default",
    optional = "optional"
}
export declare enum AllClientScopes {
    none = "none"
}
export type ClientScopeType = ClientScope;
export type AllClientScopeType = ClientScope | AllClientScopes;
export declare const allClientScopeTypes: AllClientScopeType[];
export declare const clientScopeTypesSelectOptions: (t: TFunction, scopeTypes?: string[] | undefined) => import("react/jsx-runtime").JSX.Element[];
export declare const clientScopeTypesDropdown: (t: TFunction, onClick: (scope: ClientScopeType) => void) => import("react/jsx-runtime").JSX.Element[];
type CellDropdownProps = Omit<SelectProps, "toggle"> & {
    clientScope: ClientScopeRepresentation;
    type: ClientScopeType | AllClientScopeType;
    all?: boolean;
    onSelect: (value: ClientScopeType | AllClientScopeType) => void;
    isDisabled?: boolean;
};
export declare const CellDropdown: ({ clientScope, type, onSelect, all, isDisabled, ...props }: CellDropdownProps) => import("react/jsx-runtime").JSX.Element;
export type ClientScopeDefaultOptionalType = ClientScopeRepresentation & {
    type: AllClientScopeType;
};
export declare const changeScope: (adminClient: KeycloakAdminClient, clientScope: ClientScopeDefaultOptionalType, changeTo: AllClientScopeType) => Promise<void>;
export declare const removeScope: (adminClient: KeycloakAdminClient, clientScope: ClientScopeDefaultOptionalType) => Promise<void>;
export declare const changeClientScope: (adminClient: KeycloakAdminClient, clientId: string, clientScope: ClientScopeRepresentation, type: AllClientScopeType, changeTo: ClientScopeType) => Promise<void>;
export declare const removeClientScope: (adminClient: KeycloakAdminClient, clientId: string, clientScope: ClientScopeRepresentation, type: ClientScope) => Promise<void>;
export declare const addClientScope: (adminClient: KeycloakAdminClient, clientId: string, clientScope: ClientScopeRepresentation, type: ClientScopeType) => Promise<void>;
export {};
