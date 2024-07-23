import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type AddAttributeParams = {
    realm: string;
};
export declare const AddAttributeRoute: AppRouteObject;
export declare const toAddAttribute: (params: AddAttributeParams) => Partial<Path>;
