import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type ResourceDetailsParams = {
    realm: string;
    id: string;
    resourceId?: string;
};
export declare const ResourceDetailsRoute: AppRouteObject;
export declare const ResourceDetailsWithResourceIdRoute: AppRouteObject;
export declare const toResourceDetails: (params: ResourceDetailsParams) => Partial<Path>;
