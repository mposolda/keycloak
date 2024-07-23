import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type UserFederationParams = {
    realm: string;
};
export declare const UserFederationRoute: AppRouteObject;
export declare const toUserFederation: (params: UserFederationParams) => Partial<Path>;
