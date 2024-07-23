type AddHostDialogProps = {
    clientId: string;
    isOpen: boolean;
    onAdded: (host: string) => void;
    onClose: () => void;
};
export declare const AddHostDialog: ({ clientId: id, isOpen, onAdded, onClose, }: AddHostDialogProps) => import("react/jsx-runtime").JSX.Element;
export {};
