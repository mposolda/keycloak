import { default as UserRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/userRepresentation';

type UserCredentialsProps = {
    user: UserRepresentation;
    setUser: (user: UserRepresentation) => void;
};
export declare const UserCredentials: ({ user, setUser }: UserCredentialsProps) => import("react/jsx-runtime").JSX.Element;
export {};
