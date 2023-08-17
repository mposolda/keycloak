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

package org.keycloak.crypto.def.test;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

import org.bouncycastle.asn1.ASN1InputStream;
import org.bouncycastle.asn1.ASN1Primitive;
import org.bouncycastle.asn1.DERApplicationSpecific;
import org.bouncycastle.asn1.DEROctetString;
import org.bouncycastle.asn1.DERSequence;
import org.bouncycastle.asn1.DERTaggedObject;
import org.bouncycastle.asn1.DLApplicationSpecific;
import org.bouncycastle.asn1.DLSequence;
import org.bouncycastle.asn1.DLTaggedObject;
import org.junit.Test;
import org.keycloak.common.util.Base64Url;

/**
 * @author <a href="mailto:mposolda@redhat.com">Marek Posolda</a>
 */
public class SPNEGOParseExample {

    // Partially based on https://stackoverflow.com/questions/4508555/decrypt-kerberos-ticket-using-spnego
    @Test
    public void myTest() throws Exception {
        String exampleSpnegoToken = "YIIEVwYGKwYBBQUCoIIESzCCBEegDTALBgkqhkiG9xIBAgKhBAMCAfaiggQuBIIEKmCCBCYGCSqGSIb3EgECAgEAboIEFTCCBBGgAwIBBaEDAgEOogcDBQAgAAAAo4H+YYH7MIH4oAMCAQWhDhsMS0VZQ0xPQUsuT1JHohwwGqADAgEAoRMwERsESFRUUBsJbG9jYWxob3N0o4HCMIG/oAMCARGigbcEgbSx49tD28zEl4NzIZsOQ1PnIYLEihBcjyy9oy8ZQ5Vo9aW3KlZd3bBRtBrwGgnztZ8mOMtFSuISSh8OrBhD+UrywsxCf9Wj9OJrZV0SlxNMeif98+nkmIPvWnz5/xGePgBPlrLmHqhtN+DefRUTSpB2tR6BNqLmd5S6BV4GuxN3QpUPRifMxTpeOQYzINuguMuR2rJleqWmkBSEhvW3uNpcQRvP8dV9/rQUimZj+LtJTcQ+g0akggL5MIIC9aADAgERooIC7ASCAuiPC0r1UhLNtzBmFN2z+cdydQxA5VEkSlQ343BTo7nvK2j7ssJGOoe4vQpxhpOw1+4OM5uNGwuqgfRD4wsG6To6JfOOOSehL2Z9wuLk4lrjt2E+/oKIflXxW772QDBeQ+m9l5LKkpG56rc7U4ioyrCwHbVwJgtqRNYgswTx8ZgmjzskY6EPZjEhNpEhuGDlpqKdSkJJSmSS/WgsN35GLQI+cHIwVLJXOcWLXnBIir9AmRxY9qycHjslkMSdq3jSXaPo3jrHawAMj9onnGr4oHMOC8VWjYsJkbvxsWLN0zpXyX0kAnH91j/hdoJNoJtIVzAlTD6xHKxkOfz0Ht3/RxxDpz4MfXCZA5ZvONAOD6cwkRjZVvBoLlbOsKAn3LJ8lBo7yfVVkDV4QXGjPL8oRwCMmlC8uotTNgce/RQQcYc434AozPh2r9cD0ZZPY4F0Y9TAxRe4CE7xczaAH1wPtoTXOlN807xCd1Ch6JJ1YphQcEabhvLgtPGvfOsW0i5zCGto4FA9/xzfyZ9Ee2z109q1ftCeO1ROAZWK14zkbRfgmX4gaKrn+mHzO3GOeQ4+uuzeFpVRUFhc6vjdUWqIYHv/qpLo4qodjf0ZJ+//yPkKHeTv1LJbrDh26eipr1hlGxLaO9/t5BvqCfCP4cAcqi0ma4eiJRHMk91oHBXhHBcOjB6NGgVYkAik9evpXqfNTGPpkXdnMbRF2gBYApKX33+xFZ+bSaSQpcfAPgfziefyAx67cVdbVePJVb6zkVseHTvj4MnUU43zZGqrw9NnKByNYOk5SZKVz8E9OG1hfHbPjNib2ZRY/ZG+PlEHc7b2aLsvaBFbnq4n0acinYwE+0J3mg1Ca+JVGhIGRhItqSop6J/pal/2EoLG+0iRfK53sZ1nm/+FcwrOfgVq/GkkzC9PcxTgByU5ey+BgiDS5yj//J8qcodoP3tIQB+G6Gx8fydDs73tXwvsFxXXgW47ASo8jHDqg9vZVwQ=";
        System.out.println("Realm token 1: " + getRealm(exampleSpnegoToken));

        // Does not work
        // exampleSpnegoToken = "YIIELgYGKwYBBQUCoIIEIjCCBB6gDTALBgkqhkiG9xIBAgKhBAMCAfaiggQFBIIEAWCCA/0GCSqGSIb3EgECAgEAboID7DCCA+igAwIBBaEDAgEOogcDBQAgAAAAo4H6YYH3MIH0oAMCAQWhDhsMS0VZQ0xPQUsuT1JHohwwGqADAgEAoRMwERsESFRUUBsJbG9jYWxob3N0o4G+MIG7oAMCARGigbMEgbBzd3ozWF9g+l2Wf/GnU4at+Hr+5girZ1W0FcZx5bVWlVYdt8yf1UA8oYlfIGCrfyUjFS88IAAI5qakMb1o4FGScdxebmp4cvVvTcPwOnnj8vL9NkG3mIY6gm3ozzxuKLKeP0eZIhMa/8mXdBpgjgGUb92bz9+0n1MOwuAISNX03VrwrRYqUuYI+WmJMxmSKpRJ8hqJY0NN0V8bvmgIgy/AWDcIzWt2uQJCCjmee+b/+aSCAtQwggLQoAMCARGiggLHBIICw1edn7YYdfTtQ9/lyDuvJoPy++G9AV70SHbR9jjiviomGJpmhbl+Op6QzCJL6JtQCZvQ0Y2UL03T/j6ynBh/D6Hslq1ft3fNqYeUlUyHR44eSO3Nf0eIBbjY+0FbeSGFGcVa+v9tRWWcGPOoKUjtonuOoxFmJWZ0WHW93PjLBpnZQ0v022bH5QBspwM8xHuOLOqOY5pEkEd3MHozvbbOgYH9QuE5Gy9WMtRoAsLxaGPvxsjZHBSuE3cBN8HFNqoooNLr07Hl0ZdebP9DWp44aHuaGRubb2wKkC9yoLaceLJM9lmsNS3thCpNMrZA0zQgdPmaWiEJskEMHBXBiW3g/jkHhWX4aN3gzhjaTJhH7IVS43naP0NHTjwPUWN7RYhHxQ2xGW37c9w56SCnHldduJyA6aojZUTdkMsoldcAqldYCZ5hSq9eWhGPSsuLdPpn2kMbSk5S9faRvn1HH7UvkErYgv+/yG4b/V8oCv40dB5jRfbr+BIM0Hy7agRdadzK7EAiztFedS1HtHsxo8uEapaCc/a0F5Qa13dnWvVMHlaJDTC61+9iJdzHym5J0McTVkFLONnRj+R7qY6vY6B1hbDJRMB2j5gp/qYWh92ltFN/6NiHv39AYXkQaEFohQrAbBAeKC2mttcl3hXST3XjiSdhWpc9yABeXVOxobWic5Zsd/lxYX1Z4IYk+p4tZN2KWjZ9cO+W/Ek3t1FW3y1Cg6qWncUP/UyVKIxvq2YvUZzcoqVJUM5tCAvGVKPMKlcPknXvGwmOB7t9gUBOIzCp7Js1cN30WLJBgvkBTPXnpUqFMxlh5EcSFMToxSJO7vlb8MoEo3fkEV1rky9oCvS/nRvEmNo5UgVD2G6dvBUpObsrbbfMWVY5TiZbkL1RxGPYLGhNbEAf2XF6Qn1g3E/ifdLy3phkU16VIGXvYcOqZQmKnXW7";
        // System.out.println("Realm token 2: " + getRealm(exampleSpnegoToken));
    }

