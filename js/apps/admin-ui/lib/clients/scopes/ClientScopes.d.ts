import { default as ClientScopeRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/clientScopeRepresentation';
import { AllClientScopeType } from '../../components/client-scope/ClientScopeTypes';

export type ClientScopesProps = {
    clientId: string;
    protocol: string;
    clientName: string;
    fineGrainedAccess?: boolean;
};
export type Row = ClientScopeRepresentation & {
    type: AllClientScopeType;
    description?: string;
};
export declare const ClientScopes: ({ clientId, protocol, clientName, fineGrainedAccess, }: ClientScopesProps) => import("react/jsx-runtime").JSX.Element;
