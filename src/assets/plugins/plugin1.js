!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('ng.common'), require('shared'), require('ng.core')))
    : 'function' == typeof define && define.amd
    ? define(['ng.common', 'shared', 'ng.core'], t)
    : 'object' == typeof exports
    ? (exports.plugin1 = t(require('ng.common'), require('shared'), require('ng.core')))
    : (e.plugin1 = t(e['ng.common'], e.shared, e['ng.core']));
})('undefined' != typeof self ? self : this, function (e, t, n) {
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
        if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
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
    '0S4P': function (t, n) {
      t.exports = e;
    },
    cfyg: function (e, n) {
      e.exports = t;
    },
    vOrQ: function (e, t) {
      e.exports = n;
    },
    zUnb: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'Plugin1Module', function () {
          return l;
        });
      var r = n('0S4P'),
        o = n('vOrQ'),
        u = n('cfyg');
      function i(e, t) {
        1 & e &&
          (o['\u0275\u0275elementStart'](0, 'p'),
          o['\u0275\u0275text'](1, 'Hidden text'),
          o['\u0275\u0275elementEnd']());
      }
      let c = (() => {
          class e {
            constructor() {
              this.x = !1;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = o['\u0275\u0275defineComponent']({
              type: e,
              selectors: [['app-plugin-1']],
              decls: 12,
              vars: 1,
              consts: [
                [4, 'ngIf'],
                ['sharedBtn', '', 3, 'click'],
                ['title', 'Tab 1'],
                ['title', 'Tab 2'],
                ['title', 'Tab 3'],
              ],
              template: function (e, t) {
                1 & e &&
                  (o['\u0275\u0275elementStart'](0, 'h3'),
                  o['\u0275\u0275text'](1, 'Plugin 1'),
                  o['\u0275\u0275elementEnd'](),
                  o['\u0275\u0275template'](2, i, 2, 0, 'p', 0),
                  o['\u0275\u0275elementStart'](3, 'button', 1),
                  o['\u0275\u0275listener']('click', function () {
                    return (t.x = !t.x);
                  }),
                  o['\u0275\u0275text'](4, 'Shared Button Example'),
                  o['\u0275\u0275elementEnd'](),
                  o['\u0275\u0275elementStart'](5, 'shared-tabs'),
                  o['\u0275\u0275elementStart'](6, 'shared-tab', 2),
                  o['\u0275\u0275text'](7, ' Tab 1 contents '),
                  o['\u0275\u0275elementEnd'](),
                  o['\u0275\u0275elementStart'](8, 'shared-tab', 3),
                  o['\u0275\u0275text'](9, ' Tab 2 contents '),
                  o['\u0275\u0275elementEnd'](),
                  o['\u0275\u0275elementStart'](10, 'shared-tab', 4),
                  o['\u0275\u0275text'](11, ' Tab 3 contents '),
                  o['\u0275\u0275elementEnd'](),
                  o['\u0275\u0275elementEnd']()),
                  2 & e && (o['\u0275\u0275advance'](2), o['\u0275\u0275property']('ngIf', t.x));
              },
              directives: [r.NgIf, u.ButtonComponent, u.TabsComponent, u.TabComponent],
              encapsulation: 2,
            })),
            e
          );
        })(),
        l = (() => {
          class e {}
          return (
            (e.entry = c),
            (e.ɵmod = o['\u0275\u0275defineNgModule']({ type: e })),
            (e.ɵinj = o['\u0275\u0275defineInjector']({
              factory: function (t) {
                return new (t || e)();
              },
              imports: [[r.CommonModule, u.SharedModule]],
            })),
            e
          );
        })();
      t.default = l;
    },
  });
});
