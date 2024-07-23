import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type UserProfileTab = "attributes" | "attributes-group" | "unmanaged-attributes" | "json-editor";
export type UserProfileParams = {
    realm: string;
    tab: UserProfileTab;
};
export declare const UserProfileRoute: AppRouteObject;
export declare const toUserProfile: (params: UserProfileParams) => Partial<Path>;
