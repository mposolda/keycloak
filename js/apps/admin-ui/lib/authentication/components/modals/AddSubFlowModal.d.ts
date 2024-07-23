type AddSubFlowProps = {
    name: string;
    onConfirm: (flow: Flow) => void;
    onCancel: () => void;
};
declare const types: readonly ["basic-flow", "form-flow"];
export type Flow = {
    name: string;
    description: string;
    type: (typeof types)[number];
    provider: string;
};
export declare const AddSubFlowModal: ({ name, onConfirm, onCancel, }: AddSubFlowProps) => import("react/jsx-runtime").JSX.Element;
export {};
