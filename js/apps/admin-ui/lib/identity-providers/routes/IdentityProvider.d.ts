import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type IdentityProviderTab = "settings" | "mappers" | "permissions";
export type IdentityProviderParams = {
    realm: string;
    providerId: string;
    alias: string;
    tab: IdentityProviderTab;
};
export declare const IdentityProviderRoute: AppRouteObject;
export declare const toIdentityProvider: (params: IdentityProviderParams) => Partial<Path>;
