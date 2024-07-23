
type PermissionScreenType = "clients" | "users" | "groups" | "roles" | "identityProviders";
type PermissionsTabProps = {
    id?: string;
    type: PermissionScreenType;
};
export declare const PermissionsTab: ({ id, type }: PermissionsTabProps) => import("react/jsx-runtime").JSX.Element;
export {};
