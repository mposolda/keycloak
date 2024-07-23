import { default as GroupRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/groupRepresentation';

export type GroupPickerDialogProps = {
    id?: string;
    type: "selectOne" | "selectMany";
    filterGroups?: GroupRepresentation[];
    text: {
        title: string;
        ok: string;
    };
    canBrowse?: boolean;
    isMove?: boolean;
    onConfirm: (groups: GroupRepresentation[] | undefined) => void;
    onClose: () => void;
};
export declare const GroupPickerDialog: ({ id, type, filterGroups, text, canBrowse, isMove, onClose, onConfirm, }: GroupPickerDialogProps) => import("react/jsx-runtime").JSX.Element;
