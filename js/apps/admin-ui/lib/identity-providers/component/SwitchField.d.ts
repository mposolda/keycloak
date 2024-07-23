import { FieldProps } from './FormGroupField';

type FieldType = "boolean" | "string";
type SwitchFieldProps = FieldProps & {
    fieldType?: FieldType;
    defaultValue?: string | boolean;
};
export declare const SwitchField: ({ label, field, fieldType, isReadOnly, defaultValue, }: SwitchFieldProps) => import("react/jsx-runtime").JSX.Element;
export {};
