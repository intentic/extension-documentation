import { hostSlot as e, sandboxLedger as t, sandboxPoll as n } from "@intentic/extension-api";
import { Fragment as r, computed as i, createBlock as a, createCommentVNode as o, createElementBlock as s, createElementVNode as c, createSlots as l, createTextVNode as u, createVNode as d, defineComponent as f, mergeModels as p, mergeProps as ee, nextTick as m, normalizeClass as te, openBlock as h, ref as ne, renderList as re, toDisplayString as g, unref as _, useModel as ie, watch as ae, withCtx as v, withKeys as oe, withModifiers as se } from "vue";
import { AgentRunButton as ce, Button as y, Checkbox as le, Icon as ue, Markdown as de, Modal as fe, NavRail as pe, Notice as me, PageAction as he, Picker as ge, Row as _e, ScrollFrame as ve, SegmentedControl as ye, SplitView as be, StatusBadge as xe, appLink as Se, timeAgo as Ce, ui as we, useAgentRunPick as Te, useLoadingReveal as Ee } from "@intentic/extension-ui";
import { useQuery as De, useQueryClient as Oe } from "@tanstack/vue-query";
//#region \0rolldown/runtime.js
var ke = Object.defineProperty, b = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, Ae = (e, t) => {
	let n = {};
	for (var r in e) ke(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || ke(n, Symbol.toStringTag, { value: "Module" }), n;
}, je, Me, Ne = b((() => {
	({bindHost: je, host: Me} = e("ext-documentation"));
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/util.js
function Pe(e) {
	let t = Object.values(e).filter((e) => typeof e == "number");
	return Object.entries(e).filter(([e, n]) => t.indexOf(+e) === -1).map(([e, t]) => t);
}
function Fe(e, t = "|") {
	return e.map((e) => Ye(e)).join(t);
}
function Ie(e, t) {
	return typeof t == "bigint" ? t.toString() : t;
}
function Le(e) {
	return { get value() {
		{
			let t = e();
			return Object.defineProperty(this, "value", { value: t }), t;
		}
	} };
}
function Re(e) {
	return e == null;
}
function ze(e) {
	let t = +!!e.startsWith("^"), n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
function Be(e, t) {
	let n = e / t, r = Math.round(n), i = 4 * 2 ** -52 * Math.max(Math.abs(n), 1);
	return Math.abs(n - r) < i ? 0 : n - r;
}
function x(e, t, n) {
	let r;
	Object.defineProperty(e, t, {
		get() {
			if (r !== xt) return r === void 0 && (r = xt, r = n()), r;
		},
		set(n) {
			Object.defineProperty(e, t, { value: n });
		},
		configurable: !0
	});
}
function S(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function Ve(...e) {
	let t = {};
	for (let n of e) {
		let e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function He(e) {
	return JSON.stringify(e);
}
function Ue(e) {
	return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
function We(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function Ge(e) {
	if (We(e) === !1) return !1;
	let t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	let n = t.prototype;
	return We(n) !== !1 && Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") !== !1;
}
function Ke(e) {
	return Ge(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
function qe(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Je(e, t, n) {
	let r = new e._zod.constr(t ?? e._zod.def);
	return (!t || n?.parent) && (r._zod.parent = e), r;
}
function C(e) {
	let t = e;
	if (!t) return {};
	if (typeof t == "string") return { error: () => t };
	if (t?.message !== void 0) {
		if (t?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
		t.error = t.message;
	}
	return delete t.message, typeof t.error == "string" ? {
		...t,
		error: () => t.error
	} : t;
}
function Ye(e) {
	return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function Xe(e) {
	return Object.keys(e).filter((t) => e[t]._zod.optin !== void 0 && e[t]._zod.optout === "optional");
}
function Ze(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
	return Je(e, Ve(e._zod.def, {
		get shape() {
			let e = {};
			for (let r of Reflect.ownKeys(t)) {
				if (!Object.prototype.hasOwnProperty.call(n.shape, r)) throw Error(`Unrecognized key: "${String(r)}"`);
				t[r] && S(e, r, n.shape[r]);
			}
			return S(this, "shape", e), e;
		},
		checks: []
	}));
}
function Qe(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
	return Je(e, Ve(e._zod.def, {
		get shape() {
			let r = { ...e._zod.def.shape };
			for (let e of Reflect.ownKeys(t)) {
				if (!Object.prototype.hasOwnProperty.call(n.shape, e)) throw Error(`Unrecognized key: "${String(e)}"`);
				t[e] && delete r[e];
			}
			return S(this, "shape", r), r;
		},
		checks: []
	}));
}
function $e(e, t) {
	if (!Ge(t)) throw Error("Invalid input to extend: expected a plain object");
	let n = e._zod.def.checks;
	if (n && n.length > 0) {
		let n = e._zod.def.shape;
		for (let e of Reflect.ownKeys(t)) if (Object.getOwnPropertyDescriptor(n, e) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return Je(e, Ve(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return S(this, "shape", n), n;
	} }));
}
function et(e, t) {
	if (!Ge(t)) throw Error("Invalid input to safeExtend: expected a plain object");
	return Je(e, Ve(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return S(this, "shape", n), n;
	} }));
}
function tt(e, t) {
	if (!t?._zod?.def) throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
	if (e._zod.def.checks?.length) throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	return Je(e, Ve(e._zod.def, {
		get shape() {
			let n = {
				...e._zod.def.shape,
				...t._zod.def.shape
			};
			return S(this, "shape", n), n;
		},
		get catchall() {
			return t._zod.def.catchall;
		},
		checks: t._zod.def.checks ?? []
	}));
}
function nt(e, t, n, r = "partial") {
	let i = t._zod.def.checks;
	if (i && i.length > 0) throw Error(`.${r}() cannot be used on object schemas containing refinements`);
	return Je(t, Ve(t._zod.def, {
		get shape() {
			let r = t._zod.def.shape, i = { ...r };
			if (n) for (let t of Reflect.ownKeys(n)) {
				if (!Object.prototype.hasOwnProperty.call(r, t)) throw Error(`Unrecognized key: "${String(t)}"`);
				n[t] && (i[t] = e ? new e({
					type: "optional",
					innerType: r[t]
				}) : r[t]);
			}
			else for (let t of Reflect.ownKeys(r)) i[t] = e ? new e({
				type: "optional",
				innerType: r[t]
			}) : r[t];
			return S(this, "shape", i), i;
		},
		checks: []
	}));
}
function rt(e, t, n) {
	return Je(t, Ve(t._zod.def, { get shape() {
		let r = t._zod.def.shape, i = { ...r };
		if (n) for (let t of Reflect.ownKeys(n)) {
			if (!Object.prototype.hasOwnProperty.call(i, t)) throw Error(`Unrecognized key: "${String(t)}"`);
			n[t] && (i[t] = new e({
				type: "nonoptional",
				innerType: r[t]
			}));
		}
		else for (let t of Reflect.ownKeys(r)) i[t] = new e({
			type: "nonoptional",
			innerType: r[t]
		});
		return S(this, "shape", i), i;
	} }));
}
function it(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
	return !1;
}
function at(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0;
	return !1;
}
function ot(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function st(e) {
	return typeof e == "string" ? e : e?.message;
}
function ct(e, t, n) {
	var r;
	for (let i = t; i < e.length; i++) (r = e[i]).schema ?? (r.schema = n);
}
function lt(e, t, n) {
	var r;
	let i = e.inst?._zod?.traits;
	i?.has("$ZodType") && (i.has("$ZodCheck") ? (r = e).schema ?? (r.schema = e.inst) : e.schema = e.inst);
	let a = e.schema === e.inst ? void 0 : e.schema?._zod.def?.error, o = e.message ? e.message : st(e.inst?._zod.def?.error?.(e)) ?? st(a?.(e)) ?? st(t?.error?.(e)) ?? st(n.customError?.(e)) ?? st(n.localeError?.(e)) ?? "Invalid input", { inst: s, schema: c, continue: l, input: u, ...d } = e;
	return d.path ??= [], d.message = o, t?.reportInput && (d.input = u), d;
}
function ut(e) {
	let t = e.length;
	if (!Et.test(e)) return t;
	let n = t;
	for (let r = 0; r < t - 1; r++) (e.charCodeAt(r) & 64512) == 55296 && (e.charCodeAt(r + 1) & 64512) == 56320 && (n--, r++);
	return n;
}
function dt(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function ft(e) {
	let t = typeof e;
	switch (t) {
		case "number": return Number.isNaN(e) ? "nan" : "number";
		case "object": {
			if (e === null) return "null";
			if (Array.isArray(e)) return "array";
			let t = e;
			if (t && Object.getPrototypeOf(t) !== Object.prototype && "constructor" in t && t.constructor) return t.constructor.name;
		}
	}
	return t;
}
function pt(...e) {
	let [t, n, r] = e;
	return typeof t == "string" ? {
		message: t,
		code: "custom",
		input: n,
		inst: r
	} : { ...t };
}
function mt(e, t) {
	for (let n in t) {
		let r = Object.getOwnPropertyDescriptor(t, n);
		r.get ? Object.defineProperty(e, n, {
			...r,
			enumerable: !1
		}) : _t(e, n, r.value);
	}
}
function ht(e, t, n, r = !0) {
	return Object.defineProperty(e, t, {
		configurable: !0,
		writable: !0,
		enumerable: r,
		value: n
	}), n;
}
function gt(e, t, n) {
	return ht(e, t, n, !1);
}
function _t(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		get() {
			return this == null ? n : ht(this, t, n.bind(this));
		},
		set(e) {
			ht(this, t, e);
		}
	});
}
function vt(e, t) {
	let n = Object.getPrototypeOf(e);
	return t in n ? void 0 : n;
}
function w(e, t, n) {
	let r = Object.getPrototypeOf(e._zod);
	if (t in r && Dt !== e._zod) {
		Dt = void 0;
		return;
	}
	Dt = e._zod, Object.defineProperty(r, t, {
		configurable: !0,
		get() {
			Object.defineProperty(this, t, kt);
			let e = Ot;
			Ot = !1;
			try {
				let r = n(this);
				return Ot ? delete this[t] : Object.defineProperty(this, t, {
					configurable: !0,
					writable: !0,
					value: r
				}), Ot ||= e, r;
			} catch (n) {
				throw delete this[t], Ot ||= e, n;
			}
		},
		set(e) {
			Object.defineProperty(this, t, {
				configurable: !0,
				writable: !0,
				value: e
			});
		}
	});
}
function yt(e, t, n, r) {
	let i = vt(e, t);
	i && Object.defineProperty(i, t, {
		configurable: !0,
		get() {
			let e = {
				configurable: !0,
				writable: !0,
				enumerable: r,
				value: void 0
			};
			return Object.defineProperty(this, t, e), e.value = n(this), Object.defineProperty(this, t, e), e.value;
		},
		set(e) {
			Object.defineProperty(this, t, {
				configurable: !0,
				writable: !0,
				enumerable: r,
				value: e
			});
		}
	});
}
function bt(e) {
	let t = () => e;
	return t[At] = !0, t;
}
var xt, St, Ct, wt, Tt, Et, Dt, Ot, kt, At, jt = b((() => {
	Bt(), xt = /* @__PURE__*/ Symbol("evaluating"), St = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {}, Ct = /* @__PURE__*/ Le(() => {
		if (zt.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
		try {
			return Function(""), !0;
		} catch {
			return !1;
		}
	}), wt = /* @__PURE__*/ new Set([
		"string",
		"number",
		"symbol"
	]), Tt = {
		safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
		int32: [-2147483648, 2147483647],
		uint32: [0, 4294967295],
		float32: [-34028234663852886e22, 34028234663852886e22],
		float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
	}, Et = /[\uD800-\uDBFF]/, Ot = !1, kt = {
		configurable: !0,
		get() {
			Ot = !0;
		}
	}, At = "~constantCatch";
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/core.js
function Mt(e) {
	let t = It;
	if (t) {
		let n = t.stackTraceLimit;
		if (typeof n == "number") {
			try {
				t.stackTraceLimit = 0;
			} catch {
				return It = null, new e();
			}
			try {
				return new e();
			} finally {
				t.stackTraceLimit = n;
			}
		}
	}
	return new e();
}
function T(e, t, n, r) {
	let i = {};
	function a(e) {
		this.def = e, this.constr = d, this.traits = /* @__PURE__ */ new Set();
	}
	a.prototype = i;
	let o = n, s = o && /* @__PURE__ */ new WeakSet();
	function c(n, r) {
		if (!n._zod) {
			Ft.value = new a(r);
			try {
				Object.defineProperty(n, "_zod", Ft);
			} finally {
				Ft.value = void 0;
			}
		}
		if (n._zod.traits.has(e)) return;
		if (n._zod.traits.add(e), t(n, r), s) {
			let e = Object.getPrototypeOf(n), t = n._zod.constr.prototype, r = e;
			for (; r && r !== t;) r = Object.getPrototypeOf(r);
			let i = r ?? e;
			s.has(i) || (s.add(i), mt(i, o));
		}
		let i = d.prototype;
		for (let e in i) Object.prototype.hasOwnProperty.call(i, e) && (e in n || (n[e] = i[e].bind(n)));
	}
	let l = r?.Parent ?? Object;
	class u extends l {}
	Object.defineProperty(u, "name", { value: e });
	function d(e) {
		let t = r?.Parent ? Mt(u) : this;
		c(t, e);
		let n = t._zod.deferred;
		if (n) {
			for (let e of n) e();
			t._zod.deferred = void 0;
		}
		let i = globalThis.__zod_globalConfig?.postProcessor;
		return i && i(t), t;
	}
	return Object.defineProperty(d, "init", { value: c }), Object.defineProperty(d, Symbol.hasInstance, { value: (t) => r?.Parent && t instanceof r.Parent ? !0 : t?._zod?.traits?.has(e) }), Object.defineProperty(d, "name", { value: e }), d;
}
function Nt(e) {
	return e && Object.assign(zt, e), zt;
}
var Pt, Ft, It, Lt, Rt, zt, Bt = b((() => {
	jt(), Ft = {
		value: void 0,
		enumerable: !1
	}, It = "captureStackTrace" in Error ? Error : null, Lt = class extends Error {
		constructor() {
			super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
		}
	}, Rt = class extends Error {
		constructor(e) {
			super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
		}
	}, (Pt = globalThis).__zod_globalConfig ?? (Pt.__zod_globalConfig = {}), zt = globalThis.__zod_globalConfig;
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/errors.js
function Vt() {
	let e = this._zod;
	return e.message ??= JSON.stringify(e.def, Ie, 2), e.message;
}
function Ht(e) {
	this._zod.message = e;
}
function Ut(e, t, n) {
	return Object.prototype.hasOwnProperty.call(e, t) || (t === "__proto__" ? Object.defineProperty(e, t, {
		value: n(),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : e[t] = n()), e[t];
}
function Wt(e, t = (e) => e.message) {
	let n = {}, r = [];
	for (let i of e.issues) i.path.length > 0 ? Ut(n, i.path[0], () => []).push(t(i)) : r.push(t(i));
	return {
		formErrors: r,
		fieldErrors: n
	};
}
function Gt(e, t = (e) => e.message) {
	let n = { _errors: [] }, r = (e, i = []) => {
		for (let a of e.issues) if (a.code === "invalid_union" && a.errors.length) a.errors.map((e) => r({ issues: e }, [...i, ...a.path]));
		else if (a.code === "invalid_key") r({ issues: a.issues }, [...i, ...a.path]);
		else if (a.code === "invalid_element") r({ issues: a.issues }, [...i, ...a.path]);
		else {
			let e = [...i, ...a.path];
			if (e.length === 0) n._errors.push(t(a));
			else {
				let r = n, i = 0;
				for (; i < e.length;) {
					let n = e[i], o = i === e.length - 1;
					if (n === "_errors") {
						o && r._errors.push(t(a)), i++;
						continue;
					}
					Object.prototype.hasOwnProperty.call(r, n) || Object.defineProperty(r, n, {
						value: { _errors: [] },
						enumerable: !0,
						writable: !0,
						configurable: !0
					});
					let s = r[n];
					o && s._errors.push(t(a)), r = s, i++;
				}
			}
		}
	};
	return r(e), n;
}
var Kt, qt, Jt, Yt, Xt, Zt, Qt, $t = b((() => {
	Bt(), jt(), Kt = {
		get: Vt,
		set: Ht,
		enumerable: !0,
		configurable: !0
	}, qt = {
		value: void 0,
		enumerable: !1
	}, Jt = {
		value: void 0,
		enumerable: !1
	}, Yt = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), Xt = (e, t) => {
		e.name = "$ZodError", qt.value = e._zod, Object.defineProperty(e, "_zod", qt), Jt.value = t, Object.defineProperty(e, "issues", Jt), qt.value = void 0, Jt.value = void 0, Object.defineProperty(e, "message", Kt);
		let n = Object.getPrototypeOf(e);
		Yt.has(n) || (Yt.add(n), Object.defineProperty(n, "toString", {
			configurable: !0,
			enumerable: !1,
			get() {
				let e = () => this.message;
				return Object.defineProperty(this, "toString", {
					value: e,
					configurable: !0,
					writable: !0
				}), e;
			},
			set(e) {
				Object.defineProperty(this, "toString", {
					value: e,
					configurable: !0,
					writable: !0
				});
			}
		}));
	}, Zt = T("$ZodError", Xt), Qt = T("$ZodError", Xt, void 0, { Parent: Error });
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/parse.js
function en(e, t) {
	return {
		callee: t?.callee ?? e,
		Err: t?.Err
	};
}
var tn, nn, rn, an, on, sn, cn, ln, un, dn, fn, pn, mn, hn, gn = b((() => {
	Bt(), $t(), jt(), tn = (e) => {
		let t = (n, r, i, a) => {
			let o = i ? {
				...i,
				async: !1
			} : { async: !1 }, s = n._zod.run({
				value: r,
				issues: []
			}, o);
			if (s instanceof Promise) throw new Lt();
			if (s.issues.length) {
				let n = new ((a?.Err) ?? e)(s.issues.map((e) => lt(e, o, Nt())));
				throw St(n, a?.callee ?? t), n;
			}
			return s.value;
		};
		return t;
	}, nn = (e) => {
		let t = async (n, r, i, a) => {
			let o = i ? {
				...i,
				async: !0
			} : { async: !0 }, s = n._zod.run({
				value: r,
				issues: []
			}, o);
			if (s instanceof Promise && (s = await s), s.issues.length) {
				let n = new ((a?.Err) ?? e)(s.issues.map((e) => lt(e, o, Nt())));
				throw St(n, a?.callee ?? t), n;
			}
			return s.value;
		};
		return t;
	}, rn = (e) => (t, n, r) => {
		let i = r ? {
			...r,
			async: !1
		} : { async: !1 }, a = t._zod.run({
			value: n,
			issues: []
		}, i);
		if (a instanceof Promise) throw new Lt();
		return a.issues.length ? {
			success: !1,
			error: new (e ?? Zt)(a.issues.map((e) => lt(e, i, Nt())))
		} : {
			success: !0,
			data: a.value
		};
	}, an = /* @__PURE__*/ rn(Qt), on = (e) => async (t, n, r) => {
		let i = r ? {
			...r,
			async: !0
		} : { async: !0 }, a = t._zod.run({
			value: n,
			issues: []
		}, i);
		return a instanceof Promise && (a = await a), a.issues.length ? {
			success: !1,
			error: new e(a.issues.map((e) => lt(e, i, Nt())))
		} : {
			success: !0,
			data: a.value
		};
	}, sn = /* @__PURE__*/ on(Qt), cn = (e) => {
		let t = tn(e), n = (e, r, i, a) => {
			let o = i ? {
				...i,
				direction: "backward"
			} : { direction: "backward" };
			return t(e, r, o, en(n, a));
		};
		return n;
	}, ln = (e) => {
		let t = tn(e), n = (e, r, i, a) => t(e, r, i, en(n, a));
		return n;
	}, un = (e) => {
		let t = nn(e), n = async (e, r, i, a) => {
			let o = i ? {
				...i,
				direction: "backward"
			} : { direction: "backward" };
			return await t(e, r, o, en(n, a));
		};
		return n;
	}, dn = (e) => {
		let t = nn(e), n = async (e, r, i, a) => await t(e, r, i, en(n, a));
		return n;
	}, fn = (e) => (t, n, r) => {
		let i = r ? {
			...r,
			direction: "backward"
		} : { direction: "backward" };
		return rn(e)(t, n, i);
	}, pn = (e) => (t, n, r) => rn(e)(t, n, r), mn = (e) => async (t, n, r) => {
		let i = r ? {
			...r,
			direction: "backward"
		} : { direction: "backward" };
		return on(e)(t, n, i);
	}, hn = (e) => async (t, n, r) => on(e)(t, n, r);
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/regexes.js
function _n(e) {
	return RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
}
function vn() {
	return new RegExp(Nn, "u");
}
function yn(e) {
	return RegExp(`^${e}$`);
}
function bn(e) {
	let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : e.seconds ? `${t}:[0-5]\\d(?:\\.\\d+)?` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function xn(e) {
	return RegExp(`^${bn(e)}$`);
}
function Sn(e) {
	let t = ["Z"];
	e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let n = `${bn({
		precision: e.precision,
		seconds: !0
	})}(?:${t.join("|")})`, r = e.local ? `${n}|${bn({ precision: e.precision })}` : n;
	return RegExp(`^${Hn}T(?:${r})$`);
}
var Cn, wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, Jn, Yn, Xn = b((() => {
	Cn = /^[cC][0-9a-z]{6,}$/, wn = /^[0-9a-z]+$/, Tn = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, En = /^[0-9a-vA-V]{20}$/, Dn = /^[A-Za-z0-9]{27}$/, On = /^[a-zA-Z0-9_-]{21}$/, kn = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, An = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, jn = (e) => e ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Mn = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Nn = "^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$", Pn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Fn = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, In = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Ln = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Rn = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, zn = /^[A-Za-z0-9_-]*$/, Bn = /^https?$/, Vn = /^\+[1-9]\d{6,14}$/, Hn = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Un = /*@__PURE__*/ yn(Hn), Wn = (e) => {
		let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
		return RegExp(`^${t}$`);
	}, Gn = /^-?\d+$/, Kn = /^-?\d+(?:\.\d+)?$/, qn = /^(?:true|false)$/i, Jn = /^[^A-Z]*$/, Yn = /^[^a-z]*$/;
})), E, Zn, Qn, $n, er, tr, nr, rr, ir, ar, or, sr, cr, lr, ur, dr, fr, pr, mr = b((() => {
	Bt(), Xn(), jt(), E = /*@__PURE__*/ T("$ZodCheck", (e, t) => {
		var n;
		e._zod ??= {}, e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
	}), Zn = (e) => {
		let t = e.value;
		return !Re(t) && t.length !== void 0;
	}, Qn = {
		number: "number",
		bigint: "bigint",
		object: "date"
	}, $n = /*@__PURE__*/ T("$ZodCheckLessThan", (e, t) => {
		E.init(e, t);
		let n = Qn[typeof t.value];
		e._zod.onattach.push((e) => {
			let n = e._zod.bag, r = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? Infinity;
			t.value < r && (t.inclusive ? n.maximum = t.value : n.exclusiveMaximum = t.value);
		}), e._zod.check = (r) => {
			(t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({
				origin: Qn[typeof r.value] ?? n,
				code: "too_big",
				maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
				input: r.value,
				inclusive: t.inclusive,
				inst: e,
				continue: !t.abort
			});
		};
	}), er = /*@__PURE__*/ T("$ZodCheckGreaterThan", (e, t) => {
		E.init(e, t);
		let n = Qn[typeof t.value];
		e._zod.onattach.push((e) => {
			let n = e._zod.bag, r = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? -Infinity;
			t.value > r && (t.inclusive ? n.minimum = t.value : n.exclusiveMinimum = t.value);
		}), e._zod.check = (r) => {
			(t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({
				origin: Qn[typeof r.value] ?? n,
				code: "too_small",
				minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
				input: r.value,
				inclusive: t.inclusive,
				inst: e,
				continue: !t.abort
			});
		};
	}), tr = /*@__PURE__*/ T("$ZodCheckMultipleOf", (e, t) => {
		E.init(e, t), e._zod.onattach.push((e) => {
			var n;
			(n = e._zod.bag).multipleOf ?? (n.multipleOf = t.value);
		}), e._zod.check = (n) => {
			if (typeof n.value != typeof t.value) throw Error("Cannot mix number and bigint in multiple_of check.");
			(typeof n.value == "bigint" ? t.value !== BigInt(0) && n.value % t.value === BigInt(0) : Be(n.value, t.value) === 0) || n.issues.push({
				origin: typeof n.value,
				code: "not_multiple_of",
				divisor: t.value,
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), nr = /*@__PURE__*/ T("$ZodCheckNumberFormat", (e, t) => {
		E.init(e, t), t.format = t.format || "float64";
		let n = t.format?.includes("int"), r = n ? "int" : "number", [i, a] = Tt[t.format];
		e._zod.onattach.push((e) => {
			let r = e._zod.bag;
			r.format = t.format, r.minimum = i, r.maximum = a, n && (r.pattern = Gn);
		}), e._zod.check = (o) => {
			let s = o.value;
			if (n) {
				if (!Number.isInteger(s)) {
					o.issues.push({
						expected: r,
						format: t.format,
						code: "invalid_type",
						continue: !1,
						input: s,
						inst: e
					});
					return;
				}
				if (!Number.isSafeInteger(s)) {
					s > 0 ? o.issues.push({
						input: s,
						code: "too_big",
						maximum: 2 ** 53 - 1,
						note: "Integers must be within the safe integer range.",
						inst: e,
						origin: r,
						inclusive: !0,
						continue: !t.abort
					}) : o.issues.push({
						input: s,
						code: "too_small",
						minimum: -(2 ** 53 - 1),
						note: "Integers must be within the safe integer range.",
						inst: e,
						origin: r,
						inclusive: !0,
						continue: !t.abort
					});
					return;
				}
			}
			s < i && o.issues.push({
				origin: "number",
				input: s,
				code: "too_small",
				minimum: i,
				inclusive: !0,
				inst: e,
				continue: !t.abort
			}), s > a && o.issues.push({
				origin: "number",
				input: s,
				code: "too_big",
				maximum: a,
				inclusive: !0,
				inst: e,
				continue: !t.abort
			});
		};
	}), rr = /*@__PURE__*/ T("$ZodCheckMaxLength", (e, t) => {
		var n;
		E.init(e, t), (n = e._zod.def).when ?? (n.when = Zn), e._zod.onattach.push((e) => {
			let n = e._zod.bag.maximum ?? Infinity;
			t.maximum < n && (e._zod.bag.maximum = t.maximum);
		}), e._zod.check = (n) => {
			let r = n.value, i = r.length;
			if ((typeof r == "string" && i > t.maximum ? ut(r) : i) <= t.maximum) return;
			let a = dt(r);
			n.issues.push({
				origin: a,
				code: "too_big",
				maximum: t.maximum,
				inclusive: !0,
				input: r,
				inst: e,
				continue: !t.abort
			});
		};
	}), ir = /*@__PURE__*/ T("$ZodCheckMinLength", (e, t) => {
		var n;
		E.init(e, t), (n = e._zod.def).when ?? (n.when = Zn), e._zod.onattach.push((e) => {
			let n = e._zod.bag.minimum ?? -Infinity;
			t.minimum > n && (e._zod.bag.minimum = t.minimum);
		}), e._zod.check = (n) => {
			let r = n.value, i = r.length;
			if ((typeof r == "string" && i >= t.minimum && i < t.minimum * 2 ? ut(r) : i) >= t.minimum) return;
			let a = dt(r);
			n.issues.push({
				origin: a,
				code: "too_small",
				minimum: t.minimum,
				inclusive: !0,
				input: r,
				inst: e,
				continue: !t.abort
			});
		};
	}), ar = /*@__PURE__*/ T("$ZodCheckLengthEquals", (e, t) => {
		var n;
		E.init(e, t), (n = e._zod.def).when ?? (n.when = Zn), e._zod.onattach.push((e) => {
			let n = e._zod.bag;
			n.minimum = t.length, n.maximum = t.length, n.length = t.length;
		}), e._zod.check = (n) => {
			let r = n.value, i = r.length, a = typeof r == "string" && i >= t.length && i <= t.length * 2 ? ut(r) : i;
			if (a === t.length) return;
			let o = dt(r), s = a > t.length;
			n.issues.push({
				origin: o,
				...s ? {
					code: "too_big",
					maximum: t.length
				} : {
					code: "too_small",
					minimum: t.length
				},
				inclusive: !0,
				exact: !0,
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), or = /*@__PURE__*/ T("$ZodCheckStringFormat", (e, t) => {
		var n, r;
		E.init(e, t), e._zod.onattach.push((e) => {
			let n = e._zod.bag;
			n.format = t.format, t.pattern && (n.patterns ??= /* @__PURE__ */ new Set(), n.patterns.add(t.pattern));
		}), t.pattern ? (n = e._zod).check ?? (n.check = (n) => {
			t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
				origin: "string",
				code: "invalid_format",
				format: t.format,
				input: n.value,
				...t.pattern ? { pattern: t.pattern.toString() } : {},
				inst: e,
				continue: !t.abort
			});
		}) : (r = e._zod).check ?? (r.check = () => {});
	}), sr = /*@__PURE__*/ T("$ZodCheckRegex", (e, t) => {
		or.init(e, t), e._zod.check = (n) => {
			t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
				origin: "string",
				code: "invalid_format",
				format: "regex",
				input: n.value,
				pattern: t.pattern.toString(),
				inst: e,
				continue: !t.abort
			});
		};
	}), cr = /*@__PURE__*/ T("$ZodCheckLowerCase", (e, t) => {
		t.pattern ??= Jn, or.init(e, t);
	}), lr = /*@__PURE__*/ T("$ZodCheckUpperCase", (e, t) => {
		t.pattern ??= Yn, or.init(e, t);
	}), ur = /*@__PURE__*/ T("$ZodCheckIncludes", (e, t) => {
		E.init(e, t);
		let n = qe(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position},}${n}` : n);
		t.pattern = r, e._zod.onattach.push((e) => {
			let t = e._zod.bag;
			t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(r);
		}), e._zod.check = (n) => {
			n.value.includes(t.includes, t.position) || n.issues.push({
				origin: "string",
				code: "invalid_format",
				format: "includes",
				includes: t.includes,
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), dr = /*@__PURE__*/ T("$ZodCheckStartsWith", (e, t) => {
		E.init(e, t);
		let n = RegExp(`^${qe(t.prefix)}.*`);
		t.pattern ??= n, e._zod.onattach.push((e) => {
			let t = e._zod.bag;
			t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(n);
		}), e._zod.check = (n) => {
			n.value.startsWith(t.prefix) || n.issues.push({
				origin: "string",
				code: "invalid_format",
				format: "starts_with",
				prefix: t.prefix,
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), fr = /*@__PURE__*/ T("$ZodCheckEndsWith", (e, t) => {
		E.init(e, t);
		let n = RegExp(`.*${qe(t.suffix)}$`);
		t.pattern ??= n, e._zod.onattach.push((e) => {
			let t = e._zod.bag;
			t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(n);
		}), e._zod.check = (n) => {
			n.value.endsWith(t.suffix) || n.issues.push({
				origin: "string",
				code: "invalid_format",
				format: "ends_with",
				suffix: t.suffix,
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), pr = /*@__PURE__*/ T("$ZodCheckOverwrite", (e, t) => {
		E.init(e, t), e._zod.check = (e) => {
			e.value = t.tx(e.value);
		};
	});
})), hr, gr = b((() => {
	hr = class {
		constructor(e = [], t = {}) {
			this.content = [], this.indent = 0, this.args = e, this.closed = t;
		}
		indented(e) {
			this.indent += 1, e(this), --this.indent;
		}
		write(e) {
			if (typeof e == "function") {
				e(this, { execution: "sync" }), e(this, { execution: "async" });
				return;
			}
			let t = e.split("\n").filter((e) => e), n = Math.min(...t.map((e) => e.length - e.trimStart().length)), r = t.map((e) => e.slice(n)).map((e) => " ".repeat(this.indent * 2) + e);
			for (let e of r) this.content.push(e);
		}
		compile() {
			let e = Function, t = this?.content ?? [""];
			return new e(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {\n${t.join("\n")}\n};`)(...Object.values(this.closed));
		}
	};
})), _r, vr = b((() => {
	_r = {
		major: 4,
		minor: 5,
		patch: 4
	};
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/schemas.js
function yr(e) {
	return {
		validate: (t) => {
			try {
				return Jr(an(e, t));
			} catch {
				return sn(e, t).then(Jr);
			}
		},
		vendor: "zod",
		version: 1
	};
}
function br(e, t) {
	if (!t.normalize && t.protocol?.source === Bn.source && !/^https?:\/\//i.test(e)) return 1;
	try {
		return new URL(e);
	} catch {
		return 2;
	}
}
function xr(e) {
	return e.replace($r, "");
}
function Sr(e, t) {
	return t.lastIndex = 0, t.test(e.hostname);
}
function Cr(e, t) {
	return t.lastIndex = 0, t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol);
}
function wr(e) {
	if (!pi.test(e)) return !1;
	try {
		return new URL(`http://[${e}]`), !0;
	} catch {
		return !1;
	}
}
function Tr(e) {
	let t = e.split("/");
	if (t.length !== 2) return !1;
	let [n, r] = t;
	if (!r) return !1;
	let i = Number(r);
	return `${i}` !== r || i < 0 || i > 128 ? !1 : wr(n);
}
function Er(e) {
	if (e === "") return !0;
	if (/\s/.test(e) || e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
function Dr(e) {
	if (!zn.test(e)) return !1;
	let t = e.replace(/[-_]/g, (e) => e === "-" ? "+" : "/");
	return Er(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
function Or(e, t = null) {
	try {
		let n = e.split(".");
		if (n.length !== 3) return !1;
		let [r] = n;
		if (!r) return !1;
		let i = JSON.parse(atob(r));
		return !("typ" in i && i?.typ !== "JWT" || !i.alg || t && (!("alg" in i) || i.alg !== t));
	} catch {
		return !1;
	}
}
function kr(e, t, n) {
	e.issues.length && t.issues.push(...ot(n, e.issues)), t.value[n] = e.value;
}
function Ar(e, t, n, r, i, a) {
	let o = n in r, s = a === "optional";
	if (o || !s || i !== "optional") {
		if (e.issues.length) {
			if (i !== void 0 && s && !o) return;
			t.issues.push(...ot(n, e.issues));
		}
		if (!o && i === void 0) {
			e.issues.length || t.issues.push({
				code: "invalid_type",
				expected: "nonoptional",
				input: void 0,
				path: [n]
			});
			return;
		}
		e.value === void 0 ? o && (t.value[n] = void 0) : t.value[n] = e.value;
	}
}
function jr(e) {
	let t = Object.keys(e.shape), n = Object.getOwnPropertySymbols(e.shape), r = n.length ? n : Di, i = r.length ? [...t, ...r] : t;
	for (let t of i) if (!e.shape?.[t]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${String(t)}": expected a Zod schema`);
	let a = Xe(e.shape);
	return {
		...e,
		allKeys: i,
		symbolKeys: r,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(a)
	};
}
function Mr(e, t, n, r, i, a) {
	let o = [], s = i.keySet, c = i.catchall._zod, l = c.def.type, u = c.optin, d = c.optout;
	for (let i in t) {
		if (s.has(i)) continue;
		if (i === "__proto__") {
			l === "never" && o.push(i);
			continue;
		}
		if (l === "never") {
			o.push(i);
			continue;
		}
		let a = c.run({
			value: t[i],
			issues: []
		}, r);
		a instanceof Promise ? e.push(a.then((e) => Ar(e, n, i, t, u, d))) : Ar(a, n, i, t, u, d);
	}
	return o.length && n.issues.push({
		code: "unrecognized_keys",
		keys: o,
		input: t,
		inst: a,
		continue: !0
	}), e.length ? Promise.all(e).then(() => n) : n;
}
function Nr(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !it(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => lt(e, r, Nt())))
	}), t);
}
function Pr(e, t) {
	if (e === t || e instanceof Date && t instanceof Date && +e == +t) return {
		valid: !0,
		data: e
	};
	if (Ge(e) && Ge(t)) {
		let n = Object.keys(t), r = Object.keys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		Object.prototype.hasOwnProperty.call(i, "__proto__") && delete i.__proto__;
		for (let n of r) {
			if (n === "__proto__") continue;
			let r = Pr(e[n], t[n]);
			if (!r.valid) return {
				valid: !1,
				mergeErrorPath: [n, ...r.mergeErrorPath]
			};
			i[n] = r.data;
		}
		return {
			valid: !0,
			data: i
		};
	}
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return {
			valid: !1,
			mergeErrorPath: []
		};
		let n = [];
		for (let r = 0; r < e.length; r++) {
			let i = e[r], a = t[r], o = Pr(i, a);
			if (!o.valid) return {
				valid: !1,
				mergeErrorPath: [r, ...o.mergeErrorPath]
			};
			n.push(o.data);
		}
		return {
			valid: !0,
			data: n
		};
	}
	return {
		valid: !1,
		mergeErrorPath: []
	};
}
function Fr(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i, a = /* @__PURE__ */ new Map(), o = (e, t) => {
		let n;
		if (e.code === "unrecognized_keys" && !e.path?.length) i ??= e, n = e.keys;
		else if (e.code === "invalid_key" && e.origin === "record" && e.path?.length === 1) {
			let t = String(e.path[0]);
			a.has(t) || a.set(t, e), n = [t];
		} else return !1;
		for (let e of n) r.has(e) || r.set(e, {}), r.get(e)[t] = !0;
		return !0;
	};
	for (let n of t.issues) o(n, "l") || e.issues.push(n);
	for (let t of n.issues) o(t, "r") || e.issues.push(t);
	let s = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
	if (s.length) {
		let t = i ? s.filter((e) => i.keys.includes(e)) : [];
		t.length && e.issues.push({
			...i,
			keys: t
		});
		for (let n of s) !t.includes(n) && a.has(n) && e.issues.push(a.get(n));
	}
	let c = Pr(t.value, n.value);
	if (!c.valid) {
		if (it(e)) return e;
		throw Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`);
	}
	return e.value = c.data, e;
}
function Ir(e, t) {
	for (let n = e.length - 1; n >= 0; n--) if (!(t === "optin" ? e[n]._zod.optin !== void 0 : e[n]._zod.optout === "optional")) return n + 1;
	return 0;
}
function Lr(e, t, n) {
	e.issues.length && t.issues.push(...ot(n, e.issues)), t.value[n] = e.value;
}
function Rr(e, t, n, r, i) {
	for (let a = 0; a < n.length; a++) {
		let o = e[a], s = a < r.length;
		if (!s && a >= i && n[a]._zod.optin === "optional") {
			t.value.length = a;
			break;
		}
		if (o.issues.length) {
			if (!s && a >= i) {
				t.value.length = a;
				break;
			}
			t.issues.push(...ot(a, o.issues));
		}
		t.value[a] = o.value;
	}
	for (let e = t.value.length - 1; e >= r.length && n[e]._zod.optout === "optional" && t.value[e] === void 0; e--) t.value.length = e;
	return t;
}
function zr(e, t) {
	return e.value = t.issues.length ? void 0 : t.value, e;
}
function Br(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
function Vr(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
function Hr(e, t, n, r) {
	return t.issues.length ? (e.value = n.catchValue({
		...t,
		value: e.value,
		error: { issues: t.issues.map((e) => lt(e, r, Nt())) },
		input: e.value
	}), e) : (e.value = t.value, t.memo && (e.memo = !0), e);
}
function Ur(e, t, n) {
	return e.issues.some((e) => e.code !== "unrecognized_keys") ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues
	}, n);
}
function Wr(e, t, n) {
	if (e.issues.length) return e.aborted = !0, e;
	if ((n.direction || "forward") === "forward") {
		let r = t.transform(e.value, e);
		return r instanceof Promise ? r.then((r) => Gr(e, r, t.out, n)) : Gr(e, r, t.out, n);
	}
	{
		let r = t.reverseTransform(e.value, e);
		return r instanceof Promise ? r.then((r) => Gr(e, r, t.in, n)) : Gr(e, r, t.in, n);
	}
}
function Gr(e, t, n, r) {
	return e.issues.length ? (e.aborted = !0, e) : n._zod.run({
		value: t,
		issues: e.issues
	}, r);
}
function Kr(e) {
	return e.memo || (e.value = Object.freeze(e.value)), e;
}
function qr(e, t, n, r) {
	if (!e) {
		let e = {
			code: "custom",
			input: n,
			inst: r,
			path: [...r._zod.def.path ?? []],
			continue: !r._zod.def.abort
		};
		r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(pt(e));
	}
}
var D, Jr, Yr, O, Xr, Zr, Qr, $r, ei, ti, ni, ri, ii, ai, oi, si, ci, li, ui, di, fi, pi, mi, hi, gi, _i, vi, yi, bi, xi, Si, Ci, wi, Ti, Ei, Di, Oi, ki, Ai, ji, Mi, Ni, Pi, Fi, Ii, Li, Ri, zi, Bi, Vi, Hi, Ui, Wi, Gi, Ki, qi, Ji, Yi, Xi, Zi = b((() => {
	mr(), Bt(), gr(), gn(), Xn(), jt(), vr(), D = /*@__PURE__*/ T("$ZodType", (e, t) => {
		var n;
		e ??= {}, e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = _r;
		let r = e._zod.def.checks, i = e._zod.traits.has("$ZodCheck") ? [e, ...r ?? []] : r?.length ? [...r] : [];
		for (let t of i) for (let n of t._zod.onattach) n(e);
		if (i.length === 0) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
			e._zod.run = e._zod.parse;
		});
		else {
			let t = (t, n, r) => {
				if (t.memo) return t;
				let i = it(t), a;
				for (let o of n) {
					if (o._zod.def.when) {
						if (at(t) || !o._zod.def.when(t)) continue;
					} else if (i) continue;
					let n = t.issues.length, s = o._zod.check(t);
					if (s instanceof Promise && r?.async === !1) throw new Lt();
					if (a || s instanceof Promise) a = (a ?? Promise.resolve()).then(async () => {
						await s, t.issues.length !== n && (ct(t.issues, n, e), i ||= it(t, n));
					});
					else {
						if (t.issues.length === n) continue;
						ct(t.issues, n, e), i ||= it(t, n);
					}
				}
				return a ? a.then(() => t) : t;
			}, n = (n, r, a) => {
				if (it(n)) return n.aborted = !0, n;
				let o = t(r, i, a);
				if (o instanceof Promise) {
					if (a.async === !1) throw new Lt();
					return o.then((t) => e._zod.parse(t, a));
				}
				return e._zod.parse(o, a);
			};
			e._zod.run = (r, a) => {
				if (a.skipChecks) return e._zod.parse(r, a);
				if (a.direction === "backward") {
					let t = e._zod.parse({
						value: r.value,
						issues: []
					}, {
						...a,
						skipChecks: !0
					});
					return t instanceof Promise ? t.then((e) => n(e, r, a)) : n(t, r, a);
				}
				let o = e._zod.parse(r, a);
				if (o instanceof Promise) {
					if (a.async === !1) throw new Lt();
					return o.then((e) => t(e, i, a));
				}
				return t(o, i, a);
			};
		}
	}, {
		get "~standard"() {
			return gt(this, "~standard", yr(this));
		},
		set "~standard"(e) {
			ht(this, "~standard", e);
		}
	}), Jr = (e) => e.success ? { value: e.data } : { issues: e.error?.issues }, Yr = /*@__PURE__*/ T("$ZodString", (e, t) => {
		D.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? Wn(e._zod.bag), e._zod.parse = (n, r) => {
			if (t.coerce) try {
				n.value = String(n.value);
			} catch {}
			return typeof n.value == "string" || n.issues.push({
				expected: "string",
				code: "invalid_type",
				input: n.value,
				inst: e
			}), n;
		};
	}), O = /*@__PURE__*/ T("$ZodStringFormat", (e, t) => {
		or.init(e, t), Yr.init(e, t);
	}), Xr = /*@__PURE__*/ T("$ZodGUID", (e, t) => {
		t.pattern ??= An, O.init(e, t);
	}), Zr = /*@__PURE__*/ T("$ZodUUID", (e, t) => {
		if (t.version) {
			let e = {
				v1: 1,
				v2: 2,
				v3: 3,
				v4: 4,
				v5: 5,
				v6: 6,
				v7: 7,
				v8: 8
			}[t.version];
			if (e === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
			t.pattern ??= jn(e);
		} else t.pattern ??= jn();
		O.init(e, t);
	}), Qr = /*@__PURE__*/ T("$ZodEmail", (e, t) => {
		t.pattern ??= Mn, O.init(e, t);
	}), $r = /[\t\n\r]/g, ei = /*@__PURE__*/ T("$ZodURL", (e, t) => {
		O.init(e, t), e._zod.check = (n) => {
			try {
				let r = n.value.trim(), i = br(r, t);
				if (i === 1) {
					n.issues.push({
						code: "invalid_format",
						format: "url",
						note: "Invalid URL format",
						input: n.value,
						inst: e,
						continue: !t.abort
					});
					return;
				}
				if (i === 2) {
					n.issues.push({
						code: "invalid_format",
						format: "url",
						input: n.value,
						inst: e,
						continue: !t.abort
					});
					return;
				}
				t.hostname && !Sr(i, t.hostname) && n.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid hostname",
					pattern: t.hostname.source,
					input: n.value,
					inst: e,
					continue: !t.abort
				}), t.protocol && !Cr(i, t.protocol) && n.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid protocol",
					pattern: t.protocol.source,
					input: n.value,
					inst: e,
					continue: !t.abort
				}), n.value = t.normalize ? i.href : xr(r);
				return;
			} catch {
				n.issues.push({
					code: "invalid_format",
					format: "url",
					input: n.value,
					inst: e,
					continue: !t.abort
				});
			}
		};
	}), ti = /*@__PURE__*/ T("$ZodEmoji", (e, t) => {
		t.pattern ??= vn(), O.init(e, t);
	}), ni = /*@__PURE__*/ T("$ZodNanoID", (e, t) => {
		if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1)) throw Error(`Invalid nanoid length: ${t.length}`);
		t.pattern ??= t.length === void 0 ? On : _n(t.length), O.init(e, t);
	}), ri = /*@__PURE__*/ T("$ZodCUID", (e, t) => {
		t.pattern ??= Cn, O.init(e, t);
	}), ii = /*@__PURE__*/ T("$ZodCUID2", (e, t) => {
		t.pattern ??= wn, O.init(e, t);
	}), ai = /*@__PURE__*/ T("$ZodULID", (e, t) => {
		t.pattern ??= Tn, O.init(e, t);
	}), oi = /*@__PURE__*/ T("$ZodXID", (e, t) => {
		t.pattern ??= En, O.init(e, t);
	}), si = /*@__PURE__*/ T("$ZodKSUID", (e, t) => {
		t.pattern ??= Dn, O.init(e, t);
	}), ci = /*@__PURE__*/ T("$ZodISODateTime", (e, t) => {
		t.pattern ??= Sn(t), O.init(e, t), (t.local || t.precision === -1) && (e._zod.bag.laxFormat = !0, e._zod.onattach.push((e) => {
			e._zod.bag.laxFormat = !0;
		}));
	}), li = /*@__PURE__*/ T("$ZodISODate", (e, t) => {
		t.pattern ??= Un, O.init(e, t);
	}), ui = /*@__PURE__*/ T("$ZodISOTime", (e, t) => {
		t.pattern ??= xn(t), O.init(e, t);
	}), di = /*@__PURE__*/ T("$ZodISODuration", (e, t) => {
		t.pattern ??= kn, O.init(e, t);
	}), fi = /*@__PURE__*/ T("$ZodIPv4", (e, t) => {
		t.pattern ??= Pn, O.init(e, t), e._zod.bag.format = "ipv4";
	}), pi = /^[0-9a-fA-F:.]+$/, mi = /*@__PURE__*/ T("$ZodIPv6", (e, t) => {
		t.pattern ??= Fn, O.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
			wr(n.value) || n.issues.push({
				code: "invalid_format",
				format: "ipv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), hi = /*@__PURE__*/ T("$ZodCIDRv4", (e, t) => {
		t.pattern ??= In, O.init(e, t);
	}), gi = /*@__PURE__*/ T("$ZodCIDRv6", (e, t) => {
		t.pattern ??= Ln, O.init(e, t), e._zod.check = (n) => {
			Tr(n.value) || n.issues.push({
				code: "invalid_format",
				format: "cidrv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), _i = /*@__PURE__*/ T("$ZodBase64", (e, t) => {
		t.pattern ??= Rn, O.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
			Er(n.value) || n.issues.push({
				code: "invalid_format",
				format: "base64",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), vi = /*@__PURE__*/ T("$ZodBase64URL", (e, t) => {
		t.pattern ??= zn, O.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
			Dr(n.value) || n.issues.push({
				code: "invalid_format",
				format: "base64url",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), yi = /*@__PURE__*/ T("$ZodE164", (e, t) => {
		t.pattern ??= Vn, O.init(e, t);
	}), bi = /*@__PURE__*/ T("$ZodJWT", (e, t) => {
		O.init(e, t), e._zod.check = (n) => {
			Or(n.value, t.alg) || n.issues.push({
				code: "invalid_format",
				format: "jwt",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), xi = /*@__PURE__*/ T("$ZodNumber", (e, t) => {
		D.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? Kn, e._zod.parse = (n, r) => {
			if (t.coerce) try {
				n.value = Number(n.value);
			} catch {}
			let i = n.value;
			if (typeof i == "number" && !Number.isNaN(i) && Number.isFinite(i)) return n;
			let a = typeof i == "number" ? Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : String(i) : void 0;
			return n.issues.push({
				expected: "number",
				code: "invalid_type",
				input: i,
				inst: e,
				...a ? { received: a } : {}
			}), n;
		};
	}), Si = /*@__PURE__*/ T("$ZodNumberFormat", (e, t) => {
		nr.init(e, t), xi.init(e, t);
	}), Ci = /*@__PURE__*/ T("$ZodBoolean", (e, t) => {
		D.init(e, t), e._zod.pattern = qn, e._zod.parse = (n, r) => {
			if (t.coerce) try {
				n.value = !!n.value;
			} catch {}
			let i = n.value;
			return typeof i == "boolean" || n.issues.push({
				expected: "boolean",
				code: "invalid_type",
				input: i,
				inst: e
			}), n;
		};
	}), wi = /*@__PURE__*/ T("$ZodUnknown", (e, t) => {
		D.init(e, t), e._zod.parse = (e) => e;
	}), Ti = /*@__PURE__*/ T("$ZodNever", (e, t) => {
		D.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
			expected: "never",
			code: "invalid_type",
			input: t.value,
			inst: e
		}), t);
	}), Ei = /*@__PURE__*/ T("$ZodArray", (e, t) => {
		D.init(e, t);
		let n = zt.memoizer;
		n?.attach(e), e._zod.parse = (r, i) => {
			let a = r.value;
			if (!Array.isArray(a)) return r.issues.push({
				expected: "array",
				code: "invalid_type",
				input: a,
				inst: e
			}), r;
			r.value = n ? n.alloc(e, r, Array(a.length), i) : Array(a.length);
			let o = [];
			for (let e = 0; e < a.length; e++) {
				let n = a[e], s = t.element._zod.run({
					value: n,
					issues: []
				}, i);
				s instanceof Promise ? o.push(s.then((t) => kr(t, r, e))) : kr(s, r, e);
			}
			return o.length ? Promise.all(o).then(() => r) : r;
		};
	}), Di = [], Oi = /* @__PURE__ */ new WeakMap(), ki = /*@__PURE__*/ T("$ZodObject", (e, t) => {
		if (D.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
			let e = t.shape;
			Oi.set(t, e), Object.defineProperty(t, "shape", { get: () => {
				let n = { ...e };
				return Object.defineProperty(t, "shape", { value: n }), Oi.set(t, n), n;
			} });
		}
		let n = Le(() => jr(t));
		w(e, "propValues", (e) => {
			let t = e.def.shape, n = {};
			for (let e in t) {
				let r = t[e]._zod;
				if (r.values) {
					Object.prototype.hasOwnProperty.call(n, e) || S(n, e, /* @__PURE__ */ new Set());
					for (let t of r.values) n[e].add(t);
					r.optin !== void 0 && n[e].add(void 0);
				}
			}
			return n;
		});
		let r = We, i = t.catchall, a, o = zt.memoizer;
		o?.attach(e), e._zod.parse = (t, s) => {
			a ??= n.value;
			let c = t.value;
			if (!r(c)) return t.issues.push({
				expected: "object",
				code: "invalid_type",
				input: c,
				inst: e
			}), t;
			t.value = o ? o.alloc(e, t, {}, s) : {};
			let l = [], u = a.shape;
			for (let e of a.allKeys) {
				if (e === "__proto__") continue;
				let n = u[e], r = n._zod.optin, i = n._zod.optout, a = n._zod.run({
					value: c[e],
					issues: []
				}, s);
				a instanceof Promise ? l.push(a.then((n) => Ar(n, t, e, c, r, i))) : Ar(a, t, e, c, r, i);
			}
			return i ? Mr(l, c, t, s, n.value, e) : l.length ? Promise.all(l).then(() => t) : t;
		};
	}), Ai = /*@__PURE__*/ T("$ZodObjectJIT", (e, t) => {
		ki.init(e, t);
		let n = e._zod.parse, r = Le(() => jr(t)), i = zt.memoizer, a = (t) => {
			let n = r.value, a = n.symbolKeys, o = new hr(["payload", "ctx"], {
				shape: t,
				inst: e,
				memo: i,
				syms: a
			}), s = (e) => `shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`, c = (e, t) => `
          for (let i = 0; i < ${e}.issues.length; i++) {
            const iss = ${e}.issues[i];
            iss.path = iss.path ? [${t}, ...iss.path] : [${t}];
            payload.issues.push(iss);
          }`;
			o.write("const input = payload.value;");
			let l = Object.create(null), u = 0;
			for (let e of n.allKeys) l[e] = `key_${u++}`;
			o.write(i ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
			for (let e of n.allKeys) {
				if (e === "__proto__") continue;
				let n = l[e], r = typeof e == "symbol" ? `syms[${a.indexOf(e)}]` : He(e), i = `${r} in input`, u = t[e], d = u?._zod?.optin, f = d !== void 0, p = u?._zod?.optout === "optional";
				if (o.write(`const ${n} = ${s(r)};`), f && p) {
					let e = d === "optional" ? `${n}_present` : `${n}.value !== undefined || ${n}_present`;
					o.write(`
        const ${n}_present = ${i};
        if (!${n}.issues.length || ${n}_present) {
          if (${n}.issues.length) {${c(n, r)}
          }

          if (${e}) {
            newResult[${r}] = ${n}.value;
          }
        }

      `);
				} else f ? o.write(`
        if (${n}.issues.length) {${c(n, r)}
        }
        
        if (${n}.value === undefined) {
          if (${i}) {
            newResult[${r}] = undefined;
          }
        } else {
          newResult[${r}] = ${n}.value;
        }

      `) : o.write(`
        const ${n}_present = ${i};
        if (${n}.issues.length) {${c(n, r)}
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${r}]
          });
        }

        if (${n}_present) {
          newResult[${r}] = ${n}.value;
        }

      `);
			}
			return o.write("payload.value = newResult;"), o.write("return payload;"), o.compile();
		}, o, s = We, c = !zt.jitless, l = c && Ct.value, u = t.catchall, d;
		e._zod.parse = (i, f) => {
			d ??= r.value;
			let p = i.value;
			return s(p) ? c && l && f?.async === !1 && f.jitless !== !0 ? (o ||= a(t.shape), i = o(i, f), u ? Mr([], p, i, f, d, e) : i) : n(i, f) : (i.issues.push({
				expected: "object",
				code: "invalid_type",
				input: p,
				inst: e
			}), i);
		};
	}), ji = /*@__PURE__*/ T("$ZodUnion", (e, t) => {
		D.init(e, t), w(e, "optin", (e) => e.def.options.some((e) => e._zod.optin === "defaulted") ? "defaulted" : e.def.options.some((e) => e._zod.optin !== void 0) ? "optional" : void 0), w(e, "optout", (e) => e.def.options.some((e) => e._zod.optout === "optional") ? "optional" : void 0), w(e, "values", (e) => {
			if (e.def.options.every((e) => e._zod.values)) return new Set(e.def.options.flatMap((e) => Array.from(e._zod.values)));
		}), w(e, "pattern", (e) => {
			if (e.def.options.every((e) => e._zod.pattern)) {
				let t = e.def.options.map((e) => e._zod.pattern);
				return RegExp(`^(${t.map((e) => ze(e.source)).join("|")})$`);
			}
		});
		let n = t.options.length === 1 ? t.options[0]._zod.run : null;
		e._zod.parse = (r, i) => {
			if (n) return n(r, i);
			let a = !1, o = [];
			for (let e of t.options) {
				let t = e._zod.run({
					value: r.value,
					issues: []
				}, i);
				if (t instanceof Promise) o.push(t), a = !0;
				else {
					if (t.issues.length === 0) return t;
					o.push(t);
				}
			}
			return a ? Promise.all(o).then((t) => Nr(t, r, e, i)) : Nr(o, r, e, i);
		};
	}), Mi = /*@__PURE__*/ T("$ZodDiscriminatedUnion", (e, t) => {
		t.inclusive = !1, ji.init(e, t);
		let n = e._zod.parse;
		w(e, "propValues", (e) => {
			let t = {};
			for (let n of e.def.options) {
				let r = n._zod.propValues;
				if (!r || Object.keys(r).length === 0) throw Error(`Invalid discriminated union option at index "${e.def.options.indexOf(n)}"`);
				for (let [e, n] of Object.entries(r)) {
					Object.prototype.hasOwnProperty.call(t, e) || S(t, e, /* @__PURE__ */ new Set());
					for (let r of n) t[e].add(r);
				}
			}
			return t;
		}), t.options.forEach((e, n) => {
			let r = Oi.get(e._zod.def);
			if (r && !Object.prototype.hasOwnProperty.call(r, t.discriminator)) throw Error(`Invalid discriminated union option at index "${n}"`);
		});
		let r = Le(() => {
			let e = t.options, n = /* @__PURE__ */ new Map();
			for (let r of e) {
				let e = r._zod.propValues?.[t.discriminator];
				if (!e || e.size === 0) throw Error(`Invalid discriminated union option at index "${t.options.indexOf(r)}"`);
				for (let t of e) {
					if (n.has(t)) throw Error(`Duplicate discriminator value "${String(t)}"`);
					n.set(t, r);
				}
			}
			return n;
		});
		e._zod.parse = (i, a) => {
			let o = i.value;
			if (!We(o)) return i.issues.push({
				code: "invalid_type",
				expected: "object",
				input: o,
				inst: e
			}), i;
			let s = r.value.get(o?.[t.discriminator]);
			return s ? s._zod.run(i, a) : t.unionFallback || a.direction === "backward" ? n(i, a) : (i.issues.push({
				code: "invalid_union",
				errors: [],
				note: "No matching discriminator",
				discriminator: t.discriminator,
				options: Array.from(r.value.keys()),
				input: o,
				path: [t.discriminator],
				inst: e
			}), i);
		};
	}), Ni = /*@__PURE__*/ T("$ZodIntersection", (e, t) => {
		D.init(e, t), e._zod.parse = (e, n) => {
			let r = e.value, i = t.left._zod.run({
				value: r,
				issues: []
			}, n), a = t.right._zod.run({
				value: r,
				issues: []
			}, n);
			return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([t, n]) => Fr(e, t, n)) : Fr(e, i, a);
		};
	}), Pi = /*@__PURE__*/ T("$ZodTuple", (e, t) => {
		D.init(e, t);
		let n = t.items, r = zt.memoizer;
		r?.attach(e), e._zod.parse = (i, a) => {
			let o = i.value;
			if (!Array.isArray(o)) return i.issues.push({
				input: o,
				inst: e,
				expected: "tuple",
				code: "invalid_type"
			}), i;
			i.value = r ? r.alloc(e, i, [], a) : [];
			let s = [], c = Ir(n, "optin"), l = Ir(n, "optout");
			if (!t.rest) {
				if (o.length < c) return i.issues.push({
					code: "too_small",
					minimum: c,
					inclusive: !0,
					input: o,
					inst: e,
					origin: "array"
				}), i;
				o.length > n.length && i.issues.push({
					code: "too_big",
					maximum: n.length,
					inclusive: !0,
					input: o,
					inst: e,
					origin: "array"
				});
			}
			let u = Array(n.length);
			for (let e = 0; e < n.length; e++) {
				let t = n[e]._zod.run({
					value: o[e],
					issues: []
				}, a);
				t instanceof Promise ? s.push(t.then((t) => {
					u[e] = t;
				})) : u[e] = t;
			}
			if (t.rest) {
				let e = n.length - 1, r = o.slice(n.length);
				for (let n of r) {
					e++;
					let r = t.rest._zod.run({
						value: n,
						issues: []
					}, a);
					r instanceof Promise ? s.push(r.then((t) => Lr(t, i, e))) : Lr(r, i, e);
				}
			}
			return s.length ? Promise.all(s).then(() => Rr(u, i, n, o, l)) : Rr(u, i, n, o, l);
		};
	}), Fi = /*@__PURE__*/ T("$ZodRecord", (e, t) => {
		D.init(e, t);
		let n = zt.memoizer;
		n?.attach(e), e._zod.parse = (r, i) => {
			let a = r.value;
			if (!Ge(a)) return r.issues.push({
				expected: "record",
				code: "invalid_type",
				input: a,
				inst: e
			}), r;
			let o = [], s = t.keyType._zod.values;
			if (s && !t.partial) {
				r.value = n ? n.alloc(e, r, {}, i) : {};
				let c = /* @__PURE__ */ new Set();
				for (let n of s) if (typeof n == "string" || typeof n == "number" || typeof n == "symbol") {
					if (c.add(typeof n == "number" ? n.toString() : n), n === "__proto__") continue;
					let s = t.keyType._zod.run({
						value: n,
						issues: []
					}, i);
					if (s instanceof Promise) throw Error("Async schemas not supported in object keys currently");
					if (s.issues.length) {
						r.issues.push({
							code: "invalid_key",
							origin: "record",
							issues: s.issues.map((e) => lt(e, i, Nt())),
							input: n,
							path: [n],
							inst: e
						});
						continue;
					}
					let l = s.value;
					if (l === "__proto__") continue;
					let u = t.valueType._zod.run({
						value: a[n],
						issues: []
					}, i);
					u instanceof Promise ? o.push(u.then((e) => {
						e.issues.length && r.issues.push(...ot(n, e.issues)), r.value[l] = e.value;
					})) : (u.issues.length && r.issues.push(...ot(n, u.issues)), r.value[l] = u.value);
				}
				let l;
				for (let e in a) if (!c.has(e)) {
					if (t.mode === "loose") {
						if (e === "__proto__") continue;
						r.value[e] = a[e];
					} else l ??= [], l.push(e);
				}
				l && l.length > 0 && r.issues.push({
					code: "unrecognized_keys",
					input: a,
					inst: e,
					keys: l,
					continue: !0
				});
			} else {
				r.value = n ? n.alloc(e, r, {}, i) : {};
				let c;
				for (let n of Reflect.ownKeys(a)) {
					if (n === "__proto__" || !Object.prototype.propertyIsEnumerable.call(a, n)) continue;
					let l = t.keyType._zod.run({
						value: n,
						issues: []
					}, i);
					if (l instanceof Promise) throw Error("Async schemas not supported in object keys currently");
					if (typeof n == "string" && Kn.test(n) && l.issues.length) {
						let e = t.keyType._zod.run({
							value: Number(n),
							issues: []
						}, i);
						if (e instanceof Promise) throw Error("Async schemas not supported in object keys currently");
						e.issues.length === 0 && (l = e);
					}
					if (l.issues.length) {
						t.mode === "loose" ? r.value[n] = a[n] : s ? (c ??= [], c.push(n)) : r.issues.push({
							code: "invalid_key",
							origin: "record",
							issues: l.issues.map((e) => lt(e, i, Nt())),
							input: n,
							path: [n],
							inst: e
						});
						continue;
					}
					let u = l.value;
					if (u === "__proto__") continue;
					let d = t.valueType._zod.run({
						value: a[n],
						issues: []
					}, i);
					d instanceof Promise ? o.push(d.then((e) => {
						e.issues.length && r.issues.push(...ot(n, e.issues)), r.value[u] = e.value;
					})) : (d.issues.length && r.issues.push(...ot(n, d.issues)), r.value[u] = d.value);
				}
				c && c.length > 0 && r.issues.push({
					code: "unrecognized_keys",
					input: a,
					inst: e,
					keys: c,
					continue: !0
				});
			}
			return o.length ? Promise.all(o).then(() => r) : r;
		};
	}), Ii = /*@__PURE__*/ T("$ZodEnum", (e, t) => {
		D.init(e, t);
		let n = Pe(t.entries), r = new Set(n);
		e._zod.values = r;
		let i = n.filter((e) => wt.has(typeof e));
		e._zod.pattern = RegExp(i.length ? `^(${i.map((e) => qe(e.toString())).join("|")})$` : "^[^\\s\\S]$"), e._zod.parse = (t, i) => {
			let a = t.value;
			return r.has(a) || t.issues.push({
				code: "invalid_value",
				values: n,
				input: a,
				inst: e
			}), t;
		};
	}), Li = /*@__PURE__*/ T("$ZodLiteral", (e, t) => {
		D.init(e, t);
		let n = new Set(t.values);
		e._zod.values = n, e._zod.pattern = RegExp(t.values.length ? `^(${t.values.map((e) => typeof e == "string" ? qe(e) : e ? qe(e.toString()) : String(e)).join("|")})$` : "^[^\\s\\S]$"), e._zod.parse = (r, i) => {
			let a = r.value;
			return n.has(a) || r.issues.push({
				code: "invalid_value",
				values: t.values,
				input: a,
				inst: e
			}), r;
		};
	}), Ri = /*@__PURE__*/ T("$ZodTransform", (e, t) => {
		D.init(e, t), e._zod.optin = "optional", zt.memoizer?.guard(e), e._zod.parse = (n, r) => {
			if (r.direction === "backward") throw new Rt(e.constructor.name);
			let i = t.transform(n.value, n);
			if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n));
			if (i instanceof Promise) throw new Lt();
			return n.value = i, n;
		};
	}), zi = /*@__PURE__*/ T("$ZodOptional", (e, t) => {
		D.init(e, t), w(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), e._zod.optout = "optional", w(e, "values", (e) => {
			let t = e.def.innerType._zod.values;
			return t ? /* @__PURE__ */ new Set([...t, void 0]) : void 0;
		}), w(e, "pattern", (e) => {
			let t = e.def.innerType._zod.pattern;
			return t ? RegExp(`^(${ze(t.source)})?$`) : void 0;
		}), e._zod.parse = (e, n) => {
			if (e.value === void 0) {
				if (t.innerType._zod.optin !== "defaulted") return e;
				let r = t.innerType._zod.run({
					value: e.value,
					issues: []
				}, n);
				return r instanceof Promise ? r.then((t) => zr(e, t)) : zr(e, r);
			}
			return t.innerType._zod.run(e, n);
		};
	}), Bi = /*@__PURE__*/ T("$ZodExactOptional", (e, t) => {
		zi.init(e, t), w(e, "values", (e) => e.def.innerType._zod.values), w(e, "pattern", (e) => e.def.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
	}), Vi = /*@__PURE__*/ T("$ZodNullable", (e, t) => {
		D.init(e, t), w(e, "optin", (e) => e.def.innerType._zod.optin), w(e, "optout", (e) => e.def.innerType._zod.optout), w(e, "pattern", (e) => {
			let t = e.def.innerType._zod.pattern;
			return t ? RegExp(`^(${ze(t.source)}|null)$`) : void 0;
		}), w(e, "values", (e) => e.def.innerType._zod.values ? /* @__PURE__ */ new Set([...e.def.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => e.value === null ? e : t.innerType._zod.run(e, n);
	}), Hi = /*@__PURE__*/ T("$ZodDefault", (e, t) => {
		D.init(e, t), e._zod.optin = "defaulted", w(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
			if (n.direction === "backward") return t.innerType._zod.run(e, n);
			if (e.value === void 0) return e.value = t.defaultValue, e;
			let r = t.innerType._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => Br(e, t)) : Br(r, t);
		};
	}), Ui = /*@__PURE__*/ T("$ZodPrefault", (e, t) => {
		D.init(e, t), e._zod.optin = "defaulted", w(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => (n.direction === "backward" || e.value === void 0 && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
	}), Wi = /*@__PURE__*/ T("$ZodNonOptional", (e, t) => {
		D.init(e, t), w(e, "values", (e) => {
			let t = e.def.innerType._zod.values;
			return t ? new Set([...t].filter((e) => e !== void 0)) : void 0;
		}), e._zod.parse = (n, r) => {
			let i = t.innerType._zod.run(n, r);
			return i instanceof Promise ? i.then((t) => Vr(t, e)) : Vr(i, e);
		};
	}), Gi = /*@__PURE__*/ T("$ZodCatch", (e, t) => {
		D.init(e, t), w(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), w(e, "optout", (e) => e.def.innerType._zod.optout), w(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
			if (n.direction === "backward") return t.innerType._zod.run(e, n);
			let r = t.innerType._zod.run({
				value: e.value,
				issues: []
			}, n);
			return r instanceof Promise ? r.then((r) => Hr(e, r, t, n)) : Hr(e, r, t, n);
		};
	}), Ki = /*@__PURE__*/ T("$ZodPipe", (e, t) => {
		D.init(e, t), w(e, "values", (e) => e.def.in._zod.values), w(e, "optin", (e) => e.def.in._zod.optin), w(e, "optout", (e) => e.def.out._zod.optout), w(e, "propValues", (e) => e.def.in._zod.propValues), e._zod.parse = (e, n) => {
			if (n.direction === "backward") {
				let r = t.out._zod.run(e, n);
				return r instanceof Promise ? r.then((e) => Ur(e, t.in, n)) : Ur(r, t.in, n);
			}
			let r = t.in._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => Ur(e, t.out, n)) : Ur(r, t.out, n);
		};
	}), qi = /*@__PURE__*/ T("$ZodCodec", (e, t) => {
		D.init(e, t), w(e, "values", (e) => e.def.in._zod.values), w(e, "optin", (e) => e.def.in._zod.optin), w(e, "optout", (e) => e.def.out._zod.optout), w(e, "propValues", (e) => e.def.in._zod.propValues), e._zod.parse = (e, n) => {
			if ((n.direction || "forward") === "forward") {
				let r = t.in._zod.run(e, n);
				return r instanceof Promise ? r.then((e) => Wr(e, t, n)) : Wr(r, t, n);
			}
			{
				let r = t.out._zod.run(e, n);
				return r instanceof Promise ? r.then((e) => Wr(e, t, n)) : Wr(r, t, n);
			}
		};
	}), Ji = /*@__PURE__*/ T("$ZodReadonly", (e, t) => {
		D.init(e, t), w(e, "propValues", (e) => e.def.innerType._zod.propValues), w(e, "values", (e) => e.def.innerType._zod.values), w(e, "optin", (e) => e.def.innerType?._zod?.optin), w(e, "optout", (e) => e.def.innerType?._zod?.optout), e._zod.parse = (e, n) => {
			if (n.direction === "backward") return t.innerType._zod.run(e, n);
			let r = t.innerType._zod.run(e, n);
			return r instanceof Promise ? r.then(Kr) : Kr(r);
		};
	}), Yi = /*@__PURE__*/ T("$ZodLazy", (e, t) => {
		D.init(e, t), x(e._zod, "innerType", () => {
			let e = t;
			return e._cachedInner ||= t.getter(), e._cachedInner;
		}), w(e, "pattern", (e) => e.innerType?._zod?.pattern), w(e, "propValues", (e) => e.innerType?._zod?.propValues), w(e, "optin", (e) => e.innerType?._zod?.optin ?? void 0), w(e, "optout", (e) => e.innerType?._zod?.optout ?? void 0), e._zod.parse = (t, n) => e._zod.innerType._zod.run(t, n);
	}), Xi = /*@__PURE__*/ T("$ZodCustom", (e, t) => {
		E.init(e, t), D.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
			let r = n.value, i = t.fn(r);
			if (i instanceof Promise) return i.then((t) => qr(t, n, r, e));
			qr(i, n, r, e);
		};
	});
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/memoizer.js
function Qi(e) {
	return e.map((e) => e.path ? {
		...e,
		path: e.path.slice()
	} : { ...e });
}
function $i(e, t) {
	let n = oa.get(e);
	if (n !== void 0) return n;
	if (t.has(e)) return !0;
	t.add(e);
	let r = !1, i = (e) => {
		!r && e?._zod && $i(e, t) && (r = !0);
	}, a = e._zod.def;
	switch (a.type) {
		case "object":
			for (let e of Reflect.ownKeys(a.shape)) i(a.shape[e]);
			i(a.catchall);
			break;
		case "array":
			i(a.element);
			break;
		case "tuple":
			for (let e of a.items) i(e);
			i(a.rest);
			break;
		case "record":
		case "map":
			i(a.keyType), i(a.valueType);
			break;
		case "set":
			i(a.valueType);
			break;
		case "union":
			for (let e of a.options) i(e);
			break;
		case "intersection":
			i(a.left), i(a.right);
			break;
		case "optional":
		case "nullable":
		case "default":
		case "prefault":
		case "catch":
		case "readonly":
		case "nonoptional":
		case "promise":
		case "success":
			i(a.innerType);
			break;
		case "pipe":
			i(a.in), i(a.out);
			break;
		case "function":
			i(a.input), i(a.output);
			break;
		case "lazy":
			i(e._zod.innerType);
			break;
		case "template_literal":
		case "string":
		case "number":
		case "int":
		case "boolean":
		case "bigint":
		case "symbol":
		case "undefined":
		case "null":
		case "void":
		case "never":
		case "any":
		case "unknown":
		case "date":
		case "nan":
		case "enum":
		case "literal":
		case "file":
		case "transform":
		case "custom": break;
		default: for (let e in a) {
			let t = Object.getOwnPropertyDescriptor(a, e);
			if (!t || t.get) continue;
			let n = t.value;
			if (n && typeof n == "object") {
				if (n._zod) i(n);
				else if (Array.isArray(n)) for (let e of n) i(e);
			}
		}
	}
	return t.delete(e), oa.set(e, r), r;
}
function ea(e, t) {
	let n = e.buckets.get(t);
	return n || (n = /* @__PURE__ */ new Map(), e.buckets.set(t, n)), n;
}
function ta() {
	return la;
}
function na(e, t) {
	let n = e[ia]?.backEdges;
	return n !== void 0 && typeof t == "object" && !!t && n.has(t);
}
var ra, ia, aa, oa, sa, ca, la, ua = b((() => {
	ra = class extends Error {
		constructor() {
			super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
		}
	}, ia = "~memo", aa = [], oa = /*@__PURE__*/ new WeakMap(), ca = [], la = {
		alloc(e, t, n) {
			let r = sa;
			if (!r) return n;
			sa = void 0;
			let i = {
				value: n,
				issues: null
			};
			return r.set(t.value, i), ca.push(i), n;
		},
		guard(e) {
			var t;
			(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
				let t = e._zod.parse, n = (e, n) => {
					if (n.direction !== "backward" && na(n, e.value)) throw new ra();
					return t(e, n);
				};
				e._zod.parse = n, e._zod.run === t && (e._zod.run = n);
			});
		},
		attach(e) {
			var t;
			let n, r, i;
			(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
				let t = e._zod.parse, a = (o, s) => {
					if (n === void 0 && (n = $i(e, /* @__PURE__ */ new Set()), !n)) return e._zod.parse = t, e._zod.run === a && (e._zod.run = t), t(o, s);
					let c = o.value;
					if (typeof c != "object" || !c) return t(o, s);
					let l = s[ia];
					l || (l = {
						buckets: /* @__PURE__ */ new Map(),
						backEdges: void 0
					}, s[ia] = l);
					let u;
					r === s ? u = i : (u = ea(l, e), r = s, i = u);
					let d = u.get(c);
					if (d) return o.value = d.value, d.issues ? d.issues.length && o.issues.push(...Qi(d.issues)) : (o.memo = !0, l.backEdges ?? (l.backEdges = /* @__PURE__ */ new Set()), l.backEdges.add(d.value)), o;
					sa = u;
					let f = ca.length, p = t(o, s);
					sa = void 0;
					let ee = ca.length > f ? ca.pop() : void 0;
					return p instanceof Promise ? p.then((e) => (ee && (ee.issues = e.issues.length ? Qi(e.issues) : aa), e)) : (ee && (ee.issues = p.issues.length ? Qi(p.issues) : aa), p);
				};
				e._zod.parse = a, e._zod.run === t && (e._zod.run = a);
			});
		}
	};
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/locales/en.js
function da() {
	return { localeError: fa() };
}
var fa, pa = b((() => {
	jt(), fa = () => {
		let e = {
			string: {
				unit: "characters",
				verb: "to have"
			},
			file: {
				unit: "bytes",
				verb: "to have"
			},
			array: {
				unit: "items",
				verb: "to have"
			},
			set: {
				unit: "items",
				verb: "to have"
			},
			map: {
				unit: "entries",
				verb: "to have"
			}
		};
		function t(t) {
			return e[t] ?? null;
		}
		let n = {
			regex: "input",
			email: "email address",
			url: "URL",
			emoji: "emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "ISO datetime",
			date: "ISO date",
			time: "ISO time",
			duration: "ISO duration",
			ipv4: "IPv4 address",
			ipv6: "IPv6 address",
			mac: "MAC address",
			cidrv4: "IPv4 range",
			cidrv6: "IPv6 range",
			base64: "base64-encoded string",
			base64url: "base64url-encoded string",
			json_string: "JSON string",
			e164: "E.164 number",
			credit_card: "credit card number",
			jwt: "JWT",
			template_literal: "input"
		}, r = { nan: "NaN" };
		function i(e, t) {
			return e === "number" && typeof t == "number" && !Number.isFinite(t) ? String(t) : r[e] ?? e;
		}
		return (e) => {
			switch (e.code) {
				case "invalid_type": return `Invalid input: expected ${i(e.expected)}, received ${i(ft(e.input), e.input)}`;
				case "invalid_value": return e.values.length === 1 ? `Invalid input: expected ${Ye(e.values[0])}` : `Invalid option: expected one of ${Fe(e.values, "|")}`;
				case "too_big": {
					let n = e.exact ? "exactly " : e.inclusive ? "<=" : "<", r = t(e.origin);
					return r ? `Too big: expected ${e.origin ?? "value"} to have ${n}${e.maximum.toString()} ${r.unit ?? "elements"}` : `Too big: expected ${e.origin ?? "value"} to be ${n}${e.maximum.toString()}`;
				}
				case "too_small": {
					let n = e.exact ? "exactly " : e.inclusive ? ">=" : ">", r = t(e.origin);
					return r ? `Too small: expected ${e.origin} to have ${n}${e.minimum.toString()} ${r.unit}` : `Too small: expected ${e.origin} to be ${n}${e.minimum.toString()}`;
				}
				case "invalid_format": {
					let t = e;
					return t.format === "starts_with" ? `Invalid string: must start with "${t.prefix}"` : t.format === "ends_with" ? `Invalid string: must end with "${t.suffix}"` : t.format === "includes" ? `Invalid string: must include "${t.includes}"` : t.format === "regex" ? `Invalid string: must match pattern ${t.pattern}` : `Invalid ${n[t.format] ?? e.format}`;
				}
				case "not_multiple_of": return `Invalid number: must be a multiple of ${e.divisor}`;
				case "unrecognized_keys": return `Unrecognized key${e.keys.length > 1 ? "s" : ""}: ${Fe(e.keys, ", ")}`;
				case "invalid_key": return `Invalid key in ${e.origin}`;
				case "invalid_union": return e.options && Array.isArray(e.options) && e.options.length > 0 ? `Invalid discriminator value. Expected ${e.options.map((e) => `'${e}'`).join(" | ")}` : e.inclusive === !1 ? "Invalid input: more than one option matched" : "Invalid input";
				case "invalid_element": return `Invalid value in ${e.origin}`;
				default: return "Invalid input";
			}
		};
	};
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/registries.js
function ma() {
	return new ga();
}
var ha, ga, _a, va = b((() => {
	ga = class {
		constructor() {
			this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
		}
		add(e, ...t) {
			let n = t[0];
			return this._map.set(e, n), n && typeof n == "object" && "id" in n && this._idmap.set(n.id, e), this;
		}
		clear() {
			return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
		}
		remove(e) {
			let t = this._map.get(e);
			return t && typeof t == "object" && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this;
		}
		get(e) {
			let t = e._zod.parent;
			if (t) {
				let n = { ...this.get(t) ?? {} };
				delete n.id;
				let r = {
					...n,
					...this._map.get(e)
				};
				return Object.keys(r).length ? r : void 0;
			}
			return this._map.get(e);
		}
		has(e) {
			return this._map.has(e);
		}
	}, (ha = globalThis).__zod_globalRegistry ?? (ha.__zod_globalRegistry = ma()), _a = globalThis.__zod_globalRegistry;
})), ya = b((() => {}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/api.js
// @__NO_SIDE_EFFECTS__
function ba(e, t) {
	return new e({
		type: "string",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function xa(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Sa(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ca(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function wa(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v4",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ta(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v6",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ea(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v7",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Da(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Oa(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ka(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Aa(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ja(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ma(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Na(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Pa(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Fa(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ia(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function La(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ra(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function za(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ba(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Va(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ha(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ua(e, t) {
	return new e({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Wa(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ga(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ka(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function qa(e, t) {
	return new e({
		type: "number",
		checks: [],
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ja(e, t) {
	return new e({
		type: "number",
		coerce: !0,
		checks: [],
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ya(e, t) {
	return new e({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "safeint",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Xa(e, t) {
	return new e({
		type: "boolean",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Za(e) {
	return new e({ type: "unknown" });
}
// @__NO_SIDE_EFFECTS__
function Qa(e, t) {
	return new e({
		type: "never",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function $a(e, t) {
	return new $n({
		check: "less_than",
		...C(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function eo(e, t) {
	return new $n({
		check: "less_than",
		...C(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function to(e, t) {
	return new er({
		check: "greater_than",
		...C(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function no(e, t) {
	return new er({
		check: "greater_than",
		...C(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function ro(e, t) {
	return new tr({
		check: "multiple_of",
		...C(t),
		value: e
	});
}
// @__NO_SIDE_EFFECTS__
function io(e, t) {
	return new rr({
		check: "max_length",
		...C(t),
		maximum: e
	});
}
// @__NO_SIDE_EFFECTS__
function ao(e, t) {
	return new ir({
		check: "min_length",
		...C(t),
		minimum: e
	});
}
// @__NO_SIDE_EFFECTS__
function oo(e, t) {
	return new ar({
		check: "length_equals",
		...C(t),
		length: e
	});
}
// @__NO_SIDE_EFFECTS__
function so(e, t) {
	return new sr({
		check: "string_format",
		format: "regex",
		...C(t),
		pattern: e
	});
}
// @__NO_SIDE_EFFECTS__
function co(e) {
	return new cr({
		check: "string_format",
		format: "lowercase",
		...C(e)
	});
}
// @__NO_SIDE_EFFECTS__
function lo(e) {
	return new lr({
		check: "string_format",
		format: "uppercase",
		...C(e)
	});
}
// @__NO_SIDE_EFFECTS__
function uo(e, t) {
	return new ur({
		check: "string_format",
		format: "includes",
		...C(t),
		includes: e
	});
}
// @__NO_SIDE_EFFECTS__
function fo(e, t) {
	return new dr({
		check: "string_format",
		format: "starts_with",
		...C(t),
		prefix: e
	});
}
// @__NO_SIDE_EFFECTS__
function po(e, t) {
	return new fr({
		check: "string_format",
		format: "ends_with",
		...C(t),
		suffix: e
	});
}
// @__NO_SIDE_EFFECTS__
function mo(e) {
	return new pr({
		check: "overwrite",
		tx: e
	});
}
// @__NO_SIDE_EFFECTS__
function ho(e) {
	return /* @__PURE__ */ mo((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function go() {
	return /* @__PURE__ */ mo((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function _o() {
	return /* @__PURE__ */ mo((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function vo() {
	return /* @__PURE__ */ mo((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function yo() {
	return /* @__PURE__ */ mo((e) => Ue(e));
}
// @__NO_SIDE_EFFECTS__
function bo(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...C(n)
	});
}
// @__NO_SIDE_EFFECTS__
function xo(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...C(n)
	});
}
// @__NO_SIDE_EFFECTS__
function So(e, t) {
	let n = /* @__PURE__ */ Co((t) => (t.addIssue = (e) => {
		if (typeof e == "string") t.issues.push(pt(e, t.value, n._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", "input" in r || (r.input = t.value), r.inst ??= n, r.continue ??= !n._zod.def.abort, t.issues.push(pt(r));
		}
	}, e(t.value, t)), t);
	return n;
}
// @__NO_SIDE_EFFECTS__
function Co(e, t) {
	let n = new E({
		check: "custom",
		...C(t)
	});
	return n._zod.check = e, n;
}
// @__NO_SIDE_EFFECTS__
function wo(e, t) {
	let n = C(t), r = n.truthy ?? [
		"true",
		"1",
		"yes",
		"on",
		"y",
		"enabled"
	], i = n.falsy ?? [
		"false",
		"0",
		"no",
		"off",
		"n",
		"disabled"
	];
	n.case !== "sensitive" && (r = r.map((e) => typeof e == "string" ? e.toLowerCase() : e), i = i.map((e) => typeof e == "string" ? e.toLowerCase() : e));
	let a = new Set(r), o = new Set(i), s = e.Codec ?? qi, c = e.Boolean ?? Ci, l = new s({
		type: "pipe",
		in: new (e.String ?? Yr)({
			type: "string",
			error: n.error
		}),
		out: new c({
			type: "boolean",
			error: n.error
		}),
		transform: ((e, t) => {
			let r = e;
			return n.case !== "sensitive" && (r = r.toLowerCase()), a.has(r) ? !0 : !o.has(r) && (t.issues.push({
				code: "invalid_value",
				expected: "stringbool",
				values: [...a, ...o],
				input: t.value,
				inst: l,
				continue: !1
			}), {});
		}),
		reverseTransform: ((e, t) => e === !0 ? r[0] || "true" : i[0] || "false"),
		error: n.error
	});
	return l._zod.bag.truthy = r, l._zod.bag.falsy = i, l._zod.bag.case = n.case ?? "insensitive", l;
}
var To = b((() => {
	mr(), Zi(), jt();
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/to-json-schema.js
function Eo(e, ...t) {
	for (let n of t) for (let t of Reflect.ownKeys(n)) Object.prototype.propertyIsEnumerable.call(n, t) && S(e, t, n[t]);
	return e;
}
function Do(e) {
	let t = e?.target ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? _a,
		target: t,
		unrepresentable: e?.unrepresentable ?? "throw",
		override: e?.override ?? (() => {}),
		io: e?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		sharedDefsExtractedFor: void 0,
		sharedEmitDoneFor: void 0,
		cycles: e?.cycles ?? "ref",
		reused: e?.reused ?? "inline",
		intersections: [],
		deferred: [],
		external: e?.external ?? void 0
	};
}
function k(e, t, n, r, i) {
	let a = typeof t.unrepresentable == "function" ? t.unrepresentable({
		zodSchema: e,
		path: r.path,
		message: i
	}) : t.unrepresentable;
	if (a === "any") return !1;
	if (a === void 0 || a === "throw") throw Error(i);
	return Object.assign(n, a), !0;
}
function A(e, t, n = {
	path: [],
	schemaPath: []
}) {
	var r;
	let i = e._zod.def, a = t.seen.get(e);
	if (a) return a.count++, n.schemaPath.includes(e) && (a.cycle = n.path), a.schema;
	let o = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: n.path
	};
	t.seen.set(e, o), t.sharedDefsExtractedFor = void 0, t.sharedEmitDoneFor = void 0;
	let s = e._zod.toJSONSchema?.();
	if (s) o.schema = s;
	else {
		let r = {
			...n,
			schemaPath: [...n.schemaPath, e],
			path: n.path
		};
		if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, o.schema, r);
		else {
			let n = o.schema, a = t.processors[i.type];
			if (!a) throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
			a(e, t, n, r);
		}
		let a = e._zod.parent;
		a && (o.ref ||= a, A(a, t, r), t.seen.get(a).isParent = !0);
	}
	let c = t.metadataRegistry.get(e);
	return c && Eo(o.schema, c), t.io === "input" && j(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && "_prefault" in o.schema && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function Oo(e) {
	return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function ko(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	if (e.external && e.sharedDefsExtractedFor === e.external) return;
	let r = /* @__PURE__ */ new Map();
	for (let t of e.seen.entries()) {
		let n = e.metadataRegistry.get(t[0])?.id;
		if (n) {
			let e = r.get(n);
			if (e && e !== t[0]) throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			r.set(n, t[0]);
		}
	}
	let i = (t) => {
		let r = e.target === "draft-2020-12" ? "$defs" : "definitions";
		if (e.external) {
			let n = e.external.registry.get(t[0])?.id, i = e.external.uri ?? ((e) => e);
			if (n) return { ref: i(n) };
			let a = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
			return t[1].defId = a, {
				defId: a,
				ref: `${i("__shared")}#/${r}/${Oo(a)}`
			};
		}
		let i = `#/${r}/`;
		if (t[1] === n && !t[1].schema.id) return { ref: "#" };
		let a = t[1].schema.id ?? `__schema${e.counter++}`;
		return {
			defId: a,
			ref: i + Oo(a)
		};
	}, a = (e) => {
		if (e[1].schema.$ref) return;
		let t = e[1], { ref: n, defId: r } = i(e);
		t.def = { ...t.schema }, r && (t.defId = r);
		let a = t.schema;
		for (let e in a) delete a[e];
		a.$ref = n;
	};
	if (e.cycles === "throw") for (let t of e.seen.entries()) {
		let e = t[1];
		if (e.cycle) throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (let n of e.seen.entries()) {
		let r = n[1];
		if (t === n[0]) {
			a(n);
			continue;
		}
		if (e.external) {
			let r = e.external.registry.get(n[0])?.id;
			if (t !== n[0] && r) {
				a(n);
				continue;
			}
		}
		if (e.metadataRegistry.get(n[0])?.id) {
			a(n);
			continue;
		}
		if (r.cycle) {
			a(n);
			continue;
		}
		if (r.count > 1 && e.reused === "ref") {
			a(n);
			continue;
		}
	}
	e.external && (e.sharedDefsExtractedFor = e.external);
}
function Ao(e) {
	let t = e.anyOf;
	if (!Array.isArray(t) || t.length === 0 || e.type !== void 0) return;
	let n = [];
	for (let e of t) {
		if (!e || typeof e != "object") return;
		Ao(e);
		let t = Object.keys(e);
		if (t.length !== 1 || t[0] !== "type") return;
		let r = e.type;
		for (let e of Array.isArray(r) ? r : [r]) {
			if (typeof e != "string") return;
			n.includes(e) || n.push(e);
		}
	}
	delete e.anyOf, e.type = n.length === 1 ? n[0] : n;
}
function jo(e) {
	let t = e.additionalProperties;
	return t === void 0 || t === !1 || typeof t != "object" || !t ? null : Object.keys(t).length ? t : null;
}
function Mo(e) {
	let t = [];
	for (let n of e) {
		if (typeof n != "object" || n.type !== "object") return null;
		for (let e in n) if (!Fo.has(e)) return null;
		t.push(n);
	}
	let n = {}, r = /* @__PURE__ */ new Set();
	for (let e of t) {
		for (let r in e.properties) {
			if (Object.prototype.hasOwnProperty.call(n, r)) continue;
			let e = [];
			for (let n of t) {
				let t = n.properties?.[r] ?? jo(n);
				t != null && (e.some((e) => JSON.stringify(e) === JSON.stringify(t)) || e.push(t));
			}
			S(n, r, e.length === 1 ? e[0] : Mo(e) ?? { allOf: e });
		}
		for (let t of e.required ?? []) r.add(t);
	}
	let i = {
		type: "object",
		properties: n
	};
	if (r.size && (i.required = [...r]), t.every((e) => e.additionalProperties === !1)) i.additionalProperties = !1;
	else {
		let e = [];
		for (let n of t) {
			let t = jo(n);
			t && !e.some((e) => JSON.stringify(e) === JSON.stringify(t)) && e.push(t);
		}
		e.length === 1 ? i.additionalProperties = e[0] : e.length > 1 && (i.additionalProperties = { allOf: e });
	}
	return i;
}
function No(e) {
	let t = e.allOf;
	if (!Array.isArray(t) || t.length < 2) return;
	for (let t of Fo) if (t in e) return;
	let n = t.filter((e) => Io.some((t) => Array.isArray(e[t]))), r = null;
	if (!n.length) r = Mo(t);
	else {
		let e = n[0], i = Io.find((t) => Array.isArray(e[t]));
		if (Object.keys(e).length !== 1) return;
		let a = t.filter((t) => t !== e), o = e[i].map((e) => Mo([...a, e]));
		if (o.some((e) => !e)) return;
		r = { [i]: o };
	}
	r && (delete e.allOf, Eo(e, r));
}
function Po(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	let r = (t) => {
		let n = e.seen.get(t);
		if (n.ref === null) return;
		let i = n.def ?? n.schema, a = { ...i }, o = n.ref;
		if (n.ref = null, o) {
			r(o);
			let n = e.seen.get(o), s = n.schema;
			if (s.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (i.allOf = i.allOf ?? [], i.allOf.push(s)) : Eo(i, s), Eo(i, a), t._zod.parent === o) for (let e in i) e !== "$ref" && e !== "allOf" && (e in a || delete i[e]);
			if (s.$ref && n.def) for (let e in i) e !== "$ref" && e !== "allOf" && e in n.def && JSON.stringify(i[e]) === JSON.stringify(n.def[e]) && delete i[e];
		}
		let s = t._zod.parent;
		if (s && s !== o) {
			r(s);
			let t = e.seen.get(s);
			if (t?.schema.$ref && (i.$ref = t.schema.$ref, t.def)) for (let e in i) e !== "$ref" && e !== "allOf" && e in t.def && JSON.stringify(i[e]) === JSON.stringify(t.def[e]) && delete i[e];
		}
		e.override({
			zodSchema: t,
			jsonSchema: i,
			path: n.path ?? []
		});
	};
	if (!e.external || e.sharedEmitDoneFor !== e.external) {
		for (let t of [...e.seen.entries()].reverse()) r(t[0]);
		if (e.target !== "openapi-3.0") for (let t of e.seen.entries()) Ao(t[1].def ?? t[1].schema);
		for (let t of e.deferred) t();
		if (e.intersections.length) {
			let t = /* @__PURE__ */ new Map();
			for (let n of e.seen.values()) for (let e of [n.schema, n.def]) {
				let n = e?.allOf;
				if (!Array.isArray(n)) continue;
				let r = t.get(n);
				r ? r.push(e) : t.set(n, [e]);
			}
			for (let n of e.intersections) for (let e of t.get(n) ?? []) No(e);
		}
	}
	let i = {};
	if (e.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
		let n = e.external.registry.get(t)?.id;
		if (!n) throw Error("Schema is missing an `id` property");
		i.$id = e.external.uri(n);
	}
	Eo(i, n.defId ? n.schema : n.def ?? n.schema);
	let a = e.metadataRegistry.get(t)?.id;
	a !== void 0 && i.id === a && delete i.id;
	let o = e.external?.defs ?? {};
	if (!e.external || e.sharedEmitDoneFor !== e.external) for (let t of e.seen.entries()) {
		let e = t[1];
		e.def && e.defId && (e.def.id === e.defId && delete e.def.id, S(o, e.defId, e.def));
	}
	e.external && (e.sharedEmitDoneFor = e.external), e.external || Object.keys(o).length > 0 && (e.target === "draft-2020-12" ? i.$defs = o : i.definitions = o);
	try {
		let n = JSON.parse(JSON.stringify(i));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: Ro(t, "input", e.processors),
					output: Ro(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function j(e, t) {
	let n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	let r = e._zod.def;
	if (r.type === "transform") return !0;
	if (r.type === "array") return j(r.element, n);
	if (r.type === "set") return j(r.valueType, n);
	if (r.type === "lazy") return j(r.getter(), n);
	if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault" || r.type === "catch") return j(r.innerType, n);
	if (r.type === "intersection") return j(r.left, n) || j(r.right, n);
	if (r.type === "record" || r.type === "map") return j(r.keyType, n) || j(r.valueType, n);
	if (r.type === "pipe") return e._zod.traits.has("$ZodCodec") ? !0 : j(r.in, n) || j(r.out, n);
	if (r.type === "object") {
		for (let e in r.shape) if (j(r.shape[e], n)) return !0;
		return !1;
	}
	if (r.type === "union") {
		for (let e of r.options) if (j(e, n)) return !0;
		return !1;
	}
	if (r.type === "tuple") {
		for (let e of r.items) if (j(e, n)) return !0;
		return !!(r.rest && j(r.rest, n));
	}
	return !1;
}
var Fo, Io, Lo, Ro, zo = b((() => {
	va(), jt(), Fo = /* @__PURE__ */ new Set([
		"type",
		"properties",
		"required",
		"additionalProperties"
	]), Io = ["oneOf", "anyOf"], Lo = (e, t = {}) => (n) => {
		let r = Do({
			...n,
			processors: t
		});
		return A(e, r), ko(r, e), Po(r, e);
	}, Ro = (e, t, n = {}) => (r) => {
		let { libraryOptions: i, target: a } = r ?? {}, o = Do({
			...i ?? {},
			target: a,
			io: t,
			processors: n
		});
		return A(e, o), ko(o, e), Po(o, e);
	};
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/json-schema-processors.js
function Bo(e) {
	let t = e._zod.def;
	return t.type === "pipe" && t.in._zod.traits.has("$ZodTransform") ? Bo(t.out) : t.type === "catch" ? Bo(t.innerType) : e._zod.optin;
}
function Vo(e, t, n) {
	if (t.$ref) {
		if (n.has(t)) return t;
		n.add(t);
		let r = e.get(t)?.def;
		if (!r) return t;
		let i = Vo(e, r, n);
		return i === r ? t : i;
	}
	for (let r of ["anyOf", "oneOf"]) {
		let i = t[r];
		if (!Array.isArray(i)) continue;
		let a = i.map((t) => Vo(e, t, n));
		a.some((e, t) => e !== i[t]) && (t = {
			...t,
			[r]: a
		});
	}
	let r = Array.isArray(t.type) ? t.type : [t.type], i = !r.includes("string") && r.some((e) => e === "number" || e === "integer"), a = t.enum ?? (t.const === void 0 ? void 0 : [t.const]);
	if (!i && !a?.some((e) => typeof e == "number")) return t;
	let { minimum: o, maximum: s, exclusiveMinimum: c, exclusiveMaximum: l, multipleOf: u, format: d, id: f, ...p } = t;
	return p.enum ? p.enum = p.enum.map((e) => typeof e == "number" ? String(e) : e) : typeof p.const == "number" && (p.const = String(p.const)), i ? (p.type = "string", a || (p.pattern = (r.includes("number") ? Kn : Gn).source), p) : p;
}
function Ho(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.seen.values()) n.def && !t.has(n.schema) && t.set(n.schema, n);
	let n = /* @__PURE__ */ new Map();
	for (let r of bs.get(e) ?? []) {
		let i = e.seen.get(r), a = (i?.def ?? i?.schema)?.propertyNames;
		if (!a || a === !0 || n.has(a)) continue;
		let o = Vo(t, a, /* @__PURE__ */ new Set());
		o !== a && n.set(a, o);
	}
	if (n.size) for (let t of e.seen.values()) for (let e of [t.schema, t.def]) {
		let t = e && n.get(e.propertyNames);
		t && (e.propertyNames = t);
	}
}
function Uo(e, t, n, r, i) {
	let a = !1, o = JSON.stringify(e, (e, t) => typeof t == "bigint" ? (a = !0, null) : t);
	return a ? (k(t, n, r, i, "BigInt defaults cannot be represented in JSON Schema"), ws) : JSON.parse(o);
}
function Wo(e, t) {
	if ("_idmap" in e) {
		let n = e, r = Do({
			...t,
			processors: Ns
		}), i = {};
		for (let e of n._idmap.entries()) {
			let [t, n] = e;
			A(n, r);
		}
		let a = {};
		r.external = {
			registry: n,
			uri: t?.uri,
			defs: i
		};
		for (let e of n._idmap.entries()) {
			let [t, n] = e;
			ko(r, n), S(a, t, Po(r, n));
		}
		return Object.keys(i).length > 0 && (a.__shared = { [r.target === "draft-2020-12" ? "$defs" : "definitions"]: i }), { schemas: a };
	}
	let n = Do({
		...t,
		processors: Ns
	});
	return A(e, n), ko(n, e), Po(n, e);
}
var Go, Ko, qo, Jo, Yo, Xo, Zo, Qo, $o, es, ts, ns, rs, is, as, os, ss, cs, ls, us, ds, fs, ps, ms, hs, gs, _s, vs, ys, bs, xs, Ss, Cs, ws, Ts, Es, Ds, Os, ks, As, js, Ms, Ns, Ps = b((() => {
	Xn(), zo(), jt(), Go = {
		guid: "uuid",
		url: "uri",
		datetime: "date-time",
		json_string: "json-string",
		regex: ""
	}, Ko = (e, t, n, r) => {
		let i = n;
		i.type = "string";
		let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l, laxFormat: u } = e._zod.bag;
		if (typeof a == "number" && (i.minLength = a), typeof o == "number" && (i.maxLength = o), s && (i.format = Go[s] ?? s, i.format === "" && delete i.format, (s === "time" || u) && delete i.format), l && (i.contentEncoding = l), c && c.size > 0) {
			let e = [...c];
			e.length === 1 ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
				...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
				pattern: e.source
			}))]);
		}
	}, qo = (e, t, n, r) => {
		let i = n, { minimum: a, maximum: o, format: s, multipleOf: c, exclusiveMaximum: l, exclusiveMinimum: u } = e._zod.bag;
		i.type = typeof s == "string" && s.includes("int") ? "integer" : "number";
		let d = typeof u == "number" && u >= (a ?? -Infinity), f = typeof l == "number" && l <= (o ?? Infinity), p = t.target === "draft-04" || t.target === "openapi-3.0";
		d ? p ? (i.minimum = u, i.exclusiveMinimum = !0) : i.exclusiveMinimum = u : typeof a == "number" && (i.minimum = a), f ? p ? (i.maximum = l, i.exclusiveMaximum = !0) : i.exclusiveMaximum = l : typeof o == "number" && (i.maximum = o), typeof c == "number" && (Number.isFinite(c) && c !== 0 ? i.multipleOf = Math.abs(c) : k(e, t, i, r, `A multipleOf divisor of ${c} cannot be represented in JSON Schema`));
	}, Jo = (e, t, n, r) => {
		n.type = "boolean";
	}, Yo = (e, t, n, r) => {
		k(e, t, n, r, "BigInt cannot be represented in JSON Schema");
	}, Xo = (e, t, n, r) => {
		k(e, t, n, r, "Symbols cannot be represented in JSON Schema");
	}, Zo = (e, t, n, r) => {
		t.target === "openapi-3.0" ? (n.type = "string", n.nullable = !0, n.enum = [null]) : n.type = "null";
	}, Qo = (e, t, n, r) => {
		k(e, t, n, r, "Undefined cannot be represented in JSON Schema");
	}, $o = (e, t, n, r) => {
		k(e, t, n, r, "Void cannot be represented in JSON Schema");
	}, es = (e, t, n, r) => {
		n.not = {};
	}, ts = (e, t, n, r) => {}, ns = (e, t, n, r) => {}, rs = (e, t, n, r) => {
		k(e, t, n, r, "Date cannot be represented in JSON Schema");
	}, is = (e, t, n, r) => {
		let i = e._zod.def, a = Pe(i.entries);
		if (a.length === 0) {
			n.not = {};
			return;
		}
		a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), n.enum = a;
	}, as = (e, t, n, r) => {
		let i = e._zod.def;
		if (i.values.length === 0) {
			n.not = {};
			return;
		}
		let a = [];
		for (let o of i.values) if (o === void 0) {
			if (k(e, t, n, r, "Literal `undefined` cannot be represented in JSON Schema")) return;
		} else if (typeof o == "bigint") {
			if (k(e, t, n, r, "BigInt literals cannot be represented in JSON Schema")) return;
			a.push(Number(o));
		} else a.push(o);
		if (a.length !== 0) {
			if (a.length === 1) {
				let e = a[0];
				n.type = e === null ? "null" : typeof e, t.target === "draft-04" || t.target === "openapi-3.0" ? n.enum = [e] : n.const = e;
			} else a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), a.every((e) => typeof e == "boolean") && (n.type = "boolean"), a.every((e) => e === null) && (n.type = "null"), n.enum = a;
		}
	}, os = (e, t, n, r) => {
		k(e, t, n, r, "NaN cannot be represented in JSON Schema");
	}, ss = (e, t, n, r) => {
		let i = n, a = e._zod.pattern;
		if (!a) throw Error("Pattern not found in template literal");
		i.type = "string", i.pattern = a.source;
	}, cs = (e, t, n, r) => {
		let i = n, a = {
			type: "string",
			format: "binary",
			contentEncoding: "binary"
		}, { minimum: o, maximum: s, mime: c } = e._zod.bag;
		o !== void 0 && (a.minLength = o), s !== void 0 && (a.maxLength = s), c ? c.length === 1 ? (a.contentMediaType = c[0], Object.assign(i, a)) : (Object.assign(i, a), i.anyOf = c.map((e) => ({ contentMediaType: e }))) : Object.assign(i, a);
	}, ls = (e, t, n, r) => {
		n.type = "boolean";
	}, us = (e, t, n, r) => {
		k(e, t, n, r, "Custom types cannot be represented in JSON Schema");
	}, ds = (e, t, n, r) => {
		k(e, t, n, r, "Function types cannot be represented in JSON Schema");
	}, fs = (e, t, n, r) => {
		k(e, t, n, r, "Transforms cannot be represented in JSON Schema");
	}, ps = (e, t, n, r) => {
		k(e, t, n, r, "Map cannot be represented in JSON Schema");
	}, ms = (e, t, n, r) => {
		k(e, t, n, r, "Set cannot be represented in JSON Schema");
	}, hs = (e, t, n, r) => {
		let i = n, a = e._zod.def, { minimum: o, maximum: s } = e._zod.bag;
		typeof o == "number" && (i.minItems = o), typeof s == "number" && (i.maxItems = s), i.type = "array", i.items = A(a.element, t, {
			...r,
			path: [...r.path, "items"]
		});
	}, gs = (e, t, n, r) => {
		let i = n, a = e._zod.def, o = a.shape;
		if (Object.getOwnPropertySymbols(o).length && k(e, t, i, r, "Symbol keys cannot be represented in JSON Schema")) return;
		i.type = "object", i.properties = {};
		for (let e in o) S(i.properties, e, A(o[e], t, {
			...r,
			path: [
				...r.path,
				"properties",
				e
			]
		}));
		let s = new Set(Object.keys(o)), c = new Set([...s].filter((e) => {
			let n = a.shape[e];
			return t.io === "input" ? Bo(n) === void 0 : n._zod.optout === void 0;
		}));
		c.size > 0 && (i.required = Array.from(c)), a.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : a.catchall ? a.catchall && (i.additionalProperties = A(a.catchall, t, {
			...r,
			path: [...r.path, "additionalProperties"]
		})) : t.io === "output" && (i.additionalProperties = !1);
	}, _s = (e, t, n, r) => {
		let i = e._zod.def, a = i.inclusive === !1, o = i.options.map((e, n) => A(e, t, {
			...r,
			path: [
				...r.path,
				a ? "oneOf" : "anyOf",
				n
			]
		}));
		a ? n.oneOf = o : n.anyOf = o;
	}, vs = (e, t, n, r) => {
		let i = e._zod.def, a = A(i.left, t, {
			...r,
			path: [
				...r.path,
				"allOf",
				0
			]
		}), o = A(i.right, t, {
			...r,
			path: [
				...r.path,
				"allOf",
				1
			]
		}), s = (e) => "allOf" in e && Object.keys(e).length === 1, c = [...s(a) ? a.allOf : [a], ...s(o) ? o.allOf : [o]];
		n.allOf = c, t.intersections.push(c);
	}, ys = (e, t, n, r) => {
		let i = n, a = e._zod.def;
		i.type = "array";
		let o = t.target === "draft-2020-12" ? "prefixItems" : "items", s = t.target === "draft-2020-12" || t.target === "openapi-3.0" ? "items" : "additionalItems", c = a.items.map((e, n) => A(e, t, {
			...r,
			path: [
				...r.path,
				o,
				n
			]
		})), l = a.rest ? A(a.rest, t, {
			...r,
			path: [
				...r.path,
				s,
				...t.target === "openapi-3.0" ? [a.items.length] : []
			]
		}) : null, u = a.items.length;
		for (; u > 0;) {
			let e = a.items[u - 1];
			if (!(t.io === "input" ? Bo(e) !== void 0 : e._zod.optout === "optional")) break;
			u--;
		}
		let d = a.items.length, f = !a.rest;
		t.target === "draft-2020-12" ? (i.prefixItems = c, f ? i.items = !1 : l && (i.items = l), u > 0 && (i.minItems = u), f && (i.maxItems = d)) : t.target === "openapi-3.0" ? (i.items = { anyOf: c }, l && i.items.anyOf.push(l), u > 0 && (i.minItems = u), f && (i.maxItems = d)) : (i.items = c, f ? i.additionalItems = !1 : l && (i.additionalItems = l), u > 0 && (i.minItems = u), f && (i.maxItems = d));
		let { minimum: p, maximum: ee } = e._zod.bag;
		typeof p == "number" && (i.minItems = p), typeof ee == "number" && (i.maxItems = ee);
	}, bs = /* @__PURE__ */ new WeakMap(), xs = (e, t, n, r) => {
		let i = n, a = e._zod.def;
		i.type = "object";
		let o = a.keyType, s = o._zod.bag?.patterns;
		if (a.mode === "loose" && s && s.size > 0) {
			let e = A(a.valueType, t, {
				...r,
				path: [
					...r.path,
					"patternProperties",
					"*"
				]
			});
			i.patternProperties = {};
			for (let t of s) S(i.patternProperties, t.source, e);
		} else {
			if (t.target === "draft-07" || t.target === "draft-2020-12") {
				i.propertyNames = A(a.keyType, t, {
					...r,
					path: [...r.path, "propertyNames"]
				});
				let n = bs.get(t);
				n || (n = [], bs.set(t, n), t.deferred.push(() => Ho(t))), n.push(e);
			}
			i.additionalProperties = A(a.valueType, t, {
				...r,
				path: [...r.path, "additionalProperties"]
			});
		}
		let c = o._zod.values, l = t.io === "input" && Bo(a.valueType) !== void 0;
		if (c && !a.partial && !l) {
			let e = [...c].filter((e) => typeof e == "string" || typeof e == "number");
			e.length > 0 && (i.required = e.map(String));
		}
	}, Ss = (e, t, n, r) => {
		let i = e._zod.def, a = A(i.innerType, t, r), o = t.seen.get(e);
		t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [a, { type: "null" }];
	}, Cs = (e, t, n, r) => {
		let i = e._zod.def;
		A(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
	}, ws = Symbol(), Ts = (e, t, n, r) => {
		let i = e._zod.def;
		A(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
		let o = Uo(i.defaultValue, e, t, n, r);
		o !== ws && (n.default = o);
	}, Es = (e, t, n, r) => {
		let i = e._zod.def;
		A(i.innerType, t, r);
		let a = t.seen.get(e);
		if (a.ref = i.innerType, t.io !== "input") return;
		let o = Uo(i.defaultValue, e, t, n, r);
		o !== ws && (n._prefault = o);
	}, Ds = (e, t, n, r) => {
		let i = e._zod.def;
		A(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
		let o;
		try {
			o = i.catchValue(void 0);
		} catch {
			k(e, t, n, r, "Dynamic catch values are not supported in JSON Schema");
			return;
		}
		n.default = o;
	}, Os = (e, t, n, r) => {
		let i = e._zod.def, a = i.in._zod.traits.has("$ZodTransform"), o = t.io === "input" ? a ? i.out : i.in : i.out;
		A(o, t, r);
		let s = t.seen.get(e);
		s.ref = o;
	}, ks = (e, t, n, r) => {
		let i = e._zod.def;
		A(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType, n.readOnly = !0;
	}, As = (e, t, n, r) => {
		let i = e._zod.def;
		A(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
	}, js = (e, t, n, r) => {
		let i = e._zod.def;
		A(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
	}, Ms = (e, t, n, r) => {
		let i = e._zod.innerType;
		A(i, t, r);
		let a = t.seen.get(e);
		a.ref = i;
	}, Ns = {
		string: Ko,
		number: qo,
		boolean: Jo,
		bigint: Yo,
		symbol: Xo,
		null: Zo,
		undefined: Qo,
		void: $o,
		never: es,
		any: ts,
		unknown: ns,
		date: rs,
		enum: is,
		literal: as,
		nan: os,
		template_literal: ss,
		file: cs,
		success: ls,
		custom: us,
		function: ds,
		transform: fs,
		map: ps,
		set: ms,
		array: hs,
		object: gs,
		union: _s,
		intersection: vs,
		tuple: ys,
		record: xs,
		nullable: Ss,
		nonoptional: Cs,
		default: Ts,
		prefault: Es,
		catch: Ds,
		pipe: Os,
		readonly: ks,
		promise: As,
		optional: js,
		lazy: Ms
	};
})), Fs = b((() => {
	Bt(), gn(), $t(), Zi(), ua(), mr(), vr(), jt(), Xn(), pa(), va(), gr(), ya(), To(), zo(), Ps(), zo();
})), Is = b((() => {
	Fs();
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/classic/errors.js
function Ls(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		get() {
			let e = n(this);
			return Object.defineProperty(this, t, {
				value: e,
				configurable: !0,
				writable: !0
			}), e;
		},
		set(e) {
			Object.defineProperty(this, t, {
				value: e,
				configurable: !0,
				writable: !0
			});
		}
	});
}
var Rs, zs, Bs, Vs = b((() => {
	Fs(), jt(), Rs = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), zs = (e, t) => {
		Zt.init(e, t), e.name = "ZodError";
		let n = Object.getPrototypeOf(e);
		Rs.has(n) || (Rs.add(n), Ls(n, "format", (e) => (t) => Gt(e, t)), Ls(n, "flatten", (e) => (t) => Wt(e, t)), Ls(n, "addIssue", (e) => (t) => {
			e.issues.push(t), e.message = JSON.stringify(e.issues, Ie, 2);
		}), Ls(n, "addIssues", (e) => (t) => {
			e.issues.push(...t), e.message = JSON.stringify(e.issues, Ie, 2);
		}), Object.defineProperty(n, "isEmpty", {
			configurable: !0,
			enumerable: !1,
			get() {
				return this.issues.length === 0;
			}
		}));
	}, Bs = /*@__PURE__*/ T("ZodError", zs, void 0, { Parent: Error });
})), Hs, Us, Ws, Gs, Ks, qs, Js, Ys, Xs, Zs, Qs, $s, ec = b((() => {
	Fs(), Vs(), Hs = /* @__PURE__ */ tn(Bs), Us = /* @__PURE__ */ nn(Bs), Ws = /* @__PURE__ */ rn(Bs), Gs = /* @__PURE__ */ on(Bs), Ks = /* @__PURE__ */ cn(Bs), qs = /* @__PURE__ */ ln(Bs), Js = /* @__PURE__ */ un(Bs), Ys = /* @__PURE__ */ dn(Bs), Xs = /* @__PURE__ */ fn(Bs), Zs = /* @__PURE__ */ pn(Bs), Qs = /* @__PURE__ */ mn(Bs), $s = /* @__PURE__ */ hn(Bs);
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/classic/schemas.js
function tc() {
	zt.localeError || Nt(da());
}
function nc() {
	zt.memoizer || Nt({ memoizer: ta() });
}
function M(e) {
	return /* @__PURE__ */ ba(Oc, e);
}
function N(e) {
	return /* @__PURE__ */ Da(Ic, e);
}
function rc(e) {
	return /* @__PURE__ */ La(Kc, e);
}
function ic(e) {
	return /* @__PURE__ */ Ra(qc, e);
}
function P(e) {
	return /* @__PURE__ */ qa(Qc, e);
}
function ac(e) {
	return /* @__PURE__ */ Ya($c, e);
}
function F(e) {
	return /* @__PURE__ */ Xa(el, e);
}
function oc() {
	return /* @__PURE__ */ Za(tl);
}
function sc(e) {
	return /* @__PURE__ */ Qa(nl, e);
}
function I(e, t) {
	return /* @__PURE__ */ bo(rl, e, t);
}
function L(e, t) {
	let n = {
		type: "object",
		shape: e ?? {},
		...C(t)
	};
	return new il(n);
}
function cc(e, t) {
	return new il({
		type: "object",
		shape: e,
		catchall: sc(),
		...C(t)
	});
}
function lc(e, t) {
	return new il({
		type: "object",
		shape: e,
		catchall: oc(),
		...C(t)
	});
}
function uc(e, t) {
	return new al({
		type: "union",
		options: e,
		...C(t)
	});
}
function R(e, t, n) {
	return new ol({
		type: "union",
		options: t,
		discriminator: e,
		...C(n)
	});
}
function dc(e, t) {
	return new sl({
		type: "intersection",
		left: e,
		right: t
	});
}
function fc(e, t, n) {
	let r = t instanceof D;
	return new cl({
		type: "tuple",
		items: e,
		rest: r ? t : null,
		...C(r ? n : t)
	});
}
function z(e, t, n) {
	return !t || !t._zod ? new ll({
		type: "record",
		keyType: M(),
		valueType: e,
		...C(t)
	}) : new ll({
		type: "record",
		keyType: e,
		valueType: t,
		...C(n)
	});
}
function pc(e, t, n) {
	return new ll({
		type: "record",
		keyType: e,
		valueType: t,
		...C(n),
		partial: !0
	});
}
function B(e, t) {
	let n = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e;
	return new ul({
		type: "enum",
		entries: n,
		...C(t)
	});
}
function V(e, t) {
	return new dl({
		type: "literal",
		values: Array.isArray(e) ? e : [e],
		...C(t)
	});
}
function mc(e) {
	return new fl({
		type: "transform",
		transform: e
	});
}
function hc(e) {
	return new pl({
		type: "optional",
		innerType: e
	});
}
function gc(e) {
	return new ml({
		type: "optional",
		innerType: e
	});
}
function _c(e) {
	return new hl({
		type: "nullable",
		innerType: e
	});
}
function vc(e, t) {
	return new gl({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : Ke(t);
		}
	});
}
function yc(e, t) {
	return new _l({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : Ke(t);
		}
	});
}
function bc(e, t) {
	return new vl({
		type: "nonoptional",
		innerType: e,
		...C(t)
	});
}
function xc(e, t) {
	return new yl({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : bt(t)
	});
}
function Sc(e, t) {
	return new bl({
		type: "pipe",
		in: e,
		out: t
	});
}
function Cc(e) {
	return new Sl({
		type: "readonly",
		innerType: e
	});
}
function wc(e) {
	return new Cl({
		type: "lazy",
		getter: e
	});
}
function Tc(e, t = {}) {
	return /* @__PURE__ */ xo(wl, e, t);
}
function Ec(e, t) {
	return /* @__PURE__ */ So(e, t);
}
var H, Dc, Oc, U, kc, Ac, jc, Mc, Nc, Pc, Fc, Ic, Lc, Rc, zc, Bc, Vc, Hc, Uc, Wc, Gc, Kc, qc, Jc, Yc, Xc, Zc, Qc, $c, el, tl, nl, rl, il, al, ol, sl, cl, ll, ul, dl, fl, pl, ml, hl, gl, _l, vl, yl, bl, xl, Sl, Cl, wl, Tl, El = b((() => {
	Fs(), Ps(), zo(), pa(), Is(), ec(), H = /*@__PURE__*/ T("ZodType", (e, t) => (tc(), D.init(e, t), e.def = t, e.type = t.type, e), {
		check(...e) {
			let t = this.def;
			return this.clone(Ve(t, { checks: [...t.checks ?? [], ...e.map((e) => typeof e == "function" ? { _zod: {
				check: e,
				def: { check: "custom" },
				onattach: []
			} } : e)] }), { parent: !0 });
		},
		with(...e) {
			return this.check(...e);
		},
		clone(e, t) {
			return Je(this, e, t);
		},
		brand() {
			return this;
		},
		register(e, t) {
			return e.add(this, t), this;
		},
		refine(e, t) {
			return this.check(Tc(e, t));
		},
		superRefine(e, t) {
			return this.check(Ec(e, t));
		},
		overwrite(e) {
			return this.check(/* @__PURE__ */ mo(e));
		},
		optional() {
			return hc(this);
		},
		exactOptional() {
			return gc(this);
		},
		nullable() {
			return _c(this);
		},
		nullish() {
			return hc(_c(this));
		},
		nonoptional(e) {
			return bc(this, e);
		},
		array() {
			return I(this);
		},
		or(e) {
			return uc([this, e]);
		},
		and(e) {
			return dc(this, e);
		},
		transform(e) {
			return Sc(this, mc(e));
		},
		default(e) {
			return vc(this, e);
		},
		prefault(e) {
			return yc(this, e);
		},
		catch(e) {
			return xc(this, e);
		},
		pipe(e) {
			return Sc(this, e);
		},
		readonly() {
			return Cc(this);
		},
		describe(e) {
			let t = this.clone();
			return _a.add(t, { description: e }), t;
		},
		meta(...e) {
			if (e.length === 0) return _a.get(this);
			let t = this.clone();
			return _a.add(t, e[0]), t;
		},
		isOptional() {
			return this.safeParse(void 0).success;
		},
		isNullable() {
			return this.safeParse(null).success;
		},
		apply(e, ...t) {
			return t.length === 0 ? e(this) : e(this, ...t);
		},
		get "~standard"() {
			return gt(this, "~standard", {
				...yr(this),
				jsonSchema: {
					input: Ro(this, "input"),
					output: Ro(this, "output")
				}
			});
		},
		set "~standard"(e) {
			ht(this, "~standard", e);
		},
		parse: function e(t, n) {
			return Hs(this, t, n, { callee: e });
		},
		parseAsync: async function e(t, n) {
			return await Us(this, t, n, { callee: e });
		},
		safeParse(e, t) {
			return Ws(this, e, t);
		},
		async safeParseAsync(e, t) {
			return Gs(this, e, t);
		},
		get spa() {
			return this?.safeParseAsync;
		},
		set spa(e) {
			ht(this, "spa", e);
		},
		encode: function e(t, n) {
			return Ks(this, t, n, { callee: e });
		},
		decode: function e(t, n) {
			return qs(this, t, n, { callee: e });
		},
		encodeAsync: async function e(t, n) {
			return await Js(this, t, n, { callee: e });
		},
		decodeAsync: async function e(t, n) {
			return await Ys(this, t, n, { callee: e });
		},
		safeEncode(e, t) {
			return Xs(this, e, t);
		},
		safeDecode(e, t) {
			return Zs(this, e, t);
		},
		async safeEncodeAsync(e, t) {
			return Qs(this, e, t);
		},
		async safeDecodeAsync(e, t) {
			return $s(this, e, t);
		},
		toJSONSchema(e) {
			return Lo(this, {})(e);
		},
		get description() {
			return _a.get(this)?.description;
		},
		get _def() {
			return this._zod.def;
		}
	}), Dc = /*@__PURE__*/ T("_ZodString", (e, t) => {
		Yr.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ko(e, t, n, r);
		let n = e._zod.bag;
		e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null;
	}, {
		regex(...e) {
			return this.check(/* @__PURE__ */ so(...e));
		},
		includes(...e) {
			return this.check(/* @__PURE__ */ uo(...e));
		},
		startsWith(...e) {
			return this.check(/* @__PURE__ */ fo(...e));
		},
		endsWith(...e) {
			return this.check(/* @__PURE__ */ po(...e));
		},
		min(...e) {
			return this.check(/* @__PURE__ */ ao(...e));
		},
		max(...e) {
			return this.check(/* @__PURE__ */ io(...e));
		},
		length(...e) {
			return this.check(/* @__PURE__ */ oo(...e));
		},
		nonempty(...e) {
			return this.check(/* @__PURE__ */ ao(1, ...e));
		},
		lowercase(e) {
			return this.check(/* @__PURE__ */ co(e));
		},
		uppercase(e) {
			return this.check(/* @__PURE__ */ lo(e));
		},
		trim() {
			return this.check(/* @__PURE__ */ go());
		},
		normalize(...e) {
			return this.check(/* @__PURE__ */ ho(...e));
		},
		toLowerCase() {
			return this.check(/* @__PURE__ */ _o());
		},
		toUpperCase() {
			return this.check(/* @__PURE__ */ vo());
		},
		slugify() {
			return this.check(/* @__PURE__ */ yo());
		}
	}), Oc = /*@__PURE__*/ T("ZodString", (e, t) => {
		Yr.init(e, t), Dc.init(e, t);
	}, {
		email(e) {
			return this.check(/* @__PURE__ */ xa(Nc, e));
		},
		url(e) {
			return this.check(/* @__PURE__ */ Da(Ic, e));
		},
		jwt(e) {
			return this.check(/* @__PURE__ */ Ha(Zc, e));
		},
		emoji(e) {
			return this.check(/* @__PURE__ */ Oa(Lc, e));
		},
		guid(e) {
			return this.check(/* @__PURE__ */ Sa(Pc, e));
		},
		uuid(e) {
			return this.check(/* @__PURE__ */ Ca(Fc, e));
		},
		uuidv4(e) {
			return this.check(/* @__PURE__ */ wa(Fc, e));
		},
		uuidv6(e) {
			return this.check(/* @__PURE__ */ Ta(Fc, e));
		},
		uuidv7(e) {
			return this.check(/* @__PURE__ */ Ea(Fc, e));
		},
		nanoid(e) {
			return this.check(/* @__PURE__ */ ka(Rc, e));
		},
		cuid(e) {
			return this.check(/* @__PURE__ */ Aa(zc, e));
		},
		cuid2(e) {
			return this.check(/* @__PURE__ */ ja(Bc, e));
		},
		ulid(e) {
			return this.check(/* @__PURE__ */ Ma(Vc, e));
		},
		base64(e) {
			return this.check(/* @__PURE__ */ za(Jc, e));
		},
		base64url(e) {
			return this.check(/* @__PURE__ */ Ba(Yc, e));
		},
		xid(e) {
			return this.check(/* @__PURE__ */ Na(Hc, e));
		},
		ksuid(e) {
			return this.check(/* @__PURE__ */ Pa(Uc, e));
		},
		ipv4(e) {
			return this.check(/* @__PURE__ */ Fa(Wc, e));
		},
		ipv6(e) {
			return this.check(/* @__PURE__ */ Ia(Gc, e));
		},
		cidrv4(e) {
			return this.check(/* @__PURE__ */ La(Kc, e));
		},
		cidrv6(e) {
			return this.check(/* @__PURE__ */ Ra(qc, e));
		},
		e164(e) {
			return this.check(/* @__PURE__ */ Va(Xc, e));
		},
		datetime(e) {
			return this.check(/* @__PURE__ */ Ua(kc, e));
		},
		date(e) {
			return this.check(/* @__PURE__ */ Wa(Ac, e));
		},
		time(e) {
			return this.check(/* @__PURE__ */ Ga(jc, e));
		},
		duration(e) {
			return this.check(/* @__PURE__ */ Ka(Mc, e));
		}
	}), U = /*@__PURE__*/ T("ZodStringFormat", (e, t) => {
		O.init(e, t), Dc.init(e, t);
	}), kc = /*@__PURE__*/ T("ZodISODateTime", (e, t) => {
		ci.init(e, t), U.init(e, t);
	}), Ac = /*@__PURE__*/ T("ZodISODate", (e, t) => {
		li.init(e, t), U.init(e, t);
	}), jc = /*@__PURE__*/ T("ZodISOTime", (e, t) => {
		ui.init(e, t), U.init(e, t);
	}), Mc = /*@__PURE__*/ T("ZodISODuration", (e, t) => {
		di.init(e, t), U.init(e, t);
	}), Nc = /*@__PURE__*/ T("ZodEmail", (e, t) => {
		Qr.init(e, t), U.init(e, t);
	}), Pc = /*@__PURE__*/ T("ZodGUID", (e, t) => {
		Xr.init(e, t), U.init(e, t);
	}), Fc = /*@__PURE__*/ T("ZodUUID", (e, t) => {
		Zr.init(e, t), U.init(e, t);
	}), Ic = /*@__PURE__*/ T("ZodURL", (e, t) => {
		ei.init(e, t), U.init(e, t);
	}), Lc = /*@__PURE__*/ T("ZodEmoji", (e, t) => {
		ti.init(e, t), U.init(e, t);
	}), Rc = /*@__PURE__*/ T("ZodNanoID", (e, t) => {
		ni.init(e, t), U.init(e, t);
	}), zc = /*@__PURE__*/ T("ZodCUID", (e, t) => {
		ri.init(e, t), U.init(e, t);
	}), Bc = /*@__PURE__*/ T("ZodCUID2", (e, t) => {
		ii.init(e, t), U.init(e, t);
	}), Vc = /*@__PURE__*/ T("ZodULID", (e, t) => {
		ai.init(e, t), U.init(e, t);
	}), Hc = /*@__PURE__*/ T("ZodXID", (e, t) => {
		oi.init(e, t), U.init(e, t);
	}), Uc = /*@__PURE__*/ T("ZodKSUID", (e, t) => {
		si.init(e, t), U.init(e, t);
	}), Wc = /*@__PURE__*/ T("ZodIPv4", (e, t) => {
		fi.init(e, t), U.init(e, t);
	}), Gc = /*@__PURE__*/ T("ZodIPv6", (e, t) => {
		mi.init(e, t), U.init(e, t);
	}), Kc = /*@__PURE__*/ T("ZodCIDRv4", (e, t) => {
		hi.init(e, t), U.init(e, t);
	}), qc = /*@__PURE__*/ T("ZodCIDRv6", (e, t) => {
		gi.init(e, t), U.init(e, t);
	}), Jc = /*@__PURE__*/ T("ZodBase64", (e, t) => {
		_i.init(e, t), U.init(e, t);
	}), Yc = /*@__PURE__*/ T("ZodBase64URL", (e, t) => {
		vi.init(e, t), U.init(e, t);
	}), Xc = /*@__PURE__*/ T("ZodE164", (e, t) => {
		yi.init(e, t), U.init(e, t);
	}), Zc = /*@__PURE__*/ T("ZodJWT", (e, t) => {
		bi.init(e, t), U.init(e, t);
	}), Qc = /*@__PURE__*/ T("ZodNumber", (e, t) => {
		xi.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => qo(e, t, n, r);
		let n = e._zod.bag;
		e.minValue = Math.max(n.minimum ?? -Infinity, n.exclusiveMinimum ?? -Infinity) ?? null, e.maxValue = Math.min(n.maximum ?? Infinity, n.exclusiveMaximum ?? Infinity) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? .5), e.isFinite = !0, e.format = n.format ?? null;
	}, {
		gt(e, t) {
			return this.check(/* @__PURE__ */ to(e, t));
		},
		gte(e, t) {
			return this.check(/* @__PURE__ */ no(e, t));
		},
		min(e, t) {
			return this.check(/* @__PURE__ */ no(e, t));
		},
		lt(e, t) {
			return this.check(/* @__PURE__ */ $a(e, t));
		},
		lte(e, t) {
			return this.check(/* @__PURE__ */ eo(e, t));
		},
		max(e, t) {
			return this.check(/* @__PURE__ */ eo(e, t));
		},
		int(e) {
			return this.check(ac(e));
		},
		safe(e) {
			return this.check(ac(e));
		},
		positive(e) {
			return this.check(/* @__PURE__ */ to(0, e));
		},
		nonnegative(e) {
			return this.check(/* @__PURE__ */ no(0, e));
		},
		negative(e) {
			return this.check(/* @__PURE__ */ $a(0, e));
		},
		nonpositive(e) {
			return this.check(/* @__PURE__ */ eo(0, e));
		},
		multipleOf(e, t) {
			return this.check(/* @__PURE__ */ ro(e, t));
		},
		step(e, t) {
			return this.check(/* @__PURE__ */ ro(e, t));
		},
		finite() {
			return this;
		}
	}), $c = /*@__PURE__*/ T("ZodNumberFormat", (e, t) => {
		Si.init(e, t), Qc.init(e, t);
	}), el = /*@__PURE__*/ T("ZodBoolean", (e, t) => {
		Ci.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Jo(e, t, n, r);
	}), tl = /*@__PURE__*/ T("ZodUnknown", (e, t) => {
		wi.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => ns(e, t, n, r);
	}), nl = /*@__PURE__*/ T("ZodNever", (e, t) => {
		Ti.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => es(e, t, n, r);
	}), rl = /*@__PURE__*/ T("ZodArray", (e, t) => {
		nc(), Ei.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => hs(e, t, n, r), e.element = t.element;
	}, {
		min(e, t) {
			return this.check(/* @__PURE__ */ ao(e, t));
		},
		nonempty(e) {
			return this.check(/* @__PURE__ */ ao(1, e));
		},
		max(e, t) {
			return this.check(/* @__PURE__ */ io(e, t));
		},
		length(e, t) {
			return this.check(/* @__PURE__ */ oo(e, t));
		},
		unwrap() {
			return this.element;
		}
	}), il = /*@__PURE__*/ T("ZodObject", (e, t) => {
		nc(), Ai.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => gs(e, t, n, r), yt(e, "shape", (e) => e._zod.def.shape, !1);
	}, {
		keyof() {
			return B(Object.keys(this._zod.def.shape));
		},
		catchall(e) {
			return this.clone({
				...this._zod.def,
				catchall: e
			});
		},
		passthrough() {
			return this.clone({
				...this._zod.def,
				catchall: oc()
			});
		},
		loose() {
			return this.clone({
				...this._zod.def,
				catchall: oc()
			});
		},
		strict() {
			return this.clone({
				...this._zod.def,
				catchall: sc()
			});
		},
		strip() {
			return this.clone({
				...this._zod.def,
				catchall: void 0
			});
		},
		extend(e) {
			return $e(this, e);
		},
		safeExtend(e) {
			return et(this, e);
		},
		merge(e) {
			return tt(this, e);
		},
		pick(e) {
			return Ze(this, e);
		},
		omit(e) {
			return Qe(this, e);
		},
		partial(...e) {
			return nt(pl, this, e[0]);
		},
		exactPartial(...e) {
			return nt(ml, this, e[0], "exactPartial");
		},
		required(...e) {
			return rt(vl, this, e[0]);
		}
	}), al = /*@__PURE__*/ T("ZodUnion", (e, t) => {
		ji.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => _s(e, t, n, r), e.options = t.options;
	}), ol = /*@__PURE__*/ T("ZodDiscriminatedUnion", (e, t) => {
		al.init(e, t), Mi.init(e, t);
	}), sl = /*@__PURE__*/ T("ZodIntersection", (e, t) => {
		Ni.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => vs(e, t, n, r);
	}), cl = /*@__PURE__*/ T("ZodTuple", (e, t) => {
		nc(), Pi.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => ys(e, t, n, r);
	}, {
		rest(e) {
			return this.clone({
				...this._zod.def,
				rest: e
			});
		},
		partial() {
			let e = this._zod.def;
			if (e.checks?.length) throw Error(".partial() cannot be used on tuple schemas containing refinements");
			return this.clone({
				...e,
				items: e.items.map((e) => new pl({
					type: "optional",
					innerType: e
				}))
			});
		}
	}), ll = /*@__PURE__*/ T("ZodRecord", (e, t) => {
		nc(), Fi.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => xs(e, t, n, r), e.keyType = t.keyType, e.valueType = t.valueType;
	}), ul = /*@__PURE__*/ T("ZodEnum", (e, t) => {
		Ii.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => is(e, t, n, r), e.enum = t.entries, e.options = Object.values(t.entries);
		let n = new Set(Object.keys(t.entries));
		e.extract = (e, r) => {
			let i = {};
			for (let r of e) if (n.has(r)) i[r] = t.entries[r];
			else throw Error(`Key ${r} not found in enum`);
			return new ul({
				...t,
				checks: [],
				...C(r),
				entries: i
			});
		}, e.exclude = (e, r) => {
			let i = { ...t.entries };
			for (let t of e) if (n.has(t)) delete i[t];
			else throw Error(`Key ${t} not found in enum`);
			return new ul({
				...t,
				checks: [],
				...C(r),
				entries: i
			});
		};
	}), dl = /*@__PURE__*/ T("ZodLiteral", (e, t) => {
		Li.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => as(e, t, n, r), e.values = new Set(t.values), Object.defineProperty(e, "value", { get() {
			if (t.values.length > 1) throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
			return t.values[0];
		} });
	}), fl = /*@__PURE__*/ T("ZodTransform", (e, t) => {
		nc(), Ri.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => fs(e, t, n, r), e._zod.parse = (n, r) => {
			if (r.direction === "backward") throw new Rt(e.constructor.name);
			n.addIssue = (r) => {
				if (typeof r == "string") n.issues.push(pt(r, n.value, t));
				else {
					let t = r;
					t.fatal && (t.continue = !1), t.code ??= "custom", "input" in t || (t.input = n.value), t.inst ??= e, n.issues.push(pt(t));
				}
			};
			let i = t.transform(n.value, n);
			return i instanceof Promise ? i.then((e) => (n.value = e, n)) : (n.value = i, n);
		};
	}), pl = /*@__PURE__*/ T("ZodOptional", (e, t) => {
		zi.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => js(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), ml = /*@__PURE__*/ T("ZodExactOptional", (e, t) => {
		Bi.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => js(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), hl = /*@__PURE__*/ T("ZodNullable", (e, t) => {
		Vi.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ss(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), gl = /*@__PURE__*/ T("ZodDefault", (e, t) => {
		Hi.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ts(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
	}), _l = /*@__PURE__*/ T("ZodPrefault", (e, t) => {
		Ui.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Es(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), vl = /*@__PURE__*/ T("ZodNonOptional", (e, t) => {
		Wi.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Cs(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), yl = /*@__PURE__*/ T("ZodCatch", (e, t) => {
		Gi.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ds(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
	}), bl = /*@__PURE__*/ T("ZodPipe", (e, t) => {
		Ki.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Os(e, t, n, r), e.in = t.in, e.out = t.out;
	}), xl = /*@__PURE__*/ T("ZodCodec", (e, t) => {
		bl.init(e, t), qi.init(e, t);
	}), Sl = /*@__PURE__*/ T("ZodReadonly", (e, t) => {
		Ji.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => ks(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), Cl = /*@__PURE__*/ T("ZodLazy", (e, t) => {
		Yi.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ms(e, t, n, r), e.unwrap = () => e._zod.def.getter();
	}), wl = /*@__PURE__*/ T("ZodCustom", (e, t) => {
		Xi.init(e, t), H.init(e, t), e._zod.processJSONSchema = (t, n, r) => us(e, t, n, r);
	}), Tl = (...e) => /* @__PURE__ */ wo({
		Codec: xl,
		Boolean: el,
		String: Oc
	}, ...e);
})), Dl = b((() => {
	Fs();
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/classic/iso.js
function Ol(e) {
	return /* @__PURE__ */ Ua(kc, e);
}
var kl = b((() => {
	Fs(), El();
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/classic/coerce.js
function W(e) {
	return /* @__PURE__ */ Ja(Qc, e);
}
var Al = b((() => {
	Fs(), El();
})), jl = b((() => {
	Fs(), El(), Is(), Vs(), ec(), Dl(), Ps(), va(), jt(), Is(), kl(), El(), Zi(), pa(), Al();
})), G = b((() => {
	jl(), jl();
})), Ml, Nl, Pl, Fl, Il, Ll, Rl, zl = b((() => {
	G(), Ml = (e) => {
		if (typeof e != "object" || !e || !("~orpc" in e)) return;
		let { route: t } = e["~orpc"];
		if (t?.method !== void 0 && t.path !== void 0) return {
			method: t.method,
			path: t.path
		};
	}, Nl = (e) => {
		let t = [];
		for (let [n, r] of Object.entries(e)) if (typeof r == "object" && r) for (let [e, i] of Object.entries(r)) {
			let r = Ml(i);
			r !== void 0 && t.push({
				name: `${n}.${e}`,
				method: r.method,
				path: r.path
			});
		}
		return t.toSorted((e, t) => e.name.localeCompare(t.name));
	}, Pl = /* @__PURE__ */ new Set([
		"required",
		"enum",
		"anyOf",
		"oneOf",
		"allOf"
	]), Fl = (e, t) => {
		if (Array.isArray(e)) {
			let n = e.map((e) => Fl(e));
			return t !== void 0 && Pl.has(t) ? n.toSorted((e, t) => JSON.stringify(e).localeCompare(JSON.stringify(t))) : n;
		}
		return typeof e != "object" || !e ? e : Object.entries(e).toSorted(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [e, Fl(t, e)]);
	}, Il = (e) => {
		let t = JSON.stringify(Fl(e)), n = 2166136261;
		for (let e = 0; e < t.length; e++) n ^= t.charCodeAt(e), n = Math.imul(n, 16777619) >>> 0;
		return n.toString(36);
	}, Ll = (e) => {
		if (typeof e != "object" || !e || !("~orpc" in e)) return;
		let { inputSchema: t, outputSchema: n } = e["~orpc"];
		try {
			return Il({
				in: t === void 0 ? void 0 : Wo(t, { io: "input" }),
				out: n === void 0 ? void 0 : Wo(n, { io: "output" })
			});
		} catch {
			return;
		}
	}, Rl = (e) => {
		let t = {};
		for (let [n, r] of Object.entries(e)) if (typeof r == "object" && r) for (let [e, i] of Object.entries(r)) {
			if (Ml(i) === void 0) continue;
			let r = Ll(i);
			r !== void 0 && (t[`${n}.${e}`] = r);
		}
		return t;
	};
}));
//#endregion
//#region node_modules/.pnpm/@orpc+shared@1.14.13/node_modules/@orpc/shared/dist/index.mjs
function Bl(e) {
	return e[0] ?? {};
}
function Vl(e) {
	let t = Promise.resolve();
	return (...n) => t = t.catch(() => {}).then(() => e(...n));
}
function Hl(e) {
	return !e || typeof e != "object" ? !1 : "next" in e && typeof e.next == "function" && Symbol.asyncIterator in e && typeof e[Symbol.asyncIterator] == "function";
}
function Ul(e) {
	return Wl(e) ? Object.getPrototypeOf(e)?.constructor : null;
}
function Wl(e) {
	return !!e && (typeof e == "object" || typeof e == "function");
}
var Gl, Kl, ql, Jl, Yl = b((() => {
	Gl = "@orpc/shared", Kl = "1.14.13", `${Gl}${Kl}`, ql = Symbol.asyncDispose ?? Symbol.for("asyncDispose"), Jl = class {
		#e = !1;
		#t = !1;
		#n;
		#r;
		constructor(e, t) {
			this.#n = t, this.#r = Vl(async () => {
				if (this.#e) return {
					done: !0,
					value: void 0
				};
				try {
					let t = await e();
					return t.done && (this.#e = !0), t;
				} catch (e) {
					throw this.#e = !0, e;
				} finally {
					this.#e && !this.#t && (this.#t = !0, await this.#n("next"));
				}
			});
		}
		next() {
			return this.#r();
		}
		async return(e) {
			return this.#e = !0, this.#t || (this.#t = !0, await this.#n("return")), {
				done: !0,
				value: e
			};
		}
		async throw(e) {
			throw this.#e = !0, this.#t || (this.#t = !0, await this.#n("throw")), e;
		}
		async [ql]() {
			this.#e = !0, this.#t || (this.#t = !0, await this.#n("dispose"));
		}
		[Symbol.asyncIterator]() {
			return this;
		}
	};
}));
//#endregion
//#region node_modules/.pnpm/@orpc+client@1.14.13/node_modules/@orpc/client/dist/shared/client.DexhfmWd.mjs
function Xl(e, t) {
	return t ?? tu[e]?.status ?? 500;
}
function Zl(e, t) {
	return t || tu[e]?.message || e;
}
function Ql(e) {
	return e < 200 || e >= 400;
}
var $l, eu, tu, nu, ru, iu = b((() => {
	Yl(), $l = "@orpc/client", eu = "1.14.13", tu = {
		BAD_REQUEST: {
			status: 400,
			message: "Bad Request"
		},
		UNAUTHORIZED: {
			status: 401,
			message: "Unauthorized"
		},
		FORBIDDEN: {
			status: 403,
			message: "Forbidden"
		},
		NOT_FOUND: {
			status: 404,
			message: "Not Found"
		},
		METHOD_NOT_SUPPORTED: {
			status: 405,
			message: "Method Not Supported"
		},
		NOT_ACCEPTABLE: {
			status: 406,
			message: "Not Acceptable"
		},
		TIMEOUT: {
			status: 408,
			message: "Request Timeout"
		},
		CONFLICT: {
			status: 409,
			message: "Conflict"
		},
		PRECONDITION_FAILED: {
			status: 412,
			message: "Precondition Failed"
		},
		PAYLOAD_TOO_LARGE: {
			status: 413,
			message: "Payload Too Large"
		},
		UNSUPPORTED_MEDIA_TYPE: {
			status: 415,
			message: "Unsupported Media Type"
		},
		UNPROCESSABLE_CONTENT: {
			status: 422,
			message: "Unprocessable Content"
		},
		TOO_MANY_REQUESTS: {
			status: 429,
			message: "Too Many Requests"
		},
		CLIENT_CLOSED_REQUEST: {
			status: 499,
			message: "Client Closed Request"
		},
		INTERNAL_SERVER_ERROR: {
			status: 500,
			message: "Internal Server Error"
		},
		NOT_IMPLEMENTED: {
			status: 501,
			message: "Not Implemented"
		},
		BAD_GATEWAY: {
			status: 502,
			message: "Bad Gateway"
		},
		SERVICE_UNAVAILABLE: {
			status: 503,
			message: "Service Unavailable"
		},
		GATEWAY_TIMEOUT: {
			status: 504,
			message: "Gateway Timeout"
		}
	}, ru = class e extends Error {
		defined;
		code;
		status;
		data;
		static {
			let t = Symbol.for(`__${$l}@${eu}/error/ORPC_ERROR_CONSTRUCTORS__`);
			globalThis[t] ??= /* @__PURE__ */ new WeakSet(), nu = globalThis[t], nu.add(e);
		}
		constructor(e, ...t) {
			let n = Bl(t);
			if (n.status !== void 0 && !Ql(n.status)) throw Error("[ORPCError] Invalid error status code.");
			let r = Zl(e, n.message);
			super(r, n), this.code = e, this.status = Xl(e, n.status), this.defined = n.defined ?? !1, this.data = n.data;
		}
		toJSON() {
			return {
				defined: this.defined,
				code: this.code,
				status: this.status,
				message: this.message,
				data: this.data
			};
		}
		static [Symbol.hasInstance](e) {
			if (nu.has(this)) {
				let t = Ul(e);
				if (t && nu.has(t)) return !0;
			}
			return super[Symbol.hasInstance](e);
		}
	};
}));
function au(e) {
	return fu.test(e);
}
function ou(e) {
	if (au(e)) throw new du("Event's id must not contain a carriage return or newline character");
}
function su(e) {
	if (!Number.isInteger(e) || e < 0) throw new du("Event's retry must be a integer and >= 0");
}
function cu(e) {
	if (au(e)) throw new du("Event's comment must not contain a carriage return or newline character");
}
function lu(e, t) {
	if (t.id === void 0 && t.retry === void 0 && !t.comments?.length) return e;
	if (t.id !== void 0 && ou(t.id), t.retry !== void 0 && su(t.retry), t.comments !== void 0) for (let e of t.comments) cu(e);
	return new Proxy(e, { get(e, n, r) {
		return n === pu ? t : Reflect.get(e, n, r);
	} });
}
function uu(e) {
	return Wl(e) ? Reflect.get(e, pu) : void 0;
}
var du, fu, pu, mu = b((() => {
	Yl(), du = class extends TypeError {}, TransformStream, fu = /\r\n|[\n\r]/, pu = Symbol("ORPC_EVENT_SOURCE_META");
}));
//#endregion
//#region node_modules/.pnpm/@orpc+client@1.14.13/node_modules/@orpc/client/dist/shared/client.BLtwTQUg.mjs
function hu(e, t) {
	let n = async (e) => {
		let n = await t.error(e);
		if (n !== e) {
			let t = uu(e);
			t && Wl(n) && (n = lu(n, t));
		}
		return n;
	};
	return new Jl(async () => {
		let { done: r, value: i } = await (async () => {
			try {
				return await e.next();
			} catch (e) {
				throw await n(e);
			}
		})(), a = await t.value(i, r);
		if (a !== i) {
			let e = uu(i);
			e && Wl(a) && (a = lu(a, e));
		}
		return {
			done: r,
			value: a
		};
	}, async () => {
		try {
			await e.return?.();
		} catch (e) {
			throw await n(e);
		}
	});
}
var gu = b((() => {
	Yl(), mu();
})), _u = b((() => {
	Yl(), iu(), gu(), mu();
}));
//#endregion
//#region node_modules/.pnpm/@orpc+contract@1.14.13/node_modules/@orpc/contract/dist/shared/contract.D_dZrO__.mjs
function vu(e, t) {
	return {
		...e,
		...t
	};
}
function yu(e) {
	return e instanceof xu || (typeof e == "object" || typeof e == "function") && e !== null && "~orpc" in e && typeof e["~orpc"] == "object" && e["~orpc"] !== null && "errorMap" in e["~orpc"] && "route" in e["~orpc"] && "meta" in e["~orpc"];
}
var bu, xu, Su = b((() => {
	_u(), bu = class extends Error {
		issues;
		data;
		constructor(e) {
			super(e.message, e), this.issues = e.issues, this.data = e.data;
		}
	}, xu = class {
		"~orpc";
		constructor(e) {
			if (e.route?.successStatus && Ql(e.route.successStatus)) throw Error("[ContractProcedure] Invalid successStatus.");
			if (Object.values(e.errorMap).some((e) => e && e.status && !Ql(e.status))) throw Error("[ContractProcedure] Invalid error status code.");
			this["~orpc"] = e;
		}
	};
}));
//#endregion
//#region node_modules/.pnpm/@orpc+contract@1.14.13/node_modules/@orpc/contract/dist/index.mjs
function Cu(e, t) {
	return {
		...e,
		...t
	};
}
function wu(e, t) {
	return {
		...e,
		...t
	};
}
function Tu(e, t) {
	return e.path ? {
		...e,
		path: `${t}${e.path}`
	} : e;
}
function Eu(e, t) {
	return {
		...e,
		tags: [...t, ...e.tags ?? []]
	};
}
function Du(e, t) {
	return e ? `${e}${t}` : t;
}
function Ou(e, t) {
	return e ? [...e, ...t] : t;
}
function ku(e, t) {
	let n = e;
	return t.prefix && (n = Tu(n, t.prefix)), t.tags?.length && (n = Eu(n, t.tags)), n;
}
function Au(e, t) {
	if (yu(e)) return new xu({
		...e["~orpc"],
		errorMap: vu(t.errorMap, e["~orpc"].errorMap),
		route: ku(e["~orpc"].route, t)
	});
	if (typeof e != "object" || !e) return e;
	let n = {};
	for (let r in e) n[r] = Au(e[r], t);
	return n;
}
function ju(e, t) {
	return { "~standard": {
		[Nu]: {
			yields: e,
			returns: t
		},
		vendor: "orpc",
		version: 1,
		validate(n) {
			return Hl(n) ? { value: hu(n, {
				async value(n, r) {
					let i = r ? t : e;
					if (!i) return n;
					let a = await i["~standard"].validate(n);
					if (a.issues) throw new ru("EVENT_ITERATOR_VALIDATION_FAILED", {
						message: "Event iterator validation failed",
						cause: new bu({
							issues: a.issues,
							message: "Event iterator validation failed",
							data: n
						})
					});
					return a.value;
				},
				error: async (e) => e
			}) } : { issues: [{
				message: "Expect event iterator",
				path: []
			}] };
		}
	} };
}
var Mu, K, Nu, q = b((() => {
	Su(), Yl(), _u(), Mu = class e extends xu {
		constructor(e) {
			super(e), this["~orpc"].prefix = e.prefix, this["~orpc"].tags = e.tags;
		}
		$meta(t) {
			return new e({
				...this["~orpc"],
				meta: t
			});
		}
		$route(t) {
			return new e({
				...this["~orpc"],
				route: t
			});
		}
		$input(t) {
			return new e({
				...this["~orpc"],
				inputSchema: t
			});
		}
		errors(t) {
			return new e({
				...this["~orpc"],
				errorMap: vu(this["~orpc"].errorMap, t)
			});
		}
		meta(t) {
			return new e({
				...this["~orpc"],
				meta: Cu(this["~orpc"].meta, t)
			});
		}
		route(t) {
			return new e({
				...this["~orpc"],
				route: wu(this["~orpc"].route, t)
			});
		}
		input(t) {
			return new e({
				...this["~orpc"],
				inputSchema: t
			});
		}
		output(t) {
			return new e({
				...this["~orpc"],
				outputSchema: t
			});
		}
		prefix(t) {
			return new e({
				...this["~orpc"],
				prefix: Du(this["~orpc"].prefix, t)
			});
		}
		tag(...t) {
			return new e({
				...this["~orpc"],
				tags: Ou(this["~orpc"].tags, t)
			});
		}
		router(e) {
			return Au(e, this["~orpc"]);
		}
	}, K = new Mu({
		errorMap: {},
		route: {},
		meta: {}
	}), Nu = Symbol("ORPC_EVENT_ITERATOR_DETAILS");
})), Pu, Fu = b((() => {
	Pu = /^[a-zA-Z0-9][a-zA-Z0-9_-]{0,63}$/;
})), Iu, Lu, Ru, zu, Bu = b((() => {
	G(), B(["helper", "run"]), Iu = [
		{
			id: "commit-message",
			label: "Commit messages",
			blurb: "The subject written when an agent's work lands, and the release note under it.",
			kind: "helper",
			icon: "file-edit"
		},
		{
			id: "session-title",
			label: "Session titles",
			blurb: "The name a conversation wears on the board, written a second into its first turn.",
			kind: "helper",
			icon: "pencil"
		},
		{
			id: "safety-judge",
			label: "Safety judge",
			blurb: "Which model reads your safety policy before a flagged command runs.",
			kind: "helper",
			icon: "shield"
		},
		{
			id: "loop-verdict",
			label: "Loop verdicts",
			blurb: "Whether a loop's iteration met the goal, or the loop goes round again.",
			kind: "helper",
			icon: "check-square"
		},
		{
			id: "persona-router",
			label: "Persona routing",
			blurb: "Which model reads a new chat's first message and picks the persona for it.",
			kind: "helper",
			icon: "users"
		},
		{
			id: "pipeline-fix",
			label: "Pipeline fixes",
			blurb: "The agent started by Fix on a red pipeline.",
			kind: "run",
			trigger: "pressed",
			icon: "wave-pulse"
		},
		{
			id: "deployment-fix",
			label: "Deployment fixes",
			blurb: "The agent started by Fix on a deployment that is down.",
			kind: "run",
			trigger: "pressed",
			icon: "server"
		},
		{
			id: "maintenance-chore",
			label: "Maintenance chores",
			blurb: "A chore run started from the Maintenance board.",
			kind: "run",
			trigger: "pressed",
			icon: "wrench"
		},
		{
			id: "documentation-run",
			label: "Documentation runs",
			blurb: "A pass over a repo's own documentation.",
			kind: "run",
			trigger: "pressed",
			icon: "book"
		},
		{
			id: "acceptance-run",
			label: "Acceptance runs",
			blurb: "One session per story in an acceptance fan-out.",
			kind: "run",
			trigger: "pressed",
			icon: "list-check"
		},
		{
			id: "pre-push-fix",
			label: "Pre-push fixes",
			blurb: "The fix proposed when a check fails on the way to a push.",
			kind: "run",
			trigger: "pressed",
			icon: "cloud-upload"
		},
		{
			id: "approval-queue",
			label: "Approvals queue",
			blurb: "The turn that publishes or acts on what you approved.",
			kind: "run",
			trigger: "pressed",
			icon: "check-circle"
		},
		{
			id: "extension-review",
			label: "Extension update reviews",
			blurb: "The agent that reads an extension update before it is applied.",
			kind: "run",
			trigger: "unprompted",
			icon: "box"
		},
		{
			id: "loop-iteration",
			label: "Loop iterations",
			blurb: "Each round of a loop working towards its goal.",
			kind: "run",
			trigger: "unprompted",
			icon: "repeat"
		}
	], Lu = Iu.map((e) => e.id), Ru = B(Lu), zu = (e) => Iu.filter((t) => e(t)), zu((e) => e.kind === "helper"), zu((e) => e.kind === "run" && e.trigger === "pressed"), zu((e) => e.kind === "run" && e.trigger === "unprompted");
})), Vu, Hu, Uu, Wu, Gu, Ku = b((() => {
	Vu = {
		runtime: "claude-code",
		steering: !0,
		permissions: "modes",
		questions: !0,
		mcp: "full",
		execution: ["shell", "js"],
		effort: !0,
		fastMode: !0,
		isolation: "namespace",
		commands: !0,
		terminals: !0,
		recovery: !0,
		instructions: "replace",
		skillDiscovery: "native",
		rulebook: "hooks",
		secrets: "masked"
	}, Hu = {
		runtime: "codex",
		steering: !0,
		permissions: "plan",
		questions: !0,
		mcp: "browser",
		execution: ["shell"],
		effort: !0,
		fastMode: !1,
		isolation: "namespace",
		commands: !0,
		terminals: !1,
		recovery: !1,
		instructions: "replace",
		skillDiscovery: "native",
		rulebook: "approval",
		secrets: "none"
	}, Uu = {
		runtime: "opencode",
		steering: !1,
		permissions: "plan",
		questions: !1,
		mcp: "none",
		execution: ["shell"],
		effort: !1,
		fastMode: !1,
		isolation: "cwd",
		commands: !1,
		terminals: !1,
		recovery: !1,
		instructions: "append",
		skillDiscovery: "prompt",
		rulebook: "refuse-only",
		secrets: "none"
	}, Wu = {
		...Uu,
		runtime: "opencode-gemini"
	}, Gu = {
		runtime: "cursor",
		steering: !1,
		permissions: "plan",
		questions: !0,
		mcp: "tools",
		execution: ["shell"],
		effort: !0,
		fastMode: !1,
		isolation: "cwd",
		commands: !1,
		terminals: !1,
		recovery: !0,
		instructions: "append",
		skillDiscovery: "prompt",
		rulebook: "hooks",
		secrets: "none"
	};
})), qu, Ju, Yu, Xu = b((() => {
	Ku(), qu = [
		{
			id: "claude",
			label: "Claude Code",
			vendor: "Claude",
			accountLabel: "Claude",
			destination: "Anthropic",
			brand: "claude",
			access: {
				kind: "subscription",
				requirement: "Claude subscription",
				runs: "Claude Code"
			},
			auth: { kind: "oauth" },
			planLimits: !0,
			runtimes: {
				native: Vu,
				claudeCode: Vu
			}
		},
		{
			id: "codex",
			label: "Codex",
			vendor: "ChatGPT",
			accountLabel: "ChatGPT",
			destination: "ChatGPT",
			brand: "codex",
			access: {
				kind: "subscription",
				requirement: "ChatGPT subscription",
				runs: "Codex"
			},
			auth: {
				kind: "translator",
				cliProxy: "codex"
			},
			planLimits: !0,
			runtimes: {
				native: Hu,
				claudeCode: Vu
			}
		},
		{
			id: "grok",
			label: "Grok",
			vendor: "xAI",
			accountLabel: "Grok",
			destination: "x.ai",
			brand: "grok",
			access: {
				kind: "subscription",
				requirement: "SuperGrok subscription",
				runs: "Grok"
			},
			auth: {
				kind: "translator",
				cliProxy: "xai"
			},
			planLimits: !1,
			runtimes: {
				native: Uu,
				claudeCode: Vu
			}
		},
		{
			id: "kimi",
			label: "Kimi Code",
			vendor: "Kimi Code",
			accountLabel: "Kimi Code",
			destination: "Kimi Code",
			brand: "kimi",
			access: {
				kind: "subscription",
				requirement: "Kimi Code subscription",
				runs: "Kimi Code"
			},
			auth: {
				kind: "translator",
				cliProxy: "kimi"
			},
			planLimits: !0,
			runtimes: {
				native: Vu,
				claudeCode: Vu
			}
		},
		{
			id: "gemini",
			label: "Google",
			vendor: "Google",
			accountLabel: "Google",
			destination: "Google",
			brand: "gemini",
			access: {
				kind: "free",
				requirement: "Google sign-in",
				runs: "Gemini, Claude and GPT-OSS under Claude Code"
			},
			auth: {
				kind: "translator",
				cliProxy: "antigravity"
			},
			planLimits: !0,
			runtimes: {
				native: Wu,
				claudeCode: Wu
			}
		},
		{
			id: "cursor",
			label: "Cursor",
			vendor: "Cursor",
			accountLabel: "Cursor",
			destination: "Cursor",
			brand: "cursor",
			access: {
				kind: "subscription",
				requirement: "Cursor Pro subscription",
				runs: "Cursor Agent"
			},
			auth: { kind: "oauth" },
			planLimits: !1,
			runtimes: {
				native: Gu,
				claudeCode: Gu
			}
		},
		{
			id: "meta",
			label: "Meta",
			vendor: "Meta",
			accountLabel: "Meta",
			destination: "Meta",
			brand: "meta",
			access: {
				kind: "subscription",
				requirement: "Muse Code subscription",
				runs: "Muse Spark under Claude Code"
			},
			auth: {
				kind: "minted",
				variants: [{
					id: "meta",
					label: "Meta",
					flow: "device",
					anthropicBase: "https://api.meta.ai",
					catalogBase: "https://api.meta.ai/v1"
				}]
			},
			planLimits: !1,
			runtimes: {
				native: Vu,
				claudeCode: Vu
			}
		},
		{
			id: "zai",
			label: "Z.ai",
			vendor: "Z.ai",
			accountLabel: "Z.ai",
			destination: "Z.ai",
			brand: "zai",
			access: {
				kind: "subscription",
				requirement: "Z.ai GLM Coding Plan",
				runs: "GLM under Claude Code"
			},
			auth: {
				kind: "minted",
				variants: [{
					id: "zai",
					label: "Z.ai international",
					flow: "device",
					anthropicBase: "https://api.z.ai/api/anthropic",
					catalogBase: "https://api.z.ai/api/coding/paas/v4"
				}, {
					id: "bigmodel",
					label: "BigModel (中国大陆)",
					flow: "redirect",
					anthropicBase: "https://open.bigmodel.cn/api/anthropic",
					catalogBase: "https://open.bigmodel.cn/api/coding/paas/v4"
				}]
			},
			planLimits: !1,
			runtimes: {
				native: Vu,
				claudeCode: Vu
			}
		}
	], Ju = qu.map((e) => e.id), new Map(qu.map((e) => [e.id, e])), Yu = qu.filter((e) => e.auth.kind === "translator").map((e) => e.id), qu.filter((e) => e.auth.kind === "minted").map((e) => e.id);
})), Zu, Qu = b((() => {
	G(), Zu = L({
		subject: M(),
		detail: M()
	});
})), $u, ed, td, nd, rd, id, ad = b((() => {
	G(), Qu(), L({
		type: V("runner-hello"),
		token: M(),
		version: M(),
		image: M(),
		channel: M().optional(),
		overlayHash: M().optional(),
		definitionToml: M().optional()
	}), L({
		agent: M().optional(),
		account: M().optional(),
		model: M().optional()
	}), uc([
		L({
			ok: V(!0),
			kind: V("oauth"),
			accessToken: M(),
			account: M().optional()
		}),
		L({
			ok: V(!0),
			kind: V("parent-translator"),
			model: M(),
			trial: F().optional()
		}),
		L({
			ok: V(!0),
			kind: V("endpoint"),
			baseUrl: M(),
			authToken: M(),
			model: M(),
			trial: F().optional()
		}),
		L({
			ok: V(!1),
			code: B([
				"subscription-required",
				"claude-reauth",
				"trial-unavailable"
			]).optional(),
			message: M()
		})
	]), L({
		account: M().min(1),
		rejected: M().min(1)
	}), L({ accessToken: M().optional() }), $u = L({
		cpus: P().int().positive(),
		memoryMb: P().int().positive(),
		freeDiskMb: P().int().nonnegative(),
		load: P().nonnegative()
	}), ed = B([
		"current",
		"outdated",
		"unknown"
	]), L({
		id: M(),
		host: M().optional(),
		online: F(),
		version: M().optional(),
		image: M().optional(),
		channel: M().optional(),
		overlayHash: M().optional(),
		facts: $u.optional(),
		lastSeen: P().optional(),
		parity: ed,
		drift: I(Zu).optional()
	}), td = L({
		op: B(["pull", "push"]),
		conversationId: M().min(1),
		branch: M().min(1),
		repos: I(L({
			repo: M().min(1),
			dir: M(),
			mainBranch: M().min(1)
		}))
	}), nd = uc([L({
		kind: V("line"),
		text: M()
	}), L({
		kind: V("done"),
		ok: F(),
		detail: M().optional()
	})]), rd = L({
		conversationId: M().min(1),
		branch: M().min(1),
		prompt: M(),
		provider: M(),
		harness: M(),
		model: M().optional(),
		effort: M().optional(),
		thinking: F().optional(),
		fast: F().optional(),
		account: M().optional(),
		sessionId: M().optional(),
		attachments: I(L({
			path: M().min(1),
			bytesBase64: M()
		})).optional()
	}), id = uc([L({ kind: V("local") }), L({
		kind: V("runner"),
		id: M().min(1)
	})]);
})), J, od, sd, cd = b((() => {
	G(), J = M().min(1).max(60).regex(/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/), od = M().regex(/^[A-Za-z0-9][A-Za-z0-9._/-]*$/).max(200), sd = B(["on", "off"]).default("off");
})), ld, ud, dd, fd, pd, md, hd, gd, _d, vd, yd, bd, xd, Sd, Cd, wd, Td, Ed, Y = b((() => {
	G(), Fu(), Bu(), Xu(), ad(), cd(), ld = M().min(1), ud = L({ provider: B(Ju) }), dd = B(["native", "claude-code"]), fd = L({
		repo: M(),
		base: M().min(1)
	}), pd = L({
		file: M().min(1).describe("The file open in the editor, as a workspace path."),
		startLine: P().int().min(1).optional().describe("First line of the selection, counting from one. Leave both out when the whole file is the context."),
		endLine: P().int().min(1).optional().describe("Last line of the selection, counting from one."),
		selection: M().max(2e4).optional().describe("The selected text itself. Cut it down before sending if it is long: this is context, not an upload.")
	}), md = M().regex(Pu), hd = L({
		automationId: M(),
		provider: M(),
		channelId: M().optional(),
		author: M().optional()
	}), B([
		"schedule",
		"event",
		"listener",
		"webchat",
		"issues",
		"workspace",
		"workflow"
	]), gd = B([
		"allow",
		"hold",
		"deny"
	]), _d = B(["sandbox", "device"]), vd = B([
		"git.destructive",
		"files.destructive",
		"system.destructive",
		"container.state",
		"secrets.access",
		"package.publish",
		"network.outbound"
	]), yd = L({
		schedule: gd.default("allow"),
		event: gd.default("allow"),
		listener: gd.default("allow"),
		webchat: gd.default("allow"),
		issues: gd.default("hold"),
		workspace: gd.default("allow"),
		workflow: B(["allow", "deny"]).default("allow")
	}), bd = B([
		"default",
		"plan",
		"bypassPermissions"
	]), xd = L({
		conversationId: md,
		index: P().int().nonnegative(),
		files: B(["then", "now"])
	}), Sd = L({
		prompt: M().describe("What to say to the agent. May be empty if you are only attaching files."),
		title: M().max(80).optional().describe("A title for a conversation this turn is opening. Ignored for a conversation that already has one."),
		attachments: I(M().min(1)).max(20).optional().describe("Files to hand the agent along with the prompt, as workspace paths. Upload them first."),
		agent: ld.optional().describe("Which model provider serves this turn. Leave it out for Claude."),
		harness: dd.optional().describe("Which agentic loop runs the turn. Leave it out to use each provider's own."),
		account: M().optional().describe("Which of that provider's connected accounts pays for the turn. Leave it out for the first one."),
		actsAs: J.optional().describe("Which persona the turn speaks as out in the world. Not the same as which account pays for it."),
		sessionId: M().optional().describe("Resume this provider session instead of starting a fresh one."),
		conversationId: md.optional().describe("The conversation this turn belongs to. You choose it, it survives model switches, and it is how you address the conversation later. Naming one that does not exist opens it."),
		isolated: F().optional().describe("Work in this conversation's own private copy of the repos rather than the shared tree, so several agents can work at once. Needs a conversation id."),
		startIn: M().max(200).optional().describe("Which folder the conversation opens in, relative to the workspace root; the project it belongs to. Decided on the first turn. A persona that names its own start folder wins."),
		placement: id.optional().describe("Where this conversation runs: this sandbox (leave it out), or a paired runner by id. Decided on the first turn; later turns follow the conversation."),
		worktreeBase: I(fd).min(1).max(50).optional().describe("Pin a new private copy to these exact commits instead of today's workspace. Used when several agents must start from identical files."),
		autoLand: F().optional().describe("Whether this turn's work merges into the workspace when it finishes. Overrides the conversation's own setting for this turn only."),
		runRole: Ru.optional().describe("What started this turn, when it was not a person typing: which of the sandbox's per-job model lists answers for it. Only used when the turn names no model of its own."),
		origin: hd.optional().describe("Set by the sandbox alone: this turn opened a conversation on behalf of a message from outside rather than a person."),
		forkOf: L({
			conversationId: md.describe("The conversation this one was cut from."),
			keep: P().int().nonnegative().describe("How many of that conversation's messages to copy in before this turn runs."),
			files: B(["then", "now"]).describe("Which files the fork opens on: \"now\" is the workspace as it stands, \"then\" is the files as they were at the cut, which needs a private copy.")
		}).optional().describe("Where this conversation was cut from, on its first turn only. Only the client knows this, so only the client can say it."),
		model: M().optional().describe("Which model to use. Leave it out for the provider's default."),
		unattended: F().optional().describe("Nobody chose a model for this turn because a screen started it rather than a person. The sandbox then fills in the model its owner picked for unwatched work."),
		outsideWake: M().min(1).optional().describe("Content from outside caused this turn, and what to call the source. It is what makes the sandbox treat the turn as carrying somebody else's words."),
		permissionMode: bd.optional().describe("How tool calls are gated: ask before each tool, propose a plan first, or run everything. The agent can move itself between these mid-turn."),
		allowedTools: I(M().min(1)).optional().describe("Narrow the turn to these tools. Leave it out for everything the runtime has. For a turn driven by an outside message this list is the real boundary, because prompt wording is only advice."),
		effort: M().optional().describe("How hard the model should think, where the provider offers a choice."),
		thinking: F().optional().describe("Whether to show the model's reasoning as it works."),
		fast: F().optional().describe("Ask for the same work at a higher rate for a higher price. A request rather than a promise: the answer says what actually happened."),
		tierHold: F().optional().describe("Run exactly the model that was picked, even when the turn looks simple enough for a cheaper one. The judgement is still recorded; nothing is substituted."),
		editorContext: pd.optional().describe("What the user has open in their editor, folded into the prompt so that pointing words like \"this\" resolve.")
	}).refine((e) => e.prompt.trim().length > 0 || (e.attachments?.length ?? 0) > 0, { message: "prompt or attachments required" }).refine((e) => e.isolated !== !0 || e.conversationId !== void 0, { message: "isolated requires conversationId" }).refine((e) => e.worktreeBase === void 0 || e.isolated === !0 && e.conversationId !== void 0, { message: "worktreeBase requires an isolated conversationId" }).refine((e) => e.origin === void 0 || e.conversationId !== void 0, { message: "origin requires conversationId" }).refine((e) => e.forkOf === void 0 || e.conversationId !== void 0, { message: "forkOf requires conversationId" }).refine((e) => e.forkOf?.files !== "then" || e.isolated === !0, { message: "forkOf.files \"then\" requires isolated" }), Cd = L({
		agent: M().min(1).describe("Which provider."),
		model: M().min(1).describe("Which of its models. Both or neither, because a model name only means anything to the provider that serves it."),
		account: M().optional().describe("Which connected account of that provider pays, by its daemon-minted id. Leave it out for whichever has headroom."),
		harness: dd.optional().describe("Which agentic loop runs it. Leave it out to use the provider's own."),
		effort: M().optional().describe("How hard that model should think, where it offers a choice. Leave it out to take the model's own default."),
		thinking: F().optional().describe("Whether this model reasons before it answers, where that is a choice it offers."),
		fast: F().optional().describe("Ask for this model's work at a higher rate for a higher price. A request rather than a promise.")
	}).optional(), wd = L({
		provider: ld.describe("Which provider serves this work."),
		model: M().min(1).describe("Which of its models. Both halves, because a model name only means anything to the provider that serves it."),
		effort: M().optional().describe("How hard this model should think, where it offers a choice. Leave it out to take the model's own default."),
		thinking: F().optional().describe("Whether this model reasons before it answers, where that is a choice it offers."),
		fast: F().optional().describe("Ask for this model's work at a higher rate for a higher price. A request rather than a promise."),
		harness: dd.optional().describe("Which agentic loop runs it. Leave it out to use the provider's own.")
	}), Td = L({ run: M().describe("The id of the run that just started. Hand it back when you attach, so the stream resumes rather than replaying.") }), Ed = L({
		conversationId: md.describe("Which conversation to watch."),
		run: M().optional().describe("The run you were watching. If a newer turn has started since, the head names that one instead, and its rows are that turn's.")
	});
})), Dd, Od, kd, Ad, jd, Md, Nd, Pd, Fd, Id, Ld, Rd, zd, Bd, Vd = b((() => {
	G(), Xu(), Y(), Dd = uc([
		V("all"),
		V("none"),
		L({ models: I(M().min(1)).min(1) })
	]), Od = L({
		kind: M(),
		label: M().optional(),
		utilization: P(),
		resetsAt: P().optional(),
		gates: Dd
	}), kd = L({
		windows: I(Od),
		measuredAt: P()
	}), Ad = L({
		available: F().describe("Whether the provider will reopen this account's session window right now. The only thing a button may be drawn from."),
		reason: M().optional().describe("Why not, in the provider's own word, when it gave one. Absent when it is available, or when the provider said nothing."),
		nextAvailableAt: P().optional().describe("When the next reset may be claimed, in epoch seconds, where the provider publishes it. Absent means unknown, never 'now'."),
		weeklyResetsAt: P().optional().describe("When the weekly allowance itself reopens, in epoch seconds, where the provider publishes it.")
	}), jd = L({
		result: B([
			"reset",
			"already_used",
			"not_limited",
			"ineligible",
			"unavailable",
			"error"
		]).describe("What the provider did. Only `reset` reopened the window; every other value means nothing changed."),
		nextAvailableAt: P().optional().describe("When another reset may be claimed, in epoch seconds, where the provider published it."),
		detail: M().optional().describe("What went wrong, in words, for the two outcomes that are this sandbox's fault rather than the plan's.")
	}), Md = L({
		at: P().describe("When it refused, in milliseconds."),
		kind: B([
			"limit",
			"auth",
			"entitlement"
		]).describe("Three different noes, kept apart because what fixes each is different. A spent allowance is answered by waiting; a refused credential by signing in again; and an entitlement refusal, where somebody has switched this off for your seat, by neither of those. That last one authenticates fine and reports healthy limits the whole time it refuses everything."),
		message: M().describe("The provider's own words, verbatim. The only part that says which limit or which credential."),
		account: M().optional().describe("Which account was serving, where that is known."),
		model: M().optional().describe("Which model the refused turn was on, where that is known.")
	}), Nd = L({ refusals: z(M(), Md).describe("The most recent refusal per provider. Read alongside an account's usage: that says how full it was when last checked, this says whether it has since started saying no.") }), Pd = L({
		name: M(),
		label: M(),
		usage: kd.optional(),
		cooling: L({
			until: P().optional(),
			reason: M().optional()
		}).optional()
	}), Fd = L(Object.fromEntries(Yu.map((e) => [e, I(Pd)]))), Id = R("kind", [
		L({
			kind: V("plan").describe("Answering a plan the agent proposed."),
			requestId: M().min(1).describe("Which card you are answering, from the frame that raised it."),
			approve: F().describe("Whether to go ahead. Approving means the plan then runs without a prompt per tool, because being asked whether a plan you just approved may run its first command is not a question worth having."),
			feedback: M().optional().describe("Why not, which goes back to the model as the reason.")
		}),
		L({
			kind: V("question").describe("Answering a question the agent asked."),
			requestId: M().min(1).describe("Which card you are answering."),
			answers: z(M(), I(M())).optional().describe("What you chose, keyed by the question, with the chosen labels or your own words."),
			cancelled: F().optional().describe("Dismissing it instead, which tells the agent to carry on using sensible defaults rather than leaving it waiting.")
		}),
		L({
			kind: V("permission").describe("Answering a request to use a tool."),
			requestId: M().min(1).describe("Which card you are answering."),
			decision: B([
				"once",
				"always",
				"deny"
			]).describe("Once allows this call alone; always allows that whole tool for the rest of the conversation; no blocks it."),
			feedback: M().optional().describe("Why not, which goes back to the model as the reason.")
		}),
		L({
			kind: V("browser_help").describe("Answering a request for help in the agent's browser: a captcha, a password it does not hold, a check on your phone."),
			requestId: M().min(1).describe("Which card you are answering."),
			helped: F().describe("Whether you cleared it. Yes means the turn carries on from the page as you left it; no tells the agent so, and it moves on rather than waiting for ever."),
			note: M().optional().describe("Anything the agent should know, which goes back to it either way.")
		}),
		L({
			kind: V("terminal_help").describe("Answering a request for help at a terminal: a code to type, a confirmation only a person can give."),
			requestId: M().min(1).describe("Which card you are answering."),
			helped: F().describe("Whether you did it. Yes also hands the agent what the terminal now says, because a person answering a prompt is exactly the moment the agent cannot see."),
			note: M().optional().describe("Anything the agent should know, which goes back to it either way.")
		}),
		L({
			kind: V("capability_offer").describe("Answering a request to connect something the agent needs."),
			requestId: M().min(1).describe("Which card you are answering."),
			connect: F().describe("Yes keeps the agent waiting while you set it up, and it carries on the moment the connection comes alive. No tells it to continue without. The reply itself connects nothing: setting it up is still your own doing.")
		}),
		L({
			kind: V("payment_offer").describe("Answering a request to pay for something."),
			requestId: M().min(1).describe("Which card you are answering."),
			approve: F().describe("Yes releases exactly one payment. Anything else spends nothing. This click is the only way the money can move.")
		}),
		L({
			kind: V("credential_offer").describe("Releasing a credential the agent may only use once a named person says so."),
			requestId: M().min(1).describe("Which card you are answering."),
			approve: F().describe("Yes releases it, as far as the card says (this one use, or the rest of the conversation). Only the people the card names can answer at all, yes or no.")
		})
	]), Ld = L({
		conversationId: M().min(1).describe("Which running conversation to interrupt."),
		text: M().max(2e4).describe("What to say to it. It arrives mid-turn without stopping the turn."),
		attachments: I(M().min(1)).max(20).optional().describe("Files to send with it, as workspace paths. A screenshot dropped in mid-turn with no words is a legitimate thing to send."),
		editorContext: pd.optional().describe("What you have open, folded in so that pointing words resolve.")
	}).refine((e) => e.text.trim().length > 0 || (e.attachments?.length ?? 0) > 0, { message: "text or attachments required" }), Rd = L({ conversationId: M().min(1).describe("Which conversation's running turn to cancel.") }), zd = L({
		agent: ld.describe("Which provider serves the re-run."),
		harness: dd.describe("Which agentic loop runs it."),
		account: M().optional().describe("Which of that provider's accounts pays for it. Leave it out for the first one."),
		model: M().optional().describe("Which model. Leave it out to keep the one the refused turn named."),
		carry: F().optional().describe("When the account changes, keep the provider session (the model keeps everything, and re-reads all of it once on the other account) rather than opening a fresh one seeded from the record. Ignored when the provider changes, or when nothing changes.")
	}), Bd = L({
		conversationId: M().min(1).describe("Which conversation's held turn to run again."),
		routing: zd.optional().describe("Who serves the re-run, when the conversation has been re-pointed since it was refused. Leave it out to run it on whatever the turn carried.")
	});
})), Hd, Ud = b((() => {
	G(), Xu(), Hd = B(Yu);
})), Wd, Gd, Kd, qd, Jd, Yd, Xd, Zd, Qd, $d, ef, tf, nf, rf, af, of, sf, cf = b((() => {
	G(), Vd(), Ud(), Wd = L({
		id: M().describe("The account's id, which is what a turn names to spend on it and what disconnecting takes."),
		label: M().describe("What it is called here, which somebody can change."),
		email: M().optional().describe("Who it signs in as, in the provider's own words. Kept beside the label rather than folded into it, so a renamed account can still say whose it is. Absent when the provider says nothing, which is exactly when renaming is the only answer."),
		organization: M().optional().describe("Which organisation it belongs to, where the provider says."),
		scope: M().optional().describe("What the credential is permitted to do, in the provider's terms."),
		connectedAt: P().describe("When it was connected, in milliseconds."),
		needsReauth: F().optional().describe("Its stored credential can no longer be renewed and somebody has to sign in again. Absent means healthy, or not checked yet."),
		detail: M().optional().describe("Why, in words a person can act on."),
		usage: kd.optional().describe("How full its plan limits were when last measured, so a picker can show what is left before committing work to it. Absent until a reading exists, which reads as unknown rather than as nothing left.")
	}), Gd = L({ accounts: I(Wd).describe("The connected accounts. Tokens never travel in this shape: being in this list is what connected means.") }), Kd = L({ force: Tl().default(!1).describe("Measure the plan limits again before answering, rather than serving a recent reading. Slower, and the right thing when somebody has just changed a plan and is asking whether what they can see is still true.") }), qd = L({ id: M().min(1).describe("Which account.") }), Jd = L({
		id: M().min(1).describe("Which account."),
		label: M().max(80).describe("The new name. Blank restores the one derived from the sign-in, rather than leaving a nameless row.")
	}), Yd = B([
		"device",
		"redirect",
		"paste"
	]), Xd = L({
		url: M().describe("The page to open and sign in on."),
		code: M().describe("The one-time code the page will ask for, where the vendor issues one. Blank when the page is already addressed to this attempt."),
		state: M().describe("For a redirect sign-in, the marker in the address the browser lands on, so a pasted URL can be recognised as this attempt's. Blank otherwise."),
		flow: Yd.describe("How this attempt ends. A device sign-in finishes by itself and you watch the account list; a redirect needs the address it landed on handed back; a paste needs the code the page showed."),
		variant: M().describe("Which of the provider's estates this attempt signs in to. Blank for a provider with one."),
		handshake: M().describe("This attempt's id, for finishing or abandoning it. Not a credential and not redeemable: the proof that completes the sign-in never leaves the sandbox."),
		expiresAt: P().describe("When this attempt stops being answerable, in milliseconds, so a card can stop waiting instead of spinning.")
	}), Zd = L({ variant: M().min(1).optional().describe("Which estate to sign in to. Absent takes the provider's default.") }), Qd = L({
		handshake: M().min(1).describe("Which attempt this belongs to."),
		code: M().optional().describe("The code the sign-in page showed, for a paste sign-in."),
		redirectUrl: M().optional().describe("The address the browser was sent to, whole, for a redirect sign-in. The grant is inside it."),
		label: M().optional().describe("What to call the account. Blank derives one from the sign-in.")
	}), $d = L({ account: Wd.optional().describe("The account it connected, where the sign-in ends here. Absent means keep watching the account list.") }), ef = L({ handshake: M().min(1).describe("Which attempt to stop waiting on.") }), tf = L({
		url: M().describe("The page to open."),
		code: M().describe("The one-time code, where the provider uses one."),
		state: M().min(1).describe("The handshake's id, which status reads and the finishing call sends back."),
		flow: B(["device", "redirect"]).describe("Which shape this is. A device sign-in finishes by itself and you poll the attempt; a redirect needs the address it landed on handed back. Said outright rather than guessed at from whether a code happens to exist.")
	}), nf = R("status", [
		L({ status: V("wait") }),
		L({ status: V("ok") }),
		L({
			status: V("error"),
			error: M().min(1)
		})
	]), rf = L({
		provider: Hd.describe("Which provider."),
		redirectUrl: M().min(1).describe("The address the browser was sent to, whole. The grant is inside it."),
		state: M().min(1).describe("The handshake this belongs to. A mismatch is refused.")
	}), af = B(["reasoning", "fast"]), of = L({
		id: M().describe("What to name when asking for this model."),
		label: M().describe("What to call it on screen."),
		efforts: I(M()).optional().describe("The thinking levels it accepts, where the provider says. Empty means use your own defaults."),
		description: M().optional().describe("What it is good for, in the provider's own words. Absent where the provider publishes only ids, which is the honest answer rather than something to paper over with a hand-written table."),
		badges: I(af).optional().describe("What it is known for, where the provider says so."),
		contextWindow: P().optional().describe("How many tokens this model will accept in one request, where the server publishes it.")
	}), sf = L({
		models: I(of).describe("What this provider serves, in its own preference order, which is not rearranged here. Never empty."),
		default: M().describe("Which one a fresh conversation starts on. Always present.")
	});
})), X, lf, uf, Z, Q = b((() => {
	G(), X = L({ ok: V(!0).describe("Always true. A route that answers this either did the thing or refused with a status; there is no third outcome to report.") }), lf = B([
		"viewer",
		"collaborator",
		"maintainer",
		"owner"
	]), B([
		"viewer",
		"collaborator",
		"maintainer"
	]), uf = L({ token: M().min(1).describe("The freshly minted credential. The previous one stopped working the moment this answered.") }), Z = L({ repo: M().describe("Which repository. \"root\" is the workspace itself; anything else is a repository's folder relative to the workspace root, URL-encoded.") });
})), df, ff = b((() => {
	q(), Y(), cf(), Q(), df = {
		start: K.route({
			method: "POST",
			path: "/accounts/{provider}/login/start",
			summary: "Begin connecting an account",
			description: "Hands back the page to sign in on, and the code it will ask for where there is one. The sandbox holds the proof and finishes what it can itself: a device sign-in lands in the account list on its own, a paste or a redirect needs one thing brought back to the finishing call."
		}).input(ud.extend(Zd.shape)).output(Xd),
		complete: K.route({
			method: "POST",
			path: "/accounts/{provider}/login/complete",
			summary: "Finish a sign-in with what the page handed back",
			description: "Takes the code the page showed, or the address a redirect landed on, and finishes the attempt. Answers with the account where the exchange ends here; otherwise the sandbox still has a mint to do and the row appears in the account list."
		}).input(ud.extend(Qd.shape)).output($d),
		cancel: K.route({
			method: "POST",
			path: "/accounts/{provider}/login/cancel",
			summary: "Abandon a sign-in",
			description: "Stops waiting on a sign-in nobody completed. An abandoned attempt also expires on its own."
		}).input(ud.extend(ef.shape)).output(X),
		accounts: K.route({
			method: "GET",
			path: "/accounts/{provider}",
			summary: "Connected accounts of a provider",
			description: "Each connected account with how full its plan limits were when last measured, where the provider publishes any. Ask for a fresh measurement and it takes one before answering, which is slower. The credentials themselves never travel: being in this list is what connected means."
		}).input(ud.extend(Kd.shape)).output(Gd),
		rename: K.route({
			method: "POST",
			path: "/accounts/{provider}/rename",
			summary: "Rename an account",
			description: "Changes the label one account shows under, so several are tellable apart. Blank restores the one derived from the sign-in."
		}).input(ud.extend(Jd.shape)).output(Wd),
		disconnect: K.route({
			method: "POST",
			path: "/accounts/{provider}/disconnect",
			summary: "Disconnect an account",
			description: "Clears one stored credential, and stops any sign-in still in flight for this provider. The others stay connected."
		}).input(ud.extend(qd.shape)).output(X)
	};
})), pf, mf, hf, gf, _f, vf = b((() => {
	G(), Y(), pf = L({
		id: M().describe("The entry's own id."),
		at: P().describe("When it happened, in milliseconds. Also what you page by."),
		provider: M().optional().describe("Which outside service, when one was involved. Absent for the sandbox's own events."),
		account: M().optional().describe("Which account handled it. Absent for the sandbox's own events and for work run on a provider's default."),
		direction: B([
			"in",
			"out",
			"system"
		]).describe("Whether something arrived, something went out, or the sandbox did it to itself."),
		type: M().describe("Exactly what happened: a message received or sent, a reaction, a turn starting or ending, a rule doing something. A rule that ran and passed says nothing here, because a feed of green ticks is one the eye learns to skip."),
		channelId: M().optional().describe("Which channel or thread it happened in."),
		author: M().optional().describe("Who sent it, for something that arrived."),
		actor: M().optional().describe("Who asked for the turn, as the sandbox verified it: a member's email, or token:<label> for a program's control token. Absent for a wake nothing asked for."),
		content: M().optional().describe("The message, in full, whichever direction it went."),
		method: M().optional().describe("The verb of an outgoing call."),
		endpoint: M().optional().describe("The address of an outgoing call. Credentials travel in headers, so they are never here."),
		sessionId: M().optional().describe("The provider session behind it."),
		turnId: M().optional().describe("Ties one turn's entries together. A turn writes several, and read as separate rows they say one thing several times, so a feed groups on this."),
		conversationId: M().optional().describe("Which conversation. This, rather than the provider session, is what the same agent means across a feed, because a session is retired whenever the model changes."),
		title: M().optional().describe("What that conversation was called at the time. Copied in rather than looked up, because an audit entry must still read as words years later, after the conversation has been renamed or pruned."),
		origin: hd.optional().describe("What woke the conversation from outside, when something did. It is how a turn gets filed under the chat service that caused it rather than under the model that served it."),
		automationIds: I(M()).optional().describe("Which automations were involved."),
		outcome: B(["ok", "error"]).optional().describe("How it ended."),
		error: M().optional().describe("What went wrong, when something did."),
		extra: z(M(), oc()).optional().describe("Whatever else the source had to say: attachments, participants, a recording's path. Shape varies by source.")
	}), mf = L({
		provider: M().optional().describe("Narrow it to one outside service."),
		limit: W().min(1).max(500).default(100).describe("How many entries to return."),
		before: W().optional().describe("Only entries older than this timestamp, so paging walks backwards through the feed.")
	}), hf = L({ events: I(pf).describe("The audit entries, newest first.") }), gf = L({
		capabilityId: M().describe("Which connection."),
		provider: M().describe("Which service it is."),
		gateway: B([
			"ready",
			"connecting",
			"pairing",
			"disconnected",
			"idle"
		]).describe("Idle means it is up but has nothing to listen for, which is different from a connection that should be up and is not. Pairing means somebody started a sign-in and never finished it, which no amount of waiting will fix."),
		lastError: M().optional().describe("The most recent thing that went wrong on it.")
	}), _f = L({
		connections: I(gf).describe("Each source feeding the record, and whether it is working. Probed now rather than remembered."),
		voice: L({
			channelId: M().describe("Which channel."),
			channelName: M().describe("What it is called."),
			startedAt: P().describe("When it joined, in milliseconds."),
			participants: I(M()).describe("Who else is in it.")
		}).optional().describe("A voice call the sandbox is currently in, when it is in one.")
	});
})), yf, bf = b((() => {
	q(), vf(), yf = {
		list: K.route({
			method: "GET",
			path: "/activity",
			summary: "What the agent has done out in the world",
			description: "The audit trail of actions taken on outside services. Read-only on purpose: entries are written by the sandbox alone, which is what makes it a record worth trusting."
		}).input(mf).output(hf),
		status: K.route({
			method: "GET",
			path: "/activity/status",
			summary: "Whether the audit trail is being kept",
			description: "Which sources are feeding the record and whether each is working."
		}).output(_f)
	};
})), xf, Sf, Cf, wf, Tf, Ef, Df, Of, kf, Af, jf, Mf, Nf, Pf, Ff, If, Lf = b((() => {
	G(), xf = /^[A-Za-z_][A-Za-z0-9_]*$/, Sf = M().regex(xf).max(128), Cf = L({
		key: Sf.describe("The name to store it under, which is the name a process will find it by."),
		value: M().min(1).describe("The value. It goes straight to your sandbox and never through the platform.")
	}), wf = L({ keys: I(M()).describe("The names that exist here. Only the names: the values never leave the sandbox.") }), Tf = L({ key: Sf.describe("Which secret, by name.") }), Ef = L({ value: M().describe("The value itself. The only place in this API one is ever returned.") }), Df = B(["use", "conversation"]).describe("How far one release goes: `use` asks again every single time (one click releases exactly one use), `conversation` covers the rest of this conversation and is forgotten when the daemon restarts."), Of = B(["secret", "capability"]).describe("Whether this gate covers one stored secret, by the name a reference carries, or one whole connected capability, by its id."), kf = B([
		"shell",
		"code",
		"browser",
		"session",
		"otp"
	]).describe("What the credential was about to be used for: a shell command, a script, typing into a page, mounting a connected account, or one one-time code."), Af = L({
		subject: M().min(1).describe("What is gated: a secret's name, or a connected capability's id."),
		kind: Of,
		approvers: I(M().min(3)).min(1).describe("Exactly who may release it, by email, from the people on the Access roster. Not a seniority floor: nobody outside this list can release it, the owner included, unless the owner is on it."),
		scope: Df
	}), jf = L({ gates: I(Af).describe("Every gate in force. Names, subjects and approver addresses only: this answer never carries a credential.") }), Mf = L({ subject: M().min(1).describe("Which gate, by the secret name or capability id it covers.") }), Nf = L({
		subject: M().min(1).describe("What to ask for: the secret's name, or the connected capability's id."),
		why: M().max(280).optional().describe("One line on what it is for. The only words on the card that are the agent's."),
		conversationId: M().optional().describe("Which conversation to raise the card in. The CLI fills this from the running turn.")
	}), Pf = L({
		granted: V(!0).describe("Always true: a refusal is an error with a sentence, never a `false` here."),
		approvedBy: M().describe("Who released it."),
		message: M().describe("What the grant means in practice, and what to do next.")
	}), Ff = L({
		key: M().describe("What identifies it. Unique across the whole inventory, so several accounts of one provider each get their own entry."),
		kind: B([
			"env",
			"generated",
			"capability",
			"provider"
		]).describe("Where it came from: you set it, the sandbox generated it, a connection needs it, or it is a model account's credential."),
		label: M().optional().describe("A friendlier name, for entries that have one."),
		status: B([
			"missing",
			"set",
			"connected"
		]).describe("Whether it exists and, for a connection, whether it is working."),
		requiredBy: I(L({
			resourceId: M().describe("Which resource."),
			type: M().describe("What kind of resource it is.")
		})).describe("What is waiting on it. Empty for a connection's or an account's own credential."),
		storedAt: M().describe("Where it actually lives, in words."),
		revealable: F().describe("Whether its value can be shown at all. Everything except a model account's credential can be."),
		ci: L({
			synced: F().describe("Whether the pipeline has it."),
			pushedAt: M().optional().describe("When it was last sent there.")
		}).optional().describe("Whether a copy has been given to the build pipeline."),
		lastUse: L({
			at: P().describe("When, in milliseconds."),
			lane: B([
				"shell",
				"code",
				"browser"
			]).describe("How it was used: a command, a script, or typed into a page."),
			detail: M().optional().describe("Where it went: the start of the command or script, or the site. Names and destinations only, never values."),
			approvedBy: M().optional().describe("Who released it for that use, when it is gated. Absent when nothing had to be approved.")
		}).optional().describe("The last time an agent actually spent this secret. Absent while it never has been, which most never are."),
		gate: L({
			approvers: I(M()).describe("Who may release it, by email. Nobody else can, whatever their role."),
			scope: Df
		}).optional().describe("Who has to release this before the agent can use it, and for how long one release lasts. Absent when it is not gated.")
	}), If = L({ entries: I(Ff).describe("One entry per secret this sandbox knows about, from every place they live. No values, ever.") });
})), Rf, zf, Bf, Vf, Hf, Uf, Wf, Gf, Kf, qf, Jf, Yf, Xf, Zf, Qf, $f, ep, tp, np, rp, ip, ap, op, sp, cp, lp, up, dp, fp, pp, mp, hp, gp = b((() => {
	G(), Y(), Lf(), Rf = L({
		label: M().describe("The choice, in a few words."),
		description: M().describe("What picking it means."),
		preview: M().optional().describe("Something to look at while deciding: a mock-up, a snippet, a layout.")
	}), zf = L({
		question: M().describe("What the agent is asking."),
		header: M().describe("A short label for the question."),
		multiSelect: F().describe("Whether more than one answer can be picked."),
		options: I(Rf).describe("The choices offered. A free-text answer is always possible as well.")
	}), Bf = L({
		text: M().describe("What would run."),
		language: B(["bash", "javascript"]).describe("Which of the two backends it is written for, named as the grammar that colours it."),
		truncated: F().describe("Whether this is an excerpt of a longer program, so the card can say so instead of ending mid-word. An excerpt always carries the flagged fragment: the beginning, then a window around the fragment, with any skipped middle written into the text as a bracketed count."),
		spans: I(L({
			start: P().int().nonnegative(),
			end: P().int().nonnegative()
		})).describe("Which fragments of the text the pattern match fired on: every matched class's, or, under the hard rule, only the class the title names. Offsets into text, in order, never overlapping.")
	}), Vf = L({
		toolName: M().describe("Which tool it wants to use."),
		title: M().optional().describe("The whole question, as a sentence, exactly as the runtime words it."),
		displayName: M().optional().describe("A short phrase for the button, such as read file."),
		description: M().optional().describe("More about what it is asking for."),
		reason: M().optional().describe("Why it is asking at all: a rule, the current mode, something that looked risky."),
		path: M().optional().describe("Which file it concerns, when it concerns one."),
		alwaysLabel: M().optional().describe("The wording for an always-allow answer. Present only when there is something an always could actually remember; without it the only answers are once and no."),
		program: Bf.optional().describe("The program this card is holding, when the card is about one. Present on a command gate's card and absent on every other permission ask."),
		explain: M().optional().describe("One plain sentence saying what the program does and why it is being asked about, where the title says something else. Written by the judge that read your safety policy, never by the agent being gated.")
	}), Hf = L({
		card: M().describe("Which connection is being asked for."),
		name: M().describe("What it is called, as the catalogue titles it rather than as the agent named it."),
		why: M().optional().describe("The agent's case for connecting it, and the only words on this card that are the agent's.")
	}), Uf = L({
		url: M().describe("What is being paid for."),
		description: M().optional().describe("What the endpoint says it is."),
		payTo: M().describe("Where the money goes, taken verbatim from the endpoint's own demand."),
		network: M().describe("On which network."),
		asset: M().describe("In which token."),
		assetName: M().describe("That token's name. It is pegged to the dollar, which is what lets every amount here read as dollars."),
		amountUsd: M().describe("The exact price. Not a ceiling: this scheme has no ranges, so this is the whole spend."),
		spentTodayUsd: M().describe("What has already gone out today."),
		dailyCapUsd: M().describe("What may go out in a day."),
		why: M().optional().describe("The agent's case for paying, and the only words on this card that are the agent's.")
	}), Wf = L({
		subject: M().describe("Which credential is being asked for."),
		kind: Of,
		lane: kf,
		detail: M().optional().describe("Where it would go: the start of the command, the site, or what is being mounted. Never a value: the command still reads as a reference at this point."),
		why: M().optional().describe("The agent's case for using it, and the only words on this card that are the agent's."),
		approvers: I(M()).describe("Who may release it. A click from anyone else is refused and leaves the card standing."),
		scope: Df
	}), Gf = L({
		name: M().describe("What to type, without the leading slash."),
		description: M().describe("What it does."),
		hint: M().optional().describe("What its argument should look like, shown after the name.")
	}), Kf = L({ agent: ld.optional().describe("Whose commands to read. Leave it out for Claude.") }), qf = L({ commands: I(Gf).describe("The shortcut commands, as the provider last published them.") }), Jf = L({
		content: M().describe("The item, as the agent wrote it."),
		status: B([
			"pending",
			"in_progress",
			"completed"
		]).describe("Where it is."),
		activeForm: M().optional().describe("How to phrase it while it is happening, so a screen can say what the agent is doing rather than what it plans to do.")
	}), Yf = L({
		tokens: P().describe("How much the latest request sent, all told."),
		contextWindow: P().describe("How much the model can hold. The gap between these two is how close the conversation is to being compacted."),
		cachedAt: P().optional().describe("When that request last touched the provider's prompt cache, in milliseconds. The cache's clock runs from here, since a read refreshes it as a write does."),
		cacheTtlMs: P().optional().describe("How long that cache entry lives from `cachedAt`, in milliseconds.")
	}), Xf = B([
		"read",
		"edit",
		"delete",
		"move",
		"search",
		"execute",
		"think",
		"fetch",
		"other"
	]), Zf = B([
		"pending",
		"in_progress",
		"completed",
		"failed"
	]), Qf = L({
		path: M().describe("The file, as a workspace path, whatever directory the tool was run from."),
		line: P().optional().describe("Which line, counting from one.")
	}), $f = R("type", [
		L({
			type: V("text").describe("Plain output."),
			text: M().describe("What the tool said.")
		}),
		L({
			type: V("diff").describe("A change to a file."),
			path: M().describe("Which file, as a workspace path."),
			oldText: M().optional().describe("What was there. Absent for a new file, or where the previous contents are not known."),
			newText: M().describe("What is there now."),
			truncated: F().optional().describe("One of the two sides was too large to send whole.")
		}),
		L({
			type: V("image").describe("A picture the tool produced."),
			path: M().describe("Where it is, as a workspace path. A path rather than the bytes, because the workspace already serves it, sending it inline would bloat every stored record, and this way the picture stays openable afterwards.")
		})
	]), ep = L({
		path: M().describe("Where it lives, as a workspace path."),
		title: M().describe("What it is called: its opening heading, or its file name."),
		markdown: M().describe("The document itself."),
		truncated: F().optional().describe("It was clipped at the wire cap; the file on disk has more."),
		plan: F().optional().describe("It is one of the CLI's plan files, written to be approved rather than merely read.")
	}), tp = M().describe("What to send back when you answer."), np = {
		requestId: tp,
		text: M().describe("The plan itself."),
		document: ep.optional().describe("The write-up this plan refers to, when the plan itself is a pointer to one.")
	}, rp = {
		requestId: tp,
		questions: I(zf).describe("What it wants to know."),
		document: ep.optional().describe("The document this turn wrote and is asking about, so the choice can be read beside it.")
	}, ip = { requestId: tp }, ap = {
		requestId: M(),
		session: M(),
		account: M(),
		message: M()
	}, op = {
		requestId: M(),
		session: M(),
		message: M()
	}, sp = {
		requestId: M(),
		offer: Hf
	}, cp = {
		requestId: M(),
		offer: Uf
	}, lp = {
		requestId: M(),
		offer: Wf
	}, up = L({
		outcome: B(["connected", "unfinished"]),
		id: M().optional()
	}), dp = L({
		outcome: B(["paid", "failed"]),
		amountUsd: M(),
		transaction: M().optional(),
		network: M().optional()
	}), fp = L({
		outcome: B(["released", "refused"]),
		approvedBy: M().optional()
	}), pp = L({
		kind: V("plan").describe("The agent has written a plan and is waiting for a yes."),
		...np
	}), mp = L({
		kind: V("question").describe("The agent has asked you something and is waiting."),
		...rp
	}), hp = Vf.extend({
		kind: V("permission").describe("The agent wants to use a tool it needs permission for."),
		...ip
	}), R("kind", [
		pp,
		mp,
		hp
	]);
})), _p = b((() => {})), vp = b((() => {})), yp, bp, xp = b((() => {
	_p(), vp(), yp = ".intentic", bp = "481795963975-cq9msl6higcd91joidrfp8mjlkuq5fk3.apps.googleusercontent.com", `${bp}`;
})), Sp, Cp, wp, Tp, Ep = b((() => {
	G(), Sp = /^[a-zA-Z_][a-zA-Z0-9_]{0,39}$/, Cp = L({
		name: M().regex(Sp),
		type: B([
			"string",
			"number",
			"boolean",
			"string[]"
		]),
		description: M().min(1),
		required: F()
	}), wp = (e) => {
		let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
		for (let r of e) t.has(r.name) && n.add(r.name), t.add(r.name);
		return [...n];
	}, Tp = I(Cp).min(1).max(16).superRefine((e, t) => {
		for (let n of wp(e)) t.addIssue({
			code: "custom",
			message: `Output field names must be unique; "${n}" is repeated.`
		});
	});
})), Dp, Op, kp, Ap, jp, Mp, Np, Pp, Fp, Ip, Lp, Rp, zp, Bp, Vp, Hp = b((() => {
	G(), xp(), Ep(), Y(), cd(), Dp = B(["fresh", "continue"]), Op = R("kind", [
		L({ kind: V("none").describe("It produces nothing but its work. The classic make the suite pass: what it leaves behind is a passing suite, and asking it to also file a report is asking it to spend a round on paperwork.") }),
		L({ kind: V("claim").describe("Each round says whether it is done and why. Structured prose: done is a value read rather than a sentence interpreted. Self-assessment, so advisory by construction; it exists because plenty of goals have no command that could check them.") }),
		L({
			kind: V("json").describe("Each round writes a real answer in a shape you declared. This is the one that makes a step's output usable as the next step's input: a paragraph mentioning three files cannot be fed to anything, a list of three files can."),
			fields: Tp.describe("The shape that answer has to match.")
		})
	]), kp = R("kind", [L({
		kind: V("command").describe("Run something and see if it passes. Deterministic, free, and the only signal here whose answer does not come from a model. A passing test suite beats any amount of self-report."),
		command: M().min(1).describe("The command to run in the conversation's own tree. Exiting cleanly means satisfied.")
	}), L({
		kind: V("judge").describe("Put the question to a separate model with no tools, which reads the round's own report and rules on it, having done none of the work and nothing invested in its being finished."),
		rubric: M().min(1).describe("What that judge is asked."),
		model: M().optional().describe("Which model judges. Leave it out for the cheap one the other small jobs use.")
	})]), Ap = L({
		done: F().describe("Whether the goal is met. Reading this is the whole point of the file."),
		reason: M().describe("Why, in one line. The most-read sentence in the feature: the next round reads it first and the history shows it."),
		evidence: M().optional().describe("What was checked to know that. Optional, so a round with nothing to point at says so by leaving it out rather than by inventing a sentence."),
		data: z(M(), oc()).optional().describe("The declared answer, for a loop that asked for one, checked against the shape it declared.")
	}), jp = 50, Mp = L({
		conversationId: md.describe("The conversation to loop. It need not exist yet: naming a fresh one opens it, which is what lets run this until it passes be the first thing you ever say."),
		goal: M().min(1).describe("What done means, in your words. It goes into every round's instructions and into the judge's question, so the model is told the bar rather than left to infer it."),
		prompt: M().min(1).describe("What each round is asked to do. The suite passes is the goal; run the tests, take the top failure, fix it is the instruction."),
		context: Dp.describe("How each round meets the last. Starting fresh makes the files the memory rather than the conversation, so the twentieth round reads the tree as clearly as the first, and costs a re-read each time. Carrying on is cheaper and keeps the reasoning, which suits a short polish-this loop and degrades on long ones: a session that has spent eleven rounds arguing for its own approach is the worst available judge of whether that approach is finished."),
		output: Op,
		checks: I(kp).describe("What else has to be true, all of them together. A list because the suite passes and the report is written is a real bar, and running it as two loops would do the work twice."),
		maxIterations: P().int().min(1).max(jp).describe("How many rounds before it gives up. A loop that has not got there in fifty is not one round short of it."),
		maxSpendUsd: P().positive().optional().describe("A ceiling on what the whole loop may spend, in dollars. Optional for a short loop somebody is watching, and strongly wanted otherwise: this is the first thing here that can keep spending with nobody pressing anything between rounds."),
		stallLimit: P().int().min(1).describe("Stop after this many rounds in a row that changed nothing on disk. The guard that matters most: a loop's failure is not runaway success, it is an agent re-reading the same three files, restating the same plan and declaring more work remains, eleven times. Every one of those rounds succeeds, so only the tree not moving catches it."),
		isolated: F().describe("Whether it works in the conversation's own private copy or in the shared tree. It also decides where a check runs: testing the shared tree would be testing code this loop has not merged yet."),
		agent: ld.optional().describe("Which provider the rounds run on. Absent falls back to the conversation's own last choice."),
		harness: dd.optional().describe("Which agentic loop they run on."),
		account: M().optional().describe("Which account pays."),
		model: M().optional().describe("Which model."),
		actsAs: J.optional().describe("Which persona the rounds act as. It matters here: every round is unwatched, and an unwatched turn naming no persona reaches no signed-in account at all, so pinning one is how a loop gets hands."),
		worktreeBase: I(fd).min(1).max(50).optional().describe("Pin the private copy to these exact commits, so a restart cannot quietly change what the loop is working on."),
		autoLand: F().optional().describe("Whether the work merges as it goes.")
	}), `${yp}`, Np = L({
		n: P().int().min(1).describe("Which round this was."),
		at: P().describe("When it ran, in milliseconds."),
		outcome: B([
			"continue",
			"done",
			"error"
		]).describe("How the round ended, which is not the same question as how the loop did. A round that errored does not end the loop by itself: a failing turn is often exactly what the next round is meant to fix."),
		detail: M().optional().describe("What the check said, in its own words. What a run history is actually read for: why it kept going, and why it stopped."),
		costUsd: P().optional().describe("What the round cost, in dollars."),
		changed: F().describe("Whether anything on disk moved. Three unchanged rounds in a row is the shape of a loop that is not working."),
		sessionId: M().optional().describe("The session it ran on, and the way from a history row to a readable record.")
	}), Pp = B([
		"running",
		"done",
		"exhausted",
		"stalled",
		"overspent",
		"stopped",
		"error"
	]), Fp = Mp.extend({
		state: Pp.describe("How it ended, and each of these is a different thing to be told. Out of rounds says give it more room; stalled says it is not making progress and more room will not help. Overspent, stopped by a person, and the loop itself failing are all their own answers."),
		startedAt: P().describe("When it began, in milliseconds."),
		endedAt: P().optional().describe("When it ended, in milliseconds."),
		resumed: P().int().min(0).describe("How many times the sandbox restarted under it and picked it back up. Counted rather than flagged, so a loop whose round reliably kills the sandbox is not resurrected on every boot for ever."),
		detail: M().optional().describe("Why it ended, for the endings whose reason is not in their name."),
		iterations: I(Np).describe("Every round, in order. Why it stopped at the fourth is the question a loop gets read for, and this is the answer.")
	}), Ip = L({ loops: I(Fp).describe("Every loop this workspace has run, newest first, kept after they end.") }), Lp = L({ conversationId: md.describe("Which conversation's loop.") }), Rp = L({
		id: J.describe("The design's id."),
		name: M().min(1).max(60).describe("What to call it. Short, because it has to be readable on a small badge."),
		description: M().max(280).optional().describe("What it is for, in one line. Optional, because a well-named loop has already said it."),
		prompt: M().optional().describe("What each round is asked to do, when that is worth saying separately from the goal. Absent means each round works towards the goal however it sees fit."),
		context: Dp.describe("How each round meets the last: starting clean, or carrying on."),
		output: Op.describe("What it has to produce."),
		checks: I(kp).describe("What else has to be true."),
		maxIterations: P().int().min(1).max(jp).describe("How many rounds before it gives up."),
		maxSpendUsd: P().positive().optional().describe("A ceiling on what it may spend, in dollars."),
		stallLimit: P().int().min(1).describe("Stop after this many rounds in a row that changed nothing.")
	}), zp = L({ designs: I(Rp).describe("Saved loops: the machinery with the goal left out, so one design can be pointed at a different job every time.") }), Bp = L({
		design: Rp.describe("The design to write."),
		create: F().describe("Whether you mean to make a new one or replace an existing one, so an id that happens to collide cannot silently overwrite the one you had.")
	}), Vp = L({ id: J.describe("Which saved loop.") });
})), Up, Wp, Gp, Kp, qp, Jp, Yp, Xp, Zp, Qp, $p, em, tm, nm, rm, im, am, om, sm, cm, lm, um, dm, fm, pm, mm, hm, gm, _m, vm, ym, bm, xm, Sm, Cm, wm = b((() => {
	G(), Y(), Hp(), Up = B([
		"idle",
		"running",
		"awaiting",
		"stopping",
		"dismissing",
		"stopped",
		"resuming",
		"landing",
		"ready",
		"landed",
		"conflict",
		"error",
		"interrupted"
	]), Wp = L({
		tool: M().optional().describe("The last tool it reached for."),
		target: M().optional().describe("What it reached for that tool with: a file, a command, a URL."),
		todo: M().optional().describe("The item on its own list that it is working through.")
	}), Gp = L({
		done: P().describe("Items it has completed."),
		total: P().describe("Items on the list. Never zero: a conversation that kept no list carries no clause at all.")
	}), Kp = L({
		plan: F().describe("It has proposed a plan and is waiting for a yes."),
		question: F().describe("It has asked you something."),
		permission: F().describe("It wants to use a tool it needs permission for."),
		capability: F().describe("It needs something connected that is not connected yet."),
		credential: F().describe("It is waiting for a named person to release a credential. The one pause that may not be yours to clear, whatever your role."),
		conflict: F().describe("Its work cannot be merged without somebody resolving a clash.")
	}), qp = L({
		at: P().describe("When the turn that left this ended, in milliseconds."),
		steps: L({
			open: P().describe("Items on it that were never completed."),
			total: P().describe("Items on the whole list."),
			next: M().optional().describe("The one it would have done next: what it was working through, or the first still waiting.")
		}).optional().describe("The agent's own checklist where that turn left it. Absent for a conversation that kept no list."),
		check: M().optional().describe("The end-of-turn check that was still failing when the turn ended, by name.")
	}), Jp = L({
		subject: M().describe("One line saying what the merged work did, read off the code rather than off the opening request. A conversation that asks for an audit and then spends four turns fixing what it found needs a subject about the fixes."),
		note: M().optional().describe("The same change said to somebody who uses the product, for a repository that keeps a changelog. Usually absent, because most changes are not ones a user would notice."),
		breaking: M().optional().describe("What this change takes away, for anything already relying on it. Nearly always absent: it is for removals, not for additions.")
	}), Yp = L({
		provider: M().min(1).describe("Which provider was asked."),
		model: M().min(1).describe("Which of its models."),
		status: B([
			"asking",
			"answered",
			"refused",
			"skipped"
		]).describe("How this one went. Skipped means it was not asked at all, because it refused a few minutes ago and the walk stepped over it."),
		at: P().optional().describe("When it started being asked, in milliseconds. Absent for one that was skipped, which cost no time."),
		ms: P().optional().describe("How long it took. Absent while it is still being asked."),
		reason: M().optional().describe("Why it refused, in its own words.")
	}), Xp = L({
		startedAt: P().describe("When the drafting began, in milliseconds."),
		steps: I(Yp).describe("Each model that was asked, in the order they were spent, so the list is the timeline. Empty with no outcome means the diff is still being read."),
		outcome: B(["written", "failed"]).optional().describe("How it ended. Absent means it is still going."),
		reason: M().optional().describe("The one-line account of a failure, for a screen with one line to spend. The steps carry each model's own words."),
		finishedAt: P().optional().describe("When it ended, in milliseconds.")
	}), Zp = B([
		"workspace",
		"diverged",
		"binary"
	]), Qp = L({
		id: M().describe("The conversation id, which is how every other call addresses it."),
		sessionId: M().optional().describe("The provider session behind the last turn. It is retired whenever the model or account changes."),
		title: M().optional().describe("What to call it: the first prompt cut to one line, unless somebody renamed it."),
		status: Up.describe("What it is doing. Stopping and stopped are the two halves of somebody pressing stop, because a cancel is not instant; dismissing is the same window for a question waved away, which ends the turn too but owes the user nothing; resuming means the sandbox is already putting right whatever killed the turn; landing means its work is being carried into the workspace right now, and nothing may act on its branch until that settles."),
		failure: M().optional().describe("Why the last turn failed, in the words it died on. Absent unless it did, and cleared the moment it runs again. Carried here because the word error on its own is not an answer, least of all for a run nobody was watching."),
		failureCode: M().optional().describe("Which kind of failure it was, as the turn's own error frame coded it. Absent for a failure nothing could classify, which reads as the plain red line it is."),
		limitResetsAt: P().optional().describe("When the spent allowance reopens, in epoch seconds. Absent when the provider publishes no instant."),
		limitHeld: F().optional().describe("Whether the refused turn is held whole, so sending again re-runs it instead of appending to it."),
		limitScheduled: F().optional().describe("Whether the held turn is already booked to go again at the reset, so nobody has to press anything."),
		limitMoving: M().optional().describe("The account the held turn is being moved to by the owner's policy, while that move is booked."),
		provider: ld.describe("Which model provider it runs on."),
		harness: dd.describe("Which agentic loop it runs on."),
		runner: M().optional().describe("The runner this conversation runs on. Absent means this sandbox."),
		startIn: M().optional().describe("Which folder it opened in, relative to the workspace root. Absent means the root."),
		actsAs: M().optional().describe("Which persona its first turn acted as. Absent for an ordinary chat."),
		model: M().optional().describe("What its last turn ran with. Kept per conversation so opening it restores the choices made in it, rather than whatever some other tab last picked."),
		effort: M().optional().describe("How hard that turn was told to think."),
		thinking: F().optional().describe("Whether that turn showed its reasoning."),
		fast: F().optional().describe("Whether that turn asked for higher speed. What was asked for, not what was served."),
		tier: B(["fast", "standard"]).optional().describe("How hard its last turn looked to the complexity judge. What the next turn's preview needs, not what actually ran."),
		tierHold: F().optional().describe("Whether this conversation is pinned to the picked model, so a turn that looks simple is never moved to a cheaper one."),
		account: M().optional().describe("Which connected account paid for it."),
		branch: M().optional().describe("The branch its private copy works on. Absent for a conversation that works directly in the shared tree."),
		autoLand: F().optional().describe("This conversation's own answer to whether its work merges automatically. Absent means it follows the sandbox-wide setting, which is the common case."),
		resumeAfterOutage: F().optional(),
		resumeAfterLimit: F().optional(),
		moveAfterLimit: F().optional(),
		landRequested: L({
			email: M().describe("Who asked."),
			name: M().optional().describe("Their display name."),
			at: P().describe("When they asked, in milliseconds.")
		}).optional().describe("A collaborator has asked a maintainer to merge this work. Cleared by whichever merge or discard answers it. Absent means nobody is waiting."),
		origin: hd.optional().describe("Where the conversation came from when nobody typed it: a chat mention, a visitor's message, a webhook. Absent means a person started it."),
		startedBy: M().optional().describe("Who asked for the first turn, as the sandbox verified it: a member's email, or token:<label> for a program's control token. Absent when nothing was verified (a wake, a loopback caller)."),
		forkedFrom: xd.optional().describe("The conversation this one was cut from. Recorded once and never cleared: it is the relationship, not a pending state."),
		base: M().optional().describe("The commit its private copy started from, shortened."),
		costUsd: P().optional().describe("What it has cost so far, in dollars. A subagent's spend is its own and is not folded in here."),
		inputTokens: P().optional().describe("Tokens sent."),
		outputTokens: P().optional().describe("Tokens received."),
		contextTokens: P().optional().describe("How much of the window the conversation currently fills."),
		contextWindow: P().optional().describe("How large that window is."),
		promptCache: L({
			at: P().describe("When its last request touched the provider's prompt cache, in milliseconds."),
			ttlMs: P().describe("How long that entry lives from `at`, in milliseconds.")
		}).optional().describe("When this conversation's prompt cache was last kept alive and how long it lasts, which together say when picking the conversation up stops being cheap. Absent when the provider publishes nothing to ground it on."),
		activity: Wp.optional().describe("What it is doing at this moment."),
		checklist: Gp.optional().describe("How far it is through its own checklist. Absent for a conversation that kept no list, which is most short ones."),
		landedMessageDraft: Xp.optional().describe("The whole story of this merge's commit message being written: which models were asked, how long each took, what refused and in what words. Forgotten on restart, which is right, because a restart also killed the drafting it describes."),
		landedMessage: Jp.optional().describe("What this conversation's merged work is called, once the drafting above has finished. It arrives on the same push that ends the draft, so the promise and the answer travel together."),
		startedAt: P().optional().describe("When the running turn started, in milliseconds. Absent when none is running."),
		updatedAt: P().describe("When it last did something, in milliseconds. Reading it does not count."),
		seenAt: P().optional().describe("When somebody last opened it, in milliseconds. Newer activity than this is what makes it unread. Kept by the sandbox rather than by a browser, so clearing site data or picking up a phone does not resurrect every badge."),
		attention: Kp.describe("Which kinds of waiting-for-you it is doing."),
		conflictCauses: I(Zp).optional().describe("Why its work will not merge, and so who can clear it: your own uncommitted edits, which only you can commit or stash, against a moved main line or an unmergeable binary, which the conversation can redo on its own copy. Absent unless it is refusing to merge."),
		unfinished: qp.optional().describe("What its last turn left open: steps it never completed, a check still failing. Absent for a turn that finished what it started."),
		turns: P().optional().describe("Turns it has finished."),
		toolUses: P().optional().describe("Tools it has used, over its whole life."),
		subagents: L({
			running: P().describe("Subagents working right now."),
			total: P().describe("Subagents it has started over its whole life.")
		}).optional().describe("Subagents and child agents this one delegated to. Absent means it never has, which is most conversations. Their spend is their own and is not folded into this conversation's cost."),
		diff: L({
			files: P().describe("Files touched."),
			insertions: P().describe("Lines added."),
			deletions: P().describe("Lines removed.")
		}).optional().describe("Everything it has written, measured from where it started. Independent of how much has been merged."),
		landedPresence: L({
			landed: P().describe("Paths this conversation merged in."),
			present: P().describe("How many of them are still there, either pending or committed.")
		}).optional().describe("Present only when some of what it merged has since been thrown away. Absent is the steady state: its presence is the signal, so an ordinary card spends no line on it."),
		loop: L({
			state: Pp.describe("How the loop is going."),
			iteration: P().int().min(0).describe("Which round it is on."),
			maxIterations: P().int().min(1).describe("How many rounds it will attempt before giving up."),
			goal: M().describe("What it is looping towards.")
		}).optional().describe("The loop driving this conversation, if one is. Absent for an ordinary conversation, which is nearly all of them."),
		workflow: L({
			runId: M().describe("The run this belongs to, which is how a board groups its steps together."),
			name: M().describe("The workflow's name."),
			step: M().describe("Which step this conversation is on now. It moves when steps are chained."),
			index: P().int().min(1).describe("This step's place in the workflow, counting from one."),
			total: P().int().min(1).describe("How many steps the workflow has.")
		}).optional().describe("The workflow run this conversation is a step of. Without it, a four-step run reads as four unrelated conversations that happen to have started together."),
		watches: I(L({
			id: M().describe("The daemon's handle for this watch, the same one the agent was given when it armed it."),
			note: M().describe("The agent's own line on what it is waiting for."),
			intervalSeconds: P().int().min(1).describe("How often the check runs."),
			deadlineAt: P().describe("When it gives up and wakes the conversation anyway, in milliseconds. Every watch has one.")
		})).optional().describe("Outside conditions this conversation is parked on, each of which will wake it. Absent means none, which is nearly every conversation: an armed watch is why a finished-looking agent starts working by itself, and why a hosted machine will not go idle."),
		archivedAt: P().optional().describe("When it was put away, in milliseconds. Nothing was lost: its branch, its record and every counter stayed, and bringing it back gives it a fresh working copy. Absent means it is live on the board.")
	}), $p = L({ id: M().min(1).describe("Which conversation.") }), em = $p.extend({
		before: W().int().optional().describe("Return the messages before this position in the record: the `from` of the page below. Absent asks for the most recent turns."),
		turns: W().int().min(1).max(200).optional().describe("How many of the user's turns to return, newest first. Absent takes the daemon's default.")
	}), tm = L({ ids: I(M().min(1)).max(500).optional().describe("Which conversations to put away. Leave it out for every finished one that can be archived right now.") }), nm = L({ ids: I(M().min(1)).min(1).max(500).describe("Which conversations.") }), rm = L({
		moved: I(Qp).describe("What actually moved, whole, rather than the fleet afterwards. Two archives finishing at once would each carry a snapshot from a different instant, and swapping one in wholesale would let the slower answer resurrect what the faster one just filed away."),
		rev: P().describe("The version of the fleet that includes this move, so a caller can hold its own optimistic change until it sees a list at least that new.")
	}), im = rm.extend({ failed: I(L({
		id: M().describe("Which conversation stayed on the board."),
		reason: M().describe("Why its working copy could not be released, in the words the failure came with.")
	})).describe("The conversations this press could not put away, each with the reason, so the board can say it instead of reporting silence.") }), am = L({ removed: I(M()).describe("Which conversations were deleted, as ids. Ids rather than whole cards, because these no longer exist anywhere: there is nothing left to show and nothing to put back.") }), om = L({
		query: M().trim().min(2).describe("What to look for. Searched against what was said, both sides of the conversation, and nothing else: not the thinking, not the tool output, which between them name nearly every identifier in the workspace and would return most of the board."),
		caseSensitive: Tl().optional().describe("Whether capitals matter.")
	}), sm = B(["user", "agent"]), cm = L({
		text: M().describe("The matching line, with a little either side of it."),
		speaker: sm.describe("Who said it. Carried with the words rather than beside them, because a line of the agent's prose under a card reads as something you typed until the row says otherwise.")
	}), lm = L({
		id: M().describe("Which conversation matched."),
		snippet: cm.optional().describe("Why, in its own words. Absent when the title was the match, which the card already shows: repeating it underneath is noise where evidence was wanted.")
	}), um = L({
		matches: I(lm).describe("What matched, from the live fleet and the archive together."),
		scanned: P().describe("How many conversations were actually read, so a screen can say when a search saw less than everything rather than implying it saw all of it."),
		indexing: F().describe("Whether what was said is still being read in the background. True means this answer can still grow, so a screen must say it is incomplete rather than presenting it as the whole list.")
	}), dm = L({
		id: M().min(1).describe("Which conversation."),
		title: M().trim().min(1).max(80).describe("What to call it from now on.")
	}), fm = L({
		id: M().min(1).describe("Which conversation."),
		text: M().trim().min(1).max(8e3).describe("The words to put in the agent's mouth. Bounded just above what the next turn can carry whole, because a line too long to be handed over intact would reach the agent truncated and quietly break the very thing this is for.")
	}), pm = L({
		id: M().min(1).describe("Which conversation."),
		autoLand: F().nullable().describe("Whether its work merges automatically when a turn finishes. Null clears the override and goes back to following the sandbox-wide setting, so a conversation does not sit holding a frozen copy of a default it has quietly stopped following.")
	}), mm = L({
		id: M().min(1).describe("Which conversation."),
		resumeAfterOutage: F().nullable().describe("Whether it retries by itself when the model provider was what failed. Null clears the override back to the sandbox-wide setting.")
	}), hm = L({
		id: M().min(1).describe("Which conversation."),
		resumeAfterLimit: F().nullable().describe("Whether the turn a spent allowance refused is sent again by itself once the window reopens. Null clears the override back to the sandbox-wide setting.")
	}), gm = L({
		id: M().min(1).describe("Which conversation."),
		moveAfterLimit: F().nullable().describe("Whether the turn a spent allowance refused is moved to another connected account of the same provider that has room, as soon as the refusal lands. Null clears the override back to the sandbox-wide setting.")
	}), _m = L({
		id: M().min(1).describe("Which conversation."),
		repo: M().min(1).describe("Which repository."),
		path: M().min(1).describe("Which file, relative to that repository.")
	}), vm = L({
		path: M().describe("Which file."),
		reason: Zp.describe("Why it would not merge, and the three have nothing in common but the symptom. Your own uncommitted edits on that path, where yours is the copy at risk. The shared tree having moved under the conversation since it started, where nothing of yours is at risk. Or a file git cannot merge at all, where no automatic answer exists.")
	}), ym = L({
		repo: M().describe("Which repository."),
		paths: I(vm).describe("The files that genuinely would not apply. Not the whole change: reporting everything whenever the cause could not be pinned down turned four real conflicts into a wall of fourteen."),
		clean: P().describe("How many files in this repository passed but remain held with the refused composition. Zero alongside an empty list means the repository could not be reached at all."),
		mainBranch: M().optional().describe("The branch your own checkout is on, which is what the conversation has to rebase onto. Carried because only the sandbox can see it. Absent where there is no name to give.")
	}), bm = L({
		landed: F().describe("Whether the entire composed change was applied."),
		conflicts: I(ym).optional().describe("What stopped the whole composed change, grouped per repository."),
		resolving: I(L({
			repo: M().describe("Which repository."),
			paths: I(M()).describe("Which files now hold conflict markers to sort out by hand.")
		})).optional().describe("Files left half-merged when you asked to carry the whole composition with its conflicts marked for resolution."),
		held: F().optional().describe("Nothing was applied and nothing failed: there is work waiting on the branch for a deliberate merge. Not merged on its own cannot say that, because on its own it means refused.")
	}), xm = B([
		"check",
		"merge",
		"measure"
	]), Sm = B(["cumulative", "outstanding"]), Cm = L({
		id: M().min(1).describe("Which conversation's work to merge."),
		mode: xm.optional().describe("How to apply it. The default applies every repository or none, so a refusal leaves the workspace exactly as it was. The other carries the whole composition and leaves conflicted paths with markers to resolve by hand."),
		span: Sm.optional().describe("How much of the work to take. Leave it out for everything not yet merged."),
		force: F().optional().describe("Go ahead despite a check that would otherwise refuse.")
	});
})), Tm, Em = b((() => {
	G(), Tm = L({
		status: B([
			"allowed",
			"allowed_warning",
			"rejected"
		]),
		resetsAt: P().optional(),
		rateLimitType: M().optional(),
		utilization: P().optional()
	});
})), Dm, Om = b((() => {
	G(), Dm = B([
		"off",
		"cooldown",
		"on"
	]);
})), km, Am, jm, Mm, Nm, Pm, Fm, Im, Lm, Rm, zm, Bm, Vm, Hm, Um, Wm = b((() => {
	G(), km = L({
		name: M().describe("Its id, and what the close route takes."),
		label: M().optional().describe("What to call it on screen."),
		kind: B([
			"shell",
			"panel",
			"agent",
			"job",
			"process"
		]).describe("What sort of thing it is: a terminal somebody opened, a repository's dev server, where an agent's commands run, a job the sandbox started, or a background process that is watched rather than typed into."),
		running: F().describe("Whether it is alive. A finished one-shot job leaves a dead shell behind, which reads as false and is how it gets swept up."),
		activityAt: P().describe("When it last produced output, in milliseconds. Zero means it did not say, which is unknown rather than 1970."),
		exitCode: P().optional().describe("How the last thing in it ended. Absent while that pane is still alive."),
		command: M().optional().describe("What is running in it right now. Absent when it is sitting at a prompt. Not a second spelling of whether it is alive: this says whether anything is happening, which is what a close button should ask about before it ends something."),
		extensionId: M().optional().describe("Which extension declared this process, when one did."),
		processName: M().optional().describe("Which of that extension's processes it is, which together with the id above addresses its start and stop routes."),
		help: L({
			requestId: M().describe("What to send back when you answer, through the agent reply route."),
			message: M().describe("What the agent needs, in its own words."),
			requestedAt: P().describe("When it asked, in milliseconds.")
		}).optional().describe("The agent has stopped at something only a person can clear, and is waiting at this terminal. Present only while it is waiting.")
	}), Am = L({ sessions: I(km).describe("Every live surface the sandbox is holding, in one list, because the question they all answer is the same one.") }), jm = L({ name: M().describe("Which terminal.") }), Mm = L({
		name: M().describe("Which terminal."),
		lines: W().min(1).max(1e5).default(2e4).describe("How far back to ask for. Clamped to the history that actually exists.")
	}), Nm = L({
		name: M().describe("Which terminal this is from."),
		text: M().describe("The history, oldest line first, with wrapped lines rejoined so a copied address or path comes back whole."),
		lines: P().describe("How many lines you got."),
		truncated: F().describe("It stopped because you asked for that many, not because the history ran out.")
	}), Pm = L({
		id: M().describe("Stable for the life of the page, which is what lets a tab survive a refresh of this list. Its address changes as the agent navigates and its position changes when a sibling closes."),
		title: M().optional().describe("The page's title. Absent mid-navigation, which is exactly when a tab still has to be drawn."),
		url: M().describe("Where it is."),
		active: F().describe("The one the agent last touched, or for a finished session, the one it ended on. Exactly one page has this.")
	}), Fm = L({
		name: M().describe("Its id, and what the close route takes."),
		label: M().describe("What to call it on screen: the open page's title, or its site, or which browser this is."),
		server: M().describe("Which browser drives it: the credential-free one, or a signed-in account's. The difference between a throwaway page and one logged in as you, which is worth saying out loud."),
		running: F().describe("Whether it is still open. A closed one is listed for a while with the pages it had, as the record of where the agent went."),
		activityAt: P().describe("When it last did anything, in milliseconds."),
		finishedAt: P().optional().describe("When it closed, in milliseconds. Absent while it is open."),
		help: L({
			requestId: M().describe("What to send back when you answer, through the agent reply route."),
			message: M().describe("What the agent needs, in its own words."),
			requestedAt: P().describe("When it asked, in milliseconds.")
		}).optional().describe("The agent has hit something only a person can clear: a captcha, a password it does not hold, a check on your phone. Present only while it is waiting."),
		pages: I(Pm).describe("Every page it has open. A browser holds several at once, which is the reason it is listed apart from the terminals.")
	}), Im = L({ sessions: I(Fm).describe("Every browser the agents have running, open or recently closed.") }), Lm = L({ name: M().describe("Which browser.") }), Rm = B(["subagent", "spawned"]), zm = B([
		"pending",
		"running",
		"blocked",
		"completed",
		"failed",
		"killed",
		"paused"
	]), Bm = L({
		state: B([
			"verified",
			"unproven",
			"failing",
			"no-code"
		]).describe("Whether anything proved its work: a check passed after its last edit, it changed code and nothing checked it, a check ran and failed, or it changed no code at all."),
		paths: I(M()).optional().describe("The code files it changed, most recent last. The first few; the record holds the rest."),
		check: M().optional().describe("The command that spoke: the one that cleared it, or the one that failed. Named rather than summarised, so a targeted test is not read as the whole suite.")
	}), Vm = L({
		id: M().describe("The id of the tool call that started it (an SDK child) or the child's own conversation id (a spawned one); either way both sides already hold it, so a card links to its subagent with the id it has and the subagent points back the same way."),
		kind: Rm.describe("What sort of subagent: one the runtime's own Task tool spawned in-process, or a full child agent the daemon started for the turn. It changes only how you watch it."),
		conversationId: M().describe("The conversation whose turn started it, and the way back to the chat it belongs to."),
		agentType: M().optional().describe("What kind of subagent it is."),
		description: M().optional().describe("What it was asked to do, in one line."),
		model: M().optional().describe("Which model it runs on."),
		provider: M().optional().describe("Which provider serves it, for a child agent spawned across providers."),
		spawnDepth: P().optional().describe("How deep in the chain it sits, where one means the turn itself started it. A subagent can start subagents, and a flat list that could not say so would read as though the turn started all of them."),
		background: F().optional().describe("The parent carried on working instead of waiting for it. This is the whole reason the list exists: such a subagent used to be invisible until its result landed, sometimes minutes later."),
		status: zm.describe("How it is going. Blocked means it needs an answer, which a parent and an operator act on differently from it simply working."),
		startedAt: P().describe("When it started, in milliseconds."),
		endedAt: P().optional().describe("When it finished, in milliseconds. Absent while it works."),
		activityAt: P().describe("When it last did anything, in milliseconds."),
		tokens: P().optional().describe("What it has spent. Its own, so a parent's cost and the sum of its subagents' are two different true numbers."),
		toolUses: P().optional().describe("How many tools it has used."),
		lastTool: M().optional().describe("The last one it reached for."),
		summary: M().optional().describe("Its report: what it concluded, without opening its record. The question a finished subagent gets read for."),
		error: M().optional().describe("Why it failed, when it did."),
		verification: Bm.optional().describe("Whether anything proved the work its report describes.")
	}), Hm = L({ sessions: I(Vm).describe("Every subagent and child agent this sandbox's conversations have started.") }), Um = L({ id: M() });
})), Gm, Km, qm, Jm, Ym, Xm, Zm = b((() => {
	G(), Gm = B(["messages", "everything"]), Km = L({
		id: M().describe("The share's own id, minted fresh each time, so sharing one conversation twice gives two links. Deliberately not the conversation's id, which is memorable by design and would make a page's address guessable."),
		conversationId: M().describe("Which conversation it was taken from."),
		title: M().describe("The title on the page, which is the sharer's choice rather than the conversation's own."),
		detail: Gm.describe("How much travels: the two speakers' words alone, or the whole record including the agent's work and thinking, which necessarily publishes the code and command output in it."),
		sharedAt: P().describe("When the snapshot was taken, in milliseconds. A share is frozen, so this dates what a recipient can see rather than when the conversation happened."),
		messages: P().describe("How many messages are behind the link."),
		url: M().optional().describe("The page's address. Absent on a sandbox with nowhere to publish to.")
	}), qm = L({ shares: I(Km).describe("Every conversation currently published as a page.") }), Jm = L({
		conversationId: M().min(1).describe("Which conversation to publish."),
		title: M().min(1).max(80).describe("The title for the page. The conversation's own name is only what a dialog would open with."),
		detail: Gm.describe("How much to publish. Two levels rather than a set of switches, because every extra toggle is another thing to get wrong about a link that cannot be recalled.")
	}), Ym = L({ id: M().min(1).describe("Which share to re-take. Its link stays the same, which matters because it has already been sent.") }), Xm = L({ id: M().min(1).describe("Which share to take down.") });
})), Qm, $m, eh, th, nh, rh, ih, ah, oh, sh, ch, lh, uh, dh, fh, ph, mh, hh, gh, _h, vh, yh, bh, xh = b((() => {
	G(), Y(), Zm(), Wm(), gp(), Qm = B([
		"pending",
		"approved",
		"rejected",
		"cancelled"
	]), $m = B([
		"pending",
		"answered",
		"cancelled"
	]), eh = B([
		"pending",
		"allowed",
		"always",
		"denied",
		"cancelled"
	]), th = B([
		"pending",
		"helped",
		"declined",
		"cancelled"
	]), nh = B([
		"pending",
		"approved",
		"skipped",
		"cancelled"
	]), rh = B([
		"pending",
		"connecting",
		"skipped",
		"cancelled"
	]), ih = L({
		...np,
		status: Qm.describe("Where the decision stands.")
	}), ah = L({
		...rp,
		status: $m.describe("Where the answer stands."),
		answers: z(M(), I(M())).optional().describe("What was chosen, keyed by the question, with the chosen labels or the user's own words.")
	}), oh = Vf.extend({
		...ip,
		status: eh.describe("Where the decision stands.")
	}), sh = L({
		...ap,
		status: th.describe("How the hand-over ended.")
	}), ch = L({
		...op,
		status: th.describe("How the hand-over ended.")
	}), lh = L({
		...sp,
		status: rh.describe("Where the decision stands."),
		outcome: up.optional().describe("How an accepted ask's setup ended (the capability_outcome frame).")
	}), uh = L({
		...cp,
		status: nh.describe("Where the decision stands."),
		receipt: dp.optional().describe("How the approved payment ended (the payment_receipt frame).")
	}), dh = L({
		...lp,
		status: nh.describe("Where the decision stands."),
		receipt: fp.optional().describe("Who released it, or that somebody refused (the credential_receipt frame).")
	}), fh = wc(() => L({
		id: M().describe("The call's id."),
		name: M().describe("Which tool."),
		category: Xf.describe("What kind of thing it does: read, edit, delete, move, search, run, think, fetch. Named the same way whatever the backend called the tool."),
		status: Zf.describe("How it went."),
		target: M().optional().describe("What it acted on, in one line: a file, a command, an address."),
		locations: I(Qf).optional().describe("The files it touched."),
		content: I($f).optional().describe("What it produced: text, a change to a file, or a picture."),
		children: I(fh).optional().describe("Calls a delegated subagent made, nested under the call that started it, so a reopened conversation redraws the delegation rather than collapsing it into one result."),
		thinking: M().optional().describe("What the agent was reasoning about around this call."),
		subagent: ph.optional().describe("The helper this call started, as the daemon's registry sees it: what it is, how it is going, what it has spent. What a card can say about a backgrounded child whose result is minutes away.")
	})), ph = L({
		kind: Rm,
		agentType: M().optional(),
		description: M().optional(),
		model: M().optional(),
		provider: M().optional(),
		background: F().optional(),
		status: zm,
		tokens: P().optional(),
		toolUses: P().optional(),
		lastTool: M().optional(),
		summary: M().optional(),
		error: M().optional(),
		verification: Bm.optional()
	}), mh = L({
		title: M().describe("The one line a reader sees, on a row that opens to the text below."),
		text: M().describe("The note itself, which is also exactly what the model was told.")
	}), hh = L({
		costUsd: P().optional(),
		inputTokens: P().optional(),
		outputTokens: P().optional(),
		durationMs: P().optional(),
		numTurns: P().optional()
	}), gh = L({
		role: B([
			"user",
			"assistant",
			"notice"
		]).describe("Who said it. A notice is neither side: it is something that happened to the turn, recorded so a reopened conversation can say it. Without those, a turn a provider refused ends on the user's message and reads as broken."),
		text: M().describe("The words."),
		sentAt: P().optional().describe("When it was sent, in milliseconds. On the user's rows only, because that is the only moment actually known: a turn's own frames arrive with no clock, so stamping the agent's rows could only ever mean the whole turn's start or end."),
		attachments: I(M()).optional().describe("Files attached to this message, as workspace paths."),
		checkpointId: M().optional().describe("The saved point this message can be rewound to. Looked up on each read rather than stored, so what is offered is exactly what is still there to go back to."),
		rewindIndex: P().int().nonnegative().optional().describe("This message's position in the conversation's record, which is how a rewind names it. Present only beside a checkpoint."),
		thinking: M().optional().describe("What the agent was reasoning about."),
		tools: I(fh).optional().describe("The tool calls this part of the turn made."),
		todos: I(Jf).optional().describe("The agent's task checklist, as of this bubble."),
		usage: hh.optional().describe("What the turn cost, on the bubble its answer ended in."),
		notes: I(mh).optional().describe("What the sandbox added to this message before the model saw it. Carried on the message rather than as rows of their own, because they genuinely were part of what was sent."),
		placed: F().optional().describe("A person wrote this in the agent's voice, with no turn behind it. Marked for the human re-reading the conversation months later, so their own words do not pass as the agent's. The agent itself never sees the mark."),
		noticeAction: B([
			"landHold",
			"outageOptOut",
			"depsInstall",
			"tierHold"
		]).optional().describe("A one-press follow-up this notice offers, by name. The chat decides what it does and whether it still applies."),
		noticeWait: B(["credentialRenewal", "personaRoute"]).optional().describe("The wait this notice describes, by name, so a reader can say whether it is still on."),
		plan: ih.optional().describe("The plan this row asked approval for, and the answer."),
		question: ah.optional().describe("The questions this row asked, and the picks that answered them."),
		permission: oh.optional().describe("The tool this row asked permission for, and the decision."),
		browserHelp: sh.optional().describe("The browser hand-over this row asked for, and how it ended."),
		terminalHelp: ch.optional().describe("The terminal hand-over this row asked for, and how it ended."),
		capabilityOffer: lh.optional().describe("The capability setup this row asked for, the decision, and the outcome."),
		paymentOffer: uh.optional().describe("The payment this row asked for, the decision, and the receipt."),
		credentialOffer: dh.optional().describe("The gated credential this row asked to use, who may release it, and who did.")
	}), _h = R("op", [
		L({
			op: V("append").describe("A new row at the end."),
			row: gh
		}),
		L({
			op: V("replace").describe("This row, whole, in place of the one at that index."),
			index: P().int().nonnegative(),
			row: gh
		}),
		L({
			op: V("drop").describe("The row at that index is gone: it was opened and never written into."),
			index: P().int().nonnegative()
		}),
		L({
			op: V("text").describe("More of the agent's prose, onto that row's text."),
			index: P().int().nonnegative(),
			text: M()
		}),
		L({
			op: V("thinking").describe("More of the agent's reasoning, onto that row's thinking."),
			index: P().int().nonnegative(),
			text: M()
		}),
		L({
			op: V("tool").describe("A tool card, whole: new, or the latest state of one already there, matched by id wherever it nests."),
			index: P().int().nonnegative(),
			tool: fh,
			parent: M().optional().describe("The card this one nests under, when it is a delegated subagent's own call.")
		})
	]), vh = L({ messages: I(gh).describe("The conversation, in order. Each block of the agent's prose is its own message with the tools that block introduced, which is what reproduces the way it actually unfolded.") }), yh = L({
		reason: B([
			"stopped",
			"limit",
			"outage"
		]).describe("Which ending left the work here: a Stop or a daemon killed under the turn, a spent usage allowance, or a provider that refused it."),
		resetsAt: P().optional().describe("When the spent allowance reopens, in epoch seconds. Absent for every ending that names no instant, and for a provider that publishes none."),
		held: L({
			ran: F().describe("Whether the held turn got anywhere before it was refused, which is a different sentence from one refused at the door."),
			contextTokens: P().optional().describe("How much context a press that keeps the session re-reads once, on this account at the reset or carried to another. Absent when no usage frame measured it."),
			handoffTokens: P().optional().describe("What a press that opens a fresh session pays instead: the capped record plus the sandbox's measured brief, counted at the failure."),
			moving: M().optional().describe("The account the owner's policy is already moving this turn to, when it is; the surface then reports the move rather than offering a press.")
		}).optional().describe("Present when the daemon still holds the refused turn whole, so a press re-runs it rather than appending a message after it."),
		scheduled: F().optional().describe("Whether something other than the user is already booked to send this turn again, so the surface reports the wait instead of offering a press.")
	}), bh = vh.extend({
		sessionId: M().optional().describe("The provider session behind the last turn, when there is one."),
		provider: ld.optional().describe("Which provider minted that session."),
		harness: dd.optional().describe("Which runtime minted it: a session resumes only on the loop that opened it."),
		account: M().optional().describe("Which stored account it belongs to, as the daemon resolved it. Absent when no stored account paid for the turn."),
		ending: yh.optional().describe("How the last turn ended, when it left work behind that one press finishes. Absent for a conversation whose last turn ended on its own, and for the failures that name something to repair first."),
		from: P().int().nonnegative().describe("Where the first message sits in the whole record, and the `before` that asks for the page above this one."),
		more: F().describe("Whether older messages precede this page.")
	}), L({
		title: M(),
		sharedAt: P(),
		detail: Gm,
		messages: I(gh)
	});
})), Sh, Ch, wh, Th, Eh, Dh = b((() => {
	G(), Y(), wm(), Em(), Om(), Vd(), Wm(), gp(), xh(), Sh = R("kind", [
		L({
			kind: V("session"),
			sessionId: M(),
			account: M().optional().describe("Which stored account this session belongs to, as the daemon resolved it for the turn.")
		}),
		L({
			kind: V("worktree"),
			branch: M(),
			base: M(),
			unenforced: F().optional(),
			sync: L({
				commits: P(),
				blocked: I(M())
			}).optional(),
			remote: M().optional()
		}),
		L({
			kind: V("landed"),
			landed: F(),
			conflicts: I(ym).optional(),
			held: F().optional(),
			deps: L({
				missing: P(),
				started: I(M()),
				deferred: F()
			}).optional()
		}),
		L({
			kind: V("preamble"),
			notes: I(mh)
		}),
		L({
			kind: V("init"),
			model: M()
		}),
		L({
			kind: V("checkpoint"),
			id: M(),
			index: P().int().nonnegative().optional()
		}),
		L({
			kind: V("steer"),
			text: M(),
			sentAt: P(),
			attachments: I(M()).optional()
		}),
		L({
			kind: V("delta"),
			text: M(),
			parentToolUseId: M().optional()
		}),
		L({
			kind: V("text_end"),
			parentToolUseId: M().optional()
		}),
		L({
			kind: V("thinking"),
			text: M(),
			parentToolUseId: M().optional()
		}),
		L({
			kind: V("tool_call"),
			id: M(),
			name: M(),
			category: Xf,
			status: Zf,
			target: M().optional(),
			locations: I(Qf).optional(),
			content: I($f).optional(),
			parentToolUseId: M().optional()
		}),
		L({
			kind: V("tool_call_update"),
			id: M(),
			status: Zf.optional(),
			content: I($f).optional(),
			locations: I(Qf).optional()
		}),
		L({
			kind: V("terminal"),
			session: M()
		}),
		L({
			kind: V("browser"),
			session: M()
		}),
		L({
			kind: V("subagent"),
			id: M(),
			subagentKind: Rm,
			agentType: M().optional(),
			description: M().optional(),
			model: M().optional(),
			provider: M().optional(),
			background: F().optional()
		}),
		L({
			kind: V("subagent_update"),
			id: M(),
			status: zm.optional(),
			tokens: P().optional(),
			toolUses: P().optional(),
			lastTool: M().optional(),
			summary: M().optional(),
			error: M().optional(),
			verification: Bm.optional()
		}),
		L({
			kind: V("todos"),
			items: I(Jf)
		}),
		L({
			kind: V("commands"),
			items: I(Gf)
		}),
		L({
			kind: V("usage"),
			account: M().optional(),
			costUsd: P().optional(),
			inputTokens: P().optional(),
			outputTokens: P().optional(),
			cacheReadTokens: P().optional(),
			cacheCreationTokens: P().optional(),
			durationMs: P().optional(),
			numTurns: P().optional()
		}),
		Tm.extend({
			kind: V("rate_limit_info"),
			account: M().optional()
		}),
		L({
			kind: V("fast_mode"),
			state: Dm,
			reason: M().optional()
		}),
		L({
			kind: V("tier"),
			tier: B(["fast", "standard"]),
			score: P(),
			rules: I(M()),
			model: M().optional(),
			routed: F(),
			held: F().optional()
		}),
		L({
			kind: V("provider_retry"),
			attempt: P(),
			maxAttempts: P().optional(),
			nextAttemptAt: P().optional(),
			status: P().optional()
		}),
		L({
			kind: V("account_usage"),
			account: M().optional(),
			windows: I(Od)
		}),
		Yf.extend({ kind: V("context_usage") }),
		L({
			kind: V("compact"),
			trigger: M(),
			preTokens: P().optional(),
			postTokens: P().optional()
		}),
		pp,
		mp,
		hp,
		L({
			kind: V("browser_help"),
			...ap
		}),
		L({
			kind: V("terminal_help"),
			...op
		}),
		L({
			kind: V("capability_offer"),
			...sp
		}),
		up.extend({
			kind: V("capability_outcome"),
			requestId: M()
		}),
		L({
			kind: V("payment_offer"),
			...cp
		}),
		dp.extend({
			kind: V("payment_receipt"),
			requestId: M()
		}),
		L({
			kind: V("credential_offer"),
			...lp
		}),
		fp.extend({
			kind: V("credential_receipt"),
			requestId: M()
		}),
		L({
			kind: V("resolved"),
			requestId: M(),
			reply: Id.optional()
		}),
		L({
			kind: V("mode"),
			mode: bd
		}),
		L({
			kind: V("error"),
			message: M(),
			code: B([
				"session-not-found",
				"rate_limit",
				"codex-advisory",
				"codex-reauth",
				"claude-reauth",
				"claude-token-refused",
				"claude-not-entitled",
				"provider-outage",
				"trial-unavailable",
				"trial-model-unavailable",
				"trial-exhausted",
				"unknown-command",
				"grok-model-invalid",
				"codex-model-invalid",
				"model-unavailable",
				"context-window-too-small",
				"subscription-required",
				"agent-busy",
				"sandbox-memory-low",
				"turn-cap",
				"harness-incomplete",
				"engine-version-floor"
			]).optional(),
			engine: L({
				id: M().describe("Which engine (e.g. claude)."),
				running: M().optional().describe("The version that was refused, when the provider named it."),
				floor: M().describe("The lowest version the provider will accept.")
			}).optional(),
			resetsAt: P().optional(),
			autoResume: B(["scheduled", "available"]).optional(),
			held: L({
				ran: F(),
				contextTokens: P().optional(),
				handoffTokens: P().optional(),
				moving: M().optional()
			}).optional(),
			outage: L({
				retryAt: P(),
				attempt: P(),
				maxAttempts: P()
			}).optional()
		}),
		L({ kind: V("done") })
	]), Ch = [
		"session",
		"worktree",
		"init",
		"terminal",
		"browser",
		"commands",
		"usage",
		"rate_limit_info",
		"fast_mode",
		"tier",
		"provider_retry",
		"account_usage",
		"context_usage",
		"mode",
		"error"
	], wh = Sh.options.filter((e) => Ch.includes(e.shape.kind.value)), Th = R("kind", wh), Eh = R("kind", [
		L({
			kind: V("attached").describe("The first frame, identifying the run you have joined and handing you its transcript so far."),
			run: M().describe("The run's id."),
			startedAt: P().describe("When it started, in milliseconds, so a window joining late can show how long it has been going."),
			seq: P().describe("How many frames the run has produced so far. A fact at or below this number is being replayed; a patch is never."),
			rows: I(gh).describe("The turn's rows as they stand: what was asked, and everything the agent has said and done since. Draw these, then apply the patches that follow.")
		}),
		L({
			kind: V("patch").describe("One change to the run's rows."),
			seq: P().describe("Its position in the run, counting from one."),
			patch: _h
		}),
		L({
			kind: V("fact").describe("One thing about the turn that is not a row: its session, its branch, its cost, a failure."),
			seq: P().describe("Its position in the run, counting from one. At or below the head's number, it is being replayed."),
			fact: Th
		}),
		L({ kind: V("end").describe("The run is over and every frame has been delivered. A stream that closes without this was dropped mid-run, so re-attach rather than assuming the turn finished.") })
	]);
})), Oh, kh, Ah, jh, Mh, Nh, Ph, Fh, Ih, Lh, Rh, zh = b((() => {
	G(), Oh = B([
		"turn",
		"interval",
		"pre-restore",
		"restore",
		"user"
	]), kh = L({
		id: M().describe("The saved point's id, which is what restoring and diffing take."),
		at: P().describe("When it was taken, in milliseconds."),
		trigger: Oh.describe("What caused it. The automatic between-turn captures are a safety net and are not listed; they dissolve into the next visible point's differences."),
		label: M().optional().describe("What to call it. For one taken before a turn, that turn's prompt.")
	}), Ah = L({ snapshots: I(kh).describe("Every point you can go back to, newest first.") }), jh = L({
		conversationId: M().min(1).describe("Which conversation to rewind."),
		index: P().int().nonnegative().describe("Which message to go back to, counting from the start. It is also how many messages survive: rewinding to the first keeps none of them and puts the files back to before it ran.")
	}), Mh = L({
		snapshot: M().optional().describe("The saved point the files were put back to. Absent for a conversation working in its own copy, whose rewind moved a branch rather than the shared timeline."),
		dropped: P().int().nonnegative().describe("How many messages were removed.")
	}), Nh = L({ id: M().min(1).describe("Which saved point.") }), Ph = L({
		scope: M().describe("Which part of the workspace the path belongs to: the workspace root, or one of the repositories inside it."),
		path: M().describe("The path, relative to that scope."),
		status: B([
			"added",
			"modified",
			"deleted",
			"type-changed"
		]).describe("What happened to it.")
	}), Fh = L({ changes: I(Ph).describe("Everything that differs between this saved point and the one before it.") }), Ih = L({
		id: M().min(1).describe("Which saved point."),
		scope: M().min(1).describe("Which part of the workspace the path belongs to."),
		path: M().min(1).describe("The file, relative to that scope.")
	}), Lh = L({
		beforeBytes: P().int().nonnegative().optional().describe("How big the before side is, in bytes. Absent when the file did not exist yet."),
		afterBytes: P().int().nonnegative().optional().describe("How big the after side is, in bytes. Absent when the file was deleted."),
		patch: M().optional().describe("The changed regions as unified-diff hunks (`@@` sections only). Absent when the change was too large to render even as a patch."),
		more: F().optional().describe("There were more changed regions than fit; the patch stops at a region boundary.")
	}), Rh = L({
		before: M().optional().describe("The whole file as it was. Absent when it did not exist yet, or when `partial` is set."),
		after: M().optional().describe("The whole file as it is now. Absent when it was deleted, or when `partial` is set."),
		binary: F().optional().describe("The file is not text, so neither side is sent."),
		partial: Lh.optional().describe("Set when the file was too large to send whole: what is sent instead of the two sides.")
	});
})), Bh, Vh = b((() => {
	q(), gp(), Dh(), Y(), zh(), Vd(), Q(), Bh = {
		run: K.route({
			method: "POST",
			path: "/agent",
			summary: "Say something to an agent",
			description: "Starts a turn and answers immediately with its id; the work runs inside the sandbox whether or not anybody stays connected. Watch it by attaching. Naming a conversation that does not exist yet opens it."
		}).input(Sd).output(Td),
		attach: K.route({
			method: "POST",
			path: "/agent/attach",
			summary: "Watch a turn happen",
			description: "Streams everything the agent does: its words, the tools it reaches for, and the answers it gets. Give it the point you have already seen and it replays from there before going live, so a reload loses nothing. The window that started the turn holds no special claim, and any number of watchers on any number of devices see the same thing."
		}).input(Ed).output(ju(Eh)),
		reply: K.route({
			method: "POST",
			path: "/agent/reply",
			summary: "Answer a question the agent asked",
			description: "Un-parks a turn that is waiting on you: approving a plan, choosing between options, or permitting a tool. The turn picks up where it stopped."
		}).input(Id).output(X),
		steer: K.route({
			method: "POST",
			path: "/agent/steer",
			summary: "Interrupt a running turn",
			description: "Slips a message into a turn already under way, without stopping it. This is how you redirect an agent mid-thought rather than waiting for it to finish being wrong."
		}).input(Ld).output(X),
		stop: K.route({
			method: "POST",
			path: "/agent/stop",
			summary: "Stop a turn now",
			description: "Cancels the running turn inside the sandbox. Whatever it had already written to disk stays written."
		}).input(Rd).output(X),
		resume: K.route({
			method: "POST",
			path: "/agent/resume",
			summary: "Run a refused turn again",
			description: "Sends the same turn again when the model provider's allowance refused it, with everything it originally carried except who serves it: the caller may name a different provider, harness or account, which is the usual answer to a spent allowance. It repeats the request rather than adding a new message to the conversation, so pressing it twice costs nothing and the agent is never told to continue work it has not started."
		}).input(Bd).output(Td),
		rewind: K.route({
			method: "POST",
			path: "/agent/rewind",
			summary: "Go back to an earlier message",
			description: "Puts the files back as they stood at that point, drops every message after it, and forgets what the model remembered, so the next thing you say starts from there cleanly. Refused while a turn is running, because a restore cannot overwrite files an agent is editing, and refused for a message with no saved state to return to."
		}).input(jh).output(Mh),
		commands: K.route({
			method: "GET",
			path: "/agent/commands",
			summary: "Shortcut commands the agent knows",
			description: "The commands a provider published the last time one of its turns ran, so a composer can offer them before this conversation has run anything. A running turn's own list wins over this one."
		}).input(Kf).output(qf),
		refusals: K.route({
			method: "GET",
			path: "/agent/refusals",
			summary: "The last time each provider said no",
			description: "What each model provider most recently refused and why. Read this alongside an account's usage: the usage says how full it was when last checked, this says whether it has since started turning work away."
		}).output(Nd)
	};
})), Hh, Uh, Wh, Gh, Kh, qh, Jh, Yh, Xh, Zh, Qh, $h, eg, tg, ng, rg, ig, ag = b((() => {
	G(), cd(), Hh = B([
		"crash",
		"report",
		"detection"
	]), Uh = L({
		at: P().describe("When, in milliseconds."),
		kind: M().max(40).describe("What sort of thing it was: a console line, a request, a click, a route change."),
		message: M().max(300).describe("What it said, already truncated by the SDK.")
	}), Wh = L({
		email: M().max(320).optional().describe("An address they typed, to reach them about it. Unverified."),
		name: M().max(200).optional().describe("A name they typed. Unverified, and never identity.")
	}), Gh = 20, Kh = z(M().max(60), M().max(300)).refine((e) => Object.keys(e).length <= Gh, { message: `at most ${Gh} context entries` }), qh = L({
		kind: Hh.describe("A crash the SDK caught, something a person wrote in, or a problem the SDK noticed on its own."),
		message: M().min(1).max(1e3).describe("The error's own message, or the headline of what a person reported."),
		stack: M().max(2e4).optional().describe("The stack, verbatim from the browser."),
		url: M().max(2e3).optional().describe("Where it happened: the page's address, or a screen name in an app."),
		release: M().max(200).optional().describe("Which build it came from: a commit sha or a tag. With it the agent reads your real source rather than minified frames."),
		userAgent: M().max(400).optional().describe("What the browser said it was."),
		description: M().max(5e3).optional().describe("What the person typed, when a person is the one reporting."),
		reporter: Wh.optional().describe("Who says they are reporting it. Unverified by construction."),
		breadcrumbs: I(Uh).max(40).optional().describe("What happened just before, oldest first."),
		context: Kh.optional().describe("Whatever else the app attached: a route, a version, a locale."),
		fingerprint: M().max(200).optional().describe("Group by this instead of by the stack, when your app knows better than the stack does.")
	}), L({
		report: qh,
		clientId: M().min(1).max(200).describe("The SDK's own id for this browser. Not a secret: it is what the rate limit counts against."),
		powNonce: M().max(400).optional(),
		key: M().max(200).optional()
	}), Jh = B([
		"open",
		"investigating",
		"resolved",
		"ignored"
	]), Yh = L({
		conversationId: M().describe("The conversation this run became."),
		at: P().describe("When it started, in milliseconds."),
		atCount: P().describe("How many times it had happened when this run started.")
	}), Xh = L({
		kind: Hh,
		title: M().min(1).max(300).describe("The one line this is listed under."),
		culprit: M().max(300).optional().describe("The frame it came from, when the stack named one."),
		automationId: J.describe("Which intake received it."),
		origin: M().max(400).optional().describe("Which site it came from."),
		firstSeen: P().describe("When it first happened, in milliseconds."),
		lastSeen: P().describe("When it last happened, in milliseconds."),
		count: P().describe("How many times this exact thing has arrived."),
		status: Jh.default("open").describe("Where it stands with you."),
		statusAt: P().optional().describe("When the status last changed, in milliseconds."),
		release: M().max(200).optional().describe("The build the latest one came from."),
		sample: qh.describe("The most recent one, in full."),
		firedAt: P().optional().describe("What the count stood at the last time this woke an agent."),
		runs: I(Yh).max(20).optional().describe("The turns started for it.")
	}), Zh = Xh.extend({ id: J.describe("The issue's id, which is its fingerprint.") }), Qh = L({
		issues: I(Zh).describe("The inbox, most recently seen first."),
		invalid: I(M()).describe("Files in the issues directory that could not be read at all.")
	}), $h = L({ id: J.describe("Which issue.") }), eg = L({
		id: J.describe("Which issue."),
		status: B([
			"open",
			"resolved",
			"ignored"
		]).describe("Where it now stands with you.")
	}), tg = L({
		keyFromBrowsers: F().optional().describe("Let a browser report with the key alone, rather than only from a site you listed. Off unless you need it."),
		dailyReportMax: P().int().positive().optional().describe("How many reports a day this intake accepts at all."),
		escalateAfter: P().int().positive().optional().describe("How many more times a known crash must happen before it wakes an agent again."),
		antiBot: B(["pow"]).optional().describe("Make a person's browser solve a small puzzle before it accepts a written report."),
		title: M().max(80).optional().describe("The dialog's heading."),
		prompt: M().max(300).optional().describe("The line above the box they type in."),
		thanks: M().max(300).optional().describe("What it says once they have sent it."),
		askEmail: F().optional().describe("Ask for an address to reply to. Optional for them either way."),
		accent: M().regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, "accent must be a hex colour, e.g. #e47100").optional(),
		captureCrashes: F().optional().describe("Catch uncaught errors automatically, as well as what people write in.")
	}), L({
		automationId: M(),
		title: M(),
		prompt: M(),
		thanks: M(),
		askEmail: F(),
		accent: M(),
		captureCrashes: F(),
		antiBot: B(["pow", "off"])
	}), L({
		ok: V(!0),
		id: M()
	}), ng = L({
		origin: M(),
		allowed: F(),
		lastSeenAt: P(),
		loads: P()
	}), rg = L({ origins: I(ng) }), ig = L({ automationId: J.describe("Which intake.") });
})), og, sg, cg, lg, ug, dg, fg, pg, mg, hg, gg, _g, vg, yg, bg, xg, Sg, Cg, wg, Tg, Eg, Dg, Og, kg = b((() => {
	G(), Y(), wm(), cd(), ag(), og = B([
		"turn.settled",
		"agent.landed",
		"deps.broken",
		"deps.fixed"
	]), L({
		event: og,
		agentId: M(),
		title: M().optional(),
		branch: M(),
		outcome: B([
			"landed",
			"conflict",
			"ready",
			"idle",
			"error"
		]),
		repos: I(L({
			repo: M(),
			from: M(),
			dir: M()
		})),
		deps: L({
			project: M(),
			command: M(),
			exitCode: P(),
			attempt: P(),
			logTail: M()
		}).optional()
	}), sg = R("kind", [
		L({
			kind: V("schedule").describe("On a clock."),
			cron: M().min(1).describe("When, in cron notation."),
			afterSessions: P().int().positive().optional().describe("Fire only once at least this many new sessions have been run since the last wake. A due run short of that is skipped, and says how far off it is.")
		}),
		L({
			kind: V("event").describe("When something calls its webhook."),
			dailyMax: P().int().positive().optional().describe("How many webhook calls a day may wake the agent, across every caller. Absent is a modest default rather than unlimited.")
		}),
		L({
			kind: V("listener").describe("When a message arrives from somewhere outside."),
			provider: M().min(1).describe("Which service to listen to."),
			channelId: M().min(1).optional().describe("Narrow it to one channel or thread."),
			eventType: M().min(1).optional().describe("Narrow it to one kind of event."),
			mentioned: F().optional().describe("Only when the agent is actually addressed, rather than on everything said in earshot."),
			branch: M().min(1).optional().describe("Narrow it to one branch, for the sources that have branches. Absent means every branch of the repositories it matches."),
			allowedOrigins: I(M()).optional().describe("Which websites may reach the public endpoint, the chat widget's or the bug reporter's. Absent or empty admits nobody.")
		}),
		L({
			kind: V("workspace").describe("When something happens to the files or the repositories."),
			event: og.describe("Which happening."),
			repo: M().min(1).optional().describe("Narrow it to one repository. Absent means any of them.")
		})
	]), cg = L({
		access: B(["public", "google"]).optional().describe("Who may write to it. Absent means anyone, which is the anonymous support box it looks like."),
		requireName: F().optional().describe("Ask a visitor for a name first. Cosmetic: the name is typed, so it reaches the model as something a stranger said, never as identity."),
		antiBot: B(["turnstile", "pow"]).optional().describe("How to keep bots out: a third-party check that needs the site's own keys, or a puzzle the sandbox sets and the widget solves, so a site with no such account still has something. Absent leaves the site allowlist and the rate limit as the whole boundary."),
		turnstileSiteKey: M().optional().describe("The public half of those keys, which ships to the visitor's browser."),
		turnstileSecret: M().optional().describe("The private half, which the sandbox keeps and the widget never sees."),
		googleClientId: M().optional().describe("The site's own sign-in client id. It cannot be ours: a sign-in is only issued to an approved origin, and no single client can list every customer's domain."),
		title: M().max(80).optional(),
		greeting: M().max(500).optional(),
		accent: M().regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, "accent must be a hex colour, e.g. #e47100").optional(),
		position: B([
			"top-right",
			"top-left",
			"bottom-right",
			"bottom-left"
		]).optional(),
		dailyMessageMax: P().int().positive().optional(),
		conversationMessageMax: P().int().positive().optional(),
		sessionTtlMinutes: P().int().positive().optional()
	}), L({
		automationId: M(),
		title: M(),
		greeting: M(),
		accent: M(),
		position: B([
			"top-right",
			"top-left",
			"bottom-right",
			"bottom-left"
		]),
		access: B(["public", "google"]),
		requireName: F(),
		antiBot: B([
			"turnstile",
			"pow",
			"off"
		]),
		turnstileSiteKey: M().optional(),
		googleClientId: M().optional()
	}), L({
		salt: M(),
		difficulty: P().int().positive()
	}), L({
		conversationId: M().min(1).max(200),
		content: M().min(1),
		displayName: M().max(200).optional(),
		idToken: M().optional(),
		turnstileToken: M().optional(),
		powNonce: M().optional(),
		history: I(L({
			author: M().optional(),
			content: M()
		})).max(50).optional()
	}), L({
		replies: I(L({
			seq: P(),
			at: P(),
			text: M()
		})),
		cursor: P()
	}), lg = L({
		label: M().max(60).optional().describe("What to call these people on screen."),
		ids: I(M().min(1).max(200)).max(200).optional().describe("Sender ids, as the service names them, never display names."),
		groups: I(M().min(1).max(200)).max(50).optional().describe("Group ids the service reports on a sender, a Discord role. Only for a source whose messages carry them."),
		actsAs: J.optional().describe("Which persona their wakes speak as. Absent is no persona: the full toolbox, reaching no account."),
		requireApproval: F().optional().describe("Hold their wakes for a person, even when the automation itself does not.")
	}).refine((e) => (e.ids?.length ?? 0) + (e.groups?.length ?? 0) > 0, { message: "a sender rule must name at least one id or group" }), ug = L({
		rules: I(lg).max(50).describe("Walked in order; the first rule naming the sender decides."),
		others: B([
			"allow",
			"hold",
			"ignore"
		]).describe("What a sender no rule names gets: the automation as configured, a hold for a person, or nothing at all.")
	}), dg = L({
		id: J.describe("The automation's id."),
		trigger: sg.describe("What sets it off: a schedule, an event in the workspace, a message arriving from outside, or a webhook."),
		guard: M().min(1).optional().describe("A command run before the wake that decides whether there is anything to do. Skipped by the guard is often the most useful thing an automation can report."),
		prompt: M().min(1).describe("What the woken agent is told."),
		webchat: cg.optional().describe("Settings for the public chat widget, for an automation that answers visitors."),
		issues: tg.optional().describe("Settings for the bug reporter, for an automation that takes crash reports from your own sites and apps."),
		allowedTools: I(M().min(1)).optional().describe("Narrow the woken turn to these tools. For one driven by an outside message this list is the real boundary, because prompt wording is only advice and an empty toolbox is not."),
		models: I(wd).min(1).max(10).describe("Which models this automation may run on, best first. Required, and nothing is chosen for you: work that fires while nobody is watching spends a real allowance, so it names the models it spends rather than inheriting one. Tried in order, so a spent account does not silently stop the job."),
		account: M().optional().describe("Which account pays for it."),
		actsAs: J.optional().describe("Which persona it speaks as. An unwatched turn naming none reaches no signed-in account at all."),
		senders: ug.optional().describe("Who may talk to it, and as whom: rules by sender id or group, each naming the persona those people get, plus what everyone else gets. Absent admits everyone the trigger's filters do."),
		requireApproval: F().optional().describe("Hold every fire for a person instead of running it. Only a person can release one of those."),
		holdForSeconds: P().optional().describe("Hold each fire this long before running it anyway, which is a delay rather than a decision."),
		chore: F().optional().describe("This automation is a maintenance job, which is what files it under chores rather than among ordinary automations."),
		enabled: F().describe("Whether it fires at all.")
	}), fg = L({
		id: J.describe("This waiting item's own id, which approving and rejecting take."),
		automationId: M().describe("Which automation it came from."),
		payload: M().optional().describe("What set it off, kept whole so an approved wake carries the same thing it would have had. Absent for one on a schedule, which carries nothing."),
		origin: hd.optional().describe("Where the message came from, kept alongside the payload so an approved wake appears on the board exactly as an automatic one would have."),
		title: M().optional().describe("What the conversation would be called."),
		conversationId: M().optional().describe("The thread this belongs to, when it has one, so approving continues that conversation rather than opening a new one. Without it, one visitor's chat becomes a card per approved message and an agent that meets them again every turn."),
		sessionId: M().optional().describe("The provider session that thread last ran on."),
		thread: M().optional().describe("Which inbound thread this belongs to, so the approved run continues that thread's memory rather than a fresh one."),
		actsAs: J.optional().describe("Which persona the approved run speaks as, decided when it was held."),
		createdAt: P().describe("When it started waiting, in milliseconds."),
		autoRunAt: P().optional().describe("When it goes ahead on its own, in milliseconds, for a hold that is only a delay. Absent for one that genuinely waits on a person.")
	}), pg = L({
		agents: I(Qp).describe("The conversations."),
		rev: P().describe("Which version of the fleet this is. The fleet is published as whole snapshots, so without a version a list read before a change but delivered after it would silently undo that change. Drop any list older than the newest you have already applied."),
		held: I(fg).default([]).describe("Automations waiting at the door for a yes, put alongside the running conversations so needs-you sits beside working rather than on a page nobody opens.")
	}), mg = L({ approvals: I(fg).describe("Everything waiting for a yes.") }), hg = L({ id: M().describe("Which waiting item.") }), gg = L({
		at: P(),
		outcome: B([
			"completed",
			"skipped",
			"error",
			"interrupted"
		]),
		detail: M().optional(),
		conversationId: M().optional()
	}), _g = dg.extend({
		runs: I(gg),
		nextRun: P().optional(),
		webhookToken: M().optional().describe("What a caller presents at /automations/{id}/fire, for an event automation. Shown to a maintainer or the owner only."),
		ingestKey: M().optional().describe("What a client with no website origin presents to a bug intake. Shown to a maintainer or the owner only.")
	}), vg = L({ automations: I(_g) }), yg = L({
		id: M().describe("The sender id the service vouches for, what a rule stores."),
		name: M().describe("What they were called on their last message, for display only."),
		groups: I(M()).optional().describe("The group ids the service reported on their last message, a Discord role list."),
		firstSeenAt: P().describe("When they first reached an automation here, in milliseconds."),
		lastSeenAt: P().describe("When they last did, in milliseconds."),
		messages: P().describe("How many of their messages reached an automation's filters, admitted or not.")
	}), bg = L({ senders: I(yg).describe("Newest first.") }), xg = L({ provider: M().min(1).describe("Which listener source.") }), Sg = L({ id: M() }), Cg = L({
		id: M(),
		enabled: F()
	}), wg = L({
		label: M().min(1),
		placeholder: M().min(1),
		hint: M().min(1).optional()
	}), Tg = L({
		provider: M().min(1),
		label: M().min(1),
		logo: M().min(1).optional(),
		icon: M().min(1).optional(),
		events: I(L({
			value: M().min(1),
			label: M().min(1)
		})),
		channel: wg,
		branchField: wg.optional(),
		sender: wg.optional(),
		senderGroup: wg.optional(),
		mentionLabel: M().min(1).optional(),
		starterPrompt: M().min(1).optional(),
		requires: I(M().min(1)).default([]),
		enabled: F()
	}), Eg = B(["create", "configure"]), Dg = L({
		id: M().min(1),
		title: M().min(1),
		logo: M().min(1).optional(),
		icon: M().min(1).optional(),
		requires: I(M().min(1)).default([]),
		trigger: sg,
		guard: M().min(1).optional(),
		holdForSeconds: P().int().positive().optional(),
		prompt: M().min(1),
		note: M().min(1).optional(),
		setup: M().min(1).optional(),
		description: M().min(1).optional(),
		offer: Eg.optional(),
		chore: F().optional()
	}), Og = L({
		sources: I(Tg),
		templates: I(Dg)
	});
})), Ag, jg, Mg, Ng, Pg, Fg, Ig, Lg, Rg, zg, Bg, Vg, Hg = b((() => {
	G(), Y(), Ag = B(["github", "gitlab"]), jg = B([
		"queued",
		"running",
		"success",
		"failed",
		"canceled",
		"skipped"
	]), Mg = L({
		repo: M().describe("Which workspace repository it belongs to."),
		host: Ag.describe("Which forge is running it."),
		project: M().describe("The project there, as that forge names it."),
		runId: P().describe("The forge's own id for the run, which is what re-running and cancelling take."),
		title: M().optional().describe("The run's headline, usually the commit subject or the pull request's title. Absent means falling back to the branch and commit."),
		authorName: M().optional().describe("Who the forge credits for setting it off."),
		authorAvatarUrl: M().optional().describe("Their picture, hosted by the forge. Absent means drawing their initials instead."),
		trigger: M().optional().describe("What set it off, in the forge's own word rather than flattened into a shared vocabulary, because the forge's word is the precise one."),
		branch: M().describe("Which branch."),
		sha: M().describe("Which commit."),
		status: jg.describe("How it is going. Queued means the forge has accepted it and nothing is executing it yet, which is a different thing to wait on than a run actually in progress."),
		url: M().describe("Its page on the forge."),
		createdAt: P().describe("When it started, in milliseconds."),
		durationSeconds: P().optional().describe("How long it took."),
		failedJobs: I(M()).optional().describe("What broke, by name. Fetched only for failed runs, so that a notification or a screen can say what went wrong rather than just that something did.")
	}), Ng = L({
		name: M().describe("The job's name."),
		status: jg.describe("How it went."),
		stage: M().optional().describe("Which stage it belongs to, where the pipeline groups its jobs that way."),
		needs: I(M()).optional().describe("Which jobs in this run it declared it waits on: the real shape of the pipeline. Absent means nothing could be read, which is different from an empty list, which is the claim that it waits on nothing."),
		startedAt: P().optional().describe("When it began, in milliseconds. Absent while it is queued."),
		finishedAt: P().optional().describe("When it ended, in milliseconds."),
		durationSeconds: P().optional().describe("How long it took."),
		webUrl: M().optional().describe("Its page on the forge, which is the shortest path from this step failed to the log that says why.")
	}), Pg = L({ jobs: I(Ng).describe("The steps inside one run. Fetched separately from the run list, so that list stays cheap.") }), Fg = L({
		repo: M().describe("Which workspace repository."),
		host: Ag.describe("Which forge it lives on."),
		project: M().describe("The project there."),
		url: M().describe("Its page on the forge."),
		hookWarning: M().optional().describe("Present when the sandbox could not register for instant notifications, with what happened. Without them the sandbox polls instead, so this costs a couple of minutes' delay rather than the feature."),
		hookRecipe: M().optional().describe("What to paste into the repository's webhook settings by hand, secret included. Shown to a maintainer or the owner only.")
	}), Ig = L({
		repos: I(Fg).describe("Which workspace repositories are wired to a forge, and how each one's notifications are set up."),
		runs: I(Mg).describe("Runs across all of them, newest first.")
	}), Lg = L({
		repo: M().describe("Which workspace repository. The project behind it is resolved fresh each call, so a stale screen cannot act on one the workspace no longer maps to."),
		runId: P().describe("Which run, by the forge's own id.")
	}), Rg = Lg.extend({
		pick: Cd.describe("Which model to open the conversation on, when somebody chose one. Leave it out for the sandbox's own choice, which is the ordinary path."),
		mode: B(["continue", "start-over"]).optional().describe("What to do about the attempt already made at this run, when there is one. `continue` carries on in that conversation; `start-over` stops it if running, files it away, and opens the next attempt on a clean worktree. Leave it out for the plain press: an attempt that ended is continued, a fresh failure gets attempt 1, and one still in play answers CONFLICT with why."),
		force: F().optional().describe("Open the conversation even when every failed job died in its runner's own setup, which is the fleet's fault and nothing an agent on the code can repair. Left out, such a run is refused with that sentence.")
	}), zg = L({ conversationId: M().describe("The conversation that was opened, already holding the failure. Open it to watch, or attach to its turn.") }), Bg = B([
		"idle",
		"running",
		"passed",
		"failed",
		"error",
		"cancelled"
	]), Vg = L({
		status: Bg.describe("Where the run is. Failed and error are deliberately different: failed means the code is wrong, error means the command could not be run at all, and calling the second one a test failure would send an agent hunting a bug that is not there."),
		command: M().describe("What actually ran, echoed here rather than read back from the settings, so a result looked at after the setting changed still says what produced it."),
		startedAt: P().optional().describe("When it began, in milliseconds."),
		finishedAt: P().optional().describe("When it ended, in milliseconds."),
		exitCode: P().optional().describe("How the command exited."),
		timedOut: F().optional().describe("It was killed for taking too long rather than finishing."),
		session: M().optional().describe("The terminal it runs in, which is where to watch it. Absent where the sandbox has no terminals, in which case there is nothing to attach to."),
		output: M().describe("The end of what it printed, as plain text with the colour codes and redrawn progress lines resolved away. The end rather than the beginning, because a suite's verdict is at the end. Empty while it runs, and for one that was killed.")
	});
})), Ug, Wg, Gg, Kg, qg, Jg, Yg, Xg, Zg, Qg, $g, e_, t_, n_, r_, i_, a_, o_, s_, c_, l_, u_, d_, f_, p_, m_, h_, g_, __, v_, y_, b_, x_, S_, C_, w_, T_, E_, D_, O_, k_, A_ = b((() => {
	G(), Y(), wm(), Hg(), cd(), Q(), Ug = B([
		"staged",
		"unstaged",
		"conflicted"
	]), Wg = L({
		side: Ug.optional().describe("Narrow to one of the three lists a repository's changes split into. Leave it out for all of them, which is the whole repository."),
		origin: M().min(1).optional().describe("Narrow to the files one conversation landed. Leave it out for everyone's, including your own edits.")
	}), Gg = 1e3, Kg = I(M().min(1)).max(Gg).describe("Exactly these repository-relative paths. For anything bigger than a hand-picked selection, describe a scope instead."), qg = L({
		paths: Kg.optional(),
		scope: Wg.optional().describe("What to act on, described rather than listed, so it covers every matching file in the repository and not just the ones a list could hold.")
	}), Jg = { message: "name paths or a scope, not both" }, Yg = (e) => e.paths === void 0 || e.scope === void 0, Xg = Z.extend({
		message: M().min(1).describe("The commit message."),
		stage: qg.refine(Yg, Jg).optional().describe("What to stage before committing. Leave it out to record the index exactly as it stands; give it an empty object to stage everything first.")
	}), Zg = Z.extend(qg.shape).describe("What to throw away. Neither paths nor a scope discards every uncommitted change in the repository.").refine(Yg, Jg), Qg = Z.extend(qg.shape).describe("What to move across the index. Nothing on disk changes either way.").refine(Yg, Jg), $g = Z.extend({ branch: M().min(1).optional().describe("Which branch to push. Leave it out for the checked-out one. A branch with no upstream yet gets one set on this push.") }), e_ = B([
		"hook",
		"remote",
		"transport"
	]), t_ = Vg.extend({
		repo: M().describe("The repository this run is about, the same id the routes take."),
		reason: M().optional().describe("Why not, in git's own words: the last verdict line, for a row that has room for one line. The whole tail is `output`."),
		refusedBy: e_.optional().describe("Who refused a failed push: this repository's pre-push hook (the code is wrong, a fix is worth proposing), the remote (pull first), or the transport (credentials, network: retry). Absent while it runs and for a push that went.")
	}), n_ = Z.extend({ path: M().min(1).describe("The file to read, relative to the repository root.") }), r_ = Z.extend({
		path: M().min(1).describe("Where to write, relative to the repository root. Missing folders are created."),
		content: M().describe("The file's whole new contents.")
	}), i_ = Z.extend({
		path: M().min(1).describe("The file, relative to the repository root."),
		side: Ug.describe("Which comparison you want. A file that is staged and then edited again has genuinely different answers for each, which is why this is required rather than assumed.")
	}), a_ = L({
		branch: M().describe("The checked-out branch."),
		dirty: F().describe("Whether anything is uncommitted."),
		files: I(M()).describe("Every path with something pending, staged or not.")
	}), o_ = L({ files: I(M()).describe("Every path git tracks, relative to the repository root. Ignored and untracked files are not here.") }), s_ = L({
		path: M().describe("The path, as asked for."),
		content: M().describe("The file's contents as they stand on disk.")
	}), L({ repo: M().min(1).describe("Which repository.") }).extend(qg.shape).refine(Yg, Jg), c_ = L({
		path: M().describe("The path, relative to the repository root. For a rename this is the new one."),
		status: B([
			"added",
			"modified",
			"deleted",
			"renamed",
			"type-changed",
			"conflicted"
		]).describe("What happened to it. Conflicted is not a kind of edit: nothing can be committed anywhere in the repository while one exists."),
		from: M().optional().describe("Where a renamed file came from."),
		additions: P().optional().describe("Lines added. Absent for a binary file, and for an untracked one, which has nothing to compare against."),
		deletions: P().optional().describe("Lines removed. Absent for the same reasons additions is."),
		code: L({
			additions: P(),
			deletions: P()
		}).optional().describe("The same +/− with every comment stripped from both sides, which is what a review shows beside a diff that opens on code alone. Absent when the file cannot be read that way (binary, too large, or a language this build ships no grammar for): git's own counts above are then the reading.")
	}), l_ = L({
		remote: M().optional().describe("The remote this branch pushes to. Absent means none is configured. In a fork with two remotes, pushing to the wrong one succeeds and leaves the count stuck, which is why this says which."),
		branch: M().optional().describe("The checked-out branch. Absent when the repository is on a bare commit, or has no commits yet."),
		upstream: M().optional().describe("The branch on the remote this one follows. Absent means the next push will publish it."),
		ahead: P().describe("Commits you have that the remote does not."),
		behind: P().describe("Commits the remote has that you do not, as of the last fetch. Fetch before trusting it.")
	}), u_ = L({
		name: M().describe("The branch name."),
		current: F().describe("Whether this is the one checked out."),
		upstream: M().optional().describe("The branch on the remote it follows, if any."),
		ahead: P().describe("Commits this branch has that its remote counterpart does not."),
		behind: P().describe("Commits its remote counterpart has that it does not."),
		gone: F().optional().describe("The branch it followed no longer exists on the remote, usually because a merged pull request deleted it. The signal that this one is safe to delete."),
		at: P().describe("When its tip was committed, in milliseconds. Lists are newest first.")
	}), d_ = L({
		name: M().describe("The full name, such as origin/main."),
		remote: M().describe("Just the remote part, so a picker can group by it without re-parsing."),
		branch: M().describe("Just the branch part."),
		at: P().describe("When its tip was committed, in milliseconds, as this repository last saw it.")
	}), f_ = L({
		branches: I(u_).describe("Branches in this repository."),
		remotes: I(d_).describe("Branches on its remotes, as last seen. Sent together with the locals so a switcher never draws a half-filled list.")
	}), p_ = Z.extend({
		name: od.describe("The new branch's name."),
		start: M().min(1).optional().describe("Where to start it: a commit or another branch. Leave it out to start from where you are."),
		checkout: F().optional().describe("Switch to it as well as creating it.")
	}), m_ = Z.extend({
		name: od.describe("The branch to delete."),
		force: F().optional().describe("Delete it even though it holds work that was never merged. The deliberate retry after the first attempt refuses.")
	}), h_ = B([
		"merge",
		"rebase",
		"cherry-pick",
		"revert"
	]), g_ = L({
		repo: M().describe("The repository asked about."),
		operation: h_.optional().describe("Which operation the working tree is stuck inside. Absent means it is not stuck at all, which is almost always. While one is present git refuses nearly everything else, and abandoning it is the only way out.")
	}), __ = L({
		repo: M(),
		branch: M().optional().describe("The checked-out branch. Absent in a repository that has no commits yet."),
		conflicted: I(c_).describe("Paths a merge or rebase could not finish. First, because nothing anywhere in this repository can be committed until they are resolved. Held apart from the two lists below, because staged or not is not a question one of these has an answer to."),
		operation: h_.optional().describe("What halted, when something did. This is the sentence that explains the conflicts above and names the way out of them."),
		staged: I(c_).describe("What a plain commit would record right now."),
		unstaged: I(c_).describe("Edits on disk that are not staged, plus untracked files. A path can be in both lists at once with different line counts, which is why they are separate."),
		truncated: L({
			staged: P().describe("Staged changes not listed above."),
			unstaged: P().describe("Unstaged changes not listed above.")
		}).optional().describe("How many changes were cut from each of the two lists above. A freshly cloned monorepo or a mass delete runs to six figures, which no screen can draw, so past a budget the lists arrive short and this says by how much on each side. Absent means they are complete."),
		remote: l_.optional().describe("Where this repository stands against its remote."),
		origins: z(M(), I(M())).optional().describe("Which conversation put each path here, newest first, keyed by path. Only work that went through a merge can appear: edits made in the shared tree, in a terminal, or by a person are simply absent rather than guessed at."),
		error: M().optional().describe("Why the repository could not be read at all, in git's own words. A repository left broken by a failed import arrives with empty lists and this set, rather than vanishing from the answer with nothing to act on.")
	}), v_ = L({
		title: M().optional().describe("The conversation's title. Absent for one that never got as far as having a title."),
		provider: ld.describe("Which model provider it ran on."),
		landedMessage: Jp.optional().describe("What the merged work did, drafted by the conversation itself. Carried here as well as on its card, because merged lines outlive the card: archiving a finished conversation does not uncommit its work.")
	}), y_ = L({
		repos: I(__).describe("One entry per repository that has something pending, is out of step with its remote, or could not be read. A clean repository is simply absent."),
		originAgents: z(M(), v_).optional().describe("Who each conversation named above is, keyed by id, so a caller need not look them up. Absent when nothing in the review can be attributed."),
		committing: I(M()).optional().describe("Repositories with a commit running right now. The sandbox's answer rather than any one tab's, so a reload, a second window and another device all know. Absent means nothing is committing.")
	}), b_ = L({
		committed: F().describe("Whether a commit was actually recorded."),
		changes: __.optional().describe("What this repository looks like now, read in the same breath as the commit so a caller can redraw from here instead of asking for a fresh scan. Absent means there is nothing left to show."),
		originAgents: z(M(), v_).optional().describe("Who the conversations named in those changes are. Merge it over what you already hold rather than replacing: other repositories still name their own.")
	}), x_ = L({
		dir: M().describe("Where the package lives, relative to its repository. Empty when the repository is itself one package."),
		name: M().describe("The name the package declares for itself.")
	}), S_ = L({
		repo: M().describe("Which repository."),
		modules: I(x_).describe("Its packages.")
	}), C_ = L({ repos: I(S_).describe("Every repository with the packages inside it.") }), w_ = c_.extend({ landed: F().describe("Whether your workspace already holds this content. Read from the tree at request time, not from what a land recorded: discard a landed file in the Changes panel and this goes back to false, which is what puts it back under Land now.") }), T_ = L({
		repo: M().describe("Which repository."),
		branch: M().optional().describe("The branch this conversation's work sits on."),
		changes: I(w_).describe("What it changed there."),
		modules: I(x_).describe("The packages of the tree these changes came from, so a review can group by package. Carried with the changes rather than looked up separately, because a package the conversation has just created exists only in its own copy and the shared tree has never heard of it.")
	}), E_ = L({
		repos: I(T_).describe("One entry per repository the conversation touched."),
		absorbed: P().describe("How many of this conversation's files your own history already carries, and which are therefore not listed as differences any more."),
		conflicts: I(ym).optional().describe("Why the last merge refused, when one did. Carried here as well as in the merge's own answer, because a conflict is found the moment a turn ends and dealt with hours later on this surface, which would otherwise open with nothing to explain what it promised to resolve.")
	}), D_ = L({
		sha: M().describe("The commit."),
		short: M().describe("Its abbreviated hash, which is what a reader recognises it by."),
		subject: M().describe("Its first line."),
		author: M().describe("Who committed it."),
		at: P().describe("When it was authored, in milliseconds."),
		changes: I(c_).describe("The conversation's files that this commit is the newest carrier of, as the conversation changed them. Every file appears under exactly one commit, so these counts add up to the work rather than over-counting a file that history touched twice.")
	}), O_ = L({
		repo: M().describe("Which repository."),
		commits: I(D_).describe("The commits carrying this conversation's work there, newest first."),
		modules: I(x_).describe("The packages of the tree these files came from, so a review can group them by package.")
	}), k_ = L({
		repos: I(O_).describe("One entry per repository holding committed work of this conversation."),
		unaccounted: P().describe("How many of the conversation's absorbed files none of these commits carries. Above zero means its content reached your main line by some other road, so the commits listed are not the whole story.")
	});
})), j_, M_ = b((() => {
	q(), xh(), wm(), kg(), A_(), zh(), Q(), j_ = {
		list: K.route({
			method: "GET",
			path: "/agents",
			summary: "Every live conversation",
			description: "The fleet as the board draws it: each conversation with its title, what it is doing, when it last moved and whether anybody has read it since. Archived conversations are not in here."
		}).output(pg),
		archived: K.route({
			method: "GET",
			path: "/agents/archived",
			summary: "Conversations put away",
			description: "The same shape as the live fleet, for the conversations somebody has decided are finished. Their work is kept, and any one of them can be brought back."
		}).output(pg),
		search: K.route({
			method: "GET",
			path: "/agents/search",
			summary: "Find a conversation",
			description: "Searches the live fleet and the archive together. Both halves on purpose: the board hides finished work by design, and a filter that says it found nothing while the answer sits one click away is simply wrong."
		}).input(om).output(um),
		get: K.route({
			method: "GET",
			path: "/agents/{id}",
			summary: "One conversation's card",
			description: "Everything the board shows for a single conversation: its title, state, working branch, unread marker and timestamps."
		}).input($p).output(Qp),
		transcript: K.route({
			method: "GET",
			path: "/agents/{id}/transcript",
			summary: "One page of a conversation",
			description: "The most recent turns of one conversation, in order, including the tool calls and their results: what the chat replays and the next turn is seeded from. A page, not the whole record — pass the answer's `from` back as `before` to walk further back, until `more` reads false."
		}).input(em).output(bh),
		place: K.route({
			method: "POST",
			path: "/agents/{id}/place",
			summary: "Put words in the agent's mouth",
			description: "Writes a line into the record as though the agent had said it, with no turn behind it and no reply. Human readers see it marked as placed. The next real turn starts fresh from the record, where the line reads as the agent's own. Refused while a turn is running."
		}).input(fm).output(X),
		rename: K.route({
			method: "POST",
			path: "/agents/{id}/rename",
			summary: "Retitle a conversation",
			description: "Sets the title a person chose, replacing the one that was generated. Allowed while the conversation is working, and it does not count as activity."
		}).input(dm).output(Qp),
		autoLand: K.route({
			method: "POST",
			path: "/agents/{id}/auto-land",
			summary: "Whether this conversation merges its work automatically",
			description: "Overrides the sandbox-wide setting for one conversation; clear it to go back to following the default. Deliberately allowed mid-turn, because the setting is read when the turn finishes, so flipping it while the agent works means exactly hold this piece of work for review."
		}).input(pm).output(Qp),
		resumeAfterOutage: K.route({
			method: "POST",
			path: "/agents/{id}/resume-after-outage",
			summary: "Whether this conversation retries after a provider outage",
			description: "Overrides the sandbox-wide setting for one conversation; clear it to follow the default again. This is what the offer shown when a turn dies writes, because the press happens inside one conversation and honestly means finish this piece of work."
		}).input(mm).output(Qp),
		resumeAfterLimit: K.route({
			method: "POST",
			path: "/agents/{id}/resume-after-limit",
			summary: "Whether this conversation sends itself again when its allowance comes back",
			description: "Overrides the sandbox-wide setting for one conversation; clear it to follow the default again. Off unless asked for, because the allowance is the user's own budget and a turn that spends it the moment it reopens is not a decision to make on their behalf."
		}).input(hm).output(Qp),
		moveAfterLimit: K.route({
			method: "POST",
			path: "/agents/{id}/move-after-limit",
			summary: "Whether this conversation moves to another account when its allowance is spent",
			description: "Overrides the sandbox-wide setting for one conversation; clear it to follow the default again. A move spends a second account of the same provider on this conversation's behalf, so it is off unless asked for."
		}).input(gm).output(Qp),
		seen: K.route({
			method: "POST",
			path: "/agents/{id}/seen",
			summary: "Mark a conversation read",
			description: "Stamps the read marker behind the unread badge on one card. Allowed while the conversation is working, and reading never counts as activity."
		}).input($p).output(Qp),
		stopWatching: K.route({
			method: "POST",
			path: "/agents/{id}/stop-watching",
			summary: "Stop every condition watch a conversation is parked on",
			description: "Disarms all of this conversation's outside-condition watches, so none of them will wake it. All of them rather than one, because that is what the press means when it is made about a card. Nothing else about the conversation changes."
		}).input($p).output(Qp),
		seenAll: K.route({
			method: "POST",
			path: "/agents/seen",
			summary: "Mark every conversation read",
			description: "Clears the unread badge across the whole fleet at once, and hands the refreshed list back."
		}).output(pg),
		diff: K.route({
			method: "GET",
			path: "/agents/{id}/diff",
			summary: "Everything a conversation has changed",
			description: "One flat set of changed files per repo, measured against where each repo stood when the conversation started, with every file flagged as already merged or not. Not the staged-and-unstaged shape a working copy has, because nobody ever checks this branch out to stage into it."
		}).input($p).output(E_),
		history: K.route({
			method: "GET",
			path: "/agents/{id}/history",
			summary: "Where a conversation's committed work lives",
			description: "The commits in your own history that carry this conversation's work, with the files each one brought. Use it when the change list is empty or short because you already committed what it wrote: those files are not differences against the main line any more, so they are not in the review, and this is where they went."
		}).input($p).output(k_),
		fileDiff: K.route({
			method: "GET",
			path: "/agents/{id}/{repo}/file-diff",
			summary: "One file's before and after in a conversation's work",
			description: "Both sides of a single file: what it held when the conversation started and what it holds on its branch now."
		}).input(_m).output(Rh),
		land: K.route({
			method: "POST",
			path: "/agents/{id}/land",
			summary: "Merge a conversation's work into the workspace",
			description: "Brings the conversation's branches into the main tree, one repo at a time. A conflict is reported rather than raised and nothing is lost when it fails. Refused while a turn is running, and refused for a conversation that works directly in the shared tree, which has nothing to merge."
		}).input(Cm).output(bm),
		requestLand: K.route({
			method: "POST",
			path: "/agents/{id}/request-land",
			summary: "Ask a maintainer to merge this work",
			description: "For a collaborator who is not allowed to merge: marks the conversation as waiting for review, with who asked. The request shows on every maintainer's board and clears when somebody merges or discards it."
		}).input($p).output(Qp),
		discard: K.route({
			method: "POST",
			path: "/agents/{id}/discard",
			summary: "Throw a conversation's work away",
			description: "Deletes the conversation's working copies, its branches and its entry. Nothing is kept. Refused while a turn is running, and refused for a conversation working in the shared tree."
		}).input($p).output(X),
		archive: K.route({
			method: "POST",
			path: "/agents/archive",
			summary: "Put conversations away",
			description: "The gentle counterpart to discarding. Commits whatever the conversation still has in progress onto its own branch, releases its working copy, and keeps the entry and the record. It leaves the live fleet and joins the archive. Refused for a conversation that is running."
		}).input(tm).output(im),
		unarchive: K.route({
			method: "POST",
			path: "/agents/unarchive",
			summary: "Bring conversations back",
			description: "Returns archived conversations to the live fleet. The next turn picks up a fresh working copy from the branch that was kept."
		}).input(nm).output(rm),
		purge: K.route({
			method: "POST",
			path: "/agents/purge",
			summary: "Empty the archive for good",
			description: "Discards every conversation already in the archive: working copies, branches and entries. The whole archive rather than a chosen few, because the archive is the pile somebody has already decided is over. A teardown that fails on one conversation leaves that one behind instead of taking the rest down with it."
		}).output(am)
	};
})), N_, P_, F_, I_, L_, R_, z_, B_, V_, H_, U_ = b((() => {
	G(), cd(), B(["post", "action"]), N_ = B([
		"proposed",
		"approved",
		"running",
		"done",
		"failed"
	]), P_ = {
		actsAs: J.optional().describe("Whose name it acts under. Needed for anything that requires being logged in, because an unwatched turn naming nobody is allowed no account at all. Never guessed: one site can be connected five times over, and picking for you means picking wrong in public with no undo."),
		scheduledAt: P().optional().describe("When it should happen, in milliseconds. An agent may propose without one and you set it when approving; an approved item with no time goes after a short countdown you can still stop."),
		status: N_.default("proposed").describe("Where it is: proposed by the agent, approved by you, being carried out, done, or failed. Rejecting is deleting it; retrying is approving a failed one again."),
		createdAt: P().optional().describe("When it was written, in milliseconds."),
		startedAt: P().optional().describe("When it started being carried out, in milliseconds. Needed to tell a run that is under way from one whose turn died mid-flight, which the scheduled time cannot."),
		finishedAt: P().optional().describe("When it was done, in milliseconds."),
		result: M().optional().describe("What came back, when something did: the post's own address, a confirmation number. The one thing a finished item can offer that reading it cannot."),
		error: M().optional().describe("Why it failed, written as a sentence for a person to read rather than as a code.")
	}, F_ = L({
		kind: V("post").describe("A post to publish somewhere."),
		platform: M().min(1).describe("Where it should go. A plain name, so a new site needs no change here; an unknown one simply fails when it tries to post."),
		content: M().min(1).describe("The post itself."),
		title: M().optional().describe("A title, where the site wants one."),
		target: M().optional().describe("Where on the site: a community, a channel. Or the address of the thing this replies to, in which case it is a reply, and on some sites the difference between a thread's address and one comment's is the difference between talking to the room and answering the person."),
		media: I(M()).optional().describe("Anything to attach, as workspace paths."),
		...P_
	}), I_ = L({
		kind: V("action").describe("Something the agent will do once you say so."),
		summary: M().min(1).max(200).describe("What will happen, in one line: the row's headline and the confirm dialog's item."),
		details: M().optional().describe("The specifics, as Markdown: everything you would want to see before saying yes."),
		instructions: M().min(1).describe("What to do once approved, written for the fresh turn that will do it: names, ids and steps, since it has none of this conversation."),
		...P_
	}), R("kind", [F_, I_]), L_ = { id: J.describe("The approval's id.") }, R_ = F_.extend(L_), z_ = I_.extend(L_), B_ = R("kind", [R_, z_]), V_ = L({
		approvals: I(B_).describe("The queue."),
		invalid: I(M()).describe("Files that could not be read at all, or name a kind this daemon does not know. Listed rather than skipped, because an agent writes these files directly and a malformed one would otherwise never run and never say why.")
	}), H_ = L({ id: J.describe("Which approval.") });
})), W_, G_ = b((() => {
	q(), U_(), Q(), W_ = {
		list: K.route({
			method: "GET",
			path: "/approvals",
			summary: "Things waiting for your yes",
			description: "Everything an agent has prepared and would like to do: posts to publish, actions to carry out. Nothing here has happened yet."
		}).output(V_),
		upsert: K.route({
			method: "POST",
			path: "/approvals",
			summary: "Approve, edit or retry one",
			description: "All three are the same act with a different field changed, so they share one call. Send the item back as you want it."
		}).input(B_).output(X),
		remove: K.route({
			method: "DELETE",
			path: "/approvals/{id}",
			summary: "Reject one",
			description: "Throws it away undone."
		}).input(H_).output(X)
	};
})), K_, q_ = b((() => {
	q(), kg(), Q(), K_ = {
		list: K.route({
			method: "GET",
			path: "/automations",
			summary: "Things that wake an agent on their own",
			description: "Every automation with its recent runs and when it fires next."
		}).output(vg),
		catalog: K.route({
			method: "GET",
			path: "/automations/catalog",
			summary: "What can trigger an automation here",
			description: "Every trigger this sandbox understands and every template worth starting from, the daemon's own merged with each installed extension's. Writing an automation is checked against this same list, so a screen and the daemon can never disagree about what is allowed."
		}).output(Og),
		upsert: K.route({
			method: "POST",
			path: "/automations",
			summary: "Create or edit an automation",
			description: "Writes an automation by id. Nothing needs provisioning: the scheduler picks it up on its next sweep."
		}).input(dg).output(X),
		setEnabled: K.route({
			method: "POST",
			path: "/automations/{id}/enabled",
			summary: "Turn an automation on or off",
			description: "Flips only the switch, so a row in a list can be toggled without rebuilding the whole record."
		}).input(Cg).output(X),
		remove: K.route({
			method: "DELETE",
			path: "/automations/{id}",
			summary: "Delete an automation",
			description: "Removes it, so nothing fires from it again."
		}).input(Sg).output(X),
		rotateToken: K.route({
			method: "POST",
			path: "/automations/{id}/rotate-token",
			summary: "Rotate an automation's webhook token or intake key",
			description: "Mints a new credential for the door this automation opens and retires the old one at once. Every caller has to be handed the new URL; that is the point. Refused for an automation with no door."
		}).input(Sg).output(uf),
		run: K.route({
			method: "POST",
			path: "/automations/{id}/run",
			summary: "Fire an automation by hand",
			description: "The answer to writing something that runs at three in the morning and having no way to try it. It takes exactly the path the real trigger takes, including the check that decides whether there was anything to do, since skipped by the guard is the most useful thing this can tell you. A switched-off automation fires too, because trying it before switching it on is the main reason to press this. Not available for the trigger that listens for incoming messages, where a hand-fire would produce an agent asked to handle events and handed none; send the bot a message instead. Answers straight away and runs detached."
		}).input(Sg).output(X),
		senders: K.route({
			method: "GET",
			path: "/automations/senders/{provider}",
			summary: "Who has written to a listener source",
			description: "Everyone whose message reached one of this source's automations, newest first, admitted or not. What the sender rules picker offers by name while storing the id the service vouches for."
		}).input(xg).output(bg),
		pendingList: K.route({
			method: "GET",
			path: "/automations/pending",
			summary: "Automations waiting for a yes",
			description: "The queue an automation set to ask first lands in each time it would have fired."
		}).output(mg),
		approve: K.route({
			method: "POST",
			path: "/automations/pending/{id}/approve",
			summary: "Let a held automation run",
			description: "Releases one waiting automation and runs the wake it was holding. Answers straight away and runs detached."
		}).input(hg).output(X),
		reject: K.route({
			method: "POST",
			path: "/automations/pending/{id}/reject",
			summary: "Drop a held automation",
			description: "Throws one waiting fire away. The automation stays on, and the next trigger queues as usual."
		}).input(hg).output(X)
	};
})), J_, Y_, X_, Z_, Q_, $_, ev, tv, nv, rv, iv, av, ov, sv, cv, lv, uv, dv, fv, pv, mv, hv, gv, _v, vv, yv, bv = b((() => {
	G(), Y(), J_ = L({ agent: md.optional().describe("Read a conversation's own private copy of the workspace rather than the shared tree. Leave it out for the shared tree. A conversation that is not working privately resolves back to the shared tree rather than failing, so a link need not know which mode it runs in.") }), Y_ = L({
		to: M().describe("What the link says, verbatim, rather than where it ends up. That is what the person who made it wrote, and what they would edit."),
		state: B(["broken", "outside"]).optional().describe("Absent for an ordinary link. Broken means there is nothing at the other end, and it is listed anyway because a dangling link is worth seeing. Outside means it leads out of the workspace, so it is shown and refused.")
	}), X_ = L({
		name: M().describe("Just this entry's own name."),
		path: M().describe("Its full path from the workspace root, which feeds straight back into the file routes."),
		type: B(["file", "dir"]).describe("What it is. For a link, what it points at, so a link to a folder opens like a folder."),
		size: P().optional().describe("Size in bytes, for a file."),
		ignored: F().optional().describe("Tooling ignores it: installed packages, git internals, anything the ignore rules exclude. Usually drawn greyed out."),
		link: Y_.optional().describe("Present when this entry is a link."),
		get children() {
			return I(X_).optional().describe("What is inside a folder. Absent means it was not opened, either because it is ignored or because the walk ran out of budget above it, so ask for it separately. An empty list means it really is empty.");
		}
	}), Z_ = L({
		root: M().describe("The path everything below is relative to."),
		tree: I(X_).describe("The workspace, one entry per file and folder."),
		hidden: P().describe("How many entries at the top level were cut for size. Zero means the listing is complete."),
		barren: I(M()).describe("Folders whose whole contents are empty folders, and nothing else. Complete for the workspace, however much of the tree above was listed, and ordered like the tree, so a parent comes before the branch below it.")
	}), Q_ = J_.extend({
		path: M().min(1).describe("The folder to open, as a workspace path."),
		depth: W().int().min(1).max(5).optional().describe("How many levels to include. Omitted means direct children only; at most five levels can be read in one request.")
	}), $_ = L({
		entries: I(X_).describe("What is inside it, as a flat list. With the default depth these are direct children; a deeper request also includes descendants, whose full paths say where they belong. Folders carry no nested contents of their own."),
		hidden: P().describe("How many entries were cut for size. Zero means the listing is complete.")
	}), ev = L({ path: M().min(1).describe("The file or folder, as a workspace path.") }), tv = J_.extend({ path: M().min(1).describe("The media file the ticket should cover.") }), nv = L({
		ticket: M().describe("Hand this to the streaming route in the query string. It buys exactly the one file it was minted for."),
		expiresAt: P().describe("When it stops working, in milliseconds, so a player can tell a dead ticket from a dead file.")
	}), rv = J_.extend({
		path: M().min(1).describe("The file to read, as a workspace path."),
		offset: W().int().optional().describe("Which byte to start at. A negative number reads that many bytes from the end, which is how you follow a growing log without knowing its size first."),
		limit: W().int().min(1).optional().describe("How many bytes to read. Capped by the sandbox, so leaving it out or asking for too much gives you the cap rather than the whole file.")
	}), iv = L({
		present: V(!0).describe("There is something at that path."),
		path: M().describe("The path, as asked for."),
		content: M().describe("The bytes of the window you asked for, as text."),
		size: P().describe("How large the whole file is. Compare it with the window below to know whether there is more."),
		offset: P().describe("Which byte the window starts at."),
		bytes: P().describe("How many bytes the window holds."),
		shared: F().describe("Which tree answered. True when no conversation was named, and also when one was but its own copy has no such file, which is the case a reader has to be told about rather than left to assume.")
	}), av = L({
		present: V(!1).describe("Nothing there. An answer, not a failure: reading a file that may not exist yet is the ordinary case for half the reads in this product."),
		path: M().describe("The path, as asked for.")
	}), ov = R("present", [iv, av]), sv = L({ path: M().min(1).describe("The file you want the text of, as a workspace path. The real file, not its shadow: where the text is kept is this route's business.") }), cv = L({
		enabled: F().describe("Whether the background pass is on (the `sidecars` setting). Off means a shadow exists only where someone asked for one."),
		queued: P().describe("Files waiting for a shadow, not counting the batch being rendered right now."),
		deriving: I(M()).describe("The files being rendered at this moment, as workspace paths. One batch at a time, because derivation shares the box with the agent it serves."),
		sweeping: F().describe("Whether a whole-tree pass is running, which is what a freshly enabled setting or an unlistably large batch triggers."),
		broken: F().describe("Whether the `fileq` binary is missing, in which case nothing renders in the background until this sandbox restarts."),
		shadows: P().optional().describe("How many shadows the last whole-tree pass counted. Absent until one has run in this daemon's lifetime."),
		sweptAt: M().optional().describe("When that pass finished, as an ISO timestamp.")
	}), lv = B([
		"off",
		"queued",
		"deriving",
		"idle",
		"broken",
		"undeliverable"
	]), uv = {
		state: lv.describe("Where this file stands with the background pass: switched off, waiting its turn, being read right now, settled, or unreachable because the renderer is missing. `undeliverable` is a format nothing here reads."),
		queue: cv.describe("How the background pass as a whole is doing, so a wait can be reported as a queue rather than as nothing happening.")
	}, dv = L({
		...uv,
		present: V(!0).describe("There is derived text for that file."),
		path: M().describe("The file it was derived from, as asked for."),
		content: M().describe("The text itself, as markdown."),
		deriver: M().describe("Which reader wrote it, and at which version, such as `pdf+ocr v1`. A file re-derives when this changes."),
		derivedAt: M().optional().describe("When it was written, as an ISO timestamp. Absent only for a shadow whose front matter was edited by hand."),
		title: M().optional().describe("The title the format carried, where it carried one."),
		notes: I(M()).describe("Every cap and degradation the derivation hit: a sheet cut to 200 rows, a book cut at 2 MB, a scan recognised rather than read. Show these with the text, since text that was cut reading as complete is the one failure this whole feature cannot afford."),
		tokens: P().describe("Roughly what an agent spends reading it, by the same four-chars-a-token estimate every budget here uses."),
		truncated: F().describe("Whether this is only the start of the shadow, cut to keep the response sendable. The file on disk holds the rest."),
		stale: F().describe("Whether the file has changed since this text was derived, compared by content rather than by clock. True means you are reading a rendering of an older version of the file, and deriving it again catches it up.")
	}), fv = L({
		...uv,
		present: V(!1).describe("There is no derived text for that file. Read `state` before saying so to anyone: absent and queued are different answers."),
		path: M().describe("The file, as asked for."),
		derivable: F().describe("Whether this format can be turned into text at all. True means asking for it to be derived is worth offering; false means nothing here reads this format."),
		reason: M().optional().describe("Why there is none, when deriving was just attempted and produced nothing: the file is too large, corrupt, or of a format no reader claims.")
	}), pv = R("present", [dv, fv]), mv = J_.extend({ path: M().min(1).max(512).describe("The reference as somebody wrote it. Often only the tail of the real path, which is why this is matched against the tree rather than read as-is.") }), hv = L({ path: M().optional().describe("The real path it means. Absent when nothing in the workspace ends that way.") }), gv = L({ path: M().min(1).describe("The folder to create. Missing folders above it are created too.") }), _v = L({
		from: M().min(1).describe("What to move or copy, as a workspace path."),
		to: M().min(1).describe("Where it should end up. Changing only the last part is how you rename something.")
	}), vv = B([
		"repositories",
		"documents",
		"media",
		"archives",
		"other"
	]), yv = L({ classifications: I(L({
		path: M().describe("What was looked at."),
		bucket: vv.describe("Which bucket it was sorted into."),
		reason: M().describe("The signal that decided it, so the proposal can be argued with rather than trusted.")
	})).describe("One entry per repository folder and loose file at the top of the workspace. A read-only proposal: nothing moves until you apply it.") });
})), xv, Sv, Cv, wv, Tv, Ev, Dv, Ov, kv, Av, jv, Mv, Nv, Pv, Fv, Iv, Lv, Rv = b((() => {
	G(), wm(), Vd(), Q(), bv(), xv = lc({ kind: M() }), Sv = L({
		kind: V("heartbeat"),
		rev: P()
	}), Cv = L({
		key: M(),
		label: M(),
		state: B([
			"pending",
			"running",
			"done",
			"failed"
		]),
		ms: P().optional()
	}), wv = L({
		ready: F(),
		startedAt: P(),
		steps: I(Cv)
	}), Tv = L({
		kind: V("boot"),
		...wv.shape
	}), Ev = L({
		kind: V("hello"),
		workspaceId: M(),
		routes: I(M()).optional(),
		shapes: z(M(), M()).optional(),
		build: M().optional(),
		boot: wv.optional()
	}), Dv = L({
		kind: V("reposChanged"),
		repos: I(M())
	}), Ov = L({
		kind: V("workspaceChanged"),
		paths: I(M())
	}), kv = L({
		kind: V("derivedChanged"),
		paths: I(M()),
		queue: cv
	}), Av = L({
		kind: V("refsChanged"),
		repos: I(M())
	}), jv = L({
		kind: V("runtimeChanged"),
		domains: I(M())
	}), Mv = L({
		clientId: M(),
		email: M(),
		name: M().optional(),
		picture: M().optional(),
		role: lf,
		idle: F(),
		view: M().optional(),
		sessionId: M().optional(),
		path: M().optional()
	}), Nv = L({
		kind: V("presence"),
		users: I(Mv)
	}), Pv = L({
		kind: V("agents"),
		agents: I(Qp),
		rev: P()
	}), Fv = L({
		kind: V("accountUsage"),
		provider: M(),
		account: M(),
		usage: kd.optional()
	}), Iv = L({
		kind: V("providerRefusal"),
		provider: M(),
		refusal: Md.optional()
	}), Lv = R("kind", [
		Ev,
		Sv,
		Tv,
		Ov,
		kv,
		Dv,
		Av,
		jv,
		Nv,
		Pv,
		Fv,
		Iv
	]);
})), zv, Bv, Vv, Hv, Uv, Wv, Gv, Kv, qv, Jv, Yv, Xv, Zv, Qv, $v = b((() => {
	G(), cd(), zv = B([
		"tor",
		"vpngate",
		"wireguard"
	]), Bv = M().regex(/^[A-Za-z]{2}$/, "A country is its two-letter code, like DE, US or JP.").transform((e) => e.toUpperCase()), Vv = L({
		provider: V("tor"),
		country: Bv.optional(),
		autoStart: sd
	}), Hv = L({
		provider: V("vpngate"),
		country: Bv.optional(),
		autoStart: sd
	}), Uv = L({
		provider: V("wireguard"),
		config: M().min(1),
		country: Bv.optional(),
		autoStart: sd
	}), Wv = R("provider", [
		Vv,
		Hv,
		Uv
	]), Gv = B([
		"up",
		"starting",
		"down",
		"unavailable",
		"failed"
	]), Kv = L({
		ip: M().describe("The address the world sees, looked up through the exit's own proxy rather than assumed."),
		country: M().optional().describe("Which country that address is in. Absent when the lookup gave an address and no country, in which case a switch is judged on the address having changed instead."),
		countryName: M().optional().describe("That country's name, spelled out.")
	}), qv = L({
		country: M().describe("The country's code."),
		countryName: M().describe("Its name, spelled out."),
		servers: P().describe("How many servers this provider has there."),
		share: P().optional().describe("How much of the provider's actual capacity is there, from zero to one. This is what a list should be sorted by: a third of the countries on offer are one overloaded machine behind a flag, and a count of servers would rank them first.")
	}), Jv = L({
		countries: I(qv).describe("Where this exit can put you, best-supplied first."),
		live: F().describe("Whether the provider answered, or this came from a built-in list. Said out loud rather than presenting an old list as current.")
	}), Yv = L({
		id: M().describe("Which exit."),
		provider: zv.describe("What it runs on."),
		state: Gv.describe("Whether it is carrying traffic, coming up, resting, failed, or not installable yet because its client needs a rebuild to arrive."),
		proxy: M().describe("Where to point traffic that should go through it. Fixed per exit and unchanged by a country switch, which is what lets a long job move country halfway through without reconfiguring anything."),
		country: M().optional().describe("Where it was asked to come out. Absent means the provider chose."),
		observedCountry: M().optional().describe("Where it actually comes out, as last checked. Kept separate from what was asked for, because those two disagreeing is the most useful fault signal this whole feature has."),
		ip: M().optional().describe("The address behind that observation."),
		checkedAt: P().optional().describe("When that was checked, in milliseconds, so an old reading can be shown as old."),
		interface: M().optional().describe("The network interface, for the kinds that have one."),
		since: P().optional().describe("When it came up, in milliseconds."),
		autoStart: F().describe("Whether it starts itself when the sandbox does."),
		detail: M().optional().describe("Why it failed, or a note about a healthy one.")
	}), Xv = L({ links: I(Yv).describe("Every configured exit, with where it was asked to come out and where it actually does.") }), Zv = L({ id: M().describe("Which exit.") }), Qv = L({
		id: M().describe("Which exit."),
		country: Bv.optional().describe("Where to come out. Leaving it out means letting the provider choose, so clearing a country is something you can actually say rather than only setting one.")
	});
})), ey, ty, ny, ry, iy, ay, oy, sy, cy, ly, uy, dy, fy = b((() => {
	G(), ey = B([
		"host",
		"cloudflare",
		"github",
		"gitlab",
		"stripe"
	]), ty = B([
		"signoz",
		"outline",
		"paperless",
		"openproject",
		"invoiceninja",
		"infisical"
	]), ny = z(M(), uc([M(), P()])), ry = /^[a-zA-Z_][a-zA-Z0-9_]*$/, iy = M().min(1).max(60).regex(ry), ay = L({
		kind: V("backend").describe("Something you already have: a machine, an account with a hosting provider."),
		provider: ey.describe("Which provider it is with."),
		name: M().describe("What to call it, which is also how everything else refers to it."),
		values: ny.describe("Its settings. Anything secret is stored separately and referred to here, never written in.")
	}), oy = L({
		kind: V("service").describe("Something you want provisioned."),
		service: ty.describe("Which service."),
		name: M().describe("What to call it."),
		values: ny.describe("Its settings."),
		on: M().describe("Which of your machines to put it on."),
		expose: M().describe("How it should be reachable.")
	}), sy = L({
		kind: V("app").describe("An app of your own, built from source and deployed."),
		name: M().describe("What to call it."),
		values: ny.describe("Its settings, including the address it should answer on."),
		on: M().describe("Which of your machines to put it on."),
		expose: M().describe("How it should be reachable.")
	}), cy = R("kind", [
		ay,
		oy,
		sy
	]), ly = R("kind", [
		ay.extend({ name: iy }),
		oy.extend({ name: iy }),
		sy.extend({ name: iy })
	]), uy = L({ name: M().describe("Which entry, by name.") }), dy = L({ entries: I(cy).describe("Everything declared: what you have, and what you want provisioned.") }), L({
		name: iy,
		user: M().min(1),
		address: M().min(1),
		port: W().default(22),
		via: B(["direct", "cloudflared"]).default("cloudflared"),
		sshKey: M().min(1),
		cfToken: M().optional(),
		cfZone: M().optional()
	});
})), py, my, hy, gy, _y, vy, yy, by, xy, Sy, Cy, wy, Ty, Ey, Dy, Oy, ky = b((() => {
	G(), py = B([
		"wireguard",
		"fortinet",
		"ipsec"
	]), my = B(["on", "off"]).default("on"), hy = (e) => /^Enc[X]?\s+[0-9A-Fa-f]{8,}$/.test(e.trim()), gy = (e, t) => e.refine((e) => !hy(e), { message: `That looks like a value copied straight out of a FortiClient config, FortiClient encrypts it with a key tied to the machine that exported it, so it can't be used here. Enter the actual ${t} (ask whoever administers the gateway).` }), _y = L({
		provider: V("wireguard"),
		config: M().min(1),
		autoConnect: my
	}), vy = L({
		provider: V("fortinet"),
		server: M().min(1),
		port: W().int().min(1).max(65535).default(443),
		username: M().min(1),
		password: gy(M().min(1), "password"),
		trustedCert: M().min(1).optional(),
		realm: M().min(1).optional(),
		autoConnect: my
	}), yy = L({
		provider: V("ipsec"),
		server: M().min(1),
		presharedKey: gy(M().min(1), "pre-shared key"),
		localId: M().min(1).optional(),
		remoteId: M().min(1).optional(),
		username: M().min(1).optional(),
		password: gy(M().min(1), "XAuth password").optional(),
		ikeVersion: B(["1", "2"]).default("1"),
		pfs: B(["on", "off"]).default("on"),
		dhGroup: B([
			"2",
			"5",
			"14",
			"15",
			"16",
			"19",
			"20"
		]).default("14"),
		aggressive: B(["on", "off"]).default("on"),
		routedNetworks: M().default("0.0.0.0/0").refine((e) => e.split(",").map((e) => e.trim()).every((e) => rc().safeParse(e).success || ic().safeParse(e).success), { message: "Routed networks is a comma-separated list of CIDRs, like 10.0.0.0/8,192.168.0.0/16. A single host needs its prefix too (192.168.0.168/32). Leave it at 0.0.0.0/0 to send everything through the gateway." }),
		autoConnect: my
	}), by = R("provider", [
		_y,
		vy,
		yy
	]), xy = B([
		"connected",
		"connecting",
		"disconnected",
		"unavailable",
		"failed"
	]), Sy = L({
		id: M().describe("Which tunnel."),
		provider: py.describe("What kind of tunnel it is."),
		state: xy.describe("Whether it is up, dialling, resting, failed, or not installable yet because its client needs a rebuild to arrive."),
		gateway: M().optional().describe("What it dials. For display only, and never a credential."),
		interface: M().optional().describe("The network interface carrying it, once one exists."),
		address: M().optional().describe("The address the far end gave this sandbox, which is the single most useful answer to whether you are on the VPN."),
		routes: I(M()).default([]).describe("What goes through it. Everything, when the range covers the whole internet. Empty until it is up."),
		dns: I(M()).default([]).describe("Name servers it pushed, when it pushed any."),
		since: P().optional().describe("When it came up, in milliseconds. Absent unless it is."),
		autoConnect: F().describe("Whether it dials itself when the sandbox starts."),
		detail: M().optional().describe("Why it failed, or a note about a healthy one. Never a credential.")
	}), Cy = L({ links: I(Sy).describe("Every configured tunnel with its live state, read back from the operating system each time rather than remembered.") }), wy = L({
		id: M().describe("Which tunnel to dial."),
		otp: M().min(1).optional().describe("A one-time code, where the gateway wants one. Supplied per dial and never stored; without it such a gateway refuses and says so.")
	}), Ty = L({ id: M().describe("Which tunnel.") }), Ey = L({ xml: M().min(1).describe("The exported configuration file, whole. Nothing is stored: it is read and thrown away.") }), Dy = L({
		id: M().describe("The id it would be added under."),
		label: M().describe("Its name as the file has it, so somebody recognises the connection they are picking."),
		provider: py.describe("What kind of tunnel it is."),
		server: M().describe("Where it dials."),
		port: P().describe("On which port."),
		username: M().optional().describe("The username, but only when the file stored it in the clear. An encrypted one is dropped rather than guessed at."),
		description: M().optional().describe("Whatever the file said about it."),
		localId: M().optional().describe("An identity some tunnel types need, when the file stored it readably."),
		aggressive: F().optional().describe("Which negotiation mode it used."),
		pfs: F().optional().describe("Whether it asked for forward secrecy."),
		dhGroup: M().optional().describe("Which key-exchange group it used. Together with the setting above, this is what decides whether the connection can complete at all."),
		needs: I(M()).describe("What you still have to type in before it can dial. Always at least the password, because the export wraps credentials in encryption that cannot be undone here.")
	}), Oy = L({ connections: I(Dy).describe("The connections found in the file, ready to be added one at a time.") });
})), Ay, jy, My, Ny, Py, Fy, Iy, Ly, Ry, zy, By, Vy, Hy, Uy, Wy, Gy, Ky, qy, Jy, Yy, Xy, Zy, Qy, $y, eb, tb, nb, rb, ib, ab, ob, sb, cb, lb, ub, db, fb, pb, mb, hb, gb, _b, vb = b((() => {
	G(), $v(), cd(), fy(), ky(), Ay = B([
		"devops",
		"monorepo",
		"mcp",
		"service",
		"integration",
		"cli",
		"plugin",
		"extension",
		"ssh",
		"vpn",
		"exit",
		"docker",
		"browser",
		"identity",
		"host",
		"webext",
		"agent",
		"endpoint",
		"localmodel",
		"wallet"
	]), jy = B([
		"active",
		"pending",
		"error",
		"inactive"
	]), My = L({
		url: N().describe("Where the tool server answers."),
		token: M().optional().describe("The credential it needs, if any. Stored, never echoed back.")
	}), Ny = L({
		service: ty.describe("Which service to provision."),
		domain: M().min(1).describe("The address it should answer on."),
		on: M().min(1).describe("Which machine to put it on."),
		expose: M().min(1).describe("How it should be reachable.")
	}), Py = L({ provider: V("stripe").describe("Which outside service's credential to make available to deployed apps.") }), Fy = L({ provider: M().min(1).describe("Which tool to give the agent. The rest of the fields are whatever that tool's own card declares it needs, and are checked against it when you connect.") }).catchall(M()), Iy = L({
		url: N().describe("The repository to take the plugin from."),
		ref: M().min(1).optional().describe("A branch, tag or commit to pin to. Leave it out to follow the default branch."),
		path: M().min(1).refine((e) => !e.split("/").includes(".."), { message: "path must stay inside the checkout" }).optional().describe("Where inside the repository the plugin lives, for one that sits in a larger checkout."),
		token: M().min(1).optional().describe("A credential for a private repository. Stored, never echoed back.")
	}), Ly = L({
		url: N().describe("The repository to take the extension from."),
		ref: M().regex(/^[0-9a-f]{40}$/, "ref must be a full 40-character commit sha").describe("The exact commit to install, in full. Required rather than optional because extension code runs with your browser's trust: the owner approves precisely the code that runs, and an update is a deliberate re-install at a new commit."),
		path: M().min(1).refine((e) => !e.split("/").includes(".."), { message: "path must stay inside the checkout" }).optional().describe("Where inside the repository the extension lives, for one that sits in a larger checkout."),
		token: M().min(1).optional().describe("A credential for a private repository. Stored, never echoed back."),
		registry: N().optional().describe("Which registry this install came from, which is what update checks and security advisories are read against. Absent falls back to the official one.")
	}), Ry = R("auth", [L({
		auth: V("key").describe("Sign in with a key."),
		host: M().min(1).describe("The machine's address."),
		port: W().default(22).describe("Which port it listens on."),
		user: M().min(1).describe("Which user to connect as."),
		privateKey: M().min(1).describe("The private key, whole. Stored with tight permissions and never echoed back.")
	}), L({
		auth: V("password").describe("Sign in with a password."),
		host: M().min(1).describe("The machine's address."),
		port: W().default(22).describe("Which port it listens on."),
		user: M().min(1).describe("Which user to connect as."),
		password: M().min(1).describe("The password. Stored, never echoed back.")
	})]), zy = L({
		gpu: B(["on", "off"]).default("off"),
		registryMirror: N().optional(),
		insecureRegistries: M().optional(),
		addressPool: M().optional()
	}), By = L({
		platform: M().min(1),
		username: M().optional(),
		password: M().optional(),
		identity: M().optional(),
		purpose: M().optional(),
		openedAt: M().optional(),
		exit: M().optional()
	}).catchall(M()), Vy = L({
		email: M().min(3),
		password: M().optional(),
		mailbox: M().optional(),
		loginUrl: N().optional(),
		openAccounts: B(["on", "off"]).default("off"),
		exit: M().optional()
	}), Hy = B(["on", "off"]), Uy = L({
		shell: Hy.default("on"),
		write: Hy.default("off"),
		screen: Hy.default("on"),
		control: Hy.default("off"),
		sandboxes: Hy.default("off"),
		destructive: Hy.default("off"),
		roots: M().optional()
	}), Wy = Uy.extend({ platform: M().min(1) }), Gy = B(["on", "off"]), Ky = L({
		read: Gy.default("on"),
		act: Gy.default("on"),
		screenshot: Gy.default("off"),
		cookies: Gy.default("off"),
		confirm: B([
			"sensitive",
			"always",
			"never"
		]).default("sensitive")
	}), qy = Ky.extend({ platform: M().min(1) }), Jy = L({
		command: M().min(1),
		name: M().min(1).optional(),
		env: M().optional(),
		loginCommand: M().min(1).optional()
	}), Yy = B(["openai", "anthropic"]), Xy = L({
		baseUrl: N(),
		protocol: Yy.default("openai"),
		apiKey: M().optional(),
		headers: M().optional()
	}), Zy = [
		"16384",
		"32768",
		"65536",
		"131072"
	], Qy = "65536", $y = 2048, eb = 1048576, tb = L({
		model: M().min(1),
		gpu: B(["on", "off"]).default("off"),
		url: N().optional(),
		context: uc([B(Zy), V("custom")]).default(Qy),
		contextTokens: W().int().min($y).max(eb).optional()
	}), nb = M().regex(/^\d+(\.\d{1,6})?$/, "a USD amount like 0.50 (up to six decimals: USDC's own precision)"), rb = B(["eip155:8453", "eip155:84532"]), ib = L({
		network: rb.default("eip155:8453"),
		address: M().optional(),
		perPaymentMaxUsd: nb.default("1.00"),
		autoApproveUnderUsd: nb.default("0"),
		dailyCapUsd: nb.default("5.00"),
		allow: M().optional(),
		deny: M().optional()
	}), ab = R("kind", [
		L({
			id: J,
			kind: V("devops"),
			config: L({})
		}),
		L({
			id: J,
			kind: V("monorepo"),
			config: L({})
		}),
		L({
			id: J,
			kind: V("mcp"),
			config: My
		}),
		L({
			id: J,
			kind: V("service"),
			config: Ny
		}),
		L({
			id: J,
			kind: V("integration"),
			config: Py
		}),
		L({
			id: J,
			kind: V("cli"),
			config: Fy
		}),
		L({
			id: J,
			kind: V("plugin"),
			config: Iy
		}),
		L({
			id: J,
			kind: V("extension"),
			config: Ly
		}),
		L({
			id: J,
			kind: V("ssh"),
			config: Ry
		}),
		L({
			id: J,
			kind: V("vpn"),
			config: by
		}),
		L({
			id: J,
			kind: V("exit"),
			config: Wv
		}),
		L({
			id: J,
			kind: V("docker"),
			config: zy
		}),
		L({
			id: J,
			kind: V("browser"),
			config: By
		}),
		L({
			id: J,
			kind: V("identity"),
			config: Vy
		}),
		L({
			id: J,
			kind: V("host"),
			config: Wy
		}),
		L({
			id: J,
			kind: V("webext"),
			config: qy
		}),
		L({
			id: J,
			kind: V("agent"),
			config: Jy
		}),
		L({
			id: J,
			kind: V("endpoint"),
			config: Xy
		}),
		L({
			id: J,
			kind: V("localmodel"),
			config: tb
		}),
		L({
			id: J,
			kind: V("wallet"),
			config: ib
		})
	]), ob = L({
		state: jy.describe("Whether it is live, still coming up, broken, or switched off."),
		detail: M().optional().describe("What is wrong, in words a person can act on."),
		code: M().optional().describe("A short marker for that reason, for anything deciding what to do about it.")
	}), sb = L({
		id: M().describe("The connection's id."),
		kind: Ay.describe("What sort of thing it is."),
		status: ob.describe("Whether it is working."),
		config: z(M(), uc([
			M(),
			P(),
			F()
		])).describe("Its settings, minus anything secret."),
		secrets: I(M()).default([]).describe("Which credentials it holds, by name. The values are on one route only, and it is not this one.")
	}), cb = L({
		card: M().describe("Which connection is being suggested."),
		evidence: M().describe("What was seen that prompted it: a file, a remote, printed verbatim so the claim can be checked rather than believed."),
		reason: M().describe("The same claim in words, without repeating the evidence into it."),
		prefill: z(M(), M()).describe("Settings the scan could read, to fill the form so you supply only the credential. Never a secret, even when one is sitting in a checked-in file: the suggestion points at such a file, it does not absorb what is in it.")
	}), lb = L({
		capabilities: I(sb).describe("What this sandbox is connected to."),
		recommendations: I(cb).default([]).describe("Things worth connecting, worked out from what is actually in the workspace rather than from anything you configured. Re-derived on every read, so one whose evidence has moved simply stops being suggested.")
	}), ub = L({ id: M().describe("Which connection.") }), db = L({
		id: M().describe("The connection's id."),
		kind: M().describe("What sort of thing it is."),
		config: z(M(), M()).describe("Its settings exactly as stored, credentials included. The field names are its own kind's, which the caller already knows.")
	}), fb = L({ card: M().describe("Which suggestion to stop making.") }), pb = L({
		id: M().describe("Which connection."),
		value: M().min(1).describe("The new credential. Its other settings are left alone.")
	}), mb = L({
		id: M(),
		to: M().min(1).max(60).regex(/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/)
	}), hb = L({ session: M().describe("The terminal the sign-in is happening in. Attach to it to type.") }), gb = L({
		code: M().describe("The code."),
		secondsRemaining: P().describe("How long it lasts. Its expiring is what makes handing one to an agent safe, since the seed behind it is never revealed.")
	}), _b = L({
		checked: F().describe("Whether this connection can be tested from here at all. False is not a failure: it is 'no test exists'."),
		ok: F().describe("Whether the service answered as itself."),
		message: M().describe("What happened, in the words a person standing in front of the form needs: the service's own answer, or its refusal.")
	});
})), yb, bb, xb, Sb = b((() => {
	G(), yb = L({
		url: M(),
		ref: M().optional(),
		path: M().optional()
	}), bb = (e, t, n) => {
		if (typeof e == "string") {
			let r = e.replace(/^\.\//, ""), i = n?.replace(/^\.\//, "").replace(/\/$/, "");
			return {
				url: t,
				path: i !== void 0 && i !== "" ? `${i}/${r}` : r
			};
		}
		if (typeof e != "object" || !e) return;
		let r = e, i = r.sha ?? r.ref;
		if (r.source === "github" && typeof r.repo == "string") return {
			url: `https://github.com/${r.repo}.git`,
			...i === void 0 ? {} : { ref: i }
		};
		if (r.source === "url" && typeof r.url == "string") return {
			url: r.url,
			...i === void 0 ? {} : { ref: i }
		};
		if (r.source === "git-subdir" && typeof r.url == "string" && typeof r.path == "string") return {
			url: r.url,
			path: r.path,
			...i === void 0 ? {} : { ref: i }
		};
	}, xb = /^[0-9a-f]{40}$/;
})), Cb, wb, Tb, Eb, Db, Ob, kb = b((() => {
	G(), Sb(), Cb = L({
		sha: M().regex(xb, "must be a full lowercase commit sha"),
		url: M().min(1),
		path: M().min(1).optional(),
		policy: M().min(1),
		reviewer: M().min(1),
		reviewedAt: Ol(),
		runId: M().min(1),
		deterministic: L({
			policy: M().min(1),
			scanner: M().min(1),
			version: M().min(1),
			runId: M().min(1)
		})
	}), wb = B([
		"verified",
		"listed",
		"blocked"
	]), Tb = L({
		name: M(),
		description: M().optional(),
		version: M().optional(),
		kind: B(["plugin", "extension"]).optional(),
		trust: wb.optional(),
		trustReason: M().optional(),
		securityReview: Cb.optional(),
		securityFix: F().optional(),
		category: M().optional(),
		art: M().max(4096).optional(),
		logo: M().optional(),
		icon: M().optional(),
		homepage: N().optional(),
		source: oc()
	}).superRefine((e, t) => {
		let n = e.trust ?? "listed";
		if (n === "blocked" && (e.trustReason === void 0 || e.trustReason.trim() === "") && t.addIssue({
			code: "custom",
			path: ["trustReason"],
			message: "a blocked entry must say why"
		}), n === "verified" && e.securityReview === void 0 && t.addIssue({
			code: "custom",
			path: ["securityReview"],
			message: "a verified entry must carry its security review"
		}), e.securityReview === void 0) return;
		let r = bb(e.source, "", void 0);
		(r?.ref !== e.securityReview.sha || r?.url !== e.securityReview.url || r.path !== e.securityReview.path) && t.addIssue({
			code: "custom",
			path: ["securityReview"],
			message: "must equal the exact repository, commit and subdirectory named by source"
		});
	}), L({
		name: M(),
		metadata: L({ pluginRoot: M().optional() }).optional(),
		plugins: I(Tb)
	}).superRefine((e, t) => {
		let n = /* @__PURE__ */ new Set();
		for (let r = 0; r < e.plugins.length; r += 1) {
			let i = e.plugins[r]?.name;
			i !== void 0 && n.has(i) && t.addIssue({
				code: "custom",
				path: [
					"plugins",
					r,
					"name"
				],
				message: "entry names must be unique"
			}), i !== void 0 && n.add(i);
		}
	}), Eb = L({
		sha: M(),
		manifest: M(),
		bundle: M(),
		engines: M().optional()
	}), Db = L({
		name: M(),
		stars: P().int().nonnegative().optional(),
		pushedAt: M().optional(),
		checks: Eb.optional()
	}), L({
		scannedAt: M(),
		entries: I(Db)
	}), Ob = L({
		name: M(),
		description: M().optional(),
		version: M().optional(),
		kind: B(["plugin", "extension"]),
		trust: wb,
		trustReason: M().optional(),
		securityReview: Cb.optional(),
		admitted: F(),
		securityFix: F().optional(),
		category: M().optional(),
		art: M().optional(),
		logo: M().optional(),
		icon: M().optional(),
		homepage: M().optional(),
		install: yb.optional(),
		stars: P().int().nonnegative().optional(),
		pushedAt: M().optional(),
		checks: Eb.optional()
	});
})), Ab = b((() => {
	kb(), Sb();
})), jb, Mb, Nb = b((() => {
	G(), Ab(), jb = L({
		url: N().describe("The registry to read."),
		token: M().min(1).optional().describe("A credential for a private one. Sent as a body rather than in the address, so it never lands in a log.")
	}), Mb = L({
		name: M().describe("What the registry calls itself."),
		plugins: I(Ob).describe("What it lists, each with the curated decision, the resolved pointer and what a scan found upstream.")
	});
})), Pb, Fb, Ib, Lb = b((() => {
	G(), Pb = L({
		url: N().describe("The repository to ask. http(s) only: an ssh remote would stop on a host-key prompt nobody can answer."),
		token: M().min(1).optional().describe("A credential for a private one. Sent as a body rather than in the address, so it never lands in a log. A form editing a live connection has never been shown its token: it sends the VAULTED marker here and names the connection in `keeping`, so a private repository still answers without anyone retyping a key."),
		keeping: M().min(1).optional().describe("Which connection a VAULTED token belongs to. Ignored when a real token is sent.")
	}), Fb = L({
		name: M().describe("The branch or tag as a person names it: `main`, `v1.4.0`."),
		kind: B(["branch", "tag"]),
		sha: M().regex(/^[0-9a-f]{40}$/).describe("The commit it points at. An annotated tag is peeled here, so this is always a commit, never a tag object.")
	}), Ib = L({
		defaultBranch: M().optional().describe("The branch the remote advertises as HEAD, the one to offer first. Absent when the remote advertises no symref."),
		refs: I(Fb).describe("Every branch the remote advertises, then every tag. Which to offer first is the reader's question, not this one's.")
	});
})), Rb, zb = b((() => {
	q(), Rv(), vb(), Nb(), Lb(), Q(), Rb = {
		list: K.route({
			method: "GET",
			path: "/capabilities",
			summary: "Everything this sandbox is connected to",
			description: "Each connection with its live state, the settings that are safe to show, and the names of the credentials it holds. The values of those credentials are never in the answer, on any route but one."
		}).output(lb),
		add: K.route({
			method: "POST",
			path: "/capabilities",
			summary: "Connect something, or change a connection",
			description: "Writes a connection and streams the work of applying it, because some kinds provision real infrastructure and take a while. Sending an id that already exists edits that connection: this is the edit as well as the create. Since a caller is never shown stored credentials, it marks the ones it is leaving alone and the daemon fills them in, which is the only way to change one setting without retyping a key."
		}).input(ab).output(ju(xv)),
		probe: K.route({
			method: "POST",
			path: "/capabilities/probe",
			summary: "Test a connection's settings without saving them",
			description: "Dials the service the way this connection would and hands back what it said, before anything is written. The answer is the service's own confirmation or its exact refusal, so a wrong token or an unreachable host is found on the form rather than on a card afterwards."
		}).input(ab).output(_b),
		remove: K.route({
			method: "DELETE",
			path: "/capabilities/{id}",
			summary: "Disconnect something",
			description: "Tears a connection down. The kinds that own real infrastructure refuse, because deleting those would be losing data rather than losing a connection."
		}).input(ub).output(X),
		rename: K.route({
			method: "POST",
			path: "/capabilities/{id}/rename",
			summary: "Rename a connection",
			description: "Carries everything the old name keyed across with it: a browser profile and its logins, an enrolled machine, an extension's copy of its source. Removing and re-adding would lose exactly the state that made the connection worth keeping. Kinds whose name is part of what they are refuse."
		}).input(mb).output(X),
		setSecret: K.route({
			method: "POST",
			path: "/capabilities/{id}/secret",
			summary: "Replace a stored credential",
			description: "Swaps one connection's key or token for a new one and re-applies it, without touching any of its other settings."
		}).input(pb).output(X),
		status: K.route({
			method: "GET",
			path: "/capabilities/{id}/status",
			summary: "Re-check one connection",
			description: "Probes a single connection right now, for a screen that wants to refresh one row rather than the whole list."
		}).input(ub).output(ob),
		connection: K.route({
			method: "GET",
			path: "/capabilities/{id}/connection",
			summary: "A connection's settings, credentials included",
			description: "The one call that hands back stored secrets, so an extension's own backend can dial the service behind a connection. Never answered for a signed-in person: only a machine credential reaches it, and an extension's only if its manifest asked for this route out loud at install time."
		}).input(ub).output(db),
		marketplace: K.route({
			method: "POST",
			path: "/capabilities/marketplace",
			summary: "Read a plugin marketplace",
			description: "Resolves a plugin marketplace source into the list of connections you could install from it."
		}).input(jb).output(Mb),
		refs: K.route({
			method: "POST",
			path: "/capabilities/refs",
			summary: "The versions a repository offers",
			description: "Asks a git remote what it advertises and hands back every branch and tag with the commit it points at, plus which branch is its default. Nothing is cloned and nothing is written, so this is cheap enough to answer a form as someone types a repository into it."
		}).input(Pb).output(Ib),
		dismiss: K.route({
			method: "DELETE",
			path: "/capabilities/recommendations/{card}",
			summary: "Stop suggesting this connection",
			description: "Not needed, for now. Nothing is torn down. The suggestion comes back if what prompted it in the workspace changes, because what is remembered is the evidence, not the refusal."
		}).input(fb).output(X),
		login: K.route({
			method: "POST",
			path: "/capabilities/{id}/login",
			summary: "Sign in to a connection by hand",
			description: "Opens the connection's own sign-in in a terminal a person can type into, for the flows that need a code pasted or a device confirmed. The answer names the terminal to attach to."
		}).input(ub).output(hb),
		otp: K.route({
			method: "GET",
			path: "/capabilities/{id}/otp",
			summary: "Mint a one-time code",
			description: "Generates a single two-factor code from a stored seed. The one credential-adjacent read an agent is allowed, and it is safe because a code expires in seconds and never reveals the seed, so an agent can answer a prompt without ever holding the factor."
		}).input(ub).output(gb)
	};
})), Bb, Vb, Hb, Ub, Wb, Gb, Kb, qb = b((() => {
	G(), Bb = L({
		query: M().min(2).max(512).describe("What to look for. Plain words, a pattern, a symbol name, or a question."),
		mode: B([
			"q",
			"find",
			"files",
			"def",
			"refs",
			"sym",
			"ast"
		]).optional().describe("Narrow the search to one kind: plain text, filenames, definitions, references, symbols, or code structure. Leave it out to blend them, which also answers a question asked in words."),
		includeIgnored: Tl().optional().describe("Search inside installed packages and other ignored folders too."),
		literal: Tl().optional().describe("Treat the query as fixed text rather than a pattern."),
		word: Tl().optional().describe("Match whole words only."),
		caseSensitive: Tl().optional().describe("Whether capitals matter. Off means they do not, rather than being guessed at from the query."),
		include: M().max(512).optional().describe("Which files to ask, in the same grammar an editor's files-to-include box takes: comma-separated patterns, matched at any depth unless anchored, a leading exclamation mark excluding instead."),
		limit: W().int().positive().optional().describe("How many results to return."),
		after: M().optional().describe("Resume from the cursor a previous answer handed back.")
	}), Vb = L({
		kind: B([
			"def",
			"text",
			"sem",
			"bm25",
			"rerank",
			"path",
			"import",
			"call",
			"type",
			"write",
			"fuzzy",
			"heuristic"
		]).describe("Why this line matched: the literal text, its meaning, the path, a definition, a call, and so on. Several kinds can agree on one line."),
		score: P().optional().describe("How strongly that reason applied.")
	}), Hb = L({
		start: P().describe("First character of the match within the line."),
		end: P().describe("One past the last.")
	}), Ub = L({
		line: P().describe("Which line, counting from one."),
		text: M().describe("The line itself."),
		spans: I(Hb).describe("Where in the line the matches are, so you can highlight without searching again. Empty when the whole line is the match rather than part of it."),
		tags: I(Vb).describe("Why it matched."),
		context: M().optional().describe("What it sits inside: the function, the class, the heading. Often enough that you need not open the file.")
	}), Wb = L({
		path: M().describe("The file."),
		score: P().describe("How well it matched. Groups arrive best first, never in path order."),
		hits: I(Ub).describe("The matching lines in it."),
		capped: F().optional().describe("This file had more matches than are kept per file, so the count is a floor. Say fifty-plus rather than fifty.")
	}), Gb = L({
		state: B([
			"fresh",
			"building",
			"stale"
		]).describe("Whether the index matches what is on disk, is still filling, or has fallen behind."),
		ageMs: P().optional().describe("How long since it last matched the disk, in milliseconds."),
		progress: P().optional().describe("How far through building it is, from zero to one."),
		behind: P().optional().describe("How many files it has not caught up with. Worth showing, because the word stale on its own reads as a warning about the answer, which it almost never is.")
	}), Kb = L({
		mode: M().describe("Which kind of search actually ran, which matters when you let it choose."),
		total: P().describe("Matching lines across the whole workspace, not just this page."),
		files: P().describe("Files the query matched in total."),
		shown: P().describe("How many of those lines are on this page."),
		groups: I(Wb).describe("The results, grouped by file, best first."),
		freshness: Gb.describe("Whether the index behind the answer is up to date."),
		truncated: F().describe("This page is not all of it. Use the cursor."),
		partial: F().optional().describe("At least one file had more matches than are kept per file, so the total is a floor. Different from the page being truncated: a complete page can still count partially."),
		cursor: M().optional().describe("Pass this back as `after` to get the next page."),
		hint: M().optional().describe("A suggestion for getting a better answer out of this query."),
		note: M().optional().describe("What the engine did that you did not ask for: a pattern rerun as plain text because it was not valid, escapes rewritten, a language filter that matched nothing."),
		related: I(M()).optional().describe("Places next door to the best results: where each is defined, and whatever calls it most."),
		candidates: I(M()).optional().describe("Ranked places that scored but did not make the page, best first. The answer often sits at rank five to thirteen, so this saves paging through to find out."),
		features: I(M()).optional().describe("Which stages of the search were switched off for this run. Absent means all of them ran.")
	});
})), Jb, Yb, Xb, Zb, Qb = b((() => {
	G(), qb(), Jb = L({
		repo: M().min(1).describe("Which repository, using the same ids the git routes take."),
		since: M().max(16).optional().describe("How far back to count changes, written as a span such as 2d, 12h, 1w or 3m. Leave it out for all of history."),
		limit: W().int().positive().max(200).optional().describe("How many files and modules to rank. A leaderboard rather than an inventory: past a screenful the ranking stops being the point.")
	}), Yb = L({
		path: M(),
		commits: P(),
		adds: P(),
		dels: P(),
		complexity: P(),
		score: P(),
		latestMs: P()
	}), Xb = L({
		path: M(),
		exports: P()
	}), Zb = L({
		repo: M().describe("Which repository this describes."),
		totals: L({
			files: P().describe("Files counted."),
			symbols: P().describe("Named things they export."),
			complexity: P().describe("Branch points across all of them added up."),
			hotspots: P().describe("How many files qualify as hotspots at all. The list below is capped; this is not.")
		}).describe("Counts anybody could recount in the files themselves. Deliberately no single maintainability grade: those cannot be checked and are not comparable between projects."),
		hotspots: I(Yb).describe("Files that change often and are complicated at the same time, worst first."),
		modules: I(Xb).describe("The parts of the codebase the rest of it leans on most."),
		freshness: Gb.describe("Whether the index these numbers were read from is up to date.")
	});
})), $b, ex, tx, nx, rx, ix, ax, ox, sx, cx, lx, ux, dx, fx, px, mx, hx, gx, _x, vx, yx, bx, xx, Sx = b((() => {
	G(), Qb(), $b = [
		"outdated",
		"audit",
		"knip",
		"jscpd",
		"ui",
		"bundle",
		"mutation"
	], ex = B($b), tx = L({
		name: M().describe("The dependency."),
		current: M().describe("What you are on."),
		latest: M().describe("What is published."),
		kind: B([
			"major",
			"minor",
			"patch"
		]).describe("How far apart those are. This is not one number because forty patch releases behind is a morning's work and one major version is a project."),
		section: M().describe("Which part of the manifest declares it. A major version behind on a build-time tool is a different risk from one that ships.")
	}), nx = L({
		name: M().describe("The dependency it concerns."),
		severity: B([
			"critical",
			"high",
			"moderate",
			"low",
			"info"
		]).describe("How bad it is said to be."),
		title: M().describe("What it is, in one line. No scoring vector and no reference list: those are for reading on the advisory's own page, and carrying them would put a kilobyte of prose per finding on every poll."),
		patched: M().optional().describe("Which versions fix it. Absent means no fix has been published, which is exactly when nothing should offer to upgrade and something should say so instead."),
		dev: F().describe("Whether it only reaches build-time tooling, which is a different problem from one that reaches what you ship.")
	}), rx = L({
		files: P().int().nonnegative().describe("Files nothing reaches."),
		exports: P().int().nonnegative().describe("Exported things nothing uses."),
		types: P().int().nonnegative().describe("Types nothing uses."),
		dependencies: P().int().nonnegative().describe("Declared dependencies nothing imports."),
		devDependencies: P().int().nonnegative().describe("The same, for build-time ones."),
		sample: I(M()).describe("A handful of the files, so a reader need not take the count on faith. Counts and a sample rather than the whole list, because an agent re-measures against the live tree anyway.")
	}), ix = L({
		percentage: P().describe("How much of the scanned code is duplicated. A share rather than a count, because a count grows with the repository and would mean something different every quarter."),
		clones: P().int().nonnegative().describe("How many duplicated stretches were found."),
		top: I(L({
			lines: P().int().nonnegative().describe("How long the duplicated stretch is."),
			first: M().describe("One of the two places."),
			second: M().describe("The other.")
		})).describe("The largest of them.")
	}), ax = L({
		components: I(M()).describe("The interface's own source files, with tests, stories and generated output left out."),
		bypasses: I(L({
			path: M().describe("The file."),
			count: P().int().positive().describe("How many times, in that file.")
		})).describe("Where the design system was routed around and a value hard-coded instead. Counted per file, because a reader deciding what to open is served by a file and a number, not by eleven snippets."),
		idioms: I(L({
			id: M().describe("Which outdated idiom. Looked up rather than listed here, so a sandbox one version behind can still report one this list has never heard of."),
			files: I(M()).describe("The files still on it.")
		})).describe("Files still written the way their framework has since replaced.")
	}), ox = L({
		dir: M().describe("Which folder was measured. Read from build output already on disk rather than by building, so this is sometimes a commit behind and never leaves anything in your working tree."),
		totalBytes: P().int().nonnegative().describe("The whole thing, raw."),
		totalGzip: P().int().nonnegative().describe("The whole thing, compressed. The ratio between the two is the difference between big and big-and-incompressible, which are different problems."),
		assets: I(L({
			path: M().describe("The file."),
			bytes: P().int().nonnegative().describe("Its raw size."),
			gzip: P().int().nonnegative().describe("Its compressed size.")
		})).describe("What is in it, piece by piece.")
	}), sx = L({
		score: P().describe("The share of injected faults the suite caught. Not a coverage figure: coverage says a line ran, this says an assertion depended on it."),
		killed: P().int().nonnegative().describe("Faults the suite caught."),
		survived: P().int().nonnegative().describe("Faults it did not: code that can be broken with every test still green."),
		inconclusive: P().int().nonnegative().describe("Faults it never got a verdict on, because they would not compile or were configured out. Left out of the score entirely, since neither answer is known."),
		survivors: I(L({
			file: M().describe("Where it is."),
			line: P().int().nonnegative().describe("Which line."),
			mutator: M().describe("What was changed, in the mutation tool's own vocabulary."),
			replacement: M().describe("What it became, so a reader can judge whether it matters without opening the file.")
		})).describe("The surviving faults themselves. A percentage is a mood; a named line with the change that went unnoticed is a morning's work.")
	}), cx = B([
		"ok",
		"unavailable",
		"failed"
	]), lx = R("id", [
		L({
			id: V("outdated"),
			packages: I(tx)
		}),
		L({
			id: V("audit"),
			advisories: I(nx)
		}),
		L({
			id: V("knip"),
			deadCode: rx
		}),
		L({
			id: V("jscpd"),
			duplication: ix
		}),
		L({
			id: V("ui"),
			scan: ax
		}),
		L({
			id: V("bundle"),
			bundle: ox
		}),
		L({
			id: V("mutation"),
			mutation: sx
		})
	]), ux = L({
		id: ex.describe("Which measurement this is."),
		state: cx.describe("Whether the tool ran and reported, is not part of this repository at all, or broke. The middle one is not evidence of health: the check simply cannot be made here."),
		ranAt: P().describe("When it last finished, in milliseconds, which is what its age is measured from."),
		tookMs: P().int().nonnegative().describe("How long it took. Worth knowing before asking for it again: some of these run for minutes."),
		facts: lx.optional().describe("What it found, including finding nothing, which is a real answer and the one that keeps a chore quiet."),
		reason: M().optional().describe("Why it broke, quoted from the tool rather than summarised, or, when it never ran, what is missing. Never a sentence built from the check's own name, which would have an unmeasured check claiming there is nothing to measure.")
	}), dx = L({
		dir: M().describe("Where the package lives."),
		name: M().describe("What it declares itself as."),
		engines: z(M(), M()).optional().describe("Which runtime versions it says it needs, verbatim."),
		dependencies: I(M()).describe("What it depends on."),
		devDependencies: I(M()).describe("What it needs only to build."),
		documented: F().describe("Whether it has a README, which in this workspace is what a package's own documentation is.")
	}), fx = L({
		docs: I(M()).describe("The repository's own architecture documents, when it has any. Their existence is the question: a repository with none has never been through the documentation flow at all."),
		dockerfiles: I(M()).describe("Container definitions in it."),
		ci: I(M()).describe("Pipeline definitions in it."),
		lockfile: F().describe("Whether dependencies are pinned to exact versions, which is what makes a security audit mean anything."),
		packageManifest: F().describe("Whether it is a JavaScript project at all. A Rust or Go repository has no majors to be behind on, and offering it those checks would be this surface guessing at what it is looking at."),
		deps: I(M()).describe("Every dependency name declared anywhere in the repository. Names rather than a verdict about which framework this is, because that judgement belongs to whatever reads this, not to a sandbox baked months ago.")
	}), px = L({
		packages: I(dx).describe("Each package in the repository, as its own manifest declares it."),
		shape: fx.describe("What the repository is made of, which decides whether a given chore is even a sensible question to ask of it."),
		hotspots: I(Yb).describe("Files that change often and are complicated at once, capped tight: a chore only asks whether something has entered the top of the ranking."),
		keyModules: I(Xb).describe("The parts the rest of the code leans on most, capped the same way."),
		totals: L({
			files: P().describe("Files counted."),
			symbols: P().describe("Named things they export."),
			complexity: P().describe("Branch points added up."),
			hotspots: P().describe("How many files qualify as hotspots at all.")
		}).describe("The repository in numbers."),
		indexed: F().describe("Whether the index these rankings came from is finished. Nothing should act on a half-built one.")
	}), mx = B([
		"acted",
		"reported",
		"clean"
	]), hx = L({
		repo: M().describe("Which repository."),
		chore: M().describe("Which chore."),
		ranAt: P().describe("When it ran, in milliseconds."),
		runId: M().describe("The conversation that ran it, so its whole record can be opened."),
		outcome: mx.describe("What it concluded: it did something, it wrote something down, or it looked and found the finding to be false. That last one matters most, or the same turn starts again for ever."),
		digest: M().describe("A fingerprint of the evidence standing at the time. A chore whose evidence has since changed is due again on its own merits; one whose evidence has not stays quiet."),
		snoozedUntil: P().optional().describe("Not until then, in milliseconds. The chore stays visible and stays out of the badge. Different from switching it off, which is a setting.")
	}), gx = L({
		repo: M().describe("Which repository."),
		id: ex.describe("Which measurement."),
		askedAt: P().describe("When it was asked for, in milliseconds, so one still waiting can say how long it has waited."),
		startedAt: P().optional().describe("When it actually began. Absent while it is queued behind another, which is a real and common state: there is one lane for the whole sandbox.")
	}), _x = L({
		repos: I(L({
			repo: M().describe("Which repository."),
			probes: I(ux).describe("The expensive measurements, served from a cache with an age on each rather than run on demand."),
			signals: px.describe("The cheap facts, worked out fresh every time.")
		})).describe("Every repository's standing evidence. One answer for all of them, because a badge polls this on a timer and one request per repository is the kind of poll that shows up in a battery graph."),
		ledger: I(hx).describe("What has already been done about all of it."),
		running: I(gx).describe("What is being measured right now and what is waiting behind it. Part of this read rather than a route of its own, because a screen that had to ask twice would show the two halves disagreeing."),
		node: M().describe("The runtime version this sandbox is actually running, read off the process rather than off a manifest, because what is installed is the fact that matters and a declared range is a wish.")
	}), vx = L({
		repo: M().min(1).describe("Which repository."),
		id: ex.describe("Which measurement to retake, ahead of its usual schedule.")
	}), yx = hx, bx = L({
		id: M().describe("Which check."),
		label: M().describe("What it is called."),
		status: B([
			"pass",
			"warn",
			"fail"
		]).describe("How it went. A warning is a real third answer rather than a soft failure."),
		detail: M().describe("What it found.")
	}), xx = L({ checks: I(bx).describe("Everything that can be checked from the extension's own files, for an author about to publish.") });
})), Cx, wx = b((() => {
	q(), Sx(), Q(), Cx = {
		list: K.route({
			method: "GET",
			path: "/chores",
			summary: "What maintenance the repos are asking for",
			description: "Every repo's standing evidence in one read: what the last measurement found and how old it is, the cheap signals that are always current, and what has already been decided about each."
		}).output(_x),
		probe: K.route({
			method: "POST",
			path: "/chores/probe",
			summary: "Measure one repo again now",
			description: "Re-runs a single check without waiting for it to go stale. Answers immediately: the work happens in the background and the result turns up in the next read, because some of these sweeps outlive any sane request."
		}).input(vx).output(X),
		record: K.route({
			method: "POST",
			path: "/chores/ledger",
			summary: "Record a verdict, or snooze one",
			description: "Writes what somebody concluded about one repo's chore, replacing the previous verdict. A chore has one current answer, not a growing pile of times it was fine."
		}).input(yx).output(X)
	};
})), Tx, Ex = b((() => {
	q(), Hg(), Q(), Tx = {
		runs: K.route({
			method: "GET",
			path: "/ci/runs",
			summary: "Pipeline runs across the repos",
			description: "What the forges are reporting for every workspace repo that has a remote, served from a cache and filled in on demand. Repos whose notifications are not wired up say so."
		}).output(Ig),
		rerun: K.route({
			method: "POST",
			path: "/ci/runs/rerun",
			summary: "Run a pipeline again",
			description: "Asks the forge to re-run one pipeline. The daemon only passes the request along."
		}).input(Lg).output(X),
		cancel: K.route({
			method: "POST",
			path: "/ci/runs/cancel",
			summary: "Cancel a pipeline run",
			description: "Asks the forge to stop a run in progress."
		}).input(Lg).output(X),
		jobs: K.route({
			method: "POST",
			path: "/ci/runs/jobs",
			summary: "The steps inside one pipeline run",
			description: "Each job in a run with its outcome, which is where you look to find out what actually broke."
		}).input(Lg).output(Pg),
		fix: K.route({
			method: "POST",
			path: "/ci/fix",
			summary: "Put an agent on a broken pipeline",
			description: "Opens a fresh isolated conversation already holding the failure: which job, which repo, what it said. The answer names the conversation so you can open it."
		}).input(Rg).output(zg)
	};
})), Dx, Ox, kx, Ax = b((() => {
	q(), G(), vb(), cf(), Dx = B([
		"unknown",
		"healthy",
		"degraded",
		"unavailable"
	]), Ox = L({
		available: F(),
		allowance: P().int().nonnegative(),
		used: P().int().nonnegative(),
		remaining: P().int().nonnegative(),
		health: Dx,
		resetsAt: M().optional(),
		retryAt: M().optional(),
		servedModel: M().optional()
	}), kx = {
		models: K.route({
			method: "GET",
			path: "/endpoints/{id}/models",
			summary: "Models a connected server offers",
			description: "Asks one configured model server what it serves. There is no built-in list and no fallback: what a server offers is knowable only by asking it, so an empty answer is the honest report that we could not."
		}).input(ub).output(sf),
		trial: K.route({
			method: "GET",
			path: "/endpoints/trial/status",
			summary: "What is left of the free trial",
			description: "The allowance, what has been used, when it resets, and which model actually answered the last message. Not being available is the ordinary answer rather than a failure: most sandboxes run against a platform that offers no trial at all."
		}).output(Ox)
	};
})), jx, Mx = b((() => {
	q(), Rv(), $v(), Q(), jx = {
		list: K.route({
			method: "GET",
			path: "/exit",
			summary: "Ways to come out somewhere else",
			description: "Every configured exit with its live state, the country it was asked to appear in, and the country it actually appears in. Those last two disagreeing is the whole reason this reports both."
		}).output(Xv),
		countries: K.route({
			method: "GET",
			path: "/exit/{id}/countries",
			summary: "Countries one exit can reach",
			description: "Where this exit can put you, ranked by how much capacity is really there. Asked of the provider when it answers and taken from a built-in list when it does not, and the answer says which of those you got."
		}).input(Zv).output(Jv),
		start: K.route({
			method: "POST",
			path: "/exit/{id}/start",
			summary: "Bring an exit up",
			description: "Starts the exit in the country it was configured for. Streamed, because a first start fetches a catalogue, raises a tunnel and then checks the address, which takes tens of seconds on the free providers and can fail at each step with something worth reading. Starting one that is already up simply says so."
		}).input(Zv).output(ju(xv)),
		use: K.route({
			method: "POST",
			path: "/exit/{id}/use",
			summary: "Move to another country",
			description: "Switches the exit's country, starting it first if it was down. It ends by checking where the world actually sees you and fails if that does not match what you asked for. A switch that quietly left your traffic where it was is the exact failure this whole feature exists to rule out."
		}).input(Qv).output(ju(xv)),
		rotate: K.route({
			method: "POST",
			path: "/exit/{id}/rotate",
			summary: "Take a different address, same country",
			description: "Swaps to another address in the country you are already in. Fails if the address does not actually change, which on a small pool it sometimes cannot."
		}).input(Zv).output(ju(xv)),
		check: K.route({
			method: "POST",
			path: "/exit/{id}/check",
			summary: "Where the world sees you right now",
			description: "Looks up the address and country as seen through this exit. Cheap, and the honest answer to whether you are really where you meant to be, which is what every other call here is judged against."
		}).input(Zv).output(Kv),
		stop: K.route({
			method: "POST",
			path: "/exit/{id}/stop",
			summary: "Take an exit down",
			description: "Shuts the exit off. One that was already down is fine: the promise is that it is not up afterwards, not that it was up before."
		}).input(Zv).output(X)
	};
})), Nx = b((() => {})), Px = b((() => {})), Fx, Ix, Lx = b((() => {
	G(), Fx = 4096, Ix = {
		art: M().max(Fx).optional().describe("This extension's own mark, as a complete SVG document inline: the tier an author controls fully. Give it a viewBox and let it fill its own square edge to edge; it is drawn as the tile, not as a glyph on a plate. Kept as readable SVG text (not base64) so a registry reviewer can see what they are publishing, drawn inert so it cannot script the page, and capped at 4 KB. Anything that does not parse as SVG falls back to `logo`, then `icon`, then initials."),
		logo: M().optional().describe("A simple-icons slug, fetched from a CDN: right for standing in for somebody else's product. Add a \"/<hex>\" suffix to force a colour for a mark that vanishes against the surface it lands on. Unreachable in an offline sandbox, so it falls back to `icon`, then to initials."),
		icon: M().optional().describe("A name from the host's own icon set, drawn when no simple-icons slug fits. It ships in the image, follows the theme and costs no request: what actually carries a first-party extension. An unknown name falls back to initials rather than to a hole.")
	};
})), Rx, zx, Bx = b((() => {
	G(), Rx = L({ path: M().optional().describe("Relative to the extension checkout. Absent ⇒ the checkout root.") }), zx = {
		name: "agent",
		description: "Declare that this checkout is also a Claude Code plugin, so the agent picks up its skills, agents, hooks, commands and MCP servers each turn. The daemon hands the directory to the plugin loader and never parses what is in it.",
		schema: Rx
	};
})), Vx, Hx, Ux = b((() => {
	G(), Vx = L({
		id: M().regex(/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/).describe("Prefills the automation name, and is what \"does one of these exist already\" is asked by, so spell it as an id, not as prose."),
		title: M().min(1),
		logo: M().min(1).optional().describe("A simple-icons slug for the card."),
		icon: M().min(1).optional().describe("A name from the host's icon set, drawn when no simple-icons slug fits."),
		requires: I(M().min(1)).optional().describe("Capability providers that make this template work: any one connected is enough (fixing CI rides github or gitlab). Omitted ⇒ nothing to connect, so it is always offered."),
		trigger: L({
			kind: B([
				"schedule",
				"event",
				"listener",
				"workspace"
			]),
			cron: M().min(1).optional(),
			provider: M().min(1).optional(),
			eventType: M().min(1).optional(),
			event: M().min(1).optional()
		}).describe("What wakes it. Checked against the real trigger schema when the daemon builds the catalogue, so a template can never offer one that would be refused."),
		guard: M().min(1).optional().describe("A condition that must hold before the turn runs: what makes a template safe to leave switched on."),
		holdForSeconds: P().int().positive().optional().describe("Wait this long and coalesce repeats, rather than firing on every event."),
		prompt: M().min(1).describe("The turn this starts. You own the trigger's payload vocabulary, so you own the prompt that reads it."),
		note: M().min(1).optional(),
		setup: M().min(1).optional().describe("What the user must do themselves before this can work."),
		description: M().min(1).optional(),
		offer: B(["create", "configure"]).optional().describe("Absent ⇒ it waits in the gallery, where you go once you know what you want. `create` puts a card on the page that makes it, switched off, in one click. `configure` puts one there that opens the dialog prefilled, for a template that cannot work unconfigured. Both are for what a user would never think to go looking for: mark everything as offered and you have rebuilt the gallery with extra steps."),
		chore: F().optional().describe("Whether what this makes watches THIS codebase rather than the outside world. Declared rather than read off the trigger: a nightly dependency sweep and a nightly Stripe poll are both schedules.")
	}), Hx = {
		name: "automationTemplates",
		description: "Starting points this pack offers in the automation composer, a trigger, a prompt written for that trigger's payload, and whatever guard makes it safe to leave on. Declared by whoever knows the service rather than by the composer, so they appear when your pack is installed and disappear with it. Pure prefill: creating one makes an ordinary automation.",
		schema: I(Vx)
	};
})), Wx, Gx = b((() => {
	G(), Wx = {
		name: "bin",
		description: "A checkout-relative directory of executables the daemon puts on the agent's PATH every turn, how you ship the agent a command-line tool. The files are the approved code themselves: they ride the pinned checkout, and the daemon only adds the directory to PATH.",
		schema: M().min(1).refine((e) => !e.split("/").includes(".."), { message: "bin must stay inside the checkout" })
	};
})), Kx, qx, Jx, Yx, Xx, Zx, Qx, $x, eS = b((() => {
	Kx = class extends Error {
		source;
		offset;
		constructor(e, t, n) {
			super(`${e} (in \`${t}\` at ${n})`), this.source = t, this.offset = n, this.name = "WhenSyntaxError";
		}
	}, qx = [
		"&&",
		"||",
		"==",
		"!=",
		">=",
		"<=",
		">",
		"<",
		"(",
		")",
		"[",
		"]",
		",",
		"!"
	], Jx = /[A-Za-z_]/, Yx = /[A-Za-z0-9_.-]/, Xx = (e) => {
		let t = [], n = 0;
		for (; n < e.length;) {
			let r = e[n] ?? "";
			if (r.trim() === "") {
				n += 1;
				continue;
			}
			if (r === "'" || r === "\"") {
				let i = e.indexOf(r, n + 1);
				if (i === -1) throw new Kx("unterminated string", e, n);
				t.push({
					kind: "literal",
					value: e.slice(n + 1, i),
					at: n
				}), n = i + 1;
				continue;
			}
			let i = qx.find((t) => e.startsWith(t, n));
			if (i !== void 0) {
				t.push({
					kind: "punct",
					text: i,
					at: n
				}), n += i.length;
				continue;
			}
			if (/[0-9]/.test(r)) {
				let r = /^[0-9]+(\.[0-9]+)?/.exec(e.slice(n))?.[0] ?? "";
				t.push({
					kind: "literal",
					value: Number(r),
					at: n
				}), n += r.length;
				continue;
			}
			if (Jx.test(r)) {
				let r = n + 1;
				for (; r < e.length && Yx.test(e[r] ?? "");) r += 1;
				let i = e.slice(n, r);
				i === "true" || i === "false" ? t.push({
					kind: "literal",
					value: i === "true",
					at: n
				}) : i === "in" || i === "not" ? t.push({
					kind: "punct",
					text: i,
					at: n
				}) : t.push({
					kind: "key",
					text: i,
					at: n
				}), n = r;
				continue;
			}
			throw new Kx(`unexpected character ${JSON.stringify(r)}`, e, n);
		}
		return t;
	}, Zx = class {
		tokens;
		source;
		index = 0;
		constructor(e, t) {
			this.tokens = e, this.source = t;
		}
		parse() {
			let e = this.or(), t = this.tokens[this.index];
			if (t !== void 0) throw new Kx("unexpected trailing input", this.source, t.at);
			return e;
		}
		or() {
			let e = this.and();
			if (!this.at("||")) return e;
			let t = [e];
			for (; this.eat("||");) t.push(this.and());
			return {
				kind: "or",
				operands: t
			};
		}
		and() {
			let e = this.unary();
			if (!this.at("&&")) return e;
			let t = [e];
			for (; this.eat("&&");) t.push(this.unary());
			return {
				kind: "and",
				operands: t
			};
		}
		unary() {
			if (this.eat("!")) return {
				kind: "not",
				operand: this.unary()
			};
			if (this.eat("(")) {
				let e = this.or();
				return this.expect(")"), e;
			}
			let e = this.tokens[this.index];
			if (e?.kind !== "key") throw new Kx("expected a context key", this.source, e?.at ?? this.source.length);
			return this.index += 1, this.tail(e.text);
		}
		tail(e) {
			for (let t of [
				"==",
				"!=",
				">=",
				"<=",
				">",
				"<"
			]) if (this.eat(t)) return {
				kind: "compare",
				key: e,
				op: t,
				value: this.literal()
			};
			return this.eat("in") ? {
				kind: "member",
				key: e,
				values: this.list(),
				negated: !1
			} : this.at("not") ? (this.index += 1, this.expect("in"), {
				kind: "member",
				key: e,
				values: this.list(),
				negated: !0
			}) : {
				kind: "has",
				key: e
			};
		}
		list() {
			this.expect("[");
			let e = [this.literal()];
			for (; this.eat(",");) e.push(this.literal());
			return this.expect("]"), e;
		}
		literal() {
			let e = this.tokens[this.index];
			if (e?.kind !== "literal") throw new Kx("expected a literal value", this.source, e?.at ?? this.source.length);
			return this.index += 1, e.value;
		}
		at(e) {
			let t = this.tokens[this.index];
			return t?.kind === "punct" && t.text === e;
		}
		eat(e) {
			return this.at(e) ? (this.index += 1, !0) : !1;
		}
		expect(e) {
			if (!this.eat(e)) throw new Kx(`expected \`${e}\``, this.source, this.tokens[this.index]?.at ?? this.source.length);
		}
	}, Qx = (e) => new Zx(Xx(e), e).parse(), $x = (e) => {
		try {
			return Qx(e), !0;
		} catch {
			return !1;
		}
	};
})), tS, nS, rS, iS, aS, oS, sS = b((() => {
	eS(), G(), Lx(), tS = L({
		key: M().regex(/^[a-zA-Z][a-zA-Z0-9]*$/),
		label: M().min(1),
		placeholder: M().optional(),
		secret: F().optional().describe("Mask it, and never echo it back."),
		optional: F().optional(),
		multiline: F().optional(),
		advanced: F().optional().describe("Fold this field behind the form's Advanced disclosure: for answers whose default is right for nearly everyone. The disclosure opens by itself while any advanced field holds a non-default value, so an edit never hides live settings."),
		boolean: F().optional().describe("Render it as a switch, carrying \"on\"/\"off\". For an opt-in EXTRA rather than a decision: a two-option picker says the same thing but presents a choice the user must make to proceed, sized like the required fields around it. A switch always holds a value, so a field like this never blocks a submit."),
		hint: M().optional().describe("A line under this control, for what the label alone cannot say: a host requirement, when a value takes effect. The card's own `hint` speaks for the whole card; this one is bound to the field it qualifies."),
		rebuild: F().optional().describe("This value only takes effect after the sandbox is rebuilt, because it rides the image overlay. Shown as a chip beside the label: two switches side by side, identical in every visible way, can otherwise cost five seconds or five minutes with no way to tell which."),
		default: M().optional(),
		options: I(L({
			value: M(),
			label: M()
		})).optional().describe("Turns the field into a select."),
		when: M().refine($x, { message: "not a valid `when` condition" }).optional().describe("Only show this field while a condition over the answers already given holds: `auth == 'key'`, `provider in ['ipsec', 'fortinet']`, `!advanced`. Supports `&&`, `||`, `!`, comparisons and `in`."),
		value: M().optional().describe("A fixed value baked into the config rather than asked for: how a card pins its discriminator (platform=\"reddit\", provider=\"stripe\"). Renders as nothing."),
		totp: F().optional().describe("This field holds a TOTP seed, the base32 key or otpauth:// URI a service shows when enrolling an authenticator app. Declare it with `secret: true`. Unlike an ordinary secret it never enters the agent's environment: the daemon mints the six-digit codes on demand and only those cross.")
	}), nS = L({
		url: M().min(1).describe("The URL to call, as a template over the fields: `${field}` substitutes, `${field:uri}` percent-encodes. Same spelling as `env`."),
		method: B([
			"GET",
			"POST",
			"HEAD"
		]).optional().describe("Defaults to GET."),
		headers: z(M(), M()).optional().describe("The request headers, templated the same way: `{\"Authorization\": \"Bearer ${token}\"}`."),
		identity: M().optional().describe("A dotted path into the JSON answer naming who the caller is (\"login\", \"user.name\"), so success can say which account answered."),
		insecure: F().optional().describe("Accept a self-signed certificate, for a service whose local install ships one (Obsidian's Local REST API).")
	}), rS = L({
		name: M().min(1),
		...Ix,
		description: M().min(1).describe("ONE LINE: aim for 60 characters or fewer. The grid clamps it at two lines in a narrow pane, so a paragraph here is a paragraph the reader gets truncated. Everything longer belongs in `hint`."),
		category: M().min(1),
		hint: M().optional().describe("The paragraph, shown under the add form and searched from the catalog, so the words that identify this card to someone hunting for it (\"webauthn\", \"socket mode\") belong here even when the tile cannot show them."),
		guide: L({
			url: M().optional(),
			urlFromField: M().optional(),
			path: M().optional(),
			linkLabel: M().optional(),
			scopes: M().optional(),
			steps: I(M()).optional()
		}).optional().describe("The walkthrough the install dialog renders for getting the credential this card asks for.")
	}), iS = {
		id: M().regex(/^[a-z0-9][a-z0-9-]*$/),
		catalog: rS,
		fields: I(tS)
	}, aS = R("kind", [
		L({
			...iS,
			kind: V("cli"),
			fields: I(tS).min(1),
			env: z(M().regex(/^[A-Z][A-Z0-9_]*$/), M()).describe("The environment the agent's shell gets, as value templates over the fields: `${field}` substitutes, `${field:uri}` percent-encodes. Each name is suffixed per instance."),
			skill: M().min(1).describe("Checkout-relative SKILL.md teaching the agent this tool. `${id}` in it is replaced with the instance name at apply time."),
			fragment: M().min(1).optional().describe("A Dockerfile fragment holding the client binary this tool needs (psql, mysql, whisper)."),
			pack: M().min(1).optional().describe("A sandbox feature pack name (whisper, llamacpp, browser, …) supplying this tool. Preferred over `fragment`: an image that already bakes the pack needs no rebuild, and there is no copy to drift."),
			probe: nS.optional().describe("One authenticated request that tests this card's settings before they are saved, so a wrong token or an unreachable host is answered on the form rather than by a card that says 'not connected' afterwards.")
		}),
		L({
			...iS,
			kind: V("browser"),
			loginUrl: N().optional().describe("What the sign-in window opens; the profile it persists IS the credential. Optional so one card can be the generic one that asks for the URL on its form instead, but a card must either pin this or declare a field that supplies it, or the window opens on nothing."),
			homeUrl: N().optional().describe("Where that same profile opens once it HAS a session: the owner's own hands on the connected browser. Separate from loginUrl because for some platforms the login lives on another site entirely (YouTube signs in at accounts.google.com)."),
			skill: M().min(1).describe("Checkout-relative SKILL.md teaching the agent this site's actions: rendered once per site, all its connected accounts on one roster (`${accounts}`), the core tool note at `${tools}`.")
		}),
		L({
			...iS,
			kind: V("host"),
			skill: M().min(1).describe("Checkout-relative SKILL.md teaching the agent that machine's shell.")
		}),
		L({
			...iS,
			kind: V("webext"),
			install: N().describe("Where this browser's extension is installed from: its store listing, or a page offering the build."),
			skill: M().min(1).describe("Checkout-relative SKILL.md teaching the agent to drive this browser.")
		}),
		L({
			...iS,
			kind: V("agent")
		})
	]).superRefine((e, t) => {
		if (e.kind === "cli") for (let n of e.fields.filter((e) => e.totp === !0)) Object.values(e.env).some((e) => e.includes(`\${${n.key}}`) || e.includes(`\${${n.key}:uri}`)) && t.addIssue({
			code: "custom",
			message: `env must not reference the totp field "${n.key}", the daemon mints codes from it instead`
		});
	}), oS = {
		name: "capabilities",
		description: "Capability cards this pack adds to the \"+\" grid: a connected CLI tool, a site the agent acts on as the owner through the shared browser, an operating system pack, a browser family the owner connects their own copy of, or a preset over a core kind. The card and its form are data here; the machinery that acts on them is core, which is why a card may only name one of these five kinds.",
		schema: I(aS)
	};
})), cS, lS, uS = b((() => {
	eS(), G(), cS = L({
		command: M().regex(/^[a-z0-9][a-z0-9-]*(\.[a-z0-9][a-z0-9-]*)+$/),
		title: M().min(1).describe("What the command palette shows. The manifest's value wins over the one passed at registration."),
		category: M().min(1).optional().describe("What the command acts on (\"Deployments\", \"Knowledge\"), drawn ahead of the title as \"Category: Title\" and searched with it. Use the extension's own name so its commands group together; omit it and the command stands alone."),
		icon: M().optional().describe("A name from the host's icon set, drawn beside the title."),
		keybinding: M().regex(/^\S+$/).optional().describe("A global keyboard shortcut, e.g. \"Mod+Shift+K\" — `Mod` is ⌘ on Apple and Ctrl elsewhere. Declared here because a global shortcut is consequential: the owner approves it at install, and the host binds only what was approved."),
		when: M().refine($x, { message: "not a valid `when` condition" }).optional().describe("When the shortcut applies, as a condition over the shell's context keys, `tabSurface == 'chat'`, `!editableTarget`. Without one the chord is claimed everywhere, including inside a terminal where a bare key belongs to the program running in it. The command palette ignores this: a command is always runnable by name.")
	}), lS = {
		name: "commands",
		description: "Commands this extension may register handlers for, surfaced in the command palette. Title, icon and shortcut all come from here rather than from the registration call, because this is what the owner approved at install.",
		schema: I(cS)
	};
})), dS, fS, pS = b((() => {
	G(), dS = L({
		id: M().regex(/^[a-z0-9][a-z0-9-]*$/),
		label: M().min(1).describe("The family's name, shown in the install dialog beside your other contributions. Per-row wording stays with the provider, which is the only thing that knows what it found.")
	}), fS = {
		name: "documents",
		description: "Per-directory documents this extension can offer. Your provider marks the rows in the Workspace tree it has something to say about, and the host opens your component as a tab.",
		schema: I(dS)
	};
})), mS, hS, gS = b((() => {
	G(), mS = L({ fragment: M().min(1).refine((e) => !e.split("/").includes(".."), { message: "fragment must stay inside the checkout" }).describe("Checkout-relative path to a file holding ONLY RUN and ENV instructions. FROM and privileged directives are rejected: those stay daemon-owned.") }), hS = {
		name: "environment",
		description: "A Dockerfile fragment baked into the sandbox image so your tools are actually installed at runtime: a whisper binary, a psql client. The owner approves the composed overlay and rebuilds out of band, so this does not take effect immediately.",
		schema: mS
	};
})), _S, vS, yS = b((() => {
	G(), _S = L({
		path: M().min(1).refine((e) => !e.startsWith("/") && !e.split("/").includes(".."), { message: "path must be workspace-root-relative and stay inside the workspace" }).describe("Workspace-root-relative, forward-slash, matched by prefix, so one entry covers an exact file (`.intentic/config/automations.json`), a directory (`.intentic/config/approvals/`, with the trailing slash so it cannot match a sibling file) or a name family (`.intentic/environment.`). Not a glob."),
		invalidates: I(M().min(1)).min(1).describe("The query keys this path makes stale, the first element of your own api.sandbox.key(...) keys. Keep both this and the path as narrow as the view actually needs: a broad prefix costs every connected browser a refetch on every matching write.")
	}), vS = {
		name: "files",
		description: "Which workspace files back your views, so the daemon's file watcher can tell the browser they went stale instead of you polling for it. The agent edits the workspace out of band from every HTTP route, and this push is the only thing that can notice.",
		schema: I(_S)
	};
})), bS, xS, SS, CS = b((() => {
	G(), bS = L({
		label: M().min(1),
		placeholder: M().min(1),
		hint: M().min(1).optional().describe("The sentence under the input, for a filter whose empty case is easy to get wrong.")
	}), xS = L({
		provider: M().regex(/^[a-z0-9][a-z0-9-]*$/).describe("The slug this source's automation triggers fire on."),
		events: I(L({
			type: M().regex(/^[a-z0-9][a-z0-9_]*$/),
			label: M().min(1)
		})).min(1).refine((e) => new Set(e.map((e) => e.type)).size === e.length, { message: "listener event types must be unique" }).describe("The event types this source can fire, with the wording the automation editor offers them under. The daemon accepts no others."),
		automation: L({
			label: M().min(1),
			mentionLabel: M().min(1).optional().describe("Only for a source whose message events distinguish being addressed. Absent ⇒ the editor offers no mention-only filter, rather than inventing semantics you did not promise."),
			channel: bS.describe("The primary narrowing filter, a channel, a room, a repo."),
			branchField: bS.optional().describe("A second narrowing axis, for a source whose events carry one: a pipeline's git ref, so a trigger can say \"the branch that ships\" rather than \"every agent's every failure\"."),
			sender: bS.optional().describe("How this source names a sender, and where a person finds that id. Declaring it promises that `author.id` is an identity the service vouches for, not a name the sender typed; absent ⇒ the editor offers no sender rules on this source."),
			senderGroup: bS.optional().describe("How this source names a sender's group, for a source whose messages carry `author.groups` (a Discord role). Absent ⇒ rules match ids only."),
			starterPrompt: M().min(1).describe("The first prompt a new automation on this source is prefilled with. You own the payload vocabulary, so you own the prompt that explains it.")
		}).describe("How the generic automation editor presents this source: its name, its filters, and the prompt it starts people on.")
	}), SS = {
		name: "listener",
		description: "A realtime event source this extension supplies, so automations can trigger on it. One declaration feeds both halves: the daemon accepts these event types and serves this provider's control surface, and the automation editor derives its source picker, filters and starter prompt from it, so a newly installed listener is configurable without a matching app release.",
		schema: xS
	};
})), wS, TS, ES = b((() => {
	G(), wS = L({
		name: M().regex(/^[a-z0-9][a-z0-9-]*$/),
		command: M().min(1),
		cwd: M().optional().describe("Relative to the extension checkout. Absent ⇒ the checkout root."),
		port: V("auto").optional().describe("Assign a free port and inject it as PORT."),
		preview: F().optional().describe("Expose the port on a tunnelled preview hostname."),
		autoStart: F().optional().describe("Launch it on install and on daemon boot, rather than waiting to be started.")
	}), TS = {
		name: "processes",
		description: "Long-lived background processes the daemon runs for this extension: a gateway holding a connection the daemon must not, a dev server. Managed the same way panel dev servers are, and startable and stoppable from the Extensions tab.",
		schema: I(wS)
	};
})), DS, OS, kS = b((() => {
	G(), DS = L({
		key: M().regex(/^[a-z0-9][a-zA-Z0-9-]*$/),
		type: B([
			"boolean",
			"string",
			"number",
			"enum"
		]).describe("Which control the Settings page draws. `enum` reads its choices from `enum`."),
		title: M().min(1),
		description: M().optional().describe("The line under the control."),
		default: uc([
			M(),
			P(),
			F()
		]).optional(),
		enum: I(M()).optional().describe("The choices, for type \"enum\". Meaningless otherwise."),
		secret: F().optional().describe("Mask the value in the UI and strip it from reads: a set secret round-trips as 'still set', never as its value."),
		env: M().regex(/^[A-Z][A-Z0-9_]*$/).optional().describe("Inject the stored value into the agent's shell environment under this name, every turn. How a credential you hold reaches the agent's command-line tools.")
	}), OS = {
		name: "settings",
		description: "Typed settings the host renders into the Settings page for you and persists daemon-side. You never draw the form or store the value; you read it back with api.settings.get.",
		schema: I(DS)
	};
})), AS, jS, MS = b((() => {
	G(), AS = L({
		id: M().regex(/^[a-z0-9][a-z0-9-]*$/),
		extensions: I(M().regex(/^[a-z0-9]+$/)).min(1).describe("Bare file extensions, no dot: e.g. [\"docx\", \"xlsx\"]."),
		fetch: B([
			"text",
			"blob",
			"url"
		]).describe("How much of the file the host hands you. `text` for a format that is text (svg, a subtitle track). `blob` for one that must be parsed end to end before any of it shows (a .docx, a spreadsheet), bounded by the daemon's raw-read cap. `url` for anything range-read rather than parsed (audio, video): your component gets a streaming URL to point an element at, never the bytes.")
	}), jS = {
		name: "viewers",
		description: "File formats this extension can render. The host resolves an opened file to your viewer by its extension, fetches the content, and renders your component with it: you keep none of the fetch lifecycle and none of the daemon credentials.",
		schema: I(AS)
	};
})), NS, PS, FS = b((() => {
	G(), NS = L({
		id: M().regex(/^[a-z0-9][a-z0-9-]*$/),
		label: M().min(1).describe("The name shown on the tile or tab. The manifest's value wins over the one passed at registration."),
		surface: B([
			"rail",
			"directory",
			"sandbox"
		]).describe("Where it appears. `rail` is a tile in the global left rail; `directory` is a panel opened from a repo in the Workspace tree; `sandbox` is a tab on the Sandbox hub, for a view whose subject is the box rather than the work."),
		badge: F().optional().describe("Allow this view to say something on its tile: a count, a glyph, or that work is running there. Declared because a badge interrupts from every other screen in the app; leave it out and any badge the extension registers is dropped.")
	}), PS = {
		name: "views",
		description: "Sidebar elements this extension may register at runtime. Each entry reserves an id and a surface; the extension supplies the component with api.views.register, and the host refuses any registration this list does not cover.",
		schema: I(NS)
	};
})), IS, LS, RS = b((() => {
	G(), Bx(), Ux(), Gx(), sS(), uS(), pS(), gS(), yS(), CS(), ES(), kS(), MS(), FS(), Bx(), Ux(), Gx(), sS(), uS(), pS(), gS(), yS(), CS(), ES(), kS(), MS(), FS(), IS = [
		PS,
		vS,
		jS,
		fS,
		lS,
		OS,
		TS,
		zx,
		hS,
		oS,
		SS,
		Hx,
		Wx
	], LS = L(Object.fromEntries(IS.map((e) => [e.name, e.schema.describe(e.description).optional()])));
})), zS, BS = b((() => {
	G(), Lx(), RS(), zS = L({
		$schema: M().optional().describe("The authoring schema, for editor completion and validation. Nothing at runtime reads it."),
		publisher: M().regex(/^[a-z0-9][a-z0-9-]*$/),
		name: M().regex(/^[a-z0-9][a-z0-9-]*$/),
		version: M().min(1).describe("Your own semver, display and identity only. The installed code's identity is the pinned commit sha."),
		category: M().min(1).optional().describe("Which section of the Extensions tab this sits under: a grouping by what it is FOR, which cannot be derived from what it contributes. A section this app has never heard of lands in 'Other' rather than failing to install."),
		...Ix,
		engines: L({ intentic: M().min(1) }).describe("A semver range over the host's extension API version, checked before your code is activated."),
		entry: M().min(1).refine((e) => !e.split("/").includes(".."), { message: "entry must stay inside the checkout" }).optional().describe("Repo-relative path of your prebuilt single-file ESM bundle, built with `vue` and `@intentic/extension-api` as externals. Absent ⇒ an extension with no UI."),
		server: M().min(1).refine((e) => !e.split("/").includes(".."), { message: "server must stay inside the checkout" }).optional().describe("Repo-relative path of your prebuilt single-file node ESM server bundle, exporting `activateServer`. Served under your own route namespace, which the daemon proxies. Nothing is provided at runtime but node builtins, so bundle everything else in. Absent ⇒ no backend."),
		permissions: L({
			sandbox: I(M()).optional().describe("Daemon routes your UI half may call. Your own backend namespace needs no entry: its backend is your own code."),
			daemon: I(M()).optional().describe("Daemon routes your SERVER half may call. Separate from `sandbox` because the two halves run as different principals: the UI as the owner's session, the backend as a minted per-extension token, so a grant to one must never quietly widen the other.")
		}).optional().describe("How far this extension may reach into the daemon, as \"<METHOD> <path-glob>\" entries where `*` matches one path segment: e.g. \"GET /panels\", \"POST /panels/*/start\". The install dialog shows these, the host refuses anything undeclared, and the usage ledger records which were actually earned."),
		contributes: LS.optional()
	});
})), VS = b((() => {
	BS();
})), HS = b((() => {})), US = b((() => {})), WS = b((() => {
	Nx(), Px(), VS(), BS(), HS(), RS(), US();
})), GS, KS, qS, JS, YS, XS, ZS, QS, $S, eC, tC, nC, rC, iC, aC, oC, sC, cC, lC, uC, dC, fC, pC, mC, hC, gC = b((() => {
	G(), WS(), GS = M().min(1).max(121).regex(/^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/), KS = L({
		updates: B([
			"notify",
			"agent",
			"auto"
		]),
		advisories: B(["auto-disable", "notify"])
	}), qS = L({
		ref: M().describe("The commit being offered."),
		version: M().optional().describe("What it calls itself."),
		url: M().describe("Where it comes from."),
		path: M().optional().describe("Where inside that repository it lives."),
		trust: B(["verified", "listed"]).describe("Whether anybody vouched for it, or it is merely listed."),
		securityFix: F().optional().describe("This release fixes a security problem in earlier ones, so here the old version is the dangerous one."),
		registry: M().describe("Which registry said so."),
		at: M().describe("When it was published."),
		needsReview: M().optional().describe("Why this one was not taken automatically and is asking for a person instead: it wants more than it used to, or nobody has vouched for it."),
		review: L({
			conversationId: M().describe("Where to read what it found."),
			at: M().describe("When it looked.")
		}).optional().describe("An agent has already read the difference between what is installed and this, so the card can link to what it found rather than offer to start looking.")
	}), JS = L({
		reason: M().describe("Why the registry pulled the listing, in its own words. Delisting protects people browsing; this record is for the person already running it."),
		registry: M().describe("Which registry said so."),
		at: M().describe("When."),
		autoDisabled: F().describe("Whether the sandbox has already switched it off.")
	}), YS = L({
		state: B([
			"watching",
			"healthy",
			"unhealthy"
		]).describe("How it has behaved since the last update. Checks catch broken, not wrong, so for a while after a swap it is simply watched."),
		detail: M().optional().describe("What is going wrong, when something is."),
		fromRef: M().optional().describe("Which version it was updated from, which is what going back would return to."),
		at: M().describe("When the watching started."),
		autoReverted: F().optional().describe("The update was already rolled back without anybody asking. The record stays rather than pretending the attempt never happened.")
	}), XS = L({
		added: I(M()).describe("What the new version asks for that the running one does not. The whole point of the comparison."),
		removed: I(M()).describe("What it no longer asks for."),
		unchanged: I(M()).describe("What stays the same.")
	}), ZS = L({
		id: GS.describe("Which extension."),
		ref: M().regex(/^[0-9a-f]{40}$/).optional().describe("Which commit, in full. Leave it out for whatever the last check found, which is what most callers mean.")
	}), QS = L({
		ref: M().describe("The commit this would install."),
		version: M().describe("What that version calls itself."),
		installedVersion: M().describe("What is running now."),
		engines: M().describe("Which sandbox versions the new one says it needs."),
		compatible: F().describe("Whether this sandbox is one of them."),
		powers: XS.describe("Exactly what the new code asks for that the running one does not. This is what approving an update is approving.")
	}), $S = L({
		ok: V(!0).describe("It went through."),
		ref: M().describe("Which commit is now running."),
		rebuildNeeded: F().optional().describe("The new version changes what the sandbox image contains, so a one-time rebuild is still pending and the update is not wholly landed yet.")
	}), eC = L({
		id: GS.describe("Which extension."),
		updates: B([
			"notify",
			"agent",
			"auto"
		]).optional().describe("What to do about a newer version: tell you, have an agent read the difference first, or just take it."),
		advisories: B(["auto-disable", "notify"]).optional().describe("What to do about a security warning: switch it off at once, or tell you.")
	}), tC = L({
		ok: V(!0).describe("The check ran."),
		checkedAt: M().describe("When, so a screen can date the answer.")
	}), nC = L({
		id: GS.describe("The extension's id."),
		manifest: zS.describe("What it declares about itself: what it contributes, what it needs, and what it may reach."),
		commit: M().describe("Exactly which commit is installed."),
		source: B([
			"builtin",
			"installed",
			"workspace"
		]).describe("Where the code comes from: baked into the sandbox image and not removable, installed from a repository at a pinned commit, or written in this workspace and edited in place."),
		enabled: F().describe("The owner's switch. A switched-off extension is still listed, which is what makes it switchable back on, but nothing it contributes is wired up."),
		essential: F().optional().describe("Its switch is fixed on, because it is the only way to see or stop an engine the sandbox runs regardless. Hiding that page would not stop the spending, only your ability to notice it. Declared by the core about its own surfaces, never by an extension about itself, which would be a pack making itself un-removable."),
		usage: z(M(), L({
			calls: P().int().nonnegative().describe("How many times."),
			last: M().describe("When, most recently.")
		})).optional().describe("How much of the reach it asked for it has actually used, keyed by what it declared. Absent means never observed doing anything, which is a different claim from uses none of them, and the two have to stay tellable apart: reading either as these permissions are unnecessary turns evidence into a guess with a number on it."),
		backend: L({
			state: B([
				"running",
				"error",
				"absent",
				"incompatible",
				"starting",
				"stopped"
			]).describe("How its server half is doing. Absent means the code is not in this image at all; incompatible means it needs a different sandbox version."),
			detail: M().optional().describe("What went wrong, so a backend that failed to start is a sentence rather than an address that answers nothing.")
		}).optional().describe("Present only for an extension that ships a server half."),
		update: qS.optional().describe("A newer version waiting. All five of these exist only for one installed from a repository: a built-in updates with the image and one written here is edited live."),
		advisory: JS.optional().describe("A security warning about the installed version."),
		health: YS.optional().describe("How it has behaved since the last update, which is what decides whether that update sticks."),
		previous: L({
			ref: M().describe("The commit that was running before."),
			version: M().optional().describe("What it called itself.")
		}).optional().describe("The version kept one step back, which is what going back means."),
		updatePolicy: KS.optional().describe("The owner's standing answer for this one: tell me, have an agent look, or just do it.")
	}), rC = L({
		dir: M().describe("Which folder."),
		error: M().describe("Why it could not be read.")
	}), iC = L({
		extensions: I(nC).describe("What is installed."),
		invalid: I(rC).describe("Extensions written here that could not be read at all. Listed rather than dropped, because there is no install moment at which to reject a broken one, so this is its only way of saying anything."),
		updatesCheckedAt: M().optional().describe("When updates were last looked for. Absent until the first check has run. Sent so a screen can say checked an hour ago rather than presenting staleness as certainty.")
	}), aC = L({
		settings: z(M(), uc([
			M(),
			P(),
			F()
		])).describe("The values, minus anything marked secret."),
		secretsSet: I(M()).describe("Which of its secret settings actually hold a value. Names only: the values themselves never come back.")
	}), oC = L({
		id: M().describe("Which extension."),
		settings: z(M(), uc([
			M(),
			P(),
			F()
		])).describe("The values to write. A key the extension never declared is refused rather than quietly stored.")
	}), sC = L({
		id: M().describe("Which extension."),
		enabled: F().describe("On or off.")
	}), cC = L({
		publisher: M().regex(/^[a-z0-9][a-z0-9-]*$/).describe("Who it is by, which together with the name makes its id."),
		name: M().regex(/^[a-z0-9][a-z0-9-]*$/).describe("What it is called.")
	}), lC = L({
		id: M().describe("The id it was given."),
		dir: M().describe("Where its files are, so you can open them.")
	}), uC = L({
		id: M().describe("The name the owner gave it, which is also the agent's handle for it."),
		kind: M().describe("Which core kind it is underneath: cli, browser, host or webext."),
		card: M().describe("The card it was added from, named as the grid names it."),
		secrets: I(M()).describe("Credential fields stored for it, by name. The values are deleted with the entry and cannot be recovered from here."),
		effect: M().describe("What tearing it down actually takes away, in one sentence.")
	}), dC = L({
		id: GS.describe("The extension's id, as the list addresses it."),
		name: M().describe("Its publisher.name identity, which is the key its settings and switch are stored under."),
		version: M().describe("The version being removed."),
		source: B([
			"builtin",
			"installed",
			"workspace"
		]).describe("Where its code comes from, which decides what removal means."),
		blocked: M().optional().describe("Why this one cannot be removed, when it cannot. Present means every other field is what would go if it could."),
		files: I(L({
			path: M().describe("Workspace-relative."),
			detail: M().describe("What is in there.")
		})).describe("Directories deleted outright. For an extension written here this is the owner's own source, which nothing else keeps a copy of."),
		connections: I(uC).describe("Connections configured from its cards, which are removed with it."),
		settings: I(L({
			key: M().describe("Which setting."),
			secret: F().describe("Whether its value is a stored credential.")
		})).describe("Values the owner entered for this extension that are forgotten. Only keys actually holding a value are listed."),
		processes: I(M()).describe("Background processes it declared, stopped before its files go."),
		automations: I(M()).describe("Automations of the owner's own that wake on a listener this extension provides. They are NOT removed, and are listed because they stop firing, which is the sort of thing a removal is otherwise discovered by."),
		rebuildNeeded: F().describe("It bakes a layer into the sandbox image, so what it added to the image is only gone after the next environment rebuild."),
		keeps: I(M()).describe("What removal deliberately leaves alone, so the list of what goes can be read as complete.")
	}), fC = L({
		ok: V(!0).describe("It is gone."),
		connections: I(M()).describe("Which configured connections went with it, by name."),
		rebuildNeeded: F().optional().describe("Its image layer is still in the running sandbox until the next environment rebuild; nothing else is pending.")
	}), pC = L({ reports: z(M(), z(M(), P().int().positive())).describe("Each extension that called something, and the counts against the declared powers it exercised.") }), mC = L({
		id: M().describe("Which extension."),
		name: M().describe("Which of its declared processes.")
	}), hC = L({
		name: M().describe("Which process."),
		running: F().describe("Whether it is up. False with a port means it crashed and the supervisor is waiting to retry it."),
		port: P().optional().describe("The port it was given."),
		restarts: P().optional().describe("How many times it died and was brought back since it was started. A growing number is a service in trouble."),
		lastExitCode: P().optional().describe("How it last exited, when it has crashed at least once."),
		previewUrl: M().optional().describe("Where to open it, when it has an address.")
	});
})), _C, vC = b((() => {
	q(), vb(), gC(), Sx(), Q(), _C = {
		list: K.route({
			method: "GET",
			path: "/extensions",
			summary: "Installed extensions",
			description: "Every extension installed here, resolved to the manifest the owner approved, which is what the app boots its extension host from. The code itself is served separately, because raw script bytes are not a JSON answer."
		}).output(iC),
		create: K.route({
			method: "POST",
			path: "/extensions/workspace",
			summary: "Write a new extension in place",
			description: "Scaffolds a working extension into this workspace and installs it. The only call here that creates one, and it exists because that folder is otherwise reachable only through an agent's file tools, which is a fine way to change an extension and a poor way to meet the idea of one."
		}).input(cC).output(lC),
		removalPlan: K.route({
			method: "GET",
			path: "/extensions/{id}/removal",
			summary: "What removing an extension would take away",
			description: "Everything one removal destroys, before it happens: the files deleted, the connections configured from its cards, the settings and credentials forgotten, the background processes stopped, and the owner's own automations that quietly stop firing. Also answerable for an extension that cannot be removed, in which case it says why."
		}).input(ub).output(dC),
		remove: K.route({
			method: "POST",
			path: "/extensions/{id}/remove",
			summary: "Remove an extension",
			description: "Uninstalls it and everything that only existed because it was here: the connections added from its cards, with their stored credentials, its settings, its switch and its update record. What the owner made with it — automations, files in the workspace — is left alone. Owner only, for the same reason installing is. Built-in extensions cannot be removed; switch them off instead."
		}).input(ub).output(fC),
		settings: K.route({
			method: "GET",
			path: "/extensions/{id}/settings",
			summary: "An extension's settings",
			description: "The current values for the settings this extension declared it has."
		}).input(ub).output(aC),
		setSettings: K.route({
			method: "POST",
			path: "/extensions/{id}/settings",
			summary: "Change an extension's settings",
			description: "Writes new values. A key the extension never declared is refused rather than quietly stored, the same honesty rule that governs everything else an extension claims."
		}).input(oC).output(X),
		setEnabled: K.route({
			method: "POST",
			path: "/extensions/{id}/enabled",
			summary: "Turn an extension on or off",
			description: "The owner's switch. Turning one off stops its background processes at once. What it contributes to an agent's tools is rebuilt at the start of the next turn, and anything it adds to the sandbox image only at the next rebuild."
		}).input(sC).output(X),
		recordUsage: K.route({
			method: "POST",
			path: "/extensions/usage",
			summary: "Record what extensions just used",
			description: "One batch written by the app rather than measured by the daemon, because the permission gate runs in the browser: from the sandbox's side extension traffic is indistinguishable from anyone else's. This is how the record of which powers each extension actually exercises gets kept without one reporting request per extension."
		}).input(pC).output(X),
		readiness: K.route({
			method: "GET",
			path: "/extensions/{id}/readiness",
			summary: "Whether an extension is fit to share",
			description: "The checks that can be answered from an extension's own files, for an author about to publish. Read on demand rather than carried on the list, because it reads the code off disk each time."
		}).input(ub).output(xx),
		checkUpdates: K.route({
			method: "POST",
			path: "/extensions/updates/check",
			summary: "Look for extension updates now",
			description: "Compares every installed extension against its source and reports what is newer, what carries an advisory and what looks unhealthy. This also happens on a schedule; call it to check on demand."
		}).output(tC),
		updatePreview: K.route({
			method: "POST",
			path: "/extensions/{id}/update/preview",
			summary: "What an update would change",
			description: "The read before the click: which versions are involved and exactly which powers the new code asks for that the running one does not. Costs one throwaway copy of the source, the same as browsing a registry entry."
		}).input(ZS).output(QS),
		applyUpdate: K.route({
			method: "POST",
			path: "/extensions/{id}/update",
			summary: "Update an extension",
			description: "The whole swap as one transaction: fetch, check, quiet the running one, replace it while keeping the outgoing copy one step back, restart and watch it come up. The existing configuration is kept, so a token for a private source survives what removing and re-adding would lose. Owner only, because it changes what code runs."
		}).input(ZS).output($S),
		revert: K.route({
			method: "POST",
			path: "/extensions/{id}/revert",
			summary: "Go back to the previous version",
			description: "Swaps the copy kept from before the last update back into place. Owner only, for the same reason updating is."
		}).input(ub).output($S),
		setUpdatePolicy: K.route({
			method: "POST",
			path: "/extensions/{id}/update-policy",
			summary: "How an extension should handle its own updates",
			description: "The owner's standing answer for one extension: tell me, have an agent look at it, or just do it. Security advisories can be opted out of separately."
		}).input(eC).output(X),
		processStatus: K.route({
			method: "GET",
			path: "/extensions/{id}/processes/{name}",
			summary: "Whether an extension's background process is up",
			description: "The state of one process an extension declared, with the port it was given and its preview address if it has one."
		}).input(mC).output(hC),
		processStart: K.route({
			method: "POST",
			path: "/extensions/{id}/processes/{name}/start",
			summary: "Start an extension's background process",
			description: "Brings one of an extension's declared processes up in an attachable terminal."
		}).input(mC).output(X),
		processStop: K.route({
			method: "POST",
			path: "/extensions/{id}/processes/{name}/stop",
			summary: "Stop an extension's background process",
			description: "Shuts one of an extension's declared processes down and frees its port."
		}).input(mC).output(X)
	};
})), yC = b((() => {
	Ku(), Xu(), qu.map((e) => ({
		label: e.label,
		value: e.id
	})), Object.fromEntries(qu.map((e) => [e.id, e.access])), qu.filter((e) => e.access.kind === "free").map((e) => e.id), Object.fromEntries(qu.map((e) => [e.id, e.vendor])), qu.filter((e) => e.planLimits).map((e) => e.id);
})), bC = b((() => {
	yC();
})), xC, SC, CC, wC, TC, EC, DC, OC, kC, AC, jC, MC, NC = b((() => {
	xp(), Y(), xC = (e) => e.map((e) => new RegExp(e.source, `${e.flags}g`)), SC = [
		/\bgit\s+push\b[^|;&]*\s(?:-f\b|--force\b|--force-with-lease\b|--delete\b)/,
		/\bgit\s+reset\b[^|;&]*\s--hard\b/,
		/\bgit\s+clean\b[^|;&]*\s-{1,2}[a-zA-Z]*f/,
		/\bgit\s+branch\b[^|;&]*\s(?:-D\b|--delete\s+--force\b|--force\s+--delete\b)/,
		/\bgit\s+filter-branch\b/
	], CC = [/\{\{secret:[A-Za-z0-9_./-]+\}\}/], wC = String.raw`[\w~$.{}/\\-]*`, TC = [
		/(?<![\w.])\.env(?!\.(?:example|sample|template))(?:\.[\w-]+)?\b/,
		/\.ssh(?!\w)(?!\/(?:known_hosts|config|authorized_keys|environment)(?!\w))(?!\/[\w.-]*\.pub(?!\w))(?:\/[\w.\-/]*)?/,
		/\bid_(?:rsa|dsa|ecdsa|ed25519)\b(?!\.pub\b)/,
		new RegExp(String.raw`${wC}\.aws/credentials\b`),
		new RegExp(String.raw`${wC}\.npmrc(?!\.(?:example|sample|template))\b`),
		new RegExp(String.raw`${wC}\.git-credentials\b`),
		new RegExp(String.raw`${wC}\.credentials\.json\b`)
	], EC = [
		/\b(?:npm|pnpm|yarn|bun)\s+publish\b/,
		/\bcargo\s+publish\b/,
		/\bgh\s+release\s+create\b/,
		/\bdocker\s+push\b/,
		/\btwine\s+upload\b/
	], DC = String.raw`(?:localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\])(?::\d+)?(?=[/?#\s'"\x60]|$)`, OC = [new RegExp(String.raw`\b(?:curl|wget)\b[^|;&]*\bhttps?://(?!${DC})`), new RegExp(String.raw`\bfetch\(\s*['"\x60]https?://(?!${DC})`)], kC = [
		/\bmkfs(?:\.\w+)?\b/,
		/\bwipefs\b/,
		/\bblkdiscard\b/,
		/\bsgdisk\b[^|;&]*\s(?:--zap-all|-Z)\b/,
		/\bdd\b[^|;&]*\bof=(?:\/dev\/|['"`]\/dev\/)/,
		/\bshred\b[^|;&]*\s\/dev\//,
		/>\s*\/dev\/(?:[shv]d[a-z]|nvme\d|disk\d|mmcblk\d)/
	], AC = [
		/\b(?:docker|podman)\s+volume\s+(?:rm|remove|prune)\b/,
		/\b(?:docker|podman)\s+system\s+prune\b/,
		/\b(?:docker(?:\s+compose|-compose)?|podman-compose)\s+down\b[^|;&]*\s(?:-v\b|--volumes\b)/
	], xC(SC), xC(CC), xC(TC), xC(EC), xC(OC), xC(kC), xC(AC), jC = {
		"git.destructive": "rewrite or discard git history",
		"files.destructive": "delete files recursively",
		"system.destructive": "wipe a disk, or delete a whole root directory",
		"container.state": "delete a container volume or the data in it",
		"secrets.access": "read credential material",
		"package.publish": "publish or release a package",
		"network.outbound": "send a request out to the internet"
	}, MC = {
		"git.destructive": [
			{
				code: "git push --force",
				qualifier: "also -f and --force-with-lease"
			},
			{ code: "git push --delete" },
			{ code: "git reset --hard" },
			{ code: "git clean -f" },
			{ code: "git branch -D" },
			{ code: "git filter-branch" }
		],
		"files.destructive": [
			{ code: "rm -rf <path>" },
			{
				code: "fs.rm(<path>, { recursive: true })",
				qualifier: "also rmSync, rmdir, rmdirSync"
			},
			{ code: "rimraf(<path>)" }
		],
		"system.destructive": [
			{ code: "mkfs" },
			{ code: "wipefs" },
			{ code: "blkdiscard" },
			{ code: "sgdisk --zap-all" },
			{ code: "dd of=/dev/…" },
			{ code: "shred /dev/…" },
			{ code: "> /dev/sda" },
			{
				code: "rm -rf /",
				qualifier: "only when the target is a root, listed below"
			}
		],
		"container.state": [
			{
				code: "docker volume rm",
				qualifier: "also remove, prune, and podman for any of these"
			},
			{ code: "docker system prune" },
			{ code: "docker compose down -v" }
		],
		"secrets.access": [
			{
				code: "{{secret:NAME}}",
				qualifier: "a stored secret, used in the command itself"
			},
			{ code: ".env" },
			{ code: ".ssh/*" },
			{ code: "id_rsa" },
			{ code: ".aws/credentials" },
			{ code: ".npmrc" },
			{ code: ".git-credentials" }
		],
		"package.publish": [
			{
				code: "npm publish",
				qualifier: "also pnpm, yarn, bun"
			},
			{ code: "cargo publish" },
			{ code: "gh release create" },
			{ code: "docker push" },
			{ code: "twine upload" }
		],
		"network.outbound": [{
			code: "curl https://…",
			qualifier: "also wget; loopback does not count"
		}, {
			code: "fetch(\"https://…\")",
			qualifier: "in a script"
		}]
	};
})), PC, FC, IC, LC, RC, zC, BC, VC, HC, UC, WC = b((() => {
	G(), NC(), Y(), PC = /* @__PURE__ */ new Set(["system.destructive"]), FC = /* @__PURE__ */ new Set([
		"system.destructive",
		"container.state",
		"files.destructive"
	]), IC = (e) => e === "sandbox" ? PC : FC, LC = {
		sandbox: "/ and /history. Not /work, /usr or /etc: the worktree's changes are uncommitted work, and the container comes back from its image.",
		device: "/, a home directory, a Windows drive, and the top-level directories an OS keeps."
	}, RC = (e) => Object.fromEntries(_d.options.map((t) => [t, IC(t).has(e) ? "hard" : "judged"])), zC = (e) => _d.options.filter((t) => e.tiers[t] === "hard").length, vd.options.map((e) => ({
		commandClass: e,
		label: jC[e],
		patterns: MC[e],
		tiers: RC(e),
		...e === "system.destructive" ? { notes: LC } : {}
	})).sort((e, t) => zC(t) - zC(e)), BC = B([
		"off",
		"watch",
		"on"
	]), VC = B([
		"allow",
		"ask",
		"refuse"
	]), L({
		decision: VC.describe("Run it, ask the owner, or refuse it."),
		sentence: M().describe("What this command does and why it was allowed, held or refused, in one plain sentence."),
		policyLine: M().optional().describe("A line the owner could add to their policy so this stops being asked. Shown on the card before it is accepted.")
	}), HC = L({
		at: P().int().describe("When it was judged, epoch milliseconds."),
		program: M().describe("The command or script, excerpted."),
		classes: I(M()).describe("The kinds of consequence triage matched, which is why a judge looked."),
		decision: VC.describe("What the judge decided."),
		sentence: M().describe("The judge's sentence."),
		outcome: B([
			"allowed",
			"asked",
			"refused"
		]).describe("What the gate did in the end."),
		answer: B([
			"allowed",
			"declined",
			"unanswered"
		]).optional().describe("How the owner answered, when they were asked."),
		machine: M().optional().describe("Which connected device it was headed for, when it was not this sandbox.")
	}), UC = L({
		text: M().describe("The policy, as the owner wrote it."),
		custom: F().describe("False when nobody has edited it and this is the text this product ships.")
	});
})), GC, KC, qC, JC, YC, XC, ZC, QC, $C, ew, tw, nw, rw, iw, aw, ow, sw, cw, lw, uw, dw, fw, pw, mw, hw, gw, _w, vw, yw, bw, xw, Sw, Cw, ww, Tw, Ew, Dw, Ow, kw = b((() => {
	xp(), G(), WC(), Bu(), Y(), GC = B([
		"intentic",
		"claude",
		"custom"
	]), KC = L({ base: B(["intentic", "claude"]) }), qC = B([
		"off",
		"versions",
		"full"
	]), JC = B([
		"file.edited",
		"turn.ending",
		"push.starting",
		"agent.finished",
		"agent.landed"
	]), YC = B([
		"verify-edits",
		"verify-removals",
		"verify-ui-edits",
		"verify-tests",
		"version-landed"
	]), XC = R("kind", [
		L({
			kind: V("command"),
			command: M().max(500),
			timeoutMs: P().min(6e4).max(36e5).default(9e5)
		}),
		L({
			kind: V("instruct"),
			text: M().min(1).max(4e3)
		}),
		L({
			kind: V("verdict"),
			verdict: B(["allow", "hold"])
		}),
		L({
			kind: V("builtin"),
			name: YC
		})
	]), ZC = B([
		"clean",
		"error",
		"conflict",
		"checks-failed"
	]), QC = L({
		repo: M().min(1).optional(),
		paths: I(M().min(1)).max(20).optional(),
		outcome: I(ZC).optional(),
		sample: P().gt(0).lt(1).optional()
	}), $C = {
		"file.edited": ["command"],
		"turn.ending": [
			"builtin",
			"instruct",
			"command"
		],
		"push.starting": ["command"],
		"agent.finished": ["verdict"],
		"agent.landed": ["builtin"]
	}, ew = {
		"turn.ending": [
			"verify-edits",
			"verify-removals",
			"verify-ui-edits",
			"verify-tests"
		],
		"agent.landed": ["version-landed"]
	}, tw = L({
		id: M().regex(/^[a-z0-9][a-z0-9-]*$/),
		label: M().min(1).max(80),
		moment: JC,
		when: QC.optional(),
		action: XC,
		enabled: F().default(!0)
	}).refine((e) => $C[e.moment].includes(e.action.kind), {
		message: "that action cannot stand at that moment",
		path: ["action"]
	}).refine((e) => e.action.kind !== "builtin" || (ew[e.moment] ?? []).includes(e.action.name), {
		message: "that built-in cannot stand at that moment",
		path: ["action"]
	}), nw = z(M(), P()), rw = B([
		"builtin",
		"own",
		"capability",
		"extension",
		"plugin",
		"persona",
		"dropped"
	]), iw = M().regex(/^[a-z0-9][a-z0-9-]*$/, "a skill name is lowercase letters, digits and dashes"), aw = L({
		id: M().describe("Its handle, which reading and deleting take. A skill of your own is simply its name; one belonging to something else is qualified, because two packages may each ship a review."),
		name: M().describe("Its name."),
		description: M().describe("What it is for, which is the line the agent reads to decide whether to reach for it. Empty when the skill declares none, which is worth showing as the blank it is: a skill with no description is rarely picked."),
		origin: rw.describe("Where it came from."),
		owner: M().optional().describe("Who ships it, as the row would name them."),
		enabled: F().describe("Whether the agent can reach it."),
		switchable: F().describe("Whether this surface can switch it. Everything else is on because its extension or its plugin is, and a switch here that silently did nothing would be worse than none, so the row names its owner instead."),
		editable: F().describe("Whether it can be rewritten here. Your own only: editing somebody else's in place would be undone the next time the thing that ships it catches up."),
		removable: F()
	}), ow = I(aw), sw = L({
		id: M().describe("The skill's id, which can carry the owner it came from."),
		name: M().describe("Its name."),
		body: M().describe("The instructions themselves, as written.")
	}), cw = L({ id: M().min(1).describe("Which skill. It travels in the query rather than the address, because an id can name the owner it came from and that will not fit in a path.") }), lw = L({
		name: iw.describe("What to call it. Saving over an existing name rewrites it, which is also how one is renamed."),
		description: M().min(1).max(1024).describe("What it is for, which is what the agent reads to decide whether to reach for it."),
		body: M().min(1).describe("The skill itself.")
	}), uw = L({ name: iw.describe("Which skill to delete. The stored text and the agent's copy go together, so nothing is left half done.") }), dw = L({
		name: iw.describe("Which skill of your own to switch."),
		on: F().describe("On writes the agent's copy from the stored text; off removes that copy and keeps the text.")
	}), fw = L({
		stableSystemPrompt: F().default(!1).describe("Keep the instructions identical between turns so the provider can cache them, moving anything that varies into the message instead. Cheaper, at the cost of some flexibility."),
		skills: I(M()).default(["lsp", "fileq"]).describe("Which built-in tools are switched on. A skill of your own is not listed here: it is on while the agent's copy of it exists."),
		personaRouting: F().default(!0).describe("Whether a new chat is matched to one of your personas from its first message. The message is read once it is sent, by the model on the persona-routing list, and the chat says in its own transcript what was asked and which persona it landed on. Never applies to unwatched runs, which name their persona themselves."),
		hashlineEdits: F().default(!1).describe("Have the agent edit files by line number rather than by quoting the text it wants replaced. Cheaper on large files, and less forgiving of a stale read."),
		systemPromptMode: GC.default("intentic").describe("Which instructions the agent starts from: intentic's own, the ones the installed Claude Code carries, or your own. The first two both get this product's own guidance added on top; your own gets nothing added, which is the point of it."),
		systemPrompt: M().max(2e4).default("").describe("Your own instructions, used only when the mode above says custom. Then it is the whole of them: both built-in bases go, and so does everything this product would otherwise add, including the guidance the chat's own cards are driven by. That is the price of total control."),
		iqSearch: F().default(!1).describe("Teach the agent how to use this workspace's own search tool, rather than leaving it to grep around."),
		iqSearchHoldout: P().min(0).max(1).default(0).describe("What share of conversations to run without that teaching, so the two can be compared. Whole conversations rather than individual turns, because once the teaching is in a session, withholding it from the next request does not make the model forget it."),
		workspaceMap: F().default(!1).describe("Open every conversation with a map of the project it starts in: what is in it, what each part is for, and where the agent is standing. Worked out fresh each time rather than written down anywhere, because a written layout is wrong within a fortnight. Off by default, since it spends tokens on the first message of every conversation."),
		workspaceMapHoldout: P().min(0).max(1).default(0).describe("What share of conversations to open without the map, so the two can be compared. Whole conversations rather than individual turns, because the map is sent once and stays in the conversation's history afterwards."),
		sidecars: F().default(!1).describe("Keep an up-to-date markdown rendering of every document, image and audio file in the workspace, made in the background as files land, so the agent reads a pre-derived text instead of paying to parse the file mid-task. Costs background CPU on a document-heavy workspace, so it is a switch rather than a default."),
		dependencyFreshness: qC.default("off").describe("Whether a version the agent is about to pin is checked against the package's own registry first. Facts only, or facts plus the name of a maintained replacement where the registry agrees the current choice has been abandoned. It tells the agent and lets it decide rather than refusing, because matching a version your project already uses is usually the right answer and a gate would fight it."),
		outputCleaners: M().default("").describe("Which command outputs to trim before the agent reads them, cutting the noise a build tool prints without cutting what it said."),
		outputHoldout: P().min(0).max(1).default(0).describe("What share of commands to leave untrimmed, so the saving can be measured against a real comparison rather than estimated."),
		modelRoles: pc(Ru, I(wd).max(10)).default({}).describe("Which models do which job, one ordered list per job: commit messages, session titles, the safety judge, pipeline fixes, and every other place this sandbox picks a model for you. Tried in order, so one spent account does not take a job down. Nothing is chosen for you: a one-shot job with no list does not run, and a whole session with no list opens on whatever your own chat is set to."),
		changelogRepos: I(M()).max(50).default([]).describe("Which repositories keep a changelog, and so get a user-facing note written alongside each merge. A list rather than a switch, and empty by default, because the commit writer's standing rule is to copy the house style rather than impose one, and a repository that has never written such a note gives it nothing to copy."),
		autoTier: B([
			"off",
			"shadow",
			"on"
		]).default("shadow").describe("Whether an easy-looking turn may run on a cheaper model from the same provider. Three states rather than a switch, because the middle one is the only honest road to the third: it scores every turn and routes nothing, so the guess can become a measurement before it changes anything. It can only ever route down, so the worst case is one turn's quality rather than a bill nobody asked for."),
		autoTierEagerness: B([
			"cautious",
			"balanced",
			"eager"
		]).default("balanced").describe("How readily a turn counts as simple enough for the cheaper model. It moves only the cutoff: at every setting a turn still has to say something positively easy, so nothing here can downgrade a short vague request."),
		autoFastModels: I(M()).max(10).default([]).describe("Which cheaper model a downgraded turn lands on. A list so a sandbox spanning providers can name a rung on each, but not a fallback ladder: an entry naming a different provider than the turn is on is skipped rather than tried, because switching provider retires the conversation and starting over to save a fraction of a penny is not a saving. Empty picks the cheapest the turn's own provider publishes."),
		agentRetentionDays: P().min(0).max(365).default(3).describe("How many days a finished conversation stays on the board before being put away. Zero means never. The one setting here that defaults on, because each card left behind is a real working copy on disk, not just a row."),
		resumeAfterOutage: F().default(!1).describe("Whether a turn killed by the model provider failing is re-run automatically, backing off between attempts. The sandbox-wide default; any one conversation can say otherwise. Off to begin with, because a retry spends your allowance on a turn you sent once and only you can say whether it was worth paying for twice. Worth turning on for a sandbox whose work mostly happens with nobody in the room."),
		resumeAfterLimit: F().default(!1).describe("Whether a turn a spent usage limit refused is sent again by itself once the allowance reopens. The sandbox-wide default; any one conversation can say otherwise. Off to begin with, because the allowance is your budget and a turn that spends it the second it comes back is not a decision to make for you. Worth turning on for a sandbox whose work mostly happens with nobody in the room."),
		moveAfterLimit: F().default(!1).describe("Whether a turn a spent usage limit refused is moved to another connected account of the same provider that still has room, as soon as the refusal lands. The sandbox-wide default; any one conversation can say otherwise. Off to begin with, because it spends a second account on your behalf. With no account that has room the turn waits as the setting above says."),
		limitMoveCarryUnder: P().int().min(0).default(1e5).describe("When a spent usage limit moves a turn to another account, carry the provider session (the model keeps everything, and re-reads all of it once on the other account) while the conversation's context is under this many tokens; at or above it, start a fresh session with the sandbox's measured brief instead. Zero always starts fresh."),
		autoResumeOnRestart: F().default(!1).describe("Whether a turn killed by the sandbox restarting is re-run once it comes back. Off to begin with, for the same reason: it would spend your allowance on work you are not watching and edit files while you are still waiting for the sandbox to return. Either way the interruption is recorded rather than silently lost."),
		adoptedChecks: z(M(), M()).default({}).describe("Which repositories may run the checks they declare for themselves, and exactly which version of those checks you agreed to. A repository's declaration does nothing until it appears here, the same rule git keeps for hooks, which are never cloned; and a declaration that changes afterwards is held until you look at it again."),
		rules: I(tw).max(50).default([]).describe("Standing instructions you give the sandbox about its own work: ask for proof before a turn ends, run something before a push, hold or release finished work. Empty is the default and is exactly the behaviour of a fresh sandbox, because each of those defaults is what no rule matched means at its own moment."),
		automationFailureLimit: P().min(0).max(20).default(0).describe("How many failures in a row before an automation switches itself off. Zero means never, which is the default, because the failure is not always the automation's fault and a job disabled at three in the morning is one nobody re-enables. Only real errors count: a guard deciding there was nothing to do, or the sandbox dying mid-run, say nothing about the automation."),
		admission: yd.prefault({}).describe("Whether work started from outside may run, per kind of trigger: let it, hold it for approval, or refuse it. Composes with each automation's own setting, and the stricter of the two wins, so holding every visitor's message needs no edit to each automation."),
		actionRules: z(M(), gd).default({}).describe("What an agent may do out in the world, per kind of action: go ahead, ask first, or never."),
		commandJudge: BC.default("on").describe("Whether a model reads your safety policy before a flagged command runs. Off judges nothing and asks about nothing; Watch judges everything and records it without ever interrupting you, which is how you find out what your policy actually does before you let it stop anything; On lets the verdict decide. Wiping a disk or deleting under /history asks at every setting — that rule is typed rather than judged, and cannot be turned off."),
		subagentsAtOnce: P().min(1).max(200).default(20).describe("How many subagents may work at the same time."),
		subagentsPerTurn: P().min(1).max(2e3).default(200).describe("How many a single turn may start in total."),
		subagentDepth: P().min(1).max(10).default(3).describe("How many levels deep the delegation may go, since a subagent can start subagents of its own.")
	}), pw = L({
		text: M(),
		version: M()
	}), mw = L({
		id: M(),
		commands: P(),
		savedTokens: P()
	}), hw = L({
		updatedAt: P().optional(),
		commands: P(),
		rawTokens: P(),
		emittedTokens: P(),
		savedPct: P(),
		perCleaner: I(mw),
		holdout: L({
			cleaned: P(),
			heldOut: P(),
			measuredSavedPct: P().optional()
		}),
		gaps: I(L({
			command: M(),
			commands: P(),
			tokens: P()
		}))
	}), gw = L({
		turns: P(),
		mean: P()
	}), _w = L({
		metric: B([
			"searchCalls",
			"openingSearches",
			"openingListings",
			"callsBeforeTarget"
		]),
		on: gw,
		off: gw,
		controlTurnsNeeded: P().optional(),
		marginPct: P().optional(),
		deltaPct: P().optional(),
		saved: P().optional()
	}), vw = L({
		metrics: fc([_w], _w),
		minTurns: P(),
		sampleUnit: B([
			"turns",
			"conversations",
			"opening turns"
		]).optional(),
		cohort: M().optional()
	}), yw = L({
		judged: P(),
		fast: P(),
		atStakeUsd: P(),
		routed: P(),
		routedUsd: P(),
		escalated: P(),
		denied: P()
	}), bw = L({
		prevented: M(),
		chosen: M(),
		reason: M(),
		at: P().optional()
	}), xw = L({
		checked: P(),
		improved: P(),
		recent: I(bw),
		updatedAt: P().optional()
	}), Sw = L({
		input: hw,
		search: vw.optional(),
		map: vw.optional(),
		tier: yw.optional(),
		dependencies: xw.optional()
	}), Cw = `${yp}/checks.json`, ww = B(["turn", "push"]), Tw = L({
		when: ww.describe("When to run it: `turn` before the assistant finishes, `push` before code leaves the machine."),
		run: M().min(1).max(500).describe("The command, run in this repository's own directory, so it reads as it would in a terminal there."),
		label: M().min(1).max(80).optional().describe("What to call it on screen. Absent names it after the command."),
		timeoutMs: P().min(6e4).max(36e5).optional().describe("How long it may take before it is killed and counted as failed."),
		paths: I(M().min(1)).max(20).optional().describe("Only run it when the change touches these paths, written relative to this repository. Absent runs it on every change here.")
	}), L({ checks: I(Tw).max(10).default([]) }), Ew = L({
		repo: M().describe("Which repository, by its workspace id (\"root\" is the workspace itself)."),
		path: M().describe("Where the declaration lives, relative to the workspace, whether or not the file exists yet."),
		checks: I(Tw).describe("What it declares, in the order the file lists them."),
		adopted: F().describe("Whether these are running. False means declared and inert: nothing a repository writes runs until the owner switches it on."),
		changed: F().describe("Whether the declaration changed since it was adopted, which holds it until the owner looks again. True only for a repository that was adopted before."),
		error: M().optional().describe("Why the file could not be read, when it exists but does not parse. The checks list is empty in that case.")
	}), Dw = L({ repos: I(Ew).describe("Every repository that declares checks, plus any the owner has adopted before, sorted by id.") }), Ow = L({
		repo: M().min(1).describe("Which repository's declaration to switch."),
		on: F().describe("On adopts what it declares as it stands now; off stops running it. Adopting again is how a changed declaration is accepted.")
	});
})), Aw, jw, Mw, Nw, Pw, Fw, Iw, Lw, Rw, zw, Bw, Vw, Hw, Uw, Ww, Gw = b((() => {
	G(), bC(), Y(), cd(), kw(), Aw = L({
		files: B([
			"none",
			"read",
			"write"
		]).default("write").describe("What it may do with files: nothing, look and search, or also create and change."),
		shell: F().default(!0).describe("Whether it may run commands, and with them the terminals, the test runs and every tool on the image. The switch the strength of the others depends on."),
		code: F().default(!0).describe("Whether it may write and run a script rather than a command line. Its fence is real where the shell's is not: reads and writes follow the files answer, and it can start no other program unless commands are allowed too. The one stated gap is that the fence cannot cut the network."),
		web: F().default(!0).describe("Whether it may fetch a page or run a search."),
		browser: F().default(!0),
		delegate: F().default(!0),
		sandbox: F().default(!0),
		connectors: I(J).max(100).optional(),
		devices: I(J).max(50).optional(),
		mcp: I(J).max(50).optional()
	}), jw = L({
		startIn: M().max(200).optional().describe("Which folder a conversation opens in."),
		folders: I(M().min(1)).max(50).optional().describe("Which folders it may touch at all. Absent means the whole workspace.")
	}), Mw = L({ repos: I(M().min(1).max(200)).max(50).describe("Which nested repositories a conversation wearing this card carries, by workspace-relative path. The workspace itself is always carried; empty means the workspace alone.") }), Nw = B([
		"map",
		"context",
		"skills",
		"search",
		"delegation",
		"checks",
		"dependencies",
		"repoSync",
		"handoff"
	]), Pw = L({ omit: I(Nw).max(20).describe("Which of the notes the sandbox prepends to each message a conversation wearing this card does NOT get. Everything not named here is sent as usual; the notes that keep a turn inside its own branch or explain a missing account cannot be named at all.") }), Fw = L({
		id: J.describe("The persona's id."),
		label: M().max(60).optional().describe("What to call it on screen. Absent falls back to the id, which somebody chose anyway."),
		capabilities: I(J).max(50).describe("Which connected accounts are its hands. Named individually rather than by site, because two accounts on one site is the whole problem this solves. Naming one that is not connected yet is not an error: it is a card describing an account this sandbox has still to sign into."),
		brief: M().max(200).optional().describe("What this persona is for, in one line. A new chat is routed onto a persona by this sentence, and the Personas page shows it under the name."),
		powers: Aw.optional().describe("What a conversation wearing it may do. Absent means the full toolbox, so a card written before this existed behaves exactly as it did."),
		workspace: jw.optional().describe("Where it works. Absent means the whole workspace."),
		context: Mw.optional().describe("Which part of the workspace a conversation wearing it carries: the repositories its checkout holds. Absent means every repository."),
		briefing: Pw.optional().describe("Which of the notes the sandbox prepends to every message this card's conversations do without. Absent means all of them, which is what a card written before this existed keeps."),
		models: I(wd).max(10).optional().describe("Which models a conversation wearing it runs on, tried in order. Absent means whatever the chat or the job would have run on anyway; a model chosen for the turn itself always wins."),
		systemPromptMode: GC.optional()
	}), Iw = L({
		prompt: M().min(1).max(2e4).describe("The message a new chat is about to open with."),
		folder: M().max(200).optional().describe("The workspace folder the chat was opened in, when it was opened in one."),
		paths: I(M().min(1).max(500)).max(50).default([]).describe("Workspace paths the message names: uploads, @-mentions, the editor's own file.")
	}), Lw = L({
		persona: J.optional().describe("The card this message belongs to, or absent when none does and the chat should stay open to everything."),
		reason: M().describe("Why, in the one line a chat can show. Present whether or not a card was named."),
		model: M().optional().describe("Which model answered, as `provider:model`, so the chat can name what the reading cost. Absent when no model was asked at all, which a folder match and an empty persona list both are.")
	}), Rw = L({ id: J.describe("Which persona.") }), zw = L({
		personas: I(Fw).describe("The characters an agent can wear."),
		connected: I(M()).describe("Which accounts are actually connected right now, so a persona naming one that has since been disconnected can be shown as broken rather than as working.")
	}), Bw = L({
		prompt: M().describe("What this persona is told, on top of everything else. Empty means it simply follows the sandbox's own instructions."),
		skills: I(L({
			name: M().describe("The skill's name."),
			description: M().describe("What it is for.")
		})).describe("Skills only this persona's conversations can reach. A different question from what the agent knows generally, with a different answer.")
	}), Vw = Rw.extend({ prompt: M().max(2e4).describe("What to tell this persona. Sending an empty one removes it entirely rather than storing a blank, so the persona falls back to the sandbox's own instructions.") }), Hw = Rw.extend(lw.shape), Uw = Rw.extend({ name: iw.describe("Which skill.") }), Ww = L({
		name: M().describe("The skill's name."),
		description: M().describe("What it is for."),
		body: M().describe("The skill itself, in full.")
	});
})), Kw, qw = b((() => {
	q(), Gw(), Q(), Kw = {
		list: K.route({
			method: "GET",
			path: "/personas",
			summary: "The characters an agent can wear",
			description: "Each persona with the connected accounts it speaks for, what a conversation wearing it is allowed to do, and where it works."
		}).output(zw),
		save: K.route({
			method: "POST",
			path: "/personas",
			summary: "Create or edit a persona",
			description: "Writes the whole card; sending an id that exists edits it. Nothing is connected, installed or spent by saving one, because a persona only records a decision about accounts that already exist. It is stored as a file you can equally well edit by hand, which is why this writes the card whole rather than patching a field: a round trip through a screen should leave a change a reviewer recognises."
		}).input(Fw).output(X),
		remove: K.route({
			method: "DELETE",
			path: "/personas/{id}",
			summary: "Delete a persona",
			description: "Takes away the character, never the accounts: every login it named stays connected. Its own prompt and skills go with it, since a folder nothing can reach is worse than deleting what somebody just asked to delete. Anything still pointed at it goes quiet rather than falling back to speaking as everyone."
		}).input(Rw).output(X),
		route: K.route({
			method: "POST",
			path: "/personas/route",
			summary: "Which persona a new chat belongs to",
			description: "Reads the message a chat has just been sent, and one line per persona, and names the card it belongs to, or none, along with the model that answered. Costs one small model call on the persona-routing list, and says so. Nothing is applied here: the chat that asked puts the card on, and only when the persona routing setting is on."
		}).input(Iw).output(Lw),
		kit: K.route({
			method: "GET",
			path: "/personas/{id}/kit",
			summary: "What one persona carries",
			description: "The instructions this persona is given and the skills only its conversations can reach. A different question from what the agent knows generally, with a different answer."
		}).input(Rw).output(Bw),
		savePrompt: K.route({
			method: "POST",
			path: "/personas/{id}/prompt",
			summary: "Write a persona's instructions",
			description: "Sets what this persona is told. Saving an empty one removes it entirely rather than storing a blank, so the persona simply falls back to the sandbox's own instructions."
		}).input(Vw).output(X),
		readSkill: K.route({
			method: "GET",
			path: "/personas/{id}/skills/read",
			summary: "Read one of a persona's skills",
			description: "The full text of a single skill belonging to this persona."
		}).input(Uw).output(Ww),
		saveSkill: K.route({
			method: "POST",
			path: "/personas/{id}/skills",
			summary: "Write one of a persona's skills",
			description: "Creates or replaces a skill by name. There is nothing to switch on: a persona's skill is available exactly when that persona is worn, which is what belonging to it has to mean."
		}).input(Hw).output(X),
		removeSkill: K.route({
			method: "POST",
			path: "/personas/{id}/skills/remove",
			summary: "Delete one of a persona's skills",
			description: "Removes a single skill from this persona and leaves the rest of its kit alone."
		}).input(Uw).output(X)
	};
})), Jw, Yw, Xw, Zw, Qw, $w, eT, tT, nT, rT, iT, aT, oT, sT, cT, lT, uT, dT, fT, pT, mT, hT, gT, _T, vT, yT, bT, xT, ST, CT, wT, TT = b((() => {
	G(), cd(), Q(), A_(), Jw = M().regex(/^[0-9a-f]{4,64}$/), Yw = L({
		sha: M().describe("The commit, in full."),
		short: M().describe("The abbreviated form, for showing."),
		parents: I(M()).describe("What it came from. None means the first commit, one is ordinary, two or more is a merge, which is what a graph draws its lanes from."),
		subject: M().describe("Its first line."),
		body: M().describe("Everything after that."),
		author: M().describe("Who wrote it."),
		email: M().describe("Their address."),
		at: P().describe("When they wrote it, in milliseconds."),
		refs: I(M()).describe("Branches and tags sitting on it."),
		head: F().describe("Whether this is where the repository currently stands.")
	}), Xw = L({
		repo: M().describe("Which repository."),
		branch: M().optional().describe("Which branch these are from."),
		commits: I(Yw).describe("The commits, newest first."),
		hasMore: F().describe("There are older ones behind this page. It is also what stops the last row being drawn as the beginning of history, which is how a truncated log used to claim it started where the page happened to stop.")
	}), Zw = Z.extend({
		limit: W().int().positive().max(2e3).optional().describe("How many commits to return."),
		skip: W().int().nonnegative().max(1e6).optional().describe("How many newer commits to step over, which is how you page further back. Paged rather than read whole, because a large repository's history is tens of thousands of rows.")
	}), Qw = L({ repos: I(M()).describe("Every repository's id. The workspace itself is always present as \"root\".") }), $w = L({
		repo: M().describe("The workspace repository."),
		host: M().describe("Which forge its remote points at."),
		project: M().describe("Which project there, as owner and name.")
	}), eT = L({ repos: I($w).describe("Each repository matched to the project its remote points at.") }), tT = Z.extend({
		path: M().min(1).describe("Which file, relative to the repository."),
		content: M().describe("Its whole new contents."),
		message: M().min(1).describe("The commit message.")
	}), nT = L({
		ok: F().describe("Whether the whole thing went through."),
		wrote: F().describe("The file was written."),
		committed: F().describe("The commit was recorded."),
		pushed: F().describe("It reached the remote."),
		branch: M().optional().describe("Which branch it happened on."),
		defaultBranch: M().optional().describe("Which branch the repository considers its main one, so a caller can see it was on a side branch."),
		reason: M().optional().describe("Why it stopped where it did. Being on a side branch, having no remote and having no credentials are all reported here rather than raised.")
	}), rT = Z.extend({ sha: Jw.describe("Which commit.") }), iT = L({ files: I(c_).describe("Which files it touched, with counts but not contents. Fetch any one file's contents separately, so a commit with a thousand files stays one cheap answer.") }), aT = Z.extend({
		sha: Jw.describe("Which commit."),
		path: M().min(1).describe("Which file in it.")
	}), oT = Z.extend({
		sha: Jw.describe("Which commit to start it at."),
		name: od.describe("The new branch's name.")
	}), sT = Z.extend({
		sha: Jw.describe("Which commit to tag."),
		name: od.describe("The tag's name.")
	}), cT = Z.extend({ ref: od.describe("Where to switch to: a branch, a tag, or a commit.") }), lT = Z.extend({
		name: od.describe("Which tag."),
		remote: od.optional().describe("Also delete it there. Leave it out to remove it locally only.")
	}), uT = Z.extend({
		name: od.describe("Which tag."),
		remote: od.describe("Which remote to send it to.")
	}), dT = Z.extend({
		sha: Jw.describe("Which commit to move the branch to."),
		mode: B([
			"soft",
			"mixed",
			"hard"
		]).describe("How much to take with it: move the branch alone, also unstage, or also throw away what is on disk. The last one takes a checkpoint first.")
	}), fT = Z.extend({ sha: Jw.describe("Which commit to act on.") }), pT = L({
		ok: F().describe("Whether it worked."),
		reason: M().optional().describe("Why not, in git's own words. A conflict, a missing remote and missing credentials are all reported here rather than raised, because they are things a screen has to render rather than breakages.")
	}), mT = L({
		ref: M().describe("How to address it, which applying and dropping take."),
		sha: M().describe("The commit behind it, because a stash entry is a commit."),
		short: M().describe("The abbreviated form, for showing."),
		subject: M().describe("What it was set aside as, with git's own scaffolding stripped off."),
		branch: M().optional().describe("Which branch it was set aside from."),
		at: P().describe("When, in milliseconds."),
		parents: I(M()).describe("What it sits on, so a graph can draw it like any other commit.")
	}), hT = L({
		repo: M().describe("Which repository."),
		stashes: I(mT).describe("What is set aside, newest first.")
	}), gT = M().regex(/^stash@\{\d{1,4}\}$/), _T = Z.extend({
		message: M().max(500).optional().describe("What to call it, so you know what it was later."),
		includeUntracked: F().optional().describe("Also set aside files git is not yet tracking, which are otherwise left where they are.")
	}), vT = Z.extend({
		ref: gT.describe("Which entry."),
		pop: F().optional().describe("Remove it from the stash once it has been applied cleanly.")
	}), yT = Z.extend({ ref: gT.describe("Which entry.") }), bT = Z.extend({ ref: gT.describe("Which entry.") }), xT = B([
		"commit",
		"amend",
		"merge",
		"rebase",
		"cherry-pick",
		"revert",
		"reset",
		"pull",
		"other"
	]), ST = L({
		kind: xT.describe("What the last action was."),
		description: M().describe("What undoing it would do, in words."),
		branch: M().describe("Which branch would move."),
		sha: M().describe("Where it stands now."),
		previousSha: M().describe("Where it would go back to. Send this with the undo as proof you looked, so one prepared against a view that has since moved is refused rather than landing somewhere unexamined."),
		changesWorkingTree: F().describe("Undoing would rewrite files as well as moving the branch, so anything offering it should warn about losing work.")
	}), CT = L({
		repo: M().describe("Which repository."),
		action: ST.optional().describe("What undoing would reverse. Absent means there is nothing to go back from.")
	}), wT = Z.extend({
		previousSha: Jw.describe("Where to go back to, from the matching read. It is also proof you looked: one prepared against a stale view is refused."),
		discardChanges: F().optional().describe("Also rewrite the files, rather than only moving the branch.")
	});
})), ET, DT = b((() => {
	q(), A_(), TT(), zh(), Q(), ET = {
		changes: K.route({
			method: "GET",
			path: "/git/changes",
			summary: "Uncommitted work across every repo",
			description: "The workspace's whole review set in one answer: every repo that has something uncommitted, and within it every changed file with its status and line counts. This is what the Changes panel draws, and it is the call to make when you want to know whether a workspace is clean without walking the repos yourself."
		}).output(y_),
		repos: K.route({
			method: "GET",
			path: "/git/repos",
			summary: "Every git repo in the workspace",
			description: "The repos the daemon found under the workspace root, each with the id every other call in this group expects as its `{repo}` segment. The workspace root itself is always present as `root`."
		}).output(Qw),
		remoteRepos: K.route({
			method: "GET",
			path: "/git/remote-repos",
			summary: "Repos matched to their remotes",
			description: "The same repo list, but with the forge host and `owner/name` each one's remote points at. Use it to recognise a workspace repo in a list of names that came from somewhere else, such as a set of pull requests. Costs a remote lookup per repo, which is why it is separate from the plain repo list."
		}).output(eT),
		log: K.route({
			method: "GET",
			path: "/git/{repo}/log",
			summary: "Commit history for one repo",
			description: "A page of commits on the current branch, newest first, each with its author, subject, timestamp and the refs pointing at it. Paginate with the cursor the answer hands back rather than by offset, so a commit landing mid-scroll does not shift the page under you."
		}).input(Zw).output(Xw),
		commitDiff: K.route({
			method: "GET",
			path: "/git/{repo}/commit-diff",
			summary: "What one commit changed",
			description: "The list of files a single commit touched, with per-file status and line counts but not the content. Fetch the content of any one of them with the commit file diff call, so a commit with a thousand files stays one cheap answer."
		}).input(rT).output(iT),
		commitFileDiff: K.route({
			method: "GET",
			path: "/git/{repo}/commit-file-diff",
			summary: "One file's before and after at a commit",
			description: "Both sides of a single file as of one commit: the content its parent had and the content that commit left. The daemon returns whole sides rather than a patch, so a caller can render the comparison however it likes."
		}).input(aT).output(Rh),
		operation: K.route({
			method: "GET",
			path: "/git/{repo}/operation",
			summary: "Whether a merge or rebase is halted mid-flight",
			description: "Names the git operation the worktree is stuck inside, if any: a conflicted merge, an interrupted rebase, a half-applied cherry-pick. Check this first when another call refuses, because a halted worktree is the usual reason and the abort call is the way out."
		}).input(Z).output(g_),
		abort: K.route({
			method: "POST",
			path: "/git/{repo}/abort",
			summary: "Abandon a halted merge or rebase",
			description: "Runs git's own abort for whichever operation has the worktree halted, putting the repo back where it stood before the operation started. Nothing else clears that state."
		}).input(Z).output(pT),
		undoable: K.route({
			method: "GET",
			path: "/git/{repo}/undo",
			summary: "What undoing the last action would do",
			description: "Reads the branch's reflog to describe the move that undo would reverse, and hands back the commit it would land on. Pass that commit to the undo call as proof you looked, and an undo prepared against a view that has since moved is refused rather than landing somewhere unexamined."
		}).input(Z).output(CT),
		undo: K.route({
			method: "POST",
			path: "/git/{repo}/undo",
			summary: "Move the branch back one step",
			description: "Walks the current branch back to where it pointed before its last action. This moves the branch ref and leaves the working tree alone, which is the opposite of restoring a checkpoint. Requires the commit the matching read handed you."
		}).input(wT).output(pT),
		stashes: K.route({
			method: "GET",
			path: "/git/{repo}/stashes",
			summary: "Everything set aside in the stash",
			description: "The repo's stash entries, newest first, each with the message and the commit behind it. A stash entry is a commit, so it reads the same way a log entry does and its contents come back from the stash diff call."
		}).input(Z).output(hT),
		stashDiff: K.route({
			method: "GET",
			path: "/git/{repo}/stash-diff",
			summary: "What one stash entry holds",
			description: "The files a single stash entry would bring back, with per-file status and line counts. The same shape a commit diff has, because a stash entry is a commit."
		}).input(bT).output(iT),
		stashPush: K.route({
			method: "POST",
			path: "/git/{repo}/stash",
			summary: "Set the current changes aside",
			description: "Moves the working tree's changes onto the stash and leaves a clean tree behind. Nothing is lost: the entry is a commit you can inspect, apply or drop afterwards."
		}).input(_T).output(pT),
		stashApply: K.route({
			method: "POST",
			path: "/git/{repo}/stash/apply",
			summary: "Bring a stash entry back",
			description: "Replays one stash entry onto the working tree. A conflict is reported in the answer rather than raised as a failure, because a conflicting apply is an ordinary outcome a screen has to render."
		}).input(vT).output(pT),
		stashDrop: K.route({
			method: "POST",
			path: "/git/{repo}/stash/drop",
			summary: "Discard a stash entry",
			description: "Deletes one stash entry. This is the only unrecoverable call in the stash set, so the daemon takes a checkpoint of the workspace first."
		}).input(yT).output(X),
		createBranch: K.route({
			method: "POST",
			path: "/git/{repo}/branch",
			summary: "Start a branch at a commit",
			description: "Points a new branch name at any commit, without moving HEAD. Use the checkout call if you also want to switch to it."
		}).input(oT).output(X),
		createTag: K.route({
			method: "POST",
			path: "/git/{repo}/tag",
			summary: "Tag a commit",
			description: "Puts a tag on any commit. Local only: pushing it to the remote is a separate call."
		}).input(sT).output(X),
		deleteTag: K.route({
			method: "POST",
			path: "/git/{repo}/tag/delete",
			summary: "Remove a tag",
			description: "Deletes a tag locally. A tag already pushed stays on the remote until it is deleted there too."
		}).input(lT).output(X),
		pushTag: K.route({
			method: "POST",
			path: "/git/{repo}/tag/push",
			summary: "Send a tag to the remote",
			description: "Pushes one tag to the repo's remote. Reports the outcome rather than failing, since a missing remote or missing credentials are ordinary answers here."
		}).input(uT).output(pT),
		checkout: K.route({
			method: "POST",
			path: "/git/{repo}/checkout",
			summary: "Switch to a branch or commit",
			description: "Moves HEAD to a branch, tag or commit and reshapes the working tree to match. The daemon takes a checkpoint first, so an unexpected result is recoverable. Uncommitted work that would be overwritten is reported instead of being trampled."
		}).input(cT).output(pT),
		cherryPick: K.route({
			method: "POST",
			path: "/git/{repo}/cherry-pick",
			summary: "Replay one commit onto this branch",
			description: "Applies a single commit's changes on top of the current branch as a new commit. A conflict comes back in the answer, with the halted state readable from the operation call."
		}).input(fT).output(pT),
		revert: K.route({
			method: "POST",
			path: "/git/{repo}/revert",
			summary: "Undo a commit with a new commit",
			description: "Adds a commit that reverses an earlier one, leaving the history intact. This is the safe way to take something back on a branch other people have pulled."
		}).input(fT).output(pT),
		drop: K.route({
			method: "POST",
			path: "/git/{repo}/drop",
			summary: "Remove a commit from history",
			description: "Rewrites the branch so one commit is no longer in it. History changes, so this is for branches nobody else has pulled. A checkpoint is taken first."
		}).input(fT).output(pT),
		merge: K.route({
			method: "POST",
			path: "/git/{repo}/merge",
			summary: "Merge another branch in",
			description: "Merges a branch or commit into the current one. Conflicts are reported in the answer and leave the worktree halted, which the operation call explains and the abort call clears."
		}).input(fT).output(pT),
		rebase: K.route({
			method: "POST",
			path: "/git/{repo}/rebase",
			summary: "Replay this branch onto another",
			description: "Moves the current branch's commits on top of a different base. History changes. Conflicts halt the rebase and are reported rather than raised, so the operation and abort calls are the way through."
		}).input(fT).output(pT),
		reset: K.route({
			method: "POST",
			path: "/git/{repo}/reset",
			summary: "Move the branch to a commit",
			description: "Repoints the current branch at another commit, optionally reshaping the working tree to match. The destructive modes take a checkpoint first."
		}).input(dT).output(pT),
		fileDiff: K.route({
			method: "GET",
			path: "/git/{repo}/file-diff",
			summary: "One file's committed and working copies",
			description: "Both sides of a file as it stands right now: what the last commit holds and what is on disk. This is what a review pane shows for an uncommitted change."
		}).input(i_).output(Rh),
		status: K.route({
			method: "GET",
			path: "/git/{repo}/status",
			summary: "One repo's branch and pending changes",
			description: "The current branch, its sync position against the remote, and every staged, unstaged and untracked path. The single-repo counterpart to the workspace-wide changes call."
		}).input(Z).output(a_),
		commit: K.route({
			method: "POST",
			path: "/git/{repo}/commit",
			summary: "Commit the pending changes",
			description: "Records a commit with your message. It commits whatever is staged; add `stage` to stage something first — an empty object for everything pending, or a scope such as one side or one conversation's landed files. The answer carries the commit it created."
		}).input(Xg).output(b_),
		discard: K.route({
			method: "POST",
			path: "/git/{repo}/discard",
			summary: "Throw away pending changes",
			description: "Restores files to their committed state and deletes untracked ones. Name paths or a scope to narrow it; with neither it throws away every uncommitted change in the repository. The daemon checkpoints the workspace first, so this is recoverable from the timeline."
		}).input(Zg).output(X),
		stage: K.route({
			method: "POST",
			path: "/git/{repo}/stage",
			summary: "Mark changes for the next commit",
			description: "Adds changes to the index: exactly the paths you name, everything a scope describes, or the whole repository when you name neither. Nothing on disk changes, so this is always safe and always reversible with the unstage call."
		}).input(Qg).output(X),
		unstage: K.route({
			method: "POST",
			path: "/git/{repo}/unstage",
			summary: "Take changes back out of the next commit",
			description: "Removes changes from the index and leaves the files themselves untouched, on the same terms as staging. The exact reverse of it."
		}).input(Qg).output(X),
		branches: K.route({
			method: "GET",
			path: "/git/{repo}/branches",
			summary: "Local branches and how far each has drifted",
			description: "Every local branch with how many commits it sits ahead of and behind its remote counterpart, so a branch switcher can show sync state without a call per branch."
		}).input(Z).output(f_),
		createBranchAt: K.route({
			method: "POST",
			path: "/git/{repo}/branches",
			summary: "Create a branch from a starting point",
			description: "Makes a branch at a named start point and optionally switches to it. The branch-switcher counterpart to creating a branch at a specific commit."
		}).input(p_).output(X),
		deleteBranch: K.route({
			method: "POST",
			path: "/git/{repo}/branches/delete",
			summary: "Delete a local branch",
			description: "Removes a branch from the repo. Unmerged work is refused unless you ask for it to be forced, and the remote branch is untouched either way."
		}).input(m_).output(X),
		remote: K.route({
			method: "GET",
			path: "/git/{repo}/remote",
			summary: "Sync position against the remote",
			description: "How far the current branch sits ahead of and behind its remote, as of the last fetch, plus whether a remote and working credentials exist at all. This is a read of what the daemon already knows, not a network call, which is why fetching is a separate button."
		}).input(Z).output(l_),
		fetch: K.route({
			method: "POST",
			path: "/git/{repo}/fetch",
			summary: "Refresh what the remote holds",
			description: "Contacts the remote and updates the daemon's picture of it without touching your branch. Run this before trusting the sync position."
		}).input(Z).output(pT),
		pull: K.route({
			method: "POST",
			path: "/git/{repo}/pull",
			summary: "Bring remote commits down",
			description: "Fetches and integrates the remote's commits into the current branch. A pull that cannot fast-forward is reported in the answer rather than raised, because that is an ordinary thing to be told."
		}).input(Z).output(pT),
		push: K.route({
			method: "POST",
			path: "/git/{repo}/push",
			summary: "Start sending commits to the remote",
			description: "Starts pushing the current branch, setting its upstream on first push, and answers at once: the push runs in a real terminal (it runs this repository's pre-push hook, which can be a whole suite), so watch it there and poll pushState for the verdict. A second start while one is going joins it rather than pushing twice."
		}).input($g).output(X),
		pushState: K.route({
			method: "GET",
			path: "/git/{repo}/push",
			summary: "How the push is going",
			description: "The verdict, or the progress so far: where it is, the terminal it runs in, and for a push that did not go, git's last words and who refused it, the repository's own pre-push hook, the remote, or the transport. Idle when nothing has been started for this repository."
		}).input(Z).output(t_),
		pushCancel: K.route({
			method: "POST",
			path: "/git/{repo}/push/cancel",
			summary: "Stop the push",
			description: "Kills the run. It settles as cancelled; nothing that git had not already sent reaches the remote."
		}).input(Z).output(X),
		files: K.route({
			method: "GET",
			path: "/git/{repo}/files",
			summary: "Every tracked path in the repo",
			description: "The flat list of files git tracks, which is what a file picker or a search box wants. Ignored and untracked files are not in it."
		}).input(Z).output(o_),
		readFile: K.route({
			method: "GET",
			path: "/git/{repo}/file",
			summary: "Read a file from the repo",
			description: "The contents of one file as it stands on disk. A path that climbs out of the repo is refused."
		}).input(n_).output(s_),
		writeFile: K.route({
			method: "PUT",
			path: "/git/{repo}/file",
			summary: "Write a file into the repo",
			description: "Replaces one file's contents, creating it and its parent folders if they are missing. Nothing is committed: the change shows up as pending work."
		}).input(r_).output(X),
		publishFile: K.route({
			method: "POST",
			path: "/git/{repo}/publish-file",
			summary: "Write, commit and push one file",
			description: "The three steps as a single call with a single answer, committing only the path you named and leaving any other pending work alone. Being on a side branch, having no remote and having no credentials are all reported rather than raised."
		}).input(tT).output(nT)
	};
})), OT, kT = b((() => {
	q(), zh(), Q(), OT = {
		list: K.route({
			method: "GET",
			path: "/history/snapshots",
			summary: "Points you can go back to",
			description: "The saved states of the whole workspace, taken automatically as work happens. This is the timeline behind undoing a change that was never committed."
		}).output(Ah),
		diff: K.route({
			method: "GET",
			path: "/history/diff",
			summary: "What changed since a saved point",
			description: "The files that differ between one saved point and the one before it, taking in everything that happened in between."
		}).input(Nh).output(Fh),
		fileDiff: K.route({
			method: "GET",
			path: "/history/file-diff",
			summary: "One file's before and after across a saved point",
			description: "Both sides of a single file at one point in the timeline."
		}).input(Ih).output(Rh),
		restore: K.route({
			method: "POST",
			path: "/history/restore",
			summary: "Put the workspace back",
			description: "Returns every file to how it stood at a saved point. This restores the files; moving a branch is a different thing and lives with the git calls."
		}).input(Nh).output(X)
	};
})), AT, jT = b((() => {
	G(), AT = L({ args: I(M()) });
})), MT, NT = b((() => {
	q(), Rv(), jT(), Q(), MT = {
		run: K.route({
			method: "POST",
			path: "/intentic",
			summary: "Run an infrastructure command",
			description: "Runs the sandbox's own command-line tool and streams its output as it arrives, so progress is visible rather than arriving all at once at the end. A failure surfaces once the stream closes."
		}).input(AT).output(ju(xv)),
		apply: K.route({
			method: "POST",
			path: "/intentic/apply",
			summary: "Bring the infrastructure into line",
			description: "Starts the long reconcile that makes the running world match what was declared, and answers immediately. It takes minutes, so it runs in a terminal you attach to rather than on a held-open request."
		}).output(X),
		applyEvents: K.route({
			method: "GET",
			path: "/intentic/apply/events",
			summary: "Follow the reconcile",
			description: "The same progress the terminal shows, as structured events, kept on disk so a page refresh does not lose it. It replays from the start of the run and then follows live, closing when the run ends."
		}).output(ju(xv))
	};
})), PT, FT = b((() => {
	q(), fy(), PT = {
		list: K.route({
			method: "GET",
			path: "/inventory",
			summary: "Machines and services you have declared",
			description: "What the deployment configuration says this setup owns and what it wants provisioned."
		}).output(dy),
		add: K.route({
			method: "POST",
			path: "/inventory",
			summary: "Declare a machine or service",
			description: "Writes the entry into the configuration file and commits it, exactly as an agent editing that file by hand would. Answers with the whole updated list, so a screen redraws from one response."
		}).input(ly).output(dy),
		remove: K.route({
			method: "DELETE",
			path: "/inventory/{name}",
			summary: "Undeclare a machine or service",
			description: "Takes the entry back out of the configuration and commits that too. Answers with the whole updated list."
		}).input(uy).output(dy)
	};
})), IT, LT = b((() => {
	q(), ag(), Q(), IT = {
		list: K.route({
			method: "GET",
			path: "/issues",
			summary: "Bugs your users have reported",
			description: "Everything that has crashed or been written in, grouped so a crash that hit a thousand people is one row with a count."
		}).output(Qh),
		status: K.route({
			method: "POST",
			path: "/issues/{id}/status",
			summary: "File one away, or reopen it",
			description: "Moves one issue between open, resolved and ignored. Resolving does not close anything upstream: it is your own inbox."
		}).input(eg).output(X),
		investigate: K.route({
			method: "POST",
			path: "/issues/{id}/investigate",
			summary: "Put an agent on it now",
			description: "Starts a turn on this issue with the crash, its stack and what led up to it as the brief. Answers straight away and runs detached; the issue goes to 'being looked at'."
		}).input($h).output(X),
		remove: K.route({
			method: "DELETE",
			path: "/issues/{id}",
			summary: "Throw one away",
			description: "Forgets an issue entirely. It will come back as new if it happens again, which is usually what you want."
		}).input($h).output(X),
		installs: K.route({
			method: "GET",
			path: "/issues/installs/{automationId}",
			summary: "Which sites have loaded the reporter",
			description: "The sites whose pages actually loaded this intake's script, and the ones that were turned away. The answer to 'did the snippet land?', which an empty inbox cannot give you."
		}).input(ig).output(rg)
	};
})), RT, zT, BT, VT, HT, UT, WT, GT, KT = b((() => {
	G(), RT = L({
		name: M().describe("Its name, which is what the read route takes."),
		sizeBytes: P().describe("Size in bytes."),
		modifiedAt: P().describe("When it last changed, in milliseconds.")
	}), zT = L({ files: I(RT).describe("Every log the sandbox keeps: captured terminal output, command runs, and its own log.") }), BT = L({
		name: M().min(1).describe("Which log. It travels in the query rather than the address, because log names contain slashes."),
		bytes: W().min(1).max(1048576).default(65536).describe("How much of the end to read. The newest bytes win when the file is larger.")
	}), VT = L({
		name: M().describe("Which log this is from."),
		sizeBytes: P().describe("How large the whole file is."),
		text: M().describe("The end of it, as text."),
		truncated: F().describe("There is more before what you got.")
	}), HT = L({
		seenAt: P().describe("When the browser saw it, in milliseconds."),
		level: B(["warn", "error"]).describe("How bad it was."),
		event: M().min(1).max(100).describe("What kind of thing it was, as a stable name."),
		message: M().max(2e3).describe("What it said."),
		route: M().max(300).optional().describe("Which page they were on."),
		requestId: M().max(100).optional().describe("Which daemon call it belonged to, when it belonged to one."),
		build: M().max(100).optional().describe("Which build of the app was running."),
		fields: z(M().max(60), uc([
			M().max(4e3),
			P(),
			F()
		])).optional().describe("Whatever else was worth keeping.")
	}), UT = L({ events: I(HT).min(1).max(50).describe("What the browser has to report, oldest first.") }), WT = L({ recorded: P().describe("How many were written down.") }), GT = L({
		clientId: M().describe("This connection's own id, the same one it gave the event stream."),
		idle: F().describe("Whether the person has stopped doing anything."),
		view: M().optional().describe("Which view they are on."),
		sessionId: M().optional().describe("Which conversation they have open."),
		path: M().optional().describe("Which file they are looking at. Sent whole rather than merged: leaving a field out clears it, so a tab that closes a file drops the path in the same report.")
	});
})), qT, JT = b((() => {
	q(), KT(), qT = {
		list: K.route({
			method: "GET",
			path: "/logs",
			summary: "Logs the sandbox keeps",
			description: "Every log file the daemon owns: captured terminal output, command runs, and the daemon's own log. Read-only, because only the sandbox writes them."
		}).output(zT),
		read: K.route({
			method: "GET",
			path: "/logs/file",
			summary: "Read part of a log",
			description: "A window of one log file's text. A window rather than the whole thing, because a busy log outgrows any single answer."
		}).input(BT).output(VT),
		report: K.route({
			method: "POST",
			path: "/logs/client",
			summary: "Report what the browser saw",
			description: "Errors the app caught, stalls it measured, and recoveries it performed, written to a log of their own. The browser is the only witness to these, so without it a bug someone hit in their own browser leaves no record at all."
		}).input(UT).output(WT)
	};
})), YT, XT = b((() => {
	q(), Hp(), Q(), YT = {
		list: K.route({
			method: "GET",
			path: "/loops",
			summary: "Every loop that has run",
			description: "The loops this workspace has run, newest first, kept after they end. Why it stopped on the fourth round is the question a loop gets read for, and the round-by-round history is the answer."
		}).output(Ip),
		start: K.route({
			method: "POST",
			path: "/loops",
			summary: "Run a conversation until it is done",
			description: "Starts repeating a conversation towards a goal and answers straight away with the loop as recorded; the work carries on without you. The conversation need not exist yet, so run this until it passes can be the first thing you ever say to a new agent. A conversation already looping is refused."
		}).input(Mp).output(Fp),
		stop: K.route({
			method: "POST",
			path: "/loops/{conversationId}/stop",
			summary: "Make this round the last",
			description: "Means do not start another round, not stop what is running. Somebody watching the sixth round do good work can say this is the last one without throwing that work away. To cut the current round off as well, stop the conversation too."
		}).input(Lp).output(X),
		designs: K.route({
			method: "GET",
			path: "/loops/designs",
			summary: "Saved loop designs",
			description: "Loops somebody authored once and can point at a different job each time. A saved loop is the same loop with its goal left blank until you type one, not a different feature."
		}).output(zp),
		saveDesign: K.route({
			method: "POST",
			path: "/loops/designs",
			summary: "Create or replace a saved loop",
			description: "Say which of the two you mean, so a name that happens to collide cannot silently overwrite somebody's work. A design that could never finish, with nothing to produce and nothing to check, is refused in the same words an ad-hoc loop would be: catching that at save time is the whole advantage of saving."
		}).input(Bp).output(Rp),
		removeDesign: K.route({
			method: "DELETE",
			path: "/loops/designs/{id}",
			summary: "Delete a saved loop",
			description: "Removes the design. A loop already running from it keeps going on its own terms, because it took a copy of what it needed when it started."
		}).input(Vp).output(X)
	};
})), ZT, QT, $T, eE, tE = b((() => {
	G(), ZT = B([
		"launching",
		"installing",
		"starting",
		"exited"
	]), QT = L({
		repo: M().describe("Which repository."),
		hasPanel: F().describe("Whether it has anything runnable at all."),
		running: F().describe("Whether the sandbox has it running."),
		installed: F().describe("Whether its dependencies are installed, which is what decides whether a start takes seconds or an install first."),
		launch: ZT.optional().describe("Where a start the sandbox is running has got to: its shell coming up, installing, its dev command running with nothing listening yet, or exited back to a prompt. Absent when nothing is starting and once it serves."),
		healthy: F().describe("Whether anything it owns is actually answering. A different question: a server still installing is running and not yet healthy, and one somebody started by hand is healthy without the sandbox running it."),
		port: P().optional().describe("The port the sandbox told it to use. What it actually bound is below, and for a repository that pins its own ports those are different numbers."),
		servers: I(L({
			port: P().describe("The port it is listening on, which is what forwarding it takes."),
			url: M().describe("Where it answers, with the right scheme: a server on its own certificate is served over https."),
			dir: M().optional().describe("Which part of the repository it belongs to, which for a repository whose dev command fans out is the only thing telling them apart."),
			session: M().optional().describe("The terminal it runs in: the sandbox's when it started it, yours when you did, and absent when nothing here owns it, which is the case worth designing for.")
		})).describe("Every server this repository is really serving, found by looking at what is listening. Empty when nothing answers."),
		previewUrl: M().optional().describe("Where to open it from outside, present only while that address really serves it. Absent on a sandbox with no outside address."),
		role: B([
			"intent",
			"desired-state",
			"app"
		]).optional().describe("Which of the workspace's three fixed roles this repository fills. Absent for one that was simply cloned in."),
		deployConfig: F().describe("It declares infrastructure."),
		desiredState: F().describe("That declaration has been resolved at least once."),
		directoryUi: F().describe("It carries a small interface of its own."),
		monorepo: F().describe("It holds several packages."),
		vitest: F().describe("It has tests that can be run."),
		userStories: F().describe("It carries stories an agent could test the running app against. The one fact here that says nothing about the language."),
		docs: F().describe("It carries generated architecture documentation.")
	}), $T = L({ panels: I(QT).describe("One entry per repository, worked out in a single pass so nothing has to walk the workspace file by file.") }), eE = L({ repo: M().describe("Which repository.") });
})), nE, rE = b((() => {
	q(), tE(), Q(), nE = {
		list: K.route({
			method: "GET",
			path: "/panels",
			summary: "Repos you can run and preview",
			description: "Every repo with whether its dev server is up and what the sandbox worked out about its contents."
		}).output($T),
		start: K.route({
			method: "POST",
			path: "/panels/{repo}/start",
			summary: "Start a repo's dev server",
			description: "Brings the repo's own runnable app up in a terminal you can attach to, so its preview address starts answering."
		}).input(eE).output(X),
		stop: K.route({
			method: "POST",
			path: "/panels/{repo}/stop",
			summary: "Stop a repo's dev server",
			description: "Shuts it down and frees the port."
		}).input(eE).output(X)
	};
})), iE, aE, oE, sE, cE = b((() => {
	G(), iE = L({
		port: P().describe("The port number."),
		host: B(["127.0.0.1", "::1"]).describe("Which loopback address it actually answers on. Some tools bind only one of the two, and anything dialling it has to know which."),
		forwardable: F().describe("Whether it can be exposed at all. Some listeners answer only at their own address and nowhere else; those are listed for honesty and refused for forwarding."),
		kind: B(["workspace", "system"]).describe("Whether somebody's own work put it there, or the sandbox's own machinery did. Only the first kind is worth previewing."),
		title: M().describe("What a person would call it. Always present: a listener nothing can explain is still named, because the button beside it publishes the port to the internet."),
		purpose: M().describe("One sentence about what it is for, including when the honest answer is that nothing could work it out."),
		origin: B([
			"terminal",
			"agent",
			"panel",
			"extension",
			"container",
			"sandbox",
			"unknown"
		]).describe("Who put it there, which is the question somebody is really asking: mine, my agent's, or the box's own."),
		pid: P().optional().describe("The process holding it. Absent when nothing could be matched to the socket."),
		command: M().optional().describe("The command behind it, as it was run. Absent only when nothing could be attributed at all."),
		cwd: M().optional().describe("Where it is running from, which is how a port gets attributed to a repository."),
		session: M().optional().describe("The terminal it came from, to watch it in or stop it from. Absent when nothing in its ancestry is one, which is the honest \"you cannot reach this from here\"."),
		forwarded: F().describe("Whether it is currently reachable from outside."),
		previewUrl: M().optional().describe("Where to open it. Present only while forwarded, and only on a sandbox that has an outside address.")
	}), aE = L({ ports: I(iE).describe("Everything listening inside the sandbox right now, read fresh each time rather than from a register the sandbox keeps.") }), oE = L({ port: P().int().min(1).max(65535).describe("Which port.") }), sE = L({ previewUrl: M().optional().describe("Where it can now be reached. Absent on a sandbox with no outside address, where the mapping exists but has no public name.") });
})), lE, uE = b((() => {
	q(), cE(), Q(), lE = {
		list: K.route({
			method: "GET",
			path: "/ports",
			summary: "What is listening inside the sandbox",
			description: "Every port something is answering on, and whether each one is reachable from outside."
		}).output(aE),
		forward: K.route({
			method: "POST",
			path: "/ports/forward",
			summary: "Make a port reachable",
			description: "Gives one port an address on the outside. Asking twice is harmless: the second call hands back the address the first one made."
		}).input(oE).output(sE),
		unforward: K.route({
			method: "POST",
			path: "/ports/unforward",
			summary: "Stop exposing a port",
			description: "Frees the slot at once. The address keeps resolving; it simply stops leading anywhere."
		}).input(oE).output(X)
	};
})), dE, fE, pE, mE, hE, gE = b((() => {
	G(), dE = L({
		path: M().describe("Where it sits inside the outbox."),
		size: P().describe("Size in bytes."),
		modifiedAt: P().describe("When it last changed, in milliseconds."),
		url: M().optional().describe("Its public address. Absent when this sandbox has no outside address, or when the file is being refused."),
		blocked: M().optional().describe("Why a file sitting in the outbox is not being served: a hidden name, a credential-shaped name, contents that look like a token, or sheer size. Only the publisher sees this; a stranger asking for the same file gets the same nothing every other miss gets.")
	}), fE = L({
		url: M().optional().describe("Your public address, which every file's own hangs off. Absent on a sandbox with nowhere to publish to."),
		files: I(dE).describe("What the outbox holds.")
	}), pE = L({ path: M().min(1).describe("What to publish, as a workspace path. It is copied rather than moved, so a repository does not lose its build output because somebody shared it.") }), mE = L({ path: M().min(1).describe("What to withdraw, as a path inside the outbox rather than a workspace path.") }), hE = L({
		path: M().describe("Where it landed inside the outbox."),
		url: M().optional().describe("Its public address. Absent on a sandbox with nowhere to publish to.")
	});
})), _E, vE = b((() => {
	q(), gE(), Q(), _E = {
		list: K.route({
			method: "GET",
			path: "/public",
			summary: "What is published to the internet",
			description: "Everything currently in the outbox and the address it answers on. There is no call to read a published file back: it is served openly to anyone with the link, which is the entire point of having put it there."
		}).output(fE),
		publish: K.route({
			method: "POST",
			path: "/public/publish",
			summary: "Put a file on the internet",
			description: "Copies a workspace file or folder into the outbox, where it is served to anyone with the link and no sign-in. Answers with the address."
		}).input(pE).output(hE),
		unpublish: K.route({
			method: "POST",
			path: "/public/unpublish",
			summary: "Take something off the internet",
			description: "Withdraws one published entry. When the last one goes, the outbox goes with it, so its existing at all always means something is published."
		}).input(mE).output(X)
	};
})), yE, bE, xE = b((() => {
	q(), G(), Hg(), Q(), yE = L({ repos: I(M().min(1)).max(100).default([]).describe("The repositories going out, by workspace id. Empty runs only what stands for every push, whichever repository it is.") }).prefault({}), bE = {
		state: K.route({
			method: "GET",
			path: "/prepush/state",
			summary: "How the pre-push check is going",
			description: "The verdict, or the progress so far. Nothing is addressed by id here, because there is one working tree and so exactly one check."
		}).output(Vg),
		run: K.route({
			method: "POST",
			path: "/prepush/run",
			summary: "Run the checks before pushing",
			description: "Starts the suite the workspace runs before anything leaves the machine, and answers immediately. A suite takes minutes, and a request held open that long dies at the first proxy. It runs in a real terminal, so watch it there and poll for the verdict. Name the repositories going out, and each one's own checks run in its own directory."
		}).input(yE).output(X),
		cancel: K.route({
			method: "POST",
			path: "/prepush/cancel",
			summary: "Stop the pre-push check",
			description: "Kills the run. It settles as cancelled and the push it was gating does not go."
		}).output(X)
	};
})), SE, CE, wE = b((() => {
	q(), G(), Y(), cf(), SE = L({
		agents: I(L({
			id: M(),
			label: M()
		})).describe("ACP agents installed here. The id is the provider id itself, the label its display name."),
		endpoints: I(L({
			id: M(),
			label: M(),
			kind: B(["endpoint", "localmodel"])
		})).describe("Model endpoints, already prefixed `endpoint/`, including the daemon-provisioned free trial.")
	}), CE = {
		list: K.route({
			method: "GET",
			path: "/providers",
			summary: "Providers a chat can run on here",
			description: "The installed ACP agents and model endpoints, which are the providers this sandbox adds to the fixed native list. A read for anyone who may watch or drive a turn: it names what a message can be addressed to, not what credential stands behind it."
		}).output(SE),
		models: K.route({
			method: "GET",
			path: "/providers/{provider}/models",
			summary: "Models one provider offers",
			description: "Every model this provider serves and which one it defaults to. Never empty: it is discovered live with a stored list behind it. The order is the provider's own preference and is not rearranged here."
		}).input(ud).output(sf)
	};
})), TE, EE, DE, OE, kE, AE, jE, ME = b((() => {
	G(), TE = L({
		kind: V("webpush").describe("A browser, which the sandbox can reach directly and encrypt end to end."),
		endpoint: N().describe("Where that browser's push service accepts sends. It also identifies the device everywhere else in this group."),
		keys: L({
			p256dh: M().min(1).describe("The browser's public key, for encrypting what is sent."),
			auth: M().min(1).describe("The browser's secret, for the same.")
		}).describe("What the browser handed you when it subscribed. Post it back exactly as it came; nothing reshapes it.")
	}), EE = L({
		kind: V("relay").describe("A native app, whose operating system only accepts sends from the app's publisher, so the sandbox posts through a relay instead. The message passes through that relay readable, which is the price of the publisher having to be in the loop."),
		url: N().describe("Where to post a send. Recorded rather than assumed, so the sandbox need not know any platform by name."),
		deviceId: M().min(1).describe("The device's id, which also identifies this registration everywhere else in this group."),
		secret: M().min(1).describe("Proof that this sandbox may notify this device. The relay never learns which sandbox is calling.")
	}), DE = R("kind", [TE, EE]), L({
		title: M().min(1).describe("The headline."),
		body: M().describe("The line under it. Push services cap the whole payload at a few kilobytes, which is why nothing here carries a transcript or a diff: a notification is a pointer back, not a delivery."),
		url: M().optional().describe("Where tapping it goes. An existing tab is focused rather than a new one opened."),
		tag: M().optional().describe("Collapses repeats: a second notification with the same tag replaces the first instead of stacking beside it."),
		requireInteraction: F().optional().describe("Keep it on screen until it is dismissed. Used when the agent is waiting for you, where one that fades away is a question that went unanswered in silence.")
	}), OE = L({
		publicKey: M().describe("The key a browser needs in order to subscribe. Native apps ignore it."),
		subscribed: F().describe("Whether the asking device is already registered, so a toggle can show its real state instead of trusting the device's own permission, which can be granted with nothing behind it.")
	}), kE = L({ id: M().min(1).describe("Which device: a browser's push address, or a native install's device id.") }), AE = L({ id: M().min(1).optional().describe("Which device is asking. Without it the answer can only speak for the sandbox as a whole, which is rarely the question.") }), jE = L({ delivered: P().int().nonnegative().describe("How many devices actually accepted it. A count rather than a yes, because this button exists to prove a chain nobody can inspect, and the sandbox having accepted the request is not the question being asked.") });
})), NE, PE = b((() => {
	q(), ME(), Q(), NE = {
		config: K.route({
			method: "GET",
			path: "/push/config",
			summary: "What a device needs to subscribe",
			description: "The public key and settings a browser or app needs before it can register for notifications from this sandbox."
		}).input(AE).output(OE),
		subscribe: K.route({
			method: "POST",
			path: "/push/subscribe",
			summary: "Send notifications to this device",
			description: "Registers one device. The sandbox only interrupts you on the three moments where attention is genuinely wanted: a turn has finished, the agent is stuck on a question, and something is waiting for approval."
		}).input(DE).output(X),
		unsubscribe: K.route({
			method: "POST",
			path: "/push/unsubscribe",
			summary: "Stop notifying a device",
			description: "Removes one registered device. Others keep receiving."
		}).input(kE).output(X),
		test: K.route({
			method: "POST",
			path: "/push/test",
			summary: "Send a test notification",
			description: "Proves the whole chain end to end. Worth having, because there are four separate places a notification can be lost that nobody can inspect from the outside: the device's permission, its registration, the sandbox's key, and the delivery service."
		}).output(jE)
	};
})), FE, IE = b((() => {
	q(), WC(), Q(), G(), FE = {
		policy: K.route({
			method: "GET",
			path: "/safety/policy",
			summary: "The safety policy this sandbox is judged against",
			description: "The document that decides when an agent stops to ask you before running something. Prose, not settings: it is read by the model that judges each command. When nobody has written one, this is the text the product ships with, and it describes the behaviour a fresh sandbox already has."
		}).output(UC),
		setPolicy: K.route({
			method: "POST",
			path: "/safety/policy",
			summary: "Rewrite the safety policy",
			description: "Replaces the document whole. Nothing in it can widen what the sandbox is structurally allowed to do: it decides which of the things an agent may already do are worth interrupting you about."
		}).input(L({ text: M().describe("The policy, as you want it written.") })).output(X),
		log: K.route({
			method: "GET",
			path: "/safety/log",
			summary: "Recent safety verdicts",
			description: "What was judged lately, what the judge decided, and whether you were interrupted. Newest first. This is where you find out why you were not asked about something, which is the question a policy page otherwise cannot answer."
		}).output(I(HC))
	};
})), LE, RE = b((() => {
	q(), Lf(), Q(), LE = {
		set: K.route({
			method: "POST",
			path: "/secrets",
			summary: "Store a secret",
			description: "Writes one name and value into the sandbox's own store, where running processes pick it up without a restart. Refused until the sandbox has somewhere to keep them."
		}).input(Cf).output(X),
		list: K.route({
			method: "GET",
			path: "/secrets",
			summary: "Names of the stored secrets",
			description: "Which secrets exist here. Names only, never values."
		}).output(wf),
		remove: K.route({
			method: "DELETE",
			path: "/secrets/{key}",
			summary: "Delete a secret",
			description: "Removes one by name."
		}).input(Tf).output(X),
		inventory: K.route({
			method: "GET",
			path: "/secrets/inventory",
			summary: "Every secret this sandbox holds, from everywhere",
			description: "One view across all the places secrets live here: what exists, where it came from and whether it is working. Never any values. This one always answers, even before there is a store to write to."
		}).output(If),
		reveal: K.route({
			method: "POST",
			path: "/secrets/reveal",
			summary: "Show one secret's value",
			description: "The only call that hands a value back, and it is for the owner alone. Sent as a body rather than in the address, so the name never ends up in a log or a browser's history."
		}).input(Tf).output(Ef),
		gates: K.route({
			method: "GET",
			path: "/secrets/gates",
			summary: "Which credentials need somebody's approval",
			description: "What is gated and who may release it. Names and addresses only, never values, and the agent may read it too: knowing a credential needs Bob is what stops it concluding the account is simply not connected."
		}).output(jf),
		setGate: K.route({
			method: "PUT",
			path: "/secrets/gates/{subject}",
			summary: "Put a credential behind named approvers",
			description: "Names exactly who may release one secret or one connected account, and how far a single release goes. The owner's call alone. A signed-in browser or a mounted server cannot be released for one use, so those are always for the rest of the conversation."
		}).input(Af).output(X),
		removeGate: K.route({
			method: "DELETE",
			path: "/secrets/gates/{subject}",
			summary: "Stop requiring approval for a credential",
			description: "Removes one gate, so the agent can use that credential the way it uses any other. The owner's call alone."
		}).input(Mf).output(X),
		request: K.route({
			method: "POST",
			path: "/secrets/request",
			summary: "Ask a named person to release a credential",
			description: "Raises the release card in the live conversation and waits for one of the people named on it. Refused, rather than held, when there is nobody to ask: an unattended turn, no live conversation, or a click with no verified identity behind it."
		}).input(Nf).output(Pf)
	};
})), zE, BE, VE, HE = b((() => {
	G(), wm(), zE = L({ id: M().describe("Which past conversation.") }), BE = L({
		id: M().describe("Its id."),
		title: M().describe("What it is called."),
		updatedAt: P().describe("When it last moved, in milliseconds."),
		snippet: cm.optional().describe("Why a search matched: the line it hit, with a little around it, and who said it. Absent on an unfiltered list, and on a match the title already shows, where repeating it would be noise rather than evidence.")
	}), VE = L({ sessions: I(BE).describe("Past conversations, newest first.") });
})), UE, WE = b((() => {
	q(), G(), xh(), HE(), UE = {
		list: K.route({
			method: "GET",
			path: "/sessions",
			summary: "Past conversations in this workspace",
			description: "Summaries for a history menu, filtered when you pass a search. Covers conversations that worked in their own private copies too, so nothing is hidden just because it happened on a branch."
		}).input(L({
			query: M().optional(),
			caseSensitive: Tl().optional()
		})).output(VE),
		get: K.route({
			method: "GET",
			path: "/sessions/{id}",
			summary: "Read one past conversation",
			description: "The full record of a single conversation, restored for display."
		}).input(zE).output(vh)
	};
})), GE, KE, qE, JE, YE, XE = b((() => {
	G(), L({
		at: P().describe("When the turn ended, in milliseconds."),
		day: M().describe("The day it fell in, as YYYY-MM-DD in UTC, worked out once so nothing downstream has to do timezone arithmetic."),
		provider: M().describe("Which model provider served it."),
		account: M().optional().describe("Which account paid. Absent for a turn run on a plain key, which belongs to no account."),
		model: M().optional().describe("The model that actually ran, past whatever was asked for and every default. Absent only when the provider's own default served it without being named."),
		modelRequested: M().optional().describe("The model that was asked for, when one was named. Differs from `model` when something resolved it."),
		harness: M().describe("Which agentic loop it ran on."),
		outcome: B([
			"ok",
			"error",
			"cancelled"
		]).optional().describe("How it ended: finished, failed, or was stopped by the user."),
		errorCode: M().optional().describe("The failure's code, when it had one."),
		errorMessage: M().optional().describe("What the failure said, trimmed."),
		conversationId: M().optional().describe("Which conversation it belonged to, so spending can be traced to a card. Absent only for an internal one-off with no conversation at all."),
		turns: P().describe("The provider's own count for the request, since one exchange can be several under the hood. One when it reported none."),
		inputTokens: P().describe("Tokens sent."),
		outputTokens: P().describe("Tokens received."),
		cacheReadTokens: P().describe("Tokens served from cache, which cost less."),
		cacheCreationTokens: P().describe("Tokens written to cache, which cost more up front and less afterwards."),
		costUsd: P().describe("What it cost, in dollars."),
		durationMs: P().describe("How long it took, in milliseconds."),
		iqSearchArm: F().optional(),
		iqSearchCohort: M().optional(),
		searchCalls: P().optional(),
		openingSearches: P().optional(),
		openingListings: P().optional(),
		callsBeforeTarget: P().optional(),
		mapArm: F().optional(),
		mapChars: P().optional(),
		turnIndex: P().optional(),
		verification: B([
			"verified",
			"unproven",
			"failing",
			"no-code"
		]).optional(),
		check: M().optional(),
		filesEdited: P().optional(),
		toolCalls: P().optional(),
		checklistTotal: P().optional(),
		checklistOpen: P().optional(),
		compactions: P().optional(),
		contextTokens: P().optional(),
		contextWindow: P().optional(),
		tierScore: P().optional(),
		tierRules: I(M()).optional(),
		tierRouted: F().optional(),
		tierFast: F().optional(),
		tierCeiling: P().optional(),
		tierDenied: F().optional()
	}), GE = L({
		day: M().describe("The day, as YYYY-MM-DD in UTC."),
		provider: M().describe("Which model provider."),
		account: M().optional().describe("Which account. Absent for work run on a plain key."),
		model: M().optional().describe("Which model."),
		harness: M().describe("Which agentic loop."),
		conversationId: M().optional().describe("Which conversation."),
		turns: P().describe("Turns in this group."),
		inputTokens: P().describe("Tokens sent."),
		outputTokens: P().describe("Tokens received."),
		cacheReadTokens: P().describe("Tokens served from cache."),
		cacheCreationTokens: P().describe("Tokens written to cache."),
		costUsd: P().describe("What the group cost, in dollars."),
		durationMs: P().describe("Time spent, in milliseconds.")
	}), KE = L({
		from: M().optional().describe("First day to include, as YYYY-MM-DD in UTC. Leave it out for everything up to the end day."),
		to: M().optional().describe("Last day to include, as YYYY-MM-DD in UTC, and it is included rather than excluded. Leave it out for everything from the start day onwards.")
	}), qE = L({ rows: I(GE).describe("Spending grouped by day, provider, account, model and conversation. Everything a cost screen shows is a rearrangement of these rows, which is why there is no second call for any of it.") }), JE = L({
		provider: M(),
		account: M(),
		turns: P(),
		inputTokens: P(),
		outputTokens: P(),
		cacheReadTokens: P(),
		cacheCreationTokens: P(),
		costUsd: P()
	}), YE = L({ accounts: I(JE) });
})), ZE, QE = b((() => {
	q(), kw(), Q(), XE(), ZE = {
		get: K.route({
			method: "GET",
			path: "/settings",
			summary: "How this sandbox is configured",
			description: "Every setting that governs how agents behave here, with the defaults filled in for anything nobody has chosen."
		}).output(fw),
		set: K.route({
			method: "POST",
			path: "/settings",
			summary: "Change the sandbox settings",
			description: "Writes the settings whole, so send the complete object rather than the fields you changed."
		}).input(fw).output(X),
		savings: K.route({
			method: "GET",
			path: "/settings/savings",
			summary: "What the token-saving measures were worth",
			description: "Measured rather than estimated: what each mechanism actually saved over a range of days. The same day range the spending ledger takes, so one calendar filters both."
		}).input(KE).output(Sw),
		builtinPrompt: K.route({
			method: "GET",
			path: "/settings/system-prompt/{base}",
			summary: "Read a built-in system prompt",
			description: "The actual text behind one of the built-in modes, so a settings screen can show the prompt instead of asking anyone to trust a description of it, and so either can be forked into a custom one."
		}).input(KC).output(pw),
		firings: K.route({
			method: "GET",
			path: "/settings/rule-firings",
			summary: "When each rule last did something",
			description: "A separate read rather than a field on the settings, because a rule firing is not somebody editing anything: folding it in would turn every firing into a settings write and put a self-changing value inside the object a screen edits."
		}).output(nw),
		repoChecks: K.route({
			method: "GET",
			path: "/settings/repo-checks",
			summary: "What each repository asks to run on its own code",
			description: `Every repository that declares its own checks at \`${Cw}\`, what it declares, and whether you have switched it on. A repository declares what to run because the command belongs beside the scripts it names; nothing it declares runs until you say so.`
		}).output(Dw),
		adoptRepoChecks: K.route({
			method: "POST",
			path: "/settings/repo-checks/adopt",
			summary: "Switch a repository's own checks on or off",
			description: "Adopts exactly what that repository declares as it stands now. If the declaration changes afterwards it stops running until you adopt it again, so a command nobody has read cannot inherit the answer given to a different one."
		}).input(Ow).output(X)
	};
})), $E, eD = b((() => {
	q(), Zm(), Q(), $E = {
		list: K.route({
			method: "GET",
			path: "/share",
			summary: "Conversations published as pages",
			description: "Every conversation that has been turned into a read-only page, with its link. There is no call to read one back: the page itself is the read, and it answers to anyone who has the link."
		}).output(qm),
		create: K.route({
			method: "POST",
			path: "/share",
			summary: "Publish a conversation",
			description: "Renders a conversation into a page anybody with the link can read, without signing in. Answers with the link, so nothing has to be listed again to find it."
		}).input(Jm).output(Km),
		update: K.route({
			method: "POST",
			path: "/share/update",
			summary: "Refresh a published page",
			description: "Re-renders an existing page from the conversation as it stands now. Same link, newer contents."
		}).input(Ym).output(Km),
		remove: K.route({
			method: "POST",
			path: "/share/remove",
			summary: "Unpublish a conversation",
			description: "Takes the page down, so the link stops answering."
		}).input(Xm).output(X)
	};
})), tD, nD = b((() => {
	q(), kw(), Q(), tD = {
		list: K.route({
			method: "GET",
			path: "/skills",
			summary: "What the agent knows how to do",
			description: "Every skill available here and whether it is switched on, joined from all the places they come from: the owner's own, the settings, plugins a connection installed, folders inside extensions, and persona kits."
		}).output(ow),
		read: K.route({
			method: "GET",
			path: "/skills/read",
			summary: "Read one skill",
			description: "The full text of a single skill. The name travels in the query rather than the address, because a name can carry the owner it came from and that will not fit in a path."
		}).input(cw).output(sw),
		save: K.route({
			method: "POST",
			path: "/skills",
			summary: "Write a skill",
			description: "Creates or rewrites a skill by name. A new one starts switched on, because you wrote it in order to use it; rewriting one you switched off leaves it off. Renaming is saving under the new name and deleting the old."
		}).input(lw).output(X),
		switch: K.route({
			method: "POST",
			path: "/skills/switch",
			summary: "Switch one of your own skills on or off",
			description: "Off takes the agent's copy away and keeps your text; on writes the copy back from it. Built-in tools are switched in the agent settings instead, and nothing else has a switch."
		}).input(dw).output(X),
		remove: K.route({
			method: "POST",
			path: "/skills/remove",
			summary: "Delete a skill",
			description: "Removes the text and the agent's copy in one step, so a screen never has to sequence two calls and never leaves one half done."
		}).input(uw).output(X)
	};
})), rD, iD, aD, oD, sD = b((() => {
	G(), rD = L({ distro: M() }), iD = L({
		os: M(),
		arch: M(),
		shell: M(),
		home: M(),
		roots: I(M()),
		engine: L({
			memoryBytes: P(),
			cpus: P()
		}).optional(),
		hostname: M().optional(),
		wsl: rD.optional(),
		wslDistros: I(M()).optional()
	}), aD = L({
		key: M().min(1),
		online: F(),
		version: M().optional(),
		lastSeen: P().optional(),
		facts: iD.optional()
	}), oD = L({
		id: M(),
		platform: M().min(1),
		environments: I(aD).min(1),
		online: F(),
		version: M().optional(),
		lastSeen: P().optional(),
		facts: iD.optional()
	}), L({ hosts: I(oD) });
})), cD = b((() => {})), lD, uD, dD, fD, pD, mD, hD, gD, _D, vD, yD, bD, xD, SD, CD, wD, TD, ED, DD, OD, kD, AD, jD, MD, ND, PD, FD, ID = b((() => {
	G(), sD(), lD = L({
		memoryBytes: P().optional(),
		cpus: P().optional(),
		privileged: F(),
		gpu: F(),
		hostRuntime: I(M()),
		overlayRuntime: I(M())
	}), uD = L({
		memoryGib: ac().positive().nullable().optional(),
		cpus: ac().positive().nullable().optional(),
		privileged: F().optional(),
		gpu: F().optional()
	}), dD = uD.refine((e) => Object.values(e).some((e) => e !== void 0), { message: "a reshape must change at least one thing" }), fD = L({
		slug: M(),
		container: M(),
		name: M().optional(),
		running: F(),
		image: M(),
		tunnelRunning: F().optional(),
		resources: lD.optional()
	}), pD = B([
		"start",
		"stop",
		"restart",
		"prepare",
		"update",
		"rebuild",
		"rollback",
		"reshape",
		"remove",
		"logs",
		"reconnect",
		"runner-up",
		"runner-remove"
	]), mD = L({
		op: pD,
		slug: M().min(1),
		hash: M().optional(),
		resources: dD.optional(),
		parentUrl: M().optional(),
		pair: M().optional().meta({ secret: !0 }),
		setupCode: M().optional().meta({ secret: !0 }),
		definition: M().optional(),
		overlay: M().optional(),
		overlayHash: M().optional()
	}), hD = mD.extend({ id: M().min(1) }), gD = R("kind", [
		L({
			kind: V("line"),
			text: M()
		}),
		L({
			kind: V("result"),
			message: M()
		}),
		L({
			kind: V("error"),
			message: M()
		})
	]), _D = B(["upgrade", "restart"]), vD = L({ op: _D }), yD = vD.extend({ id: M().min(1) }), bD = B([
		"mirror-off",
		"mirror-on",
		"sync-pause",
		"sync-resume",
		"sync-unpair",
		"dev-reload",
		"dev-rebuild",
		"dev-rebuild-log",
		"sync-install"
	]), bD.exclude([
		"dev-reload",
		"dev-rebuild",
		"dev-rebuild-log",
		"sync-install"
	]), xD = M().max(200).regex(/^[A-Za-z0-9][A-Za-z0-9._-]*$/), SD = M().min(1).max(4096).regex(/^(?:~|\/|[A-Za-z]:[\\/])[^"'`$;|&\n\r]*$/), CD = L({
		id: M().min(1),
		command: bD,
		sandboxId: xD.optional(),
		mode: B(["sync", "mirror"]).optional(),
		localDir: SD.optional()
	}), wD = L({
		ok: F(),
		message: M(),
		output: M().optional(),
		refused: F()
	}), TD = B([
		"created",
		"modified",
		"deleted"
	]), ED = L({
		path: M(),
		local: TD.optional(),
		sandbox: TD.optional()
	}), DD = L({
		sandboxId: M(),
		mode: B(["sync", "mirror"]),
		localDir: M().optional(),
		mirroring: B(["on", "off"]).optional(),
		mutagenStatus: M().optional(),
		conflicts: P().int().nonnegative().optional(),
		conflictedPaths: I(ED).optional(),
		paused: F().optional(),
		backupStatus: M().optional()
	}), OD = B([
		"mirrored",
		"held-by-sandbox",
		"busy"
	]), kD = L({
		port: P().int().min(1).max(65535),
		host: B(["127.0.0.1", "::1"]),
		sandboxId: M(),
		state: OD,
		heldBy: M().optional(),
		command: M().optional()
	}), AD = L({
		running: F(),
		pid: P().int().optional(),
		installed: M().optional(),
		build: M().optional(),
		lastTickAt: P().optional()
	}), jD = L({
		hostname: M(),
		os: M(),
		wsl: rD.optional(),
		pairings: I(DD),
		ports: I(kD),
		agent: AD,
		capturedAt: P()
	}), MD = B([
		"offline",
		"scope-off",
		"no-agent",
		"unreported"
	]), ND = L({
		machine: M(),
		mode: B(["sync", "mirror"]),
		seenAt: P().optional()
	}), PD = L({
		key: M(),
		label: M(),
		sync: ND.optional(),
		hostId: M().optional(),
		online: F().optional(),
		platform: M().optional(),
		facts: iD.optional(),
		agentVersion: M().optional(),
		lastSeen: P().optional(),
		report: jD.optional(),
		sandboxes: I(fD).optional(),
		gap: MD.optional()
	}), FD = L({ devices: I(PD) }), L({
		enrolled: F(),
		available: F().optional(),
		machines: I(jD).optional()
	});
})), LD, RD, zD, BD, VD, HD, UD, WD, GD, KD, qD, JD, YD = b((() => {
	G(), LD = L({
		state: B([
			"ready",
			"unavailable",
			"unknown"
		]).describe("Whether this runtime can serve a turn. Unknown is a real answer rather than a soft no: a check that could not run must not grey out a provider you can in fact use."),
		detail: M().optional().describe("Why it cannot, and what to do about it. Absent when it can."),
		checkedAt: P().describe("When it was last checked, in milliseconds.")
	}), RD = L({
		version: M().optional().describe("What the downloaded build says it is. Absent means ready but unnamed, never that nothing is ready."),
		channel: M().describe("Which channel it was taken from. Not necessarily the one this sandbox follows: downloading a beta build is not the same as moving onto beta."),
		at: P().describe("When the download finished, in milliseconds, which answers whether this is still the update being offered.")
	}), zD = L({
		name: M().optional().describe("What this sandbox is called."),
		image: M().optional().describe("The image it is running."),
		version: M().optional().describe("The version of that image."),
		latest: M().optional().describe("The newest published version on its channel."),
		updateAvailable: F().optional().describe("Whether those two differ."),
		runtimes: z(M(), LD).optional().describe("Which agent runtimes can serve a turn right now, keyed by runtime. Absent until the first check has run, which reads the same as every entry being unknown."),
		channel: M().optional().describe("Which release channel this sandbox follows."),
		previousImage: M().optional().describe("The image the last update replaced, which is what a rollback would return to. Absent means there is nothing to go back to."),
		updateNotes: I(M()).optional().describe("What is in the update, in the words of the people it is for, newest first. Absent or empty whenever there is nothing worth saying, which reads on screen exactly as it did before there were notes at all."),
		moreUpdateNotes: P().optional().describe("How many further notes there are beyond the ones sent, for a sandbox left alone a long time. Absent or zero means you have all of them."),
		breakingNotes: I(M()).optional().describe("What the update takes away, uncapped, because a warning that fell off a shortened list is a breaking update taken unwarned. Absent for the overwhelming majority, which break nothing."),
		staged: RD.optional().describe("An update already downloaded and built on the machine running this container, waiting only for the restart that applies it. That restart is seconds, where an unprepared update is minutes, which is a different decision entirely. Absent when nothing is waiting.")
	}), BD = L({
		kind: B([
			"unreadable",
			"unknownKey",
			"invalidEntry"
		]).describe("What to do about it. Unreadable means the whole file is being ignored and everything in it is at its default. An unknown key means only that key is ignored. An invalid entry means one item of a list was skipped and the rest is fine."),
		detail: M().describe("What exactly was wrong, as one sentence and nothing else. Never the remedy: that is `fix`."),
		suggestion: M().optional().describe("The name it was probably meant to be, when one is close enough to guess honestly."),
		fix: M().optional().describe("What to do about it, when that is something other than 'correct the file'. Absent whenever the file itself is the thing to edit.")
	}), VD = L({
		path: M().describe("The file, as a workspace path. The file is the unit somebody fixes, which is why problems are grouped by it."),
		problems: I(BD).describe("Everything currently wrong with it. A file with nothing wrong is absent rather than present and empty.")
	}), HD = I(VD), UD = L({
		path: M().describe("The file to repair, as the workspace path the problem was reported under. Only the handful of manifests a person hand-edits can be named; anything else is refused."),
		key: M().describe("The stray top-level key, exactly as it was reported. Absent from the file already means there is nothing to do."),
		to: M().optional().describe("Rename the key to this instead of removing it, carrying its value across. Absent means remove it. Naming a key that is already in the file is refused rather than silently overwriting what is there.")
	}), WD = L({
		token: M().describe("The credential every other call carries. Present it as a bearer token."),
		expiresAt: P().describe("When it stops working, in milliseconds, so a caller can renew ahead of it without reading the token."),
		email: M().describe("Who the sandbox verified you as.")
	}), B([
		"google",
		"ticket",
		"passkey",
		"recovery"
	]), GD = L({
		id: M().describe("The credential id the authenticator chose, base64url."),
		email: M().describe("Whose passkey this is; the owner's list carries every member's, a member's only their own."),
		label: M().describe("The name given at registration, or the daemon's default."),
		rpId: M().describe("The editor host this passkey is bound to; a passkey answers only from that origin."),
		createdAt: P().describe("Epoch ms of registration."),
		lastUsedAt: P().optional().describe("Epoch ms of the last sign-in it answered; absent means never."),
		backedUp: F().describe("Whether the authenticator syncs this passkey (a phone's keychain) or holds the only copy (a hardware key).")
	}), L({
		passkeys: I(GD),
		required: F().describe("Whether a passkey is the only proof that opens this sandbox; owner-set."),
		recovery: L({ remaining: P() }).optional().describe("Owner only, while required: how many one-time recovery codes are still unspent.")
	}), L({ required: F() }), L({ codes: I(M()) }), L({ code: M().min(1) }), L({
		error: M(),
		requires: V("passkey"),
		enrolled: F()
	}), KD = M().regex(/^[A-Za-z0-9_-]+$/, "base64url"), qD = L({
		id: KD,
		rawId: KD,
		type: V("public-key"),
		response: L({
			clientDataJSON: KD,
			attestationObject: KD,
			transports: I(M()).optional()
		}),
		authenticatorAttachment: M().optional(),
		clientExtensionResults: z(M(), oc()).optional()
	}), JD = L({
		id: KD,
		rawId: KD,
		type: V("public-key"),
		response: L({
			clientDataJSON: KD,
			authenticatorData: KD,
			signature: KD,
			userHandle: KD.optional()
		}),
		authenticatorAttachment: M().optional(),
		clientExtensionResults: z(M(), oc()).optional()
	}), L({
		response: qD,
		label: M().optional()
	}), L({ response: JD });
})), XD, ZD = b((() => {
	q(), G(), xh(), Rv(), ID(), KT(), Q(), YD(), Wm(), XE(), XD = {
		info: K.route({
			method: "GET",
			path: "/info",
			summary: "What this sandbox is",
			description: "The sandbox's own identity and state: which workspace it holds, which image it runs, what it is called, and the list of calls it actually implements. Start here, because a browser is routinely newer than the sandbox it is talking to and this is how it finds out what is there."
		}).output(zD),
		manifestProblems: K.route({
			method: "GET",
			path: "/system/manifest-problems",
			summary: "Settings files the sandbox could not read",
			description: "Anything the daemon tripped over in its own configuration on disk: a file it had to fall back from, a key it did not recognise, an entry it skipped. Separate from the identity call because it goes stale for a different reason, namely a file changing."
		}).output(HD),
		repairManifest: K.route({
			method: "POST",
			path: "/system/manifest-problems/repair",
			summary: "Take a stray setting out of a file",
			description: "Removes a key the sandbox does not recognise from one of its settings files, or renames it to the one it was probably meant to be, keeping the value. Only the files a person hand-edits can be named, and only a key — never a value — so this can only ever remove something already being ignored. Renaming onto a key the file already has is refused instead of overwriting it."
		}).input(UD).output(X),
		session: K.route({
			method: "POST",
			path: "/system/session",
			summary: "Trade a sign-in for a session",
			description: "Exchanges a verified sign-in, or a session that has not expired yet, for a fresh session the daemon minted. That session is the credential every other call carries, and calling this again with a live one renews it."
		}).output(WD),
		events: K.route({
			method: "GET",
			path: "/events",
			summary: "The live event stream",
			description: "A stream held open for as long as you want it, carrying heartbeats so a caller notices the sandbox dying at once, batches of file changes so a tree or an editor can refresh itself, and the roster of who else is looking. Give it an id for this connection to appear in that roster; leave it out and you watch without being seen."
		}).input(L({ clientId: M().optional() })).output(ju(Lv)),
		presence: K.route({
			method: "POST",
			path: "/system/presence",
			summary: "Say what you are looking at",
			description: "Reports which view, conversation or file this connection is on, or that it has gone idle. The daemon fans it back out on the event stream so everyone else's roster updates."
		}).input(GT).output(X),
		usage: K.route({
			method: "GET",
			path: "/system/usage",
			summary: "What has been spent",
			description: "Token and cost totals per account, added up from the record of every finished turn."
		}).output(YE),
		terminals: K.route({
			method: "GET",
			path: "/system/terminals",
			summary: "Open terminals",
			description: "The terminal sessions this sandbox is holding, which is what a terminal panel rebuilds its tabs from after a reload. The live typing and output run over a separate socket; this is the list."
		}).output(Am),
		killTerminal: K.route({
			method: "DELETE",
			path: "/system/terminals/{name}",
			summary: "Close a terminal",
			description: "Destroys one terminal session and whatever was running inside it."
		}).input(jm).output(X),
		terminalScrollback: K.route({
			method: "GET",
			path: "/system/terminals/{name}/scrollback",
			summary: "A terminal's history as plain text",
			description: "What has scrolled past in one terminal, as text you can select and copy. The live view is a picture of a screen on the far side of a socket, with nothing in the page to select, so scrolling back and copying is this call rather than a gesture."
		}).input(Mm).output(Nm),
		browsers: K.route({
			method: "GET",
			path: "/system/browsers",
			summary: "Browsers the agent has open",
			description: "Every browser a conversation currently has running and the pages inside each one. The picture of what they are showing comes over a separate socket; this is the roster."
		}).output(Im),
		closeBrowser: K.route({
			method: "DELETE",
			path: "/system/browsers/{name}",
			summary: "Shut a browser down",
			description: "Closes one of the agent's browsers. Its next attempt to use that browser then fails as though it had crashed, which is the honest account of somebody pulling the plug."
		}).input(Lm).output(X),
		subagents: K.route({
			method: "GET",
			path: "/system/subagents",
			summary: "Subagents the agents have started",
			description: "Every subagent and child agent this sandbox's conversations have delegated work to, whichever tool started it, with what each one is doing."
		}).output(Hm),
		subagentTranscript: K.route({
			method: "GET",
			path: "/system/subagents/{id}/transcript",
			summary: "A subagent's record",
			description: "The full record of one delegated subagent, in the same shape as any other conversation. It comes live from the parent turn while it works, and from stored history once it has finished."
		}).input(Um).output(vh),
		devices: K.route({
			method: "GET",
			path: "/system/devices",
			summary: "The machines you have connected",
			description: "Every computer this sandbox can see, whether it reached it through desktop sync or through a connected device, in one row per machine: what it says about itself, which sandboxes it holds, and what stopped it answering when nothing came back."
		}).output(FD),
		manageDeviceSandbox: K.route({
			method: "POST",
			path: "/system/devices/{id}/sandboxes/{slug}",
			summary: "Drive a sandbox on one of your own devices",
			description: "Start, stop, restart, update, rebuild, roll back, reshape (its memory and CPU caps, privileged, GPU) or remove a sandbox running on a machine you own, relayed over the connection that machine holds open. The answer is a stream because the slowest of these takes minutes, and it is the same stream whichever you ask for. The daemon adds no opinion: the machine enforces its own permissions and a refusal arrives as the last line, in the machine's words, naming the switch to flip."
		}).input(hD).output(ju(gD)),
		runDeviceCommand: K.route({
			method: "POST",
			path: "/system/devices/{id}/commands/{command}",
			summary: "Run one of your device's own CLI actions",
			description: "Performs a named action on a machine you own by running its own intentic-machine command there — turning that device's port mirroring off, say — over the connection it holds open. The set of actions is fixed and the command line is built here from the name, never sent by the caller. The machine enforces its own permissions and a refusal comes back as its own sentence, naming the switch to flip."
		}).input(CD).output(wD),
		runDeviceAgentFlow: K.route({
			method: "POST",
			path: "/system/devices/{id}/agent/{op}",
			summary: "Update or restart the agent on one of your own devices",
			description: "Updates a machine you own to the current intentic-machine agent, or restarts the loop it is running, over the connection that machine holds open. The answer is a stream of the run's own output — and it normally stops mid-run, because the agent's loop is what carries this connection: the work is detached from it first, so it finishes regardless, and the device's reported version is what confirms it. Takes the machine's \"Run commands\" permission, the same one a command typed there would."
		}).input(yD).output(ju(gD))
	};
})), QD, $D = b((() => {
	q(), G(), Vd(), cf(), Ud(), Q(), QD = {
		accounts: K.route({
			method: "GET",
			path: "/translator/accounts",
			summary: "Subscriptions connected through the translator",
			description: "What is signed in per provider. Each provider can hold several accounts at once, and the translator spreads work across them."
		}).output(Fd),
		connect: K.route({
			method: "POST",
			path: "/translator/{provider}/connect",
			summary: "Start connecting a subscription",
			description: "Begins the sign-in for one provider and says which of the two shapes it is: a code you type into a device page, which finishes by itself in the background, or a redirect whose landing address you hand back afterwards."
		}).input(L({ provider: Hd })).output(tf),
		status: K.route({
			method: "GET",
			path: "/translator/{provider}/connect",
			summary: "Read a subscription connection attempt",
			description: "Reports whether this exact sign-in attempt is waiting, completed, or failed. Completion is tied to the attempt rather than a change in account count, because signing in to an existing account replaces its credential in place."
		}).input(L({
			provider: Hd,
			state: M().min(1)
		})).output(nf),
		complete: K.route({
			method: "POST",
			path: "/translator/{provider}/complete",
			summary: "Finish a redirect sign-in",
			description: "For the providers that redirect somewhere this sandbox cannot receive: hand back the address you landed on and the connection completes."
		}).input(rf).output(X),
		disconnect: K.route({
			method: "POST",
			path: "/translator/{provider}/disconnect",
			summary: "Disconnect one subscription",
			description: "Clears a single account by name. Any others under the same provider stay connected."
		}).input(L({
			provider: Hd,
			name: M().min(1)
		})).output(X)
	};
})), eO, tO, nO = b((() => {
	q(), G(), Vd(), XE(), eO = L({ force: F().default(!1).describe("Measure again even if a reading was taken a moment ago.") }), tO = {
		rollup: K.route({
			method: "GET",
			path: "/usage/rollup",
			summary: "What was spent, grouped",
			description: "The spending record over a range of days, grouped by day, provider, account and model. Everything a cost screen shows is a rearrangement of this one answer, so nothing needs a second call. Read-only: rows are written by the sandbox as turns end, which is what makes it worth trusting."
		}).input(KE).output(qE),
		refreshPlanLimits: K.route({
			method: "POST",
			path: "/usage/plan-limits/refresh",
			summary: "Measure every account's plan limits again",
			description: "Reads how full each connected account's plan limits are, for every provider, and records it. Forced, it measures even accounts read a moment ago, which is the right thing when a plan was just changed and the question is whether the number on screen is still true."
		}).input(eO).output(L({ ok: V(!0) })),
		limitReset: K.route({
			method: "GET",
			path: "/usage/limit-reset/{account}",
			summary: "Whether this account's session window can be reopened now",
			description: "Asks the provider whether it will reopen this account's spent session window immediately, which some plans grant once a week. Only worth asking about an account that has actually been refused: the answer is the provider's judgement at this moment, it is not cached, and an account with no such grant answers plainly that it has none."
		}).input(L({ account: M().min(1).describe("Which account.") })).output(Ad),
		claimLimitReset: K.route({
			method: "POST",
			path: "/usage/limit-reset/{account}/claim",
			summary: "Reopen this account's session window now",
			description: "Spends one of the account's weekly resets to reopen its session window immediately. The weekly allowance is untouched and still binds. Answers with what the provider actually did: only `reset` changed anything, and it is the cue to send the refused turn again."
		}).input(L({ account: M().min(1).describe("Which account.") })).output(jd)
	};
})), rO, iO = b((() => {
	q(), Rv(), Q(), ky(), rO = {
		list: K.route({
			method: "GET",
			path: "/vpn",
			summary: "Configured tunnels and which are up",
			description: "Every stored VPN with its live link state, read back from the operating system rather than from memory, so a tunnel dropped from a shell and one dropped from a screen look the same here."
		}).output(Cy),
		connect: K.route({
			method: "POST",
			path: "/vpn/{id}/connect",
			summary: "Dial a VPN",
			description: "Brings a stored tunnel up, streaming the client's progress as it authenticates and then sets up routing. Streamed because a dial takes seconds and can fail with something you have to read: a wrong password, a gateway certificate nobody trusts, a code it wants. Connecting one that is already up simply says so."
		}).input(wy).output(ju(xv)),
		disconnect: K.route({
			method: "POST",
			path: "/vpn/{id}/disconnect",
			summary: "Drop a tunnel",
			description: "Takes the tunnel down. One that was already down is fine: the promise is that it is not up afterwards."
		}).input(Ty).output(X),
		importForticlient: K.route({
			method: "POST",
			path: "/vpn/import-forticlient",
			summary: "Read connections out of an exported config",
			description: "Turns an exported FortiClient configuration into a list of connections you can add, so somebody holding that file picks from a list instead of retyping a host and port for every tunnel."
		}).input(Ey).output(Oy)
	};
})), aO, oO, sO, cO, lO, uO, dO, fO, pO, mO, hO, gO, _O, vO, yO, bO, xO, SO, CO, wO, TO = b((() => {
	G(), Y(), cd(), Hp(), aO = M().min(1).max(24).regex(/^[a-z0-9][a-z0-9-]*$/), oO = B(["fresh", "continue"]), sO = 24, cO = L({
		id: aO.describe("This step's own name, which other steps use to say they wait on it."),
		title: M().min(1).max(60).describe("What to call it on screen. Short: the instruction below is where the detail goes."),
		goal: M().min(1).optional().describe("What done means for this step, in your words. It is what the step is judged against, and a different sentence from what it is told to do."),
		prompt: M().min(1).optional().describe("What the step is told to do. The goal is the suite is green; this is run the tests, take the top failure, fix it. Leaving it out hands over the run's own request untouched, which is right for a step whose whole job is do what was asked."),
		needs: I(aO).describe("Which steps must finish first. Empty means it starts when the run does. Naming a step that does not exist, or a loop between steps, is refused when the workflow is saved."),
		handoff: oO.describe("How it meets what came before: a fresh conversation handed the previous step's result, or the same conversation carried on."),
		output: Op.describe("What it has to produce for the step to count."),
		checks: I(kp).describe("What has to pass before it counts as done."),
		context: Dp.describe("How the step's own repeats meet each other. A long-running step wants to start clean each round; a short polish-this step wants to carry on."),
		maxSpendUsd: P().positive().optional().describe("A ceiling on what this step may spend. The one resource that cannot be recovered after an unattended fan-out, which is why it is here and iteration limits are not. Absent is uncapped."),
		agent: ld.optional().describe("Which provider runs it."),
		harness: dd.optional().describe("Which agentic loop runs it."),
		account: M().optional().describe("Which account pays for it."),
		model: M().optional().describe("Which model runs it."),
		actsAs: J.optional().describe("Which persona it acts as. Unpinned, a step gets the strict unwatched default: every tool, and no signed-in accounts at all. Pinning one is how a release check gets a voice, a folder to work in, or the single account it may post from.")
	}), lO = L({
		step: aO.describe("Which step's answer carries the decision. Usually a last step that weighs up the ones before it, though nothing requires that."),
		field: M().min(1).describe("Which of that step's declared answers to read. A declared field is the one part of a step's answer that was checked rather than fished out of prose, which is the whole rule here. Checked when the workflow is saved."),
		pass: I(M().min(1)).min(1).describe("Which values mean ship it. Everything else fails. A list of what passes rather than what fails, because a step answering mostly-pass or pass-with-notes must not ship, and this gets that right without anybody having had to enumerate the ways a model can hedge."),
		dailyMax: P().int().positive().optional().describe("How many runs a day, across every caller. A gate is a paid door with nobody in the loop: one wired into a push-triggered pipeline is a fan-out of conversations per commit. Absent is a small default rather than unlimited.")
	}), uO = B([
		"pass",
		"fail",
		"blocked"
	]), L({
		outcome: uO.describe("Ship it, do not, or we could not tell. That third answer exists because could not reach a judgement is not the product is broken: a gate that reported its own outages as failures is one a team switches off, so it should be the honest answer far more often than the convenient one, and it means a neutral build rather than a red one."),
		reason: M().describe("Why, in one line. Realistically the only part of this a build log will ever show."),
		runId: M().describe("The run behind the verdict, so somebody can go and read it."),
		value: M().optional().describe("What the step actually answered. Absent when there was nothing to read, which is most of the could-not-tell cases.")
	}), dO = L({
		id: J.describe("The workflow's id."),
		name: M().min(1).max(80).describe("What to call it."),
		description: M().max(400).optional().describe("What it is for."),
		steps: I(cO).min(1).max(sO).describe("The steps, each with what it waits on. Every one runs in its own private copy of the repos, always, because parallel steps sharing a tree collide."),
		gate: lO.optional().describe("Present means a machine can run this design and get a ship-it answer back. Absent means an ordinary workflow, started by a person, with no outside door onto it at all."),
		maxParallel: P().int().min(1).max(8).describe("How many steps may run at once. Bounded, because a fan-out of twelve is twelve model sessions, twelve working copies and twelve times the burn rate, on one machine.")
	}), fO = B([
		"pending",
		"running",
		"done",
		"failed",
		"skipped",
		"stopped"
	]), pO = L({
		stepId: aO.describe("Which step this is."),
		state: fO.describe("How it went. Skipped carries what the others cannot: it never ran, because something it was waiting on did not finish. That is why a failed run shows one red step and a trail of grey ones."),
		conversationId: M().describe("The conversation it ran on, and the way from a node on the graph to a real record. Shared with the step before it when they were chained, which is what makes those two one card."),
		startedAt: P().optional().describe("When it began, in milliseconds."),
		endedAt: P().optional().describe("When it ended, in milliseconds."),
		iterations: P().int().min(0).describe("How many rounds it took."),
		costUsd: P().optional().describe("What it cost, in dollars."),
		loopState: Pp.optional().describe("How its repeating ended. Out of rounds and stuck both come out as a failed step, and the difference between them is the difference between give it more room and more room will not help."),
		detail: M().optional().describe("What went wrong, when something did."),
		document: Ap.optional().describe("What it produced, once it has produced something that passes its own declared shape. This is what the steps after it are handed."),
		report: M().optional().describe("The start of its closing words. Bounded, so a long answer is not silently cut down to its last few thousand characters and the record stays a sensible size."),
		reportPath: M().optional().describe("Where the whole answer is, as a workspace path. Every step can read it, so a long handoff need not be copied into anybody's prompt.")
	}), mO = B([
		"running",
		"done",
		"failed",
		"stopped",
		"overspent",
		"error"
	]), hO = L({
		runId: M().min(1).describe("This run's id."),
		workflow: dO.describe("The design as it stood when the run started, copied rather than looked up. The run has to keep showing the graph it actually ran, not the one edited twice since, and a run of a deleted workflow has to stay readable."),
		repos: I(fd).min(1).max(50).describe("The workspace as this run began, one exact commit per repository. Every step branches from these, even if the shared tree moves while a wide fan-out is still opening its copies, so the steps can be compared with each other afterwards."),
		request: M().optional().describe("What this run was asked to do, handed to every step on top of its own instructions. It is what makes one saved design worth keeping: two models, one task is a shape, and the task is different every time. Absent for a run started with nowhere to type one."),
		state: mO.describe("How the run is going. Finished means every step that ran got there; a run with skipped steps counts as failed, because a graph that never reached its end did not do what it was asked whatever the survivors managed."),
		startedAt: P().describe("When it began, in milliseconds."),
		endedAt: P().optional().describe("When it ended, in milliseconds."),
		resumed: P().int().min(0).describe("How many times the sandbox restarted under it and picked it back up."),
		detail: M().optional().describe("What went wrong, when something did."),
		steps: I(pO).describe("One entry per step, in the design's own order. Every one is written down as waiting when the run starts, so the picture is complete from the first frame and a missing step never has to mean two things."),
		archivedAt: P().optional().describe("When it was put away, in milliseconds. The record stays readable and every step's branch, transcript and counters are untouched. Its conversations are put away with it, and brought back with it. Absent means live on the board.")
	}), gO = M().optional().describe("What a pipeline presents at /workflows/{id}/gate, when the design declares a gate. Shown to a maintainer or the owner only."), _O = dO.extend({ gateToken: gO }), vO = dO.extend({
		runs: I(hO).describe("Its runs, newest first."),
		gateToken: gO
	}), yO = L({ workflows: I(vO).describe("Every saved design with its own run history.") }), bO = L({ runs: I(hO).describe("Every run across every workflow, newest first, including runs of workflows since deleted.") }), xO = L({ id: M().describe("Which workflow.") }), SO = L({ runId: M().describe("Which run.") }), CO = xO.extend({ request: M().min(1).max(2e4).optional().describe("What to point it at. Optional, because a design whose steps already say what they want is complete on its own; only one written as a shape needs today's sentence.") }), wO = L({
		workflow: dO.describe("The design to write."),
		create: F().describe("Whether you mean to make a new one or replace an existing one. Said outright rather than inferred, so an id that happens to collide is a refusal instead of one saved design quietly overwriting another.")
	});
})), EO, DO = b((() => {
	q(), Q(), TO(), EO = {
		list: K.route({
			method: "GET",
			path: "/workflows",
			summary: "Saved workflows and their runs",
			description: "Every workflow somebody has designed, each with its own run history, newest first. One answer rather than two, because a workflow that has never been run is the interesting case rather than a mistake."
		}).output(yO),
		save: K.route({
			method: "POST",
			path: "/workflows",
			summary: "Create or replace a workflow",
			description: "Writes a workflow design. Say which of the two you mean, so an id that happens to collide cannot silently overwrite somebody's work. A design that could never run is refused, in the same words the editor shows while you type: a loop in the steps, a step waiting on one that is not there, a step with no way of knowing it is finished."
		}).input(wO).output(_O),
		rotateGateToken: K.route({
			method: "POST",
			path: "/workflows/{id}/gate/rotate",
			summary: "Rotate a release gate's token",
			description: "Mints a new credential for the workflow's release gate and retires the old one at once. Every pipeline wired to the gate has to be handed the new URL. Refused for a workflow that declares no gate."
		}).input(xO).output(uf),
		remove: K.route({
			method: "DELETE",
			path: "/workflows/{id}",
			summary: "Delete a workflow",
			description: "Removes the design. A run of it that is already going keeps going and stays readable and stoppable, because a run takes its own copy of the design when it starts."
		}).input(xO).output(X),
		run: K.route({
			method: "POST",
			path: "/workflows/{id}/run",
			summary: "Start a workflow",
			description: "Kicks a workflow off and answers immediately with the run as recorded; the work carries on without you. Point it at a question and every step gets that on top of its own instructions. Every step is written down as waiting up front, so the picture is complete from the first frame. Several runs of one design can be in flight at once without colliding."
		}).input(CO).output(hO),
		runs: K.route({
			method: "GET",
			path: "/workflows/runs",
			summary: "Every workflow run",
			description: "All runs across all workflows, newest first. This is also the only place the runs of a deleted workflow are still reachable."
		}).output(bO),
		stopRun: K.route({
			method: "POST",
			path: "/workflows/runs/{runId}/stop",
			summary: "Stop a run now",
			description: "Nothing further starts, and the steps already going are cut off where they stand. Whatever they had written stays on their branches. Deliberately abrupt rather than letting the current step finish: a step is a whole agent turn, and a stop that kept spending for minutes afterwards is indistinguishable from a button that does nothing. It always ends the run, including one left stranded by a daemon that was replaced mid-flight."
		}).input(SO).output(X),
		archiveRun: K.route({
			method: "POST",
			path: "/workflows/runs/{runId}/archive",
			summary: "Take a finished run off the board",
			description: "Nothing is lost and the working copies are reclaimed. Every conversation the run started is put away with it, which is what makes this an archive rather than a dismissal: a step has no card of its own, so merely dropping the run would spill its conversations onto the board at the moment somebody said they were done. Refused while the run is still going."
		}).input(SO).output(X),
		unarchiveRun: K.route({
			method: "POST",
			path: "/workflows/runs/{runId}/unarchive",
			summary: "Bring an archived run back",
			description: "Puts a run and every conversation it started back on the board."
		}).input(SO).output(X)
	};
})), OO, kO, AO, jO, MO, NO, PO, FO, IO, LO, RO, zO, BO, VO, HO, UO, WO, GO, KO, qO = b((() => {
	G(), tE(), OO = L({ repos: I(M()).describe("Every repository's id, sorted. An id is its folder relative to the workspace root, and \"root\" is the workspace itself.") }), kO = L({
		name: M().min(1).describe("What to call it in the workspace."),
		cloneUrl: M().min(1).describe("Where to clone it from."),
		branch: M().optional().describe("Which branch to check out. Leave it out for the repository's default.")
	}), AO = L({
		name: M().describe("What it ended up called."),
		path: M().describe("Where it landed.")
	}), jO = L({ name: M().min(1).describe("What to call it, which is also its folder under the workspace root.") }), MO = L({
		repo: M().describe("Which repository."),
		status: B([
			"updated",
			"current",
			"dirty",
			"diverged",
			"no-remote",
			"skipped",
			"error"
		]).describe("What happened to it. Dirty and diverged are why a repository was left alone: it had uncommitted work, or it had moved in a way that cannot be fast-forwarded."),
		behind: P().optional().describe("How many commits it was behind."),
		ahead: P().optional().describe("How many commits it was ahead."),
		head: M().optional().describe("The commit it ended up on."),
		message: M().optional().describe("What went wrong, when something did.")
	}), NO = L({ repos: I(MO).describe("One entry per repository, saying what happened to it.") }), PO = L({
		template: M().min(1).describe("Which kind of app to scaffold, by its key in the template list."),
		name: M().min(1).regex(/^[a-z][a-z0-9-]*$/).describe("What to call this one.")
	}), FO = L({
		repo: M().describe("Which repository to scaffold into."),
		apps: I(PO).min(1).describe("The apps to add.")
	}), IO = L({
		repo: M().describe("Which repository."),
		session: M().describe("What to call the terminal this runs in, so you can find it again."),
		dirs: I(M()).min(1).describe("Which projects to test, as folders relative to the repository. Empty targets the repository root.")
	}), LO = L({
		key: M().describe("The id to name when scaffolding one."),
		label: M().describe("What to call it on screen."),
		description: M().describe("What you get.")
	}), RO = L({ templates: I(LO).describe("The kinds of app the configured source repository knows how to scaffold.") }), zO = L({
		app: M().describe("The app's name, which is also its folder."),
		kind: M().optional().describe("What sort of app it is: the template it came from, or the framework worked out from its dependencies. Absent when it was found purely by having a dev script."),
		previewUrl: M().optional().describe("Where to open it. Absent when this sandbox has no outside address."),
		running: F().describe("Whether its dev server is up."),
		healthy: F().describe("Whether it is actually answering."),
		installed: F().describe("Whether its dependencies are installed, which is what decides whether a start takes seconds or an install first."),
		launch: ZT.optional().describe("Where a start the sandbox is running has got to: its shell coming up, installing, its dev command running with nothing listening yet, or exited back to a prompt. Absent when nothing is starting and once it serves.")
	}), BO = L({ apps: I(zO).describe("The apps in this repository.") }), VO = L({
		name: M().describe("The name the package declares."),
		dir: M().describe("Where it lives, relative to the repository."),
		group: M().describe("The top-level folder it sits under, which is what a diagram colours by.")
	}), HO = B([
		"prod",
		"dev",
		"peer"
	]), UO = L({
		from: M().describe("The package that depends."),
		to: M().describe("The package it depends on."),
		type: HO.describe("Which kind of dependency declared it.")
	}), WO = L({
		packages: I(VO).describe("Every package in the repository."),
		edges: I(UO).describe("Which of them use which. Pure data: how to lay it out is yours to decide.")
	}), GO = L({ repo: M().describe("Which repository.") }), KO = L({
		repo: M().describe("Which repository."),
		app: M().min(1).regex(/^[a-z][a-z0-9-]*$/).describe("Which app inside it.")
	});
})), JO, YO, XO, ZO, QO = b((() => {
	G(), JO = L({
		dir: M().describe("Where the project is, relative to the workspace root. Empty means the root itself."),
		ecosystem: B(["node", "python"]).describe("Which language's tooling it uses."),
		manager: M().describe("The tool that would do the installing."),
		command: M().describe("The exact command that would run."),
		evidence: M().describe("The file that decided all of the above, so the answer can be checked rather than trusted."),
		state: B([
			"ready",
			"installing",
			"needs-setup",
			"unsupported",
			"stale"
		]).describe("Ready means its dependencies are really there. Stale means it was installed once and has since outgrown that, which is what an agent leaves behind when it adds a dependency without installing it. Unsupported means this sandbox has no such tool."),
		missing: P().optional().describe("How many declared dependencies cannot be found on disk. What separates never-installed from outgrown.")
	}), YO = L({ projects: I(JO).describe("Every project the sandbox found, and whether each is usable.") }), XO = L({ dirs: I(M().max(500)).min(1).max(50).describe("Which projects to install, by folder. Ones already ready, already installing, or with no tool to install them are skipped rather than refused.") }), ZO = L({ queued: I(M()).describe("Which of them actually started, which is not necessarily what you asked for.") });
})), $O, ek = b((() => {
	q(), Qb(), A_(), Q(), qO(), qb(), QO(), bv(), $O = {
		tree: K.route({
			method: "GET",
			path: "/workspace/tree",
			summary: "The workspace file tree",
			description: "Every folder and file under the workspace root, as one walk. Name a conversation to read its own private copy of the tree instead of the shared one. Folders the daemon skips, such as installed packages, come back without their contents; ask for those separately."
		}).input(J_).output(Z_),
		children: K.route({
			method: "GET",
			path: "/workspace/children",
			summary: "A bounded folder listing",
			description: "The entries inside a folder as one flat list. Direct children are the default, which is how the explorer opens a folder the full tree walk left closed; callers that need a small subtree can ask for up to five levels without a request per directory."
		}).input(Q_).output($_),
		file: K.route({
			method: "GET",
			path: "/workspace/file",
			summary: "Read part of a text file",
			description: "A window of one file's text, plus how large the whole file is. Never the entire file: an unbounded read is how a single enormous log stalls the daemon for everyone, so ask for the slice you mean to show and page through if you need more."
		}).input(rv).output(ov),
		derived: K.route({
			method: "GET",
			path: "/workspace/derived",
			summary: "Read a file's derived text",
			description: "What a document, picture, recording or archive says, as text, from the shadow the sandbox keeps beside it. This is the same rendering an agent reads instead of the bytes, so it is also the way to check what one is working from. Nothing is derived here: a file with no shadow yet answers that it has none, and whether it could have one."
		}).input(sv).output(pv),
		derive: K.route({
			method: "POST",
			path: "/workspace/derive",
			summary: "Derive a file's text now",
			description: "Renders one file to text and answers with the result, for when its shadow is missing or you want it rebuilt. The same work the background pass does when that setting is on, so this is how a reader gets the text without turning it on for the whole workspace. Costs a parse of exactly one file; a format nothing can read says so rather than failing."
		}).input(sv).output(pv),
		derivedStatus: K.route({
			method: "GET",
			path: "/workspace/derived-status",
			summary: "How the background rendering is doing",
			description: "Whether documents, pictures, recordings and archives are being rendered to text in the background, how many are waiting, which are being read right now, and how many shadows the last whole-tree pass counted. Ask this to tell a file nothing can read from a file whose turn has not come."
		}).output(cv),
		mediaTicket: K.route({
			method: "POST",
			path: "/workspace/media-ticket",
			summary: "Get a pass for streaming a media file",
			description: "Mints the short-lived ticket a video or audio element hands to the streaming route, which serves byte ranges and so cannot carry an ordinary header. Minting it here means a caller can tell whether this sandbox streams media at all, rather than discovering it mid-playback."
		}).input(tv).output(nv),
		resolve: K.route({
			method: "GET",
			path: "/workspace/resolve",
			summary: "Turn a written path into a real file",
			description: "Matches a path somebody wrote in prose against the real tree and says which file it means. A path mentioned in a message is often only the tail of the real one, so this is the lookup behind every clickable file reference rather than a plain existence check."
		}).input(mv).output(hv),
		search: K.route({
			method: "GET",
			path: "/workspace/search",
			summary: "Search the code",
			description: "Ranked results across the whole workspace, grouped, each carrying why it matched and how fresh it is. Left alone it blends plain text, structure, meaning and history in one pass; narrow it to a single kind of search when you already know which you want. Long result sets resume from the cursor it hands back."
		}).input(Bb).output(Kb),
		health: K.route({
			method: "GET",
			path: "/workspace/health",
			summary: "A repo's shape in numbers",
			description: "Where one repo's risk sits: the files that change often and are complicated at once, what the index holds, and which modules the rest of the code leans on most. Scoped to a repo, because a codebase is a repo rather than the whole drop."
		}).input(Jb).output(Zb),
		classify: K.route({
			method: "GET",
			path: "/workspace/classify",
			summary: "Sort a messy drop into buckets",
			description: "Proposes which of the loose things in the workspace are code, documents, media or archives. A read-only suggestion by fixed rules, with no model involved: nothing moves until a caller applies the moves it likes through the move call."
		}).output(yv),
		mkdir: K.route({
			method: "POST",
			path: "/workspace/dir",
			summary: "Create a folder",
			description: "Makes a folder, and any missing folders above it."
		}).input(gv).output(X),
		delete: K.route({
			method: "DELETE",
			path: "/workspace/entry",
			summary: "Delete a file or folder",
			description: "Removes one entry and everything under it. The path travels in the body rather than the address, the same as every other write in this group."
		}).input(ev).output(X),
		move: K.route({
			method: "POST",
			path: "/workspace/move",
			summary: "Move or rename something",
			description: "Moves one entry to a new path, which is also how you rename it."
		}).input(_v).output(X),
		copy: K.route({
			method: "POST",
			path: "/workspace/copy",
			summary: "Copy a file or folder",
			description: "Duplicates one entry at a new path, recursively for a folder."
		}).input(_v).output(X),
		setup: K.route({
			method: "GET",
			path: "/workspace/setup",
			summary: "Which projects have their dependencies installed",
			description: "Per project, whether its dependencies are actually present. A project that arrives by import comes without them, so files landing is not the same as the project working: until this says a project is ready, its type checks and tests can only mislead you."
		}).output(YO),
		install: K.route({
			method: "POST",
			path: "/workspace/setup/install",
			summary: "Install a project's dependencies",
			description: "Starts the install for one or more projects in a terminal you can attach to, and answers immediately. The run survives a page reload and its output stays in the terminal history."
		}).input(XO).output(ZO),
		repos: K.route({
			method: "GET",
			path: "/workspace/repos",
			summary: "Repos in the workspace",
			description: "Every git repo the daemon found in the workspace, with where each one sits and what it is called."
		}).output(OO),
		addRepo: K.route({
			method: "POST",
			path: "/workspace/repos",
			summary: "Clone a repo in",
			description: "Clones a repository into the workspace beside the others, using whatever forge credentials the sandbox already holds."
		}).input(kO).output(AO),
		createRepo: K.route({
			method: "POST",
			path: "/workspace/repos/new",
			summary: "Start a new repo",
			description: "Makes an empty repository in the workspace: a folder named after it, initialised, with a README that names it and one commit, so an agent can start on it at once. Nothing is cloned and nothing leaves the machine."
		}).input(jO).output(AO),
		sync: K.route({
			method: "POST",
			path: "/workspace/sync",
			summary: "Pull every repo up to date",
			description: "Fetches every repo that has a remote and fast-forwards the ones that can move safely, reporting what happened to each. This runs by itself at the start of a turn; call it directly to refresh on demand, or to re-sync a repo that had drifted."
		}).output(NO),
		templates: K.route({
			method: "GET",
			path: "/workspace/templates",
			summary: "App templates you can add",
			description: "The kinds of app the configured source repo knows how to scaffold, which is what an add-app picker lists."
		}).output(RO),
		addApps: K.route({
			method: "POST",
			path: "/workspace/repos/{repo}/apps",
			summary: "Scaffold new apps into a repo",
			description: "Starts scaffolding one or more apps inside an existing multi-package repo and answers straight away. Watch the terminal it opens for progress and for anything that goes wrong."
		}).input(FO).output(X),
		appsList: K.route({
			method: "GET",
			path: "/workspace/repos/{repo}/apps",
			summary: "Apps inside a repo",
			description: "The apps in one multi-package repo, each with its preview address and whether its dev server is up."
		}).input(GO).output(BO),
		packageGraph: K.route({
			method: "GET",
			path: "/workspace/repos/{repo}/graph",
			summary: "How a repo's packages depend on each other",
			description: "Every package in one multi-package repo and which of its siblings each one uses, which is what a dependency view draws."
		}).input(GO).output(WO),
		modules: K.route({
			method: "GET",
			path: "/workspace/modules",
			summary: "Every package across every repo",
			description: "The named packages in the whole workspace, which is what a review list groups changed files under when a reader wants packages rather than paths. Whole-workspace in one answer, because a review spans repos and asking per repo would be a fan-out on every open."
		}).output(C_),
		startApp: K.route({
			method: "POST",
			path: "/workspace/repos/{repo}/apps/{app}/start",
			summary: "Start an app's dev server",
			description: "Brings up one app's preview server in an attachable terminal, so its address starts answering."
		}).input(KO).output(X),
		stopApp: K.route({
			method: "POST",
			path: "/workspace/repos/{repo}/apps/{app}/stop",
			summary: "Stop an app's dev server",
			description: "Shuts one app's preview server down and frees its port."
		}).input(KO).output(X),
		runTests: K.route({
			method: "POST",
			path: "/workspace/repos/{repo}/tests",
			summary: "Run a project's tests",
			description: "Starts the test run for the projects you name in an attachable terminal and answers straight away. The terminal is where the results appear."
		}).input(IO).output(X)
	};
})), tk = b((() => {
	q(), G(), ID(), vb(), sD(), Q(), K.output(iD), K.input(Uy).output(X), K.output(X), K.input(oc()).output(oc()), K.input(mD).output(ju(gD)), K.input(vD).output(ju(gD));
})), nk, rk, ik, ak, ok = b((() => {
	G(), nk = L({
		origin: M(),
		mode: B(["read", "act"])
	}), rk = L({
		browser: M(),
		tabs: P(),
		grants: I(nk),
		paused: F()
	}), ik = L({
		id: M(),
		platform: M().min(1),
		online: F(),
		version: M().optional(),
		lastSeen: P().optional(),
		facts: rk.optional()
	}), L({ browsers: I(ik) }), ak = L({
		name: M(),
		value: M(),
		domain: M(),
		path: M(),
		expires: P().optional(),
		httpOnly: F(),
		secure: F(),
		sameSite: B([
			"Strict",
			"Lax",
			"None"
		])
	}), L({
		account: M().min(1),
		origin: M().min(1),
		cookies: I(ak).min(1).max(300)
	}), L({
		account: M().min(1),
		domain: M().min(1)
	}), L({
		ok: F(),
		message: M(),
		cookies: I(ak).optional()
	});
})), sk = b((() => {
	q(), G(), vb(), Q(), ok(), K.output(rk), K.input(Ky).output(X), K.output(X), K.input(oc()).output(oc());
})), ck = b((() => {
	q(), G(), Dh(), ad(), Y(), Vd(), Q(), K.output($u), K.input(td).output(ju(nd)), K.input(rd).output(ju(Sh)), K.input(Id).output(L({ applied: F() })), K.input(L({
		conversationId: M().min(1),
		text: M(),
		attachments: I(M()).optional(),
		editorContext: pd.optional()
	})).output(L({
		applied: F(),
		invalid: M().optional()
	})), K.input(L({ toml: M() })).output(L({ settings: I(M()) })), K.input(rd.pick({ conversationId: !0 })).output(X), K.output(X);
})), lk = b((() => {})), uk, dk, fk = b((() => {
	uk = "The interrupted request is repeated below, where part of it was already completed in this session, continue from that point instead of starting over.", dk = {
		auth: `The Claude credential that interrupted this conversation has been renewed, and this turn resumed automatically. ${uk}`,
		outage: `The model provider was briefly unavailable and interrupted this conversation; this turn resumed automatically. ${uk}`,
		restart: `The sandbox restarted while this turn was running, which stopped it, and this turn resumed automatically once it came back. ${uk}`,
		stopped: `The previous attempt at this request stopped before it finished, and it has been sent again. ${uk}`,
		limit: `The model provider's usage allowance ran out while this turn was running, which stopped it, and it has been sent again. ${uk}`,
		switched: "The model provider's usage allowance ran out while this turn was running, which stopped it, and it has been sent again on a different account, which starts a fresh session. The conversation so far has been carried across above, including the part of the request that was already completed, and the sandbox has measured where the work actually stands (the files changed on this branch, what was verified, what the checklist still holds) in the note headed 'Where the work stands': trust that note over anything recalled, then continue from that point instead of starting over.",
		carried: `The model provider's usage allowance ran out while this turn was running, which stopped it, and it has been sent again on a different account of the same provider, in this same session: everything you knew is still here. ${uk}`,
		refused: "The model provider refused the previous attempt at this request outright, because its usage allowance was spent: no part of the request below was read or acted on, and nothing has been done towards it. It has been sent again, and starts from the beginning. Where the sandbox has measured earlier work on this branch, it is in the note headed 'Where the work stands'.",
		answered: "The sandbox restarted while this conversation was waiting for the user to respond; it is back, and their response follows below: continue from where the session left off."
	}, dk.answered;
})), pk = b((() => {})), mk = b((() => {})), hk = b((() => {})), gk, _k = b((() => {
	G(), gk = [
		"editor",
		"read",
		"drive",
		"land"
	], B(gk);
})), vk, yk, bk, xk, Sk, Ck, wk = b((() => {
	xp(), vk = [
		{
			path: ".intentic/config/capabilities.json",
			invalidates: [
				"capabilities",
				"environment",
				"panels",
				"manifests"
			],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/capability-dismissals.json",
			invalidates: ["capabilities"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/records/secret-uses.json",
			invalidates: ["secrets"],
			portability: "carry"
		},
		{
			path: ".intentic/records/wallet-ledger.json",
			invalidates: [],
			why: "Rendered through the wallet CLI and the capability card's live status probe, not from a browser query key.",
			portability: "carry"
		},
		{
			path: ".intentic/config/personas.json",
			invalidates: [
				"personas",
				"capabilities",
				"manifests"
			],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/environment.custom.Dockerfile",
			invalidates: ["environment"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/environment.Dockerfile",
			invalidates: ["environment"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/environment.d/",
			invalidates: ["environment"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/local/environment.approved.Dockerfile",
			invalidates: ["environment"],
			portability: "derived",
			note: "The target composes its own overlay on first boot; rebuild it there to install the tools it names."
		},
		{
			path: ".intentic/config/settings.json",
			invalidates: ["settings", "manifests"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/safety.md",
			invalidates: ["safety-policy"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/local/safety-log.json",
			invalidates: ["safety-log"],
			portability: "derived",
			note: "The target starts its own record of what it decided."
		},
		{
			path: ".intentic/config/autostart.json",
			invalidates: [],
			why: "The browser reads what is running off /panels; this file only tells the daemon what to start at boot.",
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/heavy-commands.json",
			invalidates: ["settings"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/hooks/",
			invalidates: [],
			why: "The settings screen renders the rules that name these scripts, out of settings.json; nothing in the browser reads the scripts themselves.",
			portability: "carry",
			versioned: !0,
			outsideWriter: "the owner or an agent, authoring them; the daemon only ever RUNS one, by the path a rule's command names"
		},
		{
			path: ".intentic/local/rule-firings.json",
			invalidates: ["rule-firings"],
			portability: "derived",
			note: "Stamps of when each rule last did something; the new sandbox starts its own record."
		},
		{
			path: ".intentic/records/runtime-installs.json",
			invalidates: ["environment"],
			portability: "carry"
		},
		{
			path: ".intentic/config/engines.json",
			invalidates: ["engines"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/approvals/",
			invalidates: ["approvals"],
			portability: "carry",
			versioned: !0,
			authored: !0
		},
		{
			path: ".intentic/config/automations.json",
			invalidates: [],
			why: "Declared by the intentic.automations extension's contributes.files, `automations` is its query key, not core's.",
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/records/automation-runs.json",
			invalidates: [],
			why: "Declared by the intentic.automations extension's contributes.files, `automations` is its query key, not core's.",
			portability: "carry"
		},
		{
			path: ".intentic/records/approvals/",
			invalidates: [],
			why: "Declared by the intentic.approvals extension's contributes.files (the page that lists held wakes), `automation-approvals` is its query key, not core's.",
			portability: "carry"
		},
		{
			path: ".intentic/records/issues/",
			invalidates: [],
			why: "Declared by the intentic.issues extension's contributes.files, `issues` is its query key, not core's.",
			portability: "carry"
		},
		{
			path: ".intentic/records/chores/",
			invalidates: [],
			why: "Declared by the intentic.maintenance extension's contributes.files, `maintenance-report`/`maintenance-runs` are its query keys, not core's.",
			portability: "carry"
		},
		{
			path: ".intentic/config/docs/",
			invalidates: [],
			why: "Declared by the intentic.documentation extension's contributes.files, `documentation`/`documentation-runs` are its query keys, not core's.",
			portability: "carry",
			authored: !0,
			outsideWriter: "the intentic.documentation extension's staging writes (its paths.ts)"
		},
		{
			path: ".intentic/config/workflows.json",
			invalidates: ["workflows"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/records/workflow-runs.json",
			invalidates: ["workflows", "workflow-runs"],
			portability: "carry"
		},
		{
			path: ".intentic/config/loop-designs.json",
			invalidates: ["loop-designs"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/records/loops.json",
			invalidates: [],
			why: "Ralph loops and their iteration history. Nothing observes it: where a RUNNING loop stands rides on the fleet roster (AgentSummary.loop), which the /events stream already pushes about once a second, and a second source invalidating on this file could only ever disagree with the card beside it. The iteration list of an ENDED loop is an on-demand read, nothing renders it until someone opens it (web's useLoops, which holds no query for exactly this reason).",
			portability: "carry"
		},
		{
			path: ".intentic/records/webchat-installs.json",
			invalidates: [],
			why: "Which origins have loaded a Front Desk's widget, written on a 30s flush timer while a customer's site serves page views. The install panel that renders it fetches on open and polls itself while it is on screen, which is the whole window in which the answer changes for anyone. Pushing instead would bill every connected browser a refetch per flush, for a panel almost nobody has open.",
			portability: "carry"
		},
		{
			path: ".intentic/records/issue-installs.json",
			invalidates: [],
			why: "The same probe for the bug reporter's script, on the same flush timer and read by the same kind of panel, so it is outside the push path for the same reason the Front Desk's is.",
			portability: "carry"
		},
		{
			path: ".intentic/records/webchat-outbox.json",
			invalidates: [],
			why: "Front Desk replies a visitor has not collected yet, written when an approved wake answers or a human writes as the agent. The only reader is a stranger's browser polling the public /webchat door, which no query key in this app addresses; the owner's own view of the same words is the conversation's transcript, which the agent registry already pushes.",
			portability: "carry"
		},
		{
			path: ".intentic/records/thread-sessions.json",
			invalidates: [],
			why: "Thread bookkeeping (an inbound thread, a Front Desk visitor, a Discord or Slack channel, → sandbox conversation + provider session), written on EVERY inbound message. Nothing in the browser reads it: what a thread produces is a conversation, and the fleet board already learns about that from the agent registry's own push. Naming a key here would bill every connected browser a refetch per inbound message, the request storm this table's own note warns about, to refresh nothing it can see.",
			portability: "carry"
		},
		{
			path: ".intentic/records/senders.json",
			invalidates: [],
			why: "Who has written to each listener source, written on every inbound message that reached an automation. Read only while the automation editor's sender picker is open, which fetches it on open; a live key here would refetch every connected browser per Discord message to refresh a list nobody has on screen.",
			portability: "carry"
		},
		{
			path: ".intentic/config/extension-settings.json",
			invalidates: [],
			why: "Held in a module-level shallowRef store per extension (web's extensionSettingsStore) with no query observer, and deliberately so: api.settings.get must answer SYNCHRONOUSLY from an extension's first activate() line, and the store outlives every component scope. A module-level QueryObserver is the one shape that would make invalidation refetch, and this app already ruled it out, it detaches on the queryClient.clear() at logout (see useSandbox's sandbox-list mirror). So a remote member's setting edit reaches this browser on its next load, not live.",
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/extension-enablement.json",
			invalidates: ["extensions"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/workspace-extensions/",
			invalidates: ["extensions"],
			portability: "carry",
			versioned: !0,
			authored: !0
		},
		{
			path: ".intentic/records/extension-updates.json",
			invalidates: ["extensions"],
			portability: "carry"
		},
		{
			path: ".intentic/config/extension-update-policy.json",
			invalidates: ["extensions"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/records/extension-usage.json",
			invalidates: [],
			why: "Which of the routes each extension DECLARED it has actually called, the evidence behind the permissions list on its row. The one entry here whose empty set is a RATE decision rather than an architectural one: every browser with the app open reports its batch on a timer, so wiring this to the `extensions` query would refetch the whole list every few seconds for a figure nobody is watching change. The tab reads it when it loads, which is when anyone is reading it.",
			portability: "carry"
		},
		{
			path: ".intentic/identity/members.json",
			invalidates: [],
			why: "Not this view's source at all: SandboxAccess renders the PLATFORM's invite records (apiClient.invite.list), and this file is the daemon's ENFORCED copy, written first so a grant the enforcer never got is never recorded, then never read back. A change here means the two disagreed, which the write order makes fail-closed rather than stale.",
			portability: "identity",
			note: "Re-invite collaborators from the Access tab, a grant is the platform's record, and the target enforces its own copy."
		},
		{
			path: ".intentic/secrets/auth/",
			invalidates: [],
			why: "AI-provider credentials and runtime homes, plus the capability and extension-settings secret vaults; each account is rendered through owner-gated provider routes.",
			portability: "secret",
			note: "Sign the agent's AI accounts in again on the Agent tab, then re-enter each connection's credential on Capabilities and each extension's secret settings on Extensions, both arrived listed but unauthenticated."
		},
		{
			path: ".intentic/records/sessions/claude/",
			invalidates: [],
			why: "Agent session transcripts; nothing derives from watching them, and descending into them would cost a fifth of the watcher.",
			portability: "carry"
		},
		{
			path: ".intentic/records/artifacts/",
			invalidates: [],
			why: "Durable outputs owned by conversations and extension runs: attachments, browser captures, generated images, acceptance reports, workflow step reports, voice transcripts, and loop ledgers.",
			portability: "carry"
		},
		{
			path: ".intentic/local/cache/",
			invalidates: [],
			why: "Rebuildable indexes and caches, the iq index and its vector sidecar, the whisper model, fileq's derived/ markdown shadows of binary files; ignored by the watcher and recreated from carried workspace content.",
			portability: "derived"
		},
		{
			path: ".intentic/local/runtime/",
			invalidates: [],
			why: "Extension runtime scratch (watermarks, cached short-lived tokens); nothing renders it and gateways re-derive it.",
			portability: "derived",
			outsideWriter: "extensions, through extensionRuntimeDir below"
		},
		{
			path: ".intentic/local/tmp/",
			invalidates: [],
			why: "Scratch that agents and tools leave behind (build logs, demo checkouts); nothing reads it after the turn that wrote it. The state janitor empties it at boot.",
			portability: "derived"
		},
		{
			path: ".intentic/local/.pnpm-store/",
			invalidates: [],
			why: "pnpm's content-addressable store, auto-created by installs run from under .intentic; the next install rebuilds it.",
			portability: "derived",
			outsideWriter: "pnpm itself, when an install runs from under .intentic"
		},
		{
			path: ".intentic/local/newest-run.json",
			invalidates: [],
			why: "The newest daemon version that ever ran this workspace (store/newest-run.ts), a downgrade tripwire, about THIS sandbox the way rule-firings is.",
			portability: "derived",
			note: "The target stamps its own daemon version on first boot."
		},
		{
			path: ".intentic/records/verify.json",
			invalidates: [],
			why: "The dependency verifier's verdict memory; nothing renders it directly, outcomes reach the owner as activity entries and workspace events.",
			portability: "carry"
		},
		{
			path: ".intentic/local/verify/",
			invalidates: [],
			why: "A running check's wrapper artifacts (log + exit status), read once by the daemon when the panel finishes.",
			portability: "derived"
		},
		{
			path: ".intentic/secrets/ci.json",
			invalidates: [],
			why: "Webhook secret + conclusion memory; the Pipelines view reads it through /ci/runs, not off disk.",
			portability: "secret",
			note: "Re-add the CI webhook on the Pipelines view, its secret is per-sandbox."
		},
		{
			path: ".intentic/secrets/doors.json",
			invalidates: [],
			why: "The credentials behind the event webhooks, release gates and bug intakes; each surface reads its own through /automations and /workflows, never off disk.",
			portability: "secret",
			note: "Webhook, gate and intake URLs are minted fresh on the first read here: re-copy each into its caller's secret store."
		},
		{
			path: ".intentic/identity/control-tokens.json",
			invalidates: [],
			why: "Hashed control tokens (the ACP editor bridge, and anything else driving this sandbox from outside), listed on demand by the owner.",
			portability: "identity",
			backup: !1,
			note: "Mint fresh control tokens, the old ones authenticate against the source sandbox."
		},
		{
			path: ".intentic/identity/owner.json",
			invalidates: [],
			why: "Bound once on first use; a change here means the sandbox was re-owned, which re-authenticates anyway.",
			portability: "identity"
		},
		{
			path: ".intentic/identity/workspace.json",
			invalidates: [],
			why: "The workspace identity, read from the /events hello frame rather than as a file.",
			portability: "identity"
		},
		{
			path: ".intentic/identity/passkeys.json",
			invalidates: [],
			why: "The passkeys registered with this sandbox, whether one is required to open it, and the hashes of the owner's recovery codes; the Access tab reads them through /system/passkeys, never off disk.",
			portability: "identity",
			note: "Passkeys are bound to the sandbox they were registered with: add them again on the new one from its Access tab."
		},
		{
			path: ".intentic/config/templates.json",
			invalidates: [],
			why: "Scaffold templates, read when the scaffold dialog opens.",
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/local/browser/",
			invalidates: [],
			why: "Browser-login profiles: Chromium rewrites these constantly. Descent-ignored by the watcher outright.",
			portability: "derived",
			note: "Log the agent's browser back into any site it needs, profiles do not travel."
		},
		{
			path: ".intentic/local/extensions/",
			invalidates: [],
			why: "Extension checkouts, whole git clones. The `extensions` query is driven by the capability manifest above, not by their contents.",
			portability: "derived",
			note: "Extensions re-clone from the capability manifest on the target's next reconcile."
		},
		{
			path: ".intentic/records/plugins/",
			invalidates: [],
			why: "Agent plugin dirs, read by the SDK's loader each turn.",
			portability: "carry"
		},
		{
			path: ".intentic/config/skills/",
			invalidates: ["skills"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/personas/",
			invalidates: ["personas"],
			portability: "carry",
			versioned: !0
		}
	], yk = vk, yk.filter((e) => e.versioned).map((e) => e.path), yk.filter((e) => e.versioned || e.authored).map((e) => e.path), bk = {
		config: `${yp}/config`,
		records: `${yp}/records`,
		local: `${yp}/local`,
		identity: `${yp}/identity`,
		secrets: `${yp}/secrets`
	}, xk = Object.keys(bk), Sk = (e) => {
		switch (e.portability) {
			case "secret": return "secrets";
			case "identity": return "identity";
			case "derived": return "local";
			case "carry": return e.versioned === !0 || e.authored === !0 ? "config" : "records";
		}
	}, xk.flatMap((e) => {
		let t = yk.filter((t) => Sk(t) === e);
		return t.some((e) => e.versioned === !0) ? t.filter((e) => e.versioned !== !0).map((e) => e.path) : [`${bk[e]}/`];
	}), Ck = yk.filter((e) => e.backup !== !1 && (e.portability === "carry" || e.portability === "identity")).map((e) => e.path), yk.filter((e) => !Ck.includes(e.path)).map((e) => e.path), yk.filter((e) => e.invalidates.includes("manifests")).map((e) => e.path), `${yp}`, `${yp}`;
})), Tk = b((() => {})), Ek = b((() => {})), Dk = b((() => {})), Ok = b((() => {})), kk = b((() => {})), Ak = b((() => {})), jk = b((() => {})), Mk, Nk, Pk, Fk, Ik = b((() => {
	Mk = /(?:auth[_-]?token|access[_-]?token|refresh[_-]?token|api[_-]?key|access[_-]?key|secret[_-]?key|client[_-]?secret|private[_-]?key|passwo?rd|passphrase|credentials?|secret|token|bearer)["']?[ \t]*[:=][ \t]*(?:"([^"\n]*)"|'([^'\n]*)'|([^\s"',;}\n]*))/gi, Nk = [
		/-----BEGIN (?:[A-Z0-9]+ )*PRIVATE KEY-----/,
		/PuTTY-User-Key-File-\d/,
		/\b[a-z][a-z0-9+.-]*:\/\/[^\s/:@]+:(?!\*+@)[^\s/@]{3,}@/i
	], Pk = [
		/\bnpm_[A-Za-z0-9]{30,}/,
		/\b(?:ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9]{30,}/,
		/\bgithub_pat_[A-Za-z0-9_]{50,}/,
		/\bglpat-[A-Za-z0-9_-]{16,}/,
		/\bxox[baprs]-[A-Za-z0-9-]{10,}/,
		/\bsk-[A-Za-z0-9_-]{20,}/,
		/\b(?:sk|rk)_live_[A-Za-z0-9]{16,}/,
		/\bAKIA[0-9A-Z]{16}\b/,
		/\bASIA[0-9A-Z]{16}\b/,
		/\bAIza[0-9A-Za-z_-]{35}\b/,
		/\bhf_[A-Za-z0-9]{30,}/,
		/\bdop_v1_[a-f0-9]{60,}/,
		/\bey[A-Za-z0-9_-]{10,}\.ey[A-Za-z0-9_-]{10,}\./
	], [...Nk, ...Pk], Fk = (e) => e.map((e) => new RegExp(e.source, `${e.flags}g`)), Fk(Pk), new RegExp(Mk.source, Mk.flags);
})), Lk = b((() => {})), Rk, zk = b((() => {
	Rk = 80, Rk * .6;
})), Bk = b((() => {
	zk(), wk();
})), Vk = b((() => {})), Hk = b((() => {
	bC();
})), Uk = b((() => {
	G(), L({
		type: V("hello"),
		token: M(),
		version: M()
	});
})), Wk = b((() => {
	G(), L({
		type: V("hello"),
		token: M(),
		version: M()
	});
})), Gk = b((() => {})), Kk, qk = b((() => {
	G(), vf(), L({
		provider: M().min(1),
		type: M().min(1),
		id: M(),
		channelId: M(),
		author: L({
			id: M(),
			name: M(),
			groups: I(M()).optional()
		}),
		content: M(),
		mentioned: F().optional(),
		branch: M().optional(),
		history: I(L({
			author: L({
				id: M(),
				name: M()
			}),
			content: M(),
			timestamp: M(),
			self: F().optional()
		})).optional(),
		timestamp: M(),
		extra: z(M(), oc()).optional()
	}), Kk = L({
		state: B([
			"waiting",
			"code",
			"failed"
		]),
		code: M().optional(),
		detail: M().optional(),
		since: P().optional()
	}), _f.extend({
		whisperReady: F().optional(),
		pairing: z(M(), Kk).optional()
	});
})), Jk = b((() => {})), Yk = b((() => {})), Xk = b((() => {})), Zk = b((() => {})), Qk = b((() => {})), $k, eA = b((() => {
	$k = {
		cautious: 0,
		balanced: .25,
		eager: .4
	}, $k.balanced;
})), tA = b((() => {})), nA, rA, iA, aA, oA, sA = b((() => {
	G(), nA = [
		"claude",
		"codex",
		"cursor",
		"opencode",
		"translator"
	], rA = B(nA), iA = L({
		kind: B([
			"blessed",
			"latest",
			"pinned",
			"image"
		]).describe("Where this engine's version comes from."),
		version: M().optional().describe("Which version, when it is pinned to one.")
	}), aA = L({
		version: M().describe("Which version was refused."),
		reason: M().describe("What was wrong with it: it would not launch, or it did not export what the daemon calls."),
		at: M().describe("When it was refused.")
	}), oA = L({
		id: rA.describe("Which engine."),
		label: M().describe("What it is called on screen."),
		running: L({
			version: M().optional().describe("The version a turn would use right now. Absent means there is no copy of this engine here yet."),
			source: B(["image", "store"]).describe("Whether that version is the one baked into the sandbox image or one the store installed over it.")
		}).describe("What a turn started now would actually run."),
		baked: M().optional().describe("The version the image bakes, which is the floor everything else falls back to. Absent on an image that carries no copy of it."),
		channel: iA.describe("The owner's standing answer for this engine."),
		offered: L({
			version: M().describe("The version this engine would move to."),
			blessed: F().describe("Whether the blessed list names this version, which on the latest channel is routinely no.")
		}).optional().describe("A newer version waiting, absent when the running one is already what the channel asks for."),
		blessed: M().optional().describe("What the blessed list names for this engine, when the list has been read."),
		previous: M().optional().describe("The version kept one step back, which is what going back means."),
		quarantined: I(aA).describe("Versions the store installed and then refused, with the reason."),
		diskBytes: P().int().nonnegative().describe("What this engine's kept versions cost on the daemon's volume."),
		installing: F().optional().describe("Whether this engine is currently being installed in the background.")
	}), L({
		engines: I(oA).describe("Every engine this sandbox can run, whether or not the store holds anything for it."),
		checkedAt: M().optional().describe("When upstream was last asked what it publishes. Absent until the first check has run."),
		listSource: M().describe("Where the blessed list is read from, so a self-hosted sandbox can show its own."),
		listReadAt: M().optional().describe("When that list was last read. Absent means it has never been reachable from here.")
	}), L({
		id: rA.describe("Which engine."),
		kind: B([
			"blessed",
			"latest",
			"pinned",
			"image"
		]).describe("Where its version should come from."),
		version: M().optional().describe("Which version, required when pinning and ignored otherwise.")
	}), L({
		id: rA.describe("Which engine."),
		version: M().optional().describe("Which version. Leave it out for whatever the channel offers; naming one takes a version nobody has blessed, deliberately."),
		floor: M().optional().describe("Install the lowest published version at or above this one. What a turn refused for being too old sends back.")
	}), L({ id: rA.describe("Which engine.") }), L({
		ok: V(!0).describe("It went through."),
		version: M().describe("Which version is now active."),
		source: B(["image", "store"]).describe("Whether that is the image's copy or the store's."),
		fromNextTurn: F().describe("Whether the change reaches turns already in flight, or only the next one.")
	});
})), cA, lA, uA, dA, fA, pA, mA, hA, gA, _A = b((() => {
	G(), cA = L({
		content: M(),
		hash: M()
	}), lA = L({
		bornAt: P(),
		at: P(),
		apt: I(M()),
		paths: I(M())
	}), uA = B([
		"apt",
		"pip",
		"cargo",
		"npm",
		"rustup-target",
		"playwright",
		"gem",
		"pipx",
		"go",
		"other"
	]), dA = L({
		tool: M(),
		kind: uA,
		sessions: I(M()),
		commands: I(M()),
		firstAt: P(),
		lastAt: P(),
		count: P(),
		declinedAt: P().optional()
	}), L({
		installs: I(dA),
		drift: lA.optional()
	}), fA = L({
		tool: M(),
		kind: uA,
		sessions: P(),
		lastAt: P(),
		live: F(),
		drafted: F().optional(),
		declined: F().optional(),
		step: M().optional()
	}), L({
		tool: M().min(1),
		decision: B([
			"adopt",
			"dismiss",
			"restore"
		])
	}), pA = L({
		base: M(),
		root: M().optional()
	}), L({
		proposal: cA.optional(),
		custom: cA.optional(),
		approved: cA.optional(),
		appliedHash: M().optional(),
		container: M().optional(),
		drift: lA.optional(),
		recurring: I(fA).optional(),
		localImage: pA.optional()
	}), L({ hash: M().min(1) }), mA = L({
		name: M(),
		version: M().optional()
	}), hA = L({
		id: M(),
		name: M(),
		origin: B([
			"custom",
			"capability",
			"base"
		]),
		originLabel: M().optional(),
		state: B([
			"active",
			"after-rebuild",
			"awaiting-approval"
		]),
		tools: I(mA),
		extras: P().optional(),
		purpose: M().optional(),
		detail: M().optional(),
		commands: M().optional()
	}), L({ items: I(hA) }), gA = L({
		name: M(),
		status: B([
			"packing",
			"ready",
			"failed"
		]),
		bytes: P(),
		createdAt: P(),
		secrets: F(),
		error: M().optional()
	}), L({ exports: I(gA) });
})), vA, yA, bA, xA, SA, CA = b((() => {
	G(), Qu(), vA = B([
		"definition",
		"bundle",
		"hermes",
		"openclaw"
	]), yA = B(["hermes", "openclaw"]), bA = B([
		"workspace",
		"repo",
		"files",
		"history",
		"environment",
		"capability",
		"settings",
		"memory",
		"skill",
		"automation",
		"secret"
	]), xA = L({
		id: M(),
		group: bA,
		label: M(),
		detail: M().optional(),
		applicable: F(),
		reason: M().optional(),
		recommended: F(),
		secrets: I(M())
	}), L({
		source: vA,
		token: M(),
		name: M().optional(),
		items: I(xA),
		carriesSecrets: F(),
		refused: I(M()),
		needsAction: I(Zu)
	}), L({
		token: M(),
		items: I(M()),
		includeSecrets: F()
	}), L({
		applied: I(L({
			id: M(),
			group: bA,
			label: M()
		})),
		failed: I(L({
			id: M(),
			label: M(),
			error: M()
		})),
		refused: I(M()),
		needsAction: I(Zu),
		presentation: L({
			name: M().optional(),
			image: M().optional()
		}).optional()
	}), SA = L({
		id: M(),
		online: F(),
		found: yA.optional(),
		detail: M().optional()
	}), L({ hosts: I(SA) }), L({ host: M().min(1) });
})), wA, TA, EA, DA, OA, kA, AA = b((() => {
	G(), Qu(), vb(), kw(), wA = cc({
		id: M().min(1),
		remote: M().min(1),
		ref: M().optional()
	}), TA = cc({
		remote: M().min(1),
		ref: M().optional()
	}), EA = cc({
		baseImage: M().optional(),
		dockerfile: M().optional()
	}), DA = (e) => {
		let t = e;
		for (; t instanceof gl || t instanceof _l;) t = t.unwrap();
		return t;
	}, OA = () => cc(Object.fromEntries(Object.entries(fw.shape).map(([e, t]) => [e, DA(t).optional()]))).prefault({}), kA = cc({
		schemaVersion: V(1),
		name: M().optional(),
		environment: EA.prefault({}),
		workspace: TA.optional(),
		repositories: I(wA).prefault([]),
		capabilities: I(ab).prefault([]),
		secrets: I(M()).prefault([]),
		settings: OA()
	}), L({
		toml: M(),
		omitted: I(Zu)
	}), L({ differences: I(Zu) }), L({
		remote: M().min(1).optional(),
		name: M().min(1).optional(),
		owner: M().min(1).optional()
	}), L({
		remote: M(),
		branch: M(),
		created: F()
	}), L({
		remote: M().optional(),
		branch: M().optional(),
		hosts: I(M())
	}), L({
		version: V(3),
		sandbox: L({ name: M() }).optional(),
		presentation: L({
			name: M().optional(),
			image: M().optional()
		}).optional(),
		createdAt: P(),
		secrets: F(),
		repos: I(M()),
		definition: kA,
		excluded: I(L({
			path: M(),
			portability: M(),
			note: M().optional()
		}))
	});
})), jA = b((() => {})), MA = b((() => {})), NA = b((() => {})), PA = b((() => {})), FA = b((() => {})), IA = b((() => {
	Ep();
})), LA, RA, zA = b((() => {
	zl(), ff(), bf(), Vh(), M_(), G_(), q_(), zb(), wx(), Ex(), Ax(), Mx(), vC(), qw(), DT(), kT(), NT(), FT(), LT(), JT(), XT(), rE(), uE(), vE(), xE(), wE(), PE(), IE(), RE(), WE(), QE(), eD(), nD(), ZD(), $D(), nO(), iO(), DO(), ek(), tk(), sk(), ck(), lk(), Dh(), gp(), fk(), Rv(), xh(), pk(), mk(), hk(), zl(), _k(), xp(), wk(), Tk(), Ek(), Dk(), Ok(), kk(), Ku(), Xu(), yC(), Ak(), NC(), jk(), WC(), Ik(), Lk(), Fu(), Bk(), Hk(), Uk(), Wk(), Gk(), ad(), qk(), Jk(), Yk(), Xk(), Vk(), bC(), Bu(), Zk(), Qk(), eA(), Ep(), tA(), vf(), Y(), wm(), U_(), kg(), vb(), Hg(), Em(), Qb(), ID(), sA(), _A(), $v(), gC(), Om(), A_(), TT(), zh(), sD(), jT(), fy(), ag(), KT(), Hp(), Sx(), Nb(), tE(), Gw(), Vd(), cE(), cf(), Ud(), gE(), ME(), Lb(), Lf(), HE(), kw(), Zm(), Q(), YD(), Wm(), XE(), ky(), ok(), TO(), qO(), qb(), QO(), bv(), CA(), AA(), jA(), MA(), NA(), zk(), cD(), PA(), FA(), IA(), LA = {
		accounts: df,
		activity: yf,
		agent: Bh,
		agents: j_,
		approvals: W_,
		automations: K_,
		capabilities: Rb,
		chores: Cx,
		ci: Tx,
		endpoints: kx,
		extensions: _C,
		personas: Kw,
		safety: FE,
		sessions: UE,
		settings: ZE,
		share: $E,
		skills: tD,
		intentic: MT,
		git: ET,
		history: OT,
		workspace: $O,
		inventory: PT,
		issues: IT,
		logs: qT,
		loops: YT,
		panels: nE,
		ports: lE,
		public: _E,
		prepush: bE,
		providers: CE,
		push: NE,
		secrets: LE,
		system: XD,
		translator: QD,
		usage: tO,
		vpn: rO,
		exit: jx,
		workflows: EO
	}, RA = Nl(LA), RA.map((e) => e.name), Rl(LA);
})), BA, VA, HA, UA, WA, GA, KA, qA, JA, YA = b((() => {
	xp(), BA = 64, VA = 8, HA = 0, UA = (e) => `r${e.toString(36).padStart(VA, "0")}${(HA++).toString(36)}`, WA = (e, t, n) => `${e.prefix}-${t}${n === void 0 ? "" : `-${n}`}`.slice(0, BA).replace(/[-_]+$/u, ""), GA = (e) => `${e.prefix}-`, KA = (e) => `${yp}/${e.runsDir}`, qA = (e, t) => `${KA(e)}/${t}`, JA = (e, t) => `${qA(e, t)}/run.json`;
})), XA, ZA, QA, $A, ej, tj, nj, rj, ij, aj, oj, sj, cj, lj, uj, dj, fj, pj, mj, hj, gj, _j, vj, yj, bj, xj, Sj, Cj = b((() => {
	zA(), YA(), XA = "docs/architecture", ZA = `${yp}/config/docs`, QA = "repo.json", $A = "repo.md", ej = "index.json", tj = "README.md", nj = (e) => `${e}/${tj}`, rj = /* @__PURE__ */ new Set([
		QA,
		$A,
		ej
	]), ij = (e) => rj.has(e) ? `${XA}/${e}` : e, aj = (e) => e.some((e) => e !== ej), oj = (e, t) => e === "" ? t : `${e}/${t}`, sj = (e, t) => {
		let n = t.filter((t) => t === "" || t === e || e.startsWith(`${t}/`)).toSorted((e, t) => t.length - e.length)[0];
		if (n !== void 0) return {
			repo: n,
			dir: n === "" ? e : e.slice(n.length + 1)
		};
	}, cj = (e, t) => oj(e, ij(t)), lj = (e) => e === "" ? "root" : e, uj = (e) => `${ZA}/${lj(e)}`, dj = (e, t) => `${uj(e)}/${t}`, fj = {
		runsDir: "config/docs/runs",
		prefix: "dg",
		scanRuns: 10
	}, pj = KA(fj), mj = (e) => JA(fj, e), hj = `${ZA}/seen.json`, gj = fj.scanRuns, _j = (e) => UA(e), vj = (e) => {
		let t = e.toLowerCase().replace(/[/\\]+/g, "-").replace(/[^a-z0-9-]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
		return t === "" ? "pkg" : t.slice(0, 40);
	}, yj = GA(fj), bj = (e, t) => WA(fj, e, t), xj = (e) => bj(e, "map"), Sj = (e) => `${yj}${e}-`;
})), wj, Tj, Ej, Dj = b((() => {
	zA(), Cj(), wj = 5, Tj = async (e, t) => {
		let n = uj(t);
		try {
			let t = await e.sandbox.json(`/workspace/children?path=${encodeURIComponent(n)}&depth=${wj}`), r = `${n}/`;
			return $_.parse(t).entries.filter((e) => e.type === "file" && e.path.startsWith(r)).map((e) => e.path.slice(r.length)).toSorted();
		} catch {
			return [];
		}
	}, Ej = (e) => e.filter((e) => e.endsWith(`/${tj}`)).map((e) => e.slice(0, -`/${tj}`.length));
})), Oj, kj, Aj, jj, Mj, Nj = b((() => {
	Ne(), Cj(), Dj(), Oj = t(Me, hj), {state: kj, start: Aj} = n({
		host: Me,
		everyMs: 6e5,
		initial: () => [],
		read: async (e) => {
			let t = await Oj.read();
			return (await Promise.all(e.workspace.repos().map(async ({ repo: n }) => (await Tj(e, n)).includes("repo.json") && t[lj(n)] === void 0 ? n : void 0))).filter((e) => e !== void 0);
		}
	}), jj = () => {
		let e = kj.value.length;
		if (e !== 0) return {
			count: e,
			tone: "info",
			tooltip: `${e} repositor${e === 1 ? "y has" : "ies have"} newly generated documentation waiting to be reviewed`
		};
	}, Mj = async (e) => {
		let t = lj(e);
		kj.value = kj.value.filter((t) => t !== e), (await Oj.read())[t] === void 0 && await Oj.mark({ [t]: (/* @__PURE__ */ new Date()).toISOString() });
	};
})), Pj, $, Fj, Ij, Lj, Rj, zj, Bj, Vj, Hj, Uj, Wj, Gj, Kj = b((() => {
	Pj = (e) => typeof e == "object" && !!e && !Array.isArray(e), $ = (e) => {
		if (typeof e != "string") return;
		let t = e.trim();
		return t === "" ? void 0 : t;
	}, Fj = (e) => Array.isArray(e) ? e.flatMap((e) => $(e) === void 0 ? [] : [$(e)]) : [], Ij = (e) => typeof e == "number" && Number.isFinite(e) ? e : void 0, Lj = /* @__PURE__ */ new Set([
		"1",
		"2",
		"3",
		"4",
		"5",
		"neutral"
	]), Rj = (e) => typeof e == "string" && Lj.has(e) ? e : void 0, zj = (e) => {
		if (!Pj(e)) return;
		let t = $(e.sourceRev), n = Ij(e.generatedAt);
		if (t !== void 0 && n !== void 0) return {
			sourceRev: t,
			generatedAt: n,
			model: $(e.model)
		};
	}, Bj = (e) => {
		if (!Pj(e)) return;
		let t = $(e.id), n = $(e.oneLiner);
		if (t !== void 0 && n !== void 0) return {
			id: t,
			name: $(e.name) ?? t,
			oneLiner: n,
			packages: Fj(e.packages),
			accent: Rj(e.accent)
		};
	}, Vj = (e) => {
		if (!Pj(e)) return;
		let t = $(e.path), n = $(e.what);
		if (t === void 0 || n === void 0) return;
		let r = Ij(e.line);
		return {
			path: t,
			what: n,
			line: r !== void 0 && r >= 1 ? Math.floor(r) : void 0
		};
	}, Hj = (e) => {
		try {
			return JSON.parse(e);
		} catch {
			return;
		}
	}, Uj = (e) => {
		let t = Hj(e);
		if (!Pj(t)) return;
		let n = t.repo, r = zj(t.provenance);
		if (typeof n != "string" || r === void 0) return;
		let i = t.components, a = t.glossary;
		return {
			repo: n,
			components: (Array.isArray(i) ? i : []).flatMap((e) => {
				let t = Bj(e);
				return t === void 0 ? [] : [t];
			}),
			glossary: (Array.isArray(a) ? a : []).flatMap((e) => {
				if (!Pj(e)) return [];
				let t = $(e.term), n = $(e.means);
				return t === void 0 || n === void 0 ? [] : [{
					term: t,
					means: n
				}];
			}),
			reading: Fj(t.reading),
			provenance: r
		};
	}, Wj = (e) => {
		let t = Hj(e);
		if (!Pj(t)) return;
		let n = t.repo;
		if (typeof n != "string") return;
		let r = t.entries, i = t.edges;
		return {
			repo: n,
			generatedAt: Ij(t.generatedAt) ?? 0,
			entries: (Array.isArray(r) ? r : []).flatMap((e) => {
				if (!Pj(e)) return [];
				let t = $(e.dir);
				if (t === void 0) return [];
				let n = e.anchors;
				return [{
					dir: t,
					name: $(e.name),
					oneLiner: $(e.oneLiner) ?? "",
					component: $(e.component),
					anchors: (Array.isArray(n) ? n : []).flatMap((e) => {
						let t = Vj(e);
						return t === void 0 ? [] : [t];
					}),
					files: Ij(e.files) ?? 0,
					loc: Ij(e.loc) ?? 0,
					hasTests: e.hasTests === !0,
					readmeRev: $(e.readmeRev) ?? "",
					updatedAt: Ij(e.updatedAt) ?? 0,
					stale: e.stale === !0,
					reason: $(e.reason),
					behind: Ij(e.behind) ?? 0
				}];
			}),
			edges: (Array.isArray(i) ? i : []).flatMap((e) => {
				if (!Pj(e)) return [];
				let t = $(e.from), n = $(e.to);
				return t === void 0 || n === void 0 ? [] : [{
					from: t,
					to: n,
					dev: e.dev === !0
				}];
			}),
			orphans: Fj(t.orphans),
			undocumented: Fj(t.undocumented)
		};
	}, Gj = (e, t) => e.components.find((e) => e.packages.includes(t));
})), qj, Jj, Yj, Xj, Zj, Qj, $j = b((() => {
	Kj(), Ne(), Cj(), Dj(), qj = async (e) => {
		try {
			let t = Wj(await Me().workspace.file(cj(e, "index.json")) ?? "");
			return new Map((t?.entries ?? []).map((e) => [e.dir, e.oneLiner]));
		} catch {
			return /* @__PURE__ */ new Map();
		}
	}, Jj = async (e) => {
		try {
			return await Me().workspace.file(cj(e, QA)) !== void 0;
		} catch {
			return !1;
		}
	}, {state: Yj, start: Xj, refresh: Zj} = n({
		host: Me,
		everyMs: 6e4,
		initial: () => /* @__PURE__ */ new Map(),
		read: async (e) => {
			let t = /* @__PURE__ */ new Map();
			return await Promise.all(e.workspace.repos().map(async ({ repo: n, docs: r }) => {
				let [i, a, o] = await Promise.all([
					r ? qj(n) : /* @__PURE__ */ new Map(),
					Tj(e, n),
					r ? Jj(n) : !1
				]);
				a.includes("repo.json") && t.set(n, {
					oneLiner: "",
					draft: !0
				});
				for (let e of Ej(a)) t.set(oj(n, e), {
					oneLiner: "",
					draft: !0
				});
				o && t.set(n, {
					oneLiner: "",
					draft: !1
				});
				for (let [e, r] of i) t.set(oj(n, e), {
					oneLiner: r,
					draft: !1
				});
			})), t;
		}
	}), Qj = (e) => Yj.value.get(e);
})), eM, tM, nM, rM, iM, aM, oM, sM, cM = b((() => {
	eM = { class: "min-w-0 truncate font-mono" }, tM = { class: "opacity-70" }, nM = { class: "px-2 py-6 text-center text-2xs text-subtle" }, rM = { class: "flex flex-col gap-0.5 text-2xs text-subtle" }, iM = { key: 0 }, aM = {
		key: 0,
		class: "flex items-center gap-1.5"
	}, oM = {
		key: 1,
		class: "text-warning"
	}, sM = /*@__PURE__*/ f({
		__name: "DocsNav",
		props: {
			components: {},
			index: {},
			page: {}
		},
		emits: ["open"],
		setup(e, { emit: t }) {
			let n = t, r = i(() => e.index?.entries ?? []), f = i(() => new Map(r.value.map((e) => [e.dir, e]))), p = i(() => r.value.filter((e) => e.stale).length), ee = i(() => {
				let t = new Set(e.components.flatMap((e) => e.packages)), n = r.value.map((e) => e.dir).filter((e) => !t.has(e));
				return n.length === 0 ? [...e.components] : [...e.components, {
					id: "unmapped",
					name: "Not on the map",
					oneLiner: "Documented after the map was drawn",
					accent: "neutral",
					packages: n
				}];
			}), te = i(() => ee.value.reduce((e, t) => e + t.packages.length, 0)), re = (e) => {
				let t = f.value.get(e), n = e.lastIndexOf("/");
				return {
					dir: e,
					prefix: e.slice(0, n + 1),
					leaf: e.slice(n + 1),
					stale: t?.stale === !0,
					title: [
						e,
						t?.oneLiner,
						t?.stale === !0 ? `May be out of date, ${t.reason}` : void 0
					].filter((e) => e !== void 0).join("\n")
				};
			}, ie = ne(""), ce = (e) => {
				let t = ie.value.trim().toLowerCase();
				return t === "" || e.name.toLowerCase().includes(t) ? e.packages : e.packages.filter((e) => `${e} ${f.value.get(e)?.oneLiner ?? ""}`.toLowerCase().includes(t));
			}, y = i(() => ee.value.flatMap((e) => {
				let t = ce(e);
				return t.length === 0 ? [] : [{
					key: e.id,
					label: e.name,
					accent: e.accent,
					items: t.map(re)
				}];
			})), le = () => {
				let e = y.value[0]?.items[0];
				e !== void 0 && n("open", e.dir);
			}, ue = /* @__PURE__ */ new Map(), de = (e, t) => {
				if (t instanceof Element) {
					ue.set(e, t);
					return;
				}
				ue.delete(e);
			};
			return ae(() => e.page, (e) => {
				e !== void 0 && m(() => ue.get(e)?.scrollIntoView({ block: "nearest" }));
			}, { immediate: !0 }), (t, i) => (h(), a(_(pe), {
				modelValue: ie.value,
				"onUpdate:modelValue": i[1] ||= (e) => ie.value = e,
				"aria-label": "Documents",
				groups: y.value,
				filterable: te.value > 12,
				placeholder: "Filter packages…",
				onKeydown: oe(se(le, ["prevent"]), ["enter"])
			}, l({
				pinned: v(() => [d(_(_e), {
					as: "button",
					density: "dense",
					icon: "align-left",
					title: "Overview",
					selected: e.page === void 0,
					class: "rounded-lg",
					onClick: i[0] ||= (e) => n("open", void 0)
				}, null, 8, ["selected"])]),
				row: v(({ item: t }) => [(h(), a(_(_e), {
					key: t.dir,
					ref: (e) => de(t.dir, e),
					as: "button",
					density: "dense",
					title: t.title,
					selected: e.page === t.dir,
					class: "rounded-lg",
					onClick: (e) => n("open", t.dir)
				}, l({
					title: v(() => [c("span", eM, [c("span", tM, g(t.prefix), 1), u(g(t.leaf), 1)])]),
					_: 2
				}, [t.stale ? {
					name: "meta",
					fn: v(() => [i[2] ||= c("span", {
						class: "size-1.5 rounded-full bg-warning/70",
						"aria-hidden": "true"
					}, null, -1)]),
					key: "0"
				} : void 0]), 1032, [
					"title",
					"selected",
					"onClick"
				]))]),
				empty: v(() => [c("p", nM, g(ie.value.trim() === "" ? "No package pages here yet." : `Nothing matches "${ie.value.trim()}".`), 1)]),
				_: 2
			}, [e.index === void 0 ? void 0 : {
				name: "footer",
				fn: v(() => [c("div", rM, [
					c("span", null, [u(g(r.value.length) + " documented", 1), e.index.undocumented.length > 0 ? (h(), s("span", iM, " · " + g(e.index.undocumented.length) + " not yet", 1)) : o("", !0)]),
					p.value > 0 ? (h(), s("span", aM, [i[3] ||= c("span", {
						class: "size-1.5 shrink-0 rounded-full bg-warning/70",
						"aria-hidden": "true"
					}, null, -1), u(" " + g(p.value) + " may be out of date ", 1)])) : o("", !0),
					e.index.orphans.length > 0 ? (h(), s("span", oM, g(e.index.orphans.length) + " document" + g(e.index.orphans.length === 1 ? "" : "s") + " for packages that are gone ", 1)) : o("", !0)
				])]),
				key: "0"
			}]), 1032, [
				"modelValue",
				"groups",
				"filterable",
				"onKeydown"
			]));
		}
	});
})), lM, uM = b((() => {
	cM(), cM(), lM = sM;
})), dM, fM, pM, mM, hM, gM, _M, vM, yM, bM, xM, SM, CM, wM, TM = b((() => {
	Ne(), dM = { class: "flex flex-col gap-5" }, fM = {
		key: 0,
		class: "flex items-center gap-2 text-xs text-muted"
	}, pM = {
		key: 3,
		class: "text-sm text-muted"
	}, mM = {
		key: 4,
		class: "flex flex-col gap-0.5"
	}, hM = { class: "flex min-w-0 flex-col" }, gM = { class: "truncate font-mono text-xs text-link" }, _M = { key: 0 }, vM = { class: "text-2xs text-muted" }, yM = {
		key: 5,
		class: "flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 text-2xs text-subtle"
	}, bM = { key: 0 }, xM = { class: "font-mono" }, SM = { key: 1 }, CM = { key: 2 }, wM = /*@__PURE__*/ f({
		__name: "DocPage",
		props: {
			prose: {},
			figures: {},
			anchors: {},
			provenance: {},
			repo: {},
			staleness: {}
		},
		setup(e) {
			let t = (t) => {
				let n = `/workspace/${e.repo === "" ? "" : `${e.repo}/`}${t.path}`;
				return Se(Me().href(n), () => Me().navigate(n));
			}, n = i(() => e.provenance?.generatedAt ?? e.staleness?.updatedAt ?? 0), l = i(() => e.provenance?.sourceRev ?? e.staleness?.readmeRev ?? "");
			return (i, f) => (h(), s("article", dM, [
				e.staleness?.stale === !0 ? (h(), s("p", fM, [f[0] ||= c("span", {
					class: "size-1.5 shrink-0 rounded-full bg-warning/70",
					"aria-hidden": "true"
				}, null, -1), u(" May be out of date: " + g(e.staleness.reason) + ". ", 1)])) : o("", !0),
				e.figures !== void 0 && e.figures !== "" ? (h(), a(_(de), {
					key: 1,
					source: e.figures,
					style: { "--prose-measure": "76ch" }
				}, null, 8, ["source"])) : o("", !0),
				e.prose === void 0 ? (h(), s("p", pM, "This page has no prose yet.")) : (h(), a(_(de), {
					key: 2,
					source: e.prose,
					style: { "--prose-measure": "76ch" }
				}, null, 8, ["source"])),
				e.anchors.length > 0 ? (h(), s("section", mM, [c("h2", { class: te(_(we).sectionLabel("mb-1 text-2xs")) }, "Where to start reading", 2), (h(!0), s(r, null, re(e.anchors, (e) => (h(), s("a", ee({ key: e.path }, { ref_for: !0 }, t(e), { class: "ui-row-select flex w-full items-start gap-3 rounded-lg px-2.5 py-1.5 text-left" }), [d(_(ue), {
					name: "file",
					class: "mt-0.5 shrink-0 text-subtle"
				}), c("span", hM, [c("span", gM, [u(g(e.path), 1), e.line === void 0 ? o("", !0) : (h(), s("span", _M, ":" + g(e.line), 1))]), c("span", vM, g(e.what), 1)])], 16))), 128))])) : o("", !0),
				n.value > 0 ? (h(), s("footer", yM, [
					d(_(xe), {
						variant: e.staleness?.stale === !0 ? "warning" : "neutral",
						size: "xs",
						dot: "",
						label: `written ${_(Ce)(n.value)}`
					}, null, 8, ["variant", "label"]),
					l.value === "" ? o("", !0) : (h(), s("span", bM, [u(g(e.provenance === void 0 ? "in" : "against") + " ", 1), c("span", xM, g(l.value.slice(0, 8)), 1)])),
					e.provenance?.model === void 0 ? o("", !0) : (h(), s("span", SM, "by " + g(e.provenance.model), 1)),
					e.staleness !== void 0 && e.staleness.behind > 0 ? (h(), s("span", CM, "· " + g(e.staleness.behind) + " commit" + g(e.staleness.behind === 1 ? "" : "s") + " since", 1)) : o("", !0)
				])) : o("", !0)
			]));
		}
	});
})), EM, DM = b((() => {
	TM(), TM(), EM = wM;
})), OM, kM, AM, jM, MM = b((() => {
	OM = {
		class: "min-h-0 flex-1 overflow-y-auto p-6",
		role: "status",
		"aria-busy": "true"
	}, kM = {
		class: "mx-auto flex max-w-3xl flex-col gap-6",
		"aria-hidden": "true"
	}, AM = {
		key: 0,
		class: "skeleton mt-2 block h-4 w-1/4"
	}, jM = /*@__PURE__*/ f({
		__name: "DocSkeleton",
		setup(e) {
			let t = [
				[
					"w-full",
					"w-full",
					"w-11/12",
					"w-2/3"
				],
				[
					"w-full",
					"w-5/6",
					"w-1/2"
				],
				[
					"w-full",
					"w-full",
					"w-3/4"
				]
			];
			return (e, n) => (h(), s("div", OM, [n[1] ||= c("span", { class: "sr-only" }, "Reading the documentation…", -1), c("div", kM, [n[0] ||= c("span", { class: "skeleton block h-6 w-2/5" }, null, -1), (h(), s(r, null, re(t, (e, t) => c("div", {
				key: t,
				class: "flex flex-col gap-3"
			}, [t > 0 ? (h(), s("span", AM)) : o("", !0), (h(!0), s(r, null, re(e, (e, t) => (h(), s("span", {
				key: t,
				class: te(["skeleton block h-2.5", e])
			}, null, 2))), 128))])), 64))])]));
		}
	});
})), NM, PM = b((() => {
	MM(), MM(), NM = jM;
})), FM, IM, LM, RM, zM, BM, VM, HM, UM = b((() => {
	FM = 5, IM = (e) => e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : `${e}`, LM = (e) => {
		let t = /* @__PURE__ */ new Map();
		for (let n of e?.components ?? []) for (let e of n.packages) t.set(e, n.accent ?? "neutral");
		return t;
	}, RM = (e) => e.slice(e.lastIndexOf("/") + 1), zM = (e, t) => [
		"```stats",
		JSON.stringify({ items: [
			{
				label: "Lines",
				value: IM(e.loc)
			},
			{
				label: "Files",
				value: `${e.files}`
			},
			{
				label: "Used by",
				value: t === 1 ? "1 package" : `${t} packages`
			},
			{
				label: "Tests",
				value: e.hasTests ? "yes" : "none"
			}
		] }),
		"```"
	].join("\n"), BM = (e, t, n) => {
		let r = LM(n), i = t.edges.filter((t) => t.from === e), a = t.edges.filter((t) => t.to === e);
		if (i.length === 0 && a.length === 0) return;
		let o = i.slice(0, FM), s = a.slice(0, FM), c = [
			{
				id: e,
				label: RM(e),
				note: "this package",
				accent: r.get(e) ?? "neutral"
			},
			...o.map((e) => ({
				id: e.to,
				label: RM(e.to),
				note: "it uses",
				accent: r.get(e.to) ?? "neutral"
			})),
			...s.map((e) => ({
				id: e.from,
				label: RM(e.from),
				note: "uses it",
				accent: r.get(e.from) ?? "neutral"
			}))
		], l = [...o.map((t) => ({
			from: e,
			to: t.to,
			...t.dev ? { dashed: !0 } : {}
		})), ...s.map((t) => ({
			from: t.from,
			to: e,
			...t.dev ? { dashed: !0 } : {}
		}))], u = `Its neighbours (showing ${o.length} of ${i.length} it uses, ${s.length} of ${a.length} that use it)`;
		return [
			"```dag",
			JSON.stringify({
				title: u,
				direction: "LR",
				nodes: c,
				edges: l
			}),
			"```"
		].join("\n");
	}, VM = (e, t, n) => {
		let r = n?.components.find((t) => t.packages.includes(e.dir));
		if (r === void 0) return;
		let i = t.entries.filter((e) => r.packages.includes(e.dir) && e.loc > 0);
		if (!(i.length < 2)) return [
			"```bars",
			JSON.stringify({
				title: `Size within ${r.name}`,
				items: i.toSorted((e, t) => t.loc - e.loc).map((t) => ({
					label: t.dir === e.dir ? `${RM(t.dir)} (this one)` : RM(t.dir),
					value: t.loc,
					display: IM(t.loc),
					accent: r.accent ?? "neutral"
				}))
			}),
			"```"
		].join("\n");
	}, HM = (e, t, n) => {
		let r = t?.entries.find((t) => t.dir === e);
		if (t === void 0 || r === void 0) return "";
		let i = t.edges.filter((t) => t.to === e).length;
		return [
			zM(r, i),
			BM(e, t, n),
			VM(r, t, n)
		].filter((e) => e !== void 0).join("\n\n");
	};
})), WM, GM, KM, qM, JM, YM, XM, ZM, QM, $M = b((() => {
	Ne(), WM = { class: "flex flex-col gap-4" }, GM = { class: "flex flex-wrap items-center gap-2" }, KM = { class: "ml-auto text-2xs text-subtle" }, qM = { class: "-mx-2.5 max-h-72 overflow-y-auto" }, JM = { class: "min-w-0 flex-1 truncate font-mono text-xs" }, YM = {
		key: 0,
		class: "shrink-0 text-2xs text-warning"
	}, XM = {
		key: 1,
		class: "shrink-0 text-2xs text-subtle"
	}, ZM = {
		key: 0,
		class: "flex items-start gap-2 text-2xs text-muted"
	}, QM = /*@__PURE__*/ f({
		__name: "GenerateDialog",
		props: /*@__PURE__*/ p({
			packages: {},
			index: {},
			label: {}
		}, {
			modelValue: {
				type: Boolean,
				required: !0
			},
			modelModifiers: {}
		}),
		emits: /*@__PURE__*/ p(["start"], ["update:modelValue"]),
		setup(e, { emit: t }) {
			let n = ie(e, "modelValue"), l = t, u = ne([]), f = i(() => {
				let t = new Set((e.index?.entries ?? []).map((e) => e.dir));
				return e.packages.filter((e) => !t.has(e));
			}), p = i(() => (e.index?.entries ?? []).filter((e) => e.stale).map((e) => e.dir)), ee = () => {
				u.value = p.value.length > 0 ? [.../* @__PURE__ */ new Set([...p.value, ...f.value])] : [...f.value];
			};
			ae(n, (e) => e && ee(), { immediate: !0 });
			let m = (e) => {
				u.value = u.value.includes(e) ? u.value.filter((t) => t !== e) : [...u.value, e];
			}, te = Te(() => Me().models, "documentation-run"), oe = () => {
				l("start", [...u.value], te.overridden.value ? te.model.value : void 0), te.clear(), n.value = !1;
			};
			return (t, i) => (h(), a(_(fe), {
				open: n.value,
				"onUpdate:open": i[4] ||= (e) => n.value = e,
				size: "md",
				header: `Generate documentation for ${e.label}`
			}, {
				footer: v(() => [d(_(y), {
					severity: "secondary",
					text: "",
					label: "Cancel",
					onClick: i[3] ||= (e) => n.value = !1
				}), d(_(ce), {
					label: "Generate",
					size: "normal",
					picker: _(te),
					disabled: u.value.length === 0,
					onRun: oe
				}, null, 8, ["picker", "disabled"])]),
				default: v(() => [c("div", WM, [
					i[5] ||= c("p", { class: "text-sm text-muted" }, " One agent writes the repository's map first: the components, the vocabulary, the reading order. The packages you pick below are then documented in parallel, one agent each, and land as a draft you review before anything is committed. ", -1),
					c("div", GM, [
						d(_(y), {
							size: "small",
							severity: "secondary",
							label: "Undocumented",
							onClick: i[0] ||= (e) => u.value = [...f.value]
						}),
						d(_(y), {
							size: "small",
							severity: "secondary",
							disabled: p.value.length === 0,
							label: "Stale",
							onClick: i[1] ||= (e) => u.value = [...p.value]
						}, null, 8, ["disabled"]),
						d(_(y), {
							size: "small",
							severity: "secondary",
							label: "Everything",
							onClick: i[2] ||= (t) => u.value = [...e.packages]
						}),
						c("span", KM, g(u.value.length) + " of " + g(e.packages.length), 1)
					]),
					c("div", qM, [(h(!0), s(r, null, re(e.packages, (e) => (h(), s("label", {
						key: e,
						class: "flex cursor-pointer items-center gap-3 rounded-md px-2.5 py-1.5 transition-colors hover:bg-content/5"
					}, [
						d(_(le), {
							"model-value": u.value.includes(e),
							binary: "",
							"onUpdate:modelValue": (t) => m(e)
						}, null, 8, ["model-value", "onUpdate:modelValue"]),
						c("span", JM, g(e), 1),
						p.value.includes(e) ? (h(), s("span", YM, "stale")) : f.value.includes(e) ? (h(), s("span", XM, "new")) : o("", !0)
					]))), 128))]),
					u.value.length > 8 ? (h(), s("p", ZM, [d(_(ue), {
						name: "info-circle",
						class: "mt-0.5 shrink-0"
					}), c("span", null, g(u.value.length) + " packages means " + g(u.value.length + 1) + " agent sessions, running in parallel.", 1)])) : o("", !0)
				])]),
				_: 1
			}, 8, ["open", "header"]));
		}
	});
})), eN, tN = b((() => {
	$M(), $M(), eN = QM;
})), nN, rN, iN, aN, oN = b((() => {
	nN = "ext-documentation-repo", rN = () => {
		try {
			return localStorage.getItem(nN) ?? void 0;
		} catch {
			return;
		}
	}, iN = (e) => {
		try {
			localStorage.setItem(nN, e);
		} catch {}
	}, aN = (e, t, n) => t !== void 0 && e.includes(t) ? t : e.find((e) => n(e)) ?? e[0] ?? "";
}));
//#endregion
//#region src/useDocs.ts
function sN(e, t) {
	let n = Me(), r = Oe(), a = i(() => n.sandbox.key("documentation", t.value, e.value)), o = async (e) => {
		try {
			return await n.sandbox.json(e);
		} catch {
			return;
		}
	}, s = De({
		queryKey: a,
		enabled: i(() => n.sandbox.reachable()),
		queryFn: async () => {
			let [r, i, a] = await Promise.all([
				n.workspace.file(cN(t.value, e.value, QA)),
				n.workspace.file(cN(t.value, e.value, $A)),
				n.workspace.file(cN(t.value, e.value, ej))
			]);
			return {
				repoDoc: r === void 0 ? void 0 : Uj(r),
				prose: i,
				index: a === void 0 ? void 0 : Wj(a)
			};
		}
	}), c = (r) => De({
		queryKey: i(() => n.sandbox.key("documentation", "page", t.value, e.value, r.value ?? "")),
		enabled: i(() => n.sandbox.reachable() && r.value !== void 0),
		queryFn: async () => {
			let i = r.value;
			if (i !== void 0) return await n.workspace.file(cN(t.value, e.value, nj(i)));
		}
	}), l = De({
		queryKey: i(() => n.sandbox.key("documentation", "has-staged", e.value)),
		enabled: i(() => n.sandbox.reachable()),
		queryFn: async () => {
			let t = await o(`/workspace/children?path=${encodeURIComponent(uj(e.value))}`);
			return t !== void 0 && aj($_.parse(t).entries.map((e) => e.name));
		}
	});
	return {
		set: i(() => s.data.value),
		isLoading: s.isLoading,
		hasStaged: i(() => l.data.value === !0),
		usePackage: c,
		refresh: () => {
			r.invalidateQueries({ queryKey: n.sandbox.key("documentation") });
		}
	};
}
var cN, lN = b((() => {
	zA(), Kj(), Ne(), Cj(), cN = (e, t, n) => e === "staged" ? dj(t, n) : cj(t, n);
}));
//#endregion
//#region src/usePublish.ts
function uN() {
	let e = Me(), t = Oe(), n = async (t, n) => await e.workspace.file(dj(t, n));
	return {
		preflight: async (t) => {
			let n = await Tj(e, t), r = "", i = [];
			try {
				let a = a_.parse(await e.sandbox.json(`/git/${encodeURIComponent(dN(t))}/status`));
				r = a.branch;
				let o = new Set(n.map((e) => ij(e)));
				i = a.files.map((e) => e.replace(/^\S+\s+/, "")).filter((e) => !o.has(e));
			} catch {}
			return {
				tails: n,
				foreign: i,
				branch: r
			};
		},
		publish: async (r, i) => {
			let a = [];
			for (let t of i) {
				let i = await n(r, t);
				if (i === void 0) continue;
				let o = ij(t);
				await e.sandbox.request(`/git/${encodeURIComponent(dN(r))}/file`, {
					method: "PUT",
					headers: { "content-type": "application/json" },
					body: JSON.stringify({
						repo: dN(r),
						path: o,
						content: i
					})
				}), a.push(o);
			}
			a.length !== 0 && (await e.sandbox.request(`/git/${encodeURIComponent(dN(r))}/stage`, {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					repo: dN(r),
					paths: a
				})
			}), await e.sandbox.request(`/git/${encodeURIComponent(dN(r))}/commit`, {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					repo: dN(r),
					message: `docs: publish architecture documentation\n\n${a.length} file${a.length === 1 ? "" : "s"}, package READMEs and the repository map.`
				})
			}), await e.sandbox.request("/workspace/entry", {
				method: "DELETE",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ path: uj(r) })
			}), t.invalidateQueries({ queryKey: e.sandbox.key("documentation") }), Zj());
		},
		discard: async (n) => {
			await e.sandbox.request("/workspace/entry", {
				method: "DELETE",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ path: uj(n) })
			}), t.invalidateQueries({ queryKey: e.sandbox.key("documentation") }), Zj();
		}
	};
}
var dN, fN = b((() => {
	zA(), $j(), Ne(), Cj(), Dj(), dN = (e) => e === "" ? "root" : e;
})), pN, mN, hN, gN, _N, vN, yN, bN = b((() => {
	Cj(), pN = [
		"## Who you are writing for",
		"",
		"A capable engineer who has never opened this repository and has twenty minutes. They want to know what is here, how the pieces relate, and where to start. They do NOT want an API reference: signatures, exported names and option lists are already one `iq outline` away, and repeating them is the fastest way to make a document that is long, stale within a week, and unread.",
		"",
		"Write in plain language. Prefer a short sentence to a precise-sounding one. Expand an acronym the first time. When something is surprising, say that it is surprising and say why. When a design decision has a reason, give the reason; when you cannot find the reason, say what the code does and do not invent one.",
		"",
		"Length is a budget, not a target: one screen per package. If you cannot say what a package is for in one sentence, that difficulty is itself worth writing down."
	].join("\n"), mN = [
		"## Figures",
		"",
		"Put figures INLINE, at the sentence they illustrate, as fenced blocks whose language names the figure kind.",
		"The body is JSON. A fence that does not parse renders as a plain code block, so keep it valid.",
		"",
		"A graph: components, dependencies, a request path. `direction` is \"LR\" (default) or \"TB\".",
		"`accent` is \"1\"..\"5\" or \"neutral\": assign a slot to a COMPONENT and reuse that same slot everywhere.",
		"",
		"```dag",
		"{ \"title\": \"How a turn reaches the model\", \"direction\": \"LR\",",
		"  \"nodes\": [{ \"id\": \"web\", \"label\": \"Browser app\", \"note\": \"Vue\", \"accent\": \"1\" },",
		"            { \"id\": \"daemon\", \"label\": \"Sandbox daemon\", \"note\": \"one per box\", \"accent\": \"2\" }],",
		"  \"edges\": [{ \"from\": \"web\", \"to\": \"daemon\" }] }",
		"```",
		"",
		"A magnitude comparison across a few named things. ONE measure per figure; `display` is the tip label.",
		"",
		"```bars",
		"{ \"title\": \"Lines of code\", \"items\": [{ \"label\": \"_editor/web\", \"value\": 77114, \"display\": \"77.1k\" }] }",
		"```",
		"",
		"An orientation strip of counts. Values are TEXT, so write the units you mean.",
		"",
		"```stats",
		"{ \"items\": [{ \"label\": \"Packages\", \"value\": \"53\", \"note\": \"18 with tests\" }] }",
		"```",
		"",
		"Edges carry no labels (the renderer draws paths, not text on paths). Use `\"dashed\": true` for a weaker or dev-only relationship. Do not describe a figure in prose as well as drawing it. Say the thing the figure cannot: what to notice in it."
	].join("\n"), hN = [
		"## Figures",
		"",
		"**Do not draw the facts.** This package's size, its file count, whether it has tests and which packages it depends on are computed and drawn above your prose automatically. Writing them into the page yourself duplicates a number that goes stale the next time anyone commits.",
		"",
		"Draw a figure only for something the dependency graph cannot say (a request's path, a state machine, an ordering). Then put it INLINE, at the sentence it illustrates, as a fence whose body is JSON. A fence that does not parse renders as a plain code block, so keep it valid.",
		"",
		"```dag",
		"{ \"title\": \"How a turn reaches the model\", \"direction\": \"LR\",",
		"  \"nodes\": [{ \"id\": \"web\", \"label\": \"Browser app\", \"note\": \"Vue\", \"accent\": \"1\" },",
		"            { \"id\": \"daemon\", \"label\": \"Sandbox daemon\", \"note\": \"one per box\", \"accent\": \"2\" }],",
		"  \"edges\": [{ \"from\": \"web\", \"to\": \"daemon\" }] }",
		"```",
		"",
		"`direction` is \"LR\" (default) or \"TB\". `accent` is \"1\"..\"5\" or \"neutral\" and belongs to a COMPONENT. Reuse your component's slot. Edges carry no labels; use `\"dashed\": true` for a weaker or dev-only relationship. Do not describe a figure in prose as well as drawing it."
	].join("\n"), gN = (e) => [
		"## Provenance is mandatory",
		"",
		"Every JSON document you write carries:",
		"",
		"    \"provenance\": { \"sourceRev\": \"<see below>\", \"generatedAt\": <epoch ms>, \"model\": \"<the model you are>\" }",
		"",
		`\`sourceRev\` is ${e} It is what makes rot detectable later: it is compared against the directory's current revision to answer "is this still true?". Take it from the tool's output. Do not invent one, and do not use a short sha.`
	].join("\n"), _N = (e) => [
		"## Finish by validating",
		"",
		"`intentic-docs` is on your PATH. Before you finish:",
		"",
		`    intentic-docs validate${e} --from staging`,
		"",
		"It checks that the map parses, that every package has a README, that each one opens with a lead sentence, and that every `## Key files` link still resolves. Fix what it reports and run it again until it passes. A key-files link pointing at a file that is not there is the clearest possible signal that a page is wrong, so it is worth getting right rather than working around."
	].join("\n"), vN = (e) => {
		let { repo: t, label: n } = e, r = t === "" ? "" : ` --repo ${t}`;
		return [
			`You are writing the MAP for the repository "${n}": the top of a documentation set that other agents will then fill in, one package each. You are not documenting any single package.`,
			"",
			pN,
			"",
			"## Start from the facts, not from reading",
			"",
			"Run this first:",
			"",
			`    intentic-docs facts${r}`,
			"",
			"It gives you every package in the repository, the dependency edges between them, each one's size and whether it has tests. That is your ground truth for structure, so do not restate it from reading, and do not contradict it. Read source only to understand what things are FOR: `iq map`, `iq outline` and the repo's own README/ARCHITECTURE files will take you further per token than opening files.",
			"",
			"## What to decide",
			"",
			"**Logical components.** Group the packages into the handful of things a reader actually thinks in (\"the control plane\", \"the wire\", \"the browser app\"). Only this step can make these groupings; no single-package agent sees enough to do it. A component is not a directory: it is a job. Aim for 4–9 of them; a component per package is not a map, and two components for forty packages is not either. Every package should belong to exactly one.",
			"",
			"**Vocabulary.** List the terms this repo uses in a way an outsider would guess wrong. Every package agent is handed this glossary, so it is what stops the set from inventing a different word per page.",
			"",
			"**Reading order.** The packages a newcomer should open first, in order. Three to six, not a ranking of all of them.",
			"",
			"## Write exactly two files",
			"",
			`**${dj(t, QA)}**`,
			"",
			"    {",
			`      "repo": ${JSON.stringify(t)},`,
			"      \"components\": [{ \"id\": \"wire\", \"name\": \"The wire\", \"oneLiner\": \"One sentence.\",",
			"                       \"packages\": [\"_shared/sandbox-contract\"], \"accent\": \"1\" }],",
			"      \"glossary\": [{ \"term\": \"panel\", \"means\": \"One sentence, plain language.\" }],",
			"      \"reading\": [\"_shared/sandbox-contract\", \"_sandbox/sandbox\"],",
			"      \"provenance\": { … }",
			"    }",
			"",
			"Give each component a distinct `accent` from \"1\"..\"5\", and \"neutral\" for any past the fifth. The package agents reuse their component's slot in every figure they draw, which is what makes the diagrams across the set read as one system.",
			"",
			`**${dj(t, $A)}**: the repository's own page, in prose, with figures. What is this repo, what are the components and how do they relate, what should I read first, and what would surprise me. Open with a \`stats\` figure and include a \`dag\` of the components. This is the page someone reads before anything else, so it is worth more care than any single package page.`,
			"",
			mN,
			"",
			gN("the `head` field of the `intentic-docs facts` output you ran above."),
			"",
			"## Rules",
			"",
			`- Write ONLY into \`${uj(t)}\`. Do not create or edit anything under the repository itself. The owner publishes these documents into the repo after reading them, and that is not your step.`,
			"- Do not modify the code you are documenting. If you find a bug, write it down in the prose; do not fix it.",
			"- JSON with keys in a stable order and two-space indent. These files are reviewed as diffs.",
			`- \`${ej}\` is generated by \`intentic-docs check\`. Never write it by hand.`,
			"",
			_N(r)
		].join("\n");
	}, yN = (e) => {
		let { repo: t, label: n, dir: r, component: i, glossary: a, components: o } = e, s = t === "" ? "" : ` --repo ${t}`;
		return [
			`You are documenting ONE package: \`${r}\` in the repository "${n}".`,
			pN,
			"## Where this package sits",
			i === void 0 ? "The map did not assign this package to a component. Say what it belongs with, in one sentence, and move on, and do not redraw the map." : `It belongs to the **${i.name}** component: ${i.oneLiner}\n\nUse accent slot "${i.accent ?? "neutral"}" for this component in every figure you draw, so the set's diagrams agree with each other.`,
			o.length === 0 ? void 0 : `The other components, so you can point at neighbours by their real names:\n\n${o.map((e) => `- **${e.name}**: ${e.oneLiner}`).join("\n")}`,
			a.length === 0 ? void 0 : `## This repository's vocabulary\n\nUse these words to mean these things:\n\n${a.map((e) => `- **${e.term}**: ${e.means}`).join("\n")}`,
			[
				"## Start from the facts",
				"",
				`    intentic-docs facts${s}`
			].join("\n"),
			`Find \`${r}\` in the output: its size, whether it has tests, and which packages it depends on and which depend on it. Those edges are what tells you whether this is a leaf everything uses or an entry point that uses everything. Do not restate numbers from reading; take them from here.`,
			`Then read enough to know what it is FOR. \`iq outline ${r}\` is worth more per token than opening files. Long comments at the top of a file are usually the author explaining the design. Read those before the code under them. If the package already has a README, you are REVISING it, not replacing it: keep what is still true and fix what is not.`,
			"## Write exactly one file",
			[
				`**${dj(t, nj(r))}**: the package's README, which IS its documentation page.`,
				"There is no JSON sidecar: everything the app needs that is not prose gets read back out of this file.",
				"",
				"Two things are required, because a tool parses them:",
				"",
				"    # <the package's name, or its directory if it has none>",
				"",
				"    One sentence a stranger could repeat back. This becomes the package's one-liner everywhere it is",
				"    named without being opened, so write a sentence, not a paragraph.",
				"",
				"    ## Key files",
				"",
				"    - [src/index.ts](src/index.ts): why this file is worth opening.",
				"",
				"`## Key files` is three to six entries. Link targets are relative to the PACKAGE directory (so the links work on GitHub and in the file tree) and must exist. Append `#L42` to a target for a line number."
			].join("\n"),
			"Everything else is yours to shape. `## Responsibilities`, `## How it fits` and `## Conventions & gotchas` are the usual spine and a good default: what this is and why it exists; how it fits the components around it; the two or three things you would have to explain to a new maintainer; what is surprising. No heading called \"API\". No list of exports.",
			hN,
			[
				"## Rules",
				"",
				`- Write ONLY this one file, under \`${uj(t)}\`. Another agent is documenting each other package right now, and \`${QA}\` belongs to the map. Editing either is how a run corrupts itself.`,
				"- Do not modify the code you are documenting. Finding a defect is worth writing down; fixing it is someone else's turn.",
				"- There is no provenance to write. The page's date is the commit that carries it, and how far the code has run ahead of it is a commit count. Both are computed, neither authored."
			].join("\n"),
			_N(s)
		].filter((e) => e !== void 0).join("\n\n");
	};
}));
//#endregion
//#region src/useRuns.ts
function xN(e) {
	let t = Me(), n = Oe(), r = i(() => t.sandbox.key("documentation-runs", "manifests")), a = i(() => t.sandbox.key("documentation-runs", "agents")), o = async (e) => {
		try {
			return await t.sandbox.json(e);
		} catch {
			return;
		}
	}, s = De({
		queryKey: r,
		enabled: i(() => t.sandbox.reachable()),
		queryFn: async () => {
			let e = await o(`/workspace/children?path=${encodeURIComponent(pj)}`);
			if (e === void 0) return [];
			let n = $_.parse(e).entries.filter((e) => e.type === "dir").toSorted((e, t) => e.name.localeCompare(t.name)).slice(-gj).toReversed();
			return (await Promise.all(n.map((e) => t.workspace.file(mj(e.name))))).flatMap((e) => e === void 0 ? [] : wN(e) ?? []);
		}
	}), c = De({
		queryKey: a,
		enabled: i(() => t.sandbox.reachable()),
		refetchInterval: (e) => (e.state.data ?? []).some((e) => e.id.startsWith(yj) && CN(e)) ? SN : !1,
		queryFn: async () => {
			let e = await o("/agents");
			return e === void 0 ? [] : pg.parse(e).agents;
		}
	}), l = De({
		queryKey: i(() => t.sandbox.key("documentation", "staged-tails", e.value)),
		enabled: i(() => t.sandbox.reachable()),
		queryFn: async () => Ej(await Tj(t, e.value))
	}), u = i(() => {
		let t = c.data.value ?? [], n = l.data.value ?? [];
		return (s.data.value ?? []).filter((t) => t.repo === e.value).map((e) => {
			let r = xj(e.runId), i = t.filter((t) => t.id.startsWith(Sj(e.runId))), a = t.find((e) => e.id === r), o = e.packages;
			return {
				manifest: e,
				agents: i,
				mapDone: a === void 0 || !CN(a),
				running: i.some(CN),
				done: o === void 0 ? n.length : o.filter((e) => n.includes(e)).length,
				total: o?.length
			};
		});
	}), d = async (e, n, r) => {
		await t.sandbox.request("/agent", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				prompt: n,
				conversationId: e,
				isolated: !0,
				permissionMode: "bypassPermissions",
				unattended: !0,
				runRole: "documentation-run",
				...r
			})
		});
	};
	return {
		rows: u,
		isLoading: s.isLoading,
		start: async (e) => {
			let r = _j(Date.now()), i = {
				runId: r,
				createdAt: Date.now(),
				repo: e.repo,
				...e.packages === void 0 ? {} : { packages: [...e.packages] },
				...e.pick === void 0 ? {} : { pick: e.pick }
			};
			return await t.workspace.write(mj(r), `${JSON.stringify(i, void 0, 2)}\n`), await d(xj(r), vN({
				repo: e.repo,
				label: e.label
			}), e.pick), n.invalidateQueries({ queryKey: t.sandbox.key("documentation-runs") }), r;
		},
		advance: async () => {
			let e = c.data.value ?? [], r = l.data.value ?? [];
			for (let i of u.value) {
				if (!i.mapDone) continue;
				let o = await t.workspace.file(dj(i.manifest.repo, QA)), s = o === void 0 ? void 0 : Uj(o);
				if (s === void 0) continue;
				let c = (i.manifest.packages ?? [...new Set(s.components.flatMap((e) => e.packages))]).filter((t) => {
					let n = bj(i.manifest.runId, vj(t));
					return !e.some((e) => e.id === n) && !r.includes(t);
				});
				for (let e of c) await d(bj(i.manifest.runId, vj(e)), yN({
					repo: i.manifest.repo,
					label: i.manifest.repo === "" ? "the workspace root" : i.manifest.repo,
					dir: e,
					component: Gj(s, e),
					glossary: s.glossary,
					components: s.components
				}), i.manifest.pick);
				c.length > 0 && n.invalidateQueries({ queryKey: a.value });
			}
		},
		stop: async (e) => {
			let r = u.value.find((t) => t.manifest.runId === e);
			await Promise.all((r?.agents ?? []).filter(CN).map((e) => t.sandbox.request("/agent/stop", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ conversationId: e.id })
			}))), n.invalidateQueries({ queryKey: a.value });
		}
	};
}
var SN, CN, wN, TN = b((() => {
	zA(), bN(), Kj(), Ne(), Cj(), Dj(), SN = 4e3, CN = (e) => e.status === "running" || e.status === "awaiting", wN = (e) => {
		try {
			let t = JSON.parse(e), n = t.runId, r = t.repo, i = t.packages, a = Cd.safeParse(t.pick);
			return typeof n != "string" || typeof r != "string" ? void 0 : {
				runId: n,
				repo: r,
				createdAt: typeof t.createdAt == "number" ? t.createdAt : 0,
				packages: Array.isArray(i) ? i.filter((e) => typeof e == "string") : void 0,
				...a.success && a.data !== void 0 ? { pick: a.data } : {}
			};
		} catch {
			return;
		}
	};
})), EN, DN, ON, kN, AN, jN, MN, NN, PN, FN, IN, LN, RN, zN = b((() => {
	Nj(), $j(), uM(), DM(), PM(), UM(), tN(), Ne(), oN(), lN(), fN(), TN(), EN = {
		key: 0,
		class: "flex items-center gap-3 rounded-lg bg-content/4 px-3 py-2 text-xs"
	}, DN = { class: "text-content" }, ON = { key: 0 }, kN = { class: "ml-auto flex items-center gap-1" }, AN = {
		key: 1,
		class: "flex flex-wrap items-center gap-3 rounded-lg bg-primary-600/10 px-3 py-2 text-xs"
	}, jN = { class: "ml-auto flex items-center gap-2" }, MN = {
		key: 2,
		class: "min-h-figure"
	}, NN = { key: 3 }, PN = { class: "text-sm" }, FN = {
		key: 0,
		class: "flex flex-col gap-4"
	}, IN = { class: "text-sm text-muted" }, LN = { key: 0 }, RN = /*@__PURE__*/ f({
		__name: "DocsView",
		props: { repo: {} },
		setup(e) {
			let t = Me(), n = i(() => t.workspace.repos().map((e) => e.repo)), l = i(() => n.value.map((e) => ({
				value: e,
				label: e,
				mono: !0
			}))), f = i(() => t.route.query()), p = ne(rN()), m = i(() => e.repo ?? f.value.repo ?? aN(n.value, p.value, (e) => Qj(e) !== void 0)), ie = i(() => m.value === "" ? "the workspace root" : m.value), oe = i(() => f.value.doc);
			ae(() => f.value.repo, (t) => {
				e.repo === void 0 && t !== void 0 && (p.value = t, iN(t));
			}, { immediate: !0 }), e.repo === void 0 && p.value === void 0 && Zj();
			let se = (e) => t.route.setQuery({ doc: e }, { push: !0 }), ce = (e) => t.route.setQuery({
				repo: e,
				doc: void 0
			}), le = ne("published"), de = [{
				label: "Published",
				value: "published",
				title: "Committed in the repository"
			}, {
				label: "Draft",
				value: "staged",
				title: "Generated, not yet published"
			}], { set: pe, isLoading: _e, hasStaged: xe, usePackage: Ce, refresh: Te } = sN(m, le), De = Ee(_e, m), { rows: Oe, start: ke, advance: b, stop: Ae } = xN(m), { preflight: je, publish: Ne, discard: Pe } = uN(), Fe = ne(void 0);
			ae([xe, m], ([e, t]) => {
				e && Fe.value !== t && (Fe.value = t, le.value = "staged");
			}, { immediate: !0 }), ae([
				le,
				m,
				xe
			], ([e, t, n]) => {
				e === "staged" && n && Mj(t);
			});
			let Ie = Ce(oe), Le = i(() => pe.value?.index), Re = i(() => Le.value?.entries ?? []), ze = i(() => Oe.value.find((e) => e.running));
			ae(() => [Oe.value.map((e) => `${e.manifest.runId}:${e.mapDone}:${e.done}`).join("|")], () => void b());
			let Be = ne(!1), x = ne(void 0), S = ne(!1), Ve = async () => {
				x.value = await je(m.value);
			}, He = async () => {
				let e = x.value;
				if (e !== void 0) {
					S.value = !0;
					try {
						await Ne(m.value, e.tails), x.value = void 0, le.value = "published", Fe.value = void 0, Te();
					} finally {
						S.value = !1;
					}
				}
			}, Ue = (e, t) => {
				ke({
					repo: m.value,
					label: ie.value,
					...e.length === 0 ? {} : { packages: e },
					...t === void 0 ? {} : { pick: {
						agent: t.provider,
						model: t.model,
						...t.effort === void 0 ? {} : { effort: t.effort }
					} }
				});
			}, We = (e) => Se(t.href(`/agents/${e}`), () => t.chat.openAgent(e));
			return (t, i) => (h(), a(_(be), {
				title: "Documentation",
				scroll: "page",
				"scroll-key": `${m.value}/${oe.value ?? ""}`,
				mobile: "swap",
				"detail-open": oe.value !== void 0
			}, {
				actions: v(() => [
					e.repo === void 0 && n.value.length > 1 ? (h(), a(_(ge), {
						key: 0,
						"model-value": m.value,
						options: l.value,
						variant: "ghost",
						"aria-label": "Repository",
						placeholder: "Repository",
						"onUpdate:modelValue": i[0] ||= (e) => e !== void 0 && ce(e)
					}, null, 8, ["model-value", "options"])) : o("", !0),
					_(xe) ? (h(), a(_(ye), {
						key: 1,
						modelValue: le.value,
						"onUpdate:modelValue": i[1] ||= (e) => le.value = e,
						options: de
					}, null, 8, ["modelValue"])) : o("", !0),
					d(_(he), {
						icon: "sparkles",
						label: "Generate",
						primary: "",
						onClick: i[2] ||= (e) => Be.value = !0
					})
				]),
				strips: v(() => [ze.value === void 0 ? o("", !0) : (h(), s("div", EN, [
					d(_(ue), {
						name: "spinner",
						spin: "",
						class: "shrink-0 text-link"
					}),
					c("span", DN, [
						u(g(ze.value.mapDone ? "Documenting packages" : "Reading the repository and drawing its map") + " : " + g(ze.value.done), 1),
						ze.value.total === void 0 ? o("", !0) : (h(), s("span", ON, " of " + g(ze.value.total), 1)),
						i[10] ||= u(" written ", -1)
					]),
					c("div", kN, [(h(!0), s(r, null, re(ze.value.agents.slice(0, 6), (e) => (h(), a(_(y), ee({
						key: e.id,
						size: "small",
						severity: "secondary",
						text: "",
						label: e.id.split("-").slice(2).join("-") || "map",
						as: "a"
					}, { ref_for: !0 }, We(e.id)), null, 16, ["label"]))), 128)), d(_(y), {
						size: "small",
						severity: "secondary",
						label: "Stop",
						onClick: i[3] ||= (e) => _(Ae)(ze.value.manifest.runId)
					})])
				])), le.value === "staged" && _(xe) ? (h(), s("div", AN, [
					d(_(ue), {
						name: "file-edit",
						class: "shrink-0 text-link"
					}),
					i[11] ||= c("span", { class: "text-content" }, "This is a draft. Nothing is in the repository until you publish it.", -1),
					c("div", jN, [d(_(y), {
						size: "small",
						severity: "secondary",
						text: "",
						label: "Discard",
						onClick: i[4] ||= (e) => _(Pe)(m.value).then(() => le.value = "published")
					}), d(_(y), {
						size: "small",
						label: `Publish to ${ie.value}`,
						onClick: Ve
					}, null, 8, ["label"])])
				])) : o("", !0)]),
				rail: v(() => [d(lM, {
					components: _(pe)?.repoDoc?.components ?? [],
					index: Le.value,
					page: oe.value,
					onOpen: se
				}, null, 8, [
					"components",
					"index",
					"page"
				])]),
				detail: v(({ compact: e }) => [e && oe.value !== void 0 ? (h(), s("button", {
					key: 0,
					type: "button",
					class: te(_(we).textAction("mb-2 shrink-0")),
					onClick: i[5] ||= (e) => se(void 0)
				}, [d(_(ue), {
					name: "arrow-left",
					class: "text-2xs"
				}), i[12] ||= u(" Contents ", -1)], 2)) : o("", !0), _(_e) && _(De) ? (h(), a(NM, { key: 1 })) : _(_e) ? (h(), s("div", MN)) : _(pe)?.repoDoc === void 0 && _(pe)?.prose === void 0 ? (h(), s("div", NN, [c("div", { class: te(_(we).emptyState()) }, [
					c("p", PN, g(ie.value) + " has no documentation yet.", 1),
					i[13] ||= c("p", { class: "mt-1 text-xs text-muted" }, " One agent will map the repository: its components, its vocabulary, what to read first, and then a further agent documents each package. You review the result before anything is committed. ", -1),
					d(_(y), {
						size: "small",
						label: "Generate documentation",
						class: "mt-3",
						onClick: i[6] ||= (e) => Be.value = !0
					})
				], 2)])) : (h(), a(_(ve), {
					key: oe.value ?? "overview",
					scroll: !1
				}, {
					default: v(() => [oe.value === void 0 ? (h(), a(EM, {
						key: 0,
						class: "px-6 py-5",
						prose: _(pe)?.prose,
						anchors: [],
						provenance: _(pe)?.repoDoc?.provenance,
						repo: m.value,
						staleness: void 0
					}, null, 8, [
						"prose",
						"provenance",
						"repo"
					])) : (h(), a(EM, {
						key: 1,
						class: "px-6 py-5",
						prose: _(Ie).data.value,
						figures: _(HM)(oe.value, Le.value, _(pe)?.repoDoc),
						anchors: Re.value.find((e) => e.dir === oe.value)?.anchors ?? [],
						repo: m.value,
						staleness: Re.value.find((e) => e.dir === oe.value)
					}, null, 8, [
						"prose",
						"figures",
						"anchors",
						"repo",
						"staleness"
					]))]),
					_: 1
				}))]),
				default: v(() => [d(eN, {
					modelValue: Be.value,
					"onUpdate:modelValue": i[7] ||= (e) => Be.value = e,
					label: ie.value,
					packages: [...Re.value.map((e) => e.dir), ...Le.value?.undocumented ?? []].sort(),
					index: Le.value,
					onStart: Ue
				}, null, 8, [
					"modelValue",
					"label",
					"packages",
					"index"
				]), d(_(fe), {
					open: x.value !== void 0,
					size: "sm",
					header: `Publish to ${ie.value}`,
					"onUpdate:open": i[9] ||= (e) => !S.value && (x.value = void 0)
				}, {
					footer: v(() => [d(_(y), {
						severity: "secondary",
						text: "",
						label: "Cancel",
						disabled: S.value,
						onClick: i[8] ||= (e) => x.value = void 0
					}, null, 8, ["disabled"]), d(_(y), {
						label: S.value ? "Publishing…" : "Publish",
						disabled: S.value,
						onClick: He
					}, null, 8, ["label", "disabled"])]),
					default: v(() => [x.value === void 0 ? o("", !0) : (h(), s("div", FN, [c("p", IN, [
						u(g(x.value.tails.length) + " file" + g(x.value.tails.length === 1 ? "" : "s") + " will be written, each package's ", 1),
						i[14] ||= c("span", { class: "font-mono" }, "README.md", -1),
						i[15] ||= u(" and the map under ", -1),
						i[16] ||= c("span", { class: "font-mono" }, "docs/architecture/", -1),
						i[17] ||= u(", and committed", -1),
						x.value.branch === "" ? o("", !0) : (h(), s("span", LN, " on " + g(x.value.branch), 1)),
						i[18] ||= u(". ", -1)
					]), x.value.foreign.length > 0 ? (h(), a(_(me), {
						key: 0,
						tone: "warning"
					}, {
						default: v(() => [u(" This repository has " + g(x.value.foreign.length) + " other changed file" + g(x.value.foreign.length === 1 ? "" : "s") + ". Any of them you have already staged will be included in this commit. ", 1)]),
						_: 1
					})) : o("", !0)]))]),
					_: 1
				}, 8, ["open", "header"])]),
				_: 1
			}, 8, ["scroll-key", "detail-open"]));
		}
	});
})), BN = /* @__PURE__ */ Ae({ default: () => VN }), VN, HN = b((() => {
	zN(), zN(), VN = RN;
})), UN, WN, GN, KN, qN, JN, YN, XN, ZN, QN = b((() => {
	DM(), PM(), UM(), Ne(), Cj(), lN(), UN = { class: "flex h-full min-h-0 flex-col overflow-hidden" }, WN = { class: "flex h-8 shrink-0 items-center gap-2 border-b border-line-subtle px-3" }, GN = { class: "min-w-0 truncate font-mono text-2xs text-muted" }, KN = { class: "ml-auto flex shrink-0 items-center gap-2" }, qN = {
		key: 1,
		class: "min-h-0 flex-1"
	}, JN = {
		key: 2,
		class: "min-h-0 flex-1 overflow-y-auto p-6"
	}, YN = { class: "text-sm" }, XN = {
		key: 3,
		class: "ui-softscroll min-h-0 flex-1 overflow-y-auto bg-canvas px-6 py-5"
	}, ZN = /*@__PURE__*/ f({
		__name: "DocTab",
		props: { path: {} },
		setup(e) {
			let t = Me(), n = i(() => sj(e.path, t.workspace.repos().map((e) => e.repo))), r = i(() => n.value?.repo ?? ""), l = i(() => n.value === void 0 || n.value.dir === "" ? void 0 : n.value.dir), u = i(() => e.path === "" ? "the workspace root" : e.path), f = ne("published"), p = [{
				label: "Published",
				value: "published",
				title: "Committed in the repository"
			}, {
				label: "Draft",
				value: "staged",
				title: "Generated, not yet published"
			}], { set: m, isLoading: re, hasStaged: ie, usePackage: v } = sN(r, f), oe = Ee(re, i(() => `${r.value}:${l.value ?? ""}`)), se = v(l);
			ae([
				ie,
				m,
				se.data
			], ([e, t, n]) => {
				let r = l.value === void 0 ? t?.prose !== void 0 : n !== void 0;
				e && !r && f.value === "published" && (f.value = "staged");
			});
			let ce = i(() => m.value?.index?.entries ?? []), le = i(() => ce.value.find((e) => e.dir === l.value)), de = i(() => {
				let e = `/ext/documentation?repo=${encodeURIComponent(r.value)}${l.value === void 0 ? "" : `&doc=${encodeURIComponent(l.value)}`}`;
				return Se(t.href(e), () => t.navigate(e));
			});
			return (e, t) => (h(), s("div", UN, [c("div", WN, [
				d(_(ue), {
					name: "question-circle",
					class: "shrink-0 text-2xs text-subtle"
				}),
				c("span", GN, g(u.value), 1),
				c("div", KN, [_(ie) ? (h(), a(_(ye), {
					key: 0,
					modelValue: f.value,
					"onUpdate:modelValue": t[0] ||= (e) => f.value = e,
					options: p,
					size: "xs"
				}, null, 8, ["modelValue"])) : o("", !0), d(_(y), ee({
					size: "small",
					severity: "secondary",
					text: "",
					label: "All documentation",
					as: "a"
				}, de.value), null, 16)])
			]), _(re) && _(oe) ? (h(), a(NM, { key: 0 })) : _(re) ? (h(), s("div", qN)) : (l.value === void 0 ? _(m)?.prose === void 0 : _(se).data.value === void 0) ? (h(), s("div", JN, [c("div", { class: te(_(we).emptyState()) }, [
				c("p", YN, g(u.value) + " has no documentation yet.", 1),
				t[1] ||= c("p", { class: "mt-1 text-xs text-muted" }, "An agent can read this directory and write a plain-language page about it, for you to review.", -1),
				d(_(y), ee({
					size: "small",
					label: "Open Documentation",
					class: "mt-3",
					as: "a"
				}, de.value), null, 16)
			], 2)])) : (h(), s("div", XN, [l.value === void 0 ? (h(), a(EM, {
				key: "overview",
				class: "mx-auto max-w-3xl",
				prose: _(m)?.prose,
				anchors: [],
				provenance: _(m)?.repoDoc?.provenance,
				repo: r.value,
				staleness: void 0
			}, null, 8, [
				"prose",
				"provenance",
				"repo"
			])) : (h(), a(EM, {
				key: l.value,
				class: "mx-auto max-w-3xl",
				prose: _(se).data.value,
				figures: _(HM)(l.value, _(m)?.index, _(m)?.repoDoc),
				anchors: le.value?.anchors ?? [],
				repo: r.value,
				staleness: le.value
			}, null, 8, [
				"prose",
				"figures",
				"anchors",
				"repo",
				"staleness"
			]))]))]));
		}
	});
})), $N = /* @__PURE__ */ Ae({ default: () => eP }), eP, tP = b((() => {
	QN(), QN(), eP = ZN;
}));
Nj(), $j(), Ne();
var nP = (e, t) => {
	je(e), t.subscriptions.push(Aj()), t.subscriptions.push(e.views.register({
		id: "documentation",
		label: "Documentation",
		surface: "rail",
		detect: (e) => e.length > 0 ? [{
			key: "documentation",
			title: "Documentation",
			icon: "question-circle"
		}] : [],
		badge: () => jj(),
		view: async () => (await Promise.resolve().then(() => (HN(), BN))).default
	})), t.subscriptions.push(e.views.register({
		id: "documentation-repo",
		label: "Docs",
		surface: "directory",
		auxiliary: !0,
		detect: (e) => e.map((e) => ({
			key: e.repo,
			title: "Docs",
			repo: e.repo
		})),
		view: async () => (await Promise.resolve().then(() => (HN(), BN))).default
	})), t.subscriptions.push(Xj()), t.subscriptions.push(e.documents.register({
		id: "architecture",
		detect: (t) => {
			if (e.workspace.repos().some((e) => e.repo === t)) return;
			let n = Qj(t);
			if (n === void 0) return;
			let r = n.draft ? " (draft)" : "";
			return {
				icon: "question-circle",
				tooltip: n.oneLiner === "" ? `Open architecture doc${r}` : `${n.oneLiner}${r}`,
				title: "Architecture",
				evidence: !0
			};
		},
		view: async () => (await Promise.resolve().then(() => (tP(), $N))).default
	})), t.subscriptions.push(e.commands.register("documentation.generate", () => {
		e.navigate("/ext/documentation");
	}));
}, rP = {
	$schema: "https://intentic.dev/intentic-extension.schema.json",
	publisher: "intentic",
	name: "documentation",
	version: "1.0.0",
	category: "knowledge",
	icon: "question-circle",
	engines: { intentic: "^2.0.0" },
	entry: "dist/extension.js",
	permissions: { sandbox: [
		"GET /workspace/children",
		"GET /workspace/file",
		"POST /workspace/upload",
		"DELETE /workspace/entry",
		"GET /panels",
		"POST /agent",
		"POST /agent/stop",
		"GET /agents",
		"GET /git/*/status",
		"PUT /git/*/file",
		"POST /git/*/stage",
		"POST /git/*/commit"
	] },
	contributes: {
		views: [{
			id: "documentation",
			label: "Documentation",
			surface: "rail",
			badge: !0
		}, {
			id: "documentation-repo",
			label: "Docs",
			surface: "directory"
		}],
		documents: [{
			id: "architecture",
			label: "Architecture"
		}],
		files: [{
			path: ".intentic/config/docs/",
			invalidates: ["documentation", "documentation-runs"]
		}],
		commands: [{
			command: "documentation.generate",
			title: "Generate documentation"
		}],
		bin: "bin",
		agent: { path: "plugin" }
	}
};
//#endregion
//#region src/manifest.ts
WS();
var iP = zS.parse(rP);
//#endregion
export { nP as activate, iP as manifest };
