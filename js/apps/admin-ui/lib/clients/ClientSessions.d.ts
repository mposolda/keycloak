import { default as ClientRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/clientRepresentation';

type ClientSessionsProps = {
    client: ClientRepresentation;
};
export declare const ClientSessions: ({ client }: ClientSessionsProps) => import("react/jsx-runtime").JSX.Element;
export {};
