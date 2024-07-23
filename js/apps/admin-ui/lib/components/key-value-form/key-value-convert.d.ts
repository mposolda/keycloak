import { Path, PathValue } from 'react-hook-form';

export type KeyValueType = {
    key: string;
    value: string;
};
export declare function keyValueToArray(attributeArray?: KeyValueType[]): Record<string, string[]>;
export declare function arrayToKeyValue<T>(attributes?: Record<string, string[]>): PathValue<T, Path<T>>;
