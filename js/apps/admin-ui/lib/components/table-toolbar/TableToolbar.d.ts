import { PropsWithChildren, ReactNode } from 'react';

type TableToolbarProps = {
    toolbarItem?: ReactNode;
    subToolbar?: ReactNode;
    toolbarItemFooter?: ReactNode;
    searchTypeComponent?: ReactNode;
    inputGroupName?: string;
    inputGroupPlaceholder?: string;
    inputGroupOnEnter?: (value: string) => void;
};
export declare const TableToolbar: ({ toolbarItem, subToolbar, toolbarItemFooter, children, searchTypeComponent, inputGroupName, inputGroupPlaceholder, inputGroupOnEnter, }: PropsWithChildren<TableToolbarProps>) => import("react/jsx-runtime").JSX.Element;
export {};
