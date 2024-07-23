import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type ClientRoleTab = "details" | "attributes" | "users-in-role" | "associated-roles";
export type ClientRoleParams = {
    realm: string;
    clientId: string;
    id: string;
    tab: ClientRoleTab;
};
export declare const ClientRoleRoute: AppRouteObject;
export declare const toClientRole: (params: ClientRoleParams) => Partial<Path>;
