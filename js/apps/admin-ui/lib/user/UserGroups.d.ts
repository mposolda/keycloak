import { default as UserRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/userRepresentation';

type UserGroupsProps = {
    user: UserRepresentation;
};
export declare const UserGroups: ({ user }: UserGroupsProps) => import("react/jsx-runtime").JSX.Element;
export {};
