import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type IdentityProviderAddMapperParams = {
    realm: string;
    providerId: string;
    alias: string;
    tab: string;
};
export declare const IdentityProviderAddMapperRoute: AppRouteObject;
export declare const toIdentityProviderAddMapper: (params: IdentityProviderAddMapperParams) => Partial<Path>;
