import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';
import { PermissionType } from './NewPermission';

export type PermissionDetailsParams = {
    realm: string;
    id: string;
    permissionType: string | PermissionType;
    permissionId: string;
};
export declare const PermissionDetailsRoute: AppRouteObject;
export declare const toPermissionDetails: (params: PermissionDetailsParams) => Partial<Path>;
