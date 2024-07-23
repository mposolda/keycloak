import { default as RequiredActionProviderRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/requiredActionProviderRepresentation';

type RequiredActionConfigModalProps = {
    requiredAction: RequiredActionProviderRepresentation;
    onClose: () => void;
};
export declare const RequiredActionConfigModal: ({ requiredAction, onClose, }: RequiredActionConfigModalProps) => import("react/jsx-runtime").JSX.Element;
export {};
