import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type GroupsParams = {
    realm: string;
    id?: string;
    lazy?: string;
};
export declare const GroupsRoute: AppRouteObject;
export declare const GroupsWithIdRoute: AppRouteObject;
export declare const toGroups: (params: GroupsParams) => Partial<Path>;
