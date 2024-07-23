
type DropdownPanelProps = {
    buttonText: string;
    children: React.ReactNode;
    setSearchDropdownOpen: (open: boolean) => void;
    searchDropdownOpen: boolean;
    marginRight?: string;
    width: string;
};
declare const DropdownPanel: React.FC<DropdownPanelProps>;
export default DropdownPanel;
