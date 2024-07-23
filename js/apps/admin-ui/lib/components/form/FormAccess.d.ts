import { AccessType } from '@keycloak/keycloak-admin-client/lib/defs/whoAmIRepresentation';
import { FormProps } from '@patternfly/react-core';
import { PropsWithChildren } from 'react';

export type FormAccessProps = FormProps & {
    /**
     * One of the AccessType's that the user needs to have to view this form. Also see {@link useAccess}.
     * @type {AccessType}
     */
    role: AccessType;
    /**
     * An override property if fine grained access has been setup for this form.
     * @type {boolean}
     */
    fineGrainedAccess?: boolean;
    /**
     * Set unWrap when you don't want this component to wrap your "children" in a {@link Form} component.
     * @type {boolean}
     */
    unWrap?: boolean;
    /**
     * Overwrite the fineGrainedAccess and make form regardless of access rights.
     */
    isReadOnly?: boolean;
};
/**
 * Use this in place of a patternfly Form component and add the `role` and `fineGrainedAccess` properties.
 * @param {FormAccessProps} param0 - all properties of Form + role and fineGrainedAccess
 */
export declare const FormAccess: ({ children, role, fineGrainedAccess, isReadOnly, unWrap, ...rest }: PropsWithChildren<FormAccessProps>) => import("react/jsx-runtime").JSX.Element;
