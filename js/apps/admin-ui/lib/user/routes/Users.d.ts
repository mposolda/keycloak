import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type UserTab = "list" | "permissions";
export type UsersParams = {
    realm: string;
    tab?: UserTab;
};
export declare const UsersRoute: AppRouteObject;
export declare const UsersRouteWithTab: AppRouteObject;
export declare const toUsers: (params: UsersParams) => Partial<Path>;
