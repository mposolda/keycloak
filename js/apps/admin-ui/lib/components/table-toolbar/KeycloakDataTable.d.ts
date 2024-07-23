import { SVGIconProps } from '@patternfly/react-icons/dist/js/createIcon';
import { IAction, IActionsResolver, IFormatter, ITransform, TableProps } from '@patternfly/react-table';
import { ComponentClass, ReactNode } from 'react';

export type Field<T> = {
    name: string;
    displayKey?: string;
    cellFormatters?: IFormatter[];
    transforms?: ITransform[];
    cellRenderer?: (row: T) => JSX.Element | string;
};
export type DetailField<T> = {
    name: string;
    enabled?: (row: T) => boolean;
    cellRenderer?: (row: T) => JSX.Element | string;
};
export type Action<T> = IAction & {
    onRowClick?: (row: T) => Promise<boolean | void> | void;
};
export type LoaderFunction<T> = (first?: number, max?: number, search?: string) => Promise<T[]>;
export type DataListProps<T> = Omit<TableProps, "rows" | "cells" | "onSelect"> & {
    loader: T[] | LoaderFunction<T>;
    onSelect?: (value: T[]) => void;
    canSelectAll?: boolean;
    detailColumns?: DetailField<T>[];
    isRowDisabled?: (value: T) => boolean;
    isPaginated?: boolean;
    ariaLabelKey: string;
    searchPlaceholderKey?: string;
    columns: Field<T>[];
    actions?: Action<T>[];
    actionResolver?: IActionsResolver;
    searchTypeComponent?: ReactNode;
    toolbarItem?: ReactNode;
    subToolbar?: ReactNode;
    emptyState?: ReactNode;
    icon?: ComponentClass<SVGIconProps>;
    isNotCompact?: boolean;
    isRadio?: boolean;
    isSearching?: boolean;
};
/**
 * A generic component that can be used to show the initial list most sections have. Takes care of the loading of the date and filtering.
 * All you have to define is how the columns are displayed.
 * @example
 *   <KeycloakDataTable columns={[
 *     {
 *        name: "clientId", //name of the field from the array of object the loader returns to display in this column
 *        displayKey: "clientId", //i18n key to use to lookup the name of the column header
 *        cellRenderer: ClientDetailLink, //optionally you can use a component to render the column when you don't want just the content of the field, the whole row / entire object is passed in.
 *     }
 *   ]}
 * @param {DataListProps} props - The properties.
 * @param {string} props.ariaLabelKey - The aria label key i18n key to lookup the label
 * @param {string} props.searchPlaceholderKey - The i18n key to lookup the placeholder for the search box
 * @param {boolean} props.isPaginated - if true the the loader will be called with first, max and search and a pager will be added in the header
 * @param {(first?: number, max?: number, search?: string) => Promise<T[]>} props.loader - loader function that will fetch the data to display first, max and search are only applicable when isPaginated = true
 * @param {Field<T>} props.columns - definition of the columns
 * @param {Field<T>} props.detailColumns - definition of the columns expandable columns
 * @param {Action[]} props.actions - the actions that appear on the row
 * @param {IActionsResolver} props.actionResolver Resolver for the given action
 * @param {ReactNode} props.toolbarItem - Toolbar items that appear on the top of the table {@link toolbarItem}
 * @param {ReactNode} props.emptyState - ReactNode show when the list is empty could be any component but best to use {@link ListEmptyState}
 */
export declare function KeycloakDataTable<T>({ ariaLabelKey, searchPlaceholderKey, isPaginated, onSelect, canSelectAll, isNotCompact, isRadio, detailColumns, isRowDisabled, loader, columns, actions, actionResolver, searchTypeComponent, toolbarItem, subToolbar, emptyState, icon, isSearching, ...props }: DataListProps<T>): import("react/jsx-runtime").JSX.Element;
