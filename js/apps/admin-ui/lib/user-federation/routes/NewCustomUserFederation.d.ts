import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type NewCustomUserFederationRouteParams = {
    realm: string;
    providerId: string;
};
export declare const NewCustomUserFederationRoute: AppRouteObject;
export declare const toNewCustomUserFederation: (params: NewCustomUserFederationRouteParams) => Partial<Path>;
