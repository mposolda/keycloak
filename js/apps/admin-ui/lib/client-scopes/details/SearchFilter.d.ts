import { AllClientScopes, AllClientScopeType } from '../../components/client-scope/ClientScopeTypes';
import { Row } from '../../clients/scopes/ClientScopes';

export type SearchType = "name" | "type" | "protocol";
export declare const PROTOCOLS: readonly ["all", "saml", "openid-connect"];
export type ProtocolType = (typeof PROTOCOLS)[number];
export declare const nameFilter: (search?: string) => (scope: Row) => boolean | undefined;
export declare const typeFilter: (type: AllClientScopeType) => (scope: Row) => boolean;
export declare const protocolFilter: (protocol: ProtocolType) => (scope: Row) => boolean;
type SearchToolbarProps = Omit<SearchDropdownProps, "withProtocol"> & {
    type: AllClientScopeType;
    onType: (value: AllClientScopes) => void;
    protocol?: ProtocolType;
    onProtocol?: (value: ProtocolType) => void;
};
type SearchDropdownProps = {
    searchType: SearchType;
    onSelect: (value: SearchType) => void;
    withProtocol?: boolean;
};
export declare const SearchDropdown: ({ searchType, withProtocol, onSelect, }: SearchDropdownProps) => import("react/jsx-runtime").JSX.Element;
export declare const SearchToolbar: ({ searchType, onSelect, type, onType, protocol, onProtocol, }: SearchToolbarProps) => import("react/jsx-runtime").JSX.Element;
export {};
