import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type RealmSettingsTab = "general" | "login" | "email" | "themes" | "keys" | "events" | "localization" | "security-defenses" | "sessions" | "tokens" | "client-policies" | "user-profile" | "user-registration";
export type RealmSettingsParams = {
    realm: string;
    tab?: RealmSettingsTab;
};
export declare const RealmSettingsRoute: AppRouteObject;
export declare const RealmSettingsRouteWithTab: AppRouteObject;
export declare const toRealmSettings: (params: RealmSettingsParams) => Partial<Path>;
