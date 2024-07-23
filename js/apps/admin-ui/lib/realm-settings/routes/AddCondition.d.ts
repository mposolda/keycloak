import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type NewClientPolicyConditionParams = {
    realm: string;
    policyName: string;
};
export declare const NewClientPolicyConditionRoute: AppRouteObject;
export declare const toNewClientPolicyCondition: (params: NewClientPolicyConditionParams) => Partial<Path>;
