import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type ClientsTab = "list" | "initial-access-token" | "client-registration";
export type ClientsParams = {
    realm: string;
    tab?: ClientsTab;
};
export declare const ClientsRoute: AppRouteObject;
export declare const ClientsRouteWithTab: AppRouteObject;
export declare const toClients: (params: ClientsParams) => Partial<Path>;
