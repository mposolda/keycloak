import { ControllerProps, FieldPath, FieldValues, UseControllerProps } from 'react-hook-form';
import { TimeSelectorProps } from './TimeSelector';

export type NumberControlOption = {
    key: string;
    value: string;
};
export type TimeSelectorControlProps<T extends FieldValues, P extends FieldPath<T> = FieldPath<T>> = Omit<TimeSelectorProps, "name"> & UseControllerProps<T, P> & {
    name: string;
    label?: string;
    labelIcon?: string;
    controller: Omit<ControllerProps, "name" | "render">;
};
export declare const TimeSelectorControl: <T extends FieldValues, P extends FieldPath<T> = FieldPath<T>>({ name, label, controller, labelIcon, ...rest }: TimeSelectorControlProps<T, P>) => import("react/jsx-runtime").JSX.Element;
