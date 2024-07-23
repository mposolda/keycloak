import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type AttributeParams = {
    realm: string;
    attributeName: string;
};
export declare const AttributeRoute: AppRouteObject;
export declare const toAttribute: (params: AttributeParams) => Partial<Path>;
