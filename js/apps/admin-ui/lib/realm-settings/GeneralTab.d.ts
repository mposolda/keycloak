import { UIRealmRepresentation } from './RealmSettingsTabs';

type RealmSettingsGeneralTabProps = {
    realm: UIRealmRepresentation;
    save: (realm: UIRealmRepresentation) => Promise<void>;
};
export declare const RealmSettingsGeneralTab: ({ realm, save, }: RealmSettingsGeneralTabProps) => import("react/jsx-runtime").JSX.Element;
export {};
