import { default as KeycloakAdminClient } from '@keycloak/keycloak-admin-client';
import { default as MappingsRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/mappingsRepresentation';
import { default as RoleRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/roleRepresentation';
import { Row } from './RoleMapping';

export type ResourcesKey = keyof KeycloakAdminClient;
export declare const deleteMapping: (adminClient: KeycloakAdminClient, type: ResourcesKey, id: string, rows: Row[]) => Promise<RoleRepresentation[]>[];
export declare const getMapping: (adminClient: KeycloakAdminClient, type: ResourcesKey, id: string) => Promise<MappingsRepresentation>;
export declare const getEffectiveRoles: (adminClient: KeycloakAdminClient, type: ResourcesKey, id: string) => Promise<Row[]>;
export declare const getAvailableRoles: (adminClient: KeycloakAdminClient, type: ResourcesKey, params: Record<string, string | number>) => Promise<Row[]>;
