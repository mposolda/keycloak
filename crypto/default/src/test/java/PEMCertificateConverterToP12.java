/*
 * Copyright 2024 Red Hat, Inc. and/or its affiliates
 *  and other contributors as indicated by the @author tags.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.security.KeyStore;
import java.security.PublicKey;
import java.security.cert.X509Certificate;

import org.keycloak.common.crypto.CryptoIntegration;
import org.keycloak.common.crypto.CryptoProvider;
import org.keycloak.common.util.KeystoreUtil;
import org.keycloak.common.util.PemUtils;
import org.keycloak.common.util.StreamUtil;

/**
 * @author <a href="mailto:mposolda@redhat.com">Marek Posolda</a>
 */
public class PEMCertificateConverterToP12 {

    public static void main(String[] args) throws Exception {
        System.out.println("Fpp");
        CryptoIntegration.init(CryptoProvider.class.getClassLoader());

        X509Certificate cert = getCertificate("/tmp/msad2016.pem");
        PublicKey publicKey = cert.getPublicKey();

        byte[] keystoreBytes = getKeystore("PKCS12", "msad2016", "secret", cert);

        File outputFile = new File("/tmp/msad2016.p12");
        Files.write(outputFile.toPath(), keystoreBytes);

        System.out.println("Bye");
    }

    private static X509Certificate getCertificate(String resourceFilename) throws Exception {
        InputStream is = new FileInputStream(resourceFilename);

        String s = StreamUtil.readString(is, Charset.defaultCharset());

        return PemUtils.decodeCertificate(s);
    }

    private static byte[] getKeystore(String keystoreFormat, String keyAlias, String storePassword, X509Certificate clientCert) {
        try {
            KeyStore keyStore = CryptoIntegration.getProvider().getKeyStore(KeystoreUtil.KeystoreFormat.valueOf(keystoreFormat));
            keyStore.load(null, null);

//            if (privatePem != null) {
//                PrivateKey privateKey = PemUtils.decodePrivateKey(privatePem);
//                X509Certificate clientCert = PemUtils.decodeCertificate(certPem);
//
//
//                Certificate[] chain =  {clientCert};
//
//                keyStore.setKeyEntry(keyAlias, privateKey, config.getKeyPassword().trim().toCharArray(), chain);
//            } else {
//                X509Certificate clientCert = PemUtils.decodeCertificate(certPem);
                keyStore.setCertificateEntry(keyAlias, clientCert);
//            }


//            if (config.isRealmCertificate() == null || config.isRealmCertificate().booleanValue()) {
//                KeyManager keys = session.keys();
//                String kid = keys.getActiveRsaKey(realm).getKid();
//                Certificate certificate = keys.getRsaCertificate(realm, kid);
//                String certificateAlias = config.getRealmAlias();
//                if (certificateAlias == null) certificateAlias = realm.getName();
//                keyStore.setCertificateEntry(certificateAlias, certificate);
//
//            }
            ByteArrayOutputStream stream = new ByteArrayOutputStream();
            keyStore.store(stream, storePassword.trim().toCharArray());
            stream.flush();
            stream.close();
            byte[] rtn = stream.toByteArray();
            return rtn;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
