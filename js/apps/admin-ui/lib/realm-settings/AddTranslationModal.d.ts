import { SubmitHandler, UseFormReturn } from 'react-hook-form';
import { KeyValueType } from '../components/key-value-form/key-value-convert';

type AddTranslationModalProps = {
    id?: string;
    form: UseFormReturn<TranslationForm>;
    save: SubmitHandler<TranslationForm>;
    handleModalToggle: () => void;
};
export type TranslationForm = {
    key: string;
    value: string;
    translation: KeyValueType;
};
export declare const AddTranslationModal: ({ handleModalToggle, save, form, }: AddTranslationModalProps) => import("react/jsx-runtime").JSX.Element;
export {};
