import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type UserFederationsKerberosParams = {
    realm: string;
};
export declare const UserFederationsKerberosRoute: AppRouteObject;
export declare const toUserFederationsKerberos: (params: UserFederationsKerberosParams) => Partial<Path>;
