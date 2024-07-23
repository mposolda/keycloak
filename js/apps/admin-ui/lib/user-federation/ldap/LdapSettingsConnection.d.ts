import { default as TestLdapConnectionRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/testLdapConnection';
import { UseFormReturn } from 'react-hook-form';

export type LdapSettingsConnectionProps = {
    form: UseFormReturn;
    id?: string;
    showSectionHeading?: boolean;
    showSectionDescription?: boolean;
};
export declare const convertFormToSettings: (form: UseFormReturn) => TestLdapConnectionRepresentation;
export declare const LdapSettingsConnection: ({ form, id, showSectionHeading, showSectionDescription, }: LdapSettingsConnectionProps) => import("react/jsx-runtime").JSX.Element;
