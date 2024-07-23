import { Language } from '@patternfly/react-code-editor';
import { ChangeEvent, DragEvent as ReactDragEvent, MouseEvent as ReactMouseEvent } from 'react';
import { FileUploadProps } from './patternfly/FileUpload';

export type FileUploadEvent = ReactDragEvent<HTMLElement> | ChangeEvent<HTMLTextAreaElement> | ReactMouseEvent<HTMLButtonElement, MouseEvent>;
export type FileUploadFormProps = Omit<FileUploadProps, "onChange"> & {
    id: string;
    extension: string;
    onChange: (value: string) => void;
    helpText?: string;
    unWrap?: boolean;
    language?: Language;
};
export declare const FileUploadForm: ({ id, onChange, helpText, unWrap, language, extension, ...rest }: FileUploadFormProps) => import("react/jsx-runtime").JSX.Element;
