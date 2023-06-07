/*
 * Copyright 2023 Red Hat, Inc. and/or its affiliates
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

package org.keycloak.testsuite;

import java.io.ByteArrayInputStream;
import java.security.Key;
import java.security.KeyStore;
import java.security.cert.Certificate;
import java.security.cert.X509Certificate;

import groovy.transform.ASTTest;
import org.junit.Test;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.resource.ClientAttributeCertificateResource;
import org.keycloak.admin.client.resource.ClientResource;
import org.keycloak.common.crypto.CryptoIntegration;
import org.keycloak.common.util.KeystoreUtil;
import org.keycloak.models.utils.KeycloakModelUtils;
import org.keycloak.representations.KeyStoreConfig;
import org.keycloak.representations.idm.CertificateRepresentation;
import org.keycloak.representations.idm.ClientRepresentation;
import org.keycloak.testsuite.admin.ApiUtil;
import org.keycloak.testsuite.util.KeystoreUtils;

import static org.junit.Assert.assertNotEquals;
import static org.junit.Assert.assertTrue;

/**
 * @author <a href="mailto:mposolda@redhat.com">Marek Posolda</a>
 */
public class TmpTest {

    @Test()
    public void testMe() throws Exception {
        CryptoIntegration.init(this.getClass().getClassLoader());

        System.out.println("Hello");
        Keycloak adminClient = Keycloak.getInstance("http://localhost:8080", "master", "adminadminadmin", "adminadminadmin", "admin-cli");
        ClientResource accountClient = ApiUtil.findClientResourceByClientId(adminClient.realm("master"), "fff");
        ClientRepresentation clientRep = accountClient.toRepresentation();
        Assert.assertEquals("fff", clientRep.getClientId());

        ClientAttributeCertificateResource certRsc = accountClient.getCertficateResource("jwt.credential");

        // generate a key pair first
        CertificateRepresentation firstcert = certRsc.generate();

        KeystoreUtil.KeystoreFormat preferredKeystoreType = KeystoreUtils.getPreferredKeystoreType();

        KeyStoreConfig config = new KeyStoreConfig();
        config.setFormat(preferredKeystoreType.toString());
        config.setKeyAlias("alias");
        config.setKeyPassword("keyPass");
        config.setStorePassword("storePass");
        byte[] result = certRsc.generateAndGetKeystore(config);
        KeyStore keyStore = CryptoIntegration.getProvider().getKeyStore(preferredKeystoreType);
        keyStore.load(new ByteArrayInputStream(result), "storePass".toCharArray());
        Key key = keyStore.getKey("alias", "keyPass".toCharArray());
        Certificate cert = keyStore.getCertificate("alias");

        assertTrue("Certificat is X509", cert instanceof X509Certificate);
        String keyPem = KeycloakModelUtils.getPemFromKey(key);
        String certPem = KeycloakModelUtils.getPemFromCertificate((X509Certificate) cert);

        assertNotEquals("new key generated", firstcert.getPrivateKey(), keyPem);
        assertNotEquals("new cert generated", firstcert.getCertificate(), certPem);
    }

}
