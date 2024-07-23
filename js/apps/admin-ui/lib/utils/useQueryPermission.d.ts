/** A 'plain' object version of the permission status. */
export type PlainPermissionStatus = {
    readonly name: string;
    readonly state: PermissionState;
};
export default function useQueryPermission(name: PermissionName): PlainPermissionStatus | null;
