type NodeProps = {
    data: {
        label: string;
    };
    selected: boolean;
};
type SubFlowNodeProps = NodeProps & {
    prefix: string;
};
export declare const SubFlowNode: import('react').MemoExoticComponent<({ data: { label }, prefix, selected, }: SubFlowNodeProps) => import("react/jsx-runtime").JSX.Element>;
export declare const StartSubFlowNode: ({ ...props }: NodeProps) => import("react/jsx-runtime").JSX.Element;
export declare const EndSubFlowNode: ({ ...props }: NodeProps) => import("react/jsx-runtime").JSX.Element;
export {};
