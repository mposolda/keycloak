import { ComponentClass, MouseEventHandler, ReactNode } from 'react';
import { ButtonVariant } from '@patternfly/react-core';
import { SVGIconProps } from '@patternfly/react-icons/dist/js/createIcon';

export type Action = {
    text: string;
    type?: ButtonVariant;
    onClick: MouseEventHandler<HTMLButtonElement>;
};
export type ListEmptyStateProps = {
    message: string;
    instructions: ReactNode;
    primaryActionText?: string;
    onPrimaryAction?: MouseEventHandler<HTMLButtonElement>;
    hasIcon?: boolean;
    icon?: ComponentClass<SVGIconProps>;
    isSearchVariant?: boolean;
    secondaryActions?: Action[];
    isDisabled?: boolean;
};
export declare const ListEmptyState: ({ message, instructions, onPrimaryAction, hasIcon, isSearchVariant, primaryActionText, secondaryActions, icon, isDisabled, }: ListEmptyStateProps) => import("react/jsx-runtime").JSX.Element;
