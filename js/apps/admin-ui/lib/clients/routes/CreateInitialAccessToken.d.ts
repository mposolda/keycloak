import { Path } from 'react-router-dom';
import { AppRouteObject } from '../../routes';

export type CreateInitialAccessTokenParams = {
    realm: string;
};
export declare const CreateInitialAccessTokenRoute: AppRouteObject;
export declare const toCreateInitialAccessToken: (params: CreateInitialAccessTokenParams) => Partial<Path>;
