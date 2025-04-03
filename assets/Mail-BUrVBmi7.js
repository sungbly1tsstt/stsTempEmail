import { Z as h, $ as g, r as w, O as D, a5 as v, V as x, as as d, at as p, a9 as e, a7 as s, a4 as M, aR as T, aS as b, am as k, W as i, a6 as l, Y as N, ay as O, ac as n, a8 as c, aT as S } from "./index-xastp6wq.js";
const V = { class: "center" }, B = ["srcdoc"], I = { __name: "Mail", setup(C) {
  const { telegramApp: r, loading: _, useUTCDate: f } = g(), m = T(), a = w({});
  D(r, async () => {
    r.value.initData && (a.value = await u());
  });
  const u = async () => {
    try {
      const t = await M.fetch("/telegram/get_mail", { method: "POST", body: JSON.stringify({ initData: r.value.initData, mailId: m.query.mail_id }) });
      return _.value = true, await b(t);
    } catch (t) {
      return console.error(t), {};
    } finally {
      _.value = false;
    }
  };
  return v(async () => {
    a.value = await u();
  }), (t, R) => {
    const o = O, y = k;
    return i(), x("div", V, [e(a).message ? (i(), d(y, { key: 0, bordered: false, embedded: "", style: { "max-width": "800px", height: "100%" } }, { default: s(() => [l(o, { type: "info" }, { default: s(() => [n(" ID: " + c(e(a).id), 1)]), _: 1 }), l(o, { type: "info" }, { default: s(() => [n(" Date: " + c(e(S)(e(a).created_at, e(f))), 1)]), _: 1 }), l(o, { type: "info" }, { default: s(() => [n(" FROM: " + c(e(a).source), 1)]), _: 1 }), t.showEMailTo ? (i(), d(o, { key: 0, type: "info" }, { default: s(() => [n(" TO: " + c(e(a).address), 1)]), _: 1 })) : p("", true), N("iframe", { srcdoc: e(a).message, style: { "margin-top": "10px", width: "100%", height: "100%" } }, null, 8, B)]), _: 1 })) : p("", true)]);
  };
} }, q = h(I, [["__scopeId", "data-v-5ff036bb"]]);
export {
  q as default
};
