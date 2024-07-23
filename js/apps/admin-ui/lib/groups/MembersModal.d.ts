import { default as UserRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/userRepresentation';

type MemberModalProps = {
    membersQuery: (first?: number, max?: number) => Promise<UserRepresentation[]>;
    onAdd: (users: UserRepresentation[]) => Promise<void>;
    onClose: () => void;
};
export declare const MemberModal: ({ membersQuery, onAdd, onClose, }: MemberModalProps) => import("react/jsx-runtime").JSX.Element;
export {};
