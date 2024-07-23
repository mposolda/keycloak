import { AuthenticationProviderRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/authenticatorConfigRepresentation';

export type FlowType = "client" | "form" | "basic" | "condition" | "subFlow";
type AddStepModalProps = {
    name: string;
    type: FlowType;
    onSelect: (value?: AuthenticationProviderRepresentation) => void;
};
export declare const AddStepModal: ({ name, type, onSelect }: AddStepModalProps) => import("react/jsx-runtime").JSX.Element;
export {};
