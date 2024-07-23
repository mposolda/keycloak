import { default as OrganizationRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/organizationRepresentation';
import { AttributeForm } from '../components/key-value-form/AttributeForm';

export type OrganizationFormType = AttributeForm & Omit<OrganizationRepresentation, "domains" | "attributes"> & {
    domains?: string[];
};
export declare const convertToOrg: (org: OrganizationFormType) => OrganizationRepresentation;
export declare const OrganizationForm: () => import("react/jsx-runtime").JSX.Element;
