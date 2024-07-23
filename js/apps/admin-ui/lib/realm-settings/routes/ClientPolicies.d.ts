import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type ClientPoliciesTab = "profiles" | "policies";
export type ClientPoliciesParams = {
    realm: string;
    tab: ClientPoliciesTab;
};
export declare const ClientPoliciesRoute: AppRouteObject;
export declare const toClientPolicies: (params: ClientPoliciesParams) => Partial<Path>;
