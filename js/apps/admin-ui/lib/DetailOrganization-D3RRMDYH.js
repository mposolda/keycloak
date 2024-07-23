import { jsx as t, jsxs as o } from "react/jsx-runtime";
import { u as f, p, a as P, b9 as F, b as S, m as A, P as c, F as O, bs as x, bt as B, bu as d, bv as b, c as E, bw as w, A as C, T as D, B as R, bx as V, by as j, bz as k, bA as H, bB as I, bC as G, bD as K } from "./index-9Q0kv6Xn.js";
import { useTranslation as M } from "react-i18next";
function L() {
  const { adminClient: m } = f(), { addAlert: u, addError: h } = p(), { realm: T } = P(), { id: r } = F(), { t: e } = M(), a = S(), l = async (i) => {
    try {
      const s = H(i);
      await m.organizations.updateById({ id: r }, s), u(e("organizationSaveSuccess"));
    } catch (s) {
      h("organizationSaveError", s);
    }
  };
  A(
    () => m.organizations.findOne({ id: r }),
    (i) => {
      if (!i)
        throw new Error(e("notFound"));
      a.reset({
        ...i,
        domains: i.domains?.map((s) => s.name),
        attributes: K(i.attributes)
      });
    },
    [r]
  );
  const n = (i) => I(
    G({
      realm: T,
      id: r,
      tab: i
    })
  ), g = n("settings"), v = n("attributes"), y = n("members"), z = n("identityProviders");
  return /* @__PURE__ */ t(c, { variant: "light", className: "pf-v5-u-p-0", children: /* @__PURE__ */ o(O, { ...a, children: [
    /* @__PURE__ */ t(x, { save: () => l(a.getValues()) }),
    /* @__PURE__ */ o(
      B,
      {
        "data-testid": "organization-tabs",
        "aria-label": e("organization"),
        isBox: !0,
        mountOnEnter: !0,
        children: [
          /* @__PURE__ */ t(
            d,
            {
              id: "settings",
              "data-testid": "settingsTab",
              title: /* @__PURE__ */ t(b, { children: e("settings") }),
              ...g,
              children: /* @__PURE__ */ t(c, { children: /* @__PURE__ */ o(
                E,
                {
                  role: "anyone",
                  onSubmit: a.handleSubmit(l),
                  isHorizontal: !0,
                  children: [
                    /* @__PURE__ */ t(w, {}),
                    /* @__PURE__ */ o(C, { children: [
                      /* @__PURE__ */ t(
                        D,
                        {
                          formState: a.formState,
                          "data-testid": "save",
                          children: e("save")
                        }
                      ),
                      /* @__PURE__ */ t(
                        R,
                        {
                          onClick: () => a.reset(),
                          "data-testid": "reset",
                          variant: "link",
                          children: e("reset")
                        }
                      )
                    ] })
                  ]
                }
              ) })
            }
          ),
          /* @__PURE__ */ t(
            d,
            {
              id: "attributes",
              "data-testid": "attributeTab",
              title: /* @__PURE__ */ t(b, { children: e("attributes") }),
              ...v,
              children: /* @__PURE__ */ t(c, { variant: "light", children: /* @__PURE__ */ t(
                V,
                {
                  form: a,
                  save: l,
                  reset: () => a.reset({
                    ...a.getValues()
                  }),
                  name: "attributes"
                }
              ) })
            }
          ),
          /* @__PURE__ */ t(
            d,
            {
              id: "members",
              "data-testid": "membersTab",
              title: /* @__PURE__ */ t(b, { children: e("members") }),
              ...y,
              children: /* @__PURE__ */ t(j, {})
            }
          ),
          /* @__PURE__ */ t(
            d,
            {
              id: "identityProviders",
              "data-testid": "identityProvidersTab",
              title: /* @__PURE__ */ t(b, { children: e("identityProviders") }),
              ...z,
              children: /* @__PURE__ */ t(k, {})
            }
          )
        ]
      }
    )
  ] }) });
}
export {
  L as default
};
//# sourceMappingURL=DetailOrganization-D3RRMDYH.js.map
