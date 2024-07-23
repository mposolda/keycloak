import { UseFormReturn } from 'react-hook-form';

export type EventsType = "admin" | "user";
type EventConfigFormProps = {
    type: EventsType;
    form: UseFormReturn;
    reset: () => void;
    clear: () => void;
};
export declare const EventConfigForm: ({ type, form, reset, clear, }: EventConfigFormProps) => import("react/jsx-runtime").JSX.Element;
export {};
