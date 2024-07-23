import { default as EvaluationResultRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/evaluationResultRepresentation';

type Props = {
    rowIndex: number;
    resource: EvaluationResultRepresentation;
    evaluateResults: any;
};
export declare const AuthorizationEvaluateResource: ({ rowIndex, resource, evaluateResults, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
