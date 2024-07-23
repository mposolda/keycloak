import { PropsWithChildren } from 'react';

export type FieldProps = {
    label: string;
    field: string;
    isReadOnly?: boolean;
};
export type FormGroupFieldProps = {
    label: string;
};
export declare const FormGroupField: ({ label, children, }: PropsWithChildren<FormGroupFieldProps>) => import("react/jsx-runtime").JSX.Element;
