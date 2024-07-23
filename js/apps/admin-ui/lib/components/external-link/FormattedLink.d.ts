import { AnchorHTMLAttributes } from 'react';

export type FormattedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    isInline?: boolean;
};
export declare const FormattedLink: ({ title, href, isInline, ...rest }: FormattedLinkProps) => import("react/jsx-runtime").JSX.Element;
