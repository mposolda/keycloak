export declare enum Feature {
    AdminFineGrainedAuthz = "ADMIN_FINE_GRAINED_AUTHZ",
    ClientPolicies = "CLIENT_POLICIES",
    Kerberos = "KERBEROS",
    DynamicScopes = "DYNAMIC_SCOPES",
    DPoP = "DPOP",
    DeviceFlow = "DEVICE_FLOW",
    TransientUsers = "TRANSIENT_USERS",
    ClientTypes = "CLIENT_TYPES",
    DeclarativeUI = "DECLARATIVE_UI",
    Organizations = "ORGANIZATION"
}
export default function useIsFeatureEnabled(): (feature: Feature) => boolean;
