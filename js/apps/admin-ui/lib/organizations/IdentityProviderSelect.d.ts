import { ComponentProps } from '../components/dynamic/components';

type IdentityProviderSelectProps = ComponentProps & {
    variant?: "typeaheadMulti" | "typeahead";
    isRequired?: boolean;
};
export declare const IdentityProviderSelect: ({ name, label, helpText, defaultValue, isRequired, variant, isDisabled, }: IdentityProviderSelectProps) => import("react/jsx-runtime").JSX.Element;
export {};
