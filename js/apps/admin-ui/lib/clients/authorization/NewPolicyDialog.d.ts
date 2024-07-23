import { default as PolicyProviderRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/policyProviderRepresentation';

type NewPolicyDialogProps = {
    policyProviders?: PolicyProviderRepresentation[];
    toggleDialog: () => void;
    onSelect: (provider: PolicyProviderRepresentation) => void;
};
export declare const NewPolicyDialog: ({ policyProviders, onSelect, toggleDialog, }: NewPolicyDialogProps) => import("react/jsx-runtime").JSX.Element;
export {};
