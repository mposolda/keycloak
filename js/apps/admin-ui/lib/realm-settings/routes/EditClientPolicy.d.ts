import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type EditClientPolicyParams = {
    realm: string;
    policyName: string;
};
export declare const EditClientPolicyRoute: AppRouteObject;
export declare const toEditClientPolicy: (params: EditClientPolicyParams) => Partial<Path>;
