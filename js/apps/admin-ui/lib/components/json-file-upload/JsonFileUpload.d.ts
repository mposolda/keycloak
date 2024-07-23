import { FileUploadFormProps } from './FileUploadForm';

export type JsonFileUploadProps = Omit<FileUploadFormProps, "onChange" | "language" | "extension"> & {
    onChange: (obj: object) => void;
};
export declare const JsonFileUpload: ({ onChange, ...props }: JsonFileUploadProps) => import("react/jsx-runtime").JSX.Element;
