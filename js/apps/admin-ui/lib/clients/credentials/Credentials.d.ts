import { default as ClientRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/clientRepresentation';

export type CredentialsProps = {
    client: ClientRepresentation;
    save: () => void;
    refresh: () => void;
};
export declare const Credentials: ({ client, save, refresh }: CredentialsProps) => import("react/jsx-runtime").JSX.Element;
