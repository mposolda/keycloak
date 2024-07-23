import { UseControllerProps } from 'react-hook-form';
import { DefaultValue } from './KeyValueInput';

type ValueSelectProps = UseControllerProps & {
    selectItems: DefaultValue[];
    keyValue: string;
};
export declare const ValueSelect: ({ selectItems, keyValue, ...rest }: ValueSelectProps) => import("react/jsx-runtime").JSX.Element;
export {};
