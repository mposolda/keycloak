import type RequiredActionProviderRepresentation from "@keycloak/keycloak-admin-client/lib/defs/requiredActionProviderRepresentation";
import {
  SelectControl,
  SelectVariant,
  useFetch,
} from "@keycloak/keycloak-ui-shared";
import { useState } from "react";
import { FieldPathByValue, FieldValues } from "react-hook-form";
import useToggle from "../../utils/useToggle";
import { useTranslation } from "react-i18next";
import { useAdminClient } from "../../admin-client";

import { RequiredActionUserConfigDialog } from "./RequiredActionUserConfigDialog";
import { GenerateKeyDialog, getFileExtension } from "../../clients/keys/GenerateKeyDialog";
import type { RequiredActionUserConfig } from "./RequiredActionUserConfigDialog";
//import type KeyStoreConfig from "@keycloak/keycloak-admin-client/lib/defs/keystoreConfig";

export type RequiredActionMultiSelectProps<
  T extends FieldValues,
  P extends FieldPathByValue<T, string[] | undefined>,
> = {
  name: P;
  label: string;
  help: string;
};

export const RequiredActionMultiSelect = <
  T extends FieldValues,
  P extends FieldPathByValue<T, string[] | undefined>,
>({
  name,
  label,
  help,
}: RequiredActionMultiSelectProps<T, P>) => {
  const { adminClient } = useAdminClient();

  const { t } = useTranslation();
  const [requiredActions, setRequiredActions] = useState<
    RequiredActionProviderRepresentation[]
  >([]);

    const [openConfigureRequiredAction, toggleConfigureRequiredAction, setConfigureRequiredAction] =
      useToggle();

  const onRequiredActionConfigured = async (config: RequiredActionUserConfig) => {
    console.log("On required action configured!!! Config is: " + config.clientScopeName);
  };

    const displayUserActionsDialog = (value: string) => {
      console.log("displayying user actions dialog for: " + value);
      setConfigureRequiredAction(true)
    };

  useFetch(
    () => adminClient.authenticationManagement.getRequiredActions(),
    (actions) => {
      const enabledUserActions = actions.filter((action) => {
        return action.enabled;
      });
      console.log("Obtained required actions");
      setRequiredActions(enabledUserActions);
    },
    [],
  );

  return (
   <>
    <SelectControl
      name={name}
      label={t(label)}
      labelIcon={t(help)}
      controller={{ defaultValue: [] }}
      isScrollable
      maxMenuHeight="375px"
      variant={SelectVariant.typeaheadMulti}
      chipGroupProps={{
        numChips: 3,
      }}
      placeholderText={t("requiredActionPlaceholder")}
      menuAppendTo="parent"
      onSelect={(value, onChange) => {
        console.log("Hello. Value is: " + value);

        // TODO:mposolda
        if (value === 'verifiable_credential_offer') {
          console.log("Dialog should be displayed here");
          displayUserActionsDialog(value);
        }

//              if (ref.current !== value) {
//                ref.current = value as string;
//                form.setValue("resources", undefined);
//              }
//              onChange(value);
      }}
      options={requiredActions.map(({ alias, name }) => ({
        key: alias!,
        value: name || alias!,
      }))}
    />
      {openConfigureRequiredAction && (
        <RequiredActionUserConfigDialog        
          toggleDialog={toggleConfigureRequiredAction}
          save={onRequiredActionConfigured}
        />
      )}    
   </>
  );
};
