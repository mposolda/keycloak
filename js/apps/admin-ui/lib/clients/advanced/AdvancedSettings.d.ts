type AdvancedSettingsProps = {
    save: () => void;
    reset: () => void;
    protocol?: string;
    hasConfigureAccess?: boolean;
};
export declare const AdvancedSettings: ({ save, reset, protocol, hasConfigureAccess, }: AdvancedSettingsProps) => import("react/jsx-runtime").JSX.Element;
export {};
