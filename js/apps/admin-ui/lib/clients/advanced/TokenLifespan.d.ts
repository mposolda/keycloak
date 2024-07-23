import { Unit } from '../../components/time-selector/TimeSelector';

type TokenLifespanProps = {
    id: string;
    name: string;
    defaultValue?: number;
    units?: Unit[];
};
export declare const TokenLifespan: ({ id, name, defaultValue, units, }: TokenLifespanProps) => import("react/jsx-runtime").JSX.Element;
export {};
