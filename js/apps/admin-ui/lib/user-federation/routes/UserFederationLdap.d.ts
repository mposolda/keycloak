import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type UserFederationLdapTab = "settings" | "mappers";
export type UserFederationLdapParams = {
    realm: string;
    id: string;
    tab?: UserFederationLdapTab;
};
export declare const UserFederationLdapRoute: AppRouteObject;
export declare const UserFederationLdapWithTabRoute: AppRouteObject;
export declare const toUserFederationLdap: (params: UserFederationLdapParams) => Partial<Path>;
