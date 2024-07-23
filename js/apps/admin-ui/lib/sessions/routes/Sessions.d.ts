import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type SessionsParams = {
    realm: string;
};
export declare const SessionsRoute: AppRouteObject;
export declare const toSessions: (params: SessionsParams) => Partial<Path>;
