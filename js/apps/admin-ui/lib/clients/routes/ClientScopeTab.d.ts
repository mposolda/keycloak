import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type ClientScopesTab = "setup" | "evaluate";
export type ClientScopesParams = {
    realm: string;
    clientId: string;
    tab: ClientScopesTab;
};
export declare const ClientScopesRoute: AppRouteObject;
export declare const toClientScopesTab: (params: ClientScopesParams) => Partial<Path>;
