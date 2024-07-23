import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type RealmRolesParams = {
    realm: string;
};
export declare const RealmRolesRoute: AppRouteObject;
export declare const toRealmRoles: (params: RealmRolesParams) => Partial<Path>;
