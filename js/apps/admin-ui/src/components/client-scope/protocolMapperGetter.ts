import type ProtocolMapperRepresentation from "@keycloak/keycloak-admin-client/lib/defs/protocolMapperRepresentation";
import { fetchAdminUI } from "../../context/auth/admin-ui-endpoint";

export const findProtocolMapperByClientScope = async (
  clientScopeId: string,
  protocolMapperId: string,
): Promise<ProtocolMapperRepresentation> =>
  fetchAdminUI(`ui-ext/client-scopes/${clientScopeId}/mappers/${protocolMapperId}`);

export const findProtocolMapperByClient = async (
  clientUuid: string,
  protocolMapperId: string,
): Promise<ProtocolMapperRepresentation> =>
  fetchAdminUI(`ui-ext/clients/${clientUuid}/mappers/${protocolMapperId}`);
