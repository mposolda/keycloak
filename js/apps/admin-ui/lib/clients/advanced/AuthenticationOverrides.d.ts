type AuthenticationOverridesProps = {
    save: () => void;
    reset: () => void;
    protocol?: string;
    hasConfigureAccess?: boolean;
};
export declare const AuthenticationOverrides: ({ protocol, save, reset, hasConfigureAccess, }: AuthenticationOverridesProps) => import("react/jsx-runtime").JSX.Element;
export {};
