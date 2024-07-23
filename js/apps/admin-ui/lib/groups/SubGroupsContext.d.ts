import { default as GroupRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/groupRepresentation';
import { PropsWithChildren } from 'react';

type SubGroupsProps = {
    subGroups: GroupRepresentation[];
    setSubGroups: (group: GroupRepresentation[]) => void;
    clear: () => void;
    remove: (group: GroupRepresentation) => void;
    currentGroup: () => GroupRepresentation | undefined;
};
export declare const SubGroups: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export declare const useSubGroups: () => SubGroupsProps;
export {};
