import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type AuthorizationTab = "settings" | "resources" | "scopes" | "policies" | "permissions" | "evaluate" | "export";
export type AuthorizationParams = {
    realm: string;
    clientId: string;
    tab: AuthorizationTab;
};
export declare const AuthorizationRoute: AppRouteObject;
export declare const toAuthorizationTab: (params: AuthorizationParams) => Partial<Path>;
