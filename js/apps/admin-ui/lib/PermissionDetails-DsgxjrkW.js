import { jsx as s, jsxs as v, Fragment as k } from "react/jsx-runtime";
import { u as G, b5 as W, m as _, b6 as $, b7 as Y, b8 as N, aP as Z, b as Q, b9 as X, p as ee, ba as se, aY as ae, g as B, d as H, bb as z, bc as ie, bd as oe, V as te, be as re, aG as ne, P as le, c as ce, F as de, x as j, aJ as pe, bf as P, bg as C, bh as ue, bi as E, bj as U, bk as K, R as me, A as be, B as M, bl as fe } from "./index-9Q0kv6Xn.js";
import { useState as f, useRef as he } from "react";
import { useTranslation as J } from "react-i18next";
import { useNavigate as ge, Link as ye } from "react-router-dom";
const Se = ({
  clientId: c,
  resourceId: e,
  preSelected: u
}) => {
  const { adminClient: h } = G(), { t: F } = J(), {
    control: R,
    getValues: O,
    setValue: A,
    formState: { errors: r }
  } = W(), [m, n] = f([]), [a, g] = f(
    []
  ), [p, b] = f(""), [y, D] = f(!1), S = he(!0), x = O("scopes"), w = (l) => l.map((t) => /* @__PURE__ */ s(Z, { value: t, children: t.name }, t.id));
  return _(
    async () => e ? (e && !S.current && A("scopes", []), S.current = !1, h.clients.listScopesByResource({
      id: c,
      resourceName: e
    })) : h.clients.listAllScopes(
      Object.assign(
        { id: c, deep: !1 },
        p === "" ? null : { name: p }
      )
    ),
    (l) => {
      n(l), p || g(
        l.filter((t) => x?.includes(t.id))
      );
    },
    [e, p]
  ), /* @__PURE__ */ s(
    $,
    {
      name: "scopes",
      defaultValue: u ? [u] : [],
      control: R,
      rules: { validate: (l) => l.length > 0 },
      render: ({ field: l }) => /* @__PURE__ */ s(
        Y,
        {
          toggleId: "scopes",
          variant: N.typeaheadMulti,
          onToggle: (t) => D(t),
          onFilter: (t) => (b(t), w(m)),
          onClear: () => {
            l.onChange([]), b("");
          },
          selections: a.map((t) => t.name),
          onSelect: (t) => {
            const T = typeof t == "string" ? a.find((d) => d.name === t) : t, L = a.find((d) => d.id === T.id) ? a.filter((d) => d.id !== T.id) : [...a, T];
            l.onChange(L.map((d) => d.id)), g(L), b("");
          },
          isOpen: y,
          "aria-labelledby": F("scopes"),
          validated: r.scopes ? "error" : "default",
          isDisabled: !!u,
          typeAheadAriaLabel: F("scopes"),
          children: w(m)
        }
      )
    }
  );
};
function Fe() {
  const { adminClient: c } = G(), { t: e } = J(), u = Q({
    mode: "onChange"
  }), {
    control: h,
    reset: F,
    formState: { errors: R },
    handleSubmit: O
  } = u, A = ge(), { id: r, realm: m, permissionType: n, permissionId: a, selectedId: g } = X(), { addAlert: p, addError: b } = ee(), [y, D] = f(), [S, x] = f(!1), { hasAccess: w } = se(), l = !w("manage-authorization");
  _(
    async () => {
      if (!a)
        return {};
      const [i, o, q, V] = await Promise.all([
        c.clients.findOnePermission({
          id: r,
          type: n,
          permissionId: a
        }),
        c.clients.getAssociatedResources({
          id: r,
          permissionId: a
        }),
        c.clients.getAssociatedPolicies({
          id: r,
          permissionId: a
        }),
        c.clients.getAssociatedScopes({
          id: r,
          permissionId: a
        })
      ]);
      if (!i)
        throw new Error(e("notFound"));
      return {
        permission: i,
        resources: o.map((I) => I._id),
        policies: q.map((I) => I.id),
        scopes: V.map((I) => I.id)
      };
    },
    ({ permission: i, resources: o, policies: q, scopes: V }) => {
      F({ ...i, resources: o, policies: q, scopes: V }), i && "resourceType" in i && x(
        !!i.resourceType
      ), D({ ...i, resources: o, policies: q });
    },
    []
  );
  const t = async (i) => {
    try {
      if (a)
        await c.clients.updatePermission(
          { id: r, type: n, permissionId: a },
          i
        );
      else {
        const o = await c.clients.createPermission(
          { id: r, type: n },
          i
        );
        D(o), A(
          fe({
            realm: m,
            id: r,
            permissionType: n,
            permissionId: o.id
          })
        );
      }
      p(
        e((a ? "update" : "create") + "PermissionSuccess"),
        H.success
      );
    } catch (o) {
      b("permissionSaveError", o);
    }
  }, [T, L] = ae({
    titleKey: "deletePermission",
    messageKey: e("deletePermissionConfirm", {
      permission: y?.name
    }),
    continueButtonVariant: B.danger,
    continueButtonLabel: "confirm",
    onConfirm: async () => {
      try {
        await c.clients.delPermission({
          id: r,
          type: n,
          permissionId: a
        }), p(e("permissionDeletedSuccess"), H.success), A(
          z({ realm: m, clientId: r, tab: "permissions" })
        );
      } catch (i) {
        b("permissionDeletedError", i);
      }
    }
  }), d = ie({
    control: h,
    name: "resources",
    defaultValue: []
  });
  return y ? /* @__PURE__ */ v(k, { children: [
    /* @__PURE__ */ s(L, {}),
    /* @__PURE__ */ s(
      te,
      {
        titleKey: a ? y.name : `create${re(n)}BasedPermission`,
        dropdownItems: a ? [
          /* @__PURE__ */ s(
            ne,
            {
              "data-testid": "delete-resource",
              isDisabled: l,
              onClick: () => T(),
              children: e("delete")
            },
            "delete"
          )
        ] : void 0
      }
    ),
    /* @__PURE__ */ s(le, { variant: "light", children: /* @__PURE__ */ s(
      ce,
      {
        isHorizontal: !0,
        role: "manage-authorization",
        onSubmit: O(t),
        children: /* @__PURE__ */ v(de, { ...u, children: [
          /* @__PURE__ */ s(
            j,
            {
              name: "name",
              label: e("name"),
              labelIcon: e("permissionName"),
              rules: {
                required: e("required")
              }
            }
          ),
          /* @__PURE__ */ s(
            pe,
            {
              name: "description",
              label: e("description"),
              labelIcon: e("permissionDescription"),
              rules: {
                maxLength: {
                  value: 255,
                  message: e("maxLength", { length: 255 })
                }
              }
            }
          ),
          /* @__PURE__ */ s(
            P,
            {
              label: e("applyToResourceTypeFlag"),
              fieldId: "applyToResourceTypeFlag",
              labelIcon: /* @__PURE__ */ s(
                C,
                {
                  helpText: e("applyToResourceTypeFlagHelp"),
                  fieldLabelId: "applyToResourceTypeFlag"
                }
              ),
              children: /* @__PURE__ */ s(
                ue,
                {
                  id: "applyToResourceTypeFlag",
                  name: "applyToResourceTypeFlag",
                  label: e("on"),
                  labelOff: e("off"),
                  isChecked: S,
                  onChange: (i, o) => x(o),
                  "aria-label": e("applyToResourceTypeFlag")
                }
              )
            }
          ),
          S ? /* @__PURE__ */ s(
            j,
            {
              name: "resourceType",
              label: e("resourceType"),
              labelIcon: e("resourceTypeHelp"),
              rules: {
                required: {
                  value: n === "scope",
                  message: e("required")
                }
              }
            }
          ) : /* @__PURE__ */ v(
            P,
            {
              label: e("resource"),
              fieldId: "resources",
              labelIcon: /* @__PURE__ */ s(
                C,
                {
                  helpText: e("permissionResources"),
                  fieldLabelId: "resources"
                }
              ),
              isRequired: n !== "scope",
              children: [
                /* @__PURE__ */ s(
                  E,
                  {
                    name: "resources",
                    clientId: r,
                    permissionId: a,
                    preSelected: n === "scope" ? void 0 : g,
                    variant: n === "scope" ? N.typeahead : N.typeaheadMulti,
                    isRequired: n !== "scope"
                  }
                ),
                R.resources && /* @__PURE__ */ s(U, { message: e("required") })
              ]
            }
          ),
          n === "scope" && /* @__PURE__ */ v(
            P,
            {
              label: e("authorizationScopes"),
              fieldId: "scopes",
              labelIcon: /* @__PURE__ */ s(
                C,
                {
                  helpText: e("permissionScopesHelp"),
                  fieldLabelId: "scopesSelect"
                }
              ),
              isRequired: !0,
              children: [
                /* @__PURE__ */ s(
                  Se,
                  {
                    clientId: r,
                    resourceId: d?.[0],
                    preSelected: g
                  }
                ),
                R.scopes && /* @__PURE__ */ s(U, { message: e("required") })
              ]
            }
          ),
          /* @__PURE__ */ s(
            P,
            {
              label: e("policies"),
              fieldId: "policies",
              labelIcon: /* @__PURE__ */ s(
                C,
                {
                  helpText: e("permissionPoliciesHelp"),
                  fieldLabelId: "policies"
                }
              ),
              children: /* @__PURE__ */ s(
                E,
                {
                  name: "policies",
                  clientId: r,
                  permissionId: a
                }
              )
            }
          ),
          /* @__PURE__ */ s(
            P,
            {
              label: e("decisionStrategy"),
              labelIcon: /* @__PURE__ */ s(
                C,
                {
                  helpText: e("permissionDecisionStrategyHelp"),
                  fieldLabelId: "decisionStrategy"
                }
              ),
              fieldId: "policyEnforcementMode",
              hasNoPaddingTop: !0,
              children: /* @__PURE__ */ s(
                $,
                {
                  name: "decisionStrategy",
                  "data-testid": "decisionStrategy",
                  defaultValue: K.UNANIMOUS,
                  control: h,
                  render: ({ field: i }) => /* @__PURE__ */ s(k, { children: Object.values(K).map((o) => /* @__PURE__ */ s(
                    me,
                    {
                      id: o,
                      "data-testid": o,
                      isChecked: i.value === o,
                      isDisabled: l,
                      name: "decisionStrategies",
                      onChange: () => i.onChange(o),
                      label: e(`decisionStrategies.${o}`),
                      className: "pf-v5-u-mb-md"
                    },
                    o
                  )) })
                }
              )
            }
          ),
          /* @__PURE__ */ s(be, { children: /* @__PURE__ */ v("div", { className: "pf-v5-u-mt-md", children: [
            /* @__PURE__ */ s(
              M,
              {
                variant: B.primary,
                type: "submit",
                "data-testid": "save",
                children: e("save")
              }
            ),
            /* @__PURE__ */ s(
              M,
              {
                variant: "link",
                "data-testid": "cancel",
                component: (i) => /* @__PURE__ */ s(
                  ye,
                  {
                    ...i,
                    to: z({
                      realm: m,
                      clientId: r,
                      tab: "permissions"
                    })
                  }
                ),
                children: e("cancel")
              }
            )
          ] }) })
        ] })
      }
    ) })
  ] }) : /* @__PURE__ */ s(oe, {});
}
export {
  Fe as default
};
//# sourceMappingURL=PermissionDetails-DsgxjrkW.js.map
