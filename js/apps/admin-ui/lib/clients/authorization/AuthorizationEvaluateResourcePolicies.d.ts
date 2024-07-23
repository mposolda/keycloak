import { default as EvaluationResultRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/evaluationResultRepresentation';
import { default as PolicyResultRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/policyResultRepresentation';

type Props = {
    idx: number;
    rowIndex: number;
    outerPolicy: PolicyResultRepresentation;
    resource: EvaluationResultRepresentation;
};
export declare const AuthorizationEvaluateResourcePolicies: ({ idx, rowIndex, outerPolicy, resource, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
