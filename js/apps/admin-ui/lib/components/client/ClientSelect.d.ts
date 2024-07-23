import { SelectVariant } from '@keycloak/keycloak-ui-shared';
import { ComponentProps } from '../dynamic/components';

type ClientSelectProps = ComponentProps & {
    variant?: `${SelectVariant}`;
};
export declare const ClientSelect: ({ name, label, helpText, defaultValue, isDisabled, required, variant, }: ClientSelectProps) => import("react/jsx-runtime").JSX.Element;
export {};
