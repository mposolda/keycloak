import { jsxs as o, Fragment as v, jsx as a } from "react/jsx-runtime";
import { u as h, p as z, a as p, b, V as f, P as S, c as A, F, bw as O, A as w, T as y, B as E, bE as T, bA as x, bC as C } from "./index-9Q0kv6Xn.js";
import { useTranslation as P } from "react-i18next";
import { useNavigate as j, Link as k } from "react-router-dom";
function K() {
  const { adminClient: s } = h(), { addAlert: c, addError: d } = z(), { t } = P(), l = j(), { realm: e } = p(), i = b(), { handleSubmit: m, formState: g } = i;
  return /* @__PURE__ */ o(v, { children: [
    /* @__PURE__ */ a(f, { titleKey: "createOrganization" }),
    /* @__PURE__ */ a(S, { variant: "light", children: /* @__PURE__ */ a(A, { role: "anyone", onSubmit: m(async (n) => {
      try {
        const r = x(n), { id: u } = await s.organizations.create(r);
        c(t("organizationSaveSuccess")), l(C({ realm: e, id: u, tab: "settings" }));
      } catch (r) {
        d("organizationSaveError", r);
      }
    }), isHorizontal: !0, children: /* @__PURE__ */ o(F, { ...i, children: [
      /* @__PURE__ */ a(O, {}),
      /* @__PURE__ */ o(w, { children: [
        /* @__PURE__ */ a(y, { formState: g, "data-testid": "save", children: t("save") }),
        /* @__PURE__ */ a(
          E,
          {
            "data-testid": "cancel",
            variant: "link",
            component: (n) => /* @__PURE__ */ a(k, { ...n, to: T({ realm: e }) }),
            children: t("cancel")
          }
        )
      ] })
    ] }) }) })
  ] });
}
export {
  K as default
};
//# sourceMappingURL=NewOrganization-DvCZfOG3.js.map
