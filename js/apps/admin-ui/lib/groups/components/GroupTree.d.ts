import { default as GroupRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/groupRepresentation';

export declare function countGroups(groups: GroupRepresentation[]): number;
type GroupTreeProps = {
    refresh: () => void;
    canViewDetails: boolean;
};
export declare const GroupTree: ({ refresh: viewRefresh, canViewDetails, }: GroupTreeProps) => import("react/jsx-runtime").JSX.Element;
export {};
