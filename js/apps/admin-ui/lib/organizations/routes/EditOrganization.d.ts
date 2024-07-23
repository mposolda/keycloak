import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type OrganizationTab = "settings" | "attributes" | "members" | "identityProviders";
export type EditOrganizationParams = {
    realm: string;
    id: string;
    tab: OrganizationTab;
};
export declare const EditOrganizationRoute: AppRouteObject;
export declare const toEditOrganization: (params: EditOrganizationParams) => Partial<Path>;
