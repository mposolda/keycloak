import { ComponentType, MouseEvent as ReactMouseEvent } from 'react';
import { EdgeProps, MarkerType } from 'reactflow';

export type ButtonEdges = {
    [key: string]: ComponentType<ButtonEdgeProps>;
};
export type ButtonEdgeProps = EdgeProps & {
    markerType?: MarkerType;
    markerEndId?: string;
    data: {
        onEdgeClick: (evt: ReactMouseEvent<HTMLButtonElement, MouseEvent>, id: string) => void;
    };
};
export declare const ButtonEdge: ({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, label, style, markerType, markerEndId, selected, data: { onEdgeClick }, }: ButtonEdgeProps) => import("react/jsx-runtime").JSX.Element;
