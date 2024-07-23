import { AuthenticationProviderRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/authenticatorConfigRepresentation';
import { ExpandableExecution } from '../execution-model';
import { Flow } from './modals/AddSubFlowModal';

type FlowRowProps = {
    builtIn: boolean;
    execution: ExpandableExecution;
    onRowClick: (execution: ExpandableExecution) => void;
    onRowChange: (execution: ExpandableExecution) => void;
    onAddExecution: (execution: ExpandableExecution, type: AuthenticationProviderRepresentation) => void;
    onAddFlow: (execution: ExpandableExecution, flow: Flow) => void;
    onDelete: (execution: ExpandableExecution) => void;
};
export declare const FlowRow: ({ builtIn, execution, onRowClick, onRowChange, onAddExecution, onAddFlow, onDelete, }: FlowRowProps) => import("react/jsx-runtime").JSX.Element;
export {};
