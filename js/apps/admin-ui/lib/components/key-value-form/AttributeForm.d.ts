import { default as RoleRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/roleRepresentation';
import { UseFormReturn } from 'react-hook-form';
import { KeyValueType } from './key-value-convert';

export type AttributeForm = Omit<RoleRepresentation, "attributes"> & {
    attributes?: KeyValueType[];
};
export type AttributesFormProps = {
    form: UseFormReturn<AttributeForm>;
    save?: (model: AttributeForm) => void;
    reset?: () => void;
    fineGrainedAccess?: boolean;
    name?: string;
    isDisabled?: boolean;
};
export declare const AttributesForm: ({ form, reset, save, fineGrainedAccess, name, isDisabled, }: AttributesFormProps) => import("react/jsx-runtime").JSX.Element;
