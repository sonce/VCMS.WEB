!(function () {
	function e(e, t) {
		if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
	}
	var t, n;
	(t = 'undefined' != typeof self ? self : this),
		(n = function (t, n, r) {
			return (function (e) {
				var t = {};
				function n(r) {
					if (t[r]) return t[r].exports;
					var o = (t[r] = { i: r, l: !1, exports: {} });
					return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
				}
				return (
					(n.m = e),
					(n.c = t),
					(n.d = function (e, t, r) {
						n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
					}),
					(n.r = function (e) {
						'undefined' != typeof Symbol &&
							Symbol.toStringTag &&
							Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
							Object.defineProperty(e, '__esModule', { value: !0 });
					}),
					(n.t = function (e, t) {
						if ((1 & t && (e = n(e)), 8 & t)) return e;
						if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
						var r = Object.create(null);
						if (
							(n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e)
						)
							for (var o in e)
								n.d(
									r,
									o,
									function (t) {
										return e[t];
									}.bind(null, o)
								);
						return r;
					}),
					(n.n = function (e) {
						var t =
							e && e.__esModule
								? function () {
										return e.default;
								  }
								: function () {
										return e;
								  };
						return n.d(t, 'a', t), t;
					}),
					(n.o = function (e, t) {
						return Object.prototype.hasOwnProperty.call(e, t);
					}),
					(n.p = ''),
					n((n.s = 0))
				);
			})({
				0: function (e, t, n) {
					e.exports = n('zUnb');
				},
				'0S4P': function (e, n) {
					e.exports = t;
				},
				cfyg: function (e, t) {
					e.exports = n;
				},
				vOrQ: function (e, t) {
					e.exports = r;
				},
				zUnb: function (t, n, r) {
					'use strict';
					r.r(n),
						r.d(n, 'Plugin2Module', function () {
							return a;
						});
					var o = r('0S4P'),
						u = r('vOrQ'),
						i = r('cfyg'),
						c = (function () {
							var t = function t() {
								e(this, t);
							};
							return (
								(t.ɵfac = function (e) {
									return new (e || t)();
								}),
								(t.ɵcmp = u['\u0275\u0275defineComponent']({
									type: t,
									selectors: [['app-plugin-2']],
									decls: 9,
									vars: 0,
									consts: [
										['title', 'Tab 1'],
										['title', 'Tab 2'],
										['title', 'Tab 3']
									],
									template: function (e, t) {
										1 & e &&
											(u['\u0275\u0275elementStart'](0, 'h3'),
											u['\u0275\u0275text'](1, 'Plugin 2'),
											u['\u0275\u0275elementEnd'](),
											u['\u0275\u0275elementStart'](2, 'lib-shared-tabs'),
											u['\u0275\u0275elementStart'](3, 'lib-shared-tab', 0),
											u['\u0275\u0275text'](4, ' Tab 1 contents '),
											u['\u0275\u0275elementEnd'](),
											u['\u0275\u0275elementStart'](5, 'lib-shared-tab', 1),
											u['\u0275\u0275text'](6, ' Tab 2 contents '),
											u['\u0275\u0275elementEnd'](),
											u['\u0275\u0275elementStart'](7, 'lib-shared-tab', 2),
											u['\u0275\u0275text'](8, ' Tab 3 contents '),
											u['\u0275\u0275elementEnd'](),
											u['\u0275\u0275elementEnd']());
									},
									directives: [i.TabsComponent, i.TabComponent],
									encapsulation: 2
								})),
								t
							);
						})(),
						a = (function () {
							var t = function t() {
								e(this, t);
							};
							return (
								(t.entry = c),
								(t.ɵmod = u['\u0275\u0275defineNgModule']({ type: t })),
								(t.ɵinj = u['\u0275\u0275defineInjector']({
									factory: function (e) {
										return new (e || t)();
									},
									imports: [[o.CommonModule, i.SharedModule]]
								})),
								t
							);
						})();
					n.default = a;
				}
			});
		}),
		'object' == typeof exports && 'object' == typeof module
			? (module.exports = n(require('ng.common'), require('shared'), require('ng.core')))
			: 'function' == typeof define && define.amd
			? define(['ng.common', 'shared', 'ng.core'], n)
			: 'object' == typeof exports
			? (exports.plugin2 = n(require('ng.common'), require('shared'), require('ng.core')))
			: (t.plugin2 = n(t['ng.common'], t.shared, t['ng.core']));
})();
