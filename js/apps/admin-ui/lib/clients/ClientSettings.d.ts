import { default as ClientRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/clientRepresentation';

export type ClientSettingsProps = {
    client: ClientRepresentation;
    save: () => void;
    reset: () => void;
};
export declare const ClientSettings: (props: ClientSettingsProps) => import("react/jsx-runtime").JSX.Element;
