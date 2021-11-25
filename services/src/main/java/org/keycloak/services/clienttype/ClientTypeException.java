/*
 * Copyright 2021 Red Hat, Inc. and/or its affiliates
 * and other contributors as indicated by the @author tags.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

package org.keycloak.services.clienttype;

import org.keycloak.models.ModelException;

/**
 * @author <a href="mailto:mposolda@redhat.com">Marek Posolda</a>
 */
public class ClientTypeException extends ModelException {

    public ClientTypeException(String message) {
        super(message);
    }

    public ClientTypeException(String message, Object ... parameters) {
        super(message, parameters);
    }

    public ClientTypeException(String message, Throwable cause) {
        super(message, cause);
    }

    public ClientTypeException(Throwable cause) {
        super(cause);
    }
}