    private String getRealm(String spnegoToken) throws Exception {
        byte[] myBytes = Base64Url.decode(spnegoToken);
        List<ASN1Primitive> derObjects = readDERObjects(myBytes);

        // Parse Level 1
        List<ASN1Primitive> derObjectsLevel1 = readDERObjects(derObjects.get(0), 1);

        // Parse Level 2
        List<ASN1Primitive> derObjectsLevel2 = readDERObjects(derObjectsLevel1.get(1), 2);

        // Parse Level 3
        List<ASN1Primitive> derObjectsLevel3 = readDERObjects(derObjectsLevel2.get(2), 3);

        // Parse level 4?
        String s = new String(derObjectsLevel3.get(1).getEncoded(), StandardCharsets.UTF_8);
        s = s.substring(s.indexOf("\f") + 1);
        byte[] sBytes = s.getBytes(StandardCharsets.UTF_8);
        int i=0;
        for (byte b : s.getBytes(StandardCharsets.UTF_8)) {
            i++;
            if (b < 0) break;
        }
        String realm  = s.substring(0, (i - 1));
        //List<ASN1Primitive> derObjectsLevel4 = readDERObjects(derObjectsLevel3.get(1), 4);

        return realm;
    }

    private List<ASN1Primitive> readDERObjects(byte[] bytes) throws IOException {
        ASN1InputStream stream = new ASN1InputStream(new ByteArrayInputStream(
                bytes));
        List<ASN1Primitive> objects = new ArrayList<>();
        ASN1Primitive curObj;
        while ((curObj = stream.readObject()) != null) {
            objects.add(untag(curObj));
        }
        return objects;
    }

