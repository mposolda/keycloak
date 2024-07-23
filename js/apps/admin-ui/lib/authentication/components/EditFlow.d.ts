import { ExpandableExecution } from '../execution-model';

type EditFlowProps = {
    execution: ExpandableExecution;
    onRowChange: (execution: ExpandableExecution) => void;
};
export declare const EditFlow: ({ execution, onRowChange }: EditFlowProps) => import("react/jsx-runtime").JSX.Element;
export {};
