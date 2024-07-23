export type ValueMapperFn<T> = (item: T) => string | undefined;
export default function useLocaleSort(): <T>(items: T[], mapperFn: ValueMapperFn<T>) => T[];
type KeysMatching<T, V> = {
    [K in keyof T]: T[K] extends V ? K : never;
}[keyof T];
export declare const mapByKey: <T extends { [_ in K]?: string; }, K extends KeysMatching<T, string | undefined>>(key: K) => (item: T) => T[K];
export {};
