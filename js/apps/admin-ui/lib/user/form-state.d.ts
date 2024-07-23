import { default as UserRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/userRepresentation';
import { KeyValueType } from '../components/key-value-form/key-value-convert';

export type UserFormFields = Omit<UIUserRepresentation, "attributes" | "userProfileMetadata" | "unmanagedAttributes"> & {
    attributes?: KeyValueType[] | Record<string, string | string[]>;
    unmanagedAttributes?: KeyValueType[] | Record<string, string | string[]>;
};
export interface UIUserRepresentation extends UserRepresentation {
    unmanagedAttributes?: Record<string, string[]>;
}
export declare function toUserFormFields(data: UIUserRepresentation): UserFormFields;
export declare function toUserRepresentation(data: UserFormFields): UIUserRepresentation;
export declare function filterManagedAttributes(attributes?: Record<string, string[]>, unmanagedAttributes?: Record<string, string[]>): {
    [k: string]: string[];
};
