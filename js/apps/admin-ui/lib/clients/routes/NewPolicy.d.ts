import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type NewPolicyParams = {
    realm: string;
    id: string;
    policyType: string;
};
export declare const NewPolicyRoute: AppRouteObject;
export declare const toCreatePolicy: (params: NewPolicyParams) => Partial<Path>;
