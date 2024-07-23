import { Path } from 'react-router-dom';

type DetailDescriptionProps<T> = {
    name: string;
    array?: string[] | T[];
    convert?: (obj: T) => string;
};
export declare function DetailDescription<T>(props: DetailDescriptionProps<T>): import("react/jsx-runtime").JSX.Element;
type DetailDescriptionLinkProps<T> = DetailDescriptionProps<T> & {
    link?: (element: T) => Partial<Path>;
};
export declare function DetailDescriptionLink<T>({ name, array, convert, link, }: DetailDescriptionLinkProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
