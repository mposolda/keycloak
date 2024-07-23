export type DefaultValue = {
    key: string;
    values?: string[];
    label: string;
};
type KeyValueInputProps = {
    name: string;
    label?: string;
    defaultKeyValue?: DefaultValue[];
    isDisabled?: boolean;
};
export declare const KeyValueInput: ({ name, label, defaultKeyValue, isDisabled, }: KeyValueInputProps) => import("react/jsx-runtime").JSX.Element;
export {};
