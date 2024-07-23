import { AccessType } from '@keycloak/keycloak-admin-client/lib/defs/whoAmIRepresentation';
import { PropsWithChildren } from 'react';

type AccessContextProps = {
    hasAccess: (...types: AccessType[]) => boolean;
    hasSomeAccess: (...types: AccessType[]) => boolean;
};
export declare const AccessContext: import('js/libs/ui-shared/dist/utils/createNamedContext').NamedContext<AccessContextProps | undefined>;
export declare const useAccess: () => AccessContextProps;
export declare const AccessContextProvider: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export {};
