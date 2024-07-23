import { default as PolicyEvaluationResponse } from '@keycloak/keycloak-admin-client/lib/defs/policyEvaluationResponse';

type ResultProps = {
    evaluateResult: PolicyEvaluationResponse;
    refresh: () => void;
    back: () => void;
};
export declare const Results: ({ evaluateResult, refresh, back }: ResultProps) => import("react/jsx-runtime").JSX.Element;
export {};
