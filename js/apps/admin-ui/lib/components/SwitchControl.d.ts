import { FieldPath, FieldValues } from 'react-hook-form';
import { SwitchControlProps } from '@keycloak/keycloak-ui-shared';

export type DefaultSwitchControlProps<T extends FieldValues, P extends FieldPath<T> = FieldPath<T>> = Omit<SwitchControlProps<T, P>, "labelOn" | "labelOff">;
export declare const DefaultSwitchControl: <T extends FieldValues, P extends FieldPath<T> = FieldPath<T>>(props: DefaultSwitchControlProps<T, P>) => import("react/jsx-runtime").JSX.Element;
