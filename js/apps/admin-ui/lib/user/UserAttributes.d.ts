import { default as UserRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/userRepresentation';
import { UserFormFields } from './form-state';
import { UserProfileConfig } from '@keycloak/keycloak-admin-client/lib/defs/userProfileMetadata';

type UserAttributesProps = {
    user: UserRepresentation;
    save: (user: UserFormFields) => void;
    upConfig?: UserProfileConfig;
};
export declare const UserAttributes: ({ user, save, upConfig, }: UserAttributesProps) => import("react/jsx-runtime").JSX.Element;
export {};
