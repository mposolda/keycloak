import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type AddRoleParams = {
    realm: string;
};
export declare const AddRoleRoute: AppRouteObject;
export declare const toAddRole: (params: AddRoleParams) => Partial<Path>;
