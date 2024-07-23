import { default as ComponentRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/componentRepresentation';

type ManagePriorityDialogProps = {
    components: ComponentRepresentation[];
    onClose: () => void;
};
export declare const ManagePriorityDialog: ({ components, onClose, }: ManagePriorityDialogProps) => import("react/jsx-runtime").JSX.Element;
export {};
