import { ReactElement, ReactNode } from 'react';
import { ButtonVariant, ModalVariant } from '@patternfly/react-core';

export declare const useConfirmDialog: (props: ConfirmDialogProps) => [() => void, () => ReactElement];
export interface ConfirmDialogModalProps extends ConfirmDialogProps {
    open: boolean;
    toggleDialog: () => void;
}
export type ConfirmDialogProps = {
    titleKey: string;
    messageKey?: string;
    noCancelButton?: boolean;
    confirmButtonDisabled?: boolean;
    cancelButtonLabel?: string;
    continueButtonLabel?: string;
    continueButtonVariant?: ButtonVariant;
    variant?: ModalVariant;
    onConfirm: () => void;
    onCancel?: () => void;
    children?: ReactNode;
};
export declare const ConfirmDialogModal: ({ titleKey, messageKey, noCancelButton, cancelButtonLabel, continueButtonLabel, continueButtonVariant, onConfirm, onCancel, children, open, variant, toggleDialog, confirmButtonDisabled, }: ConfirmDialogModalProps) => import("react/jsx-runtime").JSX.Element;
