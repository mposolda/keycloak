import { Path } from 'react-router-dom';
import { AppRouteObject } from '../routes';

export type PageListParams = {
    realm?: string;
    providerId: string;
};
export type PageParams = {
    realm: string;
    providerId: string;
    id?: string;
};
declare const routes: AppRouteObject[];
export declare const toPage: (params: PageListParams) => Partial<Path>;
export declare const toDetailPage: (params: PageParams) => Partial<Path>;
export default routes;
