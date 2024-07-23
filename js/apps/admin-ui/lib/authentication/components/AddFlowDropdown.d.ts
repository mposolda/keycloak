import { AuthenticationProviderRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/authenticatorConfigRepresentation';
import { ExpandableExecution } from '../execution-model';
import { Flow } from './modals/AddSubFlowModal';

type AddFlowDropdownProps = {
    execution: ExpandableExecution;
    onAddExecution: (execution: ExpandableExecution, type: AuthenticationProviderRepresentation) => void;
    onAddFlow: (execution: ExpandableExecution, flow: Flow) => void;
};
export declare const AddFlowDropdown: ({ execution, onAddExecution, onAddFlow, }: AddFlowDropdownProps) => import("react/jsx-runtime").JSX.Element;
export {};
