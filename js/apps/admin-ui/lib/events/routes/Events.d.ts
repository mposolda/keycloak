import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type EventsTab = "user-events" | "admin-events";
export type EventsParams = {
    realm: string;
    tab?: EventsTab;
};
export declare const EventsRoute: AppRouteObject;
export declare const EventsRouteWithTab: AppRouteObject;
export declare const toEvents: (params: EventsParams) => Partial<Path>;
