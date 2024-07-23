import { default as ComponentRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/componentRepresentation';

export type LdapComponentRepresentation = ComponentRepresentation & {
    config?: {
        periodicChangedUsersSync?: boolean;
        periodicFullSync?: boolean;
    };
};
export type UserFederationLdapFormProps = {
    id?: string;
    onSubmit: (formData: LdapComponentRepresentation) => void;
};
export declare const UserFederationLdapForm: ({ id, onSubmit, }: UserFederationLdapFormProps) => import("react/jsx-runtime").JSX.Element;
export declare function serializeFormData(formData: LdapComponentRepresentation): LdapComponentRepresentation;
