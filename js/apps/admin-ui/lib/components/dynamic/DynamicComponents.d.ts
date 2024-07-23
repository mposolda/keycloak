import { ConfigPropertyRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/authenticatorConfigInfoRepresentation';

type DynamicComponentProps = {
    properties: ConfigPropertyRepresentation[];
    stringify?: boolean;
    isNew?: boolean;
};
export declare const DynamicComponents: ({ properties, ...rest }: DynamicComponentProps) => import("react/jsx-runtime").JSX.Element;
export declare const convertToName: (name: string) => string;
export {};
