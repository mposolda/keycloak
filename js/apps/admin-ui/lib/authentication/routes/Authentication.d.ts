import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type AuthenticationTab = "flows" | "required-actions" | "policies";
export type AuthenticationParams = {
    realm: string;
    tab?: AuthenticationTab;
};
export declare const AuthenticationRoute: AppRouteObject;
export declare const AuthenticationRouteWithTab: AppRouteObject;
export declare const toAuthentication: (params: AuthenticationParams) => Partial<Path>;
