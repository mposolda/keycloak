import { ReactNode } from 'react';

type DiscoveryEndpointFieldProps = {
    id: string;
    fileUpload: ReactNode;
    children: (readOnly: boolean) => ReactNode;
};
export declare const DiscoveryEndpointField: ({ id, fileUpload, children, }: DiscoveryEndpointFieldProps) => import("react/jsx-runtime").JSX.Element;
export {};
