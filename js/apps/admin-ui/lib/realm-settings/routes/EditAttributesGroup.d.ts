import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type EditAttributesGroupParams = {
    realm: string;
    name: string;
};
export declare const EditAttributesGroupRoute: AppRouteObject;
export declare const toEditAttributesGroup: (params: EditAttributesGroupParams) => Partial<Path>;
