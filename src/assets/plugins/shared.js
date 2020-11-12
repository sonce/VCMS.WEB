(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("ng.common"), require("rxjs"), require("ng.core"));else if (typeof define === 'function' && define.amd) define(["ng.common", "rxjs", "ng.core"], factory);else if (typeof exports === 'object') exports["shared"] = factory(require("ng.common"), require("rxjs"), require("ng.core"));else root["shared"] = factory(root["ng.common"], root["rxjs"], root["ng.core"]);
  })(typeof self !== 'undefined' ? self : this, function (__WEBPACK_EXTERNAL_MODULE__0S4P__, __WEBPACK_EXTERNAL_MODULE_Vgaj__, __WEBPACK_EXTERNAL_MODULE_vOrQ__) {
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
        "+ynE":
        /*!*****************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduled/scheduleIterable.js ***!
          \*****************************************************************************************************/

        /*! exports provided: scheduleIterable */

        /***/
        function ynE(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "scheduleIterable", function () {
            return scheduleIterable;
          });
          /* harmony import */


          var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Observable */
          "IdLP");
          /* harmony import */


          var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../Subscription */
          "bwdy");
          /* harmony import */


          var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../symbol/iterator */
          "sWLk");

          function scheduleIterable(input, scheduler) {
            if (!input) {
              throw new Error('Iterable cannot be null');
            }

            return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
              var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
              var iterator;
              sub.add(function () {
                if (iterator && typeof iterator["return"] === 'function') {
                  iterator["return"]();
                }
              });
              sub.add(scheduler.schedule(function () {
                iterator = input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__["iterator"]]();
                sub.add(scheduler.schedule(function () {
                  if (subscriber.closed) {
                    return;
                  }

                  var value;
                  var done;

                  try {
                    var result = iterator.next();
                    value = result.value;
                    done = result.done;
                  } catch (err) {
                    subscriber.error(err);
                    return;
                  }

                  if (done) {
                    subscriber.complete();
                  } else {
                    subscriber.next(value);
                    this.schedule();
                  }
                }));
              }));
              return sub;
            });
          } //# sourceMappingURL=scheduleIterable.js.map

          /***/

        },

        /***/
        "/G9O":
        /*!***********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/windowTime.js ***!
          \***********************************************************************************************/

        /*! exports provided: windowTime */

        /***/
        function G9O(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "windowTime", function () {
            return windowTime;
          });
          /* harmony import */


          var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subject */
          "ZTXN");
          /* harmony import */


          var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../scheduler/async */
          "Efrr");
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");
          /* harmony import */


          var _util_isNumeric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../util/isNumeric */
          "KRZI");
          /* harmony import */


          var _util_isScheduler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../util/isScheduler */
          "gBlb");

          function windowTime(windowTimeSpan) {
            var scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
            var windowCreationInterval = null;
            var maxWindowSize = Number.POSITIVE_INFINITY;

            if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_4__["isScheduler"])(arguments[3])) {
              scheduler = arguments[3];
            }

            if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_4__["isScheduler"])(arguments[2])) {
              scheduler = arguments[2];
            } else if (Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_3__["isNumeric"])(arguments[2])) {
              maxWindowSize = Number(arguments[2]);
            }

            if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_4__["isScheduler"])(arguments[1])) {
              scheduler = arguments[1];
            } else if (Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_3__["isNumeric"])(arguments[1])) {
              windowCreationInterval = Number(arguments[1]);
            }

            return function windowTimeOperatorFunction(source) {
              return source.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler));
            };
          }

          var WindowTimeOperator = /*#__PURE__*/function () {
            function WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
              _classCallCheck(this, WindowTimeOperator);

              this.windowTimeSpan = windowTimeSpan;
              this.windowCreationInterval = windowCreationInterval;
              this.maxWindowSize = maxWindowSize;
              this.scheduler = scheduler;
            }

            _createClass(WindowTimeOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler));
              }
            }]);

            return WindowTimeOperator;
          }();

          var CountedSubject = /*#__PURE__*/function (_Subject__WEBPACK_IMP) {
            _inherits(CountedSubject, _Subject__WEBPACK_IMP);

            var _super = _createSuper(CountedSubject);

            function CountedSubject() {
              var _this;

              _classCallCheck(this, CountedSubject);

              _this = _super.apply(this, arguments);
              _this._numberOfNextedValues = 0;
              return _this;
            }

            _createClass(CountedSubject, [{
              key: "next",
              value: function next(value) {
                this._numberOfNextedValues++;

                _get(_getPrototypeOf(CountedSubject.prototype), "next", this).call(this, value);
              }
            }, {
              key: "numberOfNextedValues",
              get: function get() {
                return this._numberOfNextedValues;
              }
            }]);

            return CountedSubject;
          }(_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]);

          var WindowTimeSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_) {
            _inherits(WindowTimeSubscriber, _Subscriber__WEBPACK_);

            var _super2 = _createSuper(WindowTimeSubscriber);

            function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
              var _this2;

              _classCallCheck(this, WindowTimeSubscriber);

              _this2 = _super2.call(this, destination);
              _this2.destination = destination;
              _this2.windowTimeSpan = windowTimeSpan;
              _this2.windowCreationInterval = windowCreationInterval;
              _this2.maxWindowSize = maxWindowSize;
              _this2.scheduler = scheduler;
              _this2.windows = [];

              var window = _this2.openWindow();

              if (windowCreationInterval !== null && windowCreationInterval >= 0) {
                var closeState = {
                  subscriber: _assertThisInitialized(_this2),
                  window: window,
                  context: null
                };
                var creationState = {
                  windowTimeSpan: windowTimeSpan,
                  windowCreationInterval: windowCreationInterval,
                  subscriber: _assertThisInitialized(_this2),
                  scheduler: scheduler
                };

                _this2.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));

                _this2.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
              } else {
                var timeSpanOnlyState = {
                  subscriber: _assertThisInitialized(_this2),
                  window: window,
                  windowTimeSpan: windowTimeSpan
                };

                _this2.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
              }

              return _this2;
            }

            _createClass(WindowTimeSubscriber, [{
              key: "_next",
              value: function _next(value) {
                var windows = this.windows;
                var len = windows.length;

                for (var i = 0; i < len; i++) {
                  var _window = windows[i];

                  if (!_window.closed) {
                    _window.next(value);

                    if (_window.numberOfNextedValues >= this.maxWindowSize) {
                      this.closeWindow(_window);
                    }
                  }
                }
              }
            }, {
              key: "_error",
              value: function _error(err) {
                var windows = this.windows;

                while (windows.length > 0) {
                  windows.shift().error(err);
                }

                this.destination.error(err);
              }
            }, {
              key: "_complete",
              value: function _complete() {
                var windows = this.windows;

                while (windows.length > 0) {
                  var _window2 = windows.shift();

                  if (!_window2.closed) {
                    _window2.complete();
                  }
                }

                this.destination.complete();
              }
            }, {
              key: "openWindow",
              value: function openWindow() {
                var window = new CountedSubject();
                this.windows.push(window);
                var destination = this.destination;
                destination.next(window);
                return window;
              }
            }, {
              key: "closeWindow",
              value: function closeWindow(window) {
                window.complete();
                var windows = this.windows;
                windows.splice(windows.indexOf(window), 1);
              }
            }]);

            return WindowTimeSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_2__["Subscriber"]);

          function dispatchWindowTimeSpanOnly(state) {
            var subscriber = state.subscriber,
                windowTimeSpan = state.windowTimeSpan,
                window = state.window;

            if (window) {
              subscriber.closeWindow(window);
            }

            state.window = subscriber.openWindow();
            this.schedule(state, windowTimeSpan);
          }

          function dispatchWindowCreation(state) {
            var windowTimeSpan = state.windowTimeSpan,
                subscriber = state.subscriber,
                scheduler = state.scheduler,
                windowCreationInterval = state.windowCreationInterval;
            var window = subscriber.openWindow();
            var action = this;
            var context = {
              action: action,
              subscription: null
            };
            var timeSpanState = {
              subscriber: subscriber,
              window: window,
              context: context
            };
            context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
            action.add(context.subscription);
            action.schedule(state, windowCreationInterval);
          }

          function dispatchWindowClose(state) {
            var subscriber = state.subscriber,
                window = state.window,
                context = state.context;

            if (context && context.action && context.subscription) {
              context.action.remove(context.subscription);
            }

            subscriber.closeWindow(window);
          } //# sourceMappingURL=windowTime.js.map

          /***/

        },

        /***/
        "/Nkf":
        /*!************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/concatMapTo.js ***!
          \************************************************************************************************/

        /*! exports provided: concatMapTo */

        /***/
        function Nkf(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "concatMapTo", function () {
            return concatMapTo;
          });
          /* harmony import */


          var _concatMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./concatMap */
          "5uDM");

          function concatMapTo(innerObservable, resultSelector) {
            return Object(_concatMap__WEBPACK_IMPORTED_MODULE_0__["concatMap"])(function () {
              return innerObservable;
            }, resultSelector);
          } //# sourceMappingURL=concatMapTo.js.map

          /***/

        },

        /***/
        "/vgl":
        /*!*****************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/isPromise.js ***!
          \*****************************************************************************************/

        /*! exports provided: isPromise */

        /***/
        function vgl(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "isPromise", function () {
            return isPromise;
          });

          function isPromise(value) {
            return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
          } //# sourceMappingURL=isPromise.js.map

          /***/

        },

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
        "0B/R":
        /*!********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/toArray.js ***!
          \********************************************************************************************/

        /*! exports provided: toArray */

        /***/
        function BR(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "toArray", function () {
            return toArray;
          });
          /* harmony import */


          var _reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./reduce */
          "0iRq");

          function toArrayReducer(arr, item, index) {
            if (index === 0) {
              return [item];
            }

            arr.push(item);
            return arr;
          }

          function toArray() {
            return Object(_reduce__WEBPACK_IMPORTED_MODULE_0__["reduce"])(toArrayReducer, []);
          } //# sourceMappingURL=toArray.js.map

          /***/

        },

        /***/
        "0QxZ":
        /*!********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/exhaust.js ***!
          \********************************************************************************************/

        /*! exports provided: exhaust */

        /***/
        function QxZ(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "exhaust", function () {
            return exhaust;
          });
          /* harmony import */


          var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../innerSubscribe */
          "uCWR");

          function exhaust() {
            return function (source) {
              return source.lift(new SwitchFirstOperator());
            };
          }

          var SwitchFirstOperator = /*#__PURE__*/function () {
            function SwitchFirstOperator() {
              _classCallCheck(this, SwitchFirstOperator);
            }

            _createClass(SwitchFirstOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new SwitchFirstSubscriber(subscriber));
              }
            }]);

            return SwitchFirstOperator;
          }();

          var SwitchFirstSubscriber = /*#__PURE__*/function (_innerSubscribe__WEBP) {
            _inherits(SwitchFirstSubscriber, _innerSubscribe__WEBP);

            var _super3 = _createSuper(SwitchFirstSubscriber);

            function SwitchFirstSubscriber(destination) {
              var _this3;

              _classCallCheck(this, SwitchFirstSubscriber);

              _this3 = _super3.call(this, destination);
              _this3.hasCompleted = false;
              _this3.hasSubscription = false;
              return _this3;
            }

            _createClass(SwitchFirstSubscriber, [{
              key: "_next",
              value: function _next(value) {
                if (!this.hasSubscription) {
                  this.hasSubscription = true;
                  this.add(Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["innerSubscribe"])(value, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleInnerSubscriber"](this)));
                }
              }
            }, {
              key: "_complete",
              value: function _complete() {
                this.hasCompleted = true;

                if (!this.hasSubscription) {
                  this.destination.complete();
                }
              }
            }, {
              key: "notifyComplete",
              value: function notifyComplete() {
                this.hasSubscription = false;

                if (this.hasCompleted) {
                  this.destination.complete();
                }
              }
            }]);

            return SwitchFirstSubscriber;
          }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleOuterSubscriber"]); //# sourceMappingURL=exhaust.js.map

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
        "0Wlh":
        /*!*********************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/operators/index.js ***!
          \*********************************************************************************/

        /*! exports provided: audit, auditTime, buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, catchError, combineAll, combineLatest, concat, concatAll, concatMap, concatMapTo, count, debounce, debounceTime, defaultIfEmpty, delay, delayWhen, dematerialize, distinct, distinctUntilChanged, distinctUntilKeyChanged, elementAt, endWith, every, exhaust, exhaustMap, expand, filter, finalize, find, findIndex, first, groupBy, ignoreElements, isEmpty, last, map, mapTo, materialize, max, merge, mergeAll, mergeMap, flatMap, mergeMapTo, mergeScan, min, multicast, observeOn, onErrorResumeNext, pairwise, partition, pluck, publish, publishBehavior, publishLast, publishReplay, race, reduce, repeat, repeatWhen, retry, retryWhen, refCount, sample, sampleTime, scan, sequenceEqual, share, shareReplay, single, skip, skipLast, skipUntil, skipWhile, startWith, subscribeOn, switchAll, switchMap, switchMapTo, take, takeLast, takeUntil, takeWhile, tap, throttle, throttleTime, throwIfEmpty, timeInterval, timeout, timeoutWith, timestamp, toArray, window, windowCount, windowTime, windowToggle, windowWhen, withLatestFrom, zip, zipAll */

        /***/
        function Wlh(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony import */


          var _internal_operators_audit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../internal/operators/audit */
          "oUj0");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "audit", function () {
            return _internal_operators_audit__WEBPACK_IMPORTED_MODULE_0__["audit"];
          });
          /* harmony import */


          var _internal_operators_auditTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../internal/operators/auditTime */
          "prE9");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "auditTime", function () {
            return _internal_operators_auditTime__WEBPACK_IMPORTED_MODULE_1__["auditTime"];
          });
          /* harmony import */


          var _internal_operators_buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../internal/operators/buffer */
          "IF3+");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "buffer", function () {
            return _internal_operators_buffer__WEBPACK_IMPORTED_MODULE_2__["buffer"];
          });
          /* harmony import */


          var _internal_operators_bufferCount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../internal/operators/bufferCount */
          "jNqi");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "bufferCount", function () {
            return _internal_operators_bufferCount__WEBPACK_IMPORTED_MODULE_3__["bufferCount"];
          });
          /* harmony import */


          var _internal_operators_bufferTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../internal/operators/bufferTime */
          "AAYN");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "bufferTime", function () {
            return _internal_operators_bufferTime__WEBPACK_IMPORTED_MODULE_4__["bufferTime"];
          });
          /* harmony import */


          var _internal_operators_bufferToggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../internal/operators/bufferToggle */
          "PVB3");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "bufferToggle", function () {
            return _internal_operators_bufferToggle__WEBPACK_IMPORTED_MODULE_5__["bufferToggle"];
          });
          /* harmony import */


          var _internal_operators_bufferWhen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../internal/operators/bufferWhen */
          "GhgG");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "bufferWhen", function () {
            return _internal_operators_bufferWhen__WEBPACK_IMPORTED_MODULE_6__["bufferWhen"];
          });
          /* harmony import */


          var _internal_operators_catchError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../internal/operators/catchError */
          "4e/d");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "catchError", function () {
            return _internal_operators_catchError__WEBPACK_IMPORTED_MODULE_7__["catchError"];
          });
          /* harmony import */


          var _internal_operators_combineAll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../internal/operators/combineAll */
          "gdbe");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "combineAll", function () {
            return _internal_operators_combineAll__WEBPACK_IMPORTED_MODULE_8__["combineAll"];
          });
          /* harmony import */


          var _internal_operators_combineLatest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../internal/operators/combineLatest */
          "fnmL");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "combineLatest", function () {
            return _internal_operators_combineLatest__WEBPACK_IMPORTED_MODULE_9__["combineLatest"];
          });
          /* harmony import */


          var _internal_operators_concat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../internal/operators/concat */
          "574M");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "concat", function () {
            return _internal_operators_concat__WEBPACK_IMPORTED_MODULE_10__["concat"];
          });
          /* harmony import */


          var _internal_operators_concatAll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../internal/operators/concatAll */
          "mawV");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "concatAll", function () {
            return _internal_operators_concatAll__WEBPACK_IMPORTED_MODULE_11__["concatAll"];
          });
          /* harmony import */


          var _internal_operators_concatMap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../internal/operators/concatMap */
          "5uDM");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "concatMap", function () {
            return _internal_operators_concatMap__WEBPACK_IMPORTED_MODULE_12__["concatMap"];
          });
          /* harmony import */


          var _internal_operators_concatMapTo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../internal/operators/concatMapTo */
          "/Nkf");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "concatMapTo", function () {
            return _internal_operators_concatMapTo__WEBPACK_IMPORTED_MODULE_13__["concatMapTo"];
          });
          /* harmony import */


          var _internal_operators_count__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../internal/operators/count */
          "lJSs");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "count", function () {
            return _internal_operators_count__WEBPACK_IMPORTED_MODULE_14__["count"];
          });
          /* harmony import */


          var _internal_operators_debounce__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../internal/operators/debounce */
          "4xW2");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "debounce", function () {
            return _internal_operators_debounce__WEBPACK_IMPORTED_MODULE_15__["debounce"];
          });
          /* harmony import */


          var _internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../internal/operators/debounceTime */
          "mWib");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "debounceTime", function () {
            return _internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_16__["debounceTime"];
          });
          /* harmony import */


          var _internal_operators_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../internal/operators/defaultIfEmpty */
          "iqFP");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "defaultIfEmpty", function () {
            return _internal_operators_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_17__["defaultIfEmpty"];
          });
          /* harmony import */


          var _internal_operators_delay__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../internal/operators/delay */
          "BwBJ");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "delay", function () {
            return _internal_operators_delay__WEBPACK_IMPORTED_MODULE_18__["delay"];
          });
          /* harmony import */


          var _internal_operators_delayWhen__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../internal/operators/delayWhen */
          "UWon");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "delayWhen", function () {
            return _internal_operators_delayWhen__WEBPACK_IMPORTED_MODULE_19__["delayWhen"];
          });
          /* harmony import */


          var _internal_operators_dematerialize__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../internal/operators/dematerialize */
          "vjgY");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "dematerialize", function () {
            return _internal_operators_dematerialize__WEBPACK_IMPORTED_MODULE_20__["dematerialize"];
          });
          /* harmony import */


          var _internal_operators_distinct__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../internal/operators/distinct */
          "tDaw");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "distinct", function () {
            return _internal_operators_distinct__WEBPACK_IMPORTED_MODULE_21__["distinct"];
          });
          /* harmony import */


          var _internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../internal/operators/distinctUntilChanged */
          "Ohay");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "distinctUntilChanged", function () {
            return _internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_22__["distinctUntilChanged"];
          });
          /* harmony import */


          var _internal_operators_distinctUntilKeyChanged__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ../internal/operators/distinctUntilKeyChanged */
          "soHz");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "distinctUntilKeyChanged", function () {
            return _internal_operators_distinctUntilKeyChanged__WEBPACK_IMPORTED_MODULE_23__["distinctUntilKeyChanged"];
          });
          /* harmony import */


          var _internal_operators_elementAt__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ../internal/operators/elementAt */
          "eZPq");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "elementAt", function () {
            return _internal_operators_elementAt__WEBPACK_IMPORTED_MODULE_24__["elementAt"];
          });
          /* harmony import */


          var _internal_operators_endWith__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ../internal/operators/endWith */
          "w2TD");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "endWith", function () {
            return _internal_operators_endWith__WEBPACK_IMPORTED_MODULE_25__["endWith"];
          });
          /* harmony import */


          var _internal_operators_every__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ../internal/operators/every */
          "2OXO");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "every", function () {
            return _internal_operators_every__WEBPACK_IMPORTED_MODULE_26__["every"];
          });
          /* harmony import */


          var _internal_operators_exhaust__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ../internal/operators/exhaust */
          "0QxZ");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "exhaust", function () {
            return _internal_operators_exhaust__WEBPACK_IMPORTED_MODULE_27__["exhaust"];
          });
          /* harmony import */


          var _internal_operators_exhaustMap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ../internal/operators/exhaustMap */
          "ZzcO");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "exhaustMap", function () {
            return _internal_operators_exhaustMap__WEBPACK_IMPORTED_MODULE_28__["exhaustMap"];
          });
          /* harmony import */


          var _internal_operators_expand__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ../internal/operators/expand */
          "f/66");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "expand", function () {
            return _internal_operators_expand__WEBPACK_IMPORTED_MODULE_29__["expand"];
          });
          /* harmony import */


          var _internal_operators_filter__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ../internal/operators/filter */
          "xVbo");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "filter", function () {
            return _internal_operators_filter__WEBPACK_IMPORTED_MODULE_30__["filter"];
          });
          /* harmony import */


          var _internal_operators_finalize__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! ../internal/operators/finalize */
          "ruxD");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "finalize", function () {
            return _internal_operators_finalize__WEBPACK_IMPORTED_MODULE_31__["finalize"];
          });
          /* harmony import */


          var _internal_operators_find__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! ../internal/operators/find */
          "14JN");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "find", function () {
            return _internal_operators_find__WEBPACK_IMPORTED_MODULE_32__["find"];
          });
          /* harmony import */


          var _internal_operators_findIndex__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
          /*! ../internal/operators/findIndex */
          "tII7");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "findIndex", function () {
            return _internal_operators_findIndex__WEBPACK_IMPORTED_MODULE_33__["findIndex"];
          });
          /* harmony import */


          var _internal_operators_first__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
          /*! ../internal/operators/first */
          "jOdJ");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "first", function () {
            return _internal_operators_first__WEBPACK_IMPORTED_MODULE_34__["first"];
          });
          /* harmony import */


          var _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
          /*! ../internal/operators/groupBy */
          "xtkq");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "groupBy", function () {
            return _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_35__["groupBy"];
          });
          /* harmony import */


          var _internal_operators_ignoreElements__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
          /*! ../internal/operators/ignoreElements */
          "9WAt");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "ignoreElements", function () {
            return _internal_operators_ignoreElements__WEBPACK_IMPORTED_MODULE_36__["ignoreElements"];
          });
          /* harmony import */


          var _internal_operators_isEmpty__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
          /*! ../internal/operators/isEmpty */
          "aXqC");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "isEmpty", function () {
            return _internal_operators_isEmpty__WEBPACK_IMPORTED_MODULE_37__["isEmpty"];
          });
          /* harmony import */


          var _internal_operators_last__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
          /*! ../internal/operators/last */
          "TaSY");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "last", function () {
            return _internal_operators_last__WEBPACK_IMPORTED_MODULE_38__["last"];
          });
          /* harmony import */


          var _internal_operators_map__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
          /*! ../internal/operators/map */
          "YtkY");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "map", function () {
            return _internal_operators_map__WEBPACK_IMPORTED_MODULE_39__["map"];
          });
          /* harmony import */


          var _internal_operators_mapTo__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
          /*! ../internal/operators/mapTo */
          "7SLS");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "mapTo", function () {
            return _internal_operators_mapTo__WEBPACK_IMPORTED_MODULE_40__["mapTo"];
          });
          /* harmony import */


          var _internal_operators_materialize__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
          /*! ../internal/operators/materialize */
          "Hhmo");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "materialize", function () {
            return _internal_operators_materialize__WEBPACK_IMPORTED_MODULE_41__["materialize"];
          });
          /* harmony import */


          var _internal_operators_max__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
          /*! ../internal/operators/max */
          "EqSx");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "max", function () {
            return _internal_operators_max__WEBPACK_IMPORTED_MODULE_42__["max"];
          });
          /* harmony import */


          var _internal_operators_merge__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
          /*! ../internal/operators/merge */
          "flkW");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "merge", function () {
            return _internal_operators_merge__WEBPACK_IMPORTED_MODULE_43__["merge"];
          });
          /* harmony import */


          var _internal_operators_mergeAll__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
          /*! ../internal/operators/mergeAll */
          "3lSR");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "mergeAll", function () {
            return _internal_operators_mergeAll__WEBPACK_IMPORTED_MODULE_44__["mergeAll"];
          });
          /* harmony import */


          var _internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
          /*! ../internal/operators/mergeMap */
          "cJ9h");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "mergeMap", function () {
            return _internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_45__["mergeMap"];
          });
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "flatMap", function () {
            return _internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_45__["flatMap"];
          });
          /* harmony import */


          var _internal_operators_mergeMapTo__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
          /*! ../internal/operators/mergeMapTo */
          "rNc+");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "mergeMapTo", function () {
            return _internal_operators_mergeMapTo__WEBPACK_IMPORTED_MODULE_46__["mergeMapTo"];
          });
          /* harmony import */


          var _internal_operators_mergeScan__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
          /*! ../internal/operators/mergeScan */
          "fNrB");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "mergeScan", function () {
            return _internal_operators_mergeScan__WEBPACK_IMPORTED_MODULE_47__["mergeScan"];
          });
          /* harmony import */


          var _internal_operators_min__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
          /*! ../internal/operators/min */
          "oTGV");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "min", function () {
            return _internal_operators_min__WEBPACK_IMPORTED_MODULE_48__["min"];
          });
          /* harmony import */


          var _internal_operators_multicast__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
          /*! ../internal/operators/multicast */
          "JHA6");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "multicast", function () {
            return _internal_operators_multicast__WEBPACK_IMPORTED_MODULE_49__["multicast"];
          });
          /* harmony import */


          var _internal_operators_observeOn__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
          /*! ../internal/operators/observeOn */
          "A2S1");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "observeOn", function () {
            return _internal_operators_observeOn__WEBPACK_IMPORTED_MODULE_50__["observeOn"];
          });
          /* harmony import */


          var _internal_operators_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
          /*! ../internal/operators/onErrorResumeNext */
          "aNQL");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function () {
            return _internal_operators_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_51__["onErrorResumeNext"];
          });
          /* harmony import */


          var _internal_operators_pairwise__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
          /*! ../internal/operators/pairwise */
          "0Woy");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "pairwise", function () {
            return _internal_operators_pairwise__WEBPACK_IMPORTED_MODULE_52__["pairwise"];
          });
          /* harmony import */


          var _internal_operators_partition__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
          /*! ../internal/operators/partition */
          "lmh5");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "partition", function () {
            return _internal_operators_partition__WEBPACK_IMPORTED_MODULE_53__["partition"];
          });
          /* harmony import */


          var _internal_operators_pluck__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
          /*! ../internal/operators/pluck */
          "iLlD");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "pluck", function () {
            return _internal_operators_pluck__WEBPACK_IMPORTED_MODULE_54__["pluck"];
          });
          /* harmony import */


          var _internal_operators_publish__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
          /*! ../internal/operators/publish */
          "CfqY");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "publish", function () {
            return _internal_operators_publish__WEBPACK_IMPORTED_MODULE_55__["publish"];
          });
          /* harmony import */


          var _internal_operators_publishBehavior__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
          /*! ../internal/operators/publishBehavior */
          "Sp61");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "publishBehavior", function () {
            return _internal_operators_publishBehavior__WEBPACK_IMPORTED_MODULE_56__["publishBehavior"];
          });
          /* harmony import */


          var _internal_operators_publishLast__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
          /*! ../internal/operators/publishLast */
          "Yj6K");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "publishLast", function () {
            return _internal_operators_publishLast__WEBPACK_IMPORTED_MODULE_57__["publishLast"];
          });
          /* harmony import */


          var _internal_operators_publishReplay__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
          /*! ../internal/operators/publishReplay */
          "Lrfq");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "publishReplay", function () {
            return _internal_operators_publishReplay__WEBPACK_IMPORTED_MODULE_58__["publishReplay"];
          });
          /* harmony import */


          var _internal_operators_race__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
          /*! ../internal/operators/race */
          "1suh");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "race", function () {
            return _internal_operators_race__WEBPACK_IMPORTED_MODULE_59__["race"];
          });
          /* harmony import */


          var _internal_operators_reduce__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
          /*! ../internal/operators/reduce */
          "0iRq");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "reduce", function () {
            return _internal_operators_reduce__WEBPACK_IMPORTED_MODULE_60__["reduce"];
          });
          /* harmony import */


          var _internal_operators_repeat__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
          /*! ../internal/operators/repeat */
          "ghXf");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "repeat", function () {
            return _internal_operators_repeat__WEBPACK_IMPORTED_MODULE_61__["repeat"];
          });
          /* harmony import */


          var _internal_operators_repeatWhen__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
          /*! ../internal/operators/repeatWhen */
          "PKqw");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "repeatWhen", function () {
            return _internal_operators_repeatWhen__WEBPACK_IMPORTED_MODULE_62__["repeatWhen"];
          });
          /* harmony import */


          var _internal_operators_retry__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
          /*! ../internal/operators/retry */
          "bl/x");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "retry", function () {
            return _internal_operators_retry__WEBPACK_IMPORTED_MODULE_63__["retry"];
          });
          /* harmony import */


          var _internal_operators_retryWhen__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
          /*! ../internal/operators/retryWhen */
          "xOLM");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "retryWhen", function () {
            return _internal_operators_retryWhen__WEBPACK_IMPORTED_MODULE_64__["retryWhen"];
          });
          /* harmony import */


          var _internal_operators_refCount__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
          /*! ../internal/operators/refCount */
          "i7Dj");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "refCount", function () {
            return _internal_operators_refCount__WEBPACK_IMPORTED_MODULE_65__["refCount"];
          });
          /* harmony import */


          var _internal_operators_sample__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
          /*! ../internal/operators/sample */
          "uDlg");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "sample", function () {
            return _internal_operators_sample__WEBPACK_IMPORTED_MODULE_66__["sample"];
          });
          /* harmony import */


          var _internal_operators_sampleTime__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
          /*! ../internal/operators/sampleTime */
          "F/Dh");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "sampleTime", function () {
            return _internal_operators_sampleTime__WEBPACK_IMPORTED_MODULE_67__["sampleTime"];
          });
          /* harmony import */


          var _internal_operators_scan__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
          /*! ../internal/operators/scan */
          "SrNW");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "scan", function () {
            return _internal_operators_scan__WEBPACK_IMPORTED_MODULE_68__["scan"];
          });
          /* harmony import */


          var _internal_operators_sequenceEqual__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
          /*! ../internal/operators/sequenceEqual */
          "jhgp");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "sequenceEqual", function () {
            return _internal_operators_sequenceEqual__WEBPACK_IMPORTED_MODULE_69__["sequenceEqual"];
          });
          /* harmony import */


          var _internal_operators_share__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
          /*! ../internal/operators/share */
          "7ntQ");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "share", function () {
            return _internal_operators_share__WEBPACK_IMPORTED_MODULE_70__["share"];
          });
          /* harmony import */


          var _internal_operators_shareReplay__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
          /*! ../internal/operators/shareReplay */
          "wqq/");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "shareReplay", function () {
            return _internal_operators_shareReplay__WEBPACK_IMPORTED_MODULE_71__["shareReplay"];
          });
          /* harmony import */


          var _internal_operators_single__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(
          /*! ../internal/operators/single */
          "0eJs");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "single", function () {
            return _internal_operators_single__WEBPACK_IMPORTED_MODULE_72__["single"];
          });
          /* harmony import */


          var _internal_operators_skip__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(
          /*! ../internal/operators/skip */
          "3mST");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "skip", function () {
            return _internal_operators_skip__WEBPACK_IMPORTED_MODULE_73__["skip"];
          });
          /* harmony import */


          var _internal_operators_skipLast__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(
          /*! ../internal/operators/skipLast */
          "jwFC");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "skipLast", function () {
            return _internal_operators_skipLast__WEBPACK_IMPORTED_MODULE_74__["skipLast"];
          });
          /* harmony import */


          var _internal_operators_skipUntil__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(
          /*! ../internal/operators/skipUntil */
          "HcRv");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "skipUntil", function () {
            return _internal_operators_skipUntil__WEBPACK_IMPORTED_MODULE_75__["skipUntil"];
          });
          /* harmony import */


          var _internal_operators_skipWhile__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(
          /*! ../internal/operators/skipWhile */
          "HaSC");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "skipWhile", function () {
            return _internal_operators_skipWhile__WEBPACK_IMPORTED_MODULE_76__["skipWhile"];
          });
          /* harmony import */


          var _internal_operators_startWith__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(
          /*! ../internal/operators/startWith */
          "jIqt");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "startWith", function () {
            return _internal_operators_startWith__WEBPACK_IMPORTED_MODULE_77__["startWith"];
          });
          /* harmony import */


          var _internal_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(
          /*! ../internal/operators/subscribeOn */
          "yCv1");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "subscribeOn", function () {
            return _internal_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_78__["subscribeOn"];
          });
          /* harmony import */


          var _internal_operators_switchAll__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(
          /*! ../internal/operators/switchAll */
          "pScO");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "switchAll", function () {
            return _internal_operators_switchAll__WEBPACK_IMPORTED_MODULE_79__["switchAll"];
          });
          /* harmony import */


          var _internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(
          /*! ../internal/operators/switchMap */
          "TLy2");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "switchMap", function () {
            return _internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_80__["switchMap"];
          });
          /* harmony import */


          var _internal_operators_switchMapTo__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(
          /*! ../internal/operators/switchMapTo */
          "CsoK");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "switchMapTo", function () {
            return _internal_operators_switchMapTo__WEBPACK_IMPORTED_MODULE_81__["switchMapTo"];
          });
          /* harmony import */


          var _internal_operators_take__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(
          /*! ../internal/operators/take */
          "J+dc");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "take", function () {
            return _internal_operators_take__WEBPACK_IMPORTED_MODULE_82__["take"];
          });
          /* harmony import */


          var _internal_operators_takeLast__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(
          /*! ../internal/operators/takeLast */
          "A8kH");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "takeLast", function () {
            return _internal_operators_takeLast__WEBPACK_IMPORTED_MODULE_83__["takeLast"];
          });
          /* harmony import */


          var _internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(
          /*! ../internal/operators/takeUntil */
          "kuMc");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "takeUntil", function () {
            return _internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_84__["takeUntil"];
          });
          /* harmony import */


          var _internal_operators_takeWhile__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(
          /*! ../internal/operators/takeWhile */
          "B8NW");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "takeWhile", function () {
            return _internal_operators_takeWhile__WEBPACK_IMPORTED_MODULE_85__["takeWhile"];
          });
          /* harmony import */


          var _internal_operators_tap__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(
          /*! ../internal/operators/tap */
          "8j5Y");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "tap", function () {
            return _internal_operators_tap__WEBPACK_IMPORTED_MODULE_86__["tap"];
          });
          /* harmony import */


          var _internal_operators_throttle__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(
          /*! ../internal/operators/throttle */
          "IeS+");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "throttle", function () {
            return _internal_operators_throttle__WEBPACK_IMPORTED_MODULE_87__["throttle"];
          });
          /* harmony import */


          var _internal_operators_throttleTime__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(
          /*! ../internal/operators/throttleTime */
          "Wg7D");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "throttleTime", function () {
            return _internal_operators_throttleTime__WEBPACK_IMPORTED_MODULE_88__["throttleTime"];
          });
          /* harmony import */


          var _internal_operators_throwIfEmpty__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(
          /*! ../internal/operators/throwIfEmpty */
          "fbWu");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "throwIfEmpty", function () {
            return _internal_operators_throwIfEmpty__WEBPACK_IMPORTED_MODULE_89__["throwIfEmpty"];
          });
          /* harmony import */


          var _internal_operators_timeInterval__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(
          /*! ../internal/operators/timeInterval */
          "hFTr");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "timeInterval", function () {
            return _internal_operators_timeInterval__WEBPACK_IMPORTED_MODULE_90__["timeInterval"];
          });
          /* harmony import */


          var _internal_operators_timeout__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(
          /*! ../internal/operators/timeout */
          "iT4G");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "timeout", function () {
            return _internal_operators_timeout__WEBPACK_IMPORTED_MODULE_91__["timeout"];
          });
          /* harmony import */


          var _internal_operators_timeoutWith__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(
          /*! ../internal/operators/timeoutWith */
          "vAPC");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "timeoutWith", function () {
            return _internal_operators_timeoutWith__WEBPACK_IMPORTED_MODULE_92__["timeoutWith"];
          });
          /* harmony import */


          var _internal_operators_timestamp__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(
          /*! ../internal/operators/timestamp */
          "it7j");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "timestamp", function () {
            return _internal_operators_timestamp__WEBPACK_IMPORTED_MODULE_93__["timestamp"];
          });
          /* harmony import */


          var _internal_operators_toArray__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(
          /*! ../internal/operators/toArray */
          "0B/R");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "toArray", function () {
            return _internal_operators_toArray__WEBPACK_IMPORTED_MODULE_94__["toArray"];
          });
          /* harmony import */


          var _internal_operators_window__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(
          /*! ../internal/operators/window */
          "JnPT");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "window", function () {
            return _internal_operators_window__WEBPACK_IMPORTED_MODULE_95__["window"];
          });
          /* harmony import */


          var _internal_operators_windowCount__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(
          /*! ../internal/operators/windowCount */
          "j71X");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "windowCount", function () {
            return _internal_operators_windowCount__WEBPACK_IMPORTED_MODULE_96__["windowCount"];
          });
          /* harmony import */


          var _internal_operators_windowTime__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(
          /*! ../internal/operators/windowTime */
          "/G9O");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "windowTime", function () {
            return _internal_operators_windowTime__WEBPACK_IMPORTED_MODULE_97__["windowTime"];
          });
          /* harmony import */


          var _internal_operators_windowToggle__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(
          /*! ../internal/operators/windowToggle */
          "K3+B");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "windowToggle", function () {
            return _internal_operators_windowToggle__WEBPACK_IMPORTED_MODULE_98__["windowToggle"];
          });
          /* harmony import */


          var _internal_operators_windowWhen__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(
          /*! ../internal/operators/windowWhen */
          "qplQ");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "windowWhen", function () {
            return _internal_operators_windowWhen__WEBPACK_IMPORTED_MODULE_99__["windowWhen"];
          });
          /* harmony import */


          var _internal_operators_withLatestFrom__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(
          /*! ../internal/operators/withLatestFrom */
          "w0kG");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "withLatestFrom", function () {
            return _internal_operators_withLatestFrom__WEBPACK_IMPORTED_MODULE_100__["withLatestFrom"];
          });
          /* harmony import */


          var _internal_operators_zip__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(
          /*! ../internal/operators/zip */
          "kLnN");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "zip", function () {
            return _internal_operators_zip__WEBPACK_IMPORTED_MODULE_101__["zip"];
          });
          /* harmony import */


          var _internal_operators_zipAll__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(
          /*! ../internal/operators/zipAll */
          "rVMB");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "zipAll", function () {
            return _internal_operators_zipAll__WEBPACK_IMPORTED_MODULE_102__["zipAll"];
          }); //# sourceMappingURL=index.js.map

          /***/

        },

        /***/
        "0Woy":
        /*!*********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/pairwise.js ***!
          \*********************************************************************************************/

        /*! exports provided: pairwise */

        /***/
        function Woy(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "pairwise", function () {
            return pairwise;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");

          function pairwise() {
            return function (source) {
              return source.lift(new PairwiseOperator());
            };
          }

          var PairwiseOperator = /*#__PURE__*/function () {
            function PairwiseOperator() {
              _classCallCheck(this, PairwiseOperator);
            }

            _createClass(PairwiseOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new PairwiseSubscriber(subscriber));
              }
            }]);

            return PairwiseOperator;
          }();

          var PairwiseSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_2) {
            _inherits(PairwiseSubscriber, _Subscriber__WEBPACK_2);

            var _super4 = _createSuper(PairwiseSubscriber);

            function PairwiseSubscriber(destination) {
              var _this4;

              _classCallCheck(this, PairwiseSubscriber);

              _this4 = _super4.call(this, destination);
              _this4.hasPrev = false;
              return _this4;
            }

            _createClass(PairwiseSubscriber, [{
              key: "_next",
              value: function _next(value) {
                var pair;

                if (this.hasPrev) {
                  pair = [this.prev, value];
                } else {
                  this.hasPrev = true;
                }

                this.prev = value;

                if (pair) {
                  this.destination.next(pair);
                }
              }
            }]);

            return PairwiseSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=pairwise.js.map

          /***/

        },

        /***/
        "0eJs":
        /*!*******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/single.js ***!
          \*******************************************************************************************/

        /*! exports provided: single */

        /***/
        function eJs(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "single", function () {
            return single;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");
          /* harmony import */


          var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../util/EmptyError */
          "VxHp");

          function single(predicate) {
            return function (source) {
              return source.lift(new SingleOperator(predicate, source));
            };
          }

          var SingleOperator = /*#__PURE__*/function () {
            function SingleOperator(predicate, source) {
              _classCallCheck(this, SingleOperator);

              this.predicate = predicate;
              this.source = source;
            }

            _createClass(SingleOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
              }
            }]);

            return SingleOperator;
          }();

          var SingleSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_3) {
            _inherits(SingleSubscriber, _Subscriber__WEBPACK_3);

            var _super5 = _createSuper(SingleSubscriber);

            function SingleSubscriber(destination, predicate, source) {
              var _this5;

              _classCallCheck(this, SingleSubscriber);

              _this5 = _super5.call(this, destination);
              _this5.predicate = predicate;
              _this5.source = source;
              _this5.seenValue = false;
              _this5.index = 0;
              return _this5;
            }

            _createClass(SingleSubscriber, [{
              key: "applySingleValue",
              value: function applySingleValue(value) {
                if (this.seenValue) {
                  this.destination.error('Sequence contains more than one element');
                } else {
                  this.seenValue = true;
                  this.singleValue = value;
                }
              }
            }, {
              key: "_next",
              value: function _next(value) {
                var index = this.index++;

                if (this.predicate) {
                  this.tryNext(value, index);
                } else {
                  this.applySingleValue(value);
                }
              }
            }, {
              key: "tryNext",
              value: function tryNext(value, index) {
                try {
                  if (this.predicate(value, index, this.source)) {
                    this.applySingleValue(value);
                  }
                } catch (err) {
                  this.destination.error(err);
                }
              }
            }, {
              key: "_complete",
              value: function _complete() {
                var destination = this.destination;

                if (this.index > 0) {
                  destination.next(this.seenValue ? this.singleValue : undefined);
                  destination.complete();
                } else {
                  destination.error(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__["EmptyError"]());
                }
              }
            }]);

            return SingleSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=single.js.map

          /***/

        },

        /***/
        "0iRq":
        /*!*******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/reduce.js ***!
          \*******************************************************************************************/

        /*! exports provided: reduce */

        /***/
        function iRq(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "reduce", function () {
            return reduce;
          });
          /* harmony import */


          var _scan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./scan */
          "SrNW");
          /* harmony import */


          var _takeLast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./takeLast */
          "A8kH");
          /* harmony import */


          var _defaultIfEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./defaultIfEmpty */
          "iqFP");
          /* harmony import */


          var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../util/pipe */
          "Ti3e");

          function reduce(accumulator, seed) {
            if (arguments.length >= 2) {
              return function reduceOperatorFunctionWithSeed(source) {
                return Object(_util_pipe__WEBPACK_IMPORTED_MODULE_3__["pipe"])(Object(_scan__WEBPACK_IMPORTED_MODULE_0__["scan"])(accumulator, seed), Object(_takeLast__WEBPACK_IMPORTED_MODULE_1__["takeLast"])(1), Object(_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_2__["defaultIfEmpty"])(seed))(source);
              };
            }

            return function reduceOperatorFunction(source) {
              return Object(_util_pipe__WEBPACK_IMPORTED_MODULE_3__["pipe"])(Object(_scan__WEBPACK_IMPORTED_MODULE_0__["scan"])(function (acc, value, index) {
                return accumulator(acc, value, index + 1);
              }), Object(_takeLast__WEBPACK_IMPORTED_MODULE_1__["takeLast"])(1))(source);
            };
          } //# sourceMappingURL=reduce.js.map

          /***/

        },

        /***/
        "0pus":
        /*!***********************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/ConnectableObservable.js ***!
          \***********************************************************************************************************/

        /*! exports provided: ConnectableObservable, connectableObservableDescriptor */

        /***/
        function pus(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "ConnectableObservable", function () {
            return ConnectableObservable;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "connectableObservableDescriptor", function () {
            return connectableObservableDescriptor;
          });
          /* harmony import */


          var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subject */
          "ZTXN");
          /* harmony import */


          var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../Observable */
          "IdLP");
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");
          /* harmony import */


          var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../Subscription */
          "bwdy");
          /* harmony import */


          var _operators_refCount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../operators/refCount */
          "i7Dj");

          var ConnectableObservable = /*#__PURE__*/function (_Observable__WEBPACK_) {
            _inherits(ConnectableObservable, _Observable__WEBPACK_);

            var _super6 = _createSuper(ConnectableObservable);

            function ConnectableObservable(source, subjectFactory) {
              var _this6;

              _classCallCheck(this, ConnectableObservable);

              _this6 = _super6.call(this);
              _this6.source = source;
              _this6.subjectFactory = subjectFactory;
              _this6._refCount = 0;
              _this6._isComplete = false;
              return _this6;
            }

            _createClass(ConnectableObservable, [{
              key: "_subscribe",
              value: function _subscribe(subscriber) {
                return this.getSubject().subscribe(subscriber);
              }
            }, {
              key: "getSubject",
              value: function getSubject() {
                var subject = this._subject;

                if (!subject || subject.isStopped) {
                  this._subject = this.subjectFactory();
                }

                return this._subject;
              }
            }, {
              key: "connect",
              value: function connect() {
                var connection = this._connection;

                if (!connection) {
                  this._isComplete = false;
                  connection = this._connection = new _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
                  connection.add(this.source.subscribe(new ConnectableSubscriber(this.getSubject(), this)));

                  if (connection.closed) {
                    this._connection = null;
                    connection = _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
                  }
                }

                return connection;
              }
            }, {
              key: "refCount",
              value: function refCount() {
                return Object(_operators_refCount__WEBPACK_IMPORTED_MODULE_4__["refCount"])()(this);
              }
            }]);

            return ConnectableObservable;
          }(_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]);

          var connectableObservableDescriptor = function () {
            var connectableProto = ConnectableObservable.prototype;
            return {
              operator: {
                value: null
              },
              _refCount: {
                value: 0,
                writable: true
              },
              _subject: {
                value: null,
                writable: true
              },
              _connection: {
                value: null,
                writable: true
              },
              _subscribe: {
                value: connectableProto._subscribe
              },
              _isComplete: {
                value: connectableProto._isComplete,
                writable: true
              },
              getSubject: {
                value: connectableProto.getSubject
              },
              connect: {
                value: connectableProto.connect
              },
              refCount: {
                value: connectableProto.refCount
              }
            };
          }();

          var ConnectableSubscriber = /*#__PURE__*/function (_Subject__WEBPACK_IMP2) {
            _inherits(ConnectableSubscriber, _Subject__WEBPACK_IMP2);

            var _super7 = _createSuper(ConnectableSubscriber);

            function ConnectableSubscriber(destination, connectable) {
              var _this7;

              _classCallCheck(this, ConnectableSubscriber);

              _this7 = _super7.call(this, destination);
              _this7.connectable = connectable;
              return _this7;
            }

            _createClass(ConnectableSubscriber, [{
              key: "_error",
              value: function _error(err) {
                this._unsubscribe();

                _get(_getPrototypeOf(ConnectableSubscriber.prototype), "_error", this).call(this, err);
              }
            }, {
              key: "_complete",
              value: function _complete() {
                this.connectable._isComplete = true;

                this._unsubscribe();

                _get(_getPrototypeOf(ConnectableSubscriber.prototype), "_complete", this).call(this);
              }
            }, {
              key: "_unsubscribe",
              value: function _unsubscribe() {
                var connectable = this.connectable;

                if (connectable) {
                  this.connectable = null;
                  var connection = connectable._connection;
                  connectable._refCount = 0;
                  connectable._subject = null;
                  connectable._connection = null;

                  if (connection) {
                    connection.unsubscribe();
                  }
                }
              }
            }]);

            return ConnectableSubscriber;
          }(_Subject__WEBPACK_IMPORTED_MODULE_0__["SubjectSubscriber"]);

          var RefCountOperator = /*#__PURE__*/function () {
            function RefCountOperator(connectable) {
              _classCallCheck(this, RefCountOperator);

              this.connectable = connectable;
            }

            _createClass(RefCountOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                var connectable = this.connectable;
                connectable._refCount++;
                var refCounter = new RefCountSubscriber(subscriber, connectable);
                var subscription = source.subscribe(refCounter);

                if (!refCounter.closed) {
                  refCounter.connection = connectable.connect();
                }

                return subscription;
              }
            }]);

            return RefCountOperator;
          }();

          var RefCountSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_4) {
            _inherits(RefCountSubscriber, _Subscriber__WEBPACK_4);

            var _super8 = _createSuper(RefCountSubscriber);

            function RefCountSubscriber(destination, connectable) {
              var _this8;

              _classCallCheck(this, RefCountSubscriber);

              _this8 = _super8.call(this, destination);
              _this8.connectable = connectable;
              return _this8;
            }

            _createClass(RefCountSubscriber, [{
              key: "_unsubscribe",
              value: function _unsubscribe() {
                var connectable = this.connectable;

                if (!connectable) {
                  this.connection = null;
                  return;
                }

                this.connectable = null;
                var refCount = connectable._refCount;

                if (refCount <= 0) {
                  this.connection = null;
                  return;
                }

                connectable._refCount = refCount - 1;

                if (refCount > 1) {
                  this.connection = null;
                  return;
                }

                var connection = this.connection;
                var sharedConnection = connectable._connection;
                this.connection = null;

                if (sharedConnection && (!connection || sharedConnection === connection)) {
                  sharedConnection.unsubscribe();
                }
              }
            }]);

            return RefCountSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_2__["Subscriber"]); //# sourceMappingURL=ConnectableObservable.js.map

          /***/

        },

        /***/
        "14JN":
        /*!*****************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/find.js ***!
          \*****************************************************************************************/

        /*! exports provided: find, FindValueOperator, FindValueSubscriber */

        /***/
        function JN(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "find", function () {
            return find;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "FindValueOperator", function () {
            return FindValueOperator;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "FindValueSubscriber", function () {
            return FindValueSubscriber;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");

          function find(predicate, thisArg) {
            if (typeof predicate !== 'function') {
              throw new TypeError('predicate is not a function');
            }

            return function (source) {
              return source.lift(new FindValueOperator(predicate, source, false, thisArg));
            };
          }

          var FindValueOperator = /*#__PURE__*/function () {
            function FindValueOperator(predicate, source, yieldIndex, thisArg) {
              _classCallCheck(this, FindValueOperator);

              this.predicate = predicate;
              this.source = source;
              this.yieldIndex = yieldIndex;
              this.thisArg = thisArg;
            }

            _createClass(FindValueOperator, [{
              key: "call",
              value: function call(observer, source) {
                return source.subscribe(new FindValueSubscriber(observer, this.predicate, this.source, this.yieldIndex, this.thisArg));
              }
            }]);

            return FindValueOperator;
          }();

          var FindValueSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_5) {
            _inherits(FindValueSubscriber, _Subscriber__WEBPACK_5);

            var _super9 = _createSuper(FindValueSubscriber);

            function FindValueSubscriber(destination, predicate, source, yieldIndex, thisArg) {
              var _this9;

              _classCallCheck(this, FindValueSubscriber);

              _this9 = _super9.call(this, destination);
              _this9.predicate = predicate;
              _this9.source = source;
              _this9.yieldIndex = yieldIndex;
              _this9.thisArg = thisArg;
              _this9.index = 0;
              return _this9;
            }

            _createClass(FindValueSubscriber, [{
              key: "notifyComplete",
              value: function notifyComplete(value) {
                var destination = this.destination;
                destination.next(value);
                destination.complete();
                this.unsubscribe();
              }
            }, {
              key: "_next",
              value: function _next(value) {
                var predicate = this.predicate,
                    thisArg = this.thisArg;
                var index = this.index++;

                try {
                  var result = predicate.call(thisArg || this, value, index, this.source);

                  if (result) {
                    this.notifyComplete(this.yieldIndex ? index : value);
                  }
                } catch (err) {
                  this.destination.error(err);
                }
              }
            }, {
              key: "_complete",
              value: function _complete() {
                this.notifyComplete(this.yieldIndex ? -1 : undefined);
              }
            }]);

            return FindValueSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=find.js.map

          /***/

        },

        /***/
        "1MAX":
        /*!*******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/subscribeTo.js ***!
          \*******************************************************************************************/

        /*! exports provided: subscribeTo */

        /***/
        function MAX(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "subscribeTo", function () {
            return subscribeTo;
          });
          /* harmony import */


          var _subscribeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./subscribeToArray */
          "dUuy");
          /* harmony import */


          var _subscribeToPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./subscribeToPromise */
          "8V6W");
          /* harmony import */


          var _subscribeToIterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./subscribeToIterable */
          "qhtU");
          /* harmony import */


          var _subscribeToObservable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./subscribeToObservable */
          "wIzt");
          /* harmony import */


          var _isArrayLike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./isArrayLike */
          "eY+9");
          /* harmony import */


          var _isPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./isPromise */
          "/vgl");
          /* harmony import */


          var _isObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./isObject */
          "X0qr");
          /* harmony import */


          var _symbol_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../symbol/iterator */
          "sWLk");
          /* harmony import */


          var _symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../symbol/observable */
          "qEfY");

          var subscribeTo = function subscribeTo(result) {
            if (!!result && typeof result[_symbol_observable__WEBPACK_IMPORTED_MODULE_8__["observable"]] === 'function') {
              return Object(_subscribeToObservable__WEBPACK_IMPORTED_MODULE_3__["subscribeToObservable"])(result);
            } else if (Object(_isArrayLike__WEBPACK_IMPORTED_MODULE_4__["isArrayLike"])(result)) {
              return Object(_subscribeToArray__WEBPACK_IMPORTED_MODULE_0__["subscribeToArray"])(result);
            } else if (Object(_isPromise__WEBPACK_IMPORTED_MODULE_5__["isPromise"])(result)) {
              return Object(_subscribeToPromise__WEBPACK_IMPORTED_MODULE_1__["subscribeToPromise"])(result);
            } else if (!!result && typeof result[_symbol_iterator__WEBPACK_IMPORTED_MODULE_7__["iterator"]] === 'function') {
              return Object(_subscribeToIterable__WEBPACK_IMPORTED_MODULE_2__["subscribeToIterable"])(result);
            } else {
              var value = Object(_isObject__WEBPACK_IMPORTED_MODULE_6__["isObject"])(result) ? 'an invalid object' : "'".concat(result, "'");
              var msg = "You provided ".concat(value, " where a stream was expected.") + ' You can provide an Observable, Promise, Array, or Iterable.';
              throw new TypeError(msg);
            }
          }; //# sourceMappingURL=subscribeTo.js.map

          /***/

        },

        /***/
        "1suh":
        /*!*****************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/race.js ***!
          \*****************************************************************************************/

        /*! exports provided: race */

        /***/
        function suh(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "race", function () {
            return race;
          });
          /* harmony import */


          var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../util/isArray */
          "FU6l");
          /* harmony import */


          var _observable_race__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../observable/race */
          "1zC5");

          function race() {
            for (var _len = arguments.length, observables = new Array(_len), _key = 0; _key < _len; _key++) {
              observables[_key] = arguments[_key];
            }

            return function raceOperatorFunction(source) {
              if (observables.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(observables[0])) {
                observables = observables[0];
              }

              return source.lift.call(Object(_observable_race__WEBPACK_IMPORTED_MODULE_1__["race"]).apply(void 0, [source].concat(_toConsumableArray(observables))));
            };
          } //# sourceMappingURL=race.js.map

          /***/

        },

        /***/
        "1zC5":
        /*!******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/race.js ***!
          \******************************************************************************************/

        /*! exports provided: race, RaceOperator, RaceSubscriber */

        /***/
        function zC5(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "race", function () {
            return race;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "RaceOperator", function () {
            return RaceOperator;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "RaceSubscriber", function () {
            return RaceSubscriber;
          });
          /* harmony import */


          var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../util/isArray */
          "FU6l");
          /* harmony import */


          var _fromArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./fromArray */
          "ckkg");
          /* harmony import */


          var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../OuterSubscriber */
          "pBDD");
          /* harmony import */


          var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../util/subscribeToResult */
          "mW0F");

          function race() {
            for (var _len2 = arguments.length, observables = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              observables[_key2] = arguments[_key2];
            }

            if (observables.length === 1) {
              if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(observables[0])) {
                observables = observables[0];
              } else {
                return observables[0];
              }
            }

            return Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(observables, undefined).lift(new RaceOperator());
          }

          var RaceOperator = /*#__PURE__*/function () {
            function RaceOperator() {
              _classCallCheck(this, RaceOperator);
            }

            _createClass(RaceOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new RaceSubscriber(subscriber));
              }
            }]);

            return RaceOperator;
          }();

          var RaceSubscriber = /*#__PURE__*/function (_OuterSubscriber__WEB) {
            _inherits(RaceSubscriber, _OuterSubscriber__WEB);

            var _super10 = _createSuper(RaceSubscriber);

            function RaceSubscriber(destination) {
              var _this10;

              _classCallCheck(this, RaceSubscriber);

              _this10 = _super10.call(this, destination);
              _this10.hasFirst = false;
              _this10.observables = [];
              _this10.subscriptions = [];
              return _this10;
            }

            _createClass(RaceSubscriber, [{
              key: "_next",
              value: function _next(observable) {
                this.observables.push(observable);
              }
            }, {
              key: "_complete",
              value: function _complete() {
                var observables = this.observables;
                var len = observables.length;

                if (len === 0) {
                  this.destination.complete();
                } else {
                  for (var i = 0; i < len && !this.hasFirst; i++) {
                    var observable = observables[i];
                    var subscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__["subscribeToResult"])(this, observable, undefined, i);

                    if (this.subscriptions) {
                      this.subscriptions.push(subscription);
                    }

                    this.add(subscription);
                  }

                  this.observables = null;
                }
              }
            }, {
              key: "notifyNext",
              value: function notifyNext(_outerValue, innerValue, outerIndex) {
                if (!this.hasFirst) {
                  this.hasFirst = true;

                  for (var i = 0; i < this.subscriptions.length; i++) {
                    if (i !== outerIndex) {
                      var subscription = this.subscriptions[i];
                      subscription.unsubscribe();
                      this.remove(subscription);
                    }
                  }

                  this.subscriptions = null;
                }

                this.destination.next(innerValue);
              }
            }]);

            return RaceSubscriber;
          }(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"]); //# sourceMappingURL=race.js.map

          /***/

        },

        /***/
        "246g":
        /*!***************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduler/QueueScheduler.js ***!
          \***************************************************************************************************/

        /*! exports provided: QueueScheduler */

        /***/
        function g(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "QueueScheduler", function () {
            return QueueScheduler;
          });
          /* harmony import */


          var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./AsyncScheduler */
          "DG/E");

          var QueueScheduler = /*#__PURE__*/function (_AsyncScheduler__WEBP) {
            _inherits(QueueScheduler, _AsyncScheduler__WEBP);

            var _super11 = _createSuper(QueueScheduler);

            function QueueScheduler() {
              _classCallCheck(this, QueueScheduler);

              return _super11.apply(this, arguments);
            }

            return QueueScheduler;
          }(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__["AsyncScheduler"]); //# sourceMappingURL=QueueScheduler.js.map

          /***/

        },

        /***/
        "25CY":
        /*!**********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/symbol/rxSubscriber.js ***!
          \**********************************************************************************************/

        /*! exports provided: rxSubscriber, $$rxSubscriber */

        /***/
        function CY(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "rxSubscriber", function () {
            return rxSubscriber;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "$$rxSubscriber", function () {
            return $$rxSubscriber;
          });

          var rxSubscriber = function () {
            return typeof Symbol === 'function' ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
          }();

          var $$rxSubscriber = rxSubscriber; //# sourceMappingURL=rxSubscriber.js.map

          /***/
        },

        /***/
        "2BEx":
        /*!**************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/parent/getOriginFromSrc.js ***!
          \**************************************************************************************/

        /*! exports provided: default */

        /***/
        function BEx(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);

          var DEFAULT_PORT_BY_PROTOCOL = {
            'http:': '80',
            'https:': '443'
          };
          var URL_REGEX = /^(https?:)?\/\/([^/:]+)?(:(\d+))?/;
          var opaqueOriginSchemes = ['file:', 'data:'];
          /**
           * Converts a src value into an origin.
           */

          /* harmony default export */

          __webpack_exports__["default"] = function (src) {
            if (src && opaqueOriginSchemes.find(function (scheme) {
              return src.startsWith(scheme);
            })) {
              // The origin of the child document is an opaque origin and its
              // serialization is "null"
              // https://html.spec.whatwg.org/multipage/origin.html#origin
              return 'null';
            } // Note that if src is undefined, then srcdoc is being used instead of src
            // and we can follow this same logic below to get the origin of the parent,
            // which is the origin that we will need to use.


            var location = document.location;
            var regexResult = URL_REGEX.exec(src);
            var protocol;
            var hostname;
            var port;

            if (regexResult) {
              // It's an absolute URL. Use the parsed info.
              // regexResult[1] will be undefined if the URL starts with //
              protocol = regexResult[1] ? regexResult[1] : location.protocol;
              hostname = regexResult[2];
              port = regexResult[4];
            } else {
              // It's a relative path. Use the current location's info.
              protocol = location.protocol;
              hostname = location.hostname;
              port = location.port;
            } // If the port is the default for the protocol, we don't want to add it to the origin string
            // or it won't match the message's event.origin.


            var portSuffix = port && port !== DEFAULT_PORT_BY_PROTOCOL[protocol] ? ":".concat(port) : '';
            return "".concat(protocol, "//").concat(hostname).concat(portSuffix);
          };
          /***/

        },

        /***/
        "2OXO":
        /*!******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/every.js ***!
          \******************************************************************************************/

        /*! exports provided: every */

        /***/
        function OXO(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "every", function () {
            return every;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");

          function every(predicate, thisArg) {
            return function (source) {
              return source.lift(new EveryOperator(predicate, thisArg, source));
            };
          }

          var EveryOperator = /*#__PURE__*/function () {
            function EveryOperator(predicate, thisArg, source) {
              _classCallCheck(this, EveryOperator);

              this.predicate = predicate;
              this.thisArg = thisArg;
              this.source = source;
            }

            _createClass(EveryOperator, [{
              key: "call",
              value: function call(observer, source) {
                return source.subscribe(new EverySubscriber(observer, this.predicate, this.thisArg, this.source));
              }
            }]);

            return EveryOperator;
          }();

          var EverySubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_6) {
            _inherits(EverySubscriber, _Subscriber__WEBPACK_6);

            var _super12 = _createSuper(EverySubscriber);

            function EverySubscriber(destination, predicate, thisArg, source) {
              var _this11;

              _classCallCheck(this, EverySubscriber);

              _this11 = _super12.call(this, destination);
              _this11.predicate = predicate;
              _this11.thisArg = thisArg;
              _this11.source = source;
              _this11.index = 0;
              _this11.thisArg = thisArg || _assertThisInitialized(_this11);
              return _this11;
            }

            _createClass(EverySubscriber, [{
              key: "notifyComplete",
              value: function notifyComplete(everyValueMatch) {
                this.destination.next(everyValueMatch);
                this.destination.complete();
              }
            }, {
              key: "_next",
              value: function _next(value) {
                var result = false;

                try {
                  result = this.predicate.call(this.thisArg, value, this.index++, this.source);
                } catch (err) {
                  this.destination.error(err);
                  return;
                }

                if (!result) {
                  this.notifyComplete(false);
                }
              }
            }, {
              key: "_complete",
              value: function _complete() {
                this.notifyComplete(true);
              }
            }]);

            return EverySubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=every.js.map

          /***/

        },

        /***/
        "3lSR":
        /*!*********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/mergeAll.js ***!
          \*********************************************************************************************/

        /*! exports provided: mergeAll */

        /***/
        function lSR(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "mergeAll", function () {
            return mergeAll;
          });
          /* harmony import */


          var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./mergeMap */
          "cJ9h");
          /* harmony import */


          var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../util/identity */
          "5E2i");

          function mergeAll() {
            var concurrent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.POSITIVE_INFINITY;
            return Object(_mergeMap__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"], concurrent);
          } //# sourceMappingURL=mergeAll.js.map

          /***/

        },

        /***/
        "3mST":
        /*!*****************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/skip.js ***!
          \*****************************************************************************************/

        /*! exports provided: skip */

        /***/
        function mST(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "skip", function () {
            return skip;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");

          function skip(count) {
            return function (source) {
              return source.lift(new SkipOperator(count));
            };
          }

          var SkipOperator = /*#__PURE__*/function () {
            function SkipOperator(total) {
              _classCallCheck(this, SkipOperator);

              this.total = total;
            }

            _createClass(SkipOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new SkipSubscriber(subscriber, this.total));
              }
            }]);

            return SkipOperator;
          }();

          var SkipSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_7) {
            _inherits(SkipSubscriber, _Subscriber__WEBPACK_7);

            var _super13 = _createSuper(SkipSubscriber);

            function SkipSubscriber(destination, total) {
              var _this12;

              _classCallCheck(this, SkipSubscriber);

              _this12 = _super13.call(this, destination);
              _this12.total = total;
              _this12.count = 0;
              return _this12;
            }

            _createClass(SkipSubscriber, [{
              key: "_next",
              value: function _next(x) {
                if (++this.count > this.total) {
                  this.destination.next(x);
                }
              }
            }]);

            return SkipSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=skip.js.map

          /***/

        },

        /***/
        "47ST":
        /*!************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/throwError.js ***!
          \************************************************************************************************/

        /*! exports provided: throwError */

        /***/
        function ST(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "throwError", function () {
            return throwError;
          });
          /* harmony import */


          var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Observable */
          "IdLP");

          function throwError(error, scheduler) {
            if (!scheduler) {
              return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
                return subscriber.error(error);
              });
            } else {
              return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
                return scheduler.schedule(dispatch, 0, {
                  error: error,
                  subscriber: subscriber
                });
              });
            }
          }

          function dispatch(_ref) {
            var error = _ref.error,
                subscriber = _ref.subscriber;
            subscriber.error(error);
          } //# sourceMappingURL=throwError.js.map

          /***/

        },

        /***/
        "4e/d":
        /*!***********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/catchError.js ***!
          \***********************************************************************************************/

        /*! exports provided: catchError */

        /***/
        function eD(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "catchError", function () {
            return catchError;
          });
          /* harmony import */


          var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../innerSubscribe */
          "uCWR");

          function catchError(selector) {
            return function catchErrorOperatorFunction(source) {
              var operator = new CatchOperator(selector);
              var caught = source.lift(operator);
              return operator.caught = caught;
            };
          }

          var CatchOperator = /*#__PURE__*/function () {
            function CatchOperator(selector) {
              _classCallCheck(this, CatchOperator);

              this.selector = selector;
            }

            _createClass(CatchOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
              }
            }]);

            return CatchOperator;
          }();

          var CatchSubscriber = /*#__PURE__*/function (_innerSubscribe__WEBP2) {
            _inherits(CatchSubscriber, _innerSubscribe__WEBP2);

            var _super14 = _createSuper(CatchSubscriber);

            function CatchSubscriber(destination, selector, caught) {
              var _this13;

              _classCallCheck(this, CatchSubscriber);

              _this13 = _super14.call(this, destination);
              _this13.selector = selector;
              _this13.caught = caught;
              return _this13;
            }

            _createClass(CatchSubscriber, [{
              key: "error",
              value: function error(err) {
                if (!this.isStopped) {
                  var result;

                  try {
                    result = this.selector(err, this.caught);
                  } catch (err2) {
                    _get(_getPrototypeOf(CatchSubscriber.prototype), "error", this).call(this, err2);

                    return;
                  }

                  this._unsubscribeAndRecycle();

                  var innerSubscriber = new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleInnerSubscriber"](this);
                  this.add(innerSubscriber);
                  var innerSubscription = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["innerSubscribe"])(result, innerSubscriber);

                  if (innerSubscription !== innerSubscriber) {
                    this.add(innerSubscription);
                  }
                }
              }
            }]);

            return CatchSubscriber;
          }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleOuterSubscriber"]); //# sourceMappingURL=catchError.js.map

          /***/

        },

        /***/
        "4wde":
        /*!*******************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduled/scheduleObservable.js ***!
          \*******************************************************************************************************/

        /*! exports provided: scheduleObservable */

        /***/
        function wde(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "scheduleObservable", function () {
            return scheduleObservable;
          });
          /* harmony import */


          var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Observable */
          "IdLP");
          /* harmony import */


          var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../Subscription */
          "bwdy");
          /* harmony import */


          var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../symbol/observable */
          "qEfY");

          function scheduleObservable(input, scheduler) {
            return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
              var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
              sub.add(scheduler.schedule(function () {
                var observable = input[_symbol_observable__WEBPACK_IMPORTED_MODULE_2__["observable"]]();

                sub.add(observable.subscribe({
                  next: function next(value) {
                    sub.add(scheduler.schedule(function () {
                      return subscriber.next(value);
                    }));
                  },
                  error: function error(err) {
                    sub.add(scheduler.schedule(function () {
                      return subscriber.error(err);
                    }));
                  },
                  complete: function complete() {
                    sub.add(scheduler.schedule(function () {
                      return subscriber.complete();
                    }));
                  }
                }));
              }));
              return sub;
            });
          } //# sourceMappingURL=scheduleObservable.js.map

          /***/

        },

        /***/
        "4xW2":
        /*!*********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/debounce.js ***!
          \*********************************************************************************************/

        /*! exports provided: debounce */

        /***/
        function xW2(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "debounce", function () {
            return debounce;
          });
          /* harmony import */


          var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../innerSubscribe */
          "uCWR");

          function debounce(durationSelector) {
            return function (source) {
              return source.lift(new DebounceOperator(durationSelector));
            };
          }

          var DebounceOperator = /*#__PURE__*/function () {
            function DebounceOperator(durationSelector) {
              _classCallCheck(this, DebounceOperator);

              this.durationSelector = durationSelector;
            }

            _createClass(DebounceOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
              }
            }]);

            return DebounceOperator;
          }();

          var DebounceSubscriber = /*#__PURE__*/function (_innerSubscribe__WEBP3) {
            _inherits(DebounceSubscriber, _innerSubscribe__WEBP3);

            var _super15 = _createSuper(DebounceSubscriber);

            function DebounceSubscriber(destination, durationSelector) {
              var _this14;

              _classCallCheck(this, DebounceSubscriber);

              _this14 = _super15.call(this, destination);
              _this14.durationSelector = durationSelector;
              _this14.hasValue = false;
              return _this14;
            }

            _createClass(DebounceSubscriber, [{
              key: "_next",
              value: function _next(value) {
                try {
                  var result = this.durationSelector.call(this, value);

                  if (result) {
                    this._tryNext(value, result);
                  }
                } catch (err) {
                  this.destination.error(err);
                }
              }
            }, {
              key: "_complete",
              value: function _complete() {
                this.emitValue();
                this.destination.complete();
              }
            }, {
              key: "_tryNext",
              value: function _tryNext(value, duration) {
                var subscription = this.durationSubscription;
                this.value = value;
                this.hasValue = true;

                if (subscription) {
                  subscription.unsubscribe();
                  this.remove(subscription);
                }

                subscription = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["innerSubscribe"])(duration, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleInnerSubscriber"](this));

                if (subscription && !subscription.closed) {
                  this.add(this.durationSubscription = subscription);
                }
              }
            }, {
              key: "notifyNext",
              value: function notifyNext() {
                this.emitValue();
              }
            }, {
              key: "notifyComplete",
              value: function notifyComplete() {
                this.emitValue();
              }
            }, {
              key: "emitValue",
              value: function emitValue() {
                if (this.hasValue) {
                  var value = this.value;
                  var subscription = this.durationSubscription;

                  if (subscription) {
                    this.durationSubscription = undefined;
                    subscription.unsubscribe();
                    this.remove(subscription);
                  }

                  this.value = undefined;
                  this.hasValue = false;

                  _get(_getPrototypeOf(DebounceSubscriber.prototype), "_next", this).call(this, value);
                }
              }
            }]);

            return DebounceSubscriber;
          }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleOuterSubscriber"]); //# sourceMappingURL=debounce.js.map

          /***/

        },

        /***/
        "503g":
        /*!************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/parent/connectToChild.js ***!
          \************************************************************************************/

        /*! exports provided: default */

        /***/
        function g(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony import */


          var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../enums */
          "Rj9D");
          /* harmony import */


          var _createDestructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../createDestructor */
          "tUyG");
          /* harmony import */


          var _createLogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../createLogger */
          "hmHb");
          /* harmony import */


          var _getOriginFromSrc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./getOriginFromSrc */
          "2BEx");
          /* harmony import */


          var _handleAckMessageFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./handleAckMessageFactory */
          "LyCu");
          /* harmony import */


          var _handleSynMessageFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./handleSynMessageFactory */
          "pZOY");
          /* harmony import */


          var _monitorIframeRemoval__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./monitorIframeRemoval */
          "6Rrg");
          /* harmony import */


          var _startConnectionTimeout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../startConnectionTimeout */
          "aV0t");
          /* harmony import */


          var _validateIframeHasSrcOrSrcDoc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./validateIframeHasSrcOrSrcDoc */
          "IIln");
          /**
           * Attempts to establish communication with an iframe.
           */

          /* harmony default export */


          __webpack_exports__["default"] = function (options) {
            var iframe = options.iframe,
                _options$methods = options.methods,
                methods = _options$methods === void 0 ? {} : _options$methods,
                childOrigin = options.childOrigin,
                timeout = options.timeout,
                _options$debug = options.debug,
                debug = _options$debug === void 0 ? false : _options$debug;
            var log = Object(_createLogger__WEBPACK_IMPORTED_MODULE_2__["default"])(debug);
            var destructor = Object(_createDestructor__WEBPACK_IMPORTED_MODULE_1__["default"])();
            var onDestroy = destructor.onDestroy,
                _destroy = destructor.destroy;

            if (!childOrigin) {
              Object(_validateIframeHasSrcOrSrcDoc__WEBPACK_IMPORTED_MODULE_8__["default"])(iframe);
              childOrigin = Object(_getOriginFromSrc__WEBPACK_IMPORTED_MODULE_3__["default"])(iframe.src);
            } // If event.origin is "null", the remote protocol is file: or data: and we
            // must post messages with "*" as targetOrigin when sending messages.
            // https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage#Using_window.postMessage_in_extensions


            var originForSending = childOrigin === 'null' ? '*' : childOrigin;
            var handleSynMessage = Object(_handleSynMessageFactory__WEBPACK_IMPORTED_MODULE_5__["default"])(log, methods, childOrigin, originForSending);
            var handleAckMessage = Object(_handleAckMessageFactory__WEBPACK_IMPORTED_MODULE_4__["default"])(methods, childOrigin, originForSending, destructor, log);
            var promise = new Promise(function (resolve, reject) {
              var stopConnectionTimeout = Object(_startConnectionTimeout__WEBPACK_IMPORTED_MODULE_7__["default"])(timeout, _destroy);

              var handleMessage = function handleMessage(event) {
                if (event.source !== iframe.contentWindow || !event.data) {
                  return;
                }

                if (event.data.penpal === _enums__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Syn) {
                  handleSynMessage(event);
                  return;
                }

                if (event.data.penpal === _enums__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Ack) {
                  var callSender = handleAckMessage(event);

                  if (callSender) {
                    stopConnectionTimeout();
                    resolve(callSender);
                  }

                  return;
                }
              };

              window.addEventListener(_enums__WEBPACK_IMPORTED_MODULE_0__["NativeEventType"].Message, handleMessage);
              log('Parent: Awaiting handshake');
              Object(_monitorIframeRemoval__WEBPACK_IMPORTED_MODULE_6__["default"])(iframe, destructor);
              onDestroy(function (error) {
                window.removeEventListener(_enums__WEBPACK_IMPORTED_MODULE_0__["NativeEventType"].Message, handleMessage);

                if (!error) {
                  error = new Error('Connection destroyed');
                  error.code = _enums__WEBPACK_IMPORTED_MODULE_0__["ErrorCode"].ConnectionDestroyed;
                }

                reject(error);
              });
            });
            return {
              promise: promise,
              destroy: function destroy() {
                // Don't allow consumer to pass an error into destroy.
                _destroy();
              }
            };
          };
          /***/

        },

        /***/
        "574M":
        /*!*******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/concat.js ***!
          \*******************************************************************************************/

        /*! exports provided: concat */

        /***/
        function M(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "concat", function () {
            return concat;
          });
          /* harmony import */


          var _observable_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../observable/concat */
          "qZtG");

          function concat() {
            for (var _len3 = arguments.length, observables = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              observables[_key3] = arguments[_key3];
            }

            return function (source) {
              return source.lift.call(Object(_observable_concat__WEBPACK_IMPORTED_MODULE_0__["concat"]).apply(void 0, [source].concat(observables)));
            };
          } //# sourceMappingURL=concat.js.map

          /***/

        },

        /***/
        "5E2i":
        /*!****************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/identity.js ***!
          \****************************************************************************************/

        /*! exports provided: identity */

        /***/
        function E2i(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "identity", function () {
            return identity;
          });

          function identity(x) {
            return x;
          } //# sourceMappingURL=identity.js.map

          /***/

        },

        /***/
        "5uDM":
        /*!**********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/concatMap.js ***!
          \**********************************************************************************************/

        /*! exports provided: concatMap */

        /***/
        function uDM(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "concatMap", function () {
            return concatMap;
          });
          /* harmony import */


          var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./mergeMap */
          "cJ9h");

          function concatMap(project, resultSelector) {
            return Object(_mergeMap__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(project, resultSelector, 1);
          } //# sourceMappingURL=concatMap.js.map

          /***/

        },

        /***/
        "5uGe":
        /*!*************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/Subscriber.js ***!
          \*************************************************************************************/

        /*! exports provided: Subscriber, SafeSubscriber */

        /***/
        function uGe(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "Subscriber", function () {
            return Subscriber;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "SafeSubscriber", function () {
            return SafeSubscriber;
          });
          /* harmony import */


          var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./util/isFunction */
          "IJgj");
          /* harmony import */


          var _Observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./Observer */
          "rWo0");
          /* harmony import */


          var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./Subscription */
          "bwdy");
          /* harmony import */


          var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../internal/symbol/rxSubscriber */
          "25CY");
          /* harmony import */


          var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./config */
          "HgnN");
          /* harmony import */


          var _util_hostReportError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./util/hostReportError */
          "i9P/");

          var Subscriber = /*#__PURE__*/function (_Subscription__WEBPAC) {
            _inherits(Subscriber, _Subscription__WEBPAC);

            var _super16 = _createSuper(Subscriber);

            function Subscriber(destinationOrNext, error, complete) {
              var _this15;

              _classCallCheck(this, Subscriber);

              _this15 = _super16.call(this);
              _this15.syncErrorValue = null;
              _this15.syncErrorThrown = false;
              _this15.syncErrorThrowable = false;
              _this15.isStopped = false;

              switch (arguments.length) {
                case 0:
                  _this15.destination = _Observer__WEBPACK_IMPORTED_MODULE_1__["empty"];
                  break;

                case 1:
                  if (!destinationOrNext) {
                    _this15.destination = _Observer__WEBPACK_IMPORTED_MODULE_1__["empty"];
                    break;
                  }

                  if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                      _this15.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                      _this15.destination = destinationOrNext;
                      destinationOrNext.add(_assertThisInitialized(_this15));
                    } else {
                      _this15.syncErrorThrowable = true;
                      _this15.destination = new SafeSubscriber(_assertThisInitialized(_this15), destinationOrNext);
                    }

                    break;
                  }

                default:
                  _this15.syncErrorThrowable = true;
                  _this15.destination = new SafeSubscriber(_assertThisInitialized(_this15), destinationOrNext, error, complete);
                  break;
              }

              return _this15;
            }

            _createClass(Subscriber, [{
              key: _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_3__["rxSubscriber"],
              value: function value() {
                return this;
              }
            }, {
              key: "next",
              value: function next(value) {
                if (!this.isStopped) {
                  this._next(value);
                }
              }
            }, {
              key: "error",
              value: function error(err) {
                if (!this.isStopped) {
                  this.isStopped = true;

                  this._error(err);
                }
              }
            }, {
              key: "complete",
              value: function complete() {
                if (!this.isStopped) {
                  this.isStopped = true;

                  this._complete();
                }
              }
            }, {
              key: "unsubscribe",
              value: function unsubscribe() {
                if (this.closed) {
                  return;
                }

                this.isStopped = true;

                _get(_getPrototypeOf(Subscriber.prototype), "unsubscribe", this).call(this);
              }
            }, {
              key: "_next",
              value: function _next(value) {
                this.destination.next(value);
              }
            }, {
              key: "_error",
              value: function _error(err) {
                this.destination.error(err);
                this.unsubscribe();
              }
            }, {
              key: "_complete",
              value: function _complete() {
                this.destination.complete();
                this.unsubscribe();
              }
            }, {
              key: "_unsubscribeAndRecycle",
              value: function _unsubscribeAndRecycle() {
                var _parentOrParents = this._parentOrParents;
                this._parentOrParents = null;
                this.unsubscribe();
                this.closed = false;
                this.isStopped = false;
                this._parentOrParents = _parentOrParents;
                return this;
              }
            }], [{
              key: "create",
              value: function create(next, error, complete) {
                var subscriber = new Subscriber(next, error, complete);
                subscriber.syncErrorThrowable = false;
                return subscriber;
              }
            }]);

            return Subscriber;
          }(_Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"]);

          var SafeSubscriber = /*#__PURE__*/function (_Subscriber) {
            _inherits(SafeSubscriber, _Subscriber);

            var _super17 = _createSuper(SafeSubscriber);

            function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
              var _this16;

              _classCallCheck(this, SafeSubscriber);

              _this16 = _super17.call(this);
              _this16._parentSubscriber = _parentSubscriber;
              var next;

              var context = _assertThisInitialized(_this16);

              if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(observerOrNext)) {
                next = observerOrNext;
              } else if (observerOrNext) {
                next = observerOrNext.next;
                error = observerOrNext.error;
                complete = observerOrNext.complete;

                if (observerOrNext !== _Observer__WEBPACK_IMPORTED_MODULE_1__["empty"]) {
                  context = Object.create(observerOrNext);

                  if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(context.unsubscribe)) {
                    _this16.add(context.unsubscribe.bind(context));
                  }

                  context.unsubscribe = _this16.unsubscribe.bind(_assertThisInitialized(_this16));
                }
              }

              _this16._context = context;
              _this16._next = next;
              _this16._error = error;
              _this16._complete = complete;
              return _this16;
            }

            _createClass(SafeSubscriber, [{
              key: "next",
              value: function next(value) {
                if (!this.isStopped && this._next) {
                  var _parentSubscriber = this._parentSubscriber;

                  if (!_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._next, value);
                  } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                    this.unsubscribe();
                  }
                }
              }
            }, {
              key: "error",
              value: function error(err) {
                if (!this.isStopped) {
                  var _parentSubscriber = this._parentSubscriber;
                  var useDeprecatedSynchronousErrorHandling = _config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling;

                  if (this._error) {
                    if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                      this.__tryOrUnsub(this._error, err);

                      this.unsubscribe();
                    } else {
                      this.__tryOrSetError(_parentSubscriber, this._error, err);

                      this.unsubscribe();
                    }
                  } else if (!_parentSubscriber.syncErrorThrowable) {
                    this.unsubscribe();

                    if (useDeprecatedSynchronousErrorHandling) {
                      throw err;
                    }

                    Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__["hostReportError"])(err);
                  } else {
                    if (useDeprecatedSynchronousErrorHandling) {
                      _parentSubscriber.syncErrorValue = err;
                      _parentSubscriber.syncErrorThrown = true;
                    } else {
                      Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__["hostReportError"])(err);
                    }

                    this.unsubscribe();
                  }
                }
              }
            }, {
              key: "complete",
              value: function complete() {
                var _this17 = this;

                if (!this.isStopped) {
                  var _parentSubscriber = this._parentSubscriber;

                  if (this._complete) {
                    var wrappedComplete = function wrappedComplete() {
                      return _this17._complete.call(_this17._context);
                    };

                    if (!_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                      this.__tryOrUnsub(wrappedComplete);

                      this.unsubscribe();
                    } else {
                      this.__tryOrSetError(_parentSubscriber, wrappedComplete);

                      this.unsubscribe();
                    }
                  } else {
                    this.unsubscribe();
                  }
                }
              }
            }, {
              key: "__tryOrUnsub",
              value: function __tryOrUnsub(fn, value) {
                try {
                  fn.call(this._context, value);
                } catch (err) {
                  this.unsubscribe();

                  if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
                    throw err;
                  } else {
                    Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__["hostReportError"])(err);
                  }
                }
              }
            }, {
              key: "__tryOrSetError",
              value: function __tryOrSetError(parent, fn, value) {
                if (!_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
                  throw new Error('bad call');
                }

                try {
                  fn.call(this._context, value);
                } catch (err) {
                  if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
                    parent.syncErrorValue = err;
                    parent.syncErrorThrown = true;
                    return true;
                  } else {
                    Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__["hostReportError"])(err);
                    return true;
                  }
                }

                return false;
              }
            }, {
              key: "_unsubscribe",
              value: function _unsubscribe() {
                var _parentSubscriber = this._parentSubscriber;
                this._context = null;
                this._parentSubscriber = null;

                _parentSubscriber.unsubscribe();
              }
            }]);

            return SafeSubscriber;
          }(Subscriber); //# sourceMappingURL=Subscriber.js.map

          /***/

        },

        /***/
        "6Oco":
        /*!*******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/empty.js ***!
          \*******************************************************************************************/

        /*! exports provided: EMPTY, empty */

        /***/
        function Oco(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "EMPTY", function () {
            return EMPTY;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "empty", function () {
            return empty;
          });
          /* harmony import */


          var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Observable */
          "IdLP");

          var EMPTY = new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            return subscriber.complete();
          });

          function empty(scheduler) {
            return scheduler ? emptyScheduled(scheduler) : EMPTY;
          }

          function emptyScheduled(scheduler) {
            return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
              return scheduler.schedule(function () {
                return subscriber.complete();
              });
            });
          } //# sourceMappingURL=empty.js.map

          /***/

        },

        /***/
        "6Rrg":
        /*!******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/parent/monitorIframeRemoval.js ***!
          \******************************************************************************************/

        /*! exports provided: default */

        /***/
        function Rrg(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);

          var CHECK_IFRAME_IN_DOC_INTERVAL = 60000;
          /**
           * Monitors for iframe removal and destroys connection if iframe
           * is found to have been removed from DOM. This is to prevent memory
           * leaks when the iframe is removed from the document and the consumer
           * hasn't called destroy(). Without this, event listeners attached to
           * the window would stick around and since the event handlers have a
           * reference to the iframe in their closures, the iframe would stick
           * around too.
           */

          /* harmony default export */

          __webpack_exports__["default"] = function (iframe, destructor) {
            var destroy = destructor.destroy,
                onDestroy = destructor.onDestroy;
            var checkIframeInDocIntervalId = setInterval(function () {
              if (!iframe.isConnected) {
                clearInterval(checkIframeInDocIntervalId);
                destroy();
              }
            }, CHECK_IFRAME_IN_DOC_INTERVAL);
            onDestroy(function () {
              clearInterval(checkIframeInDocIntervalId);
            });
          };
          /***/

        },

        /***/
        "7Alh":
        /*!************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
          \************************************************************************************/

        /*! exports provided: Scheduler */

        /***/
        function Alh(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "Scheduler", function () {
            return Scheduler;
          });

          var Scheduler = /*#__PURE__*/function () {
            function Scheduler(SchedulerAction) {
              var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Scheduler.now;

              _classCallCheck(this, Scheduler);

              this.SchedulerAction = SchedulerAction;
              this.now = now;
            }

            _createClass(Scheduler, [{
              key: "schedule",
              value: function schedule(work) {
                var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var state = arguments.length > 2 ? arguments[2] : undefined;
                return new this.SchedulerAction(this, work).schedule(state, delay);
              }
            }]);

            return Scheduler;
          }();

          Scheduler.now = function () {
            return Date.now();
          }; //# sourceMappingURL=Scheduler.js.map

          /***/

        },

        /***/
        "7SLS":
        /*!******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/mapTo.js ***!
          \******************************************************************************************/

        /*! exports provided: mapTo */

        /***/
        function SLS(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "mapTo", function () {
            return mapTo;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");

          function mapTo(value) {
            return function (source) {
              return source.lift(new MapToOperator(value));
            };
          }

          var MapToOperator = /*#__PURE__*/function () {
            function MapToOperator(value) {
              _classCallCheck(this, MapToOperator);

              this.value = value;
            }

            _createClass(MapToOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new MapToSubscriber(subscriber, this.value));
              }
            }]);

            return MapToOperator;
          }();

          var MapToSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_8) {
            _inherits(MapToSubscriber, _Subscriber__WEBPACK_8);

            var _super18 = _createSuper(MapToSubscriber);

            function MapToSubscriber(destination, value) {
              var _this18;

              _classCallCheck(this, MapToSubscriber);

              _this18 = _super18.call(this, destination);
              _this18.value = value;
              return _this18;
            }

            _createClass(MapToSubscriber, [{
              key: "_next",
              value: function _next(x) {
                this.destination.next(this.value);
              }
            }]);

            return MapToSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=mapTo.js.map

          /***/

        },

        /***/
        "7ntQ":
        /*!******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/share.js ***!
          \******************************************************************************************/

        /*! exports provided: share */

        /***/
        function ntQ(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "share", function () {
            return share;
          });
          /* harmony import */


          var _multicast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./multicast */
          "JHA6");
          /* harmony import */


          var _refCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./refCount */
          "i7Dj");
          /* harmony import */


          var _Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../Subject */
          "ZTXN");

          function shareSubjectFactory() {
            return new _Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          }

          function share() {
            return function (source) {
              return Object(_refCount__WEBPACK_IMPORTED_MODULE_1__["refCount"])()(Object(_multicast__WEBPACK_IMPORTED_MODULE_0__["multicast"])(shareSubjectFactory)(source));
            };
          } //# sourceMappingURL=share.js.map

          /***/

        },

        /***/
        "8V6W":
        /*!**************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/subscribeToPromise.js ***!
          \**************************************************************************************************/

        /*! exports provided: subscribeToPromise */

        /***/
        function V6W(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "subscribeToPromise", function () {
            return subscribeToPromise;
          });
          /* harmony import */


          var _hostReportError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./hostReportError */
          "i9P/");

          var subscribeToPromise = function subscribeToPromise(promise) {
            return function (subscriber) {
              promise.then(function (value) {
                if (!subscriber.closed) {
                  subscriber.next(value);
                  subscriber.complete();
                }
              }, function (err) {
                return subscriber.error(err);
              }).then(null, _hostReportError__WEBPACK_IMPORTED_MODULE_0__["hostReportError"]);
              return subscriber;
            };
          }; //# sourceMappingURL=subscribeToPromise.js.map

          /***/

        },

        /***/
        "8j5Y":
        /*!****************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/tap.js ***!
          \****************************************************************************************/

        /*! exports provided: tap */

        /***/
        function j5Y(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "tap", function () {
            return tap;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");
          /* harmony import */


          var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../util/noop */
          "kgbq");
          /* harmony import */


          var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../util/isFunction */
          "IJgj");

          function tap(nextOrObserver, error, complete) {
            return function tapOperatorFunction(source) {
              return source.lift(new DoOperator(nextOrObserver, error, complete));
            };
          }

          var DoOperator = /*#__PURE__*/function () {
            function DoOperator(nextOrObserver, error, complete) {
              _classCallCheck(this, DoOperator);

              this.nextOrObserver = nextOrObserver;
              this.error = error;
              this.complete = complete;
            }

            _createClass(DoOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new TapSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
              }
            }]);

            return DoOperator;
          }();

          var TapSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_9) {
            _inherits(TapSubscriber, _Subscriber__WEBPACK_9);

            var _super19 = _createSuper(TapSubscriber);

            function TapSubscriber(destination, observerOrNext, error, complete) {
              var _this19;

              _classCallCheck(this, TapSubscriber);

              _this19 = _super19.call(this, destination);
              _this19._tapNext = _util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"];
              _this19._tapError = _util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"];
              _this19._tapComplete = _util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"];
              _this19._tapError = error || _util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"];
              _this19._tapComplete = complete || _util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"];

              if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(observerOrNext)) {
                _this19._context = _assertThisInitialized(_this19);
                _this19._tapNext = observerOrNext;
              } else if (observerOrNext) {
                _this19._context = observerOrNext;
                _this19._tapNext = observerOrNext.next || _util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"];
                _this19._tapError = observerOrNext.error || _util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"];
                _this19._tapComplete = observerOrNext.complete || _util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"];
              }

              return _this19;
            }

            _createClass(TapSubscriber, [{
              key: "_next",
              value: function _next(value) {
                try {
                  this._tapNext.call(this._context, value);
                } catch (err) {
                  this.destination.error(err);
                  return;
                }

                this.destination.next(value);
              }
            }, {
              key: "_error",
              value: function _error(err) {
                try {
                  this._tapError.call(this._context, err);
                } catch (err) {
                  this.destination.error(err);
                  return;
                }

                this.destination.error(err);
              }
            }, {
              key: "_complete",
              value: function _complete() {
                try {
                  this._tapComplete.call(this._context);
                } catch (err) {
                  this.destination.error(err);
                  return;
                }

                return this.destination.complete();
              }
            }]);

            return TapSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=tap.js.map

          /***/

        },

        /***/
        "8lHc":
        /*!*******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/timer.js ***!
          \*******************************************************************************************/

        /*! exports provided: timer */

        /***/
        function lHc(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "timer", function () {
            return timer;
          });
          /* harmony import */


          var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Observable */
          "IdLP");
          /* harmony import */


          var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../scheduler/async */
          "Efrr");
          /* harmony import */


          var _util_isNumeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../util/isNumeric */
          "KRZI");
          /* harmony import */


          var _util_isScheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../util/isScheduler */
          "gBlb");

          function timer() {
            var dueTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var periodOrScheduler = arguments.length > 1 ? arguments[1] : undefined;
            var scheduler = arguments.length > 2 ? arguments[2] : undefined;
            var period = -1;

            if (Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(periodOrScheduler)) {
              period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
            } else if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_3__["isScheduler"])(periodOrScheduler)) {
              scheduler = periodOrScheduler;
            }

            if (!Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_3__["isScheduler"])(scheduler)) {
              scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
            }

            return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
              var due = Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(dueTime) ? dueTime : +dueTime - scheduler.now();
              return scheduler.schedule(dispatch, due, {
                index: 0,
                period: period,
                subscriber: subscriber
              });
            });
          }

          function dispatch(state) {
            var index = state.index,
                period = state.period,
                subscriber = state.subscriber;
            subscriber.next(index);

            if (subscriber.closed) {
              return;
            } else if (period === -1) {
              return subscriber.complete();
            }

            state.index = index + 1;
            this.schedule(state, period);
          } //# sourceMappingURL=timer.js.map

          /***/

        },

        /***/
        "9WAt":
        /*!***************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/ignoreElements.js ***!
          \***************************************************************************************************/

        /*! exports provided: ignoreElements */

        /***/
        function WAt(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "ignoreElements", function () {
            return ignoreElements;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");

          function ignoreElements() {
            return function ignoreElementsOperatorFunction(source) {
              return source.lift(new IgnoreElementsOperator());
            };
          }

          var IgnoreElementsOperator = /*#__PURE__*/function () {
            function IgnoreElementsOperator() {
              _classCallCheck(this, IgnoreElementsOperator);
            }

            _createClass(IgnoreElementsOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new IgnoreElementsSubscriber(subscriber));
              }
            }]);

            return IgnoreElementsOperator;
          }();

          var IgnoreElementsSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_10) {
            _inherits(IgnoreElementsSubscriber, _Subscriber__WEBPACK_10);

            var _super20 = _createSuper(IgnoreElementsSubscriber);

            function IgnoreElementsSubscriber() {
              _classCallCheck(this, IgnoreElementsSubscriber);

              return _super20.apply(this, arguments);
            }

            _createClass(IgnoreElementsSubscriber, [{
              key: "_next",
              value: function _next(unused) {}
            }]);

            return IgnoreElementsSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=ignoreElements.js.map

          /***/

        },

        /***/
        "9hGb":
        /*!*******************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/dist/shared/__ivy_ngcc__/fesm2015/shared.js ***!
          \*******************************************************************************/

        /*! exports provided: ButtonComponent, ChildIframeEvents, IFrameChatService, SharedComponent, SharedModule, TabComponent, TabsComponent, TestService */

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


          __webpack_require__.d(__webpack_exports__, "IFrameChatService", function () {
            return IFrameChatService;
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


          var penpal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! penpal */
          "tGer");
          /* harmony import */


          var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs */
          "Vgaj");
          /* harmony import */


          var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
          /* harmony import */


          var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! rxjs/operators */
          "0Wlh");

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
            directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
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
                // tslint:disable-next-line: component-selector
                selector: 'button[sharedBtn]',
                template: '<ng-content></ng-content>',
                styles: [":host{background:#fff;border:1px solid #d8dde6;border-radius:6px;cursor:pointer;line-height:40px;padding:0 15px}:host:hover{background:#f3f7fb}"]
              }]
            }], null, null);
          })();

          var sharedComponents = [SharedComponent, ButtonComponent, TabComponent, TabsComponent];

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
            imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
          });

          (function () {
            (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
              declarations: function declarations() {
                return [SharedComponent, ButtonComponent, TabComponent, TabsComponent];
              },
              imports: function imports() {
                return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
              },
              exports: function exports() {
                return [SharedComponent, ButtonComponent, TabComponent, TabsComponent];
              }
            });
          })();
          /*@__PURE__*/


          (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
              args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [].concat(sharedComponents),
                exports: [].concat(sharedComponents)
              }]
            }], null, null);
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
            function IFrameChatService(iframe, parentAPI) {
              _classCallCheck(this, IFrameChatService);

              /** 子IFRAME的事件 */
              this.childEvents = new ChildIframeEvents();
              /**
               * 链接到iframe
               */

              this.onConnected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
              if (parentAPI) parentAPI.iframeChatService = this;
              this.Init(iframe, parentAPI);
            }
            /**
             * 初始化Postmate，用于父子页面的交互
             */


            _createClass(IFrameChatService, [{
              key: "Init",
              value: function Init(iframe, parentAPI) {
                var _this20 = this;

                // Postmate.debug = true;
                if (this.childAPI) this.connection.destroy();
                this.connection = Object(penpal__WEBPACK_IMPORTED_MODULE_2__["connectToChild"])({
                  // The iframe to which a connection should be made
                  iframe: iframe,
                  // Methods the parent is exposing to the child
                  methods: parentAPI
                });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.connection.promise).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (child) {
                  _this20.childAPI = Object.assign(Object.assign({}, child), _this20.childEvents);

                  _this20.childAPI.multiply(2, 6).then(function (total) {
                    return console.log(total);
                  });

                  _this20.childAPI.divide(12, 4).then(function (total) {
                    return console.log(total);
                  });

                  _this20.onConnected.emit(true);
                })).subscribe();
              }
            }]);

            return IFrameChatService;
          }();

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
        "A2S1":
        /*!**********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/observeOn.js ***!
          \**********************************************************************************************/

        /*! exports provided: observeOn, ObserveOnOperator, ObserveOnSubscriber, ObserveOnMessage */

        /***/
        function A2S1(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "observeOn", function () {
            return observeOn;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "ObserveOnOperator", function () {
            return ObserveOnOperator;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "ObserveOnSubscriber", function () {
            return ObserveOnSubscriber;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "ObserveOnMessage", function () {
            return ObserveOnMessage;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");
          /* harmony import */


          var _Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../Notification */
          "ryP2");

          function observeOn(scheduler) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return function observeOnOperatorFunction(source) {
              return source.lift(new ObserveOnOperator(scheduler, delay));
            };
          }

          var ObserveOnOperator = /*#__PURE__*/function () {
            function ObserveOnOperator(scheduler) {
              var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

              _classCallCheck(this, ObserveOnOperator);

              this.scheduler = scheduler;
              this.delay = delay;
            }

            _createClass(ObserveOnOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
              }
            }]);

            return ObserveOnOperator;
          }();

          var ObserveOnSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_11) {
            _inherits(ObserveOnSubscriber, _Subscriber__WEBPACK_11);

            var _super21 = _createSuper(ObserveOnSubscriber);

            function ObserveOnSubscriber(destination, scheduler) {
              var _this21;

              var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

              _classCallCheck(this, ObserveOnSubscriber);

              _this21 = _super21.call(this, destination);
              _this21.scheduler = scheduler;
              _this21.delay = delay;
              return _this21;
            }

            _createClass(ObserveOnSubscriber, [{
              key: "scheduleMessage",
              value: function scheduleMessage(notification) {
                var destination = this.destination;
                destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
              }
            }, {
              key: "_next",
              value: function _next(value) {
                this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createNext(value));
              }
            }, {
              key: "_error",
              value: function _error(err) {
                this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createError(err));
                this.unsubscribe();
              }
            }, {
              key: "_complete",
              value: function _complete() {
                this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createComplete());
                this.unsubscribe();
              }
            }], [{
              key: "dispatch",
              value: function dispatch(arg) {
                var notification = arg.notification,
                    destination = arg.destination;
                notification.observe(destination);
                this.unsubscribe();
              }
            }]);

            return ObserveOnSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]);

          var ObserveOnMessage = function ObserveOnMessage(notification, destination) {
            _classCallCheck(this, ObserveOnMessage);

            this.notification = notification;
            this.destination = destination;
          }; //# sourceMappingURL=observeOn.js.map

          /***/

        },

        /***/
        "A8kH":
        /*!*********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/takeLast.js ***!
          \*********************************************************************************************/

        /*! exports provided: takeLast */

        /***/
        function A8kH(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "takeLast", function () {
            return takeLast;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");
          /* harmony import */


          var _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../util/ArgumentOutOfRangeError */
          "PNff");
          /* harmony import */


          var _observable_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../observable/empty */
          "6Oco");

          function takeLast(count) {
            return function takeLastOperatorFunction(source) {
              if (count === 0) {
                return Object(_observable_empty__WEBPACK_IMPORTED_MODULE_2__["empty"])();
              } else {
                return source.lift(new TakeLastOperator(count));
              }
            };
          }

          var TakeLastOperator = /*#__PURE__*/function () {
            function TakeLastOperator(total) {
              _classCallCheck(this, TakeLastOperator);

              this.total = total;

              if (this.total < 0) {
                throw new _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_1__["ArgumentOutOfRangeError"]();
              }
            }

            _createClass(TakeLastOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new TakeLastSubscriber(subscriber, this.total));
              }
            }]);

            return TakeLastOperator;
          }();

          var TakeLastSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_12) {
            _inherits(TakeLastSubscriber, _Subscriber__WEBPACK_12);

            var _super22 = _createSuper(TakeLastSubscriber);

            function TakeLastSubscriber(destination, total) {
              var _this22;

              _classCallCheck(this, TakeLastSubscriber);

              _this22 = _super22.call(this, destination);
              _this22.total = total;
              _this22.ring = new Array();
              _this22.count = 0;
              return _this22;
            }

            _createClass(TakeLastSubscriber, [{
              key: "_next",
              value: function _next(value) {
                var ring = this.ring;
                var total = this.total;
                var count = this.count++;

                if (ring.length < total) {
                  ring.push(value);
                } else {
                  var index = count % total;
                  ring[index] = value;
                }
              }
            }, {
              key: "_complete",
              value: function _complete() {
                var destination = this.destination;
                var count = this.count;

                if (count > 0) {
                  var total = this.count >= this.total ? this.total : this.count;
                  var ring = this.ring;

                  for (var i = 0; i < total; i++) {
                    var idx = count++ % total;
                    destination.next(ring[idx]);
                  }
                }

                destination.complete();
              }
            }]);

            return TakeLastSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=takeLast.js.map

          /***/

        },

        /***/
        "AAYN":
        /*!***********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/bufferTime.js ***!
          \***********************************************************************************************/

        /*! exports provided: bufferTime */

        /***/
        function AAYN(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "bufferTime", function () {
            return bufferTime;
          });
          /* harmony import */


          var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../scheduler/async */
          "Efrr");
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");
          /* harmony import */


          var _util_isScheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../util/isScheduler */
          "gBlb");

          function bufferTime(bufferTimeSpan) {
            var length = arguments.length;
            var scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__["async"];

            if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_2__["isScheduler"])(arguments[arguments.length - 1])) {
              scheduler = arguments[arguments.length - 1];
              length--;
            }

            var bufferCreationInterval = null;

            if (length >= 2) {
              bufferCreationInterval = arguments[1];
            }

            var maxBufferSize = Number.POSITIVE_INFINITY;

            if (length >= 3) {
              maxBufferSize = arguments[2];
            }

            return function bufferTimeOperatorFunction(source) {
              return source.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler));
            };
          }

          var BufferTimeOperator = /*#__PURE__*/function () {
            function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
              _classCallCheck(this, BufferTimeOperator);

              this.bufferTimeSpan = bufferTimeSpan;
              this.bufferCreationInterval = bufferCreationInterval;
              this.maxBufferSize = maxBufferSize;
              this.scheduler = scheduler;
            }

            _createClass(BufferTimeOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
              }
            }]);

            return BufferTimeOperator;
          }();

          var Context = function Context() {
            _classCallCheck(this, Context);

            this.buffer = [];
          };

          var BufferTimeSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_13) {
            _inherits(BufferTimeSubscriber, _Subscriber__WEBPACK_13);

            var _super23 = _createSuper(BufferTimeSubscriber);

            function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
              var _this23;

              _classCallCheck(this, BufferTimeSubscriber);

              _this23 = _super23.call(this, destination);
              _this23.bufferTimeSpan = bufferTimeSpan;
              _this23.bufferCreationInterval = bufferCreationInterval;
              _this23.maxBufferSize = maxBufferSize;
              _this23.scheduler = scheduler;
              _this23.contexts = [];

              var context = _this23.openContext();

              _this23.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;

              if (_this23.timespanOnly) {
                var timeSpanOnlyState = {
                  subscriber: _assertThisInitialized(_this23),
                  context: context,
                  bufferTimeSpan: bufferTimeSpan
                };

                _this23.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
              } else {
                var closeState = {
                  subscriber: _assertThisInitialized(_this23),
                  context: context
                };
                var creationState = {
                  bufferTimeSpan: bufferTimeSpan,
                  bufferCreationInterval: bufferCreationInterval,
                  subscriber: _assertThisInitialized(_this23),
                  scheduler: scheduler
                };

                _this23.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));

                _this23.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
              }

              return _this23;
            }

            _createClass(BufferTimeSubscriber, [{
              key: "_next",
              value: function _next(value) {
                var contexts = this.contexts;
                var len = contexts.length;
                var filledBufferContext;

                for (var i = 0; i < len; i++) {
                  var context = contexts[i];
                  var buffer = context.buffer;
                  buffer.push(value);

                  if (buffer.length == this.maxBufferSize) {
                    filledBufferContext = context;
                  }
                }

                if (filledBufferContext) {
                  this.onBufferFull(filledBufferContext);
                }
              }
            }, {
              key: "_error",
              value: function _error(err) {
                this.contexts.length = 0;

                _get(_getPrototypeOf(BufferTimeSubscriber.prototype), "_error", this).call(this, err);
              }
            }, {
              key: "_complete",
              value: function _complete() {
                var contexts = this.contexts,
                    destination = this.destination;

                while (contexts.length > 0) {
                  var context = contexts.shift();
                  destination.next(context.buffer);
                }

                _get(_getPrototypeOf(BufferTimeSubscriber.prototype), "_complete", this).call(this);
              }
            }, {
              key: "_unsubscribe",
              value: function _unsubscribe() {
                this.contexts = null;
              }
            }, {
              key: "onBufferFull",
              value: function onBufferFull(context) {
                this.closeContext(context);
                var closeAction = context.closeAction;
                closeAction.unsubscribe();
                this.remove(closeAction);

                if (!this.closed && this.timespanOnly) {
                  context = this.openContext();
                  var bufferTimeSpan = this.bufferTimeSpan;
                  var timeSpanOnlyState = {
                    subscriber: this,
                    context: context,
                    bufferTimeSpan: bufferTimeSpan
                  };
                  this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
                }
              }
            }, {
              key: "openContext",
              value: function openContext() {
                var context = new Context();
                this.contexts.push(context);
                return context;
              }
            }, {
              key: "closeContext",
              value: function closeContext(context) {
                this.destination.next(context.buffer);
                var contexts = this.contexts;
                var spliceIndex = contexts ? contexts.indexOf(context) : -1;

                if (spliceIndex >= 0) {
                  contexts.splice(contexts.indexOf(context), 1);
                }
              }
            }]);

            return BufferTimeSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]);

          function dispatchBufferTimeSpanOnly(state) {
            var subscriber = state.subscriber;
            var prevContext = state.context;

            if (prevContext) {
              subscriber.closeContext(prevContext);
            }

            if (!subscriber.closed) {
              state.context = subscriber.openContext();
              state.context.closeAction = this.schedule(state, state.bufferTimeSpan);
            }
          }

          function dispatchBufferCreation(state) {
            var bufferCreationInterval = state.bufferCreationInterval,
                bufferTimeSpan = state.bufferTimeSpan,
                subscriber = state.subscriber,
                scheduler = state.scheduler;
            var context = subscriber.openContext();
            var action = this;

            if (!subscriber.closed) {
              subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, {
                subscriber: subscriber,
                context: context
              }));
              action.schedule(state, bufferCreationInterval);
            }
          }

          function dispatchBufferClose(arg) {
            var subscriber = arg.subscriber,
                context = arg.context;
            subscriber.closeContext(context);
          } //# sourceMappingURL=bufferTime.js.map

          /***/

        },

        /***/
        "B+tH":
        /*!*******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/child/validateWindowIsIframe.js ***!
          \*******************************************************************************************/

        /*! exports provided: default */

        /***/
        function BTH(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony import */


          var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../enums */
          "Rj9D");
          /* harmony default export */


          __webpack_exports__["default"] = function () {
            if (window === window.top) {
              var error = new Error('connectToParent() must be called within an iframe');
              error.code = _enums__WEBPACK_IMPORTED_MODULE_0__["ErrorCode"].NotInIframe;
              throw error;
            }
          };
          /***/

        },

        /***/
        "B8NW":
        /*!**********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/takeWhile.js ***!
          \**********************************************************************************************/

        /*! exports provided: takeWhile */

        /***/
        function B8NW(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "takeWhile", function () {
            return takeWhile;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");

          function takeWhile(predicate) {
            var inclusive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return function (source) {
              return source.lift(new TakeWhileOperator(predicate, inclusive));
            };
          }

          var TakeWhileOperator = /*#__PURE__*/function () {
            function TakeWhileOperator(predicate, inclusive) {
              _classCallCheck(this, TakeWhileOperator);

              this.predicate = predicate;
              this.inclusive = inclusive;
            }

            _createClass(TakeWhileOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new TakeWhileSubscriber(subscriber, this.predicate, this.inclusive));
              }
            }]);

            return TakeWhileOperator;
          }();

          var TakeWhileSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_14) {
            _inherits(TakeWhileSubscriber, _Subscriber__WEBPACK_14);

            var _super24 = _createSuper(TakeWhileSubscriber);

            function TakeWhileSubscriber(destination, predicate, inclusive) {
              var _this24;

              _classCallCheck(this, TakeWhileSubscriber);

              _this24 = _super24.call(this, destination);
              _this24.predicate = predicate;
              _this24.inclusive = inclusive;
              _this24.index = 0;
              return _this24;
            }

            _createClass(TakeWhileSubscriber, [{
              key: "_next",
              value: function _next(value) {
                var destination = this.destination;
                var result;

                try {
                  result = this.predicate(value, this.index++);
                } catch (err) {
                  destination.error(err);
                  return;
                }

                this.nextOrComplete(value, result);
              }
            }, {
              key: "nextOrComplete",
              value: function nextOrComplete(value, predicateResult) {
                var destination = this.destination;

                if (Boolean(predicateResult)) {
                  destination.next(value);
                } else {
                  if (this.inclusive) {
                    destination.next(value);
                  }

                  destination.complete();
                }
              }
            }]);

            return TakeWhileSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=takeWhile.js.map

          /***/

        },

        /***/
        "BwBJ":
        /*!******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/delay.js ***!
          \******************************************************************************************/

        /*! exports provided: delay */

        /***/
        function BwBJ(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "delay", function () {
            return delay;
          });
          /* harmony import */


          var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../scheduler/async */
          "Efrr");
          /* harmony import */


          var _util_isDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../util/isDate */
          "iRe+");
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");
          /* harmony import */


          var _Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../Notification */
          "ryP2");

          function delay(delay) {
            var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _scheduler_async__WEBPACK_IMPORTED_MODULE_0__["async"];
            var absoluteDelay = Object(_util_isDate__WEBPACK_IMPORTED_MODULE_1__["isDate"])(delay);
            var delayFor = absoluteDelay ? +delay - scheduler.now() : Math.abs(delay);
            return function (source) {
              return source.lift(new DelayOperator(delayFor, scheduler));
            };
          }

          var DelayOperator = /*#__PURE__*/function () {
            function DelayOperator(delay, scheduler) {
              _classCallCheck(this, DelayOperator);

              this.delay = delay;
              this.scheduler = scheduler;
            }

            _createClass(DelayOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
              }
            }]);

            return DelayOperator;
          }();

          var DelaySubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_15) {
            _inherits(DelaySubscriber, _Subscriber__WEBPACK_15);

            var _super25 = _createSuper(DelaySubscriber);

            function DelaySubscriber(destination, delay, scheduler) {
              var _this25;

              _classCallCheck(this, DelaySubscriber);

              _this25 = _super25.call(this, destination);
              _this25.delay = delay;
              _this25.scheduler = scheduler;
              _this25.queue = [];
              _this25.active = false;
              _this25.errored = false;
              return _this25;
            }

            _createClass(DelaySubscriber, [{
              key: "_schedule",
              value: function _schedule(scheduler) {
                this.active = true;
                var destination = this.destination;
                destination.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
                  source: this,
                  destination: this.destination,
                  scheduler: scheduler
                }));
              }
            }, {
              key: "scheduleNotification",
              value: function scheduleNotification(notification) {
                if (this.errored === true) {
                  return;
                }

                var scheduler = this.scheduler;
                var message = new DelayMessage(scheduler.now() + this.delay, notification);
                this.queue.push(message);

                if (this.active === false) {
                  this._schedule(scheduler);
                }
              }
            }, {
              key: "_next",
              value: function _next(value) {
                this.scheduleNotification(_Notification__WEBPACK_IMPORTED_MODULE_3__["Notification"].createNext(value));
              }
            }, {
              key: "_error",
              value: function _error(err) {
                this.errored = true;
                this.queue = [];
                this.destination.error(err);
                this.unsubscribe();
              }
            }, {
              key: "_complete",
              value: function _complete() {
                this.scheduleNotification(_Notification__WEBPACK_IMPORTED_MODULE_3__["Notification"].createComplete());
                this.unsubscribe();
              }
            }], [{
              key: "dispatch",
              value: function dispatch(state) {
                var source = state.source;
                var queue = source.queue;
                var scheduler = state.scheduler;
                var destination = state.destination;

                while (queue.length > 0 && queue[0].time - scheduler.now() <= 0) {
                  queue.shift().notification.observe(destination);
                }

                if (queue.length > 0) {
                  var _delay = Math.max(0, queue[0].time - scheduler.now());

                  this.schedule(state, _delay);
                } else {
                  this.unsubscribe();
                  source.active = false;
                }
              }
            }]);

            return DelaySubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_2__["Subscriber"]);

          var DelayMessage = function DelayMessage(time, notification) {
            _classCallCheck(this, DelayMessage);

            this.time = time;
            this.notification = notification;
          }; //# sourceMappingURL=delay.js.map

          /***/

        },

        /***/
        "C05f":
        /*!******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/BehaviorSubject.js ***!
          \******************************************************************************************/

        /*! exports provided: BehaviorSubject */

        /***/
        function C05f(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "BehaviorSubject", function () {
            return BehaviorSubject;
          });
          /* harmony import */


          var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Subject */
          "ZTXN");
          /* harmony import */


          var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./util/ObjectUnsubscribedError */
          "MiDb");

          var BehaviorSubject = /*#__PURE__*/function (_Subject__WEBPACK_IMP3) {
            _inherits(BehaviorSubject, _Subject__WEBPACK_IMP3);

            var _super26 = _createSuper(BehaviorSubject);

            function BehaviorSubject(_value) {
              var _this26;

              _classCallCheck(this, BehaviorSubject);

              _this26 = _super26.call(this);
              _this26._value = _value;
              return _this26;
            }

            _createClass(BehaviorSubject, [{
              key: "_subscribe",
              value: function _subscribe(subscriber) {
                var subscription = _get(_getPrototypeOf(BehaviorSubject.prototype), "_subscribe", this).call(this, subscriber);

                if (subscription && !subscription.closed) {
                  subscriber.next(this._value);
                }

                return subscription;
              }
            }, {
              key: "getValue",
              value: function getValue() {
                if (this.hasError) {
                  throw this.thrownError;
                } else if (this.closed) {
                  throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__["ObjectUnsubscribedError"]();
                } else {
                  return this._value;
                }
              }
            }, {
              key: "next",
              value: function next(value) {
                _get(_getPrototypeOf(BehaviorSubject.prototype), "next", this).call(this, this._value = value);
              }
            }, {
              key: "value",
              get: function get() {
                return this.getValue();
              }
            }]);

            return BehaviorSubject;
          }(_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]); //# sourceMappingURL=BehaviorSubject.js.map

          /***/

        },

        /***/
        "CfqY":
        /*!********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/publish.js ***!
          \********************************************************************************************/

        /*! exports provided: publish */

        /***/
        function CfqY(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "publish", function () {
            return publish;
          });
          /* harmony import */


          var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subject */
          "ZTXN");
          /* harmony import */


          var _multicast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./multicast */
          "JHA6");

          function publish(selector) {
            return selector ? Object(_multicast__WEBPACK_IMPORTED_MODULE_1__["multicast"])(function () {
              return new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
            }, selector) : Object(_multicast__WEBPACK_IMPORTED_MODULE_1__["multicast"])(new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]());
          } //# sourceMappingURL=publish.js.map

          /***/

        },

        /***/
        "CsoK":
        /*!************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/switchMapTo.js ***!
          \************************************************************************************************/

        /*! exports provided: switchMapTo */

        /***/
        function CsoK(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "switchMapTo", function () {
            return switchMapTo;
          });
          /* harmony import */


          var _switchMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./switchMap */
          "TLy2");

          function switchMapTo(innerObservable, resultSelector) {
            return resultSelector ? Object(_switchMap__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function () {
              return innerObservable;
            }, resultSelector) : Object(_switchMap__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function () {
              return innerObservable;
            });
          } //# sourceMappingURL=switchMapTo.js.map

          /***/

        },

        /***/
        "DG/E":
        /*!***************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
          \***************************************************************************************************/

        /*! exports provided: AsyncScheduler */

        /***/
        function DGE(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "AsyncScheduler", function () {
            return AsyncScheduler;
          });
          /* harmony import */


          var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Scheduler */
          "7Alh");

          var AsyncScheduler = /*#__PURE__*/function (_Scheduler__WEBPACK_I) {
            _inherits(AsyncScheduler, _Scheduler__WEBPACK_I);

            var _super27 = _createSuper(AsyncScheduler);

            function AsyncScheduler(SchedulerAction) {
              var _this27;

              var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Scheduler__WEBPACK_IMPORTED_MODULE_0__["Scheduler"].now;

              _classCallCheck(this, AsyncScheduler);

              _this27 = _super27.call(this, SchedulerAction, function () {
                if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _assertThisInitialized(_this27)) {
                  return AsyncScheduler.delegate.now();
                } else {
                  return now();
                }
              });
              _this27.actions = [];
              _this27.active = false;
              _this27.scheduled = undefined;
              return _this27;
            }

            _createClass(AsyncScheduler, [{
              key: "schedule",
              value: function schedule(work) {
                var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var state = arguments.length > 2 ? arguments[2] : undefined;

                if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
                  return AsyncScheduler.delegate.schedule(work, delay, state);
                } else {
                  return _get(_getPrototypeOf(AsyncScheduler.prototype), "schedule", this).call(this, work, delay, state);
                }
              }
            }, {
              key: "flush",
              value: function flush(action) {
                var actions = this.actions;

                if (this.active) {
                  actions.push(action);
                  return;
                }

                var error;
                this.active = true;

                do {
                  if (error = action.execute(action.state, action.delay)) {
                    break;
                  }
                } while (action = actions.shift());

                this.active = false;

                if (error) {
                  while (action = actions.shift()) {
                    action.unsubscribe();
                  }

                  throw error;
                }
              }
            }]);

            return AsyncScheduler;
          }(_Scheduler__WEBPACK_IMPORTED_MODULE_0__["Scheduler"]); //# sourceMappingURL=AsyncScheduler.js.map

          /***/

        },

        /***/
        "EWqr":
        /*!************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
          \************************************************************************************************/

        /*! exports provided: AsyncAction */

        /***/
        function EWqr(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "AsyncAction", function () {
            return AsyncAction;
          });
          /* harmony import */


          var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Action */
          "d+O9");

          var AsyncAction = /*#__PURE__*/function (_Action__WEBPACK_IMPO) {
            _inherits(AsyncAction, _Action__WEBPACK_IMPO);

            var _super28 = _createSuper(AsyncAction);

            function AsyncAction(scheduler, work) {
              var _this28;

              _classCallCheck(this, AsyncAction);

              _this28 = _super28.call(this, scheduler, work);
              _this28.scheduler = scheduler;
              _this28.work = work;
              _this28.pending = false;
              return _this28;
            }

            _createClass(AsyncAction, [{
              key: "schedule",
              value: function schedule(state) {
                var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

                if (this.closed) {
                  return this;
                }

                this.state = state;
                var id = this.id;
                var scheduler = this.scheduler;

                if (id != null) {
                  this.id = this.recycleAsyncId(scheduler, id, delay);
                }

                this.pending = true;
                this.delay = delay;
                this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
                return this;
              }
            }, {
              key: "requestAsyncId",
              value: function requestAsyncId(scheduler, id) {
                var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                return setInterval(scheduler.flush.bind(scheduler, this), delay);
              }
            }, {
              key: "recycleAsyncId",
              value: function recycleAsyncId(scheduler, id) {
                var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

                if (delay !== null && this.delay === delay && this.pending === false) {
                  return id;
                }

                clearInterval(id);
                return undefined;
              }
            }, {
              key: "execute",
              value: function execute(state, delay) {
                if (this.closed) {
                  return new Error('executing a cancelled action');
                }

                this.pending = false;

                var error = this._execute(state, delay);

                if (error) {
                  return error;
                } else if (this.pending === false && this.id != null) {
                  this.id = this.recycleAsyncId(this.scheduler, this.id, null);
                }
              }
            }, {
              key: "_execute",
              value: function _execute(state, delay) {
                var errored = false;
                var errorValue = undefined;

                try {
                  this.work(state);
                } catch (e) {
                  errored = true;
                  errorValue = !!e && e || new Error(e);
                }

                if (errored) {
                  this.unsubscribe();
                  return errorValue;
                }
              }
            }, {
              key: "_unsubscribe",
              value: function _unsubscribe() {
                var id = this.id;
                var scheduler = this.scheduler;
                var actions = scheduler.actions;
                var index = actions.indexOf(this);
                this.work = null;
                this.state = null;
                this.pending = false;
                this.scheduler = null;

                if (index !== -1) {
                  actions.splice(index, 1);
                }

                if (id != null) {
                  this.id = this.recycleAsyncId(scheduler, id, null);
                }

                this.delay = null;
              }
            }]);

            return AsyncAction;
          }(_Action__WEBPACK_IMPORTED_MODULE_0__["Action"]); //# sourceMappingURL=AsyncAction.js.map

          /***/

        },

        /***/
        "Efrr":
        /*!******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
          \******************************************************************************************/

        /*! exports provided: asyncScheduler, async */

        /***/
        function Efrr(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "asyncScheduler", function () {
            return asyncScheduler;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "async", function () {
            return async;
          });
          /* harmony import */


          var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./AsyncAction */
          "EWqr");
          /* harmony import */


          var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./AsyncScheduler */
          "DG/E");

          var asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"](_AsyncAction__WEBPACK_IMPORTED_MODULE_0__["AsyncAction"]);
          var async = asyncScheduler; //# sourceMappingURL=async.js.map

          /***/
        },

        /***/
        "EqSx":
        /*!****************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/max.js ***!
          \****************************************************************************************/

        /*! exports provided: max */

        /***/
        function EqSx(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "max", function () {
            return max;
          });
          /* harmony import */


          var _reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./reduce */
          "0iRq");

          function max(comparer) {
            var max = typeof comparer === 'function' ? function (x, y) {
              return comparer(x, y) > 0 ? x : y;
            } : function (x, y) {
              return x > y ? x : y;
            };
            return Object(_reduce__WEBPACK_IMPORTED_MODULE_0__["reduce"])(max);
          } //# sourceMappingURL=max.js.map

          /***/

        },

        /***/
        "F/Dh":
        /*!***********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/sampleTime.js ***!
          \***********************************************************************************************/

        /*! exports provided: sampleTime */

        /***/
        function FDh(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "sampleTime", function () {
            return sampleTime;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");
          /* harmony import */


          var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../scheduler/async */
          "Efrr");

          function sampleTime(period) {
            var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
            return function (source) {
              return source.lift(new SampleTimeOperator(period, scheduler));
            };
          }

          var SampleTimeOperator = /*#__PURE__*/function () {
            function SampleTimeOperator(period, scheduler) {
              _classCallCheck(this, SampleTimeOperator);

              this.period = period;
              this.scheduler = scheduler;
            }

            _createClass(SampleTimeOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new SampleTimeSubscriber(subscriber, this.period, this.scheduler));
              }
            }]);

            return SampleTimeOperator;
          }();

          var SampleTimeSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_16) {
            _inherits(SampleTimeSubscriber, _Subscriber__WEBPACK_16);

            var _super29 = _createSuper(SampleTimeSubscriber);

            function SampleTimeSubscriber(destination, period, scheduler) {
              var _this29;

              _classCallCheck(this, SampleTimeSubscriber);

              _this29 = _super29.call(this, destination);
              _this29.period = period;
              _this29.scheduler = scheduler;
              _this29.hasValue = false;

              _this29.add(scheduler.schedule(dispatchNotification, period, {
                subscriber: _assertThisInitialized(_this29),
                period: period
              }));

              return _this29;
            }

            _createClass(SampleTimeSubscriber, [{
              key: "_next",
              value: function _next(value) {
                this.lastValue = value;
                this.hasValue = true;
              }
            }, {
              key: "notifyNext",
              value: function notifyNext() {
                if (this.hasValue) {
                  this.hasValue = false;
                  this.destination.next(this.lastValue);
                }
              }
            }]);

            return SampleTimeSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]);

          function dispatchNotification(state) {
            var subscriber = state.subscriber,
                period = state.period;
            subscriber.notifyNext();
            this.schedule(state, period);
          } //# sourceMappingURL=sampleTime.js.map

          /***/

        },

        /***/
        "FU6l":
        /*!***************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/isArray.js ***!
          \***************************************************************************************/

        /*! exports provided: isArray */

        /***/
        function FU6l(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "isArray", function () {
            return isArray;
          });

          var isArray = function () {
            return Array.isArray || function (x) {
              return x && typeof x.length === 'number';
            };
          }(); //# sourceMappingURL=isArray.js.map

          /***/

        },

        /***/
        "GhgG":
        /*!***********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/bufferWhen.js ***!
          \***********************************************************************************************/

        /*! exports provided: bufferWhen */

        /***/
        function GhgG(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "bufferWhen", function () {
            return bufferWhen;
          });
          /* harmony import */


          var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscription */
          "bwdy");
          /* harmony import */


          var _innerSubscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../innerSubscribe */
          "uCWR");

          function bufferWhen(closingSelector) {
            return function (source) {
              return source.lift(new BufferWhenOperator(closingSelector));
            };
          }

          var BufferWhenOperator = /*#__PURE__*/function () {
            function BufferWhenOperator(closingSelector) {
              _classCallCheck(this, BufferWhenOperator);

              this.closingSelector = closingSelector;
            }

            _createClass(BufferWhenOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
              }
            }]);

            return BufferWhenOperator;
          }();

          var BufferWhenSubscriber = /*#__PURE__*/function (_innerSubscribe__WEBP4) {
            _inherits(BufferWhenSubscriber, _innerSubscribe__WEBP4);

            var _super30 = _createSuper(BufferWhenSubscriber);

            function BufferWhenSubscriber(destination, closingSelector) {
              var _this30;

              _classCallCheck(this, BufferWhenSubscriber);

              _this30 = _super30.call(this, destination);
              _this30.closingSelector = closingSelector;
              _this30.subscribing = false;

              _this30.openBuffer();

              return _this30;
            }

            _createClass(BufferWhenSubscriber, [{
              key: "_next",
              value: function _next(value) {
                this.buffer.push(value);
              }
            }, {
              key: "_complete",
              value: function _complete() {
                var buffer = this.buffer;

                if (buffer) {
                  this.destination.next(buffer);
                }

                _get(_getPrototypeOf(BufferWhenSubscriber.prototype), "_complete", this).call(this);
              }
            }, {
              key: "_unsubscribe",
              value: function _unsubscribe() {
                this.buffer = undefined;
                this.subscribing = false;
              }
            }, {
              key: "notifyNext",
              value: function notifyNext() {
                this.openBuffer();
              }
            }, {
              key: "notifyComplete",
              value: function notifyComplete() {
                if (this.subscribing) {
                  this.complete();
                } else {
                  this.openBuffer();
                }
              }
            }, {
              key: "openBuffer",
              value: function openBuffer() {
                var closingSubscription = this.closingSubscription;

                if (closingSubscription) {
                  this.remove(closingSubscription);
                  closingSubscription.unsubscribe();
                }

                var buffer = this.buffer;

                if (this.buffer) {
                  this.destination.next(buffer);
                }

                this.buffer = [];
                var closingNotifier;

                try {
                  var closingSelector = this.closingSelector;
                  closingNotifier = closingSelector();
                } catch (err) {
                  return this.error(err);
                }

                closingSubscription = new _Subscription__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
                this.closingSubscription = closingSubscription;
                this.add(closingSubscription);
                this.subscribing = true;
                closingSubscription.add(Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_1__["innerSubscribe"])(closingNotifier, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_1__["SimpleInnerSubscriber"](this)));
                this.subscribing = false;
              }
            }]);

            return BufferWhenSubscriber;
          }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_1__["SimpleOuterSubscriber"]); //# sourceMappingURL=bufferWhen.js.map

          /***/

        },

        /***/
        "GoAz":
        /*!******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/from.js ***!
          \******************************************************************************************/

        /*! exports provided: from */

        /***/
        function GoAz(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "from", function () {
            return from;
          });
          /* harmony import */


          var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Observable */
          "IdLP");
          /* harmony import */


          var _util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../util/subscribeTo */
          "1MAX");
          /* harmony import */


          var _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../scheduled/scheduled */
          "gMuT");

          function from(input, scheduler) {
            if (!scheduler) {
              if (input instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
                return input;
              }

              return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(input));
            } else {
              return Object(_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_2__["scheduled"])(input, scheduler);
            }
          } //# sourceMappingURL=from.js.map

          /***/

        },

        /***/
        "HFsJ":
        /*!************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduler/QueueAction.js ***!
          \************************************************************************************************/

        /*! exports provided: QueueAction */

        /***/
        function HFsJ(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "QueueAction", function () {
            return QueueAction;
          });
          /* harmony import */


          var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./AsyncAction */
          "EWqr");

          var QueueAction = /*#__PURE__*/function (_AsyncAction__WEBPACK) {
            _inherits(QueueAction, _AsyncAction__WEBPACK);

            var _super31 = _createSuper(QueueAction);

            function QueueAction(scheduler, work) {
              var _this31;

              _classCallCheck(this, QueueAction);

              _this31 = _super31.call(this, scheduler, work);
              _this31.scheduler = scheduler;
              _this31.work = work;
              return _this31;
            }

            _createClass(QueueAction, [{
              key: "schedule",
              value: function schedule(state) {
                var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

                if (delay > 0) {
                  return _get(_getPrototypeOf(QueueAction.prototype), "schedule", this).call(this, state, delay);
                }

                this.delay = delay;
                this.state = state;
                this.scheduler.flush(this);
                return this;
              }
            }, {
              key: "execute",
              value: function execute(state, delay) {
                return delay > 0 || this.closed ? _get(_getPrototypeOf(QueueAction.prototype), "execute", this).call(this, state, delay) : this._execute(state, delay);
              }
            }, {
              key: "requestAsyncId",
              value: function requestAsyncId(scheduler, id) {
                var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

                if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
                  return _get(_getPrototypeOf(QueueAction.prototype), "requestAsyncId", this).call(this, scheduler, id, delay);
                }

                return scheduler.flush(this);
              }
            }]);

            return QueueAction;
          }(_AsyncAction__WEBPACK_IMPORTED_MODULE_0__["AsyncAction"]); //# sourceMappingURL=QueueAction.js.map

          /***/

        },

        /***/
        "HM3f":
        /*!***************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/combineLatest.js ***!
          \***************************************************************************************************/

        /*! exports provided: combineLatest, CombineLatestOperator, CombineLatestSubscriber */

        /***/
        function HM3f(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "combineLatest", function () {
            return combineLatest;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "CombineLatestOperator", function () {
            return CombineLatestOperator;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "CombineLatestSubscriber", function () {
            return CombineLatestSubscriber;
          });
          /* harmony import */


          var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../util/isScheduler */
          "gBlb");
          /* harmony import */


          var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../util/isArray */
          "FU6l");
          /* harmony import */


          var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../OuterSubscriber */
          "pBDD");
          /* harmony import */


          var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../util/subscribeToResult */
          "mW0F");
          /* harmony import */


          var _fromArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./fromArray */
          "ckkg");

          var NONE = {};

          function combineLatest() {
            for (var _len4 = arguments.length, observables = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              observables[_key4] = arguments[_key4];
            }

            var resultSelector = undefined;
            var scheduler = undefined;

            if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__["isScheduler"])(observables[observables.length - 1])) {
              scheduler = observables.pop();
            }

            if (typeof observables[observables.length - 1] === 'function') {
              resultSelector = observables.pop();
            }

            if (observables.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(observables[0])) {
              observables = observables[0];
            }

            return Object(_fromArray__WEBPACK_IMPORTED_MODULE_4__["fromArray"])(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
          }

          var CombineLatestOperator = /*#__PURE__*/function () {
            function CombineLatestOperator(resultSelector) {
              _classCallCheck(this, CombineLatestOperator);

              this.resultSelector = resultSelector;
            }

            _createClass(CombineLatestOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
              }
            }]);

            return CombineLatestOperator;
          }();

          var CombineLatestSubscriber = /*#__PURE__*/function (_OuterSubscriber__WEB2) {
            _inherits(CombineLatestSubscriber, _OuterSubscriber__WEB2);

            var _super32 = _createSuper(CombineLatestSubscriber);

            function CombineLatestSubscriber(destination, resultSelector) {
              var _this32;

              _classCallCheck(this, CombineLatestSubscriber);

              _this32 = _super32.call(this, destination);
              _this32.resultSelector = resultSelector;
              _this32.active = 0;
              _this32.values = [];
              _this32.observables = [];
              return _this32;
            }

            _createClass(CombineLatestSubscriber, [{
              key: "_next",
              value: function _next(observable) {
                this.values.push(NONE);
                this.observables.push(observable);
              }
            }, {
              key: "_complete",
              value: function _complete() {
                var observables = this.observables;
                var len = observables.length;

                if (len === 0) {
                  this.destination.complete();
                } else {
                  this.active = len;
                  this.toRespond = len;

                  for (var i = 0; i < len; i++) {
                    var observable = observables[i];
                    this.add(Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__["subscribeToResult"])(this, observable, undefined, i));
                  }
                }
              }
            }, {
              key: "notifyComplete",
              value: function notifyComplete(unused) {
                if ((this.active -= 1) === 0) {
                  this.destination.complete();
                }
              }
            }, {
              key: "notifyNext",
              value: function notifyNext(_outerValue, innerValue, outerIndex) {
                var values = this.values;
                var oldVal = values[outerIndex];
                var toRespond = !this.toRespond ? 0 : oldVal === NONE ? --this.toRespond : this.toRespond;
                values[outerIndex] = innerValue;

                if (toRespond === 0) {
                  if (this.resultSelector) {
                    this._tryResultSelector(values);
                  } else {
                    this.destination.next(values.slice());
                  }
                }
              }
            }, {
              key: "_tryResultSelector",
              value: function _tryResultSelector(values) {
                var result;

                try {
                  result = this.resultSelector.apply(this, values);
                } catch (err) {
                  this.destination.error(err);
                  return;
                }

                this.destination.next(result);
              }
            }]);

            return CombineLatestSubscriber;
          }(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"]); //# sourceMappingURL=combineLatest.js.map

          /***/

        },

        /***/
        "HaSC":
        /*!**********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/skipWhile.js ***!
          \**********************************************************************************************/

        /*! exports provided: skipWhile */

        /***/
        function HaSC(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "skipWhile", function () {
            return skipWhile;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");

          function skipWhile(predicate) {
            return function (source) {
              return source.lift(new SkipWhileOperator(predicate));
            };
          }

          var SkipWhileOperator = /*#__PURE__*/function () {
            function SkipWhileOperator(predicate) {
              _classCallCheck(this, SkipWhileOperator);

              this.predicate = predicate;
            }

            _createClass(SkipWhileOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
              }
            }]);

            return SkipWhileOperator;
          }();

          var SkipWhileSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_17) {
            _inherits(SkipWhileSubscriber, _Subscriber__WEBPACK_17);

            var _super33 = _createSuper(SkipWhileSubscriber);

            function SkipWhileSubscriber(destination, predicate) {
              var _this33;

              _classCallCheck(this, SkipWhileSubscriber);

              _this33 = _super33.call(this, destination);
              _this33.predicate = predicate;
              _this33.skipping = true;
              _this33.index = 0;
              return _this33;
            }

            _createClass(SkipWhileSubscriber, [{
              key: "_next",
              value: function _next(value) {
                var destination = this.destination;

                if (this.skipping) {
                  this.tryCallPredicate(value);
                }

                if (!this.skipping) {
                  destination.next(value);
                }
              }
            }, {
              key: "tryCallPredicate",
              value: function tryCallPredicate(value) {
                try {
                  var result = this.predicate(value, this.index++);
                  this.skipping = Boolean(result);
                } catch (err) {
                  this.destination.error(err);
                }
              }
            }]);

            return SkipWhileSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=skipWhile.js.map

          /***/

        },

        /***/
        "HcRv":
        /*!**********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/skipUntil.js ***!
          \**********************************************************************************************/

        /*! exports provided: skipUntil */

        /***/
        function HcRv(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "skipUntil", function () {
            return skipUntil;
          });
          /* harmony import */


          var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../innerSubscribe */
          "uCWR");

          function skipUntil(notifier) {
            return function (source) {
              return source.lift(new SkipUntilOperator(notifier));
            };
          }

          var SkipUntilOperator = /*#__PURE__*/function () {
            function SkipUntilOperator(notifier) {
              _classCallCheck(this, SkipUntilOperator);

              this.notifier = notifier;
            }

            _createClass(SkipUntilOperator, [{
              key: "call",
              value: function call(destination, source) {
                return source.subscribe(new SkipUntilSubscriber(destination, this.notifier));
              }
            }]);

            return SkipUntilOperator;
          }();

          var SkipUntilSubscriber = /*#__PURE__*/function (_innerSubscribe__WEBP5) {
            _inherits(SkipUntilSubscriber, _innerSubscribe__WEBP5);

            var _super34 = _createSuper(SkipUntilSubscriber);

            function SkipUntilSubscriber(destination, notifier) {
              var _this34;

              _classCallCheck(this, SkipUntilSubscriber);

              _this34 = _super34.call(this, destination);
              _this34.hasValue = false;
              var innerSubscriber = new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleInnerSubscriber"](_assertThisInitialized(_this34));

              _this34.add(innerSubscriber);

              _this34.innerSubscription = innerSubscriber;
              var innerSubscription = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["innerSubscribe"])(notifier, innerSubscriber);

              if (innerSubscription !== innerSubscriber) {
                _this34.add(innerSubscription);

                _this34.innerSubscription = innerSubscription;
              }

              return _this34;
            }

            _createClass(SkipUntilSubscriber, [{
              key: "_next",
              value: function _next(value) {
                if (this.hasValue) {
                  _get(_getPrototypeOf(SkipUntilSubscriber.prototype), "_next", this).call(this, value);
                }
              }
            }, {
              key: "notifyNext",
              value: function notifyNext() {
                this.hasValue = true;

                if (this.innerSubscription) {
                  this.innerSubscription.unsubscribe();
                }
              }
            }, {
              key: "notifyComplete",
              value: function notifyComplete() {}
            }]);

            return SkipUntilSubscriber;
          }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleOuterSubscriber"]); //# sourceMappingURL=skipUntil.js.map

          /***/

        },

        /***/
        "HgnN":
        /*!*********************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/config.js ***!
          \*********************************************************************************/

        /*! exports provided: config */

        /***/
        function HgnN(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "config", function () {
            return config;
          });

          var _enable_super_gross_mode_that_will_cause_bad_things = false;
          var config = {
            Promise: undefined,

            set useDeprecatedSynchronousErrorHandling(value) {
              if (value) {
                var error = new Error();
                console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
              } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
                console.log('RxJS: Back to a better error behavior. Thank you. <3');
              }

              _enable_super_gross_mode_that_will_cause_bad_things = value;
            },

            get useDeprecatedSynchronousErrorHandling() {
              return _enable_super_gross_mode_that_will_cause_bad_things;
            }

          }; //# sourceMappingURL=config.js.map

          /***/
        },

        /***/
        "Hhmo":
        /*!************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/materialize.js ***!
          \************************************************************************************************/

        /*! exports provided: materialize */

        /***/
        function Hhmo(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "materialize", function () {
            return materialize;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");
          /* harmony import */


          var _Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../Notification */
          "ryP2");

          function materialize() {
            return function materializeOperatorFunction(source) {
              return source.lift(new MaterializeOperator());
            };
          }

          var MaterializeOperator = /*#__PURE__*/function () {
            function MaterializeOperator() {
              _classCallCheck(this, MaterializeOperator);
            }

            _createClass(MaterializeOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new MaterializeSubscriber(subscriber));
              }
            }]);

            return MaterializeOperator;
          }();

          var MaterializeSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_18) {
            _inherits(MaterializeSubscriber, _Subscriber__WEBPACK_18);

            var _super35 = _createSuper(MaterializeSubscriber);

            function MaterializeSubscriber(destination) {
              _classCallCheck(this, MaterializeSubscriber);

              return _super35.call(this, destination);
            }

            _createClass(MaterializeSubscriber, [{
              key: "_next",
              value: function _next(value) {
                this.destination.next(_Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createNext(value));
              }
            }, {
              key: "_error",
              value: function _error(err) {
                var destination = this.destination;
                destination.next(_Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createError(err));
                destination.complete();
              }
            }, {
              key: "_complete",
              value: function _complete() {
                var destination = this.destination;
                destination.next(_Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createComplete());
                destination.complete();
              }
            }]);

            return MaterializeSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=materialize.js.map

          /***/

        },

        /***/
        "Hk/K":
        /*!***********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/child/handleSynAckMessageFactory.js ***!
          \***********************************************************************************************/

        /*! exports provided: default */

        /***/
        function HkK(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony import */


          var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../enums */
          "Rj9D");
          /* harmony import */


          var _connectCallReceiver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../connectCallReceiver */
          "JMyL");
          /* harmony import */


          var _connectCallSender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../connectCallSender */
          "nPMJ");
          /**
           * Handles a SYN-ACK handshake message.
           */

          /* harmony default export */


          __webpack_exports__["default"] = function (parentOrigin, methods, destructor, log) {
            var destroy = destructor.destroy,
                onDestroy = destructor.onDestroy;
            return function (event) {
              var originQualifies = parentOrigin instanceof RegExp ? parentOrigin.test(event.origin) : parentOrigin === '*' || parentOrigin === event.origin;

              if (!originQualifies) {
                log("Child: Handshake - Received SYN-ACK from origin ".concat(event.origin, " which did not match expected origin ").concat(parentOrigin));
                return;
              }

              log('Child: Handshake - Received SYN-ACK, responding with ACK'); // If event.origin is "null", the remote protocol is file: or data: and we
              // must post messages with "*" as targetOrigin when sending messages.
              // https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage#Using_window.postMessage_in_extensions

              var originForSending = event.origin === 'null' ? '*' : event.origin;
              var ackMessage = {
                penpal: _enums__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Ack,
                methodNames: Object.keys(methods)
              };
              window.parent.postMessage(ackMessage, originForSending);
              var info = {
                localName: 'Child',
                local: window,
                remote: window.parent,
                originForSending: originForSending,
                originForReceiving: event.origin
              };
              var destroyCallReceiver = Object(_connectCallReceiver__WEBPACK_IMPORTED_MODULE_1__["default"])(info, methods, log);
              onDestroy(destroyCallReceiver);
              var callSender = {};
              var destroyCallSender = Object(_connectCallSender__WEBPACK_IMPORTED_MODULE_2__["default"])(callSender, info, event.data.methodNames, destroy, log);
              onDestroy(destroyCallSender);
              return callSender;
            };
          };
          /***/

        },

        /***/
        "IF3+":
        /*!*******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/buffer.js ***!
          \*******************************************************************************************/

        /*! exports provided: buffer */

        /***/
        function IF3(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "buffer", function () {
            return buffer;
          });
          /* harmony import */


          var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../innerSubscribe */
          "uCWR");

          function buffer(closingNotifier) {
            return function bufferOperatorFunction(source) {
              return source.lift(new BufferOperator(closingNotifier));
            };
          }

          var BufferOperator = /*#__PURE__*/function () {
            function BufferOperator(closingNotifier) {
              _classCallCheck(this, BufferOperator);

              this.closingNotifier = closingNotifier;
            }

            _createClass(BufferOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
              }
            }]);

            return BufferOperator;
          }();

          var BufferSubscriber = /*#__PURE__*/function (_innerSubscribe__WEBP6) {
            _inherits(BufferSubscriber, _innerSubscribe__WEBP6);

            var _super36 = _createSuper(BufferSubscriber);

            function BufferSubscriber(destination, closingNotifier) {
              var _this35;

              _classCallCheck(this, BufferSubscriber);

              _this35 = _super36.call(this, destination);
              _this35.buffer = [];

              _this35.add(Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["innerSubscribe"])(closingNotifier, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleInnerSubscriber"](_assertThisInitialized(_this35))));

              return _this35;
            }

            _createClass(BufferSubscriber, [{
              key: "_next",
              value: function _next(value) {
                this.buffer.push(value);
              }
            }, {
              key: "notifyNext",
              value: function notifyNext() {
                var buffer = this.buffer;
                this.buffer = [];
                this.destination.next(buffer);
              }
            }]);

            return BufferSubscriber;
          }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleOuterSubscriber"]); //# sourceMappingURL=buffer.js.map

          /***/

        },

        /***/
        "IIln":
        /*!**************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/parent/validateIframeHasSrcOrSrcDoc.js ***!
          \**************************************************************************************************/

        /*! exports provided: default */

        /***/
        function IIln(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony import */


          var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../enums */
          "Rj9D");
          /* harmony default export */


          __webpack_exports__["default"] = function (iframe) {
            if (!iframe.src && !iframe.srcdoc) {
              var error = new Error('Iframe must have src or srcdoc property defined.');
              error.code = _enums__WEBPACK_IMPORTED_MODULE_0__["ErrorCode"].NoIframeSrc;
              throw error;
            }
          };
          /***/

        },

        /***/
        "IJgj":
        /*!******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/isFunction.js ***!
          \******************************************************************************************/

        /*! exports provided: isFunction */

        /***/
        function IJgj(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "isFunction", function () {
            return isFunction;
          });

          function isFunction(x) {
            return typeof x === 'function';
          } //# sourceMappingURL=isFunction.js.map

          /***/

        },

        /***/
        "IdLP":
        /*!*************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/Observable.js ***!
          \*************************************************************************************/

        /*! exports provided: Observable */

        /***/
        function IdLP(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "Observable", function () {
            return Observable;
          });
          /* harmony import */


          var _util_canReportError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./util/canReportError */
          "IoLb");
          /* harmony import */


          var _util_toSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./util/toSubscriber */
          "qNSz");
          /* harmony import */


          var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./symbol/observable */
          "qEfY");
          /* harmony import */


          var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./util/pipe */
          "Ti3e");
          /* harmony import */


          var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./config */
          "HgnN");

          var Observable = /*#__PURE__*/function () {
            function Observable(subscribe) {
              _classCallCheck(this, Observable);

              this._isScalar = false;

              if (subscribe) {
                this._subscribe = subscribe;
              }
            }

            _createClass(Observable, [{
              key: "lift",
              value: function lift(operator) {
                var observable = new Observable();
                observable.source = this;
                observable.operator = operator;
                return observable;
              }
            }, {
              key: "subscribe",
              value: function subscribe(observerOrNext, error, complete) {
                var operator = this.operator;
                var sink = Object(_util_toSubscriber__WEBPACK_IMPORTED_MODULE_1__["toSubscriber"])(observerOrNext, error, complete);

                if (operator) {
                  sink.add(operator.call(sink, this.source));
                } else {
                  sink.add(this.source || _config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
                }

                if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
                  if (sink.syncErrorThrowable) {
                    sink.syncErrorThrowable = false;

                    if (sink.syncErrorThrown) {
                      throw sink.syncErrorValue;
                    }
                  }
                }

                return sink;
              }
            }, {
              key: "_trySubscribe",
              value: function _trySubscribe(sink) {
                try {
                  return this._subscribe(sink);
                } catch (err) {
                  if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
                    sink.syncErrorThrown = true;
                    sink.syncErrorValue = err;
                  }

                  if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_0__["canReportError"])(sink)) {
                    sink.error(err);
                  } else {
                    console.warn(err);
                  }
                }
              }
            }, {
              key: "forEach",
              value: function forEach(next, promiseCtor) {
                var _this36 = this;

                promiseCtor = getPromiseCtor(promiseCtor);
                return new promiseCtor(function (resolve, reject) {
                  var subscription;
                  subscription = _this36.subscribe(function (value) {
                    try {
                      next(value);
                    } catch (err) {
                      reject(err);

                      if (subscription) {
                        subscription.unsubscribe();
                      }
                    }
                  }, reject, resolve);
                });
              }
            }, {
              key: "_subscribe",
              value: function _subscribe(subscriber) {
                var source = this.source;
                return source && source.subscribe(subscriber);
              }
            }, {
              key: _symbol_observable__WEBPACK_IMPORTED_MODULE_2__["observable"],
              value: function value() {
                return this;
              }
            }, {
              key: "pipe",
              value: function pipe() {
                for (var _len5 = arguments.length, operations = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                  operations[_key5] = arguments[_key5];
                }

                if (operations.length === 0) {
                  return this;
                }

                return Object(_util_pipe__WEBPACK_IMPORTED_MODULE_3__["pipeFromArray"])(operations)(this);
              }
            }, {
              key: "toPromise",
              value: function toPromise(promiseCtor) {
                var _this37 = this;

                promiseCtor = getPromiseCtor(promiseCtor);
                return new promiseCtor(function (resolve, reject) {
                  var value;

                  _this37.subscribe(function (x) {
                    return value = x;
                  }, function (err) {
                    return reject(err);
                  }, function () {
                    return resolve(value);
                  });
                });
              }
            }]);

            return Observable;
          }();

          Observable.create = function (subscribe) {
            return new Observable(subscribe);
          };

          function getPromiseCtor(promiseCtor) {
            if (!promiseCtor) {
              promiseCtor = _config__WEBPACK_IMPORTED_MODULE_4__["config"].Promise || Promise;
            }

            if (!promiseCtor) {
              throw new Error('no Promise impl found');
            }

            return promiseCtor;
          } //# sourceMappingURL=Observable.js.map

          /***/

        },

        /***/
        "IeS+":
        /*!*********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/throttle.js ***!
          \*********************************************************************************************/

        /*! exports provided: defaultThrottleConfig, throttle */

        /***/
        function IeS(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "defaultThrottleConfig", function () {
            return defaultThrottleConfig;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "throttle", function () {
            return throttle;
          });
          /* harmony import */


          var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../innerSubscribe */
          "uCWR");

          var defaultThrottleConfig = {
            leading: true,
            trailing: false
          };

          function throttle(durationSelector) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultThrottleConfig;
            return function (source) {
              return source.lift(new ThrottleOperator(durationSelector, !!config.leading, !!config.trailing));
            };
          }

          var ThrottleOperator = /*#__PURE__*/function () {
            function ThrottleOperator(durationSelector, leading, trailing) {
              _classCallCheck(this, ThrottleOperator);

              this.durationSelector = durationSelector;
              this.leading = leading;
              this.trailing = trailing;
            }

            _createClass(ThrottleOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new ThrottleSubscriber(subscriber, this.durationSelector, this.leading, this.trailing));
              }
            }]);

            return ThrottleOperator;
          }();

          var ThrottleSubscriber = /*#__PURE__*/function (_innerSubscribe__WEBP7) {
            _inherits(ThrottleSubscriber, _innerSubscribe__WEBP7);

            var _super37 = _createSuper(ThrottleSubscriber);

            function ThrottleSubscriber(destination, durationSelector, _leading, _trailing) {
              var _this38;

              _classCallCheck(this, ThrottleSubscriber);

              _this38 = _super37.call(this, destination);
              _this38.destination = destination;
              _this38.durationSelector = durationSelector;
              _this38._leading = _leading;
              _this38._trailing = _trailing;
              _this38._hasValue = false;
              return _this38;
            }

            _createClass(ThrottleSubscriber, [{
              key: "_next",
              value: function _next(value) {
                this._hasValue = true;
                this._sendValue = value;

                if (!this._throttled) {
                  if (this._leading) {
                    this.send();
                  } else {
                    this.throttle(value);
                  }
                }
              }
            }, {
              key: "send",
              value: function send() {
                var _hasValue = this._hasValue,
                    _sendValue = this._sendValue;

                if (_hasValue) {
                  this.destination.next(_sendValue);
                  this.throttle(_sendValue);
                }

                this._hasValue = false;
                this._sendValue = undefined;
              }
            }, {
              key: "throttle",
              value: function throttle(value) {
                var duration = this.tryDurationSelector(value);

                if (!!duration) {
                  this.add(this._throttled = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["innerSubscribe"])(duration, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleInnerSubscriber"](this)));
                }
              }
            }, {
              key: "tryDurationSelector",
              value: function tryDurationSelector(value) {
                try {
                  return this.durationSelector(value);
                } catch (err) {
                  this.destination.error(err);
                  return null;
                }
              }
            }, {
              key: "throttlingDone",
              value: function throttlingDone() {
                var _throttled = this._throttled,
                    _trailing = this._trailing;

                if (_throttled) {
                  _throttled.unsubscribe();
                }

                this._throttled = undefined;

                if (_trailing) {
                  this.send();
                }
              }
            }, {
              key: "notifyNext",
              value: function notifyNext() {
                this.throttlingDone();
              }
            }, {
              key: "notifyComplete",
              value: function notifyComplete() {
                this.throttlingDone();
              }
            }]);

            return ThrottleSubscriber;
          }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleOuterSubscriber"]); //# sourceMappingURL=throttle.js.map

          /***/

        },

        /***/
        "IoLb":
        /*!**********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/canReportError.js ***!
          \**********************************************************************************************/

        /*! exports provided: canReportError */

        /***/
        function IoLb(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "canReportError", function () {
            return canReportError;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");

          function canReportError(observer) {
            while (observer) {
              var _observer = observer,
                  closed = _observer.closed,
                  destination = _observer.destination,
                  isStopped = _observer.isStopped;

              if (closed || isStopped) {
                return false;
              } else if (destination && destination instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]) {
                observer = destination;
              } else {
                observer = null;
              }
            }

            return true;
          } //# sourceMappingURL=canReportError.js.map

          /***/

        },

        /***/
        "J+dc":
        /*!*****************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/take.js ***!
          \*****************************************************************************************/

        /*! exports provided: take */

        /***/
        function JDc(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "take", function () {
            return take;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");
          /* harmony import */


          var _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../util/ArgumentOutOfRangeError */
          "PNff");
          /* harmony import */


          var _observable_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../observable/empty */
          "6Oco");

          function take(count) {
            return function (source) {
              if (count === 0) {
                return Object(_observable_empty__WEBPACK_IMPORTED_MODULE_2__["empty"])();
              } else {
                return source.lift(new TakeOperator(count));
              }
            };
          }

          var TakeOperator = /*#__PURE__*/function () {
            function TakeOperator(total) {
              _classCallCheck(this, TakeOperator);

              this.total = total;

              if (this.total < 0) {
                throw new _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_1__["ArgumentOutOfRangeError"]();
              }
            }

            _createClass(TakeOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new TakeSubscriber(subscriber, this.total));
              }
            }]);

            return TakeOperator;
          }();

          var TakeSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_19) {
            _inherits(TakeSubscriber, _Subscriber__WEBPACK_19);

            var _super38 = _createSuper(TakeSubscriber);

            function TakeSubscriber(destination, total) {
              var _this39;

              _classCallCheck(this, TakeSubscriber);

              _this39 = _super38.call(this, destination);
              _this39.total = total;
              _this39.count = 0;
              return _this39;
            }

            _createClass(TakeSubscriber, [{
              key: "_next",
              value: function _next(value) {
                var total = this.total;
                var count = ++this.count;

                if (count <= total) {
                  this.destination.next(value);

                  if (count === total) {
                    this.destination.complete();
                    this.unsubscribe();
                  }
                }
              }
            }]);

            return TakeSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=take.js.map

          /***/

        },

        /***/
        "JHA6":
        /*!**********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/multicast.js ***!
          \**********************************************************************************************/

        /*! exports provided: multicast, MulticastOperator */

        /***/
        function JHA6(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "multicast", function () {
            return multicast;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "MulticastOperator", function () {
            return MulticastOperator;
          });
          /* harmony import */


          var _observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../observable/ConnectableObservable */
          "0pus");

          function multicast(subjectOrSubjectFactory, selector) {
            return function multicastOperatorFunction(source) {
              var subjectFactory;

              if (typeof subjectOrSubjectFactory === 'function') {
                subjectFactory = subjectOrSubjectFactory;
              } else {
                subjectFactory = function subjectFactory() {
                  return subjectOrSubjectFactory;
                };
              }

              if (typeof selector === 'function') {
                return source.lift(new MulticastOperator(subjectFactory, selector));
              }

              var connectable = Object.create(source, _observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_0__["connectableObservableDescriptor"]);
              connectable.source = source;
              connectable.subjectFactory = subjectFactory;
              return connectable;
            };
          }

          var MulticastOperator = /*#__PURE__*/function () {
            function MulticastOperator(subjectFactory, selector) {
              _classCallCheck(this, MulticastOperator);

              this.subjectFactory = subjectFactory;
              this.selector = selector;
            }

            _createClass(MulticastOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                var selector = this.selector;
                var subject = this.subjectFactory();
                var subscription = selector(subject).subscribe(subscriber);
                subscription.add(source.subscribe(subject));
                return subscription;
              }
            }]);

            return MulticastOperator;
          }(); //# sourceMappingURL=multicast.js.map

          /***/

        },

        /***/
        "JMyL":
        /*!**********************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/connectCallReceiver.js ***!
          \**********************************************************************************/

        /*! exports provided: default */

        /***/
        function JMyL(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony import */


          var _errorSerialization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./errorSerialization */
          "Uxnb");
          /* harmony import */


          var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./enums */
          "Rj9D");
          /**
           * Listens for "call" messages coming from the remote, executes the corresponding method, and
           * responds with the return value.
           */

          /* harmony default export */


          __webpack_exports__["default"] = function (info, methods, log) {
            var localName = info.localName,
                local = info.local,
                remote = info.remote,
                originForSending = info.originForSending,
                originForReceiving = info.originForReceiving;
            var destroyed = false;

            var handleMessageEvent = function handleMessageEvent(event) {
              if (event.source !== remote || event.data.penpal !== _enums__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Call) {
                return;
              }

              if (event.origin !== originForReceiving) {
                log("".concat(localName, " received message from origin ").concat(event.origin, " which did not match expected origin ").concat(originForReceiving));
                return;
              }

              var callMessage = event.data;
              var methodName = callMessage.methodName,
                  args = callMessage.args,
                  id = callMessage.id;
              log("".concat(localName, ": Received ").concat(methodName, "() call"));

              var createPromiseHandler = function createPromiseHandler(resolution) {
                return function (returnValue) {
                  log("".concat(localName, ": Sending ").concat(methodName, "() reply"));

                  if (destroyed) {
                    // It's possible to throw an error here, but it would need to be thrown asynchronously
                    // and would only be catchable using window.onerror. This is because the consumer
                    // is merely returning a value from their method and not calling any function
                    // that they could wrap in a try-catch. Even if the consumer were to catch the error,
                    // the value of doing so is questionable. Instead, we'll just log a message.
                    log("".concat(localName, ": Unable to send ").concat(methodName, "() reply due to destroyed connection"));
                    return;
                  }

                  var message = {
                    penpal: _enums__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Reply,
                    id: id,
                    resolution: resolution,
                    returnValue: returnValue
                  };

                  if (resolution === _enums__WEBPACK_IMPORTED_MODULE_1__["Resolution"].Rejected && returnValue instanceof Error) {
                    message.returnValue = Object(_errorSerialization__WEBPACK_IMPORTED_MODULE_0__["serializeError"])(returnValue);
                    message.returnValueIsError = true;
                  }

                  try {
                    remote.postMessage(message, originForSending);
                  } catch (err) {
                    // If a consumer attempts to send an object that's not cloneable (e.g., window),
                    // we want to ensure the receiver's promise gets rejected.
                    if (err.name === _enums__WEBPACK_IMPORTED_MODULE_1__["NativeErrorName"].DataCloneError) {
                      var errorReplyMessage = {
                        penpal: _enums__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Reply,
                        id: id,
                        resolution: _enums__WEBPACK_IMPORTED_MODULE_1__["Resolution"].Rejected,
                        returnValue: Object(_errorSerialization__WEBPACK_IMPORTED_MODULE_0__["serializeError"])(err),
                        returnValueIsError: true
                      };
                      remote.postMessage(errorReplyMessage, originForSending);
                    }

                    throw err;
                  }
                };
              };

              new Promise(function (resolve) {
                return resolve(methods[methodName].apply(methods, args));
              }).then(createPromiseHandler(_enums__WEBPACK_IMPORTED_MODULE_1__["Resolution"].Fulfilled), createPromiseHandler(_enums__WEBPACK_IMPORTED_MODULE_1__["Resolution"].Rejected));
            };

            local.addEventListener(_enums__WEBPACK_IMPORTED_MODULE_1__["NativeEventType"].Message, handleMessageEvent);
            return function () {
              destroyed = true;
              local.removeEventListener(_enums__WEBPACK_IMPORTED_MODULE_1__["NativeEventType"].Message, handleMessageEvent);
            };
          };
          /***/

        },

        /***/
        "JnPT":
        /*!*******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/window.js ***!
          \*******************************************************************************************/

        /*! exports provided: window */

        /***/
        function JnPT(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "window", function () {
            return window;
          });
          /* harmony import */


          var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subject */
          "ZTXN");
          /* harmony import */


          var _innerSubscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../innerSubscribe */
          "uCWR");

          function window(windowBoundaries) {
            return function windowOperatorFunction(source) {
              return source.lift(new WindowOperator(windowBoundaries));
            };
          }

          var WindowOperator = /*#__PURE__*/function () {
            function WindowOperator(windowBoundaries) {
              _classCallCheck(this, WindowOperator);

              this.windowBoundaries = windowBoundaries;
            }

            _createClass(WindowOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                var windowSubscriber = new WindowSubscriber(subscriber);
                var sourceSubscription = source.subscribe(windowSubscriber);

                if (!sourceSubscription.closed) {
                  windowSubscriber.add(Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_1__["innerSubscribe"])(this.windowBoundaries, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_1__["SimpleInnerSubscriber"](windowSubscriber)));
                }

                return sourceSubscription;
              }
            }]);

            return WindowOperator;
          }();

          var WindowSubscriber = /*#__PURE__*/function (_innerSubscribe__WEBP8) {
            _inherits(WindowSubscriber, _innerSubscribe__WEBP8);

            var _super39 = _createSuper(WindowSubscriber);

            function WindowSubscriber(destination) {
              var _this40;

              _classCallCheck(this, WindowSubscriber);

              _this40 = _super39.call(this, destination);
              _this40.window = new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
              destination.next(_this40.window);
              return _this40;
            }

            _createClass(WindowSubscriber, [{
              key: "notifyNext",
              value: function notifyNext() {
                this.openWindow();
              }
            }, {
              key: "notifyError",
              value: function notifyError(error) {
                this._error(error);
              }
            }, {
              key: "notifyComplete",
              value: function notifyComplete() {
                this._complete();
              }
            }, {
              key: "_next",
              value: function _next(value) {
                this.window.next(value);
              }
            }, {
              key: "_error",
              value: function _error(err) {
                this.window.error(err);
                this.destination.error(err);
              }
            }, {
              key: "_complete",
              value: function _complete() {
                this.window.complete();
                this.destination.complete();
              }
            }, {
              key: "_unsubscribe",
              value: function _unsubscribe() {
                this.window = null;
              }
            }, {
              key: "openWindow",
              value: function openWindow() {
                var prevWindow = this.window;

                if (prevWindow) {
                  prevWindow.complete();
                }

                var destination = this.destination;
                var newWindow = this.window = new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
                destination.next(newWindow);
              }
            }]);

            return WindowSubscriber;
          }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_1__["SimpleOuterSubscriber"]); //# sourceMappingURL=window.js.map

          /***/

        },

        /***/
        "K3+B":
        /*!*************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/windowToggle.js ***!
          \*************************************************************************************************/

        /*! exports provided: windowToggle */

        /***/
        function K3B(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "windowToggle", function () {
            return windowToggle;
          });
          /* harmony import */


          var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subject */
          "ZTXN");
          /* harmony import */


          var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../Subscription */
          "bwdy");
          /* harmony import */


          var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../OuterSubscriber */
          "pBDD");
          /* harmony import */


          var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../util/subscribeToResult */
          "mW0F");

          function windowToggle(openings, closingSelector) {
            return function (source) {
              return source.lift(new WindowToggleOperator(openings, closingSelector));
            };
          }

          var WindowToggleOperator = /*#__PURE__*/function () {
            function WindowToggleOperator(openings, closingSelector) {
              _classCallCheck(this, WindowToggleOperator);

              this.openings = openings;
              this.closingSelector = closingSelector;
            }

            _createClass(WindowToggleOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector));
              }
            }]);

            return WindowToggleOperator;
          }();

          var WindowToggleSubscriber = /*#__PURE__*/function (_OuterSubscriber__WEB3) {
            _inherits(WindowToggleSubscriber, _OuterSubscriber__WEB3);

            var _super40 = _createSuper(WindowToggleSubscriber);

            function WindowToggleSubscriber(destination, openings, closingSelector) {
              var _this41;

              _classCallCheck(this, WindowToggleSubscriber);

              _this41 = _super40.call(this, destination);
              _this41.openings = openings;
              _this41.closingSelector = closingSelector;
              _this41.contexts = [];

              _this41.add(_this41.openSubscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__["subscribeToResult"])(_assertThisInitialized(_this41), openings, openings));

              return _this41;
            }

            _createClass(WindowToggleSubscriber, [{
              key: "_next",
              value: function _next(value) {
                var contexts = this.contexts;

                if (contexts) {
                  var len = contexts.length;

                  for (var i = 0; i < len; i++) {
                    contexts[i].window.next(value);
                  }
                }
              }
            }, {
              key: "_error",
              value: function _error(err) {
                var contexts = this.contexts;
                this.contexts = null;

                if (contexts) {
                  var len = contexts.length;
                  var index = -1;

                  while (++index < len) {
                    var context = contexts[index];
                    context.window.error(err);
                    context.subscription.unsubscribe();
                  }
                }

                _get(_getPrototypeOf(WindowToggleSubscriber.prototype), "_error", this).call(this, err);
              }
            }, {
              key: "_complete",
              value: function _complete() {
                var contexts = this.contexts;
                this.contexts = null;

                if (contexts) {
                  var len = contexts.length;
                  var index = -1;

                  while (++index < len) {
                    var context = contexts[index];
                    context.window.complete();
                    context.subscription.unsubscribe();
                  }
                }

                _get(_getPrototypeOf(WindowToggleSubscriber.prototype), "_complete", this).call(this);
              }
            }, {
              key: "_unsubscribe",
              value: function _unsubscribe() {
                var contexts = this.contexts;
                this.contexts = null;

                if (contexts) {
                  var len = contexts.length;
                  var index = -1;

                  while (++index < len) {
                    var context = contexts[index];
                    context.window.unsubscribe();
                    context.subscription.unsubscribe();
                  }
                }
              }
            }, {
              key: "notifyNext",
              value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                if (outerValue === this.openings) {
                  var closingNotifier;

                  try {
                    var closingSelector = this.closingSelector;
                    closingNotifier = closingSelector(innerValue);
                  } catch (e) {
                    return this.error(e);
                  }

                  var _window3 = new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();

                  var subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
                  var context = {
                    window: _window3,
                    subscription: subscription
                  };
                  this.contexts.push(context);
                  var innerSubscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__["subscribeToResult"])(this, closingNotifier, context);

                  if (innerSubscription.closed) {
                    this.closeWindow(this.contexts.length - 1);
                  } else {
                    innerSubscription.context = context;
                    subscription.add(innerSubscription);
                  }

                  this.destination.next(_window3);
                } else {
                  this.closeWindow(this.contexts.indexOf(outerValue));
                }
              }
            }, {
              key: "notifyError",
              value: function notifyError(err) {
                this.error(err);
              }
            }, {
              key: "notifyComplete",
              value: function notifyComplete(inner) {
                if (inner !== this.openSubscription) {
                  this.closeWindow(this.contexts.indexOf(inner.context));
                }
              }
            }, {
              key: "closeWindow",
              value: function closeWindow(index) {
                if (index === -1) {
                  return;
                }

                var contexts = this.contexts;
                var context = contexts[index];
                var window = context.window,
                    subscription = context.subscription;
                contexts.splice(index, 1);
                window.complete();
                subscription.unsubscribe();
              }
            }]);

            return WindowToggleSubscriber;
          }(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"]); //# sourceMappingURL=windowToggle.js.map

          /***/

        },

        /***/
        "KRZI":
        /*!*****************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/isNumeric.js ***!
          \*****************************************************************************************/

        /*! exports provided: isNumeric */

        /***/
        function KRZI(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "isNumeric", function () {
            return isNumeric;
          });
          /* harmony import */


          var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./isArray */
          "FU6l");

          function isNumeric(val) {
            return !Object(_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(val) && val - parseFloat(val) + 1 >= 0;
          } //# sourceMappingURL=isNumeric.js.map

          /***/

        },

        /***/
        "L7US":
        /*!*****************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/Immediate.js ***!
          \*****************************************************************************************/

        /*! exports provided: Immediate, TestTools */

        /***/
        function L7US(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "Immediate", function () {
            return Immediate;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "TestTools", function () {
            return TestTools;
          });

          var nextHandle = 1;

          var RESOLVED = function () {
            return Promise.resolve();
          }();

          var activeHandles = {};

          function findAndClearHandle(handle) {
            if (handle in activeHandles) {
              delete activeHandles[handle];
              return true;
            }

            return false;
          }

          var Immediate = {
            setImmediate: function setImmediate(cb) {
              var handle = nextHandle++;
              activeHandles[handle] = true;
              RESOLVED.then(function () {
                return findAndClearHandle(handle) && cb();
              });
              return handle;
            },
            clearImmediate: function clearImmediate(handle) {
              findAndClearHandle(handle);
            }
          };
          var TestTools = {
            pending: function pending() {
              return Object.keys(activeHandles).length;
            }
          }; //# sourceMappingURL=Immediate.js.map

          /***/
        },

        /***/
        "Lrfq":
        /*!**************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/publishReplay.js ***!
          \**************************************************************************************************/

        /*! exports provided: publishReplay */

        /***/
        function Lrfq(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "publishReplay", function () {
            return publishReplay;
          });
          /* harmony import */


          var _ReplaySubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../ReplaySubject */
          "QQZH");
          /* harmony import */


          var _multicast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./multicast */
          "JHA6");

          function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
            if (selectorOrScheduler && typeof selectorOrScheduler !== 'function') {
              scheduler = selectorOrScheduler;
            }

            var selector = typeof selectorOrScheduler === 'function' ? selectorOrScheduler : undefined;
            var subject = new _ReplaySubject__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](bufferSize, windowTime, scheduler);
            return function (source) {
              return Object(_multicast__WEBPACK_IMPORTED_MODULE_1__["multicast"])(function () {
                return subject;
              }, selector)(source);
            };
          } //# sourceMappingURL=publishReplay.js.map

          /***/

        },

        /***/
        "LyCu":
        /*!*********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/parent/handleAckMessageFactory.js ***!
          \*********************************************************************************************/

        /*! exports provided: default */

        /***/
        function LyCu(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony import */


          var _connectCallReceiver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../connectCallReceiver */
          "JMyL");
          /* harmony import */


          var _connectCallSender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../connectCallSender */
          "nPMJ");
          /**
           * Handles an ACK handshake message.
           */

          /* harmony default export */


          __webpack_exports__["default"] = function (methods, childOrigin, originForSending, destructor, log) {
            var destroy = destructor.destroy,
                onDestroy = destructor.onDestroy;
            var destroyCallReceiver;
            var receiverMethodNames; // We resolve the promise with the call sender. If the child reconnects
            // (for example, after refreshing or navigating to another page that
            // uses Penpal, we'll update the call sender with methods that match the
            // latest provided by the child.

            var callSender = {};
            return function (event) {
              if (event.origin !== childOrigin) {
                log("Parent: Handshake - Received ACK message from origin ".concat(event.origin, " which did not match expected origin ").concat(childOrigin));
                return;
              }

              log('Parent: Handshake - Received ACK');
              var info = {
                localName: 'Parent',
                local: window,
                remote: event.source,
                originForSending: originForSending,
                originForReceiving: childOrigin
              }; // If the child reconnected, we need to destroy the prior call receiver
              // before setting up a new one.

              if (destroyCallReceiver) {
                destroyCallReceiver();
              }

              destroyCallReceiver = Object(_connectCallReceiver__WEBPACK_IMPORTED_MODULE_0__["default"])(info, methods, log);
              onDestroy(destroyCallReceiver); // If the child reconnected, we need to remove the methods from the
              // previous call receiver off the sender.

              if (receiverMethodNames) {
                receiverMethodNames.forEach(function (receiverMethodName) {
                  delete callSender[receiverMethodName];
                });
              }

              receiverMethodNames = event.data.methodNames;
              var destroyCallSender = Object(_connectCallSender__WEBPACK_IMPORTED_MODULE_1__["default"])(callSender, info, receiverMethodNames, destroy, log);
              onDestroy(destroyCallSender);
              return callSender;
            };
          };
          /***/

        },

        /***/
        "MiDb":
        /*!*******************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/ObjectUnsubscribedError.js ***!
          \*******************************************************************************************************/

        /*! exports provided: ObjectUnsubscribedError */

        /***/
        function MiDb(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function () {
            return ObjectUnsubscribedError;
          });

          var ObjectUnsubscribedErrorImpl = function () {
            function ObjectUnsubscribedErrorImpl() {
              Error.call(this);
              this.message = 'object unsubscribed';
              this.name = 'ObjectUnsubscribedError';
              return this;
            }

            ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
            return ObjectUnsubscribedErrorImpl;
          }();

          var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl; //# sourceMappingURL=ObjectUnsubscribedError.js.map

          /***/
        },

        /***/
        "Ohay":
        /*!*********************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/distinctUntilChanged.js ***!
          \*********************************************************************************************************/

        /*! exports provided: distinctUntilChanged */

        /***/
        function Ohay(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "distinctUntilChanged", function () {
            return distinctUntilChanged;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");

          function distinctUntilChanged(compare, keySelector) {
            return function (source) {
              return source.lift(new DistinctUntilChangedOperator(compare, keySelector));
            };
          }

          var DistinctUntilChangedOperator = /*#__PURE__*/function () {
            function DistinctUntilChangedOperator(compare, keySelector) {
              _classCallCheck(this, DistinctUntilChangedOperator);

              this.compare = compare;
              this.keySelector = keySelector;
            }

            _createClass(DistinctUntilChangedOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
              }
            }]);

            return DistinctUntilChangedOperator;
          }();

          var DistinctUntilChangedSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_20) {
            _inherits(DistinctUntilChangedSubscriber, _Subscriber__WEBPACK_20);

            var _super41 = _createSuper(DistinctUntilChangedSubscriber);

            function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
              var _this42;

              _classCallCheck(this, DistinctUntilChangedSubscriber);

              _this42 = _super41.call(this, destination);
              _this42.keySelector = keySelector;
              _this42.hasKey = false;

              if (typeof compare === 'function') {
                _this42.compare = compare;
              }

              return _this42;
            }

            _createClass(DistinctUntilChangedSubscriber, [{
              key: "compare",
              value: function compare(x, y) {
                return x === y;
              }
            }, {
              key: "_next",
              value: function _next(value) {
                var key;

                try {
                  var keySelector = this.keySelector;
                  key = keySelector ? keySelector(value) : value;
                } catch (err) {
                  return this.destination.error(err);
                }

                var result = false;

                if (this.hasKey) {
                  try {
                    var compare = this.compare;
                    result = compare(this.key, key);
                  } catch (err) {
                    return this.destination.error(err);
                  }
                } else {
                  this.hasKey = true;
                }

                if (!result) {
                  this.key = key;
                  this.destination.next(value);
                }
              }
            }]);

            return DistinctUntilChangedSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=distinctUntilChanged.js.map

          /***/

        },

        /***/
        "On4S":
        /*!******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/isIterable.js ***!
          \******************************************************************************************/

        /*! exports provided: isIterable */

        /***/
        function On4S(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "isIterable", function () {
            return isIterable;
          });
          /* harmony import */


          var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../symbol/iterator */
          "sWLk");

          function isIterable(input) {
            return input && typeof input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__["iterator"]] === 'function';
          } //# sourceMappingURL=isIterable.js.map

          /***/

        },

        /***/
        "PKqw":
        /*!***********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/repeatWhen.js ***!
          \***********************************************************************************************/

        /*! exports provided: repeatWhen */

        /***/
        function PKqw(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "repeatWhen", function () {
            return repeatWhen;
          });
          /* harmony import */


          var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subject */
          "ZTXN");
          /* harmony import */


          var _innerSubscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../innerSubscribe */
          "uCWR");

          function repeatWhen(notifier) {
            return function (source) {
              return source.lift(new RepeatWhenOperator(notifier));
            };
          }

          var RepeatWhenOperator = /*#__PURE__*/function () {
            function RepeatWhenOperator(notifier) {
              _classCallCheck(this, RepeatWhenOperator);

              this.notifier = notifier;
            }

            _createClass(RepeatWhenOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new RepeatWhenSubscriber(subscriber, this.notifier, source));
              }
            }]);

            return RepeatWhenOperator;
          }();

          var RepeatWhenSubscriber = /*#__PURE__*/function (_innerSubscribe__WEBP9) {
            _inherits(RepeatWhenSubscriber, _innerSubscribe__WEBP9);

            var _super42 = _createSuper(RepeatWhenSubscriber);

            function RepeatWhenSubscriber(destination, notifier, source) {
              var _this43;

              _classCallCheck(this, RepeatWhenSubscriber);

              _this43 = _super42.call(this, destination);
              _this43.notifier = notifier;
              _this43.source = source;
              _this43.sourceIsBeingSubscribedTo = true;
              return _this43;
            }

            _createClass(RepeatWhenSubscriber, [{
              key: "notifyNext",
              value: function notifyNext() {
                this.sourceIsBeingSubscribedTo = true;
                this.source.subscribe(this);
              }
            }, {
              key: "notifyComplete",
              value: function notifyComplete() {
                if (this.sourceIsBeingSubscribedTo === false) {
                  return _get(_getPrototypeOf(RepeatWhenSubscriber.prototype), "complete", this).call(this);
                }
              }
            }, {
              key: "complete",
              value: function complete() {
                this.sourceIsBeingSubscribedTo = false;

                if (!this.isStopped) {
                  if (!this.retries) {
                    this.subscribeToRetries();
                  }

                  if (!this.retriesSubscription || this.retriesSubscription.closed) {
                    return _get(_getPrototypeOf(RepeatWhenSubscriber.prototype), "complete", this).call(this);
                  }

                  this._unsubscribeAndRecycle();

                  this.notifications.next(undefined);
                }
              }
            }, {
              key: "_unsubscribe",
              value: function _unsubscribe() {
                var notifications = this.notifications,
                    retriesSubscription = this.retriesSubscription;

                if (notifications) {
                  notifications.unsubscribe();
                  this.notifications = undefined;
                }

                if (retriesSubscription) {
                  retriesSubscription.unsubscribe();
                  this.retriesSubscription = undefined;
                }

                this.retries = undefined;
              }
            }, {
              key: "_unsubscribeAndRecycle",
              value: function _unsubscribeAndRecycle() {
                var _unsubscribe = this._unsubscribe;
                this._unsubscribe = null;

                _get(_getPrototypeOf(RepeatWhenSubscriber.prototype), "_unsubscribeAndRecycle", this).call(this);

                this._unsubscribe = _unsubscribe;
                return this;
              }
            }, {
              key: "subscribeToRetries",
              value: function subscribeToRetries() {
                this.notifications = new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
                var retries;

                try {
                  var notifier = this.notifier;
                  retries = notifier(this.notifications);
                } catch (e) {
                  return _get(_getPrototypeOf(RepeatWhenSubscriber.prototype), "complete", this).call(this);
                }

                this.retries = retries;
                this.retriesSubscription = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_1__["innerSubscribe"])(retries, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_1__["SimpleInnerSubscriber"](this));
              }
            }]);

            return RepeatWhenSubscriber;
          }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_1__["SimpleOuterSubscriber"]); //# sourceMappingURL=repeatWhen.js.map

          /***/

        },

        /***/
        "PNff":
        /*!*******************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/ArgumentOutOfRangeError.js ***!
          \*******************************************************************************************************/

        /*! exports provided: ArgumentOutOfRangeError */

        /***/
        function PNff(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function () {
            return ArgumentOutOfRangeError;
          });

          var ArgumentOutOfRangeErrorImpl = function () {
            function ArgumentOutOfRangeErrorImpl() {
              Error.call(this);
              this.message = 'argument out of range';
              this.name = 'ArgumentOutOfRangeError';
              return this;
            }

            ArgumentOutOfRangeErrorImpl.prototype = Object.create(Error.prototype);
            return ArgumentOutOfRangeErrorImpl;
          }();

          var ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl; //# sourceMappingURL=ArgumentOutOfRangeError.js.map

          /***/
        },

        /***/
        "PVB3":
        /*!*************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/bufferToggle.js ***!
          \*************************************************************************************************/

        /*! exports provided: bufferToggle */

        /***/
        function PVB3(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "bufferToggle", function () {
            return bufferToggle;
          });
          /* harmony import */


          var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscription */
          "bwdy");
          /* harmony import */


          var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../util/subscribeToResult */
          "mW0F");
          /* harmony import */


          var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../OuterSubscriber */
          "pBDD");

          function bufferToggle(openings, closingSelector) {
            return function bufferToggleOperatorFunction(source) {
              return source.lift(new BufferToggleOperator(openings, closingSelector));
            };
          }

          var BufferToggleOperator = /*#__PURE__*/function () {
            function BufferToggleOperator(openings, closingSelector) {
              _classCallCheck(this, BufferToggleOperator);

              this.openings = openings;
              this.closingSelector = closingSelector;
            }

            _createClass(BufferToggleOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
              }
            }]);

            return BufferToggleOperator;
          }();

          var BufferToggleSubscriber = /*#__PURE__*/function (_OuterSubscriber__WEB4) {
            _inherits(BufferToggleSubscriber, _OuterSubscriber__WEB4);

            var _super43 = _createSuper(BufferToggleSubscriber);

            function BufferToggleSubscriber(destination, openings, closingSelector) {
              var _this44;

              _classCallCheck(this, BufferToggleSubscriber);

              _this44 = _super43.call(this, destination);
              _this44.closingSelector = closingSelector;
              _this44.contexts = [];

              _this44.add(Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__["subscribeToResult"])(_assertThisInitialized(_this44), openings));

              return _this44;
            }

            _createClass(BufferToggleSubscriber, [{
              key: "_next",
              value: function _next(value) {
                var contexts = this.contexts;
                var len = contexts.length;

                for (var i = 0; i < len; i++) {
                  contexts[i].buffer.push(value);
                }
              }
            }, {
              key: "_error",
              value: function _error(err) {
                var contexts = this.contexts;

                while (contexts.length > 0) {
                  var context = contexts.shift();
                  context.subscription.unsubscribe();
                  context.buffer = null;
                  context.subscription = null;
                }

                this.contexts = null;

                _get(_getPrototypeOf(BufferToggleSubscriber.prototype), "_error", this).call(this, err);
              }
            }, {
              key: "_complete",
              value: function _complete() {
                var contexts = this.contexts;

                while (contexts.length > 0) {
                  var context = contexts.shift();
                  this.destination.next(context.buffer);
                  context.subscription.unsubscribe();
                  context.buffer = null;
                  context.subscription = null;
                }

                this.contexts = null;

                _get(_getPrototypeOf(BufferToggleSubscriber.prototype), "_complete", this).call(this);
              }
            }, {
              key: "notifyNext",
              value: function notifyNext(outerValue, innerValue) {
                outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
              }
            }, {
              key: "notifyComplete",
              value: function notifyComplete(innerSub) {
                this.closeBuffer(innerSub.context);
              }
            }, {
              key: "openBuffer",
              value: function openBuffer(value) {
                try {
                  var closingSelector = this.closingSelector;
                  var closingNotifier = closingSelector.call(this, value);

                  if (closingNotifier) {
                    this.trySubscribe(closingNotifier);
                  }
                } catch (err) {
                  this._error(err);
                }
              }
            }, {
              key: "closeBuffer",
              value: function closeBuffer(context) {
                var contexts = this.contexts;

                if (contexts && context) {
                  var buffer = context.buffer,
                      subscription = context.subscription;
                  this.destination.next(buffer);
                  contexts.splice(contexts.indexOf(context), 1);
                  this.remove(subscription);
                  subscription.unsubscribe();
                }
              }
            }, {
              key: "trySubscribe",
              value: function trySubscribe(closingNotifier) {
                var contexts = this.contexts;
                var buffer = [];
                var subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
                var context = {
                  buffer: buffer,
                  subscription: subscription
                };
                contexts.push(context);
                var innerSubscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__["subscribeToResult"])(this, closingNotifier, context);

                if (!innerSubscription || innerSubscription.closed) {
                  this.closeBuffer(context);
                } else {
                  innerSubscription.context = context;
                  this.add(innerSubscription);
                  subscription.add(innerSubscription);
                }
              }
            }]);

            return BufferToggleSubscriber;
          }(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"]); //# sourceMappingURL=bufferToggle.js.map

          /***/

        },

        /***/
        "PmMP":
        /*!****************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduled/schedulePromise.js ***!
          \****************************************************************************************************/

        /*! exports provided: schedulePromise */

        /***/
        function PmMP(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "schedulePromise", function () {
            return schedulePromise;
          });
          /* harmony import */


          var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Observable */
          "IdLP");
          /* harmony import */


          var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../Subscription */
          "bwdy");

          function schedulePromise(input, scheduler) {
            return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
              var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
              sub.add(scheduler.schedule(function () {
                return input.then(function (value) {
                  sub.add(scheduler.schedule(function () {
                    subscriber.next(value);
                    sub.add(scheduler.schedule(function () {
                      return subscriber.complete();
                    }));
                  }));
                }, function (err) {
                  sub.add(scheduler.schedule(function () {
                    return subscriber.error(err);
                  }));
                });
              }));
              return sub;
            });
          } //# sourceMappingURL=schedulePromise.js.map

          /***/

        },

        /***/
        "QQZH":
        /*!****************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/ReplaySubject.js ***!
          \****************************************************************************************/

        /*! exports provided: ReplaySubject */

        /***/
        function QQZH(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "ReplaySubject", function () {
            return ReplaySubject;
          });
          /* harmony import */


          var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Subject */
          "ZTXN");
          /* harmony import */


          var _scheduler_queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./scheduler/queue */
          "kSHZ");
          /* harmony import */


          var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./Subscription */
          "bwdy");
          /* harmony import */


          var _operators_observeOn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./operators/observeOn */
          "A2S1");
          /* harmony import */


          var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./util/ObjectUnsubscribedError */
          "MiDb");
          /* harmony import */


          var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./SubjectSubscription */
          "yTkW");

          var ReplaySubject = /*#__PURE__*/function (_Subject__WEBPACK_IMP4) {
            _inherits(ReplaySubject, _Subject__WEBPACK_IMP4);

            var _super44 = _createSuper(ReplaySubject);

            function ReplaySubject() {
              var _this45;

              var bufferSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.POSITIVE_INFINITY;
              var windowTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.POSITIVE_INFINITY;
              var scheduler = arguments.length > 2 ? arguments[2] : undefined;

              _classCallCheck(this, ReplaySubject);

              _this45 = _super44.call(this);
              _this45.scheduler = scheduler;
              _this45._events = [];
              _this45._infiniteTimeWindow = false;
              _this45._bufferSize = bufferSize < 1 ? 1 : bufferSize;
              _this45._windowTime = windowTime < 1 ? 1 : windowTime;

              if (windowTime === Number.POSITIVE_INFINITY) {
                _this45._infiniteTimeWindow = true;
                _this45.next = _this45.nextInfiniteTimeWindow;
              } else {
                _this45.next = _this45.nextTimeWindow;
              }

              return _this45;
            }

            _createClass(ReplaySubject, [{
              key: "nextInfiniteTimeWindow",
              value: function nextInfiniteTimeWindow(value) {
                if (!this.isStopped) {
                  var _events = this._events;

                  _events.push(value);

                  if (_events.length > this._bufferSize) {
                    _events.shift();
                  }
                }

                _get(_getPrototypeOf(ReplaySubject.prototype), "next", this).call(this, value);
              }
            }, {
              key: "nextTimeWindow",
              value: function nextTimeWindow(value) {
                if (!this.isStopped) {
                  this._events.push(new ReplayEvent(this._getNow(), value));

                  this._trimBufferThenGetEvents();
                }

                _get(_getPrototypeOf(ReplaySubject.prototype), "next", this).call(this, value);
              }
            }, {
              key: "_subscribe",
              value: function _subscribe(subscriber) {
                var _infiniteTimeWindow = this._infiniteTimeWindow;

                var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();

                var scheduler = this.scheduler;
                var len = _events.length;
                var subscription;

                if (this.closed) {
                  throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
                } else if (this.isStopped || this.hasError) {
                  subscription = _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
                } else {
                  this.observers.push(subscriber);
                  subscription = new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__["SubjectSubscription"](this, subscriber);
                }

                if (scheduler) {
                  subscriber.add(subscriber = new _operators_observeOn__WEBPACK_IMPORTED_MODULE_3__["ObserveOnSubscriber"](subscriber, scheduler));
                }

                if (_infiniteTimeWindow) {
                  for (var i = 0; i < len && !subscriber.closed; i++) {
                    subscriber.next(_events[i]);
                  }
                } else {
                  for (var _i = 0; _i < len && !subscriber.closed; _i++) {
                    subscriber.next(_events[_i].value);
                  }
                }

                if (this.hasError) {
                  subscriber.error(this.thrownError);
                } else if (this.isStopped) {
                  subscriber.complete();
                }

                return subscription;
              }
            }, {
              key: "_getNow",
              value: function _getNow() {
                return (this.scheduler || _scheduler_queue__WEBPACK_IMPORTED_MODULE_1__["queue"]).now();
              }
            }, {
              key: "_trimBufferThenGetEvents",
              value: function _trimBufferThenGetEvents() {
                var now = this._getNow();

                var _bufferSize = this._bufferSize;
                var _windowTime = this._windowTime;
                var _events = this._events;
                var eventsCount = _events.length;
                var spliceCount = 0;

                while (spliceCount < eventsCount) {
                  if (now - _events[spliceCount].time < _windowTime) {
                    break;
                  }

                  spliceCount++;
                }

                if (eventsCount > _bufferSize) {
                  spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
                }

                if (spliceCount > 0) {
                  _events.splice(0, spliceCount);
                }

                return _events;
              }
            }]);

            return ReplaySubject;
          }(_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]);

          var ReplayEvent = function ReplayEvent(time, value) {
            _classCallCheck(this, ReplayEvent);

            this.time = time;
            this.value = value;
          }; //# sourceMappingURL=ReplaySubject.js.map

          /***/

        },

        /***/
        "ROBh":
        /*!****************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/of.js ***!
          \****************************************************************************************/

        /*! exports provided: of */

        /***/
        function ROBh(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "of", function () {
            return of;
          });
          /* harmony import */


          var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../util/isScheduler */
          "gBlb");
          /* harmony import */


          var _fromArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./fromArray */
          "ckkg");
          /* harmony import */


          var _scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../scheduled/scheduleArray */
          "czMQ");

          function of() {
            for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              args[_key6] = arguments[_key6];
            }

            var scheduler = args[args.length - 1];

            if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__["isScheduler"])(scheduler)) {
              args.pop();
              return Object(_scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__["scheduleArray"])(args, scheduler);
            } else {
              return Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(args);
            }
          } //# sourceMappingURL=of.js.map

          /***/

        },

        /***/
        "Rj9D":
        /*!********************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/enums.js ***!
          \********************************************************************/

        /*! exports provided: MessageType, Resolution, ErrorCode, NativeErrorName, NativeEventType */

        /***/
        function Rj9D(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "MessageType", function () {
            return MessageType;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "Resolution", function () {
            return Resolution;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "ErrorCode", function () {
            return ErrorCode;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "NativeErrorName", function () {
            return NativeErrorName;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "NativeEventType", function () {
            return NativeEventType;
          });

          var MessageType;

          (function (MessageType) {
            MessageType["Call"] = "call";
            MessageType["Reply"] = "reply";
            MessageType["Syn"] = "syn";
            MessageType["SynAck"] = "synAck";
            MessageType["Ack"] = "ack";
          })(MessageType || (MessageType = {}));

          var Resolution;

          (function (Resolution) {
            Resolution["Fulfilled"] = "fulfilled";
            Resolution["Rejected"] = "rejected";
          })(Resolution || (Resolution = {}));

          var ErrorCode;

          (function (ErrorCode) {
            ErrorCode["ConnectionDestroyed"] = "ConnectionDestroyed";
            ErrorCode["ConnectionTimeout"] = "ConnectionTimeout";
            ErrorCode["NotInIframe"] = "NotInIframe";
            ErrorCode["NoIframeSrc"] = "NoIframeSrc";
          })(ErrorCode || (ErrorCode = {}));

          var NativeErrorName;

          (function (NativeErrorName) {
            NativeErrorName["DataCloneError"] = "DataCloneError";
          })(NativeErrorName || (NativeErrorName = {}));

          var NativeEventType;

          (function (NativeEventType) {
            NativeEventType["Message"] = "message";
          })(NativeEventType || (NativeEventType = {}));
          /***/

        },

        /***/
        "S5ru":
        /*!*************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/generateId.js ***!
          \*************************************************************************/

        /*! exports provided: default */

        /***/
        function S5ru(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);

          var id = 0;
          /**
           * @return {number} A unique ID (not universally unique)
           */

          /* harmony default export */

          __webpack_exports__["default"] = function () {
            return ++id;
          };
          /***/

        },

        /***/
        "Sp61":
        /*!****************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/publishBehavior.js ***!
          \****************************************************************************************************/

        /*! exports provided: publishBehavior */

        /***/
        function Sp61(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "publishBehavior", function () {
            return publishBehavior;
          });
          /* harmony import */


          var _BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../BehaviorSubject */
          "C05f");
          /* harmony import */


          var _multicast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./multicast */
          "JHA6");

          function publishBehavior(value) {
            return function (source) {
              return Object(_multicast__WEBPACK_IMPORTED_MODULE_1__["multicast"])(new _BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](value))(source);
            };
          } //# sourceMappingURL=publishBehavior.js.map

          /***/

        },

        /***/
        "SrNW":
        /*!*****************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/scan.js ***!
          \*****************************************************************************************/

        /*! exports provided: scan */

        /***/
        function SrNW(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "scan", function () {
            return scan;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");

          function scan(accumulator, seed) {
            var hasSeed = false;

            if (arguments.length >= 2) {
              hasSeed = true;
            }

            return function scanOperatorFunction(source) {
              return source.lift(new ScanOperator(accumulator, seed, hasSeed));
            };
          }

          var ScanOperator = /*#__PURE__*/function () {
            function ScanOperator(accumulator, seed) {
              var hasSeed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

              _classCallCheck(this, ScanOperator);

              this.accumulator = accumulator;
              this.seed = seed;
              this.hasSeed = hasSeed;
            }

            _createClass(ScanOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
              }
            }]);

            return ScanOperator;
          }();

          var ScanSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_21) {
            _inherits(ScanSubscriber, _Subscriber__WEBPACK_21);

            var _super45 = _createSuper(ScanSubscriber);

            function ScanSubscriber(destination, accumulator, _seed, hasSeed) {
              var _this46;

              _classCallCheck(this, ScanSubscriber);

              _this46 = _super45.call(this, destination);
              _this46.accumulator = accumulator;
              _this46._seed = _seed;
              _this46.hasSeed = hasSeed;
              _this46.index = 0;
              return _this46;
            }

            _createClass(ScanSubscriber, [{
              key: "_next",
              value: function _next(value) {
                if (!this.hasSeed) {
                  this.seed = value;
                  this.destination.next(value);
                } else {
                  return this._tryNext(value);
                }
              }
            }, {
              key: "_tryNext",
              value: function _tryNext(value) {
                var index = this.index++;
                var result;

                try {
                  result = this.accumulator(this.seed, value, index);
                } catch (err) {
                  this.destination.error(err);
                }

                this.seed = result;
                this.destination.next(result);
              }
            }, {
              key: "seed",
              get: function get() {
                return this._seed;
              },
              set: function set(value) {
                this.hasSeed = true;
                this._seed = value;
              }
            }]);

            return ScanSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=scan.js.map

          /***/

        },

        /***/
        "TLy2":
        /*!**********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/switchMap.js ***!
          \**********************************************************************************************/

        /*! exports provided: switchMap */

        /***/
        function TLy2(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "switchMap", function () {
            return switchMap;
          });
          /* harmony import */


          var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./map */
          "YtkY");
          /* harmony import */


          var _observable_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../observable/from */
          "GoAz");
          /* harmony import */


          var _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../innerSubscribe */
          "uCWR");

          function switchMap(project, resultSelector) {
            if (typeof resultSelector === 'function') {
              return function (source) {
                return source.pipe(switchMap(function (a, i) {
                  return Object(_observable_from__WEBPACK_IMPORTED_MODULE_1__["from"])(project(a, i)).pipe(Object(_map__WEBPACK_IMPORTED_MODULE_0__["map"])(function (b, ii) {
                    return resultSelector(a, b, i, ii);
                  }));
                }));
              };
            }

            return function (source) {
              return source.lift(new SwitchMapOperator(project));
            };
          }

          var SwitchMapOperator = /*#__PURE__*/function () {
            function SwitchMapOperator(project) {
              _classCallCheck(this, SwitchMapOperator);

              this.project = project;
            }

            _createClass(SwitchMapOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new SwitchMapSubscriber(subscriber, this.project));
              }
            }]);

            return SwitchMapOperator;
          }();

          var SwitchMapSubscriber = /*#__PURE__*/function (_innerSubscribe__WEBP10) {
            _inherits(SwitchMapSubscriber, _innerSubscribe__WEBP10);

            var _super46 = _createSuper(SwitchMapSubscriber);

            function SwitchMapSubscriber(destination, project) {
              var _this47;

              _classCallCheck(this, SwitchMapSubscriber);

              _this47 = _super46.call(this, destination);
              _this47.project = project;
              _this47.index = 0;
              return _this47;
            }

            _createClass(SwitchMapSubscriber, [{
              key: "_next",
              value: function _next(value) {
                var result;
                var index = this.index++;

                try {
                  result = this.project(value, index);
                } catch (error) {
                  this.destination.error(error);
                  return;
                }

                this._innerSub(result);
              }
            }, {
              key: "_innerSub",
              value: function _innerSub(result) {
                var innerSubscription = this.innerSubscription;

                if (innerSubscription) {
                  innerSubscription.unsubscribe();
                }

                var innerSubscriber = new _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["SimpleInnerSubscriber"](this);
                var destination = this.destination;
                destination.add(innerSubscriber);
                this.innerSubscription = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["innerSubscribe"])(result, innerSubscriber);

                if (this.innerSubscription !== innerSubscriber) {
                  destination.add(this.innerSubscription);
                }
              }
            }, {
              key: "_complete",
              value: function _complete() {
                var innerSubscription = this.innerSubscription;

                if (!innerSubscription || innerSubscription.closed) {
                  _get(_getPrototypeOf(SwitchMapSubscriber.prototype), "_complete", this).call(this);
                }

                this.unsubscribe();
              }
            }, {
              key: "_unsubscribe",
              value: function _unsubscribe() {
                this.innerSubscription = undefined;
              }
            }, {
              key: "notifyComplete",
              value: function notifyComplete() {
                this.innerSubscription = undefined;

                if (this.isStopped) {
                  _get(_getPrototypeOf(SwitchMapSubscriber.prototype), "_complete", this).call(this);
                }
              }
            }, {
              key: "notifyNext",
              value: function notifyNext(innerValue) {
                this.destination.next(innerValue);
              }
            }]);

            return SwitchMapSubscriber;
          }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["SimpleOuterSubscriber"]); //# sourceMappingURL=switchMap.js.map

          /***/

        },

        /***/
        "TaSY":
        /*!*****************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/last.js ***!
          \*****************************************************************************************/

        /*! exports provided: last */

        /***/
        function TaSY(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "last", function () {
            return last;
          });
          /* harmony import */


          var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../util/EmptyError */
          "VxHp");
          /* harmony import */


          var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./filter */
          "xVbo");
          /* harmony import */


          var _takeLast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./takeLast */
          "A8kH");
          /* harmony import */


          var _throwIfEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./throwIfEmpty */
          "fbWu");
          /* harmony import */


          var _defaultIfEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./defaultIfEmpty */
          "iqFP");
          /* harmony import */


          var _util_identity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../util/identity */
          "5E2i");

          function last(predicate, defaultValue) {
            var hasDefaultValue = arguments.length >= 2;
            return function (source) {
              return source.pipe(predicate ? Object(_filter__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (v, i) {
                return predicate(v, i, source);
              }) : _util_identity__WEBPACK_IMPORTED_MODULE_5__["identity"], Object(_takeLast__WEBPACK_IMPORTED_MODULE_2__["takeLast"])(1), hasDefaultValue ? Object(_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_4__["defaultIfEmpty"])(defaultValue) : Object(_throwIfEmpty__WEBPACK_IMPORTED_MODULE_3__["throwIfEmpty"])(function () {
                return new _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__["EmptyError"]();
              }));
            };
          } //# sourceMappingURL=last.js.map

          /***/

        },

        /***/
        "Ti3e":
        /*!************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/pipe.js ***!
          \************************************************************************************/

        /*! exports provided: pipe, pipeFromArray */

        /***/
        function Ti3e(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "pipe", function () {
            return pipe;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "pipeFromArray", function () {
            return pipeFromArray;
          });
          /* harmony import */


          var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./identity */
          "5E2i");

          function pipe() {
            for (var _len7 = arguments.length, fns = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
              fns[_key7] = arguments[_key7];
            }

            return pipeFromArray(fns);
          }

          function pipeFromArray(fns) {
            if (fns.length === 0) {
              return _identity__WEBPACK_IMPORTED_MODULE_0__["identity"];
            }

            if (fns.length === 1) {
              return fns[0];
            }

            return function piped(input) {
              return fns.reduce(function (prev, fn) {
                return fn(prev);
              }, input);
            };
          } //# sourceMappingURL=pipe.js.map

          /***/

        },

        /***/
        "UWon":
        /*!**********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/delayWhen.js ***!
          \**********************************************************************************************/

        /*! exports provided: delayWhen */

        /***/
        function UWon(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "delayWhen", function () {
            return delayWhen;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");
          /* harmony import */


          var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../Observable */
          "IdLP");
          /* harmony import */


          var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../OuterSubscriber */
          "pBDD");
          /* harmony import */


          var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../util/subscribeToResult */
          "mW0F");

          function delayWhen(delayDurationSelector, subscriptionDelay) {
            if (subscriptionDelay) {
              return function (source) {
                return new SubscriptionDelayObservable(source, subscriptionDelay).lift(new DelayWhenOperator(delayDurationSelector));
              };
            }

            return function (source) {
              return source.lift(new DelayWhenOperator(delayDurationSelector));
            };
          }

          var DelayWhenOperator = /*#__PURE__*/function () {
            function DelayWhenOperator(delayDurationSelector) {
              _classCallCheck(this, DelayWhenOperator);

              this.delayDurationSelector = delayDurationSelector;
            }

            _createClass(DelayWhenOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
              }
            }]);

            return DelayWhenOperator;
          }();

          var DelayWhenSubscriber = /*#__PURE__*/function (_OuterSubscriber__WEB5) {
            _inherits(DelayWhenSubscriber, _OuterSubscriber__WEB5);

            var _super47 = _createSuper(DelayWhenSubscriber);

            function DelayWhenSubscriber(destination, delayDurationSelector) {
              var _this48;

              _classCallCheck(this, DelayWhenSubscriber);

              _this48 = _super47.call(this, destination);
              _this48.delayDurationSelector = delayDurationSelector;
              _this48.completed = false;
              _this48.delayNotifierSubscriptions = [];
              _this48.index = 0;
              return _this48;
            }

            _createClass(DelayWhenSubscriber, [{
              key: "notifyNext",
              value: function notifyNext(outerValue, _innerValue, _outerIndex, _innerIndex, innerSub) {
                this.destination.next(outerValue);
                this.removeSubscription(innerSub);
                this.tryComplete();
              }
            }, {
              key: "notifyError",
              value: function notifyError(error, innerSub) {
                this._error(error);
              }
            }, {
              key: "notifyComplete",
              value: function notifyComplete(innerSub) {
                var value = this.removeSubscription(innerSub);

                if (value) {
                  this.destination.next(value);
                }

                this.tryComplete();
              }
            }, {
              key: "_next",
              value: function _next(value) {
                var index = this.index++;

                try {
                  var delayNotifier = this.delayDurationSelector(value, index);

                  if (delayNotifier) {
                    this.tryDelay(delayNotifier, value);
                  }
                } catch (err) {
                  this.destination.error(err);
                }
              }
            }, {
              key: "_complete",
              value: function _complete() {
                this.completed = true;
                this.tryComplete();
                this.unsubscribe();
              }
            }, {
              key: "removeSubscription",
              value: function removeSubscription(subscription) {
                subscription.unsubscribe();
                var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);

                if (subscriptionIdx !== -1) {
                  this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
                }

                return subscription.outerValue;
              }
            }, {
              key: "tryDelay",
              value: function tryDelay(delayNotifier, value) {
                var notifierSubscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__["subscribeToResult"])(this, delayNotifier, value);

                if (notifierSubscription && !notifierSubscription.closed) {
                  var destination = this.destination;
                  destination.add(notifierSubscription);
                  this.delayNotifierSubscriptions.push(notifierSubscription);
                }
              }
            }, {
              key: "tryComplete",
              value: function tryComplete() {
                if (this.completed && this.delayNotifierSubscriptions.length === 0) {
                  this.destination.complete();
                }
              }
            }]);

            return DelayWhenSubscriber;
          }(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"]);

          var SubscriptionDelayObservable = /*#__PURE__*/function (_Observable__WEBPACK_2) {
            _inherits(SubscriptionDelayObservable, _Observable__WEBPACK_2);

            var _super48 = _createSuper(SubscriptionDelayObservable);

            function SubscriptionDelayObservable(source, subscriptionDelay) {
              var _this49;

              _classCallCheck(this, SubscriptionDelayObservable);

              _this49 = _super48.call(this);
              _this49.source = source;
              _this49.subscriptionDelay = subscriptionDelay;
              return _this49;
            }

            _createClass(SubscriptionDelayObservable, [{
              key: "_subscribe",
              value: function _subscribe(subscriber) {
                this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
              }
            }]);

            return SubscriptionDelayObservable;
          }(_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]);

          var SubscriptionDelaySubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_22) {
            _inherits(SubscriptionDelaySubscriber, _Subscriber__WEBPACK_22);

            var _super49 = _createSuper(SubscriptionDelaySubscriber);

            function SubscriptionDelaySubscriber(parent, source) {
              var _this50;

              _classCallCheck(this, SubscriptionDelaySubscriber);

              _this50 = _super49.call(this);
              _this50.parent = parent;
              _this50.source = source;
              _this50.sourceSubscribed = false;
              return _this50;
            }

            _createClass(SubscriptionDelaySubscriber, [{
              key: "_next",
              value: function _next(unused) {
                this.subscribeToSource();
              }
            }, {
              key: "_error",
              value: function _error(err) {
                this.unsubscribe();
                this.parent.error(err);
              }
            }, {
              key: "_complete",
              value: function _complete() {
                this.unsubscribe();
                this.subscribeToSource();
              }
            }, {
              key: "subscribeToSource",
              value: function subscribeToSource() {
                if (!this.sourceSubscribed) {
                  this.sourceSubscribed = true;
                  this.unsubscribe();
                  this.source.subscribe(this.parent);
                }
              }
            }]);

            return SubscriptionDelaySubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=delayWhen.js.map

          /***/

        },

        /***/
        "Uxnb":
        /*!*********************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/errorSerialization.js ***!
          \*********************************************************************************/

        /*! exports provided: serializeError, deserializeError */

        /***/
        function Uxnb(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "serializeError", function () {
            return serializeError;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "deserializeError", function () {
            return deserializeError;
          });
          /**
           * Converts an error object into a plain object.
           */


          var serializeError = function serializeError(_ref2) {
            var name = _ref2.name,
                message = _ref2.message,
                stack = _ref2.stack;
            return {
              name: name,
              message: message,
              stack: stack
            };
          };
          /**
           * Converts a plain object into an error object.
           */


          var deserializeError = function deserializeError(obj) {
            var deserializedError = new Error(); // @ts-ignore

            Object.keys(obj).forEach(function (key) {
              return deserializedError[key] = obj[key];
            });
            return deserializedError;
          };
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
        "VxHp":
        /*!******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/EmptyError.js ***!
          \******************************************************************************************/

        /*! exports provided: EmptyError */

        /***/
        function VxHp(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "EmptyError", function () {
            return EmptyError;
          });

          var EmptyErrorImpl = function () {
            function EmptyErrorImpl() {
              Error.call(this);
              this.message = 'no elements in sequence';
              this.name = 'EmptyError';
              return this;
            }

            EmptyErrorImpl.prototype = Object.create(Error.prototype);
            return EmptyErrorImpl;
          }();

          var EmptyError = EmptyErrorImpl; //# sourceMappingURL=EmptyError.js.map

          /***/
        },

        /***/
        "Wg7D":
        /*!*************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/throttleTime.js ***!
          \*************************************************************************************************/

        /*! exports provided: throttleTime */

        /***/
        function Wg7D(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "throttleTime", function () {
            return throttleTime;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");
          /* harmony import */


          var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../scheduler/async */
          "Efrr");
          /* harmony import */


          var _throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./throttle */
          "IeS+");

          function throttleTime(duration) {
            var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
            var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _throttle__WEBPACK_IMPORTED_MODULE_2__["defaultThrottleConfig"];
            return function (source) {
              return source.lift(new ThrottleTimeOperator(duration, scheduler, config.leading, config.trailing));
            };
          }

          var ThrottleTimeOperator = /*#__PURE__*/function () {
            function ThrottleTimeOperator(duration, scheduler, leading, trailing) {
              _classCallCheck(this, ThrottleTimeOperator);

              this.duration = duration;
              this.scheduler = scheduler;
              this.leading = leading;
              this.trailing = trailing;
            }

            _createClass(ThrottleTimeOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
              }
            }]);

            return ThrottleTimeOperator;
          }();

          var ThrottleTimeSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_23) {
            _inherits(ThrottleTimeSubscriber, _Subscriber__WEBPACK_23);

            var _super50 = _createSuper(ThrottleTimeSubscriber);

            function ThrottleTimeSubscriber(destination, duration, scheduler, leading, trailing) {
              var _this51;

              _classCallCheck(this, ThrottleTimeSubscriber);

              _this51 = _super50.call(this, destination);
              _this51.duration = duration;
              _this51.scheduler = scheduler;
              _this51.leading = leading;
              _this51.trailing = trailing;
              _this51._hasTrailingValue = false;
              _this51._trailingValue = null;
              return _this51;
            }

            _createClass(ThrottleTimeSubscriber, [{
              key: "_next",
              value: function _next(value) {
                if (this.throttled) {
                  if (this.trailing) {
                    this._trailingValue = value;
                    this._hasTrailingValue = true;
                  }
                } else {
                  this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, {
                    subscriber: this
                  }));

                  if (this.leading) {
                    this.destination.next(value);
                  } else if (this.trailing) {
                    this._trailingValue = value;
                    this._hasTrailingValue = true;
                  }
                }
              }
            }, {
              key: "_complete",
              value: function _complete() {
                if (this._hasTrailingValue) {
                  this.destination.next(this._trailingValue);
                  this.destination.complete();
                } else {
                  this.destination.complete();
                }
              }
            }, {
              key: "clearThrottle",
              value: function clearThrottle() {
                var throttled = this.throttled;

                if (throttled) {
                  if (this.trailing && this._hasTrailingValue) {
                    this.destination.next(this._trailingValue);
                    this._trailingValue = null;
                    this._hasTrailingValue = false;
                  }

                  throttled.unsubscribe();
                  this.remove(throttled);
                  this.throttled = null;
                }
              }
            }]);

            return ThrottleTimeSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]);

          function dispatchNext(arg) {
            var subscriber = arg.subscriber;
            subscriber.clearThrottle();
          } //# sourceMappingURL=throttleTime.js.map

          /***/

        },

        /***/
        "X0qr":
        /*!****************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/isObject.js ***!
          \****************************************************************************************/

        /*! exports provided: isObject */

        /***/
        function X0qr(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "isObject", function () {
            return isObject;
          });

          function isObject(x) {
            return x !== null && typeof x === 'object';
          } //# sourceMappingURL=isObject.js.map

          /***/

        },

        /***/
        "Xm0Y":
        /*!***********************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/not.js ***!
          \***********************************************************************************/

        /*! exports provided: not */

        /***/
        function Xm0Y(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "not", function () {
            return not;
          });

          function not(pred, thisArg) {
            function notPred() {
              return !notPred.pred.apply(notPred.thisArg, arguments);
            }

            notPred.pred = pred;
            notPred.thisArg = thisArg;
            return notPred;
          } //# sourceMappingURL=not.js.map

          /***/

        },

        /***/
        "Yj6K":
        /*!************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/publishLast.js ***!
          \************************************************************************************************/

        /*! exports provided: publishLast */

        /***/
        function Yj6K(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "publishLast", function () {
            return publishLast;
          });
          /* harmony import */


          var _AsyncSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../AsyncSubject */
          "m0VI");
          /* harmony import */


          var _multicast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./multicast */
          "JHA6");

          function publishLast() {
            return function (source) {
              return Object(_multicast__WEBPACK_IMPORTED_MODULE_1__["multicast"])(new _AsyncSubject__WEBPACK_IMPORTED_MODULE_0__["AsyncSubject"]())(source);
            };
          } //# sourceMappingURL=publishLast.js.map

          /***/

        },

        /***/
        "YtkY":
        /*!****************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/map.js ***!
          \****************************************************************************************/

        /*! exports provided: map, MapOperator */

        /***/
        function YtkY(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "map", function () {
            return map;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "MapOperator", function () {
            return MapOperator;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");

          function map(project, thisArg) {
            return function mapOperation(source) {
              if (typeof project !== 'function') {
                throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
              }

              return source.lift(new MapOperator(project, thisArg));
            };
          }

          var MapOperator = /*#__PURE__*/function () {
            function MapOperator(project, thisArg) {
              _classCallCheck(this, MapOperator);

              this.project = project;
              this.thisArg = thisArg;
            }

            _createClass(MapOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
              }
            }]);

            return MapOperator;
          }();

          var MapSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_24) {
            _inherits(MapSubscriber, _Subscriber__WEBPACK_24);

            var _super51 = _createSuper(MapSubscriber);

            function MapSubscriber(destination, project, thisArg) {
              var _this52;

              _classCallCheck(this, MapSubscriber);

              _this52 = _super51.call(this, destination);
              _this52.project = project;
              _this52.count = 0;
              _this52.thisArg = thisArg || _assertThisInitialized(_this52);
              return _this52;
            }

            _createClass(MapSubscriber, [{
              key: "_next",
              value: function _next(value) {
                var result;

                try {
                  result = this.project.call(this.thisArg, value, this.count++);
                } catch (err) {
                  this.destination.error(err);
                  return;
                }

                this.destination.next(result);
              }
            }]);

            return MapSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=map.js.map

          /***/

        },

        /***/
        "ZNOZ":
        /*!**************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduler/AsapScheduler.js ***!
          \**************************************************************************************************/

        /*! exports provided: AsapScheduler */

        /***/
        function ZNOZ(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "AsapScheduler", function () {
            return AsapScheduler;
          });
          /* harmony import */


          var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./AsyncScheduler */
          "DG/E");

          var AsapScheduler = /*#__PURE__*/function (_AsyncScheduler__WEBP2) {
            _inherits(AsapScheduler, _AsyncScheduler__WEBP2);

            var _super52 = _createSuper(AsapScheduler);

            function AsapScheduler() {
              _classCallCheck(this, AsapScheduler);

              return _super52.apply(this, arguments);
            }

            _createClass(AsapScheduler, [{
              key: "flush",
              value: function flush(action) {
                this.active = true;
                this.scheduled = undefined;
                var actions = this.actions;
                var error;
                var index = -1;
                var count = actions.length;
                action = action || actions.shift();

                do {
                  if (error = action.execute(action.state, action.delay)) {
                    break;
                  }
                } while (++index < count && (action = actions.shift()));

                this.active = false;

                if (error) {
                  while (++index < count && (action = actions.shift())) {
                    action.unsubscribe();
                  }

                  throw error;
                }
              }
            }]);

            return AsapScheduler;
          }(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__["AsyncScheduler"]); //# sourceMappingURL=AsapScheduler.js.map

          /***/

        },

        /***/
        "ZTXN":
        /*!**********************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/Subject.js ***!
          \**********************************************************************************/

        /*! exports provided: SubjectSubscriber, Subject, AnonymousSubject */

        /***/
        function ZTXN(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "SubjectSubscriber", function () {
            return SubjectSubscriber;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "Subject", function () {
            return Subject;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "AnonymousSubject", function () {
            return AnonymousSubject;
          });
          /* harmony import */


          var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Observable */
          "IdLP");
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./Subscriber */
          "5uGe");
          /* harmony import */


          var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./Subscription */
          "bwdy");
          /* harmony import */


          var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./util/ObjectUnsubscribedError */
          "MiDb");
          /* harmony import */


          var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./SubjectSubscription */
          "yTkW");
          /* harmony import */


          var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../internal/symbol/rxSubscriber */
          "25CY");

          var SubjectSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_25) {
            _inherits(SubjectSubscriber, _Subscriber__WEBPACK_25);

            var _super53 = _createSuper(SubjectSubscriber);

            function SubjectSubscriber(destination) {
              var _this53;

              _classCallCheck(this, SubjectSubscriber);

              _this53 = _super53.call(this, destination);
              _this53.destination = destination;
              return _this53;
            }

            return SubjectSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]);

          var Subject = /*#__PURE__*/function (_Observable__WEBPACK_3) {
            _inherits(Subject, _Observable__WEBPACK_3);

            var _super54 = _createSuper(Subject);

            function Subject() {
              var _this54;

              _classCallCheck(this, Subject);

              _this54 = _super54.call(this);
              _this54.observers = [];
              _this54.closed = false;
              _this54.isStopped = false;
              _this54.hasError = false;
              _this54.thrownError = null;
              return _this54;
            }

            _createClass(Subject, [{
              key: _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_5__["rxSubscriber"],
              value: function value() {
                return new SubjectSubscriber(this);
              }
            }, {
              key: "lift",
              value: function lift(operator) {
                var subject = new AnonymousSubject(this, this);
                subject.operator = operator;
                return subject;
              }
            }, {
              key: "next",
              value: function next(value) {
                if (this.closed) {
                  throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
                }

                if (!this.isStopped) {
                  var observers = this.observers;
                  var len = observers.length;
                  var copy = observers.slice();

                  for (var i = 0; i < len; i++) {
                    copy[i].next(value);
                  }
                }
              }
            }, {
              key: "error",
              value: function error(err) {
                if (this.closed) {
                  throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
                }

                this.hasError = true;
                this.thrownError = err;
                this.isStopped = true;
                var observers = this.observers;
                var len = observers.length;
                var copy = observers.slice();

                for (var i = 0; i < len; i++) {
                  copy[i].error(err);
                }

                this.observers.length = 0;
              }
            }, {
              key: "complete",
              value: function complete() {
                if (this.closed) {
                  throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
                }

                this.isStopped = true;
                var observers = this.observers;
                var len = observers.length;
                var copy = observers.slice();

                for (var i = 0; i < len; i++) {
                  copy[i].complete();
                }

                this.observers.length = 0;
              }
            }, {
              key: "unsubscribe",
              value: function unsubscribe() {
                this.isStopped = true;
                this.closed = true;
                this.observers = null;
              }
            }, {
              key: "_trySubscribe",
              value: function _trySubscribe(subscriber) {
                if (this.closed) {
                  throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
                } else {
                  return _get(_getPrototypeOf(Subject.prototype), "_trySubscribe", this).call(this, subscriber);
                }
              }
            }, {
              key: "_subscribe",
              value: function _subscribe(subscriber) {
                if (this.closed) {
                  throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
                } else if (this.hasError) {
                  subscriber.error(this.thrownError);
                  return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
                } else if (this.isStopped) {
                  subscriber.complete();
                  return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
                } else {
                  this.observers.push(subscriber);
                  return new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_4__["SubjectSubscription"](this, subscriber);
                }
              }
            }, {
              key: "asObservable",
              value: function asObservable() {
                var observable = new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
                observable.source = this;
                return observable;
              }
            }]);

            return Subject;
          }(_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]);

          Subject.create = function (destination, source) {
            return new AnonymousSubject(destination, source);
          };

          var AnonymousSubject = /*#__PURE__*/function (_Subject) {
            _inherits(AnonymousSubject, _Subject);

            var _super55 = _createSuper(AnonymousSubject);

            function AnonymousSubject(destination, source) {
              var _this55;

              _classCallCheck(this, AnonymousSubject);

              _this55 = _super55.call(this);
              _this55.destination = destination;
              _this55.source = source;
              return _this55;
            }

            _createClass(AnonymousSubject, [{
              key: "next",
              value: function next(value) {
                var destination = this.destination;

                if (destination && destination.next) {
                  destination.next(value);
                }
              }
            }, {
              key: "error",
              value: function error(err) {
                var destination = this.destination;

                if (destination && destination.error) {
                  this.destination.error(err);
                }
              }
            }, {
              key: "complete",
              value: function complete() {
                var destination = this.destination;

                if (destination && destination.complete) {
                  this.destination.complete();
                }
              }
            }, {
              key: "_subscribe",
              value: function _subscribe(subscriber) {
                var source = this.source;

                if (source) {
                  return this.source.subscribe(subscriber);
                } else {
                  return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
                }
              }
            }]);

            return AnonymousSubject;
          }(Subject); //# sourceMappingURL=Subject.js.map

          /***/

        },

        /***/
        "ZzcO":
        /*!***********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/exhaustMap.js ***!
          \***********************************************************************************************/

        /*! exports provided: exhaustMap */

        /***/
        function ZzcO(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "exhaustMap", function () {
            return exhaustMap;
          });
          /* harmony import */


          var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./map */
          "YtkY");
          /* harmony import */


          var _observable_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../observable/from */
          "GoAz");
          /* harmony import */


          var _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../innerSubscribe */
          "uCWR");

          function exhaustMap(project, resultSelector) {
            if (resultSelector) {
              return function (source) {
                return source.pipe(exhaustMap(function (a, i) {
                  return Object(_observable_from__WEBPACK_IMPORTED_MODULE_1__["from"])(project(a, i)).pipe(Object(_map__WEBPACK_IMPORTED_MODULE_0__["map"])(function (b, ii) {
                    return resultSelector(a, b, i, ii);
                  }));
                }));
              };
            }

            return function (source) {
              return source.lift(new ExhaustMapOperator(project));
            };
          }

          var ExhaustMapOperator = /*#__PURE__*/function () {
            function ExhaustMapOperator(project) {
              _classCallCheck(this, ExhaustMapOperator);

              this.project = project;
            }

            _createClass(ExhaustMapOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new ExhaustMapSubscriber(subscriber, this.project));
              }
            }]);

            return ExhaustMapOperator;
          }();

          var ExhaustMapSubscriber = /*#__PURE__*/function (_innerSubscribe__WEBP11) {
            _inherits(ExhaustMapSubscriber, _innerSubscribe__WEBP11);

            var _super56 = _createSuper(ExhaustMapSubscriber);

            function ExhaustMapSubscriber(destination, project) {
              var _this56;

              _classCallCheck(this, ExhaustMapSubscriber);

              _this56 = _super56.call(this, destination);
              _this56.project = project;
              _this56.hasSubscription = false;
              _this56.hasCompleted = false;
              _this56.index = 0;
              return _this56;
            }

            _createClass(ExhaustMapSubscriber, [{
              key: "_next",
              value: function _next(value) {
                if (!this.hasSubscription) {
                  this.tryNext(value);
                }
              }
            }, {
              key: "tryNext",
              value: function tryNext(value) {
                var result;
                var index = this.index++;

                try {
                  result = this.project(value, index);
                } catch (err) {
                  this.destination.error(err);
                  return;
                }

                this.hasSubscription = true;

                this._innerSub(result);
              }
            }, {
              key: "_innerSub",
              value: function _innerSub(result) {
                var innerSubscriber = new _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["SimpleInnerSubscriber"](this);
                var destination = this.destination;
                destination.add(innerSubscriber);
                var innerSubscription = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["innerSubscribe"])(result, innerSubscriber);

                if (innerSubscription !== innerSubscriber) {
                  destination.add(innerSubscription);
                }
              }
            }, {
              key: "_complete",
              value: function _complete() {
                this.hasCompleted = true;

                if (!this.hasSubscription) {
                  this.destination.complete();
                }

                this.unsubscribe();
              }
            }, {
              key: "notifyNext",
              value: function notifyNext(innerValue) {
                this.destination.next(innerValue);
              }
            }, {
              key: "notifyError",
              value: function notifyError(err) {
                this.destination.error(err);
              }
            }, {
              key: "notifyComplete",
              value: function notifyComplete() {
                this.hasSubscription = false;

                if (this.hasCompleted) {
                  this.destination.complete();
                }
              }
            }]);

            return ExhaustMapSubscriber;
          }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["SimpleOuterSubscriber"]); //# sourceMappingURL=exhaustMap.js.map

          /***/

        },

        /***/
        "aNQL":
        /*!******************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/onErrorResumeNext.js ***!
          \******************************************************************************************************/

        /*! exports provided: onErrorResumeNext, onErrorResumeNextStatic */

        /***/
        function aNQL(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function () {
            return onErrorResumeNext;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "onErrorResumeNextStatic", function () {
            return onErrorResumeNextStatic;
          });
          /* harmony import */


          var _observable_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../observable/from */
          "GoAz");
          /* harmony import */


          var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../util/isArray */
          "FU6l");
          /* harmony import */


          var _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../innerSubscribe */
          "uCWR");

          function onErrorResumeNext() {
            for (var _len8 = arguments.length, nextSources = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
              nextSources[_key8] = arguments[_key8];
            }

            if (nextSources.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(nextSources[0])) {
              nextSources = nextSources[0];
            }

            return function (source) {
              return source.lift(new OnErrorResumeNextOperator(nextSources));
            };
          }

          function onErrorResumeNextStatic() {
            for (var _len9 = arguments.length, nextSources = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
              nextSources[_key9] = arguments[_key9];
            }

            var source = undefined;

            if (nextSources.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(nextSources[0])) {
              nextSources = nextSources[0];
            }

            source = nextSources.shift();
            return Object(_observable_from__WEBPACK_IMPORTED_MODULE_0__["from"])(source).lift(new OnErrorResumeNextOperator(nextSources));
          }

          var OnErrorResumeNextOperator = /*#__PURE__*/function () {
            function OnErrorResumeNextOperator(nextSources) {
              _classCallCheck(this, OnErrorResumeNextOperator);

              this.nextSources = nextSources;
            }

            _createClass(OnErrorResumeNextOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new OnErrorResumeNextSubscriber(subscriber, this.nextSources));
              }
            }]);

            return OnErrorResumeNextOperator;
          }();

          var OnErrorResumeNextSubscriber = /*#__PURE__*/function (_innerSubscribe__WEBP12) {
            _inherits(OnErrorResumeNextSubscriber, _innerSubscribe__WEBP12);

            var _super57 = _createSuper(OnErrorResumeNextSubscriber);

            function OnErrorResumeNextSubscriber(destination, nextSources) {
              var _this57;

              _classCallCheck(this, OnErrorResumeNextSubscriber);

              _this57 = _super57.call(this, destination);
              _this57.destination = destination;
              _this57.nextSources = nextSources;
              return _this57;
            }

            _createClass(OnErrorResumeNextSubscriber, [{
              key: "notifyError",
              value: function notifyError() {
                this.subscribeToNextSource();
              }
            }, {
              key: "notifyComplete",
              value: function notifyComplete() {
                this.subscribeToNextSource();
              }
            }, {
              key: "_error",
              value: function _error(err) {
                this.subscribeToNextSource();
                this.unsubscribe();
              }
            }, {
              key: "_complete",
              value: function _complete() {
                this.subscribeToNextSource();
                this.unsubscribe();
              }
            }, {
              key: "subscribeToNextSource",
              value: function subscribeToNextSource() {
                var next = this.nextSources.shift();

                if (!!next) {
                  var innerSubscriber = new _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["SimpleInnerSubscriber"](this);
                  var destination = this.destination;
                  destination.add(innerSubscriber);
                  var innerSubscription = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["innerSubscribe"])(next, innerSubscriber);

                  if (innerSubscription !== innerSubscriber) {
                    destination.add(innerSubscription);
                  }
                } else {
                  this.destination.complete();
                }
              }
            }]);

            return OnErrorResumeNextSubscriber;
          }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["SimpleOuterSubscriber"]); //# sourceMappingURL=onErrorResumeNext.js.map

          /***/

        },

        /***/
        "aV0t":
        /*!*************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/startConnectionTimeout.js ***!
          \*************************************************************************************/

        /*! exports provided: default */

        /***/
        function aV0t(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony import */


          var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./enums */
          "Rj9D");
          /**
           * Starts a timeout and calls the callback with an error
           * if the timeout completes before the stop function is called.
           */

          /* harmony default export */


          __webpack_exports__["default"] = function (timeout, callback) {
            var timeoutId;

            if (timeout !== undefined) {
              timeoutId = window.setTimeout(function () {
                var error = new Error("Connection timed out after ".concat(timeout, "ms"));
                error.code = _enums__WEBPACK_IMPORTED_MODULE_0__["ErrorCode"].ConnectionTimeout;
                callback(error);
              }, timeout);
            }

            return function () {
              clearTimeout(timeoutId);
            };
          };
          /***/

        },

        /***/
        "aXqC":
        /*!********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/isEmpty.js ***!
          \********************************************************************************************/

        /*! exports provided: isEmpty */

        /***/
        function aXqC(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "isEmpty", function () {
            return isEmpty;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");

          function isEmpty() {
            return function (source) {
              return source.lift(new IsEmptyOperator());
            };
          }

          var IsEmptyOperator = /*#__PURE__*/function () {
            function IsEmptyOperator() {
              _classCallCheck(this, IsEmptyOperator);
            }

            _createClass(IsEmptyOperator, [{
              key: "call",
              value: function call(observer, source) {
                return source.subscribe(new IsEmptySubscriber(observer));
              }
            }]);

            return IsEmptyOperator;
          }();

          var IsEmptySubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_26) {
            _inherits(IsEmptySubscriber, _Subscriber__WEBPACK_26);

            var _super58 = _createSuper(IsEmptySubscriber);

            function IsEmptySubscriber(destination) {
              _classCallCheck(this, IsEmptySubscriber);

              return _super58.call(this, destination);
            }

            _createClass(IsEmptySubscriber, [{
              key: "notifyComplete",
              value: function notifyComplete(isEmpty) {
                var destination = this.destination;
                destination.next(isEmpty);
                destination.complete();
              }
            }, {
              key: "_next",
              value: function _next(value) {
                this.notifyComplete(false);
              }
            }, {
              key: "_complete",
              value: function _complete() {
                this.notifyComplete(true);
              }
            }]);

            return IsEmptySubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=isEmpty.js.map

          /***/

        },

        /***/
        "bl/x":
        /*!******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/retry.js ***!
          \******************************************************************************************/

        /*! exports provided: retry */

        /***/
        function blX(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "retry", function () {
            return retry;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");

          function retry() {
            var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
            return function (source) {
              return source.lift(new RetryOperator(count, source));
            };
          }

          var RetryOperator = /*#__PURE__*/function () {
            function RetryOperator(count, source) {
              _classCallCheck(this, RetryOperator);

              this.count = count;
              this.source = source;
            }

            _createClass(RetryOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new RetrySubscriber(subscriber, this.count, this.source));
              }
            }]);

            return RetryOperator;
          }();

          var RetrySubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_27) {
            _inherits(RetrySubscriber, _Subscriber__WEBPACK_27);

            var _super59 = _createSuper(RetrySubscriber);

            function RetrySubscriber(destination, count, source) {
              var _this58;

              _classCallCheck(this, RetrySubscriber);

              _this58 = _super59.call(this, destination);
              _this58.count = count;
              _this58.source = source;
              return _this58;
            }

            _createClass(RetrySubscriber, [{
              key: "error",
              value: function error(err) {
                if (!this.isStopped) {
                  var source = this.source,
                      count = this.count;

                  if (count === 0) {
                    return _get(_getPrototypeOf(RetrySubscriber.prototype), "error", this).call(this, err);
                  } else if (count > -1) {
                    this.count = count - 1;
                  }

                  source.subscribe(this._unsubscribeAndRecycle());
                }
              }
            }]);

            return RetrySubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=retry.js.map

          /***/

        },

        /***/
        "bwdy":
        /*!***************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/Subscription.js ***!
          \***************************************************************************************/

        /*! exports provided: Subscription */

        /***/
        function bwdy(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "Subscription", function () {
            return Subscription;
          });
          /* harmony import */


          var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./util/isArray */
          "FU6l");
          /* harmony import */


          var _util_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./util/isObject */
          "X0qr");
          /* harmony import */


          var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./util/isFunction */
          "IJgj");
          /* harmony import */


          var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./util/UnsubscriptionError */
          "uTrF");

          var Subscription = /*#__PURE__*/function () {
            function Subscription(unsubscribe) {
              _classCallCheck(this, Subscription);

              this.closed = false;
              this._parentOrParents = null;
              this._subscriptions = null;

              if (unsubscribe) {
                this._ctorUnsubscribe = true;
                this._unsubscribe = unsubscribe;
              }
            }

            _createClass(Subscription, [{
              key: "unsubscribe",
              value: function unsubscribe() {
                var errors;

                if (this.closed) {
                  return;
                }

                var _parentOrParents = this._parentOrParents,
                    _ctorUnsubscribe = this._ctorUnsubscribe,
                    _unsubscribe = this._unsubscribe,
                    _subscriptions = this._subscriptions;
                this.closed = true;
                this._parentOrParents = null;
                this._subscriptions = null;

                if (_parentOrParents instanceof Subscription) {
                  _parentOrParents.remove(this);
                } else if (_parentOrParents !== null) {
                  for (var index = 0; index < _parentOrParents.length; ++index) {
                    var _parent = _parentOrParents[index];

                    _parent.remove(this);
                  }
                }

                if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(_unsubscribe)) {
                  if (_ctorUnsubscribe) {
                    this._unsubscribe = undefined;
                  }

                  try {
                    _unsubscribe.call(this);
                  } catch (e) {
                    errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"] ? flattenUnsubscriptionErrors(e.errors) : [e];
                  }
                }

                if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(_subscriptions)) {
                  var _index = -1;

                  var len = _subscriptions.length;

                  while (++_index < len) {
                    var sub = _subscriptions[_index];

                    if (Object(_util_isObject__WEBPACK_IMPORTED_MODULE_1__["isObject"])(sub)) {
                      try {
                        sub.unsubscribe();
                      } catch (e) {
                        errors = errors || [];

                        if (e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"]) {
                          errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        } else {
                          errors.push(e);
                        }
                      }
                    }
                  }
                }

                if (errors) {
                  throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"](errors);
                }
              }
            }, {
              key: "add",
              value: function add(teardown) {
                var subscription = teardown;

                if (!teardown) {
                  return Subscription.EMPTY;
                }

                switch (typeof teardown) {
                  case 'function':
                    subscription = new Subscription(teardown);

                  case 'object':
                    if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                      return subscription;
                    } else if (this.closed) {
                      subscription.unsubscribe();
                      return subscription;
                    } else if (!(subscription instanceof Subscription)) {
                      var tmp = subscription;
                      subscription = new Subscription();
                      subscription._subscriptions = [tmp];
                    }

                    break;

                  default:
                    {
                      throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
                    }
                }

                var _subscription = subscription,
                    _parentOrParents = _subscription._parentOrParents;

                if (_parentOrParents === null) {
                  subscription._parentOrParents = this;
                } else if (_parentOrParents instanceof Subscription) {
                  if (_parentOrParents === this) {
                    return subscription;
                  }

                  subscription._parentOrParents = [_parentOrParents, this];
                } else if (_parentOrParents.indexOf(this) === -1) {
                  _parentOrParents.push(this);
                } else {
                  return subscription;
                }

                var subscriptions = this._subscriptions;

                if (subscriptions === null) {
                  this._subscriptions = [subscription];
                } else {
                  subscriptions.push(subscription);
                }

                return subscription;
              }
            }, {
              key: "remove",
              value: function remove(subscription) {
                var subscriptions = this._subscriptions;

                if (subscriptions) {
                  var subscriptionIndex = subscriptions.indexOf(subscription);

                  if (subscriptionIndex !== -1) {
                    subscriptions.splice(subscriptionIndex, 1);
                  }
                }
              }
            }]);

            return Subscription;
          }();

          Subscription.EMPTY = function (empty) {
            empty.closed = true;
            return empty;
          }(new Subscription());

          function flattenUnsubscriptionErrors(errors) {
            return errors.reduce(function (errs, err) {
              return errs.concat(err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"] ? err.errors : err);
            }, []);
          } //# sourceMappingURL=Subscription.js.map

          /***/

        },

        /***/
        "cJ9h":
        /*!*********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/mergeMap.js ***!
          \*********************************************************************************************/

        /*! exports provided: mergeMap, MergeMapOperator, MergeMapSubscriber, flatMap */

        /***/
        function cJ9h(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "mergeMap", function () {
            return mergeMap;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "MergeMapOperator", function () {
            return MergeMapOperator;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "MergeMapSubscriber", function () {
            return MergeMapSubscriber;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "flatMap", function () {
            return flatMap;
          });
          /* harmony import */


          var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./map */
          "YtkY");
          /* harmony import */


          var _observable_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../observable/from */
          "GoAz");
          /* harmony import */


          var _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../innerSubscribe */
          "uCWR");

          function mergeMap(project, resultSelector) {
            var concurrent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.POSITIVE_INFINITY;

            if (typeof resultSelector === 'function') {
              return function (source) {
                return source.pipe(mergeMap(function (a, i) {
                  return Object(_observable_from__WEBPACK_IMPORTED_MODULE_1__["from"])(project(a, i)).pipe(Object(_map__WEBPACK_IMPORTED_MODULE_0__["map"])(function (b, ii) {
                    return resultSelector(a, b, i, ii);
                  }));
                }, concurrent));
              };
            } else if (typeof resultSelector === 'number') {
              concurrent = resultSelector;
            }

            return function (source) {
              return source.lift(new MergeMapOperator(project, concurrent));
            };
          }

          var MergeMapOperator = /*#__PURE__*/function () {
            function MergeMapOperator(project) {
              var concurrent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.POSITIVE_INFINITY;

              _classCallCheck(this, MergeMapOperator);

              this.project = project;
              this.concurrent = concurrent;
            }

            _createClass(MergeMapOperator, [{
              key: "call",
              value: function call(observer, source) {
                return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
              }
            }]);

            return MergeMapOperator;
          }();

          var MergeMapSubscriber = /*#__PURE__*/function (_innerSubscribe__WEBP13) {
            _inherits(MergeMapSubscriber, _innerSubscribe__WEBP13);

            var _super60 = _createSuper(MergeMapSubscriber);

            function MergeMapSubscriber(destination, project) {
              var _this59;

              var concurrent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.POSITIVE_INFINITY;

              _classCallCheck(this, MergeMapSubscriber);

              _this59 = _super60.call(this, destination);
              _this59.project = project;
              _this59.concurrent = concurrent;
              _this59.hasCompleted = false;
              _this59.buffer = [];
              _this59.active = 0;
              _this59.index = 0;
              return _this59;
            }

            _createClass(MergeMapSubscriber, [{
              key: "_next",
              value: function _next(value) {
                if (this.active < this.concurrent) {
                  this._tryNext(value);
                } else {
                  this.buffer.push(value);
                }
              }
            }, {
              key: "_tryNext",
              value: function _tryNext(value) {
                var result;
                var index = this.index++;

                try {
                  result = this.project(value, index);
                } catch (err) {
                  this.destination.error(err);
                  return;
                }

                this.active++;

                this._innerSub(result);
              }
            }, {
              key: "_innerSub",
              value: function _innerSub(ish) {
                var innerSubscriber = new _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["SimpleInnerSubscriber"](this);
                var destination = this.destination;
                destination.add(innerSubscriber);
                var innerSubscription = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["innerSubscribe"])(ish, innerSubscriber);

                if (innerSubscription !== innerSubscriber) {
                  destination.add(innerSubscription);
                }
              }
            }, {
              key: "_complete",
              value: function _complete() {
                this.hasCompleted = true;

                if (this.active === 0 && this.buffer.length === 0) {
                  this.destination.complete();
                }

                this.unsubscribe();
              }
            }, {
              key: "notifyNext",
              value: function notifyNext(innerValue) {
                this.destination.next(innerValue);
              }
            }, {
              key: "notifyComplete",
              value: function notifyComplete() {
                var buffer = this.buffer;
                this.active--;

                if (buffer.length > 0) {
                  this._next(buffer.shift());
                } else if (this.active === 0 && this.hasCompleted) {
                  this.destination.complete();
                }
              }
            }]);

            return MergeMapSubscriber;
          }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["SimpleOuterSubscriber"]);

          var flatMap = mergeMap; //# sourceMappingURL=mergeMap.js.map

          /***/
        },

        /***/
        "ckkg":
        /*!***********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/fromArray.js ***!
          \***********************************************************************************************/

        /*! exports provided: fromArray */

        /***/
        function ckkg(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "fromArray", function () {
            return fromArray;
          });
          /* harmony import */


          var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Observable */
          "IdLP");
          /* harmony import */


          var _util_subscribeToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../util/subscribeToArray */
          "dUuy");
          /* harmony import */


          var _scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../scheduled/scheduleArray */
          "czMQ");

          function fromArray(input, scheduler) {
            if (!scheduler) {
              return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToArray__WEBPACK_IMPORTED_MODULE_1__["subscribeToArray"])(input));
            } else {
              return Object(_scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__["scheduleArray"])(input, scheduler);
            }
          } //# sourceMappingURL=fromArray.js.map

          /***/

        },

        /***/
        "cmhy":
        /*!********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/TimeoutError.js ***!
          \********************************************************************************************/

        /*! exports provided: TimeoutError */

        /***/
        function cmhy(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "TimeoutError", function () {
            return TimeoutError;
          });

          var TimeoutErrorImpl = function () {
            function TimeoutErrorImpl() {
              Error.call(this);
              this.message = 'Timeout has occurred';
              this.name = 'TimeoutError';
              return this;
            }

            TimeoutErrorImpl.prototype = Object.create(Error.prototype);
            return TimeoutErrorImpl;
          }();

          var TimeoutError = TimeoutErrorImpl; //# sourceMappingURL=TimeoutError.js.map

          /***/
        },

        /***/
        "czMQ":
        /*!**************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduled/scheduleArray.js ***!
          \**************************************************************************************************/

        /*! exports provided: scheduleArray */

        /***/
        function czMQ(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "scheduleArray", function () {
            return scheduleArray;
          });
          /* harmony import */


          var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Observable */
          "IdLP");
          /* harmony import */


          var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../Subscription */
          "bwdy");

          function scheduleArray(input, scheduler) {
            return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
              var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
              var i = 0;
              sub.add(scheduler.schedule(function () {
                if (i === input.length) {
                  subscriber.complete();
                  return;
                }

                subscriber.next(input[i++]);

                if (!subscriber.closed) {
                  sub.add(this.schedule());
                }
              }));
              return sub;
            });
          } //# sourceMappingURL=scheduleArray.js.map

          /***/

        },

        /***/
        "d+O9":
        /*!*******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
          \*******************************************************************************************/

        /*! exports provided: Action */

        /***/
        function dO9(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "Action", function () {
            return Action;
          });
          /* harmony import */


          var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscription */
          "bwdy");

          var Action = /*#__PURE__*/function (_Subscription__WEBPAC2) {
            _inherits(Action, _Subscription__WEBPAC2);

            var _super61 = _createSuper(Action);

            function Action(scheduler, work) {
              _classCallCheck(this, Action);

              return _super61.call(this);
            }

            _createClass(Action, [{
              key: "schedule",
              value: function schedule(state) {
                var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                return this;
              }
            }]);

            return Action;
          }(_Subscription__WEBPACK_IMPORTED_MODULE_0__["Subscription"]); //# sourceMappingURL=Action.js.map

          /***/

        },

        /***/
        "dUuy":
        /*!************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/subscribeToArray.js ***!
          \************************************************************************************************/

        /*! exports provided: subscribeToArray */

        /***/
        function dUuy(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "subscribeToArray", function () {
            return subscribeToArray;
          });

          var subscribeToArray = function subscribeToArray(array) {
            return function (subscriber) {
              for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
                subscriber.next(array[i]);
              }

              subscriber.complete();
            };
          }; //# sourceMappingURL=subscribeToArray.js.map

          /***/

        },

        /***/
        "eY+9":
        /*!*******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/isArrayLike.js ***!
          \*******************************************************************************************/

        /*! exports provided: isArrayLike */

        /***/
        function eY9(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "isArrayLike", function () {
            return isArrayLike;
          });

          var isArrayLike = function isArrayLike(x) {
            return x && typeof x.length === 'number' && typeof x !== 'function';
          }; //# sourceMappingURL=isArrayLike.js.map

          /***/

        },

        /***/
        "eZPq":
        /*!**********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/elementAt.js ***!
          \**********************************************************************************************/

        /*! exports provided: elementAt */

        /***/
        function eZPq(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "elementAt", function () {
            return elementAt;
          });
          /* harmony import */


          var _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../util/ArgumentOutOfRangeError */
          "PNff");
          /* harmony import */


          var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./filter */
          "xVbo");
          /* harmony import */


          var _throwIfEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./throwIfEmpty */
          "fbWu");
          /* harmony import */


          var _defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./defaultIfEmpty */
          "iqFP");
          /* harmony import */


          var _take__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./take */
          "J+dc");

          function elementAt(index, defaultValue) {
            if (index < 0) {
              throw new _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_0__["ArgumentOutOfRangeError"]();
            }

            var hasDefaultValue = arguments.length >= 2;
            return function (source) {
              return source.pipe(Object(_filter__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (v, i) {
                return i === index;
              }), Object(_take__WEBPACK_IMPORTED_MODULE_4__["take"])(1), hasDefaultValue ? Object(_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__["defaultIfEmpty"])(defaultValue) : Object(_throwIfEmpty__WEBPACK_IMPORTED_MODULE_2__["throwIfEmpty"])(function () {
                return new _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_0__["ArgumentOutOfRangeError"]();
              }));
            };
          } //# sourceMappingURL=elementAt.js.map

          /***/

        },

        /***/
        "f/66":
        /*!*******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/expand.js ***!
          \*******************************************************************************************/

        /*! exports provided: expand, ExpandOperator, ExpandSubscriber */

        /***/
        function f66(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "expand", function () {
            return expand;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "ExpandOperator", function () {
            return ExpandOperator;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "ExpandSubscriber", function () {
            return ExpandSubscriber;
          });
          /* harmony import */


          var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../innerSubscribe */
          "uCWR");

          function expand(project) {
            var concurrent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.POSITIVE_INFINITY;
            var scheduler = arguments.length > 2 ? arguments[2] : undefined;
            concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
            return function (source) {
              return source.lift(new ExpandOperator(project, concurrent, scheduler));
            };
          }

          var ExpandOperator = /*#__PURE__*/function () {
            function ExpandOperator(project, concurrent, scheduler) {
              _classCallCheck(this, ExpandOperator);

              this.project = project;
              this.concurrent = concurrent;
              this.scheduler = scheduler;
            }

            _createClass(ExpandOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler));
              }
            }]);

            return ExpandOperator;
          }();

          var ExpandSubscriber = /*#__PURE__*/function (_innerSubscribe__WEBP14) {
            _inherits(ExpandSubscriber, _innerSubscribe__WEBP14);

            var _super62 = _createSuper(ExpandSubscriber);

            function ExpandSubscriber(destination, project, concurrent, scheduler) {
              var _this60;

              _classCallCheck(this, ExpandSubscriber);

              _this60 = _super62.call(this, destination);
              _this60.project = project;
              _this60.concurrent = concurrent;
              _this60.scheduler = scheduler;
              _this60.index = 0;
              _this60.active = 0;
              _this60.hasCompleted = false;

              if (concurrent < Number.POSITIVE_INFINITY) {
                _this60.buffer = [];
              }

              return _this60;
            }

            _createClass(ExpandSubscriber, [{
              key: "_next",
              value: function _next(value) {
                var destination = this.destination;

                if (destination.closed) {
                  this._complete();

                  return;
                }

                var index = this.index++;

                if (this.active < this.concurrent) {
                  destination.next(value);

                  try {
                    var project = this.project;
                    var result = project(value, index);

                    if (!this.scheduler) {
                      this.subscribeToProjection(result, value, index);
                    } else {
                      var state = {
                        subscriber: this,
                        result: result,
                        value: value,
                        index: index
                      };
                      var _destination = this.destination;

                      _destination.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
                    }
                  } catch (e) {
                    destination.error(e);
                  }
                } else {
                  this.buffer.push(value);
                }
              }
            }, {
              key: "subscribeToProjection",
              value: function subscribeToProjection(result, value, index) {
                this.active++;
                var destination = this.destination;
                destination.add(Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["innerSubscribe"])(result, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleInnerSubscriber"](this)));
              }
            }, {
              key: "_complete",
              value: function _complete() {
                this.hasCompleted = true;

                if (this.hasCompleted && this.active === 0) {
                  this.destination.complete();
                }

                this.unsubscribe();
              }
            }, {
              key: "notifyNext",
              value: function notifyNext(innerValue) {
                this._next(innerValue);
              }
            }, {
              key: "notifyComplete",
              value: function notifyComplete() {
                var buffer = this.buffer;
                this.active--;

                if (buffer && buffer.length > 0) {
                  this._next(buffer.shift());
                }

                if (this.hasCompleted && this.active === 0) {
                  this.destination.complete();
                }
              }
            }], [{
              key: "dispatch",
              value: function dispatch(arg) {
                var subscriber = arg.subscriber,
                    result = arg.result,
                    value = arg.value,
                    index = arg.index;
                subscriber.subscribeToProjection(result, value, index);
              }
            }]);

            return ExpandSubscriber;
          }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleOuterSubscriber"]); //# sourceMappingURL=expand.js.map

          /***/

        },

        /***/
        "f8VV":
        /*!***********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduler/AsapAction.js ***!
          \***********************************************************************************************/

        /*! exports provided: AsapAction */

        /***/
        function f8VV(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "AsapAction", function () {
            return AsapAction;
          });
          /* harmony import */


          var _util_Immediate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../util/Immediate */
          "L7US");
          /* harmony import */


          var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./AsyncAction */
          "EWqr");

          var AsapAction = /*#__PURE__*/function (_AsyncAction__WEBPACK2) {
            _inherits(AsapAction, _AsyncAction__WEBPACK2);

            var _super63 = _createSuper(AsapAction);

            function AsapAction(scheduler, work) {
              var _this61;

              _classCallCheck(this, AsapAction);

              _this61 = _super63.call(this, scheduler, work);
              _this61.scheduler = scheduler;
              _this61.work = work;
              return _this61;
            }

            _createClass(AsapAction, [{
              key: "requestAsyncId",
              value: function requestAsyncId(scheduler, id) {
                var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

                if (delay !== null && delay > 0) {
                  return _get(_getPrototypeOf(AsapAction.prototype), "requestAsyncId", this).call(this, scheduler, id, delay);
                }

                scheduler.actions.push(this);
                return scheduler.scheduled || (scheduler.scheduled = _util_Immediate__WEBPACK_IMPORTED_MODULE_0__["Immediate"].setImmediate(scheduler.flush.bind(scheduler, null)));
              }
            }, {
              key: "recycleAsyncId",
              value: function recycleAsyncId(scheduler, id) {
                var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

                if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
                  return _get(_getPrototypeOf(AsapAction.prototype), "recycleAsyncId", this).call(this, scheduler, id, delay);
                }

                if (scheduler.actions.length === 0) {
                  _util_Immediate__WEBPACK_IMPORTED_MODULE_0__["Immediate"].clearImmediate(id);

                  scheduler.scheduled = undefined;
                }

                return undefined;
              }
            }]);

            return AsapAction;
          }(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__["AsyncAction"]); //# sourceMappingURL=AsapAction.js.map

          /***/

        },

        /***/
        "fNrB":
        /*!**********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/mergeScan.js ***!
          \**********************************************************************************************/

        /*! exports provided: mergeScan, MergeScanOperator, MergeScanSubscriber */

        /***/
        function fNrB(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "mergeScan", function () {
            return mergeScan;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "MergeScanOperator", function () {
            return MergeScanOperator;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "MergeScanSubscriber", function () {
            return MergeScanSubscriber;
          });
          /* harmony import */


          var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../innerSubscribe */
          "uCWR");

          function mergeScan(accumulator, seed) {
            var concurrent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.POSITIVE_INFINITY;
            return function (source) {
              return source.lift(new MergeScanOperator(accumulator, seed, concurrent));
            };
          }

          var MergeScanOperator = /*#__PURE__*/function () {
            function MergeScanOperator(accumulator, seed, concurrent) {
              _classCallCheck(this, MergeScanOperator);

              this.accumulator = accumulator;
              this.seed = seed;
              this.concurrent = concurrent;
            }

            _createClass(MergeScanOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new MergeScanSubscriber(subscriber, this.accumulator, this.seed, this.concurrent));
              }
            }]);

            return MergeScanOperator;
          }();

          var MergeScanSubscriber = /*#__PURE__*/function (_innerSubscribe__WEBP15) {
            _inherits(MergeScanSubscriber, _innerSubscribe__WEBP15);

            var _super64 = _createSuper(MergeScanSubscriber);

            function MergeScanSubscriber(destination, accumulator, acc, concurrent) {
              var _this62;

              _classCallCheck(this, MergeScanSubscriber);

              _this62 = _super64.call(this, destination);
              _this62.accumulator = accumulator;
              _this62.acc = acc;
              _this62.concurrent = concurrent;
              _this62.hasValue = false;
              _this62.hasCompleted = false;
              _this62.buffer = [];
              _this62.active = 0;
              _this62.index = 0;
              return _this62;
            }

            _createClass(MergeScanSubscriber, [{
              key: "_next",
              value: function _next(value) {
                if (this.active < this.concurrent) {
                  var index = this.index++;
                  var destination = this.destination;
                  var ish;

                  try {
                    var accumulator = this.accumulator;
                    ish = accumulator(this.acc, value, index);
                  } catch (e) {
                    return destination.error(e);
                  }

                  this.active++;

                  this._innerSub(ish);
                } else {
                  this.buffer.push(value);
                }
              }
            }, {
              key: "_innerSub",
              value: function _innerSub(ish) {
                var innerSubscriber = new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleInnerSubscriber"](this);
                var destination = this.destination;
                destination.add(innerSubscriber);
                var innerSubscription = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["innerSubscribe"])(ish, innerSubscriber);

                if (innerSubscription !== innerSubscriber) {
                  destination.add(innerSubscription);
                }
              }
            }, {
              key: "_complete",
              value: function _complete() {
                this.hasCompleted = true;

                if (this.active === 0 && this.buffer.length === 0) {
                  if (this.hasValue === false) {
                    this.destination.next(this.acc);
                  }

                  this.destination.complete();
                }

                this.unsubscribe();
              }
            }, {
              key: "notifyNext",
              value: function notifyNext(innerValue) {
                var destination = this.destination;
                this.acc = innerValue;
                this.hasValue = true;
                destination.next(innerValue);
              }
            }, {
              key: "notifyComplete",
              value: function notifyComplete() {
                var buffer = this.buffer;
                this.active--;

                if (buffer.length > 0) {
                  this._next(buffer.shift());
                } else if (this.active === 0 && this.hasCompleted) {
                  if (this.hasValue === false) {
                    this.destination.next(this.acc);
                  }

                  this.destination.complete();
                }
              }
            }]);

            return MergeScanSubscriber;
          }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleOuterSubscriber"]); //# sourceMappingURL=mergeScan.js.map

          /***/

        },

        /***/
        "fSpn":
        /*!************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/child/connectToParent.js ***!
          \************************************************************************************/

        /*! exports provided: default */

        /***/
        function fSpn(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony import */


          var _createDestructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../createDestructor */
          "tUyG");
          /* harmony import */


          var _createLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../createLogger */
          "hmHb");
          /* harmony import */


          var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../enums */
          "Rj9D");
          /* harmony import */


          var _validateWindowIsIframe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./validateWindowIsIframe */
          "B+tH");
          /* harmony import */


          var _handleSynAckMessageFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./handleSynAckMessageFactory */
          "Hk/K");
          /* harmony import */


          var _startConnectionTimeout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../startConnectionTimeout */
          "aV0t");

          var areGlobalsAccessible = function areGlobalsAccessible() {
            try {
              clearTimeout();
            } catch (e) {
              return false;
            }

            return true;
          };
          /**
           * Attempts to establish communication with the parent window.
           */

          /* harmony default export */


          __webpack_exports__["default"] = function () {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var _options$parentOrigin = options.parentOrigin,
                parentOrigin = _options$parentOrigin === void 0 ? '*' : _options$parentOrigin,
                _options$methods2 = options.methods,
                methods = _options$methods2 === void 0 ? {} : _options$methods2,
                timeout = options.timeout,
                _options$debug2 = options.debug,
                debug = _options$debug2 === void 0 ? false : _options$debug2;
            var log = Object(_createLogger__WEBPACK_IMPORTED_MODULE_1__["default"])(debug);
            var destructor = Object(_createDestructor__WEBPACK_IMPORTED_MODULE_0__["default"])();
            var _destroy2 = destructor.destroy,
                onDestroy = destructor.onDestroy;
            Object(_validateWindowIsIframe__WEBPACK_IMPORTED_MODULE_3__["default"])();
            var handleSynAckMessage = Object(_handleSynAckMessageFactory__WEBPACK_IMPORTED_MODULE_4__["default"])(parentOrigin, methods, destructor, log);

            var sendSynMessage = function sendSynMessage() {
              log('Child: Handshake - Sending SYN');
              var synMessage = {
                penpal: _enums__WEBPACK_IMPORTED_MODULE_2__["MessageType"].Syn
              };
              var parentOriginForSyn = parentOrigin instanceof RegExp ? '*' : parentOrigin;
              window.parent.postMessage(synMessage, parentOriginForSyn);
            };

            var promise = new Promise(function (resolve, reject) {
              var stopConnectionTimeout = Object(_startConnectionTimeout__WEBPACK_IMPORTED_MODULE_5__["default"])(timeout, _destroy2);

              var handleMessage = function handleMessage(event) {
                // Under niche scenarios, we get into this function after
                // the iframe has been removed from the DOM. In Edge, this
                // results in "Object expected" errors being thrown when we
                // try to access properties on window (global properties).
                // For this reason, we try to access a global up front (clearTimeout)
                // and if it fails we can assume the iframe has been removed
                // and we ignore the message event.
                if (!areGlobalsAccessible()) {
                  return;
                }

                if (event.source !== parent || !event.data) {
                  return;
                }

                if (event.data.penpal === _enums__WEBPACK_IMPORTED_MODULE_2__["MessageType"].SynAck) {
                  var callSender = handleSynAckMessage(event);

                  if (callSender) {
                    window.removeEventListener(_enums__WEBPACK_IMPORTED_MODULE_2__["NativeEventType"].Message, handleMessage);
                    stopConnectionTimeout();
                    resolve(callSender);
                  }
                }
              };

              window.addEventListener(_enums__WEBPACK_IMPORTED_MODULE_2__["NativeEventType"].Message, handleMessage);
              sendSynMessage();
              onDestroy(function (error) {
                window.removeEventListener(_enums__WEBPACK_IMPORTED_MODULE_2__["NativeEventType"].Message, handleMessage);

                if (!error) {
                  error = new Error('Connection destroyed');
                  error.code = _enums__WEBPACK_IMPORTED_MODULE_2__["ErrorCode"].ConnectionDestroyed;
                }

                reject(error);
              });
            });
            return {
              promise: promise,
              destroy: function destroy() {
                // Don't allow consumer to pass an error into destroy.
                _destroy2();
              }
            };
          };
          /***/

        },

        /***/
        "fbWu":
        /*!*************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/throwIfEmpty.js ***!
          \*************************************************************************************************/

        /*! exports provided: throwIfEmpty */

        /***/
        function fbWu(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "throwIfEmpty", function () {
            return throwIfEmpty;
          });
          /* harmony import */


          var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../util/EmptyError */
          "VxHp");
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");

          function throwIfEmpty() {
            var errorFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultErrorFactory;
            return function (source) {
              return source.lift(new ThrowIfEmptyOperator(errorFactory));
            };
          }

          var ThrowIfEmptyOperator = /*#__PURE__*/function () {
            function ThrowIfEmptyOperator(errorFactory) {
              _classCallCheck(this, ThrowIfEmptyOperator);

              this.errorFactory = errorFactory;
            }

            _createClass(ThrowIfEmptyOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new ThrowIfEmptySubscriber(subscriber, this.errorFactory));
              }
            }]);

            return ThrowIfEmptyOperator;
          }();

          var ThrowIfEmptySubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_28) {
            _inherits(ThrowIfEmptySubscriber, _Subscriber__WEBPACK_28);

            var _super65 = _createSuper(ThrowIfEmptySubscriber);

            function ThrowIfEmptySubscriber(destination, errorFactory) {
              var _this63;

              _classCallCheck(this, ThrowIfEmptySubscriber);

              _this63 = _super65.call(this, destination);
              _this63.errorFactory = errorFactory;
              _this63.hasValue = false;
              return _this63;
            }

            _createClass(ThrowIfEmptySubscriber, [{
              key: "_next",
              value: function _next(value) {
                this.hasValue = true;
                this.destination.next(value);
              }
            }, {
              key: "_complete",
              value: function _complete() {
                if (!this.hasValue) {
                  var err;

                  try {
                    err = this.errorFactory();
                  } catch (e) {
                    err = e;
                  }

                  this.destination.error(err);
                } else {
                  return this.destination.complete();
                }
              }
            }]);

            return ThrowIfEmptySubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]);

          function defaultErrorFactory() {
            return new _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__["EmptyError"]();
          } //# sourceMappingURL=throwIfEmpty.js.map

          /***/

        },

        /***/
        "flkW":
        /*!******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/merge.js ***!
          \******************************************************************************************/

        /*! exports provided: merge */

        /***/
        function flkW(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "merge", function () {
            return merge;
          });
          /* harmony import */


          var _observable_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../observable/merge */
          "g6G6");

          function merge() {
            for (var _len10 = arguments.length, observables = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
              observables[_key10] = arguments[_key10];
            }

            return function (source) {
              return source.lift.call(Object(_observable_merge__WEBPACK_IMPORTED_MODULE_0__["merge"]).apply(void 0, [source].concat(observables)));
            };
          } //# sourceMappingURL=merge.js.map

          /***/

        },

        /***/
        "fnmL":
        /*!**************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/combineLatest.js ***!
          \**************************************************************************************************/

        /*! exports provided: combineLatest */

        /***/
        function fnmL(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "combineLatest", function () {
            return combineLatest;
          });
          /* harmony import */


          var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../util/isArray */
          "FU6l");
          /* harmony import */


          var _observable_combineLatest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../observable/combineLatest */
          "HM3f");
          /* harmony import */


          var _observable_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../observable/from */
          "GoAz");

          var none = {};

          function combineLatest() {
            for (var _len11 = arguments.length, observables = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
              observables[_key11] = arguments[_key11];
            }

            var project = null;

            if (typeof observables[observables.length - 1] === 'function') {
              project = observables.pop();
            }

            if (observables.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(observables[0])) {
              observables = observables[0].slice();
            }

            return function (source) {
              return source.lift.call(Object(_observable_from__WEBPACK_IMPORTED_MODULE_2__["from"])([source].concat(_toConsumableArray(observables))), new _observable_combineLatest__WEBPACK_IMPORTED_MODULE_1__["CombineLatestOperator"](project));
            };
          } //# sourceMappingURL=combineLatest.js.map

          /***/

        },

        /***/
        "g6G6":
        /*!*******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/merge.js ***!
          \*******************************************************************************************/

        /*! exports provided: merge */

        /***/
        function g6G6(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "merge", function () {
            return merge;
          });
          /* harmony import */


          var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Observable */
          "IdLP");
          /* harmony import */


          var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../util/isScheduler */
          "gBlb");
          /* harmony import */


          var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../operators/mergeAll */
          "3lSR");
          /* harmony import */


          var _fromArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./fromArray */
          "ckkg");

          function merge() {
            var concurrent = Number.POSITIVE_INFINITY;
            var scheduler = null;

            for (var _len12 = arguments.length, observables = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
              observables[_key12] = arguments[_key12];
            }

            var last = observables[observables.length - 1];

            if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__["isScheduler"])(last)) {
              scheduler = observables.pop();

              if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
                concurrent = observables.pop();
              }
            } else if (typeof last === 'number') {
              concurrent = observables.pop();
            }

            if (scheduler === null && observables.length === 1 && observables[0] instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
              return observables[0];
            }

            return Object(_operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__["mergeAll"])(concurrent)(Object(_fromArray__WEBPACK_IMPORTED_MODULE_3__["fromArray"])(observables, scheduler));
          } //# sourceMappingURL=merge.js.map

          /***/

        },

        /***/
        "gBlb":
        /*!*******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/isScheduler.js ***!
          \*******************************************************************************************/

        /*! exports provided: isScheduler */

        /***/
        function gBlb(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "isScheduler", function () {
            return isScheduler;
          });

          function isScheduler(value) {
            return value && typeof value.schedule === 'function';
          } //# sourceMappingURL=isScheduler.js.map

          /***/

        },

        /***/
        "gMuT":
        /*!**********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduled/scheduled.js ***!
          \**********************************************************************************************/

        /*! exports provided: scheduled */

        /***/
        function gMuT(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "scheduled", function () {
            return scheduled;
          });
          /* harmony import */


          var _scheduleObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./scheduleObservable */
          "4wde");
          /* harmony import */


          var _schedulePromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./schedulePromise */
          "PmMP");
          /* harmony import */


          var _scheduleArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./scheduleArray */
          "czMQ");
          /* harmony import */


          var _scheduleIterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./scheduleIterable */
          "+ynE");
          /* harmony import */


          var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../util/isInteropObservable */
          "hZDH");
          /* harmony import */


          var _util_isPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../util/isPromise */
          "/vgl");
          /* harmony import */


          var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../util/isArrayLike */
          "eY+9");
          /* harmony import */


          var _util_isIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../util/isIterable */
          "On4S");

          function scheduled(input, scheduler) {
            if (input != null) {
              if (Object(_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_4__["isInteropObservable"])(input)) {
                return Object(_scheduleObservable__WEBPACK_IMPORTED_MODULE_0__["scheduleObservable"])(input, scheduler);
              } else if (Object(_util_isPromise__WEBPACK_IMPORTED_MODULE_5__["isPromise"])(input)) {
                return Object(_schedulePromise__WEBPACK_IMPORTED_MODULE_1__["schedulePromise"])(input, scheduler);
              } else if (Object(_util_isArrayLike__WEBPACK_IMPORTED_MODULE_6__["isArrayLike"])(input)) {
                return Object(_scheduleArray__WEBPACK_IMPORTED_MODULE_2__["scheduleArray"])(input, scheduler);
              } else if (Object(_util_isIterable__WEBPACK_IMPORTED_MODULE_7__["isIterable"])(input) || typeof input === 'string') {
                return Object(_scheduleIterable__WEBPACK_IMPORTED_MODULE_3__["scheduleIterable"])(input, scheduler);
              }
            }

            throw new TypeError((input !== null && typeof input || input) + ' is not observable');
          } //# sourceMappingURL=scheduled.js.map

          /***/

        },

        /***/
        "gdbe":
        /*!***********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/combineAll.js ***!
          \***********************************************************************************************/

        /*! exports provided: combineAll */

        /***/
        function gdbe(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "combineAll", function () {
            return combineAll;
          });
          /* harmony import */


          var _observable_combineLatest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../observable/combineLatest */
          "HM3f");

          function combineAll(project) {
            return function (source) {
              return source.lift(new _observable_combineLatest__WEBPACK_IMPORTED_MODULE_0__["CombineLatestOperator"](project));
            };
          } //# sourceMappingURL=combineAll.js.map

          /***/

        },

        /***/
        "ghXf":
        /*!*******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/repeat.js ***!
          \*******************************************************************************************/

        /*! exports provided: repeat */

        /***/
        function ghXf(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "repeat", function () {
            return repeat;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");
          /* harmony import */


          var _observable_empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../observable/empty */
          "6Oco");

          function repeat() {
            var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
            return function (source) {
              if (count === 0) {
                return Object(_observable_empty__WEBPACK_IMPORTED_MODULE_1__["empty"])();
              } else if (count < 0) {
                return source.lift(new RepeatOperator(-1, source));
              } else {
                return source.lift(new RepeatOperator(count - 1, source));
              }
            };
          }

          var RepeatOperator = /*#__PURE__*/function () {
            function RepeatOperator(count, source) {
              _classCallCheck(this, RepeatOperator);

              this.count = count;
              this.source = source;
            }

            _createClass(RepeatOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
              }
            }]);

            return RepeatOperator;
          }();

          var RepeatSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_29) {
            _inherits(RepeatSubscriber, _Subscriber__WEBPACK_29);

            var _super66 = _createSuper(RepeatSubscriber);

            function RepeatSubscriber(destination, count, source) {
              var _this64;

              _classCallCheck(this, RepeatSubscriber);

              _this64 = _super66.call(this, destination);
              _this64.count = count;
              _this64.source = source;
              return _this64;
            }

            _createClass(RepeatSubscriber, [{
              key: "complete",
              value: function complete() {
                if (!this.isStopped) {
                  var source = this.source,
                      count = this.count;

                  if (count === 0) {
                    return _get(_getPrototypeOf(RepeatSubscriber.prototype), "complete", this).call(this);
                  } else if (count > -1) {
                    this.count = count - 1;
                  }

                  source.subscribe(this._unsubscribeAndRecycle());
                }
              }
            }]);

            return RepeatSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=repeat.js.map

          /***/

        },

        /***/
        "hFTr":
        /*!*************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/timeInterval.js ***!
          \*************************************************************************************************/

        /*! exports provided: timeInterval, TimeInterval */

        /***/
        function hFTr(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "timeInterval", function () {
            return timeInterval;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "TimeInterval", function () {
            return TimeInterval;
          });
          /* harmony import */


          var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../scheduler/async */
          "Efrr");
          /* harmony import */


          var _scan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./scan */
          "SrNW");
          /* harmony import */


          var _observable_defer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../observable/defer */
          "i9xl");
          /* harmony import */


          var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./map */
          "YtkY");

          function timeInterval() {
            var scheduler = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _scheduler_async__WEBPACK_IMPORTED_MODULE_0__["async"];
            return function (source) {
              return Object(_observable_defer__WEBPACK_IMPORTED_MODULE_2__["defer"])(function () {
                return source.pipe(Object(_scan__WEBPACK_IMPORTED_MODULE_1__["scan"])(function (_ref3, value) {
                  var current = _ref3.current;
                  return {
                    value: value,
                    current: scheduler.now(),
                    last: current
                  };
                }, {
                  current: scheduler.now(),
                  value: undefined,
                  last: undefined
                }), Object(_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref4) {
                  var current = _ref4.current,
                      last = _ref4.last,
                      value = _ref4.value;
                  return new TimeInterval(value, current - last);
                }));
              });
            };
          }

          var TimeInterval = function TimeInterval(value, interval) {
            _classCallCheck(this, TimeInterval);

            this.value = value;
            this.interval = interval;
          }; //# sourceMappingURL=timeInterval.js.map

          /***/

        },

        /***/
        "hZDH":
        /*!***************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/isInteropObservable.js ***!
          \***************************************************************************************************/

        /*! exports provided: isInteropObservable */

        /***/
        function hZDH(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "isInteropObservable", function () {
            return isInteropObservable;
          });
          /* harmony import */


          var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../symbol/observable */
          "qEfY");

          function isInteropObservable(input) {
            return input && typeof input[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__["observable"]] === 'function';
          } //# sourceMappingURL=isInteropObservable.js.map

          /***/

        },

        /***/
        "hmHb":
        /*!***************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/createLogger.js ***!
          \***************************************************************************/

        /*! exports provided: default */

        /***/
        function hmHb(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony default export */


          __webpack_exports__["default"] = function (debug) {
            /**
             * Logs a message if debug is enabled.
             */
            return function () {
              if (debug) {
                var _console;

                for (var _len13 = arguments.length, args = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
                  args[_key13] = arguments[_key13];
                }

                (_console = console).log.apply(_console, ['[Penpal]'].concat(args)); // eslint-disable-line no-console

              }
            };
          };
          /***/

        },

        /***/
        "i7Dj":
        /*!*********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/refCount.js ***!
          \*********************************************************************************************/

        /*! exports provided: refCount */

        /***/
        function i7Dj(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "refCount", function () {
            return refCount;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");

          function refCount() {
            return function refCountOperatorFunction(source) {
              return source.lift(new RefCountOperator(source));
            };
          }

          var RefCountOperator = /*#__PURE__*/function () {
            function RefCountOperator(connectable) {
              _classCallCheck(this, RefCountOperator);

              this.connectable = connectable;
            }

            _createClass(RefCountOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                var connectable = this.connectable;
                connectable._refCount++;
                var refCounter = new RefCountSubscriber(subscriber, connectable);
                var subscription = source.subscribe(refCounter);

                if (!refCounter.closed) {
                  refCounter.connection = connectable.connect();
                }

                return subscription;
              }
            }]);

            return RefCountOperator;
          }();

          var RefCountSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_30) {
            _inherits(RefCountSubscriber, _Subscriber__WEBPACK_30);

            var _super67 = _createSuper(RefCountSubscriber);

            function RefCountSubscriber(destination, connectable) {
              var _this65;

              _classCallCheck(this, RefCountSubscriber);

              _this65 = _super67.call(this, destination);
              _this65.connectable = connectable;
              return _this65;
            }

            _createClass(RefCountSubscriber, [{
              key: "_unsubscribe",
              value: function _unsubscribe() {
                var connectable = this.connectable;

                if (!connectable) {
                  this.connection = null;
                  return;
                }

                this.connectable = null;
                var refCount = connectable._refCount;

                if (refCount <= 0) {
                  this.connection = null;
                  return;
                }

                connectable._refCount = refCount - 1;

                if (refCount > 1) {
                  this.connection = null;
                  return;
                }

                var connection = this.connection;
                var sharedConnection = connectable._connection;
                this.connection = null;

                if (sharedConnection && (!connection || sharedConnection === connection)) {
                  sharedConnection.unsubscribe();
                }
              }
            }]);

            return RefCountSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=refCount.js.map

          /***/

        },

        /***/
        "i9P/":
        /*!***********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/hostReportError.js ***!
          \***********************************************************************************************/

        /*! exports provided: hostReportError */

        /***/
        function i9P(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "hostReportError", function () {
            return hostReportError;
          });

          function hostReportError(err) {
            setTimeout(function () {
              throw err;
            }, 0);
          } //# sourceMappingURL=hostReportError.js.map

          /***/

        },

        /***/
        "i9xl":
        /*!*******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/defer.js ***!
          \*******************************************************************************************/

        /*! exports provided: defer */

        /***/
        function i9xl(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "defer", function () {
            return defer;
          });
          /* harmony import */


          var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Observable */
          "IdLP");
          /* harmony import */


          var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./from */
          "GoAz");
          /* harmony import */


          var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./empty */
          "6Oco");

          function defer(observableFactory) {
            return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
              var input;

              try {
                input = observableFactory();
              } catch (err) {
                subscriber.error(err);
                return undefined;
              }

              var source = input ? Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(input) : Object(_empty__WEBPACK_IMPORTED_MODULE_2__["empty"])();
              return source.subscribe(subscriber);
            });
          } //# sourceMappingURL=defer.js.map

          /***/

        },

        /***/
        "iLlD":
        /*!******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/pluck.js ***!
          \******************************************************************************************/

        /*! exports provided: pluck */

        /***/
        function iLlD(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "pluck", function () {
            return pluck;
          });
          /* harmony import */


          var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./map */
          "YtkY");

          function pluck() {
            for (var _len14 = arguments.length, properties = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
              properties[_key14] = arguments[_key14];
            }

            var length = properties.length;

            if (length === 0) {
              throw new Error('list of properties cannot be empty.');
            }

            return function (source) {
              return Object(_map__WEBPACK_IMPORTED_MODULE_0__["map"])(plucker(properties, length))(source);
            };
          }

          function plucker(props, length) {
            var mapper = function mapper(x) {
              var currentProp = x;

              for (var i = 0; i < length; i++) {
                var p = currentProp != null ? currentProp[props[i]] : undefined;

                if (p !== void 0) {
                  currentProp = p;
                } else {
                  return undefined;
                }
              }

              return currentProp;
            };

            return mapper;
          } //# sourceMappingURL=pluck.js.map

          /***/

        },

        /***/
        "iRe+":
        /*!**************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/isDate.js ***!
          \**************************************************************************************/

        /*! exports provided: isDate */

        /***/
        function iRe(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "isDate", function () {
            return isDate;
          });

          function isDate(value) {
            return value instanceof Date && !isNaN(+value);
          } //# sourceMappingURL=isDate.js.map

          /***/

        },

        /***/
        "iT4G":
        /*!********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/timeout.js ***!
          \********************************************************************************************/

        /*! exports provided: timeout */

        /***/
        function iT4G(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "timeout", function () {
            return timeout;
          });
          /* harmony import */


          var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../scheduler/async */
          "Efrr");
          /* harmony import */


          var _util_TimeoutError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../util/TimeoutError */
          "cmhy");
          /* harmony import */


          var _timeoutWith__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./timeoutWith */
          "vAPC");
          /* harmony import */


          var _observable_throwError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../observable/throwError */
          "47ST");

          function timeout(due) {
            var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _scheduler_async__WEBPACK_IMPORTED_MODULE_0__["async"];
            return Object(_timeoutWith__WEBPACK_IMPORTED_MODULE_2__["timeoutWith"])(due, Object(_observable_throwError__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _util_TimeoutError__WEBPACK_IMPORTED_MODULE_1__["TimeoutError"]()), scheduler);
          } //# sourceMappingURL=timeout.js.map

          /***/

        },

        /***/
        "iqFP":
        /*!***************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/defaultIfEmpty.js ***!
          \***************************************************************************************************/

        /*! exports provided: defaultIfEmpty */

        /***/
        function iqFP(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "defaultIfEmpty", function () {
            return defaultIfEmpty;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");

          function defaultIfEmpty() {
            var defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return function (source) {
              return source.lift(new DefaultIfEmptyOperator(defaultValue));
            };
          }

          var DefaultIfEmptyOperator = /*#__PURE__*/function () {
            function DefaultIfEmptyOperator(defaultValue) {
              _classCallCheck(this, DefaultIfEmptyOperator);

              this.defaultValue = defaultValue;
            }

            _createClass(DefaultIfEmptyOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
              }
            }]);

            return DefaultIfEmptyOperator;
          }();

          var DefaultIfEmptySubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_31) {
            _inherits(DefaultIfEmptySubscriber, _Subscriber__WEBPACK_31);

            var _super68 = _createSuper(DefaultIfEmptySubscriber);

            function DefaultIfEmptySubscriber(destination, defaultValue) {
              var _this66;

              _classCallCheck(this, DefaultIfEmptySubscriber);

              _this66 = _super68.call(this, destination);
              _this66.defaultValue = defaultValue;
              _this66.isEmpty = true;
              return _this66;
            }

            _createClass(DefaultIfEmptySubscriber, [{
              key: "_next",
              value: function _next(value) {
                this.isEmpty = false;
                this.destination.next(value);
              }
            }, {
              key: "_complete",
              value: function _complete() {
                if (this.isEmpty) {
                  this.destination.next(this.defaultValue);
                }

                this.destination.complete();
              }
            }]);

            return DefaultIfEmptySubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=defaultIfEmpty.js.map

          /***/

        },

        /***/
        "it7j":
        /*!**********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/timestamp.js ***!
          \**********************************************************************************************/

        /*! exports provided: timestamp, Timestamp */

        /***/
        function it7j(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "timestamp", function () {
            return timestamp;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "Timestamp", function () {
            return Timestamp;
          });
          /* harmony import */


          var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../scheduler/async */
          "Efrr");
          /* harmony import */


          var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./map */
          "YtkY");

          function timestamp() {
            var scheduler = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _scheduler_async__WEBPACK_IMPORTED_MODULE_0__["async"];
            return Object(_map__WEBPACK_IMPORTED_MODULE_1__["map"])(function (value) {
              return new Timestamp(value, scheduler.now());
            });
          }

          var Timestamp = function Timestamp(value, timestamp) {
            _classCallCheck(this, Timestamp);

            this.value = value;
            this.timestamp = timestamp;
          }; //# sourceMappingURL=timestamp.js.map

          /***/

        },

        /***/
        "j71X":
        /*!************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/windowCount.js ***!
          \************************************************************************************************/

        /*! exports provided: windowCount */

        /***/
        function j71X(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "windowCount", function () {
            return windowCount;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");
          /* harmony import */


          var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../Subject */
          "ZTXN");

          function windowCount(windowSize) {
            var startWindowEvery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return function windowCountOperatorFunction(source) {
              return source.lift(new WindowCountOperator(windowSize, startWindowEvery));
            };
          }

          var WindowCountOperator = /*#__PURE__*/function () {
            function WindowCountOperator(windowSize, startWindowEvery) {
              _classCallCheck(this, WindowCountOperator);

              this.windowSize = windowSize;
              this.startWindowEvery = startWindowEvery;
            }

            _createClass(WindowCountOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
              }
            }]);

            return WindowCountOperator;
          }();

          var WindowCountSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_32) {
            _inherits(WindowCountSubscriber, _Subscriber__WEBPACK_32);

            var _super69 = _createSuper(WindowCountSubscriber);

            function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
              var _this67;

              _classCallCheck(this, WindowCountSubscriber);

              _this67 = _super69.call(this, destination);
              _this67.destination = destination;
              _this67.windowSize = windowSize;
              _this67.startWindowEvery = startWindowEvery;
              _this67.windows = [new _Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]()];
              _this67.count = 0;
              destination.next(_this67.windows[0]);
              return _this67;
            }

            _createClass(WindowCountSubscriber, [{
              key: "_next",
              value: function _next(value) {
                var startWindowEvery = this.startWindowEvery > 0 ? this.startWindowEvery : this.windowSize;
                var destination = this.destination;
                var windowSize = this.windowSize;
                var windows = this.windows;
                var len = windows.length;

                for (var i = 0; i < len && !this.closed; i++) {
                  windows[i].next(value);
                }

                var c = this.count - windowSize + 1;

                if (c >= 0 && c % startWindowEvery === 0 && !this.closed) {
                  windows.shift().complete();
                }

                if (++this.count % startWindowEvery === 0 && !this.closed) {
                  var _window4 = new _Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();

                  windows.push(_window4);
                  destination.next(_window4);
                }
              }
            }, {
              key: "_error",
              value: function _error(err) {
                var windows = this.windows;

                if (windows) {
                  while (windows.length > 0 && !this.closed) {
                    windows.shift().error(err);
                  }
                }

                this.destination.error(err);
              }
            }, {
              key: "_complete",
              value: function _complete() {
                var windows = this.windows;

                if (windows) {
                  while (windows.length > 0 && !this.closed) {
                    windows.shift().complete();
                  }
                }

                this.destination.complete();
              }
            }, {
              key: "_unsubscribe",
              value: function _unsubscribe() {
                this.count = 0;
                this.windows = null;
              }
            }]);

            return WindowCountSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=windowCount.js.map

          /***/

        },

        /***/
        "jIqt":
        /*!**********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/startWith.js ***!
          \**********************************************************************************************/

        /*! exports provided: startWith */

        /***/
        function jIqt(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "startWith", function () {
            return startWith;
          });
          /* harmony import */


          var _observable_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../observable/concat */
          "qZtG");
          /* harmony import */


          var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../util/isScheduler */
          "gBlb");

          function startWith() {
            for (var _len15 = arguments.length, array = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
              array[_key15] = arguments[_key15];
            }

            var scheduler = array[array.length - 1];

            if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__["isScheduler"])(scheduler)) {
              array.pop();
              return function (source) {
                return Object(_observable_concat__WEBPACK_IMPORTED_MODULE_0__["concat"])(array, source, scheduler);
              };
            } else {
              return function (source) {
                return Object(_observable_concat__WEBPACK_IMPORTED_MODULE_0__["concat"])(array, source);
              };
            }
          } //# sourceMappingURL=startWith.js.map

          /***/

        },

        /***/
        "jNqi":
        /*!************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/bufferCount.js ***!
          \************************************************************************************************/

        /*! exports provided: bufferCount */

        /***/
        function jNqi(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "bufferCount", function () {
            return bufferCount;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");

          function bufferCount(bufferSize) {
            var startBufferEvery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            return function bufferCountOperatorFunction(source) {
              return source.lift(new BufferCountOperator(bufferSize, startBufferEvery));
            };
          }

          var BufferCountOperator = /*#__PURE__*/function () {
            function BufferCountOperator(bufferSize, startBufferEvery) {
              _classCallCheck(this, BufferCountOperator);

              this.bufferSize = bufferSize;
              this.startBufferEvery = startBufferEvery;

              if (!startBufferEvery || bufferSize === startBufferEvery) {
                this.subscriberClass = BufferCountSubscriber;
              } else {
                this.subscriberClass = BufferSkipCountSubscriber;
              }
            }

            _createClass(BufferCountOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new this.subscriberClass(subscriber, this.bufferSize, this.startBufferEvery));
              }
            }]);

            return BufferCountOperator;
          }();

          var BufferCountSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_33) {
            _inherits(BufferCountSubscriber, _Subscriber__WEBPACK_33);

            var _super70 = _createSuper(BufferCountSubscriber);

            function BufferCountSubscriber(destination, bufferSize) {
              var _this68;

              _classCallCheck(this, BufferCountSubscriber);

              _this68 = _super70.call(this, destination);
              _this68.bufferSize = bufferSize;
              _this68.buffer = [];
              return _this68;
            }

            _createClass(BufferCountSubscriber, [{
              key: "_next",
              value: function _next(value) {
                var buffer = this.buffer;
                buffer.push(value);

                if (buffer.length == this.bufferSize) {
                  this.destination.next(buffer);
                  this.buffer = [];
                }
              }
            }, {
              key: "_complete",
              value: function _complete() {
                var buffer = this.buffer;

                if (buffer.length > 0) {
                  this.destination.next(buffer);
                }

                _get(_getPrototypeOf(BufferCountSubscriber.prototype), "_complete", this).call(this);
              }
            }]);

            return BufferCountSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]);

          var BufferSkipCountSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_34) {
            _inherits(BufferSkipCountSubscriber, _Subscriber__WEBPACK_34);

            var _super71 = _createSuper(BufferSkipCountSubscriber);

            function BufferSkipCountSubscriber(destination, bufferSize, startBufferEvery) {
              var _this69;

              _classCallCheck(this, BufferSkipCountSubscriber);

              _this69 = _super71.call(this, destination);
              _this69.bufferSize = bufferSize;
              _this69.startBufferEvery = startBufferEvery;
              _this69.buffers = [];
              _this69.count = 0;
              return _this69;
            }

            _createClass(BufferSkipCountSubscriber, [{
              key: "_next",
              value: function _next(value) {
                var bufferSize = this.bufferSize,
                    startBufferEvery = this.startBufferEvery,
                    buffers = this.buffers,
                    count = this.count;
                this.count++;

                if (count % startBufferEvery === 0) {
                  buffers.push([]);
                }

                for (var i = buffers.length; i--;) {
                  var buffer = buffers[i];
                  buffer.push(value);

                  if (buffer.length === bufferSize) {
                    buffers.splice(i, 1);
                    this.destination.next(buffer);
                  }
                }
              }
            }, {
              key: "_complete",
              value: function _complete() {
                var buffers = this.buffers,
                    destination = this.destination;

                while (buffers.length > 0) {
                  var buffer = buffers.shift();

                  if (buffer.length > 0) {
                    destination.next(buffer);
                  }
                }

                _get(_getPrototypeOf(BufferSkipCountSubscriber.prototype), "_complete", this).call(this);
              }
            }]);

            return BufferSkipCountSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=bufferCount.js.map

          /***/

        },

        /***/
        "jOdJ":
        /*!******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/first.js ***!
          \******************************************************************************************/

        /*! exports provided: first */

        /***/
        function jOdJ(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "first", function () {
            return first;
          });
          /* harmony import */


          var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../util/EmptyError */
          "VxHp");
          /* harmony import */


          var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./filter */
          "xVbo");
          /* harmony import */


          var _take__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./take */
          "J+dc");
          /* harmony import */


          var _defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./defaultIfEmpty */
          "iqFP");
          /* harmony import */


          var _throwIfEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./throwIfEmpty */
          "fbWu");
          /* harmony import */


          var _util_identity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../util/identity */
          "5E2i");

          function first(predicate, defaultValue) {
            var hasDefaultValue = arguments.length >= 2;
            return function (source) {
              return source.pipe(predicate ? Object(_filter__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (v, i) {
                return predicate(v, i, source);
              }) : _util_identity__WEBPACK_IMPORTED_MODULE_5__["identity"], Object(_take__WEBPACK_IMPORTED_MODULE_2__["take"])(1), hasDefaultValue ? Object(_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__["defaultIfEmpty"])(defaultValue) : Object(_throwIfEmpty__WEBPACK_IMPORTED_MODULE_4__["throwIfEmpty"])(function () {
                return new _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__["EmptyError"]();
              }));
            };
          } //# sourceMappingURL=first.js.map

          /***/

        },

        /***/
        "jhgp":
        /*!**************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/sequenceEqual.js ***!
          \**************************************************************************************************/

        /*! exports provided: sequenceEqual, SequenceEqualOperator, SequenceEqualSubscriber */

        /***/
        function jhgp(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "sequenceEqual", function () {
            return sequenceEqual;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "SequenceEqualOperator", function () {
            return SequenceEqualOperator;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "SequenceEqualSubscriber", function () {
            return SequenceEqualSubscriber;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");

          function sequenceEqual(compareTo, comparator) {
            return function (source) {
              return source.lift(new SequenceEqualOperator(compareTo, comparator));
            };
          }

          var SequenceEqualOperator = /*#__PURE__*/function () {
            function SequenceEqualOperator(compareTo, comparator) {
              _classCallCheck(this, SequenceEqualOperator);

              this.compareTo = compareTo;
              this.comparator = comparator;
            }

            _createClass(SequenceEqualOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new SequenceEqualSubscriber(subscriber, this.compareTo, this.comparator));
              }
            }]);

            return SequenceEqualOperator;
          }();

          var SequenceEqualSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_35) {
            _inherits(SequenceEqualSubscriber, _Subscriber__WEBPACK_35);

            var _super72 = _createSuper(SequenceEqualSubscriber);

            function SequenceEqualSubscriber(destination, compareTo, comparator) {
              var _this70;

              _classCallCheck(this, SequenceEqualSubscriber);

              _this70 = _super72.call(this, destination);
              _this70.compareTo = compareTo;
              _this70.comparator = comparator;
              _this70._a = [];
              _this70._b = [];
              _this70._oneComplete = false;

              _this70.destination.add(compareTo.subscribe(new SequenceEqualCompareToSubscriber(destination, _assertThisInitialized(_this70))));

              return _this70;
            }

            _createClass(SequenceEqualSubscriber, [{
              key: "_next",
              value: function _next(value) {
                if (this._oneComplete && this._b.length === 0) {
                  this.emit(false);
                } else {
                  this._a.push(value);

                  this.checkValues();
                }
              }
            }, {
              key: "_complete",
              value: function _complete() {
                if (this._oneComplete) {
                  this.emit(this._a.length === 0 && this._b.length === 0);
                } else {
                  this._oneComplete = true;
                }

                this.unsubscribe();
              }
            }, {
              key: "checkValues",
              value: function checkValues() {
                var _a = this._a,
                    _b = this._b,
                    comparator = this.comparator;

                while (_a.length > 0 && _b.length > 0) {
                  var a = _a.shift();

                  var b = _b.shift();

                  var areEqual = false;

                  try {
                    areEqual = comparator ? comparator(a, b) : a === b;
                  } catch (e) {
                    this.destination.error(e);
                  }

                  if (!areEqual) {
                    this.emit(false);
                  }
                }
              }
            }, {
              key: "emit",
              value: function emit(value) {
                var destination = this.destination;
                destination.next(value);
                destination.complete();
              }
            }, {
              key: "nextB",
              value: function nextB(value) {
                if (this._oneComplete && this._a.length === 0) {
                  this.emit(false);
                } else {
                  this._b.push(value);

                  this.checkValues();
                }
              }
            }, {
              key: "completeB",
              value: function completeB() {
                if (this._oneComplete) {
                  this.emit(this._a.length === 0 && this._b.length === 0);
                } else {
                  this._oneComplete = true;
                }
              }
            }]);

            return SequenceEqualSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]);

          var SequenceEqualCompareToSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_36) {
            _inherits(SequenceEqualCompareToSubscriber, _Subscriber__WEBPACK_36);

            var _super73 = _createSuper(SequenceEqualCompareToSubscriber);

            function SequenceEqualCompareToSubscriber(destination, parent) {
              var _this71;

              _classCallCheck(this, SequenceEqualCompareToSubscriber);

              _this71 = _super73.call(this, destination);
              _this71.parent = parent;
              return _this71;
            }

            _createClass(SequenceEqualCompareToSubscriber, [{
              key: "_next",
              value: function _next(value) {
                this.parent.nextB(value);
              }
            }, {
              key: "_error",
              value: function _error(err) {
                this.parent.error(err);
                this.unsubscribe();
              }
            }, {
              key: "_complete",
              value: function _complete() {
                this.parent.completeB();
                this.unsubscribe();
              }
            }]);

            return SequenceEqualCompareToSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=sequenceEqual.js.map

          /***/

        },

        /***/
        "jwFC":
        /*!*********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/skipLast.js ***!
          \*********************************************************************************************/

        /*! exports provided: skipLast */

        /***/
        function jwFC(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "skipLast", function () {
            return skipLast;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");
          /* harmony import */


          var _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../util/ArgumentOutOfRangeError */
          "PNff");

          function skipLast(count) {
            return function (source) {
              return source.lift(new SkipLastOperator(count));
            };
          }

          var SkipLastOperator = /*#__PURE__*/function () {
            function SkipLastOperator(_skipCount) {
              _classCallCheck(this, SkipLastOperator);

              this._skipCount = _skipCount;

              if (this._skipCount < 0) {
                throw new _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_1__["ArgumentOutOfRangeError"]();
              }
            }

            _createClass(SkipLastOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                if (this._skipCount === 0) {
                  return source.subscribe(new _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"](subscriber));
                } else {
                  return source.subscribe(new SkipLastSubscriber(subscriber, this._skipCount));
                }
              }
            }]);

            return SkipLastOperator;
          }();

          var SkipLastSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_37) {
            _inherits(SkipLastSubscriber, _Subscriber__WEBPACK_37);

            var _super74 = _createSuper(SkipLastSubscriber);

            function SkipLastSubscriber(destination, _skipCount) {
              var _this72;

              _classCallCheck(this, SkipLastSubscriber);

              _this72 = _super74.call(this, destination);
              _this72._skipCount = _skipCount;
              _this72._count = 0;
              _this72._ring = new Array(_skipCount);
              return _this72;
            }

            _createClass(SkipLastSubscriber, [{
              key: "_next",
              value: function _next(value) {
                var skipCount = this._skipCount;
                var count = this._count++;

                if (count < skipCount) {
                  this._ring[count] = value;
                } else {
                  var currentIndex = count % skipCount;
                  var ring = this._ring;
                  var oldValue = ring[currentIndex];
                  ring[currentIndex] = value;
                  this.destination.next(oldValue);
                }
              }
            }]);

            return SkipLastSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=skipLast.js.map

          /***/

        },

        /***/
        "kLnN":
        /*!****************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/zip.js ***!
          \****************************************************************************************/

        /*! exports provided: zip */

        /***/
        function kLnN(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "zip", function () {
            return zip;
          });
          /* harmony import */


          var _observable_zip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../observable/zip */
          "wTjk");

          function zip() {
            for (var _len16 = arguments.length, observables = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
              observables[_key16] = arguments[_key16];
            }

            return function zipOperatorFunction(source) {
              return source.lift.call(Object(_observable_zip__WEBPACK_IMPORTED_MODULE_0__["zip"]).apply(void 0, [source].concat(observables)));
            };
          } //# sourceMappingURL=zip.js.map

          /***/

        },

        /***/
        "kSHZ":
        /*!******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduler/queue.js ***!
          \******************************************************************************************/

        /*! exports provided: queueScheduler, queue */

        /***/
        function kSHZ(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "queueScheduler", function () {
            return queueScheduler;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "queue", function () {
            return queue;
          });
          /* harmony import */


          var _QueueAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./QueueAction */
          "HFsJ");
          /* harmony import */


          var _QueueScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./QueueScheduler */
          "246g");

          var queueScheduler = new _QueueScheduler__WEBPACK_IMPORTED_MODULE_1__["QueueScheduler"](_QueueAction__WEBPACK_IMPORTED_MODULE_0__["QueueAction"]);
          var queue = queueScheduler; //# sourceMappingURL=queue.js.map

          /***/
        },

        /***/
        "kgbq":
        /*!************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/noop.js ***!
          \************************************************************************************/

        /*! exports provided: noop */

        /***/
        function kgbq(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "noop", function () {
            return noop;
          });

          function noop() {} //# sourceMappingURL=noop.js.map

          /***/

        },

        /***/
        "kuMc":
        /*!**********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/takeUntil.js ***!
          \**********************************************************************************************/

        /*! exports provided: takeUntil */

        /***/
        function kuMc(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "takeUntil", function () {
            return takeUntil;
          });
          /* harmony import */


          var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../innerSubscribe */
          "uCWR");

          function takeUntil(notifier) {
            return function (source) {
              return source.lift(new TakeUntilOperator(notifier));
            };
          }

          var TakeUntilOperator = /*#__PURE__*/function () {
            function TakeUntilOperator(notifier) {
              _classCallCheck(this, TakeUntilOperator);

              this.notifier = notifier;
            }

            _createClass(TakeUntilOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                var takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
                var notifierSubscription = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["innerSubscribe"])(this.notifier, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleInnerSubscriber"](takeUntilSubscriber));

                if (notifierSubscription && !takeUntilSubscriber.seenValue) {
                  takeUntilSubscriber.add(notifierSubscription);
                  return source.subscribe(takeUntilSubscriber);
                }

                return takeUntilSubscriber;
              }
            }]);

            return TakeUntilOperator;
          }();

          var TakeUntilSubscriber = /*#__PURE__*/function (_innerSubscribe__WEBP16) {
            _inherits(TakeUntilSubscriber, _innerSubscribe__WEBP16);

            var _super75 = _createSuper(TakeUntilSubscriber);

            function TakeUntilSubscriber(destination) {
              var _this73;

              _classCallCheck(this, TakeUntilSubscriber);

              _this73 = _super75.call(this, destination);
              _this73.seenValue = false;
              return _this73;
            }

            _createClass(TakeUntilSubscriber, [{
              key: "notifyNext",
              value: function notifyNext() {
                this.seenValue = true;
                this.complete();
              }
            }, {
              key: "notifyComplete",
              value: function notifyComplete() {}
            }]);

            return TakeUntilSubscriber;
          }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleOuterSubscriber"]); //# sourceMappingURL=takeUntil.js.map

          /***/

        },

        /***/
        "lJSs":
        /*!******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/count.js ***!
          \******************************************************************************************/

        /*! exports provided: count */

        /***/
        function lJSs(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "count", function () {
            return count;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");

          function count(predicate) {
            return function (source) {
              return source.lift(new CountOperator(predicate, source));
            };
          }

          var CountOperator = /*#__PURE__*/function () {
            function CountOperator(predicate, source) {
              _classCallCheck(this, CountOperator);

              this.predicate = predicate;
              this.source = source;
            }

            _createClass(CountOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
              }
            }]);

            return CountOperator;
          }();

          var CountSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_38) {
            _inherits(CountSubscriber, _Subscriber__WEBPACK_38);

            var _super76 = _createSuper(CountSubscriber);

            function CountSubscriber(destination, predicate, source) {
              var _this74;

              _classCallCheck(this, CountSubscriber);

              _this74 = _super76.call(this, destination);
              _this74.predicate = predicate;
              _this74.source = source;
              _this74.count = 0;
              _this74.index = 0;
              return _this74;
            }

            _createClass(CountSubscriber, [{
              key: "_next",
              value: function _next(value) {
                if (this.predicate) {
                  this._tryPredicate(value);
                } else {
                  this.count++;
                }
              }
            }, {
              key: "_tryPredicate",
              value: function _tryPredicate(value) {
                var result;

                try {
                  result = this.predicate(value, this.index++, this.source);
                } catch (err) {
                  this.destination.error(err);
                  return;
                }

                if (result) {
                  this.count++;
                }
              }
            }, {
              key: "_complete",
              value: function _complete() {
                this.destination.next(this.count);
                this.destination.complete();
              }
            }]);

            return CountSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=count.js.map

          /***/

        },

        /***/
        "lmh5":
        /*!**********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/partition.js ***!
          \**********************************************************************************************/

        /*! exports provided: partition */

        /***/
        function lmh5(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "partition", function () {
            return partition;
          });
          /* harmony import */


          var _util_not__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../util/not */
          "Xm0Y");
          /* harmony import */


          var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./filter */
          "xVbo");

          function partition(predicate, thisArg) {
            return function (source) {
              return [Object(_filter__WEBPACK_IMPORTED_MODULE_1__["filter"])(predicate, thisArg)(source), Object(_filter__WEBPACK_IMPORTED_MODULE_1__["filter"])(Object(_util_not__WEBPACK_IMPORTED_MODULE_0__["not"])(predicate, thisArg))(source)];
            };
          } //# sourceMappingURL=partition.js.map

          /***/

        },

        /***/
        "m0VI":
        /*!***************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/AsyncSubject.js ***!
          \***************************************************************************************/

        /*! exports provided: AsyncSubject */

        /***/
        function m0VI(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "AsyncSubject", function () {
            return AsyncSubject;
          });
          /* harmony import */


          var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Subject */
          "ZTXN");
          /* harmony import */


          var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./Subscription */
          "bwdy");

          var AsyncSubject = /*#__PURE__*/function (_Subject__WEBPACK_IMP5) {
            _inherits(AsyncSubject, _Subject__WEBPACK_IMP5);

            var _super77 = _createSuper(AsyncSubject);

            function AsyncSubject() {
              var _this75;

              _classCallCheck(this, AsyncSubject);

              _this75 = _super77.apply(this, arguments);
              _this75.value = null;
              _this75.hasNext = false;
              _this75.hasCompleted = false;
              return _this75;
            }

            _createClass(AsyncSubject, [{
              key: "_subscribe",
              value: function _subscribe(subscriber) {
                if (this.hasError) {
                  subscriber.error(this.thrownError);
                  return _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
                } else if (this.hasCompleted && this.hasNext) {
                  subscriber.next(this.value);
                  subscriber.complete();
                  return _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
                }

                return _get(_getPrototypeOf(AsyncSubject.prototype), "_subscribe", this).call(this, subscriber);
              }
            }, {
              key: "next",
              value: function next(value) {
                if (!this.hasCompleted) {
                  this.value = value;
                  this.hasNext = true;
                }
              }
            }, {
              key: "error",
              value: function error(_error2) {
                if (!this.hasCompleted) {
                  _get(_getPrototypeOf(AsyncSubject.prototype), "error", this).call(this, _error2);
                }
              }
            }, {
              key: "complete",
              value: function complete() {
                this.hasCompleted = true;

                if (this.hasNext) {
                  _get(_getPrototypeOf(AsyncSubject.prototype), "next", this).call(this, this.value);
                }

                _get(_getPrototypeOf(AsyncSubject.prototype), "complete", this).call(this);
              }
            }]);

            return AsyncSubject;
          }(_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]); //# sourceMappingURL=AsyncSubject.js.map

          /***/

        },

        /***/
        "mW0F":
        /*!*************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js ***!
          \*************************************************************************************************/

        /*! exports provided: subscribeToResult */

        /***/
        function mW0F(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "subscribeToResult", function () {
            return subscribeToResult;
          });
          /* harmony import */


          var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../InnerSubscriber */
          "r9RI");
          /* harmony import */


          var _subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./subscribeTo */
          "1MAX");
          /* harmony import */


          var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../Observable */
          "IdLP");

          function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
            var innerSubscriber = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__["InnerSubscriber"](outerSubscriber, outerValue, outerIndex);

            if (innerSubscriber.closed) {
              return undefined;
            }

            if (result instanceof _Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]) {
              return result.subscribe(innerSubscriber);
            }

            return Object(_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(result)(innerSubscriber);
          } //# sourceMappingURL=subscribeToResult.js.map

          /***/

        },

        /***/
        "mWib":
        /*!*************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/debounceTime.js ***!
          \*************************************************************************************************/

        /*! exports provided: debounceTime */

        /***/
        function mWib(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "debounceTime", function () {
            return debounceTime;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");
          /* harmony import */


          var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../scheduler/async */
          "Efrr");

          function debounceTime(dueTime) {
            var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
            return function (source) {
              return source.lift(new DebounceTimeOperator(dueTime, scheduler));
            };
          }

          var DebounceTimeOperator = /*#__PURE__*/function () {
            function DebounceTimeOperator(dueTime, scheduler) {
              _classCallCheck(this, DebounceTimeOperator);

              this.dueTime = dueTime;
              this.scheduler = scheduler;
            }

            _createClass(DebounceTimeOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
              }
            }]);

            return DebounceTimeOperator;
          }();

          var DebounceTimeSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_39) {
            _inherits(DebounceTimeSubscriber, _Subscriber__WEBPACK_39);

            var _super78 = _createSuper(DebounceTimeSubscriber);

            function DebounceTimeSubscriber(destination, dueTime, scheduler) {
              var _this76;

              _classCallCheck(this, DebounceTimeSubscriber);

              _this76 = _super78.call(this, destination);
              _this76.dueTime = dueTime;
              _this76.scheduler = scheduler;
              _this76.debouncedSubscription = null;
              _this76.lastValue = null;
              _this76.hasValue = false;
              return _this76;
            }

            _createClass(DebounceTimeSubscriber, [{
              key: "_next",
              value: function _next(value) {
                this.clearDebounce();
                this.lastValue = value;
                this.hasValue = true;
                this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
              }
            }, {
              key: "_complete",
              value: function _complete() {
                this.debouncedNext();
                this.destination.complete();
              }
            }, {
              key: "debouncedNext",
              value: function debouncedNext() {
                this.clearDebounce();

                if (this.hasValue) {
                  var lastValue = this.lastValue;
                  this.lastValue = null;
                  this.hasValue = false;
                  this.destination.next(lastValue);
                }
              }
            }, {
              key: "clearDebounce",
              value: function clearDebounce() {
                var debouncedSubscription = this.debouncedSubscription;

                if (debouncedSubscription !== null) {
                  this.remove(debouncedSubscription);
                  debouncedSubscription.unsubscribe();
                  this.debouncedSubscription = null;
                }
              }
            }]);

            return DebounceTimeSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]);

          function dispatchNext(subscriber) {
            subscriber.debouncedNext();
          } //# sourceMappingURL=debounceTime.js.map

          /***/

        },

        /***/
        "mawV":
        /*!**********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/concatAll.js ***!
          \**********************************************************************************************/

        /*! exports provided: concatAll */

        /***/
        function mawV(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "concatAll", function () {
            return concatAll;
          });
          /* harmony import */


          var _mergeAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./mergeAll */
          "3lSR");

          function concatAll() {
            return Object(_mergeAll__WEBPACK_IMPORTED_MODULE_0__["mergeAll"])(1);
          } //# sourceMappingURL=concatAll.js.map

          /***/

        },

        /***/
        "nPMJ":
        /*!********************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/connectCallSender.js ***!
          \********************************************************************************/

        /*! exports provided: default */

        /***/
        function nPMJ(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony import */


          var _generateId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./generateId */
          "S5ru");
          /* harmony import */


          var _errorSerialization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./errorSerialization */
          "Uxnb");
          /* harmony import */


          var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./enums */
          "Rj9D");
          /**
           * Augments an object with methods that match those defined by the remote. When these methods are
           * called, a "call" message will be sent to the remote, the remote's corresponding method will be
           * executed, and the method's return value will be returned via a message.
           * @param {Object} callSender Sender object that should be augmented with methods.
           * @param {Object} info Information about the local and remote windows.
           * @param {Array} methodNames Names of methods available to be called on the remote.
           * @param {Promise} destructionPromise A promise resolved when destroy() is called on the penpal
           * connection.
           * @returns {Object} The call sender object with methods that may be called.
           */

          /* harmony default export */


          __webpack_exports__["default"] = function (callSender, info, methodNames, destroyConnection, log) {
            var localName = info.localName,
                local = info.local,
                remote = info.remote,
                originForSending = info.originForSending,
                originForReceiving = info.originForReceiving;
            var destroyed = false;
            log("".concat(localName, ": Connecting call sender"));

            var createMethodProxy = function createMethodProxy(methodName) {
              return function () {
                for (var _len17 = arguments.length, args = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
                  args[_key17] = arguments[_key17];
                }

                log("".concat(localName, ": Sending ").concat(methodName, "() call")); // This handles the case where the iframe has been removed from the DOM
                // (and therefore its window closed), the consumer has not yet
                // called destroy(), and the user calls a method exposed by
                // the remote. We detect the iframe has been removed and force
                // a destroy() immediately so that the consumer sees the error saying
                // the connection has been destroyed. We wrap this check in a try catch
                // because Edge throws an "Object expected" error when accessing
                // contentWindow.closed on a contentWindow from an iframe that's been
                // removed from the DOM.

                var iframeRemoved;

                try {
                  if (remote.closed) {
                    iframeRemoved = true;
                  }
                } catch (e) {
                  iframeRemoved = true;
                }

                if (iframeRemoved) {
                  destroyConnection();
                }

                if (destroyed) {
                  var error = new Error("Unable to send ".concat(methodName, "() call due ") + "to destroyed connection");
                  error.code = _enums__WEBPACK_IMPORTED_MODULE_2__["ErrorCode"].ConnectionDestroyed;
                  throw error;
                }

                return new Promise(function (resolve, reject) {
                  var id = Object(_generateId__WEBPACK_IMPORTED_MODULE_0__["default"])();

                  var handleMessageEvent = function handleMessageEvent(event) {
                    if (event.source !== remote || event.data.penpal !== _enums__WEBPACK_IMPORTED_MODULE_2__["MessageType"].Reply || event.data.id !== id) {
                      return;
                    }

                    if (event.origin !== originForReceiving) {
                      log("".concat(localName, " received message from origin ").concat(event.origin, " which did not match expected origin ").concat(originForReceiving));
                      return;
                    }

                    var replyMessage = event.data;
                    log("".concat(localName, ": Received ").concat(methodName, "() reply"));
                    local.removeEventListener(_enums__WEBPACK_IMPORTED_MODULE_2__["NativeEventType"].Message, handleMessageEvent);
                    var returnValue = replyMessage.returnValue;

                    if (replyMessage.returnValueIsError) {
                      returnValue = Object(_errorSerialization__WEBPACK_IMPORTED_MODULE_1__["deserializeError"])(returnValue);
                    }

                    (replyMessage.resolution === _enums__WEBPACK_IMPORTED_MODULE_2__["Resolution"].Fulfilled ? resolve : reject)(returnValue);
                  };

                  local.addEventListener(_enums__WEBPACK_IMPORTED_MODULE_2__["NativeEventType"].Message, handleMessageEvent);
                  var callMessage = {
                    penpal: _enums__WEBPACK_IMPORTED_MODULE_2__["MessageType"].Call,
                    id: id,
                    methodName: methodName,
                    args: args
                  };
                  remote.postMessage(callMessage, originForSending);
                });
              };
            };

            methodNames.reduce(function (api, methodName) {
              api[methodName] = createMethodProxy(methodName);
              return api;
            }, callSender);
            return function () {
              destroyed = true;
            };
          };
          /***/

        },

        /***/
        "oTGV":
        /*!****************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/min.js ***!
          \****************************************************************************************/

        /*! exports provided: min */

        /***/
        function oTGV(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "min", function () {
            return min;
          });
          /* harmony import */


          var _reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./reduce */
          "0iRq");

          function min(comparer) {
            var min = typeof comparer === 'function' ? function (x, y) {
              return comparer(x, y) < 0 ? x : y;
            } : function (x, y) {
              return x < y ? x : y;
            };
            return Object(_reduce__WEBPACK_IMPORTED_MODULE_0__["reduce"])(min);
          } //# sourceMappingURL=min.js.map

          /***/

        },

        /***/
        "oUj0":
        /*!******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/audit.js ***!
          \******************************************************************************************/

        /*! exports provided: audit */

        /***/
        function oUj0(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "audit", function () {
            return audit;
          });
          /* harmony import */


          var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../innerSubscribe */
          "uCWR");

          function audit(durationSelector) {
            return function auditOperatorFunction(source) {
              return source.lift(new AuditOperator(durationSelector));
            };
          }

          var AuditOperator = /*#__PURE__*/function () {
            function AuditOperator(durationSelector) {
              _classCallCheck(this, AuditOperator);

              this.durationSelector = durationSelector;
            }

            _createClass(AuditOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new AuditSubscriber(subscriber, this.durationSelector));
              }
            }]);

            return AuditOperator;
          }();

          var AuditSubscriber = /*#__PURE__*/function (_innerSubscribe__WEBP17) {
            _inherits(AuditSubscriber, _innerSubscribe__WEBP17);

            var _super79 = _createSuper(AuditSubscriber);

            function AuditSubscriber(destination, durationSelector) {
              var _this77;

              _classCallCheck(this, AuditSubscriber);

              _this77 = _super79.call(this, destination);
              _this77.durationSelector = durationSelector;
              _this77.hasValue = false;
              return _this77;
            }

            _createClass(AuditSubscriber, [{
              key: "_next",
              value: function _next(value) {
                this.value = value;
                this.hasValue = true;

                if (!this.throttled) {
                  var duration;

                  try {
                    var durationSelector = this.durationSelector;
                    duration = durationSelector(value);
                  } catch (err) {
                    return this.destination.error(err);
                  }

                  var innerSubscription = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["innerSubscribe"])(duration, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleInnerSubscriber"](this));

                  if (!innerSubscription || innerSubscription.closed) {
                    this.clearThrottle();
                  } else {
                    this.add(this.throttled = innerSubscription);
                  }
                }
              }
            }, {
              key: "clearThrottle",
              value: function clearThrottle() {
                var value = this.value,
                    hasValue = this.hasValue,
                    throttled = this.throttled;

                if (throttled) {
                  this.remove(throttled);
                  this.throttled = undefined;
                  throttled.unsubscribe();
                }

                if (hasValue) {
                  this.value = undefined;
                  this.hasValue = false;
                  this.destination.next(value);
                }
              }
            }, {
              key: "notifyNext",
              value: function notifyNext() {
                this.clearThrottle();
              }
            }, {
              key: "notifyComplete",
              value: function notifyComplete() {
                this.clearThrottle();
              }
            }]);

            return AuditSubscriber;
          }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleOuterSubscriber"]); //# sourceMappingURL=audit.js.map

          /***/

        },

        /***/
        "pBDD":
        /*!******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/OuterSubscriber.js ***!
          \******************************************************************************************/

        /*! exports provided: OuterSubscriber */

        /***/
        function pBDD(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "OuterSubscriber", function () {
            return OuterSubscriber;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Subscriber */
          "5uGe");

          var OuterSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_40) {
            _inherits(OuterSubscriber, _Subscriber__WEBPACK_40);

            var _super80 = _createSuper(OuterSubscriber);

            function OuterSubscriber() {
              _classCallCheck(this, OuterSubscriber);

              return _super80.apply(this, arguments);
            }

            _createClass(OuterSubscriber, [{
              key: "notifyNext",
              value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                this.destination.next(innerValue);
              }
            }, {
              key: "notifyError",
              value: function notifyError(error, innerSub) {
                this.destination.error(error);
              }
            }, {
              key: "notifyComplete",
              value: function notifyComplete(innerSub) {
                this.destination.complete();
              }
            }]);

            return OuterSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=OuterSubscriber.js.map

          /***/

        },

        /***/
        "pScO":
        /*!**********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/switchAll.js ***!
          \**********************************************************************************************/

        /*! exports provided: switchAll */

        /***/
        function pScO(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "switchAll", function () {
            return switchAll;
          });
          /* harmony import */


          var _switchMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./switchMap */
          "TLy2");
          /* harmony import */


          var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../util/identity */
          "5E2i");

          function switchAll() {
            return Object(_switchMap__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(_util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"]);
          } //# sourceMappingURL=switchAll.js.map

          /***/

        },

        /***/
        "pZOY":
        /*!*********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/parent/handleSynMessageFactory.js ***!
          \*********************************************************************************************/

        /*! exports provided: default */

        /***/
        function pZOY(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony import */


          var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../enums */
          "Rj9D");
          /**
           * Handles a SYN handshake message.
           */

          /* harmony default export */


          __webpack_exports__["default"] = function (log, methods, childOrigin, originForSending) {
            return function (event) {
              if (event.origin !== childOrigin) {
                log("Parent: Handshake - Received SYN message from origin ".concat(event.origin, " which did not match expected origin ").concat(childOrigin));
                return;
              }

              log('Parent: Handshake - Received SYN, responding with SYN-ACK');
              var synAckMessage = {
                penpal: _enums__WEBPACK_IMPORTED_MODULE_0__["MessageType"].SynAck,
                methodNames: Object.keys(methods)
              };
              event.source.postMessage(synAckMessage, originForSending);
            };
          };
          /***/

        },

        /***/
        "prE9":
        /*!**********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/auditTime.js ***!
          \**********************************************************************************************/

        /*! exports provided: auditTime */

        /***/
        function prE9(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "auditTime", function () {
            return auditTime;
          });
          /* harmony import */


          var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../scheduler/async */
          "Efrr");
          /* harmony import */


          var _audit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./audit */
          "oUj0");
          /* harmony import */


          var _observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../observable/timer */
          "8lHc");

          function auditTime(duration) {
            var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _scheduler_async__WEBPACK_IMPORTED_MODULE_0__["async"];
            return Object(_audit__WEBPACK_IMPORTED_MODULE_1__["audit"])(function () {
              return Object(_observable_timer__WEBPACK_IMPORTED_MODULE_2__["timer"])(duration, scheduler);
            });
          } //# sourceMappingURL=auditTime.js.map

          /***/

        },

        /***/
        "qEfY":
        /*!********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/symbol/observable.js ***!
          \********************************************************************************************/

        /*! exports provided: observable */

        /***/
        function qEfY(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "observable", function () {
            return observable;
          });

          var observable = function () {
            return typeof Symbol === 'function' && Symbol.observable || '@@observable';
          }(); //# sourceMappingURL=observable.js.map

          /***/

        },

        /***/
        "qNSz":
        /*!********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/toSubscriber.js ***!
          \********************************************************************************************/

        /*! exports provided: toSubscriber */

        /***/
        function qNSz(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "toSubscriber", function () {
            return toSubscriber;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");
          /* harmony import */


          var _symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../symbol/rxSubscriber */
          "25CY");
          /* harmony import */


          var _Observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../Observer */
          "rWo0");

          function toSubscriber(nextOrObserver, error, complete) {
            if (nextOrObserver) {
              if (nextOrObserver instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]) {
                return nextOrObserver;
              }

              if (nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__["rxSubscriber"]]) {
                return nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__["rxSubscriber"]]();
              }
            }

            if (!nextOrObserver && !error && !complete) {
              return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"](_Observer__WEBPACK_IMPORTED_MODULE_2__["empty"]);
            }

            return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"](nextOrObserver, error, complete);
          } //# sourceMappingURL=toSubscriber.js.map

          /***/

        },

        /***/
        "qZtG":
        /*!********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/concat.js ***!
          \********************************************************************************************/

        /*! exports provided: concat */

        /***/
        function qZtG(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "concat", function () {
            return concat;
          });
          /* harmony import */


          var _of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./of */
          "ROBh");
          /* harmony import */


          var _operators_concatAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../operators/concatAll */
          "mawV");

          function concat() {
            return Object(_operators_concatAll__WEBPACK_IMPORTED_MODULE_1__["concatAll"])()(Object(_of__WEBPACK_IMPORTED_MODULE_0__["of"]).apply(void 0, arguments));
          } //# sourceMappingURL=concat.js.map

          /***/

        },

        /***/
        "qhtU":
        /*!***************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/subscribeToIterable.js ***!
          \***************************************************************************************************/

        /*! exports provided: subscribeToIterable */

        /***/
        function qhtU(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "subscribeToIterable", function () {
            return subscribeToIterable;
          });
          /* harmony import */


          var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../symbol/iterator */
          "sWLk");

          var subscribeToIterable = function subscribeToIterable(iterable) {
            return function (subscriber) {
              var iterator = iterable[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__["iterator"]]();

              do {
                var item = void 0;

                try {
                  item = iterator.next();
                } catch (err) {
                  subscriber.error(err);
                  return subscriber;
                }

                if (item.done) {
                  subscriber.complete();
                  break;
                }

                subscriber.next(item.value);

                if (subscriber.closed) {
                  break;
                }
              } while (true);

              if (typeof iterator["return"] === 'function') {
                subscriber.add(function () {
                  if (iterator["return"]) {
                    iterator["return"]();
                  }
                });
              }

              return subscriber;
            };
          }; //# sourceMappingURL=subscribeToIterable.js.map

          /***/

        },

        /***/
        "qplQ":
        /*!***********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/windowWhen.js ***!
          \***********************************************************************************************/

        /*! exports provided: windowWhen */

        /***/
        function qplQ(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "windowWhen", function () {
            return windowWhen;
          });
          /* harmony import */


          var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subject */
          "ZTXN");
          /* harmony import */


          var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../OuterSubscriber */
          "pBDD");
          /* harmony import */


          var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../util/subscribeToResult */
          "mW0F");

          function windowWhen(closingSelector) {
            return function windowWhenOperatorFunction(source) {
              return source.lift(new WindowOperator(closingSelector));
            };
          }

          var WindowOperator = /*#__PURE__*/function () {
            function WindowOperator(closingSelector) {
              _classCallCheck(this, WindowOperator);

              this.closingSelector = closingSelector;
            }

            _createClass(WindowOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new WindowSubscriber(subscriber, this.closingSelector));
              }
            }]);

            return WindowOperator;
          }();

          var WindowSubscriber = /*#__PURE__*/function (_OuterSubscriber__WEB6) {
            _inherits(WindowSubscriber, _OuterSubscriber__WEB6);

            var _super81 = _createSuper(WindowSubscriber);

            function WindowSubscriber(destination, closingSelector) {
              var _this78;

              _classCallCheck(this, WindowSubscriber);

              _this78 = _super81.call(this, destination);
              _this78.destination = destination;
              _this78.closingSelector = closingSelector;

              _this78.openWindow();

              return _this78;
            }

            _createClass(WindowSubscriber, [{
              key: "notifyNext",
              value: function notifyNext(_outerValue, _innerValue, _outerIndex, _innerIndex, innerSub) {
                this.openWindow(innerSub);
              }
            }, {
              key: "notifyError",
              value: function notifyError(error) {
                this._error(error);
              }
            }, {
              key: "notifyComplete",
              value: function notifyComplete(innerSub) {
                this.openWindow(innerSub);
              }
            }, {
              key: "_next",
              value: function _next(value) {
                this.window.next(value);
              }
            }, {
              key: "_error",
              value: function _error(err) {
                this.window.error(err);
                this.destination.error(err);
                this.unsubscribeClosingNotification();
              }
            }, {
              key: "_complete",
              value: function _complete() {
                this.window.complete();
                this.destination.complete();
                this.unsubscribeClosingNotification();
              }
            }, {
              key: "unsubscribeClosingNotification",
              value: function unsubscribeClosingNotification() {
                if (this.closingNotification) {
                  this.closingNotification.unsubscribe();
                }
              }
            }, {
              key: "openWindow",
              value: function openWindow() {
                var innerSub = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

                if (innerSub) {
                  this.remove(innerSub);
                  innerSub.unsubscribe();
                }

                var prevWindow = this.window;

                if (prevWindow) {
                  prevWindow.complete();
                }

                var window = this.window = new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
                this.destination.next(window);
                var closingNotifier;

                try {
                  var closingSelector = this.closingSelector;
                  closingNotifier = closingSelector();
                } catch (e) {
                  this.destination.error(e);
                  this.window.error(e);
                  return;
                }

                this.add(this.closingNotification = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_2__["subscribeToResult"])(this, closingNotifier));
              }
            }]);

            return WindowSubscriber;
          }(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_1__["OuterSubscriber"]); //# sourceMappingURL=windowWhen.js.map

          /***/

        },

        /***/
        "r9RI":
        /*!******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/InnerSubscriber.js ***!
          \******************************************************************************************/

        /*! exports provided: InnerSubscriber */

        /***/
        function r9RI(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "InnerSubscriber", function () {
            return InnerSubscriber;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Subscriber */
          "5uGe");

          var InnerSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_41) {
            _inherits(InnerSubscriber, _Subscriber__WEBPACK_41);

            var _super82 = _createSuper(InnerSubscriber);

            function InnerSubscriber(parent, outerValue, outerIndex) {
              var _this79;

              _classCallCheck(this, InnerSubscriber);

              _this79 = _super82.call(this);
              _this79.parent = parent;
              _this79.outerValue = outerValue;
              _this79.outerIndex = outerIndex;
              _this79.index = 0;
              return _this79;
            }

            _createClass(InnerSubscriber, [{
              key: "_next",
              value: function _next(value) {
                this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
              }
            }, {
              key: "_error",
              value: function _error(error) {
                this.parent.notifyError(error, this);
                this.unsubscribe();
              }
            }, {
              key: "_complete",
              value: function _complete() {
                this.parent.notifyComplete(this);
                this.unsubscribe();
              }
            }]);

            return InnerSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=InnerSubscriber.js.map

          /***/

        },

        /***/
        "rNc+":
        /*!***********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/mergeMapTo.js ***!
          \***********************************************************************************************/

        /*! exports provided: mergeMapTo */

        /***/
        function rNc(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "mergeMapTo", function () {
            return mergeMapTo;
          });
          /* harmony import */


          var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./mergeMap */
          "cJ9h");

          function mergeMapTo(innerObservable, resultSelector) {
            var concurrent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.POSITIVE_INFINITY;

            if (typeof resultSelector === 'function') {
              return Object(_mergeMap__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function () {
                return innerObservable;
              }, resultSelector, concurrent);
            }

            if (typeof resultSelector === 'number') {
              concurrent = resultSelector;
            }

            return Object(_mergeMap__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function () {
              return innerObservable;
            }, concurrent);
          } //# sourceMappingURL=mergeMapTo.js.map

          /***/

        },

        /***/
        "rVMB":
        /*!*******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/zipAll.js ***!
          \*******************************************************************************************/

        /*! exports provided: zipAll */

        /***/
        function rVMB(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "zipAll", function () {
            return zipAll;
          });
          /* harmony import */


          var _observable_zip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../observable/zip */
          "wTjk");

          function zipAll(project) {
            return function (source) {
              return source.lift(new _observable_zip__WEBPACK_IMPORTED_MODULE_0__["ZipOperator"](project));
            };
          } //# sourceMappingURL=zipAll.js.map

          /***/

        },

        /***/
        "rWo0":
        /*!***********************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/Observer.js ***!
          \***********************************************************************************/

        /*! exports provided: empty */

        /***/
        function rWo0(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "empty", function () {
            return empty;
          });
          /* harmony import */


          var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./config */
          "HgnN");
          /* harmony import */


          var _util_hostReportError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./util/hostReportError */
          "i9P/");

          var empty = {
            closed: true,
            next: function next(value) {},
            error: function error(err) {
              if (_config__WEBPACK_IMPORTED_MODULE_0__["config"].useDeprecatedSynchronousErrorHandling) {
                throw err;
              } else {
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_1__["hostReportError"])(err);
              }
            },
            complete: function complete() {}
          }; //# sourceMappingURL=Observer.js.map

          /***/
        },

        /***/
        "ruxD":
        /*!*********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/finalize.js ***!
          \*********************************************************************************************/

        /*! exports provided: finalize */

        /***/
        function ruxD(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "finalize", function () {
            return finalize;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");
          /* harmony import */


          var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../Subscription */
          "bwdy");

          function finalize(callback) {
            return function (source) {
              return source.lift(new FinallyOperator(callback));
            };
          }

          var FinallyOperator = /*#__PURE__*/function () {
            function FinallyOperator(callback) {
              _classCallCheck(this, FinallyOperator);

              this.callback = callback;
            }

            _createClass(FinallyOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new FinallySubscriber(subscriber, this.callback));
              }
            }]);

            return FinallyOperator;
          }();

          var FinallySubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_42) {
            _inherits(FinallySubscriber, _Subscriber__WEBPACK_42);

            var _super83 = _createSuper(FinallySubscriber);

            function FinallySubscriber(destination, callback) {
              var _this80;

              _classCallCheck(this, FinallySubscriber);

              _this80 = _super83.call(this, destination);

              _this80.add(new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"](callback));

              return _this80;
            }

            return FinallySubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=finalize.js.map

          /***/

        },

        /***/
        "ryP2":
        /*!***************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/Notification.js ***!
          \***************************************************************************************/

        /*! exports provided: NotificationKind, Notification */

        /***/
        function ryP2(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "NotificationKind", function () {
            return NotificationKind;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "Notification", function () {
            return Notification;
          });
          /* harmony import */


          var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./observable/empty */
          "6Oco");
          /* harmony import */


          var _observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./observable/of */
          "ROBh");
          /* harmony import */


          var _observable_throwError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./observable/throwError */
          "47ST");

          var NotificationKind;

          (function (NotificationKind) {
            NotificationKind["NEXT"] = "N";
            NotificationKind["ERROR"] = "E";
            NotificationKind["COMPLETE"] = "C";
          })(NotificationKind || (NotificationKind = {}));

          var Notification = /*#__PURE__*/function () {
            function Notification(kind, value, error) {
              _classCallCheck(this, Notification);

              this.kind = kind;
              this.value = value;
              this.error = error;
              this.hasValue = kind === 'N';
            }

            _createClass(Notification, [{
              key: "observe",
              value: function observe(observer) {
                switch (this.kind) {
                  case 'N':
                    return observer.next && observer.next(this.value);

                  case 'E':
                    return observer.error && observer.error(this.error);

                  case 'C':
                    return observer.complete && observer.complete();
                }
              }
            }, {
              key: "do",
              value: function _do(next, error, complete) {
                var kind = this.kind;

                switch (kind) {
                  case 'N':
                    return next && next(this.value);

                  case 'E':
                    return error && error(this.error);

                  case 'C':
                    return complete && complete();
                }
              }
            }, {
              key: "accept",
              value: function accept(nextOrObserver, error, complete) {
                if (nextOrObserver && typeof nextOrObserver.next === 'function') {
                  return this.observe(nextOrObserver);
                } else {
                  return this["do"](nextOrObserver, error, complete);
                }
              }
            }, {
              key: "toObservable",
              value: function toObservable() {
                var kind = this.kind;

                switch (kind) {
                  case 'N':
                    return Object(_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])(this.value);

                  case 'E':
                    return Object(_observable_throwError__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.error);

                  case 'C':
                    return Object(_observable_empty__WEBPACK_IMPORTED_MODULE_0__["empty"])();
                }

                throw new Error('unexpected notification kind value');
              }
            }], [{
              key: "createNext",
              value: function createNext(value) {
                if (typeof value !== 'undefined') {
                  return new Notification('N', value);
                }

                return Notification.undefinedValueNotification;
              }
            }, {
              key: "createError",
              value: function createError(err) {
                return new Notification('E', undefined, err);
              }
            }, {
              key: "createComplete",
              value: function createComplete() {
                return Notification.completeNotification;
              }
            }]);

            return Notification;
          }();

          Notification.completeNotification = new Notification('C');
          Notification.undefinedValueNotification = new Notification('N', undefined); //# sourceMappingURL=Notification.js.map

          /***/
        },

        /***/
        "sWLk":
        /*!******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/symbol/iterator.js ***!
          \******************************************************************************************/

        /*! exports provided: getSymbolIterator, iterator, $$iterator */

        /***/
        function sWLk(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "getSymbolIterator", function () {
            return getSymbolIterator;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "iterator", function () {
            return iterator;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "$$iterator", function () {
            return $$iterator;
          });

          function getSymbolIterator() {
            if (typeof Symbol !== 'function' || !Symbol.iterator) {
              return '@@iterator';
            }

            return Symbol.iterator;
          }

          var iterator = getSymbolIterator();
          var $$iterator = iterator; //# sourceMappingURL=iterator.js.map

          /***/
        },

        /***/
        "soHz":
        /*!************************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/distinctUntilKeyChanged.js ***!
          \************************************************************************************************************/

        /*! exports provided: distinctUntilKeyChanged */

        /***/
        function soHz(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "distinctUntilKeyChanged", function () {
            return distinctUntilKeyChanged;
          });
          /* harmony import */


          var _distinctUntilChanged__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./distinctUntilChanged */
          "Ohay");

          function distinctUntilKeyChanged(key, compare) {
            return Object(_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])(function (x, y) {
              return compare ? compare(x[key], y[key]) : x[key] === y[key];
            });
          } //# sourceMappingURL=distinctUntilKeyChanged.js.map

          /***/

        },

        /***/
        "tDaw":
        /*!*********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/distinct.js ***!
          \*********************************************************************************************/

        /*! exports provided: distinct, DistinctSubscriber */

        /***/
        function tDaw(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "distinct", function () {
            return distinct;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "DistinctSubscriber", function () {
            return DistinctSubscriber;
          });
          /* harmony import */


          var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../innerSubscribe */
          "uCWR");

          function distinct(keySelector, flushes) {
            return function (source) {
              return source.lift(new DistinctOperator(keySelector, flushes));
            };
          }

          var DistinctOperator = /*#__PURE__*/function () {
            function DistinctOperator(keySelector, flushes) {
              _classCallCheck(this, DistinctOperator);

              this.keySelector = keySelector;
              this.flushes = flushes;
            }

            _createClass(DistinctOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new DistinctSubscriber(subscriber, this.keySelector, this.flushes));
              }
            }]);

            return DistinctOperator;
          }();

          var DistinctSubscriber = /*#__PURE__*/function (_innerSubscribe__WEBP18) {
            _inherits(DistinctSubscriber, _innerSubscribe__WEBP18);

            var _super84 = _createSuper(DistinctSubscriber);

            function DistinctSubscriber(destination, keySelector, flushes) {
              var _this81;

              _classCallCheck(this, DistinctSubscriber);

              _this81 = _super84.call(this, destination);
              _this81.keySelector = keySelector;
              _this81.values = new Set();

              if (flushes) {
                _this81.add(Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["innerSubscribe"])(flushes, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleInnerSubscriber"](_assertThisInitialized(_this81))));
              }

              return _this81;
            }

            _createClass(DistinctSubscriber, [{
              key: "notifyNext",
              value: function notifyNext() {
                this.values.clear();
              }
            }, {
              key: "notifyError",
              value: function notifyError(error) {
                this._error(error);
              }
            }, {
              key: "_next",
              value: function _next(value) {
                if (this.keySelector) {
                  this._useKeySelector(value);
                } else {
                  this._finalizeNext(value, value);
                }
              }
            }, {
              key: "_useKeySelector",
              value: function _useKeySelector(value) {
                var key;
                var destination = this.destination;

                try {
                  key = this.keySelector(value);
                } catch (err) {
                  destination.error(err);
                  return;
                }

                this._finalizeNext(key, value);
              }
            }, {
              key: "_finalizeNext",
              value: function _finalizeNext(key, value) {
                var values = this.values;

                if (!values.has(key)) {
                  values.add(key);
                  this.destination.next(value);
                }
              }
            }]);

            return DistinctSubscriber;
          }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleOuterSubscriber"]); //# sourceMappingURL=distinct.js.map

          /***/

        },

        /***/
        "tGer":
        /*!********************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/index.js ***!
          \********************************************************************/

        /*! exports provided: connectToChild, connectToParent, ErrorCode */

        /***/
        function tGer(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony import */


          var _parent_connectToChild__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./parent/connectToChild */
          "503g");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "connectToChild", function () {
            return _parent_connectToChild__WEBPACK_IMPORTED_MODULE_0__["default"];
          });
          /* harmony import */


          var _child_connectToParent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./child/connectToParent */
          "fSpn");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "connectToParent", function () {
            return _child_connectToParent__WEBPACK_IMPORTED_MODULE_1__["default"];
          });
          /* harmony import */


          var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./enums */
          "Rj9D");
          /* harmony reexport (safe) */


          __webpack_require__.d(__webpack_exports__, "ErrorCode", function () {
            return _enums__WEBPACK_IMPORTED_MODULE_2__["ErrorCode"];
          });
          /***/

        },

        /***/
        "tII7":
        /*!**********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/findIndex.js ***!
          \**********************************************************************************************/

        /*! exports provided: findIndex */

        /***/
        function tII7(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "findIndex", function () {
            return findIndex;
          });
          /* harmony import */


          var _operators_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../operators/find */
          "14JN");

          function findIndex(predicate, thisArg) {
            return function (source) {
              return source.lift(new _operators_find__WEBPACK_IMPORTED_MODULE_0__["FindValueOperator"](predicate, source, true, thisArg));
            };
          } //# sourceMappingURL=findIndex.js.map

          /***/

        },

        /***/
        "tUyG":
        /*!*******************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/createDestructor.js ***!
          \*******************************************************************************/

        /*! exports provided: default */

        /***/
        function tUyG(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony default export */


          __webpack_exports__["default"] = function () {
            var callbacks = [];
            var destroyed = false;
            return {
              destroy: function destroy(error) {
                destroyed = true;
                callbacks.forEach(function (callback) {
                  callback(error);
                });
              },
              onDestroy: function onDestroy(callback) {
                destroyed ? callback() : callbacks.push(callback);
              }
            };
          };
          /***/

        },

        /***/
        "uCWR":
        /*!*****************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/innerSubscribe.js ***!
          \*****************************************************************************************/

        /*! exports provided: SimpleInnerSubscriber, ComplexInnerSubscriber, SimpleOuterSubscriber, ComplexOuterSubscriber, innerSubscribe */

        /***/
        function uCWR(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "SimpleInnerSubscriber", function () {
            return SimpleInnerSubscriber;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "ComplexInnerSubscriber", function () {
            return ComplexInnerSubscriber;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "SimpleOuterSubscriber", function () {
            return SimpleOuterSubscriber;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "ComplexOuterSubscriber", function () {
            return ComplexOuterSubscriber;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "innerSubscribe", function () {
            return innerSubscribe;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Subscriber */
          "5uGe");
          /* harmony import */


          var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./Observable */
          "IdLP");
          /* harmony import */


          var _util_subscribeTo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./util/subscribeTo */
          "1MAX");

          var SimpleInnerSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_43) {
            _inherits(SimpleInnerSubscriber, _Subscriber__WEBPACK_43);

            var _super85 = _createSuper(SimpleInnerSubscriber);

            function SimpleInnerSubscriber(parent) {
              var _this82;

              _classCallCheck(this, SimpleInnerSubscriber);

              _this82 = _super85.call(this);
              _this82.parent = parent;
              return _this82;
            }

            _createClass(SimpleInnerSubscriber, [{
              key: "_next",
              value: function _next(value) {
                this.parent.notifyNext(value);
              }
            }, {
              key: "_error",
              value: function _error(error) {
                this.parent.notifyError(error);
                this.unsubscribe();
              }
            }, {
              key: "_complete",
              value: function _complete() {
                this.parent.notifyComplete();
                this.unsubscribe();
              }
            }]);

            return SimpleInnerSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]);

          var ComplexInnerSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_44) {
            _inherits(ComplexInnerSubscriber, _Subscriber__WEBPACK_44);

            var _super86 = _createSuper(ComplexInnerSubscriber);

            function ComplexInnerSubscriber(parent, outerValue, outerIndex) {
              var _this83;

              _classCallCheck(this, ComplexInnerSubscriber);

              _this83 = _super86.call(this);
              _this83.parent = parent;
              _this83.outerValue = outerValue;
              _this83.outerIndex = outerIndex;
              return _this83;
            }

            _createClass(ComplexInnerSubscriber, [{
              key: "_next",
              value: function _next(value) {
                this.parent.notifyNext(this.outerValue, value, this.outerIndex, this);
              }
            }, {
              key: "_error",
              value: function _error(error) {
                this.parent.notifyError(error);
                this.unsubscribe();
              }
            }, {
              key: "_complete",
              value: function _complete() {
                this.parent.notifyComplete(this);
                this.unsubscribe();
              }
            }]);

            return ComplexInnerSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]);

          var SimpleOuterSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_45) {
            _inherits(SimpleOuterSubscriber, _Subscriber__WEBPACK_45);

            var _super87 = _createSuper(SimpleOuterSubscriber);

            function SimpleOuterSubscriber() {
              _classCallCheck(this, SimpleOuterSubscriber);

              return _super87.apply(this, arguments);
            }

            _createClass(SimpleOuterSubscriber, [{
              key: "notifyNext",
              value: function notifyNext(innerValue) {
                this.destination.next(innerValue);
              }
            }, {
              key: "notifyError",
              value: function notifyError(err) {
                this.destination.error(err);
              }
            }, {
              key: "notifyComplete",
              value: function notifyComplete() {
                this.destination.complete();
              }
            }]);

            return SimpleOuterSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]);

          var ComplexOuterSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_46) {
            _inherits(ComplexOuterSubscriber, _Subscriber__WEBPACK_46);

            var _super88 = _createSuper(ComplexOuterSubscriber);

            function ComplexOuterSubscriber() {
              _classCallCheck(this, ComplexOuterSubscriber);

              return _super88.apply(this, arguments);
            }

            _createClass(ComplexOuterSubscriber, [{
              key: "notifyNext",
              value: function notifyNext(_outerValue, innerValue, _outerIndex, _innerSub) {
                this.destination.next(innerValue);
              }
            }, {
              key: "notifyError",
              value: function notifyError(error) {
                this.destination.error(error);
              }
            }, {
              key: "notifyComplete",
              value: function notifyComplete(_innerSub) {
                this.destination.complete();
              }
            }]);

            return ComplexOuterSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]);

          function innerSubscribe(result, innerSubscriber) {
            if (innerSubscriber.closed) {
              return undefined;
            }

            if (result instanceof _Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]) {
              return result.subscribe(innerSubscriber);
            }

            return Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_2__["subscribeTo"])(result)(innerSubscriber);
          } //# sourceMappingURL=innerSubscribe.js.map

          /***/

        },

        /***/
        "uDlg":
        /*!*******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/sample.js ***!
          \*******************************************************************************************/

        /*! exports provided: sample */

        /***/
        function uDlg(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "sample", function () {
            return sample;
          });
          /* harmony import */


          var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../innerSubscribe */
          "uCWR");

          function sample(notifier) {
            return function (source) {
              return source.lift(new SampleOperator(notifier));
            };
          }

          var SampleOperator = /*#__PURE__*/function () {
            function SampleOperator(notifier) {
              _classCallCheck(this, SampleOperator);

              this.notifier = notifier;
            }

            _createClass(SampleOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                var sampleSubscriber = new SampleSubscriber(subscriber);
                var subscription = source.subscribe(sampleSubscriber);
                subscription.add(Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["innerSubscribe"])(this.notifier, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleInnerSubscriber"](sampleSubscriber)));
                return subscription;
              }
            }]);

            return SampleOperator;
          }();

          var SampleSubscriber = /*#__PURE__*/function (_innerSubscribe__WEBP19) {
            _inherits(SampleSubscriber, _innerSubscribe__WEBP19);

            var _super89 = _createSuper(SampleSubscriber);

            function SampleSubscriber() {
              var _this84;

              _classCallCheck(this, SampleSubscriber);

              _this84 = _super89.apply(this, arguments);
              _this84.hasValue = false;
              return _this84;
            }

            _createClass(SampleSubscriber, [{
              key: "_next",
              value: function _next(value) {
                this.value = value;
                this.hasValue = true;
              }
            }, {
              key: "notifyNext",
              value: function notifyNext() {
                this.emitValue();
              }
            }, {
              key: "notifyComplete",
              value: function notifyComplete() {
                this.emitValue();
              }
            }, {
              key: "emitValue",
              value: function emitValue() {
                if (this.hasValue) {
                  this.hasValue = false;
                  this.destination.next(this.value);
                }
              }
            }]);

            return SampleSubscriber;
          }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleOuterSubscriber"]); //# sourceMappingURL=sample.js.map

          /***/

        },

        /***/
        "uTrF":
        /*!***************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/UnsubscriptionError.js ***!
          \***************************************************************************************************/

        /*! exports provided: UnsubscriptionError */

        /***/
        function uTrF(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function () {
            return UnsubscriptionError;
          });

          var UnsubscriptionErrorImpl = function () {
            function UnsubscriptionErrorImpl(errors) {
              Error.call(this);
              this.message = errors ? "".concat(errors.length, " errors occurred during unsubscription:\n").concat(errors.map(function (err, i) {
                return "".concat(i + 1, ") ").concat(err.toString());
              }).join('\n  ')) : '';
              this.name = 'UnsubscriptionError';
              this.errors = errors;
              return this;
            }

            UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
            return UnsubscriptionErrorImpl;
          }();

          var UnsubscriptionError = UnsubscriptionErrorImpl; //# sourceMappingURL=UnsubscriptionError.js.map

          /***/
        },

        /***/
        "vAPC":
        /*!************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/timeoutWith.js ***!
          \************************************************************************************************/

        /*! exports provided: timeoutWith */

        /***/
        function vAPC(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "timeoutWith", function () {
            return timeoutWith;
          });
          /* harmony import */


          var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../scheduler/async */
          "Efrr");
          /* harmony import */


          var _util_isDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../util/isDate */
          "iRe+");
          /* harmony import */


          var _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../innerSubscribe */
          "uCWR");

          function timeoutWith(due, withObservable) {
            var scheduler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _scheduler_async__WEBPACK_IMPORTED_MODULE_0__["async"];
            return function (source) {
              var absoluteTimeout = Object(_util_isDate__WEBPACK_IMPORTED_MODULE_1__["isDate"])(due);
              var waitFor = absoluteTimeout ? +due - scheduler.now() : Math.abs(due);
              return source.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
            };
          }

          var TimeoutWithOperator = /*#__PURE__*/function () {
            function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
              _classCallCheck(this, TimeoutWithOperator);

              this.waitFor = waitFor;
              this.absoluteTimeout = absoluteTimeout;
              this.withObservable = withObservable;
              this.scheduler = scheduler;
            }

            _createClass(TimeoutWithOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
              }
            }]);

            return TimeoutWithOperator;
          }();

          var TimeoutWithSubscriber = /*#__PURE__*/function (_innerSubscribe__WEBP20) {
            _inherits(TimeoutWithSubscriber, _innerSubscribe__WEBP20);

            var _super90 = _createSuper(TimeoutWithSubscriber);

            function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
              var _this85;

              _classCallCheck(this, TimeoutWithSubscriber);

              _this85 = _super90.call(this, destination);
              _this85.absoluteTimeout = absoluteTimeout;
              _this85.waitFor = waitFor;
              _this85.withObservable = withObservable;
              _this85.scheduler = scheduler;

              _this85.scheduleTimeout();

              return _this85;
            }

            _createClass(TimeoutWithSubscriber, [{
              key: "scheduleTimeout",
              value: function scheduleTimeout() {
                var action = this.action;

                if (action) {
                  this.action = action.schedule(this, this.waitFor);
                } else {
                  this.add(this.action = this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, this));
                }
              }
            }, {
              key: "_next",
              value: function _next(value) {
                if (!this.absoluteTimeout) {
                  this.scheduleTimeout();
                }

                _get(_getPrototypeOf(TimeoutWithSubscriber.prototype), "_next", this).call(this, value);
              }
            }, {
              key: "_unsubscribe",
              value: function _unsubscribe() {
                this.action = undefined;
                this.scheduler = null;
                this.withObservable = null;
              }
            }], [{
              key: "dispatchTimeout",
              value: function dispatchTimeout(subscriber) {
                var withObservable = subscriber.withObservable;

                subscriber._unsubscribeAndRecycle();

                subscriber.add(Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["innerSubscribe"])(withObservable, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["SimpleInnerSubscriber"](subscriber)));
              }
            }]);

            return TimeoutWithSubscriber;
          }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["SimpleOuterSubscriber"]); //# sourceMappingURL=timeoutWith.js.map

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
        "vT4p":
        /*!*****************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduler/asap.js ***!
          \*****************************************************************************************/

        /*! exports provided: asapScheduler, asap */

        /***/
        function vT4p(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "asapScheduler", function () {
            return asapScheduler;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "asap", function () {
            return asap;
          });
          /* harmony import */


          var _AsapAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./AsapAction */
          "f8VV");
          /* harmony import */


          var _AsapScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./AsapScheduler */
          "ZNOZ");

          var asapScheduler = new _AsapScheduler__WEBPACK_IMPORTED_MODULE_1__["AsapScheduler"](_AsapAction__WEBPACK_IMPORTED_MODULE_0__["AsapAction"]);
          var asap = asapScheduler; //# sourceMappingURL=asap.js.map

          /***/
        },

        /***/
        "vcZZ":
        /*!***********************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/SubscribeOnObservable.js ***!
          \***********************************************************************************************************/

        /*! exports provided: SubscribeOnObservable */

        /***/
        function vcZZ(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "SubscribeOnObservable", function () {
            return SubscribeOnObservable;
          });
          /* harmony import */


          var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Observable */
          "IdLP");
          /* harmony import */


          var _scheduler_asap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../scheduler/asap */
          "vT4p");
          /* harmony import */


          var _util_isNumeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../util/isNumeric */
          "KRZI");

          var SubscribeOnObservable = /*#__PURE__*/function (_Observable__WEBPACK_4) {
            _inherits(SubscribeOnObservable, _Observable__WEBPACK_4);

            var _super91 = _createSuper(SubscribeOnObservable);

            function SubscribeOnObservable(source) {
              var _this86;

              var delayTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
              var scheduler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _scheduler_asap__WEBPACK_IMPORTED_MODULE_1__["asap"];

              _classCallCheck(this, SubscribeOnObservable);

              _this86 = _super91.call(this);
              _this86.source = source;
              _this86.delayTime = delayTime;
              _this86.scheduler = scheduler;

              if (!Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(delayTime) || delayTime < 0) {
                _this86.delayTime = 0;
              }

              if (!scheduler || typeof scheduler.schedule !== 'function') {
                _this86.scheduler = _scheduler_asap__WEBPACK_IMPORTED_MODULE_1__["asap"];
              }

              return _this86;
            }

            _createClass(SubscribeOnObservable, [{
              key: "_subscribe",
              value: function _subscribe(subscriber) {
                var delay = this.delayTime;
                var source = this.source;
                var scheduler = this.scheduler;
                return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
                  source: source,
                  subscriber: subscriber
                });
              }
            }], [{
              key: "create",
              value: function create(source) {
                var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var scheduler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _scheduler_asap__WEBPACK_IMPORTED_MODULE_1__["asap"];
                return new SubscribeOnObservable(source, delay, scheduler);
              }
            }, {
              key: "dispatch",
              value: function dispatch(arg) {
                var source = arg.source,
                    subscriber = arg.subscriber;
                return this.add(source.subscribe(subscriber));
              }
            }]);

            return SubscribeOnObservable;
          }(_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]); //# sourceMappingURL=SubscribeOnObservable.js.map

          /***/

        },

        /***/
        "vjgY":
        /*!**************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/dematerialize.js ***!
          \**************************************************************************************************/

        /*! exports provided: dematerialize */

        /***/
        function vjgY(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "dematerialize", function () {
            return dematerialize;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");

          function dematerialize() {
            return function dematerializeOperatorFunction(source) {
              return source.lift(new DeMaterializeOperator());
            };
          }

          var DeMaterializeOperator = /*#__PURE__*/function () {
            function DeMaterializeOperator() {
              _classCallCheck(this, DeMaterializeOperator);
            }

            _createClass(DeMaterializeOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new DeMaterializeSubscriber(subscriber));
              }
            }]);

            return DeMaterializeOperator;
          }();

          var DeMaterializeSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_47) {
            _inherits(DeMaterializeSubscriber, _Subscriber__WEBPACK_47);

            var _super92 = _createSuper(DeMaterializeSubscriber);

            function DeMaterializeSubscriber(destination) {
              _classCallCheck(this, DeMaterializeSubscriber);

              return _super92.call(this, destination);
            }

            _createClass(DeMaterializeSubscriber, [{
              key: "_next",
              value: function _next(value) {
                value.observe(this.destination);
              }
            }]);

            return DeMaterializeSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=dematerialize.js.map

          /***/

        },

        /***/
        "w0kG":
        /*!***************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/withLatestFrom.js ***!
          \***************************************************************************************************/

        /*! exports provided: withLatestFrom */

        /***/
        function w0kG(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "withLatestFrom", function () {
            return withLatestFrom;
          });
          /* harmony import */


          var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../OuterSubscriber */
          "pBDD");
          /* harmony import */


          var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../util/subscribeToResult */
          "mW0F");

          function withLatestFrom() {
            for (var _len18 = arguments.length, args = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
              args[_key18] = arguments[_key18];
            }

            return function (source) {
              var project;

              if (typeof args[args.length - 1] === 'function') {
                project = args.pop();
              }

              var observables = args;
              return source.lift(new WithLatestFromOperator(observables, project));
            };
          }

          var WithLatestFromOperator = /*#__PURE__*/function () {
            function WithLatestFromOperator(observables, project) {
              _classCallCheck(this, WithLatestFromOperator);

              this.observables = observables;
              this.project = project;
            }

            _createClass(WithLatestFromOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
              }
            }]);

            return WithLatestFromOperator;
          }();

          var WithLatestFromSubscriber = /*#__PURE__*/function (_OuterSubscriber__WEB7) {
            _inherits(WithLatestFromSubscriber, _OuterSubscriber__WEB7);

            var _super93 = _createSuper(WithLatestFromSubscriber);

            function WithLatestFromSubscriber(destination, observables, project) {
              var _this87;

              _classCallCheck(this, WithLatestFromSubscriber);

              _this87 = _super93.call(this, destination);
              _this87.observables = observables;
              _this87.project = project;
              _this87.toRespond = [];
              var len = observables.length;
              _this87.values = new Array(len);

              for (var i = 0; i < len; i++) {
                _this87.toRespond.push(i);
              }

              for (var _i2 = 0; _i2 < len; _i2++) {
                var observable = observables[_i2];

                _this87.add(Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__["subscribeToResult"])(_assertThisInitialized(_this87), observable, undefined, _i2));
              }

              return _this87;
            }

            _createClass(WithLatestFromSubscriber, [{
              key: "notifyNext",
              value: function notifyNext(_outerValue, innerValue, outerIndex) {
                this.values[outerIndex] = innerValue;
                var toRespond = this.toRespond;

                if (toRespond.length > 0) {
                  var found = toRespond.indexOf(outerIndex);

                  if (found !== -1) {
                    toRespond.splice(found, 1);
                  }
                }
              }
            }, {
              key: "notifyComplete",
              value: function notifyComplete() {}
            }, {
              key: "_next",
              value: function _next(value) {
                if (this.toRespond.length === 0) {
                  var args = [value].concat(_toConsumableArray(this.values));

                  if (this.project) {
                    this._tryProject(args);
                  } else {
                    this.destination.next(args);
                  }
                }
              }
            }, {
              key: "_tryProject",
              value: function _tryProject(args) {
                var result;

                try {
                  result = this.project.apply(this, args);
                } catch (err) {
                  this.destination.error(err);
                  return;
                }

                this.destination.next(result);
              }
            }]);

            return WithLatestFromSubscriber;
          }(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__["OuterSubscriber"]); //# sourceMappingURL=withLatestFrom.js.map

          /***/

        },

        /***/
        "w2TD":
        /*!********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/endWith.js ***!
          \********************************************************************************************/

        /*! exports provided: endWith */

        /***/
        function w2TD(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "endWith", function () {
            return endWith;
          });
          /* harmony import */


          var _observable_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../observable/concat */
          "qZtG");
          /* harmony import */


          var _observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../observable/of */
          "ROBh");

          function endWith() {
            for (var _len19 = arguments.length, array = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
              array[_key19] = arguments[_key19];
            }

            return function (source) {
              return Object(_observable_concat__WEBPACK_IMPORTED_MODULE_0__["concat"])(source, Object(_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"]).apply(void 0, array));
            };
          } //# sourceMappingURL=endWith.js.map

          /***/

        },

        /***/
        "wIzt":
        /*!*****************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/subscribeToObservable.js ***!
          \*****************************************************************************************************/

        /*! exports provided: subscribeToObservable */

        /***/
        function wIzt(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "subscribeToObservable", function () {
            return subscribeToObservable;
          });
          /* harmony import */


          var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../symbol/observable */
          "qEfY");

          var subscribeToObservable = function subscribeToObservable(obj) {
            return function (subscriber) {
              var obs = obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__["observable"]]();

              if (typeof obs.subscribe !== 'function') {
                throw new TypeError('Provided object does not correctly implement Symbol.observable');
              } else {
                return obs.subscribe(subscriber);
              }
            };
          }; //# sourceMappingURL=subscribeToObservable.js.map

          /***/

        },

        /***/
        "wTjk":
        /*!*****************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/zip.js ***!
          \*****************************************************************************************/

        /*! exports provided: zip, ZipOperator, ZipSubscriber */

        /***/
        function wTjk(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "zip", function () {
            return zip;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "ZipOperator", function () {
            return ZipOperator;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "ZipSubscriber", function () {
            return ZipSubscriber;
          });
          /* harmony import */


          var _fromArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./fromArray */
          "ckkg");
          /* harmony import */


          var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../util/isArray */
          "FU6l");
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");
          /* harmony import */


          var _internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../internal/symbol/iterator */
          "sWLk");
          /* harmony import */


          var _innerSubscribe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../innerSubscribe */
          "uCWR");

          function zip() {
            for (var _len20 = arguments.length, observables = new Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
              observables[_key20] = arguments[_key20];
            }

            var resultSelector = observables[observables.length - 1];

            if (typeof resultSelector === 'function') {
              observables.pop();
            }

            return Object(_fromArray__WEBPACK_IMPORTED_MODULE_0__["fromArray"])(observables, undefined).lift(new ZipOperator(resultSelector));
          }

          var ZipOperator = /*#__PURE__*/function () {
            function ZipOperator(resultSelector) {
              _classCallCheck(this, ZipOperator);

              this.resultSelector = resultSelector;
            }

            _createClass(ZipOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
              }
            }]);

            return ZipOperator;
          }();

          var ZipSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_48) {
            _inherits(ZipSubscriber, _Subscriber__WEBPACK_48);

            var _super94 = _createSuper(ZipSubscriber);

            function ZipSubscriber(destination, resultSelector) {
              var _this88;

              var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.create(null);

              _classCallCheck(this, ZipSubscriber);

              _this88 = _super94.call(this, destination);
              _this88.resultSelector = resultSelector;
              _this88.iterators = [];
              _this88.active = 0;
              _this88.resultSelector = typeof resultSelector === 'function' ? resultSelector : undefined;
              return _this88;
            }

            _createClass(ZipSubscriber, [{
              key: "_next",
              value: function _next(value) {
                var iterators = this.iterators;

                if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value)) {
                  iterators.push(new StaticArrayIterator(value));
                } else if (typeof value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__["iterator"]] === 'function') {
                  iterators.push(new StaticIterator(value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__["iterator"]]()));
                } else {
                  iterators.push(new ZipBufferIterator(this.destination, this, value));
                }
              }
            }, {
              key: "_complete",
              value: function _complete() {
                var iterators = this.iterators;
                var len = iterators.length;
                this.unsubscribe();

                if (len === 0) {
                  this.destination.complete();
                  return;
                }

                this.active = len;

                for (var i = 0; i < len; i++) {
                  var iterator = iterators[i];

                  if (iterator.stillUnsubscribed) {
                    var destination = this.destination;
                    destination.add(iterator.subscribe());
                  } else {
                    this.active--;
                  }
                }
              }
            }, {
              key: "notifyInactive",
              value: function notifyInactive() {
                this.active--;

                if (this.active === 0) {
                  this.destination.complete();
                }
              }
            }, {
              key: "checkIterators",
              value: function checkIterators() {
                var iterators = this.iterators;
                var len = iterators.length;
                var destination = this.destination;

                for (var i = 0; i < len; i++) {
                  var iterator = iterators[i];

                  if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                    return;
                  }
                }

                var shouldComplete = false;
                var args = [];

                for (var _i3 = 0; _i3 < len; _i3++) {
                  var _iterator = iterators[_i3];

                  var result = _iterator.next();

                  if (_iterator.hasCompleted()) {
                    shouldComplete = true;
                  }

                  if (result.done) {
                    destination.complete();
                    return;
                  }

                  args.push(result.value);
                }

                if (this.resultSelector) {
                  this._tryresultSelector(args);
                } else {
                  destination.next(args);
                }

                if (shouldComplete) {
                  destination.complete();
                }
              }
            }, {
              key: "_tryresultSelector",
              value: function _tryresultSelector(args) {
                var result;

                try {
                  result = this.resultSelector.apply(this, args);
                } catch (err) {
                  this.destination.error(err);
                  return;
                }

                this.destination.next(result);
              }
            }]);

            return ZipSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_2__["Subscriber"]);

          var StaticIterator = /*#__PURE__*/function () {
            function StaticIterator(iterator) {
              _classCallCheck(this, StaticIterator);

              this.iterator = iterator;
              this.nextResult = iterator.next();
            }

            _createClass(StaticIterator, [{
              key: "hasValue",
              value: function hasValue() {
                return true;
              }
            }, {
              key: "next",
              value: function next() {
                var result = this.nextResult;
                this.nextResult = this.iterator.next();
                return result;
              }
            }, {
              key: "hasCompleted",
              value: function hasCompleted() {
                var nextResult = this.nextResult;
                return Boolean(nextResult && nextResult.done);
              }
            }]);

            return StaticIterator;
          }();

          var StaticArrayIterator = /*#__PURE__*/function () {
            function StaticArrayIterator(array) {
              _classCallCheck(this, StaticArrayIterator);

              this.array = array;
              this.index = 0;
              this.length = 0;
              this.length = array.length;
            }

            _createClass(StaticArrayIterator, [{
              key: _internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__["iterator"],
              value: function value() {
                return this;
              }
            }, {
              key: "next",
              value: function next(value) {
                var i = this.index++;
                var array = this.array;
                return i < this.length ? {
                  value: array[i],
                  done: false
                } : {
                  value: null,
                  done: true
                };
              }
            }, {
              key: "hasValue",
              value: function hasValue() {
                return this.array.length > this.index;
              }
            }, {
              key: "hasCompleted",
              value: function hasCompleted() {
                return this.array.length === this.index;
              }
            }]);

            return StaticArrayIterator;
          }();

          var ZipBufferIterator = /*#__PURE__*/function (_innerSubscribe__WEBP21) {
            _inherits(ZipBufferIterator, _innerSubscribe__WEBP21);

            var _super95 = _createSuper(ZipBufferIterator);

            function ZipBufferIterator(destination, parent, observable) {
              var _this89;

              _classCallCheck(this, ZipBufferIterator);

              _this89 = _super95.call(this, destination);
              _this89.parent = parent;
              _this89.observable = observable;
              _this89.stillUnsubscribed = true;
              _this89.buffer = [];
              _this89.isComplete = false;
              return _this89;
            }

            _createClass(ZipBufferIterator, [{
              key: _internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__["iterator"],
              value: function value() {
                return this;
              }
            }, {
              key: "next",
              value: function next() {
                var buffer = this.buffer;

                if (buffer.length === 0 && this.isComplete) {
                  return {
                    value: null,
                    done: true
                  };
                } else {
                  return {
                    value: buffer.shift(),
                    done: false
                  };
                }
              }
            }, {
              key: "hasValue",
              value: function hasValue() {
                return this.buffer.length > 0;
              }
            }, {
              key: "hasCompleted",
              value: function hasCompleted() {
                return this.buffer.length === 0 && this.isComplete;
              }
            }, {
              key: "notifyComplete",
              value: function notifyComplete() {
                if (this.buffer.length > 0) {
                  this.isComplete = true;
                  this.parent.notifyInactive();
                } else {
                  this.destination.complete();
                }
              }
            }, {
              key: "notifyNext",
              value: function notifyNext(innerValue) {
                this.buffer.push(innerValue);
                this.parent.checkIterators();
              }
            }, {
              key: "subscribe",
              value: function subscribe() {
                return Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_4__["innerSubscribe"])(this.observable, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_4__["SimpleInnerSubscriber"](this));
              }
            }]);

            return ZipBufferIterator;
          }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_4__["SimpleOuterSubscriber"]); //# sourceMappingURL=zip.js.map

          /***/

        },

        /***/
        "wqq/":
        /*!************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/shareReplay.js ***!
          \************************************************************************************************/

        /*! exports provided: shareReplay */

        /***/
        function wqq(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "shareReplay", function () {
            return shareReplay;
          });
          /* harmony import */


          var _ReplaySubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../ReplaySubject */
          "QQZH");

          function shareReplay(configOrBufferSize, windowTime, scheduler) {
            var config;

            if (configOrBufferSize && typeof configOrBufferSize === 'object') {
              config = configOrBufferSize;
            } else {
              config = {
                bufferSize: configOrBufferSize,
                windowTime: windowTime,
                refCount: false,
                scheduler: scheduler
              };
            }

            return function (source) {
              return source.lift(shareReplayOperator(config));
            };
          }

          function shareReplayOperator(_ref5) {
            var _ref5$bufferSize = _ref5.bufferSize,
                bufferSize = _ref5$bufferSize === void 0 ? Number.POSITIVE_INFINITY : _ref5$bufferSize,
                _ref5$windowTime = _ref5.windowTime,
                windowTime = _ref5$windowTime === void 0 ? Number.POSITIVE_INFINITY : _ref5$windowTime,
                useRefCount = _ref5.refCount,
                scheduler = _ref5.scheduler;
            var subject;
            var refCount = 0;
            var subscription;
            var hasError = false;
            var isComplete = false;
            return function shareReplayOperation(source) {
              refCount++;
              var innerSub;

              if (!subject || hasError) {
                hasError = false;
                subject = new _ReplaySubject__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](bufferSize, windowTime, scheduler);
                innerSub = subject.subscribe(this);
                subscription = source.subscribe({
                  next: function next(value) {
                    subject.next(value);
                  },
                  error: function error(err) {
                    hasError = true;
                    subject.error(err);
                  },
                  complete: function complete() {
                    isComplete = true;
                    subscription = undefined;
                    subject.complete();
                  }
                });
              } else {
                innerSub = subject.subscribe(this);
              }

              this.add(function () {
                refCount--;
                innerSub.unsubscribe();

                if (subscription && !isComplete && useRefCount && refCount === 0) {
                  subscription.unsubscribe();
                  subscription = undefined;
                  subject = undefined;
                }
              });
            };
          } //# sourceMappingURL=shareReplay.js.map

          /***/

        },

        /***/
        "xOLM":
        /*!**********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/retryWhen.js ***!
          \**********************************************************************************************/

        /*! exports provided: retryWhen */

        /***/
        function xOLM(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "retryWhen", function () {
            return retryWhen;
          });
          /* harmony import */


          var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subject */
          "ZTXN");
          /* harmony import */


          var _innerSubscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../innerSubscribe */
          "uCWR");

          function retryWhen(notifier) {
            return function (source) {
              return source.lift(new RetryWhenOperator(notifier, source));
            };
          }

          var RetryWhenOperator = /*#__PURE__*/function () {
            function RetryWhenOperator(notifier, source) {
              _classCallCheck(this, RetryWhenOperator);

              this.notifier = notifier;
              this.source = source;
            }

            _createClass(RetryWhenOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
              }
            }]);

            return RetryWhenOperator;
          }();

          var RetryWhenSubscriber = /*#__PURE__*/function (_innerSubscribe__WEBP22) {
            _inherits(RetryWhenSubscriber, _innerSubscribe__WEBP22);

            var _super96 = _createSuper(RetryWhenSubscriber);

            function RetryWhenSubscriber(destination, notifier, source) {
              var _this90;

              _classCallCheck(this, RetryWhenSubscriber);

              _this90 = _super96.call(this, destination);
              _this90.notifier = notifier;
              _this90.source = source;
              return _this90;
            }

            _createClass(RetryWhenSubscriber, [{
              key: "error",
              value: function error(err) {
                if (!this.isStopped) {
                  var errors = this.errors;
                  var retries = this.retries;
                  var retriesSubscription = this.retriesSubscription;

                  if (!retries) {
                    errors = new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();

                    try {
                      var notifier = this.notifier;
                      retries = notifier(errors);
                    } catch (e) {
                      return _get(_getPrototypeOf(RetryWhenSubscriber.prototype), "error", this).call(this, e);
                    }

                    retriesSubscription = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_1__["innerSubscribe"])(retries, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_1__["SimpleInnerSubscriber"](this));
                  } else {
                    this.errors = undefined;
                    this.retriesSubscription = undefined;
                  }

                  this._unsubscribeAndRecycle();

                  this.errors = errors;
                  this.retries = retries;
                  this.retriesSubscription = retriesSubscription;
                  errors.next(err);
                }
              }
            }, {
              key: "_unsubscribe",
              value: function _unsubscribe() {
                var errors = this.errors,
                    retriesSubscription = this.retriesSubscription;

                if (errors) {
                  errors.unsubscribe();
                  this.errors = undefined;
                }

                if (retriesSubscription) {
                  retriesSubscription.unsubscribe();
                  this.retriesSubscription = undefined;
                }

                this.retries = undefined;
              }
            }, {
              key: "notifyNext",
              value: function notifyNext() {
                var _unsubscribe = this._unsubscribe;
                this._unsubscribe = null;

                this._unsubscribeAndRecycle();

                this._unsubscribe = _unsubscribe;
                this.source.subscribe(this);
              }
            }]);

            return RetryWhenSubscriber;
          }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_1__["SimpleOuterSubscriber"]); //# sourceMappingURL=retryWhen.js.map

          /***/

        },

        /***/
        "xVbo":
        /*!*******************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/filter.js ***!
          \*******************************************************************************************/

        /*! exports provided: filter */

        /***/
        function xVbo(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "filter", function () {
            return filter;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");

          function filter(predicate, thisArg) {
            return function filterOperatorFunction(source) {
              return source.lift(new FilterOperator(predicate, thisArg));
            };
          }

          var FilterOperator = /*#__PURE__*/function () {
            function FilterOperator(predicate, thisArg) {
              _classCallCheck(this, FilterOperator);

              this.predicate = predicate;
              this.thisArg = thisArg;
            }

            _createClass(FilterOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
              }
            }]);

            return FilterOperator;
          }();

          var FilterSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_49) {
            _inherits(FilterSubscriber, _Subscriber__WEBPACK_49);

            var _super97 = _createSuper(FilterSubscriber);

            function FilterSubscriber(destination, predicate, thisArg) {
              var _this91;

              _classCallCheck(this, FilterSubscriber);

              _this91 = _super97.call(this, destination);
              _this91.predicate = predicate;
              _this91.thisArg = thisArg;
              _this91.count = 0;
              return _this91;
            }

            _createClass(FilterSubscriber, [{
              key: "_next",
              value: function _next(value) {
                var result;

                try {
                  result = this.predicate.call(this.thisArg, value, this.count++);
                } catch (err) {
                  this.destination.error(err);
                  return;
                }

                if (result) {
                  this.destination.next(value);
                }
              }
            }]);

            return FilterSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]); //# sourceMappingURL=filter.js.map

          /***/

        },

        /***/
        "xtkq":
        /*!********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/groupBy.js ***!
          \********************************************************************************************/

        /*! exports provided: groupBy, GroupedObservable */

        /***/
        function xtkq(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "groupBy", function () {
            return groupBy;
          });
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "GroupedObservable", function () {
            return GroupedObservable;
          });
          /* harmony import */


          var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../Subscriber */
          "5uGe");
          /* harmony import */


          var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../Subscription */
          "bwdy");
          /* harmony import */


          var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../Observable */
          "IdLP");
          /* harmony import */


          var _Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../Subject */
          "ZTXN");

          function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
            return function (source) {
              return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
            };
          }

          var GroupByOperator = /*#__PURE__*/function () {
            function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
              _classCallCheck(this, GroupByOperator);

              this.keySelector = keySelector;
              this.elementSelector = elementSelector;
              this.durationSelector = durationSelector;
              this.subjectSelector = subjectSelector;
            }

            _createClass(GroupByOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
              }
            }]);

            return GroupByOperator;
          }();

          var GroupBySubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_50) {
            _inherits(GroupBySubscriber, _Subscriber__WEBPACK_50);

            var _super98 = _createSuper(GroupBySubscriber);

            function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
              var _this92;

              _classCallCheck(this, GroupBySubscriber);

              _this92 = _super98.call(this, destination);
              _this92.keySelector = keySelector;
              _this92.elementSelector = elementSelector;
              _this92.durationSelector = durationSelector;
              _this92.subjectSelector = subjectSelector;
              _this92.groups = null;
              _this92.attemptedToUnsubscribe = false;
              _this92.count = 0;
              return _this92;
            }

            _createClass(GroupBySubscriber, [{
              key: "_next",
              value: function _next(value) {
                var key;

                try {
                  key = this.keySelector(value);
                } catch (err) {
                  this.error(err);
                  return;
                }

                this._group(value, key);
              }
            }, {
              key: "_group",
              value: function _group(value, key) {
                var groups = this.groups;

                if (!groups) {
                  groups = this.groups = new Map();
                }

                var group = groups.get(key);
                var element;

                if (this.elementSelector) {
                  try {
                    element = this.elementSelector(value);
                  } catch (err) {
                    this.error(err);
                  }
                } else {
                  element = value;
                }

                if (!group) {
                  group = this.subjectSelector ? this.subjectSelector() : new _Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                  groups.set(key, group);
                  var groupedObservable = new GroupedObservable(key, group, this);
                  this.destination.next(groupedObservable);

                  if (this.durationSelector) {
                    var duration;

                    try {
                      duration = this.durationSelector(new GroupedObservable(key, group));
                    } catch (err) {
                      this.error(err);
                      return;
                    }

                    this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
                  }
                }

                if (!group.closed) {
                  group.next(element);
                }
              }
            }, {
              key: "_error",
              value: function _error(err) {
                var groups = this.groups;

                if (groups) {
                  groups.forEach(function (group, key) {
                    group.error(err);
                  });
                  groups.clear();
                }

                this.destination.error(err);
              }
            }, {
              key: "_complete",
              value: function _complete() {
                var groups = this.groups;

                if (groups) {
                  groups.forEach(function (group, key) {
                    group.complete();
                  });
                  groups.clear();
                }

                this.destination.complete();
              }
            }, {
              key: "removeGroup",
              value: function removeGroup(key) {
                this.groups["delete"](key);
              }
            }, {
              key: "unsubscribe",
              value: function unsubscribe() {
                if (!this.closed) {
                  this.attemptedToUnsubscribe = true;

                  if (this.count === 0) {
                    _get(_getPrototypeOf(GroupBySubscriber.prototype), "unsubscribe", this).call(this);
                  }
                }
              }
            }]);

            return GroupBySubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]);

          var GroupDurationSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_51) {
            _inherits(GroupDurationSubscriber, _Subscriber__WEBPACK_51);

            var _super99 = _createSuper(GroupDurationSubscriber);

            function GroupDurationSubscriber(key, group, parent) {
              var _this93;

              _classCallCheck(this, GroupDurationSubscriber);

              _this93 = _super99.call(this, group);
              _this93.key = key;
              _this93.group = group;
              _this93.parent = parent;
              return _this93;
            }

            _createClass(GroupDurationSubscriber, [{
              key: "_next",
              value: function _next(value) {
                this.complete();
              }
            }, {
              key: "_unsubscribe",
              value: function _unsubscribe() {
                var parent = this.parent,
                    key = this.key;
                this.key = this.parent = null;

                if (parent) {
                  parent.removeGroup(key);
                }
              }
            }]);

            return GroupDurationSubscriber;
          }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]);

          var GroupedObservable = /*#__PURE__*/function (_Observable__WEBPACK_5) {
            _inherits(GroupedObservable, _Observable__WEBPACK_5);

            var _super100 = _createSuper(GroupedObservable);

            function GroupedObservable(key, groupSubject, refCountSubscription) {
              var _this94;

              _classCallCheck(this, GroupedObservable);

              _this94 = _super100.call(this);
              _this94.key = key;
              _this94.groupSubject = groupSubject;
              _this94.refCountSubscription = refCountSubscription;
              return _this94;
            }

            _createClass(GroupedObservable, [{
              key: "_subscribe",
              value: function _subscribe(subscriber) {
                var subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
                var refCountSubscription = this.refCountSubscription,
                    groupSubject = this.groupSubject;

                if (refCountSubscription && !refCountSubscription.closed) {
                  subscription.add(new InnerRefCountSubscription(refCountSubscription));
                }

                subscription.add(groupSubject.subscribe(subscriber));
                return subscription;
              }
            }]);

            return GroupedObservable;
          }(_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]);

          var InnerRefCountSubscription = /*#__PURE__*/function (_Subscription__WEBPAC3) {
            _inherits(InnerRefCountSubscription, _Subscription__WEBPAC3);

            var _super101 = _createSuper(InnerRefCountSubscription);

            function InnerRefCountSubscription(parent) {
              var _this95;

              _classCallCheck(this, InnerRefCountSubscription);

              _this95 = _super101.call(this);
              _this95.parent = parent;
              parent.count++;
              return _this95;
            }

            _createClass(InnerRefCountSubscription, [{
              key: "unsubscribe",
              value: function unsubscribe() {
                var parent = this.parent;

                if (!parent.closed && !this.closed) {
                  _get(_getPrototypeOf(InnerRefCountSubscription.prototype), "unsubscribe", this).call(this);

                  parent.count -= 1;

                  if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                    parent.unsubscribe();
                  }
                }
              }
            }]);

            return InnerRefCountSubscription;
          }(_Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]); //# sourceMappingURL=groupBy.js.map

          /***/

        },

        /***/
        "yCv1":
        /*!************************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/subscribeOn.js ***!
          \************************************************************************************************/

        /*! exports provided: subscribeOn */

        /***/
        function yCv1(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "subscribeOn", function () {
            return subscribeOn;
          });
          /* harmony import */


          var _observable_SubscribeOnObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../observable/SubscribeOnObservable */
          "vcZZ");

          function subscribeOn(scheduler) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return function subscribeOnOperatorFunction(source) {
              return source.lift(new SubscribeOnOperator(scheduler, delay));
            };
          }

          var SubscribeOnOperator = /*#__PURE__*/function () {
            function SubscribeOnOperator(scheduler, delay) {
              _classCallCheck(this, SubscribeOnOperator);

              this.scheduler = scheduler;
              this.delay = delay;
            }

            _createClass(SubscribeOnOperator, [{
              key: "call",
              value: function call(subscriber, source) {
                return new _observable_SubscribeOnObservable__WEBPACK_IMPORTED_MODULE_0__["SubscribeOnObservable"](source, this.delay, this.scheduler).subscribe(subscriber);
              }
            }]);

            return SubscribeOnOperator;
          }(); //# sourceMappingURL=subscribeOn.js.map

          /***/

        },

        /***/
        "yTkW":
        /*!**********************************************************************************************!*\
          !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/SubjectSubscription.js ***!
          \**********************************************************************************************/

        /*! exports provided: SubjectSubscription */

        /***/
        function yTkW(module, __webpack_exports__, __webpack_require__) {
          "use strict";

          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */


          __webpack_require__.d(__webpack_exports__, "SubjectSubscription", function () {
            return SubjectSubscription;
          });
          /* harmony import */


          var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Subscription */
          "bwdy");

          var SubjectSubscription = /*#__PURE__*/function (_Subscription__WEBPAC4) {
            _inherits(SubjectSubscription, _Subscription__WEBPAC4);

            var _super102 = _createSuper(SubjectSubscription);

            function SubjectSubscription(subject, subscriber) {
              var _this96;

              _classCallCheck(this, SubjectSubscription);

              _this96 = _super102.call(this);
              _this96.subject = subject;
              _this96.subscriber = subscriber;
              _this96.closed = false;
              return _this96;
            }

            _createClass(SubjectSubscription, [{
              key: "unsubscribe",
              value: function unsubscribe() {
                if (this.closed) {
                  return;
                }

                this.closed = true;
                var subject = this.subject;
                var observers = subject.observers;
                this.subject = null;

                if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
                  return;
                }

                var subscriberIndex = observers.indexOf(this.subscriber);

                if (subscriberIndex !== -1) {
                  observers.splice(subscriberIndex, 1);
                }
              }
            }]);

            return SubjectSubscription;
          }(_Subscription__WEBPACK_IMPORTED_MODULE_0__["Subscription"]); //# sourceMappingURL=SubjectSubscription.js.map

          /***/

        },

        /***/
        "zUnb":
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/

        /*! exports provided: ButtonComponent, ChildIframeEvents, IFrameChatService, SharedComponent, SharedModule, TabComponent, TabsComponent, TestService, default */

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


          __webpack_require__.d(__webpack_exports__, "IFrameChatService", function () {
            return shared__WEBPACK_IMPORTED_MODULE_0__["IFrameChatService"];
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