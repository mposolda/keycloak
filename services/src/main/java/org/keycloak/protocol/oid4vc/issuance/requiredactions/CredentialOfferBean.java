package org.keycloak.protocol.oid4vc.issuance.requiredactions;

import com.google.zxing.WriterException;

import org.keycloak.models.KeycloakSession;
import org.keycloak.protocol.oid4vc.utils.OID4VCUtil;

import java.io.IOException;
import java.util.Base64;

public class CredentialOfferBean {

    private final String uri;
    private final String qrCode;

    // TODO:mposolda maybe remove not needed arguments?
    public CredentialOfferBean(KeycloakSession session, String nonce) throws WriterException, IOException {
        this.uri = OID4VCUtil.getOfferAsUri(session, nonce);
        byte[] qrBytes = OID4VCUtil.getOfferUriAsQr(this.uri, 246, 246);
        this.qrCode = Base64.getEncoder().encodeToString(qrBytes);
    }

    public String getUri() {
        return uri;
    }

    public String getQrCode() {
        return qrCode;
    }
}
