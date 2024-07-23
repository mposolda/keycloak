import { default as CredentialRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/credentialRepresentation';

type InlineLabelEditProps = {
    userId: string;
    credential: CredentialRepresentation;
    isEditable: boolean;
    toggle: () => void;
};
export declare const InlineLabelEdit: ({ userId, credential, isEditable, toggle, }: InlineLabelEditProps) => import("react/jsx-runtime").JSX.Element;
export {};
