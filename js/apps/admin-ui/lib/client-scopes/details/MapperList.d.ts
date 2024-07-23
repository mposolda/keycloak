import { Path } from 'react-router-dom';
import { default as ClientRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/clientRepresentation';
import { default as ClientScopeRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/clientScopeRepresentation';
import { default as ProtocolMapperRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/protocolMapperRepresentation';
import { ProtocolMapperTypeRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/serverInfoRepesentation';

type MapperListProps = {
    model: ClientScopeRepresentation | ClientRepresentation;
    onAdd: (mappers: ProtocolMapperTypeRepresentation | ProtocolMapperRepresentation[]) => void;
    onDelete: (mapper: ProtocolMapperRepresentation) => void;
    detailLink: (id: string) => Partial<Path>;
};
export declare const MapperList: ({ model, onAdd, onDelete, detailLink, }: MapperListProps) => import("react/jsx-runtime").JSX.Element;
export {};
