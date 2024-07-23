import { jsxs as c, Fragment as D, jsx as t } from "react/jsx-runtime";
import { useState as w } from "react";
import { u as N, b9 as z, p as F, aH as H, b as k, m as x, br as C, bb as l, V as U, aG as P, P as V, F as B, c as E, x as d, A as T, B as m, g as j, d as q } from "./index-9Q0kv6Xn.js";
import { useTranslation as G } from "react-i18next";
import { useNavigate as K, Link as L } from "react-router-dom";
function W() {
  const { adminClient: n } = N(), { t: e } = G(), { id: i, scopeId: o, realm: s } = z(), p = K(), { addAlert: S, addError: v } = F(), [f, u] = H(), [r, h] = w(), b = k({
    mode: "onChange"
  }), { reset: g, handleSubmit: y } = b;
  x(
    async () => {
      if (o) {
        const a = await n.clients.getAuthorizationScope({
          id: i,
          scopeId: o
        });
        if (!a)
          throw new Error(e("notFound"));
        return a;
      }
    },
    (a) => {
      h(a), g({ ...a });
    },
    []
  );
  const A = async (a) => {
    try {
      o ? (await n.clients.updateAuthorizationScope(
        { id: i, scopeId: o },
        a
      ), h(a)) : (await n.clients.createAuthorizationScope(
        { id: i },
        {
          name: a.name,
          displayName: a.displayName,
          iconUri: a.iconUri
        }
      ), p(l({ realm: s, clientId: i, tab: "scopes" }))), S(
        e((o ? "update" : "create") + "ScopeSuccess"),
        q.success
      );
    } catch (I) {
      v("scopeSaveError", I);
    }
  };
  return /* @__PURE__ */ c(D, { children: [
    /* @__PURE__ */ t(
      C,
      {
        clientId: i,
        open: f,
        toggleDialog: u,
        selectedScope: r,
        refresh: () => p(l({ realm: s, clientId: i, tab: "scopes" }))
      }
    ),
    /* @__PURE__ */ t(
      U,
      {
        titleKey: o ? r?.name : e("createAuthorizationScope"),
        dropdownItems: o ? [
          /* @__PURE__ */ t(
            P,
            {
              "data-testid": "delete-resource",
              onClick: () => u(),
              children: e("delete")
            },
            "delete"
          )
        ] : void 0
      }
    ),
    /* @__PURE__ */ t(V, { variant: "light", children: /* @__PURE__ */ t(B, { ...b, children: /* @__PURE__ */ c(
      E,
      {
        isHorizontal: !0,
        role: "manage-authorization",
        onSubmit: y(A),
        children: [
          /* @__PURE__ */ t(
            d,
            {
              name: "name",
              label: e("name"),
              labelIcon: e("scopeNameHelp"),
              rules: { required: e("required") }
            }
          ),
          /* @__PURE__ */ t(
            d,
            {
              name: "displayName",
              label: e("displayName"),
              labelIcon: e("scopeDisplayNameHelp")
            }
          ),
          /* @__PURE__ */ t(
            d,
            {
              name: "iconUri",
              label: e("iconUri"),
              labelIcon: e("iconUriHelp")
            }
          ),
          /* @__PURE__ */ t(T, { children: /* @__PURE__ */ c("div", { className: "pf-v5-u-mt-md", children: [
            /* @__PURE__ */ t(
              m,
              {
                variant: j.primary,
                type: "submit",
                "data-testid": "save",
                children: e("save")
              }
            ),
            r ? /* @__PURE__ */ t(
              m,
              {
                variant: "link",
                "data-testid": "revert",
                onClick: () => g({ ...r }),
                children: e("revert")
              }
            ) : /* @__PURE__ */ t(
              m,
              {
                variant: "link",
                "data-testid": "cancel",
                component: (a) => /* @__PURE__ */ t(
                  L,
                  {
                    ...a,
                    to: l({
                      realm: s,
                      clientId: i,
                      tab: "scopes"
                    })
                  }
                ),
                children: e("cancel")
              }
            )
          ] }) })
        ]
      }
    ) }) })
  ] });
}
export {
  W as default
};
//# sourceMappingURL=ScopeDetails-C5Ma6EZg.js.map
