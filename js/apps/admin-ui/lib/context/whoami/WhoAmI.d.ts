import { default as WhoAmIRepresentation, AccessType } from '@keycloak/keycloak-admin-client/lib/defs/whoAmIRepresentation';
import { PropsWithChildren } from 'react';

export declare class WhoAmI {
    #private;
    constructor(me?: WhoAmIRepresentation);
    getDisplayName(): string;
    getLocale(): string;
    getRealm(): string;
    getUserId(): string;
    canCreateRealm(): boolean;
    getRealmAccess(): Readonly<{
        [key: string]: ReadonlyArray<AccessType>;
    }>;
}
type WhoAmIProps = {
    refresh: () => void;
    whoAmI: WhoAmI;
};
export declare const WhoAmIContext: import('js/libs/ui-shared/dist/utils/createNamedContext').NamedContext<WhoAmIProps | undefined>;
export declare const useWhoAmI: () => WhoAmIProps;
export declare const WhoAmIContextProvider: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export {};
