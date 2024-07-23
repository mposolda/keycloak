import { default as ComponentRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/componentRepresentation';

type KeysProvidersTabProps = {
    realmComponents: ComponentRepresentation[];
    refresh: () => void;
};
export declare const KeysProvidersTab: ({ realmComponents, refresh, }: KeysProvidersTabProps) => import("react/jsx-runtime").JSX.Element;
export {};
