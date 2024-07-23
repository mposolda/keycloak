import { default as ResourceRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/resourceRepresentation';

export type AttributeType = {
    key?: string;
    name: string;
    custom?: boolean;
    values?: {
        [key: string]: string;
    }[];
};
type AttributeInputProps = {
    name: string;
    selectableValues?: AttributeType[];
    resources?: ResourceRepresentation[];
};
export declare const KeyBasedAttributeInput: ({ name, selectableValues, resources, }: AttributeInputProps) => import("react/jsx-runtime").JSX.Element;
export {};
