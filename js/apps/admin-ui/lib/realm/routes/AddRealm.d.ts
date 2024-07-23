import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type AddRealmParams = {
    realm: string;
};
export declare const AddRealmRoute: AppRouteObject;
export declare const toAddRealm: (params: AddRealmParams) => Partial<Path>;
