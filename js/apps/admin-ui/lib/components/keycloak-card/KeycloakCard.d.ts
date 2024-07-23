import { ReactElement } from 'react';
import { To } from 'react-router-dom';

export type KeycloakCardProps = {
    title: string;
    dropdownItems?: ReactElement[];
    labelText?: string;
    labelColor?: any;
    footerText?: string;
    to: To;
};
export declare const KeycloakCard: ({ title, dropdownItems, labelText, labelColor, footerText, to, }: KeycloakCardProps) => import("react/jsx-runtime").JSX.Element;
