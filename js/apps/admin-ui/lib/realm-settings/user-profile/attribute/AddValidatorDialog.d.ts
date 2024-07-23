import { default as ComponentRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/componentRepresentation';
import { IndexedValidations } from '../../NewAttributeSettings';

export type AddValidatorDialogProps = {
    selectedValidators: IndexedValidations[];
    toggleDialog: () => void;
    onConfirm: (newValidator: ComponentRepresentation) => void;
};
export declare const AddValidatorDialog: ({ selectedValidators, toggleDialog, onConfirm, }: AddValidatorDialogProps) => import("react/jsx-runtime").JSX.Element;
