import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type AddOrganizationParams = {
    realm: string;
};
export declare const AddOrganizationRoute: AppRouteObject;
export declare const toAddOrganization: (params: AddOrganizationParams) => Partial<Path>;
