import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type AddUserParams = {
    realm: string;
};
export declare const AddUserRoute: AppRouteObject;
export declare const toAddUser: (params: AddUserParams) => Partial<Path>;
