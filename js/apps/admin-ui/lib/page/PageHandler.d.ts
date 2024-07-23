import { default as ComponentTypeRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/componentTypeRepresentation';
import { PAGE_PROVIDER, TAB_PROVIDER } from './PageList';

type PageHandlerProps = {
    id?: string;
    providerType: typeof TAB_PROVIDER | typeof PAGE_PROVIDER;
    page: ComponentTypeRepresentation;
};
export declare const PageHandler: ({ id: idAttribute, providerType, page: { id: providerId, ...page }, }: PageHandlerProps) => import("react/jsx-runtime").JSX.Element;
export {};
