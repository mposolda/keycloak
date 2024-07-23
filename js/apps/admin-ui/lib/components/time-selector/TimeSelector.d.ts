import { KeycloakSelectProps } from '@keycloak/keycloak-ui-shared';
import { TextInputProps } from '@patternfly/react-core';

export type Unit = "second" | "minute" | "hour" | "day";
export type TimeSelectorProps = Omit<TextInputProps, "onChange" | "defaultValue"> & Pick<KeycloakSelectProps, "menuAppendTo"> & {
    value?: number;
    units?: Unit[];
    onChange?: (time: number | string) => void;
    className?: string;
};
export declare const toHumanFormat: (value: number, locale: string) => string;
export declare const TimeSelector: ({ value, units, onChange, className, min, menuAppendTo, ...rest }: TimeSelectorProps) => import("react/jsx-runtime").JSX.Element;
