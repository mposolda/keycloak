import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type IdentityProvidersParams = {
    realm: string;
};
export declare const IdentityProvidersRoute: AppRouteObject;
export declare const toIdentityProviders: (params: IdentityProvidersParams) => Partial<Path>;
