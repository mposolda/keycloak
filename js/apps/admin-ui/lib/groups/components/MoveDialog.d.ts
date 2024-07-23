import { default as GroupRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/groupRepresentation';

type MoveDialogProps = {
    source: GroupRepresentation;
    onClose: () => void;
    refresh: () => void;
};
export declare const MoveDialog: ({ source, onClose, refresh }: MoveDialogProps) => import("react/jsx-runtime").JSX.Element;
export {};
