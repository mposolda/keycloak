import { default as KeycloakAdminClient } from '@keycloak/keycloak-admin-client';

export declare function fetchAdminUI<T>(adminClient: KeycloakAdminClient, endpoint: string, query?: Record<string, string>): Promise<T>;
