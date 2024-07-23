import { default as ClientRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/clientRepresentation';
import { default as GlobalRequestResult } from '@keycloak/keycloak-admin-client/lib/defs/globalRequestResult';
import { TFunction } from 'i18next';
import { AddAlertFunction } from '@keycloak/keycloak-ui-shared';
import { SaveOptions } from './ClientDetails';

export declare const parseResult: (result: GlobalRequestResult, prefixKey: string, addAlert: AddAlertFunction, t: TFunction) => void;
export type AdvancedProps = {
    save: (options?: SaveOptions) => void;
    client: ClientRepresentation;
};
export declare const AdvancedTab: ({ save, client }: AdvancedProps) => import("react/jsx-runtime").JSX.Element;
