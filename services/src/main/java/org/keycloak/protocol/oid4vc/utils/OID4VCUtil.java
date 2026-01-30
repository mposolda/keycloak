package org.keycloak.protocol.oid4vc.utils;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;

import org.keycloak.models.KeycloakSession;
import org.keycloak.protocol.oid4vc.OID4VCLoginProtocolFactory;
import org.keycloak.protocol.oid4vc.issuance.OID4VCIssuerWellKnownProvider;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

import static org.keycloak.protocol.oid4vc.issuance.OID4VCIssuerEndpoint.CREDENTIAL_OFFER_PATH;

public class OID4VCUtil {

    private OID4VCUtil() {
    }

    public static String getOfferAsUri(KeycloakSession session, String nonce) {
        String encodedOfferUri = URLEncoder.encode(OID4VCIssuerWellKnownProvider.getIssuer(session.getContext()) + "/protocol/" + OID4VCLoginProtocolFactory.PROTOCOL_ID + "/" + CREDENTIAL_OFFER_PATH + nonce, StandardCharsets.UTF_8);
        return "openid-credential-offer://?credential_offer_uri=" + encodedOfferUri;
    }


    // TODO:mposolda maybe generic "QR" util method, which would be used also by TotpUtils?
    public static byte[] getOfferUriAsQr(String offerUri, int width, int height) throws WriterException, IOException {
        QRCodeWriter qrCodeWriter = new QRCodeWriter();
        BitMatrix bitMatrix = qrCodeWriter.encode(offerUri, BarcodeFormat.QR_CODE, width, height);
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        MatrixToImageWriter.writeToStream(bitMatrix, "png", bos);
        return bos.toByteArray();
    }
}
