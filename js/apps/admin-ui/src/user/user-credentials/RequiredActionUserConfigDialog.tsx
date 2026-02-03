import {
  HelpItem,  
  SelectControl,
} from "@keycloak/keycloak-ui-shared";
import {
  Button,
  ButtonVariant,
  Form,
  Modal,
  ModalVariant,
  Text,
  TextContent,
} from "@patternfly/react-core";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useServerInfo } from "../../context/server-info/ServerInfoProvider";

type RequiredActionUserConfigDialogProps = {  
  toggleDialog: () => void;
  save: (requiredActionUserConfig: RequiredActionUserConfig) => void;
};

// TODO:mposolda not hardcoded...
export type RequiredActionUserConfig = {
  clientScopeName: string;
};

export const RequiredActionUserConfigForm = ({
}) => {
  const { t } = useTranslation();

//  const { watch } = useFormContext<FormFields>();
//  const format = watch("format");

  // TODO:mposolda should not be hardcoded
  const supportedCredentialTypes = [
    'education_certificate',
    'oid4vc_natural_person',
  ];  

  return (
    <Form className="pf-v5-u-pt-lg">
      <SelectControl
        name="clientScopeName"
        label={t("vcCredentialConfigId")}
        labelIcon={t("vcCredentialConfigIdHelp")}
        controller={{
          defaultValue: supportedCredentialTypes[0],
        }}
        menuAppendTo="parent"
        options={supportedCredentialTypes}
      />
    </Form>
  );
};

export const RequiredActionUserConfigDialog = ({  
  save,
  toggleDialog,
}: RequiredActionUserConfigDialogProps) => {
  const { t } = useTranslation();
  const form = useForm<RequiredActionUserConfig>({
    defaultValues: {},
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = form;

  return (
    <Modal
      variant={ModalVariant.medium}
      title={t("requiredActionUserConfig")}
      isOpen
      onClose={toggleDialog}
      actions={[
        <Button
          id="modal-confirm"
          key="confirm"
          data-testid="confirm"
          isDisabled={!isValid}
          onClick={async () => {
            await handleSubmit((config) => {
              save(config);
              toggleDialog();
            })();
          }}
        >
          {t("confirm")}
        </Button>,
        <Button
          id="modal-cancel"
          key="cancel"
          data-testid="cancel"
          variant={ButtonVariant.link}
          onClick={() => {
            toggleDialog();
          }}
        >
          {t("cancel")}
        </Button>,
      ]}
    >
      <TextContent>
        <Text>{t("requiredActionUserConfigDescription")}</Text>
      </TextContent>
      <FormProvider {...form}>
        <RequiredActionUserConfigForm />
      </FormProvider>
    </Modal>
  );
};


