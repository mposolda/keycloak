import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type IdentityProviderKeycloakOidcParams = {
    realm: string;
};
export declare const IdentityProviderKeycloakOidcRoute: AppRouteObject;
export declare const toIdentityProviderKeycloakOidc: (params: IdentityProviderKeycloakOidcParams) => Partial<Path>;
