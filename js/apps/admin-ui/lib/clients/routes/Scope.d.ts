import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type ScopeDetailsParams = {
    realm: string;
    id: string;
    scopeId?: string;
};
export declare const ScopeDetailsRoute: AppRouteObject;
export declare const ScopeDetailsWithScopeIdRoute: AppRouteObject;
export declare const toScopeDetails: (params: ScopeDetailsParams) => Partial<Path>;
