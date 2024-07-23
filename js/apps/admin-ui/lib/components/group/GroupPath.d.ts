import { TableTextProps } from '@patternfly/react-table';
import { default as GroupRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/groupRepresentation';

type GroupPathProps = TableTextProps & {
    group: GroupRepresentation;
};
export declare const GroupPath: ({ group: { path }, onMouseEnter: onMouseEnterProp, ...props }: GroupPathProps) => import("react/jsx-runtime").JSX.Element;
export {};
