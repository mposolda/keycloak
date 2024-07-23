import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type ProviderType = "aes-generated" | "ecdsa-generated" | "hmac-generated" | "java-keystore" | "rsa" | "rsa-enc" | "rsa-enc-generated" | "rsa-generated";
export type KeyProviderParams = {
    id: string;
    providerType: ProviderType;
    realm: string;
};
export declare const KeyProviderFormRoute: AppRouteObject;
export declare const toKeyProvider: (params: KeyProviderParams) => Partial<Path>;
