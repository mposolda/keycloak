import { ResourcesKey, Row } from './RoleMapping';

type AddRoleMappingModalProps = {
    id: string;
    type: ResourcesKey;
    name?: string;
    isRadio?: boolean;
    onAssign: (rows: Row[]) => void;
    onClose: () => void;
    isLDAPmapper?: boolean;
};
export declare const AddRoleMappingModal: ({ id, name, type, isRadio, isLDAPmapper, onAssign, onClose, }: AddRoleMappingModalProps) => import("react/jsx-runtime").JSX.Element;
export {};
