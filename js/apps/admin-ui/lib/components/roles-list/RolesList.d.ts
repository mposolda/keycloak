import { default as RoleRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/roleRepresentation';
import { To } from 'react-router-dom';

type RolesListProps = {
    paginated?: boolean;
    parentRoleId?: string;
    messageBundle?: string;
    isReadOnly: boolean;
    toCreate: To;
    toDetail: (roleId: string) => To;
    loader?: (first?: number, max?: number, search?: string) => Promise<RoleRepresentation[]>;
};
export declare const RolesList: ({ loader, paginated, parentRoleId, messageBundle, toCreate, toDetail, isReadOnly, }: RolesListProps) => import("react/jsx-runtime").JSX.Element;
export {};
