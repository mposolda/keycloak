import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type FlowParams = {
    realm: string;
    id: string;
    usedBy: string;
    builtIn?: string;
};
export declare const FlowRoute: AppRouteObject;
export declare const FlowWithBuiltInRoute: AppRouteObject;
export declare const toFlow: (params: FlowParams) => Partial<Path>;
