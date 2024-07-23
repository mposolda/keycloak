import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type PolicyDetailsParams = {
    realm: string;
    id: string;
    policyId: string;
    policyType: string;
};
export declare const PolicyDetailsRoute: AppRouteObject;
export declare const toPolicyDetails: (params: PolicyDetailsParams) => Partial<Path>;
