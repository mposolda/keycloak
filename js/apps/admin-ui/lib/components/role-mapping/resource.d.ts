import { default as UserRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/userRepresentation';
import { default as KeycloakAdminClient } from '@keycloak/keycloak-admin-client';

type IDQuery = {
    id: string;
    type: string;
};
type PaginatingQuery = IDQuery & {
    first: number;
    max: number;
    search?: string;
};
type EffectiveClientRolesQuery = IDQuery;
type ClientRole = {
    id: string;
    role: string;
    description?: string;
    client: string;
    clientId: string;
};
export declare const getAvailableClientRoles: (adminClient: KeycloakAdminClient, query: PaginatingQuery) => Promise<ClientRole[]>;
export declare const getEffectiveClientRoles: (adminClient: KeycloakAdminClient, query: EffectiveClientRolesQuery) => Promise<ClientRole[]>;
type UserQuery = {
    lastName?: string;
    firstName?: string;
    email?: string;
    username?: string;
    emailVerified?: boolean;
    idpAlias?: string;
    idpUserId?: string;
    enabled?: boolean;
    briefRepresentation?: boolean;
    exact?: boolean;
    q?: string;
};
export type BruteUser = UserRepresentation & {
    bruteForceStatus?: Record<string, object>;
};
export declare const findUsers: (adminClient: KeycloakAdminClient, query: UserQuery) => Promise<BruteUser[]>;
export declare const fetchUsedBy: (adminClient: KeycloakAdminClient, query: PaginatingQuery) => Promise<string[]>;
export {};
