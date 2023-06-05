package org.keycloak.crypto.fips.test;

import java.util.Set;
import java.util.stream.Collectors;

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
import org.keycloak.crypto.fips.KeycloakFipsSecurityProvider;
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

    // BCFIPS approved mode supports only BCFKS. PKCS12 is supported as well just in case we can rely on FIPS enabled system, which supports security providers to
    // deal with PKCS12 keystore in FIPS compliant way
    @Test
    public void testKeystoreFormatsInApprovedMode() {
        Assume.assumeTrue(CryptoServicesRegistrar.isInApprovedOnlyMode());
        Assert.assertEquals("Running this test with BCFIPS approved mode supported only on FIPS enabled system!", "enabled", KeycloakFipsSecurityProvider.getSystemFipsStatus());

        Set<KeystoreUtil.KeystoreFormat> supportedKeystoreFormats = CryptoIntegration.getProvider().getSupportedKeyStoreTypes().collect(Collectors.toSet());
        Assert.assertThat(supportedKeystoreFormats, Matchers.containsInAnyOrder(
                KeystoreUtil.KeystoreFormat.PKCS12,
                KeystoreUtil.KeystoreFormat.BCFKS));
    }
}
