import { default as AuthenticationFlowRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/authenticationFlowRepresentation';
import { default as RealmRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/realmRepresentation';
import { UsedBy } from './components/UsedBy';

type UsedBy = "SPECIFIC_CLIENTS" | "SPECIFIC_PROVIDERS" | "DEFAULT";
export type AuthenticationType = AuthenticationFlowRepresentation & {
    usedBy?: {
        type?: UsedBy;
        values: string[];
    };
    realm: RealmRepresentation;
};
export declare const REALM_FLOWS: Map<string, string>;
export default function AuthenticationSection(): import("react/jsx-runtime").JSX.Element;
export {};
