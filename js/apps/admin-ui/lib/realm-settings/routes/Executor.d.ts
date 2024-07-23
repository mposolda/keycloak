import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type ExecutorParams = {
    realm: string;
    profileName: string;
    executorName: string;
};
export declare const ExecutorRoute: AppRouteObject;
export declare const toExecutor: (params: ExecutorParams) => Partial<Path>;
