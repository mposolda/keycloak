import { default as ClientScopeRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/clientScopeRepresentation';
import { ClientScopeDefaultOptionalType } from '../../components/client-scope/ClientScopeTypes';

type ScopeFormProps = {
    clientScope?: ClientScopeRepresentation;
    save: (clientScope: ClientScopeDefaultOptionalType) => void;
};
export declare const ScopeForm: ({ clientScope, save }: ScopeFormProps) => import("react/jsx-runtime").JSX.Element;
export {};
