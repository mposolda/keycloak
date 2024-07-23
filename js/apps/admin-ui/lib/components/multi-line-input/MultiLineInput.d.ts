import { TextInputProps } from '@patternfly/react-core';

export type MultiLineInputProps = Omit<TextInputProps, "form"> & {
    name: string;
    addButtonLabel?: string;
    isDisabled?: boolean;
    defaultValue?: string[];
    stringify?: boolean;
};
export declare const MultiLineInput: ({ name, addButtonLabel, isDisabled, defaultValue, stringify, id, ...rest }: MultiLineInputProps) => import("react/jsx-runtime").JSX.Element;
