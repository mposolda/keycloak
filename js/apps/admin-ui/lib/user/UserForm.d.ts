import { default as GroupRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/groupRepresentation';
import { default as RealmRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/realmRepresentation';
import { UserProfileMetadata } from '@keycloak/keycloak-admin-client/lib/defs/userProfileMetadata';
import { default as UserRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/userRepresentation';
import { UseFormReturn } from 'react-hook-form';
import { UserFormFields } from './form-state';

export type BruteForced = {
    isBruteForceProtected?: boolean;
    isLocked?: boolean;
};
export type UserFormProps = {
    form: UseFormReturn<UserFormFields>;
    realm: RealmRepresentation;
    user?: UserRepresentation;
    bruteForce?: BruteForced;
    userProfileMetadata?: UserProfileMetadata;
    save: (user: UserFormFields) => void;
    refresh?: () => void;
    onGroupsUpdate?: (groups: GroupRepresentation[]) => void;
};
export declare const UserForm: ({ form, realm, user, bruteForce: { isBruteForceProtected, isLocked }, userProfileMetadata, save, refresh, onGroupsUpdate, }: UserFormProps) => import("react/jsx-runtime").JSX.Element;
