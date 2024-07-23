import { To } from 'react-router-dom';

export type LdapMapperListProps = {
    toCreate: To;
    toDetail: (mapperId: string) => To;
};
export declare const LdapMapperList: ({ toCreate, toDetail }: LdapMapperListProps) => import("react/jsx-runtime").JSX.Element;
