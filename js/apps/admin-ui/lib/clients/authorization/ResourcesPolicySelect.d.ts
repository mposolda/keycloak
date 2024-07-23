import { Variant } from '@keycloak/keycloak-ui-shared';

type Type = "resources" | "policies";
type ResourcesPolicySelectProps = {
    name: Type;
    clientId: string;
    permissionId?: string;
    variant?: Variant;
    preSelected?: string;
    isRequired?: boolean;
};
export declare const ResourcesPolicySelect: ({ name, clientId, permissionId, variant, preSelected, isRequired, }: ResourcesPolicySelectProps) => import("react/jsx-runtime").JSX.Element;
export {};
