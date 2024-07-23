import { default as ClientRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/clientRepresentation';
import { default as EvaluationResultRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/evaluationResultRepresentation';
import { default as ResourceEvaluation } from '@keycloak/keycloak-admin-client/lib/defs/resourceEvaluation';
import { KeyValueType } from '../../components/key-value-form/key-value-convert';
import { FormFields } from '../ClientDetails';

interface EvaluateFormInputs extends Omit<ResourceEvaluation, "context" | "resources"> {
    alias: string;
    authScopes: string[];
    context: {
        attributes: Record<string, string>[];
    };
    resources?: Record<string, string>[];
    client: FormFields;
    user: string[];
}
export type AttributeType = {
    key: string;
    name: string;
    custom?: boolean;
    values?: {
        [key: string]: string;
    }[];
};
type ClientSettingsProps = {
    client: ClientRepresentation;
    save: () => void;
};
export type AttributeForm = Omit<EvaluateFormInputs, "context" | "resources"> & {
    context: {
        attributes?: KeyValueType[];
    };
    resources?: KeyValueType[];
};
type Props = ClientSettingsProps & EvaluationResultRepresentation;
export declare const AuthorizationEvaluate: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
