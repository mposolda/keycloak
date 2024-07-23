import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type ClientScopeTab = "settings" | "mappers" | "scope";
export type ClientScopeParams = {
    realm: string;
    id: string;
    tab: ClientScopeTab;
};
export declare const ClientScopeRoute: AppRouteObject;
export declare const toClientScope: (params: ClientScopeParams) => Partial<Path>;
