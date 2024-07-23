import { default as CertificateRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/certificateRepresentation';

type CertificateProps = Omit<CertificateDisplayProps, "id"> & {
    plain?: boolean;
};
type CertificateDisplayProps = {
    id: string;
    keyInfo?: CertificateRepresentation;
};
export declare const Certificate: ({ keyInfo, plain }: CertificateProps) => import("react/jsx-runtime").JSX.Element;
export {};
