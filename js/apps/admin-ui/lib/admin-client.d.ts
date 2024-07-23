import { default as KeycloakAdminClient } from '@keycloak/keycloak-admin-client';
import { default as Keycloak } from 'keycloak-js';
import { Environment } from './environment';

export type AdminClientProps = {
    keycloak: Keycloak;
    adminClient: KeycloakAdminClient;
};
export declare const AdminClientContext: import('js/libs/ui-shared/dist/utils/createNamedContext').NamedContext<AdminClientProps | undefined>;
export declare const useAdminClient: () => AdminClientProps;
export declare function initAdminClient(keycloak: Keycloak, environment: Environment): Promise<KeycloakAdminClient>;
