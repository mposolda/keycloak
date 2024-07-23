import { AccessType } from '@keycloak/keycloak-admin-client/lib/defs/whoAmIRepresentation';

type ForbiddenSectionProps = {
    permissionNeeded: AccessType | AccessType[];
};
export declare const ForbiddenSection: ({ permissionNeeded, }: ForbiddenSectionProps) => import("react/jsx-runtime").JSX.Element;
export {};
