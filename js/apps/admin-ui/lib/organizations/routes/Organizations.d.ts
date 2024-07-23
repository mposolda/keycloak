import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

type OrganizationsRouteParams = {
    realm: string;
};
export declare const OrganizationsRoute: AppRouteObject;
export declare const toOrganizations: (params: OrganizationsRouteParams) => Partial<Path>;
export {};
