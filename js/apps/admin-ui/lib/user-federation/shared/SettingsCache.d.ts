import { UseFormReturn } from 'react-hook-form';

export type SettingsCacheProps = {
    form: UseFormReturn;
    showSectionHeading?: boolean;
    showSectionDescription?: boolean;
    unWrap?: boolean;
};
export declare const SettingsCache: ({ form, showSectionHeading, showSectionDescription, unWrap, }: SettingsCacheProps) => import("react/jsx-runtime").JSX.Element;
