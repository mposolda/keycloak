import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type EditClientPolicyConditionParams = {
    realm: string;
    policyName: string;
    conditionName: string;
};
export declare const EditClientPolicyConditionRoute: AppRouteObject;
export declare const toEditClientPolicyCondition: (params: EditClientPolicyConditionParams) => Partial<Path>;
