import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type MapperParams = {
    realm: string;
    id: string;
    mapperId: string;
};
export declare const MapperRoute: AppRouteObject;
export declare const toMapper: (params: MapperParams) => Partial<Path>;
