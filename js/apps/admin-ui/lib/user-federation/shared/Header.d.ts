import { ReactElement } from 'react';

type HeaderProps = {
    provider: string;
    save: () => void;
    dropdownItems?: ReactElement[];
    noDivider?: boolean;
};
export declare const Header: ({ provider, save, noDivider, dropdownItems, }: HeaderProps) => import("react/jsx-runtime").JSX.Element;
export {};
