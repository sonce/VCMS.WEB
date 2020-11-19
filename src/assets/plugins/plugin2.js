(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("ng.common"), require("shared"), require("ng.core"));else if (typeof define === 'function' && define.amd) define(["ng.common", "shared", "ng.core"], factory);else if (typeof exports === 'object') exports["plugin2"] = factory(require("ng.common"), require("shared"), require("ng.core"));else root["plugin2"] = factory(root["ng.common"], root["shared"], root["ng.core"]);
  })(typeof self !== 'undefined' ? self : this, function (__WEBPACK_EXTERNAL_MODULE__0S4P__, __WEBPACK_EXTERNAL_MODULE_cfyg__, __WEBPACK_EXTERNAL_MODULE_vOrQ__) {
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
        "cTXC":
        /*!******************************************!*\
          !*** ./src/plugin2/plugin2.component.ts ***!
          \******************************************/

        /*! exports provided: Plugin2Component */

        /***/
        function cTXC(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "Plugin2Component", function () {
            return Plugin2Component;
          });
          /* harmony import */


          var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "vOrQ");
          /* harmony import */


          var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! shared */
          "cfyg");
          /* harmony import */


          var shared__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shared__WEBPACK_IMPORTED_MODULE_1__);

          var Plugin2Component = function Plugin2Component(testService) {
            _classCallCheck(this, Plugin2Component);

            this.testService = testService;
            testService.HelloWorld();
            var v = {
              id: 'a',
              type: 'aa',
              pos: {
                left: 1,
                top: 1,
                width: 2,
                height: 3
              }
            };
            if (v) console.log('a');
          };

          Plugin2Component.ɵfac = function Plugin2Component_Factory(t) {
            return new (t || Plugin2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](shared__WEBPACK_IMPORTED_MODULE_1__["TestService"]));
          };

          Plugin2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
            type: Plugin2Component,
            selectors: [["app-plugin-2"]],
            decls: 9,
            vars: 0,
            consts: [["title", "Tab 1"], ["title", "Tab 2"], ["title", "Tab 3"]],
            template: function Plugin2Component_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Plugin 2");

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "lib-shared-tabs");

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "lib-shared-tab", 0);

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Tab 1 contents ");

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "lib-shared-tab", 1);

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Tab 2 contents ");

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "lib-shared-tab", 2);

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Tab 3 contents ");

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              }
            },
            directives: [shared__WEBPACK_IMPORTED_MODULE_1__["TabsComponent"], shared__WEBPACK_IMPORTED_MODULE_1__["TabComponent"]],
            encapsulation: 2
          });
          /*@__PURE__*/

          (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Plugin2Component, [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
              args: [{
                selector: 'app-plugin-2',
                templateUrl: './plugin2.component.html'
              }]
            }], function () {
              return [{
                type: shared__WEBPACK_IMPORTED_MODULE_1__["TestService"]
              }];
            }, null);
          })();
          /***/

        },

        /***/
        "cfyg":
        /*!*************************!*\
          !*** external "shared" ***!
          \*************************/

        /*! no static exports found */

        /***/
        function cfyg(module, exports) {
          module.exports = __WEBPACK_EXTERNAL_MODULE_cfyg__;
          /***/
        },

        /***/
        "odVo":
        /*!***************************************!*\
          !*** ./src/plugin2/plugin2.module.ts ***!
          \***************************************/

        /*! exports provided: Plugin2Module */

        /***/
        function odVo(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "Plugin2Module", function () {
            return Plugin2Module;
          });
          /* harmony import */


          var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "vOrQ");
          /* harmony import */


          var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
          /* harmony import */


          var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */
          "0S4P");
          /* harmony import */


          var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
          /* harmony import */


          var _plugin2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./plugin2.component */
          "cTXC");
          /* harmony import */


          var shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! shared */
          "cfyg");
          /* harmony import */


          var shared__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shared__WEBPACK_IMPORTED_MODULE_3__);

          var Plugin2Module = function Plugin2Module() {
            _classCallCheck(this, Plugin2Module);
          };

          Plugin2Module.config = {
            Title: 'Plugin 2',
            indexComponent: _plugin2_component__WEBPACK_IMPORTED_MODULE_2__["Plugin2Component"]
          };
          Plugin2Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
            type: Plugin2Module
          });
          Plugin2Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
            factory: function Plugin2Module_Factory(t) {
              return new (t || Plugin2Module)();
            },
            imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
          });

          (function () {
            (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Plugin2Module, {
              declarations: [_plugin2_component__WEBPACK_IMPORTED_MODULE_2__["Plugin2Component"]],
              imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
            });
          })();
          /*@__PURE__*/


          (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Plugin2Module, [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
              args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
                declarations: [_plugin2_component__WEBPACK_IMPORTED_MODULE_2__["Plugin2Component"]],
                entryComponents: [_plugin2_component__WEBPACK_IMPORTED_MODULE_2__["Plugin2Component"]]
              }]
            }], null, null);
          })();
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

        /*! exports provided: Plugin2Module, default */

        /***/
        function zUnb(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony import */


          var _plugin2_plugin2_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./plugin2/plugin2.module */
          "odVo");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "Plugin2Module", function () {
            return _plugin2_plugin2_module__WEBPACK_IMPORTED_MODULE_0__["Plugin2Module"];
          });
          /* harmony default export */


          __webpack_exports__["default"] = _plugin2_plugin2_module__WEBPACK_IMPORTED_MODULE_0__["Plugin2Module"];
          /***/
        }
        /******/

      })
    );
  }); //# sourceMappingURL=plugin2.js.map

})();
//# sourceMappingURL=plugin2.js.map