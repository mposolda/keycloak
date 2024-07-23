import { default as AuthenticationFlowRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/authenticationFlowRepresentation';

type EditFlowModalProps = {
    flow: AuthenticationFlowRepresentation;
    toggleDialog: () => void;
};
export declare const EditFlowModal: ({ flow, toggleDialog }: EditFlowModalProps) => import("react/jsx-runtime").JSX.Element;
export {};
