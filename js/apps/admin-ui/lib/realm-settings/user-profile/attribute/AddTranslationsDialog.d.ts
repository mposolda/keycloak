export type TranslationsType = "displayName" | "displayHeader" | "displayDescription";
type TranslationForm = {
    locale: string;
    value: string;
};
type Translations = {
    key: string;
    translations: TranslationForm[];
};
export type AddTranslationsDialogProps = {
    translationKey: string;
    translations: Translations;
    type: TranslationsType;
    onCancel: () => void;
    toggleDialog: () => void;
    onTranslationsAdded: (translations: Translations) => void;
};
export declare const AddTranslationsDialog: ({ translationKey, translations, type, onCancel, toggleDialog, onTranslationsAdded, }: AddTranslationsDialogProps) => import("react/jsx-runtime").JSX.Element;
export {};
