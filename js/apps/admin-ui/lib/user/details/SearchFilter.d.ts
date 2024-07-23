export type SearchType = "default" | "attribute";
type SearchToolbarProps = SearchDropdownProps;
type SearchDropdownProps = {
    searchType: SearchType;
    onSelect: (value: SearchType) => void;
};
export declare const SearchDropdown: ({ searchType, onSelect, }: SearchDropdownProps) => import("react/jsx-runtime").JSX.Element;
export declare const SearchToolbar: ({ searchType, onSelect }: SearchToolbarProps) => import("react/jsx-runtime").JSX.Element;
export {};
