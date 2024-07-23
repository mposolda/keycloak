import { ReactNode } from 'react';
import { default as CredentialRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/credentialRepresentation';

type CredentialRowProps = {
    credential: CredentialRepresentation;
    resetPassword: () => void;
    toggleDelete: () => void;
    children: ReactNode;
};
export declare const CredentialRow: ({ credential, resetPassword, toggleDelete, children, }: CredentialRowProps) => import("react/jsx-runtime").JSX.Element;
export {};
