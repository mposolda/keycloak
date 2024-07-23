import { default as ClientRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/clientRepresentation';
import { ProviderRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/serverInfoRepesentation';
import { IFormatter } from '@patternfly/react-table';
import { FieldValues, Path, PathValue, UseFormSetValue } from 'react-hook-form';
import { ReplaceString } from './utils/types';

export declare const sortProviders: (providers: {
    [index: string]: ProviderRepresentation;
}) => string[];
export declare const toKey: (value: string) => string;
export declare const exportClient: (client: ClientRepresentation) => void;
export declare const toUpperCase: <T extends string>(name: T) => Capitalize<T>;
export declare function convertAttributeNameToForm<T>(name: string): PathValue<T, Path<T>>;
export declare const beerify: <T extends string>(name: T) => ReplaceString<T, ".", "\uD83C\uDF7A">;
export declare const debeerify: <T extends string>(name: T) => ReplaceString<T, "\uD83C\uDF7A", ".">;
export declare function convertToFormValues<T extends FieldValues>(obj: FieldValues, setValue: UseFormSetValue<T>): void;
export declare function convertFormValuesToObject<T extends Record<string, any>, G = T>(obj: T): G;
export declare const emptyFormatter: () => IFormatter;
export declare const upperCaseFormatter: () => IFormatter;
export declare const alphaRegexPattern: RegExp;
export declare const emailRegexPattern: RegExp;
export declare const KEY_PROVIDER_TYPE = "org.keycloak.keys.KeyProvider";
export declare const prettyPrintJSON: (value: any) => string;
export declare const addTrailingSlash: (url: string) => string;
export declare const localeToDisplayName: (locale: string, displayLocale: string) => string | undefined;
export declare const mediaQuery: MediaQueryList;
