import { default as ClientRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/clientRepresentation';

type DedicatedScopeProps = {
    client: ClientRepresentation;
};
export declare const DedicatedScope: ({ client: initialClient, }: DedicatedScopeProps) => import("react/jsx-runtime").JSX.Element;
export {};
