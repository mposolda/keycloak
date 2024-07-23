import { EventType } from './EventsTypeTable';

type AddEventTypesDialogProps = {
    onConfirm: (selected: EventType[]) => void;
    onClose: () => void;
    configured: string[];
};
export declare const AddEventTypesDialog: ({ onConfirm, onClose, configured, }: AddEventTypesDialogProps) => import("react/jsx-runtime").JSX.Element;
export {};
