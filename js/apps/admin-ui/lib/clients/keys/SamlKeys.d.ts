type SamlKeysProps = {
    clientId: string;
    save: () => void;
};
declare const KEYS: readonly ["saml.signing", "saml.encryption"];
export type KeyTypes = (typeof KEYS)[number];
export declare const SamlKeys: ({ clientId, save }: SamlKeysProps) => import("react/jsx-runtime").JSX.Element;
export {};
