import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type IdentityProviderSamlParams = {
    realm: string;
};
export declare const IdentityProviderSamlRoute: AppRouteObject;
export declare const toIdentityProviderSaml: (params: IdentityProviderSamlParams) => Partial<Path>;
