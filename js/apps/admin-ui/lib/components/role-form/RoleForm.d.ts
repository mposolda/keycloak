import { SubmitHandler, UseFormReturn } from 'react-hook-form';
import { To } from 'react-router-dom';
import { AttributeForm } from '../key-value-form/AttributeForm';

export type RoleFormProps = {
    form: UseFormReturn<AttributeForm>;
    onSubmit: SubmitHandler<AttributeForm>;
    cancelLink: To;
    role: "manage-realm" | "manage-clients";
    editMode: boolean;
};
export declare const RoleForm: ({ form: { formState }, onSubmit, cancelLink, role, editMode, }: RoleFormProps) => import("react/jsx-runtime").JSX.Element;
