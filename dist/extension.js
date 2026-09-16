import { hostSlot as e, sandboxLedger as t, sandboxPoll as n } from "@intentic/extension-api";
import { ExtensionManifestSchema as r } from "@intentic/extension-manifest";
import { Fragment as i, computed as a, createBlock as o, createCommentVNode as s, createElementBlock as c, createElementVNode as l, createSlots as u, createTextVNode as d, createVNode as f, defineComponent as p, mergeModels as m, mergeProps as ee, nextTick as te, normalizeClass as ne, openBlock as h, ref as re, renderList as ie, toDisplayString as g, unref as _, useModel as ae, watch as oe, withCtx as v, withKeys as se, withModifiers as ce } from "vue";
import { AgentRunButton as le, Button as ue, Checkbox as de, Icon as fe, Markdown as pe, Modal as me, NavRail as he, PageAction as ge, Picker as _e, Row as ve, ScrollFrame as ye, SegmentedControl as be, SplitView as xe, StatusBadge as Se, appLink as Ce, timeAgo as we, ui as Te, useAgentRunPick as Ee, useLoadingReveal as De } from "@intentic/extension-ui";
import { useQuery as Oe, useQueryClient as ke } from "@tanstack/vue-query";
//#region \0rolldown/runtime.js
var Ae = Object.defineProperty, y = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, je = (e, t) => {
	let n = {};
	for (var r in e) Ae(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || Ae(n, Symbol.toStringTag, { value: "Module" }), n;
}, Me, Ne, Pe = y((() => {
	({bindHost: Me, host: Ne} = e("ext-documentation"));
}));
//#endregion
//#region ../../../tmp/extbuild/documentation/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/util.js
function Fe(e) {
	let t = Object.values(e).filter((e) => typeof e == "number");
	return Object.entries(e).filter(([e, n]) => t.indexOf(+e) === -1).map(([e, t]) => t);
}
function Ie(e, t = "|") {
	return e.map((e) => Xe(e)).join(t);
}
function Le(e, t) {
	return typeof t == "bigint" ? t.toString() : t;
}
function Re(e) {
	return { get value() {
		{
			let t = e();
			return Object.defineProperty(this, "value", { value: t }), t;
		}
	} };
}
function ze(e) {
	return e == null;
}
function b(e) {
	let t = +!!e.startsWith("^"), n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
function Be(e, t) {
	let n = e / t, r = Math.round(n), i = 4 * 2 ** -52 * Math.max(Math.abs(n), 1);
	return Math.abs(n - r) < i ? 0 : n - r;
}
function Ve(e, t, n) {
	let r;
	Object.defineProperty(e, t, {
		get() {
			if (r !== St) return r === void 0 && (r = St, r = n()), r;
		},
		set(n) {
			Object.defineProperty(e, t, { value: n });
		},
		configurable: !0
	});
}
function x(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function He(...e) {
	let t = {};
	for (let n of e) {
		let e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function Ue(e) {
	return JSON.stringify(e);
}
function We(e) {
	return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
function Ge(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function Ke(e) {
	if (Ge(e) === !1) return !1;
	let t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	let n = t.prototype;
	return Ge(n) !== !1 && Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") !== !1;
}
function qe(e) {
	return Ke(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
function Je(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Ye(e, t, n) {
	let r = new e._zod.constr(t ?? e._zod.def);
	return (!t || n?.parent) && (r._zod.parent = e), r;
}
function S(e) {
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
function Xe(e) {
	return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function Ze(e) {
	return Object.keys(e).filter((t) => e[t]._zod.optin !== void 0 && e[t]._zod.optout === "optional");
}
function Qe(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
	return Ye(e, He(e._zod.def, {
		get shape() {
			let e = {};
			for (let r of Reflect.ownKeys(t)) {
				if (!Object.prototype.hasOwnProperty.call(n.shape, r)) throw Error(`Unrecognized key: "${String(r)}"`);
				t[r] && x(e, r, n.shape[r]);
			}
			return x(this, "shape", e), e;
		},
		checks: []
	}));
}
function $e(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
	return Ye(e, He(e._zod.def, {
		get shape() {
			let r = { ...e._zod.def.shape };
			for (let e of Reflect.ownKeys(t)) {
				if (!Object.prototype.hasOwnProperty.call(n.shape, e)) throw Error(`Unrecognized key: "${String(e)}"`);
				t[e] && delete r[e];
			}
			return x(this, "shape", r), r;
		},
		checks: []
	}));
}
function et(e, t) {
	if (!Ke(t)) throw Error("Invalid input to extend: expected a plain object");
	let n = e._zod.def.checks;
	if (n && n.length > 0) {
		let n = e._zod.def.shape;
		for (let e of Reflect.ownKeys(t)) if (Object.getOwnPropertyDescriptor(n, e) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return Ye(e, He(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return x(this, "shape", n), n;
	} }));
}
function tt(e, t) {
	if (!Ke(t)) throw Error("Invalid input to safeExtend: expected a plain object");
	return Ye(e, He(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return x(this, "shape", n), n;
	} }));
}
function nt(e, t) {
	if (!t?._zod?.def) throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
	if (e._zod.def.checks?.length) throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	return Ye(e, He(e._zod.def, {
		get shape() {
			let n = {
				...e._zod.def.shape,
				...t._zod.def.shape
			};
			return x(this, "shape", n), n;
		},
		get catchall() {
			return t._zod.def.catchall;
		},
		checks: t._zod.def.checks ?? []
	}));
}
function rt(e, t, n, r = "partial") {
	let i = t._zod.def.checks;
	if (i && i.length > 0) throw Error(`.${r}() cannot be used on object schemas containing refinements`);
	return Ye(t, He(t._zod.def, {
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
			return x(this, "shape", i), i;
		},
		checks: []
	}));
}
function it(e, t, n) {
	return Ye(t, He(t._zod.def, { get shape() {
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
		return x(this, "shape", i), i;
	} }));
}
function at(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
	return !1;
}
function ot(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0;
	return !1;
}
function st(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function ct(e) {
	return typeof e == "string" ? e : e?.message;
}
function lt(e, t, n) {
	var r;
	for (let i = t; i < e.length; i++) (r = e[i]).schema ?? (r.schema = n);
}
function ut(e, t, n) {
	var r;
	let i = e.inst?._zod?.traits;
	i?.has("$ZodType") && (i.has("$ZodCheck") ? (r = e).schema ?? (r.schema = e.inst) : e.schema = e.inst);
	let a = e.schema === e.inst ? void 0 : e.schema?._zod.def?.error, o = e.message ? e.message : ct(e.inst?._zod.def?.error?.(e)) ?? ct(a?.(e)) ?? ct(t?.error?.(e)) ?? ct(n.customError?.(e)) ?? ct(n.localeError?.(e)) ?? "Invalid input", { inst: s, schema: c, continue: l, input: u, ...d } = e;
	return d.path ??= [], d.message = o, t?.reportInput && (d.input = u), d;
}
function dt(e) {
	let t = e.length;
	if (!Dt.test(e)) return t;
	let n = t;
	for (let r = 0; r < t - 1; r++) (e.charCodeAt(r) & 64512) == 55296 && (e.charCodeAt(r + 1) & 64512) == 56320 && (n--, r++);
	return n;
}
function ft(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function pt(e) {
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
function mt(...e) {
	let [t, n, r] = e;
	return typeof t == "string" ? {
		message: t,
		code: "custom",
		input: n,
		inst: r
	} : { ...t };
}
function ht(e, t) {
	for (let n in t) {
		let r = Object.getOwnPropertyDescriptor(t, n);
		r.get ? Object.defineProperty(e, n, {
			...r,
			enumerable: !1
		}) : vt(e, n, r.value);
	}
}
function gt(e, t, n, r = !0) {
	return Object.defineProperty(e, t, {
		configurable: !0,
		writable: !0,
		enumerable: r,
		value: n
	}), n;
}
function _t(e, t, n) {
	return gt(e, t, n, !1);
}
function vt(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		get() {
			return this == null ? n : gt(this, t, n.bind(this));
		},
		set(e) {
			gt(this, t, e);
		}
	});
}
function yt(e, t) {
	let n = Object.getPrototypeOf(e);
	return t in n ? void 0 : n;
}
function C(e, t, n) {
	let r = Object.getPrototypeOf(e._zod);
	if (t in r && Ot !== e._zod) {
		Ot = void 0;
		return;
	}
	Ot = e._zod, Object.defineProperty(r, t, {
		configurable: !0,
		get() {
			Object.defineProperty(this, t, At);
			let e = kt;
			kt = !1;
			try {
				let r = n(this);
				return kt ? delete this[t] : Object.defineProperty(this, t, {
					configurable: !0,
					writable: !0,
					value: r
				}), kt ||= e, r;
			} catch (n) {
				throw delete this[t], kt ||= e, n;
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
function bt(e, t, n, r) {
	let i = yt(e, t);
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
function xt(e) {
	let t = () => e;
	return t[jt] = !0, t;
}
var St, Ct, wt, Tt, Et, Dt, Ot, kt, At, jt, Mt = y((() => {
	Vt(), St = /* @__PURE__*/ Symbol("evaluating"), Ct = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {}, wt = /* @__PURE__*/ Re(() => {
		if (Bt.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
		try {
			return Function(""), !0;
		} catch {
			return !1;
		}
	}), Tt = /* @__PURE__*/ new Set([
		"string",
		"number",
		"symbol"
	]), Et = {
		safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
		int32: [-2147483648, 2147483647],
		uint32: [0, 4294967295],
		float32: [-34028234663852886e22, 34028234663852886e22],
		float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
	}, Dt = /[\uD800-\uDBFF]/, kt = !1, At = {
		configurable: !0,
		get() {
			kt = !0;
		}
	}, jt = "~constantCatch";
}));
//#endregion
//#region ../../../tmp/extbuild/documentation/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/core.js
function Nt(e) {
	let t = Lt;
	if (t) {
		let n = t.stackTraceLimit;
		if (typeof n == "number") {
			try {
				t.stackTraceLimit = 0;
			} catch {
				return Lt = null, new e();
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
function w(e, t, n, r) {
	let i = {};
	function a(e) {
		this.def = e, this.constr = d, this.traits = /* @__PURE__ */ new Set();
	}
	a.prototype = i;
	let o = n, s = o && /* @__PURE__ */ new WeakSet();
	function c(n, r) {
		if (!n._zod) {
			It.value = new a(r);
			try {
				Object.defineProperty(n, "_zod", It);
			} finally {
				It.value = void 0;
			}
		}
		if (n._zod.traits.has(e)) return;
		if (n._zod.traits.add(e), t(n, r), s) {
			let e = Object.getPrototypeOf(n), t = n._zod.constr.prototype, r = e;
			for (; r && r !== t;) r = Object.getPrototypeOf(r);
			let i = r ?? e;
			s.has(i) || (s.add(i), ht(i, o));
		}
		let i = d.prototype;
		for (let e in i) Object.prototype.hasOwnProperty.call(i, e) && (e in n || (n[e] = i[e].bind(n)));
	}
	let l = r?.Parent ?? Object;
	class u extends l {}
	Object.defineProperty(u, "name", { value: e });
	function d(e) {
		let t = r?.Parent ? Nt(u) : this;
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
function Pt(e) {
	return e && Object.assign(Bt, e), Bt;
}
var Ft, It, Lt, Rt, zt, Bt, Vt = y((() => {
	Mt(), It = {
		value: void 0,
		enumerable: !1
	}, Lt = "captureStackTrace" in Error ? Error : null, Rt = class extends Error {
		constructor() {
			super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
		}
	}, zt = class extends Error {
		constructor(e) {
			super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
		}
	}, (Ft = globalThis).__zod_globalConfig ?? (Ft.__zod_globalConfig = {}), Bt = globalThis.__zod_globalConfig;
}));
//#endregion
//#region ../../../tmp/extbuild/documentation/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/errors.js
function Ht() {
	let e = this._zod;
	return e.message ??= JSON.stringify(e.def, Le, 2), e.message;
}
function Ut(e) {
	this._zod.message = e;
}
function Wt(e, t, n) {
	return Object.prototype.hasOwnProperty.call(e, t) || (t === "__proto__" ? Object.defineProperty(e, t, {
		value: n(),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : e[t] = n()), e[t];
}
function Gt(e, t = (e) => e.message) {
	let n = {}, r = [];
	for (let i of e.issues) i.path.length > 0 ? Wt(n, i.path[0], () => []).push(t(i)) : r.push(t(i));
	return {
		formErrors: r,
		fieldErrors: n
	};
}
function Kt(e, t = (e) => e.message) {
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
var qt, Jt, Yt, Xt, Zt, Qt, $t, en = y((() => {
	Vt(), Mt(), qt = {
		get: Ht,
		set: Ut,
		enumerable: !0,
		configurable: !0
	}, Jt = {
		value: void 0,
		enumerable: !1
	}, Yt = {
		value: void 0,
		enumerable: !1
	}, Xt = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), Zt = (e, t) => {
		e.name = "$ZodError", Jt.value = e._zod, Object.defineProperty(e, "_zod", Jt), Yt.value = t, Object.defineProperty(e, "issues", Yt), Jt.value = void 0, Yt.value = void 0, Object.defineProperty(e, "message", qt);
		let n = Object.getPrototypeOf(e);
		Xt.has(n) || (Xt.add(n), Object.defineProperty(n, "toString", {
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
	}, Qt = w("$ZodError", Zt), $t = w("$ZodError", Zt, void 0, { Parent: Error });
}));
//#endregion
//#region ../../../tmp/extbuild/documentation/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/parse.js
function tn(e, t) {
	return {
		callee: t?.callee ?? e,
		Err: t?.Err
	};
}
var nn, rn, an, on, sn, cn, ln, un, dn, fn, pn, mn, hn, gn, _n = y((() => {
	Vt(), en(), Mt(), nn = (e) => {
		let t = (n, r, i, a) => {
			let o = i ? {
				...i,
				async: !1
			} : { async: !1 }, s = n._zod.run({
				value: r,
				issues: []
			}, o);
			if (s instanceof Promise) throw new Rt();
			if (s.issues.length) {
				let n = new ((a?.Err) ?? e)(s.issues.map((e) => ut(e, o, Pt())));
				throw Ct(n, a?.callee ?? t), n;
			}
			return s.value;
		};
		return t;
	}, rn = (e) => {
		let t = async (n, r, i, a) => {
			let o = i ? {
				...i,
				async: !0
			} : { async: !0 }, s = n._zod.run({
				value: r,
				issues: []
			}, o);
			if (s instanceof Promise && (s = await s), s.issues.length) {
				let n = new ((a?.Err) ?? e)(s.issues.map((e) => ut(e, o, Pt())));
				throw Ct(n, a?.callee ?? t), n;
			}
			return s.value;
		};
		return t;
	}, an = (e) => (t, n, r) => {
		let i = r ? {
			...r,
			async: !1
		} : { async: !1 }, a = t._zod.run({
			value: n,
			issues: []
		}, i);
		if (a instanceof Promise) throw new Rt();
		return a.issues.length ? {
			success: !1,
			error: new (e ?? Qt)(a.issues.map((e) => ut(e, i, Pt())))
		} : {
			success: !0,
			data: a.value
		};
	}, on = /* @__PURE__*/ an($t), sn = (e) => async (t, n, r) => {
		let i = r ? {
			...r,
			async: !0
		} : { async: !0 }, a = t._zod.run({
			value: n,
			issues: []
		}, i);
		return a instanceof Promise && (a = await a), a.issues.length ? {
			success: !1,
			error: new e(a.issues.map((e) => ut(e, i, Pt())))
		} : {
			success: !0,
			data: a.value
		};
	}, cn = /* @__PURE__*/ sn($t), ln = (e) => {
		let t = nn(e), n = (e, r, i, a) => {
			let o = i ? {
				...i,
				direction: "backward"
			} : { direction: "backward" };
			return t(e, r, o, tn(n, a));
		};
		return n;
	}, un = (e) => {
		let t = nn(e), n = (e, r, i, a) => t(e, r, i, tn(n, a));
		return n;
	}, dn = (e) => {
		let t = rn(e), n = async (e, r, i, a) => {
			let o = i ? {
				...i,
				direction: "backward"
			} : { direction: "backward" };
			return await t(e, r, o, tn(n, a));
		};
		return n;
	}, fn = (e) => {
		let t = rn(e), n = async (e, r, i, a) => await t(e, r, i, tn(n, a));
		return n;
	}, pn = (e) => (t, n, r) => {
		let i = r ? {
			...r,
			direction: "backward"
		} : { direction: "backward" };
		return an(e)(t, n, i);
	}, mn = (e) => (t, n, r) => an(e)(t, n, r), hn = (e) => async (t, n, r) => {
		let i = r ? {
			...r,
			direction: "backward"
		} : { direction: "backward" };
		return sn(e)(t, n, i);
	}, gn = (e) => async (t, n, r) => sn(e)(t, n, r);
}));
//#endregion
//#region ../../../tmp/extbuild/documentation/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/regexes.js
function vn(e) {
	return RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
}
function yn() {
	return new RegExp(Pn, "u");
}
function bn(e) {
	return RegExp(`^${e}$`);
}
function xn(e) {
	let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : e.seconds ? `${t}:[0-5]\\d(?:\\.\\d+)?` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Sn(e) {
	return RegExp(`^${xn(e)}$`);
}
function Cn(e) {
	let t = ["Z"];
	e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let n = `${xn({
		precision: e.precision,
		seconds: !0
	})}(?:${t.join("|")})`, r = e.local ? `${n}|${xn({ precision: e.precision })}` : n;
	return RegExp(`^${Un}T(?:${r})$`);
}
var wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, Jn, Yn, Xn, Zn = y((() => {
	wn = /^[cC][0-9a-z]{6,}$/, Tn = /^[0-9a-z]+$/, En = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, Dn = /^[0-9a-vA-V]{20}$/, On = /^[A-Za-z0-9]{27}$/, kn = /^[a-zA-Z0-9_-]{21}$/, An = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, jn = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Mn = (e) => e ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Nn = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Pn = "^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$", Fn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, In = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Ln = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Rn = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, zn = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Bn = /^[A-Za-z0-9_-]*$/, Vn = /^https?$/, Hn = /^\+[1-9]\d{6,14}$/, Un = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Wn = /*@__PURE__*/ bn(Un), Gn = (e) => {
		let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
		return RegExp(`^${t}$`);
	}, Kn = /^-?\d+$/, qn = /^-?\d+(?:\.\d+)?$/, Jn = /^(?:true|false)$/i, Yn = /^[^A-Z]*$/, Xn = /^[^a-z]*$/;
})), T, Qn, $n, er, tr, nr, rr, ir, ar, or, sr, cr, lr, ur, dr, fr, pr, mr, hr = y((() => {
	Vt(), Zn(), Mt(), T = /*@__PURE__*/ w("$ZodCheck", (e, t) => {
		var n;
		e._zod ??= {}, e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
	}), Qn = (e) => {
		let t = e.value;
		return !ze(t) && t.length !== void 0;
	}, $n = {
		number: "number",
		bigint: "bigint",
		object: "date"
	}, er = /*@__PURE__*/ w("$ZodCheckLessThan", (e, t) => {
		T.init(e, t);
		let n = $n[typeof t.value];
		e._zod.onattach.push((e) => {
			let n = e._zod.bag, r = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? Infinity;
			t.value < r && (t.inclusive ? n.maximum = t.value : n.exclusiveMaximum = t.value);
		}), e._zod.check = (r) => {
			(t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({
				origin: $n[typeof r.value] ?? n,
				code: "too_big",
				maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
				input: r.value,
				inclusive: t.inclusive,
				inst: e,
				continue: !t.abort
			});
		};
	}), tr = /*@__PURE__*/ w("$ZodCheckGreaterThan", (e, t) => {
		T.init(e, t);
		let n = $n[typeof t.value];
		e._zod.onattach.push((e) => {
			let n = e._zod.bag, r = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? -Infinity;
			t.value > r && (t.inclusive ? n.minimum = t.value : n.exclusiveMinimum = t.value);
		}), e._zod.check = (r) => {
			(t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({
				origin: $n[typeof r.value] ?? n,
				code: "too_small",
				minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
				input: r.value,
				inclusive: t.inclusive,
				inst: e,
				continue: !t.abort
			});
		};
	}), nr = /*@__PURE__*/ w("$ZodCheckMultipleOf", (e, t) => {
		T.init(e, t), e._zod.onattach.push((e) => {
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
	}), rr = /*@__PURE__*/ w("$ZodCheckNumberFormat", (e, t) => {
		T.init(e, t), t.format = t.format || "float64";
		let n = t.format?.includes("int"), r = n ? "int" : "number", [i, a] = Et[t.format];
		e._zod.onattach.push((e) => {
			let r = e._zod.bag;
			r.format = t.format, r.minimum = i, r.maximum = a, n && (r.pattern = Kn);
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
	}), ir = /*@__PURE__*/ w("$ZodCheckMaxLength", (e, t) => {
		var n;
		T.init(e, t), (n = e._zod.def).when ?? (n.when = Qn), e._zod.onattach.push((e) => {
			let n = e._zod.bag.maximum ?? Infinity;
			t.maximum < n && (e._zod.bag.maximum = t.maximum);
		}), e._zod.check = (n) => {
			let r = n.value, i = r.length;
			if ((typeof r == "string" && i > t.maximum ? dt(r) : i) <= t.maximum) return;
			let a = ft(r);
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
	}), ar = /*@__PURE__*/ w("$ZodCheckMinLength", (e, t) => {
		var n;
		T.init(e, t), (n = e._zod.def).when ?? (n.when = Qn), e._zod.onattach.push((e) => {
			let n = e._zod.bag.minimum ?? -Infinity;
			t.minimum > n && (e._zod.bag.minimum = t.minimum);
		}), e._zod.check = (n) => {
			let r = n.value, i = r.length;
			if ((typeof r == "string" && i >= t.minimum && i < t.minimum * 2 ? dt(r) : i) >= t.minimum) return;
			let a = ft(r);
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
	}), or = /*@__PURE__*/ w("$ZodCheckLengthEquals", (e, t) => {
		var n;
		T.init(e, t), (n = e._zod.def).when ?? (n.when = Qn), e._zod.onattach.push((e) => {
			let n = e._zod.bag;
			n.minimum = t.length, n.maximum = t.length, n.length = t.length;
		}), e._zod.check = (n) => {
			let r = n.value, i = r.length, a = typeof r == "string" && i >= t.length && i <= t.length * 2 ? dt(r) : i;
			if (a === t.length) return;
			let o = ft(r), s = a > t.length;
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
	}), sr = /*@__PURE__*/ w("$ZodCheckStringFormat", (e, t) => {
		var n, r;
		T.init(e, t), e._zod.onattach.push((e) => {
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
	}), cr = /*@__PURE__*/ w("$ZodCheckRegex", (e, t) => {
		sr.init(e, t), e._zod.check = (n) => {
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
	}), lr = /*@__PURE__*/ w("$ZodCheckLowerCase", (e, t) => {
		t.pattern ??= Yn, sr.init(e, t);
	}), ur = /*@__PURE__*/ w("$ZodCheckUpperCase", (e, t) => {
		t.pattern ??= Xn, sr.init(e, t);
	}), dr = /*@__PURE__*/ w("$ZodCheckIncludes", (e, t) => {
		T.init(e, t);
		let n = Je(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position},}${n}` : n);
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
	}), fr = /*@__PURE__*/ w("$ZodCheckStartsWith", (e, t) => {
		T.init(e, t);
		let n = RegExp(`^${Je(t.prefix)}.*`);
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
	}), pr = /*@__PURE__*/ w("$ZodCheckEndsWith", (e, t) => {
		T.init(e, t);
		let n = RegExp(`.*${Je(t.suffix)}$`);
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
	}), mr = /*@__PURE__*/ w("$ZodCheckOverwrite", (e, t) => {
		T.init(e, t), e._zod.check = (e) => {
			e.value = t.tx(e.value);
		};
	});
})), gr, _r = y((() => {
	gr = class {
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
})), vr, yr = y((() => {
	vr = {
		major: 4,
		minor: 5,
		patch: 4
	};
}));
//#endregion
//#region ../../../tmp/extbuild/documentation/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/schemas.js
function br(e) {
	return {
		validate: (t) => {
			try {
				return Yr(on(e, t));
			} catch {
				return cn(e, t).then(Yr);
			}
		},
		vendor: "zod",
		version: 1
	};
}
function xr(e, t) {
	if (!t.normalize && t.protocol?.source === Vn.source && !/^https?:\/\//i.test(e)) return 1;
	try {
		return new URL(e);
	} catch {
		return 2;
	}
}
function Sr(e) {
	return e.replace(ei, "");
}
function Cr(e, t) {
	return t.lastIndex = 0, t.test(e.hostname);
}
function wr(e, t) {
	return t.lastIndex = 0, t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol);
}
function Tr(e) {
	if (!mi.test(e)) return !1;
	try {
		return new URL(`http://[${e}]`), !0;
	} catch {
		return !1;
	}
}
function Er(e) {
	let t = e.split("/");
	if (t.length !== 2) return !1;
	let [n, r] = t;
	if (!r) return !1;
	let i = Number(r);
	return `${i}` !== r || i < 0 || i > 128 ? !1 : Tr(n);
}
function Dr(e) {
	if (e === "") return !0;
	if (/\s/.test(e) || e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
function Or(e) {
	if (!Bn.test(e)) return !1;
	let t = e.replace(/[-_]/g, (e) => e === "-" ? "+" : "/");
	return Dr(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
function kr(e, t = null) {
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
function Ar(e, t, n) {
	e.issues.length && t.issues.push(...st(n, e.issues)), t.value[n] = e.value;
}
function jr(e, t, n, r, i, a) {
	let o = n in r, s = a === "optional";
	if (o || !s || i !== "optional") {
		if (e.issues.length) {
			if (i !== void 0 && s && !o) return;
			t.issues.push(...st(n, e.issues));
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
function Mr(e) {
	let t = Object.keys(e.shape), n = Object.getOwnPropertySymbols(e.shape), r = n.length ? n : Oi, i = r.length ? [...t, ...r] : t;
	for (let t of i) if (!e.shape?.[t]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${String(t)}": expected a Zod schema`);
	let a = Ze(e.shape);
	return {
		...e,
		allKeys: i,
		symbolKeys: r,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(a)
	};
}
function Nr(e, t, n, r, i, a) {
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
		a instanceof Promise ? e.push(a.then((e) => jr(e, n, i, t, u, d))) : jr(a, n, i, t, u, d);
	}
	return o.length && n.issues.push({
		code: "unrecognized_keys",
		keys: o,
		input: t,
		inst: a,
		continue: !0
	}), e.length ? Promise.all(e).then(() => n) : n;
}
function Pr(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !at(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => ut(e, r, Pt())))
	}), t);
}
function Fr(e, t) {
	if (e === t || e instanceof Date && t instanceof Date && +e == +t) return {
		valid: !0,
		data: e
	};
	if (Ke(e) && Ke(t)) {
		let n = Object.keys(t), r = Object.keys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		Object.prototype.hasOwnProperty.call(i, "__proto__") && delete i.__proto__;
		for (let n of r) {
			if (n === "__proto__") continue;
			let r = Fr(e[n], t[n]);
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
			let i = e[r], a = t[r], o = Fr(i, a);
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
function Ir(e, t, n) {
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
	let c = Fr(t.value, n.value);
	if (!c.valid) {
		if (at(e)) return e;
		throw Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`);
	}
	return e.value = c.data, e;
}
function Lr(e, t) {
	for (let n = e.length - 1; n >= 0; n--) if (!(t === "optin" ? e[n]._zod.optin !== void 0 : e[n]._zod.optout === "optional")) return n + 1;
	return 0;
}
function Rr(e, t, n) {
	e.issues.length && t.issues.push(...st(n, e.issues)), t.value[n] = e.value;
}
function zr(e, t, n, r, i) {
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
			t.issues.push(...st(a, o.issues));
		}
		t.value[a] = o.value;
	}
	for (let e = t.value.length - 1; e >= r.length && n[e]._zod.optout === "optional" && t.value[e] === void 0; e--) t.value.length = e;
	return t;
}
function Br(e, t) {
	return e.value = t.issues.length ? void 0 : t.value, e;
}
function Vr(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
function Hr(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
function Ur(e, t, n, r) {
	return t.issues.length ? (e.value = n.catchValue({
		...t,
		value: e.value,
		error: { issues: t.issues.map((e) => ut(e, r, Pt())) },
		input: e.value
	}), e) : (e.value = t.value, t.memo && (e.memo = !0), e);
}
function Wr(e, t, n) {
	return e.issues.some((e) => e.code !== "unrecognized_keys") ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues
	}, n);
}
function Gr(e, t, n) {
	if (e.issues.length) return e.aborted = !0, e;
	if ((n.direction || "forward") === "forward") {
		let r = t.transform(e.value, e);
		return r instanceof Promise ? r.then((r) => Kr(e, r, t.out, n)) : Kr(e, r, t.out, n);
	}
	{
		let r = t.reverseTransform(e.value, e);
		return r instanceof Promise ? r.then((r) => Kr(e, r, t.in, n)) : Kr(e, r, t.in, n);
	}
}
function Kr(e, t, n, r) {
	return e.issues.length ? (e.aborted = !0, e) : n._zod.run({
		value: t,
		issues: e.issues
	}, r);
}
function qr(e) {
	return e.memo || (e.value = Object.freeze(e.value)), e;
}
function Jr(e, t, n, r) {
	if (!e) {
		let e = {
			code: "custom",
			input: n,
			inst: r,
			path: [...r._zod.def.path ?? []],
			continue: !r._zod.def.abort
		};
		r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(mt(e));
	}
}
var E, Yr, Xr, D, Zr, Qr, $r, ei, ti, ni, ri, ii, ai, oi, si, ci, li, ui, di, fi, pi, mi, hi, gi, _i, vi, yi, bi, xi, Si, Ci, wi, Ti, Ei, Di, Oi, ki, Ai, ji, Mi, Ni, Pi, Fi, Ii, Li, Ri, zi, Bi, Vi, Hi, Ui, Wi, Gi, Ki, qi, Ji, Yi, Xi, Zi, Qi = y((() => {
	hr(), Vt(), _r(), _n(), Zn(), Mt(), yr(), E = /*@__PURE__*/ w("$ZodType", (e, t) => {
		var n;
		e ??= {}, e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = vr;
		let r = e._zod.def.checks, i = e._zod.traits.has("$ZodCheck") ? [e, ...r ?? []] : r?.length ? [...r] : [];
		for (let t of i) for (let n of t._zod.onattach) n(e);
		if (i.length === 0) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
			e._zod.run = e._zod.parse;
		});
		else {
			let t = (t, n, r) => {
				if (t.memo) return t;
				let i = at(t), a;
				for (let o of n) {
					if (o._zod.def.when) {
						if (ot(t) || !o._zod.def.when(t)) continue;
					} else if (i) continue;
					let n = t.issues.length, s = o._zod.check(t);
					if (s instanceof Promise && r?.async === !1) throw new Rt();
					if (a || s instanceof Promise) a = (a ?? Promise.resolve()).then(async () => {
						await s, t.issues.length !== n && (lt(t.issues, n, e), i ||= at(t, n));
					});
					else {
						if (t.issues.length === n) continue;
						lt(t.issues, n, e), i ||= at(t, n);
					}
				}
				return a ? a.then(() => t) : t;
			}, n = (n, r, a) => {
				if (at(n)) return n.aborted = !0, n;
				let o = t(r, i, a);
				if (o instanceof Promise) {
					if (a.async === !1) throw new Rt();
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
					if (a.async === !1) throw new Rt();
					return o.then((e) => t(e, i, a));
				}
				return t(o, i, a);
			};
		}
	}, {
		get "~standard"() {
			return _t(this, "~standard", br(this));
		},
		set "~standard"(e) {
			gt(this, "~standard", e);
		}
	}), Yr = (e) => e.success ? { value: e.data } : { issues: e.error?.issues }, Xr = /*@__PURE__*/ w("$ZodString", (e, t) => {
		E.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? Gn(e._zod.bag), e._zod.parse = (n, r) => {
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
	}), D = /*@__PURE__*/ w("$ZodStringFormat", (e, t) => {
		sr.init(e, t), Xr.init(e, t);
	}), Zr = /*@__PURE__*/ w("$ZodGUID", (e, t) => {
		t.pattern ??= jn, D.init(e, t);
	}), Qr = /*@__PURE__*/ w("$ZodUUID", (e, t) => {
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
			t.pattern ??= Mn(e);
		} else t.pattern ??= Mn();
		D.init(e, t);
	}), $r = /*@__PURE__*/ w("$ZodEmail", (e, t) => {
		t.pattern ??= Nn, D.init(e, t);
	}), ei = /[\t\n\r]/g, ti = /*@__PURE__*/ w("$ZodURL", (e, t) => {
		D.init(e, t), e._zod.check = (n) => {
			try {
				let r = n.value.trim(), i = xr(r, t);
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
				t.hostname && !Cr(i, t.hostname) && n.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid hostname",
					pattern: t.hostname.source,
					input: n.value,
					inst: e,
					continue: !t.abort
				}), t.protocol && !wr(i, t.protocol) && n.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid protocol",
					pattern: t.protocol.source,
					input: n.value,
					inst: e,
					continue: !t.abort
				}), n.value = t.normalize ? i.href : Sr(r);
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
	}), ni = /*@__PURE__*/ w("$ZodEmoji", (e, t) => {
		t.pattern ??= yn(), D.init(e, t);
	}), ri = /*@__PURE__*/ w("$ZodNanoID", (e, t) => {
		if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1)) throw Error(`Invalid nanoid length: ${t.length}`);
		t.pattern ??= t.length === void 0 ? kn : vn(t.length), D.init(e, t);
	}), ii = /*@__PURE__*/ w("$ZodCUID", (e, t) => {
		t.pattern ??= wn, D.init(e, t);
	}), ai = /*@__PURE__*/ w("$ZodCUID2", (e, t) => {
		t.pattern ??= Tn, D.init(e, t);
	}), oi = /*@__PURE__*/ w("$ZodULID", (e, t) => {
		t.pattern ??= En, D.init(e, t);
	}), si = /*@__PURE__*/ w("$ZodXID", (e, t) => {
		t.pattern ??= Dn, D.init(e, t);
	}), ci = /*@__PURE__*/ w("$ZodKSUID", (e, t) => {
		t.pattern ??= On, D.init(e, t);
	}), li = /*@__PURE__*/ w("$ZodISODateTime", (e, t) => {
		t.pattern ??= Cn(t), D.init(e, t), (t.local || t.precision === -1) && (e._zod.bag.laxFormat = !0, e._zod.onattach.push((e) => {
			e._zod.bag.laxFormat = !0;
		}));
	}), ui = /*@__PURE__*/ w("$ZodISODate", (e, t) => {
		t.pattern ??= Wn, D.init(e, t);
	}), di = /*@__PURE__*/ w("$ZodISOTime", (e, t) => {
		t.pattern ??= Sn(t), D.init(e, t);
	}), fi = /*@__PURE__*/ w("$ZodISODuration", (e, t) => {
		t.pattern ??= An, D.init(e, t);
	}), pi = /*@__PURE__*/ w("$ZodIPv4", (e, t) => {
		t.pattern ??= Fn, D.init(e, t), e._zod.bag.format = "ipv4";
	}), mi = /^[0-9a-fA-F:.]+$/, hi = /*@__PURE__*/ w("$ZodIPv6", (e, t) => {
		t.pattern ??= In, D.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
			Tr(n.value) || n.issues.push({
				code: "invalid_format",
				format: "ipv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), gi = /*@__PURE__*/ w("$ZodCIDRv4", (e, t) => {
		t.pattern ??= Ln, D.init(e, t);
	}), _i = /*@__PURE__*/ w("$ZodCIDRv6", (e, t) => {
		t.pattern ??= Rn, D.init(e, t), e._zod.check = (n) => {
			Er(n.value) || n.issues.push({
				code: "invalid_format",
				format: "cidrv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), vi = /*@__PURE__*/ w("$ZodBase64", (e, t) => {
		t.pattern ??= zn, D.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
			Dr(n.value) || n.issues.push({
				code: "invalid_format",
				format: "base64",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), yi = /*@__PURE__*/ w("$ZodBase64URL", (e, t) => {
		t.pattern ??= Bn, D.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
			Or(n.value) || n.issues.push({
				code: "invalid_format",
				format: "base64url",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), bi = /*@__PURE__*/ w("$ZodE164", (e, t) => {
		t.pattern ??= Hn, D.init(e, t);
	}), xi = /*@__PURE__*/ w("$ZodJWT", (e, t) => {
		D.init(e, t), e._zod.check = (n) => {
			kr(n.value, t.alg) || n.issues.push({
				code: "invalid_format",
				format: "jwt",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), Si = /*@__PURE__*/ w("$ZodNumber", (e, t) => {
		E.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? qn, e._zod.parse = (n, r) => {
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
	}), Ci = /*@__PURE__*/ w("$ZodNumberFormat", (e, t) => {
		rr.init(e, t), Si.init(e, t);
	}), wi = /*@__PURE__*/ w("$ZodBoolean", (e, t) => {
		E.init(e, t), e._zod.pattern = Jn, e._zod.parse = (n, r) => {
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
	}), Ti = /*@__PURE__*/ w("$ZodUnknown", (e, t) => {
		E.init(e, t), e._zod.parse = (e) => e;
	}), Ei = /*@__PURE__*/ w("$ZodNever", (e, t) => {
		E.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
			expected: "never",
			code: "invalid_type",
			input: t.value,
			inst: e
		}), t);
	}), Di = /*@__PURE__*/ w("$ZodArray", (e, t) => {
		E.init(e, t);
		let n = Bt.memoizer;
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
				s instanceof Promise ? o.push(s.then((t) => Ar(t, r, e))) : Ar(s, r, e);
			}
			return o.length ? Promise.all(o).then(() => r) : r;
		};
	}), Oi = [], ki = /* @__PURE__ */ new WeakMap(), Ai = /*@__PURE__*/ w("$ZodObject", (e, t) => {
		if (E.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
			let e = t.shape;
			ki.set(t, e), Object.defineProperty(t, "shape", { get: () => {
				let n = { ...e };
				return Object.defineProperty(t, "shape", { value: n }), ki.set(t, n), n;
			} });
		}
		let n = Re(() => Mr(t));
		C(e, "propValues", (e) => {
			let t = e.def.shape, n = {};
			for (let e in t) {
				let r = t[e]._zod;
				if (r.values) {
					Object.prototype.hasOwnProperty.call(n, e) || x(n, e, /* @__PURE__ */ new Set());
					for (let t of r.values) n[e].add(t);
					r.optin !== void 0 && n[e].add(void 0);
				}
			}
			return n;
		});
		let r = Ge, i = t.catchall, a, o = Bt.memoizer;
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
				a instanceof Promise ? l.push(a.then((n) => jr(n, t, e, c, r, i))) : jr(a, t, e, c, r, i);
			}
			return i ? Nr(l, c, t, s, n.value, e) : l.length ? Promise.all(l).then(() => t) : t;
		};
	}), ji = /*@__PURE__*/ w("$ZodObjectJIT", (e, t) => {
		Ai.init(e, t);
		let n = e._zod.parse, r = Re(() => Mr(t)), i = Bt.memoizer, a = (t) => {
			let n = r.value, a = n.symbolKeys, o = new gr(["payload", "ctx"], {
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
				let n = l[e], r = typeof e == "symbol" ? `syms[${a.indexOf(e)}]` : Ue(e), i = `${r} in input`, u = t[e], d = u?._zod?.optin, f = d !== void 0, p = u?._zod?.optout === "optional";
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
		}, o, s = Ge, c = !Bt.jitless, l = c && wt.value, u = t.catchall, d;
		e._zod.parse = (i, f) => {
			d ??= r.value;
			let p = i.value;
			return s(p) ? c && l && f?.async === !1 && f.jitless !== !0 ? (o ||= a(t.shape), i = o(i, f), u ? Nr([], p, i, f, d, e) : i) : n(i, f) : (i.issues.push({
				expected: "object",
				code: "invalid_type",
				input: p,
				inst: e
			}), i);
		};
	}), Mi = /*@__PURE__*/ w("$ZodUnion", (e, t) => {
		E.init(e, t), C(e, "optin", (e) => e.def.options.some((e) => e._zod.optin === "defaulted") ? "defaulted" : e.def.options.some((e) => e._zod.optin !== void 0) ? "optional" : void 0), C(e, "optout", (e) => e.def.options.some((e) => e._zod.optout === "optional") ? "optional" : void 0), C(e, "values", (e) => {
			if (e.def.options.every((e) => e._zod.values)) return new Set(e.def.options.flatMap((e) => Array.from(e._zod.values)));
		}), C(e, "pattern", (e) => {
			if (e.def.options.every((e) => e._zod.pattern)) {
				let t = e.def.options.map((e) => e._zod.pattern);
				return RegExp(`^(${t.map((e) => b(e.source)).join("|")})$`);
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
			return a ? Promise.all(o).then((t) => Pr(t, r, e, i)) : Pr(o, r, e, i);
		};
	}), Ni = /*@__PURE__*/ w("$ZodDiscriminatedUnion", (e, t) => {
		t.inclusive = !1, Mi.init(e, t);
		let n = e._zod.parse;
		C(e, "propValues", (e) => {
			let t = {};
			for (let n of e.def.options) {
				let r = n._zod.propValues;
				if (!r || Object.keys(r).length === 0) throw Error(`Invalid discriminated union option at index "${e.def.options.indexOf(n)}"`);
				for (let [e, n] of Object.entries(r)) {
					Object.prototype.hasOwnProperty.call(t, e) || x(t, e, /* @__PURE__ */ new Set());
					for (let r of n) t[e].add(r);
				}
			}
			return t;
		}), t.options.forEach((e, n) => {
			let r = ki.get(e._zod.def);
			if (r && !Object.prototype.hasOwnProperty.call(r, t.discriminator)) throw Error(`Invalid discriminated union option at index "${n}"`);
		});
		let r = Re(() => {
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
			if (!Ge(o)) return i.issues.push({
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
	}), Pi = /*@__PURE__*/ w("$ZodIntersection", (e, t) => {
		E.init(e, t), e._zod.parse = (e, n) => {
			let r = e.value, i = t.left._zod.run({
				value: r,
				issues: []
			}, n), a = t.right._zod.run({
				value: r,
				issues: []
			}, n);
			return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([t, n]) => Ir(e, t, n)) : Ir(e, i, a);
		};
	}), Fi = /*@__PURE__*/ w("$ZodTuple", (e, t) => {
		E.init(e, t);
		let n = t.items, r = Bt.memoizer;
		r?.attach(e), e._zod.parse = (i, a) => {
			let o = i.value;
			if (!Array.isArray(o)) return i.issues.push({
				input: o,
				inst: e,
				expected: "tuple",
				code: "invalid_type"
			}), i;
			i.value = r ? r.alloc(e, i, [], a) : [];
			let s = [], c = Lr(n, "optin"), l = Lr(n, "optout");
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
					r instanceof Promise ? s.push(r.then((t) => Rr(t, i, e))) : Rr(r, i, e);
				}
			}
			return s.length ? Promise.all(s).then(() => zr(u, i, n, o, l)) : zr(u, i, n, o, l);
		};
	}), Ii = /*@__PURE__*/ w("$ZodRecord", (e, t) => {
		E.init(e, t);
		let n = Bt.memoizer;
		n?.attach(e), e._zod.parse = (r, i) => {
			let a = r.value;
			if (!Ke(a)) return r.issues.push({
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
							issues: s.issues.map((e) => ut(e, i, Pt())),
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
						e.issues.length && r.issues.push(...st(n, e.issues)), r.value[l] = e.value;
					})) : (u.issues.length && r.issues.push(...st(n, u.issues)), r.value[l] = u.value);
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
					if (typeof n == "string" && qn.test(n) && l.issues.length) {
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
							issues: l.issues.map((e) => ut(e, i, Pt())),
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
						e.issues.length && r.issues.push(...st(n, e.issues)), r.value[u] = e.value;
					})) : (d.issues.length && r.issues.push(...st(n, d.issues)), r.value[u] = d.value);
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
	}), Li = /*@__PURE__*/ w("$ZodEnum", (e, t) => {
		E.init(e, t);
		let n = Fe(t.entries), r = new Set(n);
		e._zod.values = r;
		let i = n.filter((e) => Tt.has(typeof e));
		e._zod.pattern = RegExp(i.length ? `^(${i.map((e) => Je(e.toString())).join("|")})$` : "^[^\\s\\S]$"), e._zod.parse = (t, i) => {
			let a = t.value;
			return r.has(a) || t.issues.push({
				code: "invalid_value",
				values: n,
				input: a,
				inst: e
			}), t;
		};
	}), Ri = /*@__PURE__*/ w("$ZodLiteral", (e, t) => {
		E.init(e, t);
		let n = new Set(t.values);
		e._zod.values = n, e._zod.pattern = RegExp(t.values.length ? `^(${t.values.map((e) => typeof e == "string" ? Je(e) : e ? Je(e.toString()) : String(e)).join("|")})$` : "^[^\\s\\S]$"), e._zod.parse = (r, i) => {
			let a = r.value;
			return n.has(a) || r.issues.push({
				code: "invalid_value",
				values: t.values,
				input: a,
				inst: e
			}), r;
		};
	}), zi = /*@__PURE__*/ w("$ZodTransform", (e, t) => {
		E.init(e, t), e._zod.optin = "optional", Bt.memoizer?.guard(e), e._zod.parse = (n, r) => {
			if (r.direction === "backward") throw new zt(e.constructor.name);
			let i = t.transform(n.value, n);
			if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n));
			if (i instanceof Promise) throw new Rt();
			return n.value = i, n;
		};
	}), Bi = /*@__PURE__*/ w("$ZodOptional", (e, t) => {
		E.init(e, t), C(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), e._zod.optout = "optional", C(e, "values", (e) => {
			let t = e.def.innerType._zod.values;
			return t ? /* @__PURE__ */ new Set([...t, void 0]) : void 0;
		}), C(e, "pattern", (e) => {
			let t = e.def.innerType._zod.pattern;
			return t ? RegExp(`^(${b(t.source)})?$`) : void 0;
		}), e._zod.parse = (e, n) => {
			if (e.value === void 0) {
				if (t.innerType._zod.optin !== "defaulted") return e;
				let r = t.innerType._zod.run({
					value: e.value,
					issues: []
				}, n);
				return r instanceof Promise ? r.then((t) => Br(e, t)) : Br(e, r);
			}
			return t.innerType._zod.run(e, n);
		};
	}), Vi = /*@__PURE__*/ w("$ZodExactOptional", (e, t) => {
		Bi.init(e, t), C(e, "values", (e) => e.def.innerType._zod.values), C(e, "pattern", (e) => e.def.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
	}), Hi = /*@__PURE__*/ w("$ZodNullable", (e, t) => {
		E.init(e, t), C(e, "optin", (e) => e.def.innerType._zod.optin), C(e, "optout", (e) => e.def.innerType._zod.optout), C(e, "pattern", (e) => {
			let t = e.def.innerType._zod.pattern;
			return t ? RegExp(`^(${b(t.source)}|null)$`) : void 0;
		}), C(e, "values", (e) => e.def.innerType._zod.values ? /* @__PURE__ */ new Set([...e.def.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => e.value === null ? e : t.innerType._zod.run(e, n);
	}), Ui = /*@__PURE__*/ w("$ZodDefault", (e, t) => {
		E.init(e, t), e._zod.optin = "defaulted", C(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
			if (n.direction === "backward") return t.innerType._zod.run(e, n);
			if (e.value === void 0) return e.value = t.defaultValue, e;
			let r = t.innerType._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => Vr(e, t)) : Vr(r, t);
		};
	}), Wi = /*@__PURE__*/ w("$ZodPrefault", (e, t) => {
		E.init(e, t), e._zod.optin = "defaulted", C(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => (n.direction === "backward" || e.value === void 0 && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
	}), Gi = /*@__PURE__*/ w("$ZodNonOptional", (e, t) => {
		E.init(e, t), C(e, "values", (e) => {
			let t = e.def.innerType._zod.values;
			return t ? new Set([...t].filter((e) => e !== void 0)) : void 0;
		}), e._zod.parse = (n, r) => {
			let i = t.innerType._zod.run(n, r);
			return i instanceof Promise ? i.then((t) => Hr(t, e)) : Hr(i, e);
		};
	}), Ki = /*@__PURE__*/ w("$ZodCatch", (e, t) => {
		E.init(e, t), C(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), C(e, "optout", (e) => e.def.innerType._zod.optout), C(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
			if (n.direction === "backward") return t.innerType._zod.run(e, n);
			let r = t.innerType._zod.run({
				value: e.value,
				issues: []
			}, n);
			return r instanceof Promise ? r.then((r) => Ur(e, r, t, n)) : Ur(e, r, t, n);
		};
	}), qi = /*@__PURE__*/ w("$ZodPipe", (e, t) => {
		E.init(e, t), C(e, "values", (e) => e.def.in._zod.values), C(e, "optin", (e) => e.def.in._zod.optin), C(e, "optout", (e) => e.def.out._zod.optout), C(e, "propValues", (e) => e.def.in._zod.propValues), e._zod.parse = (e, n) => {
			if (n.direction === "backward") {
				let r = t.out._zod.run(e, n);
				return r instanceof Promise ? r.then((e) => Wr(e, t.in, n)) : Wr(r, t.in, n);
			}
			let r = t.in._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => Wr(e, t.out, n)) : Wr(r, t.out, n);
		};
	}), Ji = /*@__PURE__*/ w("$ZodCodec", (e, t) => {
		E.init(e, t), C(e, "values", (e) => e.def.in._zod.values), C(e, "optin", (e) => e.def.in._zod.optin), C(e, "optout", (e) => e.def.out._zod.optout), C(e, "propValues", (e) => e.def.in._zod.propValues), e._zod.parse = (e, n) => {
			if ((n.direction || "forward") === "forward") {
				let r = t.in._zod.run(e, n);
				return r instanceof Promise ? r.then((e) => Gr(e, t, n)) : Gr(r, t, n);
			}
			{
				let r = t.out._zod.run(e, n);
				return r instanceof Promise ? r.then((e) => Gr(e, t, n)) : Gr(r, t, n);
			}
		};
	}), Yi = /*@__PURE__*/ w("$ZodReadonly", (e, t) => {
		E.init(e, t), C(e, "propValues", (e) => e.def.innerType._zod.propValues), C(e, "values", (e) => e.def.innerType._zod.values), C(e, "optin", (e) => e.def.innerType?._zod?.optin), C(e, "optout", (e) => e.def.innerType?._zod?.optout), e._zod.parse = (e, n) => {
			if (n.direction === "backward") return t.innerType._zod.run(e, n);
			let r = t.innerType._zod.run(e, n);
			return r instanceof Promise ? r.then(qr) : qr(r);
		};
	}), Xi = /*@__PURE__*/ w("$ZodLazy", (e, t) => {
		E.init(e, t), Ve(e._zod, "innerType", () => {
			let e = t;
			return e._cachedInner ||= t.getter(), e._cachedInner;
		}), C(e, "pattern", (e) => e.innerType?._zod?.pattern), C(e, "propValues", (e) => e.innerType?._zod?.propValues), C(e, "optin", (e) => e.innerType?._zod?.optin ?? void 0), C(e, "optout", (e) => e.innerType?._zod?.optout ?? void 0), e._zod.parse = (t, n) => e._zod.innerType._zod.run(t, n);
	}), Zi = /*@__PURE__*/ w("$ZodCustom", (e, t) => {
		T.init(e, t), E.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
			let r = n.value, i = t.fn(r);
			if (i instanceof Promise) return i.then((t) => Jr(t, n, r, e));
			Jr(i, n, r, e);
		};
	});
}));
//#endregion
//#region ../../../tmp/extbuild/documentation/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/memoizer.js
function $i(e) {
	return e.map((e) => e.path ? {
		...e,
		path: e.path.slice()
	} : { ...e });
}
function ea(e, t) {
	let n = sa.get(e);
	if (n !== void 0) return n;
	if (t.has(e)) return !0;
	t.add(e);
	let r = !1, i = (e) => {
		!r && e?._zod && ea(e, t) && (r = !0);
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
	return t.delete(e), sa.set(e, r), r;
}
function ta(e, t) {
	let n = e.buckets.get(t);
	return n || (n = /* @__PURE__ */ new Map(), e.buckets.set(t, n)), n;
}
function na() {
	return ua;
}
function ra(e, t) {
	let n = e[aa]?.backEdges;
	return n !== void 0 && typeof t == "object" && !!t && n.has(t);
}
var ia, aa, oa, sa, ca, la, ua, da = y((() => {
	ia = class extends Error {
		constructor() {
			super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
		}
	}, aa = "~memo", oa = [], sa = /*@__PURE__*/ new WeakMap(), la = [], ua = {
		alloc(e, t, n) {
			let r = ca;
			if (!r) return n;
			ca = void 0;
			let i = {
				value: n,
				issues: null
			};
			return r.set(t.value, i), la.push(i), n;
		},
		guard(e) {
			var t;
			(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
				let t = e._zod.parse, n = (e, n) => {
					if (n.direction !== "backward" && ra(n, e.value)) throw new ia();
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
					if (n === void 0 && (n = ea(e, /* @__PURE__ */ new Set()), !n)) return e._zod.parse = t, e._zod.run === a && (e._zod.run = t), t(o, s);
					let c = o.value;
					if (typeof c != "object" || !c) return t(o, s);
					let l = s[aa];
					l || (l = {
						buckets: /* @__PURE__ */ new Map(),
						backEdges: void 0
					}, s[aa] = l);
					let u;
					r === s ? u = i : (u = ta(l, e), r = s, i = u);
					let d = u.get(c);
					if (d) return o.value = d.value, d.issues ? d.issues.length && o.issues.push(...$i(d.issues)) : (o.memo = !0, l.backEdges ?? (l.backEdges = /* @__PURE__ */ new Set()), l.backEdges.add(d.value)), o;
					ca = u;
					let f = la.length, p = t(o, s);
					ca = void 0;
					let m = la.length > f ? la.pop() : void 0;
					return p instanceof Promise ? p.then((e) => (m && (m.issues = e.issues.length ? $i(e.issues) : oa), e)) : (m && (m.issues = p.issues.length ? $i(p.issues) : oa), p);
				};
				e._zod.parse = a, e._zod.run === t && (e._zod.run = a);
			});
		}
	};
}));
//#endregion
//#region ../../../tmp/extbuild/documentation/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/locales/en.js
function fa() {
	return { localeError: pa() };
}
var pa, ma = y((() => {
	Mt(), pa = () => {
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
				case "invalid_type": return `Invalid input: expected ${i(e.expected)}, received ${i(pt(e.input), e.input)}`;
				case "invalid_value": return e.values.length === 1 ? `Invalid input: expected ${Xe(e.values[0])}` : `Invalid option: expected one of ${Ie(e.values, "|")}`;
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
				case "unrecognized_keys": return `Unrecognized key${e.keys.length > 1 ? "s" : ""}: ${Ie(e.keys, ", ")}`;
				case "invalid_key": return `Invalid key in ${e.origin}`;
				case "invalid_union": return e.options && Array.isArray(e.options) && e.options.length > 0 ? `Invalid discriminator value. Expected ${e.options.map((e) => `'${e}'`).join(" | ")}` : e.inclusive === !1 ? "Invalid input: more than one option matched" : "Invalid input";
				case "invalid_element": return `Invalid value in ${e.origin}`;
				default: return "Invalid input";
			}
		};
	};
}));
//#endregion
//#region ../../../tmp/extbuild/documentation/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/registries.js
function ha() {
	return new _a();
}
var ga, _a, va, ya = y((() => {
	_a = class {
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
	}, (ga = globalThis).__zod_globalRegistry ?? (ga.__zod_globalRegistry = ha()), va = globalThis.__zod_globalRegistry;
})), ba = y((() => {}));
//#endregion
//#region ../../../tmp/extbuild/documentation/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/api.js
// @__NO_SIDE_EFFECTS__
function xa(e, t) {
	return new e({
		type: "string",
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Sa(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ca(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function wa(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ta(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v4",
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ea(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v6",
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Da(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v7",
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Oa(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ka(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Aa(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ja(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ma(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Na(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Pa(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Fa(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ia(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function La(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ra(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function za(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ba(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Va(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ha(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ua(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Wa(e, t) {
	return new e({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ga(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ka(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function qa(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ja(e, t) {
	return new e({
		type: "number",
		checks: [],
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ya(e, t) {
	return new e({
		type: "number",
		coerce: !0,
		checks: [],
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Xa(e, t) {
	return new e({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "safeint",
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Za(e, t) {
	return new e({
		type: "boolean",
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Qa(e) {
	return new e({ type: "unknown" });
}
// @__NO_SIDE_EFFECTS__
function $a(e, t) {
	return new e({
		type: "never",
		...S(t)
	});
}
// @__NO_SIDE_EFFECTS__
function eo(e, t) {
	return new er({
		check: "less_than",
		...S(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function to(e, t) {
	return new er({
		check: "less_than",
		...S(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function no(e, t) {
	return new tr({
		check: "greater_than",
		...S(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function ro(e, t) {
	return new tr({
		check: "greater_than",
		...S(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function io(e, t) {
	return new nr({
		check: "multiple_of",
		...S(t),
		value: e
	});
}
// @__NO_SIDE_EFFECTS__
function ao(e, t) {
	return new ir({
		check: "max_length",
		...S(t),
		maximum: e
	});
}
// @__NO_SIDE_EFFECTS__
function oo(e, t) {
	return new ar({
		check: "min_length",
		...S(t),
		minimum: e
	});
}
// @__NO_SIDE_EFFECTS__
function so(e, t) {
	return new or({
		check: "length_equals",
		...S(t),
		length: e
	});
}
// @__NO_SIDE_EFFECTS__
function co(e, t) {
	return new cr({
		check: "string_format",
		format: "regex",
		...S(t),
		pattern: e
	});
}
// @__NO_SIDE_EFFECTS__
function lo(e) {
	return new lr({
		check: "string_format",
		format: "lowercase",
		...S(e)
	});
}
// @__NO_SIDE_EFFECTS__
function uo(e) {
	return new ur({
		check: "string_format",
		format: "uppercase",
		...S(e)
	});
}
// @__NO_SIDE_EFFECTS__
function fo(e, t) {
	return new dr({
		check: "string_format",
		format: "includes",
		...S(t),
		includes: e
	});
}
// @__NO_SIDE_EFFECTS__
function po(e, t) {
	return new fr({
		check: "string_format",
		format: "starts_with",
		...S(t),
		prefix: e
	});
}
// @__NO_SIDE_EFFECTS__
function mo(e, t) {
	return new pr({
		check: "string_format",
		format: "ends_with",
		...S(t),
		suffix: e
	});
}
// @__NO_SIDE_EFFECTS__
function ho(e) {
	return new mr({
		check: "overwrite",
		tx: e
	});
}
// @__NO_SIDE_EFFECTS__
function go(e) {
	return /* @__PURE__ */ ho((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function _o() {
	return /* @__PURE__ */ ho((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function vo() {
	return /* @__PURE__ */ ho((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function yo() {
	return /* @__PURE__ */ ho((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function bo() {
	return /* @__PURE__ */ ho((e) => We(e));
}
// @__NO_SIDE_EFFECTS__
function xo(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...S(n)
	});
}
// @__NO_SIDE_EFFECTS__
function So(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...S(n)
	});
}
// @__NO_SIDE_EFFECTS__
function Co(e, t) {
	let n = /* @__PURE__ */ wo((t) => (t.addIssue = (e) => {
		if (typeof e == "string") t.issues.push(mt(e, t.value, n._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", "input" in r || (r.input = t.value), r.inst ??= n, r.continue ??= !n._zod.def.abort, t.issues.push(mt(r));
		}
	}, e(t.value, t)), t);
	return n;
}
// @__NO_SIDE_EFFECTS__
function wo(e, t) {
	let n = new T({
		check: "custom",
		...S(t)
	});
	return n._zod.check = e, n;
}
// @__NO_SIDE_EFFECTS__
function To(e, t) {
	let n = S(t), r = n.truthy ?? [
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
	let a = new Set(r), o = new Set(i), s = e.Codec ?? Ji, c = e.Boolean ?? wi, l = new s({
		type: "pipe",
		in: new (e.String ?? Xr)({
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
var Eo = y((() => {
	hr(), Qi(), Mt();
}));
//#endregion
//#region ../../../tmp/extbuild/documentation/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/to-json-schema.js
function Do(e, ...t) {
	for (let n of t) for (let t of Reflect.ownKeys(n)) Object.prototype.propertyIsEnumerable.call(n, t) && x(e, t, n[t]);
	return e;
}
function Oo(e) {
	let t = e?.target ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? va,
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
function O(e, t, n, r, i) {
	let a = typeof t.unrepresentable == "function" ? t.unrepresentable({
		zodSchema: e,
		path: r.path,
		message: i
	}) : t.unrepresentable;
	if (a === "any") return !1;
	if (a === void 0 || a === "throw") throw Error(i);
	return Object.assign(n, a), !0;
}
function k(e, t, n = {
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
		a && (o.ref ||= a, k(a, t, r), t.seen.get(a).isParent = !0);
	}
	let c = t.metadataRegistry.get(e);
	return c && Do(o.schema, c), t.io === "input" && A(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && "_prefault" in o.schema && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function ko(e) {
	return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function Ao(e, t) {
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
				ref: `${i("__shared")}#/${r}/${ko(a)}`
			};
		}
		let i = `#/${r}/`;
		if (t[1] === n && !t[1].schema.id) return { ref: "#" };
		let a = t[1].schema.id ?? `__schema${e.counter++}`;
		return {
			defId: a,
			ref: i + ko(a)
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
function jo(e) {
	let t = e.anyOf;
	if (!Array.isArray(t) || t.length === 0 || e.type !== void 0) return;
	let n = [];
	for (let e of t) {
		if (!e || typeof e != "object") return;
		jo(e);
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
function Mo(e) {
	let t = e.additionalProperties;
	return t === void 0 || t === !1 || typeof t != "object" || !t ? null : Object.keys(t).length ? t : null;
}
function No(e) {
	let t = [];
	for (let n of e) {
		if (typeof n != "object" || n.type !== "object") return null;
		for (let e in n) if (!Io.has(e)) return null;
		t.push(n);
	}
	let n = {}, r = /* @__PURE__ */ new Set();
	for (let e of t) {
		for (let r in e.properties) {
			if (Object.prototype.hasOwnProperty.call(n, r)) continue;
			let e = [];
			for (let n of t) {
				let t = n.properties?.[r] ?? Mo(n);
				t != null && (e.some((e) => JSON.stringify(e) === JSON.stringify(t)) || e.push(t));
			}
			x(n, r, e.length === 1 ? e[0] : No(e) ?? { allOf: e });
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
			let t = Mo(n);
			t && !e.some((e) => JSON.stringify(e) === JSON.stringify(t)) && e.push(t);
		}
		e.length === 1 ? i.additionalProperties = e[0] : e.length > 1 && (i.additionalProperties = { allOf: e });
	}
	return i;
}
function Po(e) {
	let t = e.allOf;
	if (!Array.isArray(t) || t.length < 2) return;
	for (let t of Io) if (t in e) return;
	let n = t.filter((e) => Lo.some((t) => Array.isArray(e[t]))), r = null;
	if (!n.length) r = No(t);
	else {
		let e = n[0], i = Lo.find((t) => Array.isArray(e[t]));
		if (Object.keys(e).length !== 1) return;
		let a = t.filter((t) => t !== e), o = e[i].map((e) => No([...a, e]));
		if (o.some((e) => !e)) return;
		r = { [i]: o };
	}
	r && (delete e.allOf, Do(e, r));
}
function Fo(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	let r = (t) => {
		let n = e.seen.get(t);
		if (n.ref === null) return;
		let i = n.def ?? n.schema, a = { ...i }, o = n.ref;
		if (n.ref = null, o) {
			r(o);
			let n = e.seen.get(o), s = n.schema;
			if (s.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (i.allOf = i.allOf ?? [], i.allOf.push(s)) : Do(i, s), Do(i, a), t._zod.parent === o) for (let e in i) e !== "$ref" && e !== "allOf" && (e in a || delete i[e]);
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
		if (e.target !== "openapi-3.0") for (let t of e.seen.entries()) jo(t[1].def ?? t[1].schema);
		for (let t of e.deferred) t();
		if (e.intersections.length) {
			let t = /* @__PURE__ */ new Map();
			for (let n of e.seen.values()) for (let e of [n.schema, n.def]) {
				let n = e?.allOf;
				if (!Array.isArray(n)) continue;
				let r = t.get(n);
				r ? r.push(e) : t.set(n, [e]);
			}
			for (let n of e.intersections) for (let e of t.get(n) ?? []) Po(e);
		}
	}
	let i = {};
	if (e.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
		let n = e.external.registry.get(t)?.id;
		if (!n) throw Error("Schema is missing an `id` property");
		i.$id = e.external.uri(n);
	}
	Do(i, n.defId ? n.schema : n.def ?? n.schema);
	let a = e.metadataRegistry.get(t)?.id;
	a !== void 0 && i.id === a && delete i.id;
	let o = e.external?.defs ?? {};
	if (!e.external || e.sharedEmitDoneFor !== e.external) for (let t of e.seen.entries()) {
		let e = t[1];
		e.def && e.defId && (e.def.id === e.defId && delete e.def.id, x(o, e.defId, e.def));
	}
	e.external && (e.sharedEmitDoneFor = e.external), e.external || Object.keys(o).length > 0 && (e.target === "draft-2020-12" ? i.$defs = o : i.definitions = o);
	try {
		let n = JSON.parse(JSON.stringify(i));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: zo(t, "input", e.processors),
					output: zo(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function A(e, t) {
	let n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	let r = e._zod.def;
	if (r.type === "transform") return !0;
	if (r.type === "array") return A(r.element, n);
	if (r.type === "set") return A(r.valueType, n);
	if (r.type === "lazy") return A(r.getter(), n);
	if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault" || r.type === "catch") return A(r.innerType, n);
	if (r.type === "intersection") return A(r.left, n) || A(r.right, n);
	if (r.type === "record" || r.type === "map") return A(r.keyType, n) || A(r.valueType, n);
	if (r.type === "pipe") return e._zod.traits.has("$ZodCodec") ? !0 : A(r.in, n) || A(r.out, n);
	if (r.type === "object") {
		for (let e in r.shape) if (A(r.shape[e], n)) return !0;
		return !1;
	}
	if (r.type === "union") {
		for (let e of r.options) if (A(e, n)) return !0;
		return !1;
	}
	if (r.type === "tuple") {
		for (let e of r.items) if (A(e, n)) return !0;
		return !!(r.rest && A(r.rest, n));
	}
	return !1;
}
var Io, Lo, Ro, zo, Bo = y((() => {
	ya(), Mt(), Io = /* @__PURE__ */ new Set([
		"type",
		"properties",
		"required",
		"additionalProperties"
	]), Lo = ["oneOf", "anyOf"], Ro = (e, t = {}) => (n) => {
		let r = Oo({
			...n,
			processors: t
		});
		return k(e, r), Ao(r, e), Fo(r, e);
	}, zo = (e, t, n = {}) => (r) => {
		let { libraryOptions: i, target: a } = r ?? {}, o = Oo({
			...i ?? {},
			target: a,
			io: t,
			processors: n
		});
		return k(e, o), Ao(o, e), Fo(o, e);
	};
}));
//#endregion
//#region ../../../tmp/extbuild/documentation/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/json-schema-processors.js
function Vo(e) {
	let t = e._zod.def;
	return t.type === "pipe" && t.in._zod.traits.has("$ZodTransform") ? Vo(t.out) : t.type === "catch" ? Vo(t.innerType) : e._zod.optin;
}
function Ho(e, t, n) {
	if (t.$ref) {
		if (n.has(t)) return t;
		n.add(t);
		let r = e.get(t)?.def;
		if (!r) return t;
		let i = Ho(e, r, n);
		return i === r ? t : i;
	}
	for (let r of ["anyOf", "oneOf"]) {
		let i = t[r];
		if (!Array.isArray(i)) continue;
		let a = i.map((t) => Ho(e, t, n));
		a.some((e, t) => e !== i[t]) && (t = {
			...t,
			[r]: a
		});
	}
	let r = Array.isArray(t.type) ? t.type : [t.type], i = !r.includes("string") && r.some((e) => e === "number" || e === "integer"), a = t.enum ?? (t.const === void 0 ? void 0 : [t.const]);
	if (!i && !a?.some((e) => typeof e == "number")) return t;
	let { minimum: o, maximum: s, exclusiveMinimum: c, exclusiveMaximum: l, multipleOf: u, format: d, id: f, ...p } = t;
	return p.enum ? p.enum = p.enum.map((e) => typeof e == "number" ? String(e) : e) : typeof p.const == "number" && (p.const = String(p.const)), i ? (p.type = "string", a || (p.pattern = (r.includes("number") ? qn : Kn).source), p) : p;
}
function Uo(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.seen.values()) n.def && !t.has(n.schema) && t.set(n.schema, n);
	let n = /* @__PURE__ */ new Map();
	for (let r of xs.get(e) ?? []) {
		let i = e.seen.get(r), a = (i?.def ?? i?.schema)?.propertyNames;
		if (!a || a === !0 || n.has(a)) continue;
		let o = Ho(t, a, /* @__PURE__ */ new Set());
		o !== a && n.set(a, o);
	}
	if (n.size) for (let t of e.seen.values()) for (let e of [t.schema, t.def]) {
		let t = e && n.get(e.propertyNames);
		t && (e.propertyNames = t);
	}
}
function Wo(e, t, n, r, i) {
	let a = !1, o = JSON.stringify(e, (e, t) => typeof t == "bigint" ? (a = !0, null) : t);
	return a ? (O(t, n, r, i, "BigInt defaults cannot be represented in JSON Schema"), Ts) : JSON.parse(o);
}
function Go(e, t) {
	if ("_idmap" in e) {
		let n = e, r = Oo({
			...t,
			processors: Ps
		}), i = {};
		for (let e of n._idmap.entries()) {
			let [t, n] = e;
			k(n, r);
		}
		let a = {};
		r.external = {
			registry: n,
			uri: t?.uri,
			defs: i
		};
		for (let e of n._idmap.entries()) {
			let [t, n] = e;
			Ao(r, n), x(a, t, Fo(r, n));
		}
		return Object.keys(i).length > 0 && (a.__shared = { [r.target === "draft-2020-12" ? "$defs" : "definitions"]: i }), { schemas: a };
	}
	let n = Oo({
		...t,
		processors: Ps
	});
	return k(e, n), Ao(n, e), Fo(n, e);
}
var Ko, qo, Jo, Yo, Xo, Zo, Qo, $o, es, ts, ns, rs, is, as, os, ss, cs, ls, us, ds, fs, ps, ms, hs, gs, _s, vs, ys, bs, xs, Ss, Cs, ws, Ts, Es, Ds, Os, ks, As, js, Ms, Ns, Ps, Fs = y((() => {
	Zn(), Bo(), Mt(), Ko = {
		guid: "uuid",
		url: "uri",
		datetime: "date-time",
		json_string: "json-string",
		regex: ""
	}, qo = (e, t, n, r) => {
		let i = n;
		i.type = "string";
		let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l, laxFormat: u } = e._zod.bag;
		if (typeof a == "number" && (i.minLength = a), typeof o == "number" && (i.maxLength = o), s && (i.format = Ko[s] ?? s, i.format === "" && delete i.format, (s === "time" || u) && delete i.format), l && (i.contentEncoding = l), c && c.size > 0) {
			let e = [...c];
			e.length === 1 ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
				...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
				pattern: e.source
			}))]);
		}
	}, Jo = (e, t, n, r) => {
		let i = n, { minimum: a, maximum: o, format: s, multipleOf: c, exclusiveMaximum: l, exclusiveMinimum: u } = e._zod.bag;
		i.type = typeof s == "string" && s.includes("int") ? "integer" : "number";
		let d = typeof u == "number" && u >= (a ?? -Infinity), f = typeof l == "number" && l <= (o ?? Infinity), p = t.target === "draft-04" || t.target === "openapi-3.0";
		d ? p ? (i.minimum = u, i.exclusiveMinimum = !0) : i.exclusiveMinimum = u : typeof a == "number" && (i.minimum = a), f ? p ? (i.maximum = l, i.exclusiveMaximum = !0) : i.exclusiveMaximum = l : typeof o == "number" && (i.maximum = o), typeof c == "number" && (Number.isFinite(c) && c !== 0 ? i.multipleOf = Math.abs(c) : O(e, t, i, r, `A multipleOf divisor of ${c} cannot be represented in JSON Schema`));
	}, Yo = (e, t, n, r) => {
		n.type = "boolean";
	}, Xo = (e, t, n, r) => {
		O(e, t, n, r, "BigInt cannot be represented in JSON Schema");
	}, Zo = (e, t, n, r) => {
		O(e, t, n, r, "Symbols cannot be represented in JSON Schema");
	}, Qo = (e, t, n, r) => {
		t.target === "openapi-3.0" ? (n.type = "string", n.nullable = !0, n.enum = [null]) : n.type = "null";
	}, $o = (e, t, n, r) => {
		O(e, t, n, r, "Undefined cannot be represented in JSON Schema");
	}, es = (e, t, n, r) => {
		O(e, t, n, r, "Void cannot be represented in JSON Schema");
	}, ts = (e, t, n, r) => {
		n.not = {};
	}, ns = (e, t, n, r) => {}, rs = (e, t, n, r) => {}, is = (e, t, n, r) => {
		O(e, t, n, r, "Date cannot be represented in JSON Schema");
	}, as = (e, t, n, r) => {
		let i = e._zod.def, a = Fe(i.entries);
		if (a.length === 0) {
			n.not = {};
			return;
		}
		a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), n.enum = a;
	}, os = (e, t, n, r) => {
		let i = e._zod.def;
		if (i.values.length === 0) {
			n.not = {};
			return;
		}
		let a = [];
		for (let o of i.values) if (o === void 0) {
			if (O(e, t, n, r, "Literal `undefined` cannot be represented in JSON Schema")) return;
		} else if (typeof o == "bigint") {
			if (O(e, t, n, r, "BigInt literals cannot be represented in JSON Schema")) return;
			a.push(Number(o));
		} else a.push(o);
		if (a.length !== 0) {
			if (a.length === 1) {
				let e = a[0];
				n.type = e === null ? "null" : typeof e, t.target === "draft-04" || t.target === "openapi-3.0" ? n.enum = [e] : n.const = e;
			} else a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), a.every((e) => typeof e == "boolean") && (n.type = "boolean"), a.every((e) => e === null) && (n.type = "null"), n.enum = a;
		}
	}, ss = (e, t, n, r) => {
		O(e, t, n, r, "NaN cannot be represented in JSON Schema");
	}, cs = (e, t, n, r) => {
		let i = n, a = e._zod.pattern;
		if (!a) throw Error("Pattern not found in template literal");
		i.type = "string", i.pattern = a.source;
	}, ls = (e, t, n, r) => {
		let i = n, a = {
			type: "string",
			format: "binary",
			contentEncoding: "binary"
		}, { minimum: o, maximum: s, mime: c } = e._zod.bag;
		o !== void 0 && (a.minLength = o), s !== void 0 && (a.maxLength = s), c ? c.length === 1 ? (a.contentMediaType = c[0], Object.assign(i, a)) : (Object.assign(i, a), i.anyOf = c.map((e) => ({ contentMediaType: e }))) : Object.assign(i, a);
	}, us = (e, t, n, r) => {
		n.type = "boolean";
	}, ds = (e, t, n, r) => {
		O(e, t, n, r, "Custom types cannot be represented in JSON Schema");
	}, fs = (e, t, n, r) => {
		O(e, t, n, r, "Function types cannot be represented in JSON Schema");
	}, ps = (e, t, n, r) => {
		O(e, t, n, r, "Transforms cannot be represented in JSON Schema");
	}, ms = (e, t, n, r) => {
		O(e, t, n, r, "Map cannot be represented in JSON Schema");
	}, hs = (e, t, n, r) => {
		O(e, t, n, r, "Set cannot be represented in JSON Schema");
	}, gs = (e, t, n, r) => {
		let i = n, a = e._zod.def, { minimum: o, maximum: s } = e._zod.bag;
		typeof o == "number" && (i.minItems = o), typeof s == "number" && (i.maxItems = s), i.type = "array", i.items = k(a.element, t, {
			...r,
			path: [...r.path, "items"]
		});
	}, _s = (e, t, n, r) => {
		let i = n, a = e._zod.def, o = a.shape;
		if (Object.getOwnPropertySymbols(o).length && O(e, t, i, r, "Symbol keys cannot be represented in JSON Schema")) return;
		i.type = "object", i.properties = {};
		for (let e in o) x(i.properties, e, k(o[e], t, {
			...r,
			path: [
				...r.path,
				"properties",
				e
			]
		}));
		let s = new Set(Object.keys(o)), c = new Set([...s].filter((e) => {
			let n = a.shape[e];
			return t.io === "input" ? Vo(n) === void 0 : n._zod.optout === void 0;
		}));
		c.size > 0 && (i.required = Array.from(c)), a.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : a.catchall ? a.catchall && (i.additionalProperties = k(a.catchall, t, {
			...r,
			path: [...r.path, "additionalProperties"]
		})) : t.io === "output" && (i.additionalProperties = !1);
	}, vs = (e, t, n, r) => {
		let i = e._zod.def, a = i.inclusive === !1, o = i.options.map((e, n) => k(e, t, {
			...r,
			path: [
				...r.path,
				a ? "oneOf" : "anyOf",
				n
			]
		}));
		a ? n.oneOf = o : n.anyOf = o;
	}, ys = (e, t, n, r) => {
		let i = e._zod.def, a = k(i.left, t, {
			...r,
			path: [
				...r.path,
				"allOf",
				0
			]
		}), o = k(i.right, t, {
			...r,
			path: [
				...r.path,
				"allOf",
				1
			]
		}), s = (e) => "allOf" in e && Object.keys(e).length === 1, c = [...s(a) ? a.allOf : [a], ...s(o) ? o.allOf : [o]];
		n.allOf = c, t.intersections.push(c);
	}, bs = (e, t, n, r) => {
		let i = n, a = e._zod.def;
		i.type = "array";
		let o = t.target === "draft-2020-12" ? "prefixItems" : "items", s = t.target === "draft-2020-12" || t.target === "openapi-3.0" ? "items" : "additionalItems", c = a.items.map((e, n) => k(e, t, {
			...r,
			path: [
				...r.path,
				o,
				n
			]
		})), l = a.rest ? k(a.rest, t, {
			...r,
			path: [
				...r.path,
				s,
				...t.target === "openapi-3.0" ? [a.items.length] : []
			]
		}) : null, u = a.items.length;
		for (; u > 0;) {
			let e = a.items[u - 1];
			if (!(t.io === "input" ? Vo(e) !== void 0 : e._zod.optout === "optional")) break;
			u--;
		}
		let d = a.items.length, f = !a.rest;
		t.target === "draft-2020-12" ? (i.prefixItems = c, f ? i.items = !1 : l && (i.items = l), u > 0 && (i.minItems = u), f && (i.maxItems = d)) : t.target === "openapi-3.0" ? (i.items = { anyOf: c }, l && i.items.anyOf.push(l), u > 0 && (i.minItems = u), f && (i.maxItems = d)) : (i.items = c, f ? i.additionalItems = !1 : l && (i.additionalItems = l), u > 0 && (i.minItems = u), f && (i.maxItems = d));
		let { minimum: p, maximum: m } = e._zod.bag;
		typeof p == "number" && (i.minItems = p), typeof m == "number" && (i.maxItems = m);
	}, xs = /* @__PURE__ */ new WeakMap(), Ss = (e, t, n, r) => {
		let i = n, a = e._zod.def;
		i.type = "object";
		let o = a.keyType, s = o._zod.bag?.patterns;
		if (a.mode === "loose" && s && s.size > 0) {
			let e = k(a.valueType, t, {
				...r,
				path: [
					...r.path,
					"patternProperties",
					"*"
				]
			});
			i.patternProperties = {};
			for (let t of s) x(i.patternProperties, t.source, e);
		} else {
			if (t.target === "draft-07" || t.target === "draft-2020-12") {
				i.propertyNames = k(a.keyType, t, {
					...r,
					path: [...r.path, "propertyNames"]
				});
				let n = xs.get(t);
				n || (n = [], xs.set(t, n), t.deferred.push(() => Uo(t))), n.push(e);
			}
			i.additionalProperties = k(a.valueType, t, {
				...r,
				path: [...r.path, "additionalProperties"]
			});
		}
		let c = o._zod.values, l = t.io === "input" && Vo(a.valueType) !== void 0;
		if (c && !a.partial && !l) {
			let e = [...c].filter((e) => typeof e == "string" || typeof e == "number");
			e.length > 0 && (i.required = e.map(String));
		}
	}, Cs = (e, t, n, r) => {
		let i = e._zod.def, a = k(i.innerType, t, r), o = t.seen.get(e);
		t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [a, { type: "null" }];
	}, ws = (e, t, n, r) => {
		let i = e._zod.def;
		k(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
	}, Ts = Symbol(), Es = (e, t, n, r) => {
		let i = e._zod.def;
		k(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
		let o = Wo(i.defaultValue, e, t, n, r);
		o !== Ts && (n.default = o);
	}, Ds = (e, t, n, r) => {
		let i = e._zod.def;
		k(i.innerType, t, r);
		let a = t.seen.get(e);
		if (a.ref = i.innerType, t.io !== "input") return;
		let o = Wo(i.defaultValue, e, t, n, r);
		o !== Ts && (n._prefault = o);
	}, Os = (e, t, n, r) => {
		let i = e._zod.def;
		k(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
		let o;
		try {
			o = i.catchValue(void 0);
		} catch {
			O(e, t, n, r, "Dynamic catch values are not supported in JSON Schema");
			return;
		}
		n.default = o;
	}, ks = (e, t, n, r) => {
		let i = e._zod.def, a = i.in._zod.traits.has("$ZodTransform"), o = t.io === "input" ? a ? i.out : i.in : i.out;
		k(o, t, r);
		let s = t.seen.get(e);
		s.ref = o;
	}, As = (e, t, n, r) => {
		let i = e._zod.def;
		k(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType, n.readOnly = !0;
	}, js = (e, t, n, r) => {
		let i = e._zod.def;
		k(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
	}, Ms = (e, t, n, r) => {
		let i = e._zod.def;
		k(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
	}, Ns = (e, t, n, r) => {
		let i = e._zod.innerType;
		k(i, t, r);
		let a = t.seen.get(e);
		a.ref = i;
	}, Ps = {
		string: qo,
		number: Jo,
		boolean: Yo,
		bigint: Xo,
		symbol: Zo,
		null: Qo,
		undefined: $o,
		void: es,
		never: ts,
		any: ns,
		unknown: rs,
		date: is,
		enum: as,
		literal: os,
		nan: ss,
		template_literal: cs,
		file: ls,
		success: us,
		custom: ds,
		function: fs,
		transform: ps,
		map: ms,
		set: hs,
		array: gs,
		object: _s,
		union: vs,
		intersection: ys,
		tuple: bs,
		record: Ss,
		nullable: Cs,
		nonoptional: ws,
		default: Es,
		prefault: Ds,
		catch: Os,
		pipe: ks,
		readonly: As,
		promise: js,
		optional: Ms,
		lazy: Ns
	};
})), Is = y((() => {
	Vt(), _n(), en(), Qi(), da(), hr(), yr(), Mt(), Zn(), ma(), ya(), _r(), ba(), Eo(), Bo(), Fs(), Bo();
})), Ls = y((() => {
	Is();
}));
//#endregion
//#region ../../../tmp/extbuild/documentation/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/classic/errors.js
function Rs(e, t, n) {
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
var zs, Bs, Vs, Hs = y((() => {
	Is(), Mt(), zs = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), Bs = (e, t) => {
		Qt.init(e, t), e.name = "ZodError";
		let n = Object.getPrototypeOf(e);
		zs.has(n) || (zs.add(n), Rs(n, "format", (e) => (t) => Kt(e, t)), Rs(n, "flatten", (e) => (t) => Gt(e, t)), Rs(n, "addIssue", (e) => (t) => {
			e.issues.push(t), e.message = JSON.stringify(e.issues, Le, 2);
		}), Rs(n, "addIssues", (e) => (t) => {
			e.issues.push(...t), e.message = JSON.stringify(e.issues, Le, 2);
		}), Object.defineProperty(n, "isEmpty", {
			configurable: !0,
			enumerable: !1,
			get() {
				return this.issues.length === 0;
			}
		}));
	}, Vs = /*@__PURE__*/ w("ZodError", Bs, void 0, { Parent: Error });
})), Us, Ws, Gs, Ks, qs, Js, Ys, Xs, Zs, Qs, $s, ec, tc = y((() => {
	Is(), Hs(), Us = /* @__PURE__ */ nn(Vs), Ws = /* @__PURE__ */ rn(Vs), Gs = /* @__PURE__ */ an(Vs), Ks = /* @__PURE__ */ sn(Vs), qs = /* @__PURE__ */ ln(Vs), Js = /* @__PURE__ */ un(Vs), Ys = /* @__PURE__ */ dn(Vs), Xs = /* @__PURE__ */ fn(Vs), Zs = /* @__PURE__ */ pn(Vs), Qs = /* @__PURE__ */ mn(Vs), $s = /* @__PURE__ */ hn(Vs), ec = /* @__PURE__ */ gn(Vs);
}));
//#endregion
//#region ../../../tmp/extbuild/documentation/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/classic/schemas.js
function nc() {
	Bt.localeError || Pt(fa());
}
function rc() {
	Bt.memoizer || Pt({ memoizer: na() });
}
function j(e) {
	return /* @__PURE__ */ xa(Ac, e);
}
function ic(e) {
	return /* @__PURE__ */ Oa(Rc, e);
}
function ac(e) {
	return /* @__PURE__ */ Ra(Jc, e);
}
function oc(e) {
	return /* @__PURE__ */ za(Yc, e);
}
function M(e) {
	return /* @__PURE__ */ Ja(el, e);
}
function sc(e) {
	return /* @__PURE__ */ Xa(tl, e);
}
function N(e) {
	return /* @__PURE__ */ Za(nl, e);
}
function cc() {
	return /* @__PURE__ */ Qa(rl);
}
function lc(e) {
	return /* @__PURE__ */ $a(il, e);
}
function P(e, t) {
	return /* @__PURE__ */ xo(al, e, t);
}
function F(e, t) {
	let n = {
		type: "object",
		shape: e ?? {},
		...S(t)
	};
	return new ol(n);
}
function uc(e, t) {
	return new ol({
		type: "object",
		shape: e,
		catchall: lc(),
		...S(t)
	});
}
function dc(e, t) {
	return new ol({
		type: "object",
		shape: e,
		catchall: cc(),
		...S(t)
	});
}
function fc(e, t) {
	return new sl({
		type: "union",
		options: e,
		...S(t)
	});
}
function I(e, t, n) {
	return new cl({
		type: "union",
		options: t,
		discriminator: e,
		...S(n)
	});
}
function pc(e, t) {
	return new ll({
		type: "intersection",
		left: e,
		right: t
	});
}
function mc(e, t, n) {
	let r = t instanceof E;
	return new ul({
		type: "tuple",
		items: e,
		rest: r ? t : null,
		...S(r ? n : t)
	});
}
function L(e, t, n) {
	return !t || !t._zod ? new dl({
		type: "record",
		keyType: j(),
		valueType: e,
		...S(t)
	}) : new dl({
		type: "record",
		keyType: e,
		valueType: t,
		...S(n)
	});
}
function hc(e, t, n) {
	return new dl({
		type: "record",
		keyType: e,
		valueType: t,
		...S(n),
		partial: !0
	});
}
function R(e, t) {
	let n = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e;
	return new fl({
		type: "enum",
		entries: n,
		...S(t)
	});
}
function z(e, t) {
	return new pl({
		type: "literal",
		values: Array.isArray(e) ? e : [e],
		...S(t)
	});
}
function gc(e) {
	return new ml({
		type: "transform",
		transform: e
	});
}
function _c(e) {
	return new hl({
		type: "optional",
		innerType: e
	});
}
function vc(e) {
	return new gl({
		type: "optional",
		innerType: e
	});
}
function yc(e) {
	return new _l({
		type: "nullable",
		innerType: e
	});
}
function bc(e, t) {
	return new vl({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : qe(t);
		}
	});
}
function xc(e, t) {
	return new yl({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : qe(t);
		}
	});
}
function Sc(e, t) {
	return new bl({
		type: "nonoptional",
		innerType: e,
		...S(t)
	});
}
function Cc(e, t) {
	return new xl({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : xt(t)
	});
}
function wc(e, t) {
	return new Sl({
		type: "pipe",
		in: e,
		out: t
	});
}
function Tc(e) {
	return new wl({
		type: "readonly",
		innerType: e
	});
}
function Ec(e) {
	return new Tl({
		type: "lazy",
		getter: e
	});
}
function Dc(e, t = {}) {
	return /* @__PURE__ */ So(El, e, t);
}
function Oc(e, t) {
	return /* @__PURE__ */ Co(e, t);
}
var B, kc, Ac, V, jc, Mc, Nc, Pc, Fc, Ic, Lc, Rc, zc, Bc, Vc, Hc, Uc, Wc, Gc, Kc, qc, Jc, Yc, Xc, Zc, Qc, $c, el, tl, nl, rl, il, al, ol, sl, cl, ll, ul, dl, fl, pl, ml, hl, gl, _l, vl, yl, bl, xl, Sl, Cl, wl, Tl, El, Dl, Ol = y((() => {
	Is(), Fs(), Bo(), ma(), Ls(), tc(), B = /*@__PURE__*/ w("ZodType", (e, t) => (nc(), E.init(e, t), e.def = t, e.type = t.type, e), {
		check(...e) {
			let t = this.def;
			return this.clone(He(t, { checks: [...t.checks ?? [], ...e.map((e) => typeof e == "function" ? { _zod: {
				check: e,
				def: { check: "custom" },
				onattach: []
			} } : e)] }), { parent: !0 });
		},
		with(...e) {
			return this.check(...e);
		},
		clone(e, t) {
			return Ye(this, e, t);
		},
		brand() {
			return this;
		},
		register(e, t) {
			return e.add(this, t), this;
		},
		refine(e, t) {
			return this.check(Dc(e, t));
		},
		superRefine(e, t) {
			return this.check(Oc(e, t));
		},
		overwrite(e) {
			return this.check(/* @__PURE__ */ ho(e));
		},
		optional() {
			return _c(this);
		},
		exactOptional() {
			return vc(this);
		},
		nullable() {
			return yc(this);
		},
		nullish() {
			return _c(yc(this));
		},
		nonoptional(e) {
			return Sc(this, e);
		},
		array() {
			return P(this);
		},
		or(e) {
			return fc([this, e]);
		},
		and(e) {
			return pc(this, e);
		},
		transform(e) {
			return wc(this, gc(e));
		},
		default(e) {
			return bc(this, e);
		},
		prefault(e) {
			return xc(this, e);
		},
		catch(e) {
			return Cc(this, e);
		},
		pipe(e) {
			return wc(this, e);
		},
		readonly() {
			return Tc(this);
		},
		describe(e) {
			let t = this.clone();
			return va.add(t, { description: e }), t;
		},
		meta(...e) {
			if (e.length === 0) return va.get(this);
			let t = this.clone();
			return va.add(t, e[0]), t;
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
			return _t(this, "~standard", {
				...br(this),
				jsonSchema: {
					input: zo(this, "input"),
					output: zo(this, "output")
				}
			});
		},
		set "~standard"(e) {
			gt(this, "~standard", e);
		},
		parse: function e(t, n) {
			return Us(this, t, n, { callee: e });
		},
		parseAsync: async function e(t, n) {
			return await Ws(this, t, n, { callee: e });
		},
		safeParse(e, t) {
			return Gs(this, e, t);
		},
		async safeParseAsync(e, t) {
			return Ks(this, e, t);
		},
		get spa() {
			return this?.safeParseAsync;
		},
		set spa(e) {
			gt(this, "spa", e);
		},
		encode: function e(t, n) {
			return qs(this, t, n, { callee: e });
		},
		decode: function e(t, n) {
			return Js(this, t, n, { callee: e });
		},
		encodeAsync: async function e(t, n) {
			return await Ys(this, t, n, { callee: e });
		},
		decodeAsync: async function e(t, n) {
			return await Xs(this, t, n, { callee: e });
		},
		safeEncode(e, t) {
			return Zs(this, e, t);
		},
		safeDecode(e, t) {
			return Qs(this, e, t);
		},
		async safeEncodeAsync(e, t) {
			return $s(this, e, t);
		},
		async safeDecodeAsync(e, t) {
			return ec(this, e, t);
		},
		toJSONSchema(e) {
			return Ro(this, {})(e);
		},
		get description() {
			return va.get(this)?.description;
		},
		get _def() {
			return this._zod.def;
		}
	}), kc = /*@__PURE__*/ w("_ZodString", (e, t) => {
		Xr.init(e, t), B.init(e, t), e._zod.processJSONSchema = (t, n, r) => qo(e, t, n, r);
		let n = e._zod.bag;
		e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null;
	}, {
		regex(...e) {
			return this.check(/* @__PURE__ */ co(...e));
		},
		includes(...e) {
			return this.check(/* @__PURE__ */ fo(...e));
		},
		startsWith(...e) {
			return this.check(/* @__PURE__ */ po(...e));
		},
		endsWith(...e) {
			return this.check(/* @__PURE__ */ mo(...e));
		},
		min(...e) {
			return this.check(/* @__PURE__ */ oo(...e));
		},
		max(...e) {
			return this.check(/* @__PURE__ */ ao(...e));
		},
		length(...e) {
			return this.check(/* @__PURE__ */ so(...e));
		},
		nonempty(...e) {
			return this.check(/* @__PURE__ */ oo(1, ...e));
		},
		lowercase(e) {
			return this.check(/* @__PURE__ */ lo(e));
		},
		uppercase(e) {
			return this.check(/* @__PURE__ */ uo(e));
		},
		trim() {
			return this.check(/* @__PURE__ */ _o());
		},
		normalize(...e) {
			return this.check(/* @__PURE__ */ go(...e));
		},
		toLowerCase() {
			return this.check(/* @__PURE__ */ vo());
		},
		toUpperCase() {
			return this.check(/* @__PURE__ */ yo());
		},
		slugify() {
			return this.check(/* @__PURE__ */ bo());
		}
	}), Ac = /*@__PURE__*/ w("ZodString", (e, t) => {
		Xr.init(e, t), kc.init(e, t);
	}, {
		email(e) {
			return this.check(/* @__PURE__ */ Sa(Fc, e));
		},
		url(e) {
			return this.check(/* @__PURE__ */ Oa(Rc, e));
		},
		jwt(e) {
			return this.check(/* @__PURE__ */ Ua($c, e));
		},
		emoji(e) {
			return this.check(/* @__PURE__ */ ka(zc, e));
		},
		guid(e) {
			return this.check(/* @__PURE__ */ Ca(Ic, e));
		},
		uuid(e) {
			return this.check(/* @__PURE__ */ wa(Lc, e));
		},
		uuidv4(e) {
			return this.check(/* @__PURE__ */ Ta(Lc, e));
		},
		uuidv6(e) {
			return this.check(/* @__PURE__ */ Ea(Lc, e));
		},
		uuidv7(e) {
			return this.check(/* @__PURE__ */ Da(Lc, e));
		},
		nanoid(e) {
			return this.check(/* @__PURE__ */ Aa(Bc, e));
		},
		cuid(e) {
			return this.check(/* @__PURE__ */ ja(Vc, e));
		},
		cuid2(e) {
			return this.check(/* @__PURE__ */ Ma(Hc, e));
		},
		ulid(e) {
			return this.check(/* @__PURE__ */ Na(Uc, e));
		},
		base64(e) {
			return this.check(/* @__PURE__ */ Ba(Xc, e));
		},
		base64url(e) {
			return this.check(/* @__PURE__ */ Va(Zc, e));
		},
		xid(e) {
			return this.check(/* @__PURE__ */ Pa(Wc, e));
		},
		ksuid(e) {
			return this.check(/* @__PURE__ */ Fa(Gc, e));
		},
		ipv4(e) {
			return this.check(/* @__PURE__ */ Ia(Kc, e));
		},
		ipv6(e) {
			return this.check(/* @__PURE__ */ La(qc, e));
		},
		cidrv4(e) {
			return this.check(/* @__PURE__ */ Ra(Jc, e));
		},
		cidrv6(e) {
			return this.check(/* @__PURE__ */ za(Yc, e));
		},
		e164(e) {
			return this.check(/* @__PURE__ */ Ha(Qc, e));
		},
		datetime(e) {
			return this.check(/* @__PURE__ */ Wa(jc, e));
		},
		date(e) {
			return this.check(/* @__PURE__ */ Ga(Mc, e));
		},
		time(e) {
			return this.check(/* @__PURE__ */ Ka(Nc, e));
		},
		duration(e) {
			return this.check(/* @__PURE__ */ qa(Pc, e));
		}
	}), V = /*@__PURE__*/ w("ZodStringFormat", (e, t) => {
		D.init(e, t), kc.init(e, t);
	}), jc = /*@__PURE__*/ w("ZodISODateTime", (e, t) => {
		li.init(e, t), V.init(e, t);
	}), Mc = /*@__PURE__*/ w("ZodISODate", (e, t) => {
		ui.init(e, t), V.init(e, t);
	}), Nc = /*@__PURE__*/ w("ZodISOTime", (e, t) => {
		di.init(e, t), V.init(e, t);
	}), Pc = /*@__PURE__*/ w("ZodISODuration", (e, t) => {
		fi.init(e, t), V.init(e, t);
	}), Fc = /*@__PURE__*/ w("ZodEmail", (e, t) => {
		$r.init(e, t), V.init(e, t);
	}), Ic = /*@__PURE__*/ w("ZodGUID", (e, t) => {
		Zr.init(e, t), V.init(e, t);
	}), Lc = /*@__PURE__*/ w("ZodUUID", (e, t) => {
		Qr.init(e, t), V.init(e, t);
	}), Rc = /*@__PURE__*/ w("ZodURL", (e, t) => {
		ti.init(e, t), V.init(e, t);
	}), zc = /*@__PURE__*/ w("ZodEmoji", (e, t) => {
		ni.init(e, t), V.init(e, t);
	}), Bc = /*@__PURE__*/ w("ZodNanoID", (e, t) => {
		ri.init(e, t), V.init(e, t);
	}), Vc = /*@__PURE__*/ w("ZodCUID", (e, t) => {
		ii.init(e, t), V.init(e, t);
	}), Hc = /*@__PURE__*/ w("ZodCUID2", (e, t) => {
		ai.init(e, t), V.init(e, t);
	}), Uc = /*@__PURE__*/ w("ZodULID", (e, t) => {
		oi.init(e, t), V.init(e, t);
	}), Wc = /*@__PURE__*/ w("ZodXID", (e, t) => {
		si.init(e, t), V.init(e, t);
	}), Gc = /*@__PURE__*/ w("ZodKSUID", (e, t) => {
		ci.init(e, t), V.init(e, t);
	}), Kc = /*@__PURE__*/ w("ZodIPv4", (e, t) => {
		pi.init(e, t), V.init(e, t);
	}), qc = /*@__PURE__*/ w("ZodIPv6", (e, t) => {
		hi.init(e, t), V.init(e, t);
	}), Jc = /*@__PURE__*/ w("ZodCIDRv4", (e, t) => {
		gi.init(e, t), V.init(e, t);
	}), Yc = /*@__PURE__*/ w("ZodCIDRv6", (e, t) => {
		_i.init(e, t), V.init(e, t);
	}), Xc = /*@__PURE__*/ w("ZodBase64", (e, t) => {
		vi.init(e, t), V.init(e, t);
	}), Zc = /*@__PURE__*/ w("ZodBase64URL", (e, t) => {
		yi.init(e, t), V.init(e, t);
	}), Qc = /*@__PURE__*/ w("ZodE164", (e, t) => {
		bi.init(e, t), V.init(e, t);
	}), $c = /*@__PURE__*/ w("ZodJWT", (e, t) => {
		xi.init(e, t), V.init(e, t);
	}), el = /*@__PURE__*/ w("ZodNumber", (e, t) => {
		Si.init(e, t), B.init(e, t), e._zod.processJSONSchema = (t, n, r) => Jo(e, t, n, r);
		let n = e._zod.bag;
		e.minValue = Math.max(n.minimum ?? -Infinity, n.exclusiveMinimum ?? -Infinity) ?? null, e.maxValue = Math.min(n.maximum ?? Infinity, n.exclusiveMaximum ?? Infinity) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? .5), e.isFinite = !0, e.format = n.format ?? null;
	}, {
		gt(e, t) {
			return this.check(/* @__PURE__ */ no(e, t));
		},
		gte(e, t) {
			return this.check(/* @__PURE__ */ ro(e, t));
		},
		min(e, t) {
			return this.check(/* @__PURE__ */ ro(e, t));
		},
		lt(e, t) {
			return this.check(/* @__PURE__ */ eo(e, t));
		},
		lte(e, t) {
			return this.check(/* @__PURE__ */ to(e, t));
		},
		max(e, t) {
			return this.check(/* @__PURE__ */ to(e, t));
		},
		int(e) {
			return this.check(sc(e));
		},
		safe(e) {
			return this.check(sc(e));
		},
		positive(e) {
			return this.check(/* @__PURE__ */ no(0, e));
		},
		nonnegative(e) {
			return this.check(/* @__PURE__ */ ro(0, e));
		},
		negative(e) {
			return this.check(/* @__PURE__ */ eo(0, e));
		},
		nonpositive(e) {
			return this.check(/* @__PURE__ */ to(0, e));
		},
		multipleOf(e, t) {
			return this.check(/* @__PURE__ */ io(e, t));
		},
		step(e, t) {
			return this.check(/* @__PURE__ */ io(e, t));
		},
		finite() {
			return this;
		}
	}), tl = /*@__PURE__*/ w("ZodNumberFormat", (e, t) => {
		Ci.init(e, t), el.init(e, t);
	}), nl = /*@__PURE__*/ w("ZodBoolean", (e, t) => {
		wi.init(e, t), B.init(e, t), e._zod.processJSONSchema = (t, n, r) => Yo(e, t, n, r);
	}), rl = /*@__PURE__*/ w("ZodUnknown", (e, t) => {
		Ti.init(e, t), B.init(e, t), e._zod.processJSONSchema = (t, n, r) => rs(e, t, n, r);
	}), il = /*@__PURE__*/ w("ZodNever", (e, t) => {
		Ei.init(e, t), B.init(e, t), e._zod.processJSONSchema = (t, n, r) => ts(e, t, n, r);
	}), al = /*@__PURE__*/ w("ZodArray", (e, t) => {
		rc(), Di.init(e, t), B.init(e, t), e._zod.processJSONSchema = (t, n, r) => gs(e, t, n, r), e.element = t.element;
	}, {
		min(e, t) {
			return this.check(/* @__PURE__ */ oo(e, t));
		},
		nonempty(e) {
			return this.check(/* @__PURE__ */ oo(1, e));
		},
		max(e, t) {
			return this.check(/* @__PURE__ */ ao(e, t));
		},
		length(e, t) {
			return this.check(/* @__PURE__ */ so(e, t));
		},
		unwrap() {
			return this.element;
		}
	}), ol = /*@__PURE__*/ w("ZodObject", (e, t) => {
		rc(), ji.init(e, t), B.init(e, t), e._zod.processJSONSchema = (t, n, r) => _s(e, t, n, r), bt(e, "shape", (e) => e._zod.def.shape, !1);
	}, {
		keyof() {
			return R(Object.keys(this._zod.def.shape));
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
				catchall: cc()
			});
		},
		loose() {
			return this.clone({
				...this._zod.def,
				catchall: cc()
			});
		},
		strict() {
			return this.clone({
				...this._zod.def,
				catchall: lc()
			});
		},
		strip() {
			return this.clone({
				...this._zod.def,
				catchall: void 0
			});
		},
		extend(e) {
			return et(this, e);
		},
		safeExtend(e) {
			return tt(this, e);
		},
		merge(e) {
			return nt(this, e);
		},
		pick(e) {
			return Qe(this, e);
		},
		omit(e) {
			return $e(this, e);
		},
		partial(...e) {
			return rt(hl, this, e[0]);
		},
		exactPartial(...e) {
			return rt(gl, this, e[0], "exactPartial");
		},
		required(...e) {
			return it(bl, this, e[0]);
		}
	}), sl = /*@__PURE__*/ w("ZodUnion", (e, t) => {
		Mi.init(e, t), B.init(e, t), e._zod.processJSONSchema = (t, n, r) => vs(e, t, n, r), e.options = t.options;
	}), cl = /*@__PURE__*/ w("ZodDiscriminatedUnion", (e, t) => {
		sl.init(e, t), Ni.init(e, t);
	}), ll = /*@__PURE__*/ w("ZodIntersection", (e, t) => {
		Pi.init(e, t), B.init(e, t), e._zod.processJSONSchema = (t, n, r) => ys(e, t, n, r);
	}), ul = /*@__PURE__*/ w("ZodTuple", (e, t) => {
		rc(), Fi.init(e, t), B.init(e, t), e._zod.processJSONSchema = (t, n, r) => bs(e, t, n, r);
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
				items: e.items.map((e) => new hl({
					type: "optional",
					innerType: e
				}))
			});
		}
	}), dl = /*@__PURE__*/ w("ZodRecord", (e, t) => {
		rc(), Ii.init(e, t), B.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ss(e, t, n, r), e.keyType = t.keyType, e.valueType = t.valueType;
	}), fl = /*@__PURE__*/ w("ZodEnum", (e, t) => {
		Li.init(e, t), B.init(e, t), e._zod.processJSONSchema = (t, n, r) => as(e, t, n, r), e.enum = t.entries, e.options = Object.values(t.entries);
		let n = new Set(Object.keys(t.entries));
		e.extract = (e, r) => {
			let i = {};
			for (let r of e) if (n.has(r)) i[r] = t.entries[r];
			else throw Error(`Key ${r} not found in enum`);
			return new fl({
				...t,
				checks: [],
				...S(r),
				entries: i
			});
		}, e.exclude = (e, r) => {
			let i = { ...t.entries };
			for (let t of e) if (n.has(t)) delete i[t];
			else throw Error(`Key ${t} not found in enum`);
			return new fl({
				...t,
				checks: [],
				...S(r),
				entries: i
			});
		};
	}), pl = /*@__PURE__*/ w("ZodLiteral", (e, t) => {
		Ri.init(e, t), B.init(e, t), e._zod.processJSONSchema = (t, n, r) => os(e, t, n, r), e.values = new Set(t.values), Object.defineProperty(e, "value", { get() {
			if (t.values.length > 1) throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
			return t.values[0];
		} });
	}), ml = /*@__PURE__*/ w("ZodTransform", (e, t) => {
		rc(), zi.init(e, t), B.init(e, t), e._zod.processJSONSchema = (t, n, r) => ps(e, t, n, r), e._zod.parse = (n, r) => {
			if (r.direction === "backward") throw new zt(e.constructor.name);
			n.addIssue = (r) => {
				if (typeof r == "string") n.issues.push(mt(r, n.value, t));
				else {
					let t = r;
					t.fatal && (t.continue = !1), t.code ??= "custom", "input" in t || (t.input = n.value), t.inst ??= e, n.issues.push(mt(t));
				}
			};
			let i = t.transform(n.value, n);
			return i instanceof Promise ? i.then((e) => (n.value = e, n)) : (n.value = i, n);
		};
	}), hl = /*@__PURE__*/ w("ZodOptional", (e, t) => {
		Bi.init(e, t), B.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ms(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), gl = /*@__PURE__*/ w("ZodExactOptional", (e, t) => {
		Vi.init(e, t), B.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ms(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), _l = /*@__PURE__*/ w("ZodNullable", (e, t) => {
		Hi.init(e, t), B.init(e, t), e._zod.processJSONSchema = (t, n, r) => Cs(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), vl = /*@__PURE__*/ w("ZodDefault", (e, t) => {
		Ui.init(e, t), B.init(e, t), e._zod.processJSONSchema = (t, n, r) => Es(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
	}), yl = /*@__PURE__*/ w("ZodPrefault", (e, t) => {
		Wi.init(e, t), B.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ds(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), bl = /*@__PURE__*/ w("ZodNonOptional", (e, t) => {
		Gi.init(e, t), B.init(e, t), e._zod.processJSONSchema = (t, n, r) => ws(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), xl = /*@__PURE__*/ w("ZodCatch", (e, t) => {
		Ki.init(e, t), B.init(e, t), e._zod.processJSONSchema = (t, n, r) => Os(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
	}), Sl = /*@__PURE__*/ w("ZodPipe", (e, t) => {
		qi.init(e, t), B.init(e, t), e._zod.processJSONSchema = (t, n, r) => ks(e, t, n, r), e.in = t.in, e.out = t.out;
	}), Cl = /*@__PURE__*/ w("ZodCodec", (e, t) => {
		Sl.init(e, t), Ji.init(e, t);
	}), wl = /*@__PURE__*/ w("ZodReadonly", (e, t) => {
		Yi.init(e, t), B.init(e, t), e._zod.processJSONSchema = (t, n, r) => As(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), Tl = /*@__PURE__*/ w("ZodLazy", (e, t) => {
		Xi.init(e, t), B.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ns(e, t, n, r), e.unwrap = () => e._zod.def.getter();
	}), El = /*@__PURE__*/ w("ZodCustom", (e, t) => {
		Zi.init(e, t), B.init(e, t), e._zod.processJSONSchema = (t, n, r) => ds(e, t, n, r);
	}), Dl = (...e) => /* @__PURE__ */ To({
		Codec: Cl,
		Boolean: nl,
		String: Ac
	}, ...e);
})), kl = y((() => {
	Is();
}));
//#endregion
//#region ../../../tmp/extbuild/documentation/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/classic/iso.js
function Al(e) {
	return /* @__PURE__ */ Wa(jc, e);
}
var jl = y((() => {
	Is(), Ol();
}));
//#endregion
//#region ../../../tmp/extbuild/documentation/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/classic/coerce.js
function H(e) {
	return /* @__PURE__ */ Ya(el, e);
}
var Ml = y((() => {
	Is(), Ol();
})), Nl = y((() => {
	Is(), Ol(), Ls(), Hs(), tc(), kl(), Fs(), ya(), Mt(), Ls(), jl(), Ol(), Qi(), ma(), Ml();
})), U = y((() => {
	Nl(), Nl();
})), Pl, Fl, Il, Ll, Rl, zl, Bl, Vl = y((() => {
	U(), Pl = (e) => {
		if (typeof e != "object" || !e || !("~orpc" in e)) return;
		let { route: t } = e["~orpc"];
		if (t?.method !== void 0 && t.path !== void 0) return {
			method: t.method,
			path: t.path
		};
	}, Fl = (e) => {
		let t = [];
		for (let [n, r] of Object.entries(e)) if (typeof r == "object" && r) for (let [e, i] of Object.entries(r)) {
			let r = Pl(i);
			r !== void 0 && t.push({
				name: `${n}.${e}`,
				method: r.method,
				path: r.path
			});
		}
		return t.toSorted((e, t) => e.name.localeCompare(t.name));
	}, Il = /* @__PURE__ */ new Set([
		"required",
		"enum",
		"anyOf",
		"oneOf",
		"allOf"
	]), Ll = (e, t) => {
		if (Array.isArray(e)) {
			let n = e.map((e) => Ll(e));
			return t !== void 0 && Il.has(t) ? n.toSorted((e, t) => JSON.stringify(e).localeCompare(JSON.stringify(t))) : n;
		}
		return typeof e != "object" || !e ? e : Object.entries(e).toSorted(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [e, Ll(t, e)]);
	}, Rl = (e) => {
		let t = JSON.stringify(Ll(e)), n = 2166136261;
		for (let e = 0; e < t.length; e++) n ^= t.charCodeAt(e), n = Math.imul(n, 16777619) >>> 0;
		return n.toString(36);
	}, zl = (e) => {
		if (typeof e != "object" || !e || !("~orpc" in e)) return;
		let { inputSchema: t, outputSchema: n } = e["~orpc"];
		try {
			return Rl({
				in: t === void 0 ? void 0 : Go(t, { io: "input" }),
				out: n === void 0 ? void 0 : Go(n, { io: "output" })
			});
		} catch {
			return;
		}
	}, Bl = (e) => {
		let t = {};
		for (let [n, r] of Object.entries(e)) if (typeof r == "object" && r) for (let [e, i] of Object.entries(r)) {
			if (Pl(i) === void 0) continue;
			let r = zl(i);
			r !== void 0 && (t[`${n}.${e}`] = r);
		}
		return t;
	};
}));
//#endregion
//#region ../../../tmp/extbuild/documentation/node_modules/.pnpm/@orpc+shared@1.14.13/node_modules/@orpc/shared/dist/index.mjs
function Hl(e) {
	return e[0] ?? {};
}
function Ul(e) {
	let t = Promise.resolve();
	return (...n) => t = t.catch(() => {}).then(() => e(...n));
}
function Wl(e) {
	return !e || typeof e != "object" ? !1 : "next" in e && typeof e.next == "function" && Symbol.asyncIterator in e && typeof e[Symbol.asyncIterator] == "function";
}
function Gl(e) {
	return Kl(e) ? Object.getPrototypeOf(e)?.constructor : null;
}
function Kl(e) {
	return !!e && (typeof e == "object" || typeof e == "function");
}
var ql, Jl, Yl, Xl, Zl = y((() => {
	ql = "@orpc/shared", Jl = "1.14.13", `${ql}${Jl}`, Yl = Symbol.asyncDispose ?? Symbol.for("asyncDispose"), Xl = class {
		#e = !1;
		#t = !1;
		#n;
		#r;
		constructor(e, t) {
			this.#n = t, this.#r = Ul(async () => {
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
		async [Yl]() {
			this.#e = !0, this.#t || (this.#t = !0, await this.#n("dispose"));
		}
		[Symbol.asyncIterator]() {
			return this;
		}
	};
}));
//#endregion
//#region ../../../tmp/extbuild/documentation/node_modules/.pnpm/@orpc+client@1.14.13/node_modules/@orpc/client/dist/shared/client.DexhfmWd.mjs
function Ql(e, t) {
	return t ?? ru[e]?.status ?? 500;
}
function $l(e, t) {
	return t || ru[e]?.message || e;
}
function eu(e) {
	return e < 200 || e >= 400;
}
var tu, nu, ru, iu, au, ou = y((() => {
	Zl(), tu = "@orpc/client", nu = "1.14.13", ru = {
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
	}, au = class e extends Error {
		defined;
		code;
		status;
		data;
		static {
			let t = Symbol.for(`__${tu}@${nu}/error/ORPC_ERROR_CONSTRUCTORS__`);
			globalThis[t] ??= /* @__PURE__ */ new WeakSet(), iu = globalThis[t], iu.add(e);
		}
		constructor(e, ...t) {
			let n = Hl(t);
			if (n.status !== void 0 && !eu(n.status)) throw Error("[ORPCError] Invalid error status code.");
			let r = $l(e, n.message);
			super(r, n), this.code = e, this.status = Ql(e, n.status), this.defined = n.defined ?? !1, this.data = n.data;
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
			if (iu.has(this)) {
				let t = Gl(e);
				if (t && iu.has(t)) return !0;
			}
			return super[Symbol.hasInstance](e);
		}
	};
}));
function su(e) {
	return mu.test(e);
}
function cu(e) {
	if (su(e)) throw new pu("Event's id must not contain a carriage return or newline character");
}
function lu(e) {
	if (!Number.isInteger(e) || e < 0) throw new pu("Event's retry must be a integer and >= 0");
}
function uu(e) {
	if (su(e)) throw new pu("Event's comment must not contain a carriage return or newline character");
}
function du(e, t) {
	if (t.id === void 0 && t.retry === void 0 && !t.comments?.length) return e;
	if (t.id !== void 0 && cu(t.id), t.retry !== void 0 && lu(t.retry), t.comments !== void 0) for (let e of t.comments) uu(e);
	return new Proxy(e, { get(e, n, r) {
		return n === hu ? t : Reflect.get(e, n, r);
	} });
}
function fu(e) {
	return Kl(e) ? Reflect.get(e, hu) : void 0;
}
var pu, mu, hu, gu = y((() => {
	Zl(), pu = class extends TypeError {}, TransformStream, mu = /\r\n|[\n\r]/, hu = Symbol("ORPC_EVENT_SOURCE_META");
}));
//#endregion
//#region ../../../tmp/extbuild/documentation/node_modules/.pnpm/@orpc+client@1.14.13/node_modules/@orpc/client/dist/shared/client.BLtwTQUg.mjs
function _u(e, t) {
	let n = async (e) => {
		let n = await t.error(e);
		if (n !== e) {
			let t = fu(e);
			t && Kl(n) && (n = du(n, t));
		}
		return n;
	};
	return new Xl(async () => {
		let { done: r, value: i } = await (async () => {
			try {
				return await e.next();
			} catch (e) {
				throw await n(e);
			}
		})(), a = await t.value(i, r);
		if (a !== i) {
			let e = fu(i);
			e && Kl(a) && (a = du(a, e));
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
var vu = y((() => {
	Zl(), gu();
})), yu = y((() => {
	Zl(), ou(), vu(), gu();
}));
//#endregion
//#region ../../../tmp/extbuild/documentation/node_modules/.pnpm/@orpc+contract@1.14.13/node_modules/@orpc/contract/dist/shared/contract.D_dZrO__.mjs
function bu(e, t) {
	return {
		...e,
		...t
	};
}
function xu(e) {
	return e instanceof Cu || (typeof e == "object" || typeof e == "function") && e !== null && "~orpc" in e && typeof e["~orpc"] == "object" && e["~orpc"] !== null && "errorMap" in e["~orpc"] && "route" in e["~orpc"] && "meta" in e["~orpc"];
}
var Su, Cu, wu = y((() => {
	yu(), Su = class extends Error {
		issues;
		data;
		constructor(e) {
			super(e.message, e), this.issues = e.issues, this.data = e.data;
		}
	}, Cu = class {
		"~orpc";
		constructor(e) {
			if (e.route?.successStatus && eu(e.route.successStatus)) throw Error("[ContractProcedure] Invalid successStatus.");
			if (Object.values(e.errorMap).some((e) => e && e.status && !eu(e.status))) throw Error("[ContractProcedure] Invalid error status code.");
			this["~orpc"] = e;
		}
	};
}));
//#endregion
//#region ../../../tmp/extbuild/documentation/node_modules/.pnpm/@orpc+contract@1.14.13/node_modules/@orpc/contract/dist/index.mjs
function Tu(e, t) {
	return {
		...e,
		...t
	};
}
function Eu(e, t) {
	return {
		...e,
		...t
	};
}
function Du(e, t) {
	return e.path ? {
		...e,
		path: `${t}${e.path}`
	} : e;
}
function Ou(e, t) {
	return {
		...e,
		tags: [...t, ...e.tags ?? []]
	};
}
function ku(e, t) {
	return e ? `${e}${t}` : t;
}
function Au(e, t) {
	return e ? [...e, ...t] : t;
}
function ju(e, t) {
	let n = e;
	return t.prefix && (n = Du(n, t.prefix)), t.tags?.length && (n = Ou(n, t.tags)), n;
}
function Mu(e, t) {
	if (xu(e)) return new Cu({
		...e["~orpc"],
		errorMap: bu(t.errorMap, e["~orpc"].errorMap),
		route: ju(e["~orpc"].route, t)
	});
	if (typeof e != "object" || !e) return e;
	let n = {};
	for (let r in e) n[r] = Mu(e[r], t);
	return n;
}
function W(e, t) {
	return { "~standard": {
		[Pu]: {
			yields: e,
			returns: t
		},
		vendor: "orpc",
		version: 1,
		validate(n) {
			return Wl(n) ? { value: _u(n, {
				async value(n, r) {
					let i = r ? t : e;
					if (!i) return n;
					let a = await i["~standard"].validate(n);
					if (a.issues) throw new au("EVENT_ITERATOR_VALIDATION_FAILED", {
						message: "Event iterator validation failed",
						cause: new Su({
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
var Nu, G, Pu, K = y((() => {
	wu(), Zl(), yu(), Nu = class e extends Cu {
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
				errorMap: bu(this["~orpc"].errorMap, t)
			});
		}
		meta(t) {
			return new e({
				...this["~orpc"],
				meta: Tu(this["~orpc"].meta, t)
			});
		}
		route(t) {
			return new e({
				...this["~orpc"],
				route: Eu(this["~orpc"].route, t)
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
				prefix: ku(this["~orpc"].prefix, t)
			});
		}
		tag(...t) {
			return new e({
				...this["~orpc"],
				tags: Au(this["~orpc"].tags, t)
			});
		}
		router(e) {
			return Mu(e, this["~orpc"]);
		}
	}, G = new Nu({
		errorMap: {},
		route: {},
		meta: {}
	}), Pu = Symbol("ORPC_EVENT_ITERATOR_DETAILS");
})), Fu, Iu = y((() => {
	Fu = /^[a-zA-Z0-9][a-zA-Z0-9_-]{0,63}$/;
})), Lu, Ru, zu, Bu, Vu = y((() => {
	U(), R(["helper", "run"]), Lu = [
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
	], Ru = Lu.map((e) => e.id), zu = R(Ru), Bu = (e) => Lu.filter((t) => e(t)), Bu((e) => e.kind === "helper"), Bu((e) => e.kind === "run" && e.trigger === "pressed"), Bu((e) => e.kind === "run" && e.trigger === "unprompted");
})), Hu, Uu, Wu, Gu, Ku, qu = y((() => {
	Hu = {
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
	}, Uu = {
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
	}, Wu = {
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
	}, Gu = {
		...Wu,
		runtime: "opencode-gemini"
	}, Ku = {
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
})), Ju, Yu, Xu, Zu = y((() => {
	qu(), Ju = [
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
				native: Hu,
				claudeCode: Hu
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
				native: Uu,
				claudeCode: Hu
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
				native: Wu,
				claudeCode: Hu
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
				native: Hu,
				claudeCode: Hu
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
				native: Gu,
				claudeCode: Gu
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
				native: Ku,
				claudeCode: Ku
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
				native: Hu,
				claudeCode: Hu
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
				native: Hu,
				claudeCode: Hu
			}
		}
	], Yu = Ju.map((e) => e.id), new Map(Ju.map((e) => [e.id, e])), Xu = Ju.filter((e) => e.auth.kind === "translator").map((e) => e.id), Ju.filter((e) => e.auth.kind === "minted").map((e) => e.id);
})), Qu, $u = y((() => {
	U(), Qu = F({
		subject: j(),
		detail: j()
	});
})), ed, td, nd, rd, id, ad, od = y((() => {
	U(), $u(), F({
		type: z("runner-hello"),
		token: j(),
		version: j(),
		image: j(),
		channel: j().optional(),
		overlayHash: j().optional(),
		definitionToml: j().optional()
	}), F({
		agent: j().optional(),
		account: j().optional(),
		model: j().optional()
	}), fc([
		F({
			ok: z(!0),
			kind: z("oauth"),
			accessToken: j(),
			account: j().optional()
		}),
		F({
			ok: z(!0),
			kind: z("parent-translator"),
			model: j(),
			trial: N().optional()
		}),
		F({
			ok: z(!0),
			kind: z("endpoint"),
			baseUrl: j(),
			authToken: j(),
			model: j(),
			trial: N().optional()
		}),
		F({
			ok: z(!1),
			code: R([
				"subscription-required",
				"claude-reauth",
				"trial-unavailable"
			]).optional(),
			message: j()
		})
	]), F({
		account: j().min(1),
		rejected: j().min(1)
	}), F({ accessToken: j().optional() }), ed = F({
		cpus: M().int().positive(),
		memoryMb: M().int().positive(),
		freeDiskMb: M().int().nonnegative(),
		load: M().nonnegative()
	}), td = R([
		"current",
		"outdated",
		"unknown"
	]), F({
		id: j(),
		host: j().optional(),
		online: N(),
		version: j().optional(),
		image: j().optional(),
		channel: j().optional(),
		overlayHash: j().optional(),
		facts: ed.optional(),
		lastSeen: M().optional(),
		parity: td,
		drift: P(Qu).optional()
	}), nd = F({
		op: R(["pull", "push"]),
		conversationId: j().min(1),
		branch: j().min(1),
		repos: P(F({
			repo: j().min(1),
			dir: j(),
			mainBranch: j().min(1)
		}))
	}), rd = fc([F({
		kind: z("line"),
		text: j()
	}), F({
		kind: z("done"),
		ok: N(),
		detail: j().optional()
	})]), id = F({
		conversationId: j().min(1),
		branch: j().min(1),
		prompt: j(),
		provider: j(),
		harness: j(),
		model: j().optional(),
		effort: j().optional(),
		thinking: N().optional(),
		fast: N().optional(),
		account: j().optional(),
		sessionId: j().optional(),
		attachments: P(F({
			path: j().min(1),
			bytesBase64: j()
		})).optional()
	}), ad = fc([F({ kind: z("local") }), F({
		kind: z("runner"),
		id: j().min(1)
	})]);
})), q, sd, cd, ld = y((() => {
	U(), q = j().min(1).max(60).regex(/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/), sd = j().regex(/^[A-Za-z0-9][A-Za-z0-9._/-]*$/).max(200), cd = R(["on", "off"]).default("off");
})), ud, dd, fd, pd, md, hd, gd, _d, vd, yd, bd, xd, Sd, Cd, wd, Td, Ed, Dd, J = y((() => {
	U(), Iu(), Vu(), Zu(), od(), ld(), ud = j().min(1), dd = F({ provider: R(Yu) }), fd = R(["native", "claude-code"]), pd = F({
		repo: j(),
		base: j().min(1)
	}), md = F({
		file: j().min(1).describe("The file open in the editor, as a workspace path."),
		startLine: M().int().min(1).optional().describe("First line of the selection, counting from one. Leave both out when the whole file is the context."),
		endLine: M().int().min(1).optional().describe("Last line of the selection, counting from one."),
		selection: j().max(2e4).optional().describe("The selected text itself. Cut it down before sending if it is long: this is context, not an upload.")
	}), hd = j().regex(Fu), gd = F({
		automationId: j(),
		provider: j(),
		channelId: j().optional(),
		author: j().optional()
	}), R([
		"schedule",
		"event",
		"listener",
		"webchat",
		"issues",
		"workspace",
		"workflow"
	]), _d = R([
		"allow",
		"hold",
		"deny"
	]), vd = R(["sandbox", "device"]), yd = R([
		"git.destructive",
		"files.destructive",
		"system.destructive",
		"container.state",
		"secrets.access",
		"package.publish",
		"network.outbound"
	]), bd = F({
		schedule: _d.default("allow"),
		event: _d.default("allow"),
		listener: _d.default("allow"),
		webchat: _d.default("allow"),
		issues: _d.default("hold"),
		workspace: _d.default("allow"),
		workflow: R(["allow", "deny"]).default("allow")
	}), xd = R([
		"default",
		"plan",
		"bypassPermissions"
	]), Sd = F({
		conversationId: hd,
		index: M().int().nonnegative(),
		files: R(["then", "now"])
	}), Cd = F({
		prompt: j().describe("What to say to the agent. May be empty if you are only attaching files."),
		title: j().max(80).optional().describe("A title for a conversation this turn is opening. Ignored for a conversation that already has one."),
		attachments: P(j().min(1)).max(20).optional().describe("Files to hand the agent along with the prompt, as workspace paths. Upload them first."),
		agent: ud.optional().describe("Which model provider serves this turn. Leave it out for Claude."),
		harness: fd.optional().describe("Which agentic loop runs the turn. Leave it out to use each provider's own."),
		account: j().optional().describe("Which of that provider's connected accounts pays for the turn. Leave it out for the first one."),
		actsAs: q.optional().describe("Which persona the turn speaks as out in the world. Not the same as which account pays for it."),
		sessionId: j().optional().describe("Resume this provider session instead of starting a fresh one."),
		conversationId: hd.optional().describe("The conversation this turn belongs to. You choose it, it survives model switches, and it is how you address the conversation later. Naming one that does not exist opens it."),
		isolated: N().optional().describe("Work in this conversation's own private copy of the repos rather than the shared tree, so several agents can work at once. Needs a conversation id."),
		startIn: j().max(200).optional().describe("Which folder the conversation opens in, relative to the workspace root; the project it belongs to. Decided on the first turn. A persona that names its own start folder wins."),
		placement: ad.optional().describe("Where this conversation runs: this sandbox (leave it out), or a paired runner by id. Decided on the first turn; later turns follow the conversation."),
		worktreeBase: P(pd).min(1).max(50).optional().describe("Pin a new private copy to these exact commits instead of today's workspace. Used when several agents must start from identical files."),
		autoLand: N().optional().describe("Whether this turn's work merges into the workspace when it finishes. Overrides the conversation's own setting for this turn only."),
		runRole: zu.optional().describe("What started this turn, when it was not a person typing: which of the sandbox's per-job model lists answers for it. Only used when the turn names no model of its own."),
		origin: gd.optional().describe("Set by the sandbox alone: this turn opened a conversation on behalf of a message from outside rather than a person."),
		forkOf: F({
			conversationId: hd.describe("The conversation this one was cut from."),
			keep: M().int().nonnegative().describe("How many of that conversation's messages to copy in before this turn runs."),
			files: R(["then", "now"]).describe("Which files the fork opens on: \"now\" is the workspace as it stands, \"then\" is the files as they were at the cut, which needs a private copy.")
		}).optional().describe("Where this conversation was cut from, on its first turn only. Only the client knows this, so only the client can say it."),
		model: j().optional().describe("Which model to use. Leave it out for the provider's default."),
		unattended: N().optional().describe("Nobody chose a model for this turn because a screen started it rather than a person. The sandbox then fills in the model its owner picked for unwatched work."),
		outsideWake: j().min(1).optional().describe("Content from outside caused this turn, and what to call the source. It is what makes the sandbox treat the turn as carrying somebody else's words."),
		permissionMode: xd.optional().describe("How tool calls are gated: ask before each tool, propose a plan first, or run everything. The agent can move itself between these mid-turn."),
		allowedTools: P(j().min(1)).optional().describe("Narrow the turn to these tools. Leave it out for everything the runtime has. For a turn driven by an outside message this list is the real boundary, because prompt wording is only advice."),
		effort: j().optional().describe("How hard the model should think, where the provider offers a choice."),
		thinking: N().optional().describe("Whether to show the model's reasoning as it works."),
		fast: N().optional().describe("Ask for the same work at a higher rate for a higher price. A request rather than a promise: the answer says what actually happened."),
		tierHold: N().optional().describe("Run exactly the model that was picked, even when the turn looks simple enough for a cheaper one. The judgement is still recorded; nothing is substituted."),
		editorContext: md.optional().describe("What the user has open in their editor, folded into the prompt so that pointing words like \"this\" resolve.")
	}).refine((e) => e.prompt.trim().length > 0 || (e.attachments?.length ?? 0) > 0, { message: "prompt or attachments required" }).refine((e) => e.isolated !== !0 || e.conversationId !== void 0, { message: "isolated requires conversationId" }).refine((e) => e.worktreeBase === void 0 || e.isolated === !0 && e.conversationId !== void 0, { message: "worktreeBase requires an isolated conversationId" }).refine((e) => e.origin === void 0 || e.conversationId !== void 0, { message: "origin requires conversationId" }).refine((e) => e.forkOf === void 0 || e.conversationId !== void 0, { message: "forkOf requires conversationId" }).refine((e) => e.forkOf?.files !== "then" || e.isolated === !0, { message: "forkOf.files \"then\" requires isolated" }), wd = F({
		agent: j().min(1).describe("Which provider."),
		model: j().min(1).describe("Which of its models. Both or neither, because a model name only means anything to the provider that serves it."),
		account: j().optional().describe("Which connected account of that provider pays, by its daemon-minted id. Leave it out for whichever has headroom."),
		harness: fd.optional().describe("Which agentic loop runs it. Leave it out to use the provider's own."),
		effort: j().optional().describe("How hard that model should think, where it offers a choice. Leave it out to take the model's own default."),
		thinking: N().optional().describe("Whether this model reasons before it answers, where that is a choice it offers."),
		fast: N().optional().describe("Ask for this model's work at a higher rate for a higher price. A request rather than a promise.")
	}).optional(), Td = F({
		provider: ud.describe("Which provider serves this work."),
		model: j().min(1).describe("Which of its models. Both halves, because a model name only means anything to the provider that serves it."),
		effort: j().optional().describe("How hard this model should think, where it offers a choice. Leave it out to take the model's own default."),
		thinking: N().optional().describe("Whether this model reasons before it answers, where that is a choice it offers."),
		fast: N().optional().describe("Ask for this model's work at a higher rate for a higher price. A request rather than a promise."),
		harness: fd.optional().describe("Which agentic loop runs it. Leave it out to use the provider's own.")
	}), Ed = F({ run: j().describe("The id of the run that just started. Hand it back when you attach, so the stream resumes rather than replaying.") }), Dd = F({
		conversationId: hd.describe("Which conversation to watch."),
		run: j().optional().describe("The run you were watching. If a newer turn has started since, the head names that one instead, and its rows are that turn's.")
	});
})), Od, kd, Ad, jd, Md, Nd, Pd, Fd, Id, Ld, Rd, zd, Bd, Vd, Hd = y((() => {
	U(), Zu(), J(), Od = fc([
		z("all"),
		z("none"),
		F({ models: P(j().min(1)).min(1) })
	]), kd = F({
		kind: j(),
		label: j().optional(),
		utilization: M(),
		resetsAt: M().optional(),
		gates: Od
	}), Ad = F({
		windows: P(kd),
		measuredAt: M()
	}), jd = F({
		available: N().describe("Whether the provider will reopen this account's session window right now. The only thing a button may be drawn from."),
		reason: j().optional().describe("Why not, in the provider's own word, when it gave one. Absent when it is available, or when the provider said nothing."),
		nextAvailableAt: M().optional().describe("When the next reset may be claimed, in epoch seconds, where the provider publishes it. Absent means unknown, never 'now'."),
		weeklyResetsAt: M().optional().describe("When the weekly allowance itself reopens, in epoch seconds, where the provider publishes it.")
	}), Md = F({
		result: R([
			"reset",
			"already_used",
			"not_limited",
			"ineligible",
			"unavailable",
			"error"
		]).describe("What the provider did. Only `reset` reopened the window; every other value means nothing changed."),
		nextAvailableAt: M().optional().describe("When another reset may be claimed, in epoch seconds, where the provider published it."),
		detail: j().optional().describe("What went wrong, in words, for the two outcomes that are this sandbox's fault rather than the plan's.")
	}), Nd = F({
		at: M().describe("When it refused, in milliseconds."),
		kind: R([
			"limit",
			"auth",
			"entitlement"
		]).describe("Three different noes, kept apart because what fixes each is different. A spent allowance is answered by waiting; a refused credential by signing in again; and an entitlement refusal, where somebody has switched this off for your seat, by neither of those. That last one authenticates fine and reports healthy limits the whole time it refuses everything."),
		message: j().describe("The provider's own words, verbatim. The only part that says which limit or which credential."),
		account: j().optional().describe("Which account was serving, where that is known."),
		model: j().optional().describe("Which model the refused turn was on, where that is known.")
	}), Pd = F({ refusals: L(j(), Nd).describe("The most recent refusal per provider. Read alongside an account's usage: that says how full it was when last checked, this says whether it has since started saying no.") }), Fd = F({
		name: j(),
		label: j(),
		usage: Ad.optional(),
		cooling: F({
			until: M().optional(),
			reason: j().optional()
		}).optional()
	}), Id = F(Object.fromEntries(Xu.map((e) => [e, P(Fd)]))), Ld = I("kind", [
		F({
			kind: z("plan").describe("Answering a plan the agent proposed."),
			requestId: j().min(1).describe("Which card you are answering, from the frame that raised it."),
			approve: N().describe("Whether to go ahead. Approving means the plan then runs without a prompt per tool, because being asked whether a plan you just approved may run its first command is not a question worth having."),
			feedback: j().optional().describe("Why not, which goes back to the model as the reason.")
		}),
		F({
			kind: z("question").describe("Answering a question the agent asked."),
			requestId: j().min(1).describe("Which card you are answering."),
			answers: L(j(), P(j())).optional().describe("What you chose, keyed by the question, with the chosen labels or your own words."),
			cancelled: N().optional().describe("Dismissing it instead, which tells the agent to carry on using sensible defaults rather than leaving it waiting.")
		}),
		F({
			kind: z("permission").describe("Answering a request to use a tool."),
			requestId: j().min(1).describe("Which card you are answering."),
			decision: R([
				"once",
				"always",
				"deny"
			]).describe("Once allows this call alone; always allows that whole tool for the rest of the conversation; no blocks it."),
			feedback: j().optional().describe("Why not, which goes back to the model as the reason.")
		}),
		F({
			kind: z("browser_help").describe("Answering a request for help in the agent's browser: a captcha, a password it does not hold, a check on your phone."),
			requestId: j().min(1).describe("Which card you are answering."),
			helped: N().describe("Whether you cleared it. Yes means the turn carries on from the page as you left it; no tells the agent so, and it moves on rather than waiting for ever."),
			note: j().optional().describe("Anything the agent should know, which goes back to it either way.")
		}),
		F({
			kind: z("terminal_help").describe("Answering a request for help at a terminal: a code to type, a confirmation only a person can give."),
			requestId: j().min(1).describe("Which card you are answering."),
			helped: N().describe("Whether you did it. Yes also hands the agent what the terminal now says, because a person answering a prompt is exactly the moment the agent cannot see."),
			note: j().optional().describe("Anything the agent should know, which goes back to it either way.")
		}),
		F({
			kind: z("capability_offer").describe("Answering a request to connect something the agent needs."),
			requestId: j().min(1).describe("Which card you are answering."),
			connect: N().describe("Yes keeps the agent waiting while you set it up, and it carries on the moment the connection comes alive. No tells it to continue without. The reply itself connects nothing: setting it up is still your own doing.")
		}),
		F({
			kind: z("payment_offer").describe("Answering a request to pay for something."),
			requestId: j().min(1).describe("Which card you are answering."),
			approve: N().describe("Yes releases exactly one payment. Anything else spends nothing. This click is the only way the money can move.")
		}),
		F({
			kind: z("credential_offer").describe("Releasing a credential the agent may only use once a named person says so."),
			requestId: j().min(1).describe("Which card you are answering."),
			approve: N().describe("Yes releases it, as far as the card says (this one use, or the rest of the conversation). Only the people the card names can answer at all, yes or no.")
		})
	]), Rd = F({
		conversationId: j().min(1).describe("Which running conversation to interrupt."),
		text: j().max(2e4).describe("What to say to it. It arrives mid-turn without stopping the turn."),
		attachments: P(j().min(1)).max(20).optional().describe("Files to send with it, as workspace paths. A screenshot dropped in mid-turn with no words is a legitimate thing to send."),
		editorContext: md.optional().describe("What you have open, folded in so that pointing words resolve.")
	}).refine((e) => e.text.trim().length > 0 || (e.attachments?.length ?? 0) > 0, { message: "text or attachments required" }), zd = F({ conversationId: j().min(1).describe("Which conversation's running turn to cancel.") }), Bd = F({
		agent: ud.describe("Which provider serves the re-run."),
		harness: fd.describe("Which agentic loop runs it."),
		account: j().optional().describe("Which of that provider's accounts pays for it. Leave it out for the first one."),
		model: j().optional().describe("Which model. Leave it out to keep the one the refused turn named."),
		carry: N().optional().describe("When the account changes, keep the provider session (the model keeps everything, and re-reads all of it once on the other account) rather than opening a fresh one seeded from the record. Ignored when the provider changes, or when nothing changes.")
	}), Vd = F({
		conversationId: j().min(1).describe("Which conversation's held turn to run again."),
		routing: Bd.optional().describe("Who serves the re-run, when the conversation has been re-pointed since it was refused. Leave it out to run it on whatever the turn carried.")
	});
})), Ud, Wd = y((() => {
	U(), Zu(), Ud = R(Xu);
})), Gd, Kd, qd, Jd, Yd, Xd, Zd, Qd, $d, ef, tf, nf, rf, af, of, sf, cf, lf = y((() => {
	U(), Hd(), Wd(), Gd = F({
		id: j().describe("The account's id, which is what a turn names to spend on it and what disconnecting takes."),
		label: j().describe("What it is called here, which somebody can change."),
		email: j().optional().describe("Who it signs in as, in the provider's own words. Kept beside the label rather than folded into it, so a renamed account can still say whose it is. Absent when the provider says nothing, which is exactly when renaming is the only answer."),
		organization: j().optional().describe("Which organisation it belongs to, where the provider says."),
		scope: j().optional().describe("What the credential is permitted to do, in the provider's terms."),
		connectedAt: M().describe("When it was connected, in milliseconds."),
		needsReauth: N().optional().describe("Its stored credential can no longer be renewed and somebody has to sign in again. Absent means healthy, or not checked yet."),
		detail: j().optional().describe("Why, in words a person can act on."),
		usage: Ad.optional().describe("How full its plan limits were when last measured, so a picker can show what is left before committing work to it. Absent until a reading exists, which reads as unknown rather than as nothing left.")
	}), Kd = F({ accounts: P(Gd).describe("The connected accounts. Tokens never travel in this shape: being in this list is what connected means.") }), qd = F({ force: Dl().default(!1).describe("Measure the plan limits again before answering, rather than serving a recent reading. Slower, and the right thing when somebody has just changed a plan and is asking whether what they can see is still true.") }), Jd = F({ id: j().min(1).describe("Which account.") }), Yd = F({
		id: j().min(1).describe("Which account."),
		label: j().max(80).describe("The new name. Blank restores the one derived from the sign-in, rather than leaving a nameless row.")
	}), Xd = R([
		"device",
		"redirect",
		"paste"
	]), Zd = F({
		url: j().describe("The page to open and sign in on."),
		code: j().describe("The one-time code the page will ask for, where the vendor issues one. Blank when the page is already addressed to this attempt."),
		state: j().describe("For a redirect sign-in, the marker in the address the browser lands on, so a pasted URL can be recognised as this attempt's. Blank otherwise."),
		flow: Xd.describe("How this attempt ends. A device sign-in finishes by itself and you watch the account list; a redirect needs the address it landed on handed back; a paste needs the code the page showed."),
		variant: j().describe("Which of the provider's estates this attempt signs in to. Blank for a provider with one."),
		handshake: j().describe("This attempt's id, for finishing or abandoning it. Not a credential and not redeemable: the proof that completes the sign-in never leaves the sandbox."),
		expiresAt: M().describe("When this attempt stops being answerable, in milliseconds, so a card can stop waiting instead of spinning.")
	}), Qd = F({ variant: j().min(1).optional().describe("Which estate to sign in to. Absent takes the provider's default.") }), $d = F({
		handshake: j().min(1).describe("Which attempt this belongs to."),
		code: j().optional().describe("The code the sign-in page showed, for a paste sign-in."),
		redirectUrl: j().optional().describe("The address the browser was sent to, whole, for a redirect sign-in. The grant is inside it."),
		label: j().optional().describe("What to call the account. Blank derives one from the sign-in.")
	}), ef = F({ account: Gd.optional().describe("The account it connected, where the sign-in ends here. Absent means keep watching the account list.") }), tf = F({ handshake: j().min(1).describe("Which attempt to stop waiting on.") }), nf = F({
		url: j().describe("The page to open."),
		code: j().describe("The one-time code, where the provider uses one."),
		state: j().min(1).describe("The handshake's id, which status reads and the finishing call sends back."),
		flow: R(["device", "redirect"]).describe("Which shape this is. A device sign-in finishes by itself and you poll the attempt; a redirect needs the address it landed on handed back. Said outright rather than guessed at from whether a code happens to exist.")
	}), rf = I("status", [
		F({ status: z("wait") }),
		F({ status: z("ok") }),
		F({
			status: z("error"),
			error: j().min(1)
		})
	]), af = F({
		provider: Ud.describe("Which provider."),
		redirectUrl: j().min(1).describe("The address the browser was sent to, whole. The grant is inside it."),
		state: j().min(1).describe("The handshake this belongs to. A mismatch is refused.")
	}), of = R(["reasoning", "fast"]), sf = F({
		id: j().describe("What to name when asking for this model."),
		label: j().describe("What to call it on screen."),
		efforts: P(j()).optional().describe("The thinking levels it accepts, where the provider says. Empty means use your own defaults."),
		description: j().optional().describe("What it is good for, in the provider's own words. Absent where the provider publishes only ids, which is the honest answer rather than something to paper over with a hand-written table."),
		badges: P(of).optional().describe("What it is known for, where the provider says so."),
		contextWindow: M().optional().describe("How many tokens this model will accept in one request, where the server publishes it.")
	}), cf = F({
		models: P(sf).describe("What this provider serves, in its own preference order, which is not rearranged here. Never empty."),
		default: j().describe("Which one a fresh conversation starts on. Always present.")
	});
})), Y, uf, df, X, Z = y((() => {
	U(), Y = F({ ok: z(!0).describe("Always true. A route that answers this either did the thing or refused with a status; there is no third outcome to report.") }), uf = R([
		"viewer",
		"collaborator",
		"maintainer",
		"owner"
	]), R([
		"viewer",
		"collaborator",
		"maintainer"
	]), df = F({ token: j().min(1).describe("The freshly minted credential. The previous one stopped working the moment this answered.") }), X = F({ repo: j().describe("Which repository. \"root\" is the workspace itself; anything else is a repository's folder relative to the workspace root, URL-encoded.") });
})), ff, pf = y((() => {
	K(), J(), lf(), Z(), ff = {
		start: G.route({
			method: "POST",
			path: "/accounts/{provider}/login/start",
			summary: "Begin connecting an account",
			description: "Hands back the page to sign in on, and the code it will ask for where there is one. The sandbox holds the proof and finishes what it can itself: a device sign-in lands in the account list on its own, a paste or a redirect needs one thing brought back to the finishing call."
		}).input(dd.extend(Qd.shape)).output(Zd),
		complete: G.route({
			method: "POST",
			path: "/accounts/{provider}/login/complete",
			summary: "Finish a sign-in with what the page handed back",
			description: "Takes the code the page showed, or the address a redirect landed on, and finishes the attempt. Answers with the account where the exchange ends here; otherwise the sandbox still has a mint to do and the row appears in the account list."
		}).input(dd.extend($d.shape)).output(ef),
		cancel: G.route({
			method: "POST",
			path: "/accounts/{provider}/login/cancel",
			summary: "Abandon a sign-in",
			description: "Stops waiting on a sign-in nobody completed. An abandoned attempt also expires on its own."
		}).input(dd.extend(tf.shape)).output(Y),
		accounts: G.route({
			method: "GET",
			path: "/accounts/{provider}",
			summary: "Connected accounts of a provider",
			description: "Each connected account with how full its plan limits were when last measured, where the provider publishes any. Ask for a fresh measurement and it takes one before answering, which is slower. The credentials themselves never travel: being in this list is what connected means."
		}).input(dd.extend(qd.shape)).output(Kd),
		rename: G.route({
			method: "POST",
			path: "/accounts/{provider}/rename",
			summary: "Rename an account",
			description: "Changes the label one account shows under, so several are tellable apart. Blank restores the one derived from the sign-in."
		}).input(dd.extend(Yd.shape)).output(Gd),
		disconnect: G.route({
			method: "POST",
			path: "/accounts/{provider}/disconnect",
			summary: "Disconnect an account",
			description: "Clears one stored credential, and stops any sign-in still in flight for this provider. The others stay connected."
		}).input(dd.extend(Jd.shape)).output(Y)
	};
})), mf, hf, gf, _f, vf, yf = y((() => {
	U(), J(), mf = F({
		id: j().describe("The entry's own id."),
		at: M().describe("When it happened, in milliseconds. Also what you page by."),
		provider: j().optional().describe("Which outside service, when one was involved. Absent for the sandbox's own events."),
		account: j().optional().describe("Which account handled it. Absent for the sandbox's own events and for work run on a provider's default."),
		direction: R([
			"in",
			"out",
			"system"
		]).describe("Whether something arrived, something went out, or the sandbox did it to itself."),
		type: j().describe("Exactly what happened: a message received or sent, a reaction, a turn starting or ending, a rule doing something. A rule that ran and passed says nothing here, because a feed of green ticks is one the eye learns to skip."),
		channelId: j().optional().describe("Which channel or thread it happened in."),
		author: j().optional().describe("Who sent it, for something that arrived."),
		actor: j().optional().describe("Who asked for the turn, as the sandbox verified it: a member's email, or token:<label> for a program's control token. Absent for a wake nothing asked for."),
		content: j().optional().describe("The message, in full, whichever direction it went."),
		method: j().optional().describe("The verb of an outgoing call."),
		endpoint: j().optional().describe("The address of an outgoing call. Credentials travel in headers, so they are never here."),
		sessionId: j().optional().describe("The provider session behind it."),
		turnId: j().optional().describe("Ties one turn's entries together. A turn writes several, and read as separate rows they say one thing several times, so a feed groups on this."),
		conversationId: j().optional().describe("Which conversation. This, rather than the provider session, is what the same agent means across a feed, because a session is retired whenever the model changes."),
		title: j().optional().describe("What that conversation was called at the time. Copied in rather than looked up, because an audit entry must still read as words years later, after the conversation has been renamed or pruned."),
		origin: gd.optional().describe("What woke the conversation from outside, when something did. It is how a turn gets filed under the chat service that caused it rather than under the model that served it."),
		automationIds: P(j()).optional().describe("Which automations were involved."),
		outcome: R(["ok", "error"]).optional().describe("How it ended."),
		error: j().optional().describe("What went wrong, when something did."),
		extra: L(j(), cc()).optional().describe("Whatever else the source had to say: attachments, participants, a recording's path. Shape varies by source.")
	}), hf = F({
		provider: j().optional().describe("Narrow it to one outside service."),
		limit: H().min(1).max(500).default(100).describe("How many entries to return."),
		before: H().optional().describe("Only entries older than this timestamp, so paging walks backwards through the feed.")
	}), gf = F({ events: P(mf).describe("The audit entries, newest first.") }), _f = F({
		capabilityId: j().describe("Which connection."),
		provider: j().describe("Which service it is."),
		gateway: R([
			"ready",
			"connecting",
			"pairing",
			"disconnected",
			"idle"
		]).describe("Idle means it is up but has nothing to listen for, which is different from a connection that should be up and is not. Pairing means somebody started a sign-in and never finished it, which no amount of waiting will fix."),
		lastError: j().optional().describe("The most recent thing that went wrong on it.")
	}), vf = F({
		connections: P(_f).describe("Each source feeding the record, and whether it is working. Probed now rather than remembered."),
		voice: F({
			channelId: j().describe("Which channel."),
			channelName: j().describe("What it is called."),
			startedAt: M().describe("When it joined, in milliseconds."),
			participants: P(j()).describe("Who else is in it.")
		}).optional().describe("A voice call the sandbox is currently in, when it is in one.")
	});
})), bf, xf = y((() => {
	K(), yf(), bf = {
		list: G.route({
			method: "GET",
			path: "/activity",
			summary: "What the agent has done out in the world",
			description: "The audit trail of actions taken on outside services. Read-only on purpose: entries are written by the sandbox alone, which is what makes it a record worth trusting."
		}).input(hf).output(gf),
		status: G.route({
			method: "GET",
			path: "/activity/status",
			summary: "Whether the audit trail is being kept",
			description: "Which sources are feeding the record and whether each is working."
		}).output(vf)
	};
})), Sf, Cf, wf, Tf, Ef, Df, Of, kf, Af, jf, Mf, Nf, Pf, Ff, If, Lf, Rf = y((() => {
	U(), Sf = /^[A-Za-z_][A-Za-z0-9_]*$/, Cf = j().regex(Sf).max(128), wf = F({
		key: Cf.describe("The name to store it under, which is the name a process will find it by."),
		value: j().min(1).describe("The value. It goes straight to your sandbox and never through the platform.")
	}), Tf = F({ keys: P(j()).describe("The names that exist here. Only the names: the values never leave the sandbox.") }), Ef = F({ key: Cf.describe("Which secret, by name.") }), Df = F({ value: j().describe("The value itself. The only place in this API one is ever returned.") }), Of = R(["use", "conversation"]).describe("How far one release goes: `use` asks again every single time (one click releases exactly one use), `conversation` covers the rest of this conversation and is forgotten when the daemon restarts."), kf = R(["secret", "capability"]).describe("Whether this gate covers one stored secret, by the name a reference carries, or one whole connected capability, by its id."), Af = R([
		"shell",
		"code",
		"browser",
		"session",
		"otp"
	]).describe("What the credential was about to be used for: a shell command, a script, typing into a page, mounting a connected account, or one one-time code."), jf = F({
		subject: j().min(1).describe("What is gated: a secret's name, or a connected capability's id."),
		kind: kf,
		approvers: P(j().min(3)).min(1).describe("Exactly who may release it, by email, from the people on the Access roster. Not a seniority floor: nobody outside this list can release it, the owner included, unless the owner is on it."),
		scope: Of
	}), Mf = F({ gates: P(jf).describe("Every gate in force. Names, subjects and approver addresses only: this answer never carries a credential.") }), Nf = F({ subject: j().min(1).describe("Which gate, by the secret name or capability id it covers.") }), Pf = F({
		subject: j().min(1).describe("What to ask for: the secret's name, or the connected capability's id."),
		why: j().max(280).optional().describe("One line on what it is for. The only words on the card that are the agent's."),
		conversationId: j().optional().describe("Which conversation to raise the card in. The CLI fills this from the running turn.")
	}), Ff = F({
		granted: z(!0).describe("Always true: a refusal is an error with a sentence, never a `false` here."),
		approvedBy: j().describe("Who released it."),
		message: j().describe("What the grant means in practice, and what to do next.")
	}), If = F({
		key: j().describe("What identifies it. Unique across the whole inventory, so several accounts of one provider each get their own entry."),
		kind: R([
			"env",
			"generated",
			"capability",
			"provider"
		]).describe("Where it came from: you set it, the sandbox generated it, a connection needs it, or it is a model account's credential."),
		label: j().optional().describe("A friendlier name, for entries that have one."),
		status: R([
			"missing",
			"set",
			"connected"
		]).describe("Whether it exists and, for a connection, whether it is working."),
		requiredBy: P(F({
			resourceId: j().describe("Which resource."),
			type: j().describe("What kind of resource it is.")
		})).describe("What is waiting on it. Empty for a connection's or an account's own credential."),
		storedAt: j().describe("Where it actually lives, in words."),
		revealable: N().describe("Whether its value can be shown at all. Everything except a model account's credential can be."),
		ci: F({
			synced: N().describe("Whether the pipeline has it."),
			pushedAt: j().optional().describe("When it was last sent there.")
		}).optional().describe("Whether a copy has been given to the build pipeline."),
		lastUse: F({
			at: M().describe("When, in milliseconds."),
			lane: R([
				"shell",
				"code",
				"browser"
			]).describe("How it was used: a command, a script, or typed into a page."),
			detail: j().optional().describe("Where it went: the start of the command or script, or the site. Names and destinations only, never values."),
			approvedBy: j().optional().describe("Who released it for that use, when it is gated. Absent when nothing had to be approved.")
		}).optional().describe("The last time an agent actually spent this secret. Absent while it never has been, which most never are."),
		gate: F({
			approvers: P(j()).describe("Who may release it, by email. Nobody else can, whatever their role."),
			scope: Of
		}).optional().describe("Who has to release this before the agent can use it, and for how long one release lasts. Absent when it is not gated.")
	}), Lf = F({ entries: P(If).describe("One entry per secret this sandbox knows about, from every place they live. No values, ever.") });
})), zf, Bf, Vf, Hf, Uf, Wf, Gf, Kf, qf, Jf, Yf, Xf, Zf, Qf, $f, ep, tp, np, rp, ip, ap, op, sp, cp, lp, up, dp, fp, pp, mp, hp, gp, _p = y((() => {
	U(), J(), Rf(), zf = F({
		label: j().describe("The choice, in a few words."),
		description: j().describe("What picking it means."),
		preview: j().optional().describe("Something to look at while deciding: a mock-up, a snippet, a layout.")
	}), Bf = F({
		question: j().describe("What the agent is asking."),
		header: j().describe("A short label for the question."),
		multiSelect: N().describe("Whether more than one answer can be picked."),
		options: P(zf).describe("The choices offered. A free-text answer is always possible as well.")
	}), Vf = F({
		text: j().describe("What would run."),
		language: R(["bash", "javascript"]).describe("Which of the two backends it is written for, named as the grammar that colours it."),
		truncated: N().describe("Whether this is an excerpt of a longer program, so the card can say so instead of ending mid-word. An excerpt always carries the flagged fragment: the beginning, then a window around the fragment, with any skipped middle written into the text as a bracketed count."),
		spans: P(F({
			start: M().int().nonnegative(),
			end: M().int().nonnegative()
		})).describe("Which fragments of the text the pattern match fired on: every matched class's, or, under the hard rule, only the class the title names. Offsets into text, in order, never overlapping.")
	}), Hf = F({
		toolName: j().describe("Which tool it wants to use."),
		title: j().optional().describe("The whole question, as a sentence, exactly as the runtime words it."),
		displayName: j().optional().describe("A short phrase for the button, such as read file."),
		description: j().optional().describe("More about what it is asking for."),
		reason: j().optional().describe("Why it is asking at all: a rule, the current mode, something that looked risky."),
		path: j().optional().describe("Which file it concerns, when it concerns one."),
		alwaysLabel: j().optional().describe("The wording for an always-allow answer. Present only when there is something an always could actually remember; without it the only answers are once and no."),
		program: Vf.optional().describe("The program this card is holding, when the card is about one. Present on a command gate's card and absent on every other permission ask."),
		explain: j().optional().describe("One plain sentence saying what the program does and why it is being asked about, where the title says something else. Written by the judge that read your safety policy, never by the agent being gated.")
	}), Uf = F({
		card: j().describe("Which connection is being asked for."),
		name: j().describe("What it is called, as the catalogue titles it rather than as the agent named it."),
		why: j().optional().describe("The agent's case for connecting it, and the only words on this card that are the agent's.")
	}), Wf = F({
		url: j().describe("What is being paid for."),
		description: j().optional().describe("What the endpoint says it is."),
		payTo: j().describe("Where the money goes, taken verbatim from the endpoint's own demand."),
		network: j().describe("On which network."),
		asset: j().describe("In which token."),
		assetName: j().describe("That token's name. It is pegged to the dollar, which is what lets every amount here read as dollars."),
		amountUsd: j().describe("The exact price. Not a ceiling: this scheme has no ranges, so this is the whole spend."),
		spentTodayUsd: j().describe("What has already gone out today."),
		dailyCapUsd: j().describe("What may go out in a day."),
		why: j().optional().describe("The agent's case for paying, and the only words on this card that are the agent's.")
	}), Gf = F({
		subject: j().describe("Which credential is being asked for."),
		kind: kf,
		lane: Af,
		detail: j().optional().describe("Where it would go: the start of the command, the site, or what is being mounted. Never a value: the command still reads as a reference at this point."),
		why: j().optional().describe("The agent's case for using it, and the only words on this card that are the agent's."),
		approvers: P(j()).describe("Who may release it. A click from anyone else is refused and leaves the card standing."),
		scope: Of
	}), Kf = F({
		name: j().describe("What to type, without the leading slash."),
		description: j().describe("What it does."),
		hint: j().optional().describe("What its argument should look like, shown after the name.")
	}), qf = F({ agent: ud.optional().describe("Whose commands to read. Leave it out for Claude.") }), Jf = F({ commands: P(Kf).describe("The shortcut commands, as the provider last published them.") }), Yf = F({
		content: j().describe("The item, as the agent wrote it."),
		status: R([
			"pending",
			"in_progress",
			"completed"
		]).describe("Where it is."),
		activeForm: j().optional().describe("How to phrase it while it is happening, so a screen can say what the agent is doing rather than what it plans to do.")
	}), Xf = F({
		tokens: M().describe("How much the latest request sent, all told."),
		contextWindow: M().describe("How much the model can hold. The gap between these two is how close the conversation is to being compacted."),
		cachedAt: M().optional().describe("When that request last touched the provider's prompt cache, in milliseconds. The cache's clock runs from here, since a read refreshes it as a write does."),
		cacheTtlMs: M().optional().describe("How long that cache entry lives from `cachedAt`, in milliseconds.")
	}), Zf = R([
		"read",
		"edit",
		"delete",
		"move",
		"search",
		"execute",
		"think",
		"fetch",
		"other"
	]), Qf = R([
		"pending",
		"in_progress",
		"completed",
		"failed"
	]), $f = F({
		path: j().describe("The file, as a workspace path, whatever directory the tool was run from."),
		line: M().optional().describe("Which line, counting from one.")
	}), ep = I("type", [
		F({
			type: z("text").describe("Plain output."),
			text: j().describe("What the tool said.")
		}),
		F({
			type: z("diff").describe("A change to a file."),
			path: j().describe("Which file, as a workspace path."),
			oldText: j().optional().describe("What was there. Absent for a new file, or where the previous contents are not known."),
			newText: j().describe("What is there now."),
			truncated: N().optional().describe("One of the two sides was too large to send whole.")
		}),
		F({
			type: z("image").describe("A picture the tool produced."),
			path: j().describe("Where it is, as a workspace path. A path rather than the bytes, because the workspace already serves it, sending it inline would bloat every stored record, and this way the picture stays openable afterwards.")
		})
	]), tp = F({
		path: j().describe("Where it lives, as a workspace path."),
		title: j().describe("What it is called: its opening heading, or its file name."),
		markdown: j().describe("The document itself."),
		truncated: N().optional().describe("It was clipped at the wire cap; the file on disk has more."),
		plan: N().optional().describe("It is one of the CLI's plan files, written to be approved rather than merely read.")
	}), np = j().describe("What to send back when you answer."), rp = {
		requestId: np,
		text: j().describe("The plan itself."),
		document: tp.optional().describe("The write-up this plan refers to, when the plan itself is a pointer to one.")
	}, ip = {
		requestId: np,
		questions: P(Bf).describe("What it wants to know."),
		document: tp.optional().describe("The document this turn wrote and is asking about, so the choice can be read beside it.")
	}, ap = { requestId: np }, op = {
		requestId: j(),
		session: j(),
		account: j(),
		message: j()
	}, sp = {
		requestId: j(),
		session: j(),
		message: j()
	}, cp = {
		requestId: j(),
		offer: Uf
	}, lp = {
		requestId: j(),
		offer: Wf
	}, up = {
		requestId: j(),
		offer: Gf
	}, dp = F({
		outcome: R(["connected", "unfinished"]),
		id: j().optional()
	}), fp = F({
		outcome: R(["paid", "failed"]),
		amountUsd: j(),
		transaction: j().optional(),
		network: j().optional()
	}), pp = F({
		outcome: R(["released", "refused"]),
		approvedBy: j().optional()
	}), mp = F({
		kind: z("plan").describe("The agent has written a plan and is waiting for a yes."),
		...rp
	}), hp = F({
		kind: z("question").describe("The agent has asked you something and is waiting."),
		...ip
	}), gp = Hf.extend({
		kind: z("permission").describe("The agent wants to use a tool it needs permission for."),
		...ap
	}), I("kind", [
		mp,
		hp,
		gp
	]);
})), vp = y((() => {})), yp = y((() => {})), bp, xp, Sp = y((() => {
	vp(), yp(), bp = ".intentic", xp = "481795963975-cq9msl6higcd91joidrfp8mjlkuq5fk3.apps.googleusercontent.com", `${xp}`;
})), Cp, wp, Tp, Ep, Dp = y((() => {
	U(), Cp = /^[a-zA-Z_][a-zA-Z0-9_]{0,39}$/, wp = F({
		name: j().regex(Cp),
		type: R([
			"string",
			"number",
			"boolean",
			"string[]"
		]),
		description: j().min(1),
		required: N()
	}), Tp = (e) => {
		let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
		for (let r of e) t.has(r.name) && n.add(r.name), t.add(r.name);
		return [...n];
	}, Ep = P(wp).min(1).max(16).superRefine((e, t) => {
		for (let n of Tp(e)) t.addIssue({
			code: "custom",
			message: `Output field names must be unique; "${n}" is repeated.`
		});
	});
})), Op, kp, Ap, jp, Mp, Np, Pp, Fp, Ip, Lp, Rp, zp, Bp, Vp, Hp, Up = y((() => {
	U(), Sp(), Dp(), J(), ld(), Op = R(["fresh", "continue"]), kp = I("kind", [
		F({ kind: z("none").describe("It produces nothing but its work. The classic make the suite pass: what it leaves behind is a passing suite, and asking it to also file a report is asking it to spend a round on paperwork.") }),
		F({ kind: z("claim").describe("Each round says whether it is done and why. Structured prose: done is a value read rather than a sentence interpreted. Self-assessment, so advisory by construction; it exists because plenty of goals have no command that could check them.") }),
		F({
			kind: z("json").describe("Each round writes a real answer in a shape you declared. This is the one that makes a step's output usable as the next step's input: a paragraph mentioning three files cannot be fed to anything, a list of three files can."),
			fields: Ep.describe("The shape that answer has to match.")
		})
	]), Ap = I("kind", [F({
		kind: z("command").describe("Run something and see if it passes. Deterministic, free, and the only signal here whose answer does not come from a model. A passing test suite beats any amount of self-report."),
		command: j().min(1).describe("The command to run in the conversation's own tree. Exiting cleanly means satisfied.")
	}), F({
		kind: z("judge").describe("Put the question to a separate model with no tools, which reads the round's own report and rules on it, having done none of the work and nothing invested in its being finished."),
		rubric: j().min(1).describe("What that judge is asked."),
		model: j().optional().describe("Which model judges. Leave it out for the cheap one the other small jobs use.")
	})]), jp = F({
		done: N().describe("Whether the goal is met. Reading this is the whole point of the file."),
		reason: j().describe("Why, in one line. The most-read sentence in the feature: the next round reads it first and the history shows it."),
		evidence: j().optional().describe("What was checked to know that. Optional, so a round with nothing to point at says so by leaving it out rather than by inventing a sentence."),
		data: L(j(), cc()).optional().describe("The declared answer, for a loop that asked for one, checked against the shape it declared.")
	}), Mp = 50, Np = F({
		conversationId: hd.describe("The conversation to loop. It need not exist yet: naming a fresh one opens it, which is what lets run this until it passes be the first thing you ever say."),
		goal: j().min(1).describe("What done means, in your words. It goes into every round's instructions and into the judge's question, so the model is told the bar rather than left to infer it."),
		prompt: j().min(1).describe("What each round is asked to do. The suite passes is the goal; run the tests, take the top failure, fix it is the instruction."),
		context: Op.describe("How each round meets the last. Starting fresh makes the files the memory rather than the conversation, so the twentieth round reads the tree as clearly as the first, and costs a re-read each time. Carrying on is cheaper and keeps the reasoning, which suits a short polish-this loop and degrades on long ones: a session that has spent eleven rounds arguing for its own approach is the worst available judge of whether that approach is finished."),
		output: kp,
		checks: P(Ap).describe("What else has to be true, all of them together. A list because the suite passes and the report is written is a real bar, and running it as two loops would do the work twice."),
		maxIterations: M().int().min(1).max(Mp).describe("How many rounds before it gives up. A loop that has not got there in fifty is not one round short of it."),
		maxSpendUsd: M().positive().optional().describe("A ceiling on what the whole loop may spend, in dollars. Optional for a short loop somebody is watching, and strongly wanted otherwise: this is the first thing here that can keep spending with nobody pressing anything between rounds."),
		stallLimit: M().int().min(1).describe("Stop after this many rounds in a row that changed nothing on disk. The guard that matters most: a loop's failure is not runaway success, it is an agent re-reading the same three files, restating the same plan and declaring more work remains, eleven times. Every one of those rounds succeeds, so only the tree not moving catches it."),
		isolated: N().describe("Whether it works in the conversation's own private copy or in the shared tree. It also decides where a check runs: testing the shared tree would be testing code this loop has not merged yet."),
		agent: ud.optional().describe("Which provider the rounds run on. Absent falls back to the conversation's own last choice."),
		harness: fd.optional().describe("Which agentic loop they run on."),
		account: j().optional().describe("Which account pays."),
		model: j().optional().describe("Which model."),
		actsAs: q.optional().describe("Which persona the rounds act as. It matters here: every round is unwatched, and an unwatched turn naming no persona reaches no signed-in account at all, so pinning one is how a loop gets hands."),
		worktreeBase: P(pd).min(1).max(50).optional().describe("Pin the private copy to these exact commits, so a restart cannot quietly change what the loop is working on."),
		autoLand: N().optional().describe("Whether the work merges as it goes.")
	}), `${bp}`, Pp = F({
		n: M().int().min(1).describe("Which round this was."),
		at: M().describe("When it ran, in milliseconds."),
		outcome: R([
			"continue",
			"done",
			"error"
		]).describe("How the round ended, which is not the same question as how the loop did. A round that errored does not end the loop by itself: a failing turn is often exactly what the next round is meant to fix."),
		detail: j().optional().describe("What the check said, in its own words. What a run history is actually read for: why it kept going, and why it stopped."),
		costUsd: M().optional().describe("What the round cost, in dollars."),
		changed: N().describe("Whether anything on disk moved. Three unchanged rounds in a row is the shape of a loop that is not working."),
		sessionId: j().optional().describe("The session it ran on, and the way from a history row to a readable record.")
	}), Fp = R([
		"running",
		"done",
		"exhausted",
		"stalled",
		"overspent",
		"stopped",
		"error"
	]), Ip = Np.extend({
		state: Fp.describe("How it ended, and each of these is a different thing to be told. Out of rounds says give it more room; stalled says it is not making progress and more room will not help. Overspent, stopped by a person, and the loop itself failing are all their own answers."),
		startedAt: M().describe("When it began, in milliseconds."),
		endedAt: M().optional().describe("When it ended, in milliseconds."),
		resumed: M().int().min(0).describe("How many times the sandbox restarted under it and picked it back up. Counted rather than flagged, so a loop whose round reliably kills the sandbox is not resurrected on every boot for ever."),
		detail: j().optional().describe("Why it ended, for the endings whose reason is not in their name."),
		iterations: P(Pp).describe("Every round, in order. Why it stopped at the fourth is the question a loop gets read for, and this is the answer.")
	}), Lp = F({ loops: P(Ip).describe("Every loop this workspace has run, newest first, kept after they end.") }), Rp = F({ conversationId: hd.describe("Which conversation's loop.") }), zp = F({
		id: q.describe("The design's id."),
		name: j().min(1).max(60).describe("What to call it. Short, because it has to be readable on a small badge."),
		description: j().max(280).optional().describe("What it is for, in one line. Optional, because a well-named loop has already said it."),
		prompt: j().optional().describe("What each round is asked to do, when that is worth saying separately from the goal. Absent means each round works towards the goal however it sees fit."),
		context: Op.describe("How each round meets the last: starting clean, or carrying on."),
		output: kp.describe("What it has to produce."),
		checks: P(Ap).describe("What else has to be true."),
		maxIterations: M().int().min(1).max(Mp).describe("How many rounds before it gives up."),
		maxSpendUsd: M().positive().optional().describe("A ceiling on what it may spend, in dollars."),
		stallLimit: M().int().min(1).describe("Stop after this many rounds in a row that changed nothing.")
	}), Bp = F({ designs: P(zp).describe("Saved loops: the machinery with the goal left out, so one design can be pointed at a different job every time.") }), Vp = F({
		design: zp.describe("The design to write."),
		create: N().describe("Whether you mean to make a new one or replace an existing one, so an id that happens to collide cannot silently overwrite the one you had.")
	}), Hp = F({ id: q.describe("Which saved loop.") });
})), Wp, Gp, Kp, qp, Jp, Yp, Xp, Zp, Qp, $p, em, tm, nm, rm, im, am, om, sm, cm, lm, um, dm, fm, pm, mm, hm, gm, _m, vm, ym, bm, xm, Sm, Cm, wm, Tm = y((() => {
	U(), J(), Up(), Wp = R([
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
	]), Gp = F({
		tool: j().optional().describe("The last tool it reached for."),
		target: j().optional().describe("What it reached for that tool with: a file, a command, a URL."),
		todo: j().optional().describe("The item on its own list that it is working through.")
	}), Kp = F({
		done: M().describe("Items it has completed."),
		total: M().describe("Items on the list. Never zero: a conversation that kept no list carries no clause at all.")
	}), qp = F({
		plan: N().describe("It has proposed a plan and is waiting for a yes."),
		question: N().describe("It has asked you something."),
		permission: N().describe("It wants to use a tool it needs permission for."),
		capability: N().describe("It needs something connected that is not connected yet."),
		credential: N().describe("It is waiting for a named person to release a credential. The one pause that may not be yours to clear, whatever your role."),
		conflict: N().describe("Its work cannot be merged without somebody resolving a clash.")
	}), Jp = F({
		at: M().describe("When the turn that left this ended, in milliseconds."),
		steps: F({
			open: M().describe("Items on it that were never completed."),
			total: M().describe("Items on the whole list."),
			next: j().optional().describe("The one it would have done next: what it was working through, or the first still waiting.")
		}).optional().describe("The agent's own checklist where that turn left it. Absent for a conversation that kept no list."),
		check: j().optional().describe("The end-of-turn check that was still failing when the turn ended, by name.")
	}), Yp = F({
		subject: j().describe("One line saying what the merged work did, read off the code rather than off the opening request. A conversation that asks for an audit and then spends four turns fixing what it found needs a subject about the fixes."),
		note: j().optional().describe("The same change said to somebody who uses the product, for a repository that keeps a changelog. Usually absent, because most changes are not ones a user would notice."),
		breaking: j().optional().describe("What this change takes away, for anything already relying on it. Nearly always absent: it is for removals, not for additions.")
	}), Xp = F({
		provider: j().min(1).describe("Which provider was asked."),
		model: j().min(1).describe("Which of its models."),
		status: R([
			"asking",
			"answered",
			"refused",
			"skipped"
		]).describe("How this one went. Skipped means it was not asked at all, because it refused a few minutes ago and the walk stepped over it."),
		at: M().optional().describe("When it started being asked, in milliseconds. Absent for one that was skipped, which cost no time."),
		ms: M().optional().describe("How long it took. Absent while it is still being asked."),
		reason: j().optional().describe("Why it refused, in its own words.")
	}), Zp = F({
		startedAt: M().describe("When the drafting began, in milliseconds."),
		steps: P(Xp).describe("Each model that was asked, in the order they were spent, so the list is the timeline. Empty with no outcome means the diff is still being read."),
		outcome: R(["written", "failed"]).optional().describe("How it ended. Absent means it is still going."),
		reason: j().optional().describe("The one-line account of a failure, for a screen with one line to spend. The steps carry each model's own words."),
		finishedAt: M().optional().describe("When it ended, in milliseconds.")
	}), Qp = R([
		"workspace",
		"diverged",
		"binary"
	]), $p = F({
		id: j().describe("The conversation id, which is how every other call addresses it."),
		sessionId: j().optional().describe("The provider session behind the last turn. It is retired whenever the model or account changes."),
		title: j().optional().describe("What to call it: the first prompt cut to one line, unless somebody renamed it."),
		status: Wp.describe("What it is doing. Stopping and stopped are the two halves of somebody pressing stop, because a cancel is not instant; dismissing is the same window for a question waved away, which ends the turn too but owes the user nothing; resuming means the sandbox is already putting right whatever killed the turn; landing means its work is being carried into the workspace right now, and nothing may act on its branch until that settles."),
		failure: j().optional().describe("Why the last turn failed, in the words it died on. Absent unless it did, and cleared the moment it runs again. Carried here because the word error on its own is not an answer, least of all for a run nobody was watching."),
		failureCode: j().optional().describe("Which kind of failure it was, as the turn's own error frame coded it. Absent for a failure nothing could classify, which reads as the plain red line it is."),
		limitResetsAt: M().optional().describe("When the spent allowance reopens, in epoch seconds. Absent when the provider publishes no instant."),
		limitHeld: N().optional().describe("Whether the refused turn is held whole, so sending again re-runs it instead of appending to it."),
		limitScheduled: N().optional().describe("Whether the held turn is already booked to go again at the reset, so nobody has to press anything."),
		limitMoving: j().optional().describe("The account the held turn is being moved to by the owner's policy, while that move is booked."),
		provider: ud.describe("Which model provider it runs on."),
		harness: fd.describe("Which agentic loop it runs on."),
		runner: j().optional().describe("The runner this conversation runs on. Absent means this sandbox."),
		startIn: j().optional().describe("Which folder it opened in, relative to the workspace root. Absent means the root."),
		actsAs: j().optional().describe("Which persona its first turn acted as. Absent for an ordinary chat."),
		model: j().optional().describe("What its last turn ran with. Kept per conversation so opening it restores the choices made in it, rather than whatever some other tab last picked."),
		effort: j().optional().describe("How hard that turn was told to think."),
		thinking: N().optional().describe("Whether that turn showed its reasoning."),
		fast: N().optional().describe("Whether that turn asked for higher speed. What was asked for, not what was served."),
		tier: R(["fast", "standard"]).optional().describe("How hard its last turn looked to the complexity judge. What the next turn's preview needs, not what actually ran."),
		tierHold: N().optional().describe("Whether this conversation is pinned to the picked model, so a turn that looks simple is never moved to a cheaper one."),
		account: j().optional().describe("Which connected account paid for it."),
		branch: j().optional().describe("The branch its private copy works on. Absent for a conversation that works directly in the shared tree."),
		autoLand: N().optional().describe("This conversation's own answer to whether its work merges automatically. Absent means it follows the sandbox-wide setting, which is the common case."),
		resumeAfterOutage: N().optional(),
		resumeAfterLimit: N().optional(),
		moveAfterLimit: N().optional(),
		landRequested: F({
			email: j().describe("Who asked."),
			name: j().optional().describe("Their display name."),
			at: M().describe("When they asked, in milliseconds.")
		}).optional().describe("A collaborator has asked a maintainer to merge this work. Cleared by whichever merge or discard answers it. Absent means nobody is waiting."),
		origin: gd.optional().describe("Where the conversation came from when nobody typed it: a chat mention, a visitor's message, a webhook. Absent means a person started it."),
		startedBy: j().optional().describe("Who asked for the first turn, as the sandbox verified it: a member's email, or token:<label> for a program's control token. Absent when nothing was verified (a wake, a loopback caller)."),
		forkedFrom: Sd.optional().describe("The conversation this one was cut from. Recorded once and never cleared: it is the relationship, not a pending state."),
		base: j().optional().describe("The commit its private copy started from, shortened."),
		costUsd: M().optional().describe("What it has cost so far, in dollars. A subagent's spend is its own and is not folded in here."),
		inputTokens: M().optional().describe("Tokens sent."),
		outputTokens: M().optional().describe("Tokens received."),
		contextTokens: M().optional().describe("How much of the window the conversation currently fills."),
		contextWindow: M().optional().describe("How large that window is."),
		promptCache: F({
			at: M().describe("When its last request touched the provider's prompt cache, in milliseconds."),
			ttlMs: M().describe("How long that entry lives from `at`, in milliseconds.")
		}).optional().describe("When this conversation's prompt cache was last kept alive and how long it lasts, which together say when picking the conversation up stops being cheap. Absent when the provider publishes nothing to ground it on."),
		activity: Gp.optional().describe("What it is doing at this moment."),
		checklist: Kp.optional().describe("How far it is through its own checklist. Absent for a conversation that kept no list, which is most short ones."),
		landedMessageDraft: Zp.optional().describe("The whole story of this merge's commit message being written: which models were asked, how long each took, what refused and in what words. Forgotten on restart, which is right, because a restart also killed the drafting it describes."),
		landedMessage: Yp.optional().describe("What this conversation's merged work is called, once the drafting above has finished. It arrives on the same push that ends the draft, so the promise and the answer travel together."),
		startedAt: M().optional().describe("When the running turn started, in milliseconds. Absent when none is running."),
		updatedAt: M().describe("When it last did something, in milliseconds. Reading it does not count."),
		seenAt: M().optional().describe("When somebody last opened it, in milliseconds. Newer activity than this is what makes it unread. Kept by the sandbox rather than by a browser, so clearing site data or picking up a phone does not resurrect every badge."),
		attention: qp.describe("Which kinds of waiting-for-you it is doing."),
		conflictCauses: P(Qp).optional().describe("Why its work will not merge, and so who can clear it: your own uncommitted edits, which only you can commit or stash, against a moved main line or an unmergeable binary, which the conversation can redo on its own copy. Absent unless it is refusing to merge."),
		unfinished: Jp.optional().describe("What its last turn left open: steps it never completed, a check still failing. Absent for a turn that finished what it started."),
		turns: M().optional().describe("Turns it has finished."),
		toolUses: M().optional().describe("Tools it has used, over its whole life."),
		subagents: F({
			running: M().describe("Subagents working right now."),
			total: M().describe("Subagents it has started over its whole life.")
		}).optional().describe("Subagents and child agents this one delegated to. Absent means it never has, which is most conversations. Their spend is their own and is not folded into this conversation's cost."),
		diff: F({
			files: M().describe("Files touched."),
			insertions: M().describe("Lines added."),
			deletions: M().describe("Lines removed.")
		}).optional().describe("Everything it has written, measured from where it started. Independent of how much has been merged."),
		landedPresence: F({
			landed: M().describe("Paths this conversation merged in."),
			present: M().describe("How many of them are still there, either pending or committed.")
		}).optional().describe("Present only when some of what it merged has since been thrown away. Absent is the steady state: its presence is the signal, so an ordinary card spends no line on it."),
		loop: F({
			state: Fp.describe("How the loop is going."),
			iteration: M().int().min(0).describe("Which round it is on."),
			maxIterations: M().int().min(1).describe("How many rounds it will attempt before giving up."),
			goal: j().describe("What it is looping towards.")
		}).optional().describe("The loop driving this conversation, if one is. Absent for an ordinary conversation, which is nearly all of them."),
		workflow: F({
			runId: j().describe("The run this belongs to, which is how a board groups its steps together."),
			name: j().describe("The workflow's name."),
			step: j().describe("Which step this conversation is on now. It moves when steps are chained."),
			index: M().int().min(1).describe("This step's place in the workflow, counting from one."),
			total: M().int().min(1).describe("How many steps the workflow has.")
		}).optional().describe("The workflow run this conversation is a step of. Without it, a four-step run reads as four unrelated conversations that happen to have started together."),
		watches: P(F({
			id: j().describe("The daemon's handle for this watch, the same one the agent was given when it armed it."),
			note: j().describe("The agent's own line on what it is waiting for."),
			intervalSeconds: M().int().min(1).describe("How often the check runs."),
			deadlineAt: M().describe("When it gives up and wakes the conversation anyway, in milliseconds. Every watch has one.")
		})).optional().describe("Outside conditions this conversation is parked on, each of which will wake it. Absent means none, which is nearly every conversation: an armed watch is why a finished-looking agent starts working by itself, and why a hosted machine will not go idle."),
		archivedAt: M().optional().describe("When it was put away, in milliseconds. Nothing was lost: its branch, its record and every counter stayed, and bringing it back gives it a fresh working copy. Absent means it is live on the board.")
	}), em = F({ id: j().min(1).describe("Which conversation.") }), tm = em.extend({
		before: H().int().optional().describe("Return the messages before this position in the record: the `from` of the page below. Absent asks for the most recent turns."),
		turns: H().int().min(1).max(200).optional().describe("How many of the user's turns to return, newest first. Absent takes the daemon's default.")
	}), nm = F({ ids: P(j().min(1)).max(500).optional().describe("Which conversations to put away. Leave it out for every finished one that can be archived right now.") }), rm = F({ ids: P(j().min(1)).min(1).max(500).describe("Which conversations.") }), im = F({
		moved: P($p).describe("What actually moved, whole, rather than the fleet afterwards. Two archives finishing at once would each carry a snapshot from a different instant, and swapping one in wholesale would let the slower answer resurrect what the faster one just filed away."),
		rev: M().describe("The version of the fleet that includes this move, so a caller can hold its own optimistic change until it sees a list at least that new.")
	}), am = im.extend({ failed: P(F({
		id: j().describe("Which conversation stayed on the board."),
		reason: j().describe("Why its working copy could not be released, in the words the failure came with.")
	})).describe("The conversations this press could not put away, each with the reason, so the board can say it instead of reporting silence.") }), om = F({ removed: P(j()).describe("Which conversations were deleted, as ids. Ids rather than whole cards, because these no longer exist anywhere: there is nothing left to show and nothing to put back.") }), sm = F({
		query: j().trim().min(2).describe("What to look for. Searched against what was said, both sides of the conversation, and nothing else: not the thinking, not the tool output, which between them name nearly every identifier in the workspace and would return most of the board."),
		caseSensitive: Dl().optional().describe("Whether capitals matter.")
	}), cm = R(["user", "agent"]), lm = F({
		text: j().describe("The matching line, with a little either side of it."),
		speaker: cm.describe("Who said it. Carried with the words rather than beside them, because a line of the agent's prose under a card reads as something you typed until the row says otherwise.")
	}), um = F({
		id: j().describe("Which conversation matched."),
		snippet: lm.optional().describe("Why, in its own words. Absent when the title was the match, which the card already shows: repeating it underneath is noise where evidence was wanted.")
	}), dm = F({
		matches: P(um).describe("What matched, from the live fleet and the archive together."),
		scanned: M().describe("How many conversations were actually read, so a screen can say when a search saw less than everything rather than implying it saw all of it."),
		indexing: N().describe("Whether what was said is still being read in the background. True means this answer can still grow, so a screen must say it is incomplete rather than presenting it as the whole list.")
	}), fm = F({
		id: j().min(1).describe("Which conversation."),
		title: j().trim().min(1).max(80).describe("What to call it from now on.")
	}), pm = F({
		id: j().min(1).describe("Which conversation."),
		text: j().trim().min(1).max(8e3).describe("The words to put in the agent's mouth. Bounded just above what the next turn can carry whole, because a line too long to be handed over intact would reach the agent truncated and quietly break the very thing this is for.")
	}), mm = F({
		id: j().min(1).describe("Which conversation."),
		autoLand: N().nullable().describe("Whether its work merges automatically when a turn finishes. Null clears the override and goes back to following the sandbox-wide setting, so a conversation does not sit holding a frozen copy of a default it has quietly stopped following.")
	}), hm = F({
		id: j().min(1).describe("Which conversation."),
		resumeAfterOutage: N().nullable().describe("Whether it retries by itself when the model provider was what failed. Null clears the override back to the sandbox-wide setting.")
	}), gm = F({
		id: j().min(1).describe("Which conversation."),
		resumeAfterLimit: N().nullable().describe("Whether the turn a spent allowance refused is sent again by itself once the window reopens. Null clears the override back to the sandbox-wide setting.")
	}), _m = F({
		id: j().min(1).describe("Which conversation."),
		moveAfterLimit: N().nullable().describe("Whether the turn a spent allowance refused is moved to another connected account of the same provider that has room, as soon as the refusal lands. Null clears the override back to the sandbox-wide setting.")
	}), vm = F({
		id: j().min(1).describe("Which conversation."),
		repo: j().min(1).describe("Which repository."),
		path: j().min(1).describe("Which file, relative to that repository.")
	}), ym = F({
		path: j().describe("Which file."),
		reason: Qp.describe("Why it would not merge, and the three have nothing in common but the symptom. Your own uncommitted edits on that path, where yours is the copy at risk. The shared tree having moved under the conversation since it started, where nothing of yours is at risk. Or a file git cannot merge at all, where no automatic answer exists.")
	}), bm = F({
		repo: j().describe("Which repository."),
		paths: P(ym).describe("The files that genuinely would not apply. Not the whole change: reporting everything whenever the cause could not be pinned down turned four real conflicts into a wall of fourteen."),
		clean: M().describe("How many files in this repository passed but remain held with the refused composition. Zero alongside an empty list means the repository could not be reached at all."),
		mainBranch: j().optional().describe("The branch your own checkout is on, which is what the conversation has to rebase onto. Carried because only the sandbox can see it. Absent where there is no name to give.")
	}), xm = F({
		landed: N().describe("Whether the entire composed change was applied."),
		conflicts: P(bm).optional().describe("What stopped the whole composed change, grouped per repository."),
		resolving: P(F({
			repo: j().describe("Which repository."),
			paths: P(j()).describe("Which files now hold conflict markers to sort out by hand.")
		})).optional().describe("Files left half-merged when you asked to carry the whole composition with its conflicts marked for resolution."),
		held: N().optional().describe("Nothing was applied and nothing failed: there is work waiting on the branch for a deliberate merge. Not merged on its own cannot say that, because on its own it means refused.")
	}), Sm = R([
		"check",
		"merge",
		"measure"
	]), Cm = R(["cumulative", "outstanding"]), wm = F({
		id: j().min(1).describe("Which conversation's work to merge."),
		mode: Sm.optional().describe("How to apply it. The default applies every repository or none, so a refusal leaves the workspace exactly as it was. The other carries the whole composition and leaves conflicted paths with markers to resolve by hand."),
		span: Cm.optional().describe("How much of the work to take. Leave it out for everything not yet merged."),
		force: N().optional().describe("Go ahead despite a check that would otherwise refuse.")
	});
})), Em, Dm = y((() => {
	U(), Em = F({
		status: R([
			"allowed",
			"allowed_warning",
			"rejected"
		]),
		resetsAt: M().optional(),
		rateLimitType: j().optional(),
		utilization: M().optional()
	});
})), Om, km = y((() => {
	U(), Om = R([
		"off",
		"cooldown",
		"on"
	]);
})), Am, jm, Mm, Nm, Pm, Fm, Im, Lm, Rm, zm, Bm, Vm, Hm, Um, Wm, Gm = y((() => {
	U(), Am = F({
		name: j().describe("Its id, and what the close route takes."),
		label: j().optional().describe("What to call it on screen."),
		kind: R([
			"shell",
			"panel",
			"agent",
			"job",
			"process"
		]).describe("What sort of thing it is: a terminal somebody opened, a repository's dev server, where an agent's commands run, a job the sandbox started, or a background process that is watched rather than typed into."),
		running: N().describe("Whether it is alive. A finished one-shot job leaves a dead shell behind, which reads as false and is how it gets swept up."),
		activityAt: M().describe("When it last produced output, in milliseconds. Zero means it did not say, which is unknown rather than 1970."),
		exitCode: M().optional().describe("How the last thing in it ended. Absent while that pane is still alive."),
		command: j().optional().describe("What is running in it right now. Absent when it is sitting at a prompt. Not a second spelling of whether it is alive: this says whether anything is happening, which is what a close button should ask about before it ends something."),
		extensionId: j().optional().describe("Which extension declared this process, when one did."),
		processName: j().optional().describe("Which of that extension's processes it is, which together with the id above addresses its start and stop routes."),
		help: F({
			requestId: j().describe("What to send back when you answer, through the agent reply route."),
			message: j().describe("What the agent needs, in its own words."),
			requestedAt: M().describe("When it asked, in milliseconds.")
		}).optional().describe("The agent has stopped at something only a person can clear, and is waiting at this terminal. Present only while it is waiting.")
	}), jm = F({ sessions: P(Am).describe("Every live surface the sandbox is holding, in one list, because the question they all answer is the same one.") }), Mm = F({ name: j().describe("Which terminal.") }), Nm = F({
		name: j().describe("Which terminal."),
		lines: H().min(1).max(1e5).default(2e4).describe("How far back to ask for. Clamped to the history that actually exists.")
	}), Pm = F({
		name: j().describe("Which terminal this is from."),
		text: j().describe("The history, oldest line first, with wrapped lines rejoined so a copied address or path comes back whole."),
		lines: M().describe("How many lines you got."),
		truncated: N().describe("It stopped because you asked for that many, not because the history ran out.")
	}), Fm = F({
		id: j().describe("Stable for the life of the page, which is what lets a tab survive a refresh of this list. Its address changes as the agent navigates and its position changes when a sibling closes."),
		title: j().optional().describe("The page's title. Absent mid-navigation, which is exactly when a tab still has to be drawn."),
		url: j().describe("Where it is."),
		active: N().describe("The one the agent last touched, or for a finished session, the one it ended on. Exactly one page has this.")
	}), Im = F({
		name: j().describe("Its id, and what the close route takes."),
		label: j().describe("What to call it on screen: the open page's title, or its site, or which browser this is."),
		server: j().describe("Which browser drives it: the credential-free one, or a signed-in account's. The difference between a throwaway page and one logged in as you, which is worth saying out loud."),
		running: N().describe("Whether it is still open. A closed one is listed for a while with the pages it had, as the record of where the agent went."),
		activityAt: M().describe("When it last did anything, in milliseconds."),
		finishedAt: M().optional().describe("When it closed, in milliseconds. Absent while it is open."),
		help: F({
			requestId: j().describe("What to send back when you answer, through the agent reply route."),
			message: j().describe("What the agent needs, in its own words."),
			requestedAt: M().describe("When it asked, in milliseconds.")
		}).optional().describe("The agent has hit something only a person can clear: a captcha, a password it does not hold, a check on your phone. Present only while it is waiting."),
		pages: P(Fm).describe("Every page it has open. A browser holds several at once, which is the reason it is listed apart from the terminals.")
	}), Lm = F({ sessions: P(Im).describe("Every browser the agents have running, open or recently closed.") }), Rm = F({ name: j().describe("Which browser.") }), zm = R(["subagent", "spawned"]), Bm = R([
		"pending",
		"running",
		"blocked",
		"completed",
		"failed",
		"killed",
		"paused"
	]), Vm = F({
		state: R([
			"verified",
			"unproven",
			"failing",
			"no-code"
		]).describe("Whether anything proved its work: a check passed after its last edit, it changed code and nothing checked it, a check ran and failed, or it changed no code at all."),
		paths: P(j()).optional().describe("The code files it changed, most recent last. The first few; the record holds the rest."),
		check: j().optional().describe("The command that spoke: the one that cleared it, or the one that failed. Named rather than summarised, so a targeted test is not read as the whole suite.")
	}), Hm = F({
		id: j().describe("The id of the tool call that started it (an SDK child) or the child's own conversation id (a spawned one); either way both sides already hold it, so a card links to its subagent with the id it has and the subagent points back the same way."),
		kind: zm.describe("What sort of subagent: one the runtime's own Task tool spawned in-process, or a full child agent the daemon started for the turn. It changes only how you watch it."),
		conversationId: j().describe("The conversation whose turn started it, and the way back to the chat it belongs to."),
		agentType: j().optional().describe("What kind of subagent it is."),
		description: j().optional().describe("What it was asked to do, in one line."),
		model: j().optional().describe("Which model it runs on."),
		provider: j().optional().describe("Which provider serves it, for a child agent spawned across providers."),
		spawnDepth: M().optional().describe("How deep in the chain it sits, where one means the turn itself started it. A subagent can start subagents, and a flat list that could not say so would read as though the turn started all of them."),
		background: N().optional().describe("The parent carried on working instead of waiting for it. This is the whole reason the list exists: such a subagent used to be invisible until its result landed, sometimes minutes later."),
		status: Bm.describe("How it is going. Blocked means it needs an answer, which a parent and an operator act on differently from it simply working."),
		startedAt: M().describe("When it started, in milliseconds."),
		endedAt: M().optional().describe("When it finished, in milliseconds. Absent while it works."),
		activityAt: M().describe("When it last did anything, in milliseconds."),
		tokens: M().optional().describe("What it has spent. Its own, so a parent's cost and the sum of its subagents' are two different true numbers."),
		toolUses: M().optional().describe("How many tools it has used."),
		lastTool: j().optional().describe("The last one it reached for."),
		summary: j().optional().describe("Its report: what it concluded, without opening its record. The question a finished subagent gets read for."),
		error: j().optional().describe("Why it failed, when it did."),
		verification: Vm.optional().describe("Whether anything proved the work its report describes.")
	}), Um = F({ sessions: P(Hm).describe("Every subagent and child agent this sandbox's conversations have started.") }), Wm = F({ id: j() });
})), Km, qm, Jm, Ym, Xm, Zm, Qm = y((() => {
	U(), Km = R(["messages", "everything"]), qm = F({
		id: j().describe("The share's own id, minted fresh each time, so sharing one conversation twice gives two links. Deliberately not the conversation's id, which is memorable by design and would make a page's address guessable."),
		conversationId: j().describe("Which conversation it was taken from."),
		title: j().describe("The title on the page, which is the sharer's choice rather than the conversation's own."),
		detail: Km.describe("How much travels: the two speakers' words alone, or the whole record including the agent's work and thinking, which necessarily publishes the code and command output in it."),
		sharedAt: M().describe("When the snapshot was taken, in milliseconds. A share is frozen, so this dates what a recipient can see rather than when the conversation happened."),
		messages: M().describe("How many messages are behind the link."),
		url: j().optional().describe("The page's address. Absent on a sandbox with nowhere to publish to.")
	}), Jm = F({ shares: P(qm).describe("Every conversation currently published as a page.") }), Ym = F({
		conversationId: j().min(1).describe("Which conversation to publish."),
		title: j().min(1).max(80).describe("The title for the page. The conversation's own name is only what a dialog would open with."),
		detail: Km.describe("How much to publish. Two levels rather than a set of switches, because every extra toggle is another thing to get wrong about a link that cannot be recalled.")
	}), Xm = F({ id: j().min(1).describe("Which share to re-take. Its link stays the same, which matters because it has already been sent.") }), Zm = F({ id: j().min(1).describe("Which share to take down.") });
})), $m, eh, th, nh, rh, ih, ah, oh, sh, ch, lh, uh, dh, fh, ph, mh, hh, gh, _h, vh, yh, bh, xh, Sh = y((() => {
	U(), J(), Qm(), Gm(), _p(), $m = R([
		"pending",
		"approved",
		"rejected",
		"cancelled"
	]), eh = R([
		"pending",
		"answered",
		"cancelled"
	]), th = R([
		"pending",
		"allowed",
		"always",
		"denied",
		"cancelled"
	]), nh = R([
		"pending",
		"helped",
		"declined",
		"cancelled"
	]), rh = R([
		"pending",
		"approved",
		"skipped",
		"cancelled"
	]), ih = R([
		"pending",
		"connecting",
		"skipped",
		"cancelled"
	]), ah = F({
		...rp,
		status: $m.describe("Where the decision stands.")
	}), oh = F({
		...ip,
		status: eh.describe("Where the answer stands."),
		answers: L(j(), P(j())).optional().describe("What was chosen, keyed by the question, with the chosen labels or the user's own words.")
	}), sh = Hf.extend({
		...ap,
		status: th.describe("Where the decision stands.")
	}), ch = F({
		...op,
		status: nh.describe("How the hand-over ended.")
	}), lh = F({
		...sp,
		status: nh.describe("How the hand-over ended.")
	}), uh = F({
		...cp,
		status: ih.describe("Where the decision stands."),
		outcome: dp.optional().describe("How an accepted ask's setup ended (the capability_outcome frame).")
	}), dh = F({
		...lp,
		status: rh.describe("Where the decision stands."),
		receipt: fp.optional().describe("How the approved payment ended (the payment_receipt frame).")
	}), fh = F({
		...up,
		status: rh.describe("Where the decision stands."),
		receipt: pp.optional().describe("Who released it, or that somebody refused (the credential_receipt frame).")
	}), ph = Ec(() => F({
		id: j().describe("The call's id."),
		name: j().describe("Which tool."),
		category: Zf.describe("What kind of thing it does: read, edit, delete, move, search, run, think, fetch. Named the same way whatever the backend called the tool."),
		status: Qf.describe("How it went."),
		target: j().optional().describe("What it acted on, in one line: a file, a command, an address."),
		locations: P($f).optional().describe("The files it touched."),
		content: P(ep).optional().describe("What it produced: text, a change to a file, or a picture."),
		children: P(ph).optional().describe("Calls a delegated subagent made, nested under the call that started it, so a reopened conversation redraws the delegation rather than collapsing it into one result."),
		thinking: j().optional().describe("What the agent was reasoning about around this call."),
		subagent: mh.optional().describe("The helper this call started, as the daemon's registry sees it: what it is, how it is going, what it has spent. What a card can say about a backgrounded child whose result is minutes away.")
	})), mh = F({
		kind: zm,
		agentType: j().optional(),
		description: j().optional(),
		model: j().optional(),
		provider: j().optional(),
		background: N().optional(),
		status: Bm,
		tokens: M().optional(),
		toolUses: M().optional(),
		lastTool: j().optional(),
		summary: j().optional(),
		error: j().optional(),
		verification: Vm.optional()
	}), hh = F({
		title: j().describe("The one line a reader sees, on a row that opens to the text below."),
		text: j().describe("The note itself, which is also exactly what the model was told.")
	}), gh = F({
		costUsd: M().optional(),
		inputTokens: M().optional(),
		outputTokens: M().optional(),
		durationMs: M().optional(),
		numTurns: M().optional()
	}), _h = F({
		role: R([
			"user",
			"assistant",
			"notice"
		]).describe("Who said it. A notice is neither side: it is something that happened to the turn, recorded so a reopened conversation can say it. Without those, a turn a provider refused ends on the user's message and reads as broken."),
		text: j().describe("The words."),
		sentAt: M().optional().describe("When it was sent, in milliseconds. On the user's rows only, because that is the only moment actually known: a turn's own frames arrive with no clock, so stamping the agent's rows could only ever mean the whole turn's start or end."),
		attachments: P(j()).optional().describe("Files attached to this message, as workspace paths."),
		checkpointId: j().optional().describe("The saved point this message can be rewound to. Looked up on each read rather than stored, so what is offered is exactly what is still there to go back to."),
		rewindIndex: M().int().nonnegative().optional().describe("This message's position in the conversation's record, which is how a rewind names it. Present only beside a checkpoint."),
		thinking: j().optional().describe("What the agent was reasoning about."),
		tools: P(ph).optional().describe("The tool calls this part of the turn made."),
		todos: P(Yf).optional().describe("The agent's task checklist, as of this bubble."),
		usage: gh.optional().describe("What the turn cost, on the bubble its answer ended in."),
		notes: P(hh).optional().describe("What the sandbox added to this message before the model saw it. Carried on the message rather than as rows of their own, because they genuinely were part of what was sent."),
		placed: N().optional().describe("A person wrote this in the agent's voice, with no turn behind it. Marked for the human re-reading the conversation months later, so their own words do not pass as the agent's. The agent itself never sees the mark."),
		noticeAction: R([
			"landHold",
			"outageOptOut",
			"depsInstall",
			"tierHold"
		]).optional().describe("A one-press follow-up this notice offers, by name. The chat decides what it does and whether it still applies."),
		noticeWait: R(["credentialRenewal", "personaRoute"]).optional().describe("The wait this notice describes, by name, so a reader can say whether it is still on."),
		plan: ah.optional().describe("The plan this row asked approval for, and the answer."),
		question: oh.optional().describe("The questions this row asked, and the picks that answered them."),
		permission: sh.optional().describe("The tool this row asked permission for, and the decision."),
		browserHelp: ch.optional().describe("The browser hand-over this row asked for, and how it ended."),
		terminalHelp: lh.optional().describe("The terminal hand-over this row asked for, and how it ended."),
		capabilityOffer: uh.optional().describe("The capability setup this row asked for, the decision, and the outcome."),
		paymentOffer: dh.optional().describe("The payment this row asked for, the decision, and the receipt."),
		credentialOffer: fh.optional().describe("The gated credential this row asked to use, who may release it, and who did.")
	}), vh = I("op", [
		F({
			op: z("append").describe("A new row at the end."),
			row: _h
		}),
		F({
			op: z("replace").describe("This row, whole, in place of the one at that index."),
			index: M().int().nonnegative(),
			row: _h
		}),
		F({
			op: z("drop").describe("The row at that index is gone: it was opened and never written into."),
			index: M().int().nonnegative()
		}),
		F({
			op: z("text").describe("More of the agent's prose, onto that row's text."),
			index: M().int().nonnegative(),
			text: j()
		}),
		F({
			op: z("thinking").describe("More of the agent's reasoning, onto that row's thinking."),
			index: M().int().nonnegative(),
			text: j()
		}),
		F({
			op: z("tool").describe("A tool card, whole: new, or the latest state of one already there, matched by id wherever it nests."),
			index: M().int().nonnegative(),
			tool: ph,
			parent: j().optional().describe("The card this one nests under, when it is a delegated subagent's own call.")
		})
	]), yh = F({ messages: P(_h).describe("The conversation, in order. Each block of the agent's prose is its own message with the tools that block introduced, which is what reproduces the way it actually unfolded.") }), bh = F({
		reason: R([
			"stopped",
			"limit",
			"outage"
		]).describe("Which ending left the work here: a Stop or a daemon killed under the turn, a spent usage allowance, or a provider that refused it."),
		resetsAt: M().optional().describe("When the spent allowance reopens, in epoch seconds. Absent for every ending that names no instant, and for a provider that publishes none."),
		held: F({
			ran: N().describe("Whether the held turn got anywhere before it was refused, which is a different sentence from one refused at the door."),
			contextTokens: M().optional().describe("How much context a press that keeps the session re-reads once, on this account at the reset or carried to another. Absent when no usage frame measured it."),
			handoffTokens: M().optional().describe("What a press that opens a fresh session pays instead: the capped record plus the sandbox's measured brief, counted at the failure."),
			moving: j().optional().describe("The account the owner's policy is already moving this turn to, when it is; the surface then reports the move rather than offering a press.")
		}).optional().describe("Present when the daemon still holds the refused turn whole, so a press re-runs it rather than appending a message after it."),
		scheduled: N().optional().describe("Whether something other than the user is already booked to send this turn again, so the surface reports the wait instead of offering a press.")
	}), xh = yh.extend({
		sessionId: j().optional().describe("The provider session behind the last turn, when there is one."),
		provider: ud.optional().describe("Which provider minted that session."),
		harness: fd.optional().describe("Which runtime minted it: a session resumes only on the loop that opened it."),
		account: j().optional().describe("Which stored account it belongs to, as the daemon resolved it. Absent when no stored account paid for the turn."),
		ending: bh.optional().describe("How the last turn ended, when it left work behind that one press finishes. Absent for a conversation whose last turn ended on its own, and for the failures that name something to repair first."),
		from: M().int().nonnegative().describe("Where the first message sits in the whole record, and the `before` that asks for the page above this one."),
		more: N().describe("Whether older messages precede this page.")
	}), F({
		title: j(),
		sharedAt: M(),
		detail: Km,
		messages: P(_h)
	});
})), Ch, wh, Th, Eh, Dh, Oh = y((() => {
	U(), J(), Tm(), Dm(), km(), Hd(), Gm(), _p(), Sh(), Ch = I("kind", [
		F({
			kind: z("session"),
			sessionId: j(),
			account: j().optional().describe("Which stored account this session belongs to, as the daemon resolved it for the turn.")
		}),
		F({
			kind: z("worktree"),
			branch: j(),
			base: j(),
			unenforced: N().optional(),
			sync: F({
				commits: M(),
				blocked: P(j())
			}).optional(),
			remote: j().optional()
		}),
		F({
			kind: z("landed"),
			landed: N(),
			conflicts: P(bm).optional(),
			held: N().optional(),
			deps: F({
				missing: M(),
				started: P(j()),
				deferred: N()
			}).optional()
		}),
		F({
			kind: z("preamble"),
			notes: P(hh)
		}),
		F({
			kind: z("init"),
			model: j()
		}),
		F({
			kind: z("checkpoint"),
			id: j(),
			index: M().int().nonnegative().optional()
		}),
		F({
			kind: z("steer"),
			text: j(),
			sentAt: M(),
			attachments: P(j()).optional()
		}),
		F({
			kind: z("delta"),
			text: j(),
			parentToolUseId: j().optional()
		}),
		F({
			kind: z("text_end"),
			parentToolUseId: j().optional()
		}),
		F({
			kind: z("thinking"),
			text: j(),
			parentToolUseId: j().optional()
		}),
		F({
			kind: z("tool_call"),
			id: j(),
			name: j(),
			category: Zf,
			status: Qf,
			target: j().optional(),
			locations: P($f).optional(),
			content: P(ep).optional(),
			parentToolUseId: j().optional()
		}),
		F({
			kind: z("tool_call_update"),
			id: j(),
			status: Qf.optional(),
			content: P(ep).optional(),
			locations: P($f).optional()
		}),
		F({
			kind: z("terminal"),
			session: j()
		}),
		F({
			kind: z("browser"),
			session: j()
		}),
		F({
			kind: z("subagent"),
			id: j(),
			subagentKind: zm,
			agentType: j().optional(),
			description: j().optional(),
			model: j().optional(),
			provider: j().optional(),
			background: N().optional()
		}),
		F({
			kind: z("subagent_update"),
			id: j(),
			status: Bm.optional(),
			tokens: M().optional(),
			toolUses: M().optional(),
			lastTool: j().optional(),
			summary: j().optional(),
			error: j().optional(),
			verification: Vm.optional()
		}),
		F({
			kind: z("todos"),
			items: P(Yf)
		}),
		F({
			kind: z("commands"),
			items: P(Kf)
		}),
		F({
			kind: z("usage"),
			account: j().optional(),
			costUsd: M().optional(),
			inputTokens: M().optional(),
			outputTokens: M().optional(),
			cacheReadTokens: M().optional(),
			cacheCreationTokens: M().optional(),
			durationMs: M().optional(),
			numTurns: M().optional()
		}),
		Em.extend({
			kind: z("rate_limit_info"),
			account: j().optional()
		}),
		F({
			kind: z("fast_mode"),
			state: Om,
			reason: j().optional()
		}),
		F({
			kind: z("tier"),
			tier: R(["fast", "standard"]),
			score: M(),
			rules: P(j()),
			model: j().optional(),
			routed: N(),
			held: N().optional()
		}),
		F({
			kind: z("provider_retry"),
			attempt: M(),
			maxAttempts: M().optional(),
			nextAttemptAt: M().optional(),
			status: M().optional()
		}),
		F({
			kind: z("account_usage"),
			account: j().optional(),
			windows: P(kd)
		}),
		Xf.extend({ kind: z("context_usage") }),
		F({
			kind: z("compact"),
			trigger: j(),
			preTokens: M().optional(),
			postTokens: M().optional()
		}),
		mp,
		hp,
		gp,
		F({
			kind: z("browser_help"),
			...op
		}),
		F({
			kind: z("terminal_help"),
			...sp
		}),
		F({
			kind: z("capability_offer"),
			...cp
		}),
		dp.extend({
			kind: z("capability_outcome"),
			requestId: j()
		}),
		F({
			kind: z("payment_offer"),
			...lp
		}),
		fp.extend({
			kind: z("payment_receipt"),
			requestId: j()
		}),
		F({
			kind: z("credential_offer"),
			...up
		}),
		pp.extend({
			kind: z("credential_receipt"),
			requestId: j()
		}),
		F({
			kind: z("resolved"),
			requestId: j(),
			reply: Ld.optional()
		}),
		F({
			kind: z("mode"),
			mode: xd
		}),
		F({
			kind: z("error"),
			message: j(),
			code: R([
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
			engine: F({
				id: j().describe("Which engine (e.g. claude)."),
				running: j().optional().describe("The version that was refused, when the provider named it."),
				floor: j().describe("The lowest version the provider will accept.")
			}).optional(),
			resetsAt: M().optional(),
			autoResume: R(["scheduled", "available"]).optional(),
			held: F({
				ran: N(),
				contextTokens: M().optional(),
				handoffTokens: M().optional(),
				moving: j().optional()
			}).optional(),
			outage: F({
				retryAt: M(),
				attempt: M(),
				maxAttempts: M()
			}).optional()
		}),
		F({ kind: z("done") })
	]), wh = [
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
	], Th = Ch.options.filter((e) => wh.includes(e.shape.kind.value)), Eh = I("kind", Th), Dh = I("kind", [
		F({
			kind: z("attached").describe("The first frame, identifying the run you have joined and handing you its transcript so far."),
			run: j().describe("The run's id."),
			startedAt: M().describe("When it started, in milliseconds, so a window joining late can show how long it has been going."),
			seq: M().describe("How many frames the run has produced so far. A fact at or below this number is being replayed; a patch is never."),
			rows: P(_h).describe("The turn's rows as they stand: what was asked, and everything the agent has said and done since. Draw these, then apply the patches that follow.")
		}),
		F({
			kind: z("patch").describe("One change to the run's rows."),
			seq: M().describe("Its position in the run, counting from one."),
			patch: vh
		}),
		F({
			kind: z("fact").describe("One thing about the turn that is not a row: its session, its branch, its cost, a failure."),
			seq: M().describe("Its position in the run, counting from one. At or below the head's number, it is being replayed."),
			fact: Eh
		}),
		F({ kind: z("end").describe("The run is over and every frame has been delivered. A stream that closes without this was dropped mid-run, so re-attach rather than assuming the turn finished.") })
	]);
})), kh, Ah, jh, Mh, Nh, Ph, Fh, Ih, Lh, Rh, zh, Bh = y((() => {
	U(), kh = R([
		"turn",
		"interval",
		"pre-restore",
		"restore",
		"user"
	]), Ah = F({
		id: j().describe("The saved point's id, which is what restoring and diffing take."),
		at: M().describe("When it was taken, in milliseconds."),
		trigger: kh.describe("What caused it. The automatic between-turn captures are a safety net and are not listed; they dissolve into the next visible point's differences."),
		label: j().optional().describe("What to call it. For one taken before a turn, that turn's prompt.")
	}), jh = F({ snapshots: P(Ah).describe("Every point you can go back to, newest first.") }), Mh = F({
		conversationId: j().min(1).describe("Which conversation to rewind."),
		index: M().int().nonnegative().describe("Which message to go back to, counting from the start. It is also how many messages survive: rewinding to the first keeps none of them and puts the files back to before it ran.")
	}), Nh = F({
		snapshot: j().optional().describe("The saved point the files were put back to. Absent for a conversation working in its own copy, whose rewind moved a branch rather than the shared timeline."),
		dropped: M().int().nonnegative().describe("How many messages were removed.")
	}), Ph = F({ id: j().min(1).describe("Which saved point.") }), Fh = F({
		scope: j().describe("Which part of the workspace the path belongs to: the workspace root, or one of the repositories inside it."),
		path: j().describe("The path, relative to that scope."),
		status: R([
			"added",
			"modified",
			"deleted",
			"type-changed"
		]).describe("What happened to it.")
	}), Ih = F({ changes: P(Fh).describe("Everything that differs between this saved point and the one before it.") }), Lh = F({
		id: j().min(1).describe("Which saved point."),
		scope: j().min(1).describe("Which part of the workspace the path belongs to."),
		path: j().min(1).describe("The file, relative to that scope.")
	}), Rh = F({
		beforeBytes: M().int().nonnegative().optional().describe("How big the before side is, in bytes. Absent when the file did not exist yet."),
		afterBytes: M().int().nonnegative().optional().describe("How big the after side is, in bytes. Absent when the file was deleted."),
		patch: j().optional().describe("The changed regions as unified-diff hunks (`@@` sections only). Absent when the change was too large to render even as a patch."),
		more: N().optional().describe("There were more changed regions than fit; the patch stops at a region boundary.")
	}), zh = F({
		before: j().optional().describe("The whole file as it was. Absent when it did not exist yet, or when `partial` is set."),
		after: j().optional().describe("The whole file as it is now. Absent when it was deleted, or when `partial` is set."),
		binary: N().optional().describe("The file is not text, so neither side is sent."),
		partial: Rh.optional().describe("Set when the file was too large to send whole: what is sent instead of the two sides.")
	});
})), Vh, Hh = y((() => {
	K(), _p(), Oh(), J(), Bh(), Hd(), Z(), Vh = {
		run: G.route({
			method: "POST",
			path: "/agent",
			summary: "Say something to an agent",
			description: "Starts a turn and answers immediately with its id; the work runs inside the sandbox whether or not anybody stays connected. Watch it by attaching. Naming a conversation that does not exist yet opens it."
		}).input(Cd).output(Ed),
		attach: G.route({
			method: "POST",
			path: "/agent/attach",
			summary: "Watch a turn happen",
			description: "Streams everything the agent does: its words, the tools it reaches for, and the answers it gets. Give it the point you have already seen and it replays from there before going live, so a reload loses nothing. The window that started the turn holds no special claim, and any number of watchers on any number of devices see the same thing."
		}).input(Dd).output(W(Dh)),
		reply: G.route({
			method: "POST",
			path: "/agent/reply",
			summary: "Answer a question the agent asked",
			description: "Un-parks a turn that is waiting on you: approving a plan, choosing between options, or permitting a tool. The turn picks up where it stopped."
		}).input(Ld).output(Y),
		steer: G.route({
			method: "POST",
			path: "/agent/steer",
			summary: "Interrupt a running turn",
			description: "Slips a message into a turn already under way, without stopping it. This is how you redirect an agent mid-thought rather than waiting for it to finish being wrong."
		}).input(Rd).output(Y),
		stop: G.route({
			method: "POST",
			path: "/agent/stop",
			summary: "Stop a turn now",
			description: "Cancels the running turn inside the sandbox. Whatever it had already written to disk stays written."
		}).input(zd).output(Y),
		resume: G.route({
			method: "POST",
			path: "/agent/resume",
			summary: "Run a refused turn again",
			description: "Sends the same turn again when the model provider's allowance refused it, with everything it originally carried except who serves it: the caller may name a different provider, harness or account, which is the usual answer to a spent allowance. It repeats the request rather than adding a new message to the conversation, so pressing it twice costs nothing and the agent is never told to continue work it has not started."
		}).input(Vd).output(Ed),
		rewind: G.route({
			method: "POST",
			path: "/agent/rewind",
			summary: "Go back to an earlier message",
			description: "Puts the files back as they stood at that point, drops every message after it, and forgets what the model remembered, so the next thing you say starts from there cleanly. Refused while a turn is running, because a restore cannot overwrite files an agent is editing, and refused for a message with no saved state to return to."
		}).input(Mh).output(Nh),
		commands: G.route({
			method: "GET",
			path: "/agent/commands",
			summary: "Shortcut commands the agent knows",
			description: "The commands a provider published the last time one of its turns ran, so a composer can offer them before this conversation has run anything. A running turn's own list wins over this one."
		}).input(qf).output(Jf),
		refusals: G.route({
			method: "GET",
			path: "/agent/refusals",
			summary: "The last time each provider said no",
			description: "What each model provider most recently refused and why. Read this alongside an account's usage: the usage says how full it was when last checked, this says whether it has since started turning work away."
		}).output(Pd)
	};
})), Uh, Wh, Gh, Kh, qh, Jh, Yh, Xh, Zh, Qh, $h, eg, tg, ng, rg, ig, ag, og = y((() => {
	U(), ld(), Uh = R([
		"crash",
		"report",
		"detection"
	]), Wh = F({
		at: M().describe("When, in milliseconds."),
		kind: j().max(40).describe("What sort of thing it was: a console line, a request, a click, a route change."),
		message: j().max(300).describe("What it said, already truncated by the SDK.")
	}), Gh = F({
		email: j().max(320).optional().describe("An address they typed, to reach them about it. Unverified."),
		name: j().max(200).optional().describe("A name they typed. Unverified, and never identity.")
	}), Kh = 20, qh = L(j().max(60), j().max(300)).refine((e) => Object.keys(e).length <= Kh, { message: `at most ${Kh} context entries` }), Jh = F({
		kind: Uh.describe("A crash the SDK caught, something a person wrote in, or a problem the SDK noticed on its own."),
		message: j().min(1).max(1e3).describe("The error's own message, or the headline of what a person reported."),
		stack: j().max(2e4).optional().describe("The stack, verbatim from the browser."),
		url: j().max(2e3).optional().describe("Where it happened: the page's address, or a screen name in an app."),
		release: j().max(200).optional().describe("Which build it came from: a commit sha or a tag. With it the agent reads your real source rather than minified frames."),
		userAgent: j().max(400).optional().describe("What the browser said it was."),
		description: j().max(5e3).optional().describe("What the person typed, when a person is the one reporting."),
		reporter: Gh.optional().describe("Who says they are reporting it. Unverified by construction."),
		breadcrumbs: P(Wh).max(40).optional().describe("What happened just before, oldest first."),
		context: qh.optional().describe("Whatever else the app attached: a route, a version, a locale."),
		fingerprint: j().max(200).optional().describe("Group by this instead of by the stack, when your app knows better than the stack does.")
	}), F({
		report: Jh,
		clientId: j().min(1).max(200).describe("The SDK's own id for this browser. Not a secret: it is what the rate limit counts against."),
		powNonce: j().max(400).optional(),
		key: j().max(200).optional()
	}), Yh = R([
		"open",
		"investigating",
		"resolved",
		"ignored"
	]), Xh = F({
		conversationId: j().describe("The conversation this run became."),
		at: M().describe("When it started, in milliseconds."),
		atCount: M().describe("How many times it had happened when this run started.")
	}), Zh = F({
		kind: Uh,
		title: j().min(1).max(300).describe("The one line this is listed under."),
		culprit: j().max(300).optional().describe("The frame it came from, when the stack named one."),
		automationId: q.describe("Which intake received it."),
		origin: j().max(400).optional().describe("Which site it came from."),
		firstSeen: M().describe("When it first happened, in milliseconds."),
		lastSeen: M().describe("When it last happened, in milliseconds."),
		count: M().describe("How many times this exact thing has arrived."),
		status: Yh.default("open").describe("Where it stands with you."),
		statusAt: M().optional().describe("When the status last changed, in milliseconds."),
		release: j().max(200).optional().describe("The build the latest one came from."),
		sample: Jh.describe("The most recent one, in full."),
		firedAt: M().optional().describe("What the count stood at the last time this woke an agent."),
		runs: P(Xh).max(20).optional().describe("The turns started for it.")
	}), Qh = Zh.extend({ id: q.describe("The issue's id, which is its fingerprint.") }), $h = F({
		issues: P(Qh).describe("The inbox, most recently seen first."),
		invalid: P(j()).describe("Files in the issues directory that could not be read at all.")
	}), eg = F({ id: q.describe("Which issue.") }), tg = F({
		id: q.describe("Which issue."),
		status: R([
			"open",
			"resolved",
			"ignored"
		]).describe("Where it now stands with you.")
	}), ng = F({
		keyFromBrowsers: N().optional().describe("Let a browser report with the key alone, rather than only from a site you listed. Off unless you need it."),
		dailyReportMax: M().int().positive().optional().describe("How many reports a day this intake accepts at all."),
		escalateAfter: M().int().positive().optional().describe("How many more times a known crash must happen before it wakes an agent again."),
		antiBot: R(["pow"]).optional().describe("Make a person's browser solve a small puzzle before it accepts a written report."),
		title: j().max(80).optional().describe("The dialog's heading."),
		prompt: j().max(300).optional().describe("The line above the box they type in."),
		thanks: j().max(300).optional().describe("What it says once they have sent it."),
		askEmail: N().optional().describe("Ask for an address to reply to. Optional for them either way."),
		accent: j().regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, "accent must be a hex colour, e.g. #e47100").optional(),
		captureCrashes: N().optional().describe("Catch uncaught errors automatically, as well as what people write in.")
	}), F({
		automationId: j(),
		title: j(),
		prompt: j(),
		thanks: j(),
		askEmail: N(),
		accent: j(),
		captureCrashes: N(),
		antiBot: R(["pow", "off"])
	}), F({
		ok: z(!0),
		id: j()
	}), rg = F({
		origin: j(),
		allowed: N(),
		lastSeenAt: M(),
		loads: M()
	}), ig = F({ origins: P(rg) }), ag = F({ automationId: q.describe("Which intake.") });
})), sg, cg, lg, ug, dg, fg, pg, mg, hg, gg, _g, vg, yg, bg, xg, Sg, Cg, wg, Tg, Eg, Dg, Og, kg, Ag = y((() => {
	U(), J(), Tm(), ld(), og(), sg = R([
		"turn.settled",
		"agent.landed",
		"deps.broken",
		"deps.fixed"
	]), F({
		event: sg,
		agentId: j(),
		title: j().optional(),
		branch: j(),
		outcome: R([
			"landed",
			"conflict",
			"ready",
			"idle",
			"error"
		]),
		repos: P(F({
			repo: j(),
			from: j(),
			dir: j()
		})),
		deps: F({
			project: j(),
			command: j(),
			exitCode: M(),
			attempt: M(),
			logTail: j()
		}).optional()
	}), cg = I("kind", [
		F({
			kind: z("schedule").describe("On a clock."),
			cron: j().min(1).describe("When, in cron notation."),
			afterSessions: M().int().positive().optional().describe("Fire only once at least this many new sessions have been run since the last wake. A due run short of that is skipped, and says how far off it is.")
		}),
		F({
			kind: z("event").describe("When something calls its webhook."),
			dailyMax: M().int().positive().optional().describe("How many webhook calls a day may wake the agent, across every caller. Absent is a modest default rather than unlimited.")
		}),
		F({
			kind: z("listener").describe("When a message arrives from somewhere outside."),
			provider: j().min(1).describe("Which service to listen to."),
			channelId: j().min(1).optional().describe("Narrow it to one channel or thread."),
			eventType: j().min(1).optional().describe("Narrow it to one kind of event."),
			mentioned: N().optional().describe("Only when the agent is actually addressed, rather than on everything said in earshot."),
			branch: j().min(1).optional().describe("Narrow it to one branch, for the sources that have branches. Absent means every branch of the repositories it matches."),
			allowedOrigins: P(j()).optional().describe("Which websites may reach the public endpoint, the chat widget's or the bug reporter's. Absent or empty admits nobody.")
		}),
		F({
			kind: z("workspace").describe("When something happens to the files or the repositories."),
			event: sg.describe("Which happening."),
			repo: j().min(1).optional().describe("Narrow it to one repository. Absent means any of them.")
		})
	]), lg = F({
		access: R(["public", "google"]).optional().describe("Who may write to it. Absent means anyone, which is the anonymous support box it looks like."),
		requireName: N().optional().describe("Ask a visitor for a name first. Cosmetic: the name is typed, so it reaches the model as something a stranger said, never as identity."),
		antiBot: R(["turnstile", "pow"]).optional().describe("How to keep bots out: a third-party check that needs the site's own keys, or a puzzle the sandbox sets and the widget solves, so a site with no such account still has something. Absent leaves the site allowlist and the rate limit as the whole boundary."),
		turnstileSiteKey: j().optional().describe("The public half of those keys, which ships to the visitor's browser."),
		turnstileSecret: j().optional().describe("The private half, which the sandbox keeps and the widget never sees."),
		googleClientId: j().optional().describe("The site's own sign-in client id. It cannot be ours: a sign-in is only issued to an approved origin, and no single client can list every customer's domain."),
		title: j().max(80).optional(),
		greeting: j().max(500).optional(),
		accent: j().regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, "accent must be a hex colour, e.g. #e47100").optional(),
		position: R([
			"top-right",
			"top-left",
			"bottom-right",
			"bottom-left"
		]).optional(),
		dailyMessageMax: M().int().positive().optional(),
		conversationMessageMax: M().int().positive().optional(),
		sessionTtlMinutes: M().int().positive().optional()
	}), F({
		automationId: j(),
		title: j(),
		greeting: j(),
		accent: j(),
		position: R([
			"top-right",
			"top-left",
			"bottom-right",
			"bottom-left"
		]),
		access: R(["public", "google"]),
		requireName: N(),
		antiBot: R([
			"turnstile",
			"pow",
			"off"
		]),
		turnstileSiteKey: j().optional(),
		googleClientId: j().optional()
	}), F({
		salt: j(),
		difficulty: M().int().positive()
	}), F({
		conversationId: j().min(1).max(200),
		content: j().min(1),
		displayName: j().max(200).optional(),
		idToken: j().optional(),
		turnstileToken: j().optional(),
		powNonce: j().optional(),
		history: P(F({
			author: j().optional(),
			content: j()
		})).max(50).optional()
	}), F({
		replies: P(F({
			seq: M(),
			at: M(),
			text: j()
		})),
		cursor: M()
	}), ug = F({
		label: j().max(60).optional().describe("What to call these people on screen."),
		ids: P(j().min(1).max(200)).max(200).optional().describe("Sender ids, as the service names them, never display names."),
		groups: P(j().min(1).max(200)).max(50).optional().describe("Group ids the service reports on a sender, a Discord role. Only for a source whose messages carry them."),
		actsAs: q.optional().describe("Which persona their wakes speak as. Absent is no persona: the full toolbox, reaching no account."),
		requireApproval: N().optional().describe("Hold their wakes for a person, even when the automation itself does not.")
	}).refine((e) => (e.ids?.length ?? 0) + (e.groups?.length ?? 0) > 0, { message: "a sender rule must name at least one id or group" }), dg = F({
		rules: P(ug).max(50).describe("Walked in order; the first rule naming the sender decides."),
		others: R([
			"allow",
			"hold",
			"ignore"
		]).describe("What a sender no rule names gets: the automation as configured, a hold for a person, or nothing at all.")
	}), fg = F({
		id: q.describe("The automation's id."),
		trigger: cg.describe("What sets it off: a schedule, an event in the workspace, a message arriving from outside, or a webhook."),
		guard: j().min(1).optional().describe("A command run before the wake that decides whether there is anything to do. Skipped by the guard is often the most useful thing an automation can report."),
		prompt: j().min(1).describe("What the woken agent is told."),
		webchat: lg.optional().describe("Settings for the public chat widget, for an automation that answers visitors."),
		issues: ng.optional().describe("Settings for the bug reporter, for an automation that takes crash reports from your own sites and apps."),
		allowedTools: P(j().min(1)).optional().describe("Narrow the woken turn to these tools. For one driven by an outside message this list is the real boundary, because prompt wording is only advice and an empty toolbox is not."),
		models: P(Td).min(1).max(10).describe("Which models this automation may run on, best first. Required, and nothing is chosen for you: work that fires while nobody is watching spends a real allowance, so it names the models it spends rather than inheriting one. Tried in order, so a spent account does not silently stop the job."),
		account: j().optional().describe("Which account pays for it."),
		actsAs: q.optional().describe("Which persona it speaks as. An unwatched turn naming none reaches no signed-in account at all."),
		senders: dg.optional().describe("Who may talk to it, and as whom: rules by sender id or group, each naming the persona those people get, plus what everyone else gets. Absent admits everyone the trigger's filters do."),
		requireApproval: N().optional().describe("Hold every fire for a person instead of running it. Only a person can release one of those."),
		holdForSeconds: M().optional().describe("Hold each fire this long before running it anyway, which is a delay rather than a decision."),
		chore: N().optional().describe("This automation is a maintenance job, which is what files it under chores rather than among ordinary automations."),
		enabled: N().describe("Whether it fires at all.")
	}), pg = F({
		id: q.describe("This waiting item's own id, which approving and rejecting take."),
		automationId: j().describe("Which automation it came from."),
		payload: j().optional().describe("What set it off, kept whole so an approved wake carries the same thing it would have had. Absent for one on a schedule, which carries nothing."),
		origin: gd.optional().describe("Where the message came from, kept alongside the payload so an approved wake appears on the board exactly as an automatic one would have."),
		title: j().optional().describe("What the conversation would be called."),
		conversationId: j().optional().describe("The thread this belongs to, when it has one, so approving continues that conversation rather than opening a new one. Without it, one visitor's chat becomes a card per approved message and an agent that meets them again every turn."),
		sessionId: j().optional().describe("The provider session that thread last ran on."),
		thread: j().optional().describe("Which inbound thread this belongs to, so the approved run continues that thread's memory rather than a fresh one."),
		actsAs: q.optional().describe("Which persona the approved run speaks as, decided when it was held."),
		createdAt: M().describe("When it started waiting, in milliseconds."),
		autoRunAt: M().optional().describe("When it goes ahead on its own, in milliseconds, for a hold that is only a delay. Absent for one that genuinely waits on a person.")
	}), mg = F({
		agents: P($p).describe("The conversations."),
		rev: M().describe("Which version of the fleet this is. The fleet is published as whole snapshots, so without a version a list read before a change but delivered after it would silently undo that change. Drop any list older than the newest you have already applied."),
		held: P(pg).default([]).describe("Automations waiting at the door for a yes, put alongside the running conversations so needs-you sits beside working rather than on a page nobody opens.")
	}), hg = F({ approvals: P(pg).describe("Everything waiting for a yes.") }), gg = F({ id: j().describe("Which waiting item.") }), _g = F({
		at: M(),
		outcome: R([
			"completed",
			"skipped",
			"error",
			"interrupted"
		]),
		detail: j().optional(),
		conversationId: j().optional()
	}), vg = fg.extend({
		runs: P(_g),
		nextRun: M().optional(),
		webhookToken: j().optional().describe("What a caller presents at /automations/{id}/fire, for an event automation. Shown to a maintainer or the owner only."),
		ingestKey: j().optional().describe("What a client with no website origin presents to a bug intake. Shown to a maintainer or the owner only.")
	}), yg = F({ automations: P(vg) }), bg = F({
		id: j().describe("The sender id the service vouches for, what a rule stores."),
		name: j().describe("What they were called on their last message, for display only."),
		groups: P(j()).optional().describe("The group ids the service reported on their last message, a Discord role list."),
		firstSeenAt: M().describe("When they first reached an automation here, in milliseconds."),
		lastSeenAt: M().describe("When they last did, in milliseconds."),
		messages: M().describe("How many of their messages reached an automation's filters, admitted or not.")
	}), xg = F({ senders: P(bg).describe("Newest first.") }), Sg = F({ provider: j().min(1).describe("Which listener source.") }), Cg = F({ id: j() }), wg = F({
		id: j(),
		enabled: N()
	}), Tg = F({
		label: j().min(1),
		placeholder: j().min(1),
		hint: j().min(1).optional()
	}), Eg = F({
		provider: j().min(1),
		label: j().min(1),
		logo: j().min(1).optional(),
		icon: j().min(1).optional(),
		events: P(F({
			value: j().min(1),
			label: j().min(1)
		})),
		channel: Tg,
		branchField: Tg.optional(),
		sender: Tg.optional(),
		senderGroup: Tg.optional(),
		mentionLabel: j().min(1).optional(),
		starterPrompt: j().min(1).optional(),
		requires: P(j().min(1)).default([]),
		enabled: N()
	}), Dg = R(["create", "configure"]), Og = F({
		id: j().min(1),
		title: j().min(1),
		logo: j().min(1).optional(),
		icon: j().min(1).optional(),
		requires: P(j().min(1)).default([]),
		trigger: cg,
		guard: j().min(1).optional(),
		holdForSeconds: M().int().positive().optional(),
		prompt: j().min(1),
		note: j().min(1).optional(),
		setup: j().min(1).optional(),
		description: j().min(1).optional(),
		offer: Dg.optional(),
		chore: N().optional()
	}), kg = F({
		sources: P(Eg),
		templates: P(Og)
	});
})), jg, Mg, Ng, Pg, Fg, Ig, Lg, Rg, zg, Bg, Vg, Hg, Ug = y((() => {
	U(), J(), jg = R(["github", "gitlab"]), Mg = R([
		"queued",
		"running",
		"success",
		"failed",
		"canceled",
		"skipped"
	]), Ng = F({
		repo: j().describe("Which workspace repository it belongs to."),
		host: jg.describe("Which forge is running it."),
		project: j().describe("The project there, as that forge names it."),
		runId: M().describe("The forge's own id for the run, which is what re-running and cancelling take."),
		title: j().optional().describe("The run's headline, usually the commit subject or the pull request's title. Absent means falling back to the branch and commit."),
		authorName: j().optional().describe("Who the forge credits for setting it off."),
		authorAvatarUrl: j().optional().describe("Their picture, hosted by the forge. Absent means drawing their initials instead."),
		trigger: j().optional().describe("What set it off, in the forge's own word rather than flattened into a shared vocabulary, because the forge's word is the precise one."),
		branch: j().describe("Which branch."),
		sha: j().describe("Which commit."),
		status: Mg.describe("How it is going. Queued means the forge has accepted it and nothing is executing it yet, which is a different thing to wait on than a run actually in progress."),
		url: j().describe("Its page on the forge."),
		createdAt: M().describe("When it started, in milliseconds."),
		durationSeconds: M().optional().describe("How long it took."),
		failedJobs: P(j()).optional().describe("What broke, by name. Fetched only for failed runs, so that a notification or a screen can say what went wrong rather than just that something did.")
	}), Pg = F({
		name: j().describe("The job's name."),
		status: Mg.describe("How it went."),
		stage: j().optional().describe("Which stage it belongs to, where the pipeline groups its jobs that way."),
		needs: P(j()).optional().describe("Which jobs in this run it declared it waits on: the real shape of the pipeline. Absent means nothing could be read, which is different from an empty list, which is the claim that it waits on nothing."),
		startedAt: M().optional().describe("When it began, in milliseconds. Absent while it is queued."),
		finishedAt: M().optional().describe("When it ended, in milliseconds."),
		durationSeconds: M().optional().describe("How long it took."),
		webUrl: j().optional().describe("Its page on the forge, which is the shortest path from this step failed to the log that says why.")
	}), Fg = F({ jobs: P(Pg).describe("The steps inside one run. Fetched separately from the run list, so that list stays cheap.") }), Ig = F({
		repo: j().describe("Which workspace repository."),
		host: jg.describe("Which forge it lives on."),
		project: j().describe("The project there."),
		url: j().describe("Its page on the forge."),
		hookWarning: j().optional().describe("Present when the sandbox could not register for instant notifications, with what happened. Without them the sandbox polls instead, so this costs a couple of minutes' delay rather than the feature."),
		hookRecipe: j().optional().describe("What to paste into the repository's webhook settings by hand, secret included. Shown to a maintainer or the owner only.")
	}), Lg = F({
		repos: P(Ig).describe("Which workspace repositories are wired to a forge, and how each one's notifications are set up."),
		runs: P(Ng).describe("Runs across all of them, newest first.")
	}), Rg = F({
		repo: j().describe("Which workspace repository. The project behind it is resolved fresh each call, so a stale screen cannot act on one the workspace no longer maps to."),
		runId: M().describe("Which run, by the forge's own id.")
	}), zg = Rg.extend({
		pick: wd.describe("Which model to open the conversation on, when somebody chose one. Leave it out for the sandbox's own choice, which is the ordinary path."),
		mode: R(["continue", "start-over"]).optional().describe("What to do about the attempt already made at this run, when there is one. `continue` carries on in that conversation; `start-over` stops it if running, files it away, and opens the next attempt on a clean worktree. Leave it out for the plain press: an attempt that ended is continued, a fresh failure gets attempt 1, and one still in play answers CONFLICT with why."),
		force: N().optional().describe("Open the conversation even when every failed job died in its runner's own setup, which is the fleet's fault and nothing an agent on the code can repair. Left out, such a run is refused with that sentence.")
	}), Bg = F({ conversationId: j().describe("The conversation that was opened, already holding the failure. Open it to watch, or attach to its turn.") }), Vg = R([
		"idle",
		"running",
		"passed",
		"failed",
		"error",
		"cancelled"
	]), Hg = F({
		status: Vg.describe("Where the run is. Failed and error are deliberately different: failed means the code is wrong, error means the command could not be run at all, and calling the second one a test failure would send an agent hunting a bug that is not there."),
		command: j().describe("What actually ran, echoed here rather than read back from the settings, so a result looked at after the setting changed still says what produced it."),
		startedAt: M().optional().describe("When it began, in milliseconds."),
		finishedAt: M().optional().describe("When it ended, in milliseconds."),
		exitCode: M().optional().describe("How the command exited."),
		timedOut: N().optional().describe("It was killed for taking too long rather than finishing."),
		session: j().optional().describe("The terminal it runs in, which is where to watch it. Absent where the sandbox has no terminals, in which case there is nothing to attach to."),
		output: j().describe("The end of what it printed, as plain text with the colour codes and redrawn progress lines resolved away. The end rather than the beginning, because a suite's verdict is at the end. Empty while it runs, and for one that was killed.")
	});
})), Wg, Gg, Kg, qg, Jg, Yg, Xg, Zg, Qg, $g, e_, t_, n_, r_, i_, a_, o_, s_, c_, l_, u_, d_, f_, p_, m_, h_, g_, __, v_, y_, b_, x_, S_, C_, w_, T_, E_, D_, O_, k_, A_, j_ = y((() => {
	U(), J(), Tm(), Ug(), ld(), Z(), Wg = R([
		"staged",
		"unstaged",
		"conflicted"
	]), Gg = F({
		side: Wg.optional().describe("Narrow to one of the three lists a repository's changes split into. Leave it out for all of them, which is the whole repository."),
		origin: j().min(1).optional().describe("Narrow to the files one conversation landed. Leave it out for everyone's, including your own edits.")
	}), Kg = 1e3, qg = P(j().min(1)).max(Kg).describe("Exactly these repository-relative paths. For anything bigger than a hand-picked selection, describe a scope instead."), Jg = F({
		paths: qg.optional(),
		scope: Gg.optional().describe("What to act on, described rather than listed, so it covers every matching file in the repository and not just the ones a list could hold.")
	}), Yg = { message: "name paths or a scope, not both" }, Xg = (e) => e.paths === void 0 || e.scope === void 0, Zg = X.extend({
		message: j().min(1).describe("The commit message."),
		stage: Jg.refine(Xg, Yg).optional().describe("What to stage before committing. Leave it out to record the index exactly as it stands; give it an empty object to stage everything first.")
	}), Qg = X.extend(Jg.shape).describe("What to throw away. Neither paths nor a scope discards every uncommitted change in the repository.").refine(Xg, Yg), $g = X.extend(Jg.shape).describe("What to move across the index. Nothing on disk changes either way.").refine(Xg, Yg), e_ = X.extend({ branch: j().min(1).optional().describe("Which branch to push. Leave it out for the checked-out one. A branch with no upstream yet gets one set on this push.") }), t_ = R([
		"hook",
		"remote",
		"transport"
	]), n_ = Hg.extend({
		repo: j().describe("The repository this run is about, the same id the routes take."),
		reason: j().optional().describe("Why not, in git's own words: the last verdict line, for a row that has room for one line. The whole tail is `output`."),
		refusedBy: t_.optional().describe("Who refused a failed push: this repository's pre-push hook (the code is wrong, a fix is worth proposing), the remote (pull first), or the transport (credentials, network: retry). Absent while it runs and for a push that went.")
	}), r_ = X.extend({ path: j().min(1).describe("The file to read, relative to the repository root.") }), i_ = X.extend({
		path: j().min(1).describe("Where to write, relative to the repository root. Missing folders are created."),
		content: j().describe("The file's whole new contents.")
	}), a_ = X.extend({
		path: j().min(1).describe("The file, relative to the repository root."),
		side: Wg.describe("Which comparison you want. A file that is staged and then edited again has genuinely different answers for each, which is why this is required rather than assumed.")
	}), o_ = F({
		branch: j().describe("The checked-out branch."),
		dirty: N().describe("Whether anything is uncommitted."),
		files: P(j()).describe("Every path with something pending, staged or not.")
	}), s_ = F({ files: P(j()).describe("Every path git tracks, relative to the repository root. Ignored and untracked files are not here.") }), c_ = F({
		path: j().describe("The path, as asked for."),
		content: j().describe("The file's contents as they stand on disk.")
	}), F({ repo: j().min(1).describe("Which repository.") }).extend(Jg.shape).refine(Xg, Yg), l_ = F({
		path: j().describe("The path, relative to the repository root. For a rename this is the new one."),
		status: R([
			"added",
			"modified",
			"deleted",
			"renamed",
			"type-changed",
			"conflicted"
		]).describe("What happened to it. Conflicted is not a kind of edit: nothing can be committed anywhere in the repository while one exists."),
		from: j().optional().describe("Where a renamed file came from."),
		additions: M().optional().describe("Lines added. Absent for a binary file, and for an untracked one, which has nothing to compare against."),
		deletions: M().optional().describe("Lines removed. Absent for the same reasons additions is."),
		code: F({
			additions: M(),
			deletions: M()
		}).optional().describe("The same +/− with every comment stripped from both sides, which is what a review shows beside a diff that opens on code alone. Absent when the file cannot be read that way (binary, too large, or a language this build ships no grammar for): git's own counts above are then the reading.")
	}), u_ = F({
		remote: j().optional().describe("The remote this branch pushes to. Absent means none is configured. In a fork with two remotes, pushing to the wrong one succeeds and leaves the count stuck, which is why this says which."),
		branch: j().optional().describe("The checked-out branch. Absent when the repository is on a bare commit, or has no commits yet."),
		upstream: j().optional().describe("The branch on the remote this one follows. Absent means the next push will publish it."),
		ahead: M().describe("Commits you have that the remote does not."),
		behind: M().describe("Commits the remote has that you do not, as of the last fetch. Fetch before trusting it.")
	}), d_ = F({
		name: j().describe("The branch name."),
		current: N().describe("Whether this is the one checked out."),
		upstream: j().optional().describe("The branch on the remote it follows, if any."),
		ahead: M().describe("Commits this branch has that its remote counterpart does not."),
		behind: M().describe("Commits its remote counterpart has that it does not."),
		gone: N().optional().describe("The branch it followed no longer exists on the remote, usually because a merged pull request deleted it. The signal that this one is safe to delete."),
		at: M().describe("When its tip was committed, in milliseconds. Lists are newest first.")
	}), f_ = F({
		name: j().describe("The full name, such as origin/main."),
		remote: j().describe("Just the remote part, so a picker can group by it without re-parsing."),
		branch: j().describe("Just the branch part."),
		at: M().describe("When its tip was committed, in milliseconds, as this repository last saw it.")
	}), p_ = F({
		branches: P(d_).describe("Branches in this repository."),
		remotes: P(f_).describe("Branches on its remotes, as last seen. Sent together with the locals so a switcher never draws a half-filled list.")
	}), m_ = X.extend({
		name: sd.describe("The new branch's name."),
		start: j().min(1).optional().describe("Where to start it: a commit or another branch. Leave it out to start from where you are."),
		checkout: N().optional().describe("Switch to it as well as creating it.")
	}), h_ = X.extend({
		name: sd.describe("The branch to delete."),
		force: N().optional().describe("Delete it even though it holds work that was never merged. The deliberate retry after the first attempt refuses.")
	}), g_ = R([
		"merge",
		"rebase",
		"cherry-pick",
		"revert"
	]), __ = F({
		repo: j().describe("The repository asked about."),
		operation: g_.optional().describe("Which operation the working tree is stuck inside. Absent means it is not stuck at all, which is almost always. While one is present git refuses nearly everything else, and abandoning it is the only way out.")
	}), v_ = F({
		repo: j(),
		branch: j().optional().describe("The checked-out branch. Absent in a repository that has no commits yet."),
		conflicted: P(l_).describe("Paths a merge or rebase could not finish. First, because nothing anywhere in this repository can be committed until they are resolved. Held apart from the two lists below, because staged or not is not a question one of these has an answer to."),
		operation: g_.optional().describe("What halted, when something did. This is the sentence that explains the conflicts above and names the way out of them."),
		staged: P(l_).describe("What a plain commit would record right now."),
		unstaged: P(l_).describe("Edits on disk that are not staged, plus untracked files. A path can be in both lists at once with different line counts, which is why they are separate."),
		truncated: F({
			staged: M().describe("Staged changes not listed above."),
			unstaged: M().describe("Unstaged changes not listed above.")
		}).optional().describe("How many changes were cut from each of the two lists above. A freshly cloned monorepo or a mass delete runs to six figures, which no screen can draw, so past a budget the lists arrive short and this says by how much on each side. Absent means they are complete."),
		remote: u_.optional().describe("Where this repository stands against its remote."),
		origins: L(j(), P(j())).optional().describe("Which conversation put each path here, newest first, keyed by path. Only work that went through a merge can appear: edits made in the shared tree, in a terminal, or by a person are simply absent rather than guessed at."),
		error: j().optional().describe("Why the repository could not be read at all, in git's own words. A repository left broken by a failed import arrives with empty lists and this set, rather than vanishing from the answer with nothing to act on.")
	}), y_ = F({
		title: j().optional().describe("The conversation's title. Absent for one that never got as far as having a title."),
		provider: ud.describe("Which model provider it ran on."),
		landedMessage: Yp.optional().describe("What the merged work did, drafted by the conversation itself. Carried here as well as on its card, because merged lines outlive the card: archiving a finished conversation does not uncommit its work.")
	}), b_ = F({
		repos: P(v_).describe("One entry per repository that has something pending, is out of step with its remote, or could not be read. A clean repository is simply absent."),
		originAgents: L(j(), y_).optional().describe("Who each conversation named above is, keyed by id, so a caller need not look them up. Absent when nothing in the review can be attributed."),
		committing: P(j()).optional().describe("Repositories with a commit running right now. The sandbox's answer rather than any one tab's, so a reload, a second window and another device all know. Absent means nothing is committing.")
	}), x_ = F({
		committed: N().describe("Whether a commit was actually recorded."),
		changes: v_.optional().describe("What this repository looks like now, read in the same breath as the commit so a caller can redraw from here instead of asking for a fresh scan. Absent means there is nothing left to show."),
		originAgents: L(j(), y_).optional().describe("Who the conversations named in those changes are. Merge it over what you already hold rather than replacing: other repositories still name their own.")
	}), S_ = F({
		dir: j().describe("Where the package lives, relative to its repository. Empty when the repository is itself one package."),
		name: j().describe("The name the package declares for itself.")
	}), C_ = F({
		repo: j().describe("Which repository."),
		modules: P(S_).describe("Its packages.")
	}), w_ = F({ repos: P(C_).describe("Every repository with the packages inside it.") }), T_ = l_.extend({ landed: N().describe("Whether your workspace already holds this content. Read from the tree at request time, not from what a land recorded: discard a landed file in the Changes panel and this goes back to false, which is what puts it back under Land now.") }), E_ = F({
		repo: j().describe("Which repository."),
		branch: j().optional().describe("The branch this conversation's work sits on."),
		changes: P(T_).describe("What it changed there."),
		modules: P(S_).describe("The packages of the tree these changes came from, so a review can group by package. Carried with the changes rather than looked up separately, because a package the conversation has just created exists only in its own copy and the shared tree has never heard of it.")
	}), D_ = F({
		repos: P(E_).describe("One entry per repository the conversation touched."),
		absorbed: M().describe("How many of this conversation's files your own history already carries, and which are therefore not listed as differences any more."),
		conflicts: P(bm).optional().describe("Why the last merge refused, when one did. Carried here as well as in the merge's own answer, because a conflict is found the moment a turn ends and dealt with hours later on this surface, which would otherwise open with nothing to explain what it promised to resolve.")
	}), O_ = F({
		sha: j().describe("The commit."),
		short: j().describe("Its abbreviated hash, which is what a reader recognises it by."),
		subject: j().describe("Its first line."),
		author: j().describe("Who committed it."),
		at: M().describe("When it was authored, in milliseconds."),
		changes: P(l_).describe("The conversation's files that this commit is the newest carrier of, as the conversation changed them. Every file appears under exactly one commit, so these counts add up to the work rather than over-counting a file that history touched twice.")
	}), k_ = F({
		repo: j().describe("Which repository."),
		commits: P(O_).describe("The commits carrying this conversation's work there, newest first."),
		modules: P(S_).describe("The packages of the tree these files came from, so a review can group them by package.")
	}), A_ = F({
		repos: P(k_).describe("One entry per repository holding committed work of this conversation."),
		unaccounted: M().describe("How many of the conversation's absorbed files none of these commits carries. Above zero means its content reached your main line by some other road, so the commits listed are not the whole story.")
	});
})), M_, N_ = y((() => {
	K(), Sh(), Tm(), Ag(), j_(), Bh(), Z(), M_ = {
		list: G.route({
			method: "GET",
			path: "/agents",
			summary: "Every live conversation",
			description: "The fleet as the board draws it: each conversation with its title, what it is doing, when it last moved and whether anybody has read it since. Archived conversations are not in here."
		}).output(mg),
		archived: G.route({
			method: "GET",
			path: "/agents/archived",
			summary: "Conversations put away",
			description: "The same shape as the live fleet, for the conversations somebody has decided are finished. Their work is kept, and any one of them can be brought back."
		}).output(mg),
		search: G.route({
			method: "GET",
			path: "/agents/search",
			summary: "Find a conversation",
			description: "Searches the live fleet and the archive together. Both halves on purpose: the board hides finished work by design, and a filter that says it found nothing while the answer sits one click away is simply wrong."
		}).input(sm).output(dm),
		get: G.route({
			method: "GET",
			path: "/agents/{id}",
			summary: "One conversation's card",
			description: "Everything the board shows for a single conversation: its title, state, working branch, unread marker and timestamps."
		}).input(em).output($p),
		transcript: G.route({
			method: "GET",
			path: "/agents/{id}/transcript",
			summary: "One page of a conversation",
			description: "The most recent turns of one conversation, in order, including the tool calls and their results: what the chat replays and the next turn is seeded from. A page, not the whole record — pass the answer's `from` back as `before` to walk further back, until `more` reads false."
		}).input(tm).output(xh),
		place: G.route({
			method: "POST",
			path: "/agents/{id}/place",
			summary: "Put words in the agent's mouth",
			description: "Writes a line into the record as though the agent had said it, with no turn behind it and no reply. Human readers see it marked as placed. The next real turn starts fresh from the record, where the line reads as the agent's own. Refused while a turn is running."
		}).input(pm).output(Y),
		rename: G.route({
			method: "POST",
			path: "/agents/{id}/rename",
			summary: "Retitle a conversation",
			description: "Sets the title a person chose, replacing the one that was generated. Allowed while the conversation is working, and it does not count as activity."
		}).input(fm).output($p),
		autoLand: G.route({
			method: "POST",
			path: "/agents/{id}/auto-land",
			summary: "Whether this conversation merges its work automatically",
			description: "Overrides the sandbox-wide setting for one conversation; clear it to go back to following the default. Deliberately allowed mid-turn, because the setting is read when the turn finishes, so flipping it while the agent works means exactly hold this piece of work for review."
		}).input(mm).output($p),
		resumeAfterOutage: G.route({
			method: "POST",
			path: "/agents/{id}/resume-after-outage",
			summary: "Whether this conversation retries after a provider outage",
			description: "Overrides the sandbox-wide setting for one conversation; clear it to follow the default again. This is what the offer shown when a turn dies writes, because the press happens inside one conversation and honestly means finish this piece of work."
		}).input(hm).output($p),
		resumeAfterLimit: G.route({
			method: "POST",
			path: "/agents/{id}/resume-after-limit",
			summary: "Whether this conversation sends itself again when its allowance comes back",
			description: "Overrides the sandbox-wide setting for one conversation; clear it to follow the default again. Off unless asked for, because the allowance is the user's own budget and a turn that spends it the moment it reopens is not a decision to make on their behalf."
		}).input(gm).output($p),
		moveAfterLimit: G.route({
			method: "POST",
			path: "/agents/{id}/move-after-limit",
			summary: "Whether this conversation moves to another account when its allowance is spent",
			description: "Overrides the sandbox-wide setting for one conversation; clear it to follow the default again. A move spends a second account of the same provider on this conversation's behalf, so it is off unless asked for."
		}).input(_m).output($p),
		seen: G.route({
			method: "POST",
			path: "/agents/{id}/seen",
			summary: "Mark a conversation read",
			description: "Stamps the read marker behind the unread badge on one card. Allowed while the conversation is working, and reading never counts as activity."
		}).input(em).output($p),
		stopWatching: G.route({
			method: "POST",
			path: "/agents/{id}/stop-watching",
			summary: "Stop every condition watch a conversation is parked on",
			description: "Disarms all of this conversation's outside-condition watches, so none of them will wake it. All of them rather than one, because that is what the press means when it is made about a card. Nothing else about the conversation changes."
		}).input(em).output($p),
		seenAll: G.route({
			method: "POST",
			path: "/agents/seen",
			summary: "Mark every conversation read",
			description: "Clears the unread badge across the whole fleet at once, and hands the refreshed list back."
		}).output(mg),
		diff: G.route({
			method: "GET",
			path: "/agents/{id}/diff",
			summary: "Everything a conversation has changed",
			description: "One flat set of changed files per repo, measured against where each repo stood when the conversation started, with every file flagged as already merged or not. Not the staged-and-unstaged shape a working copy has, because nobody ever checks this branch out to stage into it."
		}).input(em).output(D_),
		history: G.route({
			method: "GET",
			path: "/agents/{id}/history",
			summary: "Where a conversation's committed work lives",
			description: "The commits in your own history that carry this conversation's work, with the files each one brought. Use it when the change list is empty or short because you already committed what it wrote: those files are not differences against the main line any more, so they are not in the review, and this is where they went."
		}).input(em).output(A_),
		fileDiff: G.route({
			method: "GET",
			path: "/agents/{id}/{repo}/file-diff",
			summary: "One file's before and after in a conversation's work",
			description: "Both sides of a single file: what it held when the conversation started and what it holds on its branch now."
		}).input(vm).output(zh),
		land: G.route({
			method: "POST",
			path: "/agents/{id}/land",
			summary: "Merge a conversation's work into the workspace",
			description: "Brings the conversation's branches into the main tree, one repo at a time. A conflict is reported rather than raised and nothing is lost when it fails. Refused while a turn is running, and refused for a conversation that works directly in the shared tree, which has nothing to merge."
		}).input(wm).output(xm),
		requestLand: G.route({
			method: "POST",
			path: "/agents/{id}/request-land",
			summary: "Ask a maintainer to merge this work",
			description: "For a collaborator who is not allowed to merge: marks the conversation as waiting for review, with who asked. The request shows on every maintainer's board and clears when somebody merges or discards it."
		}).input(em).output($p),
		discard: G.route({
			method: "POST",
			path: "/agents/{id}/discard",
			summary: "Throw a conversation's work away",
			description: "Deletes the conversation's working copies, its branches and its entry. Nothing is kept. Refused while a turn is running, and refused for a conversation working in the shared tree."
		}).input(em).output(Y),
		archive: G.route({
			method: "POST",
			path: "/agents/archive",
			summary: "Put conversations away",
			description: "The gentle counterpart to discarding. Commits whatever the conversation still has in progress onto its own branch, releases its working copy, and keeps the entry and the record. It leaves the live fleet and joins the archive. Refused for a conversation that is running."
		}).input(nm).output(am),
		unarchive: G.route({
			method: "POST",
			path: "/agents/unarchive",
			summary: "Bring conversations back",
			description: "Returns archived conversations to the live fleet. The next turn picks up a fresh working copy from the branch that was kept."
		}).input(rm).output(im),
		purge: G.route({
			method: "POST",
			path: "/agents/purge",
			summary: "Empty the archive for good",
			description: "Discards every conversation already in the archive: working copies, branches and entries. The whole archive rather than a chosen few, because the archive is the pile somebody has already decided is over. A teardown that fails on one conversation leaves that one behind instead of taking the rest down with it."
		}).output(om)
	};
})), P_, F_, I_, L_, R_, z_, B_, V_, H_, U_, W_ = y((() => {
	U(), ld(), R(["post", "action"]), P_ = R([
		"proposed",
		"approved",
		"running",
		"done",
		"failed"
	]), F_ = {
		actsAs: q.optional().describe("Whose name it acts under. Needed for anything that requires being logged in, because an unwatched turn naming nobody is allowed no account at all. Never guessed: one site can be connected five times over, and picking for you means picking wrong in public with no undo."),
		scheduledAt: M().optional().describe("When it should happen, in milliseconds. An agent may propose without one and you set it when approving; an approved item with no time goes after a short countdown you can still stop."),
		status: P_.default("proposed").describe("Where it is: proposed by the agent, approved by you, being carried out, done, or failed. Rejecting is deleting it; retrying is approving a failed one again."),
		createdAt: M().optional().describe("When it was written, in milliseconds."),
		startedAt: M().optional().describe("When it started being carried out, in milliseconds. Needed to tell a run that is under way from one whose turn died mid-flight, which the scheduled time cannot."),
		finishedAt: M().optional().describe("When it was done, in milliseconds."),
		result: j().optional().describe("What came back, when something did: the post's own address, a confirmation number. The one thing a finished item can offer that reading it cannot."),
		error: j().optional().describe("Why it failed, written as a sentence for a person to read rather than as a code.")
	}, I_ = F({
		kind: z("post").describe("A post to publish somewhere."),
		platform: j().min(1).describe("Where it should go. A plain name, so a new site needs no change here; an unknown one simply fails when it tries to post."),
		content: j().min(1).describe("The post itself."),
		title: j().optional().describe("A title, where the site wants one."),
		target: j().optional().describe("Where on the site: a community, a channel. Or the address of the thing this replies to, in which case it is a reply, and on some sites the difference between a thread's address and one comment's is the difference between talking to the room and answering the person."),
		media: P(j()).optional().describe("Anything to attach, as workspace paths."),
		...F_
	}), L_ = F({
		kind: z("action").describe("Something the agent will do once you say so."),
		summary: j().min(1).max(200).describe("What will happen, in one line: the row's headline and the confirm dialog's item."),
		details: j().optional().describe("The specifics, as Markdown: everything you would want to see before saying yes."),
		instructions: j().min(1).describe("What to do once approved, written for the fresh turn that will do it: names, ids and steps, since it has none of this conversation."),
		...F_
	}), I("kind", [I_, L_]), R_ = { id: q.describe("The approval's id.") }, z_ = I_.extend(R_), B_ = L_.extend(R_), V_ = I("kind", [z_, B_]), H_ = F({
		approvals: P(V_).describe("The queue."),
		invalid: P(j()).describe("Files that could not be read at all, or name a kind this daemon does not know. Listed rather than skipped, because an agent writes these files directly and a malformed one would otherwise never run and never say why.")
	}), U_ = F({ id: q.describe("Which approval.") });
})), G_, K_ = y((() => {
	K(), W_(), Z(), G_ = {
		list: G.route({
			method: "GET",
			path: "/approvals",
			summary: "Things waiting for your yes",
			description: "Everything an agent has prepared and would like to do: posts to publish, actions to carry out. Nothing here has happened yet."
		}).output(H_),
		upsert: G.route({
			method: "POST",
			path: "/approvals",
			summary: "Approve, edit or retry one",
			description: "All three are the same act with a different field changed, so they share one call. Send the item back as you want it."
		}).input(V_).output(Y),
		remove: G.route({
			method: "DELETE",
			path: "/approvals/{id}",
			summary: "Reject one",
			description: "Throws it away undone."
		}).input(U_).output(Y)
	};
})), q_, J_ = y((() => {
	K(), Ag(), Z(), q_ = {
		list: G.route({
			method: "GET",
			path: "/automations",
			summary: "Things that wake an agent on their own",
			description: "Every automation with its recent runs and when it fires next."
		}).output(yg),
		catalog: G.route({
			method: "GET",
			path: "/automations/catalog",
			summary: "What can trigger an automation here",
			description: "Every trigger this sandbox understands and every template worth starting from, the daemon's own merged with each installed extension's. Writing an automation is checked against this same list, so a screen and the daemon can never disagree about what is allowed."
		}).output(kg),
		upsert: G.route({
			method: "POST",
			path: "/automations",
			summary: "Create or edit an automation",
			description: "Writes an automation by id. Nothing needs provisioning: the scheduler picks it up on its next sweep."
		}).input(fg).output(Y),
		setEnabled: G.route({
			method: "POST",
			path: "/automations/{id}/enabled",
			summary: "Turn an automation on or off",
			description: "Flips only the switch, so a row in a list can be toggled without rebuilding the whole record."
		}).input(wg).output(Y),
		remove: G.route({
			method: "DELETE",
			path: "/automations/{id}",
			summary: "Delete an automation",
			description: "Removes it, so nothing fires from it again."
		}).input(Cg).output(Y),
		rotateToken: G.route({
			method: "POST",
			path: "/automations/{id}/rotate-token",
			summary: "Rotate an automation's webhook token or intake key",
			description: "Mints a new credential for the door this automation opens and retires the old one at once. Every caller has to be handed the new URL; that is the point. Refused for an automation with no door."
		}).input(Cg).output(df),
		run: G.route({
			method: "POST",
			path: "/automations/{id}/run",
			summary: "Fire an automation by hand",
			description: "The answer to writing something that runs at three in the morning and having no way to try it. It takes exactly the path the real trigger takes, including the check that decides whether there was anything to do, since skipped by the guard is the most useful thing this can tell you. A switched-off automation fires too, because trying it before switching it on is the main reason to press this. Not available for the trigger that listens for incoming messages, where a hand-fire would produce an agent asked to handle events and handed none; send the bot a message instead. Answers straight away and runs detached."
		}).input(Cg).output(Y),
		senders: G.route({
			method: "GET",
			path: "/automations/senders/{provider}",
			summary: "Who has written to a listener source",
			description: "Everyone whose message reached one of this source's automations, newest first, admitted or not. What the sender rules picker offers by name while storing the id the service vouches for."
		}).input(Sg).output(xg),
		pendingList: G.route({
			method: "GET",
			path: "/automations/pending",
			summary: "Automations waiting for a yes",
			description: "The queue an automation set to ask first lands in each time it would have fired."
		}).output(hg),
		approve: G.route({
			method: "POST",
			path: "/automations/pending/{id}/approve",
			summary: "Let a held automation run",
			description: "Releases one waiting automation and runs the wake it was holding. Answers straight away and runs detached."
		}).input(gg).output(Y),
		reject: G.route({
			method: "POST",
			path: "/automations/pending/{id}/reject",
			summary: "Drop a held automation",
			description: "Throws one waiting fire away. The automation stays on, and the next trigger queues as usual."
		}).input(gg).output(Y)
	};
})), Y_, X_, Z_, Q_, $_, ev, tv, nv, rv, iv, av, ov, sv, cv, lv, uv, dv, fv, pv, mv, hv, gv, _v, vv, yv, bv, xv = y((() => {
	U(), J(), Y_ = F({ agent: hd.optional().describe("Read a conversation's own private copy of the workspace rather than the shared tree. Leave it out for the shared tree. A conversation that is not working privately resolves back to the shared tree rather than failing, so a link need not know which mode it runs in.") }), X_ = F({
		to: j().describe("What the link says, verbatim, rather than where it ends up. That is what the person who made it wrote, and what they would edit."),
		state: R(["broken", "outside"]).optional().describe("Absent for an ordinary link. Broken means there is nothing at the other end, and it is listed anyway because a dangling link is worth seeing. Outside means it leads out of the workspace, so it is shown and refused.")
	}), Z_ = F({
		name: j().describe("Just this entry's own name."),
		path: j().describe("Its full path from the workspace root, which feeds straight back into the file routes."),
		type: R(["file", "dir"]).describe("What it is. For a link, what it points at, so a link to a folder opens like a folder."),
		size: M().optional().describe("Size in bytes, for a file."),
		ignored: N().optional().describe("Tooling ignores it: installed packages, git internals, anything the ignore rules exclude. Usually drawn greyed out."),
		link: X_.optional().describe("Present when this entry is a link."),
		get children() {
			return P(Z_).optional().describe("What is inside a folder. Absent means it was not opened, either because it is ignored or because the walk ran out of budget above it, so ask for it separately. An empty list means it really is empty.");
		}
	}), Q_ = F({
		root: j().describe("The path everything below is relative to."),
		tree: P(Z_).describe("The workspace, one entry per file and folder."),
		hidden: M().describe("How many entries at the top level were cut for size. Zero means the listing is complete."),
		barren: P(j()).describe("Folders whose whole contents are empty folders, and nothing else. Complete for the workspace, however much of the tree above was listed, and ordered like the tree, so a parent comes before the branch below it.")
	}), $_ = Y_.extend({
		path: j().min(1).describe("The folder to open, as a workspace path."),
		depth: H().int().min(1).max(5).optional().describe("How many levels to include. Omitted means direct children only; at most five levels can be read in one request.")
	}), ev = F({
		entries: P(Z_).describe("What is inside it, as a flat list. With the default depth these are direct children; a deeper request also includes descendants, whose full paths say where they belong. Folders carry no nested contents of their own."),
		hidden: M().describe("How many entries were cut for size. Zero means the listing is complete.")
	}), tv = F({ path: j().min(1).describe("The file or folder, as a workspace path.") }), nv = Y_.extend({ path: j().min(1).describe("The media file the ticket should cover.") }), rv = F({
		ticket: j().describe("Hand this to the streaming route in the query string. It buys exactly the one file it was minted for."),
		expiresAt: M().describe("When it stops working, in milliseconds, so a player can tell a dead ticket from a dead file.")
	}), iv = Y_.extend({
		path: j().min(1).describe("The file to read, as a workspace path."),
		offset: H().int().optional().describe("Which byte to start at. A negative number reads that many bytes from the end, which is how you follow a growing log without knowing its size first."),
		limit: H().int().min(1).optional().describe("How many bytes to read. Capped by the sandbox, so leaving it out or asking for too much gives you the cap rather than the whole file.")
	}), av = F({
		present: z(!0).describe("There is something at that path."),
		path: j().describe("The path, as asked for."),
		content: j().describe("The bytes of the window you asked for, as text."),
		size: M().describe("How large the whole file is. Compare it with the window below to know whether there is more."),
		offset: M().describe("Which byte the window starts at."),
		bytes: M().describe("How many bytes the window holds."),
		shared: N().describe("Which tree answered. True when no conversation was named, and also when one was but its own copy has no such file, which is the case a reader has to be told about rather than left to assume.")
	}), ov = F({
		present: z(!1).describe("Nothing there. An answer, not a failure: reading a file that may not exist yet is the ordinary case for half the reads in this product."),
		path: j().describe("The path, as asked for.")
	}), sv = I("present", [av, ov]), cv = F({ path: j().min(1).describe("The file you want the text of, as a workspace path. The real file, not its shadow: where the text is kept is this route's business.") }), lv = F({
		enabled: N().describe("Whether the background pass is on (the `sidecars` setting). Off means a shadow exists only where someone asked for one."),
		queued: M().describe("Files waiting for a shadow, not counting the batch being rendered right now."),
		deriving: P(j()).describe("The files being rendered at this moment, as workspace paths. One batch at a time, because derivation shares the box with the agent it serves."),
		sweeping: N().describe("Whether a whole-tree pass is running, which is what a freshly enabled setting or an unlistably large batch triggers."),
		broken: N().describe("Whether the `fileq` binary is missing, in which case nothing renders in the background until this sandbox restarts."),
		shadows: M().optional().describe("How many shadows the last whole-tree pass counted. Absent until one has run in this daemon's lifetime."),
		sweptAt: j().optional().describe("When that pass finished, as an ISO timestamp.")
	}), uv = R([
		"off",
		"queued",
		"deriving",
		"idle",
		"broken",
		"undeliverable"
	]), dv = {
		state: uv.describe("Where this file stands with the background pass: switched off, waiting its turn, being read right now, settled, or unreachable because the renderer is missing. `undeliverable` is a format nothing here reads."),
		queue: lv.describe("How the background pass as a whole is doing, so a wait can be reported as a queue rather than as nothing happening.")
	}, fv = F({
		...dv,
		present: z(!0).describe("There is derived text for that file."),
		path: j().describe("The file it was derived from, as asked for."),
		content: j().describe("The text itself, as markdown."),
		deriver: j().describe("Which reader wrote it, and at which version, such as `pdf+ocr v1`. A file re-derives when this changes."),
		derivedAt: j().optional().describe("When it was written, as an ISO timestamp. Absent only for a shadow whose front matter was edited by hand."),
		title: j().optional().describe("The title the format carried, where it carried one."),
		notes: P(j()).describe("Every cap and degradation the derivation hit: a sheet cut to 200 rows, a book cut at 2 MB, a scan recognised rather than read. Show these with the text, since text that was cut reading as complete is the one failure this whole feature cannot afford."),
		tokens: M().describe("Roughly what an agent spends reading it, by the same four-chars-a-token estimate every budget here uses."),
		truncated: N().describe("Whether this is only the start of the shadow, cut to keep the response sendable. The file on disk holds the rest."),
		stale: N().describe("Whether the file has changed since this text was derived, compared by content rather than by clock. True means you are reading a rendering of an older version of the file, and deriving it again catches it up.")
	}), pv = F({
		...dv,
		present: z(!1).describe("There is no derived text for that file. Read `state` before saying so to anyone: absent and queued are different answers."),
		path: j().describe("The file, as asked for."),
		derivable: N().describe("Whether this format can be turned into text at all. True means asking for it to be derived is worth offering; false means nothing here reads this format."),
		reason: j().optional().describe("Why there is none, when deriving was just attempted and produced nothing: the file is too large, corrupt, or of a format no reader claims.")
	}), mv = I("present", [fv, pv]), hv = Y_.extend({ path: j().min(1).max(512).describe("The reference as somebody wrote it. Often only the tail of the real path, which is why this is matched against the tree rather than read as-is.") }), gv = F({ path: j().optional().describe("The real path it means. Absent when nothing in the workspace ends that way.") }), _v = F({ path: j().min(1).describe("The folder to create. Missing folders above it are created too.") }), vv = F({
		from: j().min(1).describe("What to move or copy, as a workspace path."),
		to: j().min(1).describe("Where it should end up. Changing only the last part is how you rename something.")
	}), yv = R([
		"repositories",
		"documents",
		"media",
		"archives",
		"other"
	]), bv = F({ classifications: P(F({
		path: j().describe("What was looked at."),
		bucket: yv.describe("Which bucket it was sorted into."),
		reason: j().describe("The signal that decided it, so the proposal can be argued with rather than trusted.")
	})).describe("One entry per repository folder and loose file at the top of the workspace. A read-only proposal: nothing moves until you apply it.") });
})), Sv, Cv, wv, Tv, Ev, Dv, Ov, kv, Av, jv, Mv, Nv, Pv, Fv, Iv, Lv, Rv, zv = y((() => {
	U(), Tm(), Hd(), Z(), xv(), Sv = dc({ kind: j() }), Cv = F({
		kind: z("heartbeat"),
		rev: M()
	}), wv = F({
		key: j(),
		label: j(),
		state: R([
			"pending",
			"running",
			"done",
			"failed"
		]),
		ms: M().optional()
	}), Tv = F({
		ready: N(),
		startedAt: M(),
		steps: P(wv)
	}), Ev = F({
		kind: z("boot"),
		...Tv.shape
	}), Dv = F({
		kind: z("hello"),
		workspaceId: j(),
		routes: P(j()).optional(),
		shapes: L(j(), j()).optional(),
		build: j().optional(),
		boot: Tv.optional()
	}), Ov = F({
		kind: z("reposChanged"),
		repos: P(j())
	}), kv = F({
		kind: z("workspaceChanged"),
		paths: P(j())
	}), Av = F({
		kind: z("derivedChanged"),
		paths: P(j()),
		queue: lv
	}), jv = F({
		kind: z("refsChanged"),
		repos: P(j())
	}), Mv = F({
		kind: z("runtimeChanged"),
		domains: P(j())
	}), Nv = F({
		clientId: j(),
		email: j(),
		name: j().optional(),
		picture: j().optional(),
		role: uf,
		idle: N(),
		view: j().optional(),
		sessionId: j().optional(),
		path: j().optional()
	}), Pv = F({
		kind: z("presence"),
		users: P(Nv)
	}), Fv = F({
		kind: z("agents"),
		agents: P($p),
		rev: M()
	}), Iv = F({
		kind: z("accountUsage"),
		provider: j(),
		account: j(),
		usage: Ad.optional()
	}), Lv = F({
		kind: z("providerRefusal"),
		provider: j(),
		refusal: Nd.optional()
	}), Rv = I("kind", [
		Dv,
		Cv,
		Ev,
		kv,
		Av,
		Ov,
		jv,
		Mv,
		Pv,
		Fv,
		Iv,
		Lv
	]);
})), Bv, Vv, Hv, Uv, Wv, Gv, Kv, qv, Jv, Yv, Xv, Zv, Qv, $v, ey = y((() => {
	U(), ld(), Bv = R([
		"tor",
		"vpngate",
		"wireguard"
	]), Vv = j().regex(/^[A-Za-z]{2}$/, "A country is its two-letter code, like DE, US or JP.").transform((e) => e.toUpperCase()), Hv = F({
		provider: z("tor"),
		country: Vv.optional(),
		autoStart: cd
	}), Uv = F({
		provider: z("vpngate"),
		country: Vv.optional(),
		autoStart: cd
	}), Wv = F({
		provider: z("wireguard"),
		config: j().min(1),
		country: Vv.optional(),
		autoStart: cd
	}), Gv = I("provider", [
		Hv,
		Uv,
		Wv
	]), Kv = R([
		"up",
		"starting",
		"down",
		"unavailable",
		"failed"
	]), qv = F({
		ip: j().describe("The address the world sees, looked up through the exit's own proxy rather than assumed."),
		country: j().optional().describe("Which country that address is in. Absent when the lookup gave an address and no country, in which case a switch is judged on the address having changed instead."),
		countryName: j().optional().describe("That country's name, spelled out.")
	}), Jv = F({
		country: j().describe("The country's code."),
		countryName: j().describe("Its name, spelled out."),
		servers: M().describe("How many servers this provider has there."),
		share: M().optional().describe("How much of the provider's actual capacity is there, from zero to one. This is what a list should be sorted by: a third of the countries on offer are one overloaded machine behind a flag, and a count of servers would rank them first.")
	}), Yv = F({
		countries: P(Jv).describe("Where this exit can put you, best-supplied first."),
		live: N().describe("Whether the provider answered, or this came from a built-in list. Said out loud rather than presenting an old list as current.")
	}), Xv = F({
		id: j().describe("Which exit."),
		provider: Bv.describe("What it runs on."),
		state: Kv.describe("Whether it is carrying traffic, coming up, resting, failed, or not installable yet because its client needs a rebuild to arrive."),
		proxy: j().describe("Where to point traffic that should go through it. Fixed per exit and unchanged by a country switch, which is what lets a long job move country halfway through without reconfiguring anything."),
		country: j().optional().describe("Where it was asked to come out. Absent means the provider chose."),
		observedCountry: j().optional().describe("Where it actually comes out, as last checked. Kept separate from what was asked for, because those two disagreeing is the most useful fault signal this whole feature has."),
		ip: j().optional().describe("The address behind that observation."),
		checkedAt: M().optional().describe("When that was checked, in milliseconds, so an old reading can be shown as old."),
		interface: j().optional().describe("The network interface, for the kinds that have one."),
		since: M().optional().describe("When it came up, in milliseconds."),
		autoStart: N().describe("Whether it starts itself when the sandbox does."),
		detail: j().optional().describe("Why it failed, or a note about a healthy one.")
	}), Zv = F({ links: P(Xv).describe("Every configured exit, with where it was asked to come out and where it actually does.") }), Qv = F({ id: j().describe("Which exit.") }), $v = F({
		id: j().describe("Which exit."),
		country: Vv.optional().describe("Where to come out. Leaving it out means letting the provider choose, so clearing a country is something you can actually say rather than only setting one.")
	});
})), ty, ny, ry, iy, ay, oy, sy, cy, ly, uy, dy, fy, py = y((() => {
	U(), ty = R([
		"host",
		"cloudflare",
		"github",
		"gitlab",
		"stripe"
	]), ny = R([
		"signoz",
		"outline",
		"paperless",
		"openproject",
		"invoiceninja",
		"infisical"
	]), ry = L(j(), fc([j(), M()])), iy = /^[a-zA-Z_][a-zA-Z0-9_]*$/, ay = j().min(1).max(60).regex(iy), oy = F({
		kind: z("backend").describe("Something you already have: a machine, an account with a hosting provider."),
		provider: ty.describe("Which provider it is with."),
		name: j().describe("What to call it, which is also how everything else refers to it."),
		values: ry.describe("Its settings. Anything secret is stored separately and referred to here, never written in.")
	}), sy = F({
		kind: z("service").describe("Something you want provisioned."),
		service: ny.describe("Which service."),
		name: j().describe("What to call it."),
		values: ry.describe("Its settings."),
		on: j().describe("Which of your machines to put it on."),
		expose: j().describe("How it should be reachable.")
	}), cy = F({
		kind: z("app").describe("An app of your own, built from source and deployed."),
		name: j().describe("What to call it."),
		values: ry.describe("Its settings, including the address it should answer on."),
		on: j().describe("Which of your machines to put it on."),
		expose: j().describe("How it should be reachable.")
	}), ly = I("kind", [
		oy,
		sy,
		cy
	]), uy = I("kind", [
		oy.extend({ name: ay }),
		sy.extend({ name: ay }),
		cy.extend({ name: ay })
	]), dy = F({ name: j().describe("Which entry, by name.") }), fy = F({ entries: P(ly).describe("Everything declared: what you have, and what you want provisioned.") }), F({
		name: ay,
		user: j().min(1),
		address: j().min(1),
		port: H().default(22),
		via: R(["direct", "cloudflared"]).default("cloudflared"),
		sshKey: j().min(1),
		cfToken: j().optional(),
		cfZone: j().optional()
	});
})), my, hy, gy, _y, vy, yy, by, xy, Sy, Cy, wy, Ty, Ey, Dy, Oy, ky, Ay = y((() => {
	U(), my = R([
		"wireguard",
		"fortinet",
		"ipsec"
	]), hy = R(["on", "off"]).default("on"), gy = (e) => /^Enc[X]?\s+[0-9A-Fa-f]{8,}$/.test(e.trim()), _y = (e, t) => e.refine((e) => !gy(e), { message: `That looks like a value copied straight out of a FortiClient config, FortiClient encrypts it with a key tied to the machine that exported it, so it can't be used here. Enter the actual ${t} (ask whoever administers the gateway).` }), vy = F({
		provider: z("wireguard"),
		config: j().min(1),
		autoConnect: hy
	}), yy = F({
		provider: z("fortinet"),
		server: j().min(1),
		port: H().int().min(1).max(65535).default(443),
		username: j().min(1),
		password: _y(j().min(1), "password"),
		trustedCert: j().min(1).optional(),
		realm: j().min(1).optional(),
		autoConnect: hy
	}), by = F({
		provider: z("ipsec"),
		server: j().min(1),
		presharedKey: _y(j().min(1), "pre-shared key"),
		localId: j().min(1).optional(),
		remoteId: j().min(1).optional(),
		username: j().min(1).optional(),
		password: _y(j().min(1), "XAuth password").optional(),
		ikeVersion: R(["1", "2"]).default("1"),
		pfs: R(["on", "off"]).default("on"),
		dhGroup: R([
			"2",
			"5",
			"14",
			"15",
			"16",
			"19",
			"20"
		]).default("14"),
		aggressive: R(["on", "off"]).default("on"),
		routedNetworks: j().default("0.0.0.0/0").refine((e) => e.split(",").map((e) => e.trim()).every((e) => ac().safeParse(e).success || oc().safeParse(e).success), { message: "Routed networks is a comma-separated list of CIDRs, like 10.0.0.0/8,192.168.0.0/16. A single host needs its prefix too (192.168.0.168/32). Leave it at 0.0.0.0/0 to send everything through the gateway." }),
		autoConnect: hy
	}), xy = I("provider", [
		vy,
		yy,
		by
	]), Sy = R([
		"connected",
		"connecting",
		"disconnected",
		"unavailable",
		"failed"
	]), Cy = F({
		id: j().describe("Which tunnel."),
		provider: my.describe("What kind of tunnel it is."),
		state: Sy.describe("Whether it is up, dialling, resting, failed, or not installable yet because its client needs a rebuild to arrive."),
		gateway: j().optional().describe("What it dials. For display only, and never a credential."),
		interface: j().optional().describe("The network interface carrying it, once one exists."),
		address: j().optional().describe("The address the far end gave this sandbox, which is the single most useful answer to whether you are on the VPN."),
		routes: P(j()).default([]).describe("What goes through it. Everything, when the range covers the whole internet. Empty until it is up."),
		dns: P(j()).default([]).describe("Name servers it pushed, when it pushed any."),
		since: M().optional().describe("When it came up, in milliseconds. Absent unless it is."),
		autoConnect: N().describe("Whether it dials itself when the sandbox starts."),
		detail: j().optional().describe("Why it failed, or a note about a healthy one. Never a credential.")
	}), wy = F({ links: P(Cy).describe("Every configured tunnel with its live state, read back from the operating system each time rather than remembered.") }), Ty = F({
		id: j().describe("Which tunnel to dial."),
		otp: j().min(1).optional().describe("A one-time code, where the gateway wants one. Supplied per dial and never stored; without it such a gateway refuses and says so.")
	}), Ey = F({ id: j().describe("Which tunnel.") }), Dy = F({ xml: j().min(1).describe("The exported configuration file, whole. Nothing is stored: it is read and thrown away.") }), Oy = F({
		id: j().describe("The id it would be added under."),
		label: j().describe("Its name as the file has it, so somebody recognises the connection they are picking."),
		provider: my.describe("What kind of tunnel it is."),
		server: j().describe("Where it dials."),
		port: M().describe("On which port."),
		username: j().optional().describe("The username, but only when the file stored it in the clear. An encrypted one is dropped rather than guessed at."),
		description: j().optional().describe("Whatever the file said about it."),
		localId: j().optional().describe("An identity some tunnel types need, when the file stored it readably."),
		aggressive: N().optional().describe("Which negotiation mode it used."),
		pfs: N().optional().describe("Whether it asked for forward secrecy."),
		dhGroup: j().optional().describe("Which key-exchange group it used. Together with the setting above, this is what decides whether the connection can complete at all."),
		needs: P(j()).describe("What you still have to type in before it can dial. Always at least the password, because the export wraps credentials in encryption that cannot be undone here.")
	}), ky = F({ connections: P(Oy).describe("The connections found in the file, ready to be added one at a time.") });
})), jy, My, Ny, Py, Fy, Iy, Ly, Ry, zy, By, Vy, Hy, Uy, Wy, Gy, Ky, qy, Jy, Yy, Xy, Zy, Qy, $y, eb, tb, nb, rb, ib, ab, ob, sb, cb, lb, ub, db, fb, pb, mb, hb, gb, _b, vb, yb = y((() => {
	U(), ey(), ld(), py(), Ay(), jy = R([
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
	]), My = R([
		"active",
		"pending",
		"error",
		"inactive"
	]), Ny = F({
		url: ic().describe("Where the tool server answers."),
		token: j().optional().describe("The credential it needs, if any. Stored, never echoed back.")
	}), Py = F({
		service: ny.describe("Which service to provision."),
		domain: j().min(1).describe("The address it should answer on."),
		on: j().min(1).describe("Which machine to put it on."),
		expose: j().min(1).describe("How it should be reachable.")
	}), Fy = F({ provider: z("stripe").describe("Which outside service's credential to make available to deployed apps.") }), Iy = F({ provider: j().min(1).describe("Which tool to give the agent. The rest of the fields are whatever that tool's own card declares it needs, and are checked against it when you connect.") }).catchall(j()), Ly = F({
		url: ic().describe("The repository to take the plugin from."),
		ref: j().min(1).optional().describe("A branch, tag or commit to pin to. Leave it out to follow the default branch."),
		path: j().min(1).refine((e) => !e.split("/").includes(".."), { message: "path must stay inside the checkout" }).optional().describe("Where inside the repository the plugin lives, for one that sits in a larger checkout."),
		token: j().min(1).optional().describe("A credential for a private repository. Stored, never echoed back.")
	}), Ry = F({
		url: ic().describe("The repository to take the extension from."),
		ref: j().regex(/^[0-9a-f]{40}$/, "ref must be a full 40-character commit sha").describe("The exact commit to install, in full. Required rather than optional because extension code runs with your browser's trust: the owner approves precisely the code that runs, and an update is a deliberate re-install at a new commit."),
		path: j().min(1).refine((e) => !e.split("/").includes(".."), { message: "path must stay inside the checkout" }).optional().describe("Where inside the repository the extension lives, for one that sits in a larger checkout."),
		token: j().min(1).optional().describe("A credential for a private repository. Stored, never echoed back."),
		registry: ic().optional().describe("Which registry this install came from, which is what update checks and security advisories are read against. Absent falls back to the official one.")
	}), zy = I("auth", [F({
		auth: z("key").describe("Sign in with a key."),
		host: j().min(1).describe("The machine's address."),
		port: H().default(22).describe("Which port it listens on."),
		user: j().min(1).describe("Which user to connect as."),
		privateKey: j().min(1).describe("The private key, whole. Stored with tight permissions and never echoed back.")
	}), F({
		auth: z("password").describe("Sign in with a password."),
		host: j().min(1).describe("The machine's address."),
		port: H().default(22).describe("Which port it listens on."),
		user: j().min(1).describe("Which user to connect as."),
		password: j().min(1).describe("The password. Stored, never echoed back.")
	})]), By = F({
		gpu: R(["on", "off"]).default("off"),
		registryMirror: ic().optional(),
		insecureRegistries: j().optional(),
		addressPool: j().optional()
	}), Vy = F({
		platform: j().min(1),
		username: j().optional(),
		password: j().optional(),
		identity: j().optional(),
		purpose: j().optional(),
		openedAt: j().optional(),
		exit: j().optional()
	}).catchall(j()), Hy = F({
		email: j().min(3),
		password: j().optional(),
		mailbox: j().optional(),
		loginUrl: ic().optional(),
		openAccounts: R(["on", "off"]).default("off"),
		exit: j().optional()
	}), Uy = R(["on", "off"]), Wy = F({
		shell: Uy.default("on"),
		write: Uy.default("off"),
		screen: Uy.default("on"),
		control: Uy.default("off"),
		sandboxes: Uy.default("off"),
		destructive: Uy.default("off"),
		roots: j().optional()
	}), Gy = Wy.extend({ platform: j().min(1) }), Ky = R(["on", "off"]), qy = F({
		read: Ky.default("on"),
		act: Ky.default("on"),
		screenshot: Ky.default("off"),
		cookies: Ky.default("off"),
		confirm: R([
			"sensitive",
			"always",
			"never"
		]).default("sensitive")
	}), Jy = qy.extend({ platform: j().min(1) }), Yy = F({
		command: j().min(1),
		name: j().min(1).optional(),
		env: j().optional(),
		loginCommand: j().min(1).optional()
	}), Xy = R(["openai", "anthropic"]), Zy = F({
		baseUrl: ic(),
		protocol: Xy.default("openai"),
		apiKey: j().optional(),
		headers: j().optional()
	}), Qy = [
		"16384",
		"32768",
		"65536",
		"131072"
	], $y = "65536", eb = 2048, tb = 1048576, nb = F({
		model: j().min(1),
		gpu: R(["on", "off"]).default("off"),
		url: ic().optional(),
		context: fc([R(Qy), z("custom")]).default($y),
		contextTokens: H().int().min(eb).max(tb).optional()
	}), rb = j().regex(/^\d+(\.\d{1,6})?$/, "a USD amount like 0.50 (up to six decimals: USDC's own precision)"), ib = R(["eip155:8453", "eip155:84532"]), ab = F({
		network: ib.default("eip155:8453"),
		address: j().optional(),
		perPaymentMaxUsd: rb.default("1.00"),
		autoApproveUnderUsd: rb.default("0"),
		dailyCapUsd: rb.default("5.00"),
		allow: j().optional(),
		deny: j().optional()
	}), ob = I("kind", [
		F({
			id: q,
			kind: z("devops"),
			config: F({})
		}),
		F({
			id: q,
			kind: z("monorepo"),
			config: F({})
		}),
		F({
			id: q,
			kind: z("mcp"),
			config: Ny
		}),
		F({
			id: q,
			kind: z("service"),
			config: Py
		}),
		F({
			id: q,
			kind: z("integration"),
			config: Fy
		}),
		F({
			id: q,
			kind: z("cli"),
			config: Iy
		}),
		F({
			id: q,
			kind: z("plugin"),
			config: Ly
		}),
		F({
			id: q,
			kind: z("extension"),
			config: Ry
		}),
		F({
			id: q,
			kind: z("ssh"),
			config: zy
		}),
		F({
			id: q,
			kind: z("vpn"),
			config: xy
		}),
		F({
			id: q,
			kind: z("exit"),
			config: Gv
		}),
		F({
			id: q,
			kind: z("docker"),
			config: By
		}),
		F({
			id: q,
			kind: z("browser"),
			config: Vy
		}),
		F({
			id: q,
			kind: z("identity"),
			config: Hy
		}),
		F({
			id: q,
			kind: z("host"),
			config: Gy
		}),
		F({
			id: q,
			kind: z("webext"),
			config: Jy
		}),
		F({
			id: q,
			kind: z("agent"),
			config: Yy
		}),
		F({
			id: q,
			kind: z("endpoint"),
			config: Zy
		}),
		F({
			id: q,
			kind: z("localmodel"),
			config: nb
		}),
		F({
			id: q,
			kind: z("wallet"),
			config: ab
		})
	]), sb = F({
		state: My.describe("Whether it is live, still coming up, broken, or switched off."),
		detail: j().optional().describe("What is wrong, in words a person can act on."),
		code: j().optional().describe("A short marker for that reason, for anything deciding what to do about it.")
	}), cb = F({
		id: j().describe("The connection's id."),
		kind: jy.describe("What sort of thing it is."),
		status: sb.describe("Whether it is working."),
		config: L(j(), fc([
			j(),
			M(),
			N()
		])).describe("Its settings, minus anything secret."),
		secrets: P(j()).default([]).describe("Which credentials it holds, by name. The values are on one route only, and it is not this one.")
	}), lb = F({
		card: j().describe("Which connection is being suggested."),
		evidence: j().describe("What was seen that prompted it: a file, a remote, printed verbatim so the claim can be checked rather than believed."),
		reason: j().describe("The same claim in words, without repeating the evidence into it."),
		prefill: L(j(), j()).describe("Settings the scan could read, to fill the form so you supply only the credential. Never a secret, even when one is sitting in a checked-in file: the suggestion points at such a file, it does not absorb what is in it.")
	}), ub = F({
		capabilities: P(cb).describe("What this sandbox is connected to."),
		recommendations: P(lb).default([]).describe("Things worth connecting, worked out from what is actually in the workspace rather than from anything you configured. Re-derived on every read, so one whose evidence has moved simply stops being suggested.")
	}), db = F({ id: j().describe("Which connection.") }), fb = F({
		id: j().describe("The connection's id."),
		kind: j().describe("What sort of thing it is."),
		config: L(j(), j()).describe("Its settings exactly as stored, credentials included. The field names are its own kind's, which the caller already knows.")
	}), pb = F({ card: j().describe("Which suggestion to stop making.") }), mb = F({
		id: j().describe("Which connection."),
		value: j().min(1).describe("The new credential. Its other settings are left alone.")
	}), hb = F({
		id: j(),
		to: j().min(1).max(60).regex(/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/)
	}), gb = F({ session: j().describe("The terminal the sign-in is happening in. Attach to it to type.") }), _b = F({
		code: j().describe("The code."),
		secondsRemaining: M().describe("How long it lasts. Its expiring is what makes handing one to an agent safe, since the seed behind it is never revealed.")
	}), vb = F({
		checked: N().describe("Whether this connection can be tested from here at all. False is not a failure: it is 'no test exists'."),
		ok: N().describe("Whether the service answered as itself."),
		message: j().describe("What happened, in the words a person standing in front of the form needs: the service's own answer, or its refusal.")
	});
})), bb, xb, Sb, Cb = y((() => {
	U(), bb = F({
		url: j(),
		ref: j().optional(),
		path: j().optional()
	}), xb = (e, t, n) => {
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
	}, Sb = /^[0-9a-f]{40}$/;
})), wb, Tb, Eb, Db, Ob, kb, Ab = y((() => {
	U(), Cb(), wb = F({
		sha: j().regex(Sb, "must be a full lowercase commit sha"),
		url: j().min(1),
		path: j().min(1).optional(),
		policy: j().min(1),
		reviewer: j().min(1),
		reviewedAt: Al(),
		runId: j().min(1),
		deterministic: F({
			policy: j().min(1),
			scanner: j().min(1),
			version: j().min(1),
			runId: j().min(1)
		})
	}), Tb = R([
		"verified",
		"listed",
		"blocked"
	]), Eb = F({
		name: j(),
		description: j().optional(),
		version: j().optional(),
		kind: R(["plugin", "extension"]).optional(),
		trust: Tb.optional(),
		trustReason: j().optional(),
		securityReview: wb.optional(),
		securityFix: N().optional(),
		category: j().optional(),
		art: j().max(4096).optional(),
		logo: j().optional(),
		icon: j().optional(),
		homepage: ic().optional(),
		source: cc()
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
		let r = xb(e.source, "", void 0);
		(r?.ref !== e.securityReview.sha || r?.url !== e.securityReview.url || r.path !== e.securityReview.path) && t.addIssue({
			code: "custom",
			path: ["securityReview"],
			message: "must equal the exact repository, commit and subdirectory named by source"
		});
	}), F({
		name: j(),
		metadata: F({ pluginRoot: j().optional() }).optional(),
		plugins: P(Eb)
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
	}), Db = F({
		sha: j(),
		manifest: j(),
		bundle: j(),
		engines: j().optional()
	}), Ob = F({
		name: j(),
		stars: M().int().nonnegative().optional(),
		pushedAt: j().optional(),
		checks: Db.optional()
	}), F({
		scannedAt: j(),
		entries: P(Ob)
	}), kb = F({
		name: j(),
		description: j().optional(),
		version: j().optional(),
		kind: R(["plugin", "extension"]),
		trust: Tb,
		trustReason: j().optional(),
		securityReview: wb.optional(),
		admitted: N(),
		securityFix: N().optional(),
		category: j().optional(),
		art: j().optional(),
		logo: j().optional(),
		icon: j().optional(),
		homepage: j().optional(),
		install: bb.optional(),
		stars: M().int().nonnegative().optional(),
		pushedAt: j().optional(),
		checks: Db.optional()
	});
})), jb = y((() => {
	Ab(), Cb();
})), Mb, Nb, Pb = y((() => {
	U(), jb(), Mb = F({
		url: ic().describe("The registry to read."),
		token: j().min(1).optional().describe("A credential for a private one. Sent as a body rather than in the address, so it never lands in a log.")
	}), Nb = F({
		name: j().describe("What the registry calls itself."),
		plugins: P(kb).describe("What it lists, each with the curated decision, the resolved pointer and what a scan found upstream.")
	});
})), Fb, Ib, Lb, Rb = y((() => {
	U(), Fb = F({
		url: ic().describe("The repository to ask. http(s) only: an ssh remote would stop on a host-key prompt nobody can answer."),
		token: j().min(1).optional().describe("A credential for a private one. Sent as a body rather than in the address, so it never lands in a log. A form editing a live connection has never been shown its token: it sends the VAULTED marker here and names the connection in `keeping`, so a private repository still answers without anyone retyping a key."),
		keeping: j().min(1).optional().describe("Which connection a VAULTED token belongs to. Ignored when a real token is sent.")
	}), Ib = F({
		name: j().describe("The branch or tag as a person names it: `main`, `v1.4.0`."),
		kind: R(["branch", "tag"]),
		sha: j().regex(/^[0-9a-f]{40}$/).describe("The commit it points at. An annotated tag is peeled here, so this is always a commit, never a tag object.")
	}), Lb = F({
		defaultBranch: j().optional().describe("The branch the remote advertises as HEAD, the one to offer first. Absent when the remote advertises no symref."),
		refs: P(Ib).describe("Every branch the remote advertises, then every tag. Which to offer first is the reader's question, not this one's.")
	});
})), zb, Bb = y((() => {
	K(), zv(), yb(), Pb(), Rb(), Z(), zb = {
		list: G.route({
			method: "GET",
			path: "/capabilities",
			summary: "Everything this sandbox is connected to",
			description: "Each connection with its live state, the settings that are safe to show, and the names of the credentials it holds. The values of those credentials are never in the answer, on any route but one."
		}).output(ub),
		add: G.route({
			method: "POST",
			path: "/capabilities",
			summary: "Connect something, or change a connection",
			description: "Writes a connection and streams the work of applying it, because some kinds provision real infrastructure and take a while. Sending an id that already exists edits that connection: this is the edit as well as the create. Since a caller is never shown stored credentials, it marks the ones it is leaving alone and the daemon fills them in, which is the only way to change one setting without retyping a key."
		}).input(ob).output(W(Sv)),
		probe: G.route({
			method: "POST",
			path: "/capabilities/probe",
			summary: "Test a connection's settings without saving them",
			description: "Dials the service the way this connection would and hands back what it said, before anything is written. The answer is the service's own confirmation or its exact refusal, so a wrong token or an unreachable host is found on the form rather than on a card afterwards."
		}).input(ob).output(vb),
		remove: G.route({
			method: "DELETE",
			path: "/capabilities/{id}",
			summary: "Disconnect something",
			description: "Tears a connection down. The kinds that own real infrastructure refuse, because deleting those would be losing data rather than losing a connection."
		}).input(db).output(Y),
		rename: G.route({
			method: "POST",
			path: "/capabilities/{id}/rename",
			summary: "Rename a connection",
			description: "Carries everything the old name keyed across with it: a browser profile and its logins, an enrolled machine, an extension's copy of its source. Removing and re-adding would lose exactly the state that made the connection worth keeping. Kinds whose name is part of what they are refuse."
		}).input(hb).output(Y),
		setSecret: G.route({
			method: "POST",
			path: "/capabilities/{id}/secret",
			summary: "Replace a stored credential",
			description: "Swaps one connection's key or token for a new one and re-applies it, without touching any of its other settings."
		}).input(mb).output(Y),
		status: G.route({
			method: "GET",
			path: "/capabilities/{id}/status",
			summary: "Re-check one connection",
			description: "Probes a single connection right now, for a screen that wants to refresh one row rather than the whole list."
		}).input(db).output(sb),
		connection: G.route({
			method: "GET",
			path: "/capabilities/{id}/connection",
			summary: "A connection's settings, credentials included",
			description: "The one call that hands back stored secrets, so an extension's own backend can dial the service behind a connection. Never answered for a signed-in person: only a machine credential reaches it, and an extension's only if its manifest asked for this route out loud at install time."
		}).input(db).output(fb),
		marketplace: G.route({
			method: "POST",
			path: "/capabilities/marketplace",
			summary: "Read a plugin marketplace",
			description: "Resolves a plugin marketplace source into the list of connections you could install from it."
		}).input(Mb).output(Nb),
		refs: G.route({
			method: "POST",
			path: "/capabilities/refs",
			summary: "The versions a repository offers",
			description: "Asks a git remote what it advertises and hands back every branch and tag with the commit it points at, plus which branch is its default. Nothing is cloned and nothing is written, so this is cheap enough to answer a form as someone types a repository into it."
		}).input(Fb).output(Lb),
		dismiss: G.route({
			method: "DELETE",
			path: "/capabilities/recommendations/{card}",
			summary: "Stop suggesting this connection",
			description: "Not needed, for now. Nothing is torn down. The suggestion comes back if what prompted it in the workspace changes, because what is remembered is the evidence, not the refusal."
		}).input(pb).output(Y),
		login: G.route({
			method: "POST",
			path: "/capabilities/{id}/login",
			summary: "Sign in to a connection by hand",
			description: "Opens the connection's own sign-in in a terminal a person can type into, for the flows that need a code pasted or a device confirmed. The answer names the terminal to attach to."
		}).input(db).output(gb),
		otp: G.route({
			method: "GET",
			path: "/capabilities/{id}/otp",
			summary: "Mint a one-time code",
			description: "Generates a single two-factor code from a stored seed. The one credential-adjacent read an agent is allowed, and it is safe because a code expires in seconds and never reveals the seed, so an agent can answer a prompt without ever holding the factor."
		}).input(db).output(_b)
	};
})), Vb, Hb, Ub, Wb, Gb, Kb, qb, Jb = y((() => {
	U(), Vb = F({
		query: j().min(2).max(512).describe("What to look for. Plain words, a pattern, a symbol name, or a question."),
		mode: R([
			"q",
			"find",
			"files",
			"def",
			"refs",
			"sym",
			"ast"
		]).optional().describe("Narrow the search to one kind: plain text, filenames, definitions, references, symbols, or code structure. Leave it out to blend them, which also answers a question asked in words."),
		includeIgnored: Dl().optional().describe("Search inside installed packages and other ignored folders too."),
		literal: Dl().optional().describe("Treat the query as fixed text rather than a pattern."),
		word: Dl().optional().describe("Match whole words only."),
		caseSensitive: Dl().optional().describe("Whether capitals matter. Off means they do not, rather than being guessed at from the query."),
		include: j().max(512).optional().describe("Which files to ask, in the same grammar an editor's files-to-include box takes: comma-separated patterns, matched at any depth unless anchored, a leading exclamation mark excluding instead."),
		limit: H().int().positive().optional().describe("How many results to return."),
		after: j().optional().describe("Resume from the cursor a previous answer handed back.")
	}), Hb = F({
		kind: R([
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
		score: M().optional().describe("How strongly that reason applied.")
	}), Ub = F({
		start: M().describe("First character of the match within the line."),
		end: M().describe("One past the last.")
	}), Wb = F({
		line: M().describe("Which line, counting from one."),
		text: j().describe("The line itself."),
		spans: P(Ub).describe("Where in the line the matches are, so you can highlight without searching again. Empty when the whole line is the match rather than part of it."),
		tags: P(Hb).describe("Why it matched."),
		context: j().optional().describe("What it sits inside: the function, the class, the heading. Often enough that you need not open the file.")
	}), Gb = F({
		path: j().describe("The file."),
		score: M().describe("How well it matched. Groups arrive best first, never in path order."),
		hits: P(Wb).describe("The matching lines in it."),
		capped: N().optional().describe("This file had more matches than are kept per file, so the count is a floor. Say fifty-plus rather than fifty.")
	}), Kb = F({
		state: R([
			"fresh",
			"building",
			"stale"
		]).describe("Whether the index matches what is on disk, is still filling, or has fallen behind."),
		ageMs: M().optional().describe("How long since it last matched the disk, in milliseconds."),
		progress: M().optional().describe("How far through building it is, from zero to one."),
		behind: M().optional().describe("How many files it has not caught up with. Worth showing, because the word stale on its own reads as a warning about the answer, which it almost never is.")
	}), qb = F({
		mode: j().describe("Which kind of search actually ran, which matters when you let it choose."),
		total: M().describe("Matching lines across the whole workspace, not just this page."),
		files: M().describe("Files the query matched in total."),
		shown: M().describe("How many of those lines are on this page."),
		groups: P(Gb).describe("The results, grouped by file, best first."),
		freshness: Kb.describe("Whether the index behind the answer is up to date."),
		truncated: N().describe("This page is not all of it. Use the cursor."),
		partial: N().optional().describe("At least one file had more matches than are kept per file, so the total is a floor. Different from the page being truncated: a complete page can still count partially."),
		cursor: j().optional().describe("Pass this back as `after` to get the next page."),
		hint: j().optional().describe("A suggestion for getting a better answer out of this query."),
		note: j().optional().describe("What the engine did that you did not ask for: a pattern rerun as plain text because it was not valid, escapes rewritten, a language filter that matched nothing."),
		related: P(j()).optional().describe("Places next door to the best results: where each is defined, and whatever calls it most."),
		candidates: P(j()).optional().describe("Ranked places that scored but did not make the page, best first. The answer often sits at rank five to thirteen, so this saves paging through to find out."),
		features: P(j()).optional().describe("Which stages of the search were switched off for this run. Absent means all of them ran.")
	});
})), Yb, Xb, Zb, Qb, $b = y((() => {
	U(), Jb(), Yb = F({
		repo: j().min(1).describe("Which repository, using the same ids the git routes take."),
		since: j().max(16).optional().describe("How far back to count changes, written as a span such as 2d, 12h, 1w or 3m. Leave it out for all of history."),
		limit: H().int().positive().max(200).optional().describe("How many files and modules to rank. A leaderboard rather than an inventory: past a screenful the ranking stops being the point.")
	}), Xb = F({
		path: j(),
		commits: M(),
		adds: M(),
		dels: M(),
		complexity: M(),
		score: M(),
		latestMs: M()
	}), Zb = F({
		path: j(),
		exports: M()
	}), Qb = F({
		repo: j().describe("Which repository this describes."),
		totals: F({
			files: M().describe("Files counted."),
			symbols: M().describe("Named things they export."),
			complexity: M().describe("Branch points across all of them added up."),
			hotspots: M().describe("How many files qualify as hotspots at all. The list below is capped; this is not.")
		}).describe("Counts anybody could recount in the files themselves. Deliberately no single maintainability grade: those cannot be checked and are not comparable between projects."),
		hotspots: P(Xb).describe("Files that change often and are complicated at the same time, worst first."),
		modules: P(Zb).describe("The parts of the codebase the rest of it leans on most."),
		freshness: Kb.describe("Whether the index these numbers were read from is up to date.")
	});
})), ex, tx, nx, rx, ix, ax, ox, sx, cx, lx, ux, dx, fx, px, mx, hx, gx, _x, vx, yx, bx, xx, Sx, Cx = y((() => {
	U(), $b(), ex = [
		"outdated",
		"audit",
		"knip",
		"jscpd",
		"ui",
		"bundle",
		"mutation"
	], tx = R(ex), nx = F({
		name: j().describe("The dependency."),
		current: j().describe("What you are on."),
		latest: j().describe("What is published."),
		kind: R([
			"major",
			"minor",
			"patch"
		]).describe("How far apart those are. This is not one number because forty patch releases behind is a morning's work and one major version is a project."),
		section: j().describe("Which part of the manifest declares it. A major version behind on a build-time tool is a different risk from one that ships.")
	}), rx = F({
		name: j().describe("The dependency it concerns."),
		severity: R([
			"critical",
			"high",
			"moderate",
			"low",
			"info"
		]).describe("How bad it is said to be."),
		title: j().describe("What it is, in one line. No scoring vector and no reference list: those are for reading on the advisory's own page, and carrying them would put a kilobyte of prose per finding on every poll."),
		patched: j().optional().describe("Which versions fix it. Absent means no fix has been published, which is exactly when nothing should offer to upgrade and something should say so instead."),
		dev: N().describe("Whether it only reaches build-time tooling, which is a different problem from one that reaches what you ship.")
	}), ix = F({
		files: M().int().nonnegative().describe("Files nothing reaches."),
		exports: M().int().nonnegative().describe("Exported things nothing uses."),
		types: M().int().nonnegative().describe("Types nothing uses."),
		dependencies: M().int().nonnegative().describe("Declared dependencies nothing imports."),
		devDependencies: M().int().nonnegative().describe("The same, for build-time ones."),
		sample: P(j()).describe("A handful of the files, so a reader need not take the count on faith. Counts and a sample rather than the whole list, because an agent re-measures against the live tree anyway.")
	}), ax = F({
		percentage: M().describe("How much of the scanned code is duplicated. A share rather than a count, because a count grows with the repository and would mean something different every quarter."),
		clones: M().int().nonnegative().describe("How many duplicated stretches were found."),
		top: P(F({
			lines: M().int().nonnegative().describe("How long the duplicated stretch is."),
			first: j().describe("One of the two places."),
			second: j().describe("The other.")
		})).describe("The largest of them.")
	}), ox = F({
		components: P(j()).describe("The interface's own source files, with tests, stories and generated output left out."),
		bypasses: P(F({
			path: j().describe("The file."),
			count: M().int().positive().describe("How many times, in that file.")
		})).describe("Where the design system was routed around and a value hard-coded instead. Counted per file, because a reader deciding what to open is served by a file and a number, not by eleven snippets."),
		idioms: P(F({
			id: j().describe("Which outdated idiom. Looked up rather than listed here, so a sandbox one version behind can still report one this list has never heard of."),
			files: P(j()).describe("The files still on it.")
		})).describe("Files still written the way their framework has since replaced.")
	}), sx = F({
		dir: j().describe("Which folder was measured. Read from build output already on disk rather than by building, so this is sometimes a commit behind and never leaves anything in your working tree."),
		totalBytes: M().int().nonnegative().describe("The whole thing, raw."),
		totalGzip: M().int().nonnegative().describe("The whole thing, compressed. The ratio between the two is the difference between big and big-and-incompressible, which are different problems."),
		assets: P(F({
			path: j().describe("The file."),
			bytes: M().int().nonnegative().describe("Its raw size."),
			gzip: M().int().nonnegative().describe("Its compressed size.")
		})).describe("What is in it, piece by piece.")
	}), cx = F({
		score: M().describe("The share of injected faults the suite caught. Not a coverage figure: coverage says a line ran, this says an assertion depended on it."),
		killed: M().int().nonnegative().describe("Faults the suite caught."),
		survived: M().int().nonnegative().describe("Faults it did not: code that can be broken with every test still green."),
		inconclusive: M().int().nonnegative().describe("Faults it never got a verdict on, because they would not compile or were configured out. Left out of the score entirely, since neither answer is known."),
		survivors: P(F({
			file: j().describe("Where it is."),
			line: M().int().nonnegative().describe("Which line."),
			mutator: j().describe("What was changed, in the mutation tool's own vocabulary."),
			replacement: j().describe("What it became, so a reader can judge whether it matters without opening the file.")
		})).describe("The surviving faults themselves. A percentage is a mood; a named line with the change that went unnoticed is a morning's work.")
	}), lx = R([
		"ok",
		"unavailable",
		"failed"
	]), ux = I("id", [
		F({
			id: z("outdated"),
			packages: P(nx)
		}),
		F({
			id: z("audit"),
			advisories: P(rx)
		}),
		F({
			id: z("knip"),
			deadCode: ix
		}),
		F({
			id: z("jscpd"),
			duplication: ax
		}),
		F({
			id: z("ui"),
			scan: ox
		}),
		F({
			id: z("bundle"),
			bundle: sx
		}),
		F({
			id: z("mutation"),
			mutation: cx
		})
	]), dx = F({
		id: tx.describe("Which measurement this is."),
		state: lx.describe("Whether the tool ran and reported, is not part of this repository at all, or broke. The middle one is not evidence of health: the check simply cannot be made here."),
		ranAt: M().describe("When it last finished, in milliseconds, which is what its age is measured from."),
		tookMs: M().int().nonnegative().describe("How long it took. Worth knowing before asking for it again: some of these run for minutes."),
		facts: ux.optional().describe("What it found, including finding nothing, which is a real answer and the one that keeps a chore quiet."),
		reason: j().optional().describe("Why it broke, quoted from the tool rather than summarised, or, when it never ran, what is missing. Never a sentence built from the check's own name, which would have an unmeasured check claiming there is nothing to measure.")
	}), fx = F({
		dir: j().describe("Where the package lives."),
		name: j().describe("What it declares itself as."),
		engines: L(j(), j()).optional().describe("Which runtime versions it says it needs, verbatim."),
		dependencies: P(j()).describe("What it depends on."),
		devDependencies: P(j()).describe("What it needs only to build."),
		documented: N().describe("Whether it has a README, which in this workspace is what a package's own documentation is.")
	}), px = F({
		docs: P(j()).describe("The repository's own architecture documents, when it has any. Their existence is the question: a repository with none has never been through the documentation flow at all."),
		dockerfiles: P(j()).describe("Container definitions in it."),
		ci: P(j()).describe("Pipeline definitions in it."),
		lockfile: N().describe("Whether dependencies are pinned to exact versions, which is what makes a security audit mean anything."),
		packageManifest: N().describe("Whether it is a JavaScript project at all. A Rust or Go repository has no majors to be behind on, and offering it those checks would be this surface guessing at what it is looking at."),
		deps: P(j()).describe("Every dependency name declared anywhere in the repository. Names rather than a verdict about which framework this is, because that judgement belongs to whatever reads this, not to a sandbox baked months ago.")
	}), mx = F({
		packages: P(fx).describe("Each package in the repository, as its own manifest declares it."),
		shape: px.describe("What the repository is made of, which decides whether a given chore is even a sensible question to ask of it."),
		hotspots: P(Xb).describe("Files that change often and are complicated at once, capped tight: a chore only asks whether something has entered the top of the ranking."),
		keyModules: P(Zb).describe("The parts the rest of the code leans on most, capped the same way."),
		totals: F({
			files: M().describe("Files counted."),
			symbols: M().describe("Named things they export."),
			complexity: M().describe("Branch points added up."),
			hotspots: M().describe("How many files qualify as hotspots at all.")
		}).describe("The repository in numbers."),
		indexed: N().describe("Whether the index these rankings came from is finished. Nothing should act on a half-built one.")
	}), hx = R([
		"acted",
		"reported",
		"clean"
	]), gx = F({
		repo: j().describe("Which repository."),
		chore: j().describe("Which chore."),
		ranAt: M().describe("When it ran, in milliseconds."),
		runId: j().describe("The conversation that ran it, so its whole record can be opened."),
		outcome: hx.describe("What it concluded: it did something, it wrote something down, or it looked and found the finding to be false. That last one matters most, or the same turn starts again for ever."),
		digest: j().describe("A fingerprint of the evidence standing at the time. A chore whose evidence has since changed is due again on its own merits; one whose evidence has not stays quiet."),
		snoozedUntil: M().optional().describe("Not until then, in milliseconds. The chore stays visible and stays out of the badge. Different from switching it off, which is a setting.")
	}), _x = F({
		repo: j().describe("Which repository."),
		id: tx.describe("Which measurement."),
		askedAt: M().describe("When it was asked for, in milliseconds, so one still waiting can say how long it has waited."),
		startedAt: M().optional().describe("When it actually began. Absent while it is queued behind another, which is a real and common state: there is one lane for the whole sandbox.")
	}), vx = F({
		repos: P(F({
			repo: j().describe("Which repository."),
			probes: P(dx).describe("The expensive measurements, served from a cache with an age on each rather than run on demand."),
			signals: mx.describe("The cheap facts, worked out fresh every time.")
		})).describe("Every repository's standing evidence. One answer for all of them, because a badge polls this on a timer and one request per repository is the kind of poll that shows up in a battery graph."),
		ledger: P(gx).describe("What has already been done about all of it."),
		running: P(_x).describe("What is being measured right now and what is waiting behind it. Part of this read rather than a route of its own, because a screen that had to ask twice would show the two halves disagreeing."),
		node: j().describe("The runtime version this sandbox is actually running, read off the process rather than off a manifest, because what is installed is the fact that matters and a declared range is a wish.")
	}), yx = F({
		repo: j().min(1).describe("Which repository."),
		id: tx.describe("Which measurement to retake, ahead of its usual schedule.")
	}), bx = gx, xx = F({
		id: j().describe("Which check."),
		label: j().describe("What it is called."),
		status: R([
			"pass",
			"warn",
			"fail"
		]).describe("How it went. A warning is a real third answer rather than a soft failure."),
		detail: j().describe("What it found.")
	}), Sx = F({ checks: P(xx).describe("Everything that can be checked from the extension's own files, for an author about to publish.") });
})), wx, Tx = y((() => {
	K(), Cx(), Z(), wx = {
		list: G.route({
			method: "GET",
			path: "/chores",
			summary: "What maintenance the repos are asking for",
			description: "Every repo's standing evidence in one read: what the last measurement found and how old it is, the cheap signals that are always current, and what has already been decided about each."
		}).output(vx),
		probe: G.route({
			method: "POST",
			path: "/chores/probe",
			summary: "Measure one repo again now",
			description: "Re-runs a single check without waiting for it to go stale. Answers immediately: the work happens in the background and the result turns up in the next read, because some of these sweeps outlive any sane request."
		}).input(yx).output(Y),
		record: G.route({
			method: "POST",
			path: "/chores/ledger",
			summary: "Record a verdict, or snooze one",
			description: "Writes what somebody concluded about one repo's chore, replacing the previous verdict. A chore has one current answer, not a growing pile of times it was fine."
		}).input(bx).output(Y)
	};
})), Ex, Dx = y((() => {
	K(), Ug(), Z(), Ex = {
		runs: G.route({
			method: "GET",
			path: "/ci/runs",
			summary: "Pipeline runs across the repos",
			description: "What the forges are reporting for every workspace repo that has a remote, served from a cache and filled in on demand. Repos whose notifications are not wired up say so."
		}).output(Lg),
		rerun: G.route({
			method: "POST",
			path: "/ci/runs/rerun",
			summary: "Run a pipeline again",
			description: "Asks the forge to re-run one pipeline. The daemon only passes the request along."
		}).input(Rg).output(Y),
		cancel: G.route({
			method: "POST",
			path: "/ci/runs/cancel",
			summary: "Cancel a pipeline run",
			description: "Asks the forge to stop a run in progress."
		}).input(Rg).output(Y),
		jobs: G.route({
			method: "POST",
			path: "/ci/runs/jobs",
			summary: "The steps inside one pipeline run",
			description: "Each job in a run with its outcome, which is where you look to find out what actually broke."
		}).input(Rg).output(Fg),
		fix: G.route({
			method: "POST",
			path: "/ci/fix",
			summary: "Put an agent on a broken pipeline",
			description: "Opens a fresh isolated conversation already holding the failure: which job, which repo, what it said. The answer names the conversation so you can open it."
		}).input(zg).output(Bg)
	};
})), Ox, kx, Ax, jx = y((() => {
	K(), U(), yb(), lf(), Ox = R([
		"unknown",
		"healthy",
		"degraded",
		"unavailable"
	]), kx = F({
		available: N(),
		allowance: M().int().nonnegative(),
		used: M().int().nonnegative(),
		remaining: M().int().nonnegative(),
		health: Ox,
		resetsAt: j().optional(),
		retryAt: j().optional(),
		servedModel: j().optional()
	}), Ax = {
		models: G.route({
			method: "GET",
			path: "/endpoints/{id}/models",
			summary: "Models a connected server offers",
			description: "Asks one configured model server what it serves. There is no built-in list and no fallback: what a server offers is knowable only by asking it, so an empty answer is the honest report that we could not."
		}).input(db).output(cf),
		trial: G.route({
			method: "GET",
			path: "/endpoints/trial/status",
			summary: "What is left of the free trial",
			description: "The allowance, what has been used, when it resets, and which model actually answered the last message. Not being available is the ordinary answer rather than a failure: most sandboxes run against a platform that offers no trial at all."
		}).output(kx)
	};
})), Mx, Nx = y((() => {
	K(), zv(), ey(), Z(), Mx = {
		list: G.route({
			method: "GET",
			path: "/exit",
			summary: "Ways to come out somewhere else",
			description: "Every configured exit with its live state, the country it was asked to appear in, and the country it actually appears in. Those last two disagreeing is the whole reason this reports both."
		}).output(Zv),
		countries: G.route({
			method: "GET",
			path: "/exit/{id}/countries",
			summary: "Countries one exit can reach",
			description: "Where this exit can put you, ranked by how much capacity is really there. Asked of the provider when it answers and taken from a built-in list when it does not, and the answer says which of those you got."
		}).input(Qv).output(Yv),
		start: G.route({
			method: "POST",
			path: "/exit/{id}/start",
			summary: "Bring an exit up",
			description: "Starts the exit in the country it was configured for. Streamed, because a first start fetches a catalogue, raises a tunnel and then checks the address, which takes tens of seconds on the free providers and can fail at each step with something worth reading. Starting one that is already up simply says so."
		}).input(Qv).output(W(Sv)),
		use: G.route({
			method: "POST",
			path: "/exit/{id}/use",
			summary: "Move to another country",
			description: "Switches the exit's country, starting it first if it was down. It ends by checking where the world actually sees you and fails if that does not match what you asked for. A switch that quietly left your traffic where it was is the exact failure this whole feature exists to rule out."
		}).input($v).output(W(Sv)),
		rotate: G.route({
			method: "POST",
			path: "/exit/{id}/rotate",
			summary: "Take a different address, same country",
			description: "Swaps to another address in the country you are already in. Fails if the address does not actually change, which on a small pool it sometimes cannot."
		}).input(Qv).output(W(Sv)),
		check: G.route({
			method: "POST",
			path: "/exit/{id}/check",
			summary: "Where the world sees you right now",
			description: "Looks up the address and country as seen through this exit. Cheap, and the honest answer to whether you are really where you meant to be, which is what every other call here is judged against."
		}).input(Qv).output(qv),
		stop: G.route({
			method: "POST",
			path: "/exit/{id}/stop",
			summary: "Take an exit down",
			description: "Shuts the exit off. One that was already down is fine: the promise is that it is not up afterwards, not that it was up before."
		}).input(Qv).output(Y)
	};
})), Px, Fx, Ix, Lx, Rx, zx, Bx, Vx, Hx, Ux, Wx, Gx, Kx, qx, Jx, Yx, Xx, Zx, Qx, $x, eS, tS, nS, rS, iS, aS = y((() => {
	U(), Px = j().min(1).max(121).regex(/^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/), Fx = F({
		updates: R([
			"notify",
			"agent",
			"auto"
		]),
		advisories: R(["auto-disable", "notify"])
	}), Ix = F({
		ref: j().describe("The commit being offered."),
		version: j().optional().describe("What it calls itself."),
		url: j().describe("Where it comes from."),
		path: j().optional().describe("Where inside that repository it lives."),
		trust: R(["verified", "listed"]).describe("Whether anybody vouched for it, or it is merely listed."),
		securityFix: N().optional().describe("This release fixes a security problem in earlier ones, so here the old version is the dangerous one."),
		registry: j().describe("Which registry said so."),
		at: j().describe("When it was published."),
		needsReview: j().optional().describe("Why this one was not taken automatically and is asking for a person instead: it wants more than it used to, or nobody has vouched for it."),
		review: F({
			conversationId: j().describe("Where to read what it found."),
			at: j().describe("When it looked.")
		}).optional().describe("An agent has already read the difference between what is installed and this, so the card can link to what it found rather than offer to start looking.")
	}), Lx = F({
		reason: j().describe("Why the registry pulled the listing, in its own words. Delisting protects people browsing; this record is for the person already running it."),
		registry: j().describe("Which registry said so."),
		at: j().describe("When."),
		autoDisabled: N().describe("Whether the sandbox has already switched it off.")
	}), Rx = F({
		state: R([
			"watching",
			"healthy",
			"unhealthy"
		]).describe("How it has behaved since the last update. Checks catch broken, not wrong, so for a while after a swap it is simply watched."),
		detail: j().optional().describe("What is going wrong, when something is."),
		fromRef: j().optional().describe("Which version it was updated from, which is what going back would return to."),
		at: j().describe("When the watching started."),
		autoReverted: N().optional().describe("The update was already rolled back without anybody asking. The record stays rather than pretending the attempt never happened.")
	}), zx = F({
		added: P(j()).describe("What the new version asks for that the running one does not. The whole point of the comparison."),
		removed: P(j()).describe("What it no longer asks for."),
		unchanged: P(j()).describe("What stays the same.")
	}), Bx = F({
		id: Px.describe("Which extension."),
		ref: j().regex(/^[0-9a-f]{40}$/).optional().describe("Which commit, in full. Leave it out for whatever the last check found, which is what most callers mean.")
	}), Vx = F({
		ref: j().describe("The commit this would install."),
		version: j().describe("What that version calls itself."),
		installedVersion: j().describe("What is running now."),
		engines: j().describe("Which sandbox versions the new one says it needs."),
		compatible: N().describe("Whether this sandbox is one of them."),
		powers: zx.describe("Exactly what the new code asks for that the running one does not. This is what approving an update is approving.")
	}), Hx = F({
		ok: z(!0).describe("It went through."),
		ref: j().describe("Which commit is now running."),
		rebuildNeeded: N().optional().describe("The new version changes what the sandbox image contains, so a one-time rebuild is still pending and the update is not wholly landed yet.")
	}), Ux = F({
		id: Px.describe("Which extension."),
		updates: R([
			"notify",
			"agent",
			"auto"
		]).optional().describe("What to do about a newer version: tell you, have an agent read the difference first, or just take it."),
		advisories: R(["auto-disable", "notify"]).optional().describe("What to do about a security warning: switch it off at once, or tell you.")
	}), Wx = F({
		ok: z(!0).describe("The check ran."),
		checkedAt: j().describe("When, so a screen can date the answer.")
	}), Gx = F({
		id: Px.describe("The extension's id."),
		manifest: r.describe("What it declares about itself: what it contributes, what it needs, and what it may reach."),
		commit: j().describe("Exactly which commit is installed."),
		source: R([
			"builtin",
			"installed",
			"workspace"
		]).describe("Where the code comes from: baked into the sandbox image and not removable, installed from a repository at a pinned commit, or written in this workspace and edited in place."),
		enabled: N().describe("The owner's switch. A switched-off extension is still listed, which is what makes it switchable back on, but nothing it contributes is wired up."),
		essential: N().optional().describe("Its switch is fixed on, because it is the only way to see or stop an engine the sandbox runs regardless. Hiding that page would not stop the spending, only your ability to notice it. Declared by the core about its own surfaces, never by an extension about itself, which would be a pack making itself un-removable."),
		usage: L(j(), F({
			calls: M().int().nonnegative().describe("How many times."),
			last: j().describe("When, most recently.")
		})).optional().describe("How much of the reach it asked for it has actually used, keyed by what it declared. Absent means never observed doing anything, which is a different claim from uses none of them, and the two have to stay tellable apart: reading either as these permissions are unnecessary turns evidence into a guess with a number on it."),
		backend: F({
			state: R([
				"running",
				"error",
				"absent",
				"incompatible",
				"starting",
				"stopped"
			]).describe("How its server half is doing. Absent means the code is not in this image at all; incompatible means it needs a different sandbox version."),
			detail: j().optional().describe("What went wrong, so a backend that failed to start is a sentence rather than an address that answers nothing.")
		}).optional().describe("Present only for an extension that ships a server half."),
		update: Ix.optional().describe("A newer version waiting. All five of these exist only for one installed from a repository: a built-in updates with the image and one written here is edited live."),
		advisory: Lx.optional().describe("A security warning about the installed version."),
		health: Rx.optional().describe("How it has behaved since the last update, which is what decides whether that update sticks."),
		previous: F({
			ref: j().describe("The commit that was running before."),
			version: j().optional().describe("What it called itself.")
		}).optional().describe("The version kept one step back, which is what going back means."),
		updatePolicy: Fx.optional().describe("The owner's standing answer for this one: tell me, have an agent look, or just do it.")
	}), Kx = F({
		dir: j().describe("Which folder."),
		error: j().describe("Why it could not be read.")
	}), qx = F({
		extensions: P(Gx).describe("What is installed."),
		invalid: P(Kx).describe("Extensions written here that could not be read at all. Listed rather than dropped, because there is no install moment at which to reject a broken one, so this is its only way of saying anything."),
		updatesCheckedAt: j().optional().describe("When updates were last looked for. Absent until the first check has run. Sent so a screen can say checked an hour ago rather than presenting staleness as certainty.")
	}), Jx = F({
		settings: L(j(), fc([
			j(),
			M(),
			N()
		])).describe("The values, minus anything marked secret."),
		secretsSet: P(j()).describe("Which of its secret settings actually hold a value. Names only: the values themselves never come back.")
	}), Yx = F({
		id: j().describe("Which extension."),
		settings: L(j(), fc([
			j(),
			M(),
			N()
		])).describe("The values to write. A key the extension never declared is refused rather than quietly stored.")
	}), Xx = F({
		id: j().describe("Which extension."),
		enabled: N().describe("On or off.")
	}), Zx = F({
		publisher: j().regex(/^[a-z0-9][a-z0-9-]*$/).describe("Who it is by, which together with the name makes its id."),
		name: j().regex(/^[a-z0-9][a-z0-9-]*$/).describe("What it is called.")
	}), Qx = F({
		id: j().describe("The id it was given."),
		dir: j().describe("Where its files are, so you can open them.")
	}), $x = F({
		id: j().describe("The name the owner gave it, which is also the agent's handle for it."),
		kind: j().describe("Which core kind it is underneath: cli, browser, host or webext."),
		card: j().describe("The card it was added from, named as the grid names it."),
		secrets: P(j()).describe("Credential fields stored for it, by name. The values are deleted with the entry and cannot be recovered from here."),
		effect: j().describe("What tearing it down actually takes away, in one sentence.")
	}), eS = F({
		id: Px.describe("The extension's id, as the list addresses it."),
		name: j().describe("Its publisher.name identity, which is the key its settings and switch are stored under."),
		version: j().describe("The version being removed."),
		source: R([
			"builtin",
			"installed",
			"workspace"
		]).describe("Where its code comes from, which decides what removal means."),
		blocked: j().optional().describe("Why this one cannot be removed, when it cannot. Present means every other field is what would go if it could."),
		files: P(F({
			path: j().describe("Workspace-relative."),
			detail: j().describe("What is in there.")
		})).describe("Directories deleted outright. For an extension written here this is the owner's own source, which nothing else keeps a copy of."),
		connections: P($x).describe("Connections configured from its cards, which are removed with it."),
		settings: P(F({
			key: j().describe("Which setting."),
			secret: N().describe("Whether its value is a stored credential.")
		})).describe("Values the owner entered for this extension that are forgotten. Only keys actually holding a value are listed."),
		processes: P(j()).describe("Background processes it declared, stopped before its files go."),
		automations: P(j()).describe("Automations of the owner's own that wake on a listener this extension provides. They are NOT removed, and are listed because they stop firing, which is the sort of thing a removal is otherwise discovered by."),
		rebuildNeeded: N().describe("It bakes a layer into the sandbox image, so what it added to the image is only gone after the next environment rebuild."),
		keeps: P(j()).describe("What removal deliberately leaves alone, so the list of what goes can be read as complete.")
	}), tS = F({
		ok: z(!0).describe("It is gone."),
		connections: P(j()).describe("Which configured connections went with it, by name."),
		rebuildNeeded: N().optional().describe("Its image layer is still in the running sandbox until the next environment rebuild; nothing else is pending.")
	}), nS = F({ reports: L(j(), L(j(), M().int().positive())).describe("Each extension that called something, and the counts against the declared powers it exercised.") }), rS = F({
		id: j().describe("Which extension."),
		name: j().describe("Which of its declared processes.")
	}), iS = F({
		name: j().describe("Which process."),
		running: N().describe("Whether it is up. False with a port means it crashed and the supervisor is waiting to retry it."),
		port: M().optional().describe("The port it was given."),
		restarts: M().optional().describe("How many times it died and was brought back since it was started. A growing number is a service in trouble."),
		lastExitCode: M().optional().describe("How it last exited, when it has crashed at least once."),
		previewUrl: j().optional().describe("Where to open it, when it has an address.")
	});
})), oS, sS = y((() => {
	K(), yb(), aS(), Cx(), Z(), oS = {
		list: G.route({
			method: "GET",
			path: "/extensions",
			summary: "Installed extensions",
			description: "Every extension installed here, resolved to the manifest the owner approved, which is what the app boots its extension host from. The code itself is served separately, because raw script bytes are not a JSON answer."
		}).output(qx),
		create: G.route({
			method: "POST",
			path: "/extensions/workspace",
			summary: "Write a new extension in place",
			description: "Scaffolds a working extension into this workspace and installs it. The only call here that creates one, and it exists because that folder is otherwise reachable only through an agent's file tools, which is a fine way to change an extension and a poor way to meet the idea of one."
		}).input(Zx).output(Qx),
		removalPlan: G.route({
			method: "GET",
			path: "/extensions/{id}/removal",
			summary: "What removing an extension would take away",
			description: "Everything one removal destroys, before it happens: the files deleted, the connections configured from its cards, the settings and credentials forgotten, the background processes stopped, and the owner's own automations that quietly stop firing. Also answerable for an extension that cannot be removed, in which case it says why."
		}).input(db).output(eS),
		remove: G.route({
			method: "POST",
			path: "/extensions/{id}/remove",
			summary: "Remove an extension",
			description: "Uninstalls it and everything that only existed because it was here: the connections added from its cards, with their stored credentials, its settings, its switch and its update record. What the owner made with it — automations, files in the workspace — is left alone. Owner only, for the same reason installing is. Built-in extensions cannot be removed; switch them off instead."
		}).input(db).output(tS),
		settings: G.route({
			method: "GET",
			path: "/extensions/{id}/settings",
			summary: "An extension's settings",
			description: "The current values for the settings this extension declared it has."
		}).input(db).output(Jx),
		setSettings: G.route({
			method: "POST",
			path: "/extensions/{id}/settings",
			summary: "Change an extension's settings",
			description: "Writes new values. A key the extension never declared is refused rather than quietly stored, the same honesty rule that governs everything else an extension claims."
		}).input(Yx).output(Y),
		setEnabled: G.route({
			method: "POST",
			path: "/extensions/{id}/enabled",
			summary: "Turn an extension on or off",
			description: "The owner's switch. Turning one off stops its background processes at once. What it contributes to an agent's tools is rebuilt at the start of the next turn, and anything it adds to the sandbox image only at the next rebuild."
		}).input(Xx).output(Y),
		recordUsage: G.route({
			method: "POST",
			path: "/extensions/usage",
			summary: "Record what extensions just used",
			description: "One batch written by the app rather than measured by the daemon, because the permission gate runs in the browser: from the sandbox's side extension traffic is indistinguishable from anyone else's. This is how the record of which powers each extension actually exercises gets kept without one reporting request per extension."
		}).input(nS).output(Y),
		readiness: G.route({
			method: "GET",
			path: "/extensions/{id}/readiness",
			summary: "Whether an extension is fit to share",
			description: "The checks that can be answered from an extension's own files, for an author about to publish. Read on demand rather than carried on the list, because it reads the code off disk each time."
		}).input(db).output(Sx),
		checkUpdates: G.route({
			method: "POST",
			path: "/extensions/updates/check",
			summary: "Look for extension updates now",
			description: "Compares every installed extension against its source and reports what is newer, what carries an advisory and what looks unhealthy. This also happens on a schedule; call it to check on demand."
		}).output(Wx),
		updatePreview: G.route({
			method: "POST",
			path: "/extensions/{id}/update/preview",
			summary: "What an update would change",
			description: "The read before the click: which versions are involved and exactly which powers the new code asks for that the running one does not. Costs one throwaway copy of the source, the same as browsing a registry entry."
		}).input(Bx).output(Vx),
		applyUpdate: G.route({
			method: "POST",
			path: "/extensions/{id}/update",
			summary: "Update an extension",
			description: "The whole swap as one transaction: fetch, check, quiet the running one, replace it while keeping the outgoing copy one step back, restart and watch it come up. The existing configuration is kept, so a token for a private source survives what removing and re-adding would lose. Owner only, because it changes what code runs."
		}).input(Bx).output(Hx),
		revert: G.route({
			method: "POST",
			path: "/extensions/{id}/revert",
			summary: "Go back to the previous version",
			description: "Swaps the copy kept from before the last update back into place. Owner only, for the same reason updating is."
		}).input(db).output(Hx),
		setUpdatePolicy: G.route({
			method: "POST",
			path: "/extensions/{id}/update-policy",
			summary: "How an extension should handle its own updates",
			description: "The owner's standing answer for one extension: tell me, have an agent look at it, or just do it. Security advisories can be opted out of separately."
		}).input(Ux).output(Y),
		processStatus: G.route({
			method: "GET",
			path: "/extensions/{id}/processes/{name}",
			summary: "Whether an extension's background process is up",
			description: "The state of one process an extension declared, with the port it was given and its preview address if it has one."
		}).input(rS).output(iS),
		processStart: G.route({
			method: "POST",
			path: "/extensions/{id}/processes/{name}/start",
			summary: "Start an extension's background process",
			description: "Brings one of an extension's declared processes up in an attachable terminal."
		}).input(rS).output(Y),
		processStop: G.route({
			method: "POST",
			path: "/extensions/{id}/processes/{name}/stop",
			summary: "Stop an extension's background process",
			description: "Shuts one of an extension's declared processes down and frees its port."
		}).input(rS).output(Y)
	};
})), cS = y((() => {
	qu(), Zu(), Ju.map((e) => ({
		label: e.label,
		value: e.id
	})), Object.fromEntries(Ju.map((e) => [e.id, e.access])), Ju.filter((e) => e.access.kind === "free").map((e) => e.id), Object.fromEntries(Ju.map((e) => [e.id, e.vendor])), Ju.filter((e) => e.planLimits).map((e) => e.id);
})), lS = y((() => {
	cS();
})), uS, dS, fS, pS, mS, hS, gS, _S, vS, yS, bS, xS, SS = y((() => {
	Sp(), J(), uS = (e) => e.map((e) => new RegExp(e.source, `${e.flags}g`)), dS = [
		/\bgit\s+push\b[^|;&]*\s(?:-f\b|--force\b|--force-with-lease\b|--delete\b)/,
		/\bgit\s+reset\b[^|;&]*\s--hard\b/,
		/\bgit\s+clean\b[^|;&]*\s-{1,2}[a-zA-Z]*f/,
		/\bgit\s+branch\b[^|;&]*\s(?:-D\b|--delete\s+--force\b|--force\s+--delete\b)/,
		/\bgit\s+filter-branch\b/
	], fS = [/\{\{secret:[A-Za-z0-9_./-]+\}\}/], pS = String.raw`[\w~$.{}/\\-]*`, mS = [
		/(?<![\w.])\.env(?!\.(?:example|sample|template))(?:\.[\w-]+)?\b/,
		/\.ssh(?!\w)(?!\/(?:known_hosts|config|authorized_keys|environment)(?!\w))(?!\/[\w.-]*\.pub(?!\w))(?:\/[\w.\-/]*)?/,
		/\bid_(?:rsa|dsa|ecdsa|ed25519)\b(?!\.pub\b)/,
		new RegExp(String.raw`${pS}\.aws/credentials\b`),
		new RegExp(String.raw`${pS}\.npmrc(?!\.(?:example|sample|template))\b`),
		new RegExp(String.raw`${pS}\.git-credentials\b`),
		new RegExp(String.raw`${pS}\.credentials\.json\b`)
	], hS = [
		/\b(?:npm|pnpm|yarn|bun)\s+publish\b/,
		/\bcargo\s+publish\b/,
		/\bgh\s+release\s+create\b/,
		/\bdocker\s+push\b/,
		/\btwine\s+upload\b/
	], gS = String.raw`(?:localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\])(?::\d+)?(?=[/?#\s'"\x60]|$)`, _S = [new RegExp(String.raw`\b(?:curl|wget)\b[^|;&]*\bhttps?://(?!${gS})`), new RegExp(String.raw`\bfetch\(\s*['"\x60]https?://(?!${gS})`)], vS = [
		/\bmkfs(?:\.\w+)?\b/,
		/\bwipefs\b/,
		/\bblkdiscard\b/,
		/\bsgdisk\b[^|;&]*\s(?:--zap-all|-Z)\b/,
		/\bdd\b[^|;&]*\bof=(?:\/dev\/|['"`]\/dev\/)/,
		/\bshred\b[^|;&]*\s\/dev\//,
		/>\s*\/dev\/(?:[shv]d[a-z]|nvme\d|disk\d|mmcblk\d)/
	], yS = [
		/\b(?:docker|podman)\s+volume\s+(?:rm|remove|prune)\b/,
		/\b(?:docker|podman)\s+system\s+prune\b/,
		/\b(?:docker(?:\s+compose|-compose)?|podman-compose)\s+down\b[^|;&]*\s(?:-v\b|--volumes\b)/
	], uS(dS), uS(fS), uS(mS), uS(hS), uS(_S), uS(vS), uS(yS), bS = {
		"git.destructive": "rewrite or discard git history",
		"files.destructive": "delete files recursively",
		"system.destructive": "wipe a disk, or delete a whole root directory",
		"container.state": "delete a container volume or the data in it",
		"secrets.access": "read credential material",
		"package.publish": "publish or release a package",
		"network.outbound": "send a request out to the internet"
	}, xS = {
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
})), CS, wS, TS, ES, DS, OS, kS, AS, jS, MS, NS = y((() => {
	U(), SS(), J(), CS = /* @__PURE__ */ new Set(["system.destructive"]), wS = /* @__PURE__ */ new Set([
		"system.destructive",
		"container.state",
		"files.destructive"
	]), TS = (e) => e === "sandbox" ? CS : wS, ES = {
		sandbox: "/ and /history. Not /work, /usr or /etc: the worktree's changes are uncommitted work, and the container comes back from its image.",
		device: "/, a home directory, a Windows drive, and the top-level directories an OS keeps."
	}, DS = (e) => Object.fromEntries(vd.options.map((t) => [t, TS(t).has(e) ? "hard" : "judged"])), OS = (e) => vd.options.filter((t) => e.tiers[t] === "hard").length, yd.options.map((e) => ({
		commandClass: e,
		label: bS[e],
		patterns: xS[e],
		tiers: DS(e),
		...e === "system.destructive" ? { notes: ES } : {}
	})).sort((e, t) => OS(t) - OS(e)), kS = R([
		"off",
		"watch",
		"on"
	]), AS = R([
		"allow",
		"ask",
		"refuse"
	]), F({
		decision: AS.describe("Run it, ask the owner, or refuse it."),
		sentence: j().describe("What this command does and why it was allowed, held or refused, in one plain sentence."),
		policyLine: j().optional().describe("A line the owner could add to their policy so this stops being asked. Shown on the card before it is accepted.")
	}), jS = F({
		at: M().int().describe("When it was judged, epoch milliseconds."),
		program: j().describe("The command or script, excerpted."),
		classes: P(j()).describe("The kinds of consequence triage matched, which is why a judge looked."),
		decision: AS.describe("What the judge decided."),
		sentence: j().describe("The judge's sentence."),
		outcome: R([
			"allowed",
			"asked",
			"refused"
		]).describe("What the gate did in the end."),
		answer: R([
			"allowed",
			"declined",
			"unanswered"
		]).optional().describe("How the owner answered, when they were asked."),
		machine: j().optional().describe("Which connected device it was headed for, when it was not this sandbox.")
	}), MS = F({
		text: j().describe("The policy, as the owner wrote it."),
		custom: N().describe("False when nobody has edited it and this is the text this product ships.")
	});
})), PS, FS, IS, LS, RS, zS, BS, VS, HS, US, WS, GS, KS, qS, JS, YS, XS, ZS, QS, $S, eC, tC, nC, rC, iC, aC, oC, sC, cC, lC, uC, dC, fC, pC, mC, hC, gC, _C, vC = y((() => {
	Sp(), U(), NS(), Vu(), J(), PS = R([
		"intentic",
		"claude",
		"custom"
	]), FS = F({ base: R(["intentic", "claude"]) }), IS = R([
		"off",
		"versions",
		"full"
	]), LS = R([
		"file.edited",
		"turn.ending",
		"push.starting",
		"agent.finished",
		"agent.landed"
	]), RS = R([
		"verify-edits",
		"verify-removals",
		"verify-ui-edits",
		"verify-tests",
		"version-landed"
	]), zS = I("kind", [
		F({
			kind: z("command"),
			command: j().max(500),
			timeoutMs: M().min(6e4).max(36e5).default(9e5)
		}),
		F({
			kind: z("instruct"),
			text: j().min(1).max(4e3)
		}),
		F({
			kind: z("verdict"),
			verdict: R(["allow", "hold"])
		}),
		F({
			kind: z("builtin"),
			name: RS
		})
	]), BS = R([
		"clean",
		"error",
		"conflict",
		"checks-failed"
	]), VS = F({
		repo: j().min(1).optional(),
		paths: P(j().min(1)).max(20).optional(),
		outcome: P(BS).optional(),
		sample: M().gt(0).lt(1).optional()
	}), HS = {
		"file.edited": ["command"],
		"turn.ending": [
			"builtin",
			"instruct",
			"command"
		],
		"push.starting": ["command"],
		"agent.finished": ["verdict"],
		"agent.landed": ["builtin"]
	}, US = {
		"turn.ending": [
			"verify-edits",
			"verify-removals",
			"verify-ui-edits",
			"verify-tests"
		],
		"agent.landed": ["version-landed"]
	}, WS = F({
		id: j().regex(/^[a-z0-9][a-z0-9-]*$/),
		label: j().min(1).max(80),
		moment: LS,
		when: VS.optional(),
		action: zS,
		enabled: N().default(!0)
	}).refine((e) => HS[e.moment].includes(e.action.kind), {
		message: "that action cannot stand at that moment",
		path: ["action"]
	}).refine((e) => e.action.kind !== "builtin" || (US[e.moment] ?? []).includes(e.action.name), {
		message: "that built-in cannot stand at that moment",
		path: ["action"]
	}), GS = L(j(), M()), KS = R([
		"builtin",
		"own",
		"capability",
		"extension",
		"plugin",
		"persona",
		"dropped"
	]), qS = j().regex(/^[a-z0-9][a-z0-9-]*$/, "a skill name is lowercase letters, digits and dashes"), JS = F({
		id: j().describe("Its handle, which reading and deleting take. A skill of your own is simply its name; one belonging to something else is qualified, because two packages may each ship a review."),
		name: j().describe("Its name."),
		description: j().describe("What it is for, which is the line the agent reads to decide whether to reach for it. Empty when the skill declares none, which is worth showing as the blank it is: a skill with no description is rarely picked."),
		origin: KS.describe("Where it came from."),
		owner: j().optional().describe("Who ships it, as the row would name them."),
		enabled: N().describe("Whether the agent can reach it."),
		switchable: N().describe("Whether this surface can switch it. Everything else is on because its extension or its plugin is, and a switch here that silently did nothing would be worse than none, so the row names its owner instead."),
		editable: N().describe("Whether it can be rewritten here. Your own only: editing somebody else's in place would be undone the next time the thing that ships it catches up."),
		removable: N()
	}), YS = P(JS), XS = F({
		id: j().describe("The skill's id, which can carry the owner it came from."),
		name: j().describe("Its name."),
		body: j().describe("The instructions themselves, as written.")
	}), ZS = F({ id: j().min(1).describe("Which skill. It travels in the query rather than the address, because an id can name the owner it came from and that will not fit in a path.") }), QS = F({
		name: qS.describe("What to call it. Saving over an existing name rewrites it, which is also how one is renamed."),
		description: j().min(1).max(1024).describe("What it is for, which is what the agent reads to decide whether to reach for it."),
		body: j().min(1).describe("The skill itself.")
	}), $S = F({ name: qS.describe("Which skill to delete. The stored text and the agent's copy go together, so nothing is left half done.") }), eC = F({
		name: qS.describe("Which skill of your own to switch."),
		on: N().describe("On writes the agent's copy from the stored text; off removes that copy and keeps the text.")
	}), tC = F({
		stableSystemPrompt: N().default(!1).describe("Keep the instructions identical between turns so the provider can cache them, moving anything that varies into the message instead. Cheaper, at the cost of some flexibility."),
		skills: P(j()).default(["lsp", "fileq"]).describe("Which built-in tools are switched on. A skill of your own is not listed here: it is on while the agent's copy of it exists."),
		personaRouting: N().default(!0).describe("Whether a new chat is matched to one of your personas from its first message. The message is read once it is sent, by the model on the persona-routing list, and the chat says in its own transcript what was asked and which persona it landed on. Never applies to unwatched runs, which name their persona themselves."),
		hashlineEdits: N().default(!1).describe("Have the agent edit files by line number rather than by quoting the text it wants replaced. Cheaper on large files, and less forgiving of a stale read."),
		systemPromptMode: PS.default("intentic").describe("Which instructions the agent starts from: intentic's own, the ones the installed Claude Code carries, or your own. The first two both get this product's own guidance added on top; your own gets nothing added, which is the point of it."),
		systemPrompt: j().max(2e4).default("").describe("Your own instructions, used only when the mode above says custom. Then it is the whole of them: both built-in bases go, and so does everything this product would otherwise add, including the guidance the chat's own cards are driven by. That is the price of total control."),
		iqSearch: N().default(!1).describe("Teach the agent how to use this workspace's own search tool, rather than leaving it to grep around."),
		iqSearchHoldout: M().min(0).max(1).default(0).describe("What share of conversations to run without that teaching, so the two can be compared. Whole conversations rather than individual turns, because once the teaching is in a session, withholding it from the next request does not make the model forget it."),
		workspaceMap: N().default(!1).describe("Open every conversation with a map of the project it starts in: what is in it, what each part is for, and where the agent is standing. Worked out fresh each time rather than written down anywhere, because a written layout is wrong within a fortnight. Off by default, since it spends tokens on the first message of every conversation."),
		workspaceMapHoldout: M().min(0).max(1).default(0).describe("What share of conversations to open without the map, so the two can be compared. Whole conversations rather than individual turns, because the map is sent once and stays in the conversation's history afterwards."),
		sidecars: N().default(!1).describe("Keep an up-to-date markdown rendering of every document, image and audio file in the workspace, made in the background as files land, so the agent reads a pre-derived text instead of paying to parse the file mid-task. Costs background CPU on a document-heavy workspace, so it is a switch rather than a default."),
		dependencyFreshness: IS.default("off").describe("Whether a version the agent is about to pin is checked against the package's own registry first. Facts only, or facts plus the name of a maintained replacement where the registry agrees the current choice has been abandoned. It tells the agent and lets it decide rather than refusing, because matching a version your project already uses is usually the right answer and a gate would fight it."),
		outputCleaners: j().default("").describe("Which command outputs to trim before the agent reads them, cutting the noise a build tool prints without cutting what it said."),
		outputHoldout: M().min(0).max(1).default(0).describe("What share of commands to leave untrimmed, so the saving can be measured against a real comparison rather than estimated."),
		modelRoles: hc(zu, P(Td).max(10)).default({}).describe("Which models do which job, one ordered list per job: commit messages, session titles, the safety judge, pipeline fixes, and every other place this sandbox picks a model for you. Tried in order, so one spent account does not take a job down. Nothing is chosen for you: a one-shot job with no list does not run, and a whole session with no list opens on whatever your own chat is set to."),
		changelogRepos: P(j()).max(50).default([]).describe("Which repositories keep a changelog, and so get a user-facing note written alongside each merge. A list rather than a switch, and empty by default, because the commit writer's standing rule is to copy the house style rather than impose one, and a repository that has never written such a note gives it nothing to copy."),
		autoTier: R([
			"off",
			"shadow",
			"on"
		]).default("shadow").describe("Whether an easy-looking turn may run on a cheaper model from the same provider. Three states rather than a switch, because the middle one is the only honest road to the third: it scores every turn and routes nothing, so the guess can become a measurement before it changes anything. It can only ever route down, so the worst case is one turn's quality rather than a bill nobody asked for."),
		autoTierEagerness: R([
			"cautious",
			"balanced",
			"eager"
		]).default("balanced").describe("How readily a turn counts as simple enough for the cheaper model. It moves only the cutoff: at every setting a turn still has to say something positively easy, so nothing here can downgrade a short vague request."),
		autoFastModels: P(j()).max(10).default([]).describe("Which cheaper model a downgraded turn lands on. A list so a sandbox spanning providers can name a rung on each, but not a fallback ladder: an entry naming a different provider than the turn is on is skipped rather than tried, because switching provider retires the conversation and starting over to save a fraction of a penny is not a saving. Empty picks the cheapest the turn's own provider publishes."),
		agentRetentionDays: M().min(0).max(365).default(3).describe("How many days a finished conversation stays on the board before being put away. Zero means never. The one setting here that defaults on, because each card left behind is a real working copy on disk, not just a row."),
		resumeAfterOutage: N().default(!1).describe("Whether a turn killed by the model provider failing is re-run automatically, backing off between attempts. The sandbox-wide default; any one conversation can say otherwise. Off to begin with, because a retry spends your allowance on a turn you sent once and only you can say whether it was worth paying for twice. Worth turning on for a sandbox whose work mostly happens with nobody in the room."),
		resumeAfterLimit: N().default(!1).describe("Whether a turn a spent usage limit refused is sent again by itself once the allowance reopens. The sandbox-wide default; any one conversation can say otherwise. Off to begin with, because the allowance is your budget and a turn that spends it the second it comes back is not a decision to make for you. Worth turning on for a sandbox whose work mostly happens with nobody in the room."),
		moveAfterLimit: N().default(!1).describe("Whether a turn a spent usage limit refused is moved to another connected account of the same provider that still has room, as soon as the refusal lands. The sandbox-wide default; any one conversation can say otherwise. Off to begin with, because it spends a second account on your behalf. With no account that has room the turn waits as the setting above says."),
		limitMoveCarryUnder: M().int().min(0).default(1e5).describe("When a spent usage limit moves a turn to another account, carry the provider session (the model keeps everything, and re-reads all of it once on the other account) while the conversation's context is under this many tokens; at or above it, start a fresh session with the sandbox's measured brief instead. Zero always starts fresh."),
		autoResumeOnRestart: N().default(!1).describe("Whether a turn killed by the sandbox restarting is re-run once it comes back. Off to begin with, for the same reason: it would spend your allowance on work you are not watching and edit files while you are still waiting for the sandbox to return. Either way the interruption is recorded rather than silently lost."),
		adoptedChecks: L(j(), j()).default({}).describe("Which repositories may run the checks they declare for themselves, and exactly which version of those checks you agreed to. A repository's declaration does nothing until it appears here, the same rule git keeps for hooks, which are never cloned; and a declaration that changes afterwards is held until you look at it again."),
		rules: P(WS).max(50).default([]).describe("Standing instructions you give the sandbox about its own work: ask for proof before a turn ends, run something before a push, hold or release finished work. Empty is the default and is exactly the behaviour of a fresh sandbox, because each of those defaults is what no rule matched means at its own moment."),
		automationFailureLimit: M().min(0).max(20).default(0).describe("How many failures in a row before an automation switches itself off. Zero means never, which is the default, because the failure is not always the automation's fault and a job disabled at three in the morning is one nobody re-enables. Only real errors count: a guard deciding there was nothing to do, or the sandbox dying mid-run, say nothing about the automation."),
		admission: bd.prefault({}).describe("Whether work started from outside may run, per kind of trigger: let it, hold it for approval, or refuse it. Composes with each automation's own setting, and the stricter of the two wins, so holding every visitor's message needs no edit to each automation."),
		actionRules: L(j(), _d).default({}).describe("What an agent may do out in the world, per kind of action: go ahead, ask first, or never."),
		commandJudge: kS.default("on").describe("Whether a model reads your safety policy before a flagged command runs. Off judges nothing and asks about nothing; Watch judges everything and records it without ever interrupting you, which is how you find out what your policy actually does before you let it stop anything; On lets the verdict decide. Wiping a disk or deleting under /history asks at every setting — that rule is typed rather than judged, and cannot be turned off."),
		subagentsAtOnce: M().min(1).max(200).default(20).describe("How many subagents may work at the same time."),
		subagentsPerTurn: M().min(1).max(2e3).default(200).describe("How many a single turn may start in total."),
		subagentDepth: M().min(1).max(10).default(3).describe("How many levels deep the delegation may go, since a subagent can start subagents of its own.")
	}), nC = F({
		text: j(),
		version: j()
	}), rC = F({
		id: j(),
		commands: M(),
		savedTokens: M()
	}), iC = F({
		updatedAt: M().optional(),
		commands: M(),
		rawTokens: M(),
		emittedTokens: M(),
		savedPct: M(),
		perCleaner: P(rC),
		holdout: F({
			cleaned: M(),
			heldOut: M(),
			measuredSavedPct: M().optional()
		}),
		gaps: P(F({
			command: j(),
			commands: M(),
			tokens: M()
		}))
	}), aC = F({
		turns: M(),
		mean: M()
	}), oC = F({
		metric: R([
			"searchCalls",
			"openingSearches",
			"openingListings",
			"callsBeforeTarget"
		]),
		on: aC,
		off: aC,
		controlTurnsNeeded: M().optional(),
		marginPct: M().optional(),
		deltaPct: M().optional(),
		saved: M().optional()
	}), sC = F({
		metrics: mc([oC], oC),
		minTurns: M(),
		sampleUnit: R([
			"turns",
			"conversations",
			"opening turns"
		]).optional(),
		cohort: j().optional()
	}), cC = F({
		judged: M(),
		fast: M(),
		atStakeUsd: M(),
		routed: M(),
		routedUsd: M(),
		escalated: M(),
		denied: M()
	}), lC = F({
		prevented: j(),
		chosen: j(),
		reason: j(),
		at: M().optional()
	}), uC = F({
		checked: M(),
		improved: M(),
		recent: P(lC),
		updatedAt: M().optional()
	}), dC = F({
		input: iC,
		search: sC.optional(),
		map: sC.optional(),
		tier: cC.optional(),
		dependencies: uC.optional()
	}), fC = `${bp}/checks.json`, pC = R(["turn", "push"]), mC = F({
		when: pC.describe("When to run it: `turn` before the assistant finishes, `push` before code leaves the machine."),
		run: j().min(1).max(500).describe("The command, run in this repository's own directory, so it reads as it would in a terminal there."),
		label: j().min(1).max(80).optional().describe("What to call it on screen. Absent names it after the command."),
		timeoutMs: M().min(6e4).max(36e5).optional().describe("How long it may take before it is killed and counted as failed."),
		paths: P(j().min(1)).max(20).optional().describe("Only run it when the change touches these paths, written relative to this repository. Absent runs it on every change here.")
	}), F({ checks: P(mC).max(10).default([]) }), hC = F({
		repo: j().describe("Which repository, by its workspace id (\"root\" is the workspace itself)."),
		path: j().describe("Where the declaration lives, relative to the workspace, whether or not the file exists yet."),
		checks: P(mC).describe("What it declares, in the order the file lists them."),
		adopted: N().describe("Whether these are running. False means declared and inert: nothing a repository writes runs until the owner switches it on."),
		changed: N().describe("Whether the declaration changed since it was adopted, which holds it until the owner looks again. True only for a repository that was adopted before."),
		error: j().optional().describe("Why the file could not be read, when it exists but does not parse. The checks list is empty in that case.")
	}), gC = F({ repos: P(hC).describe("Every repository that declares checks, plus any the owner has adopted before, sorted by id.") }), _C = F({
		repo: j().min(1).describe("Which repository's declaration to switch."),
		on: N().describe("On adopts what it declares as it stands now; off stops running it. Adopting again is how a changed declaration is accepted.")
	});
})), yC, bC, xC, SC, CC, wC, TC, EC, DC, OC, kC, AC, jC, MC, NC, PC = y((() => {
	U(), lS(), J(), ld(), vC(), yC = F({
		files: R([
			"none",
			"read",
			"write"
		]).default("write").describe("What it may do with files: nothing, look and search, or also create and change."),
		shell: N().default(!0).describe("Whether it may run commands, and with them the terminals, the test runs and every tool on the image. The switch the strength of the others depends on."),
		code: N().default(!0).describe("Whether it may write and run a script rather than a command line. Its fence is real where the shell's is not: reads and writes follow the files answer, and it can start no other program unless commands are allowed too. The one stated gap is that the fence cannot cut the network."),
		web: N().default(!0).describe("Whether it may fetch a page or run a search."),
		browser: N().default(!0),
		delegate: N().default(!0),
		sandbox: N().default(!0),
		connectors: P(q).max(100).optional(),
		devices: P(q).max(50).optional(),
		mcp: P(q).max(50).optional()
	}), bC = F({
		startIn: j().max(200).optional().describe("Which folder a conversation opens in."),
		folders: P(j().min(1)).max(50).optional().describe("Which folders it may touch at all. Absent means the whole workspace.")
	}), xC = F({ repos: P(j().min(1).max(200)).max(50).describe("Which nested repositories a conversation wearing this card carries, by workspace-relative path. The workspace itself is always carried; empty means the workspace alone.") }), SC = R([
		"map",
		"context",
		"skills",
		"search",
		"delegation",
		"checks",
		"dependencies",
		"repoSync",
		"handoff"
	]), CC = F({ omit: P(SC).max(20).describe("Which of the notes the sandbox prepends to each message a conversation wearing this card does NOT get. Everything not named here is sent as usual; the notes that keep a turn inside its own branch or explain a missing account cannot be named at all.") }), wC = F({
		id: q.describe("The persona's id."),
		label: j().max(60).optional().describe("What to call it on screen. Absent falls back to the id, which somebody chose anyway."),
		capabilities: P(q).max(50).describe("Which connected accounts are its hands. Named individually rather than by site, because two accounts on one site is the whole problem this solves. Naming one that is not connected yet is not an error: it is a card describing an account this sandbox has still to sign into."),
		brief: j().max(200).optional().describe("What this persona is for, in one line. A new chat is routed onto a persona by this sentence, and the Personas page shows it under the name."),
		powers: yC.optional().describe("What a conversation wearing it may do. Absent means the full toolbox, so a card written before this existed behaves exactly as it did."),
		workspace: bC.optional().describe("Where it works. Absent means the whole workspace."),
		context: xC.optional().describe("Which part of the workspace a conversation wearing it carries: the repositories its checkout holds. Absent means every repository."),
		briefing: CC.optional().describe("Which of the notes the sandbox prepends to every message this card's conversations do without. Absent means all of them, which is what a card written before this existed keeps."),
		models: P(Td).max(10).optional().describe("Which models a conversation wearing it runs on, tried in order. Absent means whatever the chat or the job would have run on anyway; a model chosen for the turn itself always wins."),
		systemPromptMode: PS.optional()
	}), TC = F({
		prompt: j().min(1).max(2e4).describe("The message a new chat is about to open with."),
		folder: j().max(200).optional().describe("The workspace folder the chat was opened in, when it was opened in one."),
		paths: P(j().min(1).max(500)).max(50).default([]).describe("Workspace paths the message names: uploads, @-mentions, the editor's own file.")
	}), EC = F({
		persona: q.optional().describe("The card this message belongs to, or absent when none does and the chat should stay open to everything."),
		reason: j().describe("Why, in the one line a chat can show. Present whether or not a card was named."),
		model: j().optional().describe("Which model answered, as `provider:model`, so the chat can name what the reading cost. Absent when no model was asked at all, which a folder match and an empty persona list both are.")
	}), DC = F({ id: q.describe("Which persona.") }), OC = F({
		personas: P(wC).describe("The characters an agent can wear."),
		connected: P(j()).describe("Which accounts are actually connected right now, so a persona naming one that has since been disconnected can be shown as broken rather than as working.")
	}), kC = F({
		prompt: j().describe("What this persona is told, on top of everything else. Empty means it simply follows the sandbox's own instructions."),
		skills: P(F({
			name: j().describe("The skill's name."),
			description: j().describe("What it is for.")
		})).describe("Skills only this persona's conversations can reach. A different question from what the agent knows generally, with a different answer.")
	}), AC = DC.extend({ prompt: j().max(2e4).describe("What to tell this persona. Sending an empty one removes it entirely rather than storing a blank, so the persona falls back to the sandbox's own instructions.") }), jC = DC.extend(QS.shape), MC = DC.extend({ name: qS.describe("Which skill.") }), NC = F({
		name: j().describe("The skill's name."),
		description: j().describe("What it is for."),
		body: j().describe("The skill itself, in full.")
	});
})), FC, IC = y((() => {
	K(), PC(), Z(), FC = {
		list: G.route({
			method: "GET",
			path: "/personas",
			summary: "The characters an agent can wear",
			description: "Each persona with the connected accounts it speaks for, what a conversation wearing it is allowed to do, and where it works."
		}).output(OC),
		save: G.route({
			method: "POST",
			path: "/personas",
			summary: "Create or edit a persona",
			description: "Writes the whole card; sending an id that exists edits it. Nothing is connected, installed or spent by saving one, because a persona only records a decision about accounts that already exist. It is stored as a file you can equally well edit by hand, which is why this writes the card whole rather than patching a field: a round trip through a screen should leave a change a reviewer recognises."
		}).input(wC).output(Y),
		remove: G.route({
			method: "DELETE",
			path: "/personas/{id}",
			summary: "Delete a persona",
			description: "Takes away the character, never the accounts: every login it named stays connected. Its own prompt and skills go with it, since a folder nothing can reach is worse than deleting what somebody just asked to delete. Anything still pointed at it goes quiet rather than falling back to speaking as everyone."
		}).input(DC).output(Y),
		route: G.route({
			method: "POST",
			path: "/personas/route",
			summary: "Which persona a new chat belongs to",
			description: "Reads the message a chat has just been sent, and one line per persona, and names the card it belongs to, or none, along with the model that answered. Costs one small model call on the persona-routing list, and says so. Nothing is applied here: the chat that asked puts the card on, and only when the persona routing setting is on."
		}).input(TC).output(EC),
		kit: G.route({
			method: "GET",
			path: "/personas/{id}/kit",
			summary: "What one persona carries",
			description: "The instructions this persona is given and the skills only its conversations can reach. A different question from what the agent knows generally, with a different answer."
		}).input(DC).output(kC),
		savePrompt: G.route({
			method: "POST",
			path: "/personas/{id}/prompt",
			summary: "Write a persona's instructions",
			description: "Sets what this persona is told. Saving an empty one removes it entirely rather than storing a blank, so the persona simply falls back to the sandbox's own instructions."
		}).input(AC).output(Y),
		readSkill: G.route({
			method: "GET",
			path: "/personas/{id}/skills/read",
			summary: "Read one of a persona's skills",
			description: "The full text of a single skill belonging to this persona."
		}).input(MC).output(NC),
		saveSkill: G.route({
			method: "POST",
			path: "/personas/{id}/skills",
			summary: "Write one of a persona's skills",
			description: "Creates or replaces a skill by name. There is nothing to switch on: a persona's skill is available exactly when that persona is worn, which is what belonging to it has to mean."
		}).input(jC).output(Y),
		removeSkill: G.route({
			method: "POST",
			path: "/personas/{id}/skills/remove",
			summary: "Delete one of a persona's skills",
			description: "Removes a single skill from this persona and leaves the rest of its kit alone."
		}).input(MC).output(Y)
	};
})), LC, RC, zC, BC, VC, HC, UC, WC, GC, KC, qC, JC, YC, XC, ZC, QC, $C, ew, tw, Q, nw, rw, iw, aw, ow, sw, cw, lw, uw, dw, fw, pw = y((() => {
	U(), ld(), Z(), j_(), LC = j().regex(/^[0-9a-f]{4,64}$/), RC = F({
		sha: j().describe("The commit, in full."),
		short: j().describe("The abbreviated form, for showing."),
		parents: P(j()).describe("What it came from. None means the first commit, one is ordinary, two or more is a merge, which is what a graph draws its lanes from."),
		subject: j().describe("Its first line."),
		body: j().describe("Everything after that."),
		author: j().describe("Who wrote it."),
		email: j().describe("Their address."),
		at: M().describe("When they wrote it, in milliseconds."),
		refs: P(j()).describe("Branches and tags sitting on it."),
		head: N().describe("Whether this is where the repository currently stands.")
	}), zC = F({
		repo: j().describe("Which repository."),
		branch: j().optional().describe("Which branch these are from."),
		commits: P(RC).describe("The commits, newest first."),
		hasMore: N().describe("There are older ones behind this page. It is also what stops the last row being drawn as the beginning of history, which is how a truncated log used to claim it started where the page happened to stop.")
	}), BC = X.extend({
		limit: H().int().positive().max(2e3).optional().describe("How many commits to return."),
		skip: H().int().nonnegative().max(1e6).optional().describe("How many newer commits to step over, which is how you page further back. Paged rather than read whole, because a large repository's history is tens of thousands of rows.")
	}), VC = F({ repos: P(j()).describe("Every repository's id. The workspace itself is always present as \"root\".") }), HC = F({
		repo: j().describe("The workspace repository."),
		host: j().describe("Which forge its remote points at."),
		project: j().describe("Which project there, as owner and name.")
	}), UC = F({ repos: P(HC).describe("Each repository matched to the project its remote points at.") }), WC = X.extend({
		path: j().min(1).describe("Which file, relative to the repository."),
		content: j().describe("Its whole new contents."),
		message: j().min(1).describe("The commit message.")
	}), GC = F({
		ok: N().describe("Whether the whole thing went through."),
		wrote: N().describe("The file was written."),
		committed: N().describe("The commit was recorded."),
		pushed: N().describe("It reached the remote."),
		branch: j().optional().describe("Which branch it happened on."),
		defaultBranch: j().optional().describe("Which branch the repository considers its main one, so a caller can see it was on a side branch."),
		reason: j().optional().describe("Why it stopped where it did. Being on a side branch, having no remote and having no credentials are all reported here rather than raised.")
	}), KC = X.extend({ sha: LC.describe("Which commit.") }), qC = F({ files: P(l_).describe("Which files it touched, with counts but not contents. Fetch any one file's contents separately, so a commit with a thousand files stays one cheap answer.") }), JC = X.extend({
		sha: LC.describe("Which commit."),
		path: j().min(1).describe("Which file in it.")
	}), YC = X.extend({
		sha: LC.describe("Which commit to start it at."),
		name: sd.describe("The new branch's name.")
	}), XC = X.extend({
		sha: LC.describe("Which commit to tag."),
		name: sd.describe("The tag's name.")
	}), ZC = X.extend({ ref: sd.describe("Where to switch to: a branch, a tag, or a commit.") }), QC = X.extend({
		name: sd.describe("Which tag."),
		remote: sd.optional().describe("Also delete it there. Leave it out to remove it locally only.")
	}), $C = X.extend({
		name: sd.describe("Which tag."),
		remote: sd.describe("Which remote to send it to.")
	}), ew = X.extend({
		sha: LC.describe("Which commit to move the branch to."),
		mode: R([
			"soft",
			"mixed",
			"hard"
		]).describe("How much to take with it: move the branch alone, also unstage, or also throw away what is on disk. The last one takes a checkpoint first.")
	}), tw = X.extend({ sha: LC.describe("Which commit to act on.") }), Q = F({
		ok: N().describe("Whether it worked."),
		reason: j().optional().describe("Why not, in git's own words. A conflict, a missing remote and missing credentials are all reported here rather than raised, because they are things a screen has to render rather than breakages.")
	}), nw = F({
		ref: j().describe("How to address it, which applying and dropping take."),
		sha: j().describe("The commit behind it, because a stash entry is a commit."),
		short: j().describe("The abbreviated form, for showing."),
		subject: j().describe("What it was set aside as, with git's own scaffolding stripped off."),
		branch: j().optional().describe("Which branch it was set aside from."),
		at: M().describe("When, in milliseconds."),
		parents: P(j()).describe("What it sits on, so a graph can draw it like any other commit.")
	}), rw = F({
		repo: j().describe("Which repository."),
		stashes: P(nw).describe("What is set aside, newest first.")
	}), iw = j().regex(/^stash@\{\d{1,4}\}$/), aw = X.extend({
		message: j().max(500).optional().describe("What to call it, so you know what it was later."),
		includeUntracked: N().optional().describe("Also set aside files git is not yet tracking, which are otherwise left where they are.")
	}), ow = X.extend({
		ref: iw.describe("Which entry."),
		pop: N().optional().describe("Remove it from the stash once it has been applied cleanly.")
	}), sw = X.extend({ ref: iw.describe("Which entry.") }), cw = X.extend({ ref: iw.describe("Which entry.") }), lw = R([
		"commit",
		"amend",
		"merge",
		"rebase",
		"cherry-pick",
		"revert",
		"reset",
		"pull",
		"other"
	]), uw = F({
		kind: lw.describe("What the last action was."),
		description: j().describe("What undoing it would do, in words."),
		branch: j().describe("Which branch would move."),
		sha: j().describe("Where it stands now."),
		previousSha: j().describe("Where it would go back to. Send this with the undo as proof you looked, so one prepared against a view that has since moved is refused rather than landing somewhere unexamined."),
		changesWorkingTree: N().describe("Undoing would rewrite files as well as moving the branch, so anything offering it should warn about losing work.")
	}), dw = F({
		repo: j().describe("Which repository."),
		action: uw.optional().describe("What undoing would reverse. Absent means there is nothing to go back from.")
	}), fw = X.extend({
		previousSha: LC.describe("Where to go back to, from the matching read. It is also proof you looked: one prepared against a stale view is refused."),
		discardChanges: N().optional().describe("Also rewrite the files, rather than only moving the branch.")
	});
})), mw, hw = y((() => {
	K(), j_(), pw(), Bh(), Z(), mw = {
		changes: G.route({
			method: "GET",
			path: "/git/changes",
			summary: "Uncommitted work across every repo",
			description: "The workspace's whole review set in one answer: every repo that has something uncommitted, and within it every changed file with its status and line counts. This is what the Changes panel draws, and it is the call to make when you want to know whether a workspace is clean without walking the repos yourself."
		}).output(b_),
		repos: G.route({
			method: "GET",
			path: "/git/repos",
			summary: "Every git repo in the workspace",
			description: "The repos the daemon found under the workspace root, each with the id every other call in this group expects as its `{repo}` segment. The workspace root itself is always present as `root`."
		}).output(VC),
		remoteRepos: G.route({
			method: "GET",
			path: "/git/remote-repos",
			summary: "Repos matched to their remotes",
			description: "The same repo list, but with the forge host and `owner/name` each one's remote points at. Use it to recognise a workspace repo in a list of names that came from somewhere else, such as a set of pull requests. Costs a remote lookup per repo, which is why it is separate from the plain repo list."
		}).output(UC),
		log: G.route({
			method: "GET",
			path: "/git/{repo}/log",
			summary: "Commit history for one repo",
			description: "A page of commits on the current branch, newest first, each with its author, subject, timestamp and the refs pointing at it. Paginate with the cursor the answer hands back rather than by offset, so a commit landing mid-scroll does not shift the page under you."
		}).input(BC).output(zC),
		commitDiff: G.route({
			method: "GET",
			path: "/git/{repo}/commit-diff",
			summary: "What one commit changed",
			description: "The list of files a single commit touched, with per-file status and line counts but not the content. Fetch the content of any one of them with the commit file diff call, so a commit with a thousand files stays one cheap answer."
		}).input(KC).output(qC),
		commitFileDiff: G.route({
			method: "GET",
			path: "/git/{repo}/commit-file-diff",
			summary: "One file's before and after at a commit",
			description: "Both sides of a single file as of one commit: the content its parent had and the content that commit left. The daemon returns whole sides rather than a patch, so a caller can render the comparison however it likes."
		}).input(JC).output(zh),
		operation: G.route({
			method: "GET",
			path: "/git/{repo}/operation",
			summary: "Whether a merge or rebase is halted mid-flight",
			description: "Names the git operation the worktree is stuck inside, if any: a conflicted merge, an interrupted rebase, a half-applied cherry-pick. Check this first when another call refuses, because a halted worktree is the usual reason and the abort call is the way out."
		}).input(X).output(__),
		abort: G.route({
			method: "POST",
			path: "/git/{repo}/abort",
			summary: "Abandon a halted merge or rebase",
			description: "Runs git's own abort for whichever operation has the worktree halted, putting the repo back where it stood before the operation started. Nothing else clears that state."
		}).input(X).output(Q),
		undoable: G.route({
			method: "GET",
			path: "/git/{repo}/undo",
			summary: "What undoing the last action would do",
			description: "Reads the branch's reflog to describe the move that undo would reverse, and hands back the commit it would land on. Pass that commit to the undo call as proof you looked, and an undo prepared against a view that has since moved is refused rather than landing somewhere unexamined."
		}).input(X).output(dw),
		undo: G.route({
			method: "POST",
			path: "/git/{repo}/undo",
			summary: "Move the branch back one step",
			description: "Walks the current branch back to where it pointed before its last action. This moves the branch ref and leaves the working tree alone, which is the opposite of restoring a checkpoint. Requires the commit the matching read handed you."
		}).input(fw).output(Q),
		stashes: G.route({
			method: "GET",
			path: "/git/{repo}/stashes",
			summary: "Everything set aside in the stash",
			description: "The repo's stash entries, newest first, each with the message and the commit behind it. A stash entry is a commit, so it reads the same way a log entry does and its contents come back from the stash diff call."
		}).input(X).output(rw),
		stashDiff: G.route({
			method: "GET",
			path: "/git/{repo}/stash-diff",
			summary: "What one stash entry holds",
			description: "The files a single stash entry would bring back, with per-file status and line counts. The same shape a commit diff has, because a stash entry is a commit."
		}).input(cw).output(qC),
		stashPush: G.route({
			method: "POST",
			path: "/git/{repo}/stash",
			summary: "Set the current changes aside",
			description: "Moves the working tree's changes onto the stash and leaves a clean tree behind. Nothing is lost: the entry is a commit you can inspect, apply or drop afterwards."
		}).input(aw).output(Q),
		stashApply: G.route({
			method: "POST",
			path: "/git/{repo}/stash/apply",
			summary: "Bring a stash entry back",
			description: "Replays one stash entry onto the working tree. A conflict is reported in the answer rather than raised as a failure, because a conflicting apply is an ordinary outcome a screen has to render."
		}).input(ow).output(Q),
		stashDrop: G.route({
			method: "POST",
			path: "/git/{repo}/stash/drop",
			summary: "Discard a stash entry",
			description: "Deletes one stash entry. This is the only unrecoverable call in the stash set, so the daemon takes a checkpoint of the workspace first."
		}).input(sw).output(Y),
		createBranch: G.route({
			method: "POST",
			path: "/git/{repo}/branch",
			summary: "Start a branch at a commit",
			description: "Points a new branch name at any commit, without moving HEAD. Use the checkout call if you also want to switch to it."
		}).input(YC).output(Y),
		createTag: G.route({
			method: "POST",
			path: "/git/{repo}/tag",
			summary: "Tag a commit",
			description: "Puts a tag on any commit. Local only: pushing it to the remote is a separate call."
		}).input(XC).output(Y),
		deleteTag: G.route({
			method: "POST",
			path: "/git/{repo}/tag/delete",
			summary: "Remove a tag",
			description: "Deletes a tag locally. A tag already pushed stays on the remote until it is deleted there too."
		}).input(QC).output(Y),
		pushTag: G.route({
			method: "POST",
			path: "/git/{repo}/tag/push",
			summary: "Send a tag to the remote",
			description: "Pushes one tag to the repo's remote. Reports the outcome rather than failing, since a missing remote or missing credentials are ordinary answers here."
		}).input($C).output(Q),
		checkout: G.route({
			method: "POST",
			path: "/git/{repo}/checkout",
			summary: "Switch to a branch or commit",
			description: "Moves HEAD to a branch, tag or commit and reshapes the working tree to match. The daemon takes a checkpoint first, so an unexpected result is recoverable. Uncommitted work that would be overwritten is reported instead of being trampled."
		}).input(ZC).output(Q),
		cherryPick: G.route({
			method: "POST",
			path: "/git/{repo}/cherry-pick",
			summary: "Replay one commit onto this branch",
			description: "Applies a single commit's changes on top of the current branch as a new commit. A conflict comes back in the answer, with the halted state readable from the operation call."
		}).input(tw).output(Q),
		revert: G.route({
			method: "POST",
			path: "/git/{repo}/revert",
			summary: "Undo a commit with a new commit",
			description: "Adds a commit that reverses an earlier one, leaving the history intact. This is the safe way to take something back on a branch other people have pulled."
		}).input(tw).output(Q),
		drop: G.route({
			method: "POST",
			path: "/git/{repo}/drop",
			summary: "Remove a commit from history",
			description: "Rewrites the branch so one commit is no longer in it. History changes, so this is for branches nobody else has pulled. A checkpoint is taken first."
		}).input(tw).output(Q),
		merge: G.route({
			method: "POST",
			path: "/git/{repo}/merge",
			summary: "Merge another branch in",
			description: "Merges a branch or commit into the current one. Conflicts are reported in the answer and leave the worktree halted, which the operation call explains and the abort call clears."
		}).input(tw).output(Q),
		rebase: G.route({
			method: "POST",
			path: "/git/{repo}/rebase",
			summary: "Replay this branch onto another",
			description: "Moves the current branch's commits on top of a different base. History changes. Conflicts halt the rebase and are reported rather than raised, so the operation and abort calls are the way through."
		}).input(tw).output(Q),
		reset: G.route({
			method: "POST",
			path: "/git/{repo}/reset",
			summary: "Move the branch to a commit",
			description: "Repoints the current branch at another commit, optionally reshaping the working tree to match. The destructive modes take a checkpoint first."
		}).input(ew).output(Q),
		fileDiff: G.route({
			method: "GET",
			path: "/git/{repo}/file-diff",
			summary: "One file's committed and working copies",
			description: "Both sides of a file as it stands right now: what the last commit holds and what is on disk. This is what a review pane shows for an uncommitted change."
		}).input(a_).output(zh),
		status: G.route({
			method: "GET",
			path: "/git/{repo}/status",
			summary: "One repo's branch and pending changes",
			description: "The current branch, its sync position against the remote, and every staged, unstaged and untracked path. The single-repo counterpart to the workspace-wide changes call."
		}).input(X).output(o_),
		commit: G.route({
			method: "POST",
			path: "/git/{repo}/commit",
			summary: "Commit the pending changes",
			description: "Records a commit with your message. It commits whatever is staged; add `stage` to stage something first — an empty object for everything pending, or a scope such as one side or one conversation's landed files. The answer carries the commit it created."
		}).input(Zg).output(x_),
		discard: G.route({
			method: "POST",
			path: "/git/{repo}/discard",
			summary: "Throw away pending changes",
			description: "Restores files to their committed state and deletes untracked ones. Name paths or a scope to narrow it; with neither it throws away every uncommitted change in the repository. The daemon checkpoints the workspace first, so this is recoverable from the timeline."
		}).input(Qg).output(Y),
		stage: G.route({
			method: "POST",
			path: "/git/{repo}/stage",
			summary: "Mark changes for the next commit",
			description: "Adds changes to the index: exactly the paths you name, everything a scope describes, or the whole repository when you name neither. Nothing on disk changes, so this is always safe and always reversible with the unstage call."
		}).input($g).output(Y),
		unstage: G.route({
			method: "POST",
			path: "/git/{repo}/unstage",
			summary: "Take changes back out of the next commit",
			description: "Removes changes from the index and leaves the files themselves untouched, on the same terms as staging. The exact reverse of it."
		}).input($g).output(Y),
		branches: G.route({
			method: "GET",
			path: "/git/{repo}/branches",
			summary: "Local branches and how far each has drifted",
			description: "Every local branch with how many commits it sits ahead of and behind its remote counterpart, so a branch switcher can show sync state without a call per branch."
		}).input(X).output(p_),
		createBranchAt: G.route({
			method: "POST",
			path: "/git/{repo}/branches",
			summary: "Create a branch from a starting point",
			description: "Makes a branch at a named start point and optionally switches to it. The branch-switcher counterpart to creating a branch at a specific commit."
		}).input(m_).output(Y),
		deleteBranch: G.route({
			method: "POST",
			path: "/git/{repo}/branches/delete",
			summary: "Delete a local branch",
			description: "Removes a branch from the repo. Unmerged work is refused unless you ask for it to be forced, and the remote branch is untouched either way."
		}).input(h_).output(Y),
		remote: G.route({
			method: "GET",
			path: "/git/{repo}/remote",
			summary: "Sync position against the remote",
			description: "How far the current branch sits ahead of and behind its remote, as of the last fetch, plus whether a remote and working credentials exist at all. This is a read of what the daemon already knows, not a network call, which is why fetching is a separate button."
		}).input(X).output(u_),
		fetch: G.route({
			method: "POST",
			path: "/git/{repo}/fetch",
			summary: "Refresh what the remote holds",
			description: "Contacts the remote and updates the daemon's picture of it without touching your branch. Run this before trusting the sync position."
		}).input(X).output(Q),
		pull: G.route({
			method: "POST",
			path: "/git/{repo}/pull",
			summary: "Bring remote commits down",
			description: "Fetches and integrates the remote's commits into the current branch. A pull that cannot fast-forward is reported in the answer rather than raised, because that is an ordinary thing to be told."
		}).input(X).output(Q),
		push: G.route({
			method: "POST",
			path: "/git/{repo}/push",
			summary: "Start sending commits to the remote",
			description: "Starts pushing the current branch, setting its upstream on first push, and answers at once: the push runs in a real terminal (it runs this repository's pre-push hook, which can be a whole suite), so watch it there and poll pushState for the verdict. A second start while one is going joins it rather than pushing twice."
		}).input(e_).output(Y),
		pushState: G.route({
			method: "GET",
			path: "/git/{repo}/push",
			summary: "How the push is going",
			description: "The verdict, or the progress so far: where it is, the terminal it runs in, and for a push that did not go, git's last words and who refused it, the repository's own pre-push hook, the remote, or the transport. Idle when nothing has been started for this repository."
		}).input(X).output(n_),
		pushCancel: G.route({
			method: "POST",
			path: "/git/{repo}/push/cancel",
			summary: "Stop the push",
			description: "Kills the run. It settles as cancelled; nothing that git had not already sent reaches the remote."
		}).input(X).output(Y),
		files: G.route({
			method: "GET",
			path: "/git/{repo}/files",
			summary: "Every tracked path in the repo",
			description: "The flat list of files git tracks, which is what a file picker or a search box wants. Ignored and untracked files are not in it."
		}).input(X).output(s_),
		readFile: G.route({
			method: "GET",
			path: "/git/{repo}/file",
			summary: "Read a file from the repo",
			description: "The contents of one file as it stands on disk. A path that climbs out of the repo is refused."
		}).input(r_).output(c_),
		writeFile: G.route({
			method: "PUT",
			path: "/git/{repo}/file",
			summary: "Write a file into the repo",
			description: "Replaces one file's contents, creating it and its parent folders if they are missing. Nothing is committed: the change shows up as pending work."
		}).input(i_).output(Y),
		publishFile: G.route({
			method: "POST",
			path: "/git/{repo}/publish-file",
			summary: "Write, commit and push one file",
			description: "The three steps as a single call with a single answer, committing only the path you named and leaving any other pending work alone. Being on a side branch, having no remote and having no credentials are all reported rather than raised."
		}).input(WC).output(GC)
	};
})), gw, _w = y((() => {
	K(), Bh(), Z(), gw = {
		list: G.route({
			method: "GET",
			path: "/history/snapshots",
			summary: "Points you can go back to",
			description: "The saved states of the whole workspace, taken automatically as work happens. This is the timeline behind undoing a change that was never committed."
		}).output(jh),
		diff: G.route({
			method: "GET",
			path: "/history/diff",
			summary: "What changed since a saved point",
			description: "The files that differ between one saved point and the one before it, taking in everything that happened in between."
		}).input(Ph).output(Ih),
		fileDiff: G.route({
			method: "GET",
			path: "/history/file-diff",
			summary: "One file's before and after across a saved point",
			description: "Both sides of a single file at one point in the timeline."
		}).input(Lh).output(zh),
		restore: G.route({
			method: "POST",
			path: "/history/restore",
			summary: "Put the workspace back",
			description: "Returns every file to how it stood at a saved point. This restores the files; moving a branch is a different thing and lives with the git calls."
		}).input(Ph).output(Y)
	};
})), vw, yw = y((() => {
	U(), vw = F({ args: P(j()) });
})), bw, xw = y((() => {
	K(), zv(), yw(), Z(), bw = {
		run: G.route({
			method: "POST",
			path: "/intentic",
			summary: "Run an infrastructure command",
			description: "Runs the sandbox's own command-line tool and streams its output as it arrives, so progress is visible rather than arriving all at once at the end. A failure surfaces once the stream closes."
		}).input(vw).output(W(Sv)),
		apply: G.route({
			method: "POST",
			path: "/intentic/apply",
			summary: "Bring the infrastructure into line",
			description: "Starts the long reconcile that makes the running world match what was declared, and answers immediately. It takes minutes, so it runs in a terminal you attach to rather than on a held-open request."
		}).output(Y),
		applyEvents: G.route({
			method: "GET",
			path: "/intentic/apply/events",
			summary: "Follow the reconcile",
			description: "The same progress the terminal shows, as structured events, kept on disk so a page refresh does not lose it. It replays from the start of the run and then follows live, closing when the run ends."
		}).output(W(Sv))
	};
})), Sw, Cw = y((() => {
	K(), py(), Sw = {
		list: G.route({
			method: "GET",
			path: "/inventory",
			summary: "Machines and services you have declared",
			description: "What the deployment configuration says this setup owns and what it wants provisioned."
		}).output(fy),
		add: G.route({
			method: "POST",
			path: "/inventory",
			summary: "Declare a machine or service",
			description: "Writes the entry into the configuration file and commits it, exactly as an agent editing that file by hand would. Answers with the whole updated list, so a screen redraws from one response."
		}).input(uy).output(fy),
		remove: G.route({
			method: "DELETE",
			path: "/inventory/{name}",
			summary: "Undeclare a machine or service",
			description: "Takes the entry back out of the configuration and commits that too. Answers with the whole updated list."
		}).input(dy).output(fy)
	};
})), ww, Tw = y((() => {
	K(), og(), Z(), ww = {
		list: G.route({
			method: "GET",
			path: "/issues",
			summary: "Bugs your users have reported",
			description: "Everything that has crashed or been written in, grouped so a crash that hit a thousand people is one row with a count."
		}).output($h),
		status: G.route({
			method: "POST",
			path: "/issues/{id}/status",
			summary: "File one away, or reopen it",
			description: "Moves one issue between open, resolved and ignored. Resolving does not close anything upstream: it is your own inbox."
		}).input(tg).output(Y),
		investigate: G.route({
			method: "POST",
			path: "/issues/{id}/investigate",
			summary: "Put an agent on it now",
			description: "Starts a turn on this issue with the crash, its stack and what led up to it as the brief. Answers straight away and runs detached; the issue goes to 'being looked at'."
		}).input(eg).output(Y),
		remove: G.route({
			method: "DELETE",
			path: "/issues/{id}",
			summary: "Throw one away",
			description: "Forgets an issue entirely. It will come back as new if it happens again, which is usually what you want."
		}).input(eg).output(Y),
		installs: G.route({
			method: "GET",
			path: "/issues/installs/{automationId}",
			summary: "Which sites have loaded the reporter",
			description: "The sites whose pages actually loaded this intake's script, and the ones that were turned away. The answer to 'did the snippet land?', which an empty inbox cannot give you."
		}).input(ag).output(ig)
	};
})), Ew, Dw, Ow, kw, Aw, jw, Mw, Nw, Pw = y((() => {
	U(), Ew = F({
		name: j().describe("Its name, which is what the read route takes."),
		sizeBytes: M().describe("Size in bytes."),
		modifiedAt: M().describe("When it last changed, in milliseconds.")
	}), Dw = F({ files: P(Ew).describe("Every log the sandbox keeps: captured terminal output, command runs, and its own log.") }), Ow = F({
		name: j().min(1).describe("Which log. It travels in the query rather than the address, because log names contain slashes."),
		bytes: H().min(1).max(1048576).default(65536).describe("How much of the end to read. The newest bytes win when the file is larger.")
	}), kw = F({
		name: j().describe("Which log this is from."),
		sizeBytes: M().describe("How large the whole file is."),
		text: j().describe("The end of it, as text."),
		truncated: N().describe("There is more before what you got.")
	}), Aw = F({
		seenAt: M().describe("When the browser saw it, in milliseconds."),
		level: R(["warn", "error"]).describe("How bad it was."),
		event: j().min(1).max(100).describe("What kind of thing it was, as a stable name."),
		message: j().max(2e3).describe("What it said."),
		route: j().max(300).optional().describe("Which page they were on."),
		requestId: j().max(100).optional().describe("Which daemon call it belonged to, when it belonged to one."),
		build: j().max(100).optional().describe("Which build of the app was running."),
		fields: L(j().max(60), fc([
			j().max(4e3),
			M(),
			N()
		])).optional().describe("Whatever else was worth keeping.")
	}), jw = F({ events: P(Aw).min(1).max(50).describe("What the browser has to report, oldest first.") }), Mw = F({ recorded: M().describe("How many were written down.") }), Nw = F({
		clientId: j().describe("This connection's own id, the same one it gave the event stream."),
		idle: N().describe("Whether the person has stopped doing anything."),
		view: j().optional().describe("Which view they are on."),
		sessionId: j().optional().describe("Which conversation they have open."),
		path: j().optional().describe("Which file they are looking at. Sent whole rather than merged: leaving a field out clears it, so a tab that closes a file drops the path in the same report.")
	});
})), Fw, Iw = y((() => {
	K(), Pw(), Fw = {
		list: G.route({
			method: "GET",
			path: "/logs",
			summary: "Logs the sandbox keeps",
			description: "Every log file the daemon owns: captured terminal output, command runs, and the daemon's own log. Read-only, because only the sandbox writes them."
		}).output(Dw),
		read: G.route({
			method: "GET",
			path: "/logs/file",
			summary: "Read part of a log",
			description: "A window of one log file's text. A window rather than the whole thing, because a busy log outgrows any single answer."
		}).input(Ow).output(kw),
		report: G.route({
			method: "POST",
			path: "/logs/client",
			summary: "Report what the browser saw",
			description: "Errors the app caught, stalls it measured, and recoveries it performed, written to a log of their own. The browser is the only witness to these, so without it a bug someone hit in their own browser leaves no record at all."
		}).input(jw).output(Mw)
	};
})), Lw, Rw = y((() => {
	K(), Up(), Z(), Lw = {
		list: G.route({
			method: "GET",
			path: "/loops",
			summary: "Every loop that has run",
			description: "The loops this workspace has run, newest first, kept after they end. Why it stopped on the fourth round is the question a loop gets read for, and the round-by-round history is the answer."
		}).output(Lp),
		start: G.route({
			method: "POST",
			path: "/loops",
			summary: "Run a conversation until it is done",
			description: "Starts repeating a conversation towards a goal and answers straight away with the loop as recorded; the work carries on without you. The conversation need not exist yet, so run this until it passes can be the first thing you ever say to a new agent. A conversation already looping is refused."
		}).input(Np).output(Ip),
		stop: G.route({
			method: "POST",
			path: "/loops/{conversationId}/stop",
			summary: "Make this round the last",
			description: "Means do not start another round, not stop what is running. Somebody watching the sixth round do good work can say this is the last one without throwing that work away. To cut the current round off as well, stop the conversation too."
		}).input(Rp).output(Y),
		designs: G.route({
			method: "GET",
			path: "/loops/designs",
			summary: "Saved loop designs",
			description: "Loops somebody authored once and can point at a different job each time. A saved loop is the same loop with its goal left blank until you type one, not a different feature."
		}).output(Bp),
		saveDesign: G.route({
			method: "POST",
			path: "/loops/designs",
			summary: "Create or replace a saved loop",
			description: "Say which of the two you mean, so a name that happens to collide cannot silently overwrite somebody's work. A design that could never finish, with nothing to produce and nothing to check, is refused in the same words an ad-hoc loop would be: catching that at save time is the whole advantage of saving."
		}).input(Vp).output(zp),
		removeDesign: G.route({
			method: "DELETE",
			path: "/loops/designs/{id}",
			summary: "Delete a saved loop",
			description: "Removes the design. A loop already running from it keeps going on its own terms, because it took a copy of what it needed when it started."
		}).input(Hp).output(Y)
	};
})), zw, Bw, Vw, Hw, Uw = y((() => {
	U(), zw = R([
		"launching",
		"installing",
		"starting",
		"exited"
	]), Bw = F({
		repo: j().describe("Which repository."),
		hasPanel: N().describe("Whether it has anything runnable at all."),
		running: N().describe("Whether the sandbox has it running."),
		installed: N().describe("Whether its dependencies are installed, which is what decides whether a start takes seconds or an install first."),
		launch: zw.optional().describe("Where a start the sandbox is running has got to: its shell coming up, installing, its dev command running with nothing listening yet, or exited back to a prompt. Absent when nothing is starting and once it serves."),
		healthy: N().describe("Whether anything it owns is actually answering. A different question: a server still installing is running and not yet healthy, and one somebody started by hand is healthy without the sandbox running it."),
		port: M().optional().describe("The port the sandbox told it to use. What it actually bound is below, and for a repository that pins its own ports those are different numbers."),
		servers: P(F({
			port: M().describe("The port it is listening on, which is what forwarding it takes."),
			url: j().describe("Where it answers, with the right scheme: a server on its own certificate is served over https."),
			dir: j().optional().describe("Which part of the repository it belongs to, which for a repository whose dev command fans out is the only thing telling them apart."),
			session: j().optional().describe("The terminal it runs in: the sandbox's when it started it, yours when you did, and absent when nothing here owns it, which is the case worth designing for.")
		})).describe("Every server this repository is really serving, found by looking at what is listening. Empty when nothing answers."),
		previewUrl: j().optional().describe("Where to open it from outside, present only while that address really serves it. Absent on a sandbox with no outside address."),
		role: R([
			"intent",
			"desired-state",
			"app"
		]).optional().describe("Which of the workspace's three fixed roles this repository fills. Absent for one that was simply cloned in."),
		deployConfig: N().describe("It declares infrastructure."),
		desiredState: N().describe("That declaration has been resolved at least once."),
		directoryUi: N().describe("It carries a small interface of its own."),
		monorepo: N().describe("It holds several packages."),
		vitest: N().describe("It has tests that can be run."),
		userStories: N().describe("It carries stories an agent could test the running app against. The one fact here that says nothing about the language."),
		docs: N().describe("It carries generated architecture documentation.")
	}), Vw = F({ panels: P(Bw).describe("One entry per repository, worked out in a single pass so nothing has to walk the workspace file by file.") }), Hw = F({ repo: j().describe("Which repository.") });
})), Ww, Gw = y((() => {
	K(), Uw(), Z(), Ww = {
		list: G.route({
			method: "GET",
			path: "/panels",
			summary: "Repos you can run and preview",
			description: "Every repo with whether its dev server is up and what the sandbox worked out about its contents."
		}).output(Vw),
		start: G.route({
			method: "POST",
			path: "/panels/{repo}/start",
			summary: "Start a repo's dev server",
			description: "Brings the repo's own runnable app up in a terminal you can attach to, so its preview address starts answering."
		}).input(Hw).output(Y),
		stop: G.route({
			method: "POST",
			path: "/panels/{repo}/stop",
			summary: "Stop a repo's dev server",
			description: "Shuts it down and frees the port."
		}).input(Hw).output(Y)
	};
})), Kw, qw, Jw, Yw, Xw = y((() => {
	U(), Kw = F({
		port: M().describe("The port number."),
		host: R(["127.0.0.1", "::1"]).describe("Which loopback address it actually answers on. Some tools bind only one of the two, and anything dialling it has to know which."),
		forwardable: N().describe("Whether it can be exposed at all. Some listeners answer only at their own address and nowhere else; those are listed for honesty and refused for forwarding."),
		kind: R(["workspace", "system"]).describe("Whether somebody's own work put it there, or the sandbox's own machinery did. Only the first kind is worth previewing."),
		title: j().describe("What a person would call it. Always present: a listener nothing can explain is still named, because the button beside it publishes the port to the internet."),
		purpose: j().describe("One sentence about what it is for, including when the honest answer is that nothing could work it out."),
		origin: R([
			"terminal",
			"agent",
			"panel",
			"extension",
			"container",
			"sandbox",
			"unknown"
		]).describe("Who put it there, which is the question somebody is really asking: mine, my agent's, or the box's own."),
		pid: M().optional().describe("The process holding it. Absent when nothing could be matched to the socket."),
		command: j().optional().describe("The command behind it, as it was run. Absent only when nothing could be attributed at all."),
		cwd: j().optional().describe("Where it is running from, which is how a port gets attributed to a repository."),
		session: j().optional().describe("The terminal it came from, to watch it in or stop it from. Absent when nothing in its ancestry is one, which is the honest \"you cannot reach this from here\"."),
		forwarded: N().describe("Whether it is currently reachable from outside."),
		previewUrl: j().optional().describe("Where to open it. Present only while forwarded, and only on a sandbox that has an outside address.")
	}), qw = F({ ports: P(Kw).describe("Everything listening inside the sandbox right now, read fresh each time rather than from a register the sandbox keeps.") }), Jw = F({ port: M().int().min(1).max(65535).describe("Which port.") }), Yw = F({ previewUrl: j().optional().describe("Where it can now be reached. Absent on a sandbox with no outside address, where the mapping exists but has no public name.") });
})), Zw, Qw = y((() => {
	K(), Xw(), Z(), Zw = {
		list: G.route({
			method: "GET",
			path: "/ports",
			summary: "What is listening inside the sandbox",
			description: "Every port something is answering on, and whether each one is reachable from outside."
		}).output(qw),
		forward: G.route({
			method: "POST",
			path: "/ports/forward",
			summary: "Make a port reachable",
			description: "Gives one port an address on the outside. Asking twice is harmless: the second call hands back the address the first one made."
		}).input(Jw).output(Yw),
		unforward: G.route({
			method: "POST",
			path: "/ports/unforward",
			summary: "Stop exposing a port",
			description: "Frees the slot at once. The address keeps resolving; it simply stops leading anywhere."
		}).input(Jw).output(Y)
	};
})), $w, eT, tT, nT, rT, iT = y((() => {
	U(), $w = F({
		path: j().describe("Where it sits inside the outbox."),
		size: M().describe("Size in bytes."),
		modifiedAt: M().describe("When it last changed, in milliseconds."),
		url: j().optional().describe("Its public address. Absent when this sandbox has no outside address, or when the file is being refused."),
		blocked: j().optional().describe("Why a file sitting in the outbox is not being served: a hidden name, a credential-shaped name, contents that look like a token, or sheer size. Only the publisher sees this; a stranger asking for the same file gets the same nothing every other miss gets.")
	}), eT = F({
		url: j().optional().describe("Your public address, which every file's own hangs off. Absent on a sandbox with nowhere to publish to."),
		files: P($w).describe("What the outbox holds.")
	}), tT = F({ path: j().min(1).describe("What to publish, as a workspace path. It is copied rather than moved, so a repository does not lose its build output because somebody shared it.") }), nT = F({ path: j().min(1).describe("What to withdraw, as a path inside the outbox rather than a workspace path.") }), rT = F({
		path: j().describe("Where it landed inside the outbox."),
		url: j().optional().describe("Its public address. Absent on a sandbox with nowhere to publish to.")
	});
})), aT, oT = y((() => {
	K(), iT(), Z(), aT = {
		list: G.route({
			method: "GET",
			path: "/public",
			summary: "What is published to the internet",
			description: "Everything currently in the outbox and the address it answers on. There is no call to read a published file back: it is served openly to anyone with the link, which is the entire point of having put it there."
		}).output(eT),
		publish: G.route({
			method: "POST",
			path: "/public/publish",
			summary: "Put a file on the internet",
			description: "Copies a workspace file or folder into the outbox, where it is served to anyone with the link and no sign-in. Answers with the address."
		}).input(tT).output(rT),
		unpublish: G.route({
			method: "POST",
			path: "/public/unpublish",
			summary: "Take something off the internet",
			description: "Withdraws one published entry. When the last one goes, the outbox goes with it, so its existing at all always means something is published."
		}).input(nT).output(Y)
	};
})), sT, cT, lT = y((() => {
	K(), U(), Ug(), Z(), sT = F({ repos: P(j().min(1)).max(100).default([]).describe("The repositories going out, by workspace id. Empty runs only what stands for every push, whichever repository it is.") }).prefault({}), cT = {
		state: G.route({
			method: "GET",
			path: "/prepush/state",
			summary: "How the pre-push check is going",
			description: "The verdict, or the progress so far. Nothing is addressed by id here, because there is one working tree and so exactly one check."
		}).output(Hg),
		run: G.route({
			method: "POST",
			path: "/prepush/run",
			summary: "Run the checks before pushing",
			description: "Starts the suite the workspace runs before anything leaves the machine, and answers immediately. A suite takes minutes, and a request held open that long dies at the first proxy. It runs in a real terminal, so watch it there and poll for the verdict. Name the repositories going out, and each one's own checks run in its own directory."
		}).input(sT).output(Y),
		cancel: G.route({
			method: "POST",
			path: "/prepush/cancel",
			summary: "Stop the pre-push check",
			description: "Kills the run. It settles as cancelled and the push it was gating does not go."
		}).output(Y)
	};
})), uT, dT, fT = y((() => {
	K(), U(), J(), lf(), uT = F({
		agents: P(F({
			id: j(),
			label: j()
		})).describe("ACP agents installed here. The id is the provider id itself, the label its display name."),
		endpoints: P(F({
			id: j(),
			label: j(),
			kind: R(["endpoint", "localmodel"])
		})).describe("Model endpoints, already prefixed `endpoint/`, including the daemon-provisioned free trial.")
	}), dT = {
		list: G.route({
			method: "GET",
			path: "/providers",
			summary: "Providers a chat can run on here",
			description: "The installed ACP agents and model endpoints, which are the providers this sandbox adds to the fixed native list. A read for anyone who may watch or drive a turn: it names what a message can be addressed to, not what credential stands behind it."
		}).output(uT),
		models: G.route({
			method: "GET",
			path: "/providers/{provider}/models",
			summary: "Models one provider offers",
			description: "Every model this provider serves and which one it defaults to. Never empty: it is discovered live with a stored list behind it. The order is the provider's own preference and is not rearranged here."
		}).input(dd).output(cf)
	};
})), pT, mT, hT, gT, _T, vT, yT, bT = y((() => {
	U(), pT = F({
		kind: z("webpush").describe("A browser, which the sandbox can reach directly and encrypt end to end."),
		endpoint: ic().describe("Where that browser's push service accepts sends. It also identifies the device everywhere else in this group."),
		keys: F({
			p256dh: j().min(1).describe("The browser's public key, for encrypting what is sent."),
			auth: j().min(1).describe("The browser's secret, for the same.")
		}).describe("What the browser handed you when it subscribed. Post it back exactly as it came; nothing reshapes it.")
	}), mT = F({
		kind: z("relay").describe("A native app, whose operating system only accepts sends from the app's publisher, so the sandbox posts through a relay instead. The message passes through that relay readable, which is the price of the publisher having to be in the loop."),
		url: ic().describe("Where to post a send. Recorded rather than assumed, so the sandbox need not know any platform by name."),
		deviceId: j().min(1).describe("The device's id, which also identifies this registration everywhere else in this group."),
		secret: j().min(1).describe("Proof that this sandbox may notify this device. The relay never learns which sandbox is calling.")
	}), hT = I("kind", [pT, mT]), F({
		title: j().min(1).describe("The headline."),
		body: j().describe("The line under it. Push services cap the whole payload at a few kilobytes, which is why nothing here carries a transcript or a diff: a notification is a pointer back, not a delivery."),
		url: j().optional().describe("Where tapping it goes. An existing tab is focused rather than a new one opened."),
		tag: j().optional().describe("Collapses repeats: a second notification with the same tag replaces the first instead of stacking beside it."),
		requireInteraction: N().optional().describe("Keep it on screen until it is dismissed. Used when the agent is waiting for you, where one that fades away is a question that went unanswered in silence.")
	}), gT = F({
		publicKey: j().describe("The key a browser needs in order to subscribe. Native apps ignore it."),
		subscribed: N().describe("Whether the asking device is already registered, so a toggle can show its real state instead of trusting the device's own permission, which can be granted with nothing behind it.")
	}), _T = F({ id: j().min(1).describe("Which device: a browser's push address, or a native install's device id.") }), vT = F({ id: j().min(1).optional().describe("Which device is asking. Without it the answer can only speak for the sandbox as a whole, which is rarely the question.") }), yT = F({ delivered: M().int().nonnegative().describe("How many devices actually accepted it. A count rather than a yes, because this button exists to prove a chain nobody can inspect, and the sandbox having accepted the request is not the question being asked.") });
})), xT, ST = y((() => {
	K(), bT(), Z(), xT = {
		config: G.route({
			method: "GET",
			path: "/push/config",
			summary: "What a device needs to subscribe",
			description: "The public key and settings a browser or app needs before it can register for notifications from this sandbox."
		}).input(vT).output(gT),
		subscribe: G.route({
			method: "POST",
			path: "/push/subscribe",
			summary: "Send notifications to this device",
			description: "Registers one device. The sandbox only interrupts you on the three moments where attention is genuinely wanted: a turn has finished, the agent is stuck on a question, and something is waiting for approval."
		}).input(hT).output(Y),
		unsubscribe: G.route({
			method: "POST",
			path: "/push/unsubscribe",
			summary: "Stop notifying a device",
			description: "Removes one registered device. Others keep receiving."
		}).input(_T).output(Y),
		test: G.route({
			method: "POST",
			path: "/push/test",
			summary: "Send a test notification",
			description: "Proves the whole chain end to end. Worth having, because there are four separate places a notification can be lost that nobody can inspect from the outside: the device's permission, its registration, the sandbox's key, and the delivery service."
		}).output(yT)
	};
})), CT, wT = y((() => {
	K(), NS(), Z(), U(), CT = {
		policy: G.route({
			method: "GET",
			path: "/safety/policy",
			summary: "The safety policy this sandbox is judged against",
			description: "The document that decides when an agent stops to ask you before running something. Prose, not settings: it is read by the model that judges each command. When nobody has written one, this is the text the product ships with, and it describes the behaviour a fresh sandbox already has."
		}).output(MS),
		setPolicy: G.route({
			method: "POST",
			path: "/safety/policy",
			summary: "Rewrite the safety policy",
			description: "Replaces the document whole. Nothing in it can widen what the sandbox is structurally allowed to do: it decides which of the things an agent may already do are worth interrupting you about."
		}).input(F({ text: j().describe("The policy, as you want it written.") })).output(Y),
		log: G.route({
			method: "GET",
			path: "/safety/log",
			summary: "Recent safety verdicts",
			description: "What was judged lately, what the judge decided, and whether you were interrupted. Newest first. This is where you find out why you were not asked about something, which is the question a policy page otherwise cannot answer."
		}).output(P(jS))
	};
})), TT, ET = y((() => {
	K(), Rf(), Z(), TT = {
		set: G.route({
			method: "POST",
			path: "/secrets",
			summary: "Store a secret",
			description: "Writes one name and value into the sandbox's own store, where running processes pick it up without a restart. Refused until the sandbox has somewhere to keep them."
		}).input(wf).output(Y),
		list: G.route({
			method: "GET",
			path: "/secrets",
			summary: "Names of the stored secrets",
			description: "Which secrets exist here. Names only, never values."
		}).output(Tf),
		remove: G.route({
			method: "DELETE",
			path: "/secrets/{key}",
			summary: "Delete a secret",
			description: "Removes one by name."
		}).input(Ef).output(Y),
		inventory: G.route({
			method: "GET",
			path: "/secrets/inventory",
			summary: "Every secret this sandbox holds, from everywhere",
			description: "One view across all the places secrets live here: what exists, where it came from and whether it is working. Never any values. This one always answers, even before there is a store to write to."
		}).output(Lf),
		reveal: G.route({
			method: "POST",
			path: "/secrets/reveal",
			summary: "Show one secret's value",
			description: "The only call that hands a value back, and it is for the owner alone. Sent as a body rather than in the address, so the name never ends up in a log or a browser's history."
		}).input(Ef).output(Df),
		gates: G.route({
			method: "GET",
			path: "/secrets/gates",
			summary: "Which credentials need somebody's approval",
			description: "What is gated and who may release it. Names and addresses only, never values, and the agent may read it too: knowing a credential needs Bob is what stops it concluding the account is simply not connected."
		}).output(Mf),
		setGate: G.route({
			method: "PUT",
			path: "/secrets/gates/{subject}",
			summary: "Put a credential behind named approvers",
			description: "Names exactly who may release one secret or one connected account, and how far a single release goes. The owner's call alone. A signed-in browser or a mounted server cannot be released for one use, so those are always for the rest of the conversation."
		}).input(jf).output(Y),
		removeGate: G.route({
			method: "DELETE",
			path: "/secrets/gates/{subject}",
			summary: "Stop requiring approval for a credential",
			description: "Removes one gate, so the agent can use that credential the way it uses any other. The owner's call alone."
		}).input(Nf).output(Y),
		request: G.route({
			method: "POST",
			path: "/secrets/request",
			summary: "Ask a named person to release a credential",
			description: "Raises the release card in the live conversation and waits for one of the people named on it. Refused, rather than held, when there is nobody to ask: an unattended turn, no live conversation, or a click with no verified identity behind it."
		}).input(Pf).output(Ff)
	};
})), DT, OT, kT, AT = y((() => {
	U(), Tm(), DT = F({ id: j().describe("Which past conversation.") }), OT = F({
		id: j().describe("Its id."),
		title: j().describe("What it is called."),
		updatedAt: M().describe("When it last moved, in milliseconds."),
		snippet: lm.optional().describe("Why a search matched: the line it hit, with a little around it, and who said it. Absent on an unfiltered list, and on a match the title already shows, where repeating it would be noise rather than evidence.")
	}), kT = F({ sessions: P(OT).describe("Past conversations, newest first.") });
})), jT, MT = y((() => {
	K(), U(), Sh(), AT(), jT = {
		list: G.route({
			method: "GET",
			path: "/sessions",
			summary: "Past conversations in this workspace",
			description: "Summaries for a history menu, filtered when you pass a search. Covers conversations that worked in their own private copies too, so nothing is hidden just because it happened on a branch."
		}).input(F({
			query: j().optional(),
			caseSensitive: Dl().optional()
		})).output(kT),
		get: G.route({
			method: "GET",
			path: "/sessions/{id}",
			summary: "Read one past conversation",
			description: "The full record of a single conversation, restored for display."
		}).input(DT).output(yh)
	};
})), NT, PT, FT, IT, LT, RT = y((() => {
	U(), F({
		at: M().describe("When the turn ended, in milliseconds."),
		day: j().describe("The day it fell in, as YYYY-MM-DD in UTC, worked out once so nothing downstream has to do timezone arithmetic."),
		provider: j().describe("Which model provider served it."),
		account: j().optional().describe("Which account paid. Absent for a turn run on a plain key, which belongs to no account."),
		model: j().optional().describe("The model that actually ran, past whatever was asked for and every default. Absent only when the provider's own default served it without being named."),
		modelRequested: j().optional().describe("The model that was asked for, when one was named. Differs from `model` when something resolved it."),
		harness: j().describe("Which agentic loop it ran on."),
		outcome: R([
			"ok",
			"error",
			"cancelled"
		]).optional().describe("How it ended: finished, failed, or was stopped by the user."),
		errorCode: j().optional().describe("The failure's code, when it had one."),
		errorMessage: j().optional().describe("What the failure said, trimmed."),
		conversationId: j().optional().describe("Which conversation it belonged to, so spending can be traced to a card. Absent only for an internal one-off with no conversation at all."),
		turns: M().describe("The provider's own count for the request, since one exchange can be several under the hood. One when it reported none."),
		inputTokens: M().describe("Tokens sent."),
		outputTokens: M().describe("Tokens received."),
		cacheReadTokens: M().describe("Tokens served from cache, which cost less."),
		cacheCreationTokens: M().describe("Tokens written to cache, which cost more up front and less afterwards."),
		costUsd: M().describe("What it cost, in dollars."),
		durationMs: M().describe("How long it took, in milliseconds."),
		iqSearchArm: N().optional(),
		iqSearchCohort: j().optional(),
		searchCalls: M().optional(),
		openingSearches: M().optional(),
		openingListings: M().optional(),
		callsBeforeTarget: M().optional(),
		mapArm: N().optional(),
		mapChars: M().optional(),
		turnIndex: M().optional(),
		verification: R([
			"verified",
			"unproven",
			"failing",
			"no-code"
		]).optional(),
		check: j().optional(),
		filesEdited: M().optional(),
		toolCalls: M().optional(),
		checklistTotal: M().optional(),
		checklistOpen: M().optional(),
		compactions: M().optional(),
		contextTokens: M().optional(),
		contextWindow: M().optional(),
		tierScore: M().optional(),
		tierRules: P(j()).optional(),
		tierRouted: N().optional(),
		tierFast: N().optional(),
		tierCeiling: M().optional(),
		tierDenied: N().optional()
	}), NT = F({
		day: j().describe("The day, as YYYY-MM-DD in UTC."),
		provider: j().describe("Which model provider."),
		account: j().optional().describe("Which account. Absent for work run on a plain key."),
		model: j().optional().describe("Which model."),
		harness: j().describe("Which agentic loop."),
		conversationId: j().optional().describe("Which conversation."),
		turns: M().describe("Turns in this group."),
		inputTokens: M().describe("Tokens sent."),
		outputTokens: M().describe("Tokens received."),
		cacheReadTokens: M().describe("Tokens served from cache."),
		cacheCreationTokens: M().describe("Tokens written to cache."),
		costUsd: M().describe("What the group cost, in dollars."),
		durationMs: M().describe("Time spent, in milliseconds.")
	}), PT = F({
		from: j().optional().describe("First day to include, as YYYY-MM-DD in UTC. Leave it out for everything up to the end day."),
		to: j().optional().describe("Last day to include, as YYYY-MM-DD in UTC, and it is included rather than excluded. Leave it out for everything from the start day onwards.")
	}), FT = F({ rows: P(NT).describe("Spending grouped by day, provider, account, model and conversation. Everything a cost screen shows is a rearrangement of these rows, which is why there is no second call for any of it.") }), IT = F({
		provider: j(),
		account: j(),
		turns: M(),
		inputTokens: M(),
		outputTokens: M(),
		cacheReadTokens: M(),
		cacheCreationTokens: M(),
		costUsd: M()
	}), LT = F({ accounts: P(IT) });
})), zT, BT = y((() => {
	K(), vC(), Z(), RT(), zT = {
		get: G.route({
			method: "GET",
			path: "/settings",
			summary: "How this sandbox is configured",
			description: "Every setting that governs how agents behave here, with the defaults filled in for anything nobody has chosen."
		}).output(tC),
		set: G.route({
			method: "POST",
			path: "/settings",
			summary: "Change the sandbox settings",
			description: "Writes the settings whole, so send the complete object rather than the fields you changed."
		}).input(tC).output(Y),
		savings: G.route({
			method: "GET",
			path: "/settings/savings",
			summary: "What the token-saving measures were worth",
			description: "Measured rather than estimated: what each mechanism actually saved over a range of days. The same day range the spending ledger takes, so one calendar filters both."
		}).input(PT).output(dC),
		builtinPrompt: G.route({
			method: "GET",
			path: "/settings/system-prompt/{base}",
			summary: "Read a built-in system prompt",
			description: "The actual text behind one of the built-in modes, so a settings screen can show the prompt instead of asking anyone to trust a description of it, and so either can be forked into a custom one."
		}).input(FS).output(nC),
		firings: G.route({
			method: "GET",
			path: "/settings/rule-firings",
			summary: "When each rule last did something",
			description: "A separate read rather than a field on the settings, because a rule firing is not somebody editing anything: folding it in would turn every firing into a settings write and put a self-changing value inside the object a screen edits."
		}).output(GS),
		repoChecks: G.route({
			method: "GET",
			path: "/settings/repo-checks",
			summary: "What each repository asks to run on its own code",
			description: `Every repository that declares its own checks at \`${fC}\`, what it declares, and whether you have switched it on. A repository declares what to run because the command belongs beside the scripts it names; nothing it declares runs until you say so.`
		}).output(gC),
		adoptRepoChecks: G.route({
			method: "POST",
			path: "/settings/repo-checks/adopt",
			summary: "Switch a repository's own checks on or off",
			description: "Adopts exactly what that repository declares as it stands now. If the declaration changes afterwards it stops running until you adopt it again, so a command nobody has read cannot inherit the answer given to a different one."
		}).input(_C).output(Y)
	};
})), VT, HT = y((() => {
	K(), Qm(), Z(), VT = {
		list: G.route({
			method: "GET",
			path: "/share",
			summary: "Conversations published as pages",
			description: "Every conversation that has been turned into a read-only page, with its link. There is no call to read one back: the page itself is the read, and it answers to anyone who has the link."
		}).output(Jm),
		create: G.route({
			method: "POST",
			path: "/share",
			summary: "Publish a conversation",
			description: "Renders a conversation into a page anybody with the link can read, without signing in. Answers with the link, so nothing has to be listed again to find it."
		}).input(Ym).output(qm),
		update: G.route({
			method: "POST",
			path: "/share/update",
			summary: "Refresh a published page",
			description: "Re-renders an existing page from the conversation as it stands now. Same link, newer contents."
		}).input(Xm).output(qm),
		remove: G.route({
			method: "POST",
			path: "/share/remove",
			summary: "Unpublish a conversation",
			description: "Takes the page down, so the link stops answering."
		}).input(Zm).output(Y)
	};
})), UT, WT = y((() => {
	K(), vC(), Z(), UT = {
		list: G.route({
			method: "GET",
			path: "/skills",
			summary: "What the agent knows how to do",
			description: "Every skill available here and whether it is switched on, joined from all the places they come from: the owner's own, the settings, plugins a connection installed, folders inside extensions, and persona kits."
		}).output(YS),
		read: G.route({
			method: "GET",
			path: "/skills/read",
			summary: "Read one skill",
			description: "The full text of a single skill. The name travels in the query rather than the address, because a name can carry the owner it came from and that will not fit in a path."
		}).input(ZS).output(XS),
		save: G.route({
			method: "POST",
			path: "/skills",
			summary: "Write a skill",
			description: "Creates or rewrites a skill by name. A new one starts switched on, because you wrote it in order to use it; rewriting one you switched off leaves it off. Renaming is saving under the new name and deleting the old."
		}).input(QS).output(Y),
		switch: G.route({
			method: "POST",
			path: "/skills/switch",
			summary: "Switch one of your own skills on or off",
			description: "Off takes the agent's copy away and keeps your text; on writes the copy back from it. Built-in tools are switched in the agent settings instead, and nothing else has a switch."
		}).input(eC).output(Y),
		remove: G.route({
			method: "POST",
			path: "/skills/remove",
			summary: "Delete a skill",
			description: "Removes the text and the agent's copy in one step, so a screen never has to sequence two calls and never leaves one half done."
		}).input($S).output(Y)
	};
})), GT, KT, qT, JT, YT = y((() => {
	U(), GT = F({ distro: j() }), KT = F({
		os: j(),
		arch: j(),
		shell: j(),
		home: j(),
		roots: P(j()),
		engine: F({
			memoryBytes: M(),
			cpus: M()
		}).optional(),
		hostname: j().optional(),
		wsl: GT.optional(),
		wslDistros: P(j()).optional()
	}), qT = F({
		key: j().min(1),
		online: N(),
		version: j().optional(),
		lastSeen: M().optional(),
		facts: KT.optional()
	}), JT = F({
		id: j(),
		platform: j().min(1),
		environments: P(qT).min(1),
		online: N(),
		version: j().optional(),
		lastSeen: M().optional(),
		facts: KT.optional()
	}), F({ hosts: P(JT) });
})), XT = y((() => {})), ZT, QT, $T, eE, tE, nE, rE, iE, aE, oE, sE, cE, lE, uE, dE, fE, pE, mE, hE, gE, _E, vE, yE, bE, xE, SE, CE, wE = y((() => {
	U(), YT(), ZT = F({
		memoryBytes: M().optional(),
		cpus: M().optional(),
		privileged: N(),
		gpu: N(),
		hostRuntime: P(j()),
		overlayRuntime: P(j())
	}), QT = F({
		memoryGib: sc().positive().nullable().optional(),
		cpus: sc().positive().nullable().optional(),
		privileged: N().optional(),
		gpu: N().optional()
	}), $T = QT.refine((e) => Object.values(e).some((e) => e !== void 0), { message: "a reshape must change at least one thing" }), eE = F({
		slug: j(),
		container: j(),
		name: j().optional(),
		running: N(),
		image: j(),
		tunnelRunning: N().optional(),
		resources: ZT.optional()
	}), tE = R([
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
	]), nE = F({
		op: tE,
		slug: j().min(1),
		hash: j().optional(),
		resources: $T.optional(),
		parentUrl: j().optional(),
		pair: j().optional().meta({ secret: !0 }),
		setupCode: j().optional().meta({ secret: !0 }),
		definition: j().optional(),
		overlay: j().optional(),
		overlayHash: j().optional()
	}), rE = nE.extend({ id: j().min(1) }), iE = I("kind", [
		F({
			kind: z("line"),
			text: j()
		}),
		F({
			kind: z("result"),
			message: j()
		}),
		F({
			kind: z("error"),
			message: j()
		})
	]), aE = R(["upgrade", "restart"]), oE = F({ op: aE }), sE = oE.extend({ id: j().min(1) }), cE = R([
		"mirror-off",
		"mirror-on",
		"sync-pause",
		"sync-resume",
		"sync-unpair",
		"dev-reload",
		"dev-rebuild",
		"dev-rebuild-log",
		"sync-install"
	]), cE.exclude([
		"dev-reload",
		"dev-rebuild",
		"dev-rebuild-log",
		"sync-install"
	]), lE = j().max(200).regex(/^[A-Za-z0-9][A-Za-z0-9._-]*$/), uE = j().min(1).max(4096).regex(/^(?:~|\/|[A-Za-z]:[\\/])[^"'`$;|&\n\r]*$/), dE = F({
		id: j().min(1),
		command: cE,
		sandboxId: lE.optional(),
		mode: R(["sync", "mirror"]).optional(),
		localDir: uE.optional()
	}), fE = F({
		ok: N(),
		message: j(),
		output: j().optional(),
		refused: N()
	}), pE = R([
		"created",
		"modified",
		"deleted"
	]), mE = F({
		path: j(),
		local: pE.optional(),
		sandbox: pE.optional()
	}), hE = F({
		sandboxId: j(),
		mode: R(["sync", "mirror"]),
		localDir: j().optional(),
		mirroring: R(["on", "off"]).optional(),
		mutagenStatus: j().optional(),
		conflicts: M().int().nonnegative().optional(),
		conflictedPaths: P(mE).optional(),
		paused: N().optional(),
		backupStatus: j().optional()
	}), gE = R([
		"mirrored",
		"held-by-sandbox",
		"busy"
	]), _E = F({
		port: M().int().min(1).max(65535),
		host: R(["127.0.0.1", "::1"]),
		sandboxId: j(),
		state: gE,
		heldBy: j().optional(),
		command: j().optional()
	}), vE = F({
		running: N(),
		pid: M().int().optional(),
		installed: j().optional(),
		build: j().optional(),
		lastTickAt: M().optional()
	}), yE = F({
		hostname: j(),
		os: j(),
		wsl: GT.optional(),
		pairings: P(hE),
		ports: P(_E),
		agent: vE,
		capturedAt: M()
	}), bE = R([
		"offline",
		"scope-off",
		"no-agent",
		"unreported"
	]), xE = F({
		machine: j(),
		mode: R(["sync", "mirror"]),
		seenAt: M().optional()
	}), SE = F({
		key: j(),
		label: j(),
		sync: xE.optional(),
		hostId: j().optional(),
		online: N().optional(),
		platform: j().optional(),
		facts: KT.optional(),
		agentVersion: j().optional(),
		lastSeen: M().optional(),
		report: yE.optional(),
		sandboxes: P(eE).optional(),
		gap: bE.optional()
	}), CE = F({ devices: P(SE) }), F({
		enrolled: N(),
		available: N().optional(),
		machines: P(yE).optional()
	});
})), TE, EE, DE, OE, kE, AE, jE, ME, NE, PE, FE, IE, LE = y((() => {
	U(), TE = F({
		state: R([
			"ready",
			"unavailable",
			"unknown"
		]).describe("Whether this runtime can serve a turn. Unknown is a real answer rather than a soft no: a check that could not run must not grey out a provider you can in fact use."),
		detail: j().optional().describe("Why it cannot, and what to do about it. Absent when it can."),
		checkedAt: M().describe("When it was last checked, in milliseconds.")
	}), EE = F({
		version: j().optional().describe("What the downloaded build says it is. Absent means ready but unnamed, never that nothing is ready."),
		channel: j().describe("Which channel it was taken from. Not necessarily the one this sandbox follows: downloading a beta build is not the same as moving onto beta."),
		at: M().describe("When the download finished, in milliseconds, which answers whether this is still the update being offered.")
	}), DE = F({
		name: j().optional().describe("What this sandbox is called."),
		image: j().optional().describe("The image it is running."),
		version: j().optional().describe("The version of that image."),
		latest: j().optional().describe("The newest published version on its channel."),
		updateAvailable: N().optional().describe("Whether those two differ."),
		runtimes: L(j(), TE).optional().describe("Which agent runtimes can serve a turn right now, keyed by runtime. Absent until the first check has run, which reads the same as every entry being unknown."),
		channel: j().optional().describe("Which release channel this sandbox follows."),
		previousImage: j().optional().describe("The image the last update replaced, which is what a rollback would return to. Absent means there is nothing to go back to."),
		updateNotes: P(j()).optional().describe("What is in the update, in the words of the people it is for, newest first. Absent or empty whenever there is nothing worth saying, which reads on screen exactly as it did before there were notes at all."),
		moreUpdateNotes: M().optional().describe("How many further notes there are beyond the ones sent, for a sandbox left alone a long time. Absent or zero means you have all of them."),
		breakingNotes: P(j()).optional().describe("What the update takes away, uncapped, because a warning that fell off a shortened list is a breaking update taken unwarned. Absent for the overwhelming majority, which break nothing."),
		staged: EE.optional().describe("An update already downloaded and built on the machine running this container, waiting only for the restart that applies it. That restart is seconds, where an unprepared update is minutes, which is a different decision entirely. Absent when nothing is waiting.")
	}), OE = F({
		kind: R([
			"unreadable",
			"unknownKey",
			"invalidEntry"
		]).describe("What to do about it. Unreadable means the whole file is being ignored and everything in it is at its default. An unknown key means only that key is ignored. An invalid entry means one item of a list was skipped and the rest is fine."),
		detail: j().describe("What exactly was wrong, as one sentence and nothing else. Never the remedy: that is `fix`."),
		suggestion: j().optional().describe("The name it was probably meant to be, when one is close enough to guess honestly."),
		fix: j().optional().describe("What to do about it, when that is something other than 'correct the file'. Absent whenever the file itself is the thing to edit.")
	}), kE = F({
		path: j().describe("The file, as a workspace path. The file is the unit somebody fixes, which is why problems are grouped by it."),
		problems: P(OE).describe("Everything currently wrong with it. A file with nothing wrong is absent rather than present and empty.")
	}), AE = P(kE), jE = F({
		path: j().describe("The file to repair, as the workspace path the problem was reported under. Only the handful of manifests a person hand-edits can be named; anything else is refused."),
		key: j().describe("The stray top-level key, exactly as it was reported. Absent from the file already means there is nothing to do."),
		to: j().optional().describe("Rename the key to this instead of removing it, carrying its value across. Absent means remove it. Naming a key that is already in the file is refused rather than silently overwriting what is there.")
	}), ME = F({
		token: j().describe("The credential every other call carries. Present it as a bearer token."),
		expiresAt: M().describe("When it stops working, in milliseconds, so a caller can renew ahead of it without reading the token."),
		email: j().describe("Who the sandbox verified you as.")
	}), R([
		"google",
		"ticket",
		"passkey",
		"recovery"
	]), NE = F({
		id: j().describe("The credential id the authenticator chose, base64url."),
		email: j().describe("Whose passkey this is; the owner's list carries every member's, a member's only their own."),
		label: j().describe("The name given at registration, or the daemon's default."),
		rpId: j().describe("The editor host this passkey is bound to; a passkey answers only from that origin."),
		createdAt: M().describe("Epoch ms of registration."),
		lastUsedAt: M().optional().describe("Epoch ms of the last sign-in it answered; absent means never."),
		backedUp: N().describe("Whether the authenticator syncs this passkey (a phone's keychain) or holds the only copy (a hardware key).")
	}), F({
		passkeys: P(NE),
		required: N().describe("Whether a passkey is the only proof that opens this sandbox; owner-set."),
		recovery: F({ remaining: M() }).optional().describe("Owner only, while required: how many one-time recovery codes are still unspent.")
	}), F({ required: N() }), F({ codes: P(j()) }), F({ code: j().min(1) }), F({
		error: j(),
		requires: z("passkey"),
		enrolled: N()
	}), PE = j().regex(/^[A-Za-z0-9_-]+$/, "base64url"), FE = F({
		id: PE,
		rawId: PE,
		type: z("public-key"),
		response: F({
			clientDataJSON: PE,
			attestationObject: PE,
			transports: P(j()).optional()
		}),
		authenticatorAttachment: j().optional(),
		clientExtensionResults: L(j(), cc()).optional()
	}), IE = F({
		id: PE,
		rawId: PE,
		type: z("public-key"),
		response: F({
			clientDataJSON: PE,
			authenticatorData: PE,
			signature: PE,
			userHandle: PE.optional()
		}),
		authenticatorAttachment: j().optional(),
		clientExtensionResults: L(j(), cc()).optional()
	}), F({
		response: FE,
		label: j().optional()
	}), F({ response: IE });
})), RE, zE = y((() => {
	K(), U(), Sh(), zv(), wE(), Pw(), Z(), LE(), Gm(), RT(), RE = {
		info: G.route({
			method: "GET",
			path: "/info",
			summary: "What this sandbox is",
			description: "The sandbox's own identity and state: which workspace it holds, which image it runs, what it is called, and the list of calls it actually implements. Start here, because a browser is routinely newer than the sandbox it is talking to and this is how it finds out what is there."
		}).output(DE),
		manifestProblems: G.route({
			method: "GET",
			path: "/system/manifest-problems",
			summary: "Settings files the sandbox could not read",
			description: "Anything the daemon tripped over in its own configuration on disk: a file it had to fall back from, a key it did not recognise, an entry it skipped. Separate from the identity call because it goes stale for a different reason, namely a file changing."
		}).output(AE),
		repairManifest: G.route({
			method: "POST",
			path: "/system/manifest-problems/repair",
			summary: "Take a stray setting out of a file",
			description: "Removes a key the sandbox does not recognise from one of its settings files, or renames it to the one it was probably meant to be, keeping the value. Only the files a person hand-edits can be named, and only a key — never a value — so this can only ever remove something already being ignored. Renaming onto a key the file already has is refused instead of overwriting it."
		}).input(jE).output(Y),
		session: G.route({
			method: "POST",
			path: "/system/session",
			summary: "Trade a sign-in for a session",
			description: "Exchanges a verified sign-in, or a session that has not expired yet, for a fresh session the daemon minted. That session is the credential every other call carries, and calling this again with a live one renews it."
		}).output(ME),
		events: G.route({
			method: "GET",
			path: "/events",
			summary: "The live event stream",
			description: "A stream held open for as long as you want it, carrying heartbeats so a caller notices the sandbox dying at once, batches of file changes so a tree or an editor can refresh itself, and the roster of who else is looking. Give it an id for this connection to appear in that roster; leave it out and you watch without being seen."
		}).input(F({ clientId: j().optional() })).output(W(Rv)),
		presence: G.route({
			method: "POST",
			path: "/system/presence",
			summary: "Say what you are looking at",
			description: "Reports which view, conversation or file this connection is on, or that it has gone idle. The daemon fans it back out on the event stream so everyone else's roster updates."
		}).input(Nw).output(Y),
		usage: G.route({
			method: "GET",
			path: "/system/usage",
			summary: "What has been spent",
			description: "Token and cost totals per account, added up from the record of every finished turn."
		}).output(LT),
		terminals: G.route({
			method: "GET",
			path: "/system/terminals",
			summary: "Open terminals",
			description: "The terminal sessions this sandbox is holding, which is what a terminal panel rebuilds its tabs from after a reload. The live typing and output run over a separate socket; this is the list."
		}).output(jm),
		killTerminal: G.route({
			method: "DELETE",
			path: "/system/terminals/{name}",
			summary: "Close a terminal",
			description: "Destroys one terminal session and whatever was running inside it."
		}).input(Mm).output(Y),
		terminalScrollback: G.route({
			method: "GET",
			path: "/system/terminals/{name}/scrollback",
			summary: "A terminal's history as plain text",
			description: "What has scrolled past in one terminal, as text you can select and copy. The live view is a picture of a screen on the far side of a socket, with nothing in the page to select, so scrolling back and copying is this call rather than a gesture."
		}).input(Nm).output(Pm),
		browsers: G.route({
			method: "GET",
			path: "/system/browsers",
			summary: "Browsers the agent has open",
			description: "Every browser a conversation currently has running and the pages inside each one. The picture of what they are showing comes over a separate socket; this is the roster."
		}).output(Lm),
		closeBrowser: G.route({
			method: "DELETE",
			path: "/system/browsers/{name}",
			summary: "Shut a browser down",
			description: "Closes one of the agent's browsers. Its next attempt to use that browser then fails as though it had crashed, which is the honest account of somebody pulling the plug."
		}).input(Rm).output(Y),
		subagents: G.route({
			method: "GET",
			path: "/system/subagents",
			summary: "Subagents the agents have started",
			description: "Every subagent and child agent this sandbox's conversations have delegated work to, whichever tool started it, with what each one is doing."
		}).output(Um),
		subagentTranscript: G.route({
			method: "GET",
			path: "/system/subagents/{id}/transcript",
			summary: "A subagent's record",
			description: "The full record of one delegated subagent, in the same shape as any other conversation. It comes live from the parent turn while it works, and from stored history once it has finished."
		}).input(Wm).output(yh),
		devices: G.route({
			method: "GET",
			path: "/system/devices",
			summary: "The machines you have connected",
			description: "Every computer this sandbox can see, whether it reached it through desktop sync or through a connected device, in one row per machine: what it says about itself, which sandboxes it holds, and what stopped it answering when nothing came back."
		}).output(CE),
		manageDeviceSandbox: G.route({
			method: "POST",
			path: "/system/devices/{id}/sandboxes/{slug}",
			summary: "Drive a sandbox on one of your own devices",
			description: "Start, stop, restart, update, rebuild, roll back, reshape (its memory and CPU caps, privileged, GPU) or remove a sandbox running on a machine you own, relayed over the connection that machine holds open. The answer is a stream because the slowest of these takes minutes, and it is the same stream whichever you ask for. The daemon adds no opinion: the machine enforces its own permissions and a refusal arrives as the last line, in the machine's words, naming the switch to flip."
		}).input(rE).output(W(iE)),
		runDeviceCommand: G.route({
			method: "POST",
			path: "/system/devices/{id}/commands/{command}",
			summary: "Run one of your device's own CLI actions",
			description: "Performs a named action on a machine you own by running its own intentic-machine command there — turning that device's port mirroring off, say — over the connection it holds open. The set of actions is fixed and the command line is built here from the name, never sent by the caller. The machine enforces its own permissions and a refusal comes back as its own sentence, naming the switch to flip."
		}).input(dE).output(fE),
		runDeviceAgentFlow: G.route({
			method: "POST",
			path: "/system/devices/{id}/agent/{op}",
			summary: "Update or restart the agent on one of your own devices",
			description: "Updates a machine you own to the current intentic-machine agent, or restarts the loop it is running, over the connection that machine holds open. The answer is a stream of the run's own output — and it normally stops mid-run, because the agent's loop is what carries this connection: the work is detached from it first, so it finishes regardless, and the device's reported version is what confirms it. Takes the machine's \"Run commands\" permission, the same one a command typed there would."
		}).input(sE).output(W(iE))
	};
})), BE, VE = y((() => {
	K(), U(), Hd(), lf(), Wd(), Z(), BE = {
		accounts: G.route({
			method: "GET",
			path: "/translator/accounts",
			summary: "Subscriptions connected through the translator",
			description: "What is signed in per provider. Each provider can hold several accounts at once, and the translator spreads work across them."
		}).output(Id),
		connect: G.route({
			method: "POST",
			path: "/translator/{provider}/connect",
			summary: "Start connecting a subscription",
			description: "Begins the sign-in for one provider and says which of the two shapes it is: a code you type into a device page, which finishes by itself in the background, or a redirect whose landing address you hand back afterwards."
		}).input(F({ provider: Ud })).output(nf),
		status: G.route({
			method: "GET",
			path: "/translator/{provider}/connect",
			summary: "Read a subscription connection attempt",
			description: "Reports whether this exact sign-in attempt is waiting, completed, or failed. Completion is tied to the attempt rather than a change in account count, because signing in to an existing account replaces its credential in place."
		}).input(F({
			provider: Ud,
			state: j().min(1)
		})).output(rf),
		complete: G.route({
			method: "POST",
			path: "/translator/{provider}/complete",
			summary: "Finish a redirect sign-in",
			description: "For the providers that redirect somewhere this sandbox cannot receive: hand back the address you landed on and the connection completes."
		}).input(af).output(Y),
		disconnect: G.route({
			method: "POST",
			path: "/translator/{provider}/disconnect",
			summary: "Disconnect one subscription",
			description: "Clears a single account by name. Any others under the same provider stay connected."
		}).input(F({
			provider: Ud,
			name: j().min(1)
		})).output(Y)
	};
})), HE, UE, WE = y((() => {
	K(), U(), Hd(), RT(), HE = F({ force: N().default(!1).describe("Measure again even if a reading was taken a moment ago.") }), UE = {
		rollup: G.route({
			method: "GET",
			path: "/usage/rollup",
			summary: "What was spent, grouped",
			description: "The spending record over a range of days, grouped by day, provider, account and model. Everything a cost screen shows is a rearrangement of this one answer, so nothing needs a second call. Read-only: rows are written by the sandbox as turns end, which is what makes it worth trusting."
		}).input(PT).output(FT),
		refreshPlanLimits: G.route({
			method: "POST",
			path: "/usage/plan-limits/refresh",
			summary: "Measure every account's plan limits again",
			description: "Reads how full each connected account's plan limits are, for every provider, and records it. Forced, it measures even accounts read a moment ago, which is the right thing when a plan was just changed and the question is whether the number on screen is still true."
		}).input(HE).output(F({ ok: z(!0) })),
		limitReset: G.route({
			method: "GET",
			path: "/usage/limit-reset/{account}",
			summary: "Whether this account's session window can be reopened now",
			description: "Asks the provider whether it will reopen this account's spent session window immediately, which some plans grant once a week. Only worth asking about an account that has actually been refused: the answer is the provider's judgement at this moment, it is not cached, and an account with no such grant answers plainly that it has none."
		}).input(F({ account: j().min(1).describe("Which account.") })).output(jd),
		claimLimitReset: G.route({
			method: "POST",
			path: "/usage/limit-reset/{account}/claim",
			summary: "Reopen this account's session window now",
			description: "Spends one of the account's weekly resets to reopen its session window immediately. The weekly allowance is untouched and still binds. Answers with what the provider actually did: only `reset` changed anything, and it is the cue to send the refused turn again."
		}).input(F({ account: j().min(1).describe("Which account.") })).output(Md)
	};
})), GE, KE = y((() => {
	K(), zv(), Z(), Ay(), GE = {
		list: G.route({
			method: "GET",
			path: "/vpn",
			summary: "Configured tunnels and which are up",
			description: "Every stored VPN with its live link state, read back from the operating system rather than from memory, so a tunnel dropped from a shell and one dropped from a screen look the same here."
		}).output(wy),
		connect: G.route({
			method: "POST",
			path: "/vpn/{id}/connect",
			summary: "Dial a VPN",
			description: "Brings a stored tunnel up, streaming the client's progress as it authenticates and then sets up routing. Streamed because a dial takes seconds and can fail with something you have to read: a wrong password, a gateway certificate nobody trusts, a code it wants. Connecting one that is already up simply says so."
		}).input(Ty).output(W(Sv)),
		disconnect: G.route({
			method: "POST",
			path: "/vpn/{id}/disconnect",
			summary: "Drop a tunnel",
			description: "Takes the tunnel down. One that was already down is fine: the promise is that it is not up afterwards."
		}).input(Ey).output(Y),
		importForticlient: G.route({
			method: "POST",
			path: "/vpn/import-forticlient",
			summary: "Read connections out of an exported config",
			description: "Turns an exported FortiClient configuration into a list of connections you can add, so somebody holding that file picks from a list instead of retyping a host and port for every tunnel."
		}).input(Dy).output(ky)
	};
})), qE, JE, YE, XE, ZE, QE, $E, eD, tD, nD, rD, iD, aD, oD, sD, cD, lD, uD, dD, fD, pD = y((() => {
	U(), J(), ld(), Up(), qE = j().min(1).max(24).regex(/^[a-z0-9][a-z0-9-]*$/), JE = R(["fresh", "continue"]), YE = 24, XE = F({
		id: qE.describe("This step's own name, which other steps use to say they wait on it."),
		title: j().min(1).max(60).describe("What to call it on screen. Short: the instruction below is where the detail goes."),
		goal: j().min(1).optional().describe("What done means for this step, in your words. It is what the step is judged against, and a different sentence from what it is told to do."),
		prompt: j().min(1).optional().describe("What the step is told to do. The goal is the suite is green; this is run the tests, take the top failure, fix it. Leaving it out hands over the run's own request untouched, which is right for a step whose whole job is do what was asked."),
		needs: P(qE).describe("Which steps must finish first. Empty means it starts when the run does. Naming a step that does not exist, or a loop between steps, is refused when the workflow is saved."),
		handoff: JE.describe("How it meets what came before: a fresh conversation handed the previous step's result, or the same conversation carried on."),
		output: kp.describe("What it has to produce for the step to count."),
		checks: P(Ap).describe("What has to pass before it counts as done."),
		context: Op.describe("How the step's own repeats meet each other. A long-running step wants to start clean each round; a short polish-this step wants to carry on."),
		maxSpendUsd: M().positive().optional().describe("A ceiling on what this step may spend. The one resource that cannot be recovered after an unattended fan-out, which is why it is here and iteration limits are not. Absent is uncapped."),
		agent: ud.optional().describe("Which provider runs it."),
		harness: fd.optional().describe("Which agentic loop runs it."),
		account: j().optional().describe("Which account pays for it."),
		model: j().optional().describe("Which model runs it."),
		actsAs: q.optional().describe("Which persona it acts as. Unpinned, a step gets the strict unwatched default: every tool, and no signed-in accounts at all. Pinning one is how a release check gets a voice, a folder to work in, or the single account it may post from.")
	}), ZE = F({
		step: qE.describe("Which step's answer carries the decision. Usually a last step that weighs up the ones before it, though nothing requires that."),
		field: j().min(1).describe("Which of that step's declared answers to read. A declared field is the one part of a step's answer that was checked rather than fished out of prose, which is the whole rule here. Checked when the workflow is saved."),
		pass: P(j().min(1)).min(1).describe("Which values mean ship it. Everything else fails. A list of what passes rather than what fails, because a step answering mostly-pass or pass-with-notes must not ship, and this gets that right without anybody having had to enumerate the ways a model can hedge."),
		dailyMax: M().int().positive().optional().describe("How many runs a day, across every caller. A gate is a paid door with nobody in the loop: one wired into a push-triggered pipeline is a fan-out of conversations per commit. Absent is a small default rather than unlimited.")
	}), QE = R([
		"pass",
		"fail",
		"blocked"
	]), F({
		outcome: QE.describe("Ship it, do not, or we could not tell. That third answer exists because could not reach a judgement is not the product is broken: a gate that reported its own outages as failures is one a team switches off, so it should be the honest answer far more often than the convenient one, and it means a neutral build rather than a red one."),
		reason: j().describe("Why, in one line. Realistically the only part of this a build log will ever show."),
		runId: j().describe("The run behind the verdict, so somebody can go and read it."),
		value: j().optional().describe("What the step actually answered. Absent when there was nothing to read, which is most of the could-not-tell cases.")
	}), $E = F({
		id: q.describe("The workflow's id."),
		name: j().min(1).max(80).describe("What to call it."),
		description: j().max(400).optional().describe("What it is for."),
		steps: P(XE).min(1).max(YE).describe("The steps, each with what it waits on. Every one runs in its own private copy of the repos, always, because parallel steps sharing a tree collide."),
		gate: ZE.optional().describe("Present means a machine can run this design and get a ship-it answer back. Absent means an ordinary workflow, started by a person, with no outside door onto it at all."),
		maxParallel: M().int().min(1).max(8).describe("How many steps may run at once. Bounded, because a fan-out of twelve is twelve model sessions, twelve working copies and twelve times the burn rate, on one machine.")
	}), eD = R([
		"pending",
		"running",
		"done",
		"failed",
		"skipped",
		"stopped"
	]), tD = F({
		stepId: qE.describe("Which step this is."),
		state: eD.describe("How it went. Skipped carries what the others cannot: it never ran, because something it was waiting on did not finish. That is why a failed run shows one red step and a trail of grey ones."),
		conversationId: j().describe("The conversation it ran on, and the way from a node on the graph to a real record. Shared with the step before it when they were chained, which is what makes those two one card."),
		startedAt: M().optional().describe("When it began, in milliseconds."),
		endedAt: M().optional().describe("When it ended, in milliseconds."),
		iterations: M().int().min(0).describe("How many rounds it took."),
		costUsd: M().optional().describe("What it cost, in dollars."),
		loopState: Fp.optional().describe("How its repeating ended. Out of rounds and stuck both come out as a failed step, and the difference between them is the difference between give it more room and more room will not help."),
		detail: j().optional().describe("What went wrong, when something did."),
		document: jp.optional().describe("What it produced, once it has produced something that passes its own declared shape. This is what the steps after it are handed."),
		report: j().optional().describe("The start of its closing words. Bounded, so a long answer is not silently cut down to its last few thousand characters and the record stays a sensible size."),
		reportPath: j().optional().describe("Where the whole answer is, as a workspace path. Every step can read it, so a long handoff need not be copied into anybody's prompt.")
	}), nD = R([
		"running",
		"done",
		"failed",
		"stopped",
		"overspent",
		"error"
	]), rD = F({
		runId: j().min(1).describe("This run's id."),
		workflow: $E.describe("The design as it stood when the run started, copied rather than looked up. The run has to keep showing the graph it actually ran, not the one edited twice since, and a run of a deleted workflow has to stay readable."),
		repos: P(pd).min(1).max(50).describe("The workspace as this run began, one exact commit per repository. Every step branches from these, even if the shared tree moves while a wide fan-out is still opening its copies, so the steps can be compared with each other afterwards."),
		request: j().optional().describe("What this run was asked to do, handed to every step on top of its own instructions. It is what makes one saved design worth keeping: two models, one task is a shape, and the task is different every time. Absent for a run started with nowhere to type one."),
		state: nD.describe("How the run is going. Finished means every step that ran got there; a run with skipped steps counts as failed, because a graph that never reached its end did not do what it was asked whatever the survivors managed."),
		startedAt: M().describe("When it began, in milliseconds."),
		endedAt: M().optional().describe("When it ended, in milliseconds."),
		resumed: M().int().min(0).describe("How many times the sandbox restarted under it and picked it back up."),
		detail: j().optional().describe("What went wrong, when something did."),
		steps: P(tD).describe("One entry per step, in the design's own order. Every one is written down as waiting when the run starts, so the picture is complete from the first frame and a missing step never has to mean two things."),
		archivedAt: M().optional().describe("When it was put away, in milliseconds. The record stays readable and every step's branch, transcript and counters are untouched. Its conversations are put away with it, and brought back with it. Absent means live on the board.")
	}), iD = j().optional().describe("What a pipeline presents at /workflows/{id}/gate, when the design declares a gate. Shown to a maintainer or the owner only."), aD = $E.extend({ gateToken: iD }), oD = $E.extend({
		runs: P(rD).describe("Its runs, newest first."),
		gateToken: iD
	}), sD = F({ workflows: P(oD).describe("Every saved design with its own run history.") }), cD = F({ runs: P(rD).describe("Every run across every workflow, newest first, including runs of workflows since deleted.") }), lD = F({ id: j().describe("Which workflow.") }), uD = F({ runId: j().describe("Which run.") }), dD = lD.extend({ request: j().min(1).max(2e4).optional().describe("What to point it at. Optional, because a design whose steps already say what they want is complete on its own; only one written as a shape needs today's sentence.") }), fD = F({
		workflow: $E.describe("The design to write."),
		create: N().describe("Whether you mean to make a new one or replace an existing one. Said outright rather than inferred, so an id that happens to collide is a refusal instead of one saved design quietly overwriting another.")
	});
})), mD, hD = y((() => {
	K(), Z(), pD(), mD = {
		list: G.route({
			method: "GET",
			path: "/workflows",
			summary: "Saved workflows and their runs",
			description: "Every workflow somebody has designed, each with its own run history, newest first. One answer rather than two, because a workflow that has never been run is the interesting case rather than a mistake."
		}).output(sD),
		save: G.route({
			method: "POST",
			path: "/workflows",
			summary: "Create or replace a workflow",
			description: "Writes a workflow design. Say which of the two you mean, so an id that happens to collide cannot silently overwrite somebody's work. A design that could never run is refused, in the same words the editor shows while you type: a loop in the steps, a step waiting on one that is not there, a step with no way of knowing it is finished."
		}).input(fD).output(aD),
		rotateGateToken: G.route({
			method: "POST",
			path: "/workflows/{id}/gate/rotate",
			summary: "Rotate a release gate's token",
			description: "Mints a new credential for the workflow's release gate and retires the old one at once. Every pipeline wired to the gate has to be handed the new URL. Refused for a workflow that declares no gate."
		}).input(lD).output(df),
		remove: G.route({
			method: "DELETE",
			path: "/workflows/{id}",
			summary: "Delete a workflow",
			description: "Removes the design. A run of it that is already going keeps going and stays readable and stoppable, because a run takes its own copy of the design when it starts."
		}).input(lD).output(Y),
		run: G.route({
			method: "POST",
			path: "/workflows/{id}/run",
			summary: "Start a workflow",
			description: "Kicks a workflow off and answers immediately with the run as recorded; the work carries on without you. Point it at a question and every step gets that on top of its own instructions. Every step is written down as waiting up front, so the picture is complete from the first frame. Several runs of one design can be in flight at once without colliding."
		}).input(dD).output(rD),
		runs: G.route({
			method: "GET",
			path: "/workflows/runs",
			summary: "Every workflow run",
			description: "All runs across all workflows, newest first. This is also the only place the runs of a deleted workflow are still reachable."
		}).output(cD),
		stopRun: G.route({
			method: "POST",
			path: "/workflows/runs/{runId}/stop",
			summary: "Stop a run now",
			description: "Nothing further starts, and the steps already going are cut off where they stand. Whatever they had written stays on their branches. Deliberately abrupt rather than letting the current step finish: a step is a whole agent turn, and a stop that kept spending for minutes afterwards is indistinguishable from a button that does nothing. It always ends the run, including one left stranded by a daemon that was replaced mid-flight."
		}).input(uD).output(Y),
		archiveRun: G.route({
			method: "POST",
			path: "/workflows/runs/{runId}/archive",
			summary: "Take a finished run off the board",
			description: "Nothing is lost and the working copies are reclaimed. Every conversation the run started is put away with it, which is what makes this an archive rather than a dismissal: a step has no card of its own, so merely dropping the run would spill its conversations onto the board at the moment somebody said they were done. Refused while the run is still going."
		}).input(uD).output(Y),
		unarchiveRun: G.route({
			method: "POST",
			path: "/workflows/runs/{runId}/unarchive",
			summary: "Bring an archived run back",
			description: "Puts a run and every conversation it started back on the board."
		}).input(uD).output(Y)
	};
})), gD, _D, vD, yD, bD, xD, SD, CD, wD, TD, ED, DD, OD, kD, AD, jD, MD, ND, PD, FD = y((() => {
	U(), Uw(), gD = F({ repos: P(j()).describe("Every repository's id, sorted. An id is its folder relative to the workspace root, and \"root\" is the workspace itself.") }), _D = F({
		name: j().min(1).describe("What to call it in the workspace."),
		cloneUrl: j().min(1).describe("Where to clone it from."),
		branch: j().optional().describe("Which branch to check out. Leave it out for the repository's default.")
	}), vD = F({
		name: j().describe("What it ended up called."),
		path: j().describe("Where it landed.")
	}), yD = F({ name: j().min(1).describe("What to call it, which is also its folder under the workspace root.") }), bD = F({
		repo: j().describe("Which repository."),
		status: R([
			"updated",
			"current",
			"dirty",
			"diverged",
			"no-remote",
			"skipped",
			"error"
		]).describe("What happened to it. Dirty and diverged are why a repository was left alone: it had uncommitted work, or it had moved in a way that cannot be fast-forwarded."),
		behind: M().optional().describe("How many commits it was behind."),
		ahead: M().optional().describe("How many commits it was ahead."),
		head: j().optional().describe("The commit it ended up on."),
		message: j().optional().describe("What went wrong, when something did.")
	}), xD = F({ repos: P(bD).describe("One entry per repository, saying what happened to it.") }), SD = F({
		template: j().min(1).describe("Which kind of app to scaffold, by its key in the template list."),
		name: j().min(1).regex(/^[a-z][a-z0-9-]*$/).describe("What to call this one.")
	}), CD = F({
		repo: j().describe("Which repository to scaffold into."),
		apps: P(SD).min(1).describe("The apps to add.")
	}), wD = F({
		repo: j().describe("Which repository."),
		session: j().describe("What to call the terminal this runs in, so you can find it again."),
		dirs: P(j()).min(1).describe("Which projects to test, as folders relative to the repository. Empty targets the repository root.")
	}), TD = F({
		key: j().describe("The id to name when scaffolding one."),
		label: j().describe("What to call it on screen."),
		description: j().describe("What you get.")
	}), ED = F({ templates: P(TD).describe("The kinds of app the configured source repository knows how to scaffold.") }), DD = F({
		app: j().describe("The app's name, which is also its folder."),
		kind: j().optional().describe("What sort of app it is: the template it came from, or the framework worked out from its dependencies. Absent when it was found purely by having a dev script."),
		previewUrl: j().optional().describe("Where to open it. Absent when this sandbox has no outside address."),
		running: N().describe("Whether its dev server is up."),
		healthy: N().describe("Whether it is actually answering."),
		installed: N().describe("Whether its dependencies are installed, which is what decides whether a start takes seconds or an install first."),
		launch: zw.optional().describe("Where a start the sandbox is running has got to: its shell coming up, installing, its dev command running with nothing listening yet, or exited back to a prompt. Absent when nothing is starting and once it serves.")
	}), OD = F({ apps: P(DD).describe("The apps in this repository.") }), kD = F({
		name: j().describe("The name the package declares."),
		dir: j().describe("Where it lives, relative to the repository."),
		group: j().describe("The top-level folder it sits under, which is what a diagram colours by.")
	}), AD = R([
		"prod",
		"dev",
		"peer"
	]), jD = F({
		from: j().describe("The package that depends."),
		to: j().describe("The package it depends on."),
		type: AD.describe("Which kind of dependency declared it.")
	}), MD = F({
		packages: P(kD).describe("Every package in the repository."),
		edges: P(jD).describe("Which of them use which. Pure data: how to lay it out is yours to decide.")
	}), ND = F({ repo: j().describe("Which repository.") }), PD = F({
		repo: j().describe("Which repository."),
		app: j().min(1).regex(/^[a-z][a-z0-9-]*$/).describe("Which app inside it.")
	});
})), ID, LD, RD, zD, BD = y((() => {
	U(), ID = F({
		dir: j().describe("Where the project is, relative to the workspace root. Empty means the root itself."),
		ecosystem: R(["node", "python"]).describe("Which language's tooling it uses."),
		manager: j().describe("The tool that would do the installing."),
		command: j().describe("The exact command that would run."),
		evidence: j().describe("The file that decided all of the above, so the answer can be checked rather than trusted."),
		state: R([
			"ready",
			"installing",
			"needs-setup",
			"unsupported",
			"stale"
		]).describe("Ready means its dependencies are really there. Stale means it was installed once and has since outgrown that, which is what an agent leaves behind when it adds a dependency without installing it. Unsupported means this sandbox has no such tool."),
		missing: M().optional().describe("How many declared dependencies cannot be found on disk. What separates never-installed from outgrown.")
	}), LD = F({ projects: P(ID).describe("Every project the sandbox found, and whether each is usable.") }), RD = F({ dirs: P(j().max(500)).min(1).max(50).describe("Which projects to install, by folder. Ones already ready, already installing, or with no tool to install them are skipped rather than refused.") }), zD = F({ queued: P(j()).describe("Which of them actually started, which is not necessarily what you asked for.") });
})), VD, HD = y((() => {
	K(), $b(), j_(), Z(), FD(), Jb(), BD(), xv(), VD = {
		tree: G.route({
			method: "GET",
			path: "/workspace/tree",
			summary: "The workspace file tree",
			description: "Every folder and file under the workspace root, as one walk. Name a conversation to read its own private copy of the tree instead of the shared one. Folders the daemon skips, such as installed packages, come back without their contents; ask for those separately."
		}).input(Y_).output(Q_),
		children: G.route({
			method: "GET",
			path: "/workspace/children",
			summary: "A bounded folder listing",
			description: "The entries inside a folder as one flat list. Direct children are the default, which is how the explorer opens a folder the full tree walk left closed; callers that need a small subtree can ask for up to five levels without a request per directory."
		}).input($_).output(ev),
		file: G.route({
			method: "GET",
			path: "/workspace/file",
			summary: "Read part of a text file",
			description: "A window of one file's text, plus how large the whole file is. Never the entire file: an unbounded read is how a single enormous log stalls the daemon for everyone, so ask for the slice you mean to show and page through if you need more."
		}).input(iv).output(sv),
		derived: G.route({
			method: "GET",
			path: "/workspace/derived",
			summary: "Read a file's derived text",
			description: "What a document, picture, recording or archive says, as text, from the shadow the sandbox keeps beside it. This is the same rendering an agent reads instead of the bytes, so it is also the way to check what one is working from. Nothing is derived here: a file with no shadow yet answers that it has none, and whether it could have one."
		}).input(cv).output(mv),
		derive: G.route({
			method: "POST",
			path: "/workspace/derive",
			summary: "Derive a file's text now",
			description: "Renders one file to text and answers with the result, for when its shadow is missing or you want it rebuilt. The same work the background pass does when that setting is on, so this is how a reader gets the text without turning it on for the whole workspace. Costs a parse of exactly one file; a format nothing can read says so rather than failing."
		}).input(cv).output(mv),
		derivedStatus: G.route({
			method: "GET",
			path: "/workspace/derived-status",
			summary: "How the background rendering is doing",
			description: "Whether documents, pictures, recordings and archives are being rendered to text in the background, how many are waiting, which are being read right now, and how many shadows the last whole-tree pass counted. Ask this to tell a file nothing can read from a file whose turn has not come."
		}).output(lv),
		mediaTicket: G.route({
			method: "POST",
			path: "/workspace/media-ticket",
			summary: "Get a pass for streaming a media file",
			description: "Mints the short-lived ticket a video or audio element hands to the streaming route, which serves byte ranges and so cannot carry an ordinary header. Minting it here means a caller can tell whether this sandbox streams media at all, rather than discovering it mid-playback."
		}).input(nv).output(rv),
		resolve: G.route({
			method: "GET",
			path: "/workspace/resolve",
			summary: "Turn a written path into a real file",
			description: "Matches a path somebody wrote in prose against the real tree and says which file it means. A path mentioned in a message is often only the tail of the real one, so this is the lookup behind every clickable file reference rather than a plain existence check."
		}).input(hv).output(gv),
		search: G.route({
			method: "GET",
			path: "/workspace/search",
			summary: "Search the code",
			description: "Ranked results across the whole workspace, grouped, each carrying why it matched and how fresh it is. Left alone it blends plain text, structure, meaning and history in one pass; narrow it to a single kind of search when you already know which you want. Long result sets resume from the cursor it hands back."
		}).input(Vb).output(qb),
		health: G.route({
			method: "GET",
			path: "/workspace/health",
			summary: "A repo's shape in numbers",
			description: "Where one repo's risk sits: the files that change often and are complicated at once, what the index holds, and which modules the rest of the code leans on most. Scoped to a repo, because a codebase is a repo rather than the whole drop."
		}).input(Yb).output(Qb),
		classify: G.route({
			method: "GET",
			path: "/workspace/classify",
			summary: "Sort a messy drop into buckets",
			description: "Proposes which of the loose things in the workspace are code, documents, media or archives. A read-only suggestion by fixed rules, with no model involved: nothing moves until a caller applies the moves it likes through the move call."
		}).output(bv),
		mkdir: G.route({
			method: "POST",
			path: "/workspace/dir",
			summary: "Create a folder",
			description: "Makes a folder, and any missing folders above it."
		}).input(_v).output(Y),
		delete: G.route({
			method: "DELETE",
			path: "/workspace/entry",
			summary: "Delete a file or folder",
			description: "Removes one entry and everything under it. The path travels in the body rather than the address, the same as every other write in this group."
		}).input(tv).output(Y),
		move: G.route({
			method: "POST",
			path: "/workspace/move",
			summary: "Move or rename something",
			description: "Moves one entry to a new path, which is also how you rename it."
		}).input(vv).output(Y),
		copy: G.route({
			method: "POST",
			path: "/workspace/copy",
			summary: "Copy a file or folder",
			description: "Duplicates one entry at a new path, recursively for a folder."
		}).input(vv).output(Y),
		setup: G.route({
			method: "GET",
			path: "/workspace/setup",
			summary: "Which projects have their dependencies installed",
			description: "Per project, whether its dependencies are actually present. A project that arrives by import comes without them, so files landing is not the same as the project working: until this says a project is ready, its type checks and tests can only mislead you."
		}).output(LD),
		install: G.route({
			method: "POST",
			path: "/workspace/setup/install",
			summary: "Install a project's dependencies",
			description: "Starts the install for one or more projects in a terminal you can attach to, and answers immediately. The run survives a page reload and its output stays in the terminal history."
		}).input(RD).output(zD),
		repos: G.route({
			method: "GET",
			path: "/workspace/repos",
			summary: "Repos in the workspace",
			description: "Every git repo the daemon found in the workspace, with where each one sits and what it is called."
		}).output(gD),
		addRepo: G.route({
			method: "POST",
			path: "/workspace/repos",
			summary: "Clone a repo in",
			description: "Clones a repository into the workspace beside the others, using whatever forge credentials the sandbox already holds."
		}).input(_D).output(vD),
		createRepo: G.route({
			method: "POST",
			path: "/workspace/repos/new",
			summary: "Start a new repo",
			description: "Makes an empty repository in the workspace: a folder named after it, initialised, with a README that names it and one commit, so an agent can start on it at once. Nothing is cloned and nothing leaves the machine."
		}).input(yD).output(vD),
		sync: G.route({
			method: "POST",
			path: "/workspace/sync",
			summary: "Pull every repo up to date",
			description: "Fetches every repo that has a remote and fast-forwards the ones that can move safely, reporting what happened to each. This runs by itself at the start of a turn; call it directly to refresh on demand, or to re-sync a repo that had drifted."
		}).output(xD),
		templates: G.route({
			method: "GET",
			path: "/workspace/templates",
			summary: "App templates you can add",
			description: "The kinds of app the configured source repo knows how to scaffold, which is what an add-app picker lists."
		}).output(ED),
		addApps: G.route({
			method: "POST",
			path: "/workspace/repos/{repo}/apps",
			summary: "Scaffold new apps into a repo",
			description: "Starts scaffolding one or more apps inside an existing multi-package repo and answers straight away. Watch the terminal it opens for progress and for anything that goes wrong."
		}).input(CD).output(Y),
		appsList: G.route({
			method: "GET",
			path: "/workspace/repos/{repo}/apps",
			summary: "Apps inside a repo",
			description: "The apps in one multi-package repo, each with its preview address and whether its dev server is up."
		}).input(ND).output(OD),
		packageGraph: G.route({
			method: "GET",
			path: "/workspace/repos/{repo}/graph",
			summary: "How a repo's packages depend on each other",
			description: "Every package in one multi-package repo and which of its siblings each one uses, which is what a dependency view draws."
		}).input(ND).output(MD),
		modules: G.route({
			method: "GET",
			path: "/workspace/modules",
			summary: "Every package across every repo",
			description: "The named packages in the whole workspace, which is what a review list groups changed files under when a reader wants packages rather than paths. Whole-workspace in one answer, because a review spans repos and asking per repo would be a fan-out on every open."
		}).output(w_),
		startApp: G.route({
			method: "POST",
			path: "/workspace/repos/{repo}/apps/{app}/start",
			summary: "Start an app's dev server",
			description: "Brings up one app's preview server in an attachable terminal, so its address starts answering."
		}).input(PD).output(Y),
		stopApp: G.route({
			method: "POST",
			path: "/workspace/repos/{repo}/apps/{app}/stop",
			summary: "Stop an app's dev server",
			description: "Shuts one app's preview server down and frees its port."
		}).input(PD).output(Y),
		runTests: G.route({
			method: "POST",
			path: "/workspace/repos/{repo}/tests",
			summary: "Run a project's tests",
			description: "Starts the test run for the projects you name in an attachable terminal and answers straight away. The terminal is where the results appear."
		}).input(wD).output(Y)
	};
})), UD = y((() => {
	K(), U(), wE(), yb(), YT(), Z(), G.output(KT), G.input(Wy).output(Y), G.output(Y), G.input(cc()).output(cc()), G.input(nE).output(W(iE)), G.input(oE).output(W(iE));
})), WD, GD, KD, qD, JD = y((() => {
	U(), WD = F({
		origin: j(),
		mode: R(["read", "act"])
	}), GD = F({
		browser: j(),
		tabs: M(),
		grants: P(WD),
		paused: N()
	}), KD = F({
		id: j(),
		platform: j().min(1),
		online: N(),
		version: j().optional(),
		lastSeen: M().optional(),
		facts: GD.optional()
	}), F({ browsers: P(KD) }), qD = F({
		name: j(),
		value: j(),
		domain: j(),
		path: j(),
		expires: M().optional(),
		httpOnly: N(),
		secure: N(),
		sameSite: R([
			"Strict",
			"Lax",
			"None"
		])
	}), F({
		account: j().min(1),
		origin: j().min(1),
		cookies: P(qD).min(1).max(300)
	}), F({
		account: j().min(1),
		domain: j().min(1)
	}), F({
		ok: N(),
		message: j(),
		cookies: P(qD).optional()
	});
})), YD = y((() => {
	K(), U(), yb(), Z(), JD(), G.output(GD), G.input(qy).output(Y), G.output(Y), G.input(cc()).output(cc());
})), XD = y((() => {
	K(), U(), Oh(), od(), J(), Hd(), Z(), G.output(ed), G.input(nd).output(W(rd)), G.input(id).output(W(Ch)), G.input(Ld).output(F({ applied: N() })), G.input(F({
		conversationId: j().min(1),
		text: j(),
		attachments: P(j()).optional(),
		editorContext: md.optional()
	})).output(F({
		applied: N(),
		invalid: j().optional()
	})), G.input(F({ toml: j() })).output(F({ settings: P(j()) })), G.input(id.pick({ conversationId: !0 })).output(Y), G.output(Y);
})), ZD = y((() => {})), QD, $D, eO = y((() => {
	QD = "The interrupted request is repeated below, where part of it was already completed in this session, continue from that point instead of starting over.", $D = {
		auth: `The Claude credential that interrupted this conversation has been renewed, and this turn resumed automatically. ${QD}`,
		outage: `The model provider was briefly unavailable and interrupted this conversation; this turn resumed automatically. ${QD}`,
		restart: `The sandbox restarted while this turn was running, which stopped it, and this turn resumed automatically once it came back. ${QD}`,
		stopped: `The previous attempt at this request stopped before it finished, and it has been sent again. ${QD}`,
		limit: `The model provider's usage allowance ran out while this turn was running, which stopped it, and it has been sent again. ${QD}`,
		switched: "The model provider's usage allowance ran out while this turn was running, which stopped it, and it has been sent again on a different account, which starts a fresh session. The conversation so far has been carried across above, including the part of the request that was already completed, and the sandbox has measured where the work actually stands (the files changed on this branch, what was verified, what the checklist still holds) in the note headed 'Where the work stands': trust that note over anything recalled, then continue from that point instead of starting over.",
		carried: `The model provider's usage allowance ran out while this turn was running, which stopped it, and it has been sent again on a different account of the same provider, in this same session: everything you knew is still here. ${QD}`,
		refused: "The model provider refused the previous attempt at this request outright, because its usage allowance was spent: no part of the request below was read or acted on, and nothing has been done towards it. It has been sent again, and starts from the beginning. Where the sandbox has measured earlier work on this branch, it is in the note headed 'Where the work stands'.",
		answered: "The sandbox restarted while this conversation was waiting for the user to respond; it is back, and their response follows below: continue from where the session left off."
	}, $D.answered;
})), tO = y((() => {})), nO = y((() => {})), rO = y((() => {})), iO, aO = y((() => {
	U(), iO = [
		"editor",
		"read",
		"drive",
		"land"
	], R(iO);
})), oO, sO, cO, lO, uO, dO, fO = y((() => {
	Sp(), oO = [
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
	], sO = oO, sO.filter((e) => e.versioned).map((e) => e.path), sO.filter((e) => e.versioned || e.authored).map((e) => e.path), cO = {
		config: `${bp}/config`,
		records: `${bp}/records`,
		local: `${bp}/local`,
		identity: `${bp}/identity`,
		secrets: `${bp}/secrets`
	}, lO = Object.keys(cO), uO = (e) => {
		switch (e.portability) {
			case "secret": return "secrets";
			case "identity": return "identity";
			case "derived": return "local";
			case "carry": return e.versioned === !0 || e.authored === !0 ? "config" : "records";
		}
	}, lO.flatMap((e) => {
		let t = sO.filter((t) => uO(t) === e);
		return t.some((e) => e.versioned === !0) ? t.filter((e) => e.versioned !== !0).map((e) => e.path) : [`${cO[e]}/`];
	}), dO = sO.filter((e) => e.backup !== !1 && (e.portability === "carry" || e.portability === "identity")).map((e) => e.path), sO.filter((e) => !dO.includes(e.path)).map((e) => e.path), sO.filter((e) => e.invalidates.includes("manifests")).map((e) => e.path), `${bp}`, `${bp}`;
})), pO = y((() => {})), mO = y((() => {})), hO = y((() => {})), gO = y((() => {})), _O = y((() => {})), vO = y((() => {})), yO = y((() => {})), bO, xO, SO, CO, wO = y((() => {
	bO = /(?:auth[_-]?token|access[_-]?token|refresh[_-]?token|api[_-]?key|access[_-]?key|secret[_-]?key|client[_-]?secret|private[_-]?key|passwo?rd|passphrase|credentials?|secret|token|bearer)["']?[ \t]*[:=][ \t]*(?:"([^"\n]*)"|'([^'\n]*)'|([^\s"',;}\n]*))/gi, xO = [
		/-----BEGIN (?:[A-Z0-9]+ )*PRIVATE KEY-----/,
		/PuTTY-User-Key-File-\d/,
		/\b[a-z][a-z0-9+.-]*:\/\/[^\s/:@]+:(?!\*+@)[^\s/@]{3,}@/i
	], SO = [
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
	], [...xO, ...SO], CO = (e) => e.map((e) => new RegExp(e.source, `${e.flags}g`)), CO(SO), new RegExp(bO.source, bO.flags);
})), TO = y((() => {})), EO, DO = y((() => {
	EO = 80, EO * .6;
})), OO = y((() => {
	DO(), fO();
})), kO = y((() => {})), AO = y((() => {
	lS();
})), jO = y((() => {
	U(), F({
		type: z("hello"),
		token: j(),
		version: j()
	});
})), MO = y((() => {
	U(), F({
		type: z("hello"),
		token: j(),
		version: j()
	});
})), NO = y((() => {})), PO, FO = y((() => {
	U(), yf(), F({
		provider: j().min(1),
		type: j().min(1),
		id: j(),
		channelId: j(),
		author: F({
			id: j(),
			name: j(),
			groups: P(j()).optional()
		}),
		content: j(),
		mentioned: N().optional(),
		branch: j().optional(),
		history: P(F({
			author: F({
				id: j(),
				name: j()
			}),
			content: j(),
			timestamp: j(),
			self: N().optional()
		})).optional(),
		timestamp: j(),
		extra: L(j(), cc()).optional()
	}), PO = F({
		state: R([
			"waiting",
			"code",
			"failed"
		]),
		code: j().optional(),
		detail: j().optional(),
		since: M().optional()
	}), vf.extend({
		whisperReady: N().optional(),
		pairing: L(j(), PO).optional()
	});
})), IO = y((() => {})), LO = y((() => {})), RO = y((() => {})), zO = y((() => {})), BO = y((() => {})), VO, HO = y((() => {
	VO = {
		cautious: 0,
		balanced: .25,
		eager: .4
	}, VO.balanced;
})), UO = y((() => {})), WO, GO, KO, qO, JO, YO = y((() => {
	U(), WO = [
		"claude",
		"codex",
		"cursor",
		"opencode",
		"translator"
	], GO = R(WO), KO = F({
		kind: R([
			"blessed",
			"latest",
			"pinned",
			"image"
		]).describe("Where this engine's version comes from."),
		version: j().optional().describe("Which version, when it is pinned to one.")
	}), qO = F({
		version: j().describe("Which version was refused."),
		reason: j().describe("What was wrong with it: it would not launch, or it did not export what the daemon calls."),
		at: j().describe("When it was refused.")
	}), JO = F({
		id: GO.describe("Which engine."),
		label: j().describe("What it is called on screen."),
		running: F({
			version: j().optional().describe("The version a turn would use right now. Absent means there is no copy of this engine here yet."),
			source: R(["image", "store"]).describe("Whether that version is the one baked into the sandbox image or one the store installed over it.")
		}).describe("What a turn started now would actually run."),
		baked: j().optional().describe("The version the image bakes, which is the floor everything else falls back to. Absent on an image that carries no copy of it."),
		channel: KO.describe("The owner's standing answer for this engine."),
		offered: F({
			version: j().describe("The version this engine would move to."),
			blessed: N().describe("Whether the blessed list names this version, which on the latest channel is routinely no.")
		}).optional().describe("A newer version waiting, absent when the running one is already what the channel asks for."),
		blessed: j().optional().describe("What the blessed list names for this engine, when the list has been read."),
		previous: j().optional().describe("The version kept one step back, which is what going back means."),
		quarantined: P(qO).describe("Versions the store installed and then refused, with the reason."),
		diskBytes: M().int().nonnegative().describe("What this engine's kept versions cost on the daemon's volume."),
		installing: N().optional().describe("Whether this engine is currently being installed in the background.")
	}), F({
		engines: P(JO).describe("Every engine this sandbox can run, whether or not the store holds anything for it."),
		checkedAt: j().optional().describe("When upstream was last asked what it publishes. Absent until the first check has run."),
		listSource: j().describe("Where the blessed list is read from, so a self-hosted sandbox can show its own."),
		listReadAt: j().optional().describe("When that list was last read. Absent means it has never been reachable from here.")
	}), F({
		id: GO.describe("Which engine."),
		kind: R([
			"blessed",
			"latest",
			"pinned",
			"image"
		]).describe("Where its version should come from."),
		version: j().optional().describe("Which version, required when pinning and ignored otherwise.")
	}), F({
		id: GO.describe("Which engine."),
		version: j().optional().describe("Which version. Leave it out for whatever the channel offers; naming one takes a version nobody has blessed, deliberately."),
		floor: j().optional().describe("Install the lowest published version at or above this one. What a turn refused for being too old sends back.")
	}), F({ id: GO.describe("Which engine.") }), F({
		ok: z(!0).describe("It went through."),
		version: j().describe("Which version is now active."),
		source: R(["image", "store"]).describe("Whether that is the image's copy or the store's."),
		fromNextTurn: N().describe("Whether the change reaches turns already in flight, or only the next one.")
	});
})), XO, ZO, QO, $O, ek, tk, nk, rk, ik, ak = y((() => {
	U(), XO = F({
		content: j(),
		hash: j()
	}), ZO = F({
		bornAt: M(),
		at: M(),
		apt: P(j()),
		paths: P(j())
	}), QO = R([
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
	]), $O = F({
		tool: j(),
		kind: QO,
		sessions: P(j()),
		commands: P(j()),
		firstAt: M(),
		lastAt: M(),
		count: M(),
		declinedAt: M().optional()
	}), F({
		installs: P($O),
		drift: ZO.optional()
	}), ek = F({
		tool: j(),
		kind: QO,
		sessions: M(),
		lastAt: M(),
		live: N(),
		drafted: N().optional(),
		declined: N().optional(),
		step: j().optional()
	}), F({
		tool: j().min(1),
		decision: R([
			"adopt",
			"dismiss",
			"restore"
		])
	}), tk = F({
		base: j(),
		root: j().optional()
	}), F({
		proposal: XO.optional(),
		custom: XO.optional(),
		approved: XO.optional(),
		appliedHash: j().optional(),
		container: j().optional(),
		drift: ZO.optional(),
		recurring: P(ek).optional(),
		localImage: tk.optional()
	}), F({ hash: j().min(1) }), nk = F({
		name: j(),
		version: j().optional()
	}), rk = F({
		id: j(),
		name: j(),
		origin: R([
			"custom",
			"capability",
			"base"
		]),
		originLabel: j().optional(),
		state: R([
			"active",
			"after-rebuild",
			"awaiting-approval"
		]),
		tools: P(nk),
		extras: M().optional(),
		purpose: j().optional(),
		detail: j().optional(),
		commands: j().optional()
	}), F({ items: P(rk) }), ik = F({
		name: j(),
		status: R([
			"packing",
			"ready",
			"failed"
		]),
		bytes: M(),
		createdAt: M(),
		secrets: N(),
		error: j().optional()
	}), F({ exports: P(ik) });
})), ok, sk, ck, lk, uk, dk = y((() => {
	U(), $u(), ok = R([
		"definition",
		"bundle",
		"hermes",
		"openclaw"
	]), sk = R(["hermes", "openclaw"]), ck = R([
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
	]), lk = F({
		id: j(),
		group: ck,
		label: j(),
		detail: j().optional(),
		applicable: N(),
		reason: j().optional(),
		recommended: N(),
		secrets: P(j())
	}), F({
		source: ok,
		token: j(),
		name: j().optional(),
		items: P(lk),
		carriesSecrets: N(),
		refused: P(j()),
		needsAction: P(Qu)
	}), F({
		token: j(),
		items: P(j()),
		includeSecrets: N()
	}), F({
		applied: P(F({
			id: j(),
			group: ck,
			label: j()
		})),
		failed: P(F({
			id: j(),
			label: j(),
			error: j()
		})),
		refused: P(j()),
		needsAction: P(Qu),
		presentation: F({
			name: j().optional(),
			image: j().optional()
		}).optional()
	}), uk = F({
		id: j(),
		online: N(),
		found: sk.optional(),
		detail: j().optional()
	}), F({ hosts: P(uk) }), F({ host: j().min(1) });
})), fk, pk, mk, hk, gk, _k, vk = y((() => {
	U(), $u(), yb(), vC(), fk = uc({
		id: j().min(1),
		remote: j().min(1),
		ref: j().optional()
	}), pk = uc({
		remote: j().min(1),
		ref: j().optional()
	}), mk = uc({
		baseImage: j().optional(),
		dockerfile: j().optional()
	}), hk = (e) => {
		let t = e;
		for (; t instanceof vl || t instanceof yl;) t = t.unwrap();
		return t;
	}, gk = () => uc(Object.fromEntries(Object.entries(tC.shape).map(([e, t]) => [e, hk(t).optional()]))).prefault({}), _k = uc({
		schemaVersion: z(1),
		name: j().optional(),
		environment: mk.prefault({}),
		workspace: pk.optional(),
		repositories: P(fk).prefault([]),
		capabilities: P(ob).prefault([]),
		secrets: P(j()).prefault([]),
		settings: gk()
	}), F({
		toml: j(),
		omitted: P(Qu)
	}), F({ differences: P(Qu) }), F({
		remote: j().min(1).optional(),
		name: j().min(1).optional(),
		owner: j().min(1).optional()
	}), F({
		remote: j(),
		branch: j(),
		created: N()
	}), F({
		remote: j().optional(),
		branch: j().optional(),
		hosts: P(j())
	}), F({
		version: z(3),
		sandbox: F({ name: j() }).optional(),
		presentation: F({
			name: j().optional(),
			image: j().optional()
		}).optional(),
		createdAt: M(),
		secrets: N(),
		repos: P(j()),
		definition: _k,
		excluded: P(F({
			path: j(),
			portability: j(),
			note: j().optional()
		}))
	});
})), yk = y((() => {})), bk = y((() => {})), xk = y((() => {})), Sk = y((() => {})), Ck = y((() => {})), wk = y((() => {
	Dp();
})), Tk, Ek, Dk = y((() => {
	Vl(), pf(), xf(), Hh(), N_(), K_(), J_(), Bb(), Tx(), Dx(), jx(), Nx(), sS(), IC(), hw(), _w(), xw(), Cw(), Tw(), Iw(), Rw(), Gw(), Qw(), oT(), lT(), fT(), ST(), wT(), ET(), MT(), BT(), HT(), WT(), zE(), VE(), WE(), KE(), hD(), HD(), UD(), YD(), XD(), ZD(), Oh(), _p(), eO(), zv(), Sh(), tO(), nO(), rO(), Vl(), aO(), Sp(), fO(), pO(), mO(), hO(), gO(), _O(), qu(), Zu(), cS(), vO(), SS(), yO(), NS(), wO(), TO(), Iu(), OO(), AO(), jO(), MO(), NO(), od(), FO(), IO(), LO(), RO(), kO(), lS(), Vu(), zO(), BO(), HO(), Dp(), UO(), yf(), J(), Tm(), W_(), Ag(), yb(), Ug(), Dm(), $b(), wE(), YO(), ak(), ey(), aS(), km(), j_(), pw(), Bh(), YT(), yw(), py(), og(), Pw(), Up(), Cx(), Pb(), Uw(), PC(), Hd(), Xw(), lf(), Wd(), iT(), bT(), Rb(), Rf(), AT(), vC(), Qm(), Z(), LE(), Gm(), RT(), Ay(), JD(), pD(), FD(), Jb(), BD(), xv(), dk(), vk(), yk(), bk(), xk(), DO(), XT(), Sk(), Ck(), wk(), Tk = {
		accounts: ff,
		activity: bf,
		agent: Vh,
		agents: M_,
		approvals: G_,
		automations: q_,
		capabilities: zb,
		chores: wx,
		ci: Ex,
		endpoints: Ax,
		extensions: oS,
		personas: FC,
		safety: CT,
		sessions: jT,
		settings: zT,
		share: VT,
		skills: UT,
		intentic: bw,
		git: mw,
		history: gw,
		workspace: VD,
		inventory: Sw,
		issues: ww,
		logs: Fw,
		loops: Lw,
		panels: Ww,
		ports: Zw,
		public: aT,
		prepush: cT,
		providers: dT,
		push: xT,
		secrets: TT,
		system: RE,
		translator: BE,
		usage: UE,
		vpn: GE,
		exit: Mx,
		workflows: mD
	}, Ek = Fl(Tk), Ek.map((e) => e.name), Bl(Tk);
})), Ok, kk, Ak, jk, Mk, Nk, Pk, Fk, Ik, Lk = y((() => {
	Sp(), Ok = 64, kk = 8, Ak = 0, jk = (e) => `r${e.toString(36).padStart(kk, "0")}${(Ak++).toString(36)}`, Mk = (e, t, n) => `${e.prefix}-${t}${n === void 0 ? "" : `-${n}`}`.slice(0, Ok).replace(/[-_]+$/u, ""), Nk = (e) => `${e.prefix}-`, Pk = (e) => `${bp}/${e.runsDir}`, Fk = (e, t) => `${Pk(e)}/${t}`, Ik = (e, t) => `${Fk(e, t)}/run.json`;
})), Rk, zk, Bk, Vk, Hk, Uk, Wk, Gk, Kk, qk, Jk, Yk, Xk, Zk, Qk, $k, eA, tA, nA, rA, iA, aA, oA, sA, cA, lA, uA, dA = y((() => {
	Dk(), Lk(), Rk = "docs/architecture", zk = `${bp}/config/docs`, Bk = "repo.json", Vk = "repo.md", Hk = "index.json", Uk = "README.md", Wk = (e) => `${e}/${Uk}`, Gk = /* @__PURE__ */ new Set([
		Bk,
		Vk,
		Hk
	]), Kk = (e) => Gk.has(e) ? `${Rk}/${e}` : e, qk = (e) => e.some((e) => e !== Hk), Jk = (e, t) => e === "" ? t : `${e}/${t}`, Yk = (e, t) => {
		let n = t.filter((t) => t === "" || t === e || e.startsWith(`${t}/`)).toSorted((e, t) => t.length - e.length)[0];
		if (n !== void 0) return {
			repo: n,
			dir: n === "" ? e : e.slice(n.length + 1)
		};
	}, Xk = (e, t) => Jk(e, Kk(t)), Zk = (e) => e === "" ? "root" : e, Qk = (e) => `${zk}/${Zk(e)}`, $k = (e, t) => `${Qk(e)}/${t}`, eA = {
		runsDir: "config/docs/runs",
		prefix: "dg",
		scanRuns: 10
	}, tA = Pk(eA), nA = (e) => Ik(eA, e), rA = `${zk}/seen.json`, iA = eA.scanRuns, aA = (e) => jk(e), oA = (e) => {
		let t = e.toLowerCase().replace(/[/\\]+/g, "-").replace(/[^a-z0-9-]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
		return t === "" ? "pkg" : t.slice(0, 40);
	}, sA = Nk(eA), cA = (e, t) => Mk(eA, e, t), lA = (e) => cA(e, "map"), uA = (e) => `${sA}${e}-`;
})), fA, pA, mA, hA = y((() => {
	Dk(), dA(), fA = 5, pA = async (e, t) => {
		let n = Qk(t);
		try {
			let t = await e.sandbox.json(`/workspace/children?path=${encodeURIComponent(n)}&depth=${fA}`), r = `${n}/`;
			return ev.parse(t).entries.filter((e) => e.type === "file" && e.path.startsWith(r)).map((e) => e.path.slice(r.length)).toSorted();
		} catch {
			return [];
		}
	}, mA = (e) => e.filter((e) => e.endsWith(`/${Uk}`)).map((e) => e.slice(0, -`/${Uk}`.length));
})), gA, _A, vA, yA, bA, xA = y((() => {
	Pe(), dA(), hA(), gA = t(Ne, rA), {state: _A, start: vA} = n({
		host: Ne,
		everyMs: 6e5,
		initial: () => [],
		read: async (e) => {
			let t = await gA.read();
			return (await Promise.all(e.workspace.repos().map(async ({ repo: n }) => (await pA(e, n)).includes("repo.json") && t[Zk(n)] === void 0 ? n : void 0))).filter((e) => e !== void 0);
		}
	}), yA = () => {
		let e = _A.value.length;
		if (e !== 0) return {
			count: e,
			tone: "info",
			tooltip: `${e} repositor${e === 1 ? "y has" : "ies have"} newly generated documentation waiting to be reviewed`
		};
	}, bA = async (e) => {
		let t = Zk(e);
		_A.value = _A.value.filter((t) => t !== e), (await gA.read())[t] === void 0 && await gA.mark({ [t]: (/* @__PURE__ */ new Date()).toISOString() });
	};
})), SA, $, CA, wA, TA, EA, DA, OA, kA, AA, jA, MA, NA, PA = y((() => {
	SA = (e) => typeof e == "object" && !!e && !Array.isArray(e), $ = (e) => {
		if (typeof e != "string") return;
		let t = e.trim();
		return t === "" ? void 0 : t;
	}, CA = (e) => Array.isArray(e) ? e.flatMap((e) => $(e) === void 0 ? [] : [$(e)]) : [], wA = (e) => typeof e == "number" && Number.isFinite(e) ? e : void 0, TA = /* @__PURE__ */ new Set([
		"1",
		"2",
		"3",
		"4",
		"5",
		"neutral"
	]), EA = (e) => typeof e == "string" && TA.has(e) ? e : void 0, DA = (e) => {
		if (!SA(e)) return;
		let t = $(e.sourceRev), n = wA(e.generatedAt);
		if (t !== void 0 && n !== void 0) return {
			sourceRev: t,
			generatedAt: n,
			model: $(e.model)
		};
	}, OA = (e) => {
		if (!SA(e)) return;
		let t = $(e.id), n = $(e.oneLiner);
		if (t !== void 0 && n !== void 0) return {
			id: t,
			name: $(e.name) ?? t,
			oneLiner: n,
			packages: CA(e.packages),
			accent: EA(e.accent)
		};
	}, kA = (e) => {
		if (!SA(e)) return;
		let t = $(e.path), n = $(e.what);
		if (t === void 0 || n === void 0) return;
		let r = wA(e.line);
		return {
			path: t,
			what: n,
			line: r !== void 0 && r >= 1 ? Math.floor(r) : void 0
		};
	}, AA = (e) => {
		try {
			return JSON.parse(e);
		} catch {
			return;
		}
	}, jA = (e) => {
		let t = AA(e);
		if (!SA(t)) return;
		let n = t.repo, r = DA(t.provenance);
		if (typeof n != "string" || r === void 0) return;
		let i = t.components, a = t.glossary;
		return {
			repo: n,
			components: (Array.isArray(i) ? i : []).flatMap((e) => {
				let t = OA(e);
				return t === void 0 ? [] : [t];
			}),
			glossary: (Array.isArray(a) ? a : []).flatMap((e) => {
				if (!SA(e)) return [];
				let t = $(e.term), n = $(e.means);
				return t === void 0 || n === void 0 ? [] : [{
					term: t,
					means: n
				}];
			}),
			reading: CA(t.reading),
			provenance: r
		};
	}, MA = (e) => {
		let t = AA(e);
		if (!SA(t)) return;
		let n = t.repo;
		if (typeof n != "string") return;
		let r = t.entries, i = t.edges;
		return {
			repo: n,
			generatedAt: wA(t.generatedAt) ?? 0,
			entries: (Array.isArray(r) ? r : []).flatMap((e) => {
				if (!SA(e)) return [];
				let t = $(e.dir);
				if (t === void 0) return [];
				let n = e.anchors;
				return [{
					dir: t,
					name: $(e.name),
					oneLiner: $(e.oneLiner) ?? "",
					component: $(e.component),
					anchors: (Array.isArray(n) ? n : []).flatMap((e) => {
						let t = kA(e);
						return t === void 0 ? [] : [t];
					}),
					files: wA(e.files) ?? 0,
					loc: wA(e.loc) ?? 0,
					hasTests: e.hasTests === !0,
					readmeRev: $(e.readmeRev) ?? "",
					updatedAt: wA(e.updatedAt) ?? 0,
					stale: e.stale === !0,
					reason: $(e.reason),
					behind: wA(e.behind) ?? 0
				}];
			}),
			edges: (Array.isArray(i) ? i : []).flatMap((e) => {
				if (!SA(e)) return [];
				let t = $(e.from), n = $(e.to);
				return t === void 0 || n === void 0 ? [] : [{
					from: t,
					to: n,
					dev: e.dev === !0
				}];
			}),
			orphans: CA(t.orphans),
			undocumented: CA(t.undocumented)
		};
	}, NA = (e, t) => e.components.find((e) => e.packages.includes(t));
})), FA, IA, LA, RA, zA, BA, VA = y((() => {
	PA(), Pe(), dA(), hA(), FA = async (e) => {
		try {
			let t = MA(await Ne().workspace.file(Xk(e, "index.json")) ?? "");
			return new Map((t?.entries ?? []).map((e) => [e.dir, e.oneLiner]));
		} catch {
			return /* @__PURE__ */ new Map();
		}
	}, IA = async (e) => {
		try {
			return await Ne().workspace.file(Xk(e, Bk)) !== void 0;
		} catch {
			return !1;
		}
	}, {state: LA, start: RA, refresh: zA} = n({
		host: Ne,
		everyMs: 6e4,
		initial: () => /* @__PURE__ */ new Map(),
		read: async (e) => {
			let t = /* @__PURE__ */ new Map();
			return await Promise.all(e.workspace.repos().map(async ({ repo: n, docs: r }) => {
				let [i, a, o] = await Promise.all([
					r ? FA(n) : /* @__PURE__ */ new Map(),
					pA(e, n),
					r ? IA(n) : !1
				]);
				a.includes("repo.json") && t.set(n, {
					oneLiner: "",
					draft: !0
				});
				for (let e of mA(a)) t.set(Jk(n, e), {
					oneLiner: "",
					draft: !0
				});
				o && t.set(n, {
					oneLiner: "",
					draft: !1
				});
				for (let [e, r] of i) t.set(Jk(n, e), {
					oneLiner: r,
					draft: !1
				});
			})), t;
		}
	}), BA = (e) => LA.value.get(e);
})), HA, UA, WA, GA, KA, qA, JA, YA, XA = y((() => {
	HA = { class: "min-w-0 truncate font-mono" }, UA = { class: "opacity-70" }, WA = { class: "px-2 py-6 text-center text-2xs text-subtle" }, GA = { class: "flex flex-col gap-0.5 text-2xs text-subtle" }, KA = { key: 0 }, qA = {
		key: 0,
		class: "flex items-center gap-1.5"
	}, JA = {
		key: 1,
		class: "text-warning"
	}, YA = /*@__PURE__*/ p({
		__name: "DocsNav",
		props: {
			components: {},
			index: {},
			page: {}
		},
		emits: ["open"],
		setup(e, { emit: t }) {
			let n = t, r = a(() => e.index?.entries ?? []), i = a(() => new Map(r.value.map((e) => [e.dir, e]))), p = a(() => r.value.filter((e) => e.stale).length), m = a(() => {
				let t = new Set(e.components.flatMap((e) => e.packages)), n = r.value.map((e) => e.dir).filter((e) => !t.has(e));
				return n.length === 0 ? [...e.components] : [...e.components, {
					id: "unmapped",
					name: "Not on the map",
					oneLiner: "Documented after the map was drawn",
					accent: "neutral",
					packages: n
				}];
			}), ee = a(() => m.value.reduce((e, t) => e + t.packages.length, 0)), ne = (e) => {
				let t = i.value.get(e), n = e.lastIndexOf("/");
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
			}, ie = re(""), ae = (e) => {
				let t = ie.value.trim().toLowerCase();
				return t === "" || e.name.toLowerCase().includes(t) ? e.packages : e.packages.filter((e) => `${e} ${i.value.get(e)?.oneLiner ?? ""}`.toLowerCase().includes(t));
			}, le = a(() => m.value.flatMap((e) => {
				let t = ae(e);
				return t.length === 0 ? [] : [{
					key: e.id,
					label: e.name,
					count: t.length,
					accent: e.accent,
					items: t.map(ne)
				}];
			})), ue = () => {
				let e = le.value[0]?.items[0];
				e !== void 0 && n("open", e.dir);
			}, de = /* @__PURE__ */ new Map(), fe = (e, t) => {
				if (t instanceof Element) {
					de.set(e, t);
					return;
				}
				de.delete(e);
			};
			return oe(() => e.page, (e) => {
				e !== void 0 && te(() => de.get(e)?.scrollIntoView({ block: "nearest" }));
			}, { immediate: !0 }), (t, i) => (h(), o(_(he), {
				modelValue: ie.value,
				"onUpdate:modelValue": i[1] ||= (e) => ie.value = e,
				"aria-label": "Documents",
				groups: le.value,
				filterable: ee.value > 12,
				"sticky-headings": "",
				placeholder: "Filter packages…",
				onKeydown: se(ce(ue, ["prevent"]), ["enter"])
			}, u({
				pinned: v(() => [f(_(ve), {
					as: "button",
					density: "dense",
					icon: "align-left",
					title: "Overview",
					selected: e.page === void 0,
					class: "rounded-lg",
					onClick: i[0] ||= (e) => n("open", void 0)
				}, null, 8, ["selected"])]),
				row: v(({ item: t }) => [(h(), o(_(ve), {
					key: t.dir,
					ref: (e) => fe(t.dir, e),
					as: "button",
					density: "dense",
					title: t.title,
					selected: e.page === t.dir,
					class: "rounded-lg",
					onClick: (e) => n("open", t.dir)
				}, u({
					title: v(() => [l("span", HA, [l("span", UA, g(t.prefix), 1), d(g(t.leaf), 1)])]),
					_: 2
				}, [t.stale ? {
					name: "meta",
					fn: v(() => [i[2] ||= l("span", {
						class: "size-1.5 rounded-full bg-warning/70",
						"aria-hidden": "true"
					}, null, -1)]),
					key: "0"
				} : void 0]), 1032, [
					"title",
					"selected",
					"onClick"
				]))]),
				empty: v(() => [l("p", WA, g(ie.value.trim() === "" ? "No package pages here yet." : `Nothing matches "${ie.value.trim()}".`), 1)]),
				_: 2
			}, [e.index === void 0 ? void 0 : {
				name: "footer",
				fn: v(() => [l("div", GA, [
					l("span", null, [d(g(r.value.length) + " documented", 1), e.index.undocumented.length > 0 ? (h(), c("span", KA, " · " + g(e.index.undocumented.length) + " not yet", 1)) : s("", !0)]),
					p.value > 0 ? (h(), c("span", qA, [i[3] ||= l("span", {
						class: "size-1.5 shrink-0 rounded-full bg-warning/70",
						"aria-hidden": "true"
					}, null, -1), d(" " + g(p.value) + " may be out of date ", 1)])) : s("", !0),
					e.index.orphans.length > 0 ? (h(), c("span", JA, g(e.index.orphans.length) + " document" + g(e.index.orphans.length === 1 ? "" : "s") + " for packages that are gone ", 1)) : s("", !0)
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
})), ZA, QA = y((() => {
	XA(), XA(), ZA = YA;
})), $A, ej, tj, nj, rj, ij, aj, oj, sj, cj, lj, uj, dj, fj, pj = y((() => {
	Pe(), $A = { class: "flex flex-col gap-5" }, ej = {
		key: 0,
		class: "flex items-center gap-2 text-xs text-muted"
	}, tj = {
		key: 3,
		class: "text-sm text-muted"
	}, nj = {
		key: 4,
		class: "flex flex-col gap-0.5"
	}, rj = { class: "flex min-w-0 flex-col" }, ij = { class: "truncate font-mono text-xs text-link" }, aj = { key: 0 }, oj = { class: "text-2xs text-muted" }, sj = {
		key: 5,
		class: "flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 text-2xs text-subtle"
	}, cj = { key: 0 }, lj = { class: "font-mono" }, uj = { key: 1 }, dj = { key: 2 }, fj = /*@__PURE__*/ p({
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
				return Ce(Ne().href(n), () => Ne().navigate(n));
			}, n = a(() => e.provenance?.generatedAt ?? e.staleness?.updatedAt ?? 0), r = a(() => e.provenance?.sourceRev ?? e.staleness?.readmeRev ?? "");
			return (a, u) => (h(), c("article", $A, [
				e.staleness?.stale === !0 ? (h(), c("p", ej, [u[0] ||= l("span", {
					class: "size-1.5 shrink-0 rounded-full bg-warning/70",
					"aria-hidden": "true"
				}, null, -1), d(" May be out of date: " + g(e.staleness.reason) + ". ", 1)])) : s("", !0),
				e.figures !== void 0 && e.figures !== "" ? (h(), o(_(pe), {
					key: 1,
					source: e.figures,
					style: { "--prose-measure": "76ch" }
				}, null, 8, ["source"])) : s("", !0),
				e.prose === void 0 ? (h(), c("p", tj, "This page has no prose yet.")) : (h(), o(_(pe), {
					key: 2,
					source: e.prose,
					style: { "--prose-measure": "76ch" }
				}, null, 8, ["source"])),
				e.anchors.length > 0 ? (h(), c("section", nj, [l("h2", { class: ne(_(Te).sectionLabel("mb-1 text-2xs")) }, "Where to start reading", 2), (h(!0), c(i, null, ie(e.anchors, (e) => (h(), c("a", ee({ key: e.path }, { ref_for: !0 }, t(e), { class: "ui-row-select flex w-full items-start gap-3 rounded-lg px-2.5 py-1.5 text-left" }), [f(_(fe), {
					name: "file",
					class: "mt-0.5 shrink-0 text-subtle"
				}), l("span", rj, [l("span", ij, [d(g(e.path), 1), e.line === void 0 ? s("", !0) : (h(), c("span", aj, ":" + g(e.line), 1))]), l("span", oj, g(e.what), 1)])], 16))), 128))])) : s("", !0),
				n.value > 0 ? (h(), c("footer", sj, [
					f(_(Se), {
						variant: e.staleness?.stale === !0 ? "warning" : "neutral",
						size: "xs",
						dot: "",
						label: `written ${_(we)(n.value)}`
					}, null, 8, ["variant", "label"]),
					r.value === "" ? s("", !0) : (h(), c("span", cj, [d(g(e.provenance === void 0 ? "in" : "against") + " ", 1), l("span", lj, g(r.value.slice(0, 8)), 1)])),
					e.provenance?.model === void 0 ? s("", !0) : (h(), c("span", uj, "by " + g(e.provenance.model), 1)),
					e.staleness !== void 0 && e.staleness.behind > 0 ? (h(), c("span", dj, "· " + g(e.staleness.behind) + " commit" + g(e.staleness.behind === 1 ? "" : "s") + " since", 1)) : s("", !0)
				])) : s("", !0)
			]));
		}
	});
})), mj, hj = y((() => {
	pj(), pj(), mj = fj;
})), gj, _j, vj, yj, bj = y((() => {
	gj = {
		class: "min-h-0 flex-1 overflow-y-auto p-6",
		role: "status",
		"aria-busy": "true"
	}, _j = {
		class: "mx-auto flex max-w-3xl flex-col gap-6",
		"aria-hidden": "true"
	}, vj = {
		key: 0,
		class: "skeleton mt-2 block h-4 w-1/4"
	}, yj = /*@__PURE__*/ p({
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
			return (e, n) => (h(), c("div", gj, [n[1] ||= l("span", { class: "sr-only" }, "Reading the documentation…", -1), l("div", _j, [n[0] ||= l("span", { class: "skeleton block h-6 w-2/5" }, null, -1), (h(), c(i, null, ie(t, (e, t) => l("div", {
				key: t,
				class: "flex flex-col gap-3"
			}, [t > 0 ? (h(), c("span", vj)) : s("", !0), (h(!0), c(i, null, ie(e, (e, t) => (h(), c("span", {
				key: t,
				class: ne(["skeleton block h-2.5", e])
			}, null, 2))), 128))])), 64))])]));
		}
	});
})), xj, Sj = y((() => {
	bj(), bj(), xj = yj;
})), Cj, wj, Tj, Ej, Dj, Oj, kj, Aj, jj = y((() => {
	Cj = 5, wj = (e) => e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : `${e}`, Tj = (e) => {
		let t = /* @__PURE__ */ new Map();
		for (let n of e?.components ?? []) for (let e of n.packages) t.set(e, n.accent ?? "neutral");
		return t;
	}, Ej = (e) => e.slice(e.lastIndexOf("/") + 1), Dj = (e, t) => [
		"```stats",
		JSON.stringify({ items: [
			{
				label: "Lines",
				value: wj(e.loc)
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
	].join("\n"), Oj = (e, t, n) => {
		let r = Tj(n), i = t.edges.filter((t) => t.from === e), a = t.edges.filter((t) => t.to === e);
		if (i.length === 0 && a.length === 0) return;
		let o = i.slice(0, Cj), s = a.slice(0, Cj), c = [
			{
				id: e,
				label: Ej(e),
				note: "this package",
				accent: r.get(e) ?? "neutral"
			},
			...o.map((e) => ({
				id: e.to,
				label: Ej(e.to),
				note: "it uses",
				accent: r.get(e.to) ?? "neutral"
			})),
			...s.map((e) => ({
				id: e.from,
				label: Ej(e.from),
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
	}, kj = (e, t, n) => {
		let r = n?.components.find((t) => t.packages.includes(e.dir));
		if (r === void 0) return;
		let i = t.entries.filter((e) => r.packages.includes(e.dir) && e.loc > 0);
		if (!(i.length < 2)) return [
			"```bars",
			JSON.stringify({
				title: `Size within ${r.name}`,
				items: i.toSorted((e, t) => t.loc - e.loc).map((t) => ({
					label: t.dir === e.dir ? `${Ej(t.dir)} (this one)` : Ej(t.dir),
					value: t.loc,
					display: wj(t.loc),
					accent: r.accent ?? "neutral"
				}))
			}),
			"```"
		].join("\n");
	}, Aj = (e, t, n) => {
		let r = t?.entries.find((t) => t.dir === e);
		if (t === void 0 || r === void 0) return "";
		let i = t.edges.filter((t) => t.to === e).length;
		return [
			Dj(r, i),
			Oj(e, t, n),
			kj(r, t, n)
		].filter((e) => e !== void 0).join("\n\n");
	};
})), Mj, Nj, Pj, Fj, Ij, Lj, Rj, zj, Bj, Vj, Hj = y((() => {
	Pe(), Mj = { class: "flex flex-col gap-4" }, Nj = { class: "flex flex-wrap items-center gap-2" }, Pj = { class: "ml-auto text-2xs text-subtle" }, Fj = { class: "max-h-72 overflow-y-auto rounded-lg bg-content/4 p-1" }, Ij = { class: "min-w-0 flex-1 truncate font-mono text-xs" }, Lj = {
		key: 0,
		class: "shrink-0 text-2xs text-warning"
	}, Rj = {
		key: 1,
		class: "shrink-0 text-2xs text-subtle"
	}, zj = {
		key: 0,
		class: "flex items-start gap-2 text-2xs text-muted"
	}, Bj = { class: "flex justify-end gap-2" }, Vj = /*@__PURE__*/ p({
		__name: "GenerateDialog",
		props: /*@__PURE__*/ m({
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
		emits: /*@__PURE__*/ m(["start"], ["update:modelValue"]),
		setup(e, { emit: t }) {
			let n = ae(e, "modelValue"), r = t, u = re([]), d = a(() => {
				let t = new Set((e.index?.entries ?? []).map((e) => e.dir));
				return e.packages.filter((e) => !t.has(e));
			}), p = a(() => (e.index?.entries ?? []).filter((e) => e.stale).map((e) => e.dir)), m = () => {
				u.value = p.value.length > 0 ? [.../* @__PURE__ */ new Set([...p.value, ...d.value])] : [...d.value];
			};
			oe(n, (e) => e && m(), { immediate: !0 });
			let ee = (e) => {
				u.value = u.value.includes(e) ? u.value.filter((t) => t !== e) : [...u.value, e];
			}, te = Ee(() => Ne().models, "documentation-run"), ne = () => {
				r("start", [...u.value], te.overridden.value ? te.model.value : void 0), te.clear(), n.value = !1;
			};
			return (t, r) => (h(), o(_(me), {
				open: n.value,
				"onUpdate:open": r[4] ||= (e) => n.value = e,
				size: "md",
				header: `Generate documentation for ${e.label}`
			}, {
				default: v(() => [l("div", Mj, [
					r[5] ||= l("p", { class: "text-xs text-muted" }, " One agent writes the repository's map first: the components, the vocabulary, the reading order. The packages you pick below are then documented in parallel, one agent each, and land as a draft you review before anything is committed. ", -1),
					l("div", Nj, [
						f(_(ue), {
							size: "small",
							severity: "secondary",
							label: "Undocumented",
							onClick: r[0] ||= (e) => u.value = [...d.value]
						}),
						f(_(ue), {
							size: "small",
							severity: "secondary",
							disabled: p.value.length === 0,
							label: "Stale",
							onClick: r[1] ||= (e) => u.value = [...p.value]
						}, null, 8, ["disabled"]),
						f(_(ue), {
							size: "small",
							severity: "secondary",
							label: "Everything",
							onClick: r[2] ||= (t) => u.value = [...e.packages]
						}),
						l("span", Pj, g(u.value.length) + " of " + g(e.packages.length), 1)
					]),
					l("div", Fj, [(h(!0), c(i, null, ie(e.packages, (e) => (h(), c("label", {
						key: e,
						class: "flex cursor-pointer items-center gap-3 rounded-md px-2.5 py-1.5 transition-colors hover:bg-content/5"
					}, [
						f(_(de), {
							"model-value": u.value.includes(e),
							binary: "",
							"onUpdate:modelValue": (t) => ee(e)
						}, null, 8, ["model-value", "onUpdate:modelValue"]),
						l("span", Ij, g(e), 1),
						p.value.includes(e) ? (h(), c("span", Lj, "stale")) : d.value.includes(e) ? (h(), c("span", Rj, "new")) : s("", !0)
					]))), 128))]),
					u.value.length > 8 ? (h(), c("p", zj, [f(_(fe), {
						name: "info-circle",
						class: "mt-0.5 shrink-0"
					}), l("span", null, g(u.value.length) + " packages means " + g(u.value.length + 1) + " agent sessions, running in parallel.", 1)])) : s("", !0),
					l("div", Bj, [f(_(ue), {
						size: "small",
						severity: "secondary",
						text: "",
						label: "Cancel",
						onClick: r[3] ||= (e) => n.value = !1
					}), f(_(le), {
						label: "Generate",
						picker: _(te),
						disabled: u.value.length === 0,
						onRun: ne
					}, null, 8, ["picker", "disabled"])])
				])]),
				_: 1
			}, 8, ["open", "header"]));
		}
	});
})), Uj, Wj = y((() => {
	Hj(), Hj(), Uj = Vj;
})), Gj, Kj, qj, Jj, Yj = y((() => {
	Gj = "ext-documentation-repo", Kj = () => {
		try {
			return localStorage.getItem(Gj) ?? void 0;
		} catch {
			return;
		}
	}, qj = (e) => {
		try {
			localStorage.setItem(Gj, e);
		} catch {}
	}, Jj = (e, t, n) => t !== void 0 && e.includes(t) ? t : e.find((e) => n(e)) ?? e[0] ?? "";
}));
//#endregion
//#region src/useDocs.ts
function Xj(e, t) {
	let n = Ne(), r = ke(), i = a(() => n.sandbox.key("documentation", t.value, e.value)), o = async (e) => {
		try {
			return await n.sandbox.json(e);
		} catch {
			return;
		}
	}, s = Oe({
		queryKey: i,
		enabled: a(() => n.sandbox.reachable()),
		queryFn: async () => {
			let [r, i, a] = await Promise.all([
				n.workspace.file(Zj(t.value, e.value, Bk)),
				n.workspace.file(Zj(t.value, e.value, Vk)),
				n.workspace.file(Zj(t.value, e.value, Hk))
			]);
			return {
				repoDoc: r === void 0 ? void 0 : jA(r),
				prose: i,
				index: a === void 0 ? void 0 : MA(a)
			};
		}
	}), c = (r) => Oe({
		queryKey: a(() => n.sandbox.key("documentation", "page", t.value, e.value, r.value ?? "")),
		enabled: a(() => n.sandbox.reachable() && r.value !== void 0),
		queryFn: async () => {
			let i = r.value;
			if (i !== void 0) return await n.workspace.file(Zj(t.value, e.value, Wk(i)));
		}
	}), l = Oe({
		queryKey: a(() => n.sandbox.key("documentation", "has-staged", e.value)),
		enabled: a(() => n.sandbox.reachable()),
		queryFn: async () => {
			let t = await o(`/workspace/children?path=${encodeURIComponent(Qk(e.value))}`);
			return t !== void 0 && qk(ev.parse(t).entries.map((e) => e.name));
		}
	});
	return {
		set: a(() => s.data.value),
		isLoading: s.isLoading,
		hasStaged: a(() => l.data.value === !0),
		usePackage: c,
		refresh: () => {
			r.invalidateQueries({ queryKey: n.sandbox.key("documentation") });
		}
	};
}
var Zj, Qj = y((() => {
	Dk(), PA(), Pe(), dA(), Zj = (e, t, n) => e === "staged" ? $k(t, n) : Xk(t, n);
}));
//#endregion
//#region src/usePublish.ts
function $j() {
	let e = Ne(), t = ke(), n = async (t, n) => await e.workspace.file($k(t, n));
	return {
		preflight: async (t) => {
			let n = await pA(e, t), r = "", i = [];
			try {
				let a = o_.parse(await e.sandbox.json(`/git/${encodeURIComponent(eM(t))}/status`));
				r = a.branch;
				let o = new Set(n.map((e) => Kk(e)));
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
				let o = Kk(t);
				await e.sandbox.request(`/git/${encodeURIComponent(eM(r))}/file`, {
					method: "PUT",
					headers: { "content-type": "application/json" },
					body: JSON.stringify({
						repo: eM(r),
						path: o,
						content: i
					})
				}), a.push(o);
			}
			a.length !== 0 && (await e.sandbox.request(`/git/${encodeURIComponent(eM(r))}/stage`, {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					repo: eM(r),
					paths: a
				})
			}), await e.sandbox.request(`/git/${encodeURIComponent(eM(r))}/commit`, {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					repo: eM(r),
					message: `docs: publish architecture documentation\n\n${a.length} file${a.length === 1 ? "" : "s"}, package READMEs and the repository map.`
				})
			}), await e.sandbox.request("/workspace/entry", {
				method: "DELETE",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ path: Qk(r) })
			}), t.invalidateQueries({ queryKey: e.sandbox.key("documentation") }), zA());
		},
		discard: async (n) => {
			await e.sandbox.request("/workspace/entry", {
				method: "DELETE",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ path: Qk(n) })
			}), t.invalidateQueries({ queryKey: e.sandbox.key("documentation") }), zA();
		}
	};
}
var eM, tM = y((() => {
	Dk(), VA(), Pe(), dA(), hA(), eM = (e) => e === "" ? "root" : e;
})), nM, rM, iM, aM, oM, sM, cM, lM = y((() => {
	dA(), nM = [
		"## Who you are writing for",
		"",
		"A capable engineer who has never opened this repository and has twenty minutes. They want to know what is here, how the pieces relate, and where to start. They do NOT want an API reference: signatures, exported names and option lists are already one `iq outline` away, and repeating them is the fastest way to make a document that is long, stale within a week, and unread.",
		"",
		"Write in plain language. Prefer a short sentence to a precise-sounding one. Expand an acronym the first time. When something is surprising, say that it is surprising and say why. When a design decision has a reason, give the reason; when you cannot find the reason, say what the code does and do not invent one.",
		"",
		"Length is a budget, not a target: one screen per package. If you cannot say what a package is for in one sentence, that difficulty is itself worth writing down."
	].join("\n"), rM = [
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
	].join("\n"), iM = [
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
	].join("\n"), aM = (e) => [
		"## Provenance is mandatory",
		"",
		"Every JSON document you write carries:",
		"",
		"    \"provenance\": { \"sourceRev\": \"<see below>\", \"generatedAt\": <epoch ms>, \"model\": \"<the model you are>\" }",
		"",
		`\`sourceRev\` is ${e} It is what makes rot detectable later: it is compared against the directory's current revision to answer "is this still true?". Take it from the tool's output. Do not invent one, and do not use a short sha.`
	].join("\n"), oM = (e) => [
		"## Finish by validating",
		"",
		"`intentic-docs` is on your PATH. Before you finish:",
		"",
		`    intentic-docs validate${e} --from staging`,
		"",
		"It checks that the map parses, that every package has a README, that each one opens with a lead sentence, and that every `## Key files` link still resolves. Fix what it reports and run it again until it passes. A key-files link pointing at a file that is not there is the clearest possible signal that a page is wrong, so it is worth getting right rather than working around."
	].join("\n"), sM = (e) => {
		let { repo: t, label: n } = e, r = t === "" ? "" : ` --repo ${t}`;
		return [
			`You are writing the MAP for the repository "${n}": the top of a documentation set that other agents will then fill in, one package each. You are not documenting any single package.`,
			"",
			nM,
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
			`**${$k(t, Bk)}**`,
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
			`**${$k(t, Vk)}**: the repository's own page, in prose, with figures. What is this repo, what are the components and how do they relate, what should I read first, and what would surprise me. Open with a \`stats\` figure and include a \`dag\` of the components. This is the page someone reads before anything else, so it is worth more care than any single package page.`,
			"",
			rM,
			"",
			aM("the `head` field of the `intentic-docs facts` output you ran above."),
			"",
			"## Rules",
			"",
			`- Write ONLY into \`${Qk(t)}\`. Do not create or edit anything under the repository itself. The owner publishes these documents into the repo after reading them, and that is not your step.`,
			"- Do not modify the code you are documenting. If you find a bug, write it down in the prose; do not fix it.",
			"- JSON with keys in a stable order and two-space indent. These files are reviewed as diffs.",
			`- \`${Hk}\` is generated by \`intentic-docs check\`. Never write it by hand.`,
			"",
			oM(r)
		].join("\n");
	}, cM = (e) => {
		let { repo: t, label: n, dir: r, component: i, glossary: a, components: o } = e, s = t === "" ? "" : ` --repo ${t}`;
		return [
			`You are documenting ONE package: \`${r}\` in the repository "${n}".`,
			nM,
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
				`**${$k(t, Wk(r))}**: the package's README, which IS its documentation page.`,
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
			iM,
			[
				"## Rules",
				"",
				`- Write ONLY this one file, under \`${Qk(t)}\`. Another agent is documenting each other package right now, and \`${Bk}\` belongs to the map. Editing either is how a run corrupts itself.`,
				"- Do not modify the code you are documenting. Finding a defect is worth writing down; fixing it is someone else's turn.",
				"- There is no provenance to write. The page's date is the commit that carries it, and how far the code has run ahead of it is a commit count. Both are computed, neither authored."
			].join("\n"),
			oM(s)
		].filter((e) => e !== void 0).join("\n\n");
	};
}));
//#endregion
//#region src/useRuns.ts
function uM(e) {
	let t = Ne(), n = ke(), r = a(() => t.sandbox.key("documentation-runs", "manifests")), i = a(() => t.sandbox.key("documentation-runs", "agents")), o = async (e) => {
		try {
			return await t.sandbox.json(e);
		} catch {
			return;
		}
	}, s = Oe({
		queryKey: r,
		enabled: a(() => t.sandbox.reachable()),
		queryFn: async () => {
			let e = await o(`/workspace/children?path=${encodeURIComponent(tA)}`);
			if (e === void 0) return [];
			let n = ev.parse(e).entries.filter((e) => e.type === "dir").toSorted((e, t) => e.name.localeCompare(t.name)).slice(-iA).toReversed();
			return (await Promise.all(n.map((e) => t.workspace.file(nA(e.name))))).flatMap((e) => e === void 0 ? [] : pM(e) ?? []);
		}
	}), c = Oe({
		queryKey: i,
		enabled: a(() => t.sandbox.reachable()),
		refetchInterval: (e) => (e.state.data ?? []).some((e) => e.id.startsWith(sA) && fM(e)) ? dM : !1,
		queryFn: async () => {
			let e = await o("/agents");
			return e === void 0 ? [] : mg.parse(e).agents;
		}
	}), l = Oe({
		queryKey: a(() => t.sandbox.key("documentation", "staged-tails", e.value)),
		enabled: a(() => t.sandbox.reachable()),
		queryFn: async () => mA(await pA(t, e.value))
	}), u = a(() => {
		let t = c.data.value ?? [], n = l.data.value ?? [];
		return (s.data.value ?? []).filter((t) => t.repo === e.value).map((e) => {
			let r = lA(e.runId), i = t.filter((t) => t.id.startsWith(uA(e.runId))), a = t.find((e) => e.id === r), o = e.packages;
			return {
				manifest: e,
				agents: i,
				mapDone: a === void 0 || !fM(a),
				running: i.some(fM),
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
			let r = aA(Date.now()), i = {
				runId: r,
				createdAt: Date.now(),
				repo: e.repo,
				...e.packages === void 0 ? {} : { packages: [...e.packages] },
				...e.pick === void 0 ? {} : { pick: e.pick }
			};
			return await t.workspace.write(nA(r), `${JSON.stringify(i, void 0, 2)}\n`), await d(lA(r), sM({
				repo: e.repo,
				label: e.label
			}), e.pick), n.invalidateQueries({ queryKey: t.sandbox.key("documentation-runs") }), r;
		},
		advance: async () => {
			let e = c.data.value ?? [], r = l.data.value ?? [];
			for (let a of u.value) {
				if (!a.mapDone) continue;
				let o = await t.workspace.file($k(a.manifest.repo, Bk)), s = o === void 0 ? void 0 : jA(o);
				if (s === void 0) continue;
				let c = (a.manifest.packages ?? [...new Set(s.components.flatMap((e) => e.packages))]).filter((t) => {
					let n = cA(a.manifest.runId, oA(t));
					return !e.some((e) => e.id === n) && !r.includes(t);
				});
				for (let e of c) await d(cA(a.manifest.runId, oA(e)), cM({
					repo: a.manifest.repo,
					label: a.manifest.repo === "" ? "the workspace root" : a.manifest.repo,
					dir: e,
					component: NA(s, e),
					glossary: s.glossary,
					components: s.components
				}), a.manifest.pick);
				c.length > 0 && n.invalidateQueries({ queryKey: i.value });
			}
		},
		stop: async (e) => {
			let r = u.value.find((t) => t.manifest.runId === e);
			await Promise.all((r?.agents ?? []).filter(fM).map((e) => t.sandbox.request("/agent/stop", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ conversationId: e.id })
			}))), n.invalidateQueries({ queryKey: i.value });
		}
	};
}
var dM, fM, pM, mM = y((() => {
	Dk(), lM(), PA(), Pe(), dA(), hA(), dM = 4e3, fM = (e) => e.status === "running" || e.status === "awaiting", pM = (e) => {
		try {
			let t = JSON.parse(e), n = t.runId, r = t.repo, i = t.packages, a = wd.safeParse(t.pick);
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
})), hM, gM, _M, vM, yM, bM, xM, SM, CM, wM, TM, EM, DM, OM, kM, AM, jM, MM = y((() => {
	xA(), VA(), QA(), hj(), Sj(), jj(), Wj(), Pe(), Yj(), Qj(), tM(), mM(), hM = {
		key: 0,
		class: "flex items-center gap-3 rounded-lg bg-content/4 px-3 py-2 text-xs"
	}, gM = { class: "text-content" }, _M = { key: 0 }, vM = { class: "ml-auto flex items-center gap-1" }, yM = {
		key: 1,
		class: "flex flex-wrap items-center gap-3 rounded-lg bg-primary-600/10 px-3 py-2 text-xs"
	}, bM = { class: "ml-auto flex items-center gap-2" }, xM = {
		key: 2,
		class: "min-h-figure"
	}, SM = { key: 3 }, CM = { class: "text-sm" }, wM = {
		key: 0,
		class: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
	}, TM = { class: "flex w-full max-w-md flex-col gap-3 rounded-xl border border-line bg-overlay p-4" }, EM = { class: "text-sm font-semibold" }, DM = { class: "text-xs text-muted" }, OM = { key: 0 }, kM = {
		key: 0,
		class: "flex items-start gap-2 rounded-lg bg-warning/10 px-2.5 py-2 text-2xs"
	}, AM = { class: "flex justify-end gap-2" }, jM = /*@__PURE__*/ p({
		__name: "DocsView",
		props: { repo: {} },
		setup(e) {
			let t = Ne(), n = a(() => t.workspace.repos().map((e) => e.repo)), r = a(() => n.value.map((e) => ({
				value: e,
				label: e,
				mono: !0
			}))), u = a(() => t.route.query()), p = re(Kj()), m = a(() => e.repo ?? u.value.repo ?? Jj(n.value, p.value, (e) => BA(e) !== void 0)), te = a(() => m.value === "" ? "the workspace root" : m.value), ae = a(() => u.value.doc);
			oe(() => u.value.repo, (t) => {
				e.repo === void 0 && t !== void 0 && (p.value = t, qj(t));
			}, { immediate: !0 }), e.repo === void 0 && p.value === void 0 && zA();
			let se = (e) => t.route.setQuery({ doc: e }, { push: !0 }), ce = (e) => t.route.setQuery({
				repo: e,
				doc: void 0
			}), le = re("published"), de = [{
				label: "Published",
				value: "published",
				title: "Committed in the repository"
			}, {
				label: "Draft",
				value: "staged",
				title: "Generated, not yet published"
			}], { set: pe, isLoading: me, hasStaged: he, usePackage: ve, refresh: Se } = Xj(m, le), we = De(me, m), { rows: Ee, start: Oe, advance: ke, stop: Ae } = uM(m), { preflight: y, publish: je, discard: Me } = $j(), Pe = re(void 0);
			oe([he, m], ([e, t]) => {
				e && Pe.value !== t && (Pe.value = t, le.value = "staged");
			}, { immediate: !0 }), oe([
				le,
				m,
				he
			], ([e, t, n]) => {
				e === "staged" && n && bA(t);
			});
			let Fe = ve(ae), Ie = a(() => pe.value?.index), Le = a(() => Ie.value?.entries ?? []), Re = a(() => Ee.value.find((e) => e.running));
			oe(() => [Ee.value.map((e) => `${e.manifest.runId}:${e.mapDone}:${e.done}`).join("|")], () => void ke());
			let ze = re(!1), b = re(void 0), Be = re(!1), Ve = async () => {
				b.value = await y(m.value);
			}, x = async () => {
				let e = b.value;
				if (e !== void 0) {
					Be.value = !0;
					try {
						await je(m.value, e.tails), b.value = void 0, le.value = "published", Pe.value = void 0, Se();
					} finally {
						Be.value = !1;
					}
				}
			}, He = (e, t) => {
				Oe({
					repo: m.value,
					label: te.value,
					...e.length === 0 ? {} : { packages: e },
					...t === void 0 ? {} : { pick: {
						agent: t.provider,
						model: t.model,
						...t.effort === void 0 ? {} : { effort: t.effort }
					} }
				});
			}, Ue = (e) => Ce(t.href(`/agents/${e}`), () => t.chat.openAgent(e));
			return (t, a) => (h(), o(_(xe), {
				title: "Documentation",
				scroll: "page",
				"scroll-key": `${m.value}/${ae.value ?? ""}`,
				mobile: "swap",
				"detail-open": ae.value !== void 0
			}, {
				actions: v(() => [
					e.repo === void 0 && n.value.length > 1 ? (h(), o(_(_e), {
						key: 0,
						"model-value": m.value,
						options: r.value,
						variant: "ghost",
						"aria-label": "Repository",
						placeholder: "Repository",
						"onUpdate:modelValue": a[0] ||= (e) => e !== void 0 && ce(e)
					}, null, 8, ["model-value", "options"])) : s("", !0),
					_(he) ? (h(), o(_(be), {
						key: 1,
						modelValue: le.value,
						"onUpdate:modelValue": a[1] ||= (e) => le.value = e,
						options: de
					}, null, 8, ["modelValue"])) : s("", !0),
					f(_(ge), {
						icon: "sparkles",
						label: "Generate",
						primary: "",
						onClick: a[2] ||= (e) => ze.value = !0
					})
				]),
				strips: v(() => [Re.value === void 0 ? s("", !0) : (h(), c("div", hM, [
					f(_(fe), {
						name: "spinner",
						spin: "",
						class: "shrink-0 text-link"
					}),
					l("span", gM, [
						d(g(Re.value.mapDone ? "Documenting packages" : "Reading the repository and drawing its map") + " : " + g(Re.value.done), 1),
						Re.value.total === void 0 ? s("", !0) : (h(), c("span", _M, " of " + g(Re.value.total), 1)),
						a[9] ||= d(" written ", -1)
					]),
					l("div", vM, [(h(!0), c(i, null, ie(Re.value.agents.slice(0, 6), (e) => (h(), o(_(ue), ee({
						key: e.id,
						size: "small",
						severity: "secondary",
						text: "",
						label: e.id.split("-").slice(2).join("-") || "map",
						as: "a"
					}, { ref_for: !0 }, Ue(e.id)), null, 16, ["label"]))), 128)), f(_(ue), {
						size: "small",
						severity: "secondary",
						label: "Stop",
						onClick: a[3] ||= (e) => _(Ae)(Re.value.manifest.runId)
					})])
				])), le.value === "staged" && _(he) ? (h(), c("div", yM, [
					f(_(fe), {
						name: "file-edit",
						class: "shrink-0 text-link"
					}),
					a[10] ||= l("span", { class: "text-content" }, "This is a draft. Nothing is in the repository until you publish it.", -1),
					l("div", bM, [f(_(ue), {
						size: "small",
						severity: "secondary",
						text: "",
						label: "Discard",
						onClick: a[4] ||= (e) => _(Me)(m.value).then(() => le.value = "published")
					}), f(_(ue), {
						size: "small",
						label: `Publish to ${te.value}`,
						onClick: Ve
					}, null, 8, ["label"])])
				])) : s("", !0)]),
				rail: v(() => [f(ZA, {
					components: _(pe)?.repoDoc?.components ?? [],
					index: Ie.value,
					page: ae.value,
					onOpen: se
				}, null, 8, [
					"components",
					"index",
					"page"
				])]),
				detail: v(({ compact: e }) => [e && ae.value !== void 0 ? (h(), c("button", {
					key: 0,
					type: "button",
					class: ne(_(Te).textAction("mb-2 shrink-0")),
					onClick: a[5] ||= (e) => se(void 0)
				}, [f(_(fe), {
					name: "arrow-left",
					class: "text-2xs"
				}), a[11] ||= d(" Contents ", -1)], 2)) : s("", !0), _(me) && _(we) ? (h(), o(xj, { key: 1 })) : _(me) ? (h(), c("div", xM)) : _(pe)?.repoDoc === void 0 && _(pe)?.prose === void 0 ? (h(), c("div", SM, [l("div", { class: ne(_(Te).emptyState()) }, [
					l("p", CM, g(te.value) + " has no documentation yet.", 1),
					a[12] ||= l("p", { class: "mt-1 text-xs text-muted" }, " One agent will map the repository: its components, its vocabulary, what to read first, and then a further agent documents each package. You review the result before anything is committed. ", -1),
					f(_(ue), {
						size: "small",
						label: "Generate documentation",
						class: "mt-3",
						onClick: a[6] ||= (e) => ze.value = !0
					})
				], 2)])) : (h(), o(_(ye), {
					key: ae.value ?? "overview",
					scroll: !1
				}, {
					default: v(() => [ae.value === void 0 ? (h(), o(mj, {
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
					])) : (h(), o(mj, {
						key: 1,
						class: "px-6 py-5",
						prose: _(Fe).data.value,
						figures: _(Aj)(ae.value, Ie.value, _(pe)?.repoDoc),
						anchors: Le.value.find((e) => e.dir === ae.value)?.anchors ?? [],
						repo: m.value,
						staleness: Le.value.find((e) => e.dir === ae.value)
					}, null, 8, [
						"prose",
						"figures",
						"anchors",
						"repo",
						"staleness"
					]))]),
					_: 1
				}))]),
				default: v(() => [f(Uj, {
					modelValue: ze.value,
					"onUpdate:modelValue": a[7] ||= (e) => ze.value = e,
					label: te.value,
					packages: [...Le.value.map((e) => e.dir), ...Ie.value?.undocumented ?? []].sort(),
					index: Ie.value,
					onStart: He
				}, null, 8, [
					"modelValue",
					"label",
					"packages",
					"index"
				]), b.value === void 0 ? s("", !0) : (h(), c("div", wM, [l("div", TM, [
					l("h2", EM, "Publish to " + g(te.value), 1),
					l("p", DM, [
						d(g(b.value.tails.length) + " file" + g(b.value.tails.length === 1 ? "" : "s") + " will be written, each package's ", 1),
						a[13] ||= l("span", { class: "font-mono" }, "README.md", -1),
						a[14] ||= d(" and the map under ", -1),
						a[15] ||= l("span", { class: "font-mono" }, "docs/architecture/", -1),
						a[16] ||= d(", and committed", -1),
						b.value.branch === "" ? s("", !0) : (h(), c("span", OM, " on " + g(b.value.branch), 1)),
						a[17] ||= d(". ", -1)
					]),
					b.value.foreign.length > 0 ? (h(), c("p", kM, [f(_(fe), {
						name: "exclamation-triangle",
						class: "mt-0.5 shrink-0 text-warning"
					}), l("span", null, " This repository has " + g(b.value.foreign.length) + " other changed file" + g(b.value.foreign.length === 1 ? "" : "s") + ". Any of them you have already staged will be included in this commit. ", 1)])) : s("", !0),
					l("div", AM, [f(_(ue), {
						size: "small",
						severity: "secondary",
						text: "",
						label: "Cancel",
						disabled: Be.value,
						onClick: a[8] ||= (e) => b.value = void 0
					}, null, 8, ["disabled"]), f(_(ue), {
						size: "small",
						label: Be.value ? "Publishing…" : "Publish",
						disabled: Be.value,
						onClick: x
					}, null, 8, ["label", "disabled"])])
				])]))]),
				_: 1
			}, 8, ["scroll-key", "detail-open"]));
		}
	});
})), NM = /* @__PURE__ */ je({ default: () => PM }), PM, FM = y((() => {
	MM(), MM(), PM = jM;
})), IM, LM, RM, zM, BM, VM, HM, UM, WM, GM = y((() => {
	hj(), Sj(), jj(), Pe(), dA(), Qj(), IM = { class: "flex h-full min-h-0 flex-col overflow-hidden" }, LM = { class: "flex h-8 shrink-0 items-center gap-2 border-b border-line-subtle px-3" }, RM = { class: "min-w-0 truncate font-mono text-2xs text-muted" }, zM = { class: "ml-auto flex shrink-0 items-center gap-2" }, BM = {
		key: 1,
		class: "min-h-0 flex-1"
	}, VM = {
		key: 2,
		class: "min-h-0 flex-1 overflow-y-auto p-6"
	}, HM = { class: "text-sm" }, UM = {
		key: 3,
		class: "ui-softscroll min-h-0 flex-1 overflow-y-auto bg-canvas px-6 py-5"
	}, WM = /*@__PURE__*/ p({
		__name: "DocTab",
		props: { path: {} },
		setup(e) {
			let t = Ne(), n = a(() => Yk(e.path, t.workspace.repos().map((e) => e.repo))), r = a(() => n.value?.repo ?? ""), i = a(() => n.value === void 0 || n.value.dir === "" ? void 0 : n.value.dir), u = a(() => e.path === "" ? "the workspace root" : e.path), d = re("published"), p = [{
				label: "Published",
				value: "published",
				title: "Committed in the repository"
			}, {
				label: "Draft",
				value: "staged",
				title: "Generated, not yet published"
			}], { set: m, isLoading: te, hasStaged: ie, usePackage: ae } = Xj(r, d), v = De(te, a(() => `${r.value}:${i.value ?? ""}`)), se = ae(i);
			oe([
				ie,
				m,
				se.data
			], ([e, t, n]) => {
				let r = i.value === void 0 ? t?.prose !== void 0 : n !== void 0;
				e && !r && d.value === "published" && (d.value = "staged");
			});
			let ce = a(() => m.value?.index?.entries ?? []), le = a(() => ce.value.find((e) => e.dir === i.value)), de = a(() => {
				let e = `/ext/documentation?repo=${encodeURIComponent(r.value)}${i.value === void 0 ? "" : `&doc=${encodeURIComponent(i.value)}`}`;
				return Ce(t.href(e), () => t.navigate(e));
			});
			return (e, t) => (h(), c("div", IM, [l("div", LM, [
				f(_(fe), {
					name: "question-circle",
					class: "shrink-0 text-2xs text-subtle"
				}),
				l("span", RM, g(u.value), 1),
				l("div", zM, [_(ie) ? (h(), o(_(be), {
					key: 0,
					modelValue: d.value,
					"onUpdate:modelValue": t[0] ||= (e) => d.value = e,
					options: p,
					size: "xs"
				}, null, 8, ["modelValue"])) : s("", !0), f(_(ue), ee({
					size: "small",
					severity: "secondary",
					text: "",
					label: "All documentation",
					as: "a"
				}, de.value), null, 16)])
			]), _(te) && _(v) ? (h(), o(xj, { key: 0 })) : _(te) ? (h(), c("div", BM)) : (i.value === void 0 ? _(m)?.prose === void 0 : _(se).data.value === void 0) ? (h(), c("div", VM, [l("div", { class: ne(_(Te).emptyState()) }, [
				l("p", HM, g(u.value) + " has no documentation yet.", 1),
				t[1] ||= l("p", { class: "mt-1 text-xs text-muted" }, "An agent can read this directory and write a plain-language page about it, for you to review.", -1),
				f(_(ue), ee({
					size: "small",
					label: "Open Documentation",
					class: "mt-3",
					as: "a"
				}, de.value), null, 16)
			], 2)])) : (h(), c("div", UM, [i.value === void 0 ? (h(), o(mj, {
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
			])) : (h(), o(mj, {
				key: i.value,
				class: "mx-auto max-w-3xl",
				prose: _(se).data.value,
				figures: _(Aj)(i.value, _(m)?.index, _(m)?.repoDoc),
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
})), KM = /* @__PURE__ */ je({ default: () => qM }), qM, JM = y((() => {
	GM(), GM(), qM = WM;
}));
xA(), VA(), Pe();
var YM = (e, t) => {
	Me(e), t.subscriptions.push(vA()), t.subscriptions.push(e.views.register({
		id: "documentation",
		label: "Documentation",
		surface: "rail",
		detect: (e) => e.length > 0 ? [{
			key: "documentation",
			title: "Documentation",
			icon: "question-circle"
		}] : [],
		badge: () => yA(),
		view: async () => (await Promise.resolve().then(() => (FM(), NM))).default
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
		view: async () => (await Promise.resolve().then(() => (FM(), NM))).default
	})), t.subscriptions.push(RA()), t.subscriptions.push(e.documents.register({
		id: "architecture",
		detect: (t) => {
			if (e.workspace.repos().some((e) => e.repo === t)) return;
			let n = BA(t);
			if (n === void 0) return;
			let r = n.draft ? " (draft)" : "";
			return {
				icon: "question-circle",
				tooltip: n.oneLiner === "" ? `Open architecture doc${r}` : `${n.oneLiner}${r}`,
				title: "Architecture",
				evidence: !0
			};
		},
		view: async () => (await Promise.resolve().then(() => (JM(), KM))).default
	})), t.subscriptions.push(e.commands.register("documentation.generate", () => {
		e.navigate("/ext/documentation");
	}));
}, XM = r.parse({
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
});
//#endregion
export { YM as activate, XM as manifest };
