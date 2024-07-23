import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type AddExecutorParams = {
    realm: string;
    profileName: string;
};
export declare const AddExecutorRoute: AppRouteObject;
export declare const toAddExecutor: (params: AddExecutorParams) => Partial<Path>;
