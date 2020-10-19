!(function () {
	function e(e, t) {
		if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
	}
	function t(e, t) {
		for (var n = 0; n < t.length; n++) {
			var r = t[n];
			(r.enumerable = r.enumerable || !1),
				(r.configurable = !0),
				'value' in r && (r.writable = !0),
				Object.defineProperty(e, r.key, r);
		}
	}
	var n, r;
	(n = 'undefined' != typeof self ? self : this),
		(r = function (n, r, o) {
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
				'0S4P': function (e, t) {
					e.exports = n;
				},
				cfyg: function (e, t) {
					e.exports = r;
				},
				vOrQ: function (e, t) {
					e.exports = o;
				},
				zUnb: function (n, r, o) {
					'use strict';
					o.r(r),
						o.d(r, 'Plugin1Module', function () {
							return f;
						});
					var i = o('0S4P'),
						u = o('vOrQ'),
						a = o('cfyg');
					function c(e, t) {
						1 & e &&
							(u['\u0275\u0275elementStart'](0, 'p'),
							u['\u0275\u0275text'](1, 'Hidden text'),
							u['\u0275\u0275elementEnd']());
					}
					var l = (function () {
							var n = (function () {
								function n() {
									e(this, n), (this.x = !1);
								}
								var r, o, i;
								return (
									(r = n),
									(o = [
										{
											key: 'ngAfterViewInit',
											value: function () {
												console.log('aaa');
											}
										}
									]) && t(r.prototype, o),
									i && t(r, i),
									n
								);
							})();
							return (
								(n.ɵfac = function (e) {
									return new (e || n)();
								}),
								(n.ɵcmp = u['\u0275\u0275defineComponent']({
									type: n,
									selectors: [['app-plugin-1']],
									decls: 12,
									vars: 1,
									consts: [
										[4, 'ngIf'],
										['sharedBtn', '', 3, 'click'],
										['title', 'Tab 1'],
										['title', 'Tab 2'],
										['title', 'Tab 3']
									],
									template: function (e, t) {
										1 & e &&
											(u['\u0275\u0275elementStart'](0, 'h3'),
											u['\u0275\u0275text'](1, 'Plugin 1'),
											u['\u0275\u0275elementEnd'](),
											u['\u0275\u0275template'](2, c, 2, 0, 'p', 0),
											u['\u0275\u0275elementStart'](3, 'button', 1),
											u['\u0275\u0275listener']('click', function () {
												return (t.x = !t.x);
											}),
											u['\u0275\u0275text'](4, 'Shared Button Example'),
											u['\u0275\u0275elementEnd'](),
											u['\u0275\u0275elementStart'](5, 'lib-shared-tabs'),
											u['\u0275\u0275elementStart'](6, 'lib-shared-tab', 2),
											u['\u0275\u0275text'](7, ' Tab 1 contents '),
											u['\u0275\u0275elementEnd'](),
											u['\u0275\u0275elementStart'](8, 'lib-shared-tab', 3),
											u['\u0275\u0275text'](9, ' Tab 2 contents '),
											u['\u0275\u0275elementEnd'](),
											u['\u0275\u0275elementStart'](10, 'lib-shared-tab', 4),
											u['\u0275\u0275text'](11, ' Tab 3 contents '),
											u['\u0275\u0275elementEnd'](),
											u['\u0275\u0275elementEnd']()),
											2 & e && (u['\u0275\u0275advance'](2), u['\u0275\u0275property']('ngIf', t.x));
									},
									directives: [i.NgIf, a.ButtonComponent, a.TabsComponent, a.TabComponent],
									encapsulation: 2
								})),
								n
							);
						})(),
						f = (function () {
							var t = function t() {
								e(this, t);
							};
							return (
								(t.entry = l),
								(t.ɵmod = u['\u0275\u0275defineNgModule']({ type: t })),
								(t.ɵinj = u['\u0275\u0275defineInjector']({
									factory: function (e) {
										return new (e || t)();
									},
									imports: [[i.CommonModule, a.SharedModule]]
								})),
								t
							);
						})();
					r.default = f;
				}
			});
		}),
		'object' == typeof exports && 'object' == typeof module
			? (module.exports = r(require('ng.common'), require('shared'), require('ng.core')))
			: 'function' == typeof define && define.amd
			? define(['ng.common', 'shared', 'ng.core'], r)
			: 'object' == typeof exports
			? (exports.plugin1 = r(require('ng.common'), require('shared'), require('ng.core')))
			: (n.plugin1 = r(n['ng.common'], n.shared, n['ng.core']));
})();
