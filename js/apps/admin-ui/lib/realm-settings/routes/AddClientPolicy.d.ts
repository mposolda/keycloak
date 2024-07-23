import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type AddClientPolicyParams = {
    realm: string;
};
export declare const AddClientPolicyRoute: AppRouteObject;
export declare const toAddClientPolicy: (params: AddClientPolicyParams) => Partial<Path>;
