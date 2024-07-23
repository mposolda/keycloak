import { UserProfileConfig } from '@keycloak/keycloak-admin-client/lib/defs/userProfileMetadata';
import { PropsWithChildren } from 'react';

type UserProfileProps = {
    config: UserProfileConfig | null;
    save: SaveCallback;
    isSaving: boolean;
};
export type SaveCallback = (updatedConfig: UserProfileConfig, options?: SaveOptions) => Promise<boolean>;
export type SaveOptions = {
    successMessageKey?: string;
    errorMessageKey?: string;
};
export declare const UserProfileContext: import('js/libs/ui-shared/dist/utils/createNamedContext').NamedContext<UserProfileProps | undefined>;
export declare const UserProfileProvider: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export declare const useUserProfile: () => UserProfileProps;
export {};
