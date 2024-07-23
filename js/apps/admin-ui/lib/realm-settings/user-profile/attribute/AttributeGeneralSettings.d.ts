
type TranslationForm = {
    locale: string;
    value: string;
};
type Translations = {
    key: string;
    translations: TranslationForm[];
};
export type AttributeGeneralSettingsProps = {
    onHandlingTranslationData: (data: Translations) => void;
    onHandlingGeneratedDisplayName: (displayName: string) => void;
};
export declare const AttributeGeneralSettings: ({ onHandlingTranslationData, onHandlingGeneratedDisplayName, }: AttributeGeneralSettingsProps) => import("react/jsx-runtime").JSX.Element;
export {};
