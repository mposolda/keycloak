import { default as PolicyProviderRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/policyProviderRepresentation';

export type SearchForm = {
    name?: string;
    resource?: string;
    scope?: string;
    type?: string;
    uri?: string;
    owner?: string;
};
type SearchDropdownProps = {
    types?: PolicyProviderRepresentation[] | PolicyProviderRepresentation[];
    search: SearchForm;
    onSearch: (form: SearchForm) => void;
    type: "resource" | "policy" | "permission";
};
export declare const SearchDropdown: ({ types, search, onSearch, type, }: SearchDropdownProps) => import("react/jsx-runtime").JSX.Element;
export {};
