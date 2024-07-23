import { default as ProtocolMapperRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/protocolMapperRepresentation';
import { ProtocolMapperTypeRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/serverInfoRepesentation';

export type AddMapperDialogModalProps = {
    protocol: string;
    filter?: ProtocolMapperRepresentation[];
    onConfirm: (value: ProtocolMapperTypeRepresentation | ProtocolMapperRepresentation[]) => void;
};
export type AddMapperDialogProps = AddMapperDialogModalProps & {
    open: boolean;
    toggleDialog: () => void;
};
export declare const AddMapperDialog: (props: AddMapperDialogProps) => import("react/jsx-runtime").JSX.Element;
