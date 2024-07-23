import { default as PasswordPolicyTypeRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/passwordPolicyTypeRepresentation';

export type SubmittedValues = {
    [index: string]: string;
};
export declare const serializePolicy: (policies: PasswordPolicyTypeRepresentation[], submitted: SubmittedValues) => string;
type PolicyValue = PasswordPolicyTypeRepresentation & {
    value?: string;
};
export declare const parsePolicy: (value: string, policies: PasswordPolicyTypeRepresentation[]) => PolicyValue[];
export {};
