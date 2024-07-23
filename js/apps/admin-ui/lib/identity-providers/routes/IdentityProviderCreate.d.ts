import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type IdentityProviderCreateParams = {
    realm: string;
    providerId: string;
};
export declare const IdentityProviderCreateRoute: AppRouteObject;
export declare const toIdentityProviderCreate: (params: IdentityProviderCreateParams) => Partial<Path>;
