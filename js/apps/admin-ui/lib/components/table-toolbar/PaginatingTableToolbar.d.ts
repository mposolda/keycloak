import { PropsWithChildren, ReactNode } from 'react';

type KeycloakPaginationProps = {
    id?: string;
    count: number;
    first: number;
    max: number;
    onNextClick: (page: number) => void;
    onPreviousClick: (page: number) => void;
    onPerPageSelect: (max: number, first: number) => void;
    variant?: "top" | "bottom";
};
type TableToolbarProps = KeycloakPaginationProps & {
    searchTypeComponent?: ReactNode;
    toolbarItem?: ReactNode;
    subToolbar?: ReactNode;
    inputGroupName?: string;
    inputGroupPlaceholder?: string;
    inputGroupOnEnter?: (value: string) => void;
};
export declare const PaginatingTableToolbar: ({ count, searchTypeComponent, toolbarItem, subToolbar, children, inputGroupName, inputGroupPlaceholder, inputGroupOnEnter, ...rest }: PropsWithChildren<TableToolbarProps>) => import("react/jsx-runtime").JSX.Element;
export {};
