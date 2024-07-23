import { default as ClientRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/clientRepresentation';

export type ClientSecretProps = {
    client: ClientRepresentation;
    secret: string;
    toggle: () => void;
};
export declare const ClientSecret: ({ client, secret, toggle }: ClientSecretProps) => import("react/jsx-runtime").JSX.Element;
