import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type NewKerberosUserFederationParams = {
    realm: string;
};
export declare const NewKerberosUserFederationRoute: AppRouteObject;
export declare const toNewKerberosUserFederation: (params: NewKerberosUserFederationParams) => Partial<Path>;
