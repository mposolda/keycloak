import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type UserFederationKerberosParams = {
    realm: string;
    id: string;
};
export declare const UserFederationKerberosRoute: AppRouteObject;
export declare const toUserFederationKerberos: (params: UserFederationKerberosParams) => Partial<Path>;
