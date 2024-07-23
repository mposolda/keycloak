import { CardProps } from '@patternfly/react-core';

type ClickableCardProps = Omit<CardProps, "onClick"> & {
    onClick: () => void;
};
export declare const ClickableCard: ({ onClick, children, ...rest }: ClickableCardProps) => import("react/jsx-runtime").JSX.Element;
export {};
