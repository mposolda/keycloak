import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type PermissionType = "resource" | "scope";
export type NewPermissionParams = {
    realm: string;
    id: string;
    permissionType: PermissionType;
    selectedId?: string;
};
export declare const NewPermissionRoute: AppRouteObject;
export declare const NewPermissionWithSelectedIdRoute: AppRouteObject;
export declare const toNewPermission: (params: NewPermissionParams) => Partial<Path>;