    private List<ASN1Primitive> readDERObjectsWithSkip(byte[] bytes, int skipBytes) throws IOException {
        ASN1InputStream stream = new ASN1InputStream(new ByteArrayInputStream(
                bytes));
        List<ASN1Primitive> objects = new ArrayList<>();
        ASN1Primitive curObj;

        // Skip some bytes at the beginning
        stream.readNBytes(skipBytes);

        int counter = 0;
        while ((curObj = stream.readObject()) != null) {
            counter++;
            objects.add(untag(curObj));

            // Hardcoded... when parsing level 3
            if (counter == 2) return objects;
        }
        return objects;
    }

    private ASN1Primitive untag(ASN1Primitive src) {
        if (src instanceof DERTaggedObject) {
            return ((DERTaggedObject) src).getObject();
        }
        return src;
    }

    private List<ASN1Primitive> readDERObjects(ASN1Primitive container, int level) throws IOException {
// do operation varying from the type of container
        if (container instanceof DERSequence) {
            // decode using enumerator
            List<ASN1Primitive> objects = new ArrayList<>();
            DERSequence seq = (DERSequence) container;
            Enumeration enumer = seq.getObjects();
            while (enumer.hasMoreElements()) {
                ASN1Primitive curObj = (ASN1Primitive) enumer.nextElement();
                objects.add(untag(curObj));
            }
            return objects;
        }
        if (container instanceof DLSequence) {
            // decode using enumerator
            List<ASN1Primitive> objects = new ArrayList<>();
            DLSequence seq = (DLSequence) container;
            Enumeration enumer = seq.getObjects();
            while (enumer.hasMoreElements()) {
                ASN1Primitive curObj = (ASN1Primitive) enumer.nextElement();
                objects.add(untag(curObj));
            }
            return objects;
        }
        if (container instanceof DERApplicationSpecific) {
            DERApplicationSpecific aps = (DERApplicationSpecific) container;
            byte[] bytes = aps.getContents();
            return readDERObjects(bytes);
        }
        if (container instanceof DEROctetString) {
            DEROctetString octets = (DEROctetString) container;
            byte[] bytes = octets.getOctets();
            if (level == 3) {
                return readDERObjectsWithSkip(bytes, 1);
            } else if (level == 4) {
                return readDERObjectsWithSkip(bytes, 2);
            } else {
                return readDERObjectsWithSkip(bytes, 0);
            }
        }
        if (container instanceof DLApplicationSpecific) {
            DLApplicationSpecific aps = (DLApplicationSpecific) container;
            byte[] bytes = aps.getContents();
            return readDERObjects(bytes);
        }
        if (container instanceof DLTaggedObject) {
            DLTaggedObject aps = (DLTaggedObject) container;
            ASN1Primitive prim = aps.getObject();
            return readDERObjects(prim, level);
        }
        throw new IllegalArgumentException("Unable to decode sequence from "+container);
    }
}
