import { UseControllerProps } from 'react-hook-form';
import { DefaultValue } from './KeyValueInput';

type KeySelectProp = UseControllerProps & {
    selectItems: DefaultValue[];
};
export declare const KeySelect: ({ selectItems, ...rest }: KeySelectProp) => import("react/jsx-runtime").JSX.Element;
export {};
