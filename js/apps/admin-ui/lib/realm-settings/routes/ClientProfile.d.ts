import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type ClientProfileParams = {
    realm: string;
    profileName: string;
};
export declare const ClientProfileRoute: AppRouteObject;
export declare const toClientProfile: (params: ClientProfileParams) => Partial<Path>;
