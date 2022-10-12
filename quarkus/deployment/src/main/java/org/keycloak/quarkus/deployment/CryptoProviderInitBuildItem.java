/*
 * Copyright 2022 Red Hat, Inc. and/or its affiliates
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

package org.keycloak.quarkus.deployment;

import io.quarkus.builder.item.SimpleBuildItem;

/**
 * A symbolic build item that can be consumed by other build steps when the {@link org.keycloak.common.crypto.CryptoProvider}
 * is found and set to {@link org.keycloak.common.crypto.CryptoIntegration}
 *
 * @author <a href="mailto:mposolda@redhat.com">Marek Posolda</a>
 */
public final class CryptoProviderInitBuildItem extends SimpleBuildItem {
}
