import { default as UserSessionRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/userSessionRepresentation';
import { ReactNode } from 'react';
import { LoaderFunction } from '../components/table-toolbar/KeycloakDataTable';

export type ColumnName = "username" | "start" | "lastAccess" | "clients" | "type";
export type SessionsTableProps = {
    loader: LoaderFunction<UserSessionRepresentation>;
    hiddenColumns?: ColumnName[];
    emptyInstructions?: string;
    logoutUser?: string;
    filter?: ReactNode;
    isSearching?: boolean;
    isPaginated?: boolean;
};
export default function SessionsTable({ loader, hiddenColumns, emptyInstructions, logoutUser, filter, isSearching, isPaginated, }: SessionsTableProps): import("react/jsx-runtime").JSX.Element;
