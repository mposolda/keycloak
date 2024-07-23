import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type CreateFlowParams = {
    realm: string;
};
export declare const CreateFlowRoute: AppRouteObject;
export declare const toCreateFlow: (params: CreateFlowParams) => Partial<Path>;
