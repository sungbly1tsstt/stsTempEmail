var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { d as X, h as S, c as Q, a as ve, b as Ie, e as H, f as Ot, g as Bt, u as Pe, r as C, i as de, j as vt, k as Ae, l as zt, m as Re, n as _t, o as Et, p as Vt, q as ue, N as Ft, w as qt, s as jt, t as Qe, v as Ht, x as et, y as Ke, C as Wt, z as Kt, A as Jt, B as _e, D as Qt, E as Gt, F as tt, G as Yt, H as Xt, I as Zt, J as ea, _ as le, K as ke, L as ta, M as aa, O as De, P as na, X as at, Q as nt, R as la, S as sa, T as lt, U as oa, V as F, W as R, Y as E, Z, $ as se, a0 as te, a1 as ee, a2 as B, a3 as bt, a4 as I, a5 as ae, a6 as e, a7 as a, a8 as A, a9 as t, aa as gt, ab as Se, ac as U, ad as Me, ae as Ce, af as ce, ag as Ge, ah as Ye, ai as ra, aj as ia, ak as ht, al as st, am as oe, an as Xe, ao as ua, ap as Je, aq as yt, ar as wt, as as Y, at as pe, au as be, av as da, aw as ye, ax as Oe, ay as ca, az as Le, aA as ot, aB as xt, aC as kt, aD as Ct, aE as ma, aF as At, aG as St, aH as Mt, aI as pa, aJ as fa, aK as va, aL as _a, aM as ba, aN as ga, aO as ha, aP as ya, aQ as wa } from "./index-xastp6wq.js";
import { T as xa, E as ka } from "./index.esm-CWZERyAO.js";
const Ca = X({ name: "ChevronLeft", render() {
  return S("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, S("path", { d: "M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z", fill: "currentColor" }));
} }), Aa = X({ name: "Remove", render() {
  return S("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, S("line", { x1: "400", y1: "256", x2: "112", y2: "256", style: `
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      ` }));
} }), Sa = Q("collapse", "width: 100%;", [Q("collapse-item", `
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `, [ve("disabled", [H("header", "cursor: not-allowed;", [H("header-main", `
 color: var(--n-title-text-color-disabled);
 `), Q("collapse-item-arrow", `
 color: var(--n-arrow-color-disabled);
 `)])]), Q("collapse-item", "margin-left: 32px;"), Ie("&:first-child", "margin-top: 0;"), Ie("&:first-child >", [H("header", "padding-top: 0;")]), ve("left-arrow-placement", [H("header", [Q("collapse-item-arrow", "margin-right: 4px;")])]), ve("right-arrow-placement", [H("header", [Q("collapse-item-arrow", "margin-left: 4px;")])]), H("content-wrapper", [H("content-inner", "padding-top: 16px;"), Bt({ duration: "0.15s" })]), ve("active", [H("header", [ve("active", [Q("collapse-item-arrow", "transform: rotate(90deg);")])])]), Ie("&:not(:first-child)", "border-top: 1px solid var(--n-divider-color);"), Ot("disabled", [ve("trigger-area-main", [H("header", [H("header-main", "cursor: pointer;"), Q("collapse-item-arrow", "cursor: default;")])]), ve("trigger-area-arrow", [H("header", [Q("collapse-item-arrow", "cursor: pointer;")])]), ve("trigger-area-extra", [H("header", [H("header-extra", "cursor: pointer;")])])]), H("header", `
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `, [H("header-main", `
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `), H("header-extra", `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), Q("collapse-item-arrow", `
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]), Ma = Object.assign(Object.assign({}, Ae.props), { defaultExpandedNames: { type: [Array, String], default: null }, expandedNames: [Array, String], arrowPlacement: { type: String, default: "left" }, accordion: { type: Boolean, default: false }, displayDirective: { type: String, default: "if" }, triggerAreas: { type: Array, default: () => ["main", "extra", "arrow"] }, onItemHeaderClick: [Function, Array], "onUpdate:expandedNames": [Function, Array], onUpdateExpandedNames: [Function, Array], onExpandedNamesChange: { type: [Function, Array], validator: () => true, default: void 0 } }), Ut = Et("n-collapse"), Ua = X({ name: "Collapse", props: Ma, slots: Object, setup(o, { slots: u }) {
  const { mergedClsPrefixRef: s, inlineThemeDisabled: n, mergedRtlRef: l } = Pe(o), d = C(o.defaultExpandedNames), i = de(() => o.expandedNames), m = vt(i, d), f = Ae("Collapse", "-collapse", Sa, zt, o, s);
  function v(b) {
    const { "onUpdate:expandedNames": _, onUpdateExpandedNames: h, onExpandedNamesChange: y } = o;
    h && ue(h, b), _ && ue(_, b), y && ue(y, b), d.value = b;
  }
  function r(b) {
    const { onItemHeaderClick: _ } = o;
    _ && ue(_, b);
  }
  function c(b, _, h) {
    const { accordion: y } = o, { value: D } = m;
    if (y) b ? (v([_]), r({ name: _, expanded: true, event: h })) : (v([]), r({ name: _, expanded: false, event: h }));
    else if (!Array.isArray(D)) v([_]), r({ name: _, expanded: true, event: h });
    else {
      const x = D.slice(), $ = x.findIndex((N) => _ === N);
      ~$ ? (x.splice($, 1), v(x), r({ name: _, expanded: false, event: h })) : (x.push(_), v(x), r({ name: _, expanded: true, event: h }));
    }
  }
  Vt(Ut, { props: o, mergedClsPrefixRef: s, expandedNamesRef: m, slots: u, toggleItem: c });
  const p = Re("Collapse", l, s), k = de(() => {
    const { common: { cubicBezierEaseInOut: b }, self: { titleFontWeight: _, dividerColor: h, titlePadding: y, titleTextColor: D, titleTextColorDisabled: x, textColor: $, arrowColor: N, fontSize: J, titleFontSize: G, arrowColorDisabled: j, itemMargin: ne } } = f.value;
    return { "--n-font-size": J, "--n-bezier": b, "--n-text-color": $, "--n-divider-color": h, "--n-title-padding": y, "--n-title-font-size": G, "--n-title-text-color": D, "--n-title-text-color-disabled": x, "--n-title-font-weight": _, "--n-arrow-color": N, "--n-arrow-color-disabled": j, "--n-item-margin": ne };
  }), w = n ? _t("collapse", void 0, k, o) : void 0;
  return { rtlEnabled: p, mergedTheme: f, mergedClsPrefix: s, cssVars: n ? void 0 : k, themeClass: w == null ? void 0 : w.themeClass, onRender: w == null ? void 0 : w.onRender };
}, render() {
  var o;
  return (o = this.onRender) === null || o === void 0 || o.call(this), S("div", { class: [`${this.mergedClsPrefix}-collapse`, this.rtlEnabled && `${this.mergedClsPrefix}-collapse--rtl`, this.themeClass], style: this.cssVars }, this.$slots);
} }), Ta = X({ name: "CollapseItemContent", props: { displayDirective: { type: String, required: true }, show: Boolean, clsPrefix: { type: String, required: true } }, setup(o) {
  return { onceTrue: jt(Qe(o, "show")) };
}, render() {
  return S(Ft, null, { default: () => {
    const { show: o, displayDirective: u, onceTrue: s, clsPrefix: n } = this, l = u === "show" && s, d = S("div", { class: `${n}-collapse-item__content-wrapper` }, S("div", { class: `${n}-collapse-item__content-inner` }, this.$slots));
    return l ? qt(d, [[Ht, o]]) : o ? d : null;
  } });
} }), La = { title: String, name: [String, Number], disabled: Boolean, displayDirective: String }, Na = X({ name: "CollapseItem", props: La, setup(o) {
  const { mergedRtlRef: u } = Pe(o), s = Jt(), n = _e(() => {
    var c;
    return (c = o.name) !== null && c !== void 0 ? c : s;
  }), l = Qt(Ut);
  l || Gt("collapse-item", "`n-collapse-item` must be placed inside `n-collapse`.");
  const { expandedNamesRef: d, props: i, mergedClsPrefixRef: m, slots: f } = l, v = de(() => {
    const { value: c } = d;
    if (Array.isArray(c)) {
      const { value: p } = n;
      return !~c.findIndex((k) => k === p);
    } else if (c) {
      const { value: p } = n;
      return p !== c;
    }
    return true;
  });
  return { rtlEnabled: Re("Collapse", u, m), collapseSlots: f, randomName: s, mergedClsPrefix: m, collapsed: v, triggerAreas: Qe(i, "triggerAreas"), mergedDisplayDirective: de(() => {
    const { displayDirective: c } = o;
    return c || i.displayDirective;
  }), arrowPlacement: de(() => i.arrowPlacement), handleClick(c) {
    let p = "main";
    tt(c, "arrow") && (p = "arrow"), tt(c, "extra") && (p = "extra"), i.triggerAreas.includes(p) && l && !o.disabled && l.toggleItem(v.value, n.value, c);
  } };
}, render() {
  const { collapseSlots: o, $slots: u, arrowPlacement: s, collapsed: n, mergedDisplayDirective: l, mergedClsPrefix: d, disabled: i, triggerAreas: m } = this, f = et(u.header, { collapsed: n }, () => [this.title]), v = u["header-extra"] || o["header-extra"], r = u.arrow || o.arrow;
  return S("div", { class: [`${d}-collapse-item`, `${d}-collapse-item--${s}-arrow-placement`, i && `${d}-collapse-item--disabled`, !n && `${d}-collapse-item--active`, m.map((c) => `${d}-collapse-item--trigger-area-${c}`)] }, S("div", { class: [`${d}-collapse-item__header`, !n && `${d}-collapse-item__header--active`] }, S("div", { class: `${d}-collapse-item__header-main`, onClick: this.handleClick }, s === "right" && f, S("div", { class: `${d}-collapse-item-arrow`, key: this.rtlEnabled ? 0 : 1, "data-arrow": true }, et(r, { collapsed: n }, () => [S(Ke, { clsPrefix: d }, { default: () => this.rtlEnabled ? S(Ca, null) : S(Wt, null) })])), s === "left" && f), Kt(v, { collapsed: n }, (c) => S("div", { class: `${d}-collapse-item__header-extra`, onClick: this.handleClick, "data-extra": true }, c))), S(Ta, { clsPrefix: d, displayDirective: l, show: !n }, u));
} });
function $a(o) {
  const { textColorDisabled: u } = o;
  return { iconColorDisabled: u };
}
const Ia = Yt({ name: "InputNumber", common: ea, peers: { Button: Zt, Input: Xt }, self: $a }), Pa = Ie([Q("input-number-suffix", `
 display: inline-block;
 margin-right: 10px;
 `), Q("input-number-prefix", `
 display: inline-block;
 margin-left: 10px;
 `)]);
function Ra(o) {
  return o == null || typeof o == "string" && o.trim() === "" ? null : Number(o);
}
function Da(o) {
  return o.includes(".") && (/^(-)?\d+.*(\.|0)$/.test(o) || /^-?\d*$/.test(o)) || o === "-" || o === "-0";
}
function je(o) {
  return o == null ? true : !Number.isNaN(o);
}
function rt(o, u) {
  return typeof o != "number" ? "" : u === void 0 ? String(o) : o.toFixed(u);
}
function He(o) {
  if (o === null) return null;
  if (typeof o == "number") return o;
  {
    const u = Number(o);
    return Number.isNaN(u) ? null : u;
  }
}
const it = 800, ut = 100, Oa = Object.assign(Object.assign({}, Ae.props), { autofocus: Boolean, loading: { type: Boolean, default: void 0 }, placeholder: String, defaultValue: { type: Number, default: null }, value: Number, step: { type: [Number, String], default: 1 }, min: [Number, String], max: [Number, String], size: String, disabled: { type: Boolean, default: void 0 }, validator: Function, bordered: { type: Boolean, default: void 0 }, showButton: { type: Boolean, default: true }, buttonPlacement: { type: String, default: "right" }, inputProps: Object, readonly: Boolean, clearable: Boolean, keyboard: { type: Object, default: {} }, updateValueOnInput: { type: Boolean, default: true }, round: { type: Boolean, default: void 0 }, parse: Function, format: Function, precision: Number, status: String, "onUpdate:value": [Function, Array], onUpdateValue: [Function, Array], onFocus: [Function, Array], onBlur: [Function, Array], onClear: [Function, Array], onChange: [Function, Array] }), Ze = X({ name: "InputNumber", props: Oa, slots: Object, setup(o) {
  const { mergedBorderedRef: u, mergedClsPrefixRef: s, mergedRtlRef: n } = Pe(o), l = Ae("InputNumber", "-input-number", Pa, Ia, o, s), { localeRef: d } = ta("InputNumber"), i = aa(o), { mergedSizeRef: m, mergedDisabledRef: f, mergedStatusRef: v } = i, r = C(null), c = C(null), p = C(null), k = C(o.defaultValue), w = Qe(o, "value"), b = vt(w, k), _ = C(""), h = (g) => {
    const L = String(g).split(".")[1];
    return L ? L.length : 0;
  }, y = (g) => {
    const L = [o.min, o.max, o.step, g].map((O) => O === void 0 ? 0 : h(O));
    return Math.max(...L);
  }, D = _e(() => {
    const { placeholder: g } = o;
    return g !== void 0 ? g : d.value.placeholder;
  }), x = _e(() => {
    const g = He(o.step);
    return g !== null ? g === 0 ? 1 : Math.abs(g) : 1;
  }), $ = _e(() => {
    const g = He(o.min);
    return g !== null ? g : null;
  }), N = _e(() => {
    const g = He(o.max);
    return g !== null ? g : null;
  }), J = () => {
    const { value: g } = b;
    if (je(g)) {
      const { format: L, precision: O } = o;
      L ? _.value = L(g) : g === null || O === void 0 || h(g) > O ? _.value = rt(g, void 0) : _.value = rt(g, O);
    } else _.value = String(g);
  };
  J();
  const G = (g) => {
    const { value: L } = b;
    if (g === L) {
      J();
      return;
    }
    const { "onUpdate:value": O, onUpdateValue: K, onChange: ie } = o, { nTriggerFormInput: me, nTriggerFormChange: xe } = i;
    ie && ue(ie, g), K && ue(K, g), O && ue(O, g), k.value = g, me(), xe();
  }, j = ({ offset: g, doUpdateIfValid: L, fixPrecision: O, isInputing: K }) => {
    const { value: ie } = _;
    if (K && Da(ie)) return false;
    const me = (o.parse || Ra)(ie);
    if (me === null) return L && G(null), null;
    if (je(me)) {
      const xe = h(me), { precision: Te } = o;
      if (Te !== void 0 && Te < xe && !O) return false;
      let fe = Number.parseFloat((me + g).toFixed(Te ?? y(me)));
      if (je(fe)) {
        const { value: Fe } = N, { value: qe } = $;
        if (Fe !== null && fe > Fe) {
          if (!L || K) return false;
          fe = Fe;
        }
        if (qe !== null && fe < qe) {
          if (!L || K) return false;
          fe = qe;
        }
        return o.validator && !o.validator(fe) ? false : (L && G(fe), fe);
      }
    }
    return false;
  }, ne = _e(() => j({ offset: 0, doUpdateIfValid: false, isInputing: false, fixPrecision: false }) === false), q = _e(() => {
    const { value: g } = b;
    if (o.validator && g === null) return false;
    const { value: L } = x;
    return j({ offset: -L, doUpdateIfValid: false, isInputing: false, fixPrecision: false }) !== false;
  }), W = _e(() => {
    const { value: g } = b;
    if (o.validator && g === null) return false;
    const { value: L } = x;
    return j({ offset: +L, doUpdateIfValid: false, isInputing: false, fixPrecision: false }) !== false;
  });
  function Ue(g) {
    const { onFocus: L } = o, { nTriggerFormFocus: O } = i;
    L && ue(L, g), O();
  }
  function T(g) {
    var L, O;
    if (g.target === ((L = r.value) === null || L === void 0 ? void 0 : L.wrapperElRef)) return;
    const K = j({ offset: 0, doUpdateIfValid: true, isInputing: false, fixPrecision: true });
    if (K !== false) {
      const xe = (O = r.value) === null || O === void 0 ? void 0 : O.inputElRef;
      xe && (xe.value = String(K || "")), b.value === K && J();
    } else J();
    const { onBlur: ie } = o, { nTriggerFormBlur: me } = i;
    ie && ue(ie, g), me(), sa(() => {
      J();
    });
  }
  function P(g) {
    const { onClear: L } = o;
    L && ue(L, g);
  }
  function M() {
    const { value: g } = W;
    if (!g) {
      Ve();
      return;
    }
    const { value: L } = b;
    if (L === null) o.validator || G(Ne());
    else {
      const { value: O } = x;
      j({ offset: O, doUpdateIfValid: true, isInputing: false, fixPrecision: true });
    }
  }
  function re() {
    const { value: g } = q;
    if (!g) {
      Ee();
      return;
    }
    const { value: L } = b;
    if (L === null) o.validator || G(Ne());
    else {
      const { value: O } = x;
      j({ offset: -O, doUpdateIfValid: true, isInputing: false, fixPrecision: true });
    }
  }
  const V = Ue, we = T;
  function Ne() {
    if (o.validator) return null;
    const { value: g } = $, { value: L } = N;
    return g !== null ? Math.max(0, g) : L !== null ? Math.min(0, L) : 0;
  }
  function Be(g) {
    P(g), G(null);
  }
  function ze(g) {
    var L, O, K;
    !((L = p.value) === null || L === void 0) && L.$el.contains(g.target) && g.preventDefault(), !((O = c.value) === null || O === void 0) && O.$el.contains(g.target) && g.preventDefault(), (K = r.value) === null || K === void 0 || K.activate();
  }
  let ge = null, he = null, z = null;
  function Ee() {
    z && (window.clearTimeout(z), z = null), ge && (window.clearInterval(ge), ge = null);
  }
  let $e = null;
  function Ve() {
    $e && (window.clearTimeout($e), $e = null), he && (window.clearInterval(he), he = null);
  }
  function Tt() {
    Ee(), z = window.setTimeout(() => {
      ge = window.setInterval(() => {
        re();
      }, ut);
    }, it), lt("mouseup", document, Ee, { once: true });
  }
  function Lt() {
    Ve(), $e = window.setTimeout(() => {
      he = window.setInterval(() => {
        M();
      }, ut);
    }, it), lt("mouseup", document, Ve, { once: true });
  }
  const Nt = () => {
    he || M();
  }, $t = () => {
    ge || re();
  };
  function It(g) {
    var L, O;
    if (g.key === "Enter") {
      if (g.target === ((L = r.value) === null || L === void 0 ? void 0 : L.wrapperElRef)) return;
      j({ offset: 0, doUpdateIfValid: true, isInputing: false, fixPrecision: true }) !== false && ((O = r.value) === null || O === void 0 || O.deactivate());
    } else if (g.key === "ArrowUp") {
      if (!W.value || o.keyboard.ArrowUp === false) return;
      g.preventDefault(), j({ offset: 0, doUpdateIfValid: true, isInputing: false, fixPrecision: true }) !== false && M();
    } else if (g.key === "ArrowDown") {
      if (!q.value || o.keyboard.ArrowDown === false) return;
      g.preventDefault(), j({ offset: 0, doUpdateIfValid: true, isInputing: false, fixPrecision: true }) !== false && re();
    }
  }
  function Pt(g) {
    _.value = g, o.updateValueOnInput && !o.format && !o.parse && o.precision === void 0 && j({ offset: 0, doUpdateIfValid: true, isInputing: true, fixPrecision: false });
  }
  De(b, () => {
    J();
  });
  const Rt = { focus: () => {
    var g;
    return (g = r.value) === null || g === void 0 ? void 0 : g.focus();
  }, blur: () => {
    var g;
    return (g = r.value) === null || g === void 0 ? void 0 : g.blur();
  }, select: () => {
    var g;
    return (g = r.value) === null || g === void 0 ? void 0 : g.select();
  } }, Dt = Re("InputNumber", n, s);
  return Object.assign(Object.assign({}, Rt), { rtlEnabled: Dt, inputInstRef: r, minusButtonInstRef: c, addButtonInstRef: p, mergedClsPrefix: s, mergedBordered: u, uncontrolledValue: k, mergedValue: b, mergedPlaceholder: D, displayedValueInvalid: ne, mergedSize: m, mergedDisabled: f, displayedValue: _, addable: W, minusable: q, mergedStatus: v, handleFocus: V, handleBlur: we, handleClear: Be, handleMouseDown: ze, handleAddClick: Nt, handleMinusClick: $t, handleAddMousedown: Lt, handleMinusMousedown: Tt, handleKeyDown: It, handleUpdateDisplayedValue: Pt, mergedTheme: l, inputThemeOverrides: { paddingSmall: "0 8px 0 10px", paddingMedium: "0 8px 0 12px", paddingLarge: "0 8px 0 14px" }, buttonThemeOverrides: de(() => {
    const { self: { iconColorDisabled: g } } = l.value, [L, O, K, ie] = na(g);
    return { textColorTextDisabled: `rgb(${L}, ${O}, ${K})`, opacityDisabled: `${ie}` };
  }) });
}, render() {
  const { mergedClsPrefix: o, $slots: u } = this, s = () => S(at, { text: true, disabled: !this.minusable || this.mergedDisabled || this.readonly, focusable: false, theme: this.mergedTheme.peers.Button, themeOverrides: this.mergedTheme.peerOverrides.Button, builtinThemeOverrides: this.buttonThemeOverrides, onClick: this.handleMinusClick, onMousedown: this.handleMinusMousedown, ref: "minusButtonInstRef" }, { icon: () => nt(u["minus-icon"], () => [S(Ke, { clsPrefix: o }, { default: () => S(Aa, null) })]) }), n = () => S(at, { text: true, disabled: !this.addable || this.mergedDisabled || this.readonly, focusable: false, theme: this.mergedTheme.peers.Button, themeOverrides: this.mergedTheme.peerOverrides.Button, builtinThemeOverrides: this.buttonThemeOverrides, onClick: this.handleAddClick, onMousedown: this.handleAddMousedown, ref: "addButtonInstRef" }, { icon: () => nt(u["add-icon"], () => [S(Ke, { clsPrefix: o }, { default: () => S(la, null) })]) });
  return S("div", { class: [`${o}-input-number`, this.rtlEnabled && `${o}-input-number--rtl`] }, S(le, { ref: "inputInstRef", autofocus: this.autofocus, status: this.mergedStatus, bordered: this.mergedBordered, loading: this.loading, value: this.displayedValue, onUpdateValue: this.handleUpdateDisplayedValue, theme: this.mergedTheme.peers.Input, themeOverrides: this.mergedTheme.peerOverrides.Input, builtinThemeOverrides: this.inputThemeOverrides, size: this.mergedSize, placeholder: this.mergedPlaceholder, disabled: this.mergedDisabled, readonly: this.readonly, round: this.round, textDecoration: this.displayedValueInvalid ? "line-through" : void 0, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeydown: this.handleKeyDown, onMousedown: this.handleMouseDown, onClear: this.handleClear, clearable: this.clearable, inputProps: this.inputProps, internalLoadingBeforeSuffix: true }, { prefix: () => {
    var l;
    return this.showButton && this.buttonPlacement === "both" ? [s(), ke(u.prefix, (d) => d ? S("span", { class: `${o}-input-number-prefix` }, d) : null)] : (l = u.prefix) === null || l === void 0 ? void 0 : l.call(u);
  }, suffix: () => {
    var l;
    return this.showButton ? [ke(u.suffix, (d) => d ? S("span", { class: `${o}-input-number-suffix` }, d) : null), this.buttonPlacement === "right" ? s() : null, n()] : (l = u.suffix) === null || l === void 0 ? void 0 : l.call(u);
  } }));
} }), Ba = Q("statistic", [H("label", `
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `), Q("statistic-value", `
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `, [H("prefix", `
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `, [Q("icon", { verticalAlign: "-0.125em" })]), H("content", `
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `), H("suffix", `
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `, [Q("icon", { verticalAlign: "-0.125em" })])])]), za = Object.assign(Object.assign({}, Ae.props), { tabularNums: Boolean, label: String, value: [String, Number] }), Ea = X({ name: "Statistic", props: za, slots: Object, setup(o) {
  const { mergedClsPrefixRef: u, inlineThemeDisabled: s, mergedRtlRef: n } = Pe(o), l = Ae("Statistic", "-statistic", Ba, oa, o, u), d = Re("Statistic", n, u), i = de(() => {
    const { self: { labelFontWeight: f, valueFontSize: v, valueFontWeight: r, valuePrefixTextColor: c, labelTextColor: p, valueSuffixTextColor: k, valueTextColor: w, labelFontSize: b }, common: { cubicBezierEaseInOut: _ } } = l.value;
    return { "--n-bezier": _, "--n-label-font-size": b, "--n-label-font-weight": f, "--n-label-text-color": p, "--n-value-font-weight": r, "--n-value-font-size": v, "--n-value-prefix-text-color": c, "--n-value-suffix-text-color": k, "--n-value-text-color": w };
  }), m = s ? _t("statistic", void 0, i, o) : void 0;
  return { rtlEnabled: d, mergedClsPrefix: u, cssVars: s ? void 0 : i, themeClass: m == null ? void 0 : m.themeClass, onRender: m == null ? void 0 : m.onRender };
}, render() {
  var o;
  const { mergedClsPrefix: u, $slots: { default: s, label: n, prefix: l, suffix: d } } = this;
  return (o = this.onRender) === null || o === void 0 || o.call(this), S("div", { class: [`${u}-statistic`, this.themeClass, this.rtlEnabled && `${u}-statistic--rtl`], style: this.cssVars }, ke(n, (i) => S("div", { class: `${u}-statistic__label` }, this.label || i)), S("div", { class: `${u}-statistic-value`, style: { fontVariantNumeric: this.tabularNums ? "tabular-nums" : "" } }, ke(l, (i) => i && S("span", { class: `${u}-statistic-value__prefix` }, i)), this.value !== void 0 ? S("span", { class: `${u}-statistic-value__content` }, this.value) : ke(s, (i) => i && S("span", { class: `${u}-statistic-value__content` }, i)), ke(d, (i) => i && S("span", { class: `${u}-statistic-value__suffix` }, i))));
} }), Va = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, We = X({ name: "CleaningServicesFilled", render: function(u, s) {
  return R(), F("svg", Va, s[0] || (s[0] = [E("path", { d: "M16 11h-1V3c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v8H8c-2.76 0-5 2.24-5 5v7h18v-7c0-2.76-2.24-5-5-5zm3 10h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H9v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H5v-5c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3v5z", fill: "currentColor" }, null, -1)]));
} }), Fa = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, qa = X({ name: "SendOutlined", render: function(u, s) {
  return R(), F("svg", Fa, s[0] || (s[0] = [E("path", { d: "M4.01 6.03l7.51 3.22l-7.52-1l.01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2l-15 2l.01 7L23 12L2.01 3z", fill: "currentColor" }, null, -1)]));
} }), ja = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 576 512" }, Ha = X({ name: "MailBulk", render: function(u, s) {
  return R(), F("svg", ja, s[0] || (s[0] = [E("path", { d: "M160 448c-25.6 0-51.2-22.4-64-32c-64-44.8-83.2-60.8-96-70.4V480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V345.6c-12.8 9.6-32 25.6-96 70.4c-12.8 9.6-38.4 32-64 32zm128-192H32c-17.67 0-32 14.33-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4c9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288c0-17.67-14.33-32-32-32zm256-96H224c-17.67 0-32 14.33-32 32v32h96c33.21 0 60.59 25.42 63.71 57.82l.29-.22V416h192c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zm-32 128h-64v-64h64v64zm-352-96c0-35.29 28.71-64 64-64h224V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v192h96v-32z", fill: "currentColor" }, null, -1)]));
} }), Wa = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 640 512" }, dt = X({ name: "UserCheck", render: function(u, s) {
  return R(), F("svg", Wa, s[0] || (s[0] = [E("path", { d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104l-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z", fill: "currentColor" }, null, -1)]));
} }), Ka = { style: { overflow: "auto" } }, Ja = { style: { display: "inline-block" } }, Qa = { __name: "SenderAccess", setup(o) {
  const { loading: u } = se(), s = te(), { t: n } = ee({ messages: { en: { address: "Address", success: "Success", is_enabled: "Is Enabled", enable: "Enable", disable: "Disable", modify: "Modify", delete: "Delete", deleteTip: "Are you sure to delete this?", created_at: "Created At", action: "Action", itemCount: "itemCount", modalTip: "Please input the sender balance", balance: "Balance", query: "Query", ok: "OK" }, zh: { address: "\u5730\u5740", success: "\u6210\u529F", is_enabled: "\u662F\u5426\u542F\u7528", enable: "\u542F\u7528", disable: "\u7981\u7528", modify: "\u4FEE\u6539", delete: "\u5220\u9664", deleteTip: "\u786E\u5B9A\u5220\u9664\u5417\uFF1F", created_at: "\u521B\u5EFA\u65F6\u95F4", action: "\u64CD\u4F5C", itemCount: "\u603B\u6570", modalTip: "\u8BF7\u8F93\u5165\u53D1\u4EF6\u989D\u5EA6", balance: "\u4F59\u989D", query: "\u67E5\u8BE2", ok: "\u786E\u5B9A" } } }), l = C([]), d = C(0), i = C(1), m = C(20), f = C({}), v = C(false), r = C(0), c = C(false), p = C(""), k = async () => {
    try {
      await I.fetch("/admin/address_sender", { method: "POST", body: JSON.stringify({ address: f.value.address, address_id: f.value.id, balance: r.value, enabled: c.value ? 1 : 0 }) }), v.value = false, s.success(n("success")), await w();
    } catch (_) {
      s.error(_.message || "error");
    }
  }, w = async () => {
    try {
      p.value = p.value.trim();
      const { results: _, count: h } = await I.fetch(`/admin/address_sender?limit=${m.value}&offset=${(i.value - 1) * m.value}` + (p.value ? `&address=${p.value}` : ""));
      l.value = _, h > 0 && (d.value = h);
    } catch (_) {
      console.log(_), s.error(_.message || "error");
    }
  }, b = [{ title: "ID", key: "id" }, { title: n("address"), key: "address" }, { title: n("created_at"), key: "created_at" }, { title: n("balance"), key: "balance" }, { title: n("is_enabled"), key: "enabled", render(_) {
    return S("div", [S("span", _.enabled ? n("enable") : n("disable"))]);
  } }, { title: n("action"), key: "actions", render(_) {
    return S("div", [S(B, { type: "success", tertiary: true, onClick: () => {
      v.value = true, f.value = _, c.value = !!_.enabled, r.value = _.balance;
    } }, { default: () => n("modify") }), S(bt, { onPositiveClick: async () => {
      await I.fetch(`/admin/address_sender/${_.id}`, { method: "DELETE" }), await w();
    } }, { trigger: () => S(B, { tertiary: true, type: "error" }, { default: () => n("delete") }), default: () => n("deleteTip") })]);
  } }];
  return De([i, m], async () => {
    await w();
  }), ae(async () => {
    await w();
  }), (_, h) => {
    const y = Se, D = gt, x = Ze, $ = B, N = Me, J = le, G = ce, j = Ge, ne = Ye;
    return R(), F("div", null, [e(N, { show: v.value, "onUpdate:show": h[3] || (h[3] = (q) => v.value = q), preset: "dialog" }, { action: a(() => [e($, { loading: t(u), onClick: h[2] || (h[2] = (q) => k()), size: "small", tertiary: "", type: "primary" }, { default: a(() => [U(A(t(n)("ok")), 1)]), _: 1 }, 8, ["loading"])]), default: a(() => [E("p", null, A(f.value.address), 1), E("p", null, A(t(n)("modalTip")), 1), e(D, { "show-label": false }, { default: a(() => [e(y, { checked: c.value, "onUpdate:checked": h[0] || (h[0] = (q) => c.value = q) }, { default: a(() => [U(A(t(n)("enable")), 1)]), _: 1 }, 8, ["checked"])]), _: 1 }), e(D, { "show-label": false }, { default: a(() => [e(x, { value: r.value, "onUpdate:value": h[1] || (h[1] = (q) => r.value = q), min: 0, max: 1e3 }, null, 8, ["value"])]), _: 1 })]), _: 1 }, 8, ["show"]), e(G, null, { default: a(() => [e(J, { value: p.value, "onUpdate:value": h[4] || (h[4] = (q) => p.value = q), onKeydown: Ce(w, ["enter"]) }, null, 8, ["value"]), e($, { onClick: w, type: "primary", tertiary: "" }, { default: a(() => [U(A(t(n)("query")), 1)]), _: 1 })]), _: 1 }), E("div", Ka, [E("div", Ja, [e(j, { page: i.value, "onUpdate:page": h[5] || (h[5] = (q) => i.value = q), "page-size": m.value, "onUpdate:pageSize": h[6] || (h[6] = (q) => m.value = q), "item-count": d.value, "page-sizes": [20, 50, 100], "show-size-picker": "" }, { prefix: a(({ itemCount: q }) => [U(A(t(n)("itemCount")) + ": " + A(q), 1)]), _: 1 }, 8, ["page", "page-size", "item-count"])]), e(ne, { columns: b, data: l.value, bordered: false, embedded: "" }, null, 8, ["data"])])]);
  };
} }, Ga = Z(Qa, [["__scopeId", "data-v-bd8929db"]]), Ya = { __name: "Statistics", setup(o) {
  const u = te(), { t: s } = ee({ messages: { en: { userCount: "User Count", addressCount: "Address Count", activeAddressCount7days: "7 days Active Address Count", activeAddressCount30days: "30 days Active Address Count", mailCount: "Mail Count", sendMailCount: "Send Mail Count" }, zh: { userCount: "\u7528\u6237\u603B\u6570", addressCount: "\u90AE\u7BB1\u5730\u5740\u603B\u6570", activeAddressCount7days: "7\u5929\u6D3B\u8DC3\u90AE\u7BB1\u5730\u5740\u603B\u6570", activeAddressCount30days: "30\u5929\u6D3B\u8DC3\u90AE\u7BB1\u5730\u5740\u603B\u6570", mailCount: "\u90AE\u4EF6\u603B\u6570", sendMailCount: "\u53D1\u9001\u90AE\u4EF6\u603B\u6570" } } }), n = C({ addressCount: 0, userCount: 0, mailCount: 0, activeAddressCount7days: 0, activeAddressCount30days: 0, sendMailCount: 0 }), l = async () => {
    try {
      const { userCount: d, mailCount: i, sendMailCount: m, addressCount: f, activeAddressCount7days: v, activeAddressCount30days: r } = await I.fetch("/admin/statistics");
      n.value.mailCount = i || 0, n.value.sendMailCount = m || 0, n.value.userCount = d || 0, n.value.addressCount = f || 0, n.value.activeAddressCount7days = v || 0, n.value.activeAddressCount30days = r || 0;
    } catch (d) {
      console.log(d), u.error(d.message || "error");
    }
  };
  return ae(async () => {
    await l();
  }), (d, i) => {
    const m = ht, f = Ea, v = ia, r = ra, c = oe;
    return R(), F("div", null, [e(c, { bordered: false, embedded: "" }, { default: a(() => [e(r, null, { default: a(() => [e(v, { span: 8 }, { default: a(() => [e(f, { label: t(s)("addressCount"), value: n.value.addressCount }, { prefix: a(() => [e(m, { component: t(st) }, null, 8, ["component"])]), _: 1 }, 8, ["label", "value"])]), _: 1 }), e(v, { span: 8 }, { default: a(() => [e(f, { label: t(s)("activeAddressCount7days"), value: n.value.activeAddressCount7days }, { prefix: a(() => [e(m, { component: t(dt) }, null, 8, ["component"])]), _: 1 }, 8, ["label", "value"])]), _: 1 }), e(v, { span: 8 }, { default: a(() => [e(f, { label: t(s)("activeAddressCount30days"), value: n.value.activeAddressCount30days }, { prefix: a(() => [e(m, { component: t(dt) }, null, 8, ["component"])]), _: 1 }, 8, ["label", "value"])]), _: 1 })]), _: 1 })]), _: 1 }), e(c, { bordered: false, embedded: "" }, { default: a(() => [e(r, null, { default: a(() => [e(v, { span: 8 }, { default: a(() => [e(f, { label: t(s)("userCount"), value: n.value.userCount }, { prefix: a(() => [e(m, { component: t(st) }, null, 8, ["component"])]), _: 1 }, 8, ["label", "value"])]), _: 1 }), e(v, { span: 8 }, { default: a(() => [e(f, { label: t(s)("mailCount"), value: n.value.mailCount }, { prefix: a(() => [e(m, { component: t(Ha) }, null, 8, ["component"])]), _: 1 }, 8, ["label", "value"])]), _: 1 }), e(v, { span: 8 }, { default: a(() => [e(f, { label: t(s)("sendMailCount"), value: n.value.sendMailCount }, { prefix: a(() => [e(m, { component: t(qa) }, null, 8, ["component"])]), _: 1 }, 8, ["label", "value"])]), _: 1 })]), _: 1 })]), _: 1 })]);
  };
} }, Xa = Z(Ya, [["__scopeId", "data-v-b73833c7"]]), Za = { __name: "SendBox", setup(o) {
  const { adminSendBoxTabAddress: u } = se(), { t: s } = ee({ messages: { en: { query: "Query", queryTip: "Please input address to query, leave blank to query all" }, zh: { query: "\u67E5\u8BE2", queryTip: "\u8BF7\u8F93\u5165\u5730\u5740\u67E5\u8BE2, \u7559\u7A7A\u5219\u67E5\u8BE2\u6240\u6709" } } }), n = async (d, i) => (u.value = u.value.trim(), await I.fetch(`/admin/sendbox?limit=${d}&offset=${i}` + (u.value ? `&address=${u.value}` : ""))), l = async (d) => {
    await I.fetch(`/admin/sendbox/${d}`, { method: "DELETE" });
  };
  return (d, i) => {
    const m = le, f = B, v = ce;
    return R(), F("div", null, [e(v, null, { default: a(() => [e(m, { value: t(u), "onUpdate:value": i[0] || (i[0] = (r) => Xe(u) ? u.value = r : null), placeholder: t(s)("queryTip"), onKeydown: Ce(n, ["enter"]) }, null, 8, ["value", "placeholder"]), e(f, { onClick: n, type: "primary", tertiary: "" }, { default: a(() => [U(A(t(s)("query")), 1)]), _: 1 })]), _: 1 }), e(ua, { style: { "margin-top": "10px" }, enableUserDeleteEmail: true, deleteMail: l, fetchMailData: n, showEMailFrom: true })]);
  };
} }, en = Z(Za, [["__scopeId", "data-v-fbae4450"]]), tn = { style: { "margin-top": "10px" } }, an = { style: { overflow: "auto" } }, nn = { style: { display: "inline-block" } }, ln = { __name: "Account", setup(o) {
  const { loading: u, adminTab: s, adminMailTabAddress: n, adminSendBoxTabAddress: l } = se(), d = te(), { t: i } = ee({ messages: { en: { name: "Name", created_at: "Created At", updated_at: "Update At", mail_count: "Mail Count", send_count: "Send Count", showCredential: "Show Mail Address Credential", addressCredential: "Mail Address Credential", addressCredentialTip: "Please copy the Mail Address Credential and you can use it to login to your email account.", delete: "Delete", deleteTip: "Are you sure to delete this email?", delteAccount: "Delete Account", viewMails: "View Mails", viewSendBox: "View SendBox", itemCount: "itemCount", query: "Query", addressQueryTip: "Leave blank to query all addresses", actions: "Actions" }, zh: { name: "\u540D\u79F0", created_at: "\u521B\u5EFA\u65F6\u95F4", updated_at: "\u66F4\u65B0\u65F6\u95F4", mail_count: "\u90AE\u4EF6\u6570\u91CF", send_count: "\u53D1\u9001\u6570\u91CF", showCredential: "\u67E5\u770B\u90AE\u7BB1\u5730\u5740\u51ED\u8BC1", addressCredential: "\u90AE\u7BB1\u5730\u5740\u51ED\u8BC1", addressCredentialTip: "\u8BF7\u590D\u5236\u90AE\u7BB1\u5730\u5740\u51ED\u8BC1\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u5B83\u767B\u5F55\u4F60\u7684\u90AE\u7BB1\u3002", delete: "\u5220\u9664", deleteTip: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u90AE\u7BB1\u5417\uFF1F", delteAccount: "\u5220\u9664\u90AE\u7BB1", viewMails: "\u67E5\u770B\u90AE\u4EF6", viewSendBox: "\u67E5\u770B\u53D1\u4EF6\u7BB1", itemCount: "\u603B\u6570", query: "\u67E5\u8BE2", addressQueryTip: "\u7559\u7A7A\u67E5\u8BE2\u6240\u6709\u5730\u5740", actions: "\u64CD\u4F5C" } } }), m = C(false), f = C(""), v = C(0), r = C(""), c = C([]), p = C(0), k = C(1), w = C(20), b = C(false), _ = async (x) => {
    try {
      f.value = await I.adminShowAddressCredential(x), m.value = true;
    } catch ($) {
      d.error($.message || "error"), m.value = false, f.value = "";
    }
  }, h = async () => {
    try {
      await I.adminDeleteAddress(v.value), d.success("success"), await y();
    } catch (x) {
      d.error(x.message || "error");
    } finally {
      b.value = false;
    }
  }, y = async () => {
    try {
      r.value = r.value.trim();
      const { results: x, count: $ } = await I.fetch(`/admin/address?limit=${w.value}&offset=${(k.value - 1) * w.value}` + (r.value ? `&query=${r.value}` : ""));
      c.value = x, $ > 0 && (p.value = $);
    } catch (x) {
      console.log(x), d.error(x.message || "error");
    }
  }, D = [{ title: "ID", key: "id" }, { title: i("name"), key: "name" }, { title: i("created_at"), key: "created_at" }, { title: i("updated_at"), key: "updated_at" }, { title: i("mail_count"), key: "mail_count", render(x) {
    return S(B, { text: true, onClick: () => {
      x.mail_count > 0 && (n.value = x.name, s.value = "mails");
    } }, { icon: () => S(Je, { value: x.mail_count, "show-zero": true, max: 99, type: "success" }), default: () => x.mail_count > 0 ? i("viewMails") : "" });
  } }, { title: i("send_count"), key: "send_count", render(x) {
    return S(B, { text: true, onClick: () => {
      x.send_count > 0 && (l.value = x.name, s.value = "sendBox");
    } }, { icon: () => S(Je, { value: x.send_count, "show-zero": true, max: 99, type: "success" }), default: () => x.send_count > 0 ? i("viewSendBox") : "" });
  } }, { title: i("actions"), key: "actions", render(x) {
    return S("div", [S(yt, { mode: "horizontal", options: [{ label: i("actions"), icon: () => S(wt), key: "action", children: [{ label: () => S(B, { text: true, onClick: () => _(x.id) }, { default: () => i("showCredential") }) }, { label: () => S(B, { text: true, onClick: () => {
      n.value = x.name, s.value = "mails";
    } }, { default: () => i("viewMails") }) }, { label: () => S(B, { text: true, onClick: () => {
      l.value = x.name, s.value = "sendBox";
    } }, { default: () => i("viewSendBox") }) }, { label: () => S(B, { text: true, onClick: () => {
      v.value = x.id, b.value = true;
    } }, { default: () => i("delete") }) }] }] })]);
  } }];
  return De([k, w], async () => {
    await y();
  }), ae(async () => {
    await y();
  }), (x, $) => {
    const N = oe, J = Me, G = le, j = ce, ne = Ge, q = Ye;
    return R(), F("div", tn, [e(J, { show: m.value, "onUpdate:show": $[0] || ($[0] = (W) => m.value = W), preset: "dialog", title: "Dialog" }, { header: a(() => [E("div", null, A(t(i)("addressCredential")), 1)]), action: a(() => $[5] || ($[5] = [])), default: a(() => [E("span", null, [E("p", null, A(t(i)("addressCredentialTip")), 1)]), e(N, { bordered: false, embedded: "" }, { default: a(() => [E("b", null, A(f.value), 1)]), _: 1 })]), _: 1 }, 8, ["show"]), e(J, { show: b.value, "onUpdate:show": $[1] || ($[1] = (W) => b.value = W), preset: "dialog", title: t(i)("delteAccount") }, { action: a(() => [e(t(B), { loading: t(u), onClick: h, size: "small", tertiary: "", type: "error" }, { default: a(() => [U(A(t(i)("delteAccount")), 1)]), _: 1 }, 8, ["loading"])]), default: a(() => [E("p", null, A(t(i)("deleteTip")), 1)]), _: 1 }, 8, ["show", "title"]), e(j, null, { default: a(() => [e(G, { value: r.value, "onUpdate:value": $[2] || ($[2] = (W) => r.value = W), clearable: "", placeholder: t(i)("addressQueryTip"), onKeydown: Ce(y, ["enter"]) }, null, 8, ["value", "placeholder"]), e(t(B), { onClick: y, type: "primary", tertiary: "" }, { default: a(() => [U(A(t(i)("query")), 1)]), _: 1 })]), _: 1 }), E("div", an, [E("div", nn, [e(ne, { page: k.value, "onUpdate:page": $[3] || ($[3] = (W) => k.value = W), "page-size": w.value, "onUpdate:pageSize": $[4] || ($[4] = (W) => w.value = W), "item-count": p.value, "page-sizes": [20, 50, 100], "show-size-picker": "" }, { prefix: a(({ itemCount: W }) => [U(A(t(i)("itemCount")) + ": " + A(W), 1)]), _: 1 }, 8, ["page", "page-size", "item-count"])]), e(q, { columns: D, data: c.value, bordered: false, embedded: "" }, null, 8, ["data"])])]);
  };
} }, sn = Z(ln, [["__scopeId", "data-v-395bf376"]]), on = { class: "center" }, rn = { __name: "CreateAccount", setup(o) {
  const { loading: u, openSettings: s } = se(), n = te(), { t: l } = ee({ messages: { en: { address: "Address", enablePrefix: "If enable Prefix", creatNewEmail: "Get New Email", fillInAllFields: "Please fill in all fields", successTip: "Success Created", addressCredential: "Mail Address Credential" }, zh: { address: "\u5730\u5740", enablePrefix: "\u662F\u5426\u542F\u7528\u524D\u7F00", creatNewEmail: "\u521B\u5EFA\u65B0\u90AE\u7BB1", fillInAllFields: "\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F", successTip: "\u521B\u5EFA\u6210\u529F", addressCredential: "\u90AE\u7BB1\u5730\u5740\u51ED\u8BC1" } } }), d = C(true), i = C(""), m = C(""), f = C(false), v = C(""), r = async () => {
    if (!i.value || !m.value) {
      n.error(l("fillInAllFields"));
      return;
    }
    try {
      const c = await I.fetch("/admin/new_address", { method: "POST", body: JSON.stringify({ enablePrefix: d.value, name: i.value, domain: m.value }) });
      v.value = c.jwt, n.success(l("successTip")), f.value = true;
    } catch (c) {
      n.error(c.message || "error");
    }
  };
  return ae(async () => {
    var _a2, _b;
    s.prefix && (d.value = true), m.value = ((_b = (_a2 = s.value.domains) == null ? void 0 : _a2[0]) == null ? void 0 : _b.value) || "";
  }), (c, p) => {
    const k = oe, w = Me, b = Se, _ = be, h = da, y = le, D = ye, x = ce, $ = B;
    return R(), F("div", on, [e(w, { show: f.value, "onUpdate:show": p[0] || (p[0] = (N) => f.value = N), preset: "dialog", title: t(l)("addressCredential") }, { default: a(() => [E("p", null, A(t(l)("addressCredential")), 1), e(k, { bordered: false, embedded: "" }, { default: a(() => [E("b", null, A(v.value), 1)]), _: 1 })]), _: 1 }, 8, ["show", "title"]), e(k, { bordered: false, embedded: "", style: { "max-width": "600px" } }, { default: a(() => [t(s).prefix ? (R(), Y(_, { key: 0, label: t(l)("enablePrefix") }, { default: a(() => [e(b, { checked: d.value, "onUpdate:checked": p[1] || (p[1] = (N) => d.value = N) }, null, 8, ["checked"])]), _: 1 }, 8, ["label"])) : pe("", true), e(_, { label: t(l)("address") }, { default: a(() => [e(x, null, { default: a(() => [d.value && t(s).prefix ? (R(), Y(h, { key: 0 }, { default: a(() => [U(A(t(s).prefix), 1)]), _: 1 })) : pe("", true), e(y, { value: i.value, "onUpdate:value": p[2] || (p[2] = (N) => i.value = N) }, null, 8, ["value"]), e(h, null, { default: a(() => p[4] || (p[4] = [U("@")])), _: 1 }), e(D, { value: m.value, "onUpdate:value": p[3] || (p[3] = (N) => m.value = N), "consistent-menu-width": false, options: t(s).domains }, null, 8, ["value", "options"])]), _: 1 })]), _: 1 }, 8, ["label"]), e($, { onClick: r, type: "primary", block: "", loading: t(u) }, { default: a(() => [U(A(t(l)("creatNewEmail")), 1)]), _: 1 }, 8, ["loading"])]), _: 1 })]);
  };
} }, un = Z(rn, [["__scopeId", "data-v-e2776dee"]]), dn = { class: "center" }, cn = { __name: "AccountSettings", setup(o) {
  const { loading: u } = se(), s = te(), { t: n } = ee({ messages: { en: { tip: "You can manually input the following multiple select input and enter", save: "Save", successTip: "Save Success", address_block_list: "Address Block Keywords for Users(Admin can skip)", address_block_list_placeholder: "Please enter the keywords you want to block", send_address_block_list: "Address Block Keywords for send email", noLimitSendAddressList: "No Balance Limit Send Address List", verified_address_list: "Verified Address List(Can send email by cf internal api)", fromBlockList: "Block Keywords for receive email" }, zh: { tip: "\u60A8\u53EF\u4EE5\u624B\u52A8\u8F93\u5165\u4EE5\u4E0B\u591A\u9009\u8F93\u5165\u6846, \u56DE\u8F66\u589E\u52A0", save: "\u4FDD\u5B58", successTip: "\u4FDD\u5B58\u6210\u529F", address_block_list: "\u90AE\u4EF6\u5730\u5740\u5C4F\u853D\u5173\u952E\u8BCD(\u7BA1\u7406\u5458\u53EF\u8DF3\u8FC7\u68C0\u67E5)", address_block_list_placeholder: "\u8BF7\u8F93\u5165\u60A8\u60F3\u8981\u5C4F\u853D\u7684\u5173\u952E\u8BCD", send_address_block_list: "\u53D1\u9001\u90AE\u4EF6\u5730\u5740\u5C4F\u853D\u5173\u952E\u8BCD", noLimitSendAddressList: "\u65E0\u4F59\u989D\u9650\u5236\u53D1\u9001\u5730\u5740\u5217\u8868", verified_address_list: "\u5DF2\u9A8C\u8BC1\u5730\u5740\u5217\u8868(\u53EF\u901A\u8FC7 cf \u5185\u90E8 api \u53D1\u9001\u90AE\u4EF6)", fromBlockList: "\u63A5\u6536\u90AE\u4EF6\u5730\u5740\u5C4F\u853D\u5173\u952E\u8BCD" } } }), l = C([]), d = C([]), i = C([]), m = C([]), f = C([]), v = async () => {
    try {
      const c = await I.fetch("/admin/account_settings");
      l.value = c.blockList || [], d.value = c.sendBlockList || [], m.value = c.verifiedAddressList || [], f.value = c.fromBlockList || [], i.value = c.noLimitSendAddressList || [];
    } catch (c) {
      s.error(c.message || "error");
    }
  }, r = async () => {
    try {
      await I.fetch("/admin/account_settings", { method: "POST", body: JSON.stringify({ blockList: l.value || [], sendBlockList: d.value || [], verifiedAddressList: m.value || [], fromBlockList: f.value || [], noLimitSendAddressList: i.value || [] }) }), s.success(n("successTip"));
    } catch (c) {
      s.error(c.message || "error");
    }
  };
  return ae(async () => {
    await v();
  }), (c, p) => {
    const k = Oe, w = ye, b = be, _ = B, h = oe;
    return R(), F("div", dn, [e(h, { bordered: false, embedded: "", style: { "max-width": "600px" } }, { default: a(() => [e(k, { "show-icon": false, type: "warning", style: { "margin-bottom": "10px" } }, { default: a(() => [U(A(t(n)("tip")), 1)]), _: 1 }), e(b, { label: t(n)("address_block_list") }, { default: a(() => [e(w, { value: l.value, "onUpdate:value": p[0] || (p[0] = (y) => l.value = y), filterable: "", multiple: "", tag: "", placeholder: t(n)("address_block_list_placeholder") }, null, 8, ["value", "placeholder"])]), _: 1 }, 8, ["label"]), e(b, { label: t(n)("send_address_block_list") }, { default: a(() => [e(w, { value: d.value, "onUpdate:value": p[1] || (p[1] = (y) => d.value = y), filterable: "", multiple: "", tag: "", placeholder: t(n)("address_block_list_placeholder") }, null, 8, ["value", "placeholder"])]), _: 1 }, 8, ["label"]), e(b, { label: t(n)("noLimitSendAddressList") }, { default: a(() => [e(w, { value: i.value, "onUpdate:value": p[2] || (p[2] = (y) => i.value = y), filterable: "", multiple: "", tag: "", placeholder: t(n)("noLimitSendAddressList") }, null, 8, ["value", "placeholder"])]), _: 1 }, 8, ["label"]), e(b, { label: t(n)("verified_address_list") }, { default: a(() => [e(w, { value: m.value, "onUpdate:value": p[3] || (p[3] = (y) => m.value = y), filterable: "", multiple: "", tag: "", placeholder: t(n)("verified_address_list") }, null, 8, ["value", "placeholder"])]), _: 1 }, 8, ["label"]), e(b, { label: t(n)("fromBlockList") }, { default: a(() => [e(w, { value: f.value, "onUpdate:value": p[4] || (p[4] = (y) => f.value = y), filterable: "", multiple: "", tag: "", placeholder: t(n)("fromBlockList") }, null, 8, ["value", "placeholder"])]), _: 1 }, 8, ["label"]), e(_, { onClick: r, type: "primary", block: "", loading: t(u) }, { default: a(() => [U(A(t(n)("save")), 1)]), _: 1 }, 8, ["loading"])]), _: 1 })]);
  };
} }, ct = Z(cn, [["__scopeId", "data-v-96d55c19"]]), mn = { style: { "margin-top": "10px" } }, pn = { style: { overflow: "auto" } }, fn = { style: { display: "inline-block" } }, vn = { __name: "UserManagement", setup(o) {
  const { loading: u, openSettings: s } = se(), n = te(), { t: l } = ee({ messages: { en: { success: "Success", user_email: "User Email", role: "Role", address_count: "Address Count", created_at: "Created At", actions: "Actions", query: "Query", itemCount: "itemCount", deleteUser: "Delete User", delete: "Delete", deleteUserTip: "Are you sure you want to delete this user?", resetPassword: "Reset Password", pleaseInput: "Please input complete information", createUser: "Create User", email: "Email", password: "Password", changeRole: "Change Role", prefix: "Prefix", domains: "Domains", roleDonotExist: "Current Role does not exist" }, zh: { success: "\u6210\u529F", user_email: "\u7528\u6237\u90AE\u7BB1", role: "\u89D2\u8272", address_count: "\u5730\u5740\u6570\u91CF", created_at: "\u521B\u5EFA\u65F6\u95F4", actions: "\u64CD\u4F5C", query: "\u67E5\u8BE2", itemCount: "\u603B\u6570", deleteUser: "\u5220\u9664\u7528\u6237", delete: "\u5220\u9664", deleteUserTip: "\u786E\u5B9A\u8981\u5220\u9664\u6B64\u7528\u6237\u5417\uFF1F", resetPassword: "\u91CD\u7F6E\u5BC6\u7801", pleaseInput: "\u8BF7\u8F93\u5165\u5B8C\u6574\u4FE1\u606F", createUser: "\u521B\u5EFA\u7528\u6237", email: "\u90AE\u7BB1", password: "\u5BC6\u7801", changeRole: "\u66F4\u6539\u89D2\u8272", prefix: "\u524D\u7F00", domains: "\u57DF\u540D", roleDonotExist: "\u5F53\u524D\u89D2\u8272\u4E0D\u5B58\u5728" } } }), d = C([]), i = C(0), m = C(1), f = C(20), v = C(""), r = C(false), c = C(""), p = C(false), k = C(0), w = C(false), b = C({ email: "", password: "" }), _ = C(false), h = C([]), y = C(""), D = de(() => h.value.map((T) => ({ label: T.role, value: T.role }))), x = async () => {
    try {
      const T = await I.fetch("/admin/user_roles");
      h.value = T;
    } catch (T) {
      console.log(T), n.error(T.message || "error");
    }
  }, $ = async () => {
    try {
      v.value = v.value.trim();
      const { results: T, count: P } = await I.fetch(`/admin/users?limit=${f.value}&offset=${(m.value - 1) * f.value}` + (v.value ? `&query=${v.value}` : ""));
      d.value = T, P > 0 && (i.value = P);
    } catch (T) {
      console.log(T), n.error(T.message || "error");
    }
  }, N = async () => {
    if (!c.value) {
      n.error(l("pleaseInput"));
      return;
    }
    try {
      await I.fetch(`/admin/users/${k.value}/reset_password`, { method: "POST", body: JSON.stringify({ password: await ot(c.value) }) }), n.success(l("success")), r.value = false;
    } catch (T) {
      console.log(T), n.error(T.message || "error");
    }
  }, J = async () => {
    if (!b.value.email || !b.value.password) {
      n.error(l("pleaseInput"));
      return;
    }
    try {
      await I.fetch("/admin/users", { method: "POST", body: JSON.stringify({ email: b.value.email, password: await ot(b.value.password) }) }), n.success(l("success")), await $(), w.value = false;
    } catch (T) {
      console.log(T), n.error(T.message || "error");
    }
  }, G = async () => {
    try {
      await I.fetch(`/admin/users/${k.value}`, { method: "DELETE" }), n.success(l("success")), p.value = false;
    } catch (T) {
      console.log(T), n.error(T.message || "error");
    }
  }, j = async () => {
    try {
      await I.fetch("/admin/user_roles", { method: "POST", body: JSON.stringify({ user_id: k.value, role_text: y.value }) }), n.success(l("success")), _.value = false, await $();
    } catch (T) {
      console.log(T), n.error(T.message || "error");
    }
  }, ne = [{ title: "ID", key: "id" }, { title: l("user_email"), key: "user_email" }, { title: l("role"), key: "role_text", render(T) {
    return T.role_text ? S(ca, { bordered: false, type: "info" }, { default: () => T.role_text }) : null;
  } }, { title: l("address_count"), key: "address_count", render(T) {
    return S(Je, { value: T.address_count, "show-zero": true, max: 99, type: "success" });
  } }, { title: l("created_at"), key: "created_at" }, { title: l("actions"), key: "actions", render(T) {
    return S("div", [S(yt, { mode: "horizontal", options: [{ label: l("actions"), icon: () => S(wt), key: "action", children: [{ label: () => S(B, { text: true, onClick: () => {
      k.value = T.id, y.value = T.role_text, _.value = true;
    } }, { default: () => l("changeRole") }) }, { label: () => S(B, { text: true, onClick: () => {
      k.value = T.id, c.value = "", r.value = true;
    } }, { default: () => l("resetPassword") }) }, { label: () => S(B, { text: true, onClick: () => {
      k.value = T.id, b.value.email = "", b.value.password = "", p.value = true;
    } }, { default: () => l("delete") }) }] }] })]);
  } }], q = (T) => {
    var _a2;
    const P = (_a2 = h.value.find((M) => M.role === T)) == null ? void 0 : _a2.prefix;
    return P ?? s.value.prefix;
  }, W = (T) => {
    var _a2;
    const P = (_a2 = h.value.find((M) => M.role === T)) == null ? void 0 : _a2.domains;
    return P == null || P.length == 0 ? s.value.defaultDomains : P;
  }, Ue = de(() => y.value && !h.value.some((T) => T.role === y.value));
  return De([m, f], async () => {
    await $();
  }), ae(async () => {
    await x(), await $();
  }), (T, P) => {
    const M = le, re = be, V = Le, we = Me, Ne = Oe, Be = ye, ze = ce, ge = Ge, he = Ye;
    return R(), F("div", mn, [e(we, { show: w.value, "onUpdate:show": P[2] || (P[2] = (z) => w.value = z), preset: "dialog", title: t(l)("createUser") }, { action: a(() => [e(t(B), { loading: t(u), onClick: J, size: "small", tertiary: "", type: "primary" }, { default: a(() => [U(A(t(l)("createUser")), 1)]), _: 1 }, 8, ["loading"])]), default: a(() => [e(V, null, { default: a(() => [e(re, { label: t(l)("email"), required: "" }, { default: a(() => [e(M, { value: b.value.email, "onUpdate:value": P[0] || (P[0] = (z) => b.value.email = z) }, null, 8, ["value"])]), _: 1 }, 8, ["label"]), e(re, { label: t(l)("password"), required: "" }, { default: a(() => [e(M, { value: b.value.password, "onUpdate:value": P[1] || (P[1] = (z) => b.value.password = z), type: "password", "show-password-on": "click" }, null, 8, ["value"])]), _: 1 }, 8, ["label"])]), _: 1 })]), _: 1 }, 8, ["show", "title"]), e(we, { show: r.value, "onUpdate:show": P[4] || (P[4] = (z) => r.value = z), preset: "dialog", title: t(l)("resetPassword") }, { action: a(() => [e(t(B), { loading: t(u), onClick: N, size: "small", tertiary: "", type: "primary" }, { default: a(() => [U(A(t(l)("resetPassword")), 1)]), _: 1 }, 8, ["loading"])]), default: a(() => [e(re, { label: t(l)("password"), required: "" }, { default: a(() => [e(M, { value: c.value, "onUpdate:value": P[3] || (P[3] = (z) => c.value = z), type: "password", "show-password-on": "click" }, null, 8, ["value"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["show", "title"]), e(we, { show: p.value, "onUpdate:show": P[5] || (P[5] = (z) => p.value = z), preset: "dialog", title: t(l)("deleteUser") }, { action: a(() => [e(t(B), { loading: t(u), onClick: G, size: "small", tertiary: "", type: "error" }, { default: a(() => [U(A(t(l)("deleteUser")), 1)]), _: 1 }, 8, ["loading"])]), default: a(() => [E("p", null, A(t(l)("deleteUserTip")), 1)]), _: 1 }, 8, ["show", "title"]), e(we, { show: _.value, "onUpdate:show": P[7] || (P[7] = (z) => _.value = z), preset: "dialog", title: t(l)("changeRole") }, { action: a(() => [e(t(B), { loading: t(u), onClick: j, size: "small", tertiary: "", type: "primary" }, { default: a(() => [U(A(t(l)("changeRole")), 1)]), _: 1 }, 8, ["loading"])]), default: a(() => [Ue.value ? (R(), Y(Ne, { key: 0, type: "error", bordered: false }, { default: a(() => [E("span", null, A(t(l)("roleDonotExist")), 1)]), _: 1 })) : pe("", true), E("p", null, A(t(l)("prefix") + ": " + q(y.value)), 1), E("p", null, A(t(l)("domains") + ": " + JSON.stringify(W(y.value))), 1), e(Be, { clearable: "", value: y.value, "onUpdate:value": P[6] || (P[6] = (z) => y.value = z), options: D.value }, null, 8, ["value", "options"])]), _: 1 }, 8, ["show", "title"]), e(ze, null, { default: a(() => [e(M, { value: v.value, "onUpdate:value": P[8] || (P[8] = (z) => v.value = z), onKeydown: Ce($, ["enter"]) }, null, 8, ["value"]), e(t(B), { onClick: $, type: "primary", tertiary: "" }, { default: a(() => [U(A(t(l)("query")), 1)]), _: 1 })]), _: 1 }), E("div", pn, [E("div", fn, [e(ge, { page: m.value, "onUpdate:page": P[10] || (P[10] = (z) => m.value = z), "page-size": f.value, "onUpdate:pageSize": P[11] || (P[11] = (z) => f.value = z), "item-count": i.value, "page-sizes": [20, 50, 100], "show-size-picker": "" }, { prefix: a(({ itemCount: z }) => [U(A(t(l)("itemCount")) + ": " + A(z), 1)]), suffix: a(() => [e(t(B), { onClick: P[9] || (P[9] = (z) => w.value = true), size: "small", tertiary: "", type: "primary", style: { "margin-left": "10px" } }, { default: a(() => [U(A(t(l)("createUser")), 1)]), _: 1 })]), _: 1 }, 8, ["page", "page-size", "item-count"])]), e(he, { columns: ne, data: d.value, bordered: false, embedded: "" }, null, 8, ["data"])])]);
  };
} }, _n = Z(vn, [["__scopeId", "data-v-77402522"]]), bn = { class: "center" }, gn = { __name: "UserSettings", setup(o) {
  const { loading: u } = se(), s = te(), { t: n } = ee({ messages: { en: { save: "Save", successTip: "Save Success", enable: "Enable", enableUserRegister: "Allow User Register", enableMailVerify: "Enable Mail Verify (Send address must be an address in the system with a balance and can send mail normally)", verifyMailSender: "Verify Mail Sender", enableMailAllowList: "Enable Mail Address Allow List(Manually enterable)", mailAllowList: "Mail Address Allow List", maxAddressCount: "Maximum number of email addresses that can be binded" }, zh: { save: "\u4FDD\u5B58", successTip: "\u4FDD\u5B58\u6210\u529F", enable: "\u542F\u7528", enableUserRegister: "\u5141\u8BB8\u7528\u6237\u6CE8\u518C", enableMailVerify: "\u542F\u7528\u90AE\u4EF6\u9A8C\u8BC1(\u53D1\u9001\u5730\u5740\u5FC5\u987B\u662F\u7CFB\u7EDF\u4E2D\u80FD\u6709\u4F59\u989D\u4E14\u80FD\u6B63\u5E38\u53D1\u9001\u90AE\u4EF6\u7684\u5730\u5740)", verifyMailSender: "\u9A8C\u8BC1\u90AE\u4EF6\u53D1\u9001\u5730\u5740", enableMailAllowList: "\u542F\u7528\u90AE\u4EF6\u5730\u5740\u767D\u540D\u5355(\u53EF\u624B\u52A8\u8F93\u5165, \u56DE\u8F66\u589E\u52A0)", mailAllowList: "\u90AE\u4EF6\u5730\u5740\u767D\u540D\u5355", maxAddressCount: "\u53EF\u7ED1\u5B9A\u6700\u5927\u90AE\u7BB1\u5730\u5740\u6570\u91CF" } } }), l = ["gmail.com", "163.com", "126.com", "qq.com", "outlook.com", "hotmail.com", "icloud.com", "yahoo.com", "foxmail.com"], d = l.map((v) => ({ label: v, value: v })), i = C({ enable: false, enableMailVerify: false, verifyMailSender: "", enableMailAllowList: false, mailAllowList: l, maxAddressCount: 5 }), m = async () => {
    try {
      const v = await I.fetch("/admin/user_settings");
      Object.assign(i.value, v);
    } catch (v) {
      s.error(v.message || "error");
    }
  }, f = async () => {
    try {
      await I.fetch("/admin/user_settings", { method: "POST", body: JSON.stringify(i.value) }), s.success(n("successTip"));
    } catch (v) {
      s.error(v.message || "error");
    }
  };
  return ae(async () => {
    await m();
  }), (v, r) => {
    const c = Se, p = be, k = le, w = ce, b = ye, _ = Ze, h = B, y = Le, D = oe;
    return R(), F("div", bn, [e(D, { bordered: false, embedded: "", style: { "max-width": "600px" } }, { default: a(() => [e(y, { model: i.value }, { default: a(() => [e(p, { label: t(n)("enableUserRegister") }, { default: a(() => [e(c, { checked: i.value.enable, "onUpdate:checked": r[0] || (r[0] = (x) => i.value.enable = x) }, null, 8, ["checked"])]), _: 1 }, 8, ["label"]), e(p, { label: t(n)("enableMailVerify") }, { default: a(() => [e(w, null, { default: a(() => [e(c, { checked: i.value.enableMailVerify, "onUpdate:checked": r[1] || (r[1] = (x) => i.value.enableMailVerify = x), style: { width: "20%" } }, { default: a(() => [U(A(t(n)("enable")), 1)]), _: 1 }, 8, ["checked"]), i.value.enableMailVerify ? (R(), Y(k, { key: 0, value: i.value.verifyMailSender, "onUpdate:value": r[2] || (r[2] = (x) => i.value.verifyMailSender = x), style: { width: "80%" }, placeholder: t(n)("verifyMailSender") }, null, 8, ["value", "placeholder"])) : pe("", true)]), _: 1 })]), _: 1 }, 8, ["label"]), e(p, { label: t(n)("enableMailAllowList") }, { default: a(() => [e(w, null, { default: a(() => [e(c, { checked: i.value.enableMailAllowList, "onUpdate:checked": r[3] || (r[3] = (x) => i.value.enableMailAllowList = x), style: { width: "20%" } }, { default: a(() => [U(A(t(n)("enable")), 1)]), _: 1 }, 8, ["checked"]), i.value.enableMailAllowList ? (R(), Y(b, { key: 0, value: i.value.mailAllowList, "onUpdate:value": r[4] || (r[4] = (x) => i.value.mailAllowList = x), filterable: "", multiple: "", tag: "", style: { width: "80%" }, options: t(d), placeholder: t(n)("mailAllowList") }, null, 8, ["value", "options", "placeholder"])) : pe("", true)]), _: 1 })]), _: 1 }, 8, ["label"]), e(p, { label: t(n)("maxAddressCount") }, { default: a(() => [e(w, null, { default: a(() => [e(_, { value: i.value.maxAddressCount, "onUpdate:value": r[5] || (r[5] = (x) => i.value.maxAddressCount = x), placeholder: t(n)("maxAddressCount") }, null, 8, ["value", "placeholder"])]), _: 1 })]), _: 1 }, 8, ["label"]), e(h, { onClick: f, type: "primary", block: "", loading: t(u) }, { default: a(() => [U(A(t(n)("save")), 1)]), _: 1 }, 8, ["loading"])]), _: 1 }, 8, ["model"])]), _: 1 })]);
  };
} }, mt = Z(gn, [["__scopeId", "data-v-80d82720"]]), hn = ["gmail.com", "163.com", "126.com", "qq.com", "outlook.com", "hotmail.com", "icloud.com", "yahoo.com", "foxmail.com"], pt = { COMMOM_MAIL: hn }, yn = { class: "center" }, wn = X({ __name: "UserOauth2Settings", setup(o) {
  const { loading: u } = se(), s = te(), { t: n } = ee({ messages: { en: { save: "Save", delete: "Delete", successTip: "Save Success", enable: "Enable", enableMailAllowList: "Enable Mail Address Allow List(Manually enterable)", mailAllowList: "Mail Address Allow List", addOauth2: "Add Oauth2", name: "Name", oauth2Type: "Oauth2 Type", tip: "Third-party login will automatically use the user's email to register an account (the same email will be regarded as the same account), this account is the same as the registered account, and you can also set the password through the forget password" }, zh: { save: "\u4FDD\u5B58", delete: "\u5220\u9664", successTip: "\u4FDD\u5B58\u6210\u529F", enable: "\u542F\u7528", enableMailAllowList: "\u542F\u7528\u90AE\u4EF6\u5730\u5740\u767D\u540D\u5355(\u53EF\u624B\u52A8\u8F93\u5165, \u56DE\u8F66\u589E\u52A0)", mailAllowList: "\u90AE\u4EF6\u5730\u5740\u767D\u540D\u5355", addOauth2: "\u6DFB\u52A0 Oauth2", name: "\u540D\u79F0", oauth2Type: "Oauth2 \u7C7B\u578B", tip: "\u7B2C\u4E09\u65B9\u767B\u5F55\u4F1A\u81EA\u52A8\u4F7F\u7528\u7528\u6237\u90AE\u7BB1\u6CE8\u518C\u8D26\u53F7(\u90AE\u7BB1\u76F8\u540C\u5C06\u89C6\u4E3A\u540C\u4E00\u8D26\u53F7), \u6B64\u8D26\u53F7\u548C\u6CE8\u518C\u7684\u8D26\u53F7\u76F8\u540C, \u4E5F\u53EF\u4EE5\u901A\u8FC7\u5FD8\u8BB0\u5BC6\u7801\u8BBE\u7F6E\u5BC6\u7801" } } }), l = pt.COMMOM_MAIL.map((k) => ({ label: k, value: k })), d = C([]), i = C(false), m = C(""), f = C("custom"), v = async () => {
    try {
      const k = await I.fetch("/admin/user_oauth2_settings");
      Object.assign(d.value, k);
    } catch (k) {
      s.error(k.message || "error");
    }
  }, r = async () => {
    try {
      await I.fetch("/admin/user_oauth2_settings", { method: "POST", body: JSON.stringify(d.value) }), s.success(n("successTip"));
    } catch (k) {
      s.error(k.message || "error");
    }
  }, c = () => {
    const k = () => {
      switch (f.value) {
        case "github":
          return "https://github.com/login/oauth/authorize";
        case "authentik":
          return "https://youdomain/application/o/authorize/";
        default:
          return "";
      }
    }, w = () => {
      switch (f.value) {
        case "github":
          return "https://github.com/login/oauth/access_token";
        case "authentik":
          return "https://youdomain/application/o/token/";
        default:
          return "";
      }
    }, b = () => {
      switch (f.value) {
        case "github":
          return "json";
        case "authentik":
          return "urlencoded";
        default:
          return "";
      }
    }, _ = () => {
      switch (f.value) {
        case "github":
          return "https://api.github.com/user";
        case "authentik":
          return "https://youdomain/application/o/userinfo/";
        default:
          return "";
      }
    }, h = () => {
      switch (f.value) {
        case "github":
          return "email";
        case "authentik":
          return "email";
        default:
          return "";
      }
    }, y = () => {
      switch (f.value) {
        case "github":
          return "user:email";
        case "authentik":
          return "email openid";
        default:
          return "";
      }
    };
    d.value.push({ name: m.value, clientID: "", clientSecret: "", authorizationURL: k(), accessTokenURL: w(), accessTokenFormat: b(), userInfoURL: _(), userEmailKey: h(), redirectURL: `${window.location.origin}/user/oauth2/callback`, logoutURL: "", scope: y(), enableMailAllowList: false, mailAllowList: pt.COMMOM_MAIL }), m.value = "", i.value = false;
  }, p = [{ label: "json", value: "json" }, { label: "urlencoded", value: "urlencoded" }];
  return ae(async () => {
    await v();
  }), (k, w) => {
    const b = le, _ = be, h = kt, y = xt, D = Le, x = B, $ = Me, N = Oe, J = Ct, G = ma, j = bt, ne = ye, q = Se, W = ce, Ue = Na, T = Ua, P = oe;
    return R(), F("div", yn, [e($, { show: i.value, "onUpdate:show": w[2] || (w[2] = (M) => i.value = M), preset: "dialog", title: t(n)("addOauth2") }, { action: a(() => [e(x, { loading: t(u), onClick: c, size: "small", tertiary: "", type: "primary" }, { default: a(() => [U(A(t(n)("addOauth2")), 1)]), _: 1 }, 8, ["loading"])]), default: a(() => [e(D, null, { default: a(() => [e(_, { label: t(n)("name"), required: "" }, { default: a(() => [e(b, { value: m.value, "onUpdate:value": w[0] || (w[0] = (M) => m.value = M) }, null, 8, ["value"])]), _: 1 }, 8, ["label"]), e(_, { label: t(n)("oauth2Type"), required: "" }, { default: a(() => [e(y, { value: f.value, "onUpdate:value": w[1] || (w[1] = (M) => f.value = M) }, { default: a(() => [e(h, { value: "github", label: "Github" }), e(h, { value: "authentik", label: "Authentik" }), e(h, { value: "custom", label: "Custom" })]), _: 1 }, 8, ["value"])]), _: 1 }, 8, ["label"])]), _: 1 })]), _: 1 }, 8, ["show", "title"]), e(P, { bordered: false, embedded: "", style: { "max-width": "600px" } }, { default: a(() => [e(N, { "show-icon": false, type: "warning", closable: "", style: { "margin-bottom": "10px" } }, { default: a(() => [U(A(t(n)("tip")), 1)]), _: 1 }), e(J, { justify: "end" }, { default: a(() => [e(x, { onClick: w[3] || (w[3] = (M) => i.value = true), secondary: "", loading: t(u) }, { default: a(() => [U(A(t(n)("addOauth2")), 1)]), _: 1 }, 8, ["loading"]), e(x, { onClick: r, type: "primary", loading: t(u) }, { default: a(() => [U(A(t(n)("save")), 1)]), _: 1 }, 8, ["loading"])]), _: 1 }), e(G), e(T, { "default-expanded-names": "1", accordion: "", "trigger-areas": ["main", "arrow"] }, { default: a(() => [(R(true), F(At, null, St(d.value, (M, re) => (R(), Y(Ue, { key: re, title: M.name }, { "header-extra": a(() => [e(j, { onPositiveClick: (V) => d.value.splice(re, 1) }, { trigger: a(() => [e(x, { tertiary: "", type: "error" }, { default: a(() => [U(A(t(n)("delete")), 1)]), _: 1 })]), default: a(() => [U(" " + A(t(n)("delete")), 1)]), _: 2 }, 1032, ["onPositiveClick"])]), default: a(() => [e(D, { model: M }, { default: a(() => [e(_, { label: t(n)("name"), required: "" }, { default: a(() => [e(b, { value: M.name, "onUpdate:value": (V) => M.name = V }, null, 8, ["value", "onUpdate:value"])]), _: 2 }, 1032, ["label"]), e(_, { label: "Client ID", required: "" }, { default: a(() => [e(b, { value: M.clientID, "onUpdate:value": (V) => M.clientID = V }, null, 8, ["value", "onUpdate:value"])]), _: 2 }, 1024), e(_, { label: "Client Secret", required: "" }, { default: a(() => [e(b, { value: M.clientSecret, "onUpdate:value": (V) => M.clientSecret = V, type: "password", "show-password-on": "click" }, null, 8, ["value", "onUpdate:value"])]), _: 2 }, 1024), e(_, { label: "Authorization URL", required: "" }, { default: a(() => [e(b, { value: M.authorizationURL, "onUpdate:value": (V) => M.authorizationURL = V }, null, 8, ["value", "onUpdate:value"])]), _: 2 }, 1024), e(_, { label: "Access Token URL", required: "" }, { default: a(() => [e(b, { value: M.accessTokenURL, "onUpdate:value": (V) => M.accessTokenURL = V }, null, 8, ["value", "onUpdate:value"])]), _: 2 }, 1024), e(_, { label: "Access Token accessTokenFormat", required: "" }, { default: a(() => [e(ne, { value: M.accessTokenFormat, "onUpdate:value": (V) => M.accessTokenFormat = V, options: p }, null, 8, ["value", "onUpdate:value"])]), _: 2 }, 1024), e(_, { label: "User Info URL", required: "" }, { default: a(() => [e(b, { value: M.userInfoURL, "onUpdate:value": (V) => M.userInfoURL = V }, null, 8, ["value", "onUpdate:value"])]), _: 2 }, 1024), e(_, { label: "User Email Key", required: "" }, { default: a(() => [e(b, { value: M.userEmailKey, "onUpdate:value": (V) => M.userEmailKey = V }, null, 8, ["value", "onUpdate:value"])]), _: 2 }, 1024), e(_, { label: "Redirect URL", required: "" }, { default: a(() => [e(b, { value: M.redirectURL, "onUpdate:value": (V) => M.redirectURL = V }, null, 8, ["value", "onUpdate:value"])]), _: 2 }, 1024), e(_, { label: "Scope", required: "" }, { default: a(() => [e(b, { value: M.scope, "onUpdate:value": (V) => M.scope = V }, null, 8, ["value", "onUpdate:value"])]), _: 2 }, 1024), e(_, { label: t(n)("enableMailAllowList") }, { default: a(() => [e(W, null, { default: a(() => [e(q, { checked: M.enableMailAllowList, "onUpdate:checked": (V) => M.enableMailAllowList = V, style: { width: "20%" } }, { default: a(() => [U(A(t(n)("enable")), 1)]), _: 2 }, 1032, ["checked", "onUpdate:checked"]), M.enableMailAllowList ? (R(), Y(ne, { key: 0, value: M.mailAllowList, "onUpdate:value": (V) => M.mailAllowList = V, filterable: "", multiple: "", tag: "", style: { width: "80%" }, options: t(l), placeholder: t(n)("mailAllowList") }, null, 8, ["value", "onUpdate:value", "options", "placeholder"])) : pe("", true)]), _: 2 }, 1024)]), _: 2 }, 1032, ["label"])]), _: 2 }, 1032, ["model"])]), _: 2 }, 1032, ["title"]))), 128))]), _: 1 })]), _: 1 })]);
  };
} }), xn = Z(wn, [["__scopeId", "data-v-96cd0b29"]]), kn = { style: { "margin-top": "10px" } }, Cn = { __name: "Mails", setup(o) {
  const { adminMailTabAddress: u } = se(), { t: s } = ee({ messages: { en: { addressQueryTip: "Leave blank to query all addresses", keywordQueryTip: "Leave blank to not query by keyword", query: "Query" }, zh: { addressQueryTip: "\u7559\u7A7A\u67E5\u8BE2\u6240\u6709\u5730\u5740", keywordQueryTip: "\u7559\u7A7A\u4E0D\u6309\u5173\u952E\u5B57\u67E5\u8BE2", query: "\u67E5\u8BE2" } } }), n = C(""), l = C(""), d = () => {
    u.value = u.value.trim(), l.value = l.value.trim(), n.value = Date.now();
  }, i = async (f, v) => await I.fetch(`/admin/mails?limit=${f}&offset=${v}` + (u.value ? `&address=${u.value}` : "") + (l.value ? `&keyword=${l.value}` : "")), m = async (f) => {
    await I.fetch(`/admin/mails/${f}`, { method: "DELETE" });
  };
  return (f, v) => {
    const r = le, c = B, p = ce;
    return R(), F("div", kn, [e(p, null, { default: a(() => [e(r, { value: t(u), "onUpdate:value": v[0] || (v[0] = (k) => Xe(u) ? u.value = k : null), placeholder: t(s)("addressQueryTip"), onKeydown: Ce(d, ["enter"]) }, null, 8, ["value", "placeholder"]), e(r, { value: l.value, "onUpdate:value": v[1] || (v[1] = (k) => l.value = k), placeholder: t(s)("keywordQueryTip"), onKeydown: Ce(d, ["enter"]) }, null, 8, ["value", "placeholder"]), e(c, { onClick: d, type: "primary", tertiary: "" }, { default: a(() => [U(A(t(s)("query")), 1)]), _: 1 })]), _: 1 }), v[2] || (v[2] = E("div", { style: { "margin-top": "10px" } }, null, -1)), (R(), Y(Mt, { key: n.value, enableUserDeleteEmail: true, fetchMailData: i, deleteMail: m }))]);
  };
} }, An = { style: { "margin-top": "10px" } }, Sn = { __name: "MailsUnknow", setup(o) {
  const u = async (n, l) => await I.fetch(`/admin/mails_unknow?limit=${n}&offset=${l}`), s = async (n) => {
    await I.fetch(`/admin/mails/${n}`, { method: "DELETE" });
  };
  return (n, l) => (R(), F("div", An, [e(Mt, { enableUserDeleteEmail: true, fetchMailData: u, deleteMail: s })]));
} }, Mn = { class: "center" }, Un = { __name: "Maintenance", setup(o) {
  const u = te(), s = C({ enableMailsAutoCleanup: false, cleanMailsDays: 30, enableUnknowMailsAutoCleanup: false, cleanUnknowMailsDays: 30, enableAddressAutoCleanup: false, cleanAddressDays: 30, enableSendBoxAutoCleanup: false, cleanSendBoxDays: 30 }), { t: n } = ee({ messages: { en: { tip: "Please input the days", mailBoxLabel: "Cleanup the inbox before n days", mailUnknowLabel: "Cleanup the unknow mail before n days", sendBoxLabel: "Cleanup the sendbox before n days", cleanupNow: "Cleanup now", autoCleanup: "Auto cleanup", cleanupSuccess: "Cleanup success", save: "Save", cronTip: "Enable cron cleanup, need to configure [crons] in worker, please refer to the document" }, zh: { tip: "\u8BF7\u8F93\u5165\u5929\u6570", mailBoxLabel: "\u6E05\u7406 n \u5929\u524D\u7684\u6536\u4EF6\u7BB1", mailUnknowLabel: "\u6E05\u7406 n \u5929\u524D\u7684\u65E0\u6536\u4EF6\u4EBA\u90AE\u4EF6", sendBoxLabel: "\u6E05\u7406 n \u5929\u524D\u7684\u53D1\u4EF6\u7BB1", autoCleanup: "\u81EA\u52A8\u6E05\u7406", cleanupSuccess: "\u6E05\u7406\u6210\u529F", cleanupNow: "\u7ACB\u5373\u6E05\u7406", save: "\u4FDD\u5B58", cronTip: "\u542F\u7528\u5B9A\u65F6\u6E05\u7406, \u9700\u5728 worker \u914D\u7F6E [crons] \u53C2\u6570, \u8BF7\u53C2\u8003\u6587\u6863" } } }), l = async (m, f) => {
    try {
      await I.fetch("/admin/cleanup", { method: "POST", body: JSON.stringify({ cleanType: m, cleanDays: f }) }), u.success(n("cleanupSuccess"));
    } catch (v) {
      u.error(v.message || "error");
    }
  }, d = async () => {
    try {
      const m = await I.fetch("/admin/auto_cleanup");
      m && Object.assign(s.value, m);
    } catch (m) {
      u.error(m.message || "error");
    }
  }, i = async () => {
    try {
      await I.fetch("/admin/auto_cleanup", { method: "POST", body: JSON.stringify(s.value) }), u.success(n("cleanupSuccess"));
    } catch (m) {
      u.error(m.message || "error");
    }
  };
  return ae(async () => {
    await d();
  }), (m, f) => {
    const v = Oe, r = Se, c = Ze, p = ht, k = B, w = be, b = Le, _ = oe;
    return R(), F("div", Mn, [e(_, { bordered: false, embedded: "" }, { default: a(() => [e(v, { "show-icon": false, bordered: false }, { default: a(() => [E("span", null, A(t(n)("cronTip")), 1)]), _: 1 }), e(b, { model: s.value }, { default: a(() => [e(w, { label: t(n)("mailBoxLabel") }, { default: a(() => [e(r, { checked: s.value.enableMailsAutoCleanup, "onUpdate:checked": f[0] || (f[0] = (h) => s.value.enableMailsAutoCleanup = h) }, { default: a(() => [U(A(t(n)("autoCleanup")), 1)]), _: 1 }, 8, ["checked"]), e(c, { value: s.value.cleanMailsDays, "onUpdate:value": f[1] || (f[1] = (h) => s.value.cleanMailsDays = h), placeholder: t(n)("tip") }, null, 8, ["value", "placeholder"]), e(k, { onClick: f[2] || (f[2] = (h) => l("mails", s.value.cleanMailsDays)) }, { icon: a(() => [e(p, { component: t(We) }, null, 8, ["component"])]), default: a(() => [U(" " + A(t(n)("cleanupNow")), 1)]), _: 1 })]), _: 1 }, 8, ["label"]), e(w, { label: t(n)("mailUnknowLabel") }, { default: a(() => [e(r, { checked: s.value.enableUnknowMailsAutoCleanup, "onUpdate:checked": f[3] || (f[3] = (h) => s.value.enableUnknowMailsAutoCleanup = h) }, { default: a(() => [U(A(t(n)("autoCleanup")), 1)]), _: 1 }, 8, ["checked"]), e(c, { value: s.value.cleanUnknowMailsDays, "onUpdate:value": f[4] || (f[4] = (h) => s.value.cleanUnknowMailsDays = h), placeholder: t(n)("tip") }, null, 8, ["value", "placeholder"]), e(k, { onClick: f[5] || (f[5] = (h) => l("mails_unknow", s.value.cleanUnknowMailsDays)) }, { icon: a(() => [e(p, { component: t(We) }, null, 8, ["component"])]), default: a(() => [U(" " + A(t(n)("cleanupNow")), 1)]), _: 1 })]), _: 1 }, 8, ["label"]), e(w, { label: t(n)("sendBoxLabel") }, { default: a(() => [e(r, { checked: s.value.enableSendBoxAutoCleanup, "onUpdate:checked": f[6] || (f[6] = (h) => s.value.enableSendBoxAutoCleanup = h) }, { default: a(() => [U(A(t(n)("autoCleanup")), 1)]), _: 1 }, 8, ["checked"]), e(c, { value: s.value.cleanSendBoxDays, "onUpdate:value": f[7] || (f[7] = (h) => s.value.cleanSendBoxDays = h), placeholder: t(n)("tip") }, null, 8, ["value", "placeholder"]), e(k, { onClick: f[8] || (f[8] = (h) => l("sendbox", s.value.cleanSendBoxDays)) }, { icon: a(() => [e(p, { component: t(We) }, null, 8, ["component"])]), default: a(() => [U(" " + A(t(n)("cleanupNow")), 1)]), _: 1 })]), _: 1 }, 8, ["label"]), e(k, { onClick: i, type: "primary", block: "", loading: m.loading }, { default: a(() => [U(A(t(n)("save")), 1)]), _: 1 }, 8, ["loading"])]), _: 1 }, 8, ["model"])]), _: 1 })]);
  };
} }, Tn = Z(Un, [["__scopeId", "data-v-73fc02e8"]]), Ln = { class: "center" }, Nn = { key: 0 }, $n = X({ __name: "Telegram", setup(o) {
  const u = te(), { t: s } = ee({ messages: { en: { init: "Init", successTip: "Success", status: "Check Status", enableTelegramAllowList: "Enable Telegram Allow List(Manually input user ID)", enable: "Enable", telegramAllowList: "Telegram Allow List(Manually input telegram user ID)", save: "Save", miniAppUrl: "Telegram Mini App URL", enableGlobalMailPush: "Enable Global Mail Push(Manually input telegram user ID)", globalMailPushList: "Global Mail Push List" }, zh: { init: "\u521D\u59CB\u5316", successTip: "\u6210\u529F", status: "\u67E5\u770B\u72B6\u6001", enableTelegramAllowList: "\u542F\u7528 Telegram \u767D\u540D\u5355(\u624B\u52A8\u8F93\u5165\u7528\u6237 ID, \u56DE\u8F66\u589E\u52A0)", enable: "\u542F\u7528", telegramAllowList: "Telegram \u767D\u540D\u5355(\u624B\u52A8\u8F93\u5165\u7528\u6237 ID, \u56DE\u8F66\u589E\u52A0)", save: "\u4FDD\u5B58", miniAppUrl: "\u7535\u62A5\u5C0F\u7A0B\u5E8F URL(\u8BF7\u8F93\u5165\u4F60\u90E8\u7F72\u7684\u7535\u62A5\u5C0F\u7A0B\u5E8F\u7F51\u9875\u5730\u5740)", enableGlobalMailPush: "\u542F\u7528\u5168\u5C40\u90AE\u4EF6\u63A8\u9001(\u624B\u52A8\u8F93\u5165\u90AE\u7BB1\u7BA1\u7406\u5458\u7684 telegram \u7528\u6237 ID, \u56DE\u8F66\u589E\u52A0)", globalMailPushList: "\u5168\u5C40\u90AE\u4EF6\u63A8\u9001\u7528\u6237\u5217\u8868" } } }), n = C({ fetched: false }), l = async () => {
    try {
      const r = await I.fetch("/admin/telegram/status");
      Object.assign(n.value, r), n.value.fetched = true;
    } catch (r) {
      u.error(r.message || "error");
    }
  }, d = async () => {
    try {
      await I.fetch("/admin/telegram/init", { method: "POST" }), u.success(s("successTip"));
    } catch (r) {
      u.error(r.message || "error");
    }
  };
  class i {
    constructor(c, p, k, w, b) {
      __publicField(this, "enableAllowList");
      __publicField(this, "allowList");
      __publicField(this, "miniAppUrl");
      __publicField(this, "enableGlobalMailPush");
      __publicField(this, "globalMailPushList");
      this.enableAllowList = c, this.allowList = p, this.miniAppUrl = k, this.enableGlobalMailPush = w, this.globalMailPushList = b;
    }
  }
  const m = C(new i(false, [], "", false, [])), f = async () => {
    try {
      const r = await I.fetch("/admin/telegram/settings");
      Object.assign(m.value, r);
    } catch (r) {
      u.error(r.message || "error");
    }
  }, v = async () => {
    try {
      await I.fetch("/admin/telegram/settings", { method: "POST", body: JSON.stringify(m.value) }), u.success(s("successTip"));
    } catch (r) {
      u.error(r.message || "error");
    }
  };
  return ae(async () => {
    await f();
  }), (r, c) => {
    const p = Se, k = ye, w = ce, b = be, _ = le, h = B, y = oe;
    return R(), F("div", Ln, [e(y, { bordered: false, embedded: "", style: { "max-width": "800px", overflow: "auto" } }, { default: a(() => [e(y, { bordered: false, embedded: "" }, { default: a(() => [e(b, { label: t(s)("enableTelegramAllowList") }, { default: a(() => [e(w, null, { default: a(() => [e(p, { checked: m.value.enableAllowList, "onUpdate:checked": c[0] || (c[0] = (D) => m.value.enableAllowList = D), style: { width: "20%" } }, { default: a(() => [U(A(t(s)("enable")), 1)]), _: 1 }, 8, ["checked"]), e(k, { value: m.value.allowList, "onUpdate:value": c[1] || (c[1] = (D) => m.value.allowList = D), filterable: "", multiple: "", tag: "", style: { width: "80%" }, placeholder: t(s)("telegramAllowList") }, null, 8, ["value", "placeholder"])]), _: 1 })]), _: 1 }, 8, ["label"]), e(b, { label: t(s)("enableGlobalMailPush") }, { default: a(() => [e(w, null, { default: a(() => [e(p, { checked: m.value.enableGlobalMailPush, "onUpdate:checked": c[2] || (c[2] = (D) => m.value.enableGlobalMailPush = D), style: { width: "20%" } }, { default: a(() => [U(A(t(s)("enable")), 1)]), _: 1 }, 8, ["checked"]), e(k, { value: m.value.globalMailPushList, "onUpdate:value": c[3] || (c[3] = (D) => m.value.globalMailPushList = D), filterable: "", multiple: "", tag: "", style: { width: "80%" }, placeholder: t(s)("globalMailPushList") }, null, 8, ["value", "placeholder"])]), _: 1 })]), _: 1 }, 8, ["label"]), e(b, { label: t(s)("miniAppUrl") }, { default: a(() => [e(_, { value: m.value.miniAppUrl, "onUpdate:value": c[4] || (c[4] = (D) => m.value.miniAppUrl = D) }, null, 8, ["value"])]), _: 1 }, 8, ["label"]), e(h, { onClick: v, type: "primary", block: "" }, { default: a(() => [U(A(t(s)("save")), 1)]), _: 1 })]), _: 1 }), e(h, { onClick: d, type: "primary", block: "" }, { default: a(() => [U(A(t(s)("init")), 1)]), _: 1 }), e(h, { onClick: l, secondary: "", block: "" }, { default: a(() => [U(A(t(s)("status")), 1)]), _: 1 }), n.value.fetched ? (R(), F("pre", Nn, A(JSON.stringify(n.value, null, 2)), 1)) : pe("", true)]), _: 1 })]);
  };
} }), In = Z($n, [["__scopeId", "data-v-f745cedd"]]), Pn = { class: "center" }, Rn = X({ __name: "Webhook", setup(o) {
  const u = te(), { t: s } = ee({ messages: { en: { successTip: "Success", webhookAllowList: "Webhook Allow List(Enter the address that is allowed to use webhook and enter)", save: "Save", notEnabled: "Webhook is not enabled" }, zh: { successTip: "\u6210\u529F", webhookAllowList: "Webhook \u767D\u540D\u5355(\u8BF7\u8F93\u5165\u5141\u8BB8\u4F7F\u7528webhook \u7684\u5730\u5740, \u56DE\u8F66\u589E\u52A0)", save: "\u4FDD\u5B58", notEnabled: "Webhook \u672A\u5F00\u542F" } } });
  class n {
    constructor(r) {
      __publicField(this, "allowList");
      this.allowList = r;
    }
  }
  const l = C(new n([])), d = C(false), i = C(""), m = async () => {
    try {
      const v = await I.fetch("/admin/webhook/settings");
      Object.assign(l.value, v), d.value = true;
    } catch (v) {
      i.value = v.message || "error";
    }
  }, f = async () => {
    try {
      await I.fetch("/admin/webhook/settings", { method: "POST", body: JSON.stringify(l.value) }), u.success(s("successTip"));
    } catch (v) {
      u.error(v.message || "error");
    }
  };
  return ae(async () => {
    await m();
  }), (v, r) => {
    const c = ye, p = be, k = B, w = oe, b = pa;
    return R(), F("div", Pn, [d.value ? (R(), Y(w, { key: 0, bordered: false, embedded: "", style: { "max-width": "800px", overflow: "auto" } }, { default: a(() => [e(p, { label: t(s)("webhookAllowList") }, { default: a(() => [e(c, { value: l.value.allowList, "onUpdate:value": r[0] || (r[0] = (_) => l.value.allowList = _), filterable: "", multiple: "", tag: "", placeholder: t(s)("webhookAllowList") }, null, 8, ["value", "placeholder"])]), _: 1 }, 8, ["label"]), e(k, { onClick: f, type: "primary", block: "" }, { default: a(() => [U(A(t(s)("save")), 1)]), _: 1 })]), _: 1 })) : (R(), Y(b, { key: 1, status: "404", title: t(s)("notEnabled"), description: i.value }, null, 8, ["title", "description"]))]);
  };
} }), Dn = Z(Rn, [["__scopeId", "data-v-09dba2fd"]]), On = X({ __name: "MailWebhook", setup(o) {
  const u = async () => await I.fetch("/admin/mail_webhook/settings"), s = async (l) => {
    await I.fetch("/admin/mail_webhook/settings", { method: "POST", body: JSON.stringify(l) });
  }, n = async (l) => {
    await I.fetch("/admin/mail_webhook/test", { method: "POST", body: JSON.stringify(l) });
  };
  return (l, d) => (R(), Y(fa, { fetchData: u, saveSettings: s, testSettings: n }));
} }), Bn = { class: "center" }, zn = { __name: "WorkerConfig", setup(o) {
  const { loading: u } = se(), s = te(), n = C({}), l = async () => {
    try {
      const d = await I.fetch("/admin/worker/configs");
      Object.assign(n.value, d);
    } catch (d) {
      s.error(d.message || "error");
    }
  };
  return ae(async () => {
    await l();
  }), (d, i) => {
    const m = oe;
    return R(), F("div", Bn, [e(m, { bordered: false, embedded: "", style: { "max-width": "600px", overflow: "auto" } }, { default: a(() => [E("pre", null, A(JSON.stringify(n.value, null, 2)), 1)]), _: 1 })]);
  };
} }, ft = Z(zn, [["__scopeId", "data-v-516133cd"]]), En = { class: "center" }, Vn = { class: "left" }, Fn = ["innerHTML"], qn = { key: 1, style: { border: "1px solid #ccc" } }, jn = { __name: "SendMail", setup(o) {
  const u = te(), s = C(false), n = va(), l = _a("sendMailByAdminModel", { fromName: "", fromMail: "", toName: "", toMail: "", subject: "", contentType: "text", content: "" }), { t: d } = ee({ locale: "zh", messages: { en: { successSend: "Please check your sendbox. If failed, please try again later.", fromName: "Your Name and Address, leave Name blank to use email address", toName: "Recipient Name and Address, leave Name blank to use email address", subject: "Subject", options: "Options", edit: "Edit", preview: "Preview", content: "Content", send: "Send", text: "Text", html: "HTML", "rich text": "Rich Text", tooLarge: "Too large file, please upload file less than 1MB." }, zh: { successSend: "\u8BF7\u67E5\u770B\u60A8\u7684\u53D1\u4EF6\u7BB1, \u5982\u679C\u5931\u8D25, \u8BF7\u68C0\u67E5\u7A0D\u540E\u91CD\u8BD5\u3002", fromName: "\u4F60\u7684\u540D\u79F0\u548C\u5730\u5740\uFF0C\u540D\u79F0\u4E0D\u586B\u5199\u5219\u4F7F\u7528\u90AE\u7BB1\u5730\u5740", toName: "\u6536\u4EF6\u4EBA\u540D\u79F0\u548C\u5730\u5740\uFF0C\u540D\u79F0\u4E0D\u586B\u5199\u5219\u4F7F\u7528\u90AE\u7BB1\u5730\u5740", subject: "\u4E3B\u9898", options: "\u9009\u9879", edit: "\u7F16\u8F91", preview: "\u9884\u89C8", content: "\u5185\u5BB9", send: "\u53D1\u9001", text: "\u6587\u672C", html: "HTML", "rich text": "\u5BCC\u6587\u672C", tooLarge: "\u6587\u4EF6\u8FC7\u5927, \u8BF7\u4E0A\u4F20\u5C0F\u4E8E1MB\u7684\u6587\u4EF6\u3002" } } }), i = [{ label: d("text"), value: "text" }, { label: d("html"), value: "html" }, { label: d("rich text"), value: "rich" }], m = async () => {
    try {
      await I.fetch("/admin/send_mail", { method: "POST", body: JSON.stringify({ from_name: l.value.fromName, from_mail: l.value.fromMail, to_name: l.value.toName, to_mail: l.value.toMail, subject: l.value.subject, is_html: l.value.contentType != "text", content: l.value.content }) }), l.value = { fromName: "", fromMail: "", toName: "", toMail: "", subject: "", contentType: "text", content: "" };
    } catch (c) {
      u.error(c.message || "error");
    } finally {
      u.success(d("successSend"));
    }
  }, f = { excludeKeys: ["uploadVideo"] }, v = { MENU_CONF: { uploadImage: { async customUpload() {
    u.error(d("tooLarge"));
  }, maxFileSize: 1 * 1024 * 1024, base64LimitSize: 1 * 1024 * 1024 } } };
  ba(() => {
    const c = n.value;
    c == null ? void 0 : c.destroy();
  });
  const r = (c) => {
    n.value = c;
  };
  return (c, p) => {
    const k = B, w = Ct, b = le, _ = ce, h = gt, y = kt, D = xt, x = oe, $ = Le;
    return R(), F("div", En, [e(x, { bordered: false, embedded: "" }, { default: a(() => [e(w, { justify: "end" }, { default: a(() => [e(k, { type: "primary", onClick: m }, { default: a(() => [U(A(t(d)("send")), 1)]), _: 1 })]), _: 1 }), E("div", Vn, [e($, { model: t(l) }, { default: a(() => [e(h, { label: t(d)("fromName"), "label-placement": "top" }, { default: a(() => [e(_, null, { default: a(() => [e(b, { value: t(l).fromName, "onUpdate:value": p[0] || (p[0] = (N) => t(l).fromName = N) }, null, 8, ["value"]), e(b, { value: t(l).fromMail, "onUpdate:value": p[1] || (p[1] = (N) => t(l).fromMail = N) }, null, 8, ["value"])]), _: 1 })]), _: 1 }, 8, ["label"]), e(h, { label: t(d)("toName"), "label-placement": "top" }, { default: a(() => [e(_, null, { default: a(() => [e(b, { value: t(l).toName, "onUpdate:value": p[2] || (p[2] = (N) => t(l).toName = N) }, null, 8, ["value"]), e(b, { value: t(l).toMail, "onUpdate:value": p[3] || (p[3] = (N) => t(l).toMail = N) }, null, 8, ["value"])]), _: 1 })]), _: 1 }, 8, ["label"]), e(h, { label: t(d)("subject"), "label-placement": "top" }, { default: a(() => [e(b, { value: t(l).subject, "onUpdate:value": p[4] || (p[4] = (N) => t(l).subject = N) }, null, 8, ["value"])]), _: 1 }, 8, ["label"]), e(h, { label: t(d)("options"), "label-placement": "top" }, { default: a(() => [e(D, { value: t(l).contentType, "onUpdate:value": p[5] || (p[5] = (N) => t(l).contentType = N) }, { default: a(() => [(R(), F(At, null, St(i, (N) => e(y, { key: N.value, value: N.value, label: N.label }, null, 8, ["value", "label"])), 64))]), _: 1 }, 8, ["value"]), t(l).contentType != "text" ? (R(), Y(k, { key: 0, onClick: p[6] || (p[6] = (N) => s.value = !s.value), style: { "margin-left": "10px" } }, { default: a(() => [U(A(s.value ? t(d)("edit") : t(d)("preview")), 1)]), _: 1 })) : pe("", true)]), _: 1 }, 8, ["label"]), e(h, { label: t(d)("content"), "label-placement": "top" }, { default: a(() => [s.value ? (R(), Y(x, { key: 0, bordered: false, embedded: "" }, { default: a(() => [E("div", { innerHTML: t(l).content }, null, 8, Fn)]), _: 1 })) : t(l).contentType == "rich" ? (R(), F("div", qn, [e(t(xa), { style: { "border-bottom": "1px solid #ccc" }, defaultConfig: f, editor: n.value, mode: "default" }, null, 8, ["editor"]), e(t(ka), { style: { height: "500px", "overflow-y": "hidden" }, modelValue: t(l).content, "onUpdate:modelValue": p[7] || (p[7] = (N) => t(l).content = N), defaultConfig: v, mode: "default", onOnCreated: r }, null, 8, ["modelValue"])])) : (R(), Y(b, { key: 2, type: "textarea", value: t(l).content, "onUpdate:value": p[8] || (p[8] = (N) => t(l).content = N), autosize: { minRows: 3 } }, null, 8, ["value"]))]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model"])])]), _: 1 })]);
  };
} }, Hn = Z(jn, [["__scopeId", "data-v-9747bb0e"]]), Wn = { __name: "Admin", setup(o) {
  const { adminAuth: u, showAdminAuth: s, adminTab: n, loading: l, globalTabplacement: d, showAdminPage: i, userSettings: m } = se(), f = te(), v = async () => {
    try {
      u.value = p.value, location.reload();
    } catch (k) {
      f.error(k.message || "error");
    }
  }, { t: r } = ee({ messages: { en: { accessHeader: "Admin Password", accessTip: "Please enter the admin password", mails: "Emails", sendMail: "Send Mail", qucickSetup: "Quick Setup", account: "Account", account_create: "Create Account", account_settings: "Account Settings", user: "User", user_management: "User Management", user_settings: "User Settings", userOauth2Settings: "Oauth2 Settings", unknow: "Mails with unknow receiver", senderAccess: "Sender Access Control", sendBox: "Send Box", telegram: "Telegram Bot", webhookSettings: "Webhook Settings", statistics: "Statistics", maintenance: "Maintenance", workerconfig: "Worker Config", appearance: "Appearance", about: "About", ok: "OK", mailWebhook: "Mail Webhook" }, zh: { accessHeader: "Admin \u5BC6\u7801", accessTip: "\u8BF7\u8F93\u5165 Admin \u5BC6\u7801", mails: "\u90AE\u4EF6", sendMail: "\u53D1\u9001\u90AE\u4EF6", qucickSetup: "\u5FEB\u901F\u8BBE\u7F6E", account: "\u8D26\u53F7", account_create: "\u521B\u5EFA\u8D26\u53F7", account_settings: "\u8D26\u53F7\u8BBE\u7F6E", user: "\u7528\u6237", user_management: "\u7528\u6237\u7BA1\u7406", user_settings: "\u7528\u6237\u8BBE\u7F6E", userOauth2Settings: "Oauth2 \u8BBE\u7F6E", unknow: "\u65E0\u6536\u4EF6\u4EBA\u90AE\u4EF6", senderAccess: "\u53D1\u4EF6\u6743\u9650\u63A7\u5236", sendBox: "\u53D1\u4EF6\u7BB1", telegram: "\u7535\u62A5\u673A\u5668\u4EBA", webhookSettings: "Webhook \u8BBE\u7F6E", statistics: "\u7EDF\u8BA1", maintenance: "\u7EF4\u62A4", workerconfig: "Worker \u914D\u7F6E", appearance: "\u5916\u89C2", about: "\u5173\u4E8E", ok: "\u786E\u5B9A", mailWebhook: "\u90AE\u4EF6 Webhook" } } }), c = de(() => !i.value || s.value), p = C("");
  return ae(async () => {
    m.value.user_id || await I.getUserSettings(f);
  }), (k, w) => {
    const b = le, _ = B, h = Me, y = ha, D = ga;
    return R(), F("div", null, [e(h, { show: c.value, "onUpdate:show": w[1] || (w[1] = (x) => c.value = x), closable: false, closeOnEsc: false, maskClosable: false, preset: "dialog", title: t(r)("accessHeader") }, { action: a(() => [e(_, { onClick: v, type: "primary", loading: t(l) }, { default: a(() => [U(A(t(r)("ok")), 1)]), _: 1 }, 8, ["loading"])]), default: a(() => [E("p", null, A(t(r)("accessTip")), 1), e(b, { value: p.value, "onUpdate:value": w[0] || (w[0] = (x) => p.value = x), type: "password", "show-password-on": "click" }, null, 8, ["value"])]), _: 1 }, 8, ["show", "title"]), t(i) ? (R(), Y(D, { key: 0, type: "card", value: t(n), "onUpdate:value": w[2] || (w[2] = (x) => Xe(n) ? n.value = x : null), placement: t(d) }, { default: a(() => [e(y, { name: "qucickSetup", tab: t(r)("qucickSetup") }, { default: a(() => [e(D, { type: "bar", "justify-content": "center", animated: "" }, { default: a(() => [e(y, { name: "account_settings", tab: t(r)("account_settings") }, { default: a(() => [e(ct)]), _: 1 }, 8, ["tab"]), e(y, { name: "user_settings", tab: t(r)("user_settings") }, { default: a(() => [e(mt)]), _: 1 }, 8, ["tab"]), e(y, { name: "workerconfig", tab: t(r)("workerconfig") }, { default: a(() => [e(ft)]), _: 1 }, 8, ["tab"])]), _: 1 })]), _: 1 }, 8, ["tab"]), e(y, { name: "account", tab: t(r)("account") }, { default: a(() => [e(D, { type: "bar", "justify-content": "center", animated: "" }, { default: a(() => [e(y, { name: "account", tab: t(r)("account") }, { default: a(() => [e(sn)]), _: 1 }, 8, ["tab"]), e(y, { name: "account_create", tab: t(r)("account_create") }, { default: a(() => [e(un)]), _: 1 }, 8, ["tab"]), e(y, { name: "account_settings", tab: t(r)("account_settings") }, { default: a(() => [e(ct)]), _: 1 }, 8, ["tab"]), e(y, { name: "senderAccess", tab: t(r)("senderAccess") }, { default: a(() => [e(Ga)]), _: 1 }, 8, ["tab"]), e(y, { name: "webhook", tab: t(r)("webhookSettings") }, { default: a(() => [e(Dn)]), _: 1 }, 8, ["tab"])]), _: 1 })]), _: 1 }, 8, ["tab"]), e(y, { name: "user", tab: t(r)("user") }, { default: a(() => [e(D, { type: "bar", "justify-content": "center", animated: "" }, { default: a(() => [e(y, { name: "user_management", tab: t(r)("user_management") }, { default: a(() => [e(_n)]), _: 1 }, 8, ["tab"]), e(y, { name: "user_settings", tab: t(r)("user_settings") }, { default: a(() => [e(mt)]), _: 1 }, 8, ["tab"]), e(y, { name: "userOauth2Settings", tab: t(r)("userOauth2Settings") }, { default: a(() => [e(xn)]), _: 1 }, 8, ["tab"])]), _: 1 })]), _: 1 }, 8, ["tab"]), e(y, { name: "mails", tab: t(r)("mails") }, { default: a(() => [e(D, { type: "bar", "justify-content": "center", animated: "" }, { default: a(() => [e(y, { name: "mails", tab: t(r)("mails") }, { default: a(() => [e(Cn)]), _: 1 }, 8, ["tab"]), e(y, { name: "unknow", tab: t(r)("unknow") }, { default: a(() => [e(Sn)]), _: 1 }, 8, ["tab"]), e(y, { name: "sendBox", tab: t(r)("sendBox") }, { default: a(() => [e(en)]), _: 1 }, 8, ["tab"]), e(y, { name: "sendMail", tab: t(r)("sendMail") }, { default: a(() => [e(Hn)]), _: 1 }, 8, ["tab"]), e(y, { name: "mailWebhook", tab: t(r)("mailWebhook") }, { default: a(() => [e(On)]), _: 1 }, 8, ["tab"])]), _: 1 })]), _: 1 }, 8, ["tab"]), e(y, { name: "telegram", tab: t(r)("telegram") }, { default: a(() => [e(In)]), _: 1 }, 8, ["tab"]), e(y, { name: "statistics", tab: t(r)("statistics") }, { default: a(() => [e(Xa)]), _: 1 }, 8, ["tab"]), e(y, { name: "maintenance", tab: t(r)("maintenance") }, { default: a(() => [e(D, { type: "bar", "justify-content": "center", animated: "" }, { default: a(() => [e(y, { name: "workerconfig", tab: t(r)("workerconfig") }, { default: a(() => [e(ft)]), _: 1 }, 8, ["tab"]), e(y, { name: "maintenance", tab: t(r)("maintenance") }, { default: a(() => [e(Tn)]), _: 1 }, 8, ["tab"])]), _: 1 })]), _: 1 }, 8, ["tab"]), e(y, { name: "appearance", tab: t(r)("appearance") }, { default: a(() => [e(ya)]), _: 1 }, 8, ["tab"]), e(y, { name: "about", tab: t(r)("about") }, { default: a(() => [e(wa)]), _: 1 }, 8, ["tab"])]), _: 1 }, 8, ["value", "placement"])) : pe("", true)]);
  };
} }, Qn = Z(Wn, [["__scopeId", "data-v-97f7ab23"]]);
export {
  Qn as default
};
