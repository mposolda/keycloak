import { default as ResourceServerRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/resourceServerRepresentation';

export type FormFields = Omit<ResourceServerRepresentation, "scopes" | "resources">;
export declare const AuthorizationSettings: ({ clientId }: {
    clientId: string;
}) => import("react/jsx-runtime").JSX.Element;
