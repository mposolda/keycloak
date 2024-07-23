import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type UserTab = "settings" | "groups" | "consents" | "attributes" | "sessions" | "credentials" | "role-mapping" | "identity-provider-links";
export type UserParams = {
    realm: string;
    id: string;
    tab: UserTab;
};
export declare const UserRoute: AppRouteObject;
export declare const toUser: (params: UserParams) => Partial<Path>;
