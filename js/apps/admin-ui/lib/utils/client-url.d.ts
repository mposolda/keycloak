import { default as ClientRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/clientRepresentation';
import { Environment } from '../environment';

export declare const convertClientToUrl: ({ rootUrl, baseUrl }: ClientRepresentation, environment: Environment) => string | undefined;
