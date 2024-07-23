import { default as AdminEventRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/adminEventRepresentation';

type ResourceLinkProps = {
    event: AdminEventRepresentation;
};
export declare const ResourceLink: ({ event }: ResourceLinkProps) => import("react/jsx-runtime").JSX.Element;
export declare const CellResourceLinkRenderer: (adminEvent: AdminEventRepresentation) => import("react/jsx-runtime").JSX.Element;
export {};
