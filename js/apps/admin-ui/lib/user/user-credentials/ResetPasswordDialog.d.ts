import { default as UserRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/userRepresentation';

type ResetPasswordDialogProps = {
    user: UserRepresentation;
    isResetPassword: boolean;
    onAddRequiredActions?: (requiredActions: string[]) => void;
    refresh: () => void;
    onClose: () => void;
};
export type CredentialsForm = {
    password: string;
    passwordConfirmation: string;
    temporaryPassword: boolean;
};
export declare const ResetPasswordDialog: ({ user, isResetPassword, onAddRequiredActions, refresh, onClose, }: ResetPasswordDialogProps) => import("react/jsx-runtime").JSX.Element;
export {};
