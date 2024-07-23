import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type ClientTab = "settings" | "keys" | "credentials" | "roles" | "clientScopes" | "advanced" | "mappers" | "authorization" | "serviceAccount" | "permissions" | "sessions";
export type ClientParams = {
    realm: string;
    clientId: string;
    tab: ClientTab;
};
export declare const ClientRoute: AppRouteObject;
export declare const toClient: (params: ClientParams) => Partial<Path>;
