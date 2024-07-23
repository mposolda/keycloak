import { RequiredActionAlias } from '@keycloak/keycloak-admin-client/lib/defs/requiredActionProviderRepresentation';

type ResetCredentialDialogProps = {
    userId: string;
    onClose: () => void;
};
type CredentialResetForm = {
    actions: RequiredActionAlias[];
    lifespan: number;
};
export declare const credResetFormDefaultValues: CredentialResetForm;
export declare const ResetCredentialDialog: ({ userId, onClose, }: ResetCredentialDialogProps) => import("react/jsx-runtime").JSX.Element;
export {};
