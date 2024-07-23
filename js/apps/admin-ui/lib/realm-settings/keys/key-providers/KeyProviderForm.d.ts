import { ProviderType } from '../../routes/KeyProvider';

type KeyProviderFormProps = {
    id?: string;
    providerType: ProviderType;
    onClose?: () => void;
};
export declare const KeyProviderForm: ({ providerType, onClose, }: KeyProviderFormProps) => import("react/jsx-runtime").JSX.Element;
export default function KeyProviderFormPage(): import("react/jsx-runtime").JSX.Element;
export {};
