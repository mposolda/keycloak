import { default as ClientRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/clientRepresentation';

export type SaveOptions = {
    confirmed?: boolean;
    messageKey?: string;
};
export type FormFields = Omit<ClientRepresentation, "authorizationSettings" | "resources">;
export default function ClientDetails(): import("react/jsx-runtime").JSX.Element;
