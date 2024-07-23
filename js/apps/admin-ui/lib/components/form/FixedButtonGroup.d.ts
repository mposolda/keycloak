import { ActionGroupProps } from '@patternfly/react-core';
import { PropsWithChildren } from 'react';

type FixedButtonGroupProps = ActionGroupProps & {
    name: string;
    save?: () => void;
    saveText?: string;
    reset?: () => void;
    resetText?: string;
    isSubmit?: boolean;
    isActive?: boolean;
};
export declare const FixedButtonsGroup: ({ name, save, saveText, reset, resetText, isSubmit, isActive, children, ...rest }: PropsWithChildren<FixedButtonGroupProps>) => import("react/jsx-runtime").JSX.Element;
export {};
