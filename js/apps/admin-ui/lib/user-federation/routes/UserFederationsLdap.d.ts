import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type UserFederationsLdapParams = {
    realm: string;
};
export declare const UserFederationsLdapRoute: AppRouteObject;
export declare const toUserFederationsLdap: (params: UserFederationsLdapParams) => Partial<Path>;
