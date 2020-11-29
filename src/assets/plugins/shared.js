(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("ng.common"), require("ng.forms"), require("ng.bootstrap"), require("ngxtranslate"), require("rxjs"), require("rxjs.operators"), require("penpal"), require("ng.core"));else if (typeof define === 'function' && define.amd) define(["ng.common", "ng.forms", "ng.bootstrap", "ngxtranslate", "rxjs", "rxjs.operators", "penpal", "ng.core"], factory);else if (typeof exports === 'object') exports["shared"] = factory(require("ng.common"), require("ng.forms"), require("ng.bootstrap"), require("ngxtranslate"), require("rxjs"), require("rxjs.operators"), require("penpal"), require("ng.core"));else root["shared"] = factory(root["ng.common"], root["ng.forms"], root["ng.bootstrap"], root["ngxtranslate"], root["rxjs"], root["rxjs.operators"], root["penpal"], root["ng.core"]);
  })(typeof self !== 'undefined' ? self : this, function (__WEBPACK_EXTERNAL_MODULE__0S4P__, __WEBPACK_EXTERNAL_MODULE__3xDq__, __WEBPACK_EXTERNAL_MODULE__7HMT__, __WEBPACK_EXTERNAL_MODULE_TGDj__, __WEBPACK_EXTERNAL_MODULE_Vgaj__, __WEBPACK_EXTERNAL_MODULE_aP7H__, __WEBPACK_EXTERNAL_MODULE_mBXr__, __WEBPACK_EXTERNAL_MODULE_vOrQ__) {
    return (
      /******/
      function (modules) {
        // webpackBootstrap

        /******/
        // The module cache

        /******/
        var installedModules = {};
        /******/

        /******/
        // The require function

        /******/

        function __webpack_require__(moduleId) {
          /******/

          /******/
          // Check if module is in cache

          /******/
          if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
          }
          /******/
          // Create a new module (and put it into the cache)

          /******/


          var module = installedModules[moduleId] = {
            /******/
            i: moduleId,

            /******/
            l: false,

            /******/
            exports: {}
            /******/

          };
          /******/

          /******/
          // Execute the module function

          /******/

          modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
          /******/

          /******/
          // Flag the module as loaded

          /******/

          module.l = true;
          /******/

          /******/
          // Return the exports of the module

          /******/

          return module.exports;
          /******/
        }
        /******/

        /******/

        /******/
        // expose the modules object (__webpack_modules__)

        /******/


        __webpack_require__.m = modules;
        /******/

        /******/
        // expose the module cache

        /******/

        __webpack_require__.c = installedModules;
        /******/

        /******/
        // define getter function for harmony exports

        /******/

        __webpack_require__.d = function (exports, name, getter) {
          /******/
          if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
              enumerable: true,
              get: getter
            });
            /******/
          }
          /******/

        };
        /******/

        /******/
        // define __esModule on exports

        /******/


        __webpack_require__.r = function (exports) {
          /******/
          if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {
              value: 'Module'
            });
            /******/
          }
          /******/


          Object.defineProperty(exports, '__esModule', {
            value: true
          });
          /******/
        };
        /******/

        /******/
        // create a fake namespace object

        /******/
        // mode & 1: value is a module id, require it

        /******/
        // mode & 2: merge all properties of value into the ns

        /******/
        // mode & 4: return value when already ns object

        /******/
        // mode & 8|1: behave like require

        /******/


        __webpack_require__.t = function (value, mode) {
          /******/
          if (mode & 1) value = __webpack_require__(value);
          /******/

          if (mode & 8) return value;
          /******/

          if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
          /******/

          var ns = Object.create(null);
          /******/

          __webpack_require__.r(ns);
          /******/


          Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value
          });
          /******/

          if (mode & 2 && typeof value != 'string') for (var key in value) {
            __webpack_require__.d(ns, key, function (key) {
              return value[key];
            }.bind(null, key));
          }
          /******/

          return ns;
          /******/
        };
        /******/

        /******/
        // getDefaultExport function for compatibility with non-harmony modules

        /******/


        __webpack_require__.n = function (module) {
          /******/
          var getter = module && module.__esModule ?
          /******/
          function getDefault() {
            return module['default'];
          } :
          /******/
          function getModuleExports() {
            return module;
          };
          /******/

          __webpack_require__.d(getter, 'a', getter);
          /******/


          return getter;
          /******/
        };
        /******/

        /******/
        // Object.prototype.hasOwnProperty.call

        /******/


        __webpack_require__.o = function (object, property) {
          return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/

        /******/
        // __webpack_public_path__

        /******/


        __webpack_require__.p = "";
        /******/

        /******/

        /******/
        // Load entry module and return exports

        /******/

        return __webpack_require__(__webpack_require__.s = 0);
        /******/
      }(
      /************************************************************************/

      /******/
      {
        /***/
        0:
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/

        /*! no static exports found */

        /***/
        function _(module, exports, __webpack_require__) {
          module.exports = __webpack_require__(
          /*! F:\d\Project\VSoft\VCMS.WEB\projects\plugins\src\main.ts */
          "zUnb");
          /***/
        },

        /***/
        "0S4P":
        /*!****************************!*\
          !*** external "ng.common" ***!
          \****************************/

        /*! no static exports found */

        /***/
        function S4P(module, exports) {
          module.exports = __WEBPACK_EXTERNAL_MODULE__0S4P__;
          /***/
        },

        /***/
        "3xDq":
        /*!***************************!*\
          !*** external "ng.forms" ***!
          \***************************/

        /*! no static exports found */

        /***/
        function xDq(module, exports) {
          module.exports = __WEBPACK_EXTERNAL_MODULE__3xDq__;
          /***/
        },

        /***/
        "7HMT":
        /*!*******************************!*\
          !*** external "ng.bootstrap" ***!
          \*******************************/

        /*! no static exports found */

        /***/
        function HMT(module, exports) {
          module.exports = __WEBPACK_EXTERNAL_MODULE__7HMT__;
          /***/
        },

        /***/
        "9hGb":
        /*!*******************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/dist/shared/__ivy_ngcc__/fesm2015/shared.js ***!
          \*******************************************************************************/

        /*! exports provided: ButtonComponent, ChildIframeEvents, ConfirmationDialogComponent, ConfirmationDialogService, IFrameChatService, RadiogroupComponent, RadiogroupItemComponent, SharedComponent, SharedModule, TabComponent, TabsComponent, TestService, ɵa, ɵb, ɵc */

        /***/
        function hGb(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
            return ButtonComponent;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "ChildIframeEvents", function () {
            return ChildIframeEvents;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function () {
            return ConfirmationDialogComponent;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "ConfirmationDialogService", function () {
            return ConfirmationDialogService;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "IFrameChatService", function () {
            return IFrameChatService;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "RadiogroupComponent", function () {
            return RadiogroupComponent;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "RadiogroupItemComponent", function () {
            return RadiogroupItemComponent;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "SharedComponent", function () {
            return SharedComponent;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
            return SharedModule;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "TabComponent", function () {
            return TabComponent;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "TabsComponent", function () {
            return TabsComponent;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "TestService", function () {
            return TestService;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "ɵa", function () {
            return TestService;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "ɵb", function () {
            return RadiogroupComponent;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "ɵc", function () {
            return RadiogroupItemComponent;
          });
          /* harmony import */


          var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "vOrQ");
          /* harmony import */


          var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */
          "3xDq");
          /* harmony import */


          var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */
          "0S4P");
          /* harmony import */


          var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
          /* harmony import */


          var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @ngx-translate/core */
          "TGDj");
          /* harmony import */


          var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */


          var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */
          "7HMT");
          /* harmony import */


          var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
          /* harmony import */


          var penpal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! penpal */
          "mBXr");
          /* harmony import */


          var penpal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(penpal__WEBPACK_IMPORTED_MODULE_5__);
          /* harmony import */


          var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! rxjs */
          "Vgaj");
          /* harmony import */


          var rxjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_6__);
          /* harmony import */


          var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! rxjs/operators */
          "aP7H");
          /* harmony import */


          var rxjs_operators__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__);

          function TabsComponent_li_1_Template(rf, ctx) {
            if (rf & 1) {
              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_li_1_Template_li_click_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

                var tab_r1 = ctx.$implicit;

                var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

                return ctx_r2.selectTab(tab_r1);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              var tab_r1 = ctx.$implicit;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tab--active", !tab_r1.hidden);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tab_r1.title, " ");
            }
          }

          var _c0 = ["*"];
          var _c1 = ["sharedBtn", ""];
          var _c2 = ["childComponentTemplate"];

          function RadiogroupItemComponent_ng_template_0_Template(rf, ctx) {
            if (rf & 1) {
              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RadiogroupItemComponent_ng_template_0_Template_div_click_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

                var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

                return ctx_r3.onToggleCheck();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              var data_r2 = ctx.$implicit;

              var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", data_r2.value == ctx_r1.value);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", data_r2.name)("value", ctx_r1.value)("ngModel", data_r2.value);
            }
          }

          function RadiogroupComponent_div_0_1_ng_template_0_Template(rf, ctx) {}

          var _c3 = function _c3(a0, a1) {
            return {
              name: a0,
              value: a1
            };
          };

          var _c4 = function _c4(a0) {
            return {
              $implicit: a0
            };
          };

          function RadiogroupComponent_div_0_1_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RadiogroupComponent_div_0_1_ng_template_0_Template, 0, 0, "ng-template", 3);
            }

            if (rf & 2) {
              var r_r2 = ctx.$implicit;

              var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", r_r2.childComponentTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c3, ctx_r1.name, ctx_r1.value)));
            }
          }

          function RadiogroupComponent_div_0_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RadiogroupComponent_div_0_1_Template, 1, 7, undefined, 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.classes);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.radios);
            }
          }

          var SharedComponent = function SharedComponent() {
            _classCallCheck(this, SharedComponent);
          };

          SharedComponent.ɵfac = function SharedComponent_Factory(t) {
            return new (t || SharedComponent)();
          };

          SharedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
            type: SharedComponent,
            selectors: [["lib-shared-component"]],
            decls: 2,
            vars: 0,
            template: function SharedComponent_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Shared component");

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              }
            },
            encapsulation: 2
          });
          /*@__PURE__*/

          (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedComponent, [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
              args: [{
                selector: 'lib-shared-component',
                template: " <h4>Shared component</h4> "
              }]
            }], null, null);
          })();

          var TabsComponent = /*#__PURE__*/function () {
            function TabsComponent() {
              _classCallCheck(this, TabsComponent);

              this.tabs = [];
              this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            }

            _createClass(TabsComponent, [{
              key: "addTab",
              value: function addTab(tabComponent) {
                if (!this.tabs.length) {
                  tabComponent.hidden = false;
                }

                this.tabs.push(tabComponent);
              }
            }, {
              key: "selectTab",
              value: function selectTab(tabComponent) {
                this.tabs.map(function (tab) {
                  return tab.hidden = true;
                });
                tabComponent.hidden = false;
                this.selected.emit(tabComponent);
              }
            }]);

            return TabsComponent;
          }();

          TabsComponent.ɵfac = function TabsComponent_Factory(t) {
            return new (t || TabsComponent)();
          };

          TabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
            type: TabsComponent,
            selectors: [["lib-shared-tabs"]],
            outputs: {
              selected: "selected"
            },
            ngContentSelectors: _c0,
            decls: 4,
            vars: 1,
            consts: [[1, "tabs"], ["class", "tab", 3, "tab--active", "click", 4, "ngFor", "ngForOf"], [1, "tab-body"], [1, "tab", 3, "click"]],
            template: function TabsComponent_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabsComponent_li_1_Template, 2, 3, "li", 1);

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              }

              if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
              }
            },
            directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
            styles: ["[_nghost-%COMP%]{display:block}.tabs[_ngcontent-%COMP%]{border-bottom:1px solid #ebeef2;display:flex;list-style:none;margin:0;padding:0}.tab[_ngcontent-%COMP%]{cursor:pointer;line-height:40px;padding:0 20px;position:relative}.tab-body[_ngcontent-%COMP%]{padding:20px}.tab--active[_ngcontent-%COMP%]:before{background:#03a9f4;bottom:0;content:\"\";height:3px;left:0;position:absolute;right:0}"]
          });
          TabsComponent.propDecorators = {
            selected: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
            }]
          };
          /*@__PURE__*/

          (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsComponent, [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
              args: [{
                selector: 'lib-shared-tabs',
                template: "<ul class=\"tabs\">\r\n  <li *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\" class=\"tab\" [class.tab--active]=\"!tab.hidden\">\r\n    {{ tab.title }}\r\n  </li>\r\n</ul>\r\n<div class=\"tab-body\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                styles: [":host{display:block}.tabs{border-bottom:1px solid #ebeef2;display:flex;list-style:none;margin:0;padding:0}.tab{cursor:pointer;line-height:40px;padding:0 20px;position:relative}.tab-body{padding:20px}.tab--active:before{background:#03a9f4;bottom:0;content:\"\";height:3px;left:0;position:absolute;right:0}"]
              }]
            }], function () {
              return [];
            }, {
              selected: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
              }]
            });
          })();

          var TabComponent = function TabComponent(tabsComponent) {
            _classCallCheck(this, TabComponent);

            this.hidden = true;
            tabsComponent.addTab(this);
          };

          TabComponent.ɵfac = function TabComponent_Factory(t) {
            return new (t || TabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TabsComponent));
          };

          TabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
            type: TabComponent,
            selectors: [["lib-shared-tab"]],
            hostVars: 1,
            hostBindings: function TabComponent_HostBindings(rf, ctx) {
              if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("hidden", ctx.hidden);
              }
            },
            inputs: {
              title: "title"
            },
            ngContentSelectors: _c0,
            decls: 1,
            vars: 0,
            template: function TabComponent_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
              }
            },
            encapsulation: 2
          });

          TabComponent.ctorParameters = function () {
            return [{
              type: TabsComponent
            }];
          };

          TabComponent.propDecorators = {
            title: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }],
            hidden: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
              args: ['hidden']
            }]
          };
          /*@__PURE__*/

          (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabComponent, [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
              args: [{
                selector: 'lib-shared-tab',
                template: '<ng-content></ng-content>'
              }]
            }], function () {
              return [{
                type: TabsComponent
              }];
            }, {
              hidden: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
                args: ['hidden']
              }],
              title: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
              }]
            });
          })();

          var ButtonComponent = function ButtonComponent() {
            _classCallCheck(this, ButtonComponent);
          };

          ButtonComponent.ɵfac = function ButtonComponent_Factory(t) {
            return new (t || ButtonComponent)();
          };

          ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
            type: ButtonComponent,
            selectors: [["button", "sharedBtn", ""]],
            attrs: _c1,
            ngContentSelectors: _c0,
            decls: 1,
            vars: 0,
            template: function ButtonComponent_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
              }
            },
            styles: ["[_nghost-%COMP%]{background:#fff;border:1px solid #d8dde6;border-radius:6px;cursor:pointer;line-height:40px;padding:0 15px}[_nghost-%COMP%]:hover{background:#f3f7fb}"]
          });
          /*@__PURE__*/

          (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
              args: [{
                // eslint-disable-next-line @angular-eslint/component-selector
                selector: 'button[sharedBtn]',
                template: '<ng-content></ng-content>',
                styles: [":host{background:#fff;border:1px solid #d8dde6;border-radius:6px;cursor:pointer;line-height:40px;padding:0 15px}:host:hover{background:#f3f7fb}"]
              }]
            }], null, null);
          })();

          var ConfirmationDialogComponent = /*#__PURE__*/function () {
            function ConfirmationDialogComponent(activeModal) {
              _classCallCheck(this, ConfirmationDialogComponent);

              this.activeModal = activeModal;
            }

            _createClass(ConfirmationDialogComponent, [{
              key: "decline",
              value: function decline() {
                this.activeModal.close(false);
              }
            }, {
              key: "accept",
              value: function accept() {
                this.activeModal.close(true);
              }
            }, {
              key: "dismiss",
              value: function dismiss() {
                this.activeModal.dismiss();
              }
            }]);

            return ConfirmationDialogComponent;
          }();

          ConfirmationDialogComponent.ɵfac = function ConfirmationDialogComponent_Factory(t) {
            return new (t || ConfirmationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]));
          };

          ConfirmationDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
            type: ConfirmationDialogComponent,
            selectors: [["ng-component"]],
            inputs: {
              title: "title",
              message: "message",
              btnOkText: "btnOkText",
              btnCancelText: "btnCancelText"
            },
            decls: 13,
            vars: 4,
            consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "button", "ngbAutofocus", "", 1, "btn", "btn-primary", 3, "click"]],
            template: function ConfirmationDialogComponent_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialogComponent_Template_button_click_3_listener() {
                  return ctx.dismiss();
                });

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialogComponent_Template_button_click_9_listener() {
                  return ctx.decline();
                });

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialogComponent_Template_button_click_11_listener() {
                  return ctx.accept();
                });

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              }

              if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, "\n");

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnCancelText);

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnOkText);
              }
            },
            encapsulation: 2
          });

          ConfirmationDialogComponent.ctorParameters = function () {
            return [{
              type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]
            }];
          };

          ConfirmationDialogComponent.propDecorators = {
            title: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }],
            message: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }],
            btnOkText: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }],
            btnCancelText: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }]
          };
          /*@__PURE__*/

          (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmationDialogComponent, [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
              args: [{
                template: "<div class=\"modal-header\">\r\n\t<h4 class=\"modal-title\">{{ title }}</h4>\r\n\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"dismiss()\">\r\n\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t</button>\r\n</div>\r\n<div class=\"modal-body\">\r\n\t{{ message }}\r\n</div>\r\n<div class=\"modal-footer\">\r\n\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"decline()\">{{ btnCancelText }}</button>\r\n\t<button type=\"button\" ngbAutofocus class=\"btn btn-primary\" (click)=\"accept()\">{{ btnOkText }}</button>\r\n</div>\r\n"
              }]
            }], function () {
              return [{
                type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]
              }];
            }, {
              title: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
              }],
              message: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
              }],
              btnOkText: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
              }],
              btnCancelText: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
              }]
            });
          })();

          var ConfirmationDialogService = /*#__PURE__*/function () {
            function ConfirmationDialogService(modalService) {
              _classCallCheck(this, ConfirmationDialogService);

              this.modalService = modalService;
            }

            _createClass(ConfirmationDialogService, [{
              key: "confirm",
              value: function confirm(title, message) {
                var btnOkText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'OK';
                var btnCancelText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Cancel';
                var dialogSize = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'sm';
                var modalRef = this.modalService.open(ConfirmationDialogComponent, {
                  size: dialogSize,
                  centered: true
                });
                modalRef.componentInstance.title = title;
                modalRef.componentInstance.message = message;
                modalRef.componentInstance.btnOkText = btnOkText;
                modalRef.componentInstance.btnCancelText = btnCancelText;
                return modalRef.result;
              }
            }]);

            return ConfirmationDialogService;
          }();

          ConfirmationDialogService.ɵfac = function ConfirmationDialogService_Factory(t) {
            return new (t || ConfirmationDialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]));
          };

          ConfirmationDialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
            token: ConfirmationDialogService,
            factory: ConfirmationDialogService.ɵfac
          });

          ConfirmationDialogService.ctorParameters = function () {
            return [{
              type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
            }];
          };
          /*@__PURE__*/


          (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmationDialogService, [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
            }], function () {
              return [{
                type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
              }];
            }, null);
          })();

          var ChildIframeEvents = function ChildIframeEvents() {
            _classCallCheck(this, ChildIframeEvents);

            this.onloaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.onsizechanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.onScriptInited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // eslint-disable-next-line @typescript-eslint/no-explicit-any

            this.onTrackHoverElement = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.onScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // eslint-disable-next-line @typescript-eslint/no-explicit-any

            this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          };

          var IFrameChatService = /*#__PURE__*/function () {
            // constructor(iframe: HTMLIFrameElement, parentAPI?: IParentWindowAPI) {
            // 	if (parentAPI) parentAPI.iframeChatService = this;
            // 	this.Init(iframe, parentAPI);
            // }
            function IFrameChatService() {
              _classCallCheck(this, IFrameChatService);

              /** 是否已经握手初始化 */
              this.hadInit = false;
              /** 子IFRAME的事件 */

              this.childEvents = new ChildIframeEvents();
              /**
               * 链接到iframe
               */

              this.onConnected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
              debugger;
            }
            /**
             * 初始化Postmate，用于父子页面的交互
             */


            _createClass(IFrameChatService, [{
              key: "Init",
              value: function Init(iframe, parentAPI) {
                var _this = this;

                if (parentAPI) parentAPI.iframeChatService = this;
                if (this.childAPI) this.connection.destroy();
                this.connection = Object(penpal__WEBPACK_IMPORTED_MODULE_5__["connectToChild"])({
                  // The iframe to which a connection should be made
                  iframe: iframe,
                  // Methods the parent is exposing to the child
                  methods: parentAPI
                });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.connection.promise).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (child) {
                  _this.childAPI = Object.assign(Object.assign({}, child), _this.childEvents);
                  _this.hadInit = true;

                  _this.onConnected.emit(true);
                })).subscribe();
              }
            }, {
              key: "destroy",
              value: function destroy() {
                this.hadInit = false;
                if (this.childAPI) this.connection.destroy();
              }
            }]);

            return IFrameChatService;
          }();

          IFrameChatService.ɵfac = function IFrameChatService_Factory(t) {
            return new (t || IFrameChatService)();
          };

          IFrameChatService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
            factory: function IFrameChatService_Factory() {
              return new IFrameChatService();
            },
            token: IFrameChatService,
            providedIn: "root"
          });

          IFrameChatService.ctorParameters = function () {
            return [];
          };
          /*@__PURE__*/


          (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IFrameChatService, [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
              args: [{
                providedIn: 'root'
              }]
            }], function () {
              return [];
            }, null);
          })();

          var TestService = /*#__PURE__*/function () {
            function TestService() {
              _classCallCheck(this, TestService);

              console.log('Test service constructor');
              this.Message = 'aaa';
            }

            _createClass(TestService, [{
              key: "HelloWorld",
              value: function HelloWorld() {
                console.log(this.Message);
              }
            }]);

            return TestService;
          }();

          TestService.ɵfac = function TestService_Factory(t) {
            return new (t || TestService)();
          };

          TestService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
            factory: function TestService_Factory() {
              return new TestService();
            },
            token: TestService,
            providedIn: "any"
          });

          TestService.ctorParameters = function () {
            return [];
          };
          /*@__PURE__*/


          (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestService, [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
              args: [{
                providedIn: 'any'
              }]
            }], function () {
              return [];
            }, null);
          })();

          var RadiogroupItemComponent = /*#__PURE__*/function () {
            function RadiogroupItemComponent() {
              _classCallCheck(this, RadiogroupItemComponent);

              this.toggleCheck = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            }

            _createClass(RadiogroupItemComponent, [{
              key: "onToggleCheck",
              value: function onToggleCheck() {
                this.toggleCheck.emit({
                  source: this,
                  value: this.value
                });
              }
            }]);

            return RadiogroupItemComponent;
          }();

          RadiogroupItemComponent.ɵfac = function RadiogroupItemComponent_Factory(t) {
            return new (t || RadiogroupItemComponent)();
          };

          RadiogroupItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
            type: RadiogroupItemComponent,
            selectors: [["lib-radiogroup-item"], ["", "lib-radiogroup-item", ""]],
            viewQuery: function RadiogroupItemComponent_Query(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
              }

              if (rf & 2) {
                var _t;

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.childComponentTemplate = _t.first);
              }
            },
            inputs: {
              value: "value"
            },
            outputs: {
              toggleCheck: "toggleCheck"
            },
            ngContentSelectors: _c0,
            decls: 2,
            vars: 0,
            consts: [["childComponentTemplate", ""], [1, "btn", "btn-secondary", "d-flex", "justify-content-center", 3, "click"], ["type", "radio", "autocomplete", "off", 3, "name", "value", "ngModel"], [1, "align-self-center"]],
            template: function RadiogroupItemComponent_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RadiogroupItemComponent_ng_template_0_Template, 4, 5, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
              }
            },
            directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
            encapsulation: 2
          });
          RadiogroupItemComponent.propDecorators = {
            childComponentTemplate: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
              args: ['childComponentTemplate']
            }],
            value: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }],
            toggleCheck: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
            }]
          };
          /*@__PURE__*/

          (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadiogroupItemComponent, [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
              args: [{
                selector: 'lib-radiogroup-item,[lib-radiogroup-item]',
                // encapsulation: ViewEncapsulation.None,
                template: "\n\t\t<ng-template #childComponentTemplate let-data>\n\t\t\t<div\n\t\t\t\tclass=\"btn btn-secondary d-flex justify-content-center\"\n\t\t\t\t[class.active]=\"data.value == value\"\n\t\t\t\t(click)=\"onToggleCheck()\"\n\t\t\t>\n\t\t\t\t<input type=\"radio\" [name]=\"data.name\" autocomplete=\"off\" [value]=\"value\" [ngModel]=\"data.value\" />\n\t\t\t\t<div class=\"align-self-center\">\n\t\t\t\t\t<ng-content></ng-content>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-template>\n\t"
              }]
            }], function () {
              return [];
            }, {
              toggleCheck: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
              }],
              childComponentTemplate: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
                args: ['childComponentTemplate']
              }],
              value: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
              }]
            });
          })();

          var RadiogroupComponent = /*#__PURE__*/function () {
            function RadiogroupComponent(changeDetector) {
              _classCallCheck(this, RadiogroupComponent);

              this.changeDetector = changeDetector;
              this.toggleCheck = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
              this.radios = null;
              this.skinObservable = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]('bg');
              /**
               * Unsubscribe from spinner's observable
               *
               * @memberof NgxSpinnerComponent
               **/

              this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
              this.isInit = false;
            }

            _createClass(RadiogroupComponent, [{
              key: "ngOnInit",
              value: function ngOnInit() {
                var _this2 = this;

                this.getClasses().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (x) {
                  _this2.classes = x;

                  _this2.changeDetector.markForCheck();
                });
              }
            }, {
              key: "ngAfterViewInit",
              value: function ngAfterViewInit() {
                var _this3 = this;

                Promise.resolve(null).then(function () {
                  return _this3.isInit = true;
                });
                this.radios.forEach(function (x) {
                  return x.toggleCheck.subscribe(_this3.onToggleCheck.bind(_this3));
                });
              }
            }, {
              key: "getClasses",
              value: function getClasses() {
                return this.skinObservable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (x) {
                  return x.split('-');
                }));
              }
            }, {
              key: "onToggleCheck",
              value: function onToggleCheck(data) {
                this.value = data.value;
                this.toggleCheck.emit(this.value);
              }
            }, {
              key: "ngOnDestroy",
              value: function ngOnDestroy() {
                this.ngUnsubscribe.next();
                this.ngUnsubscribe.complete();
              }
            }, {
              key: "skin",
              set: function set(val) {
                this.skinObservable.next(val);
              },
              get: function get() {
                return this.skinObservable.value;
              }
            }]);

            return RadiogroupComponent;
          }();

          RadiogroupComponent.ɵfac = function RadiogroupComponent_Factory(t) {
            return new (t || RadiogroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
          };

          RadiogroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
            type: RadiogroupComponent,
            selectors: [["lib-radiogroup"]],
            contentQueries: function RadiogroupComponent_ContentQueries(rf, ctx, dirIndex) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, RadiogroupItemComponent, false);
              }

              if (rf & 2) {
                var _t;

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.radios = _t);
              }
            },
            inputs: {
              skin: "skin",
              value: "value",
              name: "name"
            },
            outputs: {
              toggleCheck: "toggleCheck"
            },
            decls: 1,
            vars: 1,
            consts: [["class", "btn-group btn-group-toggle radio-toggle-group d-flex", "data-toggle", "buttons", 3, "ngClass", 4, "ngIf"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle", "radio-toggle-group", "d-flex", 3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
            template: function RadiogroupComponent_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RadiogroupComponent_div_0_Template, 2, 2, "div", 0);
              }

              if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isInit);
              }
            },
            directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
            styles: [".btn-group.radio-toggle-group[_ngcontent-%COMP%]:hover, .btn-group.radio-toggle-group[_ngcontent-%COMP%] >   .btn-secondary{background-color:transparent;border:0;border-radius:0;color:#767676;cursor:pointer;font-weight:400}.btn-group.radio-toggle-group[_ngcontent-%COMP%] >   .btn-secondary{border-bottom:3px solid transparent}.btn-group.radio-toggle-group.bg.radius[_ngcontent-%COMP%]{border-radius:100px}.btn-group.radio-toggle-group.bg.radius[_ngcontent-%COMP%] >   .btn.btn-secondary{border-bottom-right-radius:inherit;border-radius:100px;border-top-right-radius:inherit}.btn-group.radio-toggle-group.bg[_ngcontent-%COMP%]::active, .btn-group.radio-toggle-group.bg[_ngcontent-%COMP%] >   .btn.btn-secondary.active{background-color:#fff;box-shadow:0 .125rem .25rem rgba(0,0,0,.075);outline:0;top:0;transition:left .15s cubic-bezier(.32,.94,.6,1),width .15s cubic-bezier(.32,.94,.6,1);z-index:1}.btn-group.radio-toggle-group.bottomline[_ngcontent-%COMP%] >   .btn.btn-secondary:hover{color:#de1dde}.btn-group.radio-toggle-group.bottomline[_ngcontent-%COMP%] >   .btn.btn-secondary:hover svg{fill:#de1dde}.btn-group.radio-toggle-group.bottomline[_ngcontent-%COMP%] >   .btn.btn-secondary.active, .btn-group.radio-toggle-group.bottomline[_ngcontent-%COMP%] >   .btn.btn-secondary:active{border-bottom:3px solid #3899ec;color:#de1dde;outline:0;top:0;z-index:1}.btn-group.radio-toggle-group.bottomline[_ngcontent-%COMP%] >   .btn.btn-secondary.active svg, .btn-group.radio-toggle-group.bottomline[_ngcontent-%COMP%] >   .btn.btn-secondary:active svg{fill:#de1dde}"]
          });

          RadiogroupComponent.ctorParameters = function () {
            return [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
            }];
          };

          RadiogroupComponent.propDecorators = {
            toggleCheck: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
            }],
            radios: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
              args: [RadiogroupItemComponent]
            }],
            name: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }],
            value: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }],
            skin: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }]
          };
          /*@__PURE__*/

          (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadiogroupComponent, [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
              args: [{
                selector: 'lib-radiogroup',
                template: "\n\t\t<div\n\t\t\tclass=\"btn-group btn-group-toggle radio-toggle-group d-flex\"\n\t\t\t[ngClass]=\"classes\"\n\t\t\tdata-toggle=\"buttons\"\n\t\t\t*ngIf=\"isInit\"\n\t\t>\n\t\t\t<ng-template\n\t\t\t\t*ngFor=\"let r of radios; let i = index\"\n\t\t\t\t[ngTemplateOutlet]=\"r.childComponentTemplate\"\n\t\t\t\t[ngTemplateOutletContext]=\"{ $implicit: { name: name, value: value } }\"\n\t\t\t>\n\t\t\t</ng-template>\n\t\t</div>\n\t",
                styles: [".btn-group.radio-toggle-group:hover,.btn-group.radio-toggle-group>::ng-deep .btn-secondary{background-color:transparent;border:0;border-radius:0;color:#767676;cursor:pointer;font-weight:400}.btn-group.radio-toggle-group>::ng-deep .btn-secondary{border-bottom:3px solid transparent}.btn-group.radio-toggle-group.bg.radius{border-radius:100px}.btn-group.radio-toggle-group.bg.radius>::ng-deep .btn.btn-secondary{border-bottom-right-radius:inherit;border-radius:100px;border-top-right-radius:inherit}.btn-group.radio-toggle-group.bg::active,.btn-group.radio-toggle-group.bg>::ng-deep .btn.btn-secondary.active{background-color:#fff;box-shadow:0 .125rem .25rem rgba(0,0,0,.075);outline:0;top:0;transition:left .15s cubic-bezier(.32,.94,.6,1),width .15s cubic-bezier(.32,.94,.6,1);z-index:1}.btn-group.radio-toggle-group.bottomline>::ng-deep .btn.btn-secondary:hover{color:#de1dde}.btn-group.radio-toggle-group.bottomline>::ng-deep .btn.btn-secondary:hover svg{fill:#de1dde}.btn-group.radio-toggle-group.bottomline>::ng-deep .btn.btn-secondary.active,.btn-group.radio-toggle-group.bottomline>::ng-deep .btn.btn-secondary:active{border-bottom:3px solid #3899ec;color:#de1dde;outline:0;top:0;z-index:1}.btn-group.radio-toggle-group.bottomline>::ng-deep .btn.btn-secondary.active svg,.btn-group.radio-toggle-group.bottomline>::ng-deep .btn.btn-secondary:active svg{fill:#de1dde}"]
              }]
            }], function () {
              return [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
              }];
            }, {
              toggleCheck: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
              }],
              radios: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
                args: [RadiogroupItemComponent]
              }],
              skin: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
              }],
              value: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
              }],
              name: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
              }]
            });
          })();

          var sharedComponents = [SharedComponent, ButtonComponent, TabComponent, TabsComponent, ConfirmationDialogComponent, RadiogroupComponent, RadiogroupItemComponent];

          var SharedModule = function SharedModule() {
            _classCallCheck(this, SharedModule);
          };

          SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
            type: SharedModule
          });
          SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
            factory: function SharedModule_Factory(t) {
              return new (t || SharedModule)();
            },
            providers: [TestService, ConfirmationDialogService],
            imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]]]
          });

          (function () {
            (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
              declarations: function declarations() {
                return [SharedComponent, ButtonComponent, TabComponent, TabsComponent, ConfirmationDialogComponent, RadiogroupComponent, RadiogroupItemComponent];
              },
              imports: function imports() {
                return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]];
              },
              exports: function exports() {
                return [SharedComponent, ButtonComponent, TabComponent, TabsComponent, ConfirmationDialogComponent, RadiogroupComponent, RadiogroupItemComponent];
              }
            });
          })();
          /*@__PURE__*/


          (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
              args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]],
                providers: [TestService, ConfirmationDialogService],
                declarations: [].concat(sharedComponents),
                exports: [].concat(sharedComponents)
              }]
            }], null, null);
          })();
          /*
           * Public API Surface of shared
           */

          /**
           * Generated bundle index. Do not edit.
           */
          //# sourceMappingURL=shared.js.map

          /***/

        },

        /***/
        "TGDj":
        /*!*******************************!*\
          !*** external "ngxtranslate" ***!
          \*******************************/

        /*! no static exports found */

        /***/
        function TGDj(module, exports) {
          module.exports = __WEBPACK_EXTERNAL_MODULE_TGDj__;
          /***/
        },

        /***/
        "Vgaj":
        /*!***********************!*\
          !*** external "rxjs" ***!
          \***********************/

        /*! no static exports found */

        /***/
        function Vgaj(module, exports) {
          module.exports = __WEBPACK_EXTERNAL_MODULE_Vgaj__;
          /***/
        },

        /***/
        "aP7H":
        /*!*********************************!*\
          !*** external "rxjs.operators" ***!
          \*********************************/

        /*! no static exports found */

        /***/
        function aP7H(module, exports) {
          module.exports = __WEBPACK_EXTERNAL_MODULE_aP7H__;
          /***/
        },

        /***/
        "mBXr":
        /*!*************************!*\
          !*** external "penpal" ***!
          \*************************/

        /*! no static exports found */

        /***/
        function mBXr(module, exports) {
          module.exports = __WEBPACK_EXTERNAL_MODULE_mBXr__;
          /***/
        },

        /***/
        "vOrQ":
        /*!**************************!*\
          !*** external "ng.core" ***!
          \**************************/

        /*! no static exports found */

        /***/
        function vOrQ(module, exports) {
          module.exports = __WEBPACK_EXTERNAL_MODULE_vOrQ__;
          /***/
        },

        /***/
        "zUnb":
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/

        /*! exports provided: ButtonComponent, ChildIframeEvents, ConfirmationDialogComponent, ConfirmationDialogService, IFrameChatService, RadiogroupComponent, RadiogroupItemComponent, SharedComponent, SharedModule, TabComponent, TabsComponent, TestService, ɵa, ɵb, ɵc, default */

        /***/
        function zUnb(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony import */


          var shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! shared */
          "9hGb");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
            return shared__WEBPACK_IMPORTED_MODULE_0__["ButtonComponent"];
          });
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "ChildIframeEvents", function () {
            return shared__WEBPACK_IMPORTED_MODULE_0__["ChildIframeEvents"];
          });
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function () {
            return shared__WEBPACK_IMPORTED_MODULE_0__["ConfirmationDialogComponent"];
          });
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "ConfirmationDialogService", function () {
            return shared__WEBPACK_IMPORTED_MODULE_0__["ConfirmationDialogService"];
          });
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "IFrameChatService", function () {
            return shared__WEBPACK_IMPORTED_MODULE_0__["IFrameChatService"];
          });
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "RadiogroupComponent", function () {
            return shared__WEBPACK_IMPORTED_MODULE_0__["RadiogroupComponent"];
          });
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "RadiogroupItemComponent", function () {
            return shared__WEBPACK_IMPORTED_MODULE_0__["RadiogroupItemComponent"];
          });
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "SharedComponent", function () {
            return shared__WEBPACK_IMPORTED_MODULE_0__["SharedComponent"];
          });
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
            return shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"];
          });
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "TabComponent", function () {
            return shared__WEBPACK_IMPORTED_MODULE_0__["TabComponent"];
          });
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "TabsComponent", function () {
            return shared__WEBPACK_IMPORTED_MODULE_0__["TabsComponent"];
          });
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "TestService", function () {
            return shared__WEBPACK_IMPORTED_MODULE_0__["TestService"];
          });
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "ɵa", function () {
            return shared__WEBPACK_IMPORTED_MODULE_0__["ɵa"];
          });
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "ɵb", function () {
            return shared__WEBPACK_IMPORTED_MODULE_0__["ɵb"];
          });
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "ɵc", function () {
            return shared__WEBPACK_IMPORTED_MODULE_0__["ɵc"];
          });
          /* harmony default export */


          __webpack_exports__["default"] = shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"];
          /***/
        }
        /******/

      })
    );
  }); //# sourceMappingURL=shared.js.map

})();
//# sourceMappingURL=shared.js.map