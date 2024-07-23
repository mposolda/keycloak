import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';
import { ClientRegistrationTab } from './ClientRegistration';

export type RegistrationProviderParams = {
    realm: string;
    subTab: ClientRegistrationTab;
    id?: string;
    providerId: string;
};
export declare const AddRegistrationProviderRoute: AppRouteObject;
export declare const EditRegistrationProviderRoute: AppRouteObject;
export declare const toRegistrationProvider: (params: RegistrationProviderParams) => Partial<Path>;
