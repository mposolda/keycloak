import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type RealmRoleTab = "details" | "associated-roles" | "attributes" | "users-in-role" | "permissions";
export type RealmRoleParams = {
    realm: string;
    id: string;
    tab: RealmRoleTab;
};
export declare const RealmRoleRoute: AppRouteObject;
export declare const toRealmRole: (params: RealmRoleParams) => Partial<Path>;
