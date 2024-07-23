import { AccessType } from '@keycloak/keycloak-admin-client/lib/defs/whoAmIRepresentation';
import { TFunction } from 'i18next';
import { ComponentType } from 'react';
import { NonIndexRouteObject, RouteObject } from 'react-router-dom';

export type AppRouteObjectHandle = {
    access: AccessType | AccessType[];
};
export interface AppRouteObject extends NonIndexRouteObject {
    path: string;
    breadcrumb?: (t: TFunction) => string | ComponentType<any>;
    handle: AppRouteObjectHandle;
}
export declare const NotFoundRoute: AppRouteObject;
export declare const routes: AppRouteObject[];
export declare const RootRoute: RouteObject;
