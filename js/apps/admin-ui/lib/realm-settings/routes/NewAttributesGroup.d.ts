import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type NewAttributesGroupParams = {
    realm: string;
};
export declare const NewAttributesGroupRoute: AppRouteObject;
export declare const toNewAttributesGroup: (params: NewAttributesGroupParams) => Partial<Path>;
