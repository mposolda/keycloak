import { default as IdentityProviderRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/identityProviderRepresentation';

type LinkIdentityProviderModalProps = {
    orgId: string;
    identityProvider?: IdentityProviderRepresentation;
    onClose: () => void;
};
export declare const LinkIdentityProviderModal: ({ orgId, identityProvider, onClose, }: LinkIdentityProviderModalProps) => import("react/jsx-runtime").JSX.Element;
export {};
