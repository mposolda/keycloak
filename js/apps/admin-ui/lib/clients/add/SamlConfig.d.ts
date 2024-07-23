import { Path, PathValue } from 'react-hook-form';
import { FormFields } from '../ClientDetails';

type ToggleProps = {
    name: PathValue<FormFields, Path<FormFields>>;
    label: string;
};
export declare const Toggle: ({ name, label }: ToggleProps) => import("react/jsx-runtime").JSX.Element;
export declare const SamlConfig: () => import("react/jsx-runtime").JSX.Element;
export {};
