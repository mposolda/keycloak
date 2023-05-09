package org.keycloak.crypto.fips.test;

import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.security.KeyStore;
import java.security.Security;
import java.util.Set;
import java.util.stream.Collectors;

import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;

import org.bouncycastle.crypto.CryptoServicesRegistrar;
import org.hamcrest.Matchers;
import org.junit.Assert;
import org.junit.Assume;
import org.junit.Before;
import org.junit.ClassRule;
import org.junit.Test;
import org.keycloak.common.crypto.CryptoIntegration;
import org.keycloak.common.util.Environment;
import org.keycloak.common.util.KeystoreUtil;
import org.keycloak.rule.CryptoInitRule;

/**
 * @author <a href="mailto:mposolda@redhat.com">Marek Posolda</a>
 */
public class FIPS1402KeystoreTypesTest {

    @ClassRule
    public static CryptoInitRule cryptoInitRule = new CryptoInitRule();

    @Before
    public void before() {
        // Run this test just if java is in FIPS mode
        Assume.assumeTrue("Java is not in FIPS mode. Skipping the test.", Environment.isJavaInFipsMode());
    }

    @Test
    public void testKeystoreFormatsInNonApprovedMode() {
        Assume.assumeFalse(CryptoServicesRegistrar.isInApprovedOnlyMode());
        Set<KeystoreUtil.KeystoreFormat> supportedKeystoreFormats = CryptoIntegration.getProvider().getSupportedKeyStoreTypes().collect(Collectors.toSet());
        Assert.assertThat(supportedKeystoreFormats, Matchers.containsInAnyOrder(
                KeystoreUtil.KeystoreFormat.PKCS12,
                KeystoreUtil.KeystoreFormat.BCFKS));
    }

    // BCFIPS approved mode supports only BCFKS. No JKS nor PKCS12 support for keystores
    @Test
    public void testKeystoreFormatsInApprovedMode() {
        Assume.assumeTrue(CryptoServicesRegistrar.isInApprovedOnlyMode());
        Set<KeystoreUtil.KeystoreFormat> supportedKeystoreFormats = CryptoIntegration.getProvider().getSupportedKeyStoreTypes().collect(Collectors.toSet());
        Assert.assertThat(supportedKeystoreFormats, Matchers.containsInAnyOrder(
                KeystoreUtil.KeystoreFormat.BCFKS));
    }


    // Same/similar java code like done by command: keytool -keystore /tmp/server2.bcfks   -storetype bcfks   -providername BCFIPS   -providerclass org.bouncycastle.jcajce.provider.BouncyCastleFipsProvider   -provider org.bouncycastle.jcajce.provider.BouncyCastleFipsProvider   -providerpath /home/mposolda/.m2/repository/org/bouncycastle/bc-fips/1.0.2.3/bc-fips-1.0.2.3.jar   -alias master_smtp__key   -importpass -storepass passwordpassword -v
    //
    //
    // Works just on the RHEL machine with FIPS enabled (it does not work on the non-FIPS machine due the non-FIPS implementations of SecretKeyFactory from SunJCE are preferred
    // to be used (however this security provider is not available in the FIPS enabled RHEL host)
    //
    @Test
    public void testKeystoreStorePassword() throws Exception {
        //Security.setProperty("keystore.pkcs12.keyProtectionAlgorithm", "PBEWithHmacSHA256AndAES_256");

        //Assume.assumeTrue(CryptoServicesRegistrar.isInApprovedOnlyMode());
        Set<KeystoreUtil.KeystoreFormat> supportedKeystoreFormats = CryptoIntegration.getProvider().getSupportedKeyStoreTypes().collect(Collectors.toSet());
        KeyStore keystore = KeyStore.getInstance("BCFKS");
        InputStream is = new FileInputStream("/tmp/bcfips-keystore.bcfks");
        keystore.load(is, "passwordpassword".toCharArray());

        // THIS IS USED IN sun.security.tools.keytool.Main in method "doGenSecretKey" . It seems hardcoded to "pbe" for the use-case with "importpass".
        // IT DOES NOT WORK BY DEFAULT. WORKS JUST WITH THE WORKAROUND IN KeycloakFipsSecurityProvider
        // to return different algorithm of SecretKeyFactory than requested here
        SecretKeyFactory factory = SecretKeyFactory.getInstance("PBE");

        // DOES NOT WORK
        //SecretKeyFactory factory = CryptoIntegration.getProvider().getSecretKeyFact("PBKDF2WithHmacSHA256");

        // WORKS BY DEFAULT
        //SecretKeyFactory factory = CryptoIntegration.getProvider().getSecretKeyFact("HMACSHA256");

        // User is prompted for PBE credential (we're just hardcoding it here...)
        SecretKey secKey =
                factory.generateSecret(new PBEKeySpec("passwordpassword".toCharArray()));

        char[] keyPass = "passwordpassword".toCharArray();

        keystore.setKeyEntry("master_smtp__key", secKey, keyPass, null);

        // Store it to the keystore file
        FileOutputStream stream = new FileOutputStream("/tmp/bcfips-keystore-with-password.bcfks");
        keystore.store(stream, "passwordpassword".toCharArray());
        stream.flush();
        stream.close();

        System.out.println("SUCCESS");
//        keystore.setEntry("my-alias", new KeyStore.SecretKeyEntry(secKey),
//                new KeyStore.PasswordProtection(keyPass, "PBKDF2WithHmacSHA256", null));
    }
}
