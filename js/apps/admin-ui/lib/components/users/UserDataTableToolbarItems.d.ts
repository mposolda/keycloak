import { default as RealmRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/realmRepresentation';
import { UserProfileConfig } from '@keycloak/keycloak-admin-client/lib/defs/userProfileMetadata';
import { ReactNode } from 'react';
import { SearchType } from '../../user/details/SearchFilter';
import { UserAttribute } from './UserDataTable';

type UserDataTableToolbarItemsProps = {
    searchDropdownOpen: boolean;
    setSearchDropdownOpen: (open: boolean) => void;
    realm: RealmRepresentation;
    hasSelectedRows: boolean;
    toggleDeleteDialog: () => void;
    toggleUnlockUsersDialog: () => void;
    goToCreate: () => void;
    searchType: SearchType;
    setSearchType: (searchType: SearchType) => void;
    searchUser: string;
    setSearchUser: (searchUser: string) => void;
    activeFilters: UserAttribute[];
    setActiveFilters: (activeFilters: UserAttribute[]) => void;
    refresh: () => void;
    profile: UserProfileConfig;
    clearAllFilters: () => void;
    createAttributeSearchChips: () => ReactNode;
    searchUserWithAttributes: () => void;
};
export declare function UserDataTableToolbarItems({ searchDropdownOpen, setSearchDropdownOpen, realm, hasSelectedRows, toggleDeleteDialog, toggleUnlockUsersDialog, goToCreate, searchType, setSearchType, searchUser, setSearchUser, activeFilters, setActiveFilters, refresh, profile, clearAllFilters, createAttributeSearchChips, searchUserWithAttributes, }: UserDataTableToolbarItemsProps): import("react/jsx-runtime").JSX.Element;
export {};
