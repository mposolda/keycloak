import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type CustomUserFederationRouteParams = {
    realm: string;
    providerId: string;
    id: string;
};
export declare const CustomUserFederationRoute: AppRouteObject;
export declare const toCustomUserFederation: (params: CustomUserFederationRouteParams) => Partial<Path>;
