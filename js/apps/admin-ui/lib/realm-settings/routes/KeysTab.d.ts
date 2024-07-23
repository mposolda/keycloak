import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type KeySubTab = "list" | "providers";
export type KeysParams = {
    realm: string;
    tab: KeySubTab;
};
export declare const KeysRoute: AppRouteObject;
export declare const toKeysTab: (params: KeysParams) => Partial<Path>;
