import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type NewClientScopeParams = {
    realm: string;
};
export declare const NewClientScopeRoute: AppRouteObject;
export declare const toNewClientScope: (params: NewClientScopeParams) => Partial<Path>;
