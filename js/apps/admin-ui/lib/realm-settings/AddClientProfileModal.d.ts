import { default as RoleRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/roleRepresentation';

export type AddClientProfileModalProps = {
    open: boolean;
    toggleDialog: () => void;
    onConfirm: (newReps: RoleRepresentation[]) => void;
    allProfiles: string[];
};
export declare const AddClientProfileModal: (props: AddClientProfileModalProps) => import("react/jsx-runtime").JSX.Element;
