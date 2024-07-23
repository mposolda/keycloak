import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type NewResourceParams = {
    realm: string;
    id: string;
};
export declare const NewResourceRoute: AppRouteObject;
export declare const toCreateResource: (params: NewResourceParams) => Partial<Path>;
