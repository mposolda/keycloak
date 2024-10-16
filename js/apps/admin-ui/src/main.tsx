import "@patternfly/react-core/dist/styles/base.css";
import "@patternfly/patternfly/patternfly-addons.css";

import { StrictMode } from "react";
// eslint-disable-next-line react/no-deprecated
import { render } from "react-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";

import { i18n } from "./i18n/i18n";
import { initKeycloak } from "./keycloak";
import { RootRoute } from "./routes";

import "./index.css";

// Initialize required components before rendering app.
await initKeycloak();
await i18n.init();

const router = createHashRouter([RootRoute]);
const container = document.getElementById("app");

render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
  container,
);
