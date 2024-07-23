import { default as RealmRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/realmRepresentation';
import { PropsWithChildren } from 'react';

type RealmContextType = {
    realm: string;
    realmRepresentation?: RealmRepresentation;
    refresh: () => void;
};
export declare const RealmContext: import('js/libs/ui-shared/dist/utils/createNamedContext').NamedContext<RealmContextType | undefined>;
export declare const RealmContextProvider: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export declare const useRealm: () => RealmContextType;
export {};
