import { default as ComponentTypeRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/componentTypeRepresentation';

type ValidatorSelectProps = {
    selectedValidators: string[];
    onChange: (validator: ComponentTypeRepresentation) => void;
};
export declare const ValidatorSelect: ({ selectedValidators, onChange, }: ValidatorSelectProps) => import("react/jsx-runtime").JSX.Element;
export {};
