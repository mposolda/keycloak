import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type ClientRegistrationTab = "anonymous" | "authenticated";
export type ClientRegistrationParams = {
    realm: string;
    subTab: ClientRegistrationTab;
};
export declare const ClientRegistrationRoute: AppRouteObject;
export declare const toClientRegistration: (params: ClientRegistrationParams) => Partial<Path>;
