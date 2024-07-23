import { ComponentProps } from '../dynamic/components';

type UserSelectVariant = "typeaheadMulti" | "typeahead";
type UserSelectProps = ComponentProps & {
    variant?: UserSelectVariant;
    isRequired?: boolean;
};
export declare const UserSelect: ({ name, label, helpText, defaultValue, isRequired, variant, }: UserSelectProps) => import("react/jsx-runtime").JSX.Element;
export {};
