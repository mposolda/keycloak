import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type DashboardTab = "info" | "providers" | "welcome";
export type DashboardParams = {
    realm?: string;
    tab?: DashboardTab;
};
export declare const DashboardRoute: AppRouteObject;
export declare const DashboardRouteWithRealm: AppRouteObject;
export declare const DashboardRouteWithTab: AppRouteObject;
export declare const toDashboard: (params: DashboardParams) => Partial<Path>;
