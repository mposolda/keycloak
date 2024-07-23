import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type NewRoleParams = {
    realm: string;
    clientId: string;
};
export declare const NewRoleRoute: AppRouteObject;
export declare const toCreateRole: (params: NewRoleParams) => Partial<Path>;
