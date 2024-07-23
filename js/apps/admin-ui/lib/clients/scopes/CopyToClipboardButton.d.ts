import { ClipboardCopyButtonProps } from '@patternfly/react-core';

type CopyToClipboardButtonProps = Pick<ClipboardCopyButtonProps, "variant"> & {
    id: string;
    label: string;
    text: string;
};
export declare const CopyToClipboardButton: ({ id, label, text, variant, }: CopyToClipboardButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
