import { UseFormReturn } from 'react-hook-form';

export type LdapSettingsAdvancedProps = {
    id?: string;
    form: UseFormReturn;
    showSectionHeading?: boolean;
    showSectionDescription?: boolean;
};
export declare const LdapSettingsAdvanced: ({ id, form, showSectionHeading, showSectionDescription, }: LdapSettingsAdvancedProps) => import("react/jsx-runtime").JSX.Element;
