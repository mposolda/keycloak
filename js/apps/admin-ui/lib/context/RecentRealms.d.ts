import { PropsWithChildren } from 'react';

export declare const RecentRealmsContext: import('js/libs/ui-shared/dist/utils/createNamedContext').NamedContext<string[] | undefined>;
export declare const RecentRealmsProvider: ({ children }: PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export declare const useRecentRealms: () => string[];
