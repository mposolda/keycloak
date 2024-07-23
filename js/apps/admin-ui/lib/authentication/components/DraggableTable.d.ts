import { IAction, TableProps, ThProps } from '@patternfly/react-table';
import { ReactNode } from 'react';

export type Field<T> = Pick<ThProps, "width"> & {
    name: string;
    displayKey?: string;
    cellRenderer?: (row: T) => ReactNode;
    thTooltipText?: string;
};
export type Action<T> = IAction & {
    isActionable?: (item: T) => boolean;
};
type DraggableTableProps<T> = Omit<TableProps, "data" | "ref"> & {
    keyField: string;
    columns: Field<T>[];
    data: T[];
    actions?: Action<T>[];
    onDragFinish: (dragged: string, newOrder: string[]) => void;
};
export declare function DraggableTable<T>({ keyField, columns, data, actions, onDragFinish, ...props }: DraggableTableProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
