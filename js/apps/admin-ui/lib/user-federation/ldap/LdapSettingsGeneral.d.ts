import { default as ComponentRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/componentRepresentation';
import { UseFormReturn } from 'react-hook-form';

export type LdapSettingsGeneralProps = {
    form: UseFormReturn<ComponentRepresentation>;
    showSectionHeading?: boolean;
    showSectionDescription?: boolean;
    vendorEdit?: boolean;
};
export declare const LdapSettingsGeneral: ({ form, showSectionHeading, showSectionDescription, vendorEdit, }: LdapSettingsGeneralProps) => import("react/jsx-runtime").JSX.Element;
