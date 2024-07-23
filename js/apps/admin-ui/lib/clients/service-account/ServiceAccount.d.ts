import { default as ClientRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/clientRepresentation';

type ServiceAccountProps = {
    client: ClientRepresentation;
};
export declare const ServiceAccount: ({ client }: ServiceAccountProps) => import("react/jsx-runtime").JSX.Element;
export {};
