import { ConfigPropertyRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/authenticatorConfigInfoRepresentation';
import { FunctionComponent } from 'react';

export type ComponentProps = Omit<ConfigPropertyRepresentation, "type"> & {
    isDisabled?: boolean;
    isNew?: boolean;
    stringify?: boolean;
};
declare const ComponentTypes: readonly ["String", "Text", "boolean", "List", "Role", "Script", "Map", "Group", "MultivaluedList", "ClientList", "UserProfileAttributeList", "MultivaluedString", "File", "Password", "Url"];
export type Components = (typeof ComponentTypes)[number];
export declare const COMPONENTS: {
    [index in Components]: FunctionComponent<ComponentProps>;
};
export declare const isValidComponentType: (value: string) => value is Components;
export {};
