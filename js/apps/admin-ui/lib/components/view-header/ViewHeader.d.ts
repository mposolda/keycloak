import { ReactElement, ReactNode } from 'react';

export type ViewHeaderProps = {
    titleKey: string;
    className?: string;
    badges?: ViewHeaderBadge[];
    isDropdownDisabled?: boolean;
    subKey?: string | ReactNode;
    actionsDropdownId?: string;
    helpUrl?: string | undefined;
    dropdownItems?: ReactElement[];
    lowerDropdownItems?: any;
    lowerDropdownMenuTitle?: any;
    lowerButton?: any;
    isEnabled?: boolean;
    onToggle?: (value: boolean) => void;
    divider?: boolean;
    helpTextKey?: string;
    isReadOnly?: boolean;
};
export type ViewHeaderBadge = {
    id?: string;
    text?: string | ReactNode;
    readonly?: boolean;
};
export declare const ViewHeader: ({ actionsDropdownId, className, titleKey, badges, isDropdownDisabled, subKey, helpUrl, dropdownItems, lowerDropdownMenuTitle, lowerDropdownItems, lowerButton, isEnabled, onToggle, divider, helpTextKey, isReadOnly, }: ViewHeaderProps) => import("react/jsx-runtime").JSX.Element;
