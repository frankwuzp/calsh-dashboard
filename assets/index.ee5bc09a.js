var Pt = Object.defineProperty,
    kt = Object.defineProperties;
var Nt = Object.getOwnPropertyDescriptors;
var B = Object.getOwnPropertySymbols;
var de = Object.prototype.hasOwnProperty,
    pe = Object.prototype.propertyIsEnumerable;
var V = (e, t, n) => t in e ? Pt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n,
    d = (e, t) => { for (var n in t || (t = {})) de.call(t, n) && V(e, n, t[n]); if (B)
            for (var n of B(t)) pe.call(t, n) && V(e, n, t[n]); return e },
    x = (e, t) => kt(e, Nt(t));
var D = (e, t) => { var n = {}; for (var o in e) de.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]); if (e != null && B)
        for (var o of B(e)) t.indexOf(o) < 0 && pe.call(e, o) && (n[o] = e[o]); return n };
var fe = (e, t, n) => (V(e, typeof t != "symbol" ? t + "" : t, n), n);
import { i as $t, B as At, a as Tt, b as Lt, R as l, s as It, f as Rt, u as Ot, r as s, G as Ut, Q as Bt, c as Dt, d as jt, e as Mt, g as C, I as Ft, E as zt, h as Wt, j as $, k as R, T as me, M as he, l as qt, L as ge, F as Ht, m as Vt, n as Gt, o as Jt, p as Kt, q as Qt, t as Yt, v as Xt, S as G, w as Zt, x as en, H as tn, y as xe, z as nn } from "./vendor.38e754a4.js";
const on = function() { const t = document.createElement("link").relList; if (t && t.supports && t.supports("modulepreload")) return; for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
    new MutationObserver(r => { for (const a of r)
            if (a.type === "childList")
                for (const c of a.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && o(c) }).observe(document, { childList: !0, subtree: !0 });

    function n(r) { const a = {}; return r.integrity && (a.integrity = r.integrity), r.referrerpolicy && (a.referrerPolicy = r.referrerpolicy), r.crossorigin === "use-credentials" ? a.credentials = "include" : r.crossorigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a }

    function o(r) { if (r.ep) return;
        r.ep = !0; const a = n(r);
        fetch(r.href, a) } };
on();
const rn = "modulepreload",
    ye = {},
    sn = "./",
    v = function(t, n) { return !n || n.length === 0 ? t() : Promise.all(n.map(o => { if (o = `${sn}${o}`, o in ye) return;
            ye[o] = !0; const r = o.endsWith(".css"),
                a = r ? '[rel="stylesheet"]' : ""; if (document.querySelector(`link[href="${o}"]${a}`)) return; const c = document.createElement("link"); if (c.rel = r ? "stylesheet" : rn, r || (c.as = "script", c.crossOrigin = ""), c.href = o, document.head.appendChild(c), r) return new Promise((i, u) => { c.addEventListener("load", i), c.addEventListener("error", u) }) })).then(() => t()) },
    ve = { zh: v(() => import("./zh.247ad8fa.js"), []), en: v(() => import("./en.f1dd5536.js"), []) };
$t.use(At).use(Tt).use(Lt).init({ debug: !1, backend: { loadPath: "/__{{lng}}/{{ns}}.json", request: function(e, t, n, o) { let r; switch (t) {
                case "/__zh/translation.json":
                case "/__zh-CN/translation.json":
                    r = ve.zh; break;
                case "/__en/translation.json":
                default:
                    r = ve.en; break } r && r.then(a => { o(null, { status: 200, data: a.data }) }) } }, supportedLngs: ["en", "zh"], fallbackLng: "en", interpolation: { escapeValue: !1 } });

function an(e, t) { let n; return (...o) => { n && clearTimeout(n), n = setTimeout(() => { e(...o) }, t) } }

function _e(e) { return e.replace(/\/$/, "") }

function oa(e, t) { let n = String(e); for (; n.length < t;) n = "0" + n; return n }
const cn = { "Content-Type": "application/json" };

function ln({ secret: e }) { const t = d({}, cn); return e && (t.Authorization = `Bearer ${e}`), t }

function Ee(e, t, n) { const o = "?" + t.toString(),
        r = new URL(e); return r.protocol === "https:" ? r.protocol = "wss:" : r.protocol = "ws:", `${_e(r.href)}${n}${o}` }

function h({ baseURL: e, secret: t }) { const n = ln({ secret: t }); return { url: e, init: { headers: n } } }

function we(e, t) { const { baseURL: n, secret: o } = e, r = new URLSearchParams({ token: o }); return Ee(n, r, t) }

function ra(e, t) { const { baseURL: n, secret: o, logLevel: r } = e, a = new URLSearchParams({ token: o, level: r }); return Ee(n, a, t) } async function un(e, t) { let n = {}; try { const { url: o, init: r } = h(t), a = await fetch(o + e, r);
        a.ok && (n = await a.json()) } catch (o) { console.log(`failed to fetch ${e}`, o) } return n }
const dn = "_root_1o14m_1",
    pn = "_h1_1o14m_7";
var be = { root: dn, h1: pn };

function fn({ title: e }) { return l.createElement("div", { className: be.root }, l.createElement("h1", { className: be.h1 }, e)) }
var Ce = l.memo(fn);
It(!1);
const { createContext: J, memo: mn, useMemo: hn, useRef: gn, useEffect: xn, useCallback: Se, useContext: K, useState: yn } = l, Pe = J(null), ke = J(null), Ne = J(null);

function vn() { return K(Ne) }

function _n({ initialState: e, actions: t = {}, children: n }) { const o = gn(e),
        [r, a] = yn(e),
        c = Se(() => o.current, []);
    xn(() => {}, [c]); const i = Se((p, m) => { if (typeof p == "function") return p(i, c); const g = Rt(c(), m);
            g !== o.current && (o.current = g, a(g)) }, [c]),
        u = hn(() => $e(t, i), [t, i]); return l.createElement(Pe.Provider, { value: r }, l.createElement(ke.Provider, { value: i }, l.createElement(Ne.Provider, { value: u }, n))) }

function _(e) { return t => { const n = mn(t);

        function o(r) { const a = K(Pe),
                c = K(ke),
                i = e(a, r),
                u = d(d({ dispatch: c }, r), i); return l.createElement(n, d({}, u)) } return o } }

function En(e, t) { return function(...n) { return t(e.apply(this, n)) } }

function $e(e, t) { const n = {}; for (const o in e) { const r = e[o];
        typeof r == "function" ? n[o] = En(r, t) : typeof r == "object" && (n[o] = $e(r, t)) } return n }
const Ae = "yacd.haishan.me";

function wn() { try { const e = localStorage.getItem(Ae); return e ? JSON.parse(e) : void 0 } catch { return } }

function k(e) { try { const t = JSON.stringify(e);
        localStorage.setItem(Ae, t) } catch {} }
const Te = "/configs";
async function Le(e) { const { url: t, init: n } = h(e); return await fetch(t + Te, n) }

function bn(e) { return "socks-port" in e && (e["socket-port"] = e["socks-port"]), e } async function Cn(e, t) { const { url: n, init: o } = h(e), r = JSON.stringify(bn(t)); return await fetch(n + Te, x(d({}, o), { body: r, method: "PATCH" })) }
const Ie = "/traffic",
    Sn = new TextDecoder("utf-8"),
    j = 150,
    O = { labels: Array(j), up: Array(j), down: Array(j), size: j, subscribers: [], appendData(e) { this.up.push(e.up), this.down.push(e.down); const t = new Date,
                n = "" + t.getMinutes() + t.getSeconds();
            this.labels.push(n), this.up.length > this.size && this.up.shift(), this.down.length > this.size && this.down.shift(), this.labels.length > this.size && this.labels.shift(), this.subscribers.forEach(o => o(e)) }, subscribe(e) { return this.subscribers.push(e), () => { const t = this.subscribers.indexOf(e);
                this.subscribers.splice(t, 1) } } };
let A = !1,
    M = "";

function Q(e) { O.appendData(JSON.parse(e)) }

function Re(e) { return e.read().then(({ done: t, value: n }) => { M += Sn.decode(n, { stream: !t }); const r = M.split(`
`),
            a = r[r.length - 1]; for (let c = 0; c < r.length - 1; c++) Q(r[c]); if (t) { Q(a), M = "", console.log("GET /traffic streaming done"), A = !1; return } else M = a; return Re(e) }) }
let F;

function Y(e) { if (A || F === 1) return O;
    F = 1; const t = we(e, Ie),
        n = new WebSocket(t); return n.addEventListener("error", function(o) { F = 3 }), n.addEventListener("close", function(o) { F = 3, Pn(e) }), n.addEventListener("message", function(o) { Q(o.data) }), O }

function Pn(e) { if (A) return O;
    A = !0; const { url: t, init: n } = h(e); return fetch(t + Ie, n).then(o => { if (o.ok) { const r = o.body.getReader();
            Re(r) } else A = !1 }, o => { console.log("fetch /traffic error", o), A = !1 }), O }

function Oe(e) { return t => { t(`openModal:${e}`, n => { n.modals[e] = !0 }) } }

function kn(e) { return t => { t(`closeModal:${e}`, n => { n.modals[e] = !1 }) } }
const Nn = { apiConfig: !1 },
    sa = e => e.configs.configs,
    $n = e => e.configs.haveFetchedConfig,
    aa = e => e.configs.configs["log-level"];

function Ue(e) { return async (t, n) => { let o; try { o = await Le(e) } catch { t(Oe("apiConfig")); return } if (!o.ok) { console.log("Error fetch configs", o.statusText), t(Oe("apiConfig")); return } const r = await o.json();
        t("store/configs#fetchConfigs", c => { c.configs.configs = r }), $n(n()) ? Y(e) : t(An()) } }

function An() { return e => { e("store/configs#markHaveFetchedConfig", t => { t.configs.haveFetchedConfig = !0 }) } }

function ca(e, t) { return async n => { Cn(e, t).then(o => { o.ok === !1 && console.log("Error update configs", o.statusText) }, o => { throw console.log("Error update configs", o), o }).then(() => { n(Ue(e)) }), n("storeConfigsOptimisticUpdateConfigs", o => { o.configs.configs = d(d({}, o.configs.configs), t) }) } }
const Tn = { configs: { port: 7890, "socks-port": 7891, "redir-port": 0, "allow-lan": !1, mode: "Rule", "log-level": "uninit" }, haveFetchedConfig: !1 },
    T = e => { const t = e.app.selectedClashAPIConfigIndex; return e.app.clashAPIConfigs[t] },
    Be = e => e.app.selectedClashAPIConfigIndex,
    X = e => e.app.clashAPIConfigs,
    Z = e => e.app.theme,
    Ln = e => e.app.selectedChartStyleIndex,
    In = e => e.app.latencyTestUrl,
    la = e => e.app.collapsibleIsOpen,
    ia = e => e.app.proxySortBy,
    ua = e => e.app.hideUnavailableProxies,
    Rn = e => e.app.autoCloseOldConns,
    da = e => e.app.logStreamingPaused,
    On = an(k, 600);

function ee(e, { baseURL: t, secret: n }) { const o = X(e()); for (let r = 0; r < o.length; r++) { const a = o[r]; if (a.baseURL === t && a.secret === n) return r } }

function Un({ baseURL: e, secret: t }) { return async (n, o) => { if (ee(o, { baseURL: e, secret: t })) return; const a = { baseURL: e, secret: t, addedAt: Date.now() };
        n("addClashAPIConfig", c => { c.app.clashAPIConfigs.push(a) }), k(o().app) } }

function Bn({ baseURL: e, secret: t }) { return async (n, o) => { const r = ee(o, { baseURL: e, secret: t });
        n("removeClashAPIConfig", a => { a.app.clashAPIConfigs.splice(r, 1) }), k(o().app) } }

function Dn({ baseURL: e, secret: t }) { return async (n, o) => { const r = ee(o, { baseURL: e, secret: t });
        Be(o()) !== r && n("selectClashAPIConfig", c => { c.app.selectedClashAPIConfigIndex = r }), k(o().app); try { window.location.reload() } catch {} } }
const De = document.querySelector("html"),
    je = document.querySelector('meta[name="theme-color"]');

function Me(e = "dark") { e === "dark" ? (De.setAttribute("data-theme", "dark"), je.setAttribute("content", "#202020")) : (De.setAttribute("data-theme", "light"), je.setAttribute("content", "#f7f7f7")) }

function jn() { return (e, t) => { const o = Z(t()) === "light" ? "dark" : "light";
        Me(o), e("storeSwitchTheme", r => { r.app.theme = o }), k(t().app) } }

function Mn(e) { return (t, n) => { t("appSelectChartStyleIndex", o => { o.app.selectedChartStyleIndex = Number(e) }), k(n().app) } }

function Fe(e, t) { return (n, o) => { n("appUpdateAppConfig", r => { r.app[e] = t }), k(o().app) } }

function Fn(e, t, n) { return (o, r) => { o("updateCollapsibleIsOpen", a => { a.app.collapsibleIsOpen[`${e}:${t}`] = n }), On(r().app) } }
var Ct, St;
const zn = { baseURL: (St = (Ct = document.getElementById("app")) == null ? void 0 : Ct.getAttribute("data-base-url")) != null ? St : "http://127.0.0.1:9090", secret: "", addedAt: 0 },
    Wn = { selectedClashAPIConfigIndex: 0, clashAPIConfigs: [zn], latencyTestUrl: "http://www.gstatic.com/generate_204", selectedChartStyleIndex: 0, theme: "dark", collapsibleIsOpen: {}, proxySortBy: "Natural", hideUnavailableProxies: !1, autoCloseOldConns: !1, logStreamingPaused: !1 };

function qn() { const { search: e } = window.location, t = {}; if (typeof e != "string" || e === "") return t; const n = e.replace(/^\?/, "").split("&"); for (let o = 0; o < n.length; o++) { const [r, a] = n[o].split("=");
        t[r] = encodeURIComponent(a) } return t }

function Hn() { let e = wn();
    e = d(d({}, Wn), e); const t = qn(),
        n = e.clashAPIConfigs[e.selectedClashAPIConfigIndex]; if (n) { const o = new URL(n.baseURL);
        t.hostname && (o.hostname = t.hostname), t.port && (o.port = t.port), n.baseURL = _e(o.href), t.secret && (n.secret = t.secret) } return (t.theme === "dark" || t.theme === "light") && (e.theme = t.theme), Me(e.theme), e }
const Vn = "_root_dn70c_1",
    Gn = "_mono_dn70c_10",
    Jn = "_link_dn70c_14";
var te = { root: Vn, mono: Gn, link: Jn };

function ze({ name: e, link: t, version: n }) { return s.exports.createElement("div", { className: te.root }, s.exports.createElement("h2", null, e), s.exports.createElement("p", null, s.exports.createElement("span", null, "Version "), s.exports.createElement("span", { className: te.mono }, n)), s.exports.createElement("p", null, s.exports.createElement("a", { className: te.link, href: t, target: "_blank", rel: "noopener noreferrer" }, s.exports.createElement(Ut, { size: 20 }), s.exports.createElement("span", null, "Source")))) }

function Kn(e) { const { data: t } = Ot(["/version", e.apiConfig], () => un("/version", e.apiConfig)); return s.exports.createElement(s.exports.Fragment, null, s.exports.createElement(Ce, { title: "About" }), t && t.version ? s.exports.createElement(ze, { name: "Clash", version: t.version, link: "https://github.com/Dreamacro/clash" }) : null, s.exports.createElement(ze, { name: "Yacd", version: "0.3.4", link: "https://github.com/haishanh/yacd" })) }
const Qn = e => ({ apiConfig: T(e) }),
    Yn = _(Qn)(Kn),
    Xn = "_loading_74j3j_1",
    Zn = "_spinner_74j3j_9",
    eo = "_rotate_74j3j_1";
var We = { loading: Xn, spinner: Zn, rotate: eo };
const qe = ({ height: e }) => { const t = e ? { height: e } : {}; return l.createElement("div", { className: We.loading, style: t }, l.createElement("div", { className: We.spinner })) },
    to = e => ({ apiConfig: T(e), apiConfigs: X(e) });

function no({ apiConfig: e, apiConfigs: t }) { return s.exports.useEffect(() => { let n = "DashboardClash"; if (t.length > 1) try { n = `${new URL(e.baseURL).host} - DashboardClash` } catch {} document.title = n }), s.exports.createElement(s.exports.Fragment, null) }
const oo = _(to)(no),
    ro = new Bt,
    so = new Dt({ queryCache: ro, defaultOptions: { queries: { suspense: !0 } } }),
    ne = 300,
    He = e => e.logs.logs,
    Ve = e => e.logs.tail,
    ao = e => e.logs.searchText,
    pa = jt(He, Ve, ao, (e, t, n) => { const o = []; for (let r = t; r >= 0; r--) o.push(e[r]); if (e.length === ne)
            for (let r = ne - 1; r > t; r--) o.push(e[r]); return n === "" ? o : o.filter(r => r.payload.toLowerCase().indexOf(n) >= 0) });

function fa(e) { return t => { t("logsUpdateSearchText", n => { n.logs.searchText = e.toLowerCase() }) } }

function ma(e) { return (t, n) => { const o = n(),
            r = He(o),
            a = Ve(o),
            c = a >= ne - 1 ? 0 : a + 1;
        r[c] = e, t("logsAppendLog", i => { i.logs.tail = c }) } }
const co = { searchText: "", logs: [], tail: -1 },
    z = "/connections",
    W = [];

function lo(e) { let t; try { t = JSON.parse(e) } catch { console.log("JSON.parse error", JSON.parse(e)) } W.forEach(n => n(t)) }
let oe;

function io(e, t) { if (oe === 1 && t) return Ge(t);
    oe = 1; const n = we(e, z),
        o = new WebSocket(n); if (o.addEventListener("error", () => oe = 3), o.addEventListener("message", r => lo(r.data)), t) return Ge(t) }

function Ge(e) { return W.push(e),
        function() { const n = W.indexOf(e);
            W.splice(n, 1) } } async function ha(e) { const { url: t, init: n } = h(e); return await fetch(t + z, x(d({}, n), { method: "DELETE" })) } async function uo(e) { const { url: t, init: n } = h(e); return await fetch(t + z, d({}, n)) } async function po(e, t) { const { url: n, init: o } = h(e), r = `${n}${z}/${t}`; return await fetch(r, x(d({}, o), { method: "DELETE" })) }
const re = "/proxies";
async function fo(e) { const { url: t, init: n } = h(e); return await (await fetch(t + re, n)).json() } async function mo(e, t, n) { const o = { name: n },
        { url: r, init: a } = h(e),
        c = `${r}${re}/${t}`; return await fetch(c, x(d({}, a), { method: "PUT", body: JSON.stringify(o) })) } async function ho(e, t, n = "http://www.gstatic.com/generate_204") { const { url: o, init: r } = h(e), a = `timeout=5000&url=${n}`, c = `${o}${re}/${encodeURIComponent(t)}/delay?${a}`; return await fetch(c, r) } async function go(e) { const { url: t, init: n } = h(e), o = await fetch(t + "/providers/proxies", n); return o.status === 404 ? { providers: {} } : await o.json() } async function Je(e, t) { const { url: n, init: o } = h(e), r = x(d({}, o), { method: "PUT" }); return await fetch(n + "/providers/proxies/" + t, r) } async function xo(e, t) { const { url: n, init: o } = h(e), r = x(d({}, o), { method: "GET" }); return await fetch(n + "/providers/proxies/" + t + "/healthcheck", r) }
const yo = { proxies: {}, delay: {}, groupNames: [], showModalClosePrevConns: !1 },
    Ke = () => null,
    vo = ["Direct", "Fallback", "Reject", "Selector", "URLTest", "LoadBalance", "Unknown"],
    _o = e => e.proxies.proxies,
    Qe = e => e.proxies.delay,
    ga = e => e.proxies.groupNames,
    Eo = e => e.proxies.proxyProviders || [],
    Ye = e => e.proxies.dangleProxyNames,
    xa = e => e.proxies.showModalClosePrevConns;

function L(e) { return async (t, n) => { const [o, r] = await Promise.all([fo(e), go(e)]), { providers: a, proxies: c } = $o(r.providers), i = d(d({}, c), o.proxies), [u, p] = No(i), m = Qe(n()), g = d({}, m); for (let f = 0; f < p.length; f++) { const y = p[f],
                { history: w } = i[y] || { history: [] },
                b = w[w.length - 1];
            b && typeof b.delay == "number" && (g[y] = { number: b.delay }) } const P = []; for (const f of p) c[f] || P.push(f);
        t("store/proxies#fetchProxies", f => { f.proxies.proxies = i, f.proxies.groupNames = u, f.proxies.delay = g, f.proxies.proxyProviders = a, f.proxies.dangleProxyNames = P }) } }

function ya(e, t) { return async n => { try { await Je(e, t) } catch {} n(L(e)) } }

function va(e, t) { return async n => { for (let o = 0; o < t.length; o++) try { await Je(e, t[o]) } catch {} n(L(e)) } } async function Xe(e, t) { try { await xo(e, t) } catch {} }

function _a(e, t) { return async n => { await Xe(e, t), await n(L(e)) } } async function wo(e, t, n) { const o = await uo(e);
    o.ok || console.log("unable to fetch all connections", o.statusText); const a = (await o.json()).connections,
        c = []; for (const i of a) i.chains.indexOf(t) > -1 && i.chains.indexOf(n) < 0 && c.push(i.id);
    await Promise.all(c.map(i => po(e, i).catch(Ke))) }

function bo(e, t, n) { const o = [n, t]; let r, a = n; for (;
        (r = e[a]) && r.now;) o.unshift(r.now), a = r.now; return o } async function Co(e, t, n, o, r) { try { if ((await mo(n, o, r)).ok === !1) throw new Error("failed to switch proxy: res.statusText") } catch (c) { throw console.log(c, "failed to swith proxy"), c } if (e(L(n)), Rn(t())) { const c = _o(t());
        et(n, c, { groupName: o, itemName: r }) } }

function Ze() { return e => { e("closeModalClosePrevConns", t => { t.proxies.showModalClosePrevConns = !1 }) } }

function et(e, t, n) { const o = bo(t, n.groupName, n.itemName);
    wo(e, n.groupName, o[0]) }

function So(e) { return async (t, n) => { var c; const o = n(),
            r = (c = o.proxies.switchProxyCtx) == null ? void 0 : c.to; if (!r) { t(Ze()); return } const a = o.proxies.proxies;
        et(e, a, r), t("closePrevConnsAndTheModal", i => { i.proxies.showModalClosePrevConns = !1, i.proxies.switchProxyCtx = void 0 }) } }

function Ea(e, t, n) { return async (o, r) => { Co(o, r, e, t, n).catch(Ke), o("store/proxies#switchProxy", a => { const c = a.proxies.proxies;
            c[t] && c[t].now && (c[t].now = n) }) } }

function Po(e, t) { return async (n, o) => { const r = In(o()),
            a = await ho(e, t, r); let c = "";
        a.ok === !1 && (c = a.statusText); const { delay: i } = await a.json(), u = Qe(o()), p = x(d({}, u), {
            [t]: { error: c, number: i } });
        n("requestDelayForProxyOnce", m => { m.proxies.delay = p }) } }

function tt(e, t) { return async n => { await n(Po(e, t)) } }

function ko(e, t) { return async (n, o) => { const r = Ye(o()),
            a = t.filter(c => r.indexOf(c) > -1).map(c => n(tt(e, c)));
        await Promise.all(a), await n(L(e)) } }

function wa(e) { return async (t, n) => { const o = Ye(n());
        await Promise.all(o.map(a => t(tt(e, a)))); const r = Eo(n()); for (const a of r) await Xe(e, a.name);
        await t(L(e)) } }

function No(e) { let t = [],
        n; const o = []; for (const r in e) { const a = e[r];
        a.all && Array.isArray(a.all) ? (t.push(r), r === "GLOBAL" && (n = a.all)) : vo.indexOf(a.type) < 0 && o.push(r) } return n && (n.push("GLOBAL"), t = t.map(r => [n.indexOf(r), r]).sort((r, a) => r[0] - a[0]).map(r => r[1])), [t, o] }

function $o(e) { const t = Object.keys(e),
        n = [],
        o = {}; for (let r = 0; r < t.length; r++) { const a = e[t[r]]; if (a.name === "default" || a.vehicleType === "Compatible") continue; const c = a.proxies,
            i = []; for (let u = 0; u < c.length; u++) { const p = c[u];
            o[p.name] = p, i.push(p.name) } a.proxies = i, n.push(a) } return { providers: n, proxies: o } }
const Ao = { requestDelayForProxies: ko, closeModalClosePrevConns: Ze, closePrevConnsAndTheModal: So },
    ba = Mt({ key: "proxyFilterText", default: "" }),
    To = { app: Hn(), modals: Nn, configs: Tn, proxies: yo, logs: co },
    Lo = { selectChartStyleIndex: Mn, updateAppConfig: Fe, app: { updateCollapsibleIsOpen: Fn, updateAppConfig: Fe, removeClashAPIConfig: Bn, selectClashAPIConfig: Dn }, proxies: Ao },
    { useState: Io, useCallback: Ro } = l;

function Oo(e = !1) { const [t, n] = Io(e), o = Ro(() => n(r => !r), []); return [t, o] }
const Uo = "_ul_1d6f2_1",
    Bo = "_li_1d6f2_10",
    Do = "_close_1d6f2_28",
    jo = "_eye_1d6f2_36",
    Mo = "_hasSecret_1d6f2_45",
    Fo = "_url_1d6f2_50",
    zo = "_secret_1d6f2_54",
    Wo = "_btn_1d6f2_72";
var E = { ul: Uo, li: Bo, close: Do, eye: jo, hasSecret: Mo, url: Fo, secret: zo, btn: Wo };
const qo = e => ({ apiConfigs: X(e), selectedClashAPIConfigIndex: Be(e) }),
    Ho = _(qo)(Vo);

function Vo({ apiConfigs: e, selectedClashAPIConfigIndex: t }) { const { app: { removeClashAPIConfig: n, selectClashAPIConfig: o } } = vn(), r = s.exports.useCallback(c => { n(c) }, [n]), a = s.exports.useCallback(c => { o(c) }, [o]); return s.exports.createElement(s.exports.Fragment, null, s.exports.createElement("ul", { className: E.ul }, e.map((c, i) => s.exports.createElement("li", { className: C(E.li, {
            [E.hasSecret]: c.secret, [E.isSelected]: i === t }), key: c.baseURL + c.secret }, s.exports.createElement(Go, { disableRemove: i === t, baseURL: c.baseURL, secret: c.secret, onRemove: r, onSelect: a }))))) }

function Go({ baseURL: e, secret: t, disableRemove: n, onRemove: o, onSelect: r }) { const [a, c] = Oo(), i = a ? zt : Wt, u = s.exports.useCallback(p => { p.stopPropagation() }, []); return s.exports.createElement(s.exports.Fragment, null, s.exports.createElement(nt, { disabled: n, onClick: () => o({ baseURL: e, secret: t }), className: E.close }, s.exports.createElement(Ft, { size: 20 })), s.exports.createElement("span", { className: E.url, tabIndex: 0, role: "button", onClick: () => r({ baseURL: e, secret: t }), onKeyUp: u }, e), s.exports.createElement("span", null), t ? s.exports.createElement(s.exports.Fragment, null, s.exports.createElement("span", { className: E.secret }, a ? t : "***"), s.exports.createElement(nt, { onClick: c, className: E.eye }, s.exports.createElement(i, { size: 20 }))) : null) }

function nt({ children: e, onClick: t, className: n, disabled: o }) { return s.exports.createElement("button", { disabled: o, className: C(n, E.btn), onClick: t }, e) }
const Jo = "_root_zwtea_1",
    Ko = "_header_zwtea_5",
    Qo = "_icon_zwtea_10",
    Yo = "_body_zwtea_20",
    Xo = "_hostnamePort_zwtea_24",
    Zo = "_error_zwtea_36",
    er = "_footer_zwtea_42";
var N = { root: Jo, header: Ko, icon: Qo, body: Yo, hostnamePort: Xo, error: Zo, footer: er };
const tr = "_btn_1h2nv_1",
    nr = "_minimal_1h2nv_34",
    or = "_btnStart_1h2nv_51",
    rr = "_loadingContainer_1h2nv_58";
var q = { btn: tr, minimal: nr, btnStart: or, loadingContainer: rr };
const sr = "_sectionNameType_8lri2_1",
    ar = "_loadingDot_8lri2_66",
    cr = "_dot2_8lri2_1",
    lr = "_dot1_8lri2_1",
    ir = "_dot3_8lri2_1";
var ot = { sectionNameType: sr, loadingDot: ar, dot2: cr, dot1: lr, dot3: ir };

function Ca({ name: e, type: t }) { return l.createElement("h2", { className: ot.sectionNameType }, l.createElement("span", null, e), l.createElement("span", null, t)) }

function ur() { return l.createElement("span", { className: ot.loadingDot }) }
const { forwardRef: dr, useCallback: pr } = $;

function fr(e, t) { const w = e,
        { onClick: n, disabled: o = !1, isLoading: r, kind: a = "primary", className: c, children: i, label: u, text: p, start: m } = w,
        g = D(w, ["onClick", "disabled", "isLoading", "kind", "className", "children", "label", "text", "start"]),
        P = { children: i, label: u, text: p, start: m },
        f = pr(b => { r || n && n(b) }, [r, n]),
        y = C(q.btn, {
            [q.minimal]: a === "minimal" }, c); return s.exports.createElement("button", d({ className: y, ref: t, onClick: f, disabled: o }, g), r ? s.exports.createElement(s.exports.Fragment, null, s.exports.createElement("span", { style: { display: "inline-flex", opacity: 0 } }, s.exports.createElement(rt, d({}, P))), s.exports.createElement("span", { className: q.loadingContainer }, s.exports.createElement(ur, null))) : s.exports.createElement(rt, d({}, P))) }

function rt({ children: e, label: t, text: n, start: o }) { return s.exports.createElement(s.exports.Fragment, null, o ? s.exports.createElement("span", { className: q.btnStart }, typeof o == "function" ? o() : o) : null, e || t || n) }
var mr = dr(fr);
const hr = "_root_1or8t_1",
    gr = "_floatAbove_1or8t_32";
var st = { root: hr, floatAbove: gr };
const { useCallback: xr } = $;

function at(a) { var c = a,
        { id: e, label: t, value: n, onChange: o } = c,
        r = D(c, ["id", "label", "value", "onChange"]); const i = xr(u => o(u), [o]); return s.exports.createElement("div", { className: st.root }, s.exports.createElement("input", d({ id: e, value: n, onChange: i }, r)), s.exports.createElement("label", { htmlFor: e, className: st.floatAbove }, t)) }
const yr = "_path_r8pm3_1",
    vr = "_dash_r8pm3_1";
var _r = { path: yr, dash: vr };

function se({ width: e = 320, height: t = 320, animate: n = !1, c0: o = "currentColor", stroke: r = "#eee", eye: a = "#eee", mouth: c = "#eee" }) { const i = C({
        [_r.path]: n }); return s.exports.createElement("svg", { width: e, height: t, viewBox: "0 0 320 320", xmlns: "http://www.w3.org/2000/svg" }, s.exports.createElement("g", { fill: "none", fillRule: "evenodd" }, s.exports.createElement("path", { d: "M71.689 53.055c9.23-1.487 25.684 27.263 41.411 56.663 18.572-8.017 71.708-7.717 93.775 0 4.714-15.612 31.96-57.405 41.626-56.663 3.992.088 13.07 31.705 23.309 94.96 2.743 16.949 7.537 47.492 14.38 91.63-42.339 17.834-84.37 26.751-126.095 26.751-41.724 0-83.756-8.917-126.095-26.751C52.973 116.244 65.536 54.047 71.689 53.055z", stroke: r, strokeWidth: "4", strokeLinecap: "round", fill: o, className: i }), s.exports.createElement("circle", { fill: a, cx: "216.5", cy: "181.5", r: "14.5" }), s.exports.createElement("circle", { fill: a, cx: "104.5", cy: "181.5", r: "14.5" }), s.exports.createElement("g", { stroke: c, strokeLinecap: "round", strokeWidth: "4" }, s.exports.createElement("path", { d: "M175.568 218.694c-2.494 1.582-5.534 2.207-8.563 1.508-3.029-.7-5.487-2.594-7.035-5.11M143.981 218.694c2.494 1.582 5.534 2.207 8.563 1.508 3.03-.7 5.488-2.594 7.036-5.11" })))) }
const { useState: ae, useRef: ct, useCallback: ce, useEffect: Er } = $, lt = 0, wr = e => ({ apiConfig: T(e) });

function br({ dispatch: e }) { const [t, n] = ae(""), [o, r] = ae(""), [a, c] = ae(""), i = ct(!1), u = ct(null), p = ce(f => { i.current = !0, c(""); const y = f.target,
            { name: w } = y,
            b = y.value; switch (w) {
            case "baseURL":
                n(b); break;
            case "secret":
                r(b); break;
            default:
                throw new Error(`unknown input name ${w}`) } }, []), m = ce(() => { Cr({ baseURL: t, secret: o }).then(f => { f[0] !== lt ? c(f[1]) : e(Un({ baseURL: t, secret: o })) }) }, [t, o, e]), g = ce(f => { f.target instanceof Element && (!f.target.tagName || f.target.tagName.toUpperCase() !== "INPUT") || f.key === "Enter" && m() }, [m]), P = async () => {
        (await fetch("/")).json().then(y => { y.hello === "clash" && n(window.location.origin) }) }; return Er(() => { P() }, []), s.exports.createElement("div", { className: N.root, ref: u, onKeyDown: g }, s.exports.createElement("div", { className: N.header }, s.exports.createElement("div", { className: N.icon }, s.exports.createElement(se, { width: 160, height: 160, stroke: "var(--stroke)" }))), s.exports.createElement("div", { className: N.body }, s.exports.createElement("div", { className: N.hostnamePort }, s.exports.createElement(at, { id: "baseURL", name: "baseURL", label: "API Base URL", type: "text", placeholder: "http://127.0.0.1:9090", value: t, onChange: p }), s.exports.createElement(at, { id: "secret", name: "secret", label: "Secret(optional)", value: o, type: "text", onChange: p }))), s.exports.createElement("div", { className: N.error }, a || null), s.exports.createElement("div", { className: N.footer }, s.exports.createElement(mr, { label: "Add", onClick: m })), s.exports.createElement("div", { style: { height: 20 } }), s.exports.createElement(Ho, null)) }
var it = _(wr)(br);
async function Cr(e) { try { new URL(e.baseURL) } catch { if (e.baseURL) { const n = e.baseURL.substring(0, 7); if (n !== "http://" && n !== "https:/") return [1, "Must starts with http:// or https://"] } return [1, "Invalid URL"] } try { const t = await Le(e); return t.status > 399 ? [1, t.statusText] : [lt] } catch { return [1, "Failed to connect"] } }

function Sr(e) { let t = {}; const n = {},
        o = {};

    function r(u = "default") { return n[u] = e(u).then(p => { delete n[u], t[u] = p }).catch(p => { o[u] = p }), n[u] }

    function a(u = "default") { t[u] !== void 0 || n[u] || r(u) }

    function c(u = "default") { if (t[u] !== void 0) return t[u]; throw o[u] ? o[u] : n[u] ? n[u] : r(u) }

    function i(u) { u ? delete t[u] : t = {} } return { preload: a, read: c, clear: i } }
const ut = Sr(() => v(() => import("./index.fe1062b5.js"), ["assets/index.fe1062b5.js", "assets/vendor.38e754a4.js"])),
    Pr = "_iconWrapper_5pz1j_1",
    kr = "_themeSwitchContainer_5pz1j_23";
var dt = { iconWrapper: Pr, themeSwitchContainer: kr };

function Nr({ theme: e, dispatch: t }) { const { t: n } = R(), o = s.exports.useCallback(() => { t(jn()) }, [t]); return s.exports.createElement(me, { label: n("theme"), "aria-label": "switch to " + (e === "light" ? "dark" : "light") + " theme" }, s.exports.createElement("button", { className: C(dt.iconWrapper, dt.themeSwitchContainer), onClick: o }, e === "light" ? s.exports.createElement($r, null) : s.exports.createElement(Ar, null))) }

function $r() { const t = ut.read().motion; return s.exports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, s.exports.createElement(t.path, { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z", initial: { rotate: -30 }, animate: { rotate: 0 }, transition: { duration: .7 } })) }

function Ar() { const t = ut.read().motion; return s.exports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, s.exports.createElement("circle", { cx: "12", cy: "12", r: "5" }), s.exports.createElement(t.g, { initial: { scale: .8 }, animate: { scale: 1 }, transition: { duration: .7 } }, s.exports.createElement("line", { x1: "12", y1: "1", x2: "12", y2: "3" }), s.exports.createElement("line", { x1: "12", y1: "21", x2: "12", y2: "23" }), s.exports.createElement("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }), s.exports.createElement("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }), s.exports.createElement("line", { x1: "1", y1: "12", x2: "3", y2: "12" }), s.exports.createElement("line", { x1: "21", y1: "12", x2: "23", y2: "12" }), s.exports.createElement("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }), s.exports.createElement("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" }))) }
const Tr = e => ({ theme: Z(e) }),
    pt = _(Tr)(Nr),
    le = 0,
    ie = {
        [le]: { message: "Browser not supported!", detail: 'This browser does not support "fetch", please choose another one.' }, default: { message: "Oops, something went wrong!" } };

function Lr(e) { const { code: t } = e; return typeof t == "number" ? ie[t] : ie.default }
const Ir = "_content_b98hm_1",
    Rr = "_container_b98hm_16",
    Or = "_overlay_b98hm_22",
    Ur = "_fixed_b98hm_26";
var H = { content: Ir, container: Rr, overlay: Or, fixed: Ur };
const Br = "_overlay_85t19_1",
    Dr = "_content_85t19_11";
var ft = { overlay: Br, content: Dr };

function jr(c) { var i = c,
        { isOpen: e, onRequestClose: t, className: n, overlayClassName: o, children: r } = i,
        a = D(i, ["isOpen", "onRequestClose", "className", "overlayClassName", "children"]); const u = C(n, ft.content),
        p = C(o, ft.overlay); return s.exports.createElement(he, d({ isOpen: e, onRequestClose: t, className: u, overlayClassName: p }, a), r) }
var Mr = s.exports.memo(jr);
const { useCallback: Fr, useEffect: zr } = $;

function Wr({ dispatch: e, apiConfig: t, modals: n }) { if (!window.fetch) { const { detail: r } = ie[le], a = new Error(r); throw a.code = le, a } const o = Fr(() => { e(kn("apiConfig")) }, [e]); return zr(() => { e(Ue(t)) }, [e, t]), s.exports.createElement(Mr, { isOpen: n.apiConfig, className: H.content, overlayClassName: H.overlay, shouldCloseOnOverlayClick: !1, shouldCloseOnEsc: !1, onRequestClose: o }, s.exports.createElement("div", { className: H.container }, s.exports.createElement(it, null)), s.exports.createElement("div", { className: H.fixed }, s.exports.createElement(pt, null))) }
const qr = e => ({ modals: e.modals, apiConfig: T(e) });
var Hr = _(qr)(Wr);
const Vr = "_root_4m2cd_1",
    Gr = "_yacd_4m2cd_14",
    Jr = "_link_4m2cd_23";
var ue = { root: Vr, DashboardClash: Gr, link: Jr };

function Kr({ width: e = 24, height: t = 24 } = {}) { return l.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: t, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, l.createElement("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" })) }
const Qr = "https://github.com/haishanh/yacd/issues";

function Yr({ message: e, detail: t }) { return l.createElement("div", { className: ue.root }, l.createElement("div", { className: ue.DashboardClash }, l.createElement(se, { width: 150, height: 150 })), e ? l.createElement("h1", null, e) : null, t ? l.createElement("p", null, t) : null, l.createElement("p", null, l.createElement("a", { className: ue.link, href: Qr }, l.createElement(Kr, { width: 16, height: 16 }), "haishanh/yacd"))) } class Xr extends s.exports.Component { constructor() { super(...arguments);
        fe(this, "state", { error: null }) } static getDerivedStateFromError(t) { return { error: t } } render() { if (this.state.error) { const { message: t, detail: n } = Lr(this.state.error); return s.exports.createElement(Yr, { message: t, detail: n }) } else return this.props.children } }
const Zr = "_root_ecp08_1";
var mt = { root: Zr };
const ht = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

function U(e) { if (e < 1e3) return e + " B"; const t = Math.min(Math.floor(Math.log10(e) / 3), ht.length - 1);
    e = Number((e / Math.pow(1e3, t)).toPrecision(3)); const n = ht[t]; return e + " " + n }
const es = qt.exports.unstable_createResource(() => v(() => import("./Chart.min.44f6c6c6.js").then(function(e) { return e.C }), ["assets/Chart.min.44f6c6c6.js", "assets/vendor.38e754a4.js"]).then(e => e.default)),
    gt = { borderWidth: 1, lineTension: 0, pointRadius: 0 },
    ts = { responsive: !0, maintainAspectRatio: !0, title: { display: !1 }, legend: { display: !0, position: "top", labels: { fontColor: "#ccc", boxWidth: 20 } }, tooltips: { enabled: !1, mode: "index", intersect: !1, animationDuration: 100 }, hover: { mode: "nearest", intersect: !0 }, scales: { xAxes: [{ display: !1, gridLines: { display: !1 } }], yAxes: [{ display: !0, gridLines: { display: !0, color: "#555", borderDash: [3, 6], drawBorder: !1 }, ticks: { callback(e) { return U(e) + "/s " } } }] } },
    xt = [{ down: { backgroundColor: "rgba(176, 209, 132, 0.8)", borderColor: "rgb(176, 209, 132)" }, up: { backgroundColor: "rgba(181, 220, 231, 0.8)", borderColor: "rgb(181, 220, 231)" } }, { up: { backgroundColor: "rgb(98, 190, 100)", borderColor: "rgb(78,146,79)" }, down: { backgroundColor: "rgb(160, 230, 66)", borderColor: "rgb(110, 156, 44)" } }, { up: { backgroundColor: "rgba(94, 175, 223, 0.3)", borderColor: "rgb(94, 175, 223)" }, down: { backgroundColor: "rgba(139, 227, 195, 0.3)", borderColor: "rgb(139, 227, 195)" } }, { up: { backgroundColor: "rgba(242, 174, 62, 0.3)", borderColor: "rgb(242, 174, 62)" }, down: { backgroundColor: "rgba(69, 154, 248, 0.3)", borderColor: "rgb(69, 154, 248)" } }],
    { useEffect: ns } = l,
    os = ts;

function rs(e, t, n, o, r = {}) { ns(() => { const a = document.getElementById(t).getContext("2d"),
            c = new e(a, { type: "line", data: n, options: d(d({}, os), r) }),
            i = o && o.subscribe(() => c.update()); return () => { i && i(), c.destroy() } }, [e, t, n, o, r]) }
const { useMemo: ss } = $, as = { position: "relative", maxWidth: 1e3 }, cs = e => ({ apiConfig: T(e), selectedChartStyleIndex: Ln(e) });
var ls = _(cs)(is);

function is({ apiConfig: e, selectedChartStyleIndex: t }) { const n = es.read(),
        o = Y(e),
        { t: r } = R(),
        a = ss(() => ({ labels: o.labels, datasets: [x(d(d({}, gt), xt[t].up), { label: r("Up"), data: o.up }), x(d(d({}, gt), xt[t].down), { label: r("Down"), data: o.down })] }), [o, t, r]); return rs(n, "trafficChart", a, o), s.exports.createElement("div", { style: as }, s.exports.createElement("canvas", { id: "trafficChart" })) }
const us = "_TrafficNow_1wdp6_1",
    ds = "_sec_1wdp6_7";
var I = { TrafficNow: us, sec: ds };
const { useState: yt, useEffect: vt, useCallback: ps } = $, fs = e => ({ apiConfig: T(e) });
var ms = _(fs)(hs);

function hs({ apiConfig: e }) { const { t } = R(), { upStr: n, downStr: o } = gs(e), { upTotal: r, dlTotal: a, connNumber: c } = xs(e); return s.exports.createElement("div", { className: I.TrafficNow }, s.exports.createElement("div", { className: I.sec }, s.exports.createElement("div", null, t("Upload")), s.exports.createElement("div", null, n)), s.exports.createElement("div", { className: I.sec }, s.exports.createElement("div", null, t("Download")), s.exports.createElement("div", null, o)), s.exports.createElement("div", { className: I.sec }, s.exports.createElement("div", null, t("Upload Total")), s.exports.createElement("div", null, r)), s.exports.createElement("div", { className: I.sec }, s.exports.createElement("div", null, t("Download Total")), s.exports.createElement("div", null, a)), s.exports.createElement("div", { className: I.sec }, s.exports.createElement("div", null, t("Active Connections")), s.exports.createElement("div", null, c))) }

function gs(e) { const [t, n] = yt({ upStr: "0 B/s", downStr: "0 B/s" }); return vt(() => Y(e).subscribe(o => n({ upStr: U(o.up) + "/s", downStr: U(o.down) + "/s" })), [e]), t }

function xs(e) { const [t, n] = yt({ upTotal: "0 B", dlTotal: "0 B", connNumber: 0 }), o = ps(({ downloadTotal: r, uploadTotal: a, connections: c }) => { n({ upTotal: U(a), dlTotal: U(r), connNumber: c.length }) }, [n]); return vt(() => io(e, o), [e, o]), t }

function ys() { const { t: e } = R(); return l.createElement("div", null, l.createElement(Ce, { title: e("Overview") }), l.createElement("div", { className: mt.root }, l.createElement("div", null, l.createElement(ms, null)), l.createElement("div", { className: mt.chart }, l.createElement(s.exports.Suspense, { fallback: l.createElement(qe, { height: "200px" }) }, l.createElement(ls, null))))) }
const vs = "_lo_pmly2_1";
var _s = { lo: vs };

function Es() { return l.createElement("div", { className: _s.lo }, l.createElement(se, { width: 280, height: 280, animate: !0, c0: "transparent", c1: "#646464" })) }
const ws = "_app_1q2jw_1",
    bs = "_content_1q2jw_17";
var _t = { app: ws, content: bs };
const Cs = "_root_wh224_1",
    Ss = "_logoPlaceholder_wh224_7",
    Ps = "_rows_wh224_17",
    ks = "_row_wh224_17",
    Ns = "_rowActive_wh224_54",
    $s = "_label_wh224_64",
    As = "_footer_wh224_80",
    Ts = "_iconWrapper_wh224_92";
var S = { root: Cs, logoPlaceholder: Ss, rows: Ps, row: ks, rowActive: Ns, label: $s, footer: As, iconWrapper: Ts };
const Ls = { activity: Ht, globe: Vt, command: Gt, file: Jt, settings: Kt, link: Qt },
    Is = s.exports.memo(function({ isActive: t, to: n, iconId: o, labelText: r }) { const a = Ls[o],
            c = C(S.row, t ? S.rowActive : null); return s.exports.createElement(ge, { to: n, className: c }, s.exports.createElement(a, null), s.exports.createElement("div", { className: S.label }, r)) }),
    Rs = [{ to: "/", iconId: "activity", labelText: "Overview" }, { to: "/proxies", iconId: "globe", labelText: "Proxies" }, { to: "/rules", iconId: "command", labelText: "Rules" }, { to: "/connections", iconId: "link", labelText: "Conns" }, { to: "/configs", iconId: "settings", labelText: "Config" }, { to: "/logs", iconId: "file", labelText: "Logs" }];

function Os() { const { t: e } = R(), t = Yt(); return s.exports.createElement("div", { className: S.root }, s.exports.createElement("div", { className: S.logoPlaceholder }), s.exports.createElement("div", { className: S.rows }, Rs.map(({ to: n, iconId: o, labelText: r }) => s.exports.createElement(Is, { key: n, to: n, isActive: t.pathname === n, iconId: o, labelText: e(r) }))), s.exports.createElement("div", { className: S.footer }, s.exports.createElement(pt, null), s.exports.createElement(me, { label: e("about") }, s.exports.createElement(ge, { to: "/about", className: S.iconWrapper }, s.exports.createElement(Xt, { size: 20 }))))) }
const Us = "_input_4ejw0_1";
var Sa = { input: Us };
const Bs = G.default ? G.default : G;

function Ds({ checked: e = !1, onChange: t, theme: n, name: o }) { const r = n === "dark" ? "#393939" : "#e9e9e9"; return l.createElement(Bs, { onChange: t, checked: e, uncheckedIcon: !1, checkedIcon: !1, offColor: r, onColor: "#047aff", offHandleColor: "#fff", onHandleColor: "#fff", handleDiameter: 24, height: 28, width: 44, className: "rs", name: o }) }
var Pa = _(e => ({ theme: Z(e) }))(Ds);
const js = "_ToggleSwitch_10mtp_1",
    Ms = "_slider_10mtp_28";
var Et = { ToggleSwitch: js, slider: Ms };

function Fs({ options: e, value: t, name: n, onChange: o }) { const r = s.exports.useMemo(() => e.map(i => i.value).indexOf(t), [e, t]),
        a = s.exports.useCallback(i => { const u = Math.floor(100 / e.length); if (i === e.length - 1) return 100 - e.length * u + u; if (i > -1) return u }, [e]),
        c = s.exports.useMemo(() => ({ width: a(r) + "%", left: r * a(0) + "%" }), [r, a]); return l.createElement("div", { className: Et.ToggleSwitch }, l.createElement("div", { className: Et.slider, style: c }), e.map((i, u) => { const p = `${n}-${i.label}`,
            m = u === 0 ? "" : "border-left"; return l.createElement("label", { htmlFor: p, key: p, className: m, style: { width: a(u) + "%" } }, l.createElement("input", { id: p, name: n, type: "radio", value: i.value, checked: t === i.value, onChange: o }), l.createElement("div", null, i.label)) })) } l.memo(Fs);
const zs = s.exports.lazy(() => v(() => import("./Connections.52bc9670.js"), ["assets/Connections.52bc9670.js", "assets/Connections.9de0e2a6.css", "assets/vendor.38e754a4.js", "assets/useRemainingViewPortHeight.7baef998.js", "assets/index.9233837d.js", "assets/Fab.4dc9cb99.js", "assets/Fab.200e0680.css"])),
    Ws = s.exports.lazy(() => v(() => import("./Config.029b666f.js"), ["assets/Config.029b666f.js", "assets/Config.af7c0f33.css", "assets/vendor.38e754a4.js", "assets/logs.4dcb9935.js", "assets/Select.29a5a6ae.js", "assets/Select.9a98fc65.css"])),
    qs = s.exports.lazy(() => v(() => import("./Logs.01e28256.js"), ["assets/Logs.01e28256.js", "assets/Logs.8b54b7be.css", "assets/vendor.38e754a4.js", "assets/index.esm.edbe839b.js", "assets/logs.4dcb9935.js", "assets/debounce.76599460.js", "assets/useRemainingViewPortHeight.7baef998.js", "assets/Fab.4dc9cb99.js", "assets/Fab.200e0680.css"])),
    Hs = s.exports.lazy(() => v(() => import("./Proxies.71af777a.js"), ["assets/Proxies.71af777a.js", "assets/Proxies.831754de.css", "assets/vendor.38e754a4.js", "assets/Fab.4dc9cb99.js", "assets/Fab.200e0680.css", "assets/TextFitler.cc7f7fa3.js", "assets/TextFitler.00e03ee5.css", "assets/debounce.76599460.js", "assets/index.9233837d.js", "assets/Select.29a5a6ae.js", "assets/Select.9a98fc65.css"])),
    Vs = s.exports.lazy(() => v(() => import("./Rules.b2ac0faa.js"), ["assets/Rules.b2ac0faa.js", "assets/Rules.a609ca62.css", "assets/vendor.38e754a4.js", "assets/index.esm.edbe839b.js", "assets/TextFitler.cc7f7fa3.js", "assets/TextFitler.00e03ee5.css", "assets/debounce.76599460.js", "assets/index.9233837d.js", "assets/Fab.4dc9cb99.js", "assets/Fab.200e0680.css", "assets/useRemainingViewPortHeight.7baef998.js"])),
    Gs = [{ path: "/", element: l.createElement(ys, null) }, { path: "/connections", element: l.createElement(zs, null) }, { path: "/configs", element: l.createElement(Ws, null) }, { path: "/logs", element: l.createElement(qs, null) }, { path: "/proxies", element: l.createElement(Hs, null) }, { path: "/rules", element: l.createElement(Vs, null) }, { path: "/about", element: l.createElement(Yn, null) }, !1].filter(Boolean);

function Js() { return xe(Gs) }

function Ks() { return l.createElement(l.Fragment, null, l.createElement(Hr, null), l.createElement(Os, null), l.createElement("div", { className: _t.content }, l.createElement(s.exports.Suspense, { fallback: l.createElement(Es, null) }, l.createElement(Js, null)))) }

function Qs() { return xe([{ path: "/backend", element: l.createElement(it, null) }, { path: "*", element: l.createElement(Ks, null) }]) }
const Ys = () => l.createElement(Xr, null, l.createElement(Zt, null, l.createElement(_n, { initialState: To, actions: Lo }, l.createElement(en, { client: so }, l.createElement(tn, null, l.createElement("div", { className: _t.app }, l.createElement(oo, null), l.createElement(s.exports.Suspense, { fallback: l.createElement(qe, null) }, l.createElement(Qs, null)))))))),
    Xs = Boolean(window.location.hostname === "localhost" || window.location.hostname === "[::1]" || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

function Zs(e) { if ("serviceWorker" in navigator) { if (new URL("./", window.location.href).origin !== window.location.origin) return;
        window.addEventListener("load", () => { const n = ".//sw.js";
            Xs ? (ea(n, e), navigator.serviceWorker.ready.then(() => { console.log("This web app is being served cache-first by a service worker") })) : wt(n, e) }) } }

function wt(e, t) { navigator.serviceWorker.register(e).then(n => { n.onupdatefound = () => { const o = n.installing;
            o != null && (o.onstatechange = () => { o.state === "installed" && (navigator.serviceWorker.controller ? (console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."), t && t.onUpdate && t.onUpdate(n)) : (console.log("Content is cached for offline use."), t && t.onSuccess && t.onSuccess(n))) }) } }).catch(n => { console.error("Error during service worker registration:", n) }) }

function ea(e, t) { fetch(e, { headers: { "Service-Worker": "script" } }).then(n => { const o = n.headers.get("content-type");
        n.status === 404 || o != null && o.indexOf("javascript") === -1 ? navigator.serviceWorker.ready.then(r => { r.unregister().then(() => { window.location.reload() }) }) : wt(e, t) }).catch(() => { console.log("No internet connection found. App is running in offline mode.") }) }
const bt = document.getElementById("app");
he.setAppElement(bt);
nn.render(l.createElement(l.StrictMode, null, l.createElement(Ys, null)), bt);
Zs();
console.log("Checkout the repo: https://github.com/haishanh/yacd");
console.log("Version:", "0.3.4");
export { aa as A, mr as B, Ce as C, da as D, Ca as E, ba as F, _o as G, Qe as H, Ea as I, la as J, ia as K, ua as L, ya as M, vo as N, va as O, wa as P, ut as Q, _a as R, se as S, Rn as T, L as U, ga as V, Eo as W, xa as X, ha as a, es as b, _ as c, gt as d, xt as e, io as f, T as g, sa as h, Ue as i, ca as j, vn as k, Pa as l, ft as m, Ln as n, Oe as o, U as p, In as q, ra as r, Sa as s, h as t, rs as u, oa as v, ao as w, fa as x, ma as y, pa as z };