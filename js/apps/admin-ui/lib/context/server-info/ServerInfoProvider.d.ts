import { ServerInfoRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/serverInfoRepesentation';
import { PropsWithChildren } from 'react';

export declare const ServerInfoContext: import('js/libs/ui-shared/dist/utils/createNamedContext').NamedContext<ServerInfoRepresentation | undefined>;
export declare const useServerInfo: () => ServerInfoRepresentation;
export declare const useLoginProviders: () => string[];
export declare const ServerInfoProvider: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
