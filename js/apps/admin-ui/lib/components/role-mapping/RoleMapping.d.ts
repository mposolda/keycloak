import { default as KeycloakAdminClient } from '@keycloak/keycloak-admin-client';
import { default as ClientRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/clientRepresentation';
import { default as RoleRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/roleRepresentation';

export type CompositeRole = RoleRepresentation & {
    parent: RoleRepresentation;
    isInherited?: boolean;
};
export type Row = {
    client?: ClientRepresentation;
    role: RoleRepresentation | CompositeRole;
    id?: string;
};
export declare const mapRoles: (assignedRoles: Row[], effectiveRoles: Row[], hide: boolean) => {
    role: {
        isInherited: boolean;
        id?: string;
        name?: string;
        description?: string;
        scopeParamRequired?: boolean;
        composite?: boolean;
        composites?: import('@keycloak/keycloak-admin-client/lib/defs/roleRepresentation').Composites;
        clientRole?: boolean;
        containerId?: string;
        attributes?: {
            [index: string]: string[];
        };
    } | {
        isInherited: boolean;
        id?: string;
        name?: string;
        description?: string;
        scopeParamRequired?: boolean;
        composite?: boolean;
        composites?: import('@keycloak/keycloak-admin-client/lib/defs/roleRepresentation').Composites;
        clientRole?: boolean;
        containerId?: string;
        attributes?: {
            [index: string]: string[];
        };
        parent: RoleRepresentation;
    };
    client?: ClientRepresentation;
    id?: string;
}[];
export declare const ServiceRole: ({ role, client }: Row) => import("react/jsx-runtime").JSX.Element;
export type ResourcesKey = keyof KeycloakAdminClient;
type RoleMappingProps = {
    name: string;
    id: string;
    type: ResourcesKey;
    isManager?: boolean;
    save: (rows: Row[]) => Promise<void>;
};
export declare const RoleMapping: ({ name, id, type, isManager, save, }: RoleMappingProps) => import("react/jsx-runtime").JSX.Element;
export {};
