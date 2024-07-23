import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type UserFederationLdapMapperParams = {
    realm: string;
    id: string;
    mapperId: string;
};
export declare const UserFederationLdapMapperRoute: AppRouteObject;
export declare const toUserFederationLdapMapper: (params: UserFederationLdapMapperParams) => Partial<Path>;
