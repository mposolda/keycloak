import { FieldPathByValue, FieldValues } from 'react-hook-form';

export type RequiredActionMultiSelectProps<T extends FieldValues, P extends FieldPathByValue<T, string[] | undefined>> = {
    name: P;
    label: string;
    help: string;
};
export declare const RequiredActionMultiSelect: <T extends FieldValues, P extends FieldPathByValue<T, string[] | undefined>>({ name, label, help, }: RequiredActionMultiSelectProps<T, P>) => import("react/jsx-runtime").JSX.Element;
