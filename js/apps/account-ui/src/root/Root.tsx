import { ErrorPage, useEnvironment } from "@keycloak/keycloak-ui-shared";
import { Page, Spinner } from "@patternfly/react-core";
import { Suspense, useState } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import fetchContentJson from "../content/fetchContent";
import {
  Environment,
  KcActionContext,
  environment,
} from "../environment";
import { usePromise } from "../utils/usePromise";
import { Header } from "./Header";
import { MenuItem, PageNav } from "./PageNav";
import { routes } from "../routes";
import { useAccountAlerts } from "../utils/useAccountAlerts";

function mapRoutes(content: MenuItem[]): RouteObject[] {
  return content
    .map((item) => {
      if ("children" in item) {
        return mapRoutes(item.children);
      }
      return {
        ...item,
        element:
          "path" in item
            ? routes.find((r) => r.path === (item.id ?? item.path))?.element
            : undefined,
      };
    })
    .flat();
}

export const Root = () => {
  const context = useEnvironment<Environment>();
  const { addAlert, addError } = useAccountAlerts();
  const [content, setContent] = useState<RouteObject[]>();

  usePromise(
    (signal) => fetchContentJson({ signal, context }),
    (content) => {
      setContent([
        {
          path: decodeURIComponent(new URL(environment.baseUrl).pathname),
          element: (
            <Page header={<Header />} sidebar={<PageNav />} isManagedSidebar>
              <Suspense fallback={<Spinner />}>
                <Outlet />
              </Suspense>
            </Page>
          ),
          errorElement: <ErrorPage />,
          children: mapRoutes(content),
        },
      ]);

      const kcActionContext: KcActionContext = environment.kcActionContext;
      console.log("Page was loaded!!! kcContext: " + kcActionContext + " action: " + kcActionContext.kcAction + JSON.stringify(kcActionContext));
      addError("unLinkError", "foo bar error");
    },
  );

  if (!content) {
    return <Spinner />;
  }
  return <RouterProvider router={createBrowserRouter(content)} />;
};
