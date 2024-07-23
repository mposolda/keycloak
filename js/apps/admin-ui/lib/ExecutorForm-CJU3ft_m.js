import { jsxs as u, Fragment as U, jsx as o } from "react/jsx-runtime";
import { u as q, b9 as k, p as J, bF as Q, b as W, m as X, V as Y, P as Z, c as _, bf as $, bg as F, b6 as ee, b7 as te, b8 as oe, aP as re, F as ce, aL as se, A as ae, B as g, bG as b, d as ne } from "./index-9Q0kv6Xn.js";
import { useState as l } from "react";
import { useTranslation as ie } from "react-i18next";
import { useNavigate as le, Link as V } from "react-router-dom";
const I = {
  config: {},
  executor: ""
};
function ge() {
  const { adminClient: h } = q(), { t: s } = ie(), C = le(), { realm: d, profileName: n } = k(), { executorName: i } = k(), { addAlert: A, addError: G } = J(), [H, P] = l(!1), x = Q().componentTypes?.["org.keycloak.services.clientpolicy.executor.ClientPolicyExecutorProvider"], [f, N] = l([]), [O, B] = l([]), [T, L] = l([]), [D, j] = l([]), p = W({ defaultValues: I }), { control: w, reset: v, handleSubmit: z } = p, c = !!i, y = (e) => {
    const r = e.find((a) => a.name === n)?.executors?.find(
      (a) => a.executor === i
    );
    r && v({ config: r.configuration });
  };
  X(
    () => h.clientPolicies.listProfiles({ includeGlobalProfiles: !0 }),
    (e) => {
      L(e.globalProfiles), j(e.profiles), y(e.profiles), y(e.globalProfiles);
    },
    []
  );
  const K = async () => {
    const e = p.getValues(), t = D.map((r) => {
      if (r.name !== n)
        return r;
      const a = (r.executors ?? []).concat({
        executor: e.executor,
        configuration: e.config || {}
      });
      if (c) {
        const S = r.executors.find(
          (R) => R.executor === i
        );
        S.configuration = {
          ...S.configuration,
          ...e.config
        };
      }
      return c ? r : {
        ...r,
        executors: a
      };
    });
    try {
      await h.clientPolicies.createProfiles({
        profiles: t,
        globalProfiles: T
      }), A(
        s(c ? "updateExecutorSuccess" : "addExecutorSuccess"),
        ne.success
      ), C(b({ realm: d, profileName: n }));
    } catch (r) {
      G(c ? "updateExecutorError" : "addExecutorError", r);
    }
  }, m = T.find(
    (e) => e.name === n
  ), E = x?.find(
    (e) => e.id === i
  ), M = E?.properties.map(
    (e) => {
      const t = c ? e.defaultValue : "";
      return {
        ...e,
        defaultValue: t
      };
    }
  );
  return /* @__PURE__ */ u(U, { children: [
    /* @__PURE__ */ o(
      Y,
      {
        titleKey: c ? i : s("addExecutor"),
        divider: !0
      }
    ),
    /* @__PURE__ */ u(Z, { variant: "light", children: [
      /* @__PURE__ */ u(
        _,
        {
          isHorizontal: !0,
          role: "manage-realm",
          className: "pf-v5-u-mt-lg",
          isReadOnly: !!m,
          children: [
            /* @__PURE__ */ o(
              $,
              {
                label: s("executorType"),
                fieldId: "kc-executorType",
                labelIcon: f.length > 0 && f[0].helpText !== "" ? /* @__PURE__ */ o(
                  F,
                  {
                    helpText: f[0].helpText,
                    fieldLabelId: "executorTypeHelpText"
                  }
                ) : c ? /* @__PURE__ */ o(
                  F,
                  {
                    helpText: E?.helpText,
                    fieldLabelId: "executorTypeHelpText"
                  }
                ) : void 0,
                children: /* @__PURE__ */ o(
                  ee,
                  {
                    name: "executor",
                    defaultValue: "",
                    control: w,
                    render: ({ field: e }) => /* @__PURE__ */ o(
                      te,
                      {
                        toggleId: "kc-executor",
                        placeholderText: "Select an executor",
                        onToggle: (t) => P(t),
                        onSelect: (t) => {
                          v({ ...I, executor: t.toString() });
                          const r = x?.filter(
                            (a) => a.id === t
                          );
                          N(r ?? []), B(
                            r?.[0].properties ?? []
                          ), P(!1);
                        },
                        selections: c ? i : e.value,
                        variant: oe.single,
                        "data-testid": "executorType-select",
                        "aria-label": s("executorType"),
                        isOpen: H,
                        maxHeight: 580,
                        isDisabled: c,
                        children: x?.map((t) => /* @__PURE__ */ o(
                          re,
                          {
                            selected: t.id === e.value,
                            value: t.id,
                            description: t.helpText,
                            children: t.id
                          },
                          t.id
                        ))
                      }
                    )
                  }
                )
              }
            ),
            /* @__PURE__ */ o(ce, { ...p, children: /* @__PURE__ */ o(
              se,
              {
                properties: c ? M : O
              }
            ) }),
            !m && /* @__PURE__ */ u(ae, { children: [
              /* @__PURE__ */ o(
                g,
                {
                  variant: "primary",
                  onClick: () => z(K)(),
                  "data-testid": "addExecutor-saveBtn",
                  children: s(c ? "save" : "add")
                }
              ),
              /* @__PURE__ */ o(
                g,
                {
                  variant: "link",
                  component: (e) => /* @__PURE__ */ o(
                    V,
                    {
                      ...e,
                      to: b({ realm: d, profileName: n })
                    }
                  ),
                  "data-testid": "addExecutor-cancelBtn",
                  children: s("cancel")
                }
              )
            ] })
          ]
        }
      ),
      c && m && /* @__PURE__ */ o("div", { className: "kc-backToProfile", children: /* @__PURE__ */ o(
        g,
        {
          component: (e) => /* @__PURE__ */ o(V, { ...e, to: b({ realm: d, profileName: n }) }),
          variant: "primary",
          children: s("back")
        }
      ) })
    ] })
  ] });
}
export {
  ge as default
};
//# sourceMappingURL=ExecutorForm-CJU3ft_m.js.map
