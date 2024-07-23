import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type NewScopeParams = {
    realm: string;
    id: string;
};
export declare const NewScopeRoute: AppRouteObject;
export declare const toNewScope: (params: NewScopeParams) => Partial<Path>;
