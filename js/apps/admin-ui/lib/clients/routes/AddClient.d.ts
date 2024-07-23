import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type AddClientParams = {
    realm: string;
};
export declare const AddClientRoute: AppRouteObject;
export declare const toAddClient: (params: AddClientParams) => Partial<Path>;
