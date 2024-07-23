import { default as AuthenticationFlowRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/authenticationFlowRepresentation';
import { AuthenticationProviderRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/authenticatorConfigRepresentation';
import { Flow } from './components/modals/AddSubFlowModal';

type EmptyExecutionStateProps = {
    flow: AuthenticationFlowRepresentation;
    onAddExecution: (type: AuthenticationProviderRepresentation) => void;
    onAddFlow: (flow: Flow) => void;
};
export declare const EmptyExecutionState: ({ flow, onAddExecution, onAddFlow, }: EmptyExecutionStateProps) => import("react/jsx-runtime").JSX.Element;
export {};
