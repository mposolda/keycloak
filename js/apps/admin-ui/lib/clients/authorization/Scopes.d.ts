import { default as PolicyRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/policyRepresentation';
import { default as ScopeRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/scopeRepresentation';

type ScopesProps = {
    clientId: string;
    isDisabled?: boolean;
};
export type PermissionScopeRepresentation = ScopeRepresentation & {
    permissions?: PolicyRepresentation[];
    isLoaded: boolean;
};
export declare const AuthorizationScopes: ({ clientId, isDisabled, }: ScopesProps) => import("react/jsx-runtime").JSX.Element;
export {};
