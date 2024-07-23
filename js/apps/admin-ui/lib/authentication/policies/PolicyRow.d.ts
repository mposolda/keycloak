import { default as PasswordPolicyTypeRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/passwordPolicyTypeRepresentation';

type PolicyRowProps = {
    policy: PasswordPolicyTypeRepresentation;
    onRemove: (id?: string) => void;
};
export declare const PolicyRow: ({ policy: { id, configType, defaultValue, displayName }, onRemove, }: PolicyRowProps) => import("react/jsx-runtime").JSX.Element;
export {};
