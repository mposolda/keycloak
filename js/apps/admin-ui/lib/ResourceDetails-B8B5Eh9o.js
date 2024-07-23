import { jsx as e, jsxs as I, Fragment as R } from "react/jsx-runtime";
import { useState as m } from "react";
import { u as T, b5 as q, m as H, bd as L, bf as w, bg as C, b6 as M, b7 as E, b8 as G, aP as K, p as U, b as j, b9 as W, ba as Y, aY as J, bm as Q, d as F, bb as D, V as X, aG as Z, P as $, F as ee, c as ae, x as g, bn as re, bo as se, bp as te, A as ne, B as N, g as oe, aO as le, bq as ie, aN as ce } from "./index-9Q0kv6Xn.js";
import { useTranslation as V } from "react-i18next";
import { useNavigate as ue, Link as de } from "react-router-dom";
const me = ({ clientId: l }) => {
  const { adminClient: a } = T(), { t: i } = V(), { control: y } = q(), [A, v] = m(!1), [u, S] = m(), [p, b] = m("");
  H(
    () => {
      const o = {
        id: l,
        first: 0,
        max: 20,
        deep: !1,
        name: p
      };
      return a.clients.listAllScopes(o);
    },
    S,
    [p]
  );
  const h = (o) => o.map((r) => /* @__PURE__ */ e(K, { value: r, children: r.name }, r.id));
  return u ? /* @__PURE__ */ e(
    w,
    {
      label: i("authorizationScopes"),
      labelIcon: /* @__PURE__ */ e(C, { helpText: i("clientScopesHelp"), fieldLabelId: "scopes" }),
      fieldId: "scopes",
      children: /* @__PURE__ */ e(
        M,
        {
          name: "scopes",
          defaultValue: [],
          control: y,
          render: ({ field: o }) => /* @__PURE__ */ e(
            E,
            {
              toggleId: "scopes",
              variant: G.typeaheadMulti,
              chipGroupProps: {
                numChips: 3,
                expandedText: i("hide"),
                collapsedText: i("showRemaining")
              },
              onToggle: (r) => v(r),
              isOpen: A,
              selections: o.value.map((r) => r.name),
              onFilter: (r) => (b(r), h(u)),
              onSelect: (r) => {
                const s = typeof r == "string" ? r : r.name, t = o.value.find(
                  (c) => c.name === s
                ) ? o.value.filter((c) => c.name !== s) : [...o.value, r];
                o.onChange(t);
              },
              onClear: () => {
                b(""), o.onChange([]);
              },
              typeAheadAriaLabel: i("authorizationScopes"),
              children: h(u)
            }
          )
        }
      )
    }
  ) : /* @__PURE__ */ e(L, {});
};
function ve() {
  const { adminClient: l } = T(), { t: a } = V(), [i, y] = m(), [A, v] = m(), [u, S] = m(), { addAlert: p, addError: b } = U(), h = j({
    mode: "onChange"
  }), { setValue: o, handleSubmit: r } = h, { id: s, resourceId: t, realm: c } = W(), x = ue(), k = (n = {}) => {
    ce(n, o);
  }, { hasAccess: z } = Y(), P = !z("manage-authorization");
  H(
    () => Promise.all([
      l.clients.findOne({ id: s }),
      t ? l.clients.getResource({ id: s, resourceId: t }) : Promise.resolve(void 0),
      t ? l.clients.listPermissionsByResource({ id: s, resourceId: t }) : Promise.resolve(void 0)
    ]),
    ([n, d, f]) => {
      if (!n)
        throw new Error(a("notFound"));
      y(n), S(f), v(d), k(d);
    },
    []
  );
  const O = async (n) => {
    const d = le(n);
    try {
      if (t)
        await l.clients.updateResource({ id: s, resourceId: t }, d);
      else {
        const f = await l.clients.createResource(
          { id: s },
          d
        );
        v(d), x(ie({ realm: c, id: s, resourceId: f._id }));
      }
      p(
        a((t ? "update" : "create") + "ResourceSuccess"),
        F.success
      );
    } catch (f) {
      b("resourceSaveError", f);
    }
  }, [B, _] = J({
    titleKey: "deleteResource",
    children: /* @__PURE__ */ I(R, { children: [
      a("deleteResourceConfirm"),
      u?.length !== 0 && /* @__PURE__ */ e(
        Q,
        {
          variant: "warning",
          isInline: !0,
          isPlain: !0,
          title: a("deleteResourceWarning"),
          className: "pf-v5-u-pt-lg",
          children: /* @__PURE__ */ e("p", { className: "pf-v5-u-pt-xs", children: u?.map((n) => /* @__PURE__ */ e("strong", { className: "pf-v5-u-pr-md", children: n.name }, n.id)) })
        }
      )
    ] }),
    continueButtonLabel: "confirm",
    onConfirm: async () => {
      try {
        await l.clients.delResource({
          id: s,
          resourceId: t
        }), p(a("resourceDeletedSuccess"), F.success), x(D({ realm: c, clientId: s, tab: "resources" }));
      } catch (n) {
        b("resourceDeletedError", n);
      }
    }
  });
  return i ? /* @__PURE__ */ I(R, { children: [
    /* @__PURE__ */ e(_, {}),
    /* @__PURE__ */ e(
      X,
      {
        titleKey: t ? A?.name : "createResource",
        dropdownItems: t ? [
          /* @__PURE__ */ e(
            Z,
            {
              "data-testid": "delete-resource",
              isDisabled: P,
              onClick: () => B(),
              children: a("delete")
            },
            "delete"
          )
        ] : void 0
      }
    ),
    /* @__PURE__ */ e($, { variant: "light", children: /* @__PURE__ */ e(ee, { ...h, children: /* @__PURE__ */ I(
      ae,
      {
        isHorizontal: !0,
        role: "manage-authorization",
        className: "keycloak__resource-details__form",
        onSubmit: r(O),
        children: [
          /* @__PURE__ */ e(
            g,
            {
              name: t ? "owner.name" : "",
              label: a("owner"),
              labelIcon: a("ownerHelp"),
              defaultValue: i.clientId,
              readOnly: !0
            }
          ),
          /* @__PURE__ */ e(
            g,
            {
              name: "name",
              label: a("name"),
              labelIcon: a("resourceNameHelp"),
              rules: { required: a("required") }
            }
          ),
          /* @__PURE__ */ e(
            g,
            {
              name: "displayName",
              label: a("displayName"),
              labelIcon: a("displayNameHelp"),
              rules: { required: a("required") }
            }
          ),
          /* @__PURE__ */ e(
            g,
            {
              name: "type",
              label: a("type"),
              labelIcon: a("resourceDetailsTypeHelp")
            }
          ),
          /* @__PURE__ */ e(
            w,
            {
              label: a("uris"),
              fieldId: "uris",
              labelIcon: /* @__PURE__ */ e(C, { helpText: a("urisHelp"), fieldLabelId: "uris" }),
              children: /* @__PURE__ */ e(
                re,
                {
                  name: "uris",
                  type: "url",
                  "aria-label": a("uris"),
                  addButtonLabel: "addUri"
                }
              )
            }
          ),
          /* @__PURE__ */ e(me, { clientId: s }),
          /* @__PURE__ */ e(
            g,
            {
              name: "icon_uri",
              label: a("iconUri"),
              labelIcon: a("iconUriHelp"),
              type: "url"
            }
          ),
          /* @__PURE__ */ e(
            se,
            {
              name: "ownerManagedAccess",
              label: a("ownerManagedAccess"),
              labelIcon: a("ownerManagedAccessHelp")
            }
          ),
          /* @__PURE__ */ e(
            w,
            {
              hasNoPaddingTop: !0,
              label: a("resourceAttribute"),
              labelIcon: /* @__PURE__ */ e(
                C,
                {
                  helpText: a("resourceAttributeHelp"),
                  fieldLabelId: "resourceAttribute"
                }
              ),
              fieldId: "resourceAttribute",
              children: /* @__PURE__ */ e(te, { name: "attributes", isDisabled: P })
            }
          ),
          /* @__PURE__ */ e(ne, { children: /* @__PURE__ */ I("div", { className: "pf-v5-u-mt-md", children: [
            /* @__PURE__ */ e(
              N,
              {
                variant: oe.primary,
                type: "submit",
                "data-testid": "save",
                children: a("save")
              }
            ),
            /* @__PURE__ */ e(
              N,
              {
                variant: "link",
                "data-testid": "cancel",
                component: (n) => /* @__PURE__ */ e(
                  de,
                  {
                    ...n,
                    to: D({
                      realm: c,
                      clientId: s,
                      tab: "resources"
                    })
                  }
                ),
                children: a("cancel")
              }
            )
          ] }) })
        ]
      }
    ) }) })
  ] }) : /* @__PURE__ */ e(L, {});
}
export {
  ve as default
};
//# sourceMappingURL=ResourceDetails-B8B5Eh9o.js.map
