import { TreeViewDataItem } from '@patternfly/react-core';

type CheckableTreeViewProps = {
    data: TreeViewDataItem[];
    onSelect: (items: TreeViewDataItem[]) => void;
};
export declare const CheckableTreeView: ({ data, onSelect, }: CheckableTreeViewProps) => import("react/jsx-runtime").JSX.Element;
export {};
