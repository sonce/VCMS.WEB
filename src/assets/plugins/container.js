(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("ng.common"), require("shared"), require("ng.core"));else if (typeof define === 'function' && define.amd) define(["ng.common", "shared", "ng.core"], factory);else if (typeof exports === 'object') exports["container"] = factory(require("ng.common"), require("shared"), require("ng.core"));else root["container"] = factory(root["ng.common"], root["shared"], root["ng.core"]);
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
        "3yT8":
        /*!**********************************************!*\
          !*** ./src/container/container.component.ts ***!
          \**********************************************/

        /*! exports provided: ContainerComponent */

        /***/
        function yT8(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "ContainerComponent", function () {
            return ContainerComponent;
          });
          /* harmony import */


          var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "vOrQ");
          /* harmony import */


          var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

          var ContainerComponent = function ContainerComponent() {
            _classCallCheck(this, ContainerComponent);
          };

          ContainerComponent.ɵfac = function ContainerComponent_Factory(t) {
            return new (t || ContainerComponent)();
          };

          ContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
            type: ContainerComponent,
            selectors: [["app-plugin-container"]],
            decls: 2,
            vars: 0,
            template: function ContainerComponent_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dddd");

                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              }
            },
            encapsulation: 2
          });
          /*@__PURE__*/

          (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerComponent, [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
              args: [{
                selector: 'app-plugin-container',
                templateUrl: './container.component.html'
              }]
            }], null, null);
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
        "yiEd":
        /*!*******************************************!*\
          !*** ./src/container/container.module.ts ***!
          \*******************************************/

        /*! exports provided: ContainerModule */

        /***/
        function yiEd(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "ContainerModule", function () {
            return ContainerModule;
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


          var _container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./container.component */
          "3yT8");
          /* harmony import */


          var shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! shared */
          "cfyg");
          /* harmony import */


          var shared__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shared__WEBPACK_IMPORTED_MODULE_3__);

          var ContainerModule = function ContainerModule() {
            _classCallCheck(this, ContainerModule);
          };

          ContainerModule.config = {
            IsContainer: true,
            IsRootContainer: true,
            Title: 'Container',
            indexComponent: _container_component__WEBPACK_IMPORTED_MODULE_2__["ContainerComponent"]
          };
          ContainerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
            type: ContainerModule
          });
          ContainerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
            factory: function ContainerModule_Factory(t) {
              return new (t || ContainerModule)();
            },
            imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
          });

          (function () {
            (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContainerModule, {
              declarations: [_container_component__WEBPACK_IMPORTED_MODULE_2__["ContainerComponent"]],
              imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
            });
          })();
          /*@__PURE__*/


          (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerModule, [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
              args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
                declarations: [_container_component__WEBPACK_IMPORTED_MODULE_2__["ContainerComponent"]],
                entryComponents: [_container_component__WEBPACK_IMPORTED_MODULE_2__["ContainerComponent"]]
              }]
            }], null, null);
          })();
          /***/

        },

        /***/
        "zUnb":
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/

        /*! exports provided: ContainerModule, default */

        /***/
        function zUnb(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony import */


          var _container_container_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./container/container.module */
          "yiEd");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "ContainerModule", function () {
            return _container_container_module__WEBPACK_IMPORTED_MODULE_0__["ContainerModule"];
          });
          /* harmony default export */


          __webpack_exports__["default"] = _container_container_module__WEBPACK_IMPORTED_MODULE_0__["ContainerModule"];
          /***/
        }
        /******/

      })
    );
  }); //# sourceMappingURL=container.js.map

})();
//# sourceMappingURL=container.js.map