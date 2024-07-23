import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type NewLdapUserFederationParams = {
    realm: string;
};
export declare const NewLdapUserFederationRoute: AppRouteObject;
export declare const toNewLdapUserFederation: (params: NewLdapUserFederationParams) => Partial<Path>;
