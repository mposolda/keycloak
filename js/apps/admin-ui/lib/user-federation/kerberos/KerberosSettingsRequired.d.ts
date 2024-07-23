import { UseFormReturn } from 'react-hook-form';

export type KerberosSettingsRequiredProps = {
    form: UseFormReturn;
    showSectionHeading?: boolean;
    showSectionDescription?: boolean;
};
export declare const KerberosSettingsRequired: ({ form, showSectionHeading, showSectionDescription, }: KerberosSettingsRequiredProps) => import("react/jsx-runtime").JSX.Element;
