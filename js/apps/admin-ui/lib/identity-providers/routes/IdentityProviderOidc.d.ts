import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type IdentityProviderOidcParams = {
    realm: string;
};
export declare const IdentityProviderOidcRoute: AppRouteObject;
export declare const toIdentityProviderOidc: (params: IdentityProviderOidcParams) => Partial<Path>;
