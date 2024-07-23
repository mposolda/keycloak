import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type IdentityProviderEditMapperParams = {
    realm: string;
    providerId: string;
    alias: string;
    id: string;
};
export declare const IdentityProviderEditMapperRoute: AppRouteObject;
export declare const toIdentityProviderEditMapper: (params: IdentityProviderEditMapperParams) => Partial<Path>;
