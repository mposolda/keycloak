import {
  getInjectedEnvironment,
  type BaseEnvironment,
} from "@keycloak/keycloak-ui-shared";

export type Environment = BaseEnvironment & {
  /** The URL to the root of the account console. */
  baseUrl: string;
  /** The locale of the user */
  locale: string;
  /** Name of the referrer application in the back link */
  referrerName?: string;
  /** UR to the referrer application in the back link */
  referrerUrl?: string;
  /** Feature flags */
  features: Feature;
  /** Context of the kcAction containing the parameters, which were used when redirect to the account-console was done from some AIA */
  kcActionContext: KcActionContext;
};

export type Feature = {
  isRegistrationEmailAsUsername: boolean;
  isEditUserNameAllowed: boolean;
  isLinkedAccountsEnabled: boolean;
  isMyResourcesEnabled: boolean;
  deleteAccountAllowed: boolean;
  updateEmailFeatureEnabled: boolean;
  updateEmailActionEnabled: boolean;
  isViewGroupsEnabled: boolean;
  isViewOrganizationsEnabled: boolean;
  isOid4VciEnabled: boolean;
};

export type KcActionContext = {
  kcAction?: string;
  kcActionStatus?: string;
  kcActionErrorDetails?: string;
};

export const environment = getInjectedEnvironment<Environment>();

console.log("Hello, I am in the environment");
