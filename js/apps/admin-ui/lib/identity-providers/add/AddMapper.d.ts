import { default as IdentityProviderMapperRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/identityProviderMapperRepresentation';
import { default as RoleRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/roleRepresentation';
import { AttributeForm } from '../../components/key-value-form/AttributeForm';

export type IdPMapperRepresentationWithAttributes = IdentityProviderMapperRepresentation & AttributeForm;
export type Role = RoleRepresentation & {
    clientId?: string;
};
export default function AddMapper(): import("react/jsx-runtime").JSX.Element;
