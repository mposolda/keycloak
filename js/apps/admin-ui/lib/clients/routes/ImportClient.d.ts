import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type ImportClientParams = {
    realm: string;
};
export declare const ImportClientRoute: AppRouteObject;
export declare const toImportClient: (params: ImportClientParams) => Partial<Path>;
