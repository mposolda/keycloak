import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type AddClientProfileParams = {
    realm: string;
    tab: string;
};
export declare const AddClientProfileRoute: AppRouteObject;
export declare const toAddClientProfile: (params: AddClientProfileParams) => Partial<Path>;
