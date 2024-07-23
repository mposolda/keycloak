export type EventType = {
    id: string;
};
type EventsTypeTableProps = {
    ariaLabelKey?: string;
    eventTypes: string[];
    addTypes?: () => void;
    onSelect?: (value: EventType[]) => void;
    onDelete?: (value: EventType) => void;
};
export declare function EventsTypeTable({ ariaLabelKey, eventTypes, addTypes, onSelect, onDelete, }: EventsTypeTableProps): import("react/jsx-runtime").JSX.Element;
export {};
