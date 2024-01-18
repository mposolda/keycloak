import type { UserProfileConfig } from "@keycloak/keycloak-admin-client/lib/defs/userProfileMetadata";
// import type { ClientQuery } from "@keycloak/keycloak-admin-client/lib/resources/clients";
import {
  FormGroup,
  Select,
  SelectOption,
  SelectVariant,
} from "@patternfly/react-core";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { HelpItem } from "ui-shared";
import { KeycloakTextInput } from "../keycloak-text-input/KeycloakTextInput";
import { convertToName } from "./DynamicComponents";
import { adminClient } from "../../admin-client";
import { useFetch } from "../../utils/useFetch";
import type { ComponentProps } from "./components";

type UserProfileAttributeListProps = ComponentProps & {};

export const UserProfileAttributeListComponent = ({
  name,
  label,
  helpText,
  defaultValue,
  isDisabled = false,
  required = false,
}: UserProfileAttributeListProps) => {
  const { t } = useTranslation();
  const {
    control,
    formState: { errors },
    register,
  } = useFormContext();

  const [open, setOpen] = useState(false);
  const [config, setConfig] = useState<UserProfileConfig>();

  useFetch(() => adminClient.users.getProfile(), setConfig, []);

  const convert = (config: UserProfileConfig | undefined) => [
    <SelectOption key="empty" value="">
      {t("none")}
    </SelectOption>,
    ...(config?.attributes?.map((option) => (
      <SelectOption key={option.name} value={option.name} />
    )) || []),
  ];

  return (
    <FormGroup
      label={t(label!)}
      isRequired={required}
      labelIcon={<HelpItem helpText={t(helpText!)} fieldLabelId={label!} />}
      fieldId={name!}
      validated={errors[name!] ? "error" : "default"}
      helperTextInvalid={t("required")}
    >
      <Controller
        name={name!}
        defaultValue={defaultValue || ""}
        control={control}
        rules={required ? { required: true } : {}}
        render={({ field }) => (
          <Select
            toggleId={name}
            variant={SelectVariant.typeahead}
            onToggle={(open) => setOpen(open)}
            isOpen={open}
            isDisabled={isDisabled}
            selections={field.value}
            onFilter={(_, value) => {
              setSearch(value);
              return convert(clients);
            }}
            onSelect={(_, value) => {
              field.onChange(value.toString());
              setOpen(false);
            }}
            typeAheadAriaLabel={t(label!)}
          >
            {convert(config)}
          </Select>
        )}
      />
      <KeycloakTextInput
        id={name!}
        data-testid={name}
        isDisabled={isDisabled}
        defaultValue={defaultValue?.toString()}
        {...register(convertToName(name!))}
      />
    </FormGroup>
  );
};
