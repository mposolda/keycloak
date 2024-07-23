import { Row } from '../clients/scopes/ClientScopes';

type ChangeTypeDropdownProps = {
    clientId?: string;
    selectedRows: Row[];
    refresh: () => void;
};
export declare const ChangeTypeDropdown: ({ clientId, selectedRows, refresh, }: ChangeTypeDropdownProps) => import("react/jsx-runtime").JSX.Element;
export {};
