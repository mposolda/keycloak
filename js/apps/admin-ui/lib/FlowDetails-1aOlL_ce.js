import { jsx as N, jsxs as re, Fragment as Ne } from "react/jsx-runtime";
import * as Re from "react";
import R, { useEffect as ce, useState as ae, useMemo as Fe, createContext as oh, memo as ue, forwardRef as ah, useRef as ee, useContext as _r, useCallback as ve } from "react";
import { useTranslation as Be, Trans as Dc } from "react-i18next";
import { useParams as Ym, useNavigate as Wm } from "react-router-dom";
import { _ as Bs, f as Ot, B as Ee, g as lt, h as Xm, s as Ur, i as sh, L as ch, C as Zm, u as tn, p as zs, b as br, M as Nn, j as Mn, F as wr, k as An, N as jm, d as vt, l as Qm, m as In, n as Jm, o as ev, P as uh, R as tv, x as nr, E as $c, q as nv, r as Fc, v as Bc, w as rv, y as iv, z as ov, D as av, G as lh, H as sv, I as nn, J as Er, K as Rn, O as dh, Q as xe, S as xr, U as Tn, W as cv, X as Hs, Y as uv, Z as fh, $ as Sr, a0 as lv, a1 as Ln, a2 as hh, a3 as Vs, a4 as Gs, a5 as Us, a6 as dv, a7 as fv, a8 as hv, a9 as Cr, aa as kn, ab as ph, ac as qn, ad as gh, ae as pv, af as mh, ag as Ks, ah as Ys, ai as vh, aj as gv, ak as mv, al as yh, am as Ws, an as vv, ao as Xs, ap as _h, aq as Zs, ar as yv, as as _v, at as bv, au as wv, av as Ev, aw as bh, ax as wh, ay as Eh, az as xh, aA as Sh, aB as Wt, aC as Nr, aD as xv, aE as Ch, aF as Sv, aG as Tt, aH as vs, aI as Cv, aJ as Nv, aK as Mv, aL as Av, A as Iv, aM as Nh, aN as Rv, aO as Tv, aP as Lv, aQ as kv, aR as qv, aS as Ov, aT as Pv, aU as Mh, aV as Ah, aW as Dv, aX as $v, a as Fv, aY as zc, t as Bv, aZ as zv, e as Hv, a_ as Vv, V as Gv, a$ as Uv, b0 as Kv, b1 as Kr, b2 as Yv, b3 as Wv, b4 as Xv } from "./index-9Q0kv6Xn.js";
import "react-dom";
const Ih = (e) => {
  var { className: t = "", isExpanded: n = !1, "aria-controls": r = "", "aria-label": i = "Details", rowid: o = "", id: a, buttonProps: s } = e, u = Bs(e, ["className", "isExpanded", "aria-controls", "aria-label", "rowid", "id", "buttonProps"]);
  return Re.createElement(
    "div",
    Object.assign({ className: Ot(Ur.dataListItemControl, t) }, u),
    Re.createElement(
      "div",
      { className: Ot(Ur.dataListToggle) },
      Re.createElement(
        Ee,
        Object.assign({ id: a, variant: lt.plain, "aria-controls": r !== "" && r, "aria-label": i, "aria-labelledby": i !== "Details" ? null : `${o} ${a}`, "aria-expanded": n }, s),
        Re.createElement(
          "div",
          { className: Ot(Ur.dataListToggleIcon) },
          Re.createElement(Xm, null)
        )
      )
    )
  );
};
Ih.displayName = "DataListToggle";
const Pt = {
  modifiers: {
    compact: "pf-m-compact",
    selected: "pf-m-selected",
    disabled: "pf-m-disabled"
  },
  themeDark: "pf-v5-theme-dark",
  toggleGroup: "pf-v5-c-toggle-group",
  toggleGroupButton: "pf-v5-c-toggle-group__button",
  toggleGroupIcon: "pf-v5-c-toggle-group__icon",
  toggleGroupItem: "pf-v5-c-toggle-group__item",
  toggleGroupText: "pf-v5-c-toggle-group__text"
};
var rr;
(function(e) {
  e.icon = "icon", e.text = "text";
})(rr || (rr = {}));
const ys = ({ variant: e, children: t }) => Re.createElement("span", { className: Ot(e === "icon" && Pt.toggleGroupIcon, e === "text" && Pt.toggleGroupText) }, t);
ys.displayName = "ToggleGroupItemElement";
const ir = (e) => {
  var { text: t, icon: n, className: r, isDisabled: i = !1, isSelected: o = !1, "aria-label": a = "", onChange: s = () => {
  }, buttonId: u = "" } = e, l = Bs(e, ["text", "icon", "className", "isDisabled", "isSelected", "aria-label", "onChange", "buttonId"]);
  const c = (d) => {
    s(d, !o);
  };
  return !a && n && !t && console.warn("An accessible aria-label is required when using the toggle group item icon variant."), Re.createElement(
    "div",
    Object.assign({ className: Ot(Pt.toggleGroupItem, r) }, l),
    Re.createElement(
      "button",
      Object.assign({ type: "button", className: Ot(Pt.toggleGroupButton, o && Pt.modifiers.selected), "aria-pressed": o, onClick: c }, a && { "aria-label": a }, i && { disabled: !0 }, u && { id: u }),
      n ? Re.createElement(ys, { variant: rr.icon }, n) : null,
      t ? Re.createElement(ys, { variant: rr.text }, t) : null
    )
  );
};
ir.displayName = "ToggleGroupItem";
const Rh = (e) => {
  var { className: t, children: n, isCompact: r = !1, areAllGroupsDisabled: i = !1, "aria-label": o } = e, a = Bs(e, ["className", "children", "isCompact", "areAllGroupsDisabled", "aria-label"]);
  const s = Re.Children.map(n, (u) => Re.isValidElement(u) && u.type === ir ? Re.cloneElement(u, i ? { isDisabled: !0 } : {}) : u);
  return Re.createElement("div", Object.assign({ className: Ot(Pt.toggleGroup, r && Pt.modifiers.compact, t), role: "group", "aria-label": o }, a), s);
};
Rh.displayName = "ToggleGroup";
const Zv = {
  name: "DomainIcon",
  height: 1024,
  width: 1024,
  svgPath: "M544,511.9 C561.476067,511.948945 575.664266,525.962873 575.994253,543.371439 L576,543.9 L576,991.9 C575.951055,1009.37607 561.937127,1023.56427 544.528561,1023.89425 L544,1023.9 L352,1023.9 C334.523933,1023.85105 320.335734,1009.83713 320.005747,992.428561 L320,991.9 L320,543.9 C320.048945,526.423933 334.062873,512.235734 351.471439,511.905747 L352,511.9 L544,511.9 Z M704,576 L704,960 L640,960 L640,576 L704,576 Z M512,896 L384,896 L384,960 L512,960 L512,896 Z M960,513.1 L960,513.2 C960,665.4 884.1,799.9 768,880.9 L768,880.9 L768,799.4 C773.3,794.6 778.4,789.8 783.5,784.7 C855.624209,712.728348 896.108133,614.991161 896,513.1 L896,513.1 L960,513.1 Z M149.8,385 C100.714385,524.561202 135.973879,679.905126 240.5,784.6 C245.5,789.7 250.7,794.6 256,799.3 L256,799.3 L256,880.8 C139.9,799.8 63.9999013,665.3 63.9999013,513.1 C63.9712238,469.725105 70.236499,426.575548 82.6,385 L82.6,385 Z M512.1,704 L384,704 L384,832 L512.1,832 L512.1,704 Z M512,576 L448,576 L448,640 L512,640 L512,576 Z M864,-1.13686838e-13 C881.496381,-1.13686838e-13 895.713128,14.0417829 895.995713,31.4708215 L896,32 L896,406 C896,423.496381 881.958217,437.713128 864.529179,437.995713 L864,438 L608,438 C590.503619,438 576.286872,423.958217 576.004287,406.529179 L576,406 L576,32 C576,14.5036191 590.041783,0.286872383 607.470821,0.00428708574 L608,-1.13686838e-13 L864,-1.13686838e-13 Z M1024,64 L1024,384 L960,384 L960,64 L1024,64 Z M832,256 L640,256 L640,352 L832,352 L832,256 Z M224,-5.68434189e-14 C241.476067,0.0489452394 255.664266,14.0628726 255.994253,31.4714395 L256,32 L256,288 C255.951055,305.476067 241.937127,319.664266 224.528561,319.994253 L224,320 L32,320 C14.5239331,319.951055 0.335734448,305.937127 0.00574685353,288.528561 L0,288 L0,32 C0.0489452394,14.5239331 14.0628726,0.335734448 31.4714395,0.00574685353 L32,-5.68434189e-14 L224,-5.68434189e-14 Z M192,192 L64,192 L64,256 L192,256 L192,192 Z M512,65 L512,129 C460.642759,128.90985 409.795141,139.181409 362.5,159.2 C347.917219,165.399771 333.724426,172.47947 320,180.4 L320,180.4 L320,108.2 C380.012207,79.7623165 445.590913,65.0071076 512,65 L512,65 Z M832,64 L736,64 L736,160 L832,160 L832,64 Z M192,64 L128,64 L128,128 L192,128 L192,64 Z",
  yOffset: 0,
  xOffset: 0
}, jv = sh(Zv), Qv = {
  name: "TableIcon",
  height: 512,
  width: 512,
  svgPath: "M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64v-96h160v96zm0-160H64v-96h160v96zm224 160H288v-96h160v96zm0-160H288v-96h160v96z",
  yOffset: 0,
  xOffset: 0
}, Jv = sh(Qv), ey = "_icon_1gmts_2", ty = {
  icon: ey
}, ny = () => {
  const { t: e } = Be();
  return /* @__PURE__ */ N(ch, { icon: /* @__PURE__ */ N(Zm, { className: ty.icon }), children: e("buildIn") });
}, ry = ({ flow: e, toggleDialog: t }) => {
  const { adminClient: n } = tn(), { t: r } = Be(), { addAlert: i, addError: o } = zs(), a = br({ mode: "onChange" }), { reset: s, handleSubmit: u } = a;
  ce(() => s(e), [e]);
  const l = async (c) => {
    try {
      await n.authenticationManagement.updateFlow(
        { flowId: e.id },
        { ...e, ...c }
      ), i(r("updateFlowSuccess"), vt.success);
    } catch (d) {
      o("updateFlowError", d);
    }
    t();
  };
  return /* @__PURE__ */ N(
    Nn,
    {
      title: r("editFlow"),
      onClose: t,
      variant: Mn.small,
      actions: [
        /* @__PURE__ */ N(
          Ee,
          {
            "data-testid": "confirm",
            type: "submit",
            form: "edit-flow-form",
            children: r("edit")
          },
          "confirm"
        ),
        /* @__PURE__ */ N(
          Ee,
          {
            "data-testid": "cancel",
            variant: lt.link,
            onClick: () => t(),
            children: r("cancel")
          },
          "cancel"
        )
      ],
      isOpen: !0,
      children: /* @__PURE__ */ N(wr, { ...a, children: /* @__PURE__ */ N(
        An,
        {
          id: "edit-flow-form",
          onSubmit: u(l),
          isHorizontal: !0,
          children: /* @__PURE__ */ N(jm, {})
        }
      ) })
    }
  );
}, iy = ({
  list: e,
  setValue: t
}) => /* @__PURE__ */ N(uh, { variant: "light", className: "pf-v5-u-py-lg", children: /* @__PURE__ */ N(An, { isHorizontal: !0, children: e?.map((n) => /* @__PURE__ */ N(
  tv,
  {
    id: n.id,
    name: "provider",
    label: n.displayName,
    "data-testid": n.id,
    description: n.description,
    onChange: () => {
      t(n);
    }
  },
  n.id
)) }) }), js = ({ name: e, type: t, onSelect: n }) => {
  const { adminClient: r } = tn(), { t: i } = Be(), [o, a] = ae(), [s, u] = ae(), [l, c] = ae(10), [d, f] = ae(0), [h, g] = ae(""), p = Qm();
  In(
    async () => {
      switch (t) {
        case "client":
          return r.authenticationManagement.getClientAuthenticatorProviders();
        case "form":
          return r.authenticationManagement.getFormActionProviders();
        case "condition":
          return (await r.authenticationManagement.getAuthenticatorProviders()).filter(yr);
        case "basic":
        default:
          return (await r.authenticationManagement.getAuthenticatorProviders()).filter((b) => !yr(b));
      }
    },
    (v) => u(v),
    []
  );
  const m = Fe(() => {
    const v = h.trim().toLowerCase();
    return p(s ?? [], Jm("displayName")).filter(
      ({ displayName: b, description: w }) => b?.toLowerCase().includes(v) || w?.toLowerCase().includes(v)
    ).slice(d, d + l + 1);
  }, [s, h, d, l]);
  return /* @__PURE__ */ N(
    Nn,
    {
      variant: Mn.medium,
      isOpen: !0,
      title: i("addStepTo", { name: e }),
      onClose: () => n(),
      actions: [
        /* @__PURE__ */ N(
          Ee,
          {
            id: "modal-add",
            "data-testid": "modal-add",
            onClick: () => n(o),
            children: i("add")
          },
          "add"
        ),
        /* @__PURE__ */ N(
          Ee,
          {
            "data-testid": "cancel",
            id: "modal-cancel",
            variant: lt.link,
            onClick: () => {
              n();
            },
            children: i("cancel")
          },
          "cancel"
        )
      ],
      children: s && /* @__PURE__ */ N(
        ev,
        {
          count: m.length || 0,
          first: d,
          max: l,
          onNextClick: f,
          onPreviousClick: f,
          onPerPageSelect: (v, b) => {
            f(v), c(b);
          },
          inputGroupName: "search",
          inputGroupPlaceholder: i("search"),
          inputGroupOnEnter: g,
          children: /* @__PURE__ */ N(
            iy,
            {
              list: m.slice(0, l),
              setValue: a
            }
          )
        }
      )
    }
  );
}, Hc = ["basic-flow", "form-flow"], Qs = ({
  name: e,
  onConfirm: t,
  onCancel: n
}) => {
  const { adminClient: r } = tn(), { t: i } = Be(), o = br(), [a, s] = ae();
  return In(
    () => r.authenticationManagement.getFormProviders(),
    s,
    []
  ), ce(() => {
    a?.length === 1 && o.setValue("provider", a[0].id);
  }, [a]), /* @__PURE__ */ N(
    Nn,
    {
      variant: Mn.medium,
      title: i("addStepTo", { name: e }),
      onClose: n,
      actions: [
        /* @__PURE__ */ N(
          Ee,
          {
            "data-testid": "modal-add",
            type: "submit",
            form: "sub-flow-form",
            children: i("add")
          },
          "add"
        ),
        /* @__PURE__ */ N(
          Ee,
          {
            "data-testid": "cancel",
            variant: lt.link,
            onClick: n,
            children: i("cancel")
          },
          "cancel"
        )
      ],
      isOpen: !0,
      children: /* @__PURE__ */ N(
        An,
        {
          id: "sub-flow-form",
          onSubmit: o.handleSubmit(t),
          isHorizontal: !0,
          children: /* @__PURE__ */ re(wr, { ...o, children: [
            /* @__PURE__ */ N(
              nr,
              {
                name: "name",
                label: i("name"),
                labelIcon: i("clientIdHelp"),
                rules: { required: { value: !0, message: i("required") } }
              }
            ),
            /* @__PURE__ */ N(
              nr,
              {
                name: "description",
                label: i("description"),
                labelIcon: i("flowNameDescriptionHelp")
              }
            ),
            /* @__PURE__ */ N(
              $c,
              {
                name: "type",
                menuAppendTo: "parent",
                label: i("flowType"),
                options: Hc.map((u) => ({
                  key: u,
                  value: i(`flow-type.${u}`)
                })),
                controller: { defaultValue: Hc[0] }
              }
            ),
            a && a.length > 1 && /* @__PURE__ */ N(
              $c,
              {
                name: "provider",
                label: i("provider"),
                labelIcon: i("authenticationFlowTypeHelp"),
                options: a.map((u) => ({
                  key: u.id,
                  value: u.displayName
                })),
                controller: { defaultValue: "" }
              }
            )
          ] })
        }
      )
    }
  );
}, oy = ["addExecution", "addSubFlow"], ay = ({
  flow: e,
  onAddExecution: t,
  onAddFlow: n
}) => {
  const { t: r } = Be(), [i, o] = ae();
  return /* @__PURE__ */ re(Ne, { children: [
    i === "addExecution" && /* @__PURE__ */ N(
      js,
      {
        name: e.alias,
        type: e.providerId === "client-flow" ? "client" : "basic",
        onSelect: (a) => {
          a && t(a), o(void 0);
        }
      }
    ),
    i === "addSubFlow" && /* @__PURE__ */ N(
      Qs,
      {
        name: e.alias,
        onCancel: () => o(void 0),
        onConfirm: (a) => {
          n(a), o(void 0);
        }
      }
    ),
    /* @__PURE__ */ N(
      nv,
      {
        message: r("emptyExecution"),
        instructions: r("emptyExecutionInstructions")
      }
    ),
    /* @__PURE__ */ N("div", { className: "keycloak__empty-execution-state__block", children: oy.map((a) => /* @__PURE__ */ re(Fc, { className: "keycloak__empty-execution-state__help", children: [
      /* @__PURE__ */ re(Bc, { flex: { default: "flex_1" }, children: [
        /* @__PURE__ */ N(rv, { headingLevel: "h2", size: iv.md, children: r(`${a}Title`) }),
        /* @__PURE__ */ N("p", { children: r(a) })
      ] }),
      /* @__PURE__ */ N(Fc, { alignSelf: { default: "alignSelfCenter" }, children: /* @__PURE__ */ N(Bc, { children: /* @__PURE__ */ N(
        Ee,
        {
          "data-testid": a,
          variant: "tertiary",
          onClick: () => o(a),
          children: r(a)
        }
      ) }) })
    ] }, a)) })
  ] });
};
function Se(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = Se(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var _s = { exports: {} }, Yr = {}, Fn = { exports: {} }, Wr = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vc;
function sy() {
  if (Vc) return Wr;
  Vc = 1;
  var e = R;
  function t(d, f) {
    return d === f && (d !== 0 || 1 / d === 1 / f) || d !== d && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, i = e.useEffect, o = e.useLayoutEffect, a = e.useDebugValue;
  function s(d, f) {
    var h = f(), g = r({ inst: { value: h, getSnapshot: f } }), p = g[0].inst, m = g[1];
    return o(function() {
      p.value = h, p.getSnapshot = f, u(p) && m({ inst: p });
    }, [d, h, f]), i(function() {
      return u(p) && m({ inst: p }), d(function() {
        u(p) && m({ inst: p });
      });
    }, [d]), a(h), h;
  }
  function u(d) {
    var f = d.getSnapshot;
    d = d.value;
    try {
      var h = f();
      return !n(d, h);
    } catch {
      return !0;
    }
  }
  function l(d, f) {
    return f();
  }
  var c = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : s;
  return Wr.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : c, Wr;
}
var Xr = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gc;
function cy() {
  return Gc || (Gc = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = R, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(w) {
      {
        for (var _ = arguments.length, C = new Array(_ > 1 ? _ - 1 : 0), E = 1; E < _; E++)
          C[E - 1] = arguments[E];
        r("error", w, C);
      }
    }
    function r(w, _, C) {
      {
        var E = t.ReactDebugCurrentFrame, M = E.getStackAddendum();
        M !== "" && (_ += "%s", C = C.concat([M]));
        var T = C.map(function(A) {
          return String(A);
        });
        T.unshift("Warning: " + _), Function.prototype.apply.call(console[w], console, T);
      }
    }
    function i(w, _) {
      return w === _ && (w !== 0 || 1 / w === 1 / _) || w !== w && _ !== _;
    }
    var o = typeof Object.is == "function" ? Object.is : i, a = e.useState, s = e.useEffect, u = e.useLayoutEffect, l = e.useDebugValue, c = !1, d = !1;
    function f(w, _, C) {
      c || e.startTransition !== void 0 && (c = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var E = _();
      if (!d) {
        var M = _();
        o(E, M) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var T = a({
        inst: {
          value: E,
          getSnapshot: _
        }
      }), A = T[0].inst, q = T[1];
      return u(function() {
        A.value = E, A.getSnapshot = _, h(A) && q({
          inst: A
        });
      }, [w, E, _]), s(function() {
        h(A) && q({
          inst: A
        });
        var P = function() {
          h(A) && q({
            inst: A
          });
        };
        return w(P);
      }, [w]), l(E), E;
    }
    function h(w) {
      var _ = w.getSnapshot, C = w.value;
      try {
        var E = _();
        return !o(C, E);
      } catch {
        return !0;
      }
    }
    function g(w, _, C) {
      return _();
    }
    var p = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", m = !p, v = m ? g : f, b = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : v;
    Xr.useSyncExternalStore = b, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Xr;
}
var Uc;
function Th() {
  return Uc || (Uc = 1, process.env.NODE_ENV === "production" ? Fn.exports = sy() : Fn.exports = cy()), Fn.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kc;
function uy() {
  if (Kc) return Yr;
  Kc = 1;
  var e = R, t = Th();
  function n(l, c) {
    return l === c && (l !== 0 || 1 / l === 1 / c) || l !== l && c !== c;
  }
  var r = typeof Object.is == "function" ? Object.is : n, i = t.useSyncExternalStore, o = e.useRef, a = e.useEffect, s = e.useMemo, u = e.useDebugValue;
  return Yr.useSyncExternalStoreWithSelector = function(l, c, d, f, h) {
    var g = o(null);
    if (g.current === null) {
      var p = { hasValue: !1, value: null };
      g.current = p;
    } else p = g.current;
    g = s(function() {
      function v(E) {
        if (!b) {
          if (b = !0, w = E, E = f(E), h !== void 0 && p.hasValue) {
            var M = p.value;
            if (h(M, E)) return _ = M;
          }
          return _ = E;
        }
        if (M = _, r(w, E)) return M;
        var T = f(E);
        return h !== void 0 && h(M, T) ? M : (w = E, _ = T);
      }
      var b = !1, w, _, C = d === void 0 ? null : d;
      return [function() {
        return v(c());
      }, C === null ? void 0 : function() {
        return v(C());
      }];
    }, [c, d, f, h]);
    var m = i(l, g[0], g[1]);
    return a(function() {
      p.hasValue = !0, p.value = m;
    }, [m]), u(m), m;
  }, Yr;
}
var Zr = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yc;
function ly() {
  return Yc || (Yc = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = R, t = Th();
    function n(c, d) {
      return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
    }
    var r = typeof Object.is == "function" ? Object.is : n, i = t.useSyncExternalStore, o = e.useRef, a = e.useEffect, s = e.useMemo, u = e.useDebugValue;
    function l(c, d, f, h, g) {
      var p = o(null), m;
      p.current === null ? (m = {
        hasValue: !1,
        value: null
      }, p.current = m) : m = p.current;
      var v = s(function() {
        var C = !1, E, M, T = function(F) {
          if (!C) {
            C = !0, E = F;
            var O = h(F);
            if (g !== void 0 && m.hasValue) {
              var y = m.value;
              if (g(y, O))
                return M = y, y;
            }
            return M = O, O;
          }
          var I = E, x = M;
          if (r(I, F))
            return x;
          var L = h(F);
          return g !== void 0 && g(x, L) ? x : (E = F, M = L, L);
        }, A = f === void 0 ? null : f, q = function() {
          return T(d());
        }, P = A === null ? void 0 : function() {
          return T(A());
        };
        return [q, P];
      }, [d, f, h, g]), b = v[0], w = v[1], _ = i(c, b, w);
      return a(function() {
        m.hasValue = !0, m.value = _;
      }, [_]), u(_), _;
    }
    Zr.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Zr;
}
process.env.NODE_ENV === "production" ? _s.exports = uy() : _s.exports = ly();
var dy = _s.exports;
const fy = /* @__PURE__ */ ov(dy);
var hy = { BASE_URL: "./", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const Wc = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (c, d) => {
    const f = typeof c == "function" ? c(t) : c;
    if (!Object.is(f, t)) {
      const h = t;
      t = d ?? (typeof f != "object" || f === null) ? f : Object.assign({}, t, f), n.forEach((g) => g(t, h));
    }
  }, i = () => t, u = { setState: r, getState: i, getInitialState: () => l, subscribe: (c) => (n.add(c), () => n.delete(c)), destroy: () => {
    (hy ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, l = t = e(r, i, u);
  return u;
}, py = (e) => e ? Wc(e) : Wc, { useDebugValue: gy } = R, { useSyncExternalStoreWithSelector: my } = fy, vy = (e) => e;
function Lh(e, t = vy, n) {
  const r = my(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return gy(r), r;
}
const Xc = (e, t) => {
  const n = py(e), r = (i, o = t) => Lh(n, i, o);
  return Object.assign(r, n), r;
}, yy = (e, t) => e ? Xc(e, t) : Xc;
function ye(e, t) {
  if (Object.is(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size)
      return !1;
    for (const [r, i] of e)
      if (!Object.is(i, t.get(r)))
        return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size)
      return !1;
    for (const r of e)
      if (!t.has(r))
        return !1;
    return !0;
  }
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length)
    return !1;
  for (const r of n)
    if (!Object.prototype.hasOwnProperty.call(t, r) || !Object.is(e[r], t[r]))
      return !1;
  return !0;
}
var _y = { value: () => {
} };
function Mr() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Qn(n);
}
function Qn(e) {
  this._ = e;
}
function by(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Qn.prototype = Mr.prototype = {
  constructor: Qn,
  on: function(e, t) {
    var n = this._, r = by(e + "", n), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (e = r[o]).type) && (i = wy(n[i], e.name))) return i;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++o < a; )
      if (i = (e = r[o]).type) n[i] = Zc(n[i], e.name, t);
      else if (t == null) for (i in n) n[i] = Zc(n[i], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Qn(e);
  },
  call: function(e, t) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, o; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (o = this._[e], r = 0, i = o.length; r < i; ++r) o[r].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var r = this._[e], i = 0, o = r.length; i < o; ++i) r[i].value.apply(t, n);
  }
};
function wy(e, t) {
  for (var n = 0, r = e.length, i; n < r; ++n)
    if ((i = e[n]).name === t)
      return i.value;
}
function Zc(e, t, n) {
  for (var r = 0, i = e.length; r < i; ++r)
    if (e[r].name === t) {
      e[r] = _y, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var bs = "http://www.w3.org/1999/xhtml";
const jc = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: bs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ar(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), jc.hasOwnProperty(t) ? { space: jc[t], local: e } : e;
}
function Ey(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === bs && t.documentElement.namespaceURI === bs ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function xy(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function kh(e) {
  var t = Ar(e);
  return (t.local ? xy : Ey)(t);
}
function Sy() {
}
function Js(e) {
  return e == null ? Sy : function() {
    return this.querySelector(e);
  };
}
function Cy(e) {
  typeof e != "function" && (e = Js(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = t[i], a = o.length, s = r[i] = new Array(a), u, l, c = 0; c < a; ++c)
      (u = o[c]) && (l = e.call(u, u.__data__, c, o)) && ("__data__" in u && (l.__data__ = u.__data__), s[c] = l);
  return new Pe(r, this._parents);
}
function Ny(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function My() {
  return [];
}
function qh(e) {
  return e == null ? My : function() {
    return this.querySelectorAll(e);
  };
}
function Ay(e) {
  return function() {
    return Ny(e.apply(this, arguments));
  };
}
function Iy(e) {
  typeof e == "function" ? e = Ay(e) : e = qh(e);
  for (var t = this._groups, n = t.length, r = [], i = [], o = 0; o < n; ++o)
    for (var a = t[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && (r.push(e.call(u, u.__data__, l, a)), i.push(u));
  return new Pe(r, i);
}
function Oh(e) {
  return function() {
    return this.matches(e);
  };
}
function Ph(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Ry = Array.prototype.find;
function Ty(e) {
  return function() {
    return Ry.call(this.children, e);
  };
}
function Ly() {
  return this.firstElementChild;
}
function ky(e) {
  return this.select(e == null ? Ly : Ty(typeof e == "function" ? e : Ph(e)));
}
var qy = Array.prototype.filter;
function Oy() {
  return Array.from(this.children);
}
function Py(e) {
  return function() {
    return qy.call(this.children, e);
  };
}
function Dy(e) {
  return this.selectAll(e == null ? Oy : Py(typeof e == "function" ? e : Ph(e)));
}
function $y(e) {
  typeof e != "function" && (e = Oh(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = t[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && e.call(u, u.__data__, l, o) && s.push(u);
  return new Pe(r, this._parents);
}
function Dh(e) {
  return new Array(e.length);
}
function Fy() {
  return new Pe(this._enter || this._groups.map(Dh), this._parents);
}
function or(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
or.prototype = {
  constructor: or,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function By(e) {
  return function() {
    return e;
  };
}
function zy(e, t, n, r, i, o) {
  for (var a = 0, s, u = t.length, l = o.length; a < l; ++a)
    (s = t[a]) ? (s.__data__ = o[a], r[a] = s) : n[a] = new or(e, o[a]);
  for (; a < u; ++a)
    (s = t[a]) && (i[a] = s);
}
function Hy(e, t, n, r, i, o, a) {
  var s, u, l = /* @__PURE__ */ new Map(), c = t.length, d = o.length, f = new Array(c), h;
  for (s = 0; s < c; ++s)
    (u = t[s]) && (f[s] = h = a.call(u, u.__data__, s, t) + "", l.has(h) ? i[s] = u : l.set(h, u));
  for (s = 0; s < d; ++s)
    h = a.call(e, o[s], s, o) + "", (u = l.get(h)) ? (r[s] = u, u.__data__ = o[s], l.delete(h)) : n[s] = new or(e, o[s]);
  for (s = 0; s < c; ++s)
    (u = t[s]) && l.get(f[s]) === u && (i[s] = u);
}
function Vy(e) {
  return e.__data__;
}
function Gy(e, t) {
  if (!arguments.length) return Array.from(this, Vy);
  var n = t ? Hy : zy, r = this._parents, i = this._groups;
  typeof e != "function" && (e = By(e));
  for (var o = i.length, a = new Array(o), s = new Array(o), u = new Array(o), l = 0; l < o; ++l) {
    var c = r[l], d = i[l], f = d.length, h = Uy(e.call(c, c && c.__data__, l, r)), g = h.length, p = s[l] = new Array(g), m = a[l] = new Array(g), v = u[l] = new Array(f);
    n(c, d, p, m, v, h, t);
    for (var b = 0, w = 0, _, C; b < g; ++b)
      if (_ = p[b]) {
        for (b >= w && (w = b + 1); !(C = m[w]) && ++w < g; ) ;
        _._next = C || null;
      }
  }
  return a = new Pe(a, r), a._enter = s, a._exit = u, a;
}
function Uy(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Ky() {
  return new Pe(this._exit || this._groups.map(Dh), this._parents);
}
function Yy(e, t, n) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (i = t(i), i && (i = i.selection())), n == null ? o.remove() : n(o), r && i ? r.merge(i).order() : i;
}
function Wy(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, o = r.length, a = Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)
    for (var l = n[u], c = r[u], d = l.length, f = s[u] = new Array(d), h, g = 0; g < d; ++g)
      (h = l[g] || c[g]) && (f[g] = h);
  for (; u < i; ++u)
    s[u] = n[u];
  return new Pe(s, this._parents);
}
function Xy() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Zy(e) {
  e || (e = jy);
  function t(d, f) {
    return d && f ? e(d.__data__, f.__data__) : !d - !f;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = n[o], s = a.length, u = i[o] = new Array(s), l, c = 0; c < s; ++c)
      (l = a[c]) && (u[c] = l);
    u.sort(t);
  }
  return new Pe(i, this._parents).order();
}
function jy(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Qy() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Jy() {
  return Array.from(this);
}
function e0() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function t0() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function n0() {
  return !this.node();
}
function r0(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var i = t[n], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && e.call(s, s.__data__, o, i);
  return this;
}
function i0(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function o0(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function a0(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function s0(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function c0(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function u0(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function l0(e, t) {
  var n = Ar(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? o0 : i0 : typeof t == "function" ? n.local ? u0 : c0 : n.local ? s0 : a0)(n, t));
}
function $h(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function d0(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function f0(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function h0(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function p0(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? d0 : typeof t == "function" ? h0 : f0)(e, t, n ?? "")) : Qt(this.node(), e);
}
function Qt(e, t) {
  return e.style.getPropertyValue(t) || $h(e).getComputedStyle(e, null).getPropertyValue(t);
}
function g0(e) {
  return function() {
    delete this[e];
  };
}
function m0(e, t) {
  return function() {
    this[e] = t;
  };
}
function v0(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function y0(e, t) {
  return arguments.length > 1 ? this.each((t == null ? g0 : typeof t == "function" ? v0 : m0)(e, t)) : this.node()[e];
}
function Fh(e) {
  return e.trim().split(/^|\s+/);
}
function ec(e) {
  return e.classList || new Bh(e);
}
function Bh(e) {
  this._node = e, this._names = Fh(e.getAttribute("class") || "");
}
Bh.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function zh(e, t) {
  for (var n = ec(e), r = -1, i = t.length; ++r < i; ) n.add(t[r]);
}
function Hh(e, t) {
  for (var n = ec(e), r = -1, i = t.length; ++r < i; ) n.remove(t[r]);
}
function _0(e) {
  return function() {
    zh(this, e);
  };
}
function b0(e) {
  return function() {
    Hh(this, e);
  };
}
function w0(e, t) {
  return function() {
    (t.apply(this, arguments) ? zh : Hh)(this, e);
  };
}
function E0(e, t) {
  var n = Fh(e + "");
  if (arguments.length < 2) {
    for (var r = ec(this.node()), i = -1, o = n.length; ++i < o; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? w0 : t ? _0 : b0)(n, t));
}
function x0() {
  this.textContent = "";
}
function S0(e) {
  return function() {
    this.textContent = e;
  };
}
function C0(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function N0(e) {
  return arguments.length ? this.each(e == null ? x0 : (typeof e == "function" ? C0 : S0)(e)) : this.node().textContent;
}
function M0() {
  this.innerHTML = "";
}
function A0(e) {
  return function() {
    this.innerHTML = e;
  };
}
function I0(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function R0(e) {
  return arguments.length ? this.each(e == null ? M0 : (typeof e == "function" ? I0 : A0)(e)) : this.node().innerHTML;
}
function T0() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function L0() {
  return this.each(T0);
}
function k0() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function q0() {
  return this.each(k0);
}
function O0(e) {
  var t = typeof e == "function" ? e : kh(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function P0() {
  return null;
}
function D0(e, t) {
  var n = typeof e == "function" ? e : kh(e), r = t == null ? P0 : typeof t == "function" ? t : Js(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function $0() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function F0() {
  return this.each($0);
}
function B0() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function z0() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function H0(e) {
  return this.select(e ? z0 : B0);
}
function V0(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function G0(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function U0(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function K0(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, i = t.length, o; n < i; ++n)
        o = t[n], (!e.type || o.type === e.type) && o.name === e.name ? this.removeEventListener(o.type, o.listener, o.options) : t[++r] = o;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Y0(e, t, n) {
  return function() {
    var r = this.__on, i, o = G0(t);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === e.type && i.name === e.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = n), i.value = t;
          return;
        }
    }
    this.addEventListener(e.type, o, n), i = { type: e.type, name: e.name, value: t, listener: o, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function W0(e, t, n) {
  var r = U0(e + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, l = s.length, c; u < l; ++u)
        for (i = 0, c = s[u]; i < o; ++i)
          if ((a = r[i]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = t ? Y0 : K0, i = 0; i < o; ++i) this.each(s(r[i], t, n));
  return this;
}
function Vh(e, t, n) {
  var r = $h(e), i = r.CustomEvent;
  typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function X0(e, t) {
  return function() {
    return Vh(this, e, t);
  };
}
function Z0(e, t) {
  return function() {
    return Vh(this, e, t.apply(this, arguments));
  };
}
function j0(e, t) {
  return this.each((typeof t == "function" ? Z0 : X0)(e, t));
}
function* Q0() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var Gh = [null];
function Pe(e, t) {
  this._groups = e, this._parents = t;
}
function On() {
  return new Pe([[document.documentElement]], Gh);
}
function J0() {
  return this;
}
Pe.prototype = On.prototype = {
  constructor: Pe,
  select: Cy,
  selectAll: Iy,
  selectChild: ky,
  selectChildren: Dy,
  filter: $y,
  data: Gy,
  enter: Fy,
  exit: Ky,
  join: Yy,
  merge: Wy,
  selection: J0,
  order: Xy,
  sort: Zy,
  call: Qy,
  nodes: Jy,
  node: e0,
  size: t0,
  empty: n0,
  each: r0,
  attr: l0,
  style: p0,
  property: y0,
  classed: E0,
  text: N0,
  html: R0,
  raise: L0,
  lower: q0,
  append: O0,
  insert: D0,
  remove: F0,
  clone: H0,
  datum: V0,
  on: W0,
  dispatch: j0,
  [Symbol.iterator]: Q0
};
function De(e) {
  return typeof e == "string" ? new Pe([[document.querySelector(e)]], [document.documentElement]) : new Pe([[e]], Gh);
}
function e_(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Ge(e, t) {
  if (e = e_(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (t.getBoundingClientRect) {
      var i = t.getBoundingClientRect();
      return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const t_ = { passive: !1 }, yn = { capture: !0, passive: !1 };
function jr(e) {
  e.stopImmediatePropagation();
}
function Xt(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Uh(e) {
  var t = e.document.documentElement, n = De(e).on("dragstart.drag", Xt, yn);
  "onselectstart" in t ? n.on("selectstart.drag", Xt, yn) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Kh(e, t) {
  var n = e.document.documentElement, r = De(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Xt, yn), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Bn = (e) => () => e;
function ws(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: s,
  dx: u,
  dy: l,
  dispatch: c
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: l, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
ws.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function n_(e) {
  return !e.ctrlKey && !e.button;
}
function r_() {
  return this.parentNode;
}
function i_(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function o_() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function a_() {
  var e = n_, t = r_, n = i_, r = o_, i = {}, o = Mr("start", "drag", "end"), a = 0, s, u, l, c, d = 0;
  function f(_) {
    _.on("mousedown.drag", h).filter(r).on("touchstart.drag", m).on("touchmove.drag", v, t_).on("touchend.drag touchcancel.drag", b).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(_, C) {
    if (!(c || !e.call(this, _, C))) {
      var E = w(this, t.call(this, _, C), _, C, "mouse");
      E && (De(_.view).on("mousemove.drag", g, yn).on("mouseup.drag", p, yn), Uh(_.view), jr(_), l = !1, s = _.clientX, u = _.clientY, E("start", _));
    }
  }
  function g(_) {
    if (Xt(_), !l) {
      var C = _.clientX - s, E = _.clientY - u;
      l = C * C + E * E > d;
    }
    i.mouse("drag", _);
  }
  function p(_) {
    De(_.view).on("mousemove.drag mouseup.drag", null), Kh(_.view, l), Xt(_), i.mouse("end", _);
  }
  function m(_, C) {
    if (e.call(this, _, C)) {
      var E = _.changedTouches, M = t.call(this, _, C), T = E.length, A, q;
      for (A = 0; A < T; ++A)
        (q = w(this, M, _, C, E[A].identifier, E[A])) && (jr(_), q("start", _, E[A]));
    }
  }
  function v(_) {
    var C = _.changedTouches, E = C.length, M, T;
    for (M = 0; M < E; ++M)
      (T = i[C[M].identifier]) && (Xt(_), T("drag", _, C[M]));
  }
  function b(_) {
    var C = _.changedTouches, E = C.length, M, T;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), M = 0; M < E; ++M)
      (T = i[C[M].identifier]) && (jr(_), T("end", _, C[M]));
  }
  function w(_, C, E, M, T, A) {
    var q = o.copy(), P = Ge(A || E, C), F, O, y;
    if ((y = n.call(_, new ws("beforestart", {
      sourceEvent: E,
      target: f,
      identifier: T,
      active: a,
      x: P[0],
      y: P[1],
      dx: 0,
      dy: 0,
      dispatch: q
    }), M)) != null)
      return F = y.x - P[0] || 0, O = y.y - P[1] || 0, function I(x, L, D) {
        var S = P, k;
        switch (x) {
          case "start":
            i[T] = I, k = a++;
            break;
          case "end":
            delete i[T], --a;
          case "drag":
            P = Ge(D || L, C), k = a;
            break;
        }
        q.call(
          x,
          _,
          new ws(x, {
            sourceEvent: L,
            subject: y,
            target: f,
            identifier: T,
            active: k,
            x: P[0] + F,
            y: P[1] + O,
            dx: P[0] - S[0],
            dy: P[1] - S[1],
            dispatch: q
          }),
          M
        );
      };
  }
  return f.filter = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : Bn(!!_), f) : e;
  }, f.container = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : Bn(_), f) : t;
  }, f.subject = function(_) {
    return arguments.length ? (n = typeof _ == "function" ? _ : Bn(_), f) : n;
  }, f.touchable = function(_) {
    return arguments.length ? (r = typeof _ == "function" ? _ : Bn(!!_), f) : r;
  }, f.on = function() {
    var _ = o.on.apply(o, arguments);
    return _ === o ? f : _;
  }, f.clickDistance = function(_) {
    return arguments.length ? (d = (_ = +_) * _, f) : Math.sqrt(d);
  }, f;
}
function tc(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Yh(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Pn() {
}
var _n = 0.7, ar = 1 / _n, Zt = "\\s*([+-]?\\d+)\\s*", bn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", et = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", s_ = /^#([0-9a-f]{3,8})$/, c_ = new RegExp(`^rgb\\(${Zt},${Zt},${Zt}\\)$`), u_ = new RegExp(`^rgb\\(${et},${et},${et}\\)$`), l_ = new RegExp(`^rgba\\(${Zt},${Zt},${Zt},${bn}\\)$`), d_ = new RegExp(`^rgba\\(${et},${et},${et},${bn}\\)$`), f_ = new RegExp(`^hsl\\(${bn},${et},${et}\\)$`), h_ = new RegExp(`^hsla\\(${bn},${et},${et},${bn}\\)$`), Qc = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
tc(Pn, wn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Jc,
  // Deprecated! Use color.formatHex.
  formatHex: Jc,
  formatHex8: p_,
  formatHsl: g_,
  formatRgb: eu,
  toString: eu
});
function Jc() {
  return this.rgb().formatHex();
}
function p_() {
  return this.rgb().formatHex8();
}
function g_() {
  return Wh(this).formatHsl();
}
function eu() {
  return this.rgb().formatRgb();
}
function wn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = s_.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? tu(t) : n === 3 ? new Te(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? zn(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? zn(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = c_.exec(e)) ? new Te(t[1], t[2], t[3], 1) : (t = u_.exec(e)) ? new Te(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = l_.exec(e)) ? zn(t[1], t[2], t[3], t[4]) : (t = d_.exec(e)) ? zn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = f_.exec(e)) ? iu(t[1], t[2] / 100, t[3] / 100, 1) : (t = h_.exec(e)) ? iu(t[1], t[2] / 100, t[3] / 100, t[4]) : Qc.hasOwnProperty(e) ? tu(Qc[e]) : e === "transparent" ? new Te(NaN, NaN, NaN, 0) : null;
}
function tu(e) {
  return new Te(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function zn(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Te(e, t, n, r);
}
function m_(e) {
  return e instanceof Pn || (e = wn(e)), e ? (e = e.rgb(), new Te(e.r, e.g, e.b, e.opacity)) : new Te();
}
function Es(e, t, n, r) {
  return arguments.length === 1 ? m_(e) : new Te(e, t, n, r ?? 1);
}
function Te(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
tc(Te, Es, Yh(Pn, {
  brighter(e) {
    return e = e == null ? ar : Math.pow(ar, e), new Te(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? _n : Math.pow(_n, e), new Te(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Te(Dt(this.r), Dt(this.g), Dt(this.b), sr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: nu,
  // Deprecated! Use color.formatHex.
  formatHex: nu,
  formatHex8: v_,
  formatRgb: ru,
  toString: ru
}));
function nu() {
  return `#${Lt(this.r)}${Lt(this.g)}${Lt(this.b)}`;
}
function v_() {
  return `#${Lt(this.r)}${Lt(this.g)}${Lt(this.b)}${Lt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ru() {
  const e = sr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Dt(this.r)}, ${Dt(this.g)}, ${Dt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function sr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Dt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Lt(e) {
  return e = Dt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function iu(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ue(e, t, n, r);
}
function Wh(e) {
  if (e instanceof Ue) return new Ue(e.h, e.s, e.l, e.opacity);
  if (e instanceof Pn || (e = wn(e)), !e) return new Ue();
  if (e instanceof Ue) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), o = Math.max(t, n, r), a = NaN, s = o - i, u = (o + i) / 2;
  return s ? (t === o ? a = (n - r) / s + (n < r) * 6 : n === o ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= u < 0.5 ? o + i : 2 - o - i, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new Ue(a, s, u, e.opacity);
}
function y_(e, t, n, r) {
  return arguments.length === 1 ? Wh(e) : new Ue(e, t, n, r ?? 1);
}
function Ue(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
tc(Ue, y_, Yh(Pn, {
  brighter(e) {
    return e = e == null ? ar : Math.pow(ar, e), new Ue(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? _n : Math.pow(_n, e), new Ue(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - r;
    return new Te(
      Qr(e >= 240 ? e - 240 : e + 120, i, r),
      Qr(e, i, r),
      Qr(e < 120 ? e + 240 : e - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new Ue(ou(this.h), Hn(this.s), Hn(this.l), sr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = sr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ou(this.h)}, ${Hn(this.s) * 100}%, ${Hn(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ou(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Hn(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Qr(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Xh = (e) => () => e;
function __(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function b_(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function w_(e) {
  return (e = +e) == 1 ? Zh : function(t, n) {
    return n - t ? b_(t, n, e) : Xh(isNaN(t) ? n : t);
  };
}
function Zh(e, t) {
  var n = t - e;
  return n ? __(e, n) : Xh(isNaN(e) ? t : e);
}
const au = function e(t) {
  var n = w_(t);
  function r(i, o) {
    var a = n((i = Es(i)).r, (o = Es(o)).r), s = n(i.g, o.g), u = n(i.b, o.b), l = Zh(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = s(c), i.b = u(c), i.opacity = l(c), i + "";
    };
  }
  return r.gamma = e, r;
}(1);
function yt(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var xs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Jr = new RegExp(xs.source, "g");
function E_(e) {
  return function() {
    return e;
  };
}
function x_(e) {
  return function(t) {
    return e(t) + "";
  };
}
function S_(e, t) {
  var n = xs.lastIndex = Jr.lastIndex = 0, r, i, o, a = -1, s = [], u = [];
  for (e = e + "", t = t + ""; (r = xs.exec(e)) && (i = Jr.exec(t)); )
    (o = i.index) > n && (o = t.slice(n, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, u.push({ i: a, x: yt(r, i) })), n = Jr.lastIndex;
  return n < t.length && (o = t.slice(n), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? u[0] ? x_(u[0].x) : E_(t) : (t = u.length, function(l) {
    for (var c = 0, d; c < t; ++c) s[(d = u[c]).i] = d.x(l);
    return s.join("");
  });
}
var su = 180 / Math.PI, Ss = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function jh(e, t, n, r, i, o) {
  var a, s, u;
  return (a = Math.sqrt(e * e + t * t)) && (e /= a, t /= a), (u = e * n + t * r) && (n -= e * u, r -= t * u), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, u /= s), e * r < t * n && (e = -e, t = -t, u = -u, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(t, e) * su,
    skewX: Math.atan(u) * su,
    scaleX: a,
    scaleY: s
  };
}
var Vn;
function C_(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Ss : jh(t.a, t.b, t.c, t.d, t.e, t.f);
}
function N_(e) {
  return e == null || (Vn || (Vn = document.createElementNS("http://www.w3.org/2000/svg", "g")), Vn.setAttribute("transform", e), !(e = Vn.transform.baseVal.consolidate())) ? Ss : (e = e.matrix, jh(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Qh(e, t, n, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, c, d, f, h, g) {
    if (l !== d || c !== f) {
      var p = h.push("translate(", null, t, null, n);
      g.push({ i: p - 4, x: yt(l, d) }, { i: p - 2, x: yt(c, f) });
    } else (d || f) && h.push("translate(" + d + t + f + n);
  }
  function a(l, c, d, f) {
    l !== c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), f.push({ i: d.push(i(d) + "rotate(", null, r) - 2, x: yt(l, c) })) : c && d.push(i(d) + "rotate(" + c + r);
  }
  function s(l, c, d, f) {
    l !== c ? f.push({ i: d.push(i(d) + "skewX(", null, r) - 2, x: yt(l, c) }) : c && d.push(i(d) + "skewX(" + c + r);
  }
  function u(l, c, d, f, h, g) {
    if (l !== d || c !== f) {
      var p = h.push(i(h) + "scale(", null, ",", null, ")");
      g.push({ i: p - 4, x: yt(l, d) }, { i: p - 2, x: yt(c, f) });
    } else (d !== 1 || f !== 1) && h.push(i(h) + "scale(" + d + "," + f + ")");
  }
  return function(l, c) {
    var d = [], f = [];
    return l = e(l), c = e(c), o(l.translateX, l.translateY, c.translateX, c.translateY, d, f), a(l.rotate, c.rotate, d, f), s(l.skewX, c.skewX, d, f), u(l.scaleX, l.scaleY, c.scaleX, c.scaleY, d, f), l = c = null, function(h) {
      for (var g = -1, p = f.length, m; ++g < p; ) d[(m = f[g]).i] = m.x(h);
      return d.join("");
    };
  };
}
var M_ = Qh(C_, "px, ", "px)", "deg)"), A_ = Qh(N_, ", ", ")", ")"), I_ = 1e-12;
function cu(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function R_(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function T_(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const L_ = function e(t, n, r) {
  function i(o, a) {
    var s = o[0], u = o[1], l = o[2], c = a[0], d = a[1], f = a[2], h = c - s, g = d - u, p = h * h + g * g, m, v;
    if (p < I_)
      v = Math.log(f / l) / t, m = function(M) {
        return [
          s + M * h,
          u + M * g,
          l * Math.exp(t * M * v)
        ];
      };
    else {
      var b = Math.sqrt(p), w = (f * f - l * l + r * p) / (2 * l * n * b), _ = (f * f - l * l - r * p) / (2 * f * n * b), C = Math.log(Math.sqrt(w * w + 1) - w), E = Math.log(Math.sqrt(_ * _ + 1) - _);
      v = (E - C) / t, m = function(M) {
        var T = M * v, A = cu(C), q = l / (n * b) * (A * T_(t * T + C) - R_(C));
        return [
          s + q * h,
          u + q * g,
          l * A / cu(t * T + C)
        ];
      };
    }
    return m.duration = v * 1e3 * t / Math.SQRT2, m;
  }
  return i.rho = function(o) {
    var a = Math.max(1e-3, +o), s = a * a, u = s * s;
    return e(a, s, u);
  }, i;
}(Math.SQRT2, 2, 4);
var Jt = 0, fn = 0, sn = 0, Jh = 1e3, cr, hn, ur = 0, Ft = 0, Ir = 0, En = typeof performance == "object" && performance.now ? performance : Date, ep = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function nc() {
  return Ft || (ep(k_), Ft = En.now() + Ir);
}
function k_() {
  Ft = 0;
}
function lr() {
  this._call = this._time = this._next = null;
}
lr.prototype = tp.prototype = {
  constructor: lr,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? nc() : +n) + (t == null ? 0 : +t), !this._next && hn !== this && (hn ? hn._next = this : cr = this, hn = this), this._call = e, this._time = n, Cs();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Cs());
  }
};
function tp(e, t, n) {
  var r = new lr();
  return r.restart(e, t, n), r;
}
function q_() {
  nc(), ++Jt;
  for (var e = cr, t; e; )
    (t = Ft - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Jt;
}
function uu() {
  Ft = (ur = En.now()) + Ir, Jt = fn = 0;
  try {
    q_();
  } finally {
    Jt = 0, P_(), Ft = 0;
  }
}
function O_() {
  var e = En.now(), t = e - ur;
  t > Jh && (Ir -= t, ur = e);
}
function P_() {
  for (var e, t = cr, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : cr = n);
  hn = e, Cs(r);
}
function Cs(e) {
  if (!Jt) {
    fn && (fn = clearTimeout(fn));
    var t = e - Ft;
    t > 24 ? (e < 1 / 0 && (fn = setTimeout(uu, e - En.now() - Ir)), sn && (sn = clearInterval(sn))) : (sn || (ur = En.now(), sn = setInterval(O_, Jh)), Jt = 1, ep(uu));
  }
}
function lu(e, t, n) {
  var r = new lr();
  return t = t == null ? 0 : +t, r.restart((i) => {
    r.stop(), e(i + t);
  }, t, n), r;
}
var D_ = Mr("start", "end", "cancel", "interrupt"), $_ = [], np = 0, du = 1, Ns = 2, Jn = 3, fu = 4, Ms = 5, er = 6;
function Rr(e, t, n, r, i, o) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (n in a) return;
  F_(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: D_,
    tween: $_,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: np
  });
}
function rc(e, t) {
  var n = We(e, t);
  if (n.state > np) throw new Error("too late; already scheduled");
  return n;
}
function tt(e, t) {
  var n = We(e, t);
  if (n.state > Jn) throw new Error("too late; already running");
  return n;
}
function We(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function F_(e, t, n) {
  var r = e.__transition, i;
  r[t] = n, n.timer = tp(o, 0, n.time);
  function o(l) {
    n.state = du, n.timer.restart(a, n.delay, n.time), n.delay <= l && a(l - n.delay);
  }
  function a(l) {
    var c, d, f, h;
    if (n.state !== du) return u();
    for (c in r)
      if (h = r[c], h.name === n.name) {
        if (h.state === Jn) return lu(a);
        h.state === fu ? (h.state = er, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[c]) : +c < t && (h.state = er, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[c]);
      }
    if (lu(function() {
      n.state === Jn && (n.state = fu, n.timer.restart(s, n.delay, n.time), s(l));
    }), n.state = Ns, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ns) {
      for (n.state = Jn, i = new Array(f = n.tween.length), c = 0, d = -1; c < f; ++c)
        (h = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (i[++d] = h);
      i.length = d + 1;
    }
  }
  function s(l) {
    for (var c = l < n.duration ? n.ease.call(null, l / n.duration) : (n.timer.restart(u), n.state = Ms, 1), d = -1, f = i.length; ++d < f; )
      i[d].call(e, c);
    n.state === Ms && (n.on.call("end", e, e.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = er, n.timer.stop(), delete r[t];
    for (var l in r) return;
    delete e.__transition;
  }
}
function tr(e, t) {
  var n = e.__transition, r, i, o = !0, a;
  if (n) {
    t = t == null ? null : t + "";
    for (a in n) {
      if ((r = n[a]).name !== t) {
        o = !1;
        continue;
      }
      i = r.state > Ns && r.state < Ms, r.state = er, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    o && delete e.__transition;
  }
}
function B_(e) {
  return this.each(function() {
    tr(this, e);
  });
}
function z_(e, t) {
  var n, r;
  return function() {
    var i = tt(this, e), o = i.tween;
    if (o !== n) {
      r = n = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === t) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function H_(e, t, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var o = tt(this, e), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: t, value: n }, u = 0, l = i.length; u < l; ++u)
        if (i[u].name === t) {
          i[u] = s;
          break;
        }
      u === l && i.push(s);
    }
    o.tween = i;
  };
}
function V_(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = We(this.node(), n).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? z_ : H_)(n, e, t));
}
function ic(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var i = tt(this, r);
    (i.value || (i.value = {}))[t] = n.apply(this, arguments);
  }), function(i) {
    return We(i, r).value[t];
  };
}
function rp(e, t) {
  var n;
  return (typeof t == "number" ? yt : t instanceof wn ? au : (n = wn(t)) ? (t = n, au) : S_)(e, t);
}
function G_(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function U_(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function K_(e, t, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttribute(e);
    return a === i ? null : a === r ? o : o = t(r = a, n);
  };
}
function Y_(e, t, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttributeNS(e.space, e.local);
    return a === i ? null : a === r ? o : o = t(r = a, n);
  };
}
function W_(e, t, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), u;
    return s == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = t(r = a, s)));
  };
}
function X_(e, t, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), u;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = t(r = a, s)));
  };
}
function Z_(e, t) {
  var n = Ar(e), r = n === "transform" ? A_ : rp;
  return this.attrTween(e, typeof t == "function" ? (n.local ? X_ : W_)(n, r, ic(this, "attr." + e, t)) : t == null ? (n.local ? U_ : G_)(n) : (n.local ? Y_ : K_)(n, r, t));
}
function j_(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Q_(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function J_(e, t) {
  var n, r;
  function i() {
    var o = t.apply(this, arguments);
    return o !== r && (n = (r = o) && Q_(e, o)), n;
  }
  return i._value = t, i;
}
function eb(e, t) {
  var n, r;
  function i() {
    var o = t.apply(this, arguments);
    return o !== r && (n = (r = o) && j_(e, o)), n;
  }
  return i._value = t, i;
}
function tb(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Ar(e);
  return this.tween(n, (r.local ? J_ : eb)(r, t));
}
function nb(e, t) {
  return function() {
    rc(this, e).delay = +t.apply(this, arguments);
  };
}
function rb(e, t) {
  return t = +t, function() {
    rc(this, e).delay = t;
  };
}
function ib(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? nb : rb)(t, e)) : We(this.node(), t).delay;
}
function ob(e, t) {
  return function() {
    tt(this, e).duration = +t.apply(this, arguments);
  };
}
function ab(e, t) {
  return t = +t, function() {
    tt(this, e).duration = t;
  };
}
function sb(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? ob : ab)(t, e)) : We(this.node(), t).duration;
}
function cb(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    tt(this, e).ease = t;
  };
}
function ub(e) {
  var t = this._id;
  return arguments.length ? this.each(cb(t, e)) : We(this.node(), t).ease;
}
function lb(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    tt(this, e).ease = n;
  };
}
function db(e) {
  if (typeof e != "function") throw new Error();
  return this.each(lb(this._id, e));
}
function fb(e) {
  typeof e != "function" && (e = Oh(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = t[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && e.call(u, u.__data__, l, o) && s.push(u);
  return new dt(r, this._parents, this._name, this._id);
}
function hb(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, i = n.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var u = t[s], l = n[s], c = u.length, d = a[s] = new Array(c), f, h = 0; h < c; ++h)
      (f = u[h] || l[h]) && (d[h] = f);
  for (; s < r; ++s)
    a[s] = t[s];
  return new dt(a, this._parents, this._name, this._id);
}
function pb(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function gb(e, t, n) {
  var r, i, o = pb(t) ? rc : tt;
  return function() {
    var a = o(this, e), s = a.on;
    s !== r && (i = (r = s).copy()).on(t, n), a.on = i;
  };
}
function mb(e, t) {
  var n = this._id;
  return arguments.length < 2 ? We(this.node(), n).on.on(e) : this.each(gb(n, e, t));
}
function vb(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function yb() {
  return this.on("end.remove", vb(this._id));
}
function _b(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Js(e));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], u = s.length, l = o[a] = new Array(u), c, d, f = 0; f < u; ++f)
      (c = s[f]) && (d = e.call(c, c.__data__, f, s)) && ("__data__" in c && (d.__data__ = c.__data__), l[f] = d, Rr(l[f], t, n, f, l, We(c, n)));
  return new dt(o, this._parents, t, n);
}
function bb(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = qh(e));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var u = r[s], l = u.length, c, d = 0; d < l; ++d)
      if (c = u[d]) {
        for (var f = e.call(c, c.__data__, d, u), h, g = We(c, n), p = 0, m = f.length; p < m; ++p)
          (h = f[p]) && Rr(h, t, n, p, f, g);
        o.push(f), a.push(c);
      }
  return new dt(o, a, t, n);
}
var wb = On.prototype.constructor;
function Eb() {
  return new wb(this._groups, this._parents);
}
function xb(e, t) {
  var n, r, i;
  return function() {
    var o = Qt(this, e), a = (this.style.removeProperty(e), Qt(this, e));
    return o === a ? null : o === n && a === r ? i : i = t(n = o, r = a);
  };
}
function ip(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Sb(e, t, n) {
  var r, i = n + "", o;
  return function() {
    var a = Qt(this, e);
    return a === i ? null : a === r ? o : o = t(r = a, n);
  };
}
function Cb(e, t, n) {
  var r, i, o;
  return function() {
    var a = Qt(this, e), s = n(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(e), Qt(this, e))), a === u ? null : a === r && u === i ? o : (i = u, o = t(r = a, s));
  };
}
function Nb(e, t) {
  var n, r, i, o = "style." + t, a = "end." + o, s;
  return function() {
    var u = tt(this, e), l = u.on, c = u.value[o] == null ? s || (s = ip(t)) : void 0;
    (l !== n || i !== c) && (r = (n = l).copy()).on(a, i = c), u.on = r;
  };
}
function Mb(e, t, n) {
  var r = (e += "") == "transform" ? M_ : rp;
  return t == null ? this.styleTween(e, xb(e, r)).on("end.style." + e, ip(e)) : typeof t == "function" ? this.styleTween(e, Cb(e, r, ic(this, "style." + e, t))).each(Nb(this._id, e)) : this.styleTween(e, Sb(e, r, t), n).on("end.style." + e, null);
}
function Ab(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Ib(e, t, n) {
  var r, i;
  function o() {
    var a = t.apply(this, arguments);
    return a !== i && (r = (i = a) && Ab(e, a, n)), r;
  }
  return o._value = t, o;
}
function Rb(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, Ib(e, t, n ?? ""));
}
function Tb(e) {
  return function() {
    this.textContent = e;
  };
}
function Lb(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function kb(e) {
  return this.tween("text", typeof e == "function" ? Lb(ic(this, "text", e)) : Tb(e == null ? "" : e + ""));
}
function qb(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Ob(e) {
  var t, n;
  function r() {
    var i = e.apply(this, arguments);
    return i !== n && (t = (n = i) && qb(i)), t;
  }
  return r._value = e, r;
}
function Pb(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Ob(e));
}
function Db() {
  for (var e = this._name, t = this._id, n = op(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      if (u = a[l]) {
        var c = We(u, t);
        Rr(u, e, n, l, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new dt(r, this._parents, e, n);
}
function $b() {
  var e, t, n = this, r = n._id, i = n.size();
  return new Promise(function(o, a) {
    var s = { value: a }, u = { value: function() {
      --i === 0 && o();
    } };
    n.each(function() {
      var l = tt(this, r), c = l.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(u)), l.on = t;
    }), i === 0 && o();
  });
}
var Fb = 0;
function dt(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function op() {
  return ++Fb;
}
var it = On.prototype;
dt.prototype = {
  constructor: dt,
  select: _b,
  selectAll: bb,
  selectChild: it.selectChild,
  selectChildren: it.selectChildren,
  filter: fb,
  merge: hb,
  selection: Eb,
  transition: Db,
  call: it.call,
  nodes: it.nodes,
  node: it.node,
  size: it.size,
  empty: it.empty,
  each: it.each,
  on: mb,
  attr: Z_,
  attrTween: tb,
  style: Mb,
  styleTween: Rb,
  text: kb,
  textTween: Pb,
  remove: yb,
  tween: V_,
  delay: ib,
  duration: sb,
  ease: ub,
  easeVarying: db,
  end: $b,
  [Symbol.iterator]: it[Symbol.iterator]
};
function Bb(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var zb = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Bb
};
function Hb(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Vb(e) {
  var t, n;
  e instanceof dt ? (t = e._id, e = e._name) : (t = op(), (n = zb).time = nc(), e = e == null ? null : e + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && Rr(u, e, t, l, a, n || Hb(u, t));
  return new dt(r, this._parents, e, t);
}
On.prototype.interrupt = B_;
On.prototype.transition = Vb;
const Gn = (e) => () => e;
function Gb(e, {
  sourceEvent: t,
  target: n,
  transform: r,
  dispatch: i
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: i }
  });
}
function at(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
at.prototype = {
  constructor: at,
  scale: function(e) {
    return e === 1 ? this : new at(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new at(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var ut = new at(1, 0, 0);
at.prototype;
function ei(e) {
  e.stopImmediatePropagation();
}
function cn(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Ub(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Kb() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function hu() {
  return this.__zoom || ut;
}
function Yb(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Wb() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Xb(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], i = e.invertX(t[1][0]) - n[1][0], o = e.invertY(t[0][1]) - n[0][1], a = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
    a > o ? (o + a) / 2 : Math.min(0, o) || Math.max(0, a)
  );
}
function ap() {
  var e = Ub, t = Kb, n = Xb, r = Yb, i = Wb, o = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, u = L_, l = Mr("start", "zoom", "end"), c, d, f, h = 500, g = 150, p = 0, m = 10;
  function v(y) {
    y.property("__zoom", hu).on("wheel.zoom", T, { passive: !1 }).on("mousedown.zoom", A).on("dblclick.zoom", q).filter(i).on("touchstart.zoom", P).on("touchmove.zoom", F).on("touchend.zoom touchcancel.zoom", O).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  v.transform = function(y, I, x, L) {
    var D = y.selection ? y.selection() : y;
    D.property("__zoom", hu), y !== D ? C(y, I, x, L) : D.interrupt().each(function() {
      E(this, arguments).event(L).start().zoom(null, typeof I == "function" ? I.apply(this, arguments) : I).end();
    });
  }, v.scaleBy = function(y, I, x, L) {
    v.scaleTo(y, function() {
      var D = this.__zoom.k, S = typeof I == "function" ? I.apply(this, arguments) : I;
      return D * S;
    }, x, L);
  }, v.scaleTo = function(y, I, x, L) {
    v.transform(y, function() {
      var D = t.apply(this, arguments), S = this.__zoom, k = x == null ? _(D) : typeof x == "function" ? x.apply(this, arguments) : x, $ = S.invert(k), B = typeof I == "function" ? I.apply(this, arguments) : I;
      return n(w(b(S, B), k, $), D, a);
    }, x, L);
  }, v.translateBy = function(y, I, x, L) {
    v.transform(y, function() {
      return n(this.__zoom.translate(
        typeof I == "function" ? I.apply(this, arguments) : I,
        typeof x == "function" ? x.apply(this, arguments) : x
      ), t.apply(this, arguments), a);
    }, null, L);
  }, v.translateTo = function(y, I, x, L, D) {
    v.transform(y, function() {
      var S = t.apply(this, arguments), k = this.__zoom, $ = L == null ? _(S) : typeof L == "function" ? L.apply(this, arguments) : L;
      return n(ut.translate($[0], $[1]).scale(k.k).translate(
        typeof I == "function" ? -I.apply(this, arguments) : -I,
        typeof x == "function" ? -x.apply(this, arguments) : -x
      ), S, a);
    }, L, D);
  };
  function b(y, I) {
    return I = Math.max(o[0], Math.min(o[1], I)), I === y.k ? y : new at(I, y.x, y.y);
  }
  function w(y, I, x) {
    var L = I[0] - x[0] * y.k, D = I[1] - x[1] * y.k;
    return L === y.x && D === y.y ? y : new at(y.k, L, D);
  }
  function _(y) {
    return [(+y[0][0] + +y[1][0]) / 2, (+y[0][1] + +y[1][1]) / 2];
  }
  function C(y, I, x, L) {
    y.on("start.zoom", function() {
      E(this, arguments).event(L).start();
    }).on("interrupt.zoom end.zoom", function() {
      E(this, arguments).event(L).end();
    }).tween("zoom", function() {
      var D = this, S = arguments, k = E(D, S).event(L), $ = t.apply(D, S), B = x == null ? _($) : typeof x == "function" ? x.apply(D, S) : x, G = Math.max($[1][0] - $[0][0], $[1][1] - $[0][1]), H = D.__zoom, X = typeof I == "function" ? I.apply(D, S) : I, J = u(H.invert(B).concat(G / H.k), X.invert(B).concat(G / X.k));
      return function(z) {
        if (z === 1) z = X;
        else {
          var V = J(z), W = G / V[2];
          z = new at(W, B[0] - V[0] * W, B[1] - V[1] * W);
        }
        k.zoom(null, z);
      };
    });
  }
  function E(y, I, x) {
    return !x && y.__zooming || new M(y, I);
  }
  function M(y, I) {
    this.that = y, this.args = I, this.active = 0, this.sourceEvent = null, this.extent = t.apply(y, I), this.taps = 0;
  }
  M.prototype = {
    event: function(y) {
      return y && (this.sourceEvent = y), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(y, I) {
      return this.mouse && y !== "mouse" && (this.mouse[1] = I.invert(this.mouse[0])), this.touch0 && y !== "touch" && (this.touch0[1] = I.invert(this.touch0[0])), this.touch1 && y !== "touch" && (this.touch1[1] = I.invert(this.touch1[0])), this.that.__zoom = I, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(y) {
      var I = De(this.that).datum();
      l.call(
        y,
        this.that,
        new Gb(y, {
          sourceEvent: this.sourceEvent,
          target: v,
          type: y,
          transform: this.that.__zoom,
          dispatch: l
        }),
        I
      );
    }
  };
  function T(y, ...I) {
    if (!e.apply(this, arguments)) return;
    var x = E(this, I).event(y), L = this.__zoom, D = Math.max(o[0], Math.min(o[1], L.k * Math.pow(2, r.apply(this, arguments)))), S = Ge(y);
    if (x.wheel)
      (x.mouse[0][0] !== S[0] || x.mouse[0][1] !== S[1]) && (x.mouse[1] = L.invert(x.mouse[0] = S)), clearTimeout(x.wheel);
    else {
      if (L.k === D) return;
      x.mouse = [S, L.invert(S)], tr(this), x.start();
    }
    cn(y), x.wheel = setTimeout(k, g), x.zoom("mouse", n(w(b(L, D), x.mouse[0], x.mouse[1]), x.extent, a));
    function k() {
      x.wheel = null, x.end();
    }
  }
  function A(y, ...I) {
    if (f || !e.apply(this, arguments)) return;
    var x = y.currentTarget, L = E(this, I, !0).event(y), D = De(y.view).on("mousemove.zoom", B, !0).on("mouseup.zoom", G, !0), S = Ge(y, x), k = y.clientX, $ = y.clientY;
    Uh(y.view), ei(y), L.mouse = [S, this.__zoom.invert(S)], tr(this), L.start();
    function B(H) {
      if (cn(H), !L.moved) {
        var X = H.clientX - k, J = H.clientY - $;
        L.moved = X * X + J * J > p;
      }
      L.event(H).zoom("mouse", n(w(L.that.__zoom, L.mouse[0] = Ge(H, x), L.mouse[1]), L.extent, a));
    }
    function G(H) {
      D.on("mousemove.zoom mouseup.zoom", null), Kh(H.view, L.moved), cn(H), L.event(H).end();
    }
  }
  function q(y, ...I) {
    if (e.apply(this, arguments)) {
      var x = this.__zoom, L = Ge(y.changedTouches ? y.changedTouches[0] : y, this), D = x.invert(L), S = x.k * (y.shiftKey ? 0.5 : 2), k = n(w(b(x, S), L, D), t.apply(this, I), a);
      cn(y), s > 0 ? De(this).transition().duration(s).call(C, k, L, y) : De(this).call(v.transform, k, L, y);
    }
  }
  function P(y, ...I) {
    if (e.apply(this, arguments)) {
      var x = y.touches, L = x.length, D = E(this, I, y.changedTouches.length === L).event(y), S, k, $, B;
      for (ei(y), k = 0; k < L; ++k)
        $ = x[k], B = Ge($, this), B = [B, this.__zoom.invert(B), $.identifier], D.touch0 ? !D.touch1 && D.touch0[2] !== B[2] && (D.touch1 = B, D.taps = 0) : (D.touch0 = B, S = !0, D.taps = 1 + !!c);
      c && (c = clearTimeout(c)), S && (D.taps < 2 && (d = B[0], c = setTimeout(function() {
        c = null;
      }, h)), tr(this), D.start());
    }
  }
  function F(y, ...I) {
    if (this.__zooming) {
      var x = E(this, I).event(y), L = y.changedTouches, D = L.length, S, k, $, B;
      for (cn(y), S = 0; S < D; ++S)
        k = L[S], $ = Ge(k, this), x.touch0 && x.touch0[2] === k.identifier ? x.touch0[0] = $ : x.touch1 && x.touch1[2] === k.identifier && (x.touch1[0] = $);
      if (k = x.that.__zoom, x.touch1) {
        var G = x.touch0[0], H = x.touch0[1], X = x.touch1[0], J = x.touch1[1], z = (z = X[0] - G[0]) * z + (z = X[1] - G[1]) * z, V = (V = J[0] - H[0]) * V + (V = J[1] - H[1]) * V;
        k = b(k, Math.sqrt(z / V)), $ = [(G[0] + X[0]) / 2, (G[1] + X[1]) / 2], B = [(H[0] + J[0]) / 2, (H[1] + J[1]) / 2];
      } else if (x.touch0) $ = x.touch0[0], B = x.touch0[1];
      else return;
      x.zoom("touch", n(w(k, $, B), x.extent, a));
    }
  }
  function O(y, ...I) {
    if (this.__zooming) {
      var x = E(this, I).event(y), L = y.changedTouches, D = L.length, S, k;
      for (ei(y), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, h), S = 0; S < D; ++S)
        k = L[S], x.touch0 && x.touch0[2] === k.identifier ? delete x.touch0 : x.touch1 && x.touch1[2] === k.identifier && delete x.touch1;
      if (x.touch1 && !x.touch0 && (x.touch0 = x.touch1, delete x.touch1), x.touch0) x.touch0[1] = this.__zoom.invert(x.touch0[0]);
      else if (x.end(), x.taps === 2 && (k = Ge(k, this), Math.hypot(d[0] - k[0], d[1] - k[1]) < m)) {
        var $ = De(this).on("dblclick.zoom");
        $ && $.apply(this, arguments);
      }
    }
  }
  return v.wheelDelta = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : Gn(+y), v) : r;
  }, v.filter = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : Gn(!!y), v) : e;
  }, v.touchable = function(y) {
    return arguments.length ? (i = typeof y == "function" ? y : Gn(!!y), v) : i;
  }, v.extent = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : Gn([[+y[0][0], +y[0][1]], [+y[1][0], +y[1][1]]]), v) : t;
  }, v.scaleExtent = function(y) {
    return arguments.length ? (o[0] = +y[0], o[1] = +y[1], v) : [o[0], o[1]];
  }, v.translateExtent = function(y) {
    return arguments.length ? (a[0][0] = +y[0][0], a[1][0] = +y[1][0], a[0][1] = +y[0][1], a[1][1] = +y[1][1], v) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]];
  }, v.constrain = function(y) {
    return arguments.length ? (n = y, v) : n;
  }, v.duration = function(y) {
    return arguments.length ? (s = +y, v) : s;
  }, v.interpolate = function(y) {
    return arguments.length ? (u = y, v) : u;
  }, v.on = function() {
    var y = l.on.apply(l, arguments);
    return y === l ? v : y;
  }, v.clickDistance = function(y) {
    return arguments.length ? (p = (y = +y) * y, v) : Math.sqrt(p);
  }, v.tapDistance = function(y) {
    return arguments.length ? (m = +y, v) : m;
  }, v;
}
const Tr = oh(null), Zb = Tr.Provider, Ye = {
  error001: () => "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
  error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
  error004: () => "The React Flow parent container needs a width and a height to render the graph.",
  error005: () => "Only child nodes can use a parent extent.",
  error006: () => "Can't create edge. An edge needs a source and a target.",
  error007: (e) => `The old edge with id=${e} does not exist.`,
  error009: (e) => `Marker type "${e}" doesn't exist.`,
  error008: (e, t) => `Couldn't create edge for ${e ? "target" : "source"} handle id: "${e ? t.targetHandle : t.sourceHandle}", edge id: ${t.id}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (e) => `Edge type "${e}" not found. Using fallback type "default".`,
  error012: (e) => `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`
}, sp = Ye.error001();
function le(e, t) {
  const n = _r(Tr);
  if (n === null)
    throw new Error(sp);
  return Lh(n, e, t);
}
const _e = () => {
  const e = _r(Tr);
  if (e === null)
    throw new Error(sp);
  return Fe(() => ({
    getState: e.getState,
    setState: e.setState,
    subscribe: e.subscribe,
    destroy: e.destroy
  }), [e]);
}, jb = (e) => e.userSelectionActive ? "none" : "all";
function oc({ position: e, children: t, className: n, style: r, ...i }) {
  const o = le(jb), a = `${e}`.split("-");
  return R.createElement("div", { className: Se(["react-flow__panel", n, ...a]), style: { ...r, pointerEvents: o }, ...i }, t);
}
function Qb({ proOptions: e, position: t = "bottom-right" }) {
  return e?.hideAttribution ? null : R.createElement(
    oc,
    { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://reactflow.dev/pro" },
    R.createElement("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution" }, "React Flow")
  );
}
const Jb = ({ x: e, y: t, label: n, labelStyle: r = {}, labelShowBg: i = !0, labelBgStyle: o = {}, labelBgPadding: a = [2, 4], labelBgBorderRadius: s = 2, children: u, className: l, ...c }) => {
  const d = ee(null), [f, h] = ae({ x: 0, y: 0, width: 0, height: 0 }), g = Se(["react-flow__edge-textwrapper", l]);
  return ce(() => {
    if (d.current) {
      const p = d.current.getBBox();
      h({
        x: p.x,
        y: p.y,
        width: p.width,
        height: p.height
      });
    }
  }, [n]), typeof n > "u" || !n ? null : R.createElement(
    "g",
    { transform: `translate(${e - f.width / 2} ${t - f.height / 2})`, className: g, visibility: f.width ? "visible" : "hidden", ...c },
    i && R.createElement("rect", { width: f.width + 2 * a[0], x: -a[0], y: -a[1], height: f.height + 2 * a[1], className: "react-flow__edge-textbg", style: o, rx: s, ry: s }),
    R.createElement("text", { className: "react-flow__edge-text", y: f.height / 2, dy: "0.3em", ref: d, style: r }, n),
    u
  );
};
var ew = ue(Jb);
const ac = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), en = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), sc = (e = { x: 0, y: 0 }, t) => ({
  x: en(e.x, t[0][0], t[1][0]),
  y: en(e.y, t[0][1], t[1][1])
}), pu = (e, t, n) => e < t ? en(Math.abs(e - t), 1, 50) / 50 : e > n ? -en(Math.abs(e - n), 1, 50) / 50 : 0, cp = (e, t) => {
  const n = pu(e.x, 35, t.width - 35) * 20, r = pu(e.y, 35, t.height - 35) * 20;
  return [n, r];
}, up = (e) => e.getRootNode?.() || window?.document, lp = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), xn = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), dp = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), gu = (e) => ({
  ...e.positionAbsolute || { x: 0, y: 0 },
  width: e.width || 0,
  height: e.height || 0
}), tw = (e, t) => dp(lp(xn(e), xn(t))), As = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, nw = (e) => $e(e.width) && $e(e.height) && $e(e.x) && $e(e.y), $e = (e) => !isNaN(e) && isFinite(e), pe = Symbol.for("internals"), fp = ["Enter", " ", "Escape"], hp = (e, t) => {
  process.env.NODE_ENV === "development" && console.warn(`[React Flow]: ${t} Help: https://reactflow.dev/error#${e}`);
}, rw = (e) => "nativeEvent" in e;
function Is(e) {
  const n = (rw(e) ? e.nativeEvent : e).composedPath?.()?.[0] || e.target;
  return ["INPUT", "SELECT", "TEXTAREA"].includes(n?.nodeName) || n?.hasAttribute("contenteditable") || !!n?.closest(".nokey");
}
const pp = (e) => "clientX" in e, xt = (e, t) => {
  const n = pp(e), r = n ? e.clientX : e.touches?.[0].clientX, i = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: i - (t?.top ?? 0)
  };
}, dr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0, Dn = ({ id: e, path: t, labelX: n, labelY: r, label: i, labelStyle: o, labelShowBg: a, labelBgStyle: s, labelBgPadding: u, labelBgBorderRadius: l, style: c, markerEnd: d, markerStart: f, interactionWidth: h = 20 }) => R.createElement(
  R.Fragment,
  null,
  R.createElement("path", { id: e, style: c, d: t, fill: "none", className: "react-flow__edge-path", markerEnd: d, markerStart: f }),
  h && R.createElement("path", { d: t, fill: "none", strokeOpacity: 0, strokeWidth: h, className: "react-flow__edge-interaction" }),
  i && $e(n) && $e(r) ? R.createElement(ew, { x: n, y: r, label: i, labelStyle: o, labelShowBg: a, labelBgStyle: s, labelBgPadding: u, labelBgBorderRadius: l }) : null
);
Dn.displayName = "BaseEdge";
const iw = (e, t) => typeof t < "u" && t ? `url(#${t})` : typeof e < "u" ? `url(#react-flow__${e})` : "none";
function un(e, t, n) {
  return n === void 0 ? n : (r) => {
    const i = t().edges.find((o) => o.id === e);
    i && n(r, { ...i });
  };
}
function gp({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const i = Math.abs(n - e) / 2, o = n < e ? n + i : n - i, a = Math.abs(r - t) / 2, s = r < t ? r + a : r - a;
  return [o, s, i, a];
}
function mp({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: i, sourceControlY: o, targetControlX: a, targetControlY: s }) {
  const u = e * 0.125 + i * 0.375 + a * 0.375 + n * 0.125, l = t * 0.125 + o * 0.375 + s * 0.375 + r * 0.125, c = Math.abs(u - e), d = Math.abs(l - t);
  return [u, l, c, d];
}
var Bt;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Bt || (Bt = {}));
var kt;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(kt || (kt = {}));
var Sn;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Sn || (Sn = {}));
var bt;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(bt || (bt = {}));
var fr;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(fr || (fr = {}));
var U;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(U || (U = {}));
function mu({ pos: e, x1: t, y1: n, x2: r, y2: i }) {
  return e === U.Left || e === U.Right ? [0.5 * (t + r), n] : [t, 0.5 * (n + i)];
}
function vp({ sourceX: e, sourceY: t, sourcePosition: n = U.Bottom, targetX: r, targetY: i, targetPosition: o = U.Top }) {
  const [a, s] = mu({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: i
  }), [u, l] = mu({
    pos: o,
    x1: r,
    y1: i,
    x2: e,
    y2: t
  }), [c, d, f, h] = mp({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: i,
    sourceControlX: a,
    sourceControlY: s,
    targetControlX: u,
    targetControlY: l
  });
  return [
    `M${e},${t} C${a},${s} ${u},${l} ${r},${i}`,
    c,
    d,
    f,
    h
  ];
}
const cc = ue(({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourcePosition: i = U.Bottom, targetPosition: o = U.Top, label: a, labelStyle: s, labelShowBg: u, labelBgStyle: l, labelBgPadding: c, labelBgBorderRadius: d, style: f, markerEnd: h, markerStart: g, interactionWidth: p }) => {
  const [m, v, b] = vp({
    sourceX: e,
    sourceY: t,
    sourcePosition: i,
    targetX: n,
    targetY: r,
    targetPosition: o
  });
  return R.createElement(Dn, { path: m, labelX: v, labelY: b, label: a, labelStyle: s, labelShowBg: u, labelBgStyle: l, labelBgPadding: c, labelBgBorderRadius: d, style: f, markerEnd: h, markerStart: g, interactionWidth: p });
});
cc.displayName = "SimpleBezierEdge";
const vu = {
  [U.Left]: { x: -1, y: 0 },
  [U.Right]: { x: 1, y: 0 },
  [U.Top]: { x: 0, y: -1 },
  [U.Bottom]: { x: 0, y: 1 }
}, ow = ({ source: e, sourcePosition: t = U.Bottom, target: n }) => t === U.Left || t === U.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, yu = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function aw({ source: e, sourcePosition: t = U.Bottom, target: n, targetPosition: r = U.Top, center: i, offset: o }) {
  const a = vu[t], s = vu[r], u = { x: e.x + a.x * o, y: e.y + a.y * o }, l = { x: n.x + s.x * o, y: n.y + s.y * o }, c = ow({
    source: u,
    sourcePosition: t,
    target: l
  }), d = c.x !== 0 ? "x" : "y", f = c[d];
  let h = [], g, p;
  const m = { x: 0, y: 0 }, v = { x: 0, y: 0 }, [b, w, _, C] = gp({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[d] * s[d] === -1) {
    g = i.x ?? b, p = i.y ?? w;
    const M = [
      { x: g, y: u.y },
      { x: g, y: l.y }
    ], T = [
      { x: u.x, y: p },
      { x: l.x, y: p }
    ];
    a[d] === f ? h = d === "x" ? M : T : h = d === "x" ? T : M;
  } else {
    const M = [{ x: u.x, y: l.y }], T = [{ x: l.x, y: u.y }];
    if (d === "x" ? h = a.x === f ? T : M : h = a.y === f ? M : T, t === r) {
      const O = Math.abs(e[d] - n[d]);
      if (O <= o) {
        const y = Math.min(o - 1, o - O);
        a[d] === f ? m[d] = (u[d] > e[d] ? -1 : 1) * y : v[d] = (l[d] > n[d] ? -1 : 1) * y;
      }
    }
    if (t !== r) {
      const O = d === "x" ? "y" : "x", y = a[d] === s[O], I = u[O] > l[O], x = u[O] < l[O];
      (a[d] === 1 && (!y && I || y && x) || a[d] !== 1 && (!y && x || y && I)) && (h = d === "x" ? M : T);
    }
    const A = { x: u.x + m.x, y: u.y + m.y }, q = { x: l.x + v.x, y: l.y + v.y }, P = Math.max(Math.abs(A.x - h[0].x), Math.abs(q.x - h[0].x)), F = Math.max(Math.abs(A.y - h[0].y), Math.abs(q.y - h[0].y));
    P >= F ? (g = (A.x + q.x) / 2, p = h[0].y) : (g = h[0].x, p = (A.y + q.y) / 2);
  }
  return [[
    e,
    { x: u.x + m.x, y: u.y + m.y },
    ...h,
    { x: l.x + v.x, y: l.y + v.y },
    n
  ], g, p, _, C];
}
function sw(e, t, n, r) {
  const i = Math.min(yu(e, t) / 2, yu(t, n) / 2, r), { x: o, y: a } = t;
  if (e.x === o && o === n.x || e.y === a && a === n.y)
    return `L${o} ${a}`;
  if (e.y === a) {
    const l = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${o + i * l},${a}Q ${o},${a} ${o},${a + i * c}`;
  }
  const s = e.x < n.x ? 1 : -1, u = e.y < n.y ? -1 : 1;
  return `L ${o},${a + i * u}Q ${o},${a} ${o + i * s},${a}`;
}
function Rs({ sourceX: e, sourceY: t, sourcePosition: n = U.Bottom, targetX: r, targetY: i, targetPosition: o = U.Top, borderRadius: a = 5, centerX: s, centerY: u, offset: l = 20 }) {
  const [c, d, f, h, g] = aw({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: i },
    targetPosition: o,
    center: { x: s, y: u },
    offset: l
  });
  return [c.reduce((m, v, b) => {
    let w = "";
    return b > 0 && b < c.length - 1 ? w = sw(c[b - 1], v, c[b + 1], a) : w = `${b === 0 ? "M" : "L"}${v.x} ${v.y}`, m += w, m;
  }, ""), d, f, h, g];
}
const Lr = ue(({ sourceX: e, sourceY: t, targetX: n, targetY: r, label: i, labelStyle: o, labelShowBg: a, labelBgStyle: s, labelBgPadding: u, labelBgBorderRadius: l, style: c, sourcePosition: d = U.Bottom, targetPosition: f = U.Top, markerEnd: h, markerStart: g, pathOptions: p, interactionWidth: m }) => {
  const [v, b, w] = Rs({
    sourceX: e,
    sourceY: t,
    sourcePosition: d,
    targetX: n,
    targetY: r,
    targetPosition: f,
    borderRadius: p?.borderRadius,
    offset: p?.offset
  });
  return R.createElement(Dn, { path: v, labelX: b, labelY: w, label: i, labelStyle: o, labelShowBg: a, labelBgStyle: s, labelBgPadding: u, labelBgBorderRadius: l, style: c, markerEnd: h, markerStart: g, interactionWidth: m });
});
Lr.displayName = "SmoothStepEdge";
const uc = ue((e) => R.createElement(Lr, { ...e, pathOptions: Fe(() => ({ borderRadius: 0, offset: e.pathOptions?.offset }), [e.pathOptions?.offset]) }));
uc.displayName = "StepEdge";
function cw({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [i, o, a, s] = gp({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, i, o, a, s];
}
const lc = ue(({ sourceX: e, sourceY: t, targetX: n, targetY: r, label: i, labelStyle: o, labelShowBg: a, labelBgStyle: s, labelBgPadding: u, labelBgBorderRadius: l, style: c, markerEnd: d, markerStart: f, interactionWidth: h }) => {
  const [g, p, m] = cw({ sourceX: e, sourceY: t, targetX: n, targetY: r });
  return R.createElement(Dn, { path: g, labelX: p, labelY: m, label: i, labelStyle: o, labelShowBg: a, labelBgStyle: s, labelBgPadding: u, labelBgBorderRadius: l, style: c, markerEnd: d, markerStart: f, interactionWidth: h });
});
lc.displayName = "StraightEdge";
function Un(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function _u({ pos: e, x1: t, y1: n, x2: r, y2: i, c: o }) {
  switch (e) {
    case U.Left:
      return [t - Un(t - r, o), n];
    case U.Right:
      return [t + Un(r - t, o), n];
    case U.Top:
      return [t, n - Un(n - i, o)];
    case U.Bottom:
      return [t, n + Un(i - n, o)];
  }
}
function dc({ sourceX: e, sourceY: t, sourcePosition: n = U.Bottom, targetX: r, targetY: i, targetPosition: o = U.Top, curvature: a = 0.25 }) {
  const [s, u] = _u({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: i,
    c: a
  }), [l, c] = _u({
    pos: o,
    x1: r,
    y1: i,
    x2: e,
    y2: t,
    c: a
  }), [d, f, h, g] = mp({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: i,
    sourceControlX: s,
    sourceControlY: u,
    targetControlX: l,
    targetControlY: c
  });
  return [
    `M${e},${t} C${s},${u} ${l},${c} ${r},${i}`,
    d,
    f,
    h,
    g
  ];
}
const hr = ue(({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourcePosition: i = U.Bottom, targetPosition: o = U.Top, label: a, labelStyle: s, labelShowBg: u, labelBgStyle: l, labelBgPadding: c, labelBgBorderRadius: d, style: f, markerEnd: h, markerStart: g, pathOptions: p, interactionWidth: m }) => {
  const [v, b, w] = dc({
    sourceX: e,
    sourceY: t,
    sourcePosition: i,
    targetX: n,
    targetY: r,
    targetPosition: o,
    curvature: p?.curvature
  });
  return R.createElement(Dn, { path: v, labelX: b, labelY: w, label: a, labelStyle: s, labelShowBg: u, labelBgStyle: l, labelBgPadding: c, labelBgBorderRadius: d, style: f, markerEnd: h, markerStart: g, interactionWidth: m });
});
hr.displayName = "BezierEdge";
const fc = oh(null), uw = fc.Provider;
fc.Consumer;
const lw = () => _r(fc), dw = (e) => "id" in e && "source" in e && "target" in e, fw = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `reactflow__edge-${e}${t || ""}-${n}${r || ""}`, Ts = (e, t) => typeof e > "u" ? "" : typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}`, hw = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), pw = (e, t) => {
  if (!e.source || !e.target)
    return hp("006", Ye.error006()), t;
  let n;
  return dw(e) ? n = { ...e } : n = {
    ...e,
    id: fw(e)
  }, hw(n, t) ? t : t.concat(n);
}, Ls = ({ x: e, y: t }, [n, r, i], o, [a, s]) => {
  const u = {
    x: (e - n) / i,
    y: (t - r) / i
  };
  return o ? {
    x: a * Math.round(u.x / a),
    y: s * Math.round(u.y / s)
  } : u;
}, yp = ({ x: e, y: t }, [n, r, i]) => ({
  x: e * i + n,
  y: t * i + r
}), $t = (e, t = [0, 0]) => {
  if (!e)
    return {
      x: 0,
      y: 0,
      positionAbsolute: {
        x: 0,
        y: 0
      }
    };
  const n = (e.width ?? 0) * t[0], r = (e.height ?? 0) * t[1], i = {
    x: e.position.x - n,
    y: e.position.y - r
  };
  return {
    ...i,
    positionAbsolute: e.positionAbsolute ? {
      x: e.positionAbsolute.x - n,
      y: e.positionAbsolute.y - r
    } : i
  };
}, kr = (e, t = [0, 0]) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, i) => {
    const { x: o, y: a } = $t(i, t).positionAbsolute;
    return lp(r, xn({
      x: o,
      y: a,
      width: i.width || 0,
      height: i.height || 0
    }));
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return dp(n);
}, _p = (e, t, [n, r, i] = [0, 0, 1], o = !1, a = !1, s = [0, 0]) => {
  const u = {
    x: (t.x - n) / i,
    y: (t.y - r) / i,
    width: t.width / i,
    height: t.height / i
  }, l = [];
  return e.forEach((c) => {
    const { width: d, height: f, selectable: h = !0, hidden: g = !1 } = c;
    if (a && !h || g)
      return !1;
    const { positionAbsolute: p } = $t(c, s), m = {
      x: p.x,
      y: p.y,
      width: d || 0,
      height: f || 0
    }, v = As(u, m), b = typeof d > "u" || typeof f > "u" || d === null || f === null, w = o && v > 0, _ = (d || 0) * (f || 0);
    (b || w || v >= _ || c.dragging) && l.push(c);
  }), l;
}, bp = (e, t) => {
  const n = e.map((r) => r.id);
  return t.filter((r) => n.includes(r.source) || n.includes(r.target));
}, wp = (e, t, n, r, i, o = 0.1) => {
  const a = t / (e.width * (1 + o)), s = n / (e.height * (1 + o)), u = Math.min(a, s), l = en(u, r, i), c = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - c * l, h = n / 2 - d * l;
  return { x: f, y: h, zoom: l };
}, Rt = (e, t = 0) => e.transition().duration(t);
function bu(e, t, n, r) {
  return (t[n] || []).reduce((i, o) => (`${e.id}-${o.id}-${n}` !== r && i.push({
    id: o.id || null,
    type: n,
    nodeId: e.id,
    x: (e.positionAbsolute?.x ?? 0) + o.x + o.width / 2,
    y: (e.positionAbsolute?.y ?? 0) + o.y + o.height / 2
  }), i), []);
}
function gw(e, t, n, r, i, o) {
  const { x: a, y: s } = xt(e), l = t.elementsFromPoint(a, s).find((g) => g.classList.contains("react-flow__handle"));
  if (l) {
    const g = l.getAttribute("data-nodeid");
    if (g) {
      const p = hc(void 0, l), m = l.getAttribute("data-handleid"), v = o({ nodeId: g, id: m, type: p });
      if (v) {
        const b = i.find((w) => w.nodeId === g && w.type === p && w.id === m);
        return {
          handle: {
            id: m,
            type: p,
            nodeId: g,
            x: b?.x || n.x,
            y: b?.y || n.y
          },
          validHandleResult: v
        };
      }
    }
  }
  let c = [], d = 1 / 0;
  if (i.forEach((g) => {
    const p = Math.sqrt((g.x - n.x) ** 2 + (g.y - n.y) ** 2);
    if (p <= r) {
      const m = o(g);
      p <= d && (p < d ? c = [{ handle: g, validHandleResult: m }] : p === d && c.push({
        handle: g,
        validHandleResult: m
      }), d = p);
    }
  }), !c.length)
    return { handle: null, validHandleResult: Ep() };
  if (c.length === 1)
    return c[0];
  const f = c.some(({ validHandleResult: g }) => g.isValid), h = c.some(({ handle: g }) => g.type === "target");
  return c.find(({ handle: g, validHandleResult: p }) => h ? g.type === "target" : f ? p.isValid : !0) || c[0];
}
const mw = { source: null, target: null, sourceHandle: null, targetHandle: null }, Ep = () => ({
  handleDomNode: null,
  isValid: !1,
  connection: mw,
  endHandle: null
});
function xp(e, t, n, r, i, o, a) {
  const s = i === "target", u = a.querySelector(`.react-flow__handle[data-id="${e?.nodeId}-${e?.id}-${e?.type}"]`), l = {
    ...Ep(),
    handleDomNode: u
  };
  if (u) {
    const c = hc(void 0, u), d = u.getAttribute("data-nodeid"), f = u.getAttribute("data-handleid"), h = u.classList.contains("connectable"), g = u.classList.contains("connectableend"), p = {
      source: s ? d : n,
      sourceHandle: s ? f : r,
      target: s ? n : d,
      targetHandle: s ? r : f
    };
    l.connection = p, h && g && (t === Bt.Strict ? s && c === "source" || !s && c === "target" : d !== n || f !== r) && (l.endHandle = {
      nodeId: d,
      handleId: f,
      type: c
    }, l.isValid = o(p));
  }
  return l;
}
function vw({ nodes: e, nodeId: t, handleId: n, handleType: r }) {
  return e.reduce((i, o) => {
    if (o[pe]) {
      const { handleBounds: a } = o[pe];
      let s = [], u = [];
      a && (s = bu(o, a, "source", `${t}-${n}-${r}`), u = bu(o, a, "target", `${t}-${n}-${r}`)), i.push(...s, ...u);
    }
    return i;
  }, []);
}
function hc(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function ti(e) {
  e?.classList.remove("valid", "connecting", "react-flow__handle-valid", "react-flow__handle-connecting");
}
function yw(e, t) {
  let n = null;
  return t ? n = "valid" : e && !t && (n = "invalid"), n;
}
function Sp({ event: e, handleId: t, nodeId: n, onConnect: r, isTarget: i, getState: o, setState: a, isValidConnection: s, edgeUpdaterType: u, onReconnectEnd: l }) {
  const c = up(e.target), { connectionMode: d, domNode: f, autoPanOnConnect: h, connectionRadius: g, onConnectStart: p, panBy: m, getNodes: v, cancelConnection: b } = o();
  let w = 0, _;
  const { x: C, y: E } = xt(e), M = c?.elementFromPoint(C, E), T = hc(u, M), A = f?.getBoundingClientRect();
  if (!A || !T)
    return;
  let q, P = xt(e, A), F = !1, O = null, y = !1, I = null;
  const x = vw({
    nodes: v(),
    nodeId: n,
    handleId: t,
    handleType: T
  }), L = () => {
    if (!h)
      return;
    const [k, $] = cp(P, A);
    m({ x: k, y: $ }), w = requestAnimationFrame(L);
  };
  a({
    connectionPosition: P,
    connectionStatus: null,
    // connectionNodeId etc will be removed in the next major in favor of connectionStartHandle
    connectionNodeId: n,
    connectionHandleId: t,
    connectionHandleType: T,
    connectionStartHandle: {
      nodeId: n,
      handleId: t,
      type: T
    },
    connectionEndHandle: null
  }), p?.(e, { nodeId: n, handleId: t, handleType: T });
  function D(k) {
    const { transform: $ } = o();
    P = xt(k, A);
    const { handle: B, validHandleResult: G } = gw(k, c, Ls(P, $, !1, [1, 1]), g, x, (H) => xp(H, d, n, t, i ? "target" : "source", s, c));
    if (_ = B, F || (L(), F = !0), I = G.handleDomNode, O = G.connection, y = G.isValid, a({
      connectionPosition: _ && y ? yp({
        x: _.x,
        y: _.y
      }, $) : P,
      connectionStatus: yw(!!_, y),
      connectionEndHandle: G.endHandle
    }), !_ && !y && !I)
      return ti(q);
    O.source !== O.target && I && (ti(q), q = I, I.classList.add("connecting", "react-flow__handle-connecting"), I.classList.toggle("valid", y), I.classList.toggle("react-flow__handle-valid", y));
  }
  function S(k) {
    (_ || I) && O && y && r?.(O), o().onConnectEnd?.(k), u && l?.(k), ti(q), b(), cancelAnimationFrame(w), F = !1, y = !1, O = null, I = null, c.removeEventListener("mousemove", D), c.removeEventListener("mouseup", S), c.removeEventListener("touchmove", D), c.removeEventListener("touchend", S);
  }
  c.addEventListener("mousemove", D), c.addEventListener("mouseup", S), c.addEventListener("touchmove", D), c.addEventListener("touchend", S);
}
const wu = () => !0, _w = (e) => ({
  connectionStartHandle: e.connectionStartHandle,
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName
}), bw = (e, t, n) => (r) => {
  const { connectionStartHandle: i, connectionEndHandle: o, connectionClickStartHandle: a } = r;
  return {
    connecting: i?.nodeId === e && i?.handleId === t && i?.type === n || o?.nodeId === e && o?.handleId === t && o?.type === n,
    clickConnecting: a?.nodeId === e && a?.handleId === t && a?.type === n
  };
}, Cp = ah(({ type: e = "source", position: t = U.Top, isValidConnection: n, isConnectable: r = !0, isConnectableStart: i = !0, isConnectableEnd: o = !0, id: a, onConnect: s, children: u, className: l, onMouseDown: c, onTouchStart: d, ...f }, h) => {
  const g = a || null, p = e === "target", m = _e(), v = lw(), { connectOnClick: b, noPanClassName: w } = le(_w, ye), { connecting: _, clickConnecting: C } = le(bw(v, g, e), ye);
  v || m.getState().onError?.("010", Ye.error010());
  const E = (A) => {
    const { defaultEdgeOptions: q, onConnect: P, hasDefaultEdges: F } = m.getState(), O = {
      ...q,
      ...A
    };
    if (F) {
      const { edges: y, setEdges: I } = m.getState();
      I(pw(O, y));
    }
    P?.(O), s?.(O);
  }, M = (A) => {
    if (!v)
      return;
    const q = pp(A);
    i && (q && A.button === 0 || !q) && Sp({
      event: A,
      handleId: g,
      nodeId: v,
      onConnect: E,
      isTarget: p,
      getState: m.getState,
      setState: m.setState,
      isValidConnection: n || m.getState().isValidConnection || wu
    }), q ? c?.(A) : d?.(A);
  }, T = (A) => {
    const { onClickConnectStart: q, onClickConnectEnd: P, connectionClickStartHandle: F, connectionMode: O, isValidConnection: y } = m.getState();
    if (!v || !F && !i)
      return;
    if (!F) {
      q?.(A, { nodeId: v, handleId: g, handleType: e }), m.setState({ connectionClickStartHandle: { nodeId: v, type: e, handleId: g } });
      return;
    }
    const I = up(A.target), x = n || y || wu, { connection: L, isValid: D } = xp({
      nodeId: v,
      id: g,
      type: e
    }, O, F.nodeId, F.handleId || null, F.type, x, I);
    D && E(L), P?.(A), m.setState({ connectionClickStartHandle: null });
  };
  return R.createElement("div", { "data-handleid": g, "data-nodeid": v, "data-handlepos": t, "data-id": `${v}-${g}-${e}`, className: Se([
    "react-flow__handle",
    `react-flow__handle-${t}`,
    "nodrag",
    w,
    l,
    {
      source: !p,
      target: p,
      connectable: r,
      connectablestart: i,
      connectableend: o,
      connecting: C,
      // this class is used to style the handle when the user is connecting
      connectionindicator: r && (i && !_ || o && _)
    }
  ]), onMouseDown: M, onTouchStart: M, onClick: b ? T : void 0, ref: h, ...f }, u);
});
Cp.displayName = "Handle";
var Ct = ue(Cp);
const Np = ({ data: e, isConnectable: t, targetPosition: n = U.Top, sourcePosition: r = U.Bottom }) => R.createElement(
  R.Fragment,
  null,
  R.createElement(Ct, { type: "target", position: n, isConnectable: t }),
  e?.label,
  R.createElement(Ct, { type: "source", position: r, isConnectable: t })
);
Np.displayName = "DefaultNode";
var ks = ue(Np);
const Mp = ({ data: e, isConnectable: t, sourcePosition: n = U.Bottom }) => R.createElement(
  R.Fragment,
  null,
  e?.label,
  R.createElement(Ct, { type: "source", position: n, isConnectable: t })
);
Mp.displayName = "InputNode";
var Ap = ue(Mp);
const Ip = ({ data: e, isConnectable: t, targetPosition: n = U.Top }) => R.createElement(
  R.Fragment,
  null,
  R.createElement(Ct, { type: "target", position: n, isConnectable: t }),
  e?.label
);
Ip.displayName = "OutputNode";
var Rp = ue(Ip);
const pc = () => null;
pc.displayName = "GroupNode";
const ww = (e) => ({
  selectedNodes: e.getNodes().filter((t) => t.selected),
  selectedEdges: e.edges.filter((t) => t.selected).map((t) => ({ ...t }))
}), Kn = (e) => e.id;
function Ew(e, t) {
  return ye(e.selectedNodes.map(Kn), t.selectedNodes.map(Kn)) && ye(e.selectedEdges.map(Kn), t.selectedEdges.map(Kn));
}
const Tp = ue(({ onSelectionChange: e }) => {
  const t = _e(), { selectedNodes: n, selectedEdges: r } = le(ww, Ew);
  return ce(() => {
    const i = { nodes: n, edges: r };
    e?.(i), t.getState().onSelectionChange.forEach((o) => o(i));
  }, [n, r, e]), null;
});
Tp.displayName = "SelectionListener";
const xw = (e) => !!e.onSelectionChange;
function Sw({ onSelectionChange: e }) {
  const t = le(xw);
  return e || t ? R.createElement(Tp, { onSelectionChange: e }) : null;
}
const Cw = (e) => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset
});
function Vt(e, t) {
  ce(() => {
    typeof e < "u" && t(e);
  }, [e]);
}
function ne(e, t, n) {
  ce(() => {
    typeof t < "u" && n({ [e]: t });
  }, [t]);
}
const Nw = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, onConnect: i, onConnectStart: o, onConnectEnd: a, onClickConnectStart: s, onClickConnectEnd: u, nodesDraggable: l, nodesConnectable: c, nodesFocusable: d, edgesFocusable: f, edgesUpdatable: h, elevateNodesOnSelect: g, minZoom: p, maxZoom: m, nodeExtent: v, onNodesChange: b, onEdgesChange: w, elementsSelectable: _, connectionMode: C, snapGrid: E, snapToGrid: M, translateExtent: T, connectOnClick: A, defaultEdgeOptions: q, fitView: P, fitViewOptions: F, onNodesDelete: O, onEdgesDelete: y, onNodeDrag: I, onNodeDragStart: x, onNodeDragStop: L, onSelectionDrag: D, onSelectionDragStart: S, onSelectionDragStop: k, noPanClassName: $, nodeOrigin: B, rfId: G, autoPanOnConnect: H, autoPanOnNodeDrag: X, onError: J, connectionRadius: z, isValidConnection: V, nodeDragThreshold: W }) => {
  const { setNodes: j, setEdges: ie, setDefaultNodesAndEdges: oe, setMinZoom: de, setMaxZoom: me, setTranslateExtent: Z, setNodeExtent: be, reset: Y } = le(Cw, ye), K = _e();
  return ce(() => {
    const he = r?.map((He) => ({ ...He, ...q }));
    return oe(n, he), () => {
      Y();
    };
  }, []), ne("defaultEdgeOptions", q, K.setState), ne("connectionMode", C, K.setState), ne("onConnect", i, K.setState), ne("onConnectStart", o, K.setState), ne("onConnectEnd", a, K.setState), ne("onClickConnectStart", s, K.setState), ne("onClickConnectEnd", u, K.setState), ne("nodesDraggable", l, K.setState), ne("nodesConnectable", c, K.setState), ne("nodesFocusable", d, K.setState), ne("edgesFocusable", f, K.setState), ne("edgesUpdatable", h, K.setState), ne("elementsSelectable", _, K.setState), ne("elevateNodesOnSelect", g, K.setState), ne("snapToGrid", M, K.setState), ne("snapGrid", E, K.setState), ne("onNodesChange", b, K.setState), ne("onEdgesChange", w, K.setState), ne("connectOnClick", A, K.setState), ne("fitViewOnInit", P, K.setState), ne("fitViewOnInitOptions", F, K.setState), ne("onNodesDelete", O, K.setState), ne("onEdgesDelete", y, K.setState), ne("onNodeDrag", I, K.setState), ne("onNodeDragStart", x, K.setState), ne("onNodeDragStop", L, K.setState), ne("onSelectionDrag", D, K.setState), ne("onSelectionDragStart", S, K.setState), ne("onSelectionDragStop", k, K.setState), ne("noPanClassName", $, K.setState), ne("nodeOrigin", B, K.setState), ne("rfId", G, K.setState), ne("autoPanOnConnect", H, K.setState), ne("autoPanOnNodeDrag", X, K.setState), ne("onError", J, K.setState), ne("connectionRadius", z, K.setState), ne("isValidConnection", V, K.setState), ne("nodeDragThreshold", W, K.setState), Vt(e, j), Vt(t, ie), Vt(p, de), Vt(m, me), Vt(T, Z), Vt(v, be), null;
}, Eu = { display: "none" }, Mw = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, Lp = "react-flow__node-desc", kp = "react-flow__edge-desc", Aw = "react-flow__aria-live", Iw = (e) => e.ariaLiveMessage;
function Rw({ rfId: e }) {
  const t = le(Iw);
  return R.createElement("div", { id: `${Aw}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: Mw }, t);
}
function Tw({ rfId: e, disableKeyboardA11y: t }) {
  return R.createElement(
    R.Fragment,
    null,
    R.createElement(
      "div",
      { id: `${Lp}-${e}`, style: Eu },
      "Press enter or space to select a node.",
      !t && "You can then use the arrow keys to move the node around.",
      " Press delete to remove it and escape to cancel.",
      " "
    ),
    R.createElement("div", { id: `${kp}-${e}`, style: Eu }, "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel."),
    !t && R.createElement(Rw, { rfId: e })
  );
}
var Cn = (e = null, t = { actInsideInputWithModifier: !0 }) => {
  const [n, r] = ae(!1), i = ee(!1), o = ee(/* @__PURE__ */ new Set([])), [a, s] = Fe(() => {
    if (e !== null) {
      const l = (Array.isArray(e) ? e : [e]).filter((d) => typeof d == "string").map((d) => d.split("+")), c = l.reduce((d, f) => d.concat(...f), []);
      return [l, c];
    }
    return [[], []];
  }, [e]);
  return ce(() => {
    const u = typeof document < "u" ? document : null, l = t?.target || u;
    if (e !== null) {
      const c = (h) => {
        if (i.current = h.ctrlKey || h.metaKey || h.shiftKey, (!i.current || i.current && !t.actInsideInputWithModifier) && Is(h))
          return !1;
        const p = Su(h.code, s);
        o.current.add(h[p]), xu(a, o.current, !1) && (h.preventDefault(), r(!0));
      }, d = (h) => {
        if ((!i.current || i.current && !t.actInsideInputWithModifier) && Is(h))
          return !1;
        const p = Su(h.code, s);
        xu(a, o.current, !0) ? (r(!1), o.current.clear()) : o.current.delete(h[p]), h.key === "Meta" && o.current.clear(), i.current = !1;
      }, f = () => {
        o.current.clear(), r(!1);
      };
      return l?.addEventListener("keydown", c), l?.addEventListener("keyup", d), window.addEventListener("blur", f), () => {
        l?.removeEventListener("keydown", c), l?.removeEventListener("keyup", d), window.removeEventListener("blur", f);
      };
    }
  }, [e, r]), n;
};
function xu(e, t, n) {
  return e.filter((r) => n || r.length === t.size).some((r) => r.every((i) => t.has(i)));
}
function Su(e, t) {
  return t.includes(e) ? "code" : "key";
}
function qp(e, t, n, r) {
  const i = e.parentNode || e.parentId;
  if (!i)
    return n;
  const o = t.get(i), a = $t(o, r);
  return qp(o, t, {
    x: (n.x ?? 0) + a.x,
    y: (n.y ?? 0) + a.y,
    z: (o[pe]?.z ?? 0) > (n.z ?? 0) ? o[pe]?.z ?? 0 : n.z ?? 0
  }, r);
}
function Op(e, t, n) {
  e.forEach((r) => {
    const i = r.parentNode || r.parentId;
    if (i && !e.has(i))
      throw new Error(`Parent node ${i} not found`);
    if (i || n?.[r.id]) {
      const { x: o, y: a, z: s } = qp(r, e, {
        ...r.position,
        z: r[pe]?.z ?? 0
      }, t);
      r.positionAbsolute = {
        x: o,
        y: a
      }, r[pe].z = s, n?.[r.id] && (r[pe].isParent = !0);
    }
  });
}
function ni(e, t, n, r) {
  const i = /* @__PURE__ */ new Map(), o = {}, a = r ? 1e3 : 0;
  return e.forEach((s) => {
    const u = ($e(s.zIndex) ? s.zIndex : 0) + (s.selected ? a : 0), l = t.get(s.id), c = {
      ...s,
      positionAbsolute: {
        x: s.position.x,
        y: s.position.y
      }
    }, d = s.parentNode || s.parentId;
    d && (o[d] = !0);
    const f = l?.type && l?.type !== s.type;
    Object.defineProperty(c, pe, {
      enumerable: !1,
      value: {
        handleBounds: f ? void 0 : l?.[pe]?.handleBounds,
        z: u
      }
    }), i.set(s.id, c);
  }), Op(i, n, o), i;
}
function Pp(e, t = {}) {
  const { getNodes: n, width: r, height: i, minZoom: o, maxZoom: a, d3Zoom: s, d3Selection: u, fitViewOnInitDone: l, fitViewOnInit: c, nodeOrigin: d } = e(), f = t.initial && !l && c;
  if (s && u && (f || !t.initial)) {
    const g = n().filter((m) => {
      const v = t.includeHiddenNodes ? m.width && m.height : !m.hidden;
      return t.nodes?.length ? v && t.nodes.some((b) => b.id === m.id) : v;
    }), p = g.every((m) => m.width && m.height);
    if (g.length > 0 && p) {
      const m = kr(g, d), { x: v, y: b, zoom: w } = wp(m, r, i, t.minZoom ?? o, t.maxZoom ?? a, t.padding ?? 0.1), _ = ut.translate(v, b).scale(w);
      return typeof t.duration == "number" && t.duration > 0 ? s.transform(Rt(u, t.duration), _) : s.transform(u, _), !0;
    }
  }
  return !1;
}
function Lw(e, t) {
  return e.forEach((n) => {
    const r = t.get(n.id);
    r && t.set(r.id, {
      ...r,
      [pe]: r[pe],
      selected: n.selected
    });
  }), new Map(t);
}
function kw(e, t) {
  return t.map((n) => {
    const r = e.find((i) => i.id === n.id);
    return r && (n.selected = r.selected), n;
  });
}
function Yn({ changedNodes: e, changedEdges: t, get: n, set: r }) {
  const { nodeInternals: i, edges: o, onNodesChange: a, onEdgesChange: s, hasDefaultNodes: u, hasDefaultEdges: l } = n();
  e?.length && (u && r({ nodeInternals: Lw(e, i) }), a?.(e)), t?.length && (l && r({ edges: kw(t, o) }), s?.(t));
}
const Gt = () => {
}, qw = {
  zoomIn: Gt,
  zoomOut: Gt,
  zoomTo: Gt,
  getZoom: () => 1,
  setViewport: Gt,
  getViewport: () => ({ x: 0, y: 0, zoom: 1 }),
  fitView: () => !1,
  setCenter: Gt,
  fitBounds: Gt,
  project: (e) => e,
  screenToFlowPosition: (e) => e,
  flowToScreenPosition: (e) => e,
  viewportInitialized: !1
}, Ow = (e) => ({
  d3Zoom: e.d3Zoom,
  d3Selection: e.d3Selection
}), Pw = () => {
  const e = _e(), { d3Zoom: t, d3Selection: n } = le(Ow, ye);
  return Fe(() => n && t ? {
    zoomIn: (i) => t.scaleBy(Rt(n, i?.duration), 1.2),
    zoomOut: (i) => t.scaleBy(Rt(n, i?.duration), 1 / 1.2),
    zoomTo: (i, o) => t.scaleTo(Rt(n, o?.duration), i),
    getZoom: () => e.getState().transform[2],
    setViewport: (i, o) => {
      const [a, s, u] = e.getState().transform, l = ut.translate(i.x ?? a, i.y ?? s).scale(i.zoom ?? u);
      t.transform(Rt(n, o?.duration), l);
    },
    getViewport: () => {
      const [i, o, a] = e.getState().transform;
      return { x: i, y: o, zoom: a };
    },
    fitView: (i) => Pp(e.getState, i),
    setCenter: (i, o, a) => {
      const { width: s, height: u, maxZoom: l } = e.getState(), c = typeof a?.zoom < "u" ? a.zoom : l, d = s / 2 - i * c, f = u / 2 - o * c, h = ut.translate(d, f).scale(c);
      t.transform(Rt(n, a?.duration), h);
    },
    fitBounds: (i, o) => {
      const { width: a, height: s, minZoom: u, maxZoom: l } = e.getState(), { x: c, y: d, zoom: f } = wp(i, a, s, u, l, o?.padding ?? 0.1), h = ut.translate(c, d).scale(f);
      t.transform(Rt(n, o?.duration), h);
    },
    // @deprecated Use `screenToFlowPosition`.
    project: (i) => {
      const { transform: o, snapToGrid: a, snapGrid: s } = e.getState();
      return console.warn("[DEPRECATED] `project` is deprecated. Instead use `screenToFlowPosition`. There is no need to subtract the react flow bounds anymore! https://reactflow.dev/api-reference/types/react-flow-instance#screen-to-flow-position"), Ls(i, o, a, s);
    },
    screenToFlowPosition: (i) => {
      const { transform: o, snapToGrid: a, snapGrid: s, domNode: u } = e.getState();
      if (!u)
        return i;
      const { x: l, y: c } = u.getBoundingClientRect(), d = {
        x: i.x - l,
        y: i.y - c
      };
      return Ls(d, o, a, s);
    },
    flowToScreenPosition: (i) => {
      const { transform: o, domNode: a } = e.getState();
      if (!a)
        return i;
      const { x: s, y: u } = a.getBoundingClientRect(), l = yp(i, o);
      return {
        x: l.x + s,
        y: l.y + u
      };
    },
    viewportInitialized: !0
  } : qw, [t, n]);
};
function gc() {
  const e = Pw(), t = _e(), n = ve(() => t.getState().getNodes().map((p) => ({ ...p })), []), r = ve((p) => t.getState().nodeInternals.get(p), []), i = ve(() => {
    const { edges: p = [] } = t.getState();
    return p.map((m) => ({ ...m }));
  }, []), o = ve((p) => {
    const { edges: m = [] } = t.getState();
    return m.find((v) => v.id === p);
  }, []), a = ve((p) => {
    const { getNodes: m, setNodes: v, hasDefaultNodes: b, onNodesChange: w } = t.getState(), _ = m(), C = typeof p == "function" ? p(_) : p;
    if (b)
      v(C);
    else if (w) {
      const E = C.length === 0 ? _.map((M) => ({ type: "remove", id: M.id })) : C.map((M) => ({ item: M, type: "reset" }));
      w(E);
    }
  }, []), s = ve((p) => {
    const { edges: m = [], setEdges: v, hasDefaultEdges: b, onEdgesChange: w } = t.getState(), _ = typeof p == "function" ? p(m) : p;
    if (b)
      v(_);
    else if (w) {
      const C = _.length === 0 ? m.map((E) => ({ type: "remove", id: E.id })) : _.map((E) => ({ item: E, type: "reset" }));
      w(C);
    }
  }, []), u = ve((p) => {
    const m = Array.isArray(p) ? p : [p], { getNodes: v, setNodes: b, hasDefaultNodes: w, onNodesChange: _ } = t.getState();
    if (w) {
      const E = [...v(), ...m];
      b(E);
    } else if (_) {
      const C = m.map((E) => ({ item: E, type: "add" }));
      _(C);
    }
  }, []), l = ve((p) => {
    const m = Array.isArray(p) ? p : [p], { edges: v = [], setEdges: b, hasDefaultEdges: w, onEdgesChange: _ } = t.getState();
    if (w)
      b([...v, ...m]);
    else if (_) {
      const C = m.map((E) => ({ item: E, type: "add" }));
      _(C);
    }
  }, []), c = ve(() => {
    const { getNodes: p, edges: m = [], transform: v } = t.getState(), [b, w, _] = v;
    return {
      nodes: p().map((C) => ({ ...C })),
      edges: m.map((C) => ({ ...C })),
      viewport: {
        x: b,
        y: w,
        zoom: _
      }
    };
  }, []), d = ve(({ nodes: p, edges: m }) => {
    const { nodeInternals: v, getNodes: b, edges: w, hasDefaultNodes: _, hasDefaultEdges: C, onNodesDelete: E, onEdgesDelete: M, onNodesChange: T, onEdgesChange: A } = t.getState(), q = (p || []).map((I) => I.id), P = (m || []).map((I) => I.id), F = b().reduce((I, x) => {
      const L = x.parentNode || x.parentId, D = !q.includes(x.id) && L && I.find((k) => k.id === L);
      return (typeof x.deletable == "boolean" ? x.deletable : !0) && (q.includes(x.id) || D) && I.push(x), I;
    }, []), O = w.filter((I) => typeof I.deletable == "boolean" ? I.deletable : !0), y = O.filter((I) => P.includes(I.id));
    if (F || y) {
      const I = bp(F, O), x = [...y, ...I], L = x.reduce((D, S) => (D.includes(S.id) || D.push(S.id), D), []);
      if ((C || _) && (C && t.setState({
        edges: w.filter((D) => !L.includes(D.id))
      }), _ && (F.forEach((D) => {
        v.delete(D.id);
      }), t.setState({
        nodeInternals: new Map(v)
      }))), L.length > 0 && (M?.(x), A && A(L.map((D) => ({
        id: D,
        type: "remove"
      })))), F.length > 0 && (E?.(F), T)) {
        const D = F.map((S) => ({ id: S.id, type: "remove" }));
        T(D);
      }
    }
  }, []), f = ve((p) => {
    const m = nw(p), v = m ? null : t.getState().nodeInternals.get(p.id);
    return !m && !v ? [null, null, m] : [m ? p : gu(v), v, m];
  }, []), h = ve((p, m = !0, v) => {
    const [b, w, _] = f(p);
    return b ? (v || t.getState().getNodes()).filter((C) => {
      if (!_ && (C.id === w.id || !C.positionAbsolute))
        return !1;
      const E = gu(C), M = As(E, b);
      return m && M > 0 || M >= b.width * b.height;
    }) : [];
  }, []), g = ve((p, m, v = !0) => {
    const [b] = f(p);
    if (!b)
      return !1;
    const w = As(b, m);
    return v && w > 0 || w >= b.width * b.height;
  }, []);
  return Fe(() => ({
    ...e,
    getNodes: n,
    getNode: r,
    getEdges: i,
    getEdge: o,
    setNodes: a,
    setEdges: s,
    addNodes: u,
    addEdges: l,
    toObject: c,
    deleteElements: d,
    getIntersectingNodes: h,
    isNodeIntersecting: g
  }), [
    e,
    n,
    r,
    i,
    o,
    a,
    s,
    u,
    l,
    c,
    d,
    h,
    g
  ]);
}
const Dw = { actInsideInputWithModifier: !1 };
var $w = ({ deleteKeyCode: e, multiSelectionKeyCode: t }) => {
  const n = _e(), { deleteElements: r } = gc(), i = Cn(e, Dw), o = Cn(t);
  ce(() => {
    if (i) {
      const { edges: a, getNodes: s } = n.getState(), u = s().filter((c) => c.selected), l = a.filter((c) => c.selected);
      r({ nodes: u, edges: l }), n.setState({ nodesSelectionActive: !1 });
    }
  }, [i]), ce(() => {
    n.setState({ multiSelectionActive: o });
  }, [o]);
};
function Fw(e) {
  const t = _e();
  ce(() => {
    let n;
    const r = () => {
      if (!e.current)
        return;
      const i = ac(e.current);
      (i.height === 0 || i.width === 0) && t.getState().onError?.("004", Ye.error004()), t.setState({ width: i.width || 500, height: i.height || 500 });
    };
    return r(), window.addEventListener("resize", r), e.current && (n = new ResizeObserver(() => r()), n.observe(e.current)), () => {
      window.removeEventListener("resize", r), n && e.current && n.unobserve(e.current);
    };
  }, []);
}
const mc = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, Bw = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Wn = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Ut = (e, t) => e.target.closest(`.${t}`), Cu = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Nu = (e) => {
  const t = e.ctrlKey && dr() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
}, zw = (e) => ({
  d3Zoom: e.d3Zoom,
  d3Selection: e.d3Selection,
  d3ZoomHandler: e.d3ZoomHandler,
  userSelectionActive: e.userSelectionActive
}), Hw = ({ onMove: e, onMoveStart: t, onMoveEnd: n, onPaneContextMenu: r, zoomOnScroll: i = !0, zoomOnPinch: o = !0, panOnScroll: a = !1, panOnScrollSpeed: s = 0.5, panOnScrollMode: u = kt.Free, zoomOnDoubleClick: l = !0, elementsSelectable: c, panOnDrag: d = !0, defaultViewport: f, translateExtent: h, minZoom: g, maxZoom: p, zoomActivationKeyCode: m, preventScrolling: v = !0, children: b, noWheelClassName: w, noPanClassName: _ }) => {
  const C = ee(), E = _e(), M = ee(!1), T = ee(!1), A = ee(null), q = ee({ x: 0, y: 0, zoom: 0 }), { d3Zoom: P, d3Selection: F, d3ZoomHandler: O, userSelectionActive: y } = le(zw, ye), I = Cn(m), x = ee(0), L = ee(!1), D = ee();
  return Fw(A), ce(() => {
    if (A.current) {
      const S = A.current.getBoundingClientRect(), k = ap().scaleExtent([g, p]).translateExtent(h), $ = De(A.current).call(k), B = ut.translate(f.x, f.y).scale(en(f.zoom, g, p)), G = [
        [0, 0],
        [S.width, S.height]
      ], H = k.constrain()(B, G, h);
      k.transform($, H), k.wheelDelta(Nu), E.setState({
        d3Zoom: k,
        d3Selection: $,
        d3ZoomHandler: $.on("wheel.zoom"),
        // we need to pass transform because zoom handler is not registered when we set the initial transform
        transform: [H.x, H.y, H.k],
        domNode: A.current.closest(".react-flow")
      });
    }
  }, []), ce(() => {
    F && P && (a && !I && !y ? F.on("wheel.zoom", (S) => {
      if (Ut(S, w))
        return !1;
      S.preventDefault(), S.stopImmediatePropagation();
      const k = F.property("__zoom").k || 1;
      if (S.ctrlKey && o) {
        const V = Ge(S), W = Nu(S), j = k * Math.pow(2, W);
        P.scaleTo(F, j, V, S);
        return;
      }
      const $ = S.deltaMode === 1 ? 20 : 1;
      let B = u === kt.Vertical ? 0 : S.deltaX * $, G = u === kt.Horizontal ? 0 : S.deltaY * $;
      !dr() && S.shiftKey && u !== kt.Vertical && (B = S.deltaY * $, G = 0), P.translateBy(
        F,
        -(B / k) * s,
        -(G / k) * s,
        // @ts-ignore
        { internal: !0 }
      );
      const H = Wn(F.property("__zoom")), { onViewportChangeStart: X, onViewportChange: J, onViewportChangeEnd: z } = E.getState();
      clearTimeout(D.current), L.current || (L.current = !0, t?.(S, H), X?.(H)), L.current && (e?.(S, H), J?.(H), D.current = setTimeout(() => {
        n?.(S, H), z?.(H), L.current = !1;
      }, 150));
    }, { passive: !1 }) : typeof O < "u" && F.on("wheel.zoom", function(S, k) {
      if (!v && S.type === "wheel" && !S.ctrlKey || Ut(S, w))
        return null;
      S.preventDefault(), O.call(this, S, k);
    }, { passive: !1 }));
  }, [
    y,
    a,
    u,
    F,
    P,
    O,
    I,
    o,
    v,
    w,
    t,
    e,
    n
  ]), ce(() => {
    P && P.on("start", (S) => {
      if (!S.sourceEvent || S.sourceEvent.internal)
        return null;
      x.current = S.sourceEvent?.button;
      const { onViewportChangeStart: k } = E.getState(), $ = Wn(S.transform);
      M.current = !0, q.current = $, S.sourceEvent?.type === "mousedown" && E.setState({ paneDragging: !0 }), k?.($), t?.(S.sourceEvent, $);
    });
  }, [P, t]), ce(() => {
    P && (y && !M.current ? P.on("zoom", null) : y || P.on("zoom", (S) => {
      const { onViewportChange: k } = E.getState();
      if (E.setState({ transform: [S.transform.x, S.transform.y, S.transform.k] }), T.current = !!(r && Cu(d, x.current ?? 0)), (e || k) && !S.sourceEvent?.internal) {
        const $ = Wn(S.transform);
        k?.($), e?.(S.sourceEvent, $);
      }
    }));
  }, [y, P, e, d, r]), ce(() => {
    P && P.on("end", (S) => {
      if (!S.sourceEvent || S.sourceEvent.internal)
        return null;
      const { onViewportChangeEnd: k } = E.getState();
      if (M.current = !1, E.setState({ paneDragging: !1 }), r && Cu(d, x.current ?? 0) && !T.current && r(S.sourceEvent), T.current = !1, (n || k) && Bw(q.current, S.transform)) {
        const $ = Wn(S.transform);
        q.current = $, clearTimeout(C.current), C.current = setTimeout(() => {
          k?.($), n?.(S.sourceEvent, $);
        }, a ? 150 : 0);
      }
    });
  }, [P, a, d, n, r]), ce(() => {
    P && P.filter((S) => {
      const k = I || i, $ = o && S.ctrlKey;
      if ((d === !0 || Array.isArray(d) && d.includes(1)) && S.button === 1 && S.type === "mousedown" && (Ut(S, "react-flow__node") || Ut(S, "react-flow__edge")))
        return !0;
      if (!d && !k && !a && !l && !o || y || !l && S.type === "dblclick" || Ut(S, w) && S.type === "wheel" || Ut(S, _) && (S.type !== "wheel" || a && S.type === "wheel" && !I) || !o && S.ctrlKey && S.type === "wheel" || !k && !a && !$ && S.type === "wheel" || !d && (S.type === "mousedown" || S.type === "touchstart") || Array.isArray(d) && !d.includes(S.button) && S.type === "mousedown")
        return !1;
      const B = Array.isArray(d) && d.includes(S.button) || !S.button || S.button <= 1;
      return (!S.ctrlKey || S.type === "wheel") && B;
    });
  }, [
    y,
    P,
    i,
    o,
    a,
    l,
    d,
    c,
    I
  ]), R.createElement("div", { className: "react-flow__renderer", ref: A, style: mc }, b);
}, Vw = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect
});
function Gw() {
  const { userSelectionActive: e, userSelectionRect: t } = le(Vw, ye);
  return e && t ? R.createElement("div", { className: "react-flow__selection react-flow__container", style: {
    width: t.width,
    height: t.height,
    transform: `translate(${t.x}px, ${t.y}px)`
  } }) : null;
}
function Mu(e, t) {
  const n = t.parentNode || t.parentId, r = e.find((i) => i.id === n);
  if (r) {
    const i = t.position.x + t.width - r.width, o = t.position.y + t.height - r.height;
    if (i > 0 || o > 0 || t.position.x < 0 || t.position.y < 0) {
      if (r.style = { ...r.style }, r.style.width = r.style.width ?? r.width, r.style.height = r.style.height ?? r.height, i > 0 && (r.style.width += i), o > 0 && (r.style.height += o), t.position.x < 0) {
        const a = Math.abs(t.position.x);
        r.position.x = r.position.x - a, r.style.width += a, t.position.x = 0;
      }
      if (t.position.y < 0) {
        const a = Math.abs(t.position.y);
        r.position.y = r.position.y - a, r.style.height += a, t.position.y = 0;
      }
      r.width = r.style.width, r.height = r.style.height;
    }
  }
}
function Dp(e, t) {
  if (e.some((r) => r.type === "reset"))
    return e.filter((r) => r.type === "reset").map((r) => r.item);
  const n = e.filter((r) => r.type === "add").map((r) => r.item);
  return t.reduce((r, i) => {
    const o = e.filter((s) => s.id === i.id);
    if (o.length === 0)
      return r.push(i), r;
    const a = { ...i };
    for (const s of o)
      if (s)
        switch (s.type) {
          case "select": {
            a.selected = s.selected;
            break;
          }
          case "position": {
            typeof s.position < "u" && (a.position = s.position), typeof s.positionAbsolute < "u" && (a.positionAbsolute = s.positionAbsolute), typeof s.dragging < "u" && (a.dragging = s.dragging), a.expandParent && Mu(r, a);
            break;
          }
          case "dimensions": {
            typeof s.dimensions < "u" && (a.width = s.dimensions.width, a.height = s.dimensions.height), typeof s.updateStyle < "u" && (a.style = { ...a.style || {}, ...s.dimensions }), typeof s.resizing == "boolean" && (a.resizing = s.resizing), a.expandParent && Mu(r, a);
            break;
          }
          case "remove":
            return r;
        }
    return r.push(a), r;
  }, n);
}
function $p(e, t) {
  return Dp(e, t);
}
function Uw(e, t) {
  return Dp(e, t);
}
const _t = (e, t) => ({
  id: e,
  type: "select",
  selected: t
});
function Yt(e, t) {
  return e.reduce((n, r) => {
    const i = t.includes(r.id);
    return !r.selected && i ? (r.selected = !0, n.push(_t(r.id, !0))) : r.selected && !i && (r.selected = !1, n.push(_t(r.id, !1))), n;
  }, []);
}
const ri = (e, t) => (n) => {
  n.target === t.current && e?.(n);
}, Kw = (e) => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  dragging: e.paneDragging
}), Fp = ue(({ isSelecting: e, selectionMode: t = Sn.Full, panOnDrag: n, onSelectionStart: r, onSelectionEnd: i, onPaneClick: o, onPaneContextMenu: a, onPaneScroll: s, onPaneMouseEnter: u, onPaneMouseMove: l, onPaneMouseLeave: c, children: d }) => {
  const f = ee(null), h = _e(), g = ee(0), p = ee(0), m = ee(), { userSelectionActive: v, elementsSelectable: b, dragging: w } = le(Kw, ye), _ = () => {
    h.setState({ userSelectionActive: !1, userSelectionRect: null }), g.current = 0, p.current = 0;
  }, C = (O) => {
    o?.(O), h.getState().resetSelectedElements(), h.setState({ nodesSelectionActive: !1 });
  }, E = (O) => {
    if (Array.isArray(n) && n?.includes(2)) {
      O.preventDefault();
      return;
    }
    a?.(O);
  }, M = s ? (O) => s(O) : void 0, T = (O) => {
    const { resetSelectedElements: y, domNode: I } = h.getState();
    if (m.current = I?.getBoundingClientRect(), !b || !e || O.button !== 0 || O.target !== f.current || !m.current)
      return;
    const { x, y: L } = xt(O, m.current);
    y(), h.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: x,
        startY: L,
        x,
        y: L
      }
    }), r?.(O);
  }, A = (O) => {
    const { userSelectionRect: y, nodeInternals: I, edges: x, transform: L, onNodesChange: D, onEdgesChange: S, nodeOrigin: k, getNodes: $ } = h.getState();
    if (!e || !m.current || !y)
      return;
    h.setState({ userSelectionActive: !0, nodesSelectionActive: !1 });
    const B = xt(O, m.current), G = y.startX ?? 0, H = y.startY ?? 0, X = {
      ...y,
      x: B.x < G ? B.x : G,
      y: B.y < H ? B.y : H,
      width: Math.abs(B.x - G),
      height: Math.abs(B.y - H)
    }, J = $(), z = _p(I, X, L, t === Sn.Partial, !0, k), V = bp(z, x).map((j) => j.id), W = z.map((j) => j.id);
    if (g.current !== W.length) {
      g.current = W.length;
      const j = Yt(J, W);
      j.length && D?.(j);
    }
    if (p.current !== V.length) {
      p.current = V.length;
      const j = Yt(x, V);
      j.length && S?.(j);
    }
    h.setState({
      userSelectionRect: X
    });
  }, q = (O) => {
    if (O.button !== 0)
      return;
    const { userSelectionRect: y } = h.getState();
    !v && y && O.target === f.current && C?.(O), h.setState({ nodesSelectionActive: g.current > 0 }), _(), i?.(O);
  }, P = (O) => {
    v && (h.setState({ nodesSelectionActive: g.current > 0 }), i?.(O)), _();
  }, F = b && (e || v);
  return R.createElement(
    "div",
    { className: Se(["react-flow__pane", { dragging: w, selection: e }]), onClick: F ? void 0 : ri(C, f), onContextMenu: ri(E, f), onWheel: ri(M, f), onMouseEnter: F ? void 0 : u, onMouseDown: F ? T : void 0, onMouseMove: F ? A : l, onMouseUp: F ? q : void 0, onMouseLeave: F ? P : c, ref: f, style: mc },
    d,
    R.createElement(Gw, null)
  );
});
Fp.displayName = "Pane";
function Bp(e, t) {
  const n = e.parentNode || e.parentId;
  if (!n)
    return !1;
  const r = t.get(n);
  return r ? r.selected ? !0 : Bp(r, t) : !1;
}
function Au(e, t, n) {
  let r = e;
  do {
    if (r?.matches(t))
      return !0;
    if (r === n.current)
      return !1;
    r = r.parentElement;
  } while (r);
  return !1;
}
function Yw(e, t, n, r) {
  return Array.from(e.values()).filter((i) => (i.selected || i.id === r) && (!i.parentNode || i.parentId || !Bp(i, e)) && (i.draggable || t && typeof i.draggable > "u")).map((i) => ({
    id: i.id,
    position: i.position || { x: 0, y: 0 },
    positionAbsolute: i.positionAbsolute || { x: 0, y: 0 },
    distance: {
      x: n.x - (i.positionAbsolute?.x ?? 0),
      y: n.y - (i.positionAbsolute?.y ?? 0)
    },
    delta: {
      x: 0,
      y: 0
    },
    extent: i.extent,
    parentNode: i.parentNode || i.parentId,
    parentId: i.parentNode || i.parentId,
    width: i.width,
    height: i.height,
    expandParent: i.expandParent
  }));
}
function Ww(e, t) {
  return !t || t === "parent" ? t : [t[0], [t[1][0] - (e.width || 0), t[1][1] - (e.height || 0)]];
}
function zp(e, t, n, r, i = [0, 0], o) {
  const a = Ww(e, e.extent || r);
  let s = a;
  const u = e.parentNode || e.parentId;
  if (e.extent === "parent" && !e.expandParent)
    if (u && e.width && e.height) {
      const d = n.get(u), { x: f, y: h } = $t(d, i).positionAbsolute;
      s = d && $e(f) && $e(h) && $e(d.width) && $e(d.height) ? [
        [f + e.width * i[0], h + e.height * i[1]],
        [
          f + d.width - e.width + e.width * i[0],
          h + d.height - e.height + e.height * i[1]
        ]
      ] : s;
    } else
      o?.("005", Ye.error005()), s = a;
  else if (e.extent && u && e.extent !== "parent") {
    const d = n.get(u), { x: f, y: h } = $t(d, i).positionAbsolute;
    s = [
      [e.extent[0][0] + f, e.extent[0][1] + h],
      [e.extent[1][0] + f, e.extent[1][1] + h]
    ];
  }
  let l = { x: 0, y: 0 };
  if (u) {
    const d = n.get(u);
    l = $t(d, i).positionAbsolute;
  }
  const c = s && s !== "parent" ? sc(t, s) : t;
  return {
    position: {
      x: c.x - l.x,
      y: c.y - l.y
    },
    positionAbsolute: c
  };
}
function ii({ nodeId: e, dragItems: t, nodeInternals: n }) {
  const r = t.map((i) => ({
    ...n.get(i.id),
    position: i.position,
    positionAbsolute: i.positionAbsolute
  }));
  return [e ? r.find((i) => i.id === e) : r[0], r];
}
const Iu = (e, t, n, r) => {
  const i = t.querySelectorAll(e);
  if (!i || !i.length)
    return null;
  const o = Array.from(i), a = t.getBoundingClientRect(), s = {
    x: a.width * r[0],
    y: a.height * r[1]
  };
  return o.map((u) => {
    const l = u.getBoundingClientRect();
    return {
      id: u.getAttribute("data-handleid"),
      position: u.getAttribute("data-handlepos"),
      x: (l.left - a.left - s.x) / n,
      y: (l.top - a.top - s.y) / n,
      ...ac(u)
    };
  });
};
function ln(e, t, n) {
  return n === void 0 ? n : (r) => {
    const i = t().nodeInternals.get(e);
    i && n(r, { ...i });
  };
}
function qs({ id: e, store: t, unselect: n = !1, nodeRef: r }) {
  const { addSelectedNodes: i, unselectNodesAndEdges: o, multiSelectionActive: a, nodeInternals: s, onError: u } = t.getState(), l = s.get(e);
  if (!l) {
    u?.("012", Ye.error012(e));
    return;
  }
  t.setState({ nodesSelectionActive: !1 }), l.selected ? (n || l.selected && a) && (o({ nodes: [l], edges: [] }), requestAnimationFrame(() => r?.current?.blur())) : i([e]);
}
function Xw() {
  const e = _e();
  return ve(({ sourceEvent: n }) => {
    const { transform: r, snapGrid: i, snapToGrid: o } = e.getState(), a = n.touches ? n.touches[0].clientX : n.clientX, s = n.touches ? n.touches[0].clientY : n.clientY, u = {
      x: (a - r[0]) / r[2],
      y: (s - r[1]) / r[2]
    };
    return {
      xSnapped: o ? i[0] * Math.round(u.x / i[0]) : u.x,
      ySnapped: o ? i[1] * Math.round(u.y / i[1]) : u.y,
      ...u
    };
  }, []);
}
function oi(e) {
  return (t, n, r) => e?.(t, r);
}
function Hp({ nodeRef: e, disabled: t = !1, noDragClassName: n, handleSelector: r, nodeId: i, isSelectable: o, selectNodesOnDrag: a }) {
  const s = _e(), [u, l] = ae(!1), c = ee([]), d = ee({ x: null, y: null }), f = ee(0), h = ee(null), g = ee({ x: 0, y: 0 }), p = ee(null), m = ee(!1), v = ee(!1), b = ee(!1), w = Xw();
  return ce(() => {
    if (e?.current) {
      const _ = De(e.current), C = ({ x: T, y: A }) => {
        const { nodeInternals: q, onNodeDrag: P, onSelectionDrag: F, updateNodePositions: O, nodeExtent: y, snapGrid: I, snapToGrid: x, nodeOrigin: L, onError: D } = s.getState();
        d.current = { x: T, y: A };
        let S = !1, k = { x: 0, y: 0, x2: 0, y2: 0 };
        if (c.current.length > 1 && y) {
          const B = kr(c.current, L);
          k = xn(B);
        }
        if (c.current = c.current.map((B) => {
          const G = { x: T - B.distance.x, y: A - B.distance.y };
          x && (G.x = I[0] * Math.round(G.x / I[0]), G.y = I[1] * Math.round(G.y / I[1]));
          const H = [
            [y[0][0], y[0][1]],
            [y[1][0], y[1][1]]
          ];
          c.current.length > 1 && y && !B.extent && (H[0][0] = B.positionAbsolute.x - k.x + y[0][0], H[1][0] = B.positionAbsolute.x + (B.width ?? 0) - k.x2 + y[1][0], H[0][1] = B.positionAbsolute.y - k.y + y[0][1], H[1][1] = B.positionAbsolute.y + (B.height ?? 0) - k.y2 + y[1][1]);
          const X = zp(B, G, q, H, L, D);
          return S = S || B.position.x !== X.position.x || B.position.y !== X.position.y, B.position = X.position, B.positionAbsolute = X.positionAbsolute, B;
        }), !S)
          return;
        O(c.current, !0, !0), l(!0);
        const $ = i ? P : oi(F);
        if ($ && p.current) {
          const [B, G] = ii({
            nodeId: i,
            dragItems: c.current,
            nodeInternals: q
          });
          $(p.current, B, G);
        }
      }, E = () => {
        if (!h.current)
          return;
        const [T, A] = cp(g.current, h.current);
        if (T !== 0 || A !== 0) {
          const { transform: q, panBy: P } = s.getState();
          d.current.x = (d.current.x ?? 0) - T / q[2], d.current.y = (d.current.y ?? 0) - A / q[2], P({ x: T, y: A }) && C(d.current);
        }
        f.current = requestAnimationFrame(E);
      }, M = (T) => {
        const { nodeInternals: A, multiSelectionActive: q, nodesDraggable: P, unselectNodesAndEdges: F, onNodeDragStart: O, onSelectionDragStart: y } = s.getState();
        v.current = !0;
        const I = i ? O : oi(y);
        (!a || !o) && !q && i && (A.get(i)?.selected || F()), i && o && a && qs({
          id: i,
          store: s,
          nodeRef: e
        });
        const x = w(T);
        if (d.current = x, c.current = Yw(A, P, x, i), I && c.current) {
          const [L, D] = ii({
            nodeId: i,
            dragItems: c.current,
            nodeInternals: A
          });
          I(T.sourceEvent, L, D);
        }
      };
      if (t)
        _.on(".drag", null);
      else {
        const T = a_().on("start", (A) => {
          const { domNode: q, nodeDragThreshold: P } = s.getState();
          P === 0 && M(A), b.current = !1;
          const F = w(A);
          d.current = F, h.current = q?.getBoundingClientRect() || null, g.current = xt(A.sourceEvent, h.current);
        }).on("drag", (A) => {
          const q = w(A), { autoPanOnNodeDrag: P, nodeDragThreshold: F } = s.getState();
          if (A.sourceEvent.type === "touchmove" && A.sourceEvent.touches.length > 1 && (b.current = !0), !b.current) {
            if (!m.current && v.current && P && (m.current = !0, E()), !v.current) {
              const O = q.xSnapped - (d?.current?.x ?? 0), y = q.ySnapped - (d?.current?.y ?? 0);
              Math.sqrt(O * O + y * y) > F && M(A);
            }
            (d.current.x !== q.xSnapped || d.current.y !== q.ySnapped) && c.current && v.current && (p.current = A.sourceEvent, g.current = xt(A.sourceEvent, h.current), C(q));
          }
        }).on("end", (A) => {
          if (!(!v.current || b.current) && (l(!1), m.current = !1, v.current = !1, cancelAnimationFrame(f.current), c.current)) {
            const { updateNodePositions: q, nodeInternals: P, onNodeDragStop: F, onSelectionDragStop: O } = s.getState(), y = i ? F : oi(O);
            if (q(c.current, !1, !1), y) {
              const [I, x] = ii({
                nodeId: i,
                dragItems: c.current,
                nodeInternals: P
              });
              y(A.sourceEvent, I, x);
            }
          }
        }).filter((A) => {
          const q = A.target;
          return !A.button && (!n || !Au(q, `.${n}`, e)) && (!r || Au(q, r, e));
        });
        return _.call(T), () => {
          _.on(".drag", null);
        };
      }
    }
  }, [
    e,
    t,
    n,
    r,
    o,
    s,
    i,
    a,
    w
  ]), u;
}
function Vp() {
  const e = _e();
  return ve((n) => {
    const { nodeInternals: r, nodeExtent: i, updateNodePositions: o, getNodes: a, snapToGrid: s, snapGrid: u, onError: l, nodesDraggable: c } = e.getState(), d = a().filter((b) => b.selected && (b.draggable || c && typeof b.draggable > "u")), f = s ? u[0] : 5, h = s ? u[1] : 5, g = n.isShiftPressed ? 4 : 1, p = n.x * f * g, m = n.y * h * g, v = d.map((b) => {
      if (b.positionAbsolute) {
        const w = { x: b.positionAbsolute.x + p, y: b.positionAbsolute.y + m };
        s && (w.x = u[0] * Math.round(w.x / u[0]), w.y = u[1] * Math.round(w.y / u[1]));
        const { positionAbsolute: _, position: C } = zp(b, w, r, i, void 0, l);
        b.position = C, b.positionAbsolute = _;
      }
      return b;
    });
    o(v, !0, !1);
  }, []);
}
const jt = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var dn = (e) => {
  const t = ({ id: n, type: r, data: i, xPos: o, yPos: a, xPosOrigin: s, yPosOrigin: u, selected: l, onClick: c, onMouseEnter: d, onMouseMove: f, onMouseLeave: h, onContextMenu: g, onDoubleClick: p, style: m, className: v, isDraggable: b, isSelectable: w, isConnectable: _, isFocusable: C, selectNodesOnDrag: E, sourcePosition: M, targetPosition: T, hidden: A, resizeObserver: q, dragHandle: P, zIndex: F, isParent: O, noDragClassName: y, noPanClassName: I, initialized: x, disableKeyboardA11y: L, ariaLabel: D, rfId: S, hasHandleBounds: k }) => {
    const $ = _e(), B = ee(null), G = ee(null), H = ee(M), X = ee(T), J = ee(r), z = w || b || c || d || f || h, V = Vp(), W = ln(n, $.getState, d), j = ln(n, $.getState, f), ie = ln(n, $.getState, h), oe = ln(n, $.getState, g), de = ln(n, $.getState, p), me = (Y) => {
      const { nodeDragThreshold: K } = $.getState();
      if (w && (!E || !b || K > 0) && qs({
        id: n,
        store: $,
        nodeRef: B
      }), c) {
        const he = $.getState().nodeInternals.get(n);
        he && c(Y, { ...he });
      }
    }, Z = (Y) => {
      if (!Is(Y) && !L)
        if (fp.includes(Y.key) && w) {
          const K = Y.key === "Escape";
          qs({
            id: n,
            store: $,
            unselect: K,
            nodeRef: B
          });
        } else b && l && Object.prototype.hasOwnProperty.call(jt, Y.key) && ($.setState({
          ariaLiveMessage: `Moved selected node ${Y.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~o}, y: ${~~a}`
        }), V({
          x: jt[Y.key].x,
          y: jt[Y.key].y,
          isShiftPressed: Y.shiftKey
        }));
    };
    ce(() => () => {
      G.current && (q?.unobserve(G.current), G.current = null);
    }, []), ce(() => {
      if (B.current && !A) {
        const Y = B.current;
        (!x || !k || G.current !== Y) && (G.current && q?.unobserve(G.current), q?.observe(Y), G.current = Y);
      }
    }, [A, x, k]), ce(() => {
      const Y = J.current !== r, K = H.current !== M, he = X.current !== T;
      B.current && (Y || K || he) && (Y && (J.current = r), K && (H.current = M), he && (X.current = T), $.getState().updateNodeDimensions([{ id: n, nodeElement: B.current, forceUpdate: !0 }]));
    }, [n, r, M, T]);
    const be = Hp({
      nodeRef: B,
      disabled: A || !b,
      noDragClassName: y,
      handleSelector: P,
      nodeId: n,
      isSelectable: w,
      selectNodesOnDrag: E
    });
    return A ? null : R.createElement(
      "div",
      { className: Se([
        "react-flow__node",
        `react-flow__node-${r}`,
        {
          // this is overwritable by passing `nopan` as a class name
          [I]: b
        },
        v,
        {
          selected: l,
          selectable: w,
          parent: O,
          dragging: be
        }
      ]), ref: B, style: {
        zIndex: F,
        transform: `translate(${s}px,${u}px)`,
        pointerEvents: z ? "all" : "none",
        visibility: x ? "visible" : "hidden",
        ...m
      }, "data-id": n, "data-testid": `rf__node-${n}`, onMouseEnter: W, onMouseMove: j, onMouseLeave: ie, onContextMenu: oe, onClick: me, onDoubleClick: de, onKeyDown: C ? Z : void 0, tabIndex: C ? 0 : void 0, role: C ? "button" : void 0, "aria-describedby": L ? void 0 : `${Lp}-${S}`, "aria-label": D },
      R.createElement(
        uw,
        { value: n },
        R.createElement(e, { id: n, data: i, type: r, xPos: o, yPos: a, selected: l, isConnectable: _, sourcePosition: M, targetPosition: T, dragging: be, dragHandle: P, zIndex: F })
      )
    );
  };
  return t.displayName = "NodeWrapper", ue(t);
};
const Zw = (e) => {
  const t = e.getNodes().filter((n) => n.selected);
  return {
    ...kr(t, e.nodeOrigin),
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`,
    userSelectionActive: e.userSelectionActive
  };
};
function jw({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
  const r = _e(), { width: i, height: o, x: a, y: s, transformString: u, userSelectionActive: l } = le(Zw, ye), c = Vp(), d = ee(null);
  if (ce(() => {
    n || d.current?.focus({
      preventScroll: !0
    });
  }, [n]), Hp({
    nodeRef: d
  }), l || !i || !o)
    return null;
  const f = e ? (g) => {
    const p = r.getState().getNodes().filter((m) => m.selected);
    e(g, p);
  } : void 0, h = (g) => {
    Object.prototype.hasOwnProperty.call(jt, g.key) && c({
      x: jt[g.key].x,
      y: jt[g.key].y,
      isShiftPressed: g.shiftKey
    });
  };
  return R.createElement(
    "div",
    { className: Se(["react-flow__nodesselection", "react-flow__container", t]), style: {
      transform: u
    } },
    R.createElement("div", { ref: d, className: "react-flow__nodesselection-rect", onContextMenu: f, tabIndex: n ? void 0 : -1, onKeyDown: n ? void 0 : h, style: {
      width: i,
      height: o,
      top: s,
      left: a
    } })
  );
}
var Qw = ue(jw);
const Jw = (e) => e.nodesSelectionActive, Gp = ({ children: e, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: i, onPaneContextMenu: o, onPaneScroll: a, deleteKeyCode: s, onMove: u, onMoveStart: l, onMoveEnd: c, selectionKeyCode: d, selectionOnDrag: f, selectionMode: h, onSelectionStart: g, onSelectionEnd: p, multiSelectionKeyCode: m, panActivationKeyCode: v, zoomActivationKeyCode: b, elementsSelectable: w, zoomOnScroll: _, zoomOnPinch: C, panOnScroll: E, panOnScrollSpeed: M, panOnScrollMode: T, zoomOnDoubleClick: A, panOnDrag: q, defaultViewport: P, translateExtent: F, minZoom: O, maxZoom: y, preventScrolling: I, onSelectionContextMenu: x, noWheelClassName: L, noPanClassName: D, disableKeyboardA11y: S }) => {
  const k = le(Jw), $ = Cn(d), B = Cn(v), G = B || q, H = B || E, X = $ || f && G !== !0;
  return $w({ deleteKeyCode: s, multiSelectionKeyCode: m }), R.createElement(
    Hw,
    { onMove: u, onMoveStart: l, onMoveEnd: c, onPaneContextMenu: o, elementsSelectable: w, zoomOnScroll: _, zoomOnPinch: C, panOnScroll: H, panOnScrollSpeed: M, panOnScrollMode: T, zoomOnDoubleClick: A, panOnDrag: !$ && G, defaultViewport: P, translateExtent: F, minZoom: O, maxZoom: y, zoomActivationKeyCode: b, preventScrolling: I, noWheelClassName: L, noPanClassName: D },
    R.createElement(
      Fp,
      { onSelectionStart: g, onSelectionEnd: p, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: i, onPaneContextMenu: o, onPaneScroll: a, panOnDrag: G, isSelecting: !!X, selectionMode: h },
      e,
      k && R.createElement(Qw, { onSelectionContextMenu: x, noPanClassName: D, disableKeyboardA11y: S })
    )
  );
};
Gp.displayName = "FlowRenderer";
var e1 = ue(Gp);
function t1(e) {
  return le(ve((n) => e ? _p(n.nodeInternals, { x: 0, y: 0, width: n.width, height: n.height }, n.transform, !0) : n.getNodes(), [e]));
}
function n1(e) {
  const t = {
    input: dn(e.input || Ap),
    default: dn(e.default || ks),
    output: dn(e.output || Rp),
    group: dn(e.group || pc)
  }, n = {}, r = Object.keys(e).filter((i) => !["input", "default", "output", "group"].includes(i)).reduce((i, o) => (i[o] = dn(e[o] || ks), i), n);
  return {
    ...t,
    ...r
  };
}
const r1 = ({ x: e, y: t, width: n, height: r, origin: i }) => !n || !r ? { x: e, y: t } : i[0] < 0 || i[1] < 0 || i[0] > 1 || i[1] > 1 ? { x: e, y: t } : {
  x: e - n * i[0],
  y: t - r * i[1]
}, i1 = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  updateNodeDimensions: e.updateNodeDimensions,
  onError: e.onError
}), Up = (e) => {
  const { nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: i, updateNodeDimensions: o, onError: a } = le(i1, ye), s = t1(e.onlyRenderVisibleElements), u = ee(), l = Fe(() => {
    if (typeof ResizeObserver > "u")
      return null;
    const c = new ResizeObserver((d) => {
      const f = d.map((h) => ({
        id: h.target.getAttribute("data-id"),
        nodeElement: h.target,
        forceUpdate: !0
      }));
      o(f);
    });
    return u.current = c, c;
  }, []);
  return ce(() => () => {
    u?.current?.disconnect();
  }, []), R.createElement("div", { className: "react-flow__nodes", style: mc }, s.map((c) => {
    let d = c.type || "default";
    e.nodeTypes[d] || (a?.("003", Ye.error003(d)), d = "default");
    const f = e.nodeTypes[d] || e.nodeTypes.default, h = !!(c.draggable || t && typeof c.draggable > "u"), g = !!(c.selectable || i && typeof c.selectable > "u"), p = !!(c.connectable || n && typeof c.connectable > "u"), m = !!(c.focusable || r && typeof c.focusable > "u"), v = e.nodeExtent ? sc(c.positionAbsolute, e.nodeExtent) : c.positionAbsolute, b = v?.x ?? 0, w = v?.y ?? 0, _ = r1({
      x: b,
      y: w,
      width: c.width ?? 0,
      height: c.height ?? 0,
      origin: e.nodeOrigin
    });
    return R.createElement(f, { key: c.id, id: c.id, className: c.className, style: c.style, type: d, data: c.data, sourcePosition: c.sourcePosition || U.Bottom, targetPosition: c.targetPosition || U.Top, hidden: c.hidden, xPos: b, yPos: w, xPosOrigin: _.x, yPosOrigin: _.y, selectNodesOnDrag: e.selectNodesOnDrag, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, selected: !!c.selected, isDraggable: h, isSelectable: g, isConnectable: p, isFocusable: m, resizeObserver: l, dragHandle: c.dragHandle, zIndex: c[pe]?.z ?? 0, isParent: !!c[pe]?.isParent, noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, initialized: !!c.width && !!c.height, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, ariaLabel: c.ariaLabel, hasHandleBounds: !!c[pe]?.handleBounds });
  }));
};
Up.displayName = "NodeRenderer";
var o1 = ue(Up);
const a1 = (e, t, n) => n === U.Left ? e - t : n === U.Right ? e + t : e, s1 = (e, t, n) => n === U.Top ? e - t : n === U.Bottom ? e + t : e, Ru = "react-flow__edgeupdater", Tu = ({ position: e, centerX: t, centerY: n, radius: r = 10, onMouseDown: i, onMouseEnter: o, onMouseOut: a, type: s }) => R.createElement("circle", { onMouseDown: i, onMouseEnter: o, onMouseOut: a, className: Se([Ru, `${Ru}-${s}`]), cx: a1(t, r, e), cy: s1(n, r, e), r, stroke: "transparent", fill: "transparent" }), c1 = () => !0;
var Kt = (e) => {
  const t = ({ id: n, className: r, type: i, data: o, onClick: a, onEdgeDoubleClick: s, selected: u, animated: l, label: c, labelStyle: d, labelShowBg: f, labelBgStyle: h, labelBgPadding: g, labelBgBorderRadius: p, style: m, source: v, target: b, sourceX: w, sourceY: _, targetX: C, targetY: E, sourcePosition: M, targetPosition: T, elementsSelectable: A, hidden: q, sourceHandleId: P, targetHandleId: F, onContextMenu: O, onMouseEnter: y, onMouseMove: I, onMouseLeave: x, reconnectRadius: L, onReconnect: D, onReconnectStart: S, onReconnectEnd: k, markerEnd: $, markerStart: B, rfId: G, ariaLabel: H, isFocusable: X, isReconnectable: J, pathOptions: z, interactionWidth: V, disableKeyboardA11y: W }) => {
    const j = ee(null), [ie, oe] = ae(!1), [de, me] = ae(!1), Z = _e(), be = Fe(() => `url('#${Ts(B, G)}')`, [B, G]), Y = Fe(() => `url('#${Ts($, G)}')`, [$, G]);
    if (q)
      return null;
    const K = (we) => {
      const { edges: qe, addSelectedEdges: Ce, unselectNodesAndEdges: Ae, multiSelectionActive: Ht } = Z.getState(), Qe = qe.find((At) => At.id === n);
      Qe && (A && (Z.setState({ nodesSelectionActive: !1 }), Qe.selected && Ht ? (Ae({ nodes: [], edges: [Qe] }), j.current?.blur()) : Ce([n])), a && a(we, Qe));
    }, he = un(n, Z.getState, s), He = un(n, Z.getState, O), Ze = un(n, Z.getState, y), Me = un(n, Z.getState, I), ge = un(n, Z.getState, x), Ie = (we, qe) => {
      if (we.button !== 0)
        return;
      const { edges: Ce, isValidConnection: Ae } = Z.getState(), Ht = qe ? b : v, Qe = (qe ? F : P) || null, At = qe ? "target" : "source", zr = Ae || c1, Hr = qe, an = Ce.find((It) => It.id === n);
      me(!0), S?.(we, an, At);
      const Vr = (It) => {
        me(!1), k?.(It, an, At);
      };
      Sp({
        event: we,
        handleId: Qe,
        nodeId: Ht,
        onConnect: (It) => D?.(an, It),
        isTarget: Hr,
        getState: Z.getState,
        setState: Z.setState,
        isValidConnection: zr,
        edgeUpdaterType: At,
        onReconnectEnd: Vr
      });
    }, Ve = (we) => Ie(we, !0), nt = (we) => Ie(we, !1), je = () => oe(!0), ke = () => oe(!1), rt = !A && !a, pt = (we) => {
      if (!W && fp.includes(we.key) && A) {
        const { unselectNodesAndEdges: qe, addSelectedEdges: Ce, edges: Ae } = Z.getState();
        we.key === "Escape" ? (j.current?.blur(), qe({ edges: [Ae.find((Qe) => Qe.id === n)] })) : Ce([n]);
      }
    };
    return R.createElement(
      "g",
      { className: Se([
        "react-flow__edge",
        `react-flow__edge-${i}`,
        r,
        { selected: u, animated: l, inactive: rt, updating: ie }
      ]), onClick: K, onDoubleClick: he, onContextMenu: He, onMouseEnter: Ze, onMouseMove: Me, onMouseLeave: ge, onKeyDown: X ? pt : void 0, tabIndex: X ? 0 : void 0, role: X ? "button" : "img", "data-testid": `rf__edge-${n}`, "aria-label": H === null ? void 0 : H || `Edge from ${v} to ${b}`, "aria-describedby": X ? `${kp}-${G}` : void 0, ref: j },
      !de && R.createElement(e, { id: n, source: v, target: b, selected: u, animated: l, label: c, labelStyle: d, labelShowBg: f, labelBgStyle: h, labelBgPadding: g, labelBgBorderRadius: p, data: o, style: m, sourceX: w, sourceY: _, targetX: C, targetY: E, sourcePosition: M, targetPosition: T, sourceHandleId: P, targetHandleId: F, markerStart: be, markerEnd: Y, pathOptions: z, interactionWidth: V }),
      J && R.createElement(
        R.Fragment,
        null,
        (J === "source" || J === !0) && R.createElement(Tu, { position: M, centerX: w, centerY: _, radius: L, onMouseDown: Ve, onMouseEnter: je, onMouseOut: ke, type: "source" }),
        (J === "target" || J === !0) && R.createElement(Tu, { position: T, centerX: C, centerY: E, radius: L, onMouseDown: nt, onMouseEnter: je, onMouseOut: ke, type: "target" })
      )
    );
  };
  return t.displayName = "EdgeWrapper", ue(t);
};
function u1(e) {
  const t = {
    default: Kt(e.default || hr),
    straight: Kt(e.bezier || lc),
    step: Kt(e.step || uc),
    smoothstep: Kt(e.step || Lr),
    simplebezier: Kt(e.simplebezier || cc)
  }, n = {}, r = Object.keys(e).filter((i) => !["default", "bezier"].includes(i)).reduce((i, o) => (i[o] = Kt(e[o] || hr), i), n);
  return {
    ...t,
    ...r
  };
}
function Lu(e, t, n = null) {
  const r = (n?.x || 0) + t.x, i = (n?.y || 0) + t.y, o = n?.width || t.width, a = n?.height || t.height;
  switch (e) {
    case U.Top:
      return {
        x: r + o / 2,
        y: i
      };
    case U.Right:
      return {
        x: r + o,
        y: i + a / 2
      };
    case U.Bottom:
      return {
        x: r + o / 2,
        y: i + a
      };
    case U.Left:
      return {
        x: r,
        y: i + a / 2
      };
  }
}
function ku(e, t) {
  return e ? e.length === 1 || !t ? e[0] : t && e.find((n) => n.id === t) || null : null;
}
const l1 = (e, t, n, r, i, o) => {
  const a = Lu(n, e, t), s = Lu(o, r, i);
  return {
    sourceX: a.x,
    sourceY: a.y,
    targetX: s.x,
    targetY: s.y
  };
};
function d1({ sourcePos: e, targetPos: t, sourceWidth: n, sourceHeight: r, targetWidth: i, targetHeight: o, width: a, height: s, transform: u }) {
  const l = {
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    x2: Math.max(e.x + n, t.x + i),
    y2: Math.max(e.y + r, t.y + o)
  };
  l.x === l.x2 && (l.x2 += 1), l.y === l.y2 && (l.y2 += 1);
  const c = xn({
    x: (0 - u[0]) / u[2],
    y: (0 - u[1]) / u[2],
    width: a / u[2],
    height: s / u[2]
  }), d = Math.max(0, Math.min(c.x2, l.x2) - Math.max(c.x, l.x)), f = Math.max(0, Math.min(c.y2, l.y2) - Math.max(c.y, l.y));
  return Math.ceil(d * f) > 0;
}
function qu(e) {
  const t = e?.[pe]?.handleBounds || null, n = t && e?.width && e?.height && typeof e?.positionAbsolute?.x < "u" && typeof e?.positionAbsolute?.y < "u";
  return [
    {
      x: e?.positionAbsolute?.x || 0,
      y: e?.positionAbsolute?.y || 0,
      width: e?.width || 0,
      height: e?.height || 0
    },
    t,
    !!n
  ];
}
const f1 = [{ level: 0, isMaxLevel: !0, edges: [] }];
function h1(e, t, n = !1) {
  let r = -1;
  const i = e.reduce((a, s) => {
    const u = $e(s.zIndex);
    let l = u ? s.zIndex : 0;
    if (n) {
      const c = t.get(s.target), d = t.get(s.source), f = s.selected || c?.selected || d?.selected, h = Math.max(d?.[pe]?.z || 0, c?.[pe]?.z || 0, 1e3);
      l = (u ? s.zIndex : 0) + (f ? h : 0);
    }
    return a[l] ? a[l].push(s) : a[l] = [s], r = l > r ? l : r, a;
  }, {}), o = Object.entries(i).map(([a, s]) => {
    const u = +a;
    return {
      edges: s,
      level: u,
      isMaxLevel: u === r
    };
  });
  return o.length === 0 ? f1 : o;
}
function p1(e, t, n) {
  const r = le(ve((i) => e ? i.edges.filter((o) => {
    const a = t.get(o.source), s = t.get(o.target);
    return a?.width && a?.height && s?.width && s?.height && d1({
      sourcePos: a.positionAbsolute || { x: 0, y: 0 },
      targetPos: s.positionAbsolute || { x: 0, y: 0 },
      sourceWidth: a.width,
      sourceHeight: a.height,
      targetWidth: s.width,
      targetHeight: s.height,
      width: i.width,
      height: i.height,
      transform: i.transform
    });
  }) : i.edges, [e, t]));
  return h1(r, t, n);
}
const g1 = ({ color: e = "none", strokeWidth: t = 1 }) => R.createElement("polyline", { style: {
  stroke: e,
  strokeWidth: t
}, strokeLinecap: "round", strokeLinejoin: "round", fill: "none", points: "-5,-4 0,0 -5,4" }), m1 = ({ color: e = "none", strokeWidth: t = 1 }) => R.createElement("polyline", { style: {
  stroke: e,
  fill: e,
  strokeWidth: t
}, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" }), Ou = {
  [fr.Arrow]: g1,
  [fr.ArrowClosed]: m1
};
function v1(e) {
  const t = _e();
  return Fe(() => Object.prototype.hasOwnProperty.call(Ou, e) ? Ou[e] : (t.getState().onError?.("009", Ye.error009(e)), null), [e]);
}
const y1 = ({ id: e, type: t, color: n, width: r = 12.5, height: i = 12.5, markerUnits: o = "strokeWidth", strokeWidth: a, orient: s = "auto-start-reverse" }) => {
  const u = v1(t);
  return u ? R.createElement(
    "marker",
    { className: "react-flow__arrowhead", id: e, markerWidth: `${r}`, markerHeight: `${i}`, viewBox: "-10 -10 20 20", markerUnits: o, orient: s, refX: "0", refY: "0" },
    R.createElement(u, { color: n, strokeWidth: a })
  ) : null;
}, _1 = ({ defaultColor: e, rfId: t }) => (n) => {
  const r = [];
  return n.edges.reduce((i, o) => ([o.markerStart, o.markerEnd].forEach((a) => {
    if (a && typeof a == "object") {
      const s = Ts(a, t);
      r.includes(s) || (i.push({ id: s, color: a.color || e, ...a }), r.push(s));
    }
  }), i), []).sort((i, o) => i.id.localeCompare(o.id));
}, Kp = ({ defaultColor: e, rfId: t }) => {
  const n = le(
    ve(_1({ defaultColor: e, rfId: t }), [e, t]),
    // the id includes all marker options, so we just need to look at that part of the marker
    (r, i) => !(r.length !== i.length || r.some((o, a) => o.id !== i[a].id))
  );
  return R.createElement("defs", null, n.map((r) => R.createElement(y1, { id: r.id, key: r.id, type: r.type, color: r.color, width: r.width, height: r.height, markerUnits: r.markerUnits, strokeWidth: r.strokeWidth, orient: r.orient })));
};
Kp.displayName = "MarkerDefinitions";
var b1 = ue(Kp);
const w1 = (e) => ({
  nodesConnectable: e.nodesConnectable,
  edgesFocusable: e.edgesFocusable,
  edgesUpdatable: e.edgesUpdatable,
  elementsSelectable: e.elementsSelectable,
  width: e.width,
  height: e.height,
  connectionMode: e.connectionMode,
  nodeInternals: e.nodeInternals,
  onError: e.onError
}), Yp = ({ defaultMarkerColor: e, onlyRenderVisibleElements: t, elevateEdgesOnSelect: n, rfId: r, edgeTypes: i, noPanClassName: o, onEdgeContextMenu: a, onEdgeMouseEnter: s, onEdgeMouseMove: u, onEdgeMouseLeave: l, onEdgeClick: c, onEdgeDoubleClick: d, onReconnect: f, onReconnectStart: h, onReconnectEnd: g, reconnectRadius: p, children: m, disableKeyboardA11y: v }) => {
  const { edgesFocusable: b, edgesUpdatable: w, elementsSelectable: _, width: C, height: E, connectionMode: M, nodeInternals: T, onError: A } = le(w1, ye), q = p1(t, T, n);
  return C ? R.createElement(
    R.Fragment,
    null,
    q.map(({ level: P, edges: F, isMaxLevel: O }) => R.createElement(
      "svg",
      { key: P, style: { zIndex: P }, width: C, height: E, className: "react-flow__edges react-flow__container" },
      O && R.createElement(b1, { defaultColor: e, rfId: r }),
      R.createElement("g", null, F.map((y) => {
        const [I, x, L] = qu(T.get(y.source)), [D, S, k] = qu(T.get(y.target));
        if (!L || !k)
          return null;
        let $ = y.type || "default";
        i[$] || (A?.("011", Ye.error011($)), $ = "default");
        const B = i[$] || i.default, G = M === Bt.Strict ? S.target : (S.target ?? []).concat(S.source ?? []), H = ku(x.source, y.sourceHandle), X = ku(G, y.targetHandle), J = H?.position || U.Bottom, z = X?.position || U.Top, V = !!(y.focusable || b && typeof y.focusable > "u"), W = y.reconnectable || y.updatable, j = typeof f < "u" && (W || w && typeof W > "u");
        if (!H || !X)
          return A?.("008", Ye.error008(H, y)), null;
        const { sourceX: ie, sourceY: oe, targetX: de, targetY: me } = l1(I, H, J, D, X, z);
        return R.createElement(B, { key: y.id, id: y.id, className: Se([y.className, o]), type: $, data: y.data, selected: !!y.selected, animated: !!y.animated, hidden: !!y.hidden, label: y.label, labelStyle: y.labelStyle, labelShowBg: y.labelShowBg, labelBgStyle: y.labelBgStyle, labelBgPadding: y.labelBgPadding, labelBgBorderRadius: y.labelBgBorderRadius, style: y.style, source: y.source, target: y.target, sourceHandleId: y.sourceHandle, targetHandleId: y.targetHandle, markerEnd: y.markerEnd, markerStart: y.markerStart, sourceX: ie, sourceY: oe, targetX: de, targetY: me, sourcePosition: J, targetPosition: z, elementsSelectable: _, onContextMenu: a, onMouseEnter: s, onMouseMove: u, onMouseLeave: l, onClick: c, onEdgeDoubleClick: d, onReconnect: f, onReconnectStart: h, onReconnectEnd: g, reconnectRadius: p, rfId: r, ariaLabel: y.ariaLabel, isFocusable: V, isReconnectable: j, pathOptions: "pathOptions" in y ? y.pathOptions : void 0, interactionWidth: y.interactionWidth, disableKeyboardA11y: v });
      }))
    )),
    m
  ) : null;
};
Yp.displayName = "EdgeRenderer";
var E1 = ue(Yp);
const x1 = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function S1({ children: e }) {
  const t = le(x1);
  return R.createElement("div", { className: "react-flow__viewport react-flow__container", style: { transform: t } }, e);
}
function C1(e) {
  const t = gc(), n = ee(!1);
  ce(() => {
    !n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0);
  }, [e, t.viewportInitialized]);
}
const N1 = {
  [U.Left]: U.Right,
  [U.Right]: U.Left,
  [U.Top]: U.Bottom,
  [U.Bottom]: U.Top
}, Wp = ({ nodeId: e, handleType: t, style: n, type: r = bt.Bezier, CustomComponent: i, connectionStatus: o }) => {
  const { fromNode: a, handleId: s, toX: u, toY: l, connectionMode: c } = le(ve((E) => ({
    fromNode: E.nodeInternals.get(e),
    handleId: E.connectionHandleId,
    toX: (E.connectionPosition.x - E.transform[0]) / E.transform[2],
    toY: (E.connectionPosition.y - E.transform[1]) / E.transform[2],
    connectionMode: E.connectionMode
  }), [e]), ye), d = a?.[pe]?.handleBounds;
  let f = d?.[t];
  if (c === Bt.Loose && (f = f || d?.[t === "source" ? "target" : "source"]), !a || !f)
    return null;
  const h = s ? f.find((E) => E.id === s) : f[0], g = h ? h.x + h.width / 2 : (a.width ?? 0) / 2, p = h ? h.y + h.height / 2 : a.height ?? 0, m = (a.positionAbsolute?.x ?? 0) + g, v = (a.positionAbsolute?.y ?? 0) + p, b = h?.position, w = b ? N1[b] : null;
  if (!b || !w)
    return null;
  if (i)
    return R.createElement(i, { connectionLineType: r, connectionLineStyle: n, fromNode: a, fromHandle: h, fromX: m, fromY: v, toX: u, toY: l, fromPosition: b, toPosition: w, connectionStatus: o });
  let _ = "";
  const C = {
    sourceX: m,
    sourceY: v,
    sourcePosition: b,
    targetX: u,
    targetY: l,
    targetPosition: w
  };
  return r === bt.Bezier ? [_] = dc(C) : r === bt.Step ? [_] = Rs({
    ...C,
    borderRadius: 0
  }) : r === bt.SmoothStep ? [_] = Rs(C) : r === bt.SimpleBezier ? [_] = vp(C) : _ = `M${m},${v} ${u},${l}`, R.createElement("path", { d: _, fill: "none", className: "react-flow__connection-path", style: n });
};
Wp.displayName = "ConnectionLine";
const M1 = (e) => ({
  nodeId: e.connectionNodeId,
  handleType: e.connectionHandleType,
  nodesConnectable: e.nodesConnectable,
  connectionStatus: e.connectionStatus,
  width: e.width,
  height: e.height
});
function A1({ containerStyle: e, style: t, type: n, component: r }) {
  const { nodeId: i, handleType: o, nodesConnectable: a, width: s, height: u, connectionStatus: l } = le(M1, ye);
  return !(i && o && s && a) ? null : R.createElement(
    "svg",
    { style: e, width: s, height: u, className: "react-flow__edges react-flow__connectionline react-flow__container" },
    R.createElement(
      "g",
      { className: Se(["react-flow__connection", l]) },
      R.createElement(Wp, { nodeId: i, handleType: o, style: t, type: n, CustomComponent: r, connectionStatus: l })
    )
  );
}
function Pu(e, t) {
  const n = ee(null), r = _e();
  return Fe(() => {
    if (process.env.NODE_ENV === "development") {
      const o = Object.keys(e);
      ye(n.current, o) && r.getState().onError?.("002", Ye.error002()), n.current = o;
    }
    return t(e);
  }, [e]);
}
const Xp = ({ nodeTypes: e, edgeTypes: t, onMove: n, onMoveStart: r, onMoveEnd: i, onInit: o, onNodeClick: a, onEdgeClick: s, onNodeDoubleClick: u, onEdgeDoubleClick: l, onNodeMouseEnter: c, onNodeMouseMove: d, onNodeMouseLeave: f, onNodeContextMenu: h, onSelectionContextMenu: g, onSelectionStart: p, onSelectionEnd: m, connectionLineType: v, connectionLineStyle: b, connectionLineComponent: w, connectionLineContainerStyle: _, selectionKeyCode: C, selectionOnDrag: E, selectionMode: M, multiSelectionKeyCode: T, panActivationKeyCode: A, zoomActivationKeyCode: q, deleteKeyCode: P, onlyRenderVisibleElements: F, elementsSelectable: O, selectNodesOnDrag: y, defaultViewport: I, translateExtent: x, minZoom: L, maxZoom: D, preventScrolling: S, defaultMarkerColor: k, zoomOnScroll: $, zoomOnPinch: B, panOnScroll: G, panOnScrollSpeed: H, panOnScrollMode: X, zoomOnDoubleClick: J, panOnDrag: z, onPaneClick: V, onPaneMouseEnter: W, onPaneMouseMove: j, onPaneMouseLeave: ie, onPaneScroll: oe, onPaneContextMenu: de, onEdgeContextMenu: me, onEdgeMouseEnter: Z, onEdgeMouseMove: be, onEdgeMouseLeave: Y, onReconnect: K, onReconnectStart: he, onReconnectEnd: He, reconnectRadius: Ze, noDragClassName: Me, noWheelClassName: ge, noPanClassName: Ie, elevateEdgesOnSelect: Ve, disableKeyboardA11y: nt, nodeOrigin: je, nodeExtent: ke, rfId: rt }) => {
  const pt = Pu(e, n1), we = Pu(t, u1);
  return C1(o), R.createElement(
    e1,
    { onPaneClick: V, onPaneMouseEnter: W, onPaneMouseMove: j, onPaneMouseLeave: ie, onPaneContextMenu: de, onPaneScroll: oe, deleteKeyCode: P, selectionKeyCode: C, selectionOnDrag: E, selectionMode: M, onSelectionStart: p, onSelectionEnd: m, multiSelectionKeyCode: T, panActivationKeyCode: A, zoomActivationKeyCode: q, elementsSelectable: O, onMove: n, onMoveStart: r, onMoveEnd: i, zoomOnScroll: $, zoomOnPinch: B, zoomOnDoubleClick: J, panOnScroll: G, panOnScrollSpeed: H, panOnScrollMode: X, panOnDrag: z, defaultViewport: I, translateExtent: x, minZoom: L, maxZoom: D, onSelectionContextMenu: g, preventScrolling: S, noDragClassName: Me, noWheelClassName: ge, noPanClassName: Ie, disableKeyboardA11y: nt },
    R.createElement(
      S1,
      null,
      R.createElement(
        E1,
        { edgeTypes: we, onEdgeClick: s, onEdgeDoubleClick: l, onlyRenderVisibleElements: F, onEdgeContextMenu: me, onEdgeMouseEnter: Z, onEdgeMouseMove: be, onEdgeMouseLeave: Y, onReconnect: K, onReconnectStart: he, onReconnectEnd: He, reconnectRadius: Ze, defaultMarkerColor: k, noPanClassName: Ie, elevateEdgesOnSelect: !!Ve, disableKeyboardA11y: nt, rfId: rt },
        R.createElement(A1, { style: b, type: v, component: w, containerStyle: _ })
      ),
      R.createElement("div", { className: "react-flow__edgelabel-renderer" }),
      R.createElement(o1, { nodeTypes: pt, onNodeClick: a, onNodeDoubleClick: u, onNodeMouseEnter: c, onNodeMouseMove: d, onNodeMouseLeave: f, onNodeContextMenu: h, selectNodesOnDrag: y, onlyRenderVisibleElements: F, noPanClassName: Ie, noDragClassName: Me, disableKeyboardA11y: nt, nodeOrigin: je, nodeExtent: ke, rfId: rt })
    )
  );
};
Xp.displayName = "GraphView";
var I1 = ue(Xp);
const Os = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], gt = {
  rfId: "1",
  width: 0,
  height: 0,
  transform: [0, 0, 1],
  nodeInternals: /* @__PURE__ */ new Map(),
  edges: [],
  onNodesChange: null,
  onEdgesChange: null,
  hasDefaultNodes: !1,
  hasDefaultEdges: !1,
  d3Zoom: null,
  d3Selection: null,
  d3ZoomHandler: void 0,
  minZoom: 0.5,
  maxZoom: 2,
  translateExtent: Os,
  nodeExtent: Os,
  nodesSelectionActive: !1,
  userSelectionActive: !1,
  userSelectionRect: null,
  connectionNodeId: null,
  connectionHandleId: null,
  connectionHandleType: "source",
  connectionPosition: { x: 0, y: 0 },
  connectionStatus: null,
  connectionMode: Bt.Strict,
  domNode: null,
  paneDragging: !1,
  noPanClassName: "nopan",
  nodeOrigin: [0, 0],
  nodeDragThreshold: 0,
  snapGrid: [15, 15],
  snapToGrid: !1,
  nodesDraggable: !0,
  nodesConnectable: !0,
  nodesFocusable: !0,
  edgesFocusable: !0,
  edgesUpdatable: !0,
  elementsSelectable: !0,
  elevateNodesOnSelect: !0,
  fitViewOnInit: !1,
  fitViewOnInitDone: !1,
  fitViewOnInitOptions: void 0,
  onSelectionChange: [],
  multiSelectionActive: !1,
  connectionStartHandle: null,
  connectionEndHandle: null,
  connectionClickStartHandle: null,
  connectOnClick: !0,
  ariaLiveMessage: "",
  autoPanOnConnect: !0,
  autoPanOnNodeDrag: !0,
  connectionRadius: 20,
  onError: hp,
  isValidConnection: void 0
}, R1 = () => yy((e, t) => ({
  ...gt,
  setNodes: (n) => {
    const { nodeInternals: r, nodeOrigin: i, elevateNodesOnSelect: o } = t();
    e({ nodeInternals: ni(n, r, i, o) });
  },
  getNodes: () => Array.from(t().nodeInternals.values()),
  setEdges: (n) => {
    const { defaultEdgeOptions: r = {} } = t();
    e({ edges: n.map((i) => ({ ...r, ...i })) });
  },
  setDefaultNodesAndEdges: (n, r) => {
    const i = typeof n < "u", o = typeof r < "u", a = i ? ni(n, /* @__PURE__ */ new Map(), t().nodeOrigin, t().elevateNodesOnSelect) : /* @__PURE__ */ new Map();
    e({ nodeInternals: a, edges: o ? r : [], hasDefaultNodes: i, hasDefaultEdges: o });
  },
  updateNodeDimensions: (n) => {
    const { onNodesChange: r, nodeInternals: i, fitViewOnInit: o, fitViewOnInitDone: a, fitViewOnInitOptions: s, domNode: u, nodeOrigin: l } = t(), c = u?.querySelector(".react-flow__viewport");
    if (!c)
      return;
    const d = window.getComputedStyle(c), { m22: f } = new window.DOMMatrixReadOnly(d.transform), h = n.reduce((p, m) => {
      const v = i.get(m.id);
      if (v?.hidden)
        i.set(v.id, {
          ...v,
          [pe]: {
            ...v[pe],
            // we need to reset the handle bounds when the node is hidden
            // in order to force a new observation when the node is shown again
            handleBounds: void 0
          }
        });
      else if (v) {
        const b = ac(m.nodeElement);
        !!(b.width && b.height && (v.width !== b.width || v.height !== b.height || m.forceUpdate)) && (i.set(v.id, {
          ...v,
          [pe]: {
            ...v[pe],
            handleBounds: {
              source: Iu(".source", m.nodeElement, f, l),
              target: Iu(".target", m.nodeElement, f, l)
            }
          },
          ...b
        }), p.push({
          id: v.id,
          type: "dimensions",
          dimensions: b
        }));
      }
      return p;
    }, []);
    Op(i, l);
    const g = a || o && !a && Pp(t, { initial: !0, ...s });
    e({ nodeInternals: new Map(i), fitViewOnInitDone: g }), h?.length > 0 && r?.(h);
  },
  updateNodePositions: (n, r = !0, i = !1) => {
    const { triggerNodeChanges: o } = t(), a = n.map((s) => {
      const u = {
        id: s.id,
        type: "position",
        dragging: i
      };
      return r && (u.positionAbsolute = s.positionAbsolute, u.position = s.position), u;
    });
    o(a);
  },
  triggerNodeChanges: (n) => {
    const { onNodesChange: r, nodeInternals: i, hasDefaultNodes: o, nodeOrigin: a, getNodes: s, elevateNodesOnSelect: u } = t();
    if (n?.length) {
      if (o) {
        const l = $p(n, s()), c = ni(l, i, a, u);
        e({ nodeInternals: c });
      }
      r?.(n);
    }
  },
  addSelectedNodes: (n) => {
    const { multiSelectionActive: r, edges: i, getNodes: o } = t();
    let a, s = null;
    r ? a = n.map((u) => _t(u, !0)) : (a = Yt(o(), n), s = Yt(i, [])), Yn({
      changedNodes: a,
      changedEdges: s,
      get: t,
      set: e
    });
  },
  addSelectedEdges: (n) => {
    const { multiSelectionActive: r, edges: i, getNodes: o } = t();
    let a, s = null;
    r ? a = n.map((u) => _t(u, !0)) : (a = Yt(i, n), s = Yt(o(), [])), Yn({
      changedNodes: s,
      changedEdges: a,
      get: t,
      set: e
    });
  },
  unselectNodesAndEdges: ({ nodes: n, edges: r } = {}) => {
    const { edges: i, getNodes: o } = t(), a = n || o(), s = r || i, u = a.map((c) => (c.selected = !1, _t(c.id, !1))), l = s.map((c) => _t(c.id, !1));
    Yn({
      changedNodes: u,
      changedEdges: l,
      get: t,
      set: e
    });
  },
  setMinZoom: (n) => {
    const { d3Zoom: r, maxZoom: i } = t();
    r?.scaleExtent([n, i]), e({ minZoom: n });
  },
  setMaxZoom: (n) => {
    const { d3Zoom: r, minZoom: i } = t();
    r?.scaleExtent([i, n]), e({ maxZoom: n });
  },
  setTranslateExtent: (n) => {
    t().d3Zoom?.translateExtent(n), e({ translateExtent: n });
  },
  resetSelectedElements: () => {
    const { edges: n, getNodes: r } = t(), o = r().filter((s) => s.selected).map((s) => _t(s.id, !1)), a = n.filter((s) => s.selected).map((s) => _t(s.id, !1));
    Yn({
      changedNodes: o,
      changedEdges: a,
      get: t,
      set: e
    });
  },
  setNodeExtent: (n) => {
    const { nodeInternals: r } = t();
    r.forEach((i) => {
      i.positionAbsolute = sc(i.position, n);
    }), e({
      nodeExtent: n,
      nodeInternals: new Map(r)
    });
  },
  panBy: (n) => {
    const { transform: r, width: i, height: o, d3Zoom: a, d3Selection: s, translateExtent: u } = t();
    if (!a || !s || !n.x && !n.y)
      return !1;
    const l = ut.translate(r[0] + n.x, r[1] + n.y).scale(r[2]), c = [
      [0, 0],
      [i, o]
    ], d = a?.constrain()(l, c, u);
    return a.transform(s, d), r[0] !== d.x || r[1] !== d.y || r[2] !== d.k;
  },
  cancelConnection: () => e({
    connectionNodeId: gt.connectionNodeId,
    connectionHandleId: gt.connectionHandleId,
    connectionHandleType: gt.connectionHandleType,
    connectionStatus: gt.connectionStatus,
    connectionStartHandle: gt.connectionStartHandle,
    connectionEndHandle: gt.connectionEndHandle
  }),
  reset: () => e({ ...gt })
}), Object.is), Zp = ({ children: e }) => {
  const t = ee(null);
  return t.current || (t.current = R1()), R.createElement(Zb, { value: t.current }, e);
};
Zp.displayName = "ReactFlowProvider";
const jp = ({ children: e }) => _r(Tr) ? R.createElement(R.Fragment, null, e) : R.createElement(Zp, null, e);
jp.displayName = "ReactFlowWrapper";
const T1 = {
  input: Ap,
  default: ks,
  output: Rp,
  group: pc
}, L1 = {
  default: hr,
  straight: lc,
  step: uc,
  smoothstep: Lr,
  simplebezier: cc
}, k1 = [0, 0], q1 = [15, 15], O1 = { x: 0, y: 0, zoom: 1 }, P1 = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
}, Qp = ah(({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, className: i, nodeTypes: o = T1, edgeTypes: a = L1, onNodeClick: s, onEdgeClick: u, onInit: l, onMove: c, onMoveStart: d, onMoveEnd: f, onConnect: h, onConnectStart: g, onConnectEnd: p, onClickConnectStart: m, onClickConnectEnd: v, onNodeMouseEnter: b, onNodeMouseMove: w, onNodeMouseLeave: _, onNodeContextMenu: C, onNodeDoubleClick: E, onNodeDragStart: M, onNodeDrag: T, onNodeDragStop: A, onNodesDelete: q, onEdgesDelete: P, onSelectionChange: F, onSelectionDragStart: O, onSelectionDrag: y, onSelectionDragStop: I, onSelectionContextMenu: x, onSelectionStart: L, onSelectionEnd: D, connectionMode: S = Bt.Strict, connectionLineType: k = bt.Bezier, connectionLineStyle: $, connectionLineComponent: B, connectionLineContainerStyle: G, deleteKeyCode: H = "Backspace", selectionKeyCode: X = "Shift", selectionOnDrag: J = !1, selectionMode: z = Sn.Full, panActivationKeyCode: V = "Space", multiSelectionKeyCode: W = dr() ? "Meta" : "Control", zoomActivationKeyCode: j = dr() ? "Meta" : "Control", snapToGrid: ie = !1, snapGrid: oe = q1, onlyRenderVisibleElements: de = !1, selectNodesOnDrag: me = !0, nodesDraggable: Z, nodesConnectable: be, nodesFocusable: Y, nodeOrigin: K = k1, edgesFocusable: he, edgesUpdatable: He, elementsSelectable: Ze, defaultViewport: Me = O1, minZoom: ge = 0.5, maxZoom: Ie = 2, translateExtent: Ve = Os, preventScrolling: nt = !0, nodeExtent: je, defaultMarkerColor: ke = "#b1b1b7", zoomOnScroll: rt = !0, zoomOnPinch: pt = !0, panOnScroll: we = !1, panOnScrollSpeed: qe = 0.5, panOnScrollMode: Ce = kt.Free, zoomOnDoubleClick: Ae = !0, panOnDrag: Ht = !0, onPaneClick: Qe, onPaneMouseEnter: At, onPaneMouseMove: zr, onPaneMouseLeave: Hr, onPaneScroll: an, onPaneContextMenu: Vr, children: kc, onEdgeContextMenu: It, onEdgeDoubleClick: pm, onEdgeMouseEnter: gm, onEdgeMouseMove: mm, onEdgeMouseLeave: vm, onEdgeUpdate: ym, onEdgeUpdateStart: _m, onEdgeUpdateEnd: bm, onReconnect: wm, onReconnectStart: Em, onReconnectEnd: xm, reconnectRadius: Sm = 10, edgeUpdaterRadius: Cm = 10, onNodesChange: Nm, onEdgesChange: Mm, noDragClassName: Am = "nodrag", noWheelClassName: Im = "nowheel", noPanClassName: qc = "nopan", fitView: Rm = !1, fitViewOptions: Tm, connectOnClick: Lm = !0, attributionPosition: km, proOptions: qm, defaultEdgeOptions: Om, elevateNodesOnSelect: Pm = !0, elevateEdgesOnSelect: Dm = !1, disableKeyboardA11y: Oc = !1, autoPanOnConnect: $m = !0, autoPanOnNodeDrag: Fm = !0, connectionRadius: Bm = 20, isValidConnection: zm, onError: Hm, style: Vm, id: Pc, nodeDragThreshold: Gm, ...Um }, Km) => {
  const Gr = Pc || "1";
  return R.createElement(
    "div",
    { ...Um, style: { ...Vm, ...P1 }, ref: Km, className: Se(["react-flow", i]), "data-testid": "rf__wrapper", id: Pc },
    R.createElement(
      jp,
      null,
      R.createElement(I1, { onInit: l, onMove: c, onMoveStart: d, onMoveEnd: f, onNodeClick: s, onEdgeClick: u, onNodeMouseEnter: b, onNodeMouseMove: w, onNodeMouseLeave: _, onNodeContextMenu: C, onNodeDoubleClick: E, nodeTypes: o, edgeTypes: a, connectionLineType: k, connectionLineStyle: $, connectionLineComponent: B, connectionLineContainerStyle: G, selectionKeyCode: X, selectionOnDrag: J, selectionMode: z, deleteKeyCode: H, multiSelectionKeyCode: W, panActivationKeyCode: V, zoomActivationKeyCode: j, onlyRenderVisibleElements: de, selectNodesOnDrag: me, defaultViewport: Me, translateExtent: Ve, minZoom: ge, maxZoom: Ie, preventScrolling: nt, zoomOnScroll: rt, zoomOnPinch: pt, zoomOnDoubleClick: Ae, panOnScroll: we, panOnScrollSpeed: qe, panOnScrollMode: Ce, panOnDrag: Ht, onPaneClick: Qe, onPaneMouseEnter: At, onPaneMouseMove: zr, onPaneMouseLeave: Hr, onPaneScroll: an, onPaneContextMenu: Vr, onSelectionContextMenu: x, onSelectionStart: L, onSelectionEnd: D, onEdgeContextMenu: It, onEdgeDoubleClick: pm, onEdgeMouseEnter: gm, onEdgeMouseMove: mm, onEdgeMouseLeave: vm, onReconnect: wm ?? ym, onReconnectStart: Em ?? _m, onReconnectEnd: xm ?? bm, reconnectRadius: Sm ?? Cm, defaultMarkerColor: ke, noDragClassName: Am, noWheelClassName: Im, noPanClassName: qc, elevateEdgesOnSelect: Dm, rfId: Gr, disableKeyboardA11y: Oc, nodeOrigin: K, nodeExtent: je }),
      R.createElement(Nw, { nodes: e, edges: t, defaultNodes: n, defaultEdges: r, onConnect: h, onConnectStart: g, onConnectEnd: p, onClickConnectStart: m, onClickConnectEnd: v, nodesDraggable: Z, nodesConnectable: be, nodesFocusable: Y, edgesFocusable: he, edgesUpdatable: He, elementsSelectable: Ze, elevateNodesOnSelect: Pm, minZoom: ge, maxZoom: Ie, nodeExtent: je, onNodesChange: Nm, onEdgesChange: Mm, snapToGrid: ie, snapGrid: oe, connectionMode: S, translateExtent: Ve, connectOnClick: Lm, defaultEdgeOptions: Om, fitView: Rm, fitViewOptions: Tm, onNodesDelete: q, onEdgesDelete: P, onNodeDragStart: M, onNodeDrag: T, onNodeDragStop: A, onSelectionDrag: y, onSelectionDragStart: O, onSelectionDragStop: I, noPanClassName: qc, nodeOrigin: K, rfId: Gr, autoPanOnConnect: $m, autoPanOnNodeDrag: Fm, onError: Hm, connectionRadius: Bm, isValidConnection: zm, nodeDragThreshold: Gm }),
      R.createElement(Sw, { onSelectionChange: F }),
      kc,
      R.createElement(Qb, { proOptions: qm, position: km }),
      R.createElement(Tw, { rfId: Gr, disableKeyboardA11y: Oc })
    )
  );
});
Qp.displayName = "ReactFlow";
function Jp(e) {
  return (t) => {
    const [n, r] = ae(t), i = ve((o) => r((a) => e(o, a)), []);
    return [n, r, i];
  };
}
const D1 = Jp($p), $1 = Jp(Uw), eg = ({ id: e, x: t, y: n, width: r, height: i, style: o, color: a, strokeColor: s, strokeWidth: u, className: l, borderRadius: c, shapeRendering: d, onClick: f, selected: h }) => {
  const { background: g, backgroundColor: p } = o || {}, m = a || g || p;
  return R.createElement("rect", { className: Se(["react-flow__minimap-node", { selected: h }, l]), x: t, y: n, rx: c, ry: c, width: r, height: i, fill: m, stroke: s, strokeWidth: u, shapeRendering: d, onClick: f ? (v) => f(v, e) : void 0 });
};
eg.displayName = "MiniMapNode";
var F1 = ue(eg);
const B1 = (e) => e.nodeOrigin, z1 = (e) => e.getNodes().filter((t) => !t.hidden && t.width && t.height), ai = (e) => e instanceof Function ? e : () => e;
function H1({
  nodeStrokeColor: e = "transparent",
  nodeColor: t = "#e2e2e2",
  nodeClassName: n = "",
  nodeBorderRadius: r = 5,
  nodeStrokeWidth: i = 2,
  // We need to rename the prop to be `CapitalCase` so that JSX will render it as
  // a component properly.
  nodeComponent: o = F1,
  onClick: a
}) {
  const s = le(z1, ye), u = le(B1), l = ai(t), c = ai(e), d = ai(n), f = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return R.createElement(R.Fragment, null, s.map((h) => {
    const { x: g, y: p } = $t(h, u).positionAbsolute;
    return R.createElement(o, { key: h.id, x: g, y: p, width: h.width, height: h.height, style: h.style, selected: h.selected, className: d(h), color: l(h), borderRadius: r, strokeColor: c(h), strokeWidth: i, shapeRendering: f, onClick: a, id: h.id });
  }));
}
var V1 = ue(H1);
const G1 = 200, U1 = 150, K1 = (e) => {
  const t = e.getNodes(), n = {
    x: -e.transform[0] / e.transform[2],
    y: -e.transform[1] / e.transform[2],
    width: e.width / e.transform[2],
    height: e.height / e.transform[2]
  };
  return {
    viewBB: n,
    boundingRect: t.length > 0 ? tw(kr(t, e.nodeOrigin), n) : n,
    rfId: e.rfId
  };
}, Y1 = "react-flow__minimap-desc";
function tg({
  style: e,
  className: t,
  nodeStrokeColor: n = "transparent",
  nodeColor: r = "#e2e2e2",
  nodeClassName: i = "",
  nodeBorderRadius: o = 5,
  nodeStrokeWidth: a = 2,
  // We need to rename the prop to be `CapitalCase` so that JSX will render it as
  // a component properly.
  nodeComponent: s,
  maskColor: u = "rgb(240, 240, 240, 0.6)",
  maskStrokeColor: l = "none",
  maskStrokeWidth: c = 1,
  position: d = "bottom-right",
  onClick: f,
  onNodeClick: h,
  pannable: g = !1,
  zoomable: p = !1,
  ariaLabel: m = "React Flow mini map",
  inversePan: v = !1,
  zoomStep: b = 10,
  offsetScale: w = 5
}) {
  const _ = _e(), C = ee(null), { boundingRect: E, viewBB: M, rfId: T } = le(K1, ye), A = e?.width ?? G1, q = e?.height ?? U1, P = E.width / A, F = E.height / q, O = Math.max(P, F), y = O * A, I = O * q, x = w * O, L = E.x - (y - E.width) / 2 - x, D = E.y - (I - E.height) / 2 - x, S = y + x * 2, k = I + x * 2, $ = `${Y1}-${T}`, B = ee(0);
  B.current = O, ce(() => {
    if (C.current) {
      const X = De(C.current), J = (W) => {
        const { transform: j, d3Selection: ie, d3Zoom: oe } = _.getState();
        if (W.sourceEvent.type !== "wheel" || !ie || !oe)
          return;
        const de = -W.sourceEvent.deltaY * (W.sourceEvent.deltaMode === 1 ? 0.05 : W.sourceEvent.deltaMode ? 1 : 2e-3) * b, me = j[2] * Math.pow(2, de);
        oe.scaleTo(ie, me);
      }, z = (W) => {
        const { transform: j, d3Selection: ie, d3Zoom: oe, translateExtent: de, width: me, height: Z } = _.getState();
        if (W.sourceEvent.type !== "mousemove" || !ie || !oe)
          return;
        const be = B.current * Math.max(1, j[2]) * (v ? -1 : 1), Y = {
          x: j[0] - W.sourceEvent.movementX * be,
          y: j[1] - W.sourceEvent.movementY * be
        }, K = [
          [0, 0],
          [me, Z]
        ], he = ut.translate(Y.x, Y.y).scale(j[2]), He = oe.constrain()(he, K, de);
        oe.transform(ie, He);
      }, V = ap().on("zoom", g ? z : null).on("zoom.wheel", p ? J : null);
      return X.call(V), () => {
        X.on("zoom", null);
      };
    }
  }, [g, p, v, b]);
  const G = f ? (X) => {
    const J = Ge(X);
    f(X, { x: J[0], y: J[1] });
  } : void 0, H = h ? (X, J) => {
    const z = _.getState().nodeInternals.get(J);
    h(X, z);
  } : void 0;
  return R.createElement(
    oc,
    { position: d, style: e, className: Se(["react-flow__minimap", t]), "data-testid": "rf__minimap" },
    R.createElement(
      "svg",
      { width: A, height: q, viewBox: `${L} ${D} ${S} ${k}`, role: "img", "aria-labelledby": $, ref: C, onClick: G },
      m && R.createElement("title", { id: $ }, m),
      R.createElement(V1, { onClick: H, nodeColor: r, nodeStrokeColor: n, nodeBorderRadius: o, nodeClassName: i, nodeStrokeWidth: a, nodeComponent: s }),
      R.createElement("path", { className: "react-flow__minimap-mask", d: `M${L - x},${D - x}h${S + x * 2}v${k + x * 2}h${-S - x * 2}z
        M${M.x},${M.y}h${M.width}v${M.height}h${-M.width}z`, fill: u, fillRule: "evenodd", stroke: l, strokeWidth: c, pointerEvents: "none" })
    )
  );
}
tg.displayName = "MiniMap";
var W1 = ue(tg);
function X1() {
  return R.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32" },
    R.createElement("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" })
  );
}
function Z1() {
  return R.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5" },
    R.createElement("path", { d: "M0 0h32v4.2H0z" })
  );
}
function j1() {
  return R.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30" },
    R.createElement("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" })
  );
}
function Q1() {
  return R.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32" },
    R.createElement("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" })
  );
}
function J1() {
  return R.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32" },
    R.createElement("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" })
  );
}
const pn = ({ children: e, className: t, ...n }) => R.createElement("button", { type: "button", className: Se(["react-flow__controls-button", t]), ...n }, e);
pn.displayName = "ControlButton";
const eE = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom
}), ng = ({ style: e, showZoom: t = !0, showFitView: n = !0, showInteractive: r = !0, fitViewOptions: i, onZoomIn: o, onZoomOut: a, onFitView: s, onInteractiveChange: u, className: l, children: c, position: d = "bottom-left" }) => {
  const f = _e(), [h, g] = ae(!1), { isInteractive: p, minZoomReached: m, maxZoomReached: v } = le(eE, ye), { zoomIn: b, zoomOut: w, fitView: _ } = gc();
  if (ce(() => {
    g(!0);
  }, []), !h)
    return null;
  const C = () => {
    b(), o?.();
  }, E = () => {
    w(), a?.();
  }, M = () => {
    _(i), s?.();
  }, T = () => {
    f.setState({
      nodesDraggable: !p,
      nodesConnectable: !p,
      elementsSelectable: !p
    }), u?.(!p);
  };
  return R.createElement(
    oc,
    { className: Se(["react-flow__controls", l]), position: d, style: e, "data-testid": "rf__controls" },
    t && R.createElement(
      R.Fragment,
      null,
      R.createElement(
        pn,
        { onClick: C, className: "react-flow__controls-zoomin", title: "zoom in", "aria-label": "zoom in", disabled: v },
        R.createElement(X1, null)
      ),
      R.createElement(
        pn,
        { onClick: E, className: "react-flow__controls-zoomout", title: "zoom out", "aria-label": "zoom out", disabled: m },
        R.createElement(Z1, null)
      )
    ),
    n && R.createElement(
      pn,
      { className: "react-flow__controls-fitview", onClick: M, title: "fit view", "aria-label": "fit view" },
      R.createElement(j1, null)
    ),
    r && R.createElement(pn, { className: "react-flow__controls-interactive", onClick: T, title: "toggle interactivity", "aria-label": "toggle interactivity" }, p ? R.createElement(J1, null) : R.createElement(Q1, null)),
    c
  );
};
ng.displayName = "Controls";
var tE = ue(ng), Ke;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Ke || (Ke = {}));
function nE({ color: e, dimensions: t, lineWidth: n }) {
  return R.createElement("path", { stroke: e, strokeWidth: n, d: `M${t[0] / 2} 0 V${t[1]} M0 ${t[1] / 2} H${t[0]}` });
}
function rE({ color: e, radius: t }) {
  return R.createElement("circle", { cx: t, cy: t, r: t, fill: e });
}
const iE = {
  [Ke.Dots]: "#91919a",
  [Ke.Lines]: "#eee",
  [Ke.Cross]: "#e2e2e2"
}, oE = {
  [Ke.Dots]: 1,
  [Ke.Lines]: 1,
  [Ke.Cross]: 6
}, aE = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function rg({
  id: e,
  variant: t = Ke.Dots,
  // only used for dots and cross
  gap: n = 20,
  // only used for lines and cross
  size: r,
  lineWidth: i = 1,
  offset: o = 2,
  color: a,
  style: s,
  className: u
}) {
  const l = ee(null), { transform: c, patternId: d } = le(aE, ye), f = a || iE[t], h = r || oE[t], g = t === Ke.Dots, p = t === Ke.Cross, m = Array.isArray(n) ? n : [n, n], v = [m[0] * c[2] || 1, m[1] * c[2] || 1], b = h * c[2], w = p ? [b, b] : v, _ = g ? [b / o, b / o] : [w[0] / o, w[1] / o];
  return R.createElement(
    "svg",
    { className: Se(["react-flow__background", u]), style: {
      ...s,
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0
    }, ref: l, "data-testid": "rf__background" },
    R.createElement("pattern", { id: d + e, x: c[0] % v[0], y: c[1] % v[1], width: v[0], height: v[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${_[0]},-${_[1]})` }, g ? R.createElement(rE, { color: f, radius: b / o }) : R.createElement(nE, { dimensions: w, color: f, lineWidth: i })),
    R.createElement("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${d + e})` })
  );
}
rg.displayName = "Background";
var sE = ue(rg);
function cE(e, t) {
  const n = ee(!1);
  ce(() => {
    if (n.current)
      return e();
    n.current = !0;
  }, t);
}
var si, Du;
function vc() {
  if (Du) return si;
  Du = 1;
  function e(t, n) {
    for (var r = -1, i = t == null ? 0 : t.length; ++r < i && n(t[r], r, t) !== !1; )
      ;
    return t;
  }
  return si = e, si;
}
var ci, $u;
function uE() {
  if ($u) return ci;
  $u = 1;
  var e = av, t = e(Object.keys, Object);
  return ci = t, ci;
}
var ui, Fu;
function yc() {
  if (Fu) return ui;
  Fu = 1;
  var e = lh, t = uE(), n = Object.prototype, r = n.hasOwnProperty;
  function i(o) {
    if (!e(o))
      return t(o);
    var a = [];
    for (var s in Object(o))
      r.call(o, s) && s != "constructor" && a.push(s);
    return a;
  }
  return ui = i, ui;
}
var li, Bu;
function Mt() {
  if (Bu) return li;
  Bu = 1;
  var e = sv, t = yc(), n = nn;
  function r(i) {
    return n(i) ? e(i) : t(i);
  }
  return li = r, li;
}
var di, zu;
function lE() {
  if (zu) return di;
  zu = 1;
  var e = Er, t = Mt();
  function n(r, i) {
    return r && e(i, t(i), r);
  }
  return di = n, di;
}
var fi, Hu;
function dE() {
  if (Hu) return fi;
  Hu = 1;
  var e = Er, t = Rn;
  function n(r, i) {
    return r && e(i, t(i), r);
  }
  return fi = n, fi;
}
var hi, Vu;
function ig() {
  if (Vu) return hi;
  Vu = 1;
  function e(t, n) {
    for (var r = -1, i = t == null ? 0 : t.length, o = 0, a = []; ++r < i; ) {
      var s = t[r];
      n(s, r, t) && (a[o++] = s);
    }
    return a;
  }
  return hi = e, hi;
}
var pi, Gu;
function og() {
  if (Gu) return pi;
  Gu = 1;
  function e() {
    return [];
  }
  return pi = e, pi;
}
var gi, Uu;
function _c() {
  if (Uu) return gi;
  Uu = 1;
  var e = ig(), t = og(), n = Object.prototype, r = n.propertyIsEnumerable, i = Object.getOwnPropertySymbols, o = i ? function(a) {
    return a == null ? [] : (a = Object(a), e(i(a), function(s) {
      return r.call(a, s);
    }));
  } : t;
  return gi = o, gi;
}
var mi, Ku;
function fE() {
  if (Ku) return mi;
  Ku = 1;
  var e = Er, t = _c();
  function n(r, i) {
    return e(r, t(r), i);
  }
  return mi = n, mi;
}
var vi, Yu;
function bc() {
  if (Yu) return vi;
  Yu = 1;
  function e(t, n) {
    for (var r = -1, i = n.length, o = t.length; ++r < i; )
      t[o + r] = n[r];
    return t;
  }
  return vi = e, vi;
}
var yi, Wu;
function ag() {
  if (Wu) return yi;
  Wu = 1;
  var e = bc(), t = dh, n = _c(), r = og(), i = Object.getOwnPropertySymbols, o = i ? function(a) {
    for (var s = []; a; )
      e(s, n(a)), a = t(a);
    return s;
  } : r;
  return yi = o, yi;
}
var _i, Xu;
function hE() {
  if (Xu) return _i;
  Xu = 1;
  var e = Er, t = ag();
  function n(r, i) {
    return e(r, t(r), i);
  }
  return _i = n, _i;
}
var bi, Zu;
function sg() {
  if (Zu) return bi;
  Zu = 1;
  var e = bc(), t = xe;
  function n(r, i, o) {
    var a = i(r);
    return t(r) ? a : e(a, o(r));
  }
  return bi = n, bi;
}
var wi, ju;
function cg() {
  if (ju) return wi;
  ju = 1;
  var e = sg(), t = _c(), n = Mt();
  function r(i) {
    return e(i, n, t);
  }
  return wi = r, wi;
}
var Ei, Qu;
function pE() {
  if (Qu) return Ei;
  Qu = 1;
  var e = sg(), t = ag(), n = Rn;
  function r(i) {
    return e(i, n, t);
  }
  return Ei = r, Ei;
}
var xi, Ju;
function gE() {
  if (Ju) return xi;
  Ju = 1;
  var e = xr, t = Tn, n = e(t, "DataView");
  return xi = n, xi;
}
var Si, el;
function mE() {
  if (el) return Si;
  el = 1;
  var e = xr, t = Tn, n = e(t, "Promise");
  return Si = n, Si;
}
var Ci, tl;
function ug() {
  if (tl) return Ci;
  tl = 1;
  var e = xr, t = Tn, n = e(t, "Set");
  return Ci = n, Ci;
}
var Ni, nl;
function vE() {
  if (nl) return Ni;
  nl = 1;
  var e = xr, t = Tn, n = e(t, "WeakMap");
  return Ni = n, Ni;
}
var Mi, rl;
function rn() {
  if (rl) return Mi;
  rl = 1;
  var e = gE(), t = cv, n = mE(), r = ug(), i = vE(), o = Hs, a = uv(), s = "[object Map]", u = "[object Object]", l = "[object Promise]", c = "[object Set]", d = "[object WeakMap]", f = "[object DataView]", h = a(e), g = a(t), p = a(n), m = a(r), v = a(i), b = o;
  return (e && b(new e(new ArrayBuffer(1))) != f || t && b(new t()) != s || n && b(n.resolve()) != l || r && b(new r()) != c || i && b(new i()) != d) && (b = function(w) {
    var _ = o(w), C = _ == u ? w.constructor : void 0, E = C ? a(C) : "";
    if (E)
      switch (E) {
        case h:
          return f;
        case g:
          return s;
        case p:
          return l;
        case m:
          return c;
        case v:
          return d;
      }
    return _;
  }), Mi = b, Mi;
}
var Ai, il;
function yE() {
  if (il) return Ai;
  il = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function n(r) {
    var i = r.length, o = new r.constructor(i);
    return i && typeof r[0] == "string" && t.call(r, "index") && (o.index = r.index, o.input = r.input), o;
  }
  return Ai = n, Ai;
}
var Ii, ol;
function _E() {
  if (ol) return Ii;
  ol = 1;
  var e = fh;
  function t(n, r) {
    var i = r ? e(n.buffer) : n.buffer;
    return new n.constructor(i, n.byteOffset, n.byteLength);
  }
  return Ii = t, Ii;
}
var Ri, al;
function bE() {
  if (al) return Ri;
  al = 1;
  var e = /\w*$/;
  function t(n) {
    var r = new n.constructor(n.source, e.exec(n));
    return r.lastIndex = n.lastIndex, r;
  }
  return Ri = t, Ri;
}
var Ti, sl;
function wE() {
  if (sl) return Ti;
  sl = 1;
  var e = Sr, t = e ? e.prototype : void 0, n = t ? t.valueOf : void 0;
  function r(i) {
    return n ? Object(n.call(i)) : {};
  }
  return Ti = r, Ti;
}
var Li, cl;
function EE() {
  if (cl) return Li;
  cl = 1;
  var e = fh, t = _E(), n = bE(), r = wE(), i = lv, o = "[object Boolean]", a = "[object Date]", s = "[object Map]", u = "[object Number]", l = "[object RegExp]", c = "[object Set]", d = "[object String]", f = "[object Symbol]", h = "[object ArrayBuffer]", g = "[object DataView]", p = "[object Float32Array]", m = "[object Float64Array]", v = "[object Int8Array]", b = "[object Int16Array]", w = "[object Int32Array]", _ = "[object Uint8Array]", C = "[object Uint8ClampedArray]", E = "[object Uint16Array]", M = "[object Uint32Array]";
  function T(A, q, P) {
    var F = A.constructor;
    switch (q) {
      case h:
        return e(A);
      case o:
      case a:
        return new F(+A);
      case g:
        return t(A, P);
      case p:
      case m:
      case v:
      case b:
      case w:
      case _:
      case C:
      case E:
      case M:
        return i(A, P);
      case s:
        return new F();
      case u:
      case d:
        return new F(A);
      case l:
        return n(A);
      case c:
        return new F();
      case f:
        return r(A);
    }
  }
  return Li = T, Li;
}
var ki, ul;
function xE() {
  if (ul) return ki;
  ul = 1;
  var e = rn(), t = Ln, n = "[object Map]";
  function r(i) {
    return t(i) && e(i) == n;
  }
  return ki = r, ki;
}
var qi, ll;
function SE() {
  if (ll) return qi;
  ll = 1;
  var e = xE(), t = Vs, n = hh, r = n && n.isMap, i = r ? t(r) : e;
  return qi = i, qi;
}
var Oi, dl;
function CE() {
  if (dl) return Oi;
  dl = 1;
  var e = rn(), t = Ln, n = "[object Set]";
  function r(i) {
    return t(i) && e(i) == n;
  }
  return Oi = r, Oi;
}
var Pi, fl;
function NE() {
  if (fl) return Pi;
  fl = 1;
  var e = CE(), t = Vs, n = hh, r = n && n.isSet, i = r ? t(r) : e;
  return Pi = i, Pi;
}
var Di, hl;
function lg() {
  if (hl) return Di;
  hl = 1;
  var e = Gs, t = vc(), n = Us(), r = lE(), i = dE(), o = dv, a = fv, s = fE(), u = hE(), l = cg(), c = pE(), d = rn(), f = yE(), h = EE(), g = hv, p = xe, m = Cr, v = SE(), b = kn, w = NE(), _ = Mt(), C = Rn, E = 1, M = 2, T = 4, A = "[object Arguments]", q = "[object Array]", P = "[object Boolean]", F = "[object Date]", O = "[object Error]", y = "[object Function]", I = "[object GeneratorFunction]", x = "[object Map]", L = "[object Number]", D = "[object Object]", S = "[object RegExp]", k = "[object Set]", $ = "[object String]", B = "[object Symbol]", G = "[object WeakMap]", H = "[object ArrayBuffer]", X = "[object DataView]", J = "[object Float32Array]", z = "[object Float64Array]", V = "[object Int8Array]", W = "[object Int16Array]", j = "[object Int32Array]", ie = "[object Uint8Array]", oe = "[object Uint8ClampedArray]", de = "[object Uint16Array]", me = "[object Uint32Array]", Z = {};
  Z[A] = Z[q] = Z[H] = Z[X] = Z[P] = Z[F] = Z[J] = Z[z] = Z[V] = Z[W] = Z[j] = Z[x] = Z[L] = Z[D] = Z[S] = Z[k] = Z[$] = Z[B] = Z[ie] = Z[oe] = Z[de] = Z[me] = !0, Z[O] = Z[y] = Z[G] = !1;
  function be(Y, K, he, He, Ze, Me) {
    var ge, Ie = K & E, Ve = K & M, nt = K & T;
    if (he && (ge = Ze ? he(Y, He, Ze, Me) : he(Y)), ge !== void 0)
      return ge;
    if (!b(Y))
      return Y;
    var je = p(Y);
    if (je) {
      if (ge = f(Y), !Ie)
        return a(Y, ge);
    } else {
      var ke = d(Y), rt = ke == y || ke == I;
      if (m(Y))
        return o(Y, Ie);
      if (ke == D || ke == A || rt && !Ze) {
        if (ge = Ve || rt ? {} : g(Y), !Ie)
          return Ve ? u(Y, i(ge, Y)) : s(Y, r(ge, Y));
      } else {
        if (!Z[ke])
          return Ze ? Y : {};
        ge = h(Y, ke, Ie);
      }
    }
    Me || (Me = new e());
    var pt = Me.get(Y);
    if (pt)
      return pt;
    Me.set(Y, ge), w(Y) ? Y.forEach(function(Ce) {
      ge.add(be(Ce, K, he, Ce, Y, Me));
    }) : v(Y) && Y.forEach(function(Ce, Ae) {
      ge.set(Ae, be(Ce, K, he, Ae, Y, Me));
    });
    var we = nt ? Ve ? c : l : Ve ? C : _, qe = je ? void 0 : we(Y);
    return t(qe || Y, function(Ce, Ae) {
      qe && (Ae = Ce, Ce = Y[Ae]), n(ge, Ae, be(Ce, K, he, Ae, Y, Me));
    }), ge;
  }
  return Di = be, Di;
}
var $i, pl;
function ME() {
  if (pl) return $i;
  pl = 1;
  var e = lg(), t = 4;
  function n(r) {
    return e(r, t);
  }
  return $i = n, $i;
}
var Fi, gl;
function wc() {
  if (gl) return Fi;
  gl = 1;
  var e = ph, t = Mt();
  function n(r, i) {
    return r && e(r, i, t);
  }
  return Fi = n, Fi;
}
var Bi, ml;
function AE() {
  if (ml) return Bi;
  ml = 1;
  var e = nn;
  function t(n, r) {
    return function(i, o) {
      if (i == null)
        return i;
      if (!e(i))
        return n(i, o);
      for (var a = i.length, s = r ? a : -1, u = Object(i); (r ? s-- : ++s < a) && o(u[s], s, u) !== !1; )
        ;
      return i;
    };
  }
  return Bi = t, Bi;
}
var zi, vl;
function qr() {
  if (vl) return zi;
  vl = 1;
  var e = wc(), t = AE(), n = t(e);
  return zi = n, zi;
}
var Hi, yl;
function dg() {
  if (yl) return Hi;
  yl = 1;
  var e = qn;
  function t(n) {
    return typeof n == "function" ? n : e;
  }
  return Hi = t, Hi;
}
var Vi, _l;
function fg() {
  if (_l) return Vi;
  _l = 1;
  var e = vc(), t = qr(), n = dg(), r = xe;
  function i(o, a) {
    var s = r(o) ? e : t;
    return s(o, n(a));
  }
  return Vi = i, Vi;
}
var Gi, bl;
function hg() {
  return bl || (bl = 1, Gi = fg()), Gi;
}
var Ui, wl;
function IE() {
  if (wl) return Ui;
  wl = 1;
  var e = qr();
  function t(n, r) {
    var i = [];
    return e(n, function(o, a, s) {
      r(o, a, s) && i.push(o);
    }), i;
  }
  return Ui = t, Ui;
}
var Ki, El;
function RE() {
  if (El) return Ki;
  El = 1;
  var e = "__lodash_hash_undefined__";
  function t(n) {
    return this.__data__.set(n, e), this;
  }
  return Ki = t, Ki;
}
var Yi, xl;
function TE() {
  if (xl) return Yi;
  xl = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Yi = e, Yi;
}
var Wi, Sl;
function pg() {
  if (Sl) return Wi;
  Sl = 1;
  var e = gh, t = RE(), n = TE();
  function r(i) {
    var o = -1, a = i == null ? 0 : i.length;
    for (this.__data__ = new e(); ++o < a; )
      this.add(i[o]);
  }
  return r.prototype.add = r.prototype.push = t, r.prototype.has = n, Wi = r, Wi;
}
var Xi, Cl;
function LE() {
  if (Cl) return Xi;
  Cl = 1;
  function e(t, n) {
    for (var r = -1, i = t == null ? 0 : t.length; ++r < i; )
      if (n(t[r], r, t))
        return !0;
    return !1;
  }
  return Xi = e, Xi;
}
var Zi, Nl;
function gg() {
  if (Nl) return Zi;
  Nl = 1;
  function e(t, n) {
    return t.has(n);
  }
  return Zi = e, Zi;
}
var ji, Ml;
function mg() {
  if (Ml) return ji;
  Ml = 1;
  var e = pg(), t = LE(), n = gg(), r = 1, i = 2;
  function o(a, s, u, l, c, d) {
    var f = u & r, h = a.length, g = s.length;
    if (h != g && !(f && g > h))
      return !1;
    var p = d.get(a), m = d.get(s);
    if (p && m)
      return p == s && m == a;
    var v = -1, b = !0, w = u & i ? new e() : void 0;
    for (d.set(a, s), d.set(s, a); ++v < h; ) {
      var _ = a[v], C = s[v];
      if (l)
        var E = f ? l(C, _, v, s, a, d) : l(_, C, v, a, s, d);
      if (E !== void 0) {
        if (E)
          continue;
        b = !1;
        break;
      }
      if (w) {
        if (!t(s, function(M, T) {
          if (!n(w, T) && (_ === M || c(_, M, u, l, d)))
            return w.push(T);
        })) {
          b = !1;
          break;
        }
      } else if (!(_ === C || c(_, C, u, l, d))) {
        b = !1;
        break;
      }
    }
    return d.delete(a), d.delete(s), b;
  }
  return ji = o, ji;
}
var Qi, Al;
function kE() {
  if (Al) return Qi;
  Al = 1;
  function e(t) {
    var n = -1, r = Array(t.size);
    return t.forEach(function(i, o) {
      r[++n] = [o, i];
    }), r;
  }
  return Qi = e, Qi;
}
var Ji, Il;
function Ec() {
  if (Il) return Ji;
  Il = 1;
  function e(t) {
    var n = -1, r = Array(t.size);
    return t.forEach(function(i) {
      r[++n] = i;
    }), r;
  }
  return Ji = e, Ji;
}
var eo, Rl;
function qE() {
  if (Rl) return eo;
  Rl = 1;
  var e = Sr, t = pv, n = mh, r = mg(), i = kE(), o = Ec(), a = 1, s = 2, u = "[object Boolean]", l = "[object Date]", c = "[object Error]", d = "[object Map]", f = "[object Number]", h = "[object RegExp]", g = "[object Set]", p = "[object String]", m = "[object Symbol]", v = "[object ArrayBuffer]", b = "[object DataView]", w = e ? e.prototype : void 0, _ = w ? w.valueOf : void 0;
  function C(E, M, T, A, q, P, F) {
    switch (T) {
      case b:
        if (E.byteLength != M.byteLength || E.byteOffset != M.byteOffset)
          return !1;
        E = E.buffer, M = M.buffer;
      case v:
        return !(E.byteLength != M.byteLength || !P(new t(E), new t(M)));
      case u:
      case l:
      case f:
        return n(+E, +M);
      case c:
        return E.name == M.name && E.message == M.message;
      case h:
      case p:
        return E == M + "";
      case d:
        var O = i;
      case g:
        var y = A & a;
        if (O || (O = o), E.size != M.size && !y)
          return !1;
        var I = F.get(E);
        if (I)
          return I == M;
        A |= s, F.set(E, M);
        var x = r(O(E), O(M), A, q, P, F);
        return F.delete(E), x;
      case m:
        if (_)
          return _.call(E) == _.call(M);
    }
    return !1;
  }
  return eo = C, eo;
}
var to, Tl;
function OE() {
  if (Tl) return to;
  Tl = 1;
  var e = cg(), t = 1, n = Object.prototype, r = n.hasOwnProperty;
  function i(o, a, s, u, l, c) {
    var d = s & t, f = e(o), h = f.length, g = e(a), p = g.length;
    if (h != p && !d)
      return !1;
    for (var m = h; m--; ) {
      var v = f[m];
      if (!(d ? v in a : r.call(a, v)))
        return !1;
    }
    var b = c.get(o), w = c.get(a);
    if (b && w)
      return b == a && w == o;
    var _ = !0;
    c.set(o, a), c.set(a, o);
    for (var C = d; ++m < h; ) {
      v = f[m];
      var E = o[v], M = a[v];
      if (u)
        var T = d ? u(M, E, v, a, o, c) : u(E, M, v, o, a, c);
      if (!(T === void 0 ? E === M || l(E, M, s, u, c) : T)) {
        _ = !1;
        break;
      }
      C || (C = v == "constructor");
    }
    if (_ && !C) {
      var A = o.constructor, q = a.constructor;
      A != q && "constructor" in o && "constructor" in a && !(typeof A == "function" && A instanceof A && typeof q == "function" && q instanceof q) && (_ = !1);
    }
    return c.delete(o), c.delete(a), _;
  }
  return to = i, to;
}
var no, Ll;
function PE() {
  if (Ll) return no;
  Ll = 1;
  var e = Gs, t = mg(), n = qE(), r = OE(), i = rn(), o = xe, a = Cr, s = Ks, u = 1, l = "[object Arguments]", c = "[object Array]", d = "[object Object]", f = Object.prototype, h = f.hasOwnProperty;
  function g(p, m, v, b, w, _) {
    var C = o(p), E = o(m), M = C ? c : i(p), T = E ? c : i(m);
    M = M == l ? d : M, T = T == l ? d : T;
    var A = M == d, q = T == d, P = M == T;
    if (P && a(p)) {
      if (!a(m))
        return !1;
      C = !0, A = !1;
    }
    if (P && !A)
      return _ || (_ = new e()), C || s(p) ? t(p, m, v, b, w, _) : n(p, m, M, v, b, w, _);
    if (!(v & u)) {
      var F = A && h.call(p, "__wrapped__"), O = q && h.call(m, "__wrapped__");
      if (F || O) {
        var y = F ? p.value() : p, I = O ? m.value() : m;
        return _ || (_ = new e()), w(y, I, v, b, _);
      }
    }
    return P ? (_ || (_ = new e()), r(p, m, v, b, w, _)) : !1;
  }
  return no = g, no;
}
var ro, kl;
function vg() {
  if (kl) return ro;
  kl = 1;
  var e = PE(), t = Ln;
  function n(r, i, o, a, s) {
    return r === i ? !0 : r == null || i == null || !t(r) && !t(i) ? r !== r && i !== i : e(r, i, o, a, n, s);
  }
  return ro = n, ro;
}
var io, ql;
function DE() {
  if (ql) return io;
  ql = 1;
  var e = Gs, t = vg(), n = 1, r = 2;
  function i(o, a, s, u) {
    var l = s.length, c = l, d = !u;
    if (o == null)
      return !c;
    for (o = Object(o); l--; ) {
      var f = s[l];
      if (d && f[2] ? f[1] !== o[f[0]] : !(f[0] in o))
        return !1;
    }
    for (; ++l < c; ) {
      f = s[l];
      var h = f[0], g = o[h], p = f[1];
      if (d && f[2]) {
        if (g === void 0 && !(h in o))
          return !1;
      } else {
        var m = new e();
        if (u)
          var v = u(g, p, h, o, a, m);
        if (!(v === void 0 ? t(p, g, n | r, u, m) : v))
          return !1;
      }
    }
    return !0;
  }
  return io = i, io;
}
var oo, Ol;
function yg() {
  if (Ol) return oo;
  Ol = 1;
  var e = kn;
  function t(n) {
    return n === n && !e(n);
  }
  return oo = t, oo;
}
var ao, Pl;
function $E() {
  if (Pl) return ao;
  Pl = 1;
  var e = yg(), t = Mt();
  function n(r) {
    for (var i = t(r), o = i.length; o--; ) {
      var a = i[o], s = r[a];
      i[o] = [a, s, e(s)];
    }
    return i;
  }
  return ao = n, ao;
}
var so, Dl;
function _g() {
  if (Dl) return so;
  Dl = 1;
  function e(t, n) {
    return function(r) {
      return r == null ? !1 : r[t] === n && (n !== void 0 || t in Object(r));
    };
  }
  return so = e, so;
}
var co, $l;
function FE() {
  if ($l) return co;
  $l = 1;
  var e = DE(), t = $E(), n = _g();
  function r(i) {
    var o = t(i);
    return o.length == 1 && o[0][2] ? n(o[0][0], o[0][1]) : function(a) {
      return a === i || e(a, i, o);
    };
  }
  return co = r, co;
}
var uo, Fl;
function on() {
  if (Fl) return uo;
  Fl = 1;
  var e = Hs, t = Ln, n = "[object Symbol]";
  function r(i) {
    return typeof i == "symbol" || t(i) && e(i) == n;
  }
  return uo = r, uo;
}
var lo, Bl;
function xc() {
  if (Bl) return lo;
  Bl = 1;
  var e = xe, t = on(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r = /^\w*$/;
  function i(o, a) {
    if (e(o))
      return !1;
    var s = typeof o;
    return s == "number" || s == "symbol" || s == "boolean" || o == null || t(o) ? !0 : r.test(o) || !n.test(o) || a != null && o in Object(a);
  }
  return lo = i, lo;
}
var fo, zl;
function BE() {
  if (zl) return fo;
  zl = 1;
  var e = gh, t = "Expected a function";
  function n(r, i) {
    if (typeof r != "function" || i != null && typeof i != "function")
      throw new TypeError(t);
    var o = function() {
      var a = arguments, s = i ? i.apply(this, a) : a[0], u = o.cache;
      if (u.has(s))
        return u.get(s);
      var l = r.apply(this, a);
      return o.cache = u.set(s, l) || u, l;
    };
    return o.cache = new (n.Cache || e)(), o;
  }
  return n.Cache = e, fo = n, fo;
}
var ho, Hl;
function zE() {
  if (Hl) return ho;
  Hl = 1;
  var e = BE(), t = 500;
  function n(r) {
    var i = e(r, function(a) {
      return o.size === t && o.clear(), a;
    }), o = i.cache;
    return i;
  }
  return ho = n, ho;
}
var po, Vl;
function HE() {
  if (Vl) return po;
  Vl = 1;
  var e = zE(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, r = e(function(i) {
    var o = [];
    return i.charCodeAt(0) === 46 && o.push(""), i.replace(t, function(a, s, u, l) {
      o.push(u ? l.replace(n, "$1") : s || a);
    }), o;
  });
  return po = r, po;
}
var go, Gl;
function Or() {
  if (Gl) return go;
  Gl = 1;
  function e(t, n) {
    for (var r = -1, i = t == null ? 0 : t.length, o = Array(i); ++r < i; )
      o[r] = n(t[r], r, t);
    return o;
  }
  return go = e, go;
}
var mo, Ul;
function VE() {
  if (Ul) return mo;
  Ul = 1;
  var e = Sr, t = Or(), n = xe, r = on(), i = 1 / 0, o = e ? e.prototype : void 0, a = o ? o.toString : void 0;
  function s(u) {
    if (typeof u == "string")
      return u;
    if (n(u))
      return t(u, s) + "";
    if (r(u))
      return a ? a.call(u) : "";
    var l = u + "";
    return l == "0" && 1 / u == -i ? "-0" : l;
  }
  return mo = s, mo;
}
var vo, Kl;
function bg() {
  if (Kl) return vo;
  Kl = 1;
  var e = VE();
  function t(n) {
    return n == null ? "" : e(n);
  }
  return vo = t, vo;
}
var yo, Yl;
function Pr() {
  if (Yl) return yo;
  Yl = 1;
  var e = xe, t = xc(), n = HE(), r = bg();
  function i(o, a) {
    return e(o) ? o : t(o, a) ? [o] : n(r(o));
  }
  return yo = i, yo;
}
var _o, Wl;
function $n() {
  if (Wl) return _o;
  Wl = 1;
  var e = on(), t = 1 / 0;
  function n(r) {
    if (typeof r == "string" || e(r))
      return r;
    var i = r + "";
    return i == "0" && 1 / r == -t ? "-0" : i;
  }
  return _o = n, _o;
}
var bo, Xl;
function Dr() {
  if (Xl) return bo;
  Xl = 1;
  var e = Pr(), t = $n();
  function n(r, i) {
    i = e(i, r);
    for (var o = 0, a = i.length; r != null && o < a; )
      r = r[t(i[o++])];
    return o && o == a ? r : void 0;
  }
  return bo = n, bo;
}
var wo, Zl;
function GE() {
  if (Zl) return wo;
  Zl = 1;
  var e = Dr();
  function t(n, r, i) {
    var o = n == null ? void 0 : e(n, r);
    return o === void 0 ? i : o;
  }
  return wo = t, wo;
}
var Eo, jl;
function UE() {
  if (jl) return Eo;
  jl = 1;
  function e(t, n) {
    return t != null && n in Object(t);
  }
  return Eo = e, Eo;
}
var xo, Ql;
function wg() {
  if (Ql) return xo;
  Ql = 1;
  var e = Pr(), t = Ys, n = xe, r = vh, i = gv, o = $n();
  function a(s, u, l) {
    u = e(u, s);
    for (var c = -1, d = u.length, f = !1; ++c < d; ) {
      var h = o(u[c]);
      if (!(f = s != null && l(s, h)))
        break;
      s = s[h];
    }
    return f || ++c != d ? f : (d = s == null ? 0 : s.length, !!d && i(d) && r(h, d) && (n(s) || t(s)));
  }
  return xo = a, xo;
}
var So, Jl;
function Eg() {
  if (Jl) return So;
  Jl = 1;
  var e = UE(), t = wg();
  function n(r, i) {
    return r != null && t(r, i, e);
  }
  return So = n, So;
}
var Co, ed;
function KE() {
  if (ed) return Co;
  ed = 1;
  var e = vg(), t = GE(), n = Eg(), r = xc(), i = yg(), o = _g(), a = $n(), s = 1, u = 2;
  function l(c, d) {
    return r(c) && i(d) ? o(a(c), d) : function(f) {
      var h = t(f, c);
      return h === void 0 && h === d ? n(f, c) : e(d, h, s | u);
    };
  }
  return Co = l, Co;
}
var No, td;
function xg() {
  if (td) return No;
  td = 1;
  function e(t) {
    return function(n) {
      return n?.[t];
    };
  }
  return No = e, No;
}
var Mo, nd;
function YE() {
  if (nd) return Mo;
  nd = 1;
  var e = Dr();
  function t(n) {
    return function(r) {
      return e(r, n);
    };
  }
  return Mo = t, Mo;
}
var Ao, rd;
function WE() {
  if (rd) return Ao;
  rd = 1;
  var e = xg(), t = YE(), n = xc(), r = $n();
  function i(o) {
    return n(o) ? e(r(o)) : t(o);
  }
  return Ao = i, Ao;
}
var Io, id;
function ht() {
  if (id) return Io;
  id = 1;
  var e = FE(), t = KE(), n = qn, r = xe, i = WE();
  function o(a) {
    return typeof a == "function" ? a : a == null ? n : typeof a == "object" ? r(a) ? t(a[0], a[1]) : e(a) : i(a);
  }
  return Io = o, Io;
}
var Ro, od;
function Sg() {
  if (od) return Ro;
  od = 1;
  var e = ig(), t = IE(), n = ht(), r = xe;
  function i(o, a) {
    var s = r(o) ? e : t;
    return s(o, n(a, 3));
  }
  return Ro = i, Ro;
}
var To, ad;
function XE() {
  if (ad) return To;
  ad = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function n(r, i) {
    return r != null && t.call(r, i);
  }
  return To = n, To;
}
var Lo, sd;
function Cg() {
  if (sd) return Lo;
  sd = 1;
  var e = XE(), t = wg();
  function n(r, i) {
    return r != null && t(r, i, e);
  }
  return Lo = n, Lo;
}
var ko, cd;
function ZE() {
  if (cd) return ko;
  cd = 1;
  var e = yc(), t = rn(), n = Ys, r = xe, i = nn, o = Cr, a = lh, s = Ks, u = "[object Map]", l = "[object Set]", c = Object.prototype, d = c.hasOwnProperty;
  function f(h) {
    if (h == null)
      return !0;
    if (i(h) && (r(h) || typeof h == "string" || typeof h.splice == "function" || o(h) || s(h) || n(h)))
      return !h.length;
    var g = t(h);
    if (g == u || g == l)
      return !h.size;
    if (a(h))
      return !e(h).length;
    for (var p in h)
      if (d.call(h, p))
        return !1;
    return !0;
  }
  return ko = f, ko;
}
var qo, ud;
function Ng() {
  if (ud) return qo;
  ud = 1;
  function e(t) {
    return t === void 0;
  }
  return qo = e, qo;
}
var Oo, ld;
function Mg() {
  if (ld) return Oo;
  ld = 1;
  var e = qr(), t = nn;
  function n(r, i) {
    var o = -1, a = t(r) ? Array(r.length) : [];
    return e(r, function(s, u, l) {
      a[++o] = i(s, u, l);
    }), a;
  }
  return Oo = n, Oo;
}
var Po, dd;
function Ag() {
  if (dd) return Po;
  dd = 1;
  var e = Or(), t = ht(), n = Mg(), r = xe;
  function i(o, a) {
    var s = r(o) ? e : n;
    return s(o, t(a, 3));
  }
  return Po = i, Po;
}
var Do, fd;
function jE() {
  if (fd) return Do;
  fd = 1;
  function e(t, n, r, i) {
    var o = -1, a = t == null ? 0 : t.length;
    for (i && a && (r = t[++o]); ++o < a; )
      r = n(r, t[o], o, t);
    return r;
  }
  return Do = e, Do;
}
var $o, hd;
function QE() {
  if (hd) return $o;
  hd = 1;
  function e(t, n, r, i, o) {
    return o(t, function(a, s, u) {
      r = i ? (i = !1, a) : n(r, a, s, u);
    }), r;
  }
  return $o = e, $o;
}
var Fo, pd;
function Ig() {
  if (pd) return Fo;
  pd = 1;
  var e = jE(), t = qr(), n = ht(), r = QE(), i = xe;
  function o(a, s, u) {
    var l = i(a) ? e : r, c = arguments.length < 3;
    return l(a, n(s, 4), u, c, t);
  }
  return Fo = o, Fo;
}
var Bo, gd;
function JE() {
  if (gd) return Bo;
  gd = 1;
  var e = Hs, t = xe, n = Ln, r = "[object String]";
  function i(o) {
    return typeof o == "string" || !t(o) && n(o) && e(o) == r;
  }
  return Bo = i, Bo;
}
var zo, md;
function ex() {
  if (md) return zo;
  md = 1;
  var e = xg(), t = e("length");
  return zo = t, zo;
}
var Ho, vd;
function tx() {
  if (vd) return Ho;
  vd = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", r = "\\u20d0-\\u20ff", i = t + n + r, o = "\\ufe0e\\ufe0f", a = "\\u200d", s = RegExp("[" + a + e + i + o + "]");
  function u(l) {
    return s.test(l);
  }
  return Ho = u, Ho;
}
var Vo, yd;
function nx() {
  if (yd) return Vo;
  yd = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", n = "\\ufe20-\\ufe2f", r = "\\u20d0-\\u20ff", i = t + n + r, o = "\\ufe0e\\ufe0f", a = "[" + e + "]", s = "[" + i + "]", u = "\\ud83c[\\udffb-\\udfff]", l = "(?:" + s + "|" + u + ")", c = "[^" + e + "]", d = "(?:\\ud83c[\\udde6-\\uddff]){2}", f = "[\\ud800-\\udbff][\\udc00-\\udfff]", h = "\\u200d", g = l + "?", p = "[" + o + "]?", m = "(?:" + h + "(?:" + [c, d, f].join("|") + ")" + p + g + ")*", v = p + g + m, b = "(?:" + [c + s + "?", s, d, f, a].join("|") + ")", w = RegExp(u + "(?=" + u + ")|" + b + v, "g");
  function _(C) {
    for (var E = w.lastIndex = 0; w.test(C); )
      ++E;
    return E;
  }
  return Vo = _, Vo;
}
var Go, _d;
function rx() {
  if (_d) return Go;
  _d = 1;
  var e = ex(), t = tx(), n = nx();
  function r(i) {
    return t(i) ? n(i) : e(i);
  }
  return Go = r, Go;
}
var Uo, bd;
function ix() {
  if (bd) return Uo;
  bd = 1;
  var e = yc(), t = rn(), n = nn, r = JE(), i = rx(), o = "[object Map]", a = "[object Set]";
  function s(u) {
    if (u == null)
      return 0;
    if (n(u))
      return r(u) ? i(u) : u.length;
    var l = t(u);
    return l == o || l == a ? u.size : e(u).length;
  }
  return Uo = s, Uo;
}
var Ko, wd;
function ox() {
  if (wd) return Ko;
  wd = 1;
  var e = vc(), t = mv, n = wc(), r = ht(), i = dh, o = xe, a = Cr, s = yh, u = kn, l = Ks;
  function c(d, f, h) {
    var g = o(d), p = g || a(d) || l(d);
    if (f = r(f, 4), h == null) {
      var m = d && d.constructor;
      p ? h = g ? new m() : [] : u(d) ? h = s(m) ? t(i(d)) : {} : h = {};
    }
    return (p ? e : n)(d, function(v, b, w) {
      return f(h, v, b, w);
    }), h;
  }
  return Ko = c, Ko;
}
var Yo, Ed;
function ax() {
  if (Ed) return Yo;
  Ed = 1;
  var e = Sr, t = Ys, n = xe, r = e ? e.isConcatSpreadable : void 0;
  function i(o) {
    return n(o) || t(o) || !!(r && o && o[r]);
  }
  return Yo = i, Yo;
}
var Wo, xd;
function Sc() {
  if (xd) return Wo;
  xd = 1;
  var e = bc(), t = ax();
  function n(r, i, o, a, s) {
    var u = -1, l = r.length;
    for (o || (o = t), s || (s = []); ++u < l; ) {
      var c = r[u];
      i > 0 && o(c) ? i > 1 ? n(c, i - 1, o, a, s) : e(s, c) : a || (s[s.length] = c);
    }
    return s;
  }
  return Wo = n, Wo;
}
var Xo, Sd;
function Rg() {
  if (Sd) return Xo;
  Sd = 1;
  function e(t, n, r, i) {
    for (var o = t.length, a = r + (i ? 1 : -1); i ? a-- : ++a < o; )
      if (n(t[a], a, t))
        return a;
    return -1;
  }
  return Xo = e, Xo;
}
var Zo, Cd;
function sx() {
  if (Cd) return Zo;
  Cd = 1;
  function e(t) {
    return t !== t;
  }
  return Zo = e, Zo;
}
var jo, Nd;
function cx() {
  if (Nd) return jo;
  Nd = 1;
  function e(t, n, r) {
    for (var i = r - 1, o = t.length; ++i < o; )
      if (t[i] === n)
        return i;
    return -1;
  }
  return jo = e, jo;
}
var Qo, Md;
function ux() {
  if (Md) return Qo;
  Md = 1;
  var e = Rg(), t = sx(), n = cx();
  function r(i, o, a) {
    return o === o ? n(i, o, a) : e(i, t, a);
  }
  return Qo = r, Qo;
}
var Jo, Ad;
function lx() {
  if (Ad) return Jo;
  Ad = 1;
  var e = ux();
  function t(n, r) {
    var i = n == null ? 0 : n.length;
    return !!i && e(n, r, 0) > -1;
  }
  return Jo = t, Jo;
}
var ea, Id;
function dx() {
  if (Id) return ea;
  Id = 1;
  function e(t, n, r) {
    for (var i = -1, o = t == null ? 0 : t.length; ++i < o; )
      if (r(n, t[i]))
        return !0;
    return !1;
  }
  return ea = e, ea;
}
var ta, Rd;
function fx() {
  if (Rd) return ta;
  Rd = 1;
  function e() {
  }
  return ta = e, ta;
}
var na, Td;
function hx() {
  if (Td) return na;
  Td = 1;
  var e = ug(), t = fx(), n = Ec(), r = 1 / 0, i = e && 1 / n(new e([, -0]))[1] == r ? function(o) {
    return new e(o);
  } : t;
  return na = i, na;
}
var ra, Ld;
function px() {
  if (Ld) return ra;
  Ld = 1;
  var e = pg(), t = lx(), n = dx(), r = gg(), i = hx(), o = Ec(), a = 200;
  function s(u, l, c) {
    var d = -1, f = t, h = u.length, g = !0, p = [], m = p;
    if (c)
      g = !1, f = n;
    else if (h >= a) {
      var v = l ? null : i(u);
      if (v)
        return o(v);
      g = !1, f = r, m = new e();
    } else
      m = l ? [] : p;
    e:
      for (; ++d < h; ) {
        var b = u[d], w = l ? l(b) : b;
        if (b = c || b !== 0 ? b : 0, g && w === w) {
          for (var _ = m.length; _--; )
            if (m[_] === w)
              continue e;
          l && m.push(w), p.push(b);
        } else f(m, w, c) || (m !== p && m.push(w), p.push(b));
      }
    return p;
  }
  return ra = s, ra;
}
var ia, kd;
function gx() {
  if (kd) return ia;
  kd = 1;
  var e = Sc(), t = Ws, n = px(), r = vv, i = t(function(o) {
    return n(e(o, 1, r, !0));
  });
  return ia = i, ia;
}
var oa, qd;
function mx() {
  if (qd) return oa;
  qd = 1;
  var e = Or();
  function t(n, r) {
    return e(r, function(i) {
      return n[i];
    });
  }
  return oa = t, oa;
}
var aa, Od;
function Tg() {
  if (Od) return aa;
  Od = 1;
  var e = mx(), t = Mt();
  function n(r) {
    return r == null ? [] : e(r, t(r));
  }
  return aa = n, aa;
}
var sa, Pd;
function ze() {
  if (Pd) return sa;
  Pd = 1;
  var e;
  if (typeof Xs == "function")
    try {
      e = {
        clone: ME(),
        constant: _h(),
        each: hg(),
        filter: Sg(),
        has: Cg(),
        isArray: xe,
        isEmpty: ZE(),
        isFunction: yh,
        isUndefined: Ng(),
        keys: Mt(),
        map: Ag(),
        reduce: Ig(),
        size: ix(),
        transform: ox(),
        union: gx(),
        values: Tg()
      };
    } catch {
    }
  return e || (e = window._), sa = e, sa;
}
var ca, Dd;
function Cc() {
  if (Dd) return ca;
  Dd = 1;
  var e = ze();
  ca = i;
  var t = "\0", n = "\0", r = "";
  function i(c) {
    this._isDirected = e.has(c, "directed") ? c.directed : !0, this._isMultigraph = e.has(c, "multigraph") ? c.multigraph : !1, this._isCompound = e.has(c, "compound") ? c.compound : !1, this._label = void 0, this._defaultNodeLabelFn = e.constant(void 0), this._defaultEdgeLabelFn = e.constant(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children[n] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {};
  }
  i.prototype._nodeCount = 0, i.prototype._edgeCount = 0, i.prototype.isDirected = function() {
    return this._isDirected;
  }, i.prototype.isMultigraph = function() {
    return this._isMultigraph;
  }, i.prototype.isCompound = function() {
    return this._isCompound;
  }, i.prototype.setGraph = function(c) {
    return this._label = c, this;
  }, i.prototype.graph = function() {
    return this._label;
  }, i.prototype.setDefaultNodeLabel = function(c) {
    return e.isFunction(c) || (c = e.constant(c)), this._defaultNodeLabelFn = c, this;
  }, i.prototype.nodeCount = function() {
    return this._nodeCount;
  }, i.prototype.nodes = function() {
    return e.keys(this._nodes);
  }, i.prototype.sources = function() {
    var c = this;
    return e.filter(this.nodes(), function(d) {
      return e.isEmpty(c._in[d]);
    });
  }, i.prototype.sinks = function() {
    var c = this;
    return e.filter(this.nodes(), function(d) {
      return e.isEmpty(c._out[d]);
    });
  }, i.prototype.setNodes = function(c, d) {
    var f = arguments, h = this;
    return e.each(c, function(g) {
      f.length > 1 ? h.setNode(g, d) : h.setNode(g);
    }), this;
  }, i.prototype.setNode = function(c, d) {
    return e.has(this._nodes, c) ? (arguments.length > 1 && (this._nodes[c] = d), this) : (this._nodes[c] = arguments.length > 1 ? d : this._defaultNodeLabelFn(c), this._isCompound && (this._parent[c] = n, this._children[c] = {}, this._children[n][c] = !0), this._in[c] = {}, this._preds[c] = {}, this._out[c] = {}, this._sucs[c] = {}, ++this._nodeCount, this);
  }, i.prototype.node = function(c) {
    return this._nodes[c];
  }, i.prototype.hasNode = function(c) {
    return e.has(this._nodes, c);
  }, i.prototype.removeNode = function(c) {
    var d = this;
    if (e.has(this._nodes, c)) {
      var f = function(h) {
        d.removeEdge(d._edgeObjs[h]);
      };
      delete this._nodes[c], this._isCompound && (this._removeFromParentsChildList(c), delete this._parent[c], e.each(this.children(c), function(h) {
        d.setParent(h);
      }), delete this._children[c]), e.each(e.keys(this._in[c]), f), delete this._in[c], delete this._preds[c], e.each(e.keys(this._out[c]), f), delete this._out[c], delete this._sucs[c], --this._nodeCount;
    }
    return this;
  }, i.prototype.setParent = function(c, d) {
    if (!this._isCompound)
      throw new Error("Cannot set parent in a non-compound graph");
    if (e.isUndefined(d))
      d = n;
    else {
      d += "";
      for (var f = d; !e.isUndefined(f); f = this.parent(f))
        if (f === c)
          throw new Error("Setting " + d + " as parent of " + c + " would create a cycle");
      this.setNode(d);
    }
    return this.setNode(c), this._removeFromParentsChildList(c), this._parent[c] = d, this._children[d][c] = !0, this;
  }, i.prototype._removeFromParentsChildList = function(c) {
    delete this._children[this._parent[c]][c];
  }, i.prototype.parent = function(c) {
    if (this._isCompound) {
      var d = this._parent[c];
      if (d !== n)
        return d;
    }
  }, i.prototype.children = function(c) {
    if (e.isUndefined(c) && (c = n), this._isCompound) {
      var d = this._children[c];
      if (d)
        return e.keys(d);
    } else {
      if (c === n)
        return this.nodes();
      if (this.hasNode(c))
        return [];
    }
  }, i.prototype.predecessors = function(c) {
    var d = this._preds[c];
    if (d)
      return e.keys(d);
  }, i.prototype.successors = function(c) {
    var d = this._sucs[c];
    if (d)
      return e.keys(d);
  }, i.prototype.neighbors = function(c) {
    var d = this.predecessors(c);
    if (d)
      return e.union(d, this.successors(c));
  }, i.prototype.isLeaf = function(c) {
    var d;
    return this.isDirected() ? d = this.successors(c) : d = this.neighbors(c), d.length === 0;
  }, i.prototype.filterNodes = function(c) {
    var d = new this.constructor({
      directed: this._isDirected,
      multigraph: this._isMultigraph,
      compound: this._isCompound
    });
    d.setGraph(this.graph());
    var f = this;
    e.each(this._nodes, function(p, m) {
      c(m) && d.setNode(m, p);
    }), e.each(this._edgeObjs, function(p) {
      d.hasNode(p.v) && d.hasNode(p.w) && d.setEdge(p, f.edge(p));
    });
    var h = {};
    function g(p) {
      var m = f.parent(p);
      return m === void 0 || d.hasNode(m) ? (h[p] = m, m) : m in h ? h[m] : g(m);
    }
    return this._isCompound && e.each(d.nodes(), function(p) {
      d.setParent(p, g(p));
    }), d;
  }, i.prototype.setDefaultEdgeLabel = function(c) {
    return e.isFunction(c) || (c = e.constant(c)), this._defaultEdgeLabelFn = c, this;
  }, i.prototype.edgeCount = function() {
    return this._edgeCount;
  }, i.prototype.edges = function() {
    return e.values(this._edgeObjs);
  }, i.prototype.setPath = function(c, d) {
    var f = this, h = arguments;
    return e.reduce(c, function(g, p) {
      return h.length > 1 ? f.setEdge(g, p, d) : f.setEdge(g, p), p;
    }), this;
  }, i.prototype.setEdge = function() {
    var c, d, f, h, g = !1, p = arguments[0];
    typeof p == "object" && p !== null && "v" in p ? (c = p.v, d = p.w, f = p.name, arguments.length === 2 && (h = arguments[1], g = !0)) : (c = p, d = arguments[1], f = arguments[3], arguments.length > 2 && (h = arguments[2], g = !0)), c = "" + c, d = "" + d, e.isUndefined(f) || (f = "" + f);
    var m = s(this._isDirected, c, d, f);
    if (e.has(this._edgeLabels, m))
      return g && (this._edgeLabels[m] = h), this;
    if (!e.isUndefined(f) && !this._isMultigraph)
      throw new Error("Cannot set a named edge when isMultigraph = false");
    this.setNode(c), this.setNode(d), this._edgeLabels[m] = g ? h : this._defaultEdgeLabelFn(c, d, f);
    var v = u(this._isDirected, c, d, f);
    return c = v.v, d = v.w, Object.freeze(v), this._edgeObjs[m] = v, o(this._preds[d], c), o(this._sucs[c], d), this._in[d][m] = v, this._out[c][m] = v, this._edgeCount++, this;
  }, i.prototype.edge = function(c, d, f) {
    var h = arguments.length === 1 ? l(this._isDirected, arguments[0]) : s(this._isDirected, c, d, f);
    return this._edgeLabels[h];
  }, i.prototype.hasEdge = function(c, d, f) {
    var h = arguments.length === 1 ? l(this._isDirected, arguments[0]) : s(this._isDirected, c, d, f);
    return e.has(this._edgeLabels, h);
  }, i.prototype.removeEdge = function(c, d, f) {
    var h = arguments.length === 1 ? l(this._isDirected, arguments[0]) : s(this._isDirected, c, d, f), g = this._edgeObjs[h];
    return g && (c = g.v, d = g.w, delete this._edgeLabels[h], delete this._edgeObjs[h], a(this._preds[d], c), a(this._sucs[c], d), delete this._in[d][h], delete this._out[c][h], this._edgeCount--), this;
  }, i.prototype.inEdges = function(c, d) {
    var f = this._in[c];
    if (f) {
      var h = e.values(f);
      return d ? e.filter(h, function(g) {
        return g.v === d;
      }) : h;
    }
  }, i.prototype.outEdges = function(c, d) {
    var f = this._out[c];
    if (f) {
      var h = e.values(f);
      return d ? e.filter(h, function(g) {
        return g.w === d;
      }) : h;
    }
  }, i.prototype.nodeEdges = function(c, d) {
    var f = this.inEdges(c, d);
    if (f)
      return f.concat(this.outEdges(c, d));
  };
  function o(c, d) {
    c[d] ? c[d]++ : c[d] = 1;
  }
  function a(c, d) {
    --c[d] || delete c[d];
  }
  function s(c, d, f, h) {
    var g = "" + d, p = "" + f;
    if (!c && g > p) {
      var m = g;
      g = p, p = m;
    }
    return g + r + p + r + (e.isUndefined(h) ? t : h);
  }
  function u(c, d, f, h) {
    var g = "" + d, p = "" + f;
    if (!c && g > p) {
      var m = g;
      g = p, p = m;
    }
    var v = { v: g, w: p };
    return h && (v.name = h), v;
  }
  function l(c, d) {
    return s(c, d.v, d.w, d.name);
  }
  return ca;
}
var ua, $d;
function vx() {
  return $d || ($d = 1, ua = "2.1.8"), ua;
}
var la, Fd;
function yx() {
  return Fd || (Fd = 1, la = {
    Graph: Cc(),
    version: vx()
  }), la;
}
var da, Bd;
function _x() {
  if (Bd) return da;
  Bd = 1;
  var e = ze(), t = Cc();
  da = {
    write: n,
    read: o
  };
  function n(a) {
    var s = {
      options: {
        directed: a.isDirected(),
        multigraph: a.isMultigraph(),
        compound: a.isCompound()
      },
      nodes: r(a),
      edges: i(a)
    };
    return e.isUndefined(a.graph()) || (s.value = e.clone(a.graph())), s;
  }
  function r(a) {
    return e.map(a.nodes(), function(s) {
      var u = a.node(s), l = a.parent(s), c = { v: s };
      return e.isUndefined(u) || (c.value = u), e.isUndefined(l) || (c.parent = l), c;
    });
  }
  function i(a) {
    return e.map(a.edges(), function(s) {
      var u = a.edge(s), l = { v: s.v, w: s.w };
      return e.isUndefined(s.name) || (l.name = s.name), e.isUndefined(u) || (l.value = u), l;
    });
  }
  function o(a) {
    var s = new t(a.options).setGraph(a.value);
    return e.each(a.nodes, function(u) {
      s.setNode(u.v, u.value), u.parent && s.setParent(u.v, u.parent);
    }), e.each(a.edges, function(u) {
      s.setEdge({ v: u.v, w: u.w, name: u.name }, u.value);
    }), s;
  }
  return da;
}
var fa, zd;
function bx() {
  if (zd) return fa;
  zd = 1;
  var e = ze();
  fa = t;
  function t(n) {
    var r = {}, i = [], o;
    function a(s) {
      e.has(r, s) || (r[s] = !0, o.push(s), e.each(n.successors(s), a), e.each(n.predecessors(s), a));
    }
    return e.each(n.nodes(), function(s) {
      o = [], a(s), o.length && i.push(o);
    }), i;
  }
  return fa;
}
var ha, Hd;
function Lg() {
  if (Hd) return ha;
  Hd = 1;
  var e = ze();
  ha = t;
  function t() {
    this._arr = [], this._keyIndices = {};
  }
  return t.prototype.size = function() {
    return this._arr.length;
  }, t.prototype.keys = function() {
    return this._arr.map(function(n) {
      return n.key;
    });
  }, t.prototype.has = function(n) {
    return e.has(this._keyIndices, n);
  }, t.prototype.priority = function(n) {
    var r = this._keyIndices[n];
    if (r !== void 0)
      return this._arr[r].priority;
  }, t.prototype.min = function() {
    if (this.size() === 0)
      throw new Error("Queue underflow");
    return this._arr[0].key;
  }, t.prototype.add = function(n, r) {
    var i = this._keyIndices;
    if (n = String(n), !e.has(i, n)) {
      var o = this._arr, a = o.length;
      return i[n] = a, o.push({ key: n, priority: r }), this._decrease(a), !0;
    }
    return !1;
  }, t.prototype.removeMin = function() {
    this._swap(0, this._arr.length - 1);
    var n = this._arr.pop();
    return delete this._keyIndices[n.key], this._heapify(0), n.key;
  }, t.prototype.decrease = function(n, r) {
    var i = this._keyIndices[n];
    if (r > this._arr[i].priority)
      throw new Error("New priority is greater than current priority. Key: " + n + " Old: " + this._arr[i].priority + " New: " + r);
    this._arr[i].priority = r, this._decrease(i);
  }, t.prototype._heapify = function(n) {
    var r = this._arr, i = 2 * n, o = i + 1, a = n;
    i < r.length && (a = r[i].priority < r[a].priority ? i : a, o < r.length && (a = r[o].priority < r[a].priority ? o : a), a !== n && (this._swap(n, a), this._heapify(a)));
  }, t.prototype._decrease = function(n) {
    for (var r = this._arr, i = r[n].priority, o; n !== 0 && (o = n >> 1, !(r[o].priority < i)); )
      this._swap(n, o), n = o;
  }, t.prototype._swap = function(n, r) {
    var i = this._arr, o = this._keyIndices, a = i[n], s = i[r];
    i[n] = s, i[r] = a, o[s.key] = n, o[a.key] = r;
  }, ha;
}
var pa, Vd;
function kg() {
  if (Vd) return pa;
  Vd = 1;
  var e = ze(), t = Lg();
  pa = r;
  var n = e.constant(1);
  function r(o, a, s, u) {
    return i(
      o,
      String(a),
      s || n,
      u || function(l) {
        return o.outEdges(l);
      }
    );
  }
  function i(o, a, s, u) {
    var l = {}, c = new t(), d, f, h = function(g) {
      var p = g.v !== d ? g.v : g.w, m = l[p], v = s(g), b = f.distance + v;
      if (v < 0)
        throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + g + " Weight: " + v);
      b < m.distance && (m.distance = b, m.predecessor = d, c.decrease(p, b));
    };
    for (o.nodes().forEach(function(g) {
      var p = g === a ? 0 : Number.POSITIVE_INFINITY;
      l[g] = { distance: p }, c.add(g, p);
    }); c.size() > 0 && (d = c.removeMin(), f = l[d], f.distance !== Number.POSITIVE_INFINITY); )
      u(d).forEach(h);
    return l;
  }
  return pa;
}
var ga, Gd;
function wx() {
  if (Gd) return ga;
  Gd = 1;
  var e = kg(), t = ze();
  ga = n;
  function n(r, i, o) {
    return t.transform(r.nodes(), function(a, s) {
      a[s] = e(r, s, i, o);
    }, {});
  }
  return ga;
}
var ma, Ud;
function qg() {
  if (Ud) return ma;
  Ud = 1;
  var e = ze();
  ma = t;
  function t(n) {
    var r = 0, i = [], o = {}, a = [];
    function s(u) {
      var l = o[u] = {
        onStack: !0,
        lowlink: r,
        index: r++
      };
      if (i.push(u), n.successors(u).forEach(function(f) {
        e.has(o, f) ? o[f].onStack && (l.lowlink = Math.min(l.lowlink, o[f].index)) : (s(f), l.lowlink = Math.min(l.lowlink, o[f].lowlink));
      }), l.lowlink === l.index) {
        var c = [], d;
        do
          d = i.pop(), o[d].onStack = !1, c.push(d);
        while (u !== d);
        a.push(c);
      }
    }
    return n.nodes().forEach(function(u) {
      e.has(o, u) || s(u);
    }), a;
  }
  return ma;
}
var va, Kd;
function Ex() {
  if (Kd) return va;
  Kd = 1;
  var e = ze(), t = qg();
  va = n;
  function n(r) {
    return e.filter(t(r), function(i) {
      return i.length > 1 || i.length === 1 && r.hasEdge(i[0], i[0]);
    });
  }
  return va;
}
var ya, Yd;
function xx() {
  if (Yd) return ya;
  Yd = 1;
  var e = ze();
  ya = n;
  var t = e.constant(1);
  function n(i, o, a) {
    return r(
      i,
      o || t,
      a || function(s) {
        return i.outEdges(s);
      }
    );
  }
  function r(i, o, a) {
    var s = {}, u = i.nodes();
    return u.forEach(function(l) {
      s[l] = {}, s[l][l] = { distance: 0 }, u.forEach(function(c) {
        l !== c && (s[l][c] = { distance: Number.POSITIVE_INFINITY });
      }), a(l).forEach(function(c) {
        var d = c.v === l ? c.w : c.v, f = o(c);
        s[l][d] = { distance: f, predecessor: l };
      });
    }), u.forEach(function(l) {
      var c = s[l];
      u.forEach(function(d) {
        var f = s[d];
        u.forEach(function(h) {
          var g = f[l], p = c[h], m = f[h], v = g.distance + p.distance;
          v < m.distance && (m.distance = v, m.predecessor = p.predecessor);
        });
      });
    }), s;
  }
  return ya;
}
var _a, Wd;
function Og() {
  if (Wd) return _a;
  Wd = 1;
  var e = ze();
  _a = t, t.CycleException = n;
  function t(r) {
    var i = {}, o = {}, a = [];
    function s(u) {
      if (e.has(o, u))
        throw new n();
      e.has(i, u) || (o[u] = !0, i[u] = !0, e.each(r.predecessors(u), s), delete o[u], a.push(u));
    }
    if (e.each(r.sinks(), s), e.size(i) !== r.nodeCount())
      throw new n();
    return a;
  }
  function n() {
  }
  return n.prototype = new Error(), _a;
}
var ba, Xd;
function Sx() {
  if (Xd) return ba;
  Xd = 1;
  var e = Og();
  ba = t;
  function t(n) {
    try {
      e(n);
    } catch (r) {
      if (r instanceof e.CycleException)
        return !1;
      throw r;
    }
    return !0;
  }
  return ba;
}
var wa, Zd;
function Pg() {
  if (Zd) return wa;
  Zd = 1;
  var e = ze();
  wa = t;
  function t(r, i, o) {
    e.isArray(i) || (i = [i]);
    var a = (r.isDirected() ? r.successors : r.neighbors).bind(r), s = [], u = {};
    return e.each(i, function(l) {
      if (!r.hasNode(l))
        throw new Error("Graph does not have node: " + l);
      n(r, l, o === "post", u, a, s);
    }), s;
  }
  function n(r, i, o, a, s, u) {
    e.has(a, i) || (a[i] = !0, o || u.push(i), e.each(s(i), function(l) {
      n(r, l, o, a, s, u);
    }), o && u.push(i));
  }
  return wa;
}
var Ea, jd;
function Cx() {
  if (jd) return Ea;
  jd = 1;
  var e = Pg();
  Ea = t;
  function t(n, r) {
    return e(n, r, "post");
  }
  return Ea;
}
var xa, Qd;
function Nx() {
  if (Qd) return xa;
  Qd = 1;
  var e = Pg();
  xa = t;
  function t(n, r) {
    return e(n, r, "pre");
  }
  return xa;
}
var Sa, Jd;
function Mx() {
  if (Jd) return Sa;
  Jd = 1;
  var e = ze(), t = Cc(), n = Lg();
  Sa = r;
  function r(i, o) {
    var a = new t(), s = {}, u = new n(), l;
    function c(f) {
      var h = f.v === l ? f.w : f.v, g = u.priority(h);
      if (g !== void 0) {
        var p = o(f);
        p < g && (s[h] = l, u.decrease(h, p));
      }
    }
    if (i.nodeCount() === 0)
      return a;
    e.each(i.nodes(), function(f) {
      u.add(f, Number.POSITIVE_INFINITY), a.setNode(f);
    }), u.decrease(i.nodes()[0], 0);
    for (var d = !1; u.size() > 0; ) {
      if (l = u.removeMin(), e.has(s, l))
        a.setEdge(l, s[l]);
      else {
        if (d)
          throw new Error("Input graph is not connected: " + i);
        d = !0;
      }
      i.nodeEdges(l).forEach(c);
    }
    return a;
  }
  return Sa;
}
var Ca, ef;
function Ax() {
  return ef || (ef = 1, Ca = {
    components: bx(),
    dijkstra: kg(),
    dijkstraAll: wx(),
    findCycles: Ex(),
    floydWarshall: xx(),
    isAcyclic: Sx(),
    postorder: Cx(),
    preorder: Nx(),
    prim: Mx(),
    tarjan: qg(),
    topsort: Og()
  }), Ca;
}
var Na, tf;
function Ix() {
  if (tf) return Na;
  tf = 1;
  var e = yx();
  return Na = {
    Graph: e.Graph,
    json: _x(),
    alg: Ax(),
    version: e.version
  }, Na;
}
var pr;
if (typeof Xs == "function")
  try {
    pr = Ix();
  } catch {
  }
pr || (pr = window.graphlib);
var Xe = pr, Ma, nf;
function Rx() {
  if (nf) return Ma;
  nf = 1;
  var e = lg(), t = 1, n = 4;
  function r(i) {
    return e(i, t | n);
  }
  return Ma = r, Ma;
}
var Aa, rf;
function Tx() {
  if (rf) return Aa;
  rf = 1;
  var e = Ws, t = mh, n = Zs, r = Rn, i = Object.prototype, o = i.hasOwnProperty, a = e(function(s, u) {
    s = Object(s);
    var l = -1, c = u.length, d = c > 2 ? u[2] : void 0;
    for (d && n(u[0], u[1], d) && (c = 1); ++l < c; )
      for (var f = u[l], h = r(f), g = -1, p = h.length; ++g < p; ) {
        var m = h[g], v = s[m];
        (v === void 0 || t(v, i[m]) && !o.call(s, m)) && (s[m] = f[m]);
      }
    return s;
  });
  return Aa = a, Aa;
}
var Ia, of;
function Lx() {
  if (of) return Ia;
  of = 1;
  var e = ht(), t = nn, n = Mt();
  function r(i) {
    return function(o, a, s) {
      var u = Object(o);
      if (!t(o)) {
        var l = e(a, 3);
        o = n(o), a = function(d) {
          return l(u[d], d, u);
        };
      }
      var c = i(o, a, s);
      return c > -1 ? u[l ? o[c] : c] : void 0;
    };
  }
  return Ia = r, Ia;
}
var Ra, af;
function kx() {
  if (af) return Ra;
  af = 1;
  var e = /\s/;
  function t(n) {
    for (var r = n.length; r-- && e.test(n.charAt(r)); )
      ;
    return r;
  }
  return Ra = t, Ra;
}
var Ta, sf;
function qx() {
  if (sf) return Ta;
  sf = 1;
  var e = kx(), t = /^\s+/;
  function n(r) {
    return r && r.slice(0, e(r) + 1).replace(t, "");
  }
  return Ta = n, Ta;
}
var La, cf;
function Ox() {
  if (cf) return La;
  cf = 1;
  var e = qx(), t = kn, n = on(), r = NaN, i = /^[-+]0x[0-9a-f]+$/i, o = /^0b[01]+$/i, a = /^0o[0-7]+$/i, s = parseInt;
  function u(l) {
    if (typeof l == "number")
      return l;
    if (n(l))
      return r;
    if (t(l)) {
      var c = typeof l.valueOf == "function" ? l.valueOf() : l;
      l = t(c) ? c + "" : c;
    }
    if (typeof l != "string")
      return l === 0 ? l : +l;
    l = e(l);
    var d = o.test(l);
    return d || a.test(l) ? s(l.slice(2), d ? 2 : 8) : i.test(l) ? r : +l;
  }
  return La = u, La;
}
var ka, uf;
function Dg() {
  if (uf) return ka;
  uf = 1;
  var e = Ox(), t = 1 / 0, n = 17976931348623157e292;
  function r(i) {
    if (!i)
      return i === 0 ? i : 0;
    if (i = e(i), i === t || i === -t) {
      var o = i < 0 ? -1 : 1;
      return o * n;
    }
    return i === i ? i : 0;
  }
  return ka = r, ka;
}
var qa, lf;
function Px() {
  if (lf) return qa;
  lf = 1;
  var e = Dg();
  function t(n) {
    var r = e(n), i = r % 1;
    return r === r ? i ? r - i : r : 0;
  }
  return qa = t, qa;
}
var Oa, df;
function Dx() {
  if (df) return Oa;
  df = 1;
  var e = Rg(), t = ht(), n = Px(), r = Math.max;
  function i(o, a, s) {
    var u = o == null ? 0 : o.length;
    if (!u)
      return -1;
    var l = s == null ? 0 : n(s);
    return l < 0 && (l = r(u + l, 0)), e(o, t(a, 3), l);
  }
  return Oa = i, Oa;
}
var Pa, ff;
function $x() {
  if (ff) return Pa;
  ff = 1;
  var e = Lx(), t = Dx(), n = e(t);
  return Pa = n, Pa;
}
var Da, hf;
function $g() {
  if (hf) return Da;
  hf = 1;
  var e = Sc();
  function t(n) {
    var r = n == null ? 0 : n.length;
    return r ? e(n, 1) : [];
  }
  return Da = t, Da;
}
var $a, pf;
function Fx() {
  if (pf) return $a;
  pf = 1;
  var e = ph, t = dg(), n = Rn;
  function r(i, o) {
    return i == null ? i : e(i, t(o), n);
  }
  return $a = r, $a;
}
var Fa, gf;
function Bx() {
  if (gf) return Fa;
  gf = 1;
  function e(t) {
    var n = t == null ? 0 : t.length;
    return n ? t[n - 1] : void 0;
  }
  return Fa = e, Fa;
}
var Ba, mf;
function zx() {
  if (mf) return Ba;
  mf = 1;
  var e = yv, t = wc(), n = ht();
  function r(i, o) {
    var a = {};
    return o = n(o, 3), t(i, function(s, u, l) {
      e(a, u, o(s, u, l));
    }), a;
  }
  return Ba = r, Ba;
}
var za, vf;
function Nc() {
  if (vf) return za;
  vf = 1;
  var e = on();
  function t(n, r, i) {
    for (var o = -1, a = n.length; ++o < a; ) {
      var s = n[o], u = r(s);
      if (u != null && (l === void 0 ? u === u && !e(u) : i(u, l)))
        var l = u, c = s;
    }
    return c;
  }
  return za = t, za;
}
var Ha, yf;
function Hx() {
  if (yf) return Ha;
  yf = 1;
  function e(t, n) {
    return t > n;
  }
  return Ha = e, Ha;
}
var Va, _f;
function Vx() {
  if (_f) return Va;
  _f = 1;
  var e = Nc(), t = Hx(), n = qn;
  function r(i) {
    return i && i.length ? e(i, n, t) : void 0;
  }
  return Va = r, Va;
}
var Ga, bf;
function Gx() {
  if (bf) return Ga;
  bf = 1;
  var e = bv, t = _v, n = t(function(r, i, o) {
    e(r, i, o);
  });
  return Ga = n, Ga;
}
var Ua, wf;
function Fg() {
  if (wf) return Ua;
  wf = 1;
  function e(t, n) {
    return t < n;
  }
  return Ua = e, Ua;
}
var Ka, Ef;
function Ux() {
  if (Ef) return Ka;
  Ef = 1;
  var e = Nc(), t = Fg(), n = qn;
  function r(i) {
    return i && i.length ? e(i, n, t) : void 0;
  }
  return Ka = r, Ka;
}
var Ya, xf;
function Kx() {
  if (xf) return Ya;
  xf = 1;
  var e = Nc(), t = ht(), n = Fg();
  function r(i, o) {
    return i && i.length ? e(i, t(o, 2), n) : void 0;
  }
  return Ya = r, Ya;
}
var Wa, Sf;
function Yx() {
  if (Sf) return Wa;
  Sf = 1;
  var e = Tn, t = function() {
    return e.Date.now();
  };
  return Wa = t, Wa;
}
var Xa, Cf;
function Wx() {
  if (Cf) return Xa;
  Cf = 1;
  var e = Us(), t = Pr(), n = vh, r = kn, i = $n();
  function o(a, s, u, l) {
    if (!r(a))
      return a;
    s = t(s, a);
    for (var c = -1, d = s.length, f = d - 1, h = a; h != null && ++c < d; ) {
      var g = i(s[c]), p = u;
      if (g === "__proto__" || g === "constructor" || g === "prototype")
        return a;
      if (c != f) {
        var m = h[g];
        p = l ? l(m, g, h) : void 0, p === void 0 && (p = r(m) ? m : n(s[c + 1]) ? [] : {});
      }
      e(h, g, p), h = h[g];
    }
    return a;
  }
  return Xa = o, Xa;
}
var Za, Nf;
function Xx() {
  if (Nf) return Za;
  Nf = 1;
  var e = Dr(), t = Wx(), n = Pr();
  function r(i, o, a) {
    for (var s = -1, u = o.length, l = {}; ++s < u; ) {
      var c = o[s], d = e(i, c);
      a(d, c) && t(l, n(c, i), d);
    }
    return l;
  }
  return Za = r, Za;
}
var ja, Mf;
function Zx() {
  if (Mf) return ja;
  Mf = 1;
  var e = Xx(), t = Eg();
  function n(r, i) {
    return e(r, i, function(o, a) {
      return t(r, a);
    });
  }
  return ja = n, ja;
}
var Qa, Af;
function jx() {
  if (Af) return Qa;
  Af = 1;
  var e = $g(), t = wv, n = Ev;
  function r(i) {
    return n(t(i, void 0, e), i + "");
  }
  return Qa = r, Qa;
}
var Ja, If;
function Qx() {
  if (If) return Ja;
  If = 1;
  var e = Zx(), t = jx(), n = t(function(r, i) {
    return r == null ? {} : e(r, i);
  });
  return Ja = n, Ja;
}
var es, Rf;
function Jx() {
  if (Rf) return es;
  Rf = 1;
  var e = Math.ceil, t = Math.max;
  function n(r, i, o, a) {
    for (var s = -1, u = t(e((i - r) / (o || 1)), 0), l = Array(u); u--; )
      l[a ? u : ++s] = r, r += o;
    return l;
  }
  return es = n, es;
}
var ts, Tf;
function eS() {
  if (Tf) return ts;
  Tf = 1;
  var e = Jx(), t = Zs, n = Dg();
  function r(i) {
    return function(o, a, s) {
      return s && typeof s != "number" && t(o, a, s) && (a = s = void 0), o = n(o), a === void 0 ? (a = o, o = 0) : a = n(a), s = s === void 0 ? o < a ? 1 : -1 : n(s), e(o, a, s, i);
    };
  }
  return ts = r, ts;
}
var ns, Lf;
function tS() {
  if (Lf) return ns;
  Lf = 1;
  var e = eS(), t = e();
  return ns = t, ns;
}
var rs, kf;
function nS() {
  if (kf) return rs;
  kf = 1;
  function e(t, n) {
    var r = t.length;
    for (t.sort(n); r--; )
      t[r] = t[r].value;
    return t;
  }
  return rs = e, rs;
}
var is, qf;
function rS() {
  if (qf) return is;
  qf = 1;
  var e = on();
  function t(n, r) {
    if (n !== r) {
      var i = n !== void 0, o = n === null, a = n === n, s = e(n), u = r !== void 0, l = r === null, c = r === r, d = e(r);
      if (!l && !d && !s && n > r || s && u && c && !l && !d || o && u && c || !i && c || !a)
        return 1;
      if (!o && !s && !d && n < r || d && i && a && !o && !s || l && i && a || !u && a || !c)
        return -1;
    }
    return 0;
  }
  return is = t, is;
}
var os, Of;
function iS() {
  if (Of) return os;
  Of = 1;
  var e = rS();
  function t(n, r, i) {
    for (var o = -1, a = n.criteria, s = r.criteria, u = a.length, l = i.length; ++o < u; ) {
      var c = e(a[o], s[o]);
      if (c) {
        if (o >= l)
          return c;
        var d = i[o];
        return c * (d == "desc" ? -1 : 1);
      }
    }
    return n.index - r.index;
  }
  return os = t, os;
}
var as, Pf;
function oS() {
  if (Pf) return as;
  Pf = 1;
  var e = Or(), t = Dr(), n = ht(), r = Mg(), i = nS(), o = Vs, a = iS(), s = qn, u = xe;
  function l(c, d, f) {
    d.length ? d = e(d, function(p) {
      return u(p) ? function(m) {
        return t(m, p.length === 1 ? p[0] : p);
      } : p;
    }) : d = [s];
    var h = -1;
    d = e(d, o(n));
    var g = r(c, function(p, m, v) {
      var b = e(d, function(w) {
        return w(p);
      });
      return { criteria: b, index: ++h, value: p };
    });
    return i(g, function(p, m) {
      return a(p, m, f);
    });
  }
  return as = l, as;
}
var ss, Df;
function aS() {
  if (Df) return ss;
  Df = 1;
  var e = Sc(), t = oS(), n = Ws, r = Zs, i = n(function(o, a) {
    if (o == null)
      return [];
    var s = a.length;
    return s > 1 && r(o, a[0], a[1]) ? a = [] : s > 2 && r(a[0], a[1], a[2]) && (a = [a[0]]), t(o, e(a, 1), []);
  });
  return ss = i, ss;
}
var cs, $f;
function sS() {
  if ($f) return cs;
  $f = 1;
  var e = bg(), t = 0;
  function n(r) {
    var i = ++t;
    return e(r) + i;
  }
  return cs = n, cs;
}
var us, Ff;
function cS() {
  if (Ff) return us;
  Ff = 1;
  function e(t, n, r) {
    for (var i = -1, o = t.length, a = n.length, s = {}; ++i < o; ) {
      var u = i < a ? n[i] : void 0;
      r(s, t[i], u);
    }
    return s;
  }
  return us = e, us;
}
var ls, Bf;
function uS() {
  if (Bf) return ls;
  Bf = 1;
  var e = Us(), t = cS();
  function n(r, i) {
    return t(r || [], i || [], e);
  }
  return ls = n, ls;
}
var gr;
if (typeof Xs == "function")
  try {
    gr = {
      cloneDeep: Rx(),
      constant: _h(),
      defaults: Tx(),
      each: hg(),
      filter: Sg(),
      find: $x(),
      flatten: $g(),
      forEach: fg(),
      forIn: Fx(),
      has: Cg(),
      isUndefined: Ng(),
      last: Bx(),
      map: Ag(),
      mapValues: zx(),
      max: Vx(),
      merge: Gx(),
      min: Ux(),
      minBy: Kx(),
      now: Yx(),
      pick: Qx(),
      range: tS(),
      reduce: Ig(),
      sortBy: aS(),
      uniqueId: sS(),
      values: Tg(),
      zipObject: uS()
    };
  } catch {
  }
gr || (gr = window._);
var fe = gr, lS = $r;
function $r() {
  var e = {};
  e._next = e._prev = e, this._sentinel = e;
}
$r.prototype.dequeue = function() {
  var e = this._sentinel, t = e._prev;
  if (t !== e)
    return Bg(t), t;
};
$r.prototype.enqueue = function(e) {
  var t = this._sentinel;
  e._prev && e._next && Bg(e), e._next = t._next, t._next._prev = e, t._next = e, e._prev = t;
};
$r.prototype.toString = function() {
  for (var e = [], t = this._sentinel, n = t._prev; n !== t; )
    e.push(JSON.stringify(n, dS)), n = n._prev;
  return "[" + e.join(", ") + "]";
};
function Bg(e) {
  e._prev._next = e._next, e._next._prev = e._prev, delete e._next, delete e._prev;
}
function dS(e, t) {
  if (e !== "_next" && e !== "_prev")
    return t;
}
var st = fe, fS = Xe.Graph, hS = lS, pS = mS, gS = st.constant(1);
function mS(e, t) {
  if (e.nodeCount() <= 1)
    return [];
  var n = yS(e, t || gS), r = vS(n.graph, n.buckets, n.zeroIdx);
  return st.flatten(st.map(r, function(i) {
    return e.outEdges(i.v, i.w);
  }), !0);
}
function vS(e, t, n) {
  for (var r = [], i = t[t.length - 1], o = t[0], a; e.nodeCount(); ) {
    for (; a = o.dequeue(); )
      ds(e, t, n, a);
    for (; a = i.dequeue(); )
      ds(e, t, n, a);
    if (e.nodeCount()) {
      for (var s = t.length - 2; s > 0; --s)
        if (a = t[s].dequeue(), a) {
          r = r.concat(ds(e, t, n, a, !0));
          break;
        }
    }
  }
  return r;
}
function ds(e, t, n, r, i) {
  var o = i ? [] : void 0;
  return st.forEach(e.inEdges(r.v), function(a) {
    var s = e.edge(a), u = e.node(a.v);
    i && o.push({ v: a.v, w: a.w }), u.out -= s, Ps(t, n, u);
  }), st.forEach(e.outEdges(r.v), function(a) {
    var s = e.edge(a), u = a.w, l = e.node(u);
    l.in -= s, Ps(t, n, l);
  }), e.removeNode(r.v), o;
}
function yS(e, t) {
  var n = new fS(), r = 0, i = 0;
  st.forEach(e.nodes(), function(s) {
    n.setNode(s, { v: s, in: 0, out: 0 });
  }), st.forEach(e.edges(), function(s) {
    var u = n.edge(s.v, s.w) || 0, l = t(s), c = u + l;
    n.setEdge(s.v, s.w, c), i = Math.max(i, n.node(s.v).out += l), r = Math.max(r, n.node(s.w).in += l);
  });
  var o = st.range(i + r + 3).map(function() {
    return new hS();
  }), a = r + 1;
  return st.forEach(n.nodes(), function(s) {
    Ps(o, a, n.node(s));
  }), { graph: n, buckets: o, zeroIdx: a };
}
function Ps(e, t, n) {
  n.out ? n.in ? e[n.out - n.in + t].enqueue(n) : e[e.length - 1].enqueue(n) : e[0].enqueue(n);
}
var qt = fe, _S = pS, bS = {
  run: wS,
  undo: xS
};
function wS(e) {
  var t = e.graph().acyclicer === "greedy" ? _S(e, n(e)) : ES(e);
  qt.forEach(t, function(r) {
    var i = e.edge(r);
    e.removeEdge(r), i.forwardName = r.name, i.reversed = !0, e.setEdge(r.w, r.v, i, qt.uniqueId("rev"));
  });
  function n(r) {
    return function(i) {
      return r.edge(i).weight;
    };
  }
}
function ES(e) {
  var t = [], n = {}, r = {};
  function i(o) {
    qt.has(r, o) || (r[o] = !0, n[o] = !0, qt.forEach(e.outEdges(o), function(a) {
      qt.has(n, a.w) ? t.push(a) : i(a.w);
    }), delete n[o]);
  }
  return qt.forEach(e.nodes(), i), t;
}
function xS(e) {
  qt.forEach(e.edges(), function(t) {
    var n = e.edge(t);
    if (n.reversed) {
      e.removeEdge(t);
      var r = n.forwardName;
      delete n.reversed, delete n.forwardName, e.setEdge(t.w, t.v, n, r);
    }
  });
}
var se = fe, zg = Xe.Graph, Le = {
  addDummyNode: Hg,
  simplify: SS,
  asNonCompoundGraph: CS,
  successorWeights: NS,
  predecessorWeights: MS,
  intersectRect: AS,
  buildLayerMatrix: IS,
  normalizeRanks: RS,
  removeEmptyRanks: TS,
  addBorderNode: LS,
  maxRank: Vg,
  partition: kS,
  time: qS,
  notime: OS
};
function Hg(e, t, n, r) {
  var i;
  do
    i = se.uniqueId(r);
  while (e.hasNode(i));
  return n.dummy = t, e.setNode(i, n), i;
}
function SS(e) {
  var t = new zg().setGraph(e.graph());
  return se.forEach(e.nodes(), function(n) {
    t.setNode(n, e.node(n));
  }), se.forEach(e.edges(), function(n) {
    var r = t.edge(n.v, n.w) || { weight: 0, minlen: 1 }, i = e.edge(n);
    t.setEdge(n.v, n.w, {
      weight: r.weight + i.weight,
      minlen: Math.max(r.minlen, i.minlen)
    });
  }), t;
}
function CS(e) {
  var t = new zg({ multigraph: e.isMultigraph() }).setGraph(e.graph());
  return se.forEach(e.nodes(), function(n) {
    e.children(n).length || t.setNode(n, e.node(n));
  }), se.forEach(e.edges(), function(n) {
    t.setEdge(n, e.edge(n));
  }), t;
}
function NS(e) {
  var t = se.map(e.nodes(), function(n) {
    var r = {};
    return se.forEach(e.outEdges(n), function(i) {
      r[i.w] = (r[i.w] || 0) + e.edge(i).weight;
    }), r;
  });
  return se.zipObject(e.nodes(), t);
}
function MS(e) {
  var t = se.map(e.nodes(), function(n) {
    var r = {};
    return se.forEach(e.inEdges(n), function(i) {
      r[i.v] = (r[i.v] || 0) + e.edge(i).weight;
    }), r;
  });
  return se.zipObject(e.nodes(), t);
}
function AS(e, t) {
  var n = e.x, r = e.y, i = t.x - n, o = t.y - r, a = e.width / 2, s = e.height / 2;
  if (!i && !o)
    throw new Error("Not possible to find intersection inside of the rectangle");
  var u, l;
  return Math.abs(o) * a > Math.abs(i) * s ? (o < 0 && (s = -s), u = s * i / o, l = s) : (i < 0 && (a = -a), u = a, l = a * o / i), { x: n + u, y: r + l };
}
function IS(e) {
  var t = se.map(se.range(Vg(e) + 1), function() {
    return [];
  });
  return se.forEach(e.nodes(), function(n) {
    var r = e.node(n), i = r.rank;
    se.isUndefined(i) || (t[i][r.order] = n);
  }), t;
}
function RS(e) {
  var t = se.min(se.map(e.nodes(), function(n) {
    return e.node(n).rank;
  }));
  se.forEach(e.nodes(), function(n) {
    var r = e.node(n);
    se.has(r, "rank") && (r.rank -= t);
  });
}
function TS(e) {
  var t = se.min(se.map(e.nodes(), function(o) {
    return e.node(o).rank;
  })), n = [];
  se.forEach(e.nodes(), function(o) {
    var a = e.node(o).rank - t;
    n[a] || (n[a] = []), n[a].push(o);
  });
  var r = 0, i = e.graph().nodeRankFactor;
  se.forEach(n, function(o, a) {
    se.isUndefined(o) && a % i !== 0 ? --r : r && se.forEach(o, function(s) {
      e.node(s).rank += r;
    });
  });
}
function LS(e, t, n, r) {
  var i = {
    width: 0,
    height: 0
  };
  return arguments.length >= 4 && (i.rank = n, i.order = r), Hg(e, "border", i, t);
}
function Vg(e) {
  return se.max(se.map(e.nodes(), function(t) {
    var n = e.node(t).rank;
    if (!se.isUndefined(n))
      return n;
  }));
}
function kS(e, t) {
  var n = { lhs: [], rhs: [] };
  return se.forEach(e, function(r) {
    t(r) ? n.lhs.push(r) : n.rhs.push(r);
  }), n;
}
function qS(e, t) {
  var n = se.now();
  try {
    return t();
  } finally {
    console.log(e + " time: " + (se.now() - n) + "ms");
  }
}
function OS(e, t) {
  return t();
}
var Gg = fe, PS = Le, DS = {
  run: $S,
  undo: BS
};
function $S(e) {
  e.graph().dummyChains = [], Gg.forEach(e.edges(), function(t) {
    FS(e, t);
  });
}
function FS(e, t) {
  var n = t.v, r = e.node(n).rank, i = t.w, o = e.node(i).rank, a = t.name, s = e.edge(t), u = s.labelRank;
  if (o !== r + 1) {
    e.removeEdge(t);
    var l, c, d;
    for (d = 0, ++r; r < o; ++d, ++r)
      s.points = [], c = {
        width: 0,
        height: 0,
        edgeLabel: s,
        edgeObj: t,
        rank: r
      }, l = PS.addDummyNode(e, "edge", c, "_d"), r === u && (c.width = s.width, c.height = s.height, c.dummy = "edge-label", c.labelpos = s.labelpos), e.setEdge(n, l, { weight: s.weight }, a), d === 0 && e.graph().dummyChains.push(l), n = l;
    e.setEdge(n, i, { weight: s.weight }, a);
  }
}
function BS(e) {
  Gg.forEach(e.graph().dummyChains, function(t) {
    var n = e.node(t), r = n.edgeLabel, i;
    for (e.setEdge(n.edgeObj, r); n.dummy; )
      i = e.successors(t)[0], e.removeNode(t), r.points.push({ x: n.x, y: n.y }), n.dummy === "edge-label" && (r.x = n.x, r.y = n.y, r.width = n.width, r.height = n.height), t = i, n = e.node(t);
  });
}
var Xn = fe, Fr = {
  longestPath: zS,
  slack: HS
};
function zS(e) {
  var t = {};
  function n(r) {
    var i = e.node(r);
    if (Xn.has(t, r))
      return i.rank;
    t[r] = !0;
    var o = Xn.min(Xn.map(e.outEdges(r), function(a) {
      return n(a.w) - e.edge(a).minlen;
    }));
    return (o === Number.POSITIVE_INFINITY || // return value of _.map([]) for Lodash 3
    o === void 0 || // return value of _.map([]) for Lodash 4
    o === null) && (o = 0), i.rank = o;
  }
  Xn.forEach(e.sources(), n);
}
function HS(e, t) {
  return e.node(t.w).rank - e.node(t.v).rank - e.edge(t).minlen;
}
var mr = fe, VS = Xe.Graph, vr = Fr.slack, Ug = GS;
function GS(e) {
  var t = new VS({ directed: !1 }), n = e.nodes()[0], r = e.nodeCount();
  t.setNode(n, {});
  for (var i, o; US(t, e) < r; )
    i = KS(t, e), o = t.hasNode(i.v) ? vr(e, i) : -vr(e, i), YS(t, e, o);
  return t;
}
function US(e, t) {
  function n(r) {
    mr.forEach(t.nodeEdges(r), function(i) {
      var o = i.v, a = r === o ? i.w : o;
      !e.hasNode(a) && !vr(t, i) && (e.setNode(a, {}), e.setEdge(r, a, {}), n(a));
    });
  }
  return mr.forEach(e.nodes(), n), e.nodeCount();
}
function KS(e, t) {
  return mr.minBy(t.edges(), function(n) {
    if (e.hasNode(n.v) !== e.hasNode(n.w))
      return vr(t, n);
  });
}
function YS(e, t, n) {
  mr.forEach(e.nodes(), function(r) {
    t.node(r).rank += n;
  });
}
var ft = fe, WS = Ug, XS = Fr.slack, ZS = Fr.longestPath, jS = Xe.alg.preorder, QS = Xe.alg.postorder, JS = Le.simplify, eC = zt;
zt.initLowLimValues = Ac;
zt.initCutValues = Mc;
zt.calcCutValue = Kg;
zt.leaveEdge = Wg;
zt.enterEdge = Xg;
zt.exchangeEdges = Zg;
function zt(e) {
  e = JS(e), ZS(e);
  var t = WS(e);
  Ac(t), Mc(t, e);
  for (var n, r; n = Wg(t); )
    r = Xg(t, e, n), Zg(t, e, n, r);
}
function Mc(e, t) {
  var n = QS(e, e.nodes());
  n = n.slice(0, n.length - 1), ft.forEach(n, function(r) {
    tC(e, t, r);
  });
}
function tC(e, t, n) {
  var r = e.node(n), i = r.parent;
  e.edge(n, i).cutvalue = Kg(e, t, n);
}
function Kg(e, t, n) {
  var r = e.node(n), i = r.parent, o = !0, a = t.edge(n, i), s = 0;
  return a || (o = !1, a = t.edge(i, n)), s = a.weight, ft.forEach(t.nodeEdges(n), function(u) {
    var l = u.v === n, c = l ? u.w : u.v;
    if (c !== i) {
      var d = l === o, f = t.edge(u).weight;
      if (s += d ? f : -f, rC(e, n, c)) {
        var h = e.edge(n, c).cutvalue;
        s += d ? -h : h;
      }
    }
  }), s;
}
function Ac(e, t) {
  arguments.length < 2 && (t = e.nodes()[0]), Yg(e, {}, 1, t);
}
function Yg(e, t, n, r, i) {
  var o = n, a = e.node(r);
  return t[r] = !0, ft.forEach(e.neighbors(r), function(s) {
    ft.has(t, s) || (n = Yg(e, t, n, s, r));
  }), a.low = o, a.lim = n++, i ? a.parent = i : delete a.parent, n;
}
function Wg(e) {
  return ft.find(e.edges(), function(t) {
    return e.edge(t).cutvalue < 0;
  });
}
function Xg(e, t, n) {
  var r = n.v, i = n.w;
  t.hasEdge(r, i) || (r = n.w, i = n.v);
  var o = e.node(r), a = e.node(i), s = o, u = !1;
  o.lim > a.lim && (s = a, u = !0);
  var l = ft.filter(t.edges(), function(c) {
    return u === zf(e, e.node(c.v), s) && u !== zf(e, e.node(c.w), s);
  });
  return ft.minBy(l, function(c) {
    return XS(t, c);
  });
}
function Zg(e, t, n, r) {
  var i = n.v, o = n.w;
  e.removeEdge(i, o), e.setEdge(r.v, r.w, {}), Ac(e), Mc(e, t), nC(e, t);
}
function nC(e, t) {
  var n = ft.find(e.nodes(), function(i) {
    return !t.node(i).parent;
  }), r = jS(e, n);
  r = r.slice(1), ft.forEach(r, function(i) {
    var o = e.node(i).parent, a = t.edge(i, o), s = !1;
    a || (a = t.edge(o, i), s = !0), t.node(i).rank = t.node(o).rank + (s ? a.minlen : -a.minlen);
  });
}
function rC(e, t, n) {
  return e.hasEdge(t, n);
}
function zf(e, t, n) {
  return n.low <= t.lim && t.lim <= n.lim;
}
var iC = Fr, jg = iC.longestPath, oC = Ug, aC = eC, sC = cC;
function cC(e) {
  switch (e.graph().ranker) {
    case "network-simplex":
      Hf(e);
      break;
    case "tight-tree":
      lC(e);
      break;
    case "longest-path":
      uC(e);
      break;
    default:
      Hf(e);
  }
}
var uC = jg;
function lC(e) {
  jg(e), oC(e);
}
function Hf(e) {
  aC(e);
}
var Ds = fe, dC = fC;
function fC(e) {
  var t = pC(e);
  Ds.forEach(e.graph().dummyChains, function(n) {
    for (var r = e.node(n), i = r.edgeObj, o = hC(e, t, i.v, i.w), a = o.path, s = o.lca, u = 0, l = a[u], c = !0; n !== i.w; ) {
      if (r = e.node(n), c) {
        for (; (l = a[u]) !== s && e.node(l).maxRank < r.rank; )
          u++;
        l === s && (c = !1);
      }
      if (!c) {
        for (; u < a.length - 1 && e.node(l = a[u + 1]).minRank <= r.rank; )
          u++;
        l = a[u];
      }
      e.setParent(n, l), n = e.successors(n)[0];
    }
  });
}
function hC(e, t, n, r) {
  var i = [], o = [], a = Math.min(t[n].low, t[r].low), s = Math.max(t[n].lim, t[r].lim), u, l;
  u = n;
  do
    u = e.parent(u), i.push(u);
  while (u && (t[u].low > a || s > t[u].lim));
  for (l = u, u = r; (u = e.parent(u)) !== l; )
    o.push(u);
  return { path: i.concat(o.reverse()), lca: l };
}
function pC(e) {
  var t = {}, n = 0;
  function r(i) {
    var o = n;
    Ds.forEach(e.children(i), r), t[i] = { low: o, lim: n++ };
  }
  return Ds.forEach(e.children(), r), t;
}
var ct = fe, $s = Le, gC = {
  run: mC,
  cleanup: _C
};
function mC(e) {
  var t = $s.addDummyNode(e, "root", {}, "_root"), n = vC(e), r = ct.max(ct.values(n)) - 1, i = 2 * r + 1;
  e.graph().nestingRoot = t, ct.forEach(e.edges(), function(a) {
    e.edge(a).minlen *= i;
  });
  var o = yC(e) + 1;
  ct.forEach(e.children(), function(a) {
    Qg(e, t, i, o, r, n, a);
  }), e.graph().nodeRankFactor = i;
}
function Qg(e, t, n, r, i, o, a) {
  var s = e.children(a);
  if (!s.length) {
    a !== t && e.setEdge(t, a, { weight: 0, minlen: n });
    return;
  }
  var u = $s.addBorderNode(e, "_bt"), l = $s.addBorderNode(e, "_bb"), c = e.node(a);
  e.setParent(u, a), c.borderTop = u, e.setParent(l, a), c.borderBottom = l, ct.forEach(s, function(d) {
    Qg(e, t, n, r, i, o, d);
    var f = e.node(d), h = f.borderTop ? f.borderTop : d, g = f.borderBottom ? f.borderBottom : d, p = f.borderTop ? r : 2 * r, m = h !== g ? 1 : i - o[a] + 1;
    e.setEdge(u, h, {
      weight: p,
      minlen: m,
      nestingEdge: !0
    }), e.setEdge(g, l, {
      weight: p,
      minlen: m,
      nestingEdge: !0
    });
  }), e.parent(a) || e.setEdge(t, u, { weight: 0, minlen: i + o[a] });
}
function vC(e) {
  var t = {};
  function n(r, i) {
    var o = e.children(r);
    o && o.length && ct.forEach(o, function(a) {
      n(a, i + 1);
    }), t[r] = i;
  }
  return ct.forEach(e.children(), function(r) {
    n(r, 1);
  }), t;
}
function yC(e) {
  return ct.reduce(e.edges(), function(t, n) {
    return t + e.edge(n).weight;
  }, 0);
}
function _C(e) {
  var t = e.graph();
  e.removeNode(t.nestingRoot), delete t.nestingRoot, ct.forEach(e.edges(), function(n) {
    var r = e.edge(n);
    r.nestingEdge && e.removeEdge(n);
  });
}
var fs = fe, bC = Le, wC = EC;
function EC(e) {
  function t(n) {
    var r = e.children(n), i = e.node(n);
    if (r.length && fs.forEach(r, t), fs.has(i, "minRank")) {
      i.borderLeft = [], i.borderRight = [];
      for (var o = i.minRank, a = i.maxRank + 1; o < a; ++o)
        Vf(e, "borderLeft", "_bl", n, i, o), Vf(e, "borderRight", "_br", n, i, o);
    }
  }
  fs.forEach(e.children(), t);
}
function Vf(e, t, n, r, i, o) {
  var a = { width: 0, height: 0, rank: o, borderType: t }, s = i[t][o - 1], u = bC.addDummyNode(e, "border", a, n);
  i[t][o] = u, e.setParent(u, r), s && e.setEdge(s, u, { weight: 1 });
}
var Je = fe, xC = {
  adjust: SC,
  undo: CC
};
function SC(e) {
  var t = e.graph().rankdir.toLowerCase();
  (t === "lr" || t === "rl") && Jg(e);
}
function CC(e) {
  var t = e.graph().rankdir.toLowerCase();
  (t === "bt" || t === "rl") && NC(e), (t === "lr" || t === "rl") && (MC(e), Jg(e));
}
function Jg(e) {
  Je.forEach(e.nodes(), function(t) {
    Gf(e.node(t));
  }), Je.forEach(e.edges(), function(t) {
    Gf(e.edge(t));
  });
}
function Gf(e) {
  var t = e.width;
  e.width = e.height, e.height = t;
}
function NC(e) {
  Je.forEach(e.nodes(), function(t) {
    hs(e.node(t));
  }), Je.forEach(e.edges(), function(t) {
    var n = e.edge(t);
    Je.forEach(n.points, hs), Je.has(n, "y") && hs(n);
  });
}
function hs(e) {
  e.y = -e.y;
}
function MC(e) {
  Je.forEach(e.nodes(), function(t) {
    ps(e.node(t));
  }), Je.forEach(e.edges(), function(t) {
    var n = e.edge(t);
    Je.forEach(n.points, ps), Je.has(n, "x") && ps(n);
  });
}
function ps(e) {
  var t = e.x;
  e.x = e.y, e.y = t;
}
var ot = fe, AC = IC;
function IC(e) {
  var t = {}, n = ot.filter(e.nodes(), function(s) {
    return !e.children(s).length;
  }), r = ot.max(ot.map(n, function(s) {
    return e.node(s).rank;
  })), i = ot.map(ot.range(r + 1), function() {
    return [];
  });
  function o(s) {
    if (!ot.has(t, s)) {
      t[s] = !0;
      var u = e.node(s);
      i[u.rank].push(s), ot.forEach(e.successors(s), o);
    }
  }
  var a = ot.sortBy(n, function(s) {
    return e.node(s).rank;
  });
  return ot.forEach(a, o), i;
}
var mt = fe, RC = TC;
function TC(e, t) {
  for (var n = 0, r = 1; r < t.length; ++r)
    n += LC(e, t[r - 1], t[r]);
  return n;
}
function LC(e, t, n) {
  for (var r = mt.zipObject(
    n,
    mt.map(n, function(l, c) {
      return c;
    })
  ), i = mt.flatten(mt.map(t, function(l) {
    return mt.sortBy(mt.map(e.outEdges(l), function(c) {
      return { pos: r[c.w], weight: e.edge(c).weight };
    }), "pos");
  }), !0), o = 1; o < n.length; ) o <<= 1;
  var a = 2 * o - 1;
  o -= 1;
  var s = mt.map(new Array(a), function() {
    return 0;
  }), u = 0;
  return mt.forEach(i.forEach(function(l) {
    var c = l.pos + o;
    s[c] += l.weight;
    for (var d = 0; c > 0; )
      c % 2 && (d += s[c + 1]), c = c - 1 >> 1, s[c] += l.weight;
    u += l.weight * d;
  })), u;
}
var Uf = fe, kC = qC;
function qC(e, t) {
  return Uf.map(t, function(n) {
    var r = e.inEdges(n);
    if (r.length) {
      var i = Uf.reduce(r, function(o, a) {
        var s = e.edge(a), u = e.node(a.v);
        return {
          sum: o.sum + s.weight * u.order,
          weight: o.weight + s.weight
        };
      }, { sum: 0, weight: 0 });
      return {
        v: n,
        barycenter: i.sum / i.weight,
        weight: i.weight
      };
    } else
      return { v: n };
  });
}
var Oe = fe, OC = PC;
function PC(e, t) {
  var n = {};
  Oe.forEach(e, function(i, o) {
    var a = n[i.v] = {
      indegree: 0,
      in: [],
      out: [],
      vs: [i.v],
      i: o
    };
    Oe.isUndefined(i.barycenter) || (a.barycenter = i.barycenter, a.weight = i.weight);
  }), Oe.forEach(t.edges(), function(i) {
    var o = n[i.v], a = n[i.w];
    !Oe.isUndefined(o) && !Oe.isUndefined(a) && (a.indegree++, o.out.push(n[i.w]));
  });
  var r = Oe.filter(n, function(i) {
    return !i.indegree;
  });
  return DC(r);
}
function DC(e) {
  var t = [];
  function n(o) {
    return function(a) {
      a.merged || (Oe.isUndefined(a.barycenter) || Oe.isUndefined(o.barycenter) || a.barycenter >= o.barycenter) && $C(o, a);
    };
  }
  function r(o) {
    return function(a) {
      a.in.push(o), --a.indegree === 0 && e.push(a);
    };
  }
  for (; e.length; ) {
    var i = e.pop();
    t.push(i), Oe.forEach(i.in.reverse(), n(i)), Oe.forEach(i.out, r(i));
  }
  return Oe.map(
    Oe.filter(t, function(o) {
      return !o.merged;
    }),
    function(o) {
      return Oe.pick(o, ["vs", "i", "barycenter", "weight"]);
    }
  );
}
function $C(e, t) {
  var n = 0, r = 0;
  e.weight && (n += e.barycenter * e.weight, r += e.weight), t.weight && (n += t.barycenter * t.weight, r += t.weight), e.vs = t.vs.concat(e.vs), e.barycenter = n / r, e.weight = r, e.i = Math.min(t.i, e.i), t.merged = !0;
}
var gn = fe, FC = Le, BC = zC;
function zC(e, t) {
  var n = FC.partition(e, function(c) {
    return gn.has(c, "barycenter");
  }), r = n.lhs, i = gn.sortBy(n.rhs, function(c) {
    return -c.i;
  }), o = [], a = 0, s = 0, u = 0;
  r.sort(HC(!!t)), u = Kf(o, i, u), gn.forEach(r, function(c) {
    u += c.vs.length, o.push(c.vs), a += c.barycenter * c.weight, s += c.weight, u = Kf(o, i, u);
  });
  var l = { vs: gn.flatten(o, !0) };
  return s && (l.barycenter = a / s, l.weight = s), l;
}
function Kf(e, t, n) {
  for (var r; t.length && (r = gn.last(t)).i <= n; )
    t.pop(), e.push(r.vs), n++;
  return n;
}
function HC(e) {
  return function(t, n) {
    return t.barycenter < n.barycenter ? -1 : t.barycenter > n.barycenter ? 1 : e ? n.i - t.i : t.i - n.i;
  };
}
var wt = fe, VC = kC, GC = OC, UC = BC, KC = em;
function em(e, t, n, r) {
  var i = e.children(t), o = e.node(t), a = o ? o.borderLeft : void 0, s = o ? o.borderRight : void 0, u = {};
  a && (i = wt.filter(i, function(g) {
    return g !== a && g !== s;
  }));
  var l = VC(e, i);
  wt.forEach(l, function(g) {
    if (e.children(g.v).length) {
      var p = em(e, g.v, n, r);
      u[g.v] = p, wt.has(p, "barycenter") && WC(g, p);
    }
  });
  var c = GC(l, n);
  YC(c, u);
  var d = UC(c, r);
  if (a && (d.vs = wt.flatten([a, d.vs, s], !0), e.predecessors(a).length)) {
    var f = e.node(e.predecessors(a)[0]), h = e.node(e.predecessors(s)[0]);
    wt.has(d, "barycenter") || (d.barycenter = 0, d.weight = 0), d.barycenter = (d.barycenter * d.weight + f.order + h.order) / (d.weight + 2), d.weight += 2;
  }
  return d;
}
function YC(e, t) {
  wt.forEach(e, function(n) {
    n.vs = wt.flatten(n.vs.map(function(r) {
      return t[r] ? t[r].vs : r;
    }), !0);
  });
}
function WC(e, t) {
  wt.isUndefined(e.barycenter) ? (e.barycenter = t.barycenter, e.weight = t.weight) : (e.barycenter = (e.barycenter * e.weight + t.barycenter * t.weight) / (e.weight + t.weight), e.weight += t.weight);
}
var mn = fe, XC = Xe.Graph, ZC = jC;
function jC(e, t, n) {
  var r = QC(e), i = new XC({ compound: !0 }).setGraph({ root: r }).setDefaultNodeLabel(function(o) {
    return e.node(o);
  });
  return mn.forEach(e.nodes(), function(o) {
    var a = e.node(o), s = e.parent(o);
    (a.rank === t || a.minRank <= t && t <= a.maxRank) && (i.setNode(o), i.setParent(o, s || r), mn.forEach(e[n](o), function(u) {
      var l = u.v === o ? u.w : u.v, c = i.edge(l, o), d = mn.isUndefined(c) ? 0 : c.weight;
      i.setEdge(l, o, { weight: e.edge(u).weight + d });
    }), mn.has(a, "minRank") && i.setNode(o, {
      borderLeft: a.borderLeft[t],
      borderRight: a.borderRight[t]
    }));
  }), i;
}
function QC(e) {
  for (var t; e.hasNode(t = mn.uniqueId("_root")); ) ;
  return t;
}
var JC = fe, eN = tN;
function tN(e, t, n) {
  var r = {}, i;
  JC.forEach(n, function(o) {
    for (var a = e.parent(o), s, u; a; ) {
      if (s = e.parent(a), s ? (u = r[s], r[s] = a) : (u = i, i = a), u && u !== a) {
        t.setEdge(u, a);
        return;
      }
      a = s;
    }
  });
}
var St = fe, nN = AC, rN = RC, iN = KC, oN = ZC, aN = eN, sN = Xe.Graph, Yf = Le, cN = uN;
function uN(e) {
  var t = Yf.maxRank(e), n = Wf(e, St.range(1, t + 1), "inEdges"), r = Wf(e, St.range(t - 1, -1, -1), "outEdges"), i = nN(e);
  Xf(e, i);
  for (var o = Number.POSITIVE_INFINITY, a, s = 0, u = 0; u < 4; ++s, ++u) {
    lN(s % 2 ? n : r, s % 4 >= 2), i = Yf.buildLayerMatrix(e);
    var l = rN(e, i);
    l < o && (u = 0, a = St.cloneDeep(i), o = l);
  }
  Xf(e, a);
}
function Wf(e, t, n) {
  return St.map(t, function(r) {
    return oN(e, r, n);
  });
}
function lN(e, t) {
  var n = new sN();
  St.forEach(e, function(r) {
    var i = r.graph().root, o = iN(r, i, n, t);
    St.forEach(o.vs, function(a, s) {
      r.node(a).order = s;
    }), aN(r, n, o.vs);
  });
}
function Xf(e, t) {
  St.forEach(t, function(n) {
    St.forEach(n, function(r, i) {
      e.node(r).order = i;
    });
  });
}
var Q = fe, dN = Xe.Graph, fN = Le, hN = {
  positionX: mN,
  findType1Conflicts: tm,
  findType2Conflicts: nm,
  addConflict: Ic,
  hasConflict: rm,
  verticalAlignment: im,
  horizontalCompaction: om,
  alignCoordinates: sm,
  findSmallestWidthAlignment: am,
  balance: cm
};
function tm(e, t) {
  var n = {};
  function r(i, o) {
    var a = 0, s = 0, u = i.length, l = Q.last(o);
    return Q.forEach(o, function(c, d) {
      var f = pN(e, c), h = f ? e.node(f).order : u;
      (f || c === l) && (Q.forEach(o.slice(s, d + 1), function(g) {
        Q.forEach(e.predecessors(g), function(p) {
          var m = e.node(p), v = m.order;
          (v < a || h < v) && !(m.dummy && e.node(g).dummy) && Ic(n, p, g);
        });
      }), s = d + 1, a = h);
    }), o;
  }
  return Q.reduce(t, r), n;
}
function nm(e, t) {
  var n = {};
  function r(o, a, s, u, l) {
    var c;
    Q.forEach(Q.range(a, s), function(d) {
      c = o[d], e.node(c).dummy && Q.forEach(e.predecessors(c), function(f) {
        var h = e.node(f);
        h.dummy && (h.order < u || h.order > l) && Ic(n, f, c);
      });
    });
  }
  function i(o, a) {
    var s = -1, u, l = 0;
    return Q.forEach(a, function(c, d) {
      if (e.node(c).dummy === "border") {
        var f = e.predecessors(c);
        f.length && (u = e.node(f[0]).order, r(a, l, d, s, u), l = d, s = u);
      }
      r(a, l, a.length, u, o.length);
    }), a;
  }
  return Q.reduce(t, i), n;
}
function pN(e, t) {
  if (e.node(t).dummy)
    return Q.find(e.predecessors(t), function(n) {
      return e.node(n).dummy;
    });
}
function Ic(e, t, n) {
  if (t > n) {
    var r = t;
    t = n, n = r;
  }
  var i = e[t];
  i || (e[t] = i = {}), i[n] = !0;
}
function rm(e, t, n) {
  if (t > n) {
    var r = t;
    t = n, n = r;
  }
  return Q.has(e[t], n);
}
function im(e, t, n, r) {
  var i = {}, o = {}, a = {};
  return Q.forEach(t, function(s) {
    Q.forEach(s, function(u, l) {
      i[u] = u, o[u] = u, a[u] = l;
    });
  }), Q.forEach(t, function(s) {
    var u = -1;
    Q.forEach(s, function(l) {
      var c = r(l);
      if (c.length) {
        c = Q.sortBy(c, function(p) {
          return a[p];
        });
        for (var d = (c.length - 1) / 2, f = Math.floor(d), h = Math.ceil(d); f <= h; ++f) {
          var g = c[f];
          o[l] === l && u < a[g] && !rm(n, l, g) && (o[g] = l, o[l] = i[l] = i[g], u = a[g]);
        }
      }
    });
  }), { root: i, align: o };
}
function om(e, t, n, r, i) {
  var o = {}, a = gN(e, t, n, i), s = i ? "borderLeft" : "borderRight";
  function u(d, f) {
    for (var h = a.nodes(), g = h.pop(), p = {}; g; )
      p[g] ? d(g) : (p[g] = !0, h.push(g), h = h.concat(f(g))), g = h.pop();
  }
  function l(d) {
    o[d] = a.inEdges(d).reduce(function(f, h) {
      return Math.max(f, o[h.v] + a.edge(h));
    }, 0);
  }
  function c(d) {
    var f = a.outEdges(d).reduce(function(g, p) {
      return Math.min(g, o[p.w] - a.edge(p));
    }, Number.POSITIVE_INFINITY), h = e.node(d);
    f !== Number.POSITIVE_INFINITY && h.borderType !== s && (o[d] = Math.max(o[d], f));
  }
  return u(l, a.predecessors.bind(a)), u(c, a.successors.bind(a)), Q.forEach(r, function(d) {
    o[d] = o[n[d]];
  }), o;
}
function gN(e, t, n, r) {
  var i = new dN(), o = e.graph(), a = vN(o.nodesep, o.edgesep, r);
  return Q.forEach(t, function(s) {
    var u;
    Q.forEach(s, function(l) {
      var c = n[l];
      if (i.setNode(c), u) {
        var d = n[u], f = i.edge(d, c);
        i.setEdge(d, c, Math.max(a(e, l, u), f || 0));
      }
      u = l;
    });
  }), i;
}
function am(e, t) {
  return Q.minBy(Q.values(t), function(n) {
    var r = Number.NEGATIVE_INFINITY, i = Number.POSITIVE_INFINITY;
    return Q.forIn(n, function(o, a) {
      var s = yN(e, a) / 2;
      r = Math.max(o + s, r), i = Math.min(o - s, i);
    }), r - i;
  });
}
function sm(e, t) {
  var n = Q.values(t), r = Q.min(n), i = Q.max(n);
  Q.forEach(["u", "d"], function(o) {
    Q.forEach(["l", "r"], function(a) {
      var s = o + a, u = e[s], l;
      if (u !== t) {
        var c = Q.values(u);
        l = a === "l" ? r - Q.min(c) : i - Q.max(c), l && (e[s] = Q.mapValues(u, function(d) {
          return d + l;
        }));
      }
    });
  });
}
function cm(e, t) {
  return Q.mapValues(e.ul, function(n, r) {
    if (t)
      return e[t.toLowerCase()][r];
    var i = Q.sortBy(Q.map(e, r));
    return (i[1] + i[2]) / 2;
  });
}
function mN(e) {
  var t = fN.buildLayerMatrix(e), n = Q.merge(
    tm(e, t),
    nm(e, t)
  ), r = {}, i;
  Q.forEach(["u", "d"], function(a) {
    i = a === "u" ? t : Q.values(t).reverse(), Q.forEach(["l", "r"], function(s) {
      s === "r" && (i = Q.map(i, function(d) {
        return Q.values(d).reverse();
      }));
      var u = (a === "u" ? e.predecessors : e.successors).bind(e), l = im(e, i, n, u), c = om(
        e,
        i,
        l.root,
        l.align,
        s === "r"
      );
      s === "r" && (c = Q.mapValues(c, function(d) {
        return -d;
      })), r[a + s] = c;
    });
  });
  var o = am(e, r);
  return sm(r, o), cm(r, e.graph().align);
}
function vN(e, t, n) {
  return function(r, i, o) {
    var a = r.node(i), s = r.node(o), u = 0, l;
    if (u += a.width / 2, Q.has(a, "labelpos"))
      switch (a.labelpos.toLowerCase()) {
        case "l":
          l = -a.width / 2;
          break;
        case "r":
          l = a.width / 2;
          break;
      }
    if (l && (u += n ? l : -l), l = 0, u += (a.dummy ? t : e) / 2, u += (s.dummy ? t : e) / 2, u += s.width / 2, Q.has(s, "labelpos"))
      switch (s.labelpos.toLowerCase()) {
        case "l":
          l = s.width / 2;
          break;
        case "r":
          l = -s.width / 2;
          break;
      }
    return l && (u += n ? l : -l), l = 0, u;
  };
}
function yN(e, t) {
  return e.node(t).width;
}
var vn = fe, um = Le, _N = hN.positionX, bN = wN;
function wN(e) {
  e = um.asNonCompoundGraph(e), EN(e), vn.forEach(_N(e), function(t, n) {
    e.node(n).x = t;
  });
}
function EN(e) {
  var t = um.buildLayerMatrix(e), n = e.graph().ranksep, r = 0;
  vn.forEach(t, function(i) {
    var o = vn.max(vn.map(i, function(a) {
      return e.node(a).height;
    }));
    vn.forEach(i, function(a) {
      e.node(a).y = r + o / 2;
    }), r += o + n;
  });
}
var te = fe, Zf = bS, jf = DS, xN = sC, SN = Le.normalizeRanks, CN = dC, NN = Le.removeEmptyRanks, Qf = gC, MN = wC, Jf = xC, AN = cN, IN = bN, Nt = Le, RN = Xe.Graph, TN = LN;
function LN(e, t) {
  var n = t && t.debugTiming ? Nt.time : Nt.notime;
  n("layout", function() {
    var r = n("  buildLayoutGraph", function() {
      return VN(e);
    });
    n("  runLayout", function() {
      kN(r, n);
    }), n("  updateInputGraph", function() {
      qN(e, r);
    });
  });
}
function kN(e, t) {
  t("    makeSpaceForEdgeLabels", function() {
    GN(e);
  }), t("    removeSelfEdges", function() {
    JN(e);
  }), t("    acyclic", function() {
    Zf.run(e);
  }), t("    nestingGraph.run", function() {
    Qf.run(e);
  }), t("    rank", function() {
    xN(Nt.asNonCompoundGraph(e));
  }), t("    injectEdgeLabelProxies", function() {
    UN(e);
  }), t("    removeEmptyRanks", function() {
    NN(e);
  }), t("    nestingGraph.cleanup", function() {
    Qf.cleanup(e);
  }), t("    normalizeRanks", function() {
    SN(e);
  }), t("    assignRankMinMax", function() {
    KN(e);
  }), t("    removeEdgeLabelProxies", function() {
    YN(e);
  }), t("    normalize.run", function() {
    jf.run(e);
  }), t("    parentDummyChains", function() {
    CN(e);
  }), t("    addBorderSegments", function() {
    MN(e);
  }), t("    order", function() {
    AN(e);
  }), t("    insertSelfEdges", function() {
    e2(e);
  }), t("    adjustCoordinateSystem", function() {
    Jf.adjust(e);
  }), t("    position", function() {
    IN(e);
  }), t("    positionSelfEdges", function() {
    t2(e);
  }), t("    removeBorderNodes", function() {
    QN(e);
  }), t("    normalize.undo", function() {
    jf.undo(e);
  }), t("    fixupEdgeLabelCoords", function() {
    ZN(e);
  }), t("    undoCoordinateSystem", function() {
    Jf.undo(e);
  }), t("    translateGraph", function() {
    WN(e);
  }), t("    assignNodeIntersects", function() {
    XN(e);
  }), t("    reversePoints", function() {
    jN(e);
  }), t("    acyclic.undo", function() {
    Zf.undo(e);
  });
}
function qN(e, t) {
  te.forEach(e.nodes(), function(n) {
    var r = e.node(n), i = t.node(n);
    r && (r.x = i.x, r.y = i.y, t.children(n).length && (r.width = i.width, r.height = i.height));
  }), te.forEach(e.edges(), function(n) {
    var r = e.edge(n), i = t.edge(n);
    r.points = i.points, te.has(i, "x") && (r.x = i.x, r.y = i.y);
  }), e.graph().width = t.graph().width, e.graph().height = t.graph().height;
}
var ON = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"], PN = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" }, DN = ["acyclicer", "ranker", "rankdir", "align"], $N = ["width", "height"], FN = { width: 0, height: 0 }, BN = ["minlen", "weight", "width", "height", "labeloffset"], zN = {
  minlen: 1,
  weight: 1,
  width: 0,
  height: 0,
  labeloffset: 10,
  labelpos: "r"
}, HN = ["labelpos"];
function VN(e) {
  var t = new RN({ multigraph: !0, compound: !0 }), n = ms(e.graph());
  return t.setGraph(te.merge(
    {},
    PN,
    gs(n, ON),
    te.pick(n, DN)
  )), te.forEach(e.nodes(), function(r) {
    var i = ms(e.node(r));
    t.setNode(r, te.defaults(gs(i, $N), FN)), t.setParent(r, e.parent(r));
  }), te.forEach(e.edges(), function(r) {
    var i = ms(e.edge(r));
    t.setEdge(r, te.merge(
      {},
      zN,
      gs(i, BN),
      te.pick(i, HN)
    ));
  }), t;
}
function GN(e) {
  var t = e.graph();
  t.ranksep /= 2, te.forEach(e.edges(), function(n) {
    var r = e.edge(n);
    r.minlen *= 2, r.labelpos.toLowerCase() !== "c" && (t.rankdir === "TB" || t.rankdir === "BT" ? r.width += r.labeloffset : r.height += r.labeloffset);
  });
}
function UN(e) {
  te.forEach(e.edges(), function(t) {
    var n = e.edge(t);
    if (n.width && n.height) {
      var r = e.node(t.v), i = e.node(t.w), o = { rank: (i.rank - r.rank) / 2 + r.rank, e: t };
      Nt.addDummyNode(e, "edge-proxy", o, "_ep");
    }
  });
}
function KN(e) {
  var t = 0;
  te.forEach(e.nodes(), function(n) {
    var r = e.node(n);
    r.borderTop && (r.minRank = e.node(r.borderTop).rank, r.maxRank = e.node(r.borderBottom).rank, t = te.max(t, r.maxRank));
  }), e.graph().maxRank = t;
}
function YN(e) {
  te.forEach(e.nodes(), function(t) {
    var n = e.node(t);
    n.dummy === "edge-proxy" && (e.edge(n.e).labelRank = n.rank, e.removeNode(t));
  });
}
function WN(e) {
  var t = Number.POSITIVE_INFINITY, n = 0, r = Number.POSITIVE_INFINITY, i = 0, o = e.graph(), a = o.marginx || 0, s = o.marginy || 0;
  function u(l) {
    var c = l.x, d = l.y, f = l.width, h = l.height;
    t = Math.min(t, c - f / 2), n = Math.max(n, c + f / 2), r = Math.min(r, d - h / 2), i = Math.max(i, d + h / 2);
  }
  te.forEach(e.nodes(), function(l) {
    u(e.node(l));
  }), te.forEach(e.edges(), function(l) {
    var c = e.edge(l);
    te.has(c, "x") && u(c);
  }), t -= a, r -= s, te.forEach(e.nodes(), function(l) {
    var c = e.node(l);
    c.x -= t, c.y -= r;
  }), te.forEach(e.edges(), function(l) {
    var c = e.edge(l);
    te.forEach(c.points, function(d) {
      d.x -= t, d.y -= r;
    }), te.has(c, "x") && (c.x -= t), te.has(c, "y") && (c.y -= r);
  }), o.width = n - t + a, o.height = i - r + s;
}
function XN(e) {
  te.forEach(e.edges(), function(t) {
    var n = e.edge(t), r = e.node(t.v), i = e.node(t.w), o, a;
    n.points ? (o = n.points[0], a = n.points[n.points.length - 1]) : (n.points = [], o = i, a = r), n.points.unshift(Nt.intersectRect(r, o)), n.points.push(Nt.intersectRect(i, a));
  });
}
function ZN(e) {
  te.forEach(e.edges(), function(t) {
    var n = e.edge(t);
    if (te.has(n, "x"))
      switch ((n.labelpos === "l" || n.labelpos === "r") && (n.width -= n.labeloffset), n.labelpos) {
        case "l":
          n.x -= n.width / 2 + n.labeloffset;
          break;
        case "r":
          n.x += n.width / 2 + n.labeloffset;
          break;
      }
  });
}
function jN(e) {
  te.forEach(e.edges(), function(t) {
    var n = e.edge(t);
    n.reversed && n.points.reverse();
  });
}
function QN(e) {
  te.forEach(e.nodes(), function(t) {
    if (e.children(t).length) {
      var n = e.node(t), r = e.node(n.borderTop), i = e.node(n.borderBottom), o = e.node(te.last(n.borderLeft)), a = e.node(te.last(n.borderRight));
      n.width = Math.abs(a.x - o.x), n.height = Math.abs(i.y - r.y), n.x = o.x + n.width / 2, n.y = r.y + n.height / 2;
    }
  }), te.forEach(e.nodes(), function(t) {
    e.node(t).dummy === "border" && e.removeNode(t);
  });
}
function JN(e) {
  te.forEach(e.edges(), function(t) {
    if (t.v === t.w) {
      var n = e.node(t.v);
      n.selfEdges || (n.selfEdges = []), n.selfEdges.push({ e: t, label: e.edge(t) }), e.removeEdge(t);
    }
  });
}
function e2(e) {
  var t = Nt.buildLayerMatrix(e);
  te.forEach(t, function(n) {
    var r = 0;
    te.forEach(n, function(i, o) {
      var a = e.node(i);
      a.order = o + r, te.forEach(a.selfEdges, function(s) {
        Nt.addDummyNode(e, "selfedge", {
          width: s.label.width,
          height: s.label.height,
          rank: a.rank,
          order: o + ++r,
          e: s.e,
          label: s.label
        }, "_se");
      }), delete a.selfEdges;
    });
  });
}
function t2(e) {
  te.forEach(e.nodes(), function(t) {
    var n = e.node(t);
    if (n.dummy === "selfedge") {
      var r = e.node(n.e.v), i = r.x + r.width / 2, o = r.y, a = n.x - i, s = r.height / 2;
      e.setEdge(n.e, n.label), e.removeNode(t), n.label.points = [
        { x: i + 2 * a / 3, y: o - s },
        { x: i + 5 * a / 6, y: o - s },
        { x: i + a, y: o },
        { x: i + 5 * a / 6, y: o + s },
        { x: i + 2 * a / 3, y: o + s }
      ], n.label.x = n.x, n.label.y = n.y;
    }
  });
}
function gs(e, t) {
  return te.mapValues(te.pick(e, t), Number);
}
function ms(e) {
  var t = {};
  return te.forEach(e, function(n, r) {
    t[r.toLowerCase()] = n;
  }), t;
}
var Zn = fe, n2 = Le, r2 = Xe.Graph, i2 = {
  debugOrdering: o2
};
function o2(e) {
  var t = n2.buildLayerMatrix(e), n = new r2({ compound: !0, multigraph: !0 }).setGraph({});
  return Zn.forEach(e.nodes(), function(r) {
    n.setNode(r, { label: r }), n.setParent(r, "layer" + e.node(r).rank);
  }), Zn.forEach(e.edges(), function(r) {
    n.setEdge(r.v, r.w, {}, r.name);
  }), Zn.forEach(t, function(r, i) {
    var o = "layer" + i;
    n.setNode(o, { rank: "same" }), Zn.reduce(r, function(a, s) {
      return n.setEdge(a, s, { style: "invis" }), s;
    });
  }), n;
}
var a2 = "0.8.5", Rc = {
  graphlib: Xe,
  layout: TN,
  debug: i2,
  util: {
    time: Le.time,
    notime: Le.notime
  },
  version: a2
};
const Et = new Rc.graphlib.Graph();
Et.setDefaultEdgeLabel(() => ({}));
const eh = 130, th = 40, s2 = 130, c2 = (e, t = "LR") => {
  const n = t === "LR";
  return Et.setGraph({ rankdir: t }), e.forEach((r, i) => {
    const o = i > 0 ? e[i - 1] : void 0;
    Et.setNode(r.id, {
      width: eh,
      height: o?.type === "conditional" ? s2 : th
    });
  }), Rc.layout(Et), e.map((r) => {
    const i = Et.node(r.id);
    return r.targetPosition = n ? U.Left : U.Top, r.sourcePosition = n ? U.Right : U.Bottom, r.position = {
      x: i.x - eh / 2,
      y: i.y - th / 2
    }, r;
  });
}, u2 = (e, t = "LR") => (Et.setGraph({ rankdir: t }), e.forEach((n) => {
  Et.setEdge(n.source, n.target);
}), Rc.layout(Et), e), jn = 33, l2 = ({
  id: e,
  sourceX: t,
  sourceY: n,
  targetX: r,
  targetY: i,
  sourcePosition: o,
  targetPosition: a,
  label: s,
  style: u = {},
  markerType: l,
  markerEndId: c,
  selected: d,
  data: { onEdgeClick: f }
}) => {
  const [h, g, p] = dc({
    sourceX: t,
    sourceY: n,
    sourcePosition: o,
    targetX: r,
    targetY: i,
    targetPosition: a
  }), m = iw(l, c);
  return /* @__PURE__ */ re(Ne, { children: [
    /* @__PURE__ */ N(
      "path",
      {
        id: e,
        style: u,
        className: "react-flow__edge-path",
        d: h,
        markerEnd: m
      }
    ),
    !d && /* @__PURE__ */ N("text", { children: /* @__PURE__ */ N(
      "textPath",
      {
        href: `#${e}`,
        style: { fontSize: "11px" },
        startOffset: "50%",
        textAnchor: "middle",
        children: s
      }
    ) }),
    d && /* @__PURE__ */ N(
      "foreignObject",
      {
        width: jn,
        height: jn,
        x: g - jn / 2,
        y: p - jn / 2,
        className: "edgebutton-foreignobject",
        requiredExtensions: "http://www.w3.org/1999/xhtml",
        children: /* @__PURE__ */ N(
          "button",
          {
            className: "edgebutton",
            onClick: (v) => f(v, e),
            children: /* @__PURE__ */ N(bh, {})
          }
        )
      }
    )
  ] });
}, d2 = ({ data: e, selected: t }) => /* @__PURE__ */ re(Ne, { children: [
  /* @__PURE__ */ N(Ct, { position: U.Right, type: "source" }),
  /* @__PURE__ */ N(
    "div",
    {
      className: `react-flow__node-default keycloak__authentication__conditional_node ${t ? "selected" : ""}`,
      children: /* @__PURE__ */ N("div", { children: e.label })
    }
  ),
  /* @__PURE__ */ N(Ct, { position: U.Left, type: "target" })
] }), f2 = ue(d2), h2 = ({
  data: { label: e },
  prefix: t,
  selected: n
}) => /* @__PURE__ */ re(Ne, { children: [
  /* @__PURE__ */ N(Ct, { position: U.Right, type: "source" }),
  /* @__PURE__ */ N(
    "div",
    {
      className: `react-flow__node-default keycloak__authentication__subflow_node ${n ? "selected" : ""}`,
      children: /* @__PURE__ */ re("div", { children: [
        t,
        " ",
        e
      ] })
    }
  ),
  /* @__PURE__ */ N(Ct, { position: U.Left, type: "target" })
] }), lm = ue(h2), p2 = ({ ...e }) => /* @__PURE__ */ N(lm, { ...e, prefix: "Start" }), g2 = ({ ...e }) => /* @__PURE__ */ N(lm, { ...e, prefix: "End" }), m2 = {
  conditional: f2,
  startSubFlow: p2,
  endSubFlow: g2
}, v2 = /* @__PURE__ */ new Map([
  ["input", "keycloak__authentication__input_node"],
  ["output", "keycloak__authentication__output_node"]
]);
function y2(e, t) {
  const n = [];
  for (let r = 0; r < t.length - 1; r++)
    n.push(e(t[r], t[r + 1]));
  return n;
}
const _2 = (e) => e.requirement === "ALTERNATIVE" || e.requirement === "CONDITIONAL", Br = (e, t, n) => ({
  id: `edge-${e}-to-${t}`,
  type: "buttonEdge",
  source: e,
  target: t,
  label: n,
  data: {
    onEdgeClick: (r, i) => {
      r.stopPropagation(), alert(`hello ${i}`);
    }
  }
}), Fs = (e, t) => ({
  id: e.id,
  type: t,
  sourcePosition: t === "output" ? void 0 : U.Right,
  targetPosition: t === "input" ? void 0 : U.Left,
  data: { label: e.displayName },
  position: { x: 0, y: 0 },
  className: v2.get(t || "")
}), b2 = (e) => {
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (!_2(r))
      break;
    t.push(r);
  }
  return t;
}, nh = (e, t = !0) => ({
  startId: e.id,
  nodes: [e],
  edges: [],
  nextLinkFns: t ? [(n) => Br(e.id, n)] : []
}), w2 = (e) => {
  if (!e.executionList)
    throw new Error("Execution list is required for subflow");
  const t = dm(Tc(e.executionList));
  return t.nextLinkFns.push(
    ...e.executionList.filter((n) => yr(n)).map((n) => (r) => Br(n.id, r, "false"))
  ), t;
}, E2 = (e) => {
  const t = b2(e);
  return t.length > 0 ? t : [e[0]];
}, x2 = (e) => e.length === 0 ? [] : E2(e).map((n) => {
  if (n.executionList)
    return w2(n);
  const r = yr(n), i = (() => {
    if (r)
      return "true";
    if (n.requirement === "ALTERNATIVE")
      return "success";
  })();
  return {
    startId: n.id,
    nodes: [Fs(n, r ? "conditional" : void 0)],
    edges: [],
    nextLinkFns: [(o) => Br(n.id, o, i)]
  };
}), Tc = (e) => {
  if (e.length === 0)
    return [];
  const t = x2(e);
  return [
    t,
    ...Tc(e.slice(t.length))
  ];
}, dm = (e) => {
  const t = [], n = [];
  let r = [];
  for (const i of e)
    t.push(...i.flatMap((o) => o.nodes)), n.push(
      ...i.flatMap((o) => o.edges),
      ...r.map((o) => o(i[0].startId)),
      ...y2(
        (o, a) => Br(o.startId, a.startId, "attempted"),
        i
      )
    ), r = i.flatMap((o) => o.nextLinkFns);
  return {
    startId: e[0][0].startId,
    nodes: t,
    edges: n,
    nextLinkFns: r
  };
}, S2 = {
  buttonEdge: l2
};
function rh(e) {
  const t = e.filter(
    (o) => o.requirement !== "DISABLED"
  ), n = [
    [nh(Fs({ id: "start", displayName: "Start" }, "input"))],
    ...Tc(t),
    [
      nh(
        Fs({ id: "end", displayName: "End" }, "output"),
        !1
      )
    ]
  ], { nodes: r, edges: i } = dm(n);
  return [c2(r), u2(i)];
}
const C2 = ({
  executionList: { expandableList: e }
}) => {
  const [t, n] = ae(!1), [r, i] = Fe(
    () => rh(e),
    []
  ), [o, a, s] = D1(r), [u, l, c] = $1(i);
  return cE(() => {
    const [h, g] = rh(e);
    a(h), l(g);
  }, [e]), /* @__PURE__ */ re(
    Qp,
    {
      nodes: o,
      edges: u,
      onNodesChange: s,
      onEdgesChange: c,
      onInit: (h) => h.fitView({ duration: 100 }),
      nodeTypes: m2,
      edgeTypes: S2,
      onNodeClick: () => {
        n(!t);
      },
      nodesConnectable: !1,
      children: [
        /* @__PURE__ */ N(W1, {}),
        /* @__PURE__ */ N(tE, {}),
        /* @__PURE__ */ N(sE, {})
      ]
    }
  );
}, N2 = () => {
  const { t: e } = Be();
  return /* @__PURE__ */ N(wh, { "aria-labelledby": "headerName", id: "header", children: /* @__PURE__ */ re(Eh, { children: [
    /* @__PURE__ */ N(
      xh,
      {
        className: "keycloak__authentication__header-drag-button",
        "aria-label": e("disabled")
      }
    ),
    /* @__PURE__ */ N(
      Sh,
      {
        className: "keycloak__authentication__header",
        dataListCells: [
          /* @__PURE__ */ N(Wt, { id: "headerName", children: e("steps") }, "step"),
          /* @__PURE__ */ N(Wt, { children: e("requirement") }, "requirement"),
          /* @__PURE__ */ N(Wt, {}, "config")
        ]
      }
    )
  ] }) });
}, M2 = ({
  execution: e,
  onAddExecution: t,
  onAddFlow: n
}) => {
  const { adminClient: r } = tn(), { t: i } = Be(), [o, a] = ae(!1), [s, u] = ae(), [l, c] = ae();
  return In(
    () => r.authenticationManagement.getFlow({
      flowId: e.flowId
    }),
    ({ providerId: d }) => c(d),
    []
  ), /* @__PURE__ */ N(Nr, { content: i("add"), children: /* @__PURE__ */ re(Ne, { children: [
    /* @__PURE__ */ N(
      xv,
      {
        popperProps: {
          position: "right"
        },
        isOpen: o,
        toggle: (d) => /* @__PURE__ */ N(
          Ch,
          {
            ref: d,
            variant: "plain",
            onClick: () => a(!o),
            "aria-label": i("add"),
            "data-testid": `${e.displayName}-edit-dropdown`,
            children: /* @__PURE__ */ N(bh, {})
          }
        ),
        onSelect: () => a(!1),
        children: /* @__PURE__ */ re(Sv, { children: [
          /* @__PURE__ */ N(
            Tt,
            {
              onClick: () => u(l === "form-flow" ? "form" : "basic"),
              children: i("addStep")
            },
            "addStep"
          ),
          /* @__PURE__ */ N(
            Tt,
            {
              onClick: () => u("condition"),
              children: i("addCondition")
            },
            "addCondition"
          ),
          /* @__PURE__ */ N(Tt, { onClick: () => u("subFlow"), children: i("addSubFlow") }, "addSubFlow")
        ] })
      }
    ),
    s && s !== "subFlow" && /* @__PURE__ */ N(
      js,
      {
        name: e.displayName,
        type: s,
        onSelect: (d) => {
          d && t(e, d), u(void 0);
        }
      }
    ),
    s === "subFlow" && /* @__PURE__ */ N(
      Qs,
      {
        name: e.displayName,
        onCancel: () => u(void 0),
        onConfirm: (d) => {
          n(e, d), u(void 0);
        }
      }
    )
  ] }) });
}, A2 = ({ execution: e, onRowChange: t }) => {
  const { t: n } = Be(), r = br({
    mode: "onChange",
    defaultValues: e
  }), [i, o] = vs();
  ce(() => r.reset(e), [e]);
  const a = (s) => {
    t({ ...e, ...s }), o();
  };
  return /* @__PURE__ */ re(Ne, { children: [
    /* @__PURE__ */ N(Nr, { content: n("edit"), children: /* @__PURE__ */ N(
      Ee,
      {
        variant: "plain",
        "data-testid": `${e.id}-edit`,
        "aria-label": n("edit"),
        onClick: o,
        children: /* @__PURE__ */ N(Cv, {})
      }
    ) }),
    i && /* @__PURE__ */ N(
      Nn,
      {
        title: n("editFlow"),
        onClose: o,
        variant: Mn.small,
        actions: [
          /* @__PURE__ */ N(
            Ee,
            {
              "data-testid": "confirm",
              type: "submit",
              form: "edit-flow-form",
              isDisabled: !r.formState.isValid,
              children: n("edit")
            },
            "confirm"
          ),
          /* @__PURE__ */ N(
            Ee,
            {
              "data-testid": "cancel",
              variant: lt.link,
              onClick: o,
              children: n("cancel")
            },
            "cancel"
          )
        ],
        isOpen: !0,
        children: /* @__PURE__ */ N(
          An,
          {
            id: "edit-flow-form",
            onSubmit: r.handleSubmit(a),
            isHorizontal: !0,
            children: /* @__PURE__ */ re(wr, { ...r, children: [
              /* @__PURE__ */ N(
                nr,
                {
                  name: "displayName",
                  label: n("name"),
                  labelIcon: n("flowNameHelp"),
                  rules: { required: { value: !0, message: n("required") } }
                }
              ),
              /* @__PURE__ */ N(
                Nv,
                {
                  name: "description",
                  label: n("description"),
                  labelIcon: n("flowDescriptionHelp"),
                  rules: {
                    maxLength: {
                      value: 255,
                      message: n("maxLength", { length: 255 })
                    }
                  }
                }
              )
            ] })
          }
        )
      }
    )
  ] });
}, I2 = ({
  execution: e
}) => {
  const { adminClient: t } = tn(), { t: n } = Be(), { addAlert: r, addError: i } = zs(), [o, a] = ae(!1), [s, u] = ae(), [l, c] = ae(), d = br(), { setValue: f, handleSubmit: h } = d, g = e.authenticationFlow ? [] : [
    {
      helpText: n("authenticatorRefConfig.value.help"),
      label: n("authenticatorRefConfig.value.label"),
      name: "default.reference.value",
      readOnly: !1,
      secret: !1,
      type: "String"
    },
    {
      helpText: n("authenticatorRefConfig.maxAge.help"),
      label: n("authenticatorRefConfig.maxAge.label"),
      name: "default.reference.maxAge",
      readOnly: !1,
      secret: !1,
      type: "String"
    }
  ], p = (v) => {
    Rv(v || {}, f);
  };
  In(
    async () => {
      let v;
      const b = e.configurable ? await t.authenticationManagement.getConfigDescription({
        providerId: e.providerId
      }) : {
        name: e.displayName,
        properties: []
      };
      return e.authenticationConfig && (v = await t.authenticationManagement.getConfig({
        id: e.authenticationConfig
      })), b.properties = [
        ...g,
        ...b.properties
      ], { configDescription: b, config: v };
    },
    ({ configDescription: v, config: b }) => {
      c(v), u(b);
    },
    []
  ), ce(() => {
    s && p(s);
  }, [s]);
  const m = async (v) => {
    const b = Tv(v);
    try {
      if (s) {
        const w = {
          id: s.id,
          alias: s.alias,
          config: b.config
        };
        await t.authenticationManagement.updateConfig(w), u({ ...w });
      } else {
        const w = {
          id: e.id,
          alias: b.alias,
          config: b.config
        }, { id: _ } = await t.authenticationManagement.createConfig(w);
        u({ ...w.config, id: _, alias: w.alias });
      }
      r(n("configSaveSuccess"), vt.success), a(!1);
    } catch (w) {
      i("configSaveError", w);
    }
  };
  return /* @__PURE__ */ re(Ne, { children: [
    /* @__PURE__ */ N(Nr, { content: n("settings"), children: /* @__PURE__ */ N(
      Ee,
      {
        variant: "plain",
        "aria-label": n("settings"),
        onClick: () => a(!0),
        children: /* @__PURE__ */ N(Mv, {})
      }
    ) }),
    l && /* @__PURE__ */ N(
      Nn,
      {
        variant: Mn.small,
        isOpen: o,
        title: n("executionConfig", { name: l.name }),
        onClose: () => a(!1),
        children: /* @__PURE__ */ re(An, { id: "execution-config-form", onSubmit: h(m), children: [
          /* @__PURE__ */ re(wr, { ...d, children: [
            /* @__PURE__ */ N(
              nr,
              {
                name: "alias",
                label: n("alias"),
                labelIcon: n("authenticationAliasHelp"),
                rules: { required: { value: !0, message: n("required") } },
                isDisabled: !!s
              }
            ),
            /* @__PURE__ */ N(
              Av,
              {
                stringify: !0,
                properties: l.properties || []
              }
            )
          ] }),
          /* @__PURE__ */ re(Iv, { children: [
            /* @__PURE__ */ N(Ee, { "data-testid": "save", variant: "primary", type: "submit", children: n("save") }),
            /* @__PURE__ */ N(
              Ee,
              {
                "data-testid": "cancel",
                variant: lt.link,
                onClick: () => {
                  a(!1);
                },
                children: n("cancel")
              }
            ),
            s && /* @__PURE__ */ re(
              Ee,
              {
                className: "pf-v5-u-ml-4xl",
                "data-testid": "clear",
                variant: lt.link,
                onClick: async () => {
                  await t.authenticationManagement.delConfig({
                    id: s.id
                  }), u(void 0), a(!1);
                },
                children: [
                  n("clear"),
                  " ",
                  /* @__PURE__ */ N(Nh, {})
                ]
              }
            )
          ] })
        ] })
      }
    )
  ] });
}, R2 = ({
  flow: e,
  onChange: t
}) => {
  const { t: n } = Be(), [r, i] = ae(!1), o = e.requirementChoices.map((a, s) => /* @__PURE__ */ N(Lv, { value: a, children: n(`requirements.${a}`) }, s));
  return /* @__PURE__ */ re(Ne, { children: [
    e.requirementChoices && e.requirementChoices.length > 1 && /* @__PURE__ */ N(
      kv,
      {
        onOpenChange: (a) => i(a),
        onSelect: (a, s) => {
          e.requirement = s?.toString(), t(e), i(!1);
        },
        selected: e.requirement,
        isOpen: r,
        toggle: (a) => /* @__PURE__ */ N(
          Ch,
          {
            className: "keycloak__authentication__requirement-dropdown",
            ref: a,
            onClick: () => i(!r),
            isExpanded: r,
            children: n(`requirements.${e.requirement}`)
          }
        ),
        children: /* @__PURE__ */ N(qv, { children: o })
      }
    ),
    (!e.requirementChoices || e.requirementChoices.length <= 1) && /* @__PURE__ */ N(Ne, { children: n(`requirements.${e.requirement}`) })
  ] });
}, T2 = ({ id: e, title: t, alias: n }) => /* @__PURE__ */ N(
  Ov,
  {
    "data-testid": t,
    className: "keycloak__authentication__title",
    isFlat: !0,
    children: /* @__PURE__ */ re(Pv, { "data-id": e, id: `title-id-${e}`, children: [
      t,
      " ",
      /* @__PURE__ */ N("br", {}),
      /* @__PURE__ */ N(Mh, { component: Ah.small, children: n })
    ] })
  }
), fm = ({
  builtIn: e,
  execution: t,
  onRowClick: n,
  onRowChange: r,
  onAddExecution: i,
  onAddFlow: o,
  onDelete: a
}) => {
  const { t: s } = Be(), u = !!t.executionList?.length;
  return /* @__PURE__ */ re(Ne, { children: [
    /* @__PURE__ */ N(Dv, { hasNoWrapper: !0, children: /* @__PURE__ */ N(
      wh,
      {
        className: "keycloak__authentication__flow-item",
        id: t.id,
        isExpanded: !t.isCollapsed,
        "aria-labelledby": `title-id-${t.id}`,
        children: /* @__PURE__ */ re(
          Eh,
          {
            className: "keycloak__authentication__flow-row",
            "aria-level": t.level + 1,
            role: "heading",
            "aria-labelledby": t.id,
            children: [
              /* @__PURE__ */ N($v, { children: /* @__PURE__ */ N(xh, { "aria-label": s("dragHelp") }) }),
              u && /* @__PURE__ */ N(
                Ih,
                {
                  onClick: () => n(t),
                  isExpanded: !t.isCollapsed,
                  id: `toggle1-${t.id}`,
                  "aria-controls": t.executionList[0].id
                }
              ),
              /* @__PURE__ */ N(
                Sh,
                {
                  dataListCells: [
                    /* @__PURE__ */ re(Wt, { children: [
                      !t.authenticationFlow && /* @__PURE__ */ N(
                        T2,
                        {
                          id: t.id,
                          alias: t.alias,
                          title: t.displayName
                        },
                        t.id
                      ),
                      t.authenticationFlow && /* @__PURE__ */ re(Ne, { children: [
                        t.displayName,
                        " ",
                        /* @__PURE__ */ N("br", {}),
                        " ",
                        /* @__PURE__ */ re(Mh, { component: Ah.small, children: [
                          t.alias,
                          " ",
                          t.description
                        ] })
                      ] })
                    ] }, `${t.id}-name`),
                    /* @__PURE__ */ N(Wt, { children: /* @__PURE__ */ N(
                      R2,
                      {
                        flow: t,
                        onChange: r
                      }
                    ) }, `${t.id}-requirement`),
                    /* @__PURE__ */ re(Wt, { children: [
                      /* @__PURE__ */ N(I2, { execution: t }),
                      t.authenticationFlow && !e && /* @__PURE__ */ re(Ne, { children: [
                        /* @__PURE__ */ N(
                          M2,
                          {
                            execution: t,
                            onAddExecution: i,
                            onAddFlow: o
                          }
                        ),
                        /* @__PURE__ */ N(
                          A2,
                          {
                            execution: t,
                            onRowChange: r
                          }
                        )
                      ] }),
                      !e && /* @__PURE__ */ N(Nr, { content: s("delete"), children: /* @__PURE__ */ N(
                        Ee,
                        {
                          variant: "plain",
                          "data-testid": `${t.displayName}-delete`,
                          "aria-label": s("delete"),
                          onClick: () => a(t),
                          children: /* @__PURE__ */ N(Nh, {})
                        }
                      ) })
                    ] }, `${t.id}-config`)
                  ]
                }
              )
            ]
          }
        )
      }
    ) }, `draggable-${t.id}`),
    !t.isCollapsed && u && t.executionList?.map((l) => /* @__PURE__ */ N(
      fm,
      {
        builtIn: e,
        execution: l,
        onRowClick: n,
        onRowChange: r,
        onAddExecution: i,
        onAddFlow: o,
        onDelete: a
      },
      l.id
    ))
  ] });
};
class hm {
  oldIndex;
  newIndex;
  constructor(t, n) {
    this.oldIndex = t, this.newIndex = n;
  }
}
class ih extends hm {
  parent;
  constructor(t, n, r) {
    super(t, n), this.parent = r;
  }
}
class Lc {
  #e;
  expandableList;
  constructor(t) {
    this.#e = t;
    const n = {
      executionList: [],
      isCollapsed: !1
    };
    this.#t(0, -1, n), this.expandableList = n.executionList;
  }
  #t(t, n, r) {
    for (let i = t; i < this.#e.length; i++) {
      const o = this.#e[i], a = o.level || 0;
      if (a <= n)
        return i - 1;
      const s = this.#e[i + 1]?.level || 0;
      if (a < s) {
        const l = { ...o, executionList: [], isCollapsed: !1 };
        i = this.#t(i + 1, a, l), r.executionList?.push(l);
      } else
        r.executionList?.push(o);
    }
    return this.#e.length;
  }
  order(t) {
    let n = [];
    for (const r of t || this.expandableList)
      n.push(r), r.executionList && !r.isCollapsed && (n = n.concat(this.order(r.executionList)));
    return n;
  }
  findExecution(t, n = 0, r) {
    const i = r || this.expandableList;
    for (let o = 0; o < i.length; o++) {
      const a = i[o];
      if (n === t)
        return a;
      if (n++, a.executionList) {
        const s = this.findExecution(t, n, a.executionList);
        if (s)
          return s;
        n += a.executionList.length;
      }
    }
    return n === t ? this.expandableList[this.expandableList.length - 1] : void 0;
  }
  #n(t, n) {
    let r;
    for (let i = 0; i < n; i++) {
      const o = this.#e[i];
      t - 1 === o.level && (r = o);
    }
    return r;
  }
  getChange(t, n) {
    const r = this.order(), i = n.findIndex((c) => c === t.id), o = r.findIndex((c) => c.id === t.id), a = r[o], s = r[i], u = this.#n(a.level, o), l = this.#n(s.level, i);
    return u?.id !== l?.id ? s.level > 0 ? new ih(
      l?.executionList?.length || 0,
      s.index,
      l
    ) : new ih(this.expandableList.length, s.index) : new hm(a.index, s.index);
  }
  clone() {
    const t = new Lc([]);
    return t.#e = this.#e, t.expandableList = this.expandableList, t;
  }
}
const yr = (e) => e.displayName?.startsWith("Condition ");
function $2() {
  const { adminClient: e } = tn(), { t } = Be(), { realm: n } = Fv(), { addAlert: r, addError: i } = zs(), { id: o, usedBy: a, builtIn: s } = Ym(), u = Wm(), [l, c] = ae(0), d = () => c((/* @__PURE__ */ new Date()).getTime()), [f, h] = ae(!0), [g, p] = ae(), [m, v] = ae(), [b, w] = ae(""), [_, C] = ae(), [E, M] = ae(), [T, A] = ae(), [q, P, F] = vs(), [O, y] = ae(!1), [I, x] = vs();
  In(
    async () => {
      const V = (await e.authenticationManagement.getFlows()).find((j) => j.id === o);
      if (!V)
        throw new Error(t("notFound"));
      const W = await e.authenticationManagement.getExecutions({
        flow: V.alias
      });
      return { flow: V, executions: W };
    },
    ({ flow: z, executions: V }) => {
      p(z), v(new Lc(V));
    },
    [l]
  );
  const L = async (z, V) => {
    try {
      let W = z.id;
      if ("parent" in V) {
        let ie = {};
        "authenticationConfig" in z && (ie = await e.authenticationManagement.getConfig({
          id: z.authenticationConfig
        }));
        try {
          await e.authenticationManagement.delExecution({ id: W });
        } catch {
        }
        if ("authenticationFlow" in z) {
          const oe = z, de = await e.authenticationManagement.addFlowToFlow({
            flow: V.parent?.displayName || g?.alias,
            alias: oe.displayName,
            description: oe.description,
            provider: z.providerId,
            type: "basic-flow"
          });
          W = de.id, z.executionList?.forEach(
            (me, Z) => L(me, {
              parent: { ...z, id: de.id },
              newIndex: Z,
              oldIndex: Z
            })
          );
        } else {
          const oe = await e.authenticationManagement.addExecutionToFlow({
            flow: V.parent?.displayName || g?.alias,
            provider: z.providerId
          });
          if (ie.id) {
            const de = {
              id: oe.id,
              alias: ie.alias,
              config: ie.config
            };
            await e.authenticationManagement.createConfig(de);
          }
          W = oe.id;
        }
      }
      const j = V.newIndex - V.oldIndex;
      for (let ie = 0; ie < Math.abs(j); ie++)
        j > 0 ? await e.authenticationManagement.lowerPriorityExecution({
          id: W
        }) : await e.authenticationManagement.raisePriorityExecution({
          id: W
        });
      d(), r(t("updateFlowSuccess"), vt.success);
    } catch (W) {
      i("updateFlowError", W);
    }
  }, D = async (z) => {
    const { executionList: V, isCollapsed: W, ...j } = z;
    try {
      await e.authenticationManagement.updateExecution(
        { flow: g?.alias },
        j
      ), d(), r(t("updateFlowSuccess"), vt.success);
    } catch (ie) {
      i("updateFlowError", ie);
    }
  }, S = async (z, V) => {
    try {
      await e.authenticationManagement.addExecutionToFlow({
        flow: z,
        provider: V.id
      }), d(), r(t("updateFlowSuccess"), vt.success);
    } catch (W) {
      i("updateFlowError", W);
    }
  }, k = async (z, { name: V, description: W = "", type: j, provider: ie }) => {
    try {
      await e.authenticationManagement.addFlowToFlow({
        flow: z,
        alias: V,
        description: W,
        provider: ie,
        type: j
      }), d(), r(t("updateFlowSuccess"), vt.success);
    } catch (oe) {
      i("updateFlowError", oe);
    }
  }, [$, B] = zc({
    titleKey: "deleteConfirmExecution",
    children: /* @__PURE__ */ re(Dc, { i18nKey: "deleteConfirmExecutionMessage", children: [
      " ",
      /* @__PURE__ */ N("strong", { children: { name: T?.displayName } }),
      "."
    ] }),
    continueButtonLabel: "delete",
    continueButtonVariant: lt.danger,
    onConfirm: async () => {
      try {
        await e.authenticationManagement.delExecution({
          id: T?.id
        }), r(t("deleteExecutionSuccess"), vt.success), d();
      } catch (z) {
        i("deleteExecutionError", z);
      }
    }
  }), [G, H] = zc({
    titleKey: "deleteConfirmFlow",
    children: /* @__PURE__ */ re(Dc, { i18nKey: "deleteConfirmFlowMessage", children: [
      " ",
      /* @__PURE__ */ N("strong", { children: { flow: g?.alias || "" } }),
      "."
    ] }),
    continueButtonLabel: "delete",
    continueButtonVariant: lt.danger,
    onConfirm: async () => {
      try {
        await e.authenticationManagement.deleteFlow({
          flowId: g.id
        }), u(Bv({ realm: n })), r(t("deleteFlowSuccess"), vt.success);
      } catch (z) {
        i("deleteFlowError", z);
      }
    }
  }), X = m?.expandableList.length !== 0, J = [
    ...a !== "DEFAULT" ? [
      /* @__PURE__ */ N(
        Tt,
        {
          "data-testid": "set-as-default",
          onClick: x,
          children: t("bindFlow")
        },
        "default"
      )
    ] : [],
    /* @__PURE__ */ N(Tt, { onClick: () => F(!0), children: t("duplicate") }, "duplicate"),
    ...s ? [] : [
      /* @__PURE__ */ N(
        Tt,
        {
          "data-testid": "edit-flow",
          onClick: () => y(!0),
          children: t("editInfo")
        },
        "edit"
      ),
      /* @__PURE__ */ N(
        Tt,
        {
          "data-testid": "delete-flow",
          onClick: () => G(),
          children: t("delete")
        },
        "delete"
      )
    ]
  ];
  return /* @__PURE__ */ re(Ne, { children: [
    I && /* @__PURE__ */ N(
      zv,
      {
        flowAlias: g?.alias,
        onClose: (z) => {
          x(), u(
            Hv({
              realm: n,
              id: o,
              usedBy: z ? "DEFAULT" : "notInUse",
              builtIn: s ? "builtIn" : void 0
            })
          );
        }
      }
    ),
    q && /* @__PURE__ */ N(
      Vv,
      {
        name: g?.alias,
        description: g?.description,
        toggleDialog: P,
        onComplete: () => {
          d(), F(!1);
        }
      }
    ),
    O && /* @__PURE__ */ N(
      ry,
      {
        flow: g,
        toggleDialog: () => {
          y(!O), d();
        }
      }
    ),
    /* @__PURE__ */ N(H, {}),
    /* @__PURE__ */ N(
      Gv,
      {
        titleKey: g?.alias || "",
        badges: [
          { text: /* @__PURE__ */ N(ch, { children: t(`used.${a}`) }) },
          s ? {
            text: /* @__PURE__ */ N(ny, {}),
            id: "builtIn"
          } : {}
        ],
        dropdownItems: J
      }
    ),
    /* @__PURE__ */ re(uh, { variant: "light", children: [
      m && X && /* @__PURE__ */ re(Ne, { children: [
        /* @__PURE__ */ N(Uv, { id: "toolbar", children: /* @__PURE__ */ re(Kv, { children: [
          /* @__PURE__ */ N(Kr, { children: /* @__PURE__ */ re(Rh, { children: [
            /* @__PURE__ */ N(
              ir,
              {
                icon: /* @__PURE__ */ N(Jv, {}),
                "aria-label": t("tableView"),
                buttonId: "tableView",
                isSelected: f,
                onChange: () => h(!0)
              }
            ),
            /* @__PURE__ */ N(
              ir,
              {
                icon: /* @__PURE__ */ N(jv, {}),
                "aria-label": t("diagramView"),
                buttonId: "diagramView",
                isSelected: !f,
                onChange: () => h(!1)
              }
            )
          ] }) }),
          /* @__PURE__ */ N(Kr, { children: /* @__PURE__ */ N(
            Ee,
            {
              "data-testid": "addStep",
              variant: "secondary",
              onClick: () => C(!0),
              children: t("addStep")
            }
          ) }),
          /* @__PURE__ */ N(Kr, { children: /* @__PURE__ */ N(
            Ee,
            {
              "data-testid": "addSubFlow",
              variant: "secondary",
              onClick: () => M(!0),
              children: t("addSubFlow")
            }
          ) })
        ] }) }),
        /* @__PURE__ */ N(B, {}),
        f && /* @__PURE__ */ N(
          Yv,
          {
            onDrag: ({ index: z }) => {
              const V = m.findExecution(z);
              return w(t("onDragStart", { item: V.displayName })), V.isCollapsed || (V.isCollapsed = !0, v(m.clone())), !0;
            },
            onDragMove: ({ index: z }) => {
              const V = m.findExecution(z);
              w(t("onDragMove", { item: V?.displayName }));
            },
            onDrop: (z, V) => {
              if (V) {
                const W = m.findExecution(z.index), j = m.order().map((de) => de.id);
                w(
                  t("onDragFinish", { list: W.displayName })
                );
                const [ie] = j.splice(z.index, 1);
                j.splice(V.index, 0, ie);
                const oe = m.getChange(W, j);
                return L(W, oe), !0;
              } else
                return w(t("onDragCancel")), !1;
            },
            children: /* @__PURE__ */ N(Wv, { hasNoWrapper: !0, children: /* @__PURE__ */ re(Xv, { "aria-label": t("flows"), children: [
              /* @__PURE__ */ N(N2, {}),
              /* @__PURE__ */ N(Ne, { children: m.expandableList.map((z) => /* @__PURE__ */ N(
                fm,
                {
                  builtIn: !!s,
                  execution: z,
                  onRowClick: (V) => {
                    V.isCollapsed = !V.isCollapsed, v(m.clone());
                  },
                  onRowChange: D,
                  onAddExecution: (V, W) => S(V.displayName, W),
                  onAddFlow: (V, W) => k(V.displayName, W),
                  onDelete: (V) => {
                    A(V), $();
                  }
                },
                z.id
              )) })
            ] }) })
          }
        ),
        g && /* @__PURE__ */ re(Ne, { children: [
          _ && /* @__PURE__ */ N(
            js,
            {
              name: g.alias,
              type: g.providerId === "client-flow" ? "client" : "basic",
              onSelect: (z) => {
                z && S(g.alias, z), C(!1);
              }
            }
          ),
          E && /* @__PURE__ */ N(
            Qs,
            {
              name: g.alias,
              onCancel: () => M(!1),
              onConfirm: (z) => {
                k(g.alias, z), M(!1);
              }
            }
          )
        ] }),
        /* @__PURE__ */ N("div", { className: "pf-v5-screen-reader", "aria-live": "assertive", children: b })
      ] }),
      !f && m?.expandableList && /* @__PURE__ */ N(C2, { executionList: m }),
      !m?.expandableList || g && !X && /* @__PURE__ */ N(
        ay,
        {
          flow: g,
          onAddExecution: (z) => S(g.alias, z),
          onAddFlow: (z) => k(g.alias, z)
        }
      )
    ] })
  ] });
}
export {
  $2 as default,
  yr as providerConditionFilter
};
//# sourceMappingURL=FlowDetails-1aOlL_ce.js.map
