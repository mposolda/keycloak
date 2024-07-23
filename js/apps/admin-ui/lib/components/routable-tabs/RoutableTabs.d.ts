import { TabProps, TabsProps } from '@patternfly/react-core';
import { JSXElementConstructor, ReactElement } from 'react';
import { Path } from 'react-router-dom';

type ChildElement = ReactElement<TabProps, JSXElementConstructor<TabProps>>;
type Child = ChildElement | boolean | null | undefined;
type RoutableTabsProps = {
    children: Child | Child[];
    defaultLocation?: Partial<Path>;
} & Omit<TabsProps, "ref" | "activeKey" | "defaultActiveKey" | "component" | "children">;
export declare const RoutableTabs: ({ children, defaultLocation, ...otherProps }: RoutableTabsProps) => import("react/jsx-runtime").JSX.Element;
export declare const useRoutableTab: (to: Partial<Path>) => {
    eventKey: string;
    href: string;
};
export {};
