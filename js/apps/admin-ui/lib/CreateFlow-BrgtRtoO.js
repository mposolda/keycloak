import { jsxs as r, Fragment as f, jsx as t } from "react/jsx-runtime";
import { u as h, a as F, p as b, b as v, V as y, P as g, F as S, c as A, N as T, E as C, A as I, T as E, B as H, t as N, d as i, e as P } from "./index-9Q0kv6Xn.js";
import { useTranslation as V } from "react-i18next";
import { useNavigate as k, Link as x } from "react-router-dom";
const c = ["basic-flow", "client-flow"];
function K() {
  const { adminClient: u } = h(), { t: e } = V(), d = k(), { realm: n } = F(), { addAlert: l } = b(), s = v(), { handleSubmit: m, formState: p } = s;
  return /* @__PURE__ */ r(f, { children: [
    /* @__PURE__ */ t(y, { titleKey: "createFlow", subKey: "authenticationCreateFlowHelp" }),
    /* @__PURE__ */ t(g, { variant: "light", children: /* @__PURE__ */ t(S, { ...s, children: /* @__PURE__ */ r(
      A,
      {
        isHorizontal: !0,
        role: "manage-authorization",
        onSubmit: m(async (a) => {
          const w = { ...a, builtIn: !1, topLevel: !0 };
          try {
            const { id: o } = await u.authenticationManagement.createFlow(w);
            l(e("flowCreatedSuccess"), i.success), d(
              P({
                realm: n,
                id: o,
                usedBy: "notInUse"
              })
            );
          } catch (o) {
            l(
              e("flowCreateError", {
                error: o.response?.data?.errorMessage || o
              }),
              i.danger
            );
          }
        }),
        children: [
          /* @__PURE__ */ t(T, {}),
          /* @__PURE__ */ t(
            C,
            {
              name: "providerId",
              label: e("flowType"),
              labelIcon: e("topLevelFlowTypeHelp"),
              "aria-label": e("selectFlowType"),
              controller: { defaultValue: c[0] },
              options: c.map((a) => ({
                key: a,
                value: e(`top-level-flow-type.${a}`)
              }))
            }
          ),
          /* @__PURE__ */ r(I, { children: [
            /* @__PURE__ */ t(
              E,
              {
                formState: p,
                "data-testid": "create",
                allowInvalid: !0,
                allowNonDirty: !0,
                children: e("create")
              }
            ),
            /* @__PURE__ */ t(
              H,
              {
                "data-testid": "cancel",
                variant: "link",
                component: (a) => /* @__PURE__ */ t(x, { ...a, to: N({ realm: n }) }),
                children: e("cancel")
              }
            )
          ] })
        ]
      }
    ) }) })
  ] });
}
export {
  K as default
};
//# sourceMappingURL=CreateFlow-BrgtRtoO.js.map
