import { default as IdentityProviderMapperRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/identityProviderMapperRepresentation';
import { IdentityProviderMapperTypeRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/identityProviderMapperTypeRepresentation';
import { UseFormReturn } from 'react-hook-form';
import { IdPMapperRepresentationWithAttributes } from './AddMapper';

type AddMapperFormProps = {
    mapperTypes: IdentityProviderMapperRepresentation[];
    mapperType: IdentityProviderMapperTypeRepresentation;
    id: string;
    updateMapperType: (mapperType: IdentityProviderMapperTypeRepresentation) => void;
    form: UseFormReturn<IdPMapperRepresentationWithAttributes>;
};
export declare const AddMapperForm: ({ mapperTypes, mapperType, form, id, updateMapperType, }: AddMapperFormProps) => import("react/jsx-runtime").JSX.Element;
export {};
