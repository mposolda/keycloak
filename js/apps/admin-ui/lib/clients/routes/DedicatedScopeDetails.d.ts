import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type DedicatedScopeTab = "mappers" | "scope";
export type DedicatedScopeDetailsParams = {
    realm: string;
    clientId: string;
    tab?: DedicatedScopeTab;
};
export declare const DedicatedScopeDetailsRoute: AppRouteObject;
export declare const DedicatedScopeDetailsWithTabRoute: AppRouteObject;
export declare const toDedicatedScope: (params: DedicatedScopeDetailsParams) => Partial<Path>;
