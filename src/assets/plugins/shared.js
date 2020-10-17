!(function () {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        'value' in o && (o.writable = !0),
        Object.defineProperty(e, o.key, o);
    }
  }
  function t(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
  }
  var n, o;
  (n = 'undefined' != typeof self ? self : this),
    (o = function (n, o) {
      return (function (e) {
        var t = {};
        function n(o) {
          if (t[o]) return t[o].exports;
          var r = (t[o] = { i: o, l: !1, exports: {} });
          return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
        }
        return (
          (n.m = e),
          (n.c = t),
          (n.d = function (e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
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
            var o = Object.create(null);
            if (
              (n.r(o), Object.defineProperty(o, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e)
            )
              for (var r in e)
                n.d(
                  o,
                  r,
                  function (t) {
                    return e[t];
                  }.bind(null, r)
                );
            return o;
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
        vOrQ: function (e, t) {
          e.exports = o;
        },
        zUnb: function (n, o, r) {
          'use strict';
          r.r(o),
            r.d(o, 'ButtonComponent', function () {
              return p;
            }),
            r.d(o, 'SharedComponent', function () {
              return f;
            }),
            r.d(o, 'SharedModule', function () {
              return b;
            }),
            r.d(o, 'TabComponent', function () {
              return l;
            }),
            r.d(o, 'TabsComponent', function () {
              return d;
            });
          var i = r('vOrQ'),
            c = r('0S4P');
          function a(e, t) {
            if (1 & e) {
              var n = i['\u0275\u0275getCurrentView']();
              i['\u0275\u0275elementStart'](0, 'li', 3),
                i['\u0275\u0275listener']('click', function () {
                  i['\u0275\u0275restoreView'](n);
                  var e = t.$implicit;
                  return i['\u0275\u0275nextContext']().selectTab(e);
                }),
                i['\u0275\u0275text'](1),
                i['\u0275\u0275elementEnd']();
            }
            if (2 & e) {
              var o = t.$implicit;
              i['\u0275\u0275classProp']('tab--active', !o.hidden),
                i['\u0275\u0275advance'](1),
                i['\u0275\u0275textInterpolate1'](' ', o.title, ' ');
            }
          }
          var u = ['*'],
            s = ['sharedBtn', ''],
            f = (function () {
              var e = function e() {
                t(this, e);
              };
              return (
                (e.ɵfac = function (t) {
                  return new (t || e)();
                }),
                (e.ɵcmp = i['\u0275\u0275defineComponent']({
                  type: e,
                  selectors: [['shared-component']],
                  decls: 2,
                  vars: 0,
                  template: function (e, t) {
                    1 & e &&
                      (i['\u0275\u0275elementStart'](0, 'h4'),
                      i['\u0275\u0275text'](1, ' Shared component '),
                      i['\u0275\u0275elementEnd']());
                  },
                  encapsulation: 2,
                })),
                e
              );
            })(),
            d = (function () {
              var n = (function () {
                function n() {
                  t(this, n), (this.tabs = []), (this.selected = new i.EventEmitter());
                }
                var o, r, c;
                return (
                  (o = n),
                  (r = [
                    {
                      key: 'addTab',
                      value: function (e) {
                        this.tabs.length || (e.hidden = !1), this.tabs.push(e);
                      },
                    },
                    {
                      key: 'selectTab',
                      value: function (e) {
                        this.tabs.map(function (e) {
                          return (e.hidden = !0);
                        }),
                          (e.hidden = !1),
                          this.selected.emit(e);
                      },
                    },
                  ]) && e(o.prototype, r),
                  c && e(o, c),
                  n
                );
              })();
              return (
                (n.ɵfac = function (e) {
                  return new (e || n)();
                }),
                (n.ɵcmp = i['\u0275\u0275defineComponent']({
                  type: n,
                  selectors: [['shared-tabs']],
                  outputs: { selected: 'selected' },
                  ngContentSelectors: u,
                  decls: 4,
                  vars: 1,
                  consts: [
                    [1, 'tabs'],
                    ['class', 'tab', 3, 'tab--active', 'click', 4, 'ngFor', 'ngForOf'],
                    [1, 'tab-body'],
                    [1, 'tab', 3, 'click'],
                  ],
                  template: function (e, t) {
                    1 & e &&
                      (i['\u0275\u0275projectionDef'](),
                      i['\u0275\u0275elementStart'](0, 'ul', 0),
                      i['\u0275\u0275template'](1, a, 2, 3, 'li', 1),
                      i['\u0275\u0275elementEnd'](),
                      i['\u0275\u0275elementStart'](2, 'div', 2),
                      i['\u0275\u0275projection'](3),
                      i['\u0275\u0275elementEnd']()),
                      2 & e && (i['\u0275\u0275advance'](1), i['\u0275\u0275property']('ngForOf', t.tabs));
                  },
                  directives: [c.NgForOf],
                  styles: [
                    '[_nghost-%COMP%]{display:block}.tabs[_ngcontent-%COMP%]{border-bottom:1px solid #ebeef2;display:flex;list-style:none;margin:0;padding:0}.tab[_ngcontent-%COMP%]{cursor:pointer;line-height:40px;padding:0 20px;position:relative}.tab-body[_ngcontent-%COMP%]{padding:20px}.tab--active[_ngcontent-%COMP%]:before{background:#03a9f4;bottom:0;content:"";height:3px;left:0;position:absolute;right:0}',
                  ],
                })),
                n
              );
            })(),
            l = (function () {
              var e = function e(n) {
                t(this, e), (this.hidden = !0), n.addTab(this);
              };
              return (
                (e.ɵfac = function (t) {
                  return new (t || e)(i['\u0275\u0275directiveInject'](d));
                }),
                (e.ɵcmp = i['\u0275\u0275defineComponent']({
                  type: e,
                  selectors: [['shared-tab']],
                  hostVars: 1,
                  hostBindings: function (e, t) {
                    2 & e && i['\u0275\u0275hostProperty']('hidden', t.hidden);
                  },
                  inputs: { title: 'title' },
                  ngContentSelectors: u,
                  decls: 1,
                  vars: 0,
                  template: function (e, t) {
                    1 & e && (i['\u0275\u0275projectionDef'](), i['\u0275\u0275projection'](0));
                  },
                  encapsulation: 2,
                })),
                e
              );
            })(),
            p = (function () {
              var e = function e() {
                t(this, e);
              };
              return (
                (e.ɵfac = function (t) {
                  return new (t || e)();
                }),
                (e.ɵcmp = i['\u0275\u0275defineComponent']({
                  type: e,
                  selectors: [['button', 'sharedBtn', '']],
                  attrs: s,
                  ngContentSelectors: u,
                  decls: 1,
                  vars: 0,
                  template: function (e, t) {
                    1 & e && (i['\u0275\u0275projectionDef'](), i['\u0275\u0275projection'](0));
                  },
                  styles: [
                    '[_nghost-%COMP%]{background:#fff;border:1px solid #d8dde6;border-radius:6px;cursor:pointer;line-height:40px;padding:0 15px}[_nghost-%COMP%]:hover{background:#f3f7fb}',
                  ],
                })),
                e
              );
            })(),
            b = (function () {
              var e = function e() {
                t(this, e);
              };
              return (
                (e.ɵmod = i['\u0275\u0275defineNgModule']({ type: e })),
                (e.ɵinj = i['\u0275\u0275defineInjector']({
                  factory: function (t) {
                    return new (t || e)();
                  },
                  imports: [[c.CommonModule]],
                })),
                e
              );
            })();
          o.default = b;
        },
      });
    }),
    'object' == typeof exports && 'object' == typeof module
      ? (module.exports = o(require('ng.common'), require('ng.core')))
      : 'function' == typeof define && define.amd
      ? define(['ng.common', 'ng.core'], o)
      : 'object' == typeof exports
      ? (exports.shared = o(require('ng.common'), require('ng.core')))
      : (n.shared = o(n['ng.common'], n['ng.core']));
})();
