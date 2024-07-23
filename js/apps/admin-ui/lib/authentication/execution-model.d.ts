import { default as AuthenticationExecutionInfoRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/authenticationExecutionInfoRepresentation';

export type ExpandableExecution = AuthenticationExecutionInfoRepresentation & {
    executionList?: ExpandableExecution[];
    isCollapsed: boolean;
};
export declare class IndexChange {
    oldIndex: number;
    newIndex: number;
    constructor(oldIndex: number, newIndex: number);
}
export declare class LevelChange extends IndexChange {
    parent?: ExpandableExecution;
    constructor(oldIndex: number, newIndex: number, parent?: ExpandableExecution);
}
export declare class ExecutionList {
    #private;
    expandableList: ExpandableExecution[];
    constructor(list: AuthenticationExecutionInfoRepresentation[]);
    order(list?: ExpandableExecution[]): ExpandableExecution[];
    findExecution(index: number, currentIndex?: number | undefined, list?: ExpandableExecution[]): ExpandableExecution | undefined;
    getChange(changed: AuthenticationExecutionInfoRepresentation, order: string[]): IndexChange;
    clone(): ExecutionList;
}
