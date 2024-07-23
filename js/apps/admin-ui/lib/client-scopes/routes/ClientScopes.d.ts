import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type ClientScopesParams = {
    realm: string;
};
export declare const ClientScopesRoute: AppRouteObject;
export declare const toClientScopes: (params: ClientScopesParams) => Partial<Path>;
