import { default as UserRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/userRepresentation';

type FederatedUserLinkProps = {
    user: UserRepresentation;
};
export declare const FederatedUserLink: ({ user }: FederatedUserLinkProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
