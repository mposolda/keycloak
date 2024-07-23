import { default as ClientRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/clientRepresentation';
import { TFunction } from 'i18next';

/**
 * Checks if a client is intended to be used for authenticating a to a realm.
 */
export declare const isRealmClient: (client: ClientRepresentation) => boolean;
/**
 * Gets a human readable name for the specified protocol.
 */
export declare const getProtocolName: (t: TFunction<"clients">, protocol: string) => string;
export declare const defaultContextAttributes: ({
    key: string;
    name: string;
    custom: boolean;
    values?: undefined;
} | {
    key: string;
    name: string;
    values: {
        key: string;
        name: string;
    }[];
    custom?: undefined;
} | {
    key: string;
    name: string;
    custom?: undefined;
    values?: undefined;
})[];
