(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ng.common"), require("rxjs"), require("ng.core"));
	else if(typeof define === 'function' && define.amd)
		define(["ng.common", "rxjs", "ng.core"], factory);
	else if(typeof exports === 'object')
		exports["shared"] = factory(require("ng.common"), require("rxjs"), require("ng.core"));
	else
		root["shared"] = factory(root["ng.common"], root["rxjs"], root["ng.core"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__0S4P__, __WEBPACK_EXTERNAL_MODULE_Vgaj__, __WEBPACK_EXTERNAL_MODULE_vOrQ__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+ynE":
/*!*****************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduled/scheduleIterable.js ***!
  \*****************************************************************************************************/
/*! exports provided: scheduleIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleIterable", function() { return scheduleIterable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "IdLP");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "bwdy");
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbol/iterator */ "sWLk");



function scheduleIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        const sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        let iterator;
        sub.add(() => {
            if (iterator && typeof iterator.return === 'function') {
                iterator.return();
            }
        });
        sub.add(scheduler.schedule(() => {
            iterator = input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__["iterator"]]();
            sub.add(scheduler.schedule(function () {
                if (subscriber.closed) {
                    return;
                }
                let value;
                let done;
                try {
                    const result = iterator.next();
                    value = result.value;
                    done = result.done;
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                }
                else {
                    subscriber.next(value);
                    this.schedule();
                }
            }));
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleIterable.js.map

/***/ }),

/***/ "/G9O":
/*!***********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/windowTime.js ***!
  \***********************************************************************************************/
/*! exports provided: windowTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowTime", function() { return windowTime; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ "ZTXN");
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ "Efrr");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscriber */ "5uGe");
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isNumeric */ "KRZI");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isScheduler */ "gBlb");





function windowTime(windowTimeSpan) {
    let scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
    let windowCreationInterval = null;
    let maxWindowSize = Number.POSITIVE_INFINITY;
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_4__["isScheduler"])(arguments[3])) {
        scheduler = arguments[3];
    }
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_4__["isScheduler"])(arguments[2])) {
        scheduler = arguments[2];
    }
    else if (Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_3__["isNumeric"])(arguments[2])) {
        maxWindowSize = Number(arguments[2]);
    }
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_4__["isScheduler"])(arguments[1])) {
        scheduler = arguments[1];
    }
    else if (Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_3__["isNumeric"])(arguments[1])) {
        windowCreationInterval = Number(arguments[1]);
    }
    return function windowTimeOperatorFunction(source) {
        return source.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler));
    };
}
class WindowTimeOperator {
    constructor(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
        this.windowTimeSpan = windowTimeSpan;
        this.windowCreationInterval = windowCreationInterval;
        this.maxWindowSize = maxWindowSize;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler));
    }
}
class CountedSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"] {
    constructor() {
        super(...arguments);
        this._numberOfNextedValues = 0;
    }
    next(value) {
        this._numberOfNextedValues++;
        super.next(value);
    }
    get numberOfNextedValues() {
        return this._numberOfNextedValues;
    }
}
class WindowTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_2__["Subscriber"] {
    constructor(destination, windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
        super(destination);
        this.destination = destination;
        this.windowTimeSpan = windowTimeSpan;
        this.windowCreationInterval = windowCreationInterval;
        this.maxWindowSize = maxWindowSize;
        this.scheduler = scheduler;
        this.windows = [];
        const window = this.openWindow();
        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
            const closeState = { subscriber: this, window, context: null };
            const creationState = { windowTimeSpan, windowCreationInterval, subscriber: this, scheduler };
            this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
            this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
        }
        else {
            const timeSpanOnlyState = { subscriber: this, window, windowTimeSpan };
            this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
        }
    }
    _next(value) {
        const windows = this.windows;
        const len = windows.length;
        for (let i = 0; i < len; i++) {
            const window = windows[i];
            if (!window.closed) {
                window.next(value);
                if (window.numberOfNextedValues >= this.maxWindowSize) {
                    this.closeWindow(window);
                }
            }
        }
    }
    _error(err) {
        const windows = this.windows;
        while (windows.length > 0) {
            windows.shift().error(err);
        }
        this.destination.error(err);
    }
    _complete() {
        const windows = this.windows;
        while (windows.length > 0) {
            const window = windows.shift();
            if (!window.closed) {
                window.complete();
            }
        }
        this.destination.complete();
    }
    openWindow() {
        const window = new CountedSubject();
        this.windows.push(window);
        const destination = this.destination;
        destination.next(window);
        return window;
    }
    closeWindow(window) {
        window.complete();
        const windows = this.windows;
        windows.splice(windows.indexOf(window), 1);
    }
}
function dispatchWindowTimeSpanOnly(state) {
    const { subscriber, windowTimeSpan, window } = state;
    if (window) {
        subscriber.closeWindow(window);
    }
    state.window = subscriber.openWindow();
    this.schedule(state, windowTimeSpan);
}
function dispatchWindowCreation(state) {
    const { windowTimeSpan, subscriber, scheduler, windowCreationInterval } = state;
    const window = subscriber.openWindow();
    const action = this;
    let context = { action, subscription: null };
    const timeSpanState = { subscriber, window, context };
    context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
    action.add(context.subscription);
    action.schedule(state, windowCreationInterval);
}
function dispatchWindowClose(state) {
    const { subscriber, window, context } = state;
    if (context && context.action && context.subscription) {
        context.action.remove(context.subscription);
    }
    subscriber.closeWindow(window);
}
//# sourceMappingURL=windowTime.js.map

/***/ }),

/***/ "/Nkf":
/*!************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/concatMapTo.js ***!
  \************************************************************************************************/
/*! exports provided: concatMapTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatMapTo", function() { return concatMapTo; });
/* harmony import */ var _concatMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./concatMap */ "5uDM");

function concatMapTo(innerObservable, resultSelector) {
    return Object(_concatMap__WEBPACK_IMPORTED_MODULE_0__["concatMap"])(() => innerObservable, resultSelector);
}
//# sourceMappingURL=concatMapTo.js.map

/***/ }),

/***/ "/vgl":
/*!*****************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/isPromise.js ***!
  \*****************************************************************************************/
/*! exports provided: isPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
function isPromise(value) {
    return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
//# sourceMappingURL=isPromise.js.map

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\d\Project\VSoft\VCMS.WEB\projects\plugins\src\main.ts */"zUnb");


/***/ }),

/***/ "0B/R":
/*!********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/toArray.js ***!
  \********************************************************************************************/
/*! exports provided: toArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reduce */ "0iRq");

function toArrayReducer(arr, item, index) {
    if (index === 0) {
        return [item];
    }
    arr.push(item);
    return arr;
}
function toArray() {
    return Object(_reduce__WEBPACK_IMPORTED_MODULE_0__["reduce"])(toArrayReducer, []);
}
//# sourceMappingURL=toArray.js.map

/***/ }),

/***/ "0QxZ":
/*!********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/exhaust.js ***!
  \********************************************************************************************/
/*! exports provided: exhaust */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exhaust", function() { return exhaust; });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ "uCWR");

function exhaust() {
    return (source) => source.lift(new SwitchFirstOperator());
}
class SwitchFirstOperator {
    call(subscriber, source) {
        return source.subscribe(new SwitchFirstSubscriber(subscriber));
    }
}
class SwitchFirstSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleOuterSubscriber"] {
    constructor(destination) {
        super(destination);
        this.hasCompleted = false;
        this.hasSubscription = false;
    }
    _next(value) {
        if (!this.hasSubscription) {
            this.hasSubscription = true;
            this.add(Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["innerSubscribe"])(value, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleInnerSubscriber"](this)));
        }
    }
    _complete() {
        this.hasCompleted = true;
        if (!this.hasSubscription) {
            this.destination.complete();
        }
    }
    notifyComplete() {
        this.hasSubscription = false;
        if (this.hasCompleted) {
            this.destination.complete();
        }
    }
}
//# sourceMappingURL=exhaust.js.map

/***/ }),

/***/ "0S4P":
/*!****************************!*\
  !*** external "ng.common" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0S4P__;

/***/ }),

/***/ "0Wlh":
/*!*********************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/operators/index.js ***!
  \*********************************************************************************/
/*! exports provided: audit, auditTime, buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, catchError, combineAll, combineLatest, concat, concatAll, concatMap, concatMapTo, count, debounce, debounceTime, defaultIfEmpty, delay, delayWhen, dematerialize, distinct, distinctUntilChanged, distinctUntilKeyChanged, elementAt, endWith, every, exhaust, exhaustMap, expand, filter, finalize, find, findIndex, first, groupBy, ignoreElements, isEmpty, last, map, mapTo, materialize, max, merge, mergeAll, mergeMap, flatMap, mergeMapTo, mergeScan, min, multicast, observeOn, onErrorResumeNext, pairwise, partition, pluck, publish, publishBehavior, publishLast, publishReplay, race, reduce, repeat, repeatWhen, retry, retryWhen, refCount, sample, sampleTime, scan, sequenceEqual, share, shareReplay, single, skip, skipLast, skipUntil, skipWhile, startWith, subscribeOn, switchAll, switchMap, switchMapTo, take, takeLast, takeUntil, takeWhile, tap, throttle, throttleTime, throwIfEmpty, timeInterval, timeout, timeoutWith, timestamp, toArray, window, windowCount, windowTime, windowToggle, windowWhen, withLatestFrom, zip, zipAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_operators_audit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal/operators/audit */ "oUj0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audit", function() { return _internal_operators_audit__WEBPACK_IMPORTED_MODULE_0__["audit"]; });

/* harmony import */ var _internal_operators_auditTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../internal/operators/auditTime */ "prE9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "auditTime", function() { return _internal_operators_auditTime__WEBPACK_IMPORTED_MODULE_1__["auditTime"]; });

/* harmony import */ var _internal_operators_buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../internal/operators/buffer */ "IF3+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buffer", function() { return _internal_operators_buffer__WEBPACK_IMPORTED_MODULE_2__["buffer"]; });

/* harmony import */ var _internal_operators_bufferCount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../internal/operators/bufferCount */ "jNqi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bufferCount", function() { return _internal_operators_bufferCount__WEBPACK_IMPORTED_MODULE_3__["bufferCount"]; });

/* harmony import */ var _internal_operators_bufferTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../internal/operators/bufferTime */ "AAYN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bufferTime", function() { return _internal_operators_bufferTime__WEBPACK_IMPORTED_MODULE_4__["bufferTime"]; });

/* harmony import */ var _internal_operators_bufferToggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../internal/operators/bufferToggle */ "PVB3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bufferToggle", function() { return _internal_operators_bufferToggle__WEBPACK_IMPORTED_MODULE_5__["bufferToggle"]; });

/* harmony import */ var _internal_operators_bufferWhen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../internal/operators/bufferWhen */ "GhgG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bufferWhen", function() { return _internal_operators_bufferWhen__WEBPACK_IMPORTED_MODULE_6__["bufferWhen"]; });

/* harmony import */ var _internal_operators_catchError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../internal/operators/catchError */ "4e/d");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "catchError", function() { return _internal_operators_catchError__WEBPACK_IMPORTED_MODULE_7__["catchError"]; });

/* harmony import */ var _internal_operators_combineAll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../internal/operators/combineAll */ "gdbe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineAll", function() { return _internal_operators_combineAll__WEBPACK_IMPORTED_MODULE_8__["combineAll"]; });

/* harmony import */ var _internal_operators_combineLatest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../internal/operators/combineLatest */ "fnmL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineLatest", function() { return _internal_operators_combineLatest__WEBPACK_IMPORTED_MODULE_9__["combineLatest"]; });

/* harmony import */ var _internal_operators_concat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../internal/operators/concat */ "574M");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _internal_operators_concat__WEBPACK_IMPORTED_MODULE_10__["concat"]; });

/* harmony import */ var _internal_operators_concatAll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../internal/operators/concatAll */ "mawV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatAll", function() { return _internal_operators_concatAll__WEBPACK_IMPORTED_MODULE_11__["concatAll"]; });

/* harmony import */ var _internal_operators_concatMap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../internal/operators/concatMap */ "5uDM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatMap", function() { return _internal_operators_concatMap__WEBPACK_IMPORTED_MODULE_12__["concatMap"]; });

/* harmony import */ var _internal_operators_concatMapTo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../internal/operators/concatMapTo */ "/Nkf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatMapTo", function() { return _internal_operators_concatMapTo__WEBPACK_IMPORTED_MODULE_13__["concatMapTo"]; });

/* harmony import */ var _internal_operators_count__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../internal/operators/count */ "lJSs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "count", function() { return _internal_operators_count__WEBPACK_IMPORTED_MODULE_14__["count"]; });

/* harmony import */ var _internal_operators_debounce__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../internal/operators/debounce */ "4xW2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _internal_operators_debounce__WEBPACK_IMPORTED_MODULE_15__["debounce"]; });

/* harmony import */ var _internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../internal/operators/debounceTime */ "mWib");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounceTime", function() { return _internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_16__["debounceTime"]; });

/* harmony import */ var _internal_operators_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../internal/operators/defaultIfEmpty */ "iqFP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultIfEmpty", function() { return _internal_operators_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_17__["defaultIfEmpty"]; });

/* harmony import */ var _internal_operators_delay__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../internal/operators/delay */ "BwBJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _internal_operators_delay__WEBPACK_IMPORTED_MODULE_18__["delay"]; });

/* harmony import */ var _internal_operators_delayWhen__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../internal/operators/delayWhen */ "UWon");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delayWhen", function() { return _internal_operators_delayWhen__WEBPACK_IMPORTED_MODULE_19__["delayWhen"]; });

/* harmony import */ var _internal_operators_dematerialize__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../internal/operators/dematerialize */ "vjgY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dematerialize", function() { return _internal_operators_dematerialize__WEBPACK_IMPORTED_MODULE_20__["dematerialize"]; });

/* harmony import */ var _internal_operators_distinct__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../internal/operators/distinct */ "tDaw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "distinct", function() { return _internal_operators_distinct__WEBPACK_IMPORTED_MODULE_21__["distinct"]; });

/* harmony import */ var _internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../internal/operators/distinctUntilChanged */ "Ohay");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "distinctUntilChanged", function() { return _internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_22__["distinctUntilChanged"]; });

/* harmony import */ var _internal_operators_distinctUntilKeyChanged__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../internal/operators/distinctUntilKeyChanged */ "soHz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "distinctUntilKeyChanged", function() { return _internal_operators_distinctUntilKeyChanged__WEBPACK_IMPORTED_MODULE_23__["distinctUntilKeyChanged"]; });

/* harmony import */ var _internal_operators_elementAt__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../internal/operators/elementAt */ "eZPq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementAt", function() { return _internal_operators_elementAt__WEBPACK_IMPORTED_MODULE_24__["elementAt"]; });

/* harmony import */ var _internal_operators_endWith__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../internal/operators/endWith */ "w2TD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endWith", function() { return _internal_operators_endWith__WEBPACK_IMPORTED_MODULE_25__["endWith"]; });

/* harmony import */ var _internal_operators_every__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../internal/operators/every */ "2OXO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "every", function() { return _internal_operators_every__WEBPACK_IMPORTED_MODULE_26__["every"]; });

/* harmony import */ var _internal_operators_exhaust__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../internal/operators/exhaust */ "0QxZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exhaust", function() { return _internal_operators_exhaust__WEBPACK_IMPORTED_MODULE_27__["exhaust"]; });

/* harmony import */ var _internal_operators_exhaustMap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../internal/operators/exhaustMap */ "ZzcO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exhaustMap", function() { return _internal_operators_exhaustMap__WEBPACK_IMPORTED_MODULE_28__["exhaustMap"]; });

/* harmony import */ var _internal_operators_expand__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../internal/operators/expand */ "f/66");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "expand", function() { return _internal_operators_expand__WEBPACK_IMPORTED_MODULE_29__["expand"]; });

/* harmony import */ var _internal_operators_filter__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../internal/operators/filter */ "xVbo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _internal_operators_filter__WEBPACK_IMPORTED_MODULE_30__["filter"]; });

/* harmony import */ var _internal_operators_finalize__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../internal/operators/finalize */ "ruxD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "finalize", function() { return _internal_operators_finalize__WEBPACK_IMPORTED_MODULE_31__["finalize"]; });

/* harmony import */ var _internal_operators_find__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../internal/operators/find */ "14JN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _internal_operators_find__WEBPACK_IMPORTED_MODULE_32__["find"]; });

/* harmony import */ var _internal_operators_findIndex__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../internal/operators/findIndex */ "tII7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return _internal_operators_findIndex__WEBPACK_IMPORTED_MODULE_33__["findIndex"]; });

/* harmony import */ var _internal_operators_first__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../internal/operators/first */ "jOdJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "first", function() { return _internal_operators_first__WEBPACK_IMPORTED_MODULE_34__["first"]; });

/* harmony import */ var _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../internal/operators/groupBy */ "xtkq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_35__["groupBy"]; });

/* harmony import */ var _internal_operators_ignoreElements__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../internal/operators/ignoreElements */ "9WAt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ignoreElements", function() { return _internal_operators_ignoreElements__WEBPACK_IMPORTED_MODULE_36__["ignoreElements"]; });

/* harmony import */ var _internal_operators_isEmpty__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../internal/operators/isEmpty */ "aXqC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _internal_operators_isEmpty__WEBPACK_IMPORTED_MODULE_37__["isEmpty"]; });

/* harmony import */ var _internal_operators_last__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../internal/operators/last */ "TaSY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "last", function() { return _internal_operators_last__WEBPACK_IMPORTED_MODULE_38__["last"]; });

/* harmony import */ var _internal_operators_map__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../internal/operators/map */ "YtkY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _internal_operators_map__WEBPACK_IMPORTED_MODULE_39__["map"]; });

/* harmony import */ var _internal_operators_mapTo__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../internal/operators/mapTo */ "7SLS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapTo", function() { return _internal_operators_mapTo__WEBPACK_IMPORTED_MODULE_40__["mapTo"]; });

/* harmony import */ var _internal_operators_materialize__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../internal/operators/materialize */ "Hhmo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "materialize", function() { return _internal_operators_materialize__WEBPACK_IMPORTED_MODULE_41__["materialize"]; });

/* harmony import */ var _internal_operators_max__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../internal/operators/max */ "EqSx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _internal_operators_max__WEBPACK_IMPORTED_MODULE_42__["max"]; });

/* harmony import */ var _internal_operators_merge__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../internal/operators/merge */ "flkW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _internal_operators_merge__WEBPACK_IMPORTED_MODULE_43__["merge"]; });

/* harmony import */ var _internal_operators_mergeAll__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../internal/operators/mergeAll */ "3lSR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeAll", function() { return _internal_operators_mergeAll__WEBPACK_IMPORTED_MODULE_44__["mergeAll"]; });

/* harmony import */ var _internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../internal/operators/mergeMap */ "cJ9h");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeMap", function() { return _internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_45__["mergeMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatMap", function() { return _internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_45__["flatMap"]; });

/* harmony import */ var _internal_operators_mergeMapTo__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../internal/operators/mergeMapTo */ "rNc+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeMapTo", function() { return _internal_operators_mergeMapTo__WEBPACK_IMPORTED_MODULE_46__["mergeMapTo"]; });

/* harmony import */ var _internal_operators_mergeScan__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../internal/operators/mergeScan */ "fNrB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeScan", function() { return _internal_operators_mergeScan__WEBPACK_IMPORTED_MODULE_47__["mergeScan"]; });

/* harmony import */ var _internal_operators_min__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../internal/operators/min */ "oTGV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _internal_operators_min__WEBPACK_IMPORTED_MODULE_48__["min"]; });

/* harmony import */ var _internal_operators_multicast__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../internal/operators/multicast */ "JHA6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multicast", function() { return _internal_operators_multicast__WEBPACK_IMPORTED_MODULE_49__["multicast"]; });

/* harmony import */ var _internal_operators_observeOn__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../internal/operators/observeOn */ "A2S1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observeOn", function() { return _internal_operators_observeOn__WEBPACK_IMPORTED_MODULE_50__["observeOn"]; });

/* harmony import */ var _internal_operators_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../internal/operators/onErrorResumeNext */ "aNQL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function() { return _internal_operators_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_51__["onErrorResumeNext"]; });

/* harmony import */ var _internal_operators_pairwise__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../internal/operators/pairwise */ "0Woy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairwise", function() { return _internal_operators_pairwise__WEBPACK_IMPORTED_MODULE_52__["pairwise"]; });

/* harmony import */ var _internal_operators_partition__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../internal/operators/partition */ "lmh5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return _internal_operators_partition__WEBPACK_IMPORTED_MODULE_53__["partition"]; });

/* harmony import */ var _internal_operators_pluck__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../internal/operators/pluck */ "iLlD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return _internal_operators_pluck__WEBPACK_IMPORTED_MODULE_54__["pluck"]; });

/* harmony import */ var _internal_operators_publish__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../internal/operators/publish */ "CfqY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "publish", function() { return _internal_operators_publish__WEBPACK_IMPORTED_MODULE_55__["publish"]; });

/* harmony import */ var _internal_operators_publishBehavior__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../internal/operators/publishBehavior */ "Sp61");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "publishBehavior", function() { return _internal_operators_publishBehavior__WEBPACK_IMPORTED_MODULE_56__["publishBehavior"]; });

/* harmony import */ var _internal_operators_publishLast__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../internal/operators/publishLast */ "Yj6K");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "publishLast", function() { return _internal_operators_publishLast__WEBPACK_IMPORTED_MODULE_57__["publishLast"]; });

/* harmony import */ var _internal_operators_publishReplay__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../internal/operators/publishReplay */ "Lrfq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "publishReplay", function() { return _internal_operators_publishReplay__WEBPACK_IMPORTED_MODULE_58__["publishReplay"]; });

/* harmony import */ var _internal_operators_race__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../internal/operators/race */ "1suh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "race", function() { return _internal_operators_race__WEBPACK_IMPORTED_MODULE_59__["race"]; });

/* harmony import */ var _internal_operators_reduce__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../internal/operators/reduce */ "0iRq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return _internal_operators_reduce__WEBPACK_IMPORTED_MODULE_60__["reduce"]; });

/* harmony import */ var _internal_operators_repeat__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../internal/operators/repeat */ "ghXf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return _internal_operators_repeat__WEBPACK_IMPORTED_MODULE_61__["repeat"]; });

/* harmony import */ var _internal_operators_repeatWhen__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../internal/operators/repeatWhen */ "PKqw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeatWhen", function() { return _internal_operators_repeatWhen__WEBPACK_IMPORTED_MODULE_62__["repeatWhen"]; });

/* harmony import */ var _internal_operators_retry__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../internal/operators/retry */ "bl/x");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "retry", function() { return _internal_operators_retry__WEBPACK_IMPORTED_MODULE_63__["retry"]; });

/* harmony import */ var _internal_operators_retryWhen__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../internal/operators/retryWhen */ "xOLM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "retryWhen", function() { return _internal_operators_retryWhen__WEBPACK_IMPORTED_MODULE_64__["retryWhen"]; });

/* harmony import */ var _internal_operators_refCount__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../internal/operators/refCount */ "i7Dj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "refCount", function() { return _internal_operators_refCount__WEBPACK_IMPORTED_MODULE_65__["refCount"]; });

/* harmony import */ var _internal_operators_sample__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../internal/operators/sample */ "uDlg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return _internal_operators_sample__WEBPACK_IMPORTED_MODULE_66__["sample"]; });

/* harmony import */ var _internal_operators_sampleTime__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../internal/operators/sampleTime */ "F/Dh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sampleTime", function() { return _internal_operators_sampleTime__WEBPACK_IMPORTED_MODULE_67__["sampleTime"]; });

/* harmony import */ var _internal_operators_scan__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../internal/operators/scan */ "SrNW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return _internal_operators_scan__WEBPACK_IMPORTED_MODULE_68__["scan"]; });

/* harmony import */ var _internal_operators_sequenceEqual__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ../internal/operators/sequenceEqual */ "jhgp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sequenceEqual", function() { return _internal_operators_sequenceEqual__WEBPACK_IMPORTED_MODULE_69__["sequenceEqual"]; });

/* harmony import */ var _internal_operators_share__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ../internal/operators/share */ "7ntQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "share", function() { return _internal_operators_share__WEBPACK_IMPORTED_MODULE_70__["share"]; });

/* harmony import */ var _internal_operators_shareReplay__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ../internal/operators/shareReplay */ "wqq/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shareReplay", function() { return _internal_operators_shareReplay__WEBPACK_IMPORTED_MODULE_71__["shareReplay"]; });

/* harmony import */ var _internal_operators_single__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ../internal/operators/single */ "0eJs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "single", function() { return _internal_operators_single__WEBPACK_IMPORTED_MODULE_72__["single"]; });

/* harmony import */ var _internal_operators_skip__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ../internal/operators/skip */ "3mST");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skip", function() { return _internal_operators_skip__WEBPACK_IMPORTED_MODULE_73__["skip"]; });

/* harmony import */ var _internal_operators_skipLast__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ../internal/operators/skipLast */ "jwFC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skipLast", function() { return _internal_operators_skipLast__WEBPACK_IMPORTED_MODULE_74__["skipLast"]; });

/* harmony import */ var _internal_operators_skipUntil__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ../internal/operators/skipUntil */ "HcRv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skipUntil", function() { return _internal_operators_skipUntil__WEBPACK_IMPORTED_MODULE_75__["skipUntil"]; });

/* harmony import */ var _internal_operators_skipWhile__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ../internal/operators/skipWhile */ "HaSC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skipWhile", function() { return _internal_operators_skipWhile__WEBPACK_IMPORTED_MODULE_76__["skipWhile"]; });

/* harmony import */ var _internal_operators_startWith__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ../internal/operators/startWith */ "jIqt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startWith", function() { return _internal_operators_startWith__WEBPACK_IMPORTED_MODULE_77__["startWith"]; });

/* harmony import */ var _internal_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ../internal/operators/subscribeOn */ "yCv1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribeOn", function() { return _internal_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_78__["subscribeOn"]; });

/* harmony import */ var _internal_operators_switchAll__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ../internal/operators/switchAll */ "pScO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchAll", function() { return _internal_operators_switchAll__WEBPACK_IMPORTED_MODULE_79__["switchAll"]; });

/* harmony import */ var _internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ../internal/operators/switchMap */ "TLy2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchMap", function() { return _internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_80__["switchMap"]; });

/* harmony import */ var _internal_operators_switchMapTo__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ../internal/operators/switchMapTo */ "CsoK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchMapTo", function() { return _internal_operators_switchMapTo__WEBPACK_IMPORTED_MODULE_81__["switchMapTo"]; });

/* harmony import */ var _internal_operators_take__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ../internal/operators/take */ "J+dc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _internal_operators_take__WEBPACK_IMPORTED_MODULE_82__["take"]; });

/* harmony import */ var _internal_operators_takeLast__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ../internal/operators/takeLast */ "A8kH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeLast", function() { return _internal_operators_takeLast__WEBPACK_IMPORTED_MODULE_83__["takeLast"]; });

/* harmony import */ var _internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ../internal/operators/takeUntil */ "kuMc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeUntil", function() { return _internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_84__["takeUntil"]; });

/* harmony import */ var _internal_operators_takeWhile__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ../internal/operators/takeWhile */ "B8NW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeWhile", function() { return _internal_operators_takeWhile__WEBPACK_IMPORTED_MODULE_85__["takeWhile"]; });

/* harmony import */ var _internal_operators_tap__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ../internal/operators/tap */ "8j5Y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return _internal_operators_tap__WEBPACK_IMPORTED_MODULE_86__["tap"]; });

/* harmony import */ var _internal_operators_throttle__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ../internal/operators/throttle */ "IeS+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _internal_operators_throttle__WEBPACK_IMPORTED_MODULE_87__["throttle"]; });

/* harmony import */ var _internal_operators_throttleTime__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ../internal/operators/throttleTime */ "Wg7D");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttleTime", function() { return _internal_operators_throttleTime__WEBPACK_IMPORTED_MODULE_88__["throttleTime"]; });

/* harmony import */ var _internal_operators_throwIfEmpty__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ../internal/operators/throwIfEmpty */ "fbWu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwIfEmpty", function() { return _internal_operators_throwIfEmpty__WEBPACK_IMPORTED_MODULE_89__["throwIfEmpty"]; });

/* harmony import */ var _internal_operators_timeInterval__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ../internal/operators/timeInterval */ "hFTr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeInterval", function() { return _internal_operators_timeInterval__WEBPACK_IMPORTED_MODULE_90__["timeInterval"]; });

/* harmony import */ var _internal_operators_timeout__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ../internal/operators/timeout */ "iT4G");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return _internal_operators_timeout__WEBPACK_IMPORTED_MODULE_91__["timeout"]; });

/* harmony import */ var _internal_operators_timeoutWith__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ../internal/operators/timeoutWith */ "vAPC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeoutWith", function() { return _internal_operators_timeoutWith__WEBPACK_IMPORTED_MODULE_92__["timeoutWith"]; });

/* harmony import */ var _internal_operators_timestamp__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ../internal/operators/timestamp */ "it7j");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timestamp", function() { return _internal_operators_timestamp__WEBPACK_IMPORTED_MODULE_93__["timestamp"]; });

/* harmony import */ var _internal_operators_toArray__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ../internal/operators/toArray */ "0B/R");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return _internal_operators_toArray__WEBPACK_IMPORTED_MODULE_94__["toArray"]; });

/* harmony import */ var _internal_operators_window__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ../internal/operators/window */ "JnPT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "window", function() { return _internal_operators_window__WEBPACK_IMPORTED_MODULE_95__["window"]; });

/* harmony import */ var _internal_operators_windowCount__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ../internal/operators/windowCount */ "j71X");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "windowCount", function() { return _internal_operators_windowCount__WEBPACK_IMPORTED_MODULE_96__["windowCount"]; });

/* harmony import */ var _internal_operators_windowTime__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ../internal/operators/windowTime */ "/G9O");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "windowTime", function() { return _internal_operators_windowTime__WEBPACK_IMPORTED_MODULE_97__["windowTime"]; });

/* harmony import */ var _internal_operators_windowToggle__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ../internal/operators/windowToggle */ "K3+B");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "windowToggle", function() { return _internal_operators_windowToggle__WEBPACK_IMPORTED_MODULE_98__["windowToggle"]; });

/* harmony import */ var _internal_operators_windowWhen__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ../internal/operators/windowWhen */ "qplQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "windowWhen", function() { return _internal_operators_windowWhen__WEBPACK_IMPORTED_MODULE_99__["windowWhen"]; });

/* harmony import */ var _internal_operators_withLatestFrom__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ../internal/operators/withLatestFrom */ "w0kG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withLatestFrom", function() { return _internal_operators_withLatestFrom__WEBPACK_IMPORTED_MODULE_100__["withLatestFrom"]; });

/* harmony import */ var _internal_operators_zip__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ../internal/operators/zip */ "kLnN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _internal_operators_zip__WEBPACK_IMPORTED_MODULE_101__["zip"]; });

/* harmony import */ var _internal_operators_zipAll__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ../internal/operators/zipAll */ "rVMB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zipAll", function() { return _internal_operators_zipAll__WEBPACK_IMPORTED_MODULE_102__["zipAll"]; });








































































































//# sourceMappingURL=index.js.map

/***/ }),

/***/ "0Woy":
/*!*********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/pairwise.js ***!
  \*********************************************************************************************/
/*! exports provided: pairwise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairwise", function() { return pairwise; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");

function pairwise() {
    return (source) => source.lift(new PairwiseOperator());
}
class PairwiseOperator {
    call(subscriber, source) {
        return source.subscribe(new PairwiseSubscriber(subscriber));
    }
}
class PairwiseSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination) {
        super(destination);
        this.hasPrev = false;
    }
    _next(value) {
        let pair;
        if (this.hasPrev) {
            pair = [this.prev, value];
        }
        else {
            this.hasPrev = true;
        }
        this.prev = value;
        if (pair) {
            this.destination.next(pair);
        }
    }
}
//# sourceMappingURL=pairwise.js.map

/***/ }),

/***/ "0eJs":
/*!*******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/single.js ***!
  \*******************************************************************************************/
/*! exports provided: single */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "single", function() { return single; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/EmptyError */ "VxHp");


function single(predicate) {
    return (source) => source.lift(new SingleOperator(predicate, source));
}
class SingleOperator {
    constructor(predicate, source) {
        this.predicate = predicate;
        this.source = source;
    }
    call(subscriber, source) {
        return source.subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
    }
}
class SingleSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, predicate, source) {
        super(destination);
        this.predicate = predicate;
        this.source = source;
        this.seenValue = false;
        this.index = 0;
    }
    applySingleValue(value) {
        if (this.seenValue) {
            this.destination.error('Sequence contains more than one element');
        }
        else {
            this.seenValue = true;
            this.singleValue = value;
        }
    }
    _next(value) {
        const index = this.index++;
        if (this.predicate) {
            this.tryNext(value, index);
        }
        else {
            this.applySingleValue(value);
        }
    }
    tryNext(value, index) {
        try {
            if (this.predicate(value, index, this.source)) {
                this.applySingleValue(value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    }
    _complete() {
        const destination = this.destination;
        if (this.index > 0) {
            destination.next(this.seenValue ? this.singleValue : undefined);
            destination.complete();
        }
        else {
            destination.error(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__["EmptyError"]);
        }
    }
}
//# sourceMappingURL=single.js.map

/***/ }),

/***/ "0iRq":
/*!*******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/reduce.js ***!
  \*******************************************************************************************/
/*! exports provided: reduce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony import */ var _scan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan */ "SrNW");
/* harmony import */ var _takeLast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./takeLast */ "A8kH");
/* harmony import */ var _defaultIfEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultIfEmpty */ "iqFP");
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/pipe */ "Ti3e");




function reduce(accumulator, seed) {
    if (arguments.length >= 2) {
        return function reduceOperatorFunctionWithSeed(source) {
            return Object(_util_pipe__WEBPACK_IMPORTED_MODULE_3__["pipe"])(Object(_scan__WEBPACK_IMPORTED_MODULE_0__["scan"])(accumulator, seed), Object(_takeLast__WEBPACK_IMPORTED_MODULE_1__["takeLast"])(1), Object(_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_2__["defaultIfEmpty"])(seed))(source);
        };
    }
    return function reduceOperatorFunction(source) {
        return Object(_util_pipe__WEBPACK_IMPORTED_MODULE_3__["pipe"])(Object(_scan__WEBPACK_IMPORTED_MODULE_0__["scan"])((acc, value, index) => accumulator(acc, value, index + 1)), Object(_takeLast__WEBPACK_IMPORTED_MODULE_1__["takeLast"])(1))(source);
    };
}
//# sourceMappingURL=reduce.js.map

/***/ }),

/***/ "0pus":
/*!***********************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/ConnectableObservable.js ***!
  \***********************************************************************************************************/
/*! exports provided: ConnectableObservable, connectableObservableDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectableObservable", function() { return ConnectableObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectableObservableDescriptor", function() { return connectableObservableDescriptor; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ "ZTXN");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Observable */ "IdLP");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscriber */ "5uGe");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Subscription */ "bwdy");
/* harmony import */ var _operators_refCount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operators/refCount */ "i7Dj");





class ConnectableObservable extends _Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"] {
    constructor(source, subjectFactory) {
        super();
        this.source = source;
        this.subjectFactory = subjectFactory;
        this._refCount = 0;
        this._isComplete = false;
    }
    _subscribe(subscriber) {
        return this.getSubject().subscribe(subscriber);
    }
    getSubject() {
        const subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    }
    connect() {
        let connection = this._connection;
        if (!connection) {
            this._isComplete = false;
            connection = this._connection = new _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
            connection.add(this.source
                .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
            if (connection.closed) {
                this._connection = null;
                connection = _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
            }
        }
        return connection;
    }
    refCount() {
        return Object(_operators_refCount__WEBPACK_IMPORTED_MODULE_4__["refCount"])()(this);
    }
}
const connectableObservableDescriptor = (() => {
    const connectableProto = ConnectableObservable.prototype;
    return {
        operator: { value: null },
        _refCount: { value: 0, writable: true },
        _subject: { value: null, writable: true },
        _connection: { value: null, writable: true },
        _subscribe: { value: connectableProto._subscribe },
        _isComplete: { value: connectableProto._isComplete, writable: true },
        getSubject: { value: connectableProto.getSubject },
        connect: { value: connectableProto.connect },
        refCount: { value: connectableProto.refCount }
    };
})();
class ConnectableSubscriber extends _Subject__WEBPACK_IMPORTED_MODULE_0__["SubjectSubscriber"] {
    constructor(destination, connectable) {
        super(destination);
        this.connectable = connectable;
    }
    _error(err) {
        this._unsubscribe();
        super._error(err);
    }
    _complete() {
        this.connectable._isComplete = true;
        this._unsubscribe();
        super._complete();
    }
    _unsubscribe() {
        const connectable = this.connectable;
        if (connectable) {
            this.connectable = null;
            const connection = connectable._connection;
            connectable._refCount = 0;
            connectable._subject = null;
            connectable._connection = null;
            if (connection) {
                connection.unsubscribe();
            }
        }
    }
}
class RefCountOperator {
    constructor(connectable) {
        this.connectable = connectable;
    }
    call(subscriber, source) {
        const { connectable } = this;
        connectable._refCount++;
        const refCounter = new RefCountSubscriber(subscriber, connectable);
        const subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    }
}
class RefCountSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_2__["Subscriber"] {
    constructor(destination, connectable) {
        super(destination);
        this.connectable = connectable;
    }
    _unsubscribe() {
        const { connectable } = this;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        const refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        const { connection } = this;
        const sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    }
}
//# sourceMappingURL=ConnectableObservable.js.map

/***/ }),

/***/ "14JN":
/*!*****************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/find.js ***!
  \*****************************************************************************************/
/*! exports provided: find, FindValueOperator, FindValueSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindValueOperator", function() { return FindValueOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindValueSubscriber", function() { return FindValueSubscriber; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");

function find(predicate, thisArg) {
    if (typeof predicate !== 'function') {
        throw new TypeError('predicate is not a function');
    }
    return (source) => source.lift(new FindValueOperator(predicate, source, false, thisArg));
}
class FindValueOperator {
    constructor(predicate, source, yieldIndex, thisArg) {
        this.predicate = predicate;
        this.source = source;
        this.yieldIndex = yieldIndex;
        this.thisArg = thisArg;
    }
    call(observer, source) {
        return source.subscribe(new FindValueSubscriber(observer, this.predicate, this.source, this.yieldIndex, this.thisArg));
    }
}
class FindValueSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, predicate, source, yieldIndex, thisArg) {
        super(destination);
        this.predicate = predicate;
        this.source = source;
        this.yieldIndex = yieldIndex;
        this.thisArg = thisArg;
        this.index = 0;
    }
    notifyComplete(value) {
        const destination = this.destination;
        destination.next(value);
        destination.complete();
        this.unsubscribe();
    }
    _next(value) {
        const { predicate, thisArg } = this;
        const index = this.index++;
        try {
            const result = predicate.call(thisArg || this, value, index, this.source);
            if (result) {
                this.notifyComplete(this.yieldIndex ? index : value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    }
    _complete() {
        this.notifyComplete(this.yieldIndex ? -1 : undefined);
    }
}
//# sourceMappingURL=find.js.map

/***/ }),

/***/ "1MAX":
/*!*******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/subscribeTo.js ***!
  \*******************************************************************************************/
/*! exports provided: subscribeTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeTo", function() { return subscribeTo; });
/* harmony import */ var _subscribeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribeToArray */ "dUuy");
/* harmony import */ var _subscribeToPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscribeToPromise */ "8V6W");
/* harmony import */ var _subscribeToIterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribeToIterable */ "qhtU");
/* harmony import */ var _subscribeToObservable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscribeToObservable */ "wIzt");
/* harmony import */ var _isArrayLike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isArrayLike */ "eY+9");
/* harmony import */ var _isPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isPromise */ "/vgl");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isObject */ "X0qr");
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../symbol/iterator */ "sWLk");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../symbol/observable */ "qEfY");









const subscribeTo = (result) => {
    if (!!result && typeof result[_symbol_observable__WEBPACK_IMPORTED_MODULE_8__["observable"]] === 'function') {
        return Object(_subscribeToObservable__WEBPACK_IMPORTED_MODULE_3__["subscribeToObservable"])(result);
    }
    else if (Object(_isArrayLike__WEBPACK_IMPORTED_MODULE_4__["isArrayLike"])(result)) {
        return Object(_subscribeToArray__WEBPACK_IMPORTED_MODULE_0__["subscribeToArray"])(result);
    }
    else if (Object(_isPromise__WEBPACK_IMPORTED_MODULE_5__["isPromise"])(result)) {
        return Object(_subscribeToPromise__WEBPACK_IMPORTED_MODULE_1__["subscribeToPromise"])(result);
    }
    else if (!!result && typeof result[_symbol_iterator__WEBPACK_IMPORTED_MODULE_7__["iterator"]] === 'function') {
        return Object(_subscribeToIterable__WEBPACK_IMPORTED_MODULE_2__["subscribeToIterable"])(result);
    }
    else {
        const value = Object(_isObject__WEBPACK_IMPORTED_MODULE_6__["isObject"])(result) ? 'an invalid object' : `'${result}'`;
        const msg = `You provided ${value} where a stream was expected.`
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};
//# sourceMappingURL=subscribeTo.js.map

/***/ }),

/***/ "1suh":
/*!*****************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/race.js ***!
  \*****************************************************************************************/
/*! exports provided: race */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "race", function() { return race; });
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isArray */ "FU6l");
/* harmony import */ var _observable_race__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/race */ "1zC5");


function race(...observables) {
    return function raceOperatorFunction(source) {
        if (observables.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(observables[0])) {
            observables = observables[0];
        }
        return source.lift.call(Object(_observable_race__WEBPACK_IMPORTED_MODULE_1__["race"])(source, ...observables));
    };
}
//# sourceMappingURL=race.js.map

/***/ }),

/***/ "1zC5":
/*!******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/race.js ***!
  \******************************************************************************************/
/*! exports provided: race, RaceOperator, RaceSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "race", function() { return race; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceOperator", function() { return RaceOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceSubscriber", function() { return RaceSubscriber; });
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isArray */ "FU6l");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fromArray */ "ckkg");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OuterSubscriber */ "pBDD");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/subscribeToResult */ "mW0F");




function race(...observables) {
    if (observables.length === 1) {
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(observables[0])) {
            observables = observables[0];
        }
        else {
            return observables[0];
        }
    }
    return Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(observables, undefined).lift(new RaceOperator());
}
class RaceOperator {
    call(subscriber, source) {
        return source.subscribe(new RaceSubscriber(subscriber));
    }
}
class RaceSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"] {
    constructor(destination) {
        super(destination);
        this.hasFirst = false;
        this.observables = [];
        this.subscriptions = [];
    }
    _next(observable) {
        this.observables.push(observable);
    }
    _complete() {
        const observables = this.observables;
        const len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            for (let i = 0; i < len && !this.hasFirst; i++) {
                const observable = observables[i];
                const subscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__["subscribeToResult"])(this, observable, undefined, i);
                if (this.subscriptions) {
                    this.subscriptions.push(subscription);
                }
                this.add(subscription);
            }
            this.observables = null;
        }
    }
    notifyNext(_outerValue, innerValue, outerIndex) {
        if (!this.hasFirst) {
            this.hasFirst = true;
            for (let i = 0; i < this.subscriptions.length; i++) {
                if (i !== outerIndex) {
                    let subscription = this.subscriptions[i];
                    subscription.unsubscribe();
                    this.remove(subscription);
                }
            }
            this.subscriptions = null;
        }
        this.destination.next(innerValue);
    }
}
//# sourceMappingURL=race.js.map

/***/ }),

/***/ "246g":
/*!***************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduler/QueueScheduler.js ***!
  \***************************************************************************************************/
/*! exports provided: QueueScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueScheduler", function() { return QueueScheduler; });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ "DG/E");

class QueueScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__["AsyncScheduler"] {
}
//# sourceMappingURL=QueueScheduler.js.map

/***/ }),

/***/ "25CY":
/*!**********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/symbol/rxSubscriber.js ***!
  \**********************************************************************************************/
/*! exports provided: rxSubscriber, $$rxSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rxSubscriber", function() { return rxSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$rxSubscriber", function() { return $$rxSubscriber; });
const rxSubscriber = (() => typeof Symbol === 'function'
    ? Symbol('rxSubscriber')
    : '@@rxSubscriber_' + Math.random())();
const $$rxSubscriber = rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "2BEx":
/*!**************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/parent/getOriginFromSrc.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const DEFAULT_PORT_BY_PROTOCOL = {
    'http:': '80',
    'https:': '443'
};
const URL_REGEX = /^(https?:)?\/\/([^/:]+)?(:(\d+))?/;
const opaqueOriginSchemes = ['file:', 'data:'];
/**
 * Converts a src value into an origin.
 */
/* harmony default export */ __webpack_exports__["default"] = ((src) => {
    if (src && opaqueOriginSchemes.find(scheme => src.startsWith(scheme))) {
        // The origin of the child document is an opaque origin and its
        // serialization is "null"
        // https://html.spec.whatwg.org/multipage/origin.html#origin
        return 'null';
    }
    // Note that if src is undefined, then srcdoc is being used instead of src
    // and we can follow this same logic below to get the origin of the parent,
    // which is the origin that we will need to use.
    const location = document.location;
    const regexResult = URL_REGEX.exec(src);
    let protocol;
    let hostname;
    let port;
    if (regexResult) {
        // It's an absolute URL. Use the parsed info.
        // regexResult[1] will be undefined if the URL starts with //
        protocol = (regexResult[1] ? regexResult[1] : location.protocol);
        hostname = regexResult[2];
        port = regexResult[4];
    }
    else {
        // It's a relative path. Use the current location's info.
        protocol = location.protocol;
        hostname = location.hostname;
        port = location.port;
    }
    // If the port is the default for the protocol, we don't want to add it to the origin string
    // or it won't match the message's event.origin.
    const portSuffix = port && port !== DEFAULT_PORT_BY_PROTOCOL[protocol] ? `:${port}` : '';
    return `${protocol}//${hostname}${portSuffix}`;
});


/***/ }),

/***/ "2OXO":
/*!******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/every.js ***!
  \******************************************************************************************/
/*! exports provided: every */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "every", function() { return every; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");

function every(predicate, thisArg) {
    return (source) => source.lift(new EveryOperator(predicate, thisArg, source));
}
class EveryOperator {
    constructor(predicate, thisArg, source) {
        this.predicate = predicate;
        this.thisArg = thisArg;
        this.source = source;
    }
    call(observer, source) {
        return source.subscribe(new EverySubscriber(observer, this.predicate, this.thisArg, this.source));
    }
}
class EverySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, predicate, thisArg, source) {
        super(destination);
        this.predicate = predicate;
        this.thisArg = thisArg;
        this.source = source;
        this.index = 0;
        this.thisArg = thisArg || this;
    }
    notifyComplete(everyValueMatch) {
        this.destination.next(everyValueMatch);
        this.destination.complete();
    }
    _next(value) {
        let result = false;
        try {
            result = this.predicate.call(this.thisArg, value, this.index++, this.source);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (!result) {
            this.notifyComplete(false);
        }
    }
    _complete() {
        this.notifyComplete(true);
    }
}
//# sourceMappingURL=every.js.map

/***/ }),

/***/ "3lSR":
/*!*********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/mergeAll.js ***!
  \*********************************************************************************************/
/*! exports provided: mergeAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeAll", function() { return mergeAll; });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeMap */ "cJ9h");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/identity */ "5E2i");


function mergeAll(concurrent = Number.POSITIVE_INFINITY) {
    return Object(_mergeMap__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"], concurrent);
}
//# sourceMappingURL=mergeAll.js.map

/***/ }),

/***/ "3mST":
/*!*****************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/skip.js ***!
  \*****************************************************************************************/
/*! exports provided: skip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skip", function() { return skip; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");

function skip(count) {
    return (source) => source.lift(new SkipOperator(count));
}
class SkipOperator {
    constructor(total) {
        this.total = total;
    }
    call(subscriber, source) {
        return source.subscribe(new SkipSubscriber(subscriber, this.total));
    }
}
class SkipSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, total) {
        super(destination);
        this.total = total;
        this.count = 0;
    }
    _next(x) {
        if (++this.count > this.total) {
            this.destination.next(x);
        }
    }
}
//# sourceMappingURL=skip.js.map

/***/ }),

/***/ "47ST":
/*!************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/throwError.js ***!
  \************************************************************************************************/
/*! exports provided: throwError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return throwError; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "IdLP");

function throwError(error, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => subscriber.error(error));
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => scheduler.schedule(dispatch, 0, { error, subscriber }));
    }
}
function dispatch({ error, subscriber }) {
    subscriber.error(error);
}
//# sourceMappingURL=throwError.js.map

/***/ }),

/***/ "4e/d":
/*!***********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/catchError.js ***!
  \***********************************************************************************************/
/*! exports provided: catchError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catchError", function() { return catchError; });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ "uCWR");

function catchError(selector) {
    return function catchErrorOperatorFunction(source) {
        const operator = new CatchOperator(selector);
        const caught = source.lift(operator);
        return (operator.caught = caught);
    };
}
class CatchOperator {
    constructor(selector) {
        this.selector = selector;
    }
    call(subscriber, source) {
        return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
    }
}
class CatchSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleOuterSubscriber"] {
    constructor(destination, selector, caught) {
        super(destination);
        this.selector = selector;
        this.caught = caught;
    }
    error(err) {
        if (!this.isStopped) {
            let result;
            try {
                result = this.selector(err, this.caught);
            }
            catch (err2) {
                super.error(err2);
                return;
            }
            this._unsubscribeAndRecycle();
            const innerSubscriber = new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleInnerSubscriber"](this);
            this.add(innerSubscriber);
            const innerSubscription = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["innerSubscribe"])(result, innerSubscriber);
            if (innerSubscription !== innerSubscriber) {
                this.add(innerSubscription);
            }
        }
    }
}
//# sourceMappingURL=catchError.js.map

/***/ }),

/***/ "4wde":
/*!*******************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduled/scheduleObservable.js ***!
  \*******************************************************************************************************/
/*! exports provided: scheduleObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleObservable", function() { return scheduleObservable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "IdLP");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "bwdy");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbol/observable */ "qEfY");



function scheduleObservable(input, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        const sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        sub.add(scheduler.schedule(() => {
            const observable = input[_symbol_observable__WEBPACK_IMPORTED_MODULE_2__["observable"]]();
            sub.add(observable.subscribe({
                next(value) { sub.add(scheduler.schedule(() => subscriber.next(value))); },
                error(err) { sub.add(scheduler.schedule(() => subscriber.error(err))); },
                complete() { sub.add(scheduler.schedule(() => subscriber.complete())); },
            }));
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleObservable.js.map

/***/ }),

/***/ "4xW2":
/*!*********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/debounce.js ***!
  \*********************************************************************************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ "uCWR");

function debounce(durationSelector) {
    return (source) => source.lift(new DebounceOperator(durationSelector));
}
class DebounceOperator {
    constructor(durationSelector) {
        this.durationSelector = durationSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
    }
}
class DebounceSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleOuterSubscriber"] {
    constructor(destination, durationSelector) {
        super(destination);
        this.durationSelector = durationSelector;
        this.hasValue = false;
    }
    _next(value) {
        try {
            const result = this.durationSelector.call(this, value);
            if (result) {
                this._tryNext(value, result);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    }
    _complete() {
        this.emitValue();
        this.destination.complete();
    }
    _tryNext(value, duration) {
        let subscription = this.durationSubscription;
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
    notifyNext() {
        this.emitValue();
    }
    notifyComplete() {
        this.emitValue();
    }
    emitValue() {
        if (this.hasValue) {
            const value = this.value;
            const subscription = this.durationSubscription;
            if (subscription) {
                this.durationSubscription = undefined;
                subscription.unsubscribe();
                this.remove(subscription);
            }
            this.value = undefined;
            this.hasValue = false;
            super._next(value);
        }
    }
}
//# sourceMappingURL=debounce.js.map

/***/ }),

/***/ "503g":
/*!************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/parent/connectToChild.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ "Rj9D");
/* harmony import */ var _createDestructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createDestructor */ "tUyG");
/* harmony import */ var _createLogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createLogger */ "hmHb");
/* harmony import */ var _getOriginFromSrc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getOriginFromSrc */ "2BEx");
/* harmony import */ var _handleAckMessageFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handleAckMessageFactory */ "LyCu");
/* harmony import */ var _handleSynMessageFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handleSynMessageFactory */ "pZOY");
/* harmony import */ var _monitorIframeRemoval__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./monitorIframeRemoval */ "6Rrg");
/* harmony import */ var _startConnectionTimeout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../startConnectionTimeout */ "aV0t");
/* harmony import */ var _validateIframeHasSrcOrSrcDoc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./validateIframeHasSrcOrSrcDoc */ "IIln");









/**
 * Attempts to establish communication with an iframe.
 */
/* harmony default export */ __webpack_exports__["default"] = ((options) => {
    let { iframe, methods = {}, childOrigin, timeout, debug = false } = options;
    const log = Object(_createLogger__WEBPACK_IMPORTED_MODULE_2__["default"])(debug);
    const destructor = Object(_createDestructor__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const { onDestroy, destroy } = destructor;
    if (!childOrigin) {
        Object(_validateIframeHasSrcOrSrcDoc__WEBPACK_IMPORTED_MODULE_8__["default"])(iframe);
        childOrigin = Object(_getOriginFromSrc__WEBPACK_IMPORTED_MODULE_3__["default"])(iframe.src);
    }
    // If event.origin is "null", the remote protocol is file: or data: and we
    // must post messages with "*" as targetOrigin when sending messages.
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage#Using_window.postMessage_in_extensions
    const originForSending = childOrigin === 'null' ? '*' : childOrigin;
    const handleSynMessage = Object(_handleSynMessageFactory__WEBPACK_IMPORTED_MODULE_5__["default"])(log, methods, childOrigin, originForSending);
    const handleAckMessage = Object(_handleAckMessageFactory__WEBPACK_IMPORTED_MODULE_4__["default"])(methods, childOrigin, originForSending, destructor, log);
    const promise = new Promise((resolve, reject) => {
        const stopConnectionTimeout = Object(_startConnectionTimeout__WEBPACK_IMPORTED_MODULE_7__["default"])(timeout, destroy);
        const handleMessage = (event) => {
            if (event.source !== iframe.contentWindow || !event.data) {
                return;
            }
            if (event.data.penpal === _enums__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Syn) {
                handleSynMessage(event);
                return;
            }
            if (event.data.penpal === _enums__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Ack) {
                const callSender = handleAckMessage(event);
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
        onDestroy((error) => {
            window.removeEventListener(_enums__WEBPACK_IMPORTED_MODULE_0__["NativeEventType"].Message, handleMessage);
            if (!error) {
                error = new Error('Connection destroyed');
                error.code = _enums__WEBPACK_IMPORTED_MODULE_0__["ErrorCode"].ConnectionDestroyed;
            }
            reject(error);
        });
    });
    return {
        promise,
        destroy() {
            // Don't allow consumer to pass an error into destroy.
            destroy();
        }
    };
});


/***/ }),

/***/ "574M":
/*!*******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/concat.js ***!
  \*******************************************************************************************/
/*! exports provided: concat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony import */ var _observable_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/concat */ "qZtG");

function concat(...observables) {
    return (source) => source.lift.call(Object(_observable_concat__WEBPACK_IMPORTED_MODULE_0__["concat"])(source, ...observables));
}
//# sourceMappingURL=concat.js.map

/***/ }),

/***/ "5E2i":
/*!****************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/identity.js ***!
  \****************************************************************************************/
/*! exports provided: identity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
function identity(x) {
    return x;
}
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ "5uDM":
/*!**********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/concatMap.js ***!
  \**********************************************************************************************/
/*! exports provided: concatMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatMap", function() { return concatMap; });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeMap */ "cJ9h");

function concatMap(project, resultSelector) {
    return Object(_mergeMap__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(project, resultSelector, 1);
}
//# sourceMappingURL=concatMap.js.map

/***/ }),

/***/ "5uGe":
/*!*************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/Subscriber.js ***!
  \*************************************************************************************/
/*! exports provided: Subscriber, SafeSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscriber", function() { return Subscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeSubscriber", function() { return SafeSubscriber; });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/isFunction */ "IJgj");
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Observer */ "rWo0");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscription */ "bwdy");
/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "25CY");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "HgnN");
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/hostReportError */ "i9P/");






class Subscriber extends _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"] {
    constructor(destinationOrNext, error, complete) {
        super();
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = _Observer__WEBPACK_IMPORTED_MODULE_1__["empty"];
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = _Observer__WEBPACK_IMPORTED_MODULE_1__["empty"];
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        this.destination = destinationOrNext;
                        destinationOrNext.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    [_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_3__["rxSubscriber"]]() { return this; }
    static create(next, error, complete) {
        const subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    }
    next(value) {
        if (!this.isStopped) {
            this._next(value);
        }
    }
    error(err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    }
    complete() {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    }
    unsubscribe() {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        super.unsubscribe();
    }
    _next(value) {
        this.destination.next(value);
    }
    _error(err) {
        this.destination.error(err);
        this.unsubscribe();
    }
    _complete() {
        this.destination.complete();
        this.unsubscribe();
    }
    _unsubscribeAndRecycle() {
        const { _parentOrParents } = this;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    }
}
class SafeSubscriber extends Subscriber {
    constructor(_parentSubscriber, observerOrNext, error, complete) {
        super();
        this._parentSubscriber = _parentSubscriber;
        let next;
        let context = this;
        if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== _Observer__WEBPACK_IMPORTED_MODULE_1__["empty"]) {
                context = Object.create(observerOrNext);
                if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    next(value) {
        if (!this.isStopped && this._next) {
            const { _parentSubscriber } = this;
            if (!_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    }
    error(err) {
        if (!this.isStopped) {
            const { _parentSubscriber } = this;
            const { useDeprecatedSynchronousErrorHandling } = _config__WEBPACK_IMPORTED_MODULE_4__["config"];
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__["hostReportError"])(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__["hostReportError"])(err);
                }
                this.unsubscribe();
            }
        }
    }
    complete() {
        if (!this.isStopped) {
            const { _parentSubscriber } = this;
            if (this._complete) {
                const wrappedComplete = () => this._complete.call(this._context);
                if (!_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    }
    __tryOrUnsub(fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__["hostReportError"])(err);
            }
        }
    }
    __tryOrSetError(parent, fn, value) {
        if (!_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__["hostReportError"])(err);
                return true;
            }
        }
        return false;
    }
    _unsubscribe() {
        const { _parentSubscriber } = this;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    }
}
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "6Oco":
/*!*******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/empty.js ***!
  \*******************************************************************************************/
/*! exports provided: EMPTY, empty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY", function() { return EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "IdLP");

const EMPTY = new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => subscriber.complete());
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => scheduler.schedule(() => subscriber.complete()));
}
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "6Rrg":
/*!******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/parent/monitorIframeRemoval.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const CHECK_IFRAME_IN_DOC_INTERVAL = 60000;
/**
 * Monitors for iframe removal and destroys connection if iframe
 * is found to have been removed from DOM. This is to prevent memory
 * leaks when the iframe is removed from the document and the consumer
 * hasn't called destroy(). Without this, event listeners attached to
 * the window would stick around and since the event handlers have a
 * reference to the iframe in their closures, the iframe would stick
 * around too.
 */
/* harmony default export */ __webpack_exports__["default"] = ((iframe, destructor) => {
    const { destroy, onDestroy } = destructor;
    const checkIframeInDocIntervalId = setInterval(() => {
        if (!iframe.isConnected) {
            clearInterval(checkIframeInDocIntervalId);
            destroy();
        }
    }, CHECK_IFRAME_IN_DOC_INTERVAL);
    onDestroy(() => {
        clearInterval(checkIframeInDocIntervalId);
    });
});


/***/ }),

/***/ "7Alh":
/*!************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
  \************************************************************************************/
/*! exports provided: Scheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return Scheduler; });
class Scheduler {
    constructor(SchedulerAction, now = Scheduler.now) {
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    schedule(work, delay = 0, state) {
        return new this.SchedulerAction(this, work).schedule(state, delay);
    }
}
Scheduler.now = () => Date.now();
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ "7SLS":
/*!******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/mapTo.js ***!
  \******************************************************************************************/
/*! exports provided: mapTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapTo", function() { return mapTo; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");

function mapTo(value) {
    return (source) => source.lift(new MapToOperator(value));
}
class MapToOperator {
    constructor(value) {
        this.value = value;
    }
    call(subscriber, source) {
        return source.subscribe(new MapToSubscriber(subscriber, this.value));
    }
}
class MapToSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, value) {
        super(destination);
        this.value = value;
    }
    _next(x) {
        this.destination.next(this.value);
    }
}
//# sourceMappingURL=mapTo.js.map

/***/ }),

/***/ "7ntQ":
/*!******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/share.js ***!
  \******************************************************************************************/
/*! exports provided: share */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "share", function() { return share; });
/* harmony import */ var _multicast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multicast */ "JHA6");
/* harmony import */ var _refCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refCount */ "i7Dj");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subject */ "ZTXN");



function shareSubjectFactory() {
    return new _Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
}
function share() {
    return (source) => Object(_refCount__WEBPACK_IMPORTED_MODULE_1__["refCount"])()(Object(_multicast__WEBPACK_IMPORTED_MODULE_0__["multicast"])(shareSubjectFactory)(source));
}
//# sourceMappingURL=share.js.map

/***/ }),

/***/ "8V6W":
/*!**************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/subscribeToPromise.js ***!
  \**************************************************************************************************/
/*! exports provided: subscribeToPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToPromise", function() { return subscribeToPromise; });
/* harmony import */ var _hostReportError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hostReportError */ "i9P/");

const subscribeToPromise = (promise) => (subscriber) => {
    promise.then((value) => {
        if (!subscriber.closed) {
            subscriber.next(value);
            subscriber.complete();
        }
    }, (err) => subscriber.error(err))
        .then(null, _hostReportError__WEBPACK_IMPORTED_MODULE_0__["hostReportError"]);
    return subscriber;
};
//# sourceMappingURL=subscribeToPromise.js.map

/***/ }),

/***/ "8j5Y":
/*!****************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/tap.js ***!
  \****************************************************************************************/
/*! exports provided: tap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return tap; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/noop */ "kgbq");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isFunction */ "IJgj");



function tap(nextOrObserver, error, complete) {
    return function tapOperatorFunction(source) {
        return source.lift(new DoOperator(nextOrObserver, error, complete));
    };
}
class DoOperator {
    constructor(nextOrObserver, error, complete) {
        this.nextOrObserver = nextOrObserver;
        this.error = error;
        this.complete = complete;
    }
    call(subscriber, source) {
        return source.subscribe(new TapSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
    }
}
class TapSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, observerOrNext, error, complete) {
        super(destination);
        this._tapNext = _util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"];
        this._tapError = _util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"];
        this._tapComplete = _util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"];
        this._tapError = error || _util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"];
        this._tapComplete = complete || _util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"];
        if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(observerOrNext)) {
            this._context = this;
            this._tapNext = observerOrNext;
        }
        else if (observerOrNext) {
            this._context = observerOrNext;
            this._tapNext = observerOrNext.next || _util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"];
            this._tapError = observerOrNext.error || _util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"];
            this._tapComplete = observerOrNext.complete || _util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"];
        }
    }
    _next(value) {
        try {
            this._tapNext.call(this._context, value);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(value);
    }
    _error(err) {
        try {
            this._tapError.call(this._context, err);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.error(err);
    }
    _complete() {
        try {
            this._tapComplete.call(this._context);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        return this.destination.complete();
    }
}
//# sourceMappingURL=tap.js.map

/***/ }),

/***/ "8lHc":
/*!*******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/timer.js ***!
  \*******************************************************************************************/
/*! exports provided: timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "IdLP");
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ "Efrr");
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isNumeric */ "KRZI");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isScheduler */ "gBlb");




function timer(dueTime = 0, periodOrScheduler, scheduler) {
    let period = -1;
    if (Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    }
    else if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_3__["isScheduler"])(periodOrScheduler)) {
        scheduler = periodOrScheduler;
    }
    if (!Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_3__["isScheduler"])(scheduler)) {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        const due = Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(dueTime)
            ? dueTime
            : (+dueTime - scheduler.now());
        return scheduler.schedule(dispatch, due, {
            index: 0, period, subscriber
        });
    });
}
function dispatch(state) {
    const { index, period, subscriber } = state;
    subscriber.next(index);
    if (subscriber.closed) {
        return;
    }
    else if (period === -1) {
        return subscriber.complete();
    }
    state.index = index + 1;
    this.schedule(state, period);
}
//# sourceMappingURL=timer.js.map

/***/ }),

/***/ "9WAt":
/*!***************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/ignoreElements.js ***!
  \***************************************************************************************************/
/*! exports provided: ignoreElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreElements", function() { return ignoreElements; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");

function ignoreElements() {
    return function ignoreElementsOperatorFunction(source) {
        return source.lift(new IgnoreElementsOperator());
    };
}
class IgnoreElementsOperator {
    call(subscriber, source) {
        return source.subscribe(new IgnoreElementsSubscriber(subscriber));
    }
}
class IgnoreElementsSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    _next(unused) {
    }
}
//# sourceMappingURL=ignoreElements.js.map

/***/ }),

/***/ "9hGb":
/*!*******************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/dist/shared/__ivy_ngcc__/fesm2015/shared.js ***!
  \*******************************************************************************/
/*! exports provided: ButtonComponent, ChildIframeEvents, IFrameChatService, SharedComponent, SharedModule, TabComponent, TabsComponent, TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildIframeEvents", function() { return ChildIframeEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IFrameChatService", function() { return IFrameChatService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponent", function() { return SharedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "vOrQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "0S4P");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var penpal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! penpal */ "tGer");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "Vgaj");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");









function TabsComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const tab_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectTab(tab_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tab--active", !tab_r1.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tab_r1.title, " ");
} }
const _c0 = ["*"];
const _c1 = ["sharedBtn", ""];
class SharedComponent {
}
SharedComponent.ɵfac = function SharedComponent_Factory(t) { return new (t || SharedComponent)(); };
SharedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SharedComponent, selectors: [["lib-shared-component"]], decls: 2, vars: 0, template: function SharedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Shared component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-shared-component',
                template: ` <h4>Shared component</h4> `
            }]
    }], null, null); })();

class TabsComponent {
    constructor() {
        this.tabs = [];
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    addTab(tabComponent) {
        if (!this.tabs.length) {
            tabComponent.hidden = false;
        }
        this.tabs.push(tabComponent);
    }
    selectTab(tabComponent) {
        this.tabs.map((tab) => (tab.hidden = true));
        tabComponent.hidden = false;
        this.selected.emit(tabComponent);
    }
}
TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(); };
TabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsComponent, selectors: [["lib-shared-tabs"]], outputs: { selected: "selected" }, ngContentSelectors: _c0, decls: 4, vars: 1, consts: [[1, "tabs"], ["class", "tab", 3, "tab--active", "click", 4, "ngFor", "ngForOf"], [1, "tab-body"], [1, "tab", 3, "click"]], template: function TabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabsComponent_li_1_Template, 2, 3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["[_nghost-%COMP%]{display:block}.tabs[_ngcontent-%COMP%]{border-bottom:1px solid #ebeef2;display:flex;list-style:none;margin:0;padding:0}.tab[_ngcontent-%COMP%]{cursor:pointer;line-height:40px;padding:0 20px;position:relative}.tab-body[_ngcontent-%COMP%]{padding:20px}.tab--active[_ngcontent-%COMP%]:before{background:#03a9f4;bottom:0;content:\"\";height:3px;left:0;position:absolute;right:0}"] });
TabsComponent.propDecorators = {
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-shared-tabs',
                template: "<ul class=\"tabs\">\r\n  <li *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\" class=\"tab\" [class.tab--active]=\"!tab.hidden\">\r\n    {{ tab.title }}\r\n  </li>\r\n</ul>\r\n<div class=\"tab-body\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                styles: [":host{display:block}.tabs{border-bottom:1px solid #ebeef2;display:flex;list-style:none;margin:0;padding:0}.tab{cursor:pointer;line-height:40px;padding:0 20px;position:relative}.tab-body{padding:20px}.tab--active:before{background:#03a9f4;bottom:0;content:\"\";height:3px;left:0;position:absolute;right:0}"]
            }]
    }], function () { return []; }, { selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();

class TabComponent {
    constructor(tabsComponent) {
        this.hidden = true;
        tabsComponent.addTab(this);
    }
}
TabComponent.ɵfac = function TabComponent_Factory(t) { return new (t || TabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TabsComponent)); };
TabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabComponent, selectors: [["lib-shared-tab"]], hostVars: 1, hostBindings: function TabComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("hidden", ctx.hidden);
    } }, inputs: { title: "title" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function TabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2 });
TabComponent.ctorParameters = () => [
    { type: TabsComponent }
];
TabComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['hidden',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-shared-tab',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return [{ type: TabsComponent }]; }, { hidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['hidden']
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class ButtonComponent {
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["button", "sharedBtn", ""]], attrs: _c1, ngContentSelectors: _c0, decls: 1, vars: 0, template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["[_nghost-%COMP%]{background:#fff;border:1px solid #d8dde6;border-radius:6px;cursor:pointer;line-height:40px;padding:0 15px}[_nghost-%COMP%]:hover{background:#f3f7fb}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'button[sharedBtn]',
                template: '<ng-content></ng-content>',
                styles: [":host{background:#fff;border:1px solid #d8dde6;border-radius:6px;cursor:pointer;line-height:40px;padding:0 15px}:host:hover{background:#f3f7fb}"]
            }]
    }], null, null); })();

const sharedComponents = [SharedComponent, ButtonComponent, TabComponent, TabsComponent];
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: function () { return [SharedComponent, ButtonComponent, TabComponent, TabsComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [SharedComponent, ButtonComponent, TabComponent, TabsComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [...sharedComponents],
                exports: [...sharedComponents]
            }]
    }], null, null); })();

class ChildIframeEvents {
    constructor() {
        this.onloaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onsizechanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onScriptInited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.onTrackHoverElement = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}

class IFrameChatService {
    constructor(iframe, parentAPI) {
        /** 子IFRAME的事件 */
        this.childEvents = new ChildIframeEvents();
        /**
         * 链接到iframe
         */
        this.onConnected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        if (parentAPI)
            parentAPI.iframeChatService = this;
        this.Init(iframe, parentAPI);
    }
    /**
     * 初始化Postmate，用于父子页面的交互
     */
    Init(iframe, parentAPI) {
        // Postmate.debug = true;
        if (this.childAPI)
            this.connection.destroy();
        this.connection = Object(penpal__WEBPACK_IMPORTED_MODULE_2__["connectToChild"])({
            // The iframe to which a connection should be made
            iframe,
            // Methods the parent is exposing to the child
            methods: parentAPI
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.connection.promise)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((child) => {
            this.childAPI = Object.assign(Object.assign({}, child), this.childEvents);
            this.onConnected.emit(true);
        }))
            .subscribe();
    }
}

class TestService {
    constructor() {
        console.log('Test service constructor');
        this.Message = 'aaa';
    }
    HelloWorld() {
        console.log(this.Message);
    }
}
TestService.ɵfac = function TestService_Factory(t) { return new (t || TestService)(); };
TestService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function TestService_Factory() { return new TestService(); }, token: TestService, providedIn: "any" });
TestService.ctorParameters = () => [];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'any'
            }]
    }], function () { return []; }, null); })();

/*
 * Public API Surface of shared
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=shared.js.map

/***/ }),

/***/ "A2S1":
/*!**********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/observeOn.js ***!
  \**********************************************************************************************/
/*! exports provided: observeOn, ObserveOnOperator, ObserveOnSubscriber, ObserveOnMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observeOn", function() { return observeOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveOnOperator", function() { return ObserveOnOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveOnSubscriber", function() { return ObserveOnSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveOnMessage", function() { return ObserveOnMessage; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Notification */ "ryP2");


function observeOn(scheduler, delay = 0) {
    return function observeOnOperatorFunction(source) {
        return source.lift(new ObserveOnOperator(scheduler, delay));
    };
}
class ObserveOnOperator {
    constructor(scheduler, delay = 0) {
        this.scheduler = scheduler;
        this.delay = delay;
    }
    call(subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    }
}
class ObserveOnSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, scheduler, delay = 0) {
        super(destination);
        this.scheduler = scheduler;
        this.delay = delay;
    }
    static dispatch(arg) {
        const { notification, destination } = arg;
        notification.observe(destination);
        this.unsubscribe();
    }
    scheduleMessage(notification) {
        const destination = this.destination;
        destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    }
    _next(value) {
        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createNext(value));
    }
    _error(err) {
        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createError(err));
        this.unsubscribe();
    }
    _complete() {
        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createComplete());
        this.unsubscribe();
    }
}
class ObserveOnMessage {
    constructor(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
}
//# sourceMappingURL=observeOn.js.map

/***/ }),

/***/ "A8kH":
/*!*********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/takeLast.js ***!
  \*********************************************************************************************/
/*! exports provided: takeLast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeLast", function() { return takeLast; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");
/* harmony import */ var _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ArgumentOutOfRangeError */ "PNff");
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/empty */ "6Oco");



function takeLast(count) {
    return function takeLastOperatorFunction(source) {
        if (count === 0) {
            return Object(_observable_empty__WEBPACK_IMPORTED_MODULE_2__["empty"])();
        }
        else {
            return source.lift(new TakeLastOperator(count));
        }
    };
}
class TakeLastOperator {
    constructor(total) {
        this.total = total;
        if (this.total < 0) {
            throw new _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_1__["ArgumentOutOfRangeError"];
        }
    }
    call(subscriber, source) {
        return source.subscribe(new TakeLastSubscriber(subscriber, this.total));
    }
}
class TakeLastSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, total) {
        super(destination);
        this.total = total;
        this.ring = new Array();
        this.count = 0;
    }
    _next(value) {
        const ring = this.ring;
        const total = this.total;
        const count = this.count++;
        if (ring.length < total) {
            ring.push(value);
        }
        else {
            const index = count % total;
            ring[index] = value;
        }
    }
    _complete() {
        const destination = this.destination;
        let count = this.count;
        if (count > 0) {
            const total = this.count >= this.total ? this.total : this.count;
            const ring = this.ring;
            for (let i = 0; i < total; i++) {
                const idx = (count++) % total;
                destination.next(ring[idx]);
            }
        }
        destination.complete();
    }
}
//# sourceMappingURL=takeLast.js.map

/***/ }),

/***/ "AAYN":
/*!***********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/bufferTime.js ***!
  \***********************************************************************************************/
/*! exports provided: bufferTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bufferTime", function() { return bufferTime; });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ "Efrr");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "5uGe");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isScheduler */ "gBlb");



function bufferTime(bufferTimeSpan) {
    let length = arguments.length;
    let scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__["async"];
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_2__["isScheduler"])(arguments[arguments.length - 1])) {
        scheduler = arguments[arguments.length - 1];
        length--;
    }
    let bufferCreationInterval = null;
    if (length >= 2) {
        bufferCreationInterval = arguments[1];
    }
    let maxBufferSize = Number.POSITIVE_INFINITY;
    if (length >= 3) {
        maxBufferSize = arguments[2];
    }
    return function bufferTimeOperatorFunction(source) {
        return source.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler));
    };
}
class BufferTimeOperator {
    constructor(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.maxBufferSize = maxBufferSize;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
    }
}
class Context {
    constructor() {
        this.buffer = [];
    }
}
class BufferTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"] {
    constructor(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        super(destination);
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.maxBufferSize = maxBufferSize;
        this.scheduler = scheduler;
        this.contexts = [];
        const context = this.openContext();
        this.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;
        if (this.timespanOnly) {
            const timeSpanOnlyState = { subscriber: this, context, bufferTimeSpan };
            this.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
        else {
            const closeState = { subscriber: this, context };
            const creationState = { bufferTimeSpan, bufferCreationInterval, subscriber: this, scheduler };
            this.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
            this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
        }
    }
    _next(value) {
        const contexts = this.contexts;
        const len = contexts.length;
        let filledBufferContext;
        for (let i = 0; i < len; i++) {
            const context = contexts[i];
            const buffer = context.buffer;
            buffer.push(value);
            if (buffer.length == this.maxBufferSize) {
                filledBufferContext = context;
            }
        }
        if (filledBufferContext) {
            this.onBufferFull(filledBufferContext);
        }
    }
    _error(err) {
        this.contexts.length = 0;
        super._error(err);
    }
    _complete() {
        const { contexts, destination } = this;
        while (contexts.length > 0) {
            const context = contexts.shift();
            destination.next(context.buffer);
        }
        super._complete();
    }
    _unsubscribe() {
        this.contexts = null;
    }
    onBufferFull(context) {
        this.closeContext(context);
        const closeAction = context.closeAction;
        closeAction.unsubscribe();
        this.remove(closeAction);
        if (!this.closed && this.timespanOnly) {
            context = this.openContext();
            const bufferTimeSpan = this.bufferTimeSpan;
            const timeSpanOnlyState = { subscriber: this, context, bufferTimeSpan };
            this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
    }
    openContext() {
        const context = new Context();
        this.contexts.push(context);
        return context;
    }
    closeContext(context) {
        this.destination.next(context.buffer);
        const contexts = this.contexts;
        const spliceIndex = contexts ? contexts.indexOf(context) : -1;
        if (spliceIndex >= 0) {
            contexts.splice(contexts.indexOf(context), 1);
        }
    }
}
function dispatchBufferTimeSpanOnly(state) {
    const subscriber = state.subscriber;
    const prevContext = state.context;
    if (prevContext) {
        subscriber.closeContext(prevContext);
    }
    if (!subscriber.closed) {
        state.context = subscriber.openContext();
        state.context.closeAction = this.schedule(state, state.bufferTimeSpan);
    }
}
function dispatchBufferCreation(state) {
    const { bufferCreationInterval, bufferTimeSpan, subscriber, scheduler } = state;
    const context = subscriber.openContext();
    const action = this;
    if (!subscriber.closed) {
        subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber, context }));
        action.schedule(state, bufferCreationInterval);
    }
}
function dispatchBufferClose(arg) {
    const { subscriber, context } = arg;
    subscriber.closeContext(context);
}
//# sourceMappingURL=bufferTime.js.map

/***/ }),

/***/ "B+tH":
/*!*******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/child/validateWindowIsIframe.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ "Rj9D");

/* harmony default export */ __webpack_exports__["default"] = (() => {
    if (window === window.top) {
        const error = new Error('connectToParent() must be called within an iframe');
        error.code = _enums__WEBPACK_IMPORTED_MODULE_0__["ErrorCode"].NotInIframe;
        throw error;
    }
});


/***/ }),

/***/ "B8NW":
/*!**********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/takeWhile.js ***!
  \**********************************************************************************************/
/*! exports provided: takeWhile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeWhile", function() { return takeWhile; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");

function takeWhile(predicate, inclusive = false) {
    return (source) => source.lift(new TakeWhileOperator(predicate, inclusive));
}
class TakeWhileOperator {
    constructor(predicate, inclusive) {
        this.predicate = predicate;
        this.inclusive = inclusive;
    }
    call(subscriber, source) {
        return source.subscribe(new TakeWhileSubscriber(subscriber, this.predicate, this.inclusive));
    }
}
class TakeWhileSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, predicate, inclusive) {
        super(destination);
        this.predicate = predicate;
        this.inclusive = inclusive;
        this.index = 0;
    }
    _next(value) {
        const destination = this.destination;
        let result;
        try {
            result = this.predicate(value, this.index++);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        this.nextOrComplete(value, result);
    }
    nextOrComplete(value, predicateResult) {
        const destination = this.destination;
        if (Boolean(predicateResult)) {
            destination.next(value);
        }
        else {
            if (this.inclusive) {
                destination.next(value);
            }
            destination.complete();
        }
    }
}
//# sourceMappingURL=takeWhile.js.map

/***/ }),

/***/ "BwBJ":
/*!******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/delay.js ***!
  \******************************************************************************************/
/*! exports provided: delay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ "Efrr");
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isDate */ "iRe+");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscriber */ "5uGe");
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Notification */ "ryP2");




function delay(delay, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__["async"]) {
    const absoluteDelay = Object(_util_isDate__WEBPACK_IMPORTED_MODULE_1__["isDate"])(delay);
    const delayFor = absoluteDelay ? (+delay - scheduler.now()) : Math.abs(delay);
    return (source) => source.lift(new DelayOperator(delayFor, scheduler));
}
class DelayOperator {
    constructor(delay, scheduler) {
        this.delay = delay;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
    }
}
class DelaySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_2__["Subscriber"] {
    constructor(destination, delay, scheduler) {
        super(destination);
        this.delay = delay;
        this.scheduler = scheduler;
        this.queue = [];
        this.active = false;
        this.errored = false;
    }
    static dispatch(state) {
        const source = state.source;
        const queue = source.queue;
        const scheduler = state.scheduler;
        const destination = state.destination;
        while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
            queue.shift().notification.observe(destination);
        }
        if (queue.length > 0) {
            const delay = Math.max(0, queue[0].time - scheduler.now());
            this.schedule(state, delay);
        }
        else {
            this.unsubscribe();
            source.active = false;
        }
    }
    _schedule(scheduler) {
        this.active = true;
        const destination = this.destination;
        destination.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
            source: this, destination: this.destination, scheduler: scheduler
        }));
    }
    scheduleNotification(notification) {
        if (this.errored === true) {
            return;
        }
        const scheduler = this.scheduler;
        const message = new DelayMessage(scheduler.now() + this.delay, notification);
        this.queue.push(message);
        if (this.active === false) {
            this._schedule(scheduler);
        }
    }
    _next(value) {
        this.scheduleNotification(_Notification__WEBPACK_IMPORTED_MODULE_3__["Notification"].createNext(value));
    }
    _error(err) {
        this.errored = true;
        this.queue = [];
        this.destination.error(err);
        this.unsubscribe();
    }
    _complete() {
        this.scheduleNotification(_Notification__WEBPACK_IMPORTED_MODULE_3__["Notification"].createComplete());
        this.unsubscribe();
    }
}
class DelayMessage {
    constructor(time, notification) {
        this.time = time;
        this.notification = notification;
    }
}
//# sourceMappingURL=delay.js.map

/***/ }),

/***/ "C05f":
/*!******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/BehaviorSubject.js ***!
  \******************************************************************************************/
/*! exports provided: BehaviorSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BehaviorSubject", function() { return BehaviorSubject; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "ZTXN");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "MiDb");


class BehaviorSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"] {
    constructor(_value) {
        super();
        this._value = _value;
    }
    get value() {
        return this.getValue();
    }
    _subscribe(subscriber) {
        const subscription = super._subscribe(subscriber);
        if (subscription && !subscription.closed) {
            subscriber.next(this._value);
        }
        return subscription;
    }
    getValue() {
        if (this.hasError) {
            throw this.thrownError;
        }
        else if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__["ObjectUnsubscribedError"]();
        }
        else {
            return this._value;
        }
    }
    next(value) {
        super.next(this._value = value);
    }
}
//# sourceMappingURL=BehaviorSubject.js.map

/***/ }),

/***/ "CfqY":
/*!********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/publish.js ***!
  \********************************************************************************************/
/*! exports provided: publish */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publish", function() { return publish; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ "ZTXN");
/* harmony import */ var _multicast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multicast */ "JHA6");


function publish(selector) {
    return selector ?
        Object(_multicast__WEBPACK_IMPORTED_MODULE_1__["multicast"])(() => new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"](), selector) :
        Object(_multicast__WEBPACK_IMPORTED_MODULE_1__["multicast"])(new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]());
}
//# sourceMappingURL=publish.js.map

/***/ }),

/***/ "CsoK":
/*!************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/switchMapTo.js ***!
  \************************************************************************************************/
/*! exports provided: switchMapTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchMapTo", function() { return switchMapTo; });
/* harmony import */ var _switchMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switchMap */ "TLy2");

function switchMapTo(innerObservable, resultSelector) {
    return resultSelector ? Object(_switchMap__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(() => innerObservable, resultSelector) : Object(_switchMap__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(() => innerObservable);
}
//# sourceMappingURL=switchMapTo.js.map

/***/ }),

/***/ "DG/E":
/*!***************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
  \***************************************************************************************************/
/*! exports provided: AsyncScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncScheduler", function() { return AsyncScheduler; });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ "7Alh");

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__["Scheduler"] {
    constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__["Scheduler"].now) {
        super(SchedulerAction, () => {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        });
        this.actions = [];
        this.active = false;
        this.scheduled = undefined;
    }
    schedule(work, delay = 0, state) {
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return super.schedule(work, delay, state);
        }
    }
    flush(action) {
        const { actions } = this;
        if (this.active) {
            actions.push(action);
            return;
        }
        let error;
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
}
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ "EWqr":
/*!************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
  \************************************************************************************************/
/*! exports provided: AsyncAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncAction", function() { return AsyncAction; });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ "d+O9");

class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__["Action"] {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    schedule(state, delay = 0) {
        if (this.closed) {
            return this;
        }
        this.state = state;
        const id = this.id;
        const scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    }
    execute(state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        const error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    }
    _execute(state, delay) {
        let errored = false;
        let errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    }
    _unsubscribe() {
        const id = this.id;
        const scheduler = this.scheduler;
        const actions = scheduler.actions;
        const index = actions.indexOf(this);
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
}
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ "Efrr":
/*!******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
  \******************************************************************************************/
/*! exports provided: asyncScheduler, async */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncScheduler", function() { return asyncScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "async", function() { return async; });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ "EWqr");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncScheduler */ "DG/E");


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"](_AsyncAction__WEBPACK_IMPORTED_MODULE_0__["AsyncAction"]);
const async = asyncScheduler;
//# sourceMappingURL=async.js.map

/***/ }),

/***/ "EqSx":
/*!****************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/max.js ***!
  \****************************************************************************************/
/*! exports provided: max */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reduce */ "0iRq");

function max(comparer) {
    const max = (typeof comparer === 'function')
        ? (x, y) => comparer(x, y) > 0 ? x : y
        : (x, y) => x > y ? x : y;
    return Object(_reduce__WEBPACK_IMPORTED_MODULE_0__["reduce"])(max);
}
//# sourceMappingURL=max.js.map

/***/ }),

/***/ "F/Dh":
/*!***********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/sampleTime.js ***!
  \***********************************************************************************************/
/*! exports provided: sampleTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sampleTime", function() { return sampleTime; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ "Efrr");


function sampleTime(period, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"]) {
    return (source) => source.lift(new SampleTimeOperator(period, scheduler));
}
class SampleTimeOperator {
    constructor(period, scheduler) {
        this.period = period;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new SampleTimeSubscriber(subscriber, this.period, this.scheduler));
    }
}
class SampleTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, period, scheduler) {
        super(destination);
        this.period = period;
        this.scheduler = scheduler;
        this.hasValue = false;
        this.add(scheduler.schedule(dispatchNotification, period, { subscriber: this, period }));
    }
    _next(value) {
        this.lastValue = value;
        this.hasValue = true;
    }
    notifyNext() {
        if (this.hasValue) {
            this.hasValue = false;
            this.destination.next(this.lastValue);
        }
    }
}
function dispatchNotification(state) {
    let { subscriber, period } = state;
    subscriber.notifyNext();
    this.schedule(state, period);
}
//# sourceMappingURL=sampleTime.js.map

/***/ }),

/***/ "FU6l":
/*!***************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/isArray.js ***!
  \***************************************************************************************/
/*! exports provided: isArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
const isArray = (() => Array.isArray || ((x) => x && typeof x.length === 'number'))();
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "GhgG":
/*!***********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/bufferWhen.js ***!
  \***********************************************************************************************/
/*! exports provided: bufferWhen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bufferWhen", function() { return bufferWhen; });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ "bwdy");
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../innerSubscribe */ "uCWR");


function bufferWhen(closingSelector) {
    return function (source) {
        return source.lift(new BufferWhenOperator(closingSelector));
    };
}
class BufferWhenOperator {
    constructor(closingSelector) {
        this.closingSelector = closingSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
    }
}
class BufferWhenSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_1__["SimpleOuterSubscriber"] {
    constructor(destination, closingSelector) {
        super(destination);
        this.closingSelector = closingSelector;
        this.subscribing = false;
        this.openBuffer();
    }
    _next(value) {
        this.buffer.push(value);
    }
    _complete() {
        const buffer = this.buffer;
        if (buffer) {
            this.destination.next(buffer);
        }
        super._complete();
    }
    _unsubscribe() {
        this.buffer = undefined;
        this.subscribing = false;
    }
    notifyNext() {
        this.openBuffer();
    }
    notifyComplete() {
        if (this.subscribing) {
            this.complete();
        }
        else {
            this.openBuffer();
        }
    }
    openBuffer() {
        let { closingSubscription } = this;
        if (closingSubscription) {
            this.remove(closingSubscription);
            closingSubscription.unsubscribe();
        }
        const buffer = this.buffer;
        if (this.buffer) {
            this.destination.next(buffer);
        }
        this.buffer = [];
        let closingNotifier;
        try {
            const { closingSelector } = this;
            closingNotifier = closingSelector();
        }
        catch (err) {
            return this.error(err);
        }
        closingSubscription = new _Subscription__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        this.closingSubscription = closingSubscription;
        this.add(closingSubscription);
        this.subscribing = true;
        closingSubscription.add(Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_1__["innerSubscribe"])(closingNotifier, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_1__["SimpleInnerSubscriber"](this)));
        this.subscribing = false;
    }
}
//# sourceMappingURL=bufferWhen.js.map

/***/ }),

/***/ "GoAz":
/*!******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/from.js ***!
  \******************************************************************************************/
/*! exports provided: from */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "IdLP");
/* harmony import */ var _util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeTo */ "1MAX");
/* harmony import */ var _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduled/scheduled */ "gMuT");



function from(input, scheduler) {
    if (!scheduler) {
        if (input instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
            return input;
        }
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(input));
    }
    else {
        return Object(_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_2__["scheduled"])(input, scheduler);
    }
}
//# sourceMappingURL=from.js.map

/***/ }),

/***/ "HFsJ":
/*!************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduler/QueueAction.js ***!
  \************************************************************************************************/
/*! exports provided: QueueAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueAction", function() { return QueueAction; });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ "EWqr");

class QueueAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__["AsyncAction"] {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    schedule(state, delay = 0) {
        if (delay > 0) {
            return super.schedule(state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    }
    execute(state, delay) {
        return (delay > 0 || this.closed) ?
            super.execute(state, delay) :
            this._execute(state, delay);
    }
    requestAsyncId(scheduler, id, delay = 0) {
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return super.requestAsyncId(scheduler, id, delay);
        }
        return scheduler.flush(this);
    }
}
//# sourceMappingURL=QueueAction.js.map

/***/ }),

/***/ "HM3f":
/*!***************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/combineLatest.js ***!
  \***************************************************************************************************/
/*! exports provided: combineLatest, CombineLatestOperator, CombineLatestSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineLatest", function() { return combineLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombineLatestOperator", function() { return CombineLatestOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombineLatestSubscriber", function() { return CombineLatestSubscriber; });
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isScheduler */ "gBlb");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "FU6l");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OuterSubscriber */ "pBDD");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/subscribeToResult */ "mW0F");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fromArray */ "ckkg");





const NONE = {};
function combineLatest(...observables) {
    let resultSelector = undefined;
    let scheduler = undefined;
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
class CombineLatestOperator {
    constructor(resultSelector) {
        this.resultSelector = resultSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
    }
}
class CombineLatestSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"] {
    constructor(destination, resultSelector) {
        super(destination);
        this.resultSelector = resultSelector;
        this.active = 0;
        this.values = [];
        this.observables = [];
    }
    _next(observable) {
        this.values.push(NONE);
        this.observables.push(observable);
    }
    _complete() {
        const observables = this.observables;
        const len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            this.active = len;
            this.toRespond = len;
            for (let i = 0; i < len; i++) {
                const observable = observables[i];
                this.add(Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__["subscribeToResult"])(this, observable, undefined, i));
            }
        }
    }
    notifyComplete(unused) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
    }
    notifyNext(_outerValue, innerValue, outerIndex) {
        const values = this.values;
        const oldVal = values[outerIndex];
        const toRespond = !this.toRespond
            ? 0
            : oldVal === NONE ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.resultSelector) {
                this._tryResultSelector(values);
            }
            else {
                this.destination.next(values.slice());
            }
        }
    }
    _tryResultSelector(values) {
        let result;
        try {
            result = this.resultSelector.apply(this, values);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    }
}
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ "HaSC":
/*!**********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/skipWhile.js ***!
  \**********************************************************************************************/
/*! exports provided: skipWhile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipWhile", function() { return skipWhile; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");

function skipWhile(predicate) {
    return (source) => source.lift(new SkipWhileOperator(predicate));
}
class SkipWhileOperator {
    constructor(predicate) {
        this.predicate = predicate;
    }
    call(subscriber, source) {
        return source.subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
    }
}
class SkipWhileSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, predicate) {
        super(destination);
        this.predicate = predicate;
        this.skipping = true;
        this.index = 0;
    }
    _next(value) {
        const destination = this.destination;
        if (this.skipping) {
            this.tryCallPredicate(value);
        }
        if (!this.skipping) {
            destination.next(value);
        }
    }
    tryCallPredicate(value) {
        try {
            const result = this.predicate(value, this.index++);
            this.skipping = Boolean(result);
        }
        catch (err) {
            this.destination.error(err);
        }
    }
}
//# sourceMappingURL=skipWhile.js.map

/***/ }),

/***/ "HcRv":
/*!**********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/skipUntil.js ***!
  \**********************************************************************************************/
/*! exports provided: skipUntil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipUntil", function() { return skipUntil; });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ "uCWR");

function skipUntil(notifier) {
    return (source) => source.lift(new SkipUntilOperator(notifier));
}
class SkipUntilOperator {
    constructor(notifier) {
        this.notifier = notifier;
    }
    call(destination, source) {
        return source.subscribe(new SkipUntilSubscriber(destination, this.notifier));
    }
}
class SkipUntilSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleOuterSubscriber"] {
    constructor(destination, notifier) {
        super(destination);
        this.hasValue = false;
        const innerSubscriber = new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleInnerSubscriber"](this);
        this.add(innerSubscriber);
        this.innerSubscription = innerSubscriber;
        const innerSubscription = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["innerSubscribe"])(notifier, innerSubscriber);
        if (innerSubscription !== innerSubscriber) {
            this.add(innerSubscription);
            this.innerSubscription = innerSubscription;
        }
    }
    _next(value) {
        if (this.hasValue) {
            super._next(value);
        }
    }
    notifyNext() {
        this.hasValue = true;
        if (this.innerSubscription) {
            this.innerSubscription.unsubscribe();
        }
    }
    notifyComplete() {
    }
}
//# sourceMappingURL=skipUntil.js.map

/***/ }),

/***/ "HgnN":
/*!*********************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/config.js ***!
  \*********************************************************************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
let _enable_super_gross_mode_that_will_cause_bad_things = false;
const config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            const error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "Hhmo":
/*!************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/materialize.js ***!
  \************************************************************************************************/
/*! exports provided: materialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "materialize", function() { return materialize; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Notification */ "ryP2");


function materialize() {
    return function materializeOperatorFunction(source) {
        return source.lift(new MaterializeOperator());
    };
}
class MaterializeOperator {
    call(subscriber, source) {
        return source.subscribe(new MaterializeSubscriber(subscriber));
    }
}
class MaterializeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination) {
        super(destination);
    }
    _next(value) {
        this.destination.next(_Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createNext(value));
    }
    _error(err) {
        const destination = this.destination;
        destination.next(_Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createError(err));
        destination.complete();
    }
    _complete() {
        const destination = this.destination;
        destination.next(_Notification__WEBPACK_IMPORTED_MODULE_1__["Notification"].createComplete());
        destination.complete();
    }
}
//# sourceMappingURL=materialize.js.map

/***/ }),

/***/ "Hk/K":
/*!***********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/child/handleSynAckMessageFactory.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ "Rj9D");
/* harmony import */ var _connectCallReceiver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../connectCallReceiver */ "JMyL");
/* harmony import */ var _connectCallSender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../connectCallSender */ "nPMJ");



/**
 * Handles a SYN-ACK handshake message.
 */
/* harmony default export */ __webpack_exports__["default"] = ((parentOrigin, methods, destructor, log) => {
    const { destroy, onDestroy } = destructor;
    return (event) => {
        let originQualifies = parentOrigin instanceof RegExp
            ? parentOrigin.test(event.origin)
            : parentOrigin === '*' || parentOrigin === event.origin;
        if (!originQualifies) {
            log(`Child: Handshake - Received SYN-ACK from origin ${event.origin} which did not match expected origin ${parentOrigin}`);
            return;
        }
        log('Child: Handshake - Received SYN-ACK, responding with ACK');
        // If event.origin is "null", the remote protocol is file: or data: and we
        // must post messages with "*" as targetOrigin when sending messages.
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage#Using_window.postMessage_in_extensions
        const originForSending = event.origin === 'null' ? '*' : event.origin;
        const ackMessage = {
            penpal: _enums__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Ack,
            methodNames: Object.keys(methods)
        };
        window.parent.postMessage(ackMessage, originForSending);
        const info = {
            localName: 'Child',
            local: window,
            remote: window.parent,
            originForSending,
            originForReceiving: event.origin
        };
        const destroyCallReceiver = Object(_connectCallReceiver__WEBPACK_IMPORTED_MODULE_1__["default"])(info, methods, log);
        onDestroy(destroyCallReceiver);
        const callSender = {};
        const destroyCallSender = Object(_connectCallSender__WEBPACK_IMPORTED_MODULE_2__["default"])(callSender, info, event.data.methodNames, destroy, log);
        onDestroy(destroyCallSender);
        return callSender;
    };
});


/***/ }),

/***/ "IF3+":
/*!*******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/buffer.js ***!
  \*******************************************************************************************/
/*! exports provided: buffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buffer", function() { return buffer; });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ "uCWR");

function buffer(closingNotifier) {
    return function bufferOperatorFunction(source) {
        return source.lift(new BufferOperator(closingNotifier));
    };
}
class BufferOperator {
    constructor(closingNotifier) {
        this.closingNotifier = closingNotifier;
    }
    call(subscriber, source) {
        return source.subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
    }
}
class BufferSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleOuterSubscriber"] {
    constructor(destination, closingNotifier) {
        super(destination);
        this.buffer = [];
        this.add(Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["innerSubscribe"])(closingNotifier, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleInnerSubscriber"](this)));
    }
    _next(value) {
        this.buffer.push(value);
    }
    notifyNext() {
        const buffer = this.buffer;
        this.buffer = [];
        this.destination.next(buffer);
    }
}
//# sourceMappingURL=buffer.js.map

/***/ }),

/***/ "IIln":
/*!**************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/parent/validateIframeHasSrcOrSrcDoc.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ "Rj9D");

/* harmony default export */ __webpack_exports__["default"] = ((iframe) => {
    if (!iframe.src && !iframe.srcdoc) {
        const error = new Error('Iframe must have src or srcdoc property defined.');
        error.code = _enums__WEBPACK_IMPORTED_MODULE_0__["ErrorCode"].NoIframeSrc;
        throw error;
    }
});


/***/ }),

/***/ "IJgj":
/*!******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/isFunction.js ***!
  \******************************************************************************************/
/*! exports provided: isFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
function isFunction(x) {
    return typeof x === 'function';
}
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "IdLP":
/*!*************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/Observable.js ***!
  \*************************************************************************************/
/*! exports provided: Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/canReportError */ "IoLb");
/* harmony import */ var _util_toSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/toSubscriber */ "qNSz");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/observable */ "qEfY");
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/pipe */ "Ti3e");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "HgnN");





class Observable {
    constructor(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    lift(operator) {
        const observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    }
    subscribe(observerOrNext, error, complete) {
        const { operator } = this;
        const sink = Object(_util_toSubscriber__WEBPACK_IMPORTED_MODULE_1__["toSubscriber"])(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
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
    _trySubscribe(sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_0__["canReportError"])(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    }
    forEach(next, promiseCtor) {
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor((resolve, reject) => {
            let subscription;
            subscription = this.subscribe((value) => {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    }
    _subscribe(subscriber) {
        const { source } = this;
        return source && source.subscribe(subscriber);
    }
    [_symbol_observable__WEBPACK_IMPORTED_MODULE_2__["observable"]]() {
        return this;
    }
    pipe(...operations) {
        if (operations.length === 0) {
            return this;
        }
        return Object(_util_pipe__WEBPACK_IMPORTED_MODULE_3__["pipeFromArray"])(operations)(this);
    }
    toPromise(promiseCtor) {
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor((resolve, reject) => {
            let value;
            this.subscribe((x) => value = x, (err) => reject(err), () => resolve(value));
        });
    }
}
Observable.create = (subscribe) => {
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
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "IeS+":
/*!*********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/throttle.js ***!
  \*********************************************************************************************/
/*! exports provided: defaultThrottleConfig, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultThrottleConfig", function() { return defaultThrottleConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ "uCWR");

const defaultThrottleConfig = {
    leading: true,
    trailing: false
};
function throttle(durationSelector, config = defaultThrottleConfig) {
    return (source) => source.lift(new ThrottleOperator(durationSelector, !!config.leading, !!config.trailing));
}
class ThrottleOperator {
    constructor(durationSelector, leading, trailing) {
        this.durationSelector = durationSelector;
        this.leading = leading;
        this.trailing = trailing;
    }
    call(subscriber, source) {
        return source.subscribe(new ThrottleSubscriber(subscriber, this.durationSelector, this.leading, this.trailing));
    }
}
class ThrottleSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleOuterSubscriber"] {
    constructor(destination, durationSelector, _leading, _trailing) {
        super(destination);
        this.destination = destination;
        this.durationSelector = durationSelector;
        this._leading = _leading;
        this._trailing = _trailing;
        this._hasValue = false;
    }
    _next(value) {
        this._hasValue = true;
        this._sendValue = value;
        if (!this._throttled) {
            if (this._leading) {
                this.send();
            }
            else {
                this.throttle(value);
            }
        }
    }
    send() {
        const { _hasValue, _sendValue } = this;
        if (_hasValue) {
            this.destination.next(_sendValue);
            this.throttle(_sendValue);
        }
        this._hasValue = false;
        this._sendValue = undefined;
    }
    throttle(value) {
        const duration = this.tryDurationSelector(value);
        if (!!duration) {
            this.add(this._throttled = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["innerSubscribe"])(duration, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleInnerSubscriber"](this)));
        }
    }
    tryDurationSelector(value) {
        try {
            return this.durationSelector(value);
        }
        catch (err) {
            this.destination.error(err);
            return null;
        }
    }
    throttlingDone() {
        const { _throttled, _trailing } = this;
        if (_throttled) {
            _throttled.unsubscribe();
        }
        this._throttled = undefined;
        if (_trailing) {
            this.send();
        }
    }
    notifyNext() {
        this.throttlingDone();
    }
    notifyComplete() {
        this.throttlingDone();
    }
}
//# sourceMappingURL=throttle.js.map

/***/ }),

/***/ "IoLb":
/*!**********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/canReportError.js ***!
  \**********************************************************************************************/
/*! exports provided: canReportError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canReportError", function() { return canReportError; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");

function canReportError(observer) {
    while (observer) {
        const { closed, destination, isStopped } = observer;
        if (closed || isStopped) {
            return false;
        }
        else if (destination && destination instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
//# sourceMappingURL=canReportError.js.map

/***/ }),

/***/ "J+dc":
/*!*****************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/take.js ***!
  \*****************************************************************************************/
/*! exports provided: take */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return take; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");
/* harmony import */ var _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ArgumentOutOfRangeError */ "PNff");
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/empty */ "6Oco");



function take(count) {
    return (source) => {
        if (count === 0) {
            return Object(_observable_empty__WEBPACK_IMPORTED_MODULE_2__["empty"])();
        }
        else {
            return source.lift(new TakeOperator(count));
        }
    };
}
class TakeOperator {
    constructor(total) {
        this.total = total;
        if (this.total < 0) {
            throw new _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_1__["ArgumentOutOfRangeError"];
        }
    }
    call(subscriber, source) {
        return source.subscribe(new TakeSubscriber(subscriber, this.total));
    }
}
class TakeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, total) {
        super(destination);
        this.total = total;
        this.count = 0;
    }
    _next(value) {
        const total = this.total;
        const count = ++this.count;
        if (count <= total) {
            this.destination.next(value);
            if (count === total) {
                this.destination.complete();
                this.unsubscribe();
            }
        }
    }
}
//# sourceMappingURL=take.js.map

/***/ }),

/***/ "JHA6":
/*!**********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/multicast.js ***!
  \**********************************************************************************************/
/*! exports provided: multicast, MulticastOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multicast", function() { return multicast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MulticastOperator", function() { return MulticastOperator; });
/* harmony import */ var _observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/ConnectableObservable */ "0pus");

function multicast(subjectOrSubjectFactory, selector) {
    return function multicastOperatorFunction(source) {
        let subjectFactory;
        if (typeof subjectOrSubjectFactory === 'function') {
            subjectFactory = subjectOrSubjectFactory;
        }
        else {
            subjectFactory = function subjectFactory() {
                return subjectOrSubjectFactory;
            };
        }
        if (typeof selector === 'function') {
            return source.lift(new MulticastOperator(subjectFactory, selector));
        }
        const connectable = Object.create(source, _observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_0__["connectableObservableDescriptor"]);
        connectable.source = source;
        connectable.subjectFactory = subjectFactory;
        return connectable;
    };
}
class MulticastOperator {
    constructor(subjectFactory, selector) {
        this.subjectFactory = subjectFactory;
        this.selector = selector;
    }
    call(subscriber, source) {
        const { selector } = this;
        const subject = this.subjectFactory();
        const subscription = selector(subject).subscribe(subscriber);
        subscription.add(source.subscribe(subject));
        return subscription;
    }
}
//# sourceMappingURL=multicast.js.map

/***/ }),

/***/ "JMyL":
/*!**********************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/connectCallReceiver.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errorSerialization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorSerialization */ "Uxnb");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "Rj9D");


/**
 * Listens for "call" messages coming from the remote, executes the corresponding method, and
 * responds with the return value.
 */
/* harmony default export */ __webpack_exports__["default"] = ((info, methods, log) => {
    const { localName, local, remote, originForSending, originForReceiving } = info;
    let destroyed = false;
    const handleMessageEvent = (event) => {
        if (event.source !== remote || event.data.penpal !== _enums__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Call) {
            return;
        }
        if (event.origin !== originForReceiving) {
            log(`${localName} received message from origin ${event.origin} which did not match expected origin ${originForReceiving}`);
            return;
        }
        const callMessage = event.data;
        const { methodName, args, id } = callMessage;
        log(`${localName}: Received ${methodName}() call`);
        const createPromiseHandler = (resolution) => {
            return (returnValue) => {
                log(`${localName}: Sending ${methodName}() reply`);
                if (destroyed) {
                    // It's possible to throw an error here, but it would need to be thrown asynchronously
                    // and would only be catchable using window.onerror. This is because the consumer
                    // is merely returning a value from their method and not calling any function
                    // that they could wrap in a try-catch. Even if the consumer were to catch the error,
                    // the value of doing so is questionable. Instead, we'll just log a message.
                    log(`${localName}: Unable to send ${methodName}() reply due to destroyed connection`);
                    return;
                }
                const message = {
                    penpal: _enums__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Reply,
                    id,
                    resolution,
                    returnValue
                };
                if (resolution === _enums__WEBPACK_IMPORTED_MODULE_1__["Resolution"].Rejected &&
                    returnValue instanceof Error) {
                    message.returnValue = Object(_errorSerialization__WEBPACK_IMPORTED_MODULE_0__["serializeError"])(returnValue);
                    message.returnValueIsError = true;
                }
                try {
                    remote.postMessage(message, originForSending);
                }
                catch (err) {
                    // If a consumer attempts to send an object that's not cloneable (e.g., window),
                    // we want to ensure the receiver's promise gets rejected.
                    if (err.name === _enums__WEBPACK_IMPORTED_MODULE_1__["NativeErrorName"].DataCloneError) {
                        const errorReplyMessage = {
                            penpal: _enums__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Reply,
                            id,
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
        new Promise(resolve => resolve(methods[methodName].apply(methods, args))).then(createPromiseHandler(_enums__WEBPACK_IMPORTED_MODULE_1__["Resolution"].Fulfilled), createPromiseHandler(_enums__WEBPACK_IMPORTED_MODULE_1__["Resolution"].Rejected));
    };
    local.addEventListener(_enums__WEBPACK_IMPORTED_MODULE_1__["NativeEventType"].Message, handleMessageEvent);
    return () => {
        destroyed = true;
        local.removeEventListener(_enums__WEBPACK_IMPORTED_MODULE_1__["NativeEventType"].Message, handleMessageEvent);
    };
});


/***/ }),

/***/ "JnPT":
/*!*******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/window.js ***!
  \*******************************************************************************************/
/*! exports provided: window */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return window; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ "ZTXN");
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../innerSubscribe */ "uCWR");


function window(windowBoundaries) {
    return function windowOperatorFunction(source) {
        return source.lift(new WindowOperator(windowBoundaries));
    };
}
class WindowOperator {
    constructor(windowBoundaries) {
        this.windowBoundaries = windowBoundaries;
    }
    call(subscriber, source) {
        const windowSubscriber = new WindowSubscriber(subscriber);
        const sourceSubscription = source.subscribe(windowSubscriber);
        if (!sourceSubscription.closed) {
            windowSubscriber.add(Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_1__["innerSubscribe"])(this.windowBoundaries, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_1__["SimpleInnerSubscriber"](windowSubscriber)));
        }
        return sourceSubscription;
    }
}
class WindowSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_1__["SimpleOuterSubscriber"] {
    constructor(destination) {
        super(destination);
        this.window = new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        destination.next(this.window);
    }
    notifyNext() {
        this.openWindow();
    }
    notifyError(error) {
        this._error(error);
    }
    notifyComplete() {
        this._complete();
    }
    _next(value) {
        this.window.next(value);
    }
    _error(err) {
        this.window.error(err);
        this.destination.error(err);
    }
    _complete() {
        this.window.complete();
        this.destination.complete();
    }
    _unsubscribe() {
        this.window = null;
    }
    openWindow() {
        const prevWindow = this.window;
        if (prevWindow) {
            prevWindow.complete();
        }
        const destination = this.destination;
        const newWindow = this.window = new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        destination.next(newWindow);
    }
}
//# sourceMappingURL=window.js.map

/***/ }),

/***/ "K3+B":
/*!*************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/windowToggle.js ***!
  \*************************************************************************************************/
/*! exports provided: windowToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowToggle", function() { return windowToggle; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ "ZTXN");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "bwdy");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OuterSubscriber */ "pBDD");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/subscribeToResult */ "mW0F");




function windowToggle(openings, closingSelector) {
    return (source) => source.lift(new WindowToggleOperator(openings, closingSelector));
}
class WindowToggleOperator {
    constructor(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector));
    }
}
class WindowToggleSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"] {
    constructor(destination, openings, closingSelector) {
        super(destination);
        this.openings = openings;
        this.closingSelector = closingSelector;
        this.contexts = [];
        this.add(this.openSubscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__["subscribeToResult"])(this, openings, openings));
    }
    _next(value) {
        const { contexts } = this;
        if (contexts) {
            const len = contexts.length;
            for (let i = 0; i < len; i++) {
                contexts[i].window.next(value);
            }
        }
    }
    _error(err) {
        const { contexts } = this;
        this.contexts = null;
        if (contexts) {
            const len = contexts.length;
            let index = -1;
            while (++index < len) {
                const context = contexts[index];
                context.window.error(err);
                context.subscription.unsubscribe();
            }
        }
        super._error(err);
    }
    _complete() {
        const { contexts } = this;
        this.contexts = null;
        if (contexts) {
            const len = contexts.length;
            let index = -1;
            while (++index < len) {
                const context = contexts[index];
                context.window.complete();
                context.subscription.unsubscribe();
            }
        }
        super._complete();
    }
    _unsubscribe() {
        const { contexts } = this;
        this.contexts = null;
        if (contexts) {
            const len = contexts.length;
            let index = -1;
            while (++index < len) {
                const context = contexts[index];
                context.window.unsubscribe();
                context.subscription.unsubscribe();
            }
        }
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (outerValue === this.openings) {
            let closingNotifier;
            try {
                const { closingSelector } = this;
                closingNotifier = closingSelector(innerValue);
            }
            catch (e) {
                return this.error(e);
            }
            const window = new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
            const subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
            const context = { window, subscription };
            this.contexts.push(context);
            const innerSubscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__["subscribeToResult"])(this, closingNotifier, context);
            if (innerSubscription.closed) {
                this.closeWindow(this.contexts.length - 1);
            }
            else {
                innerSubscription.context = context;
                subscription.add(innerSubscription);
            }
            this.destination.next(window);
        }
        else {
            this.closeWindow(this.contexts.indexOf(outerValue));
        }
    }
    notifyError(err) {
        this.error(err);
    }
    notifyComplete(inner) {
        if (inner !== this.openSubscription) {
            this.closeWindow(this.contexts.indexOf(inner.context));
        }
    }
    closeWindow(index) {
        if (index === -1) {
            return;
        }
        const { contexts } = this;
        const context = contexts[index];
        const { window, subscription } = context;
        contexts.splice(index, 1);
        window.complete();
        subscription.unsubscribe();
    }
}
//# sourceMappingURL=windowToggle.js.map

/***/ }),

/***/ "KRZI":
/*!*****************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/isNumeric.js ***!
  \*****************************************************************************************/
/*! exports provided: isNumeric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return isNumeric; });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ "FU6l");

function isNumeric(val) {
    return !Object(_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(val) && (val - parseFloat(val) + 1) >= 0;
}
//# sourceMappingURL=isNumeric.js.map

/***/ }),

/***/ "L7US":
/*!*****************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/Immediate.js ***!
  \*****************************************************************************************/
/*! exports provided: Immediate, TestTools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Immediate", function() { return Immediate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestTools", function() { return TestTools; });
let nextHandle = 1;
const RESOLVED = (() => Promise.resolve())();
const activeHandles = {};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
const Immediate = {
    setImmediate(cb) {
        const handle = nextHandle++;
        activeHandles[handle] = true;
        RESOLVED.then(() => findAndClearHandle(handle) && cb());
        return handle;
    },
    clearImmediate(handle) {
        findAndClearHandle(handle);
    },
};
const TestTools = {
    pending() {
        return Object.keys(activeHandles).length;
    }
};
//# sourceMappingURL=Immediate.js.map

/***/ }),

/***/ "Lrfq":
/*!**************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/publishReplay.js ***!
  \**************************************************************************************************/
/*! exports provided: publishReplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publishReplay", function() { return publishReplay; });
/* harmony import */ var _ReplaySubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ReplaySubject */ "QQZH");
/* harmony import */ var _multicast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multicast */ "JHA6");


function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
    if (selectorOrScheduler && typeof selectorOrScheduler !== 'function') {
        scheduler = selectorOrScheduler;
    }
    const selector = typeof selectorOrScheduler === 'function' ? selectorOrScheduler : undefined;
    const subject = new _ReplaySubject__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](bufferSize, windowTime, scheduler);
    return (source) => Object(_multicast__WEBPACK_IMPORTED_MODULE_1__["multicast"])(() => subject, selector)(source);
}
//# sourceMappingURL=publishReplay.js.map

/***/ }),

/***/ "LyCu":
/*!*********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/parent/handleAckMessageFactory.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _connectCallReceiver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../connectCallReceiver */ "JMyL");
/* harmony import */ var _connectCallSender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../connectCallSender */ "nPMJ");


/**
 * Handles an ACK handshake message.
 */
/* harmony default export */ __webpack_exports__["default"] = ((methods, childOrigin, originForSending, destructor, log) => {
    const { destroy, onDestroy } = destructor;
    let destroyCallReceiver;
    let receiverMethodNames;
    // We resolve the promise with the call sender. If the child reconnects
    // (for example, after refreshing or navigating to another page that
    // uses Penpal, we'll update the call sender with methods that match the
    // latest provided by the child.
    const callSender = {};
    return (event) => {
        if (event.origin !== childOrigin) {
            log(`Parent: Handshake - Received ACK message from origin ${event.origin} which did not match expected origin ${childOrigin}`);
            return;
        }
        log('Parent: Handshake - Received ACK');
        const info = {
            localName: 'Parent',
            local: window,
            remote: event.source,
            originForSending: originForSending,
            originForReceiving: childOrigin
        };
        // If the child reconnected, we need to destroy the prior call receiver
        // before setting up a new one.
        if (destroyCallReceiver) {
            destroyCallReceiver();
        }
        destroyCallReceiver = Object(_connectCallReceiver__WEBPACK_IMPORTED_MODULE_0__["default"])(info, methods, log);
        onDestroy(destroyCallReceiver);
        // If the child reconnected, we need to remove the methods from the
        // previous call receiver off the sender.
        if (receiverMethodNames) {
            receiverMethodNames.forEach(receiverMethodName => {
                delete callSender[receiverMethodName];
            });
        }
        receiverMethodNames = event.data.methodNames;
        const destroyCallSender = Object(_connectCallSender__WEBPACK_IMPORTED_MODULE_1__["default"])(callSender, info, receiverMethodNames, destroy, log);
        onDestroy(destroyCallSender);
        return callSender;
    };
});


/***/ }),

/***/ "MiDb":
/*!*******************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/ObjectUnsubscribedError.js ***!
  \*******************************************************************************************************/
/*! exports provided: ObjectUnsubscribedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function() { return ObjectUnsubscribedError; });
const ObjectUnsubscribedErrorImpl = (() => {
    function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
    }
    ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
    return ObjectUnsubscribedErrorImpl;
})();
const ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),

/***/ "Ohay":
/*!*********************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/distinctUntilChanged.js ***!
  \*********************************************************************************************************/
/*! exports provided: distinctUntilChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinctUntilChanged", function() { return distinctUntilChanged; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");

function distinctUntilChanged(compare, keySelector) {
    return (source) => source.lift(new DistinctUntilChangedOperator(compare, keySelector));
}
class DistinctUntilChangedOperator {
    constructor(compare, keySelector) {
        this.compare = compare;
        this.keySelector = keySelector;
    }
    call(subscriber, source) {
        return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
    }
}
class DistinctUntilChangedSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, compare, keySelector) {
        super(destination);
        this.keySelector = keySelector;
        this.hasKey = false;
        if (typeof compare === 'function') {
            this.compare = compare;
        }
    }
    compare(x, y) {
        return x === y;
    }
    _next(value) {
        let key;
        try {
            const { keySelector } = this;
            key = keySelector ? keySelector(value) : value;
        }
        catch (err) {
            return this.destination.error(err);
        }
        let result = false;
        if (this.hasKey) {
            try {
                const { compare } = this;
                result = compare(this.key, key);
            }
            catch (err) {
                return this.destination.error(err);
            }
        }
        else {
            this.hasKey = true;
        }
        if (!result) {
            this.key = key;
            this.destination.next(value);
        }
    }
}
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),

/***/ "On4S":
/*!******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/isIterable.js ***!
  \******************************************************************************************/
/*! exports provided: isIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/iterator */ "sWLk");

function isIterable(input) {
    return input && typeof input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__["iterator"]] === 'function';
}
//# sourceMappingURL=isIterable.js.map

/***/ }),

/***/ "PKqw":
/*!***********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/repeatWhen.js ***!
  \***********************************************************************************************/
/*! exports provided: repeatWhen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeatWhen", function() { return repeatWhen; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ "ZTXN");
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../innerSubscribe */ "uCWR");


function repeatWhen(notifier) {
    return (source) => source.lift(new RepeatWhenOperator(notifier));
}
class RepeatWhenOperator {
    constructor(notifier) {
        this.notifier = notifier;
    }
    call(subscriber, source) {
        return source.subscribe(new RepeatWhenSubscriber(subscriber, this.notifier, source));
    }
}
class RepeatWhenSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_1__["SimpleOuterSubscriber"] {
    constructor(destination, notifier, source) {
        super(destination);
        this.notifier = notifier;
        this.source = source;
        this.sourceIsBeingSubscribedTo = true;
    }
    notifyNext() {
        this.sourceIsBeingSubscribedTo = true;
        this.source.subscribe(this);
    }
    notifyComplete() {
        if (this.sourceIsBeingSubscribedTo === false) {
            return super.complete();
        }
    }
    complete() {
        this.sourceIsBeingSubscribedTo = false;
        if (!this.isStopped) {
            if (!this.retries) {
                this.subscribeToRetries();
            }
            if (!this.retriesSubscription || this.retriesSubscription.closed) {
                return super.complete();
            }
            this._unsubscribeAndRecycle();
            this.notifications.next(undefined);
        }
    }
    _unsubscribe() {
        const { notifications, retriesSubscription } = this;
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
    _unsubscribeAndRecycle() {
        const { _unsubscribe } = this;
        this._unsubscribe = null;
        super._unsubscribeAndRecycle();
        this._unsubscribe = _unsubscribe;
        return this;
    }
    subscribeToRetries() {
        this.notifications = new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        let retries;
        try {
            const { notifier } = this;
            retries = notifier(this.notifications);
        }
        catch (e) {
            return super.complete();
        }
        this.retries = retries;
        this.retriesSubscription = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_1__["innerSubscribe"])(retries, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_1__["SimpleInnerSubscriber"](this));
    }
}
//# sourceMappingURL=repeatWhen.js.map

/***/ }),

/***/ "PNff":
/*!*******************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/ArgumentOutOfRangeError.js ***!
  \*******************************************************************************************************/
/*! exports provided: ArgumentOutOfRangeError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function() { return ArgumentOutOfRangeError; });
const ArgumentOutOfRangeErrorImpl = (() => {
    function ArgumentOutOfRangeErrorImpl() {
        Error.call(this);
        this.message = 'argument out of range';
        this.name = 'ArgumentOutOfRangeError';
        return this;
    }
    ArgumentOutOfRangeErrorImpl.prototype = Object.create(Error.prototype);
    return ArgumentOutOfRangeErrorImpl;
})();
const ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ }),

/***/ "PVB3":
/*!*************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/bufferToggle.js ***!
  \*************************************************************************************************/
/*! exports provided: bufferToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bufferToggle", function() { return bufferToggle; });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ "bwdy");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToResult */ "mW0F");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OuterSubscriber */ "pBDD");



function bufferToggle(openings, closingSelector) {
    return function bufferToggleOperatorFunction(source) {
        return source.lift(new BufferToggleOperator(openings, closingSelector));
    };
}
class BufferToggleOperator {
    constructor(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
    }
}
class BufferToggleSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"] {
    constructor(destination, openings, closingSelector) {
        super(destination);
        this.closingSelector = closingSelector;
        this.contexts = [];
        this.add(Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__["subscribeToResult"])(this, openings));
    }
    _next(value) {
        const contexts = this.contexts;
        const len = contexts.length;
        for (let i = 0; i < len; i++) {
            contexts[i].buffer.push(value);
        }
    }
    _error(err) {
        const contexts = this.contexts;
        while (contexts.length > 0) {
            const context = contexts.shift();
            context.subscription.unsubscribe();
            context.buffer = null;
            context.subscription = null;
        }
        this.contexts = null;
        super._error(err);
    }
    _complete() {
        const contexts = this.contexts;
        while (contexts.length > 0) {
            const context = contexts.shift();
            this.destination.next(context.buffer);
            context.subscription.unsubscribe();
            context.buffer = null;
            context.subscription = null;
        }
        this.contexts = null;
        super._complete();
    }
    notifyNext(outerValue, innerValue) {
        outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
    }
    notifyComplete(innerSub) {
        this.closeBuffer(innerSub.context);
    }
    openBuffer(value) {
        try {
            const closingSelector = this.closingSelector;
            const closingNotifier = closingSelector.call(this, value);
            if (closingNotifier) {
                this.trySubscribe(closingNotifier);
            }
        }
        catch (err) {
            this._error(err);
        }
    }
    closeBuffer(context) {
        const contexts = this.contexts;
        if (contexts && context) {
            const { buffer, subscription } = context;
            this.destination.next(buffer);
            contexts.splice(contexts.indexOf(context), 1);
            this.remove(subscription);
            subscription.unsubscribe();
        }
    }
    trySubscribe(closingNotifier) {
        const contexts = this.contexts;
        const buffer = [];
        const subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        const context = { buffer, subscription };
        contexts.push(context);
        const innerSubscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__["subscribeToResult"])(this, closingNotifier, context);
        if (!innerSubscription || innerSubscription.closed) {
            this.closeBuffer(context);
        }
        else {
            innerSubscription.context = context;
            this.add(innerSubscription);
            subscription.add(innerSubscription);
        }
    }
}
//# sourceMappingURL=bufferToggle.js.map

/***/ }),

/***/ "PmMP":
/*!****************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduled/schedulePromise.js ***!
  \****************************************************************************************************/
/*! exports provided: schedulePromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schedulePromise", function() { return schedulePromise; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "IdLP");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "bwdy");


function schedulePromise(input, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        const sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        sub.add(scheduler.schedule(() => input.then(value => {
            sub.add(scheduler.schedule(() => {
                subscriber.next(value);
                sub.add(scheduler.schedule(() => subscriber.complete()));
            }));
        }, err => {
            sub.add(scheduler.schedule(() => subscriber.error(err)));
        })));
        return sub;
    });
}
//# sourceMappingURL=schedulePromise.js.map

/***/ }),

/***/ "QQZH":
/*!****************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/ReplaySubject.js ***!
  \****************************************************************************************/
/*! exports provided: ReplaySubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaySubject", function() { return ReplaySubject; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "ZTXN");
/* harmony import */ var _scheduler_queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduler/queue */ "kSHZ");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscription */ "bwdy");
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operators/observeOn */ "A2S1");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "MiDb");
/* harmony import */ var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubjectSubscription */ "yTkW");






class ReplaySubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"] {
    constructor(bufferSize = Number.POSITIVE_INFINITY, windowTime = Number.POSITIVE_INFINITY, scheduler) {
        super();
        this.scheduler = scheduler;
        this._events = [];
        this._infiniteTimeWindow = false;
        this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        this._windowTime = windowTime < 1 ? 1 : windowTime;
        if (windowTime === Number.POSITIVE_INFINITY) {
            this._infiniteTimeWindow = true;
            this.next = this.nextInfiniteTimeWindow;
        }
        else {
            this.next = this.nextTimeWindow;
        }
    }
    nextInfiniteTimeWindow(value) {
        if (!this.isStopped) {
            const _events = this._events;
            _events.push(value);
            if (_events.length > this._bufferSize) {
                _events.shift();
            }
        }
        super.next(value);
    }
    nextTimeWindow(value) {
        if (!this.isStopped) {
            this._events.push(new ReplayEvent(this._getNow(), value));
            this._trimBufferThenGetEvents();
        }
        super.next(value);
    }
    _subscribe(subscriber) {
        const _infiniteTimeWindow = this._infiniteTimeWindow;
        const _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
        const scheduler = this.scheduler;
        const len = _events.length;
        let subscription;
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        else if (this.isStopped || this.hasError) {
            subscription = _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        }
        else {
            this.observers.push(subscriber);
            subscription = new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__["SubjectSubscription"](this, subscriber);
        }
        if (scheduler) {
            subscriber.add(subscriber = new _operators_observeOn__WEBPACK_IMPORTED_MODULE_3__["ObserveOnSubscriber"](subscriber, scheduler));
        }
        if (_infiniteTimeWindow) {
            for (let i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i]);
            }
        }
        else {
            for (let i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i].value);
            }
        }
        if (this.hasError) {
            subscriber.error(this.thrownError);
        }
        else if (this.isStopped) {
            subscriber.complete();
        }
        return subscription;
    }
    _getNow() {
        return (this.scheduler || _scheduler_queue__WEBPACK_IMPORTED_MODULE_1__["queue"]).now();
    }
    _trimBufferThenGetEvents() {
        const now = this._getNow();
        const _bufferSize = this._bufferSize;
        const _windowTime = this._windowTime;
        const _events = this._events;
        const eventsCount = _events.length;
        let spliceCount = 0;
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
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
}
class ReplayEvent {
    constructor(time, value) {
        this.time = time;
        this.value = value;
    }
}
//# sourceMappingURL=ReplaySubject.js.map

/***/ }),

/***/ "ROBh":
/*!****************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/of.js ***!
  \****************************************************************************************/
/*! exports provided: of */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "of", function() { return of; });
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isScheduler */ "gBlb");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fromArray */ "ckkg");
/* harmony import */ var _scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduled/scheduleArray */ "czMQ");



function of(...args) {
    let scheduler = args[args.length - 1];
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__["isScheduler"])(scheduler)) {
        args.pop();
        return Object(_scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__["scheduleArray"])(args, scheduler);
    }
    else {
        return Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(args);
    }
}
//# sourceMappingURL=of.js.map

/***/ }),

/***/ "Rj9D":
/*!********************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/enums.js ***!
  \********************************************************************/
/*! exports provided: MessageType, Resolution, ErrorCode, NativeErrorName, NativeEventType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageType", function() { return MessageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resolution", function() { return Resolution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCode", function() { return ErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeErrorName", function() { return NativeErrorName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeEventType", function() { return NativeEventType; });
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


/***/ }),

/***/ "S5ru":
/*!*************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/generateId.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let id = 0;
/**
 * @return {number} A unique ID (not universally unique)
 */
/* harmony default export */ __webpack_exports__["default"] = (() => ++id);


/***/ }),

/***/ "Sp61":
/*!****************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/publishBehavior.js ***!
  \****************************************************************************************************/
/*! exports provided: publishBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publishBehavior", function() { return publishBehavior; });
/* harmony import */ var _BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BehaviorSubject */ "C05f");
/* harmony import */ var _multicast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multicast */ "JHA6");


function publishBehavior(value) {
    return (source) => Object(_multicast__WEBPACK_IMPORTED_MODULE_1__["multicast"])(new _BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](value))(source);
}
//# sourceMappingURL=publishBehavior.js.map

/***/ }),

/***/ "SrNW":
/*!*****************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/scan.js ***!
  \*****************************************************************************************/
/*! exports provided: scan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return scan; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");

function scan(accumulator, seed) {
    let hasSeed = false;
    if (arguments.length >= 2) {
        hasSeed = true;
    }
    return function scanOperatorFunction(source) {
        return source.lift(new ScanOperator(accumulator, seed, hasSeed));
    };
}
class ScanOperator {
    constructor(accumulator, seed, hasSeed = false) {
        this.accumulator = accumulator;
        this.seed = seed;
        this.hasSeed = hasSeed;
    }
    call(subscriber, source) {
        return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
    }
}
class ScanSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, accumulator, _seed, hasSeed) {
        super(destination);
        this.accumulator = accumulator;
        this._seed = _seed;
        this.hasSeed = hasSeed;
        this.index = 0;
    }
    get seed() {
        return this._seed;
    }
    set seed(value) {
        this.hasSeed = true;
        this._seed = value;
    }
    _next(value) {
        if (!this.hasSeed) {
            this.seed = value;
            this.destination.next(value);
        }
        else {
            return this._tryNext(value);
        }
    }
    _tryNext(value) {
        const index = this.index++;
        let result;
        try {
            result = this.accumulator(this.seed, value, index);
        }
        catch (err) {
            this.destination.error(err);
        }
        this.seed = result;
        this.destination.next(result);
    }
}
//# sourceMappingURL=scan.js.map

/***/ }),

/***/ "TLy2":
/*!**********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/switchMap.js ***!
  \**********************************************************************************************/
/*! exports provided: switchMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchMap", function() { return switchMap; });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "YtkY");
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/from */ "GoAz");
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../innerSubscribe */ "uCWR");



function switchMap(project, resultSelector) {
    if (typeof resultSelector === 'function') {
        return (source) => source.pipe(switchMap((a, i) => Object(_observable_from__WEBPACK_IMPORTED_MODULE_1__["from"])(project(a, i)).pipe(Object(_map__WEBPACK_IMPORTED_MODULE_0__["map"])((b, ii) => resultSelector(a, b, i, ii)))));
    }
    return (source) => source.lift(new SwitchMapOperator(project));
}
class SwitchMapOperator {
    constructor(project) {
        this.project = project;
    }
    call(subscriber, source) {
        return source.subscribe(new SwitchMapSubscriber(subscriber, this.project));
    }
}
class SwitchMapSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["SimpleOuterSubscriber"] {
    constructor(destination, project) {
        super(destination);
        this.project = project;
        this.index = 0;
    }
    _next(value) {
        let result;
        const index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (error) {
            this.destination.error(error);
            return;
        }
        this._innerSub(result);
    }
    _innerSub(result) {
        const innerSubscription = this.innerSubscription;
        if (innerSubscription) {
            innerSubscription.unsubscribe();
        }
        const innerSubscriber = new _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["SimpleInnerSubscriber"](this);
        const destination = this.destination;
        destination.add(innerSubscriber);
        this.innerSubscription = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["innerSubscribe"])(result, innerSubscriber);
        if (this.innerSubscription !== innerSubscriber) {
            destination.add(this.innerSubscription);
        }
    }
    _complete() {
        const { innerSubscription } = this;
        if (!innerSubscription || innerSubscription.closed) {
            super._complete();
        }
        this.unsubscribe();
    }
    _unsubscribe() {
        this.innerSubscription = undefined;
    }
    notifyComplete() {
        this.innerSubscription = undefined;
        if (this.isStopped) {
            super._complete();
        }
    }
    notifyNext(innerValue) {
        this.destination.next(innerValue);
    }
}
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "TaSY":
/*!*****************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/last.js ***!
  \*****************************************************************************************/
/*! exports provided: last */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/EmptyError */ "VxHp");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ "xVbo");
/* harmony import */ var _takeLast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./takeLast */ "A8kH");
/* harmony import */ var _throwIfEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./throwIfEmpty */ "fbWu");
/* harmony import */ var _defaultIfEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaultIfEmpty */ "iqFP");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/identity */ "5E2i");






function last(predicate, defaultValue) {
    const hasDefaultValue = arguments.length >= 2;
    return (source) => source.pipe(predicate ? Object(_filter__WEBPACK_IMPORTED_MODULE_1__["filter"])((v, i) => predicate(v, i, source)) : _util_identity__WEBPACK_IMPORTED_MODULE_5__["identity"], Object(_takeLast__WEBPACK_IMPORTED_MODULE_2__["takeLast"])(1), hasDefaultValue ? Object(_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_4__["defaultIfEmpty"])(defaultValue) : Object(_throwIfEmpty__WEBPACK_IMPORTED_MODULE_3__["throwIfEmpty"])(() => new _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__["EmptyError"]()));
}
//# sourceMappingURL=last.js.map

/***/ }),

/***/ "Ti3e":
/*!************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/pipe.js ***!
  \************************************************************************************/
/*! exports provided: pipe, pipeFromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipeFromArray", function() { return pipeFromArray; });
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ "5E2i");

function pipe(...fns) {
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
        return fns.reduce((prev, fn) => fn(prev), input);
    };
}
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "UWon":
/*!**********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/delayWhen.js ***!
  \**********************************************************************************************/
/*! exports provided: delayWhen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delayWhen", function() { return delayWhen; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Observable */ "IdLP");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OuterSubscriber */ "pBDD");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/subscribeToResult */ "mW0F");




function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
        return (source) => new SubscriptionDelayObservable(source, subscriptionDelay)
            .lift(new DelayWhenOperator(delayDurationSelector));
    }
    return (source) => source.lift(new DelayWhenOperator(delayDurationSelector));
}
class DelayWhenOperator {
    constructor(delayDurationSelector) {
        this.delayDurationSelector = delayDurationSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
    }
}
class DelayWhenSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"] {
    constructor(destination, delayDurationSelector) {
        super(destination);
        this.delayDurationSelector = delayDurationSelector;
        this.completed = false;
        this.delayNotifierSubscriptions = [];
        this.index = 0;
    }
    notifyNext(outerValue, _innerValue, _outerIndex, _innerIndex, innerSub) {
        this.destination.next(outerValue);
        this.removeSubscription(innerSub);
        this.tryComplete();
    }
    notifyError(error, innerSub) {
        this._error(error);
    }
    notifyComplete(innerSub) {
        const value = this.removeSubscription(innerSub);
        if (value) {
            this.destination.next(value);
        }
        this.tryComplete();
    }
    _next(value) {
        const index = this.index++;
        try {
            const delayNotifier = this.delayDurationSelector(value, index);
            if (delayNotifier) {
                this.tryDelay(delayNotifier, value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    }
    _complete() {
        this.completed = true;
        this.tryComplete();
        this.unsubscribe();
    }
    removeSubscription(subscription) {
        subscription.unsubscribe();
        const subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
        if (subscriptionIdx !== -1) {
            this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
        }
        return subscription.outerValue;
    }
    tryDelay(delayNotifier, value) {
        const notifierSubscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_3__["subscribeToResult"])(this, delayNotifier, value);
        if (notifierSubscription && !notifierSubscription.closed) {
            const destination = this.destination;
            destination.add(notifierSubscription);
            this.delayNotifierSubscriptions.push(notifierSubscription);
        }
    }
    tryComplete() {
        if (this.completed && this.delayNotifierSubscriptions.length === 0) {
            this.destination.complete();
        }
    }
}
class SubscriptionDelayObservable extends _Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"] {
    constructor(source, subscriptionDelay) {
        super();
        this.source = source;
        this.subscriptionDelay = subscriptionDelay;
    }
    _subscribe(subscriber) {
        this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
    }
}
class SubscriptionDelaySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(parent, source) {
        super();
        this.parent = parent;
        this.source = source;
        this.sourceSubscribed = false;
    }
    _next(unused) {
        this.subscribeToSource();
    }
    _error(err) {
        this.unsubscribe();
        this.parent.error(err);
    }
    _complete() {
        this.unsubscribe();
        this.subscribeToSource();
    }
    subscribeToSource() {
        if (!this.sourceSubscribed) {
            this.sourceSubscribed = true;
            this.unsubscribe();
            this.source.subscribe(this.parent);
        }
    }
}
//# sourceMappingURL=delayWhen.js.map

/***/ }),

/***/ "Uxnb":
/*!*********************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/errorSerialization.js ***!
  \*********************************************************************************/
/*! exports provided: serializeError, deserializeError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeError", function() { return serializeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeError", function() { return deserializeError; });
/**
 * Converts an error object into a plain object.
 */
const serializeError = ({ name, message, stack }) => ({
    name,
    message,
    stack
});
/**
 * Converts a plain object into an error object.
 */
const deserializeError = (obj) => {
    const deserializedError = new Error();
    // @ts-ignore
    Object.keys(obj).forEach(key => (deserializedError[key] = obj[key]));
    return deserializedError;
};


/***/ }),

/***/ "Vgaj":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Vgaj__;

/***/ }),

/***/ "VxHp":
/*!******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/EmptyError.js ***!
  \******************************************************************************************/
/*! exports provided: EmptyError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyError", function() { return EmptyError; });
const EmptyErrorImpl = (() => {
    function EmptyErrorImpl() {
        Error.call(this);
        this.message = 'no elements in sequence';
        this.name = 'EmptyError';
        return this;
    }
    EmptyErrorImpl.prototype = Object.create(Error.prototype);
    return EmptyErrorImpl;
})();
const EmptyError = EmptyErrorImpl;
//# sourceMappingURL=EmptyError.js.map

/***/ }),

/***/ "Wg7D":
/*!*************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/throttleTime.js ***!
  \*************************************************************************************************/
/*! exports provided: throttleTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttleTime", function() { return throttleTime; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ "Efrr");
/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./throttle */ "IeS+");



function throttleTime(duration, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"], config = _throttle__WEBPACK_IMPORTED_MODULE_2__["defaultThrottleConfig"]) {
    return (source) => source.lift(new ThrottleTimeOperator(duration, scheduler, config.leading, config.trailing));
}
class ThrottleTimeOperator {
    constructor(duration, scheduler, leading, trailing) {
        this.duration = duration;
        this.scheduler = scheduler;
        this.leading = leading;
        this.trailing = trailing;
    }
    call(subscriber, source) {
        return source.subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
    }
}
class ThrottleTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, duration, scheduler, leading, trailing) {
        super(destination);
        this.duration = duration;
        this.scheduler = scheduler;
        this.leading = leading;
        this.trailing = trailing;
        this._hasTrailingValue = false;
        this._trailingValue = null;
    }
    _next(value) {
        if (this.throttled) {
            if (this.trailing) {
                this._trailingValue = value;
                this._hasTrailingValue = true;
            }
        }
        else {
            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, { subscriber: this }));
            if (this.leading) {
                this.destination.next(value);
            }
            else if (this.trailing) {
                this._trailingValue = value;
                this._hasTrailingValue = true;
            }
        }
    }
    _complete() {
        if (this._hasTrailingValue) {
            this.destination.next(this._trailingValue);
            this.destination.complete();
        }
        else {
            this.destination.complete();
        }
    }
    clearThrottle() {
        const throttled = this.throttled;
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
}
function dispatchNext(arg) {
    const { subscriber } = arg;
    subscriber.clearThrottle();
}
//# sourceMappingURL=throttleTime.js.map

/***/ }),

/***/ "X0qr":
/*!****************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/isObject.js ***!
  \****************************************************************************************/
/*! exports provided: isObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
function isObject(x) {
    return x !== null && typeof x === 'object';
}
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "Xm0Y":
/*!***********************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/not.js ***!
  \***********************************************************************************/
/*! exports provided: not */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
function not(pred, thisArg) {
    function notPred() {
        return !(notPred.pred.apply(notPred.thisArg, arguments));
    }
    notPred.pred = pred;
    notPred.thisArg = thisArg;
    return notPred;
}
//# sourceMappingURL=not.js.map

/***/ }),

/***/ "Yj6K":
/*!************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/publishLast.js ***!
  \************************************************************************************************/
/*! exports provided: publishLast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publishLast", function() { return publishLast; });
/* harmony import */ var _AsyncSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AsyncSubject */ "m0VI");
/* harmony import */ var _multicast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multicast */ "JHA6");


function publishLast() {
    return (source) => Object(_multicast__WEBPACK_IMPORTED_MODULE_1__["multicast"])(new _AsyncSubject__WEBPACK_IMPORTED_MODULE_0__["AsyncSubject"]())(source);
}
//# sourceMappingURL=publishLast.js.map

/***/ }),

/***/ "YtkY":
/*!****************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/map.js ***!
  \****************************************************************************************/
/*! exports provided: map, MapOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOperator", function() { return MapOperator; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");

function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
class MapOperator {
    constructor(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    call(subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    }
}
class MapSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, project, thisArg) {
        super(destination);
        this.project = project;
        this.count = 0;
        this.thisArg = thisArg || this;
    }
    _next(value) {
        let result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    }
}
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "ZNOZ":
/*!**************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduler/AsapScheduler.js ***!
  \**************************************************************************************************/
/*! exports provided: AsapScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsapScheduler", function() { return AsapScheduler; });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ "DG/E");

class AsapScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__["AsyncScheduler"] {
    flush(action) {
        this.active = true;
        this.scheduled = undefined;
        const { actions } = this;
        let error;
        let index = -1;
        let count = actions.length;
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
}
//# sourceMappingURL=AsapScheduler.js.map

/***/ }),

/***/ "ZTXN":
/*!**********************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/Subject.js ***!
  \**********************************************************************************/
/*! exports provided: SubjectSubscriber, Subject, AnonymousSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSubscriber", function() { return SubjectSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return Subject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnonymousSubject", function() { return AnonymousSubject; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable */ "IdLP");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscriber */ "5uGe");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscription */ "bwdy");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "MiDb");
/* harmony import */ var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SubjectSubscription */ "yTkW");
/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "25CY");






class SubjectSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"] {
    constructor(destination) {
        super(destination);
        this.destination = destination;
    }
}
class Subject extends _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"] {
    constructor() {
        super();
        this.observers = [];
        this.closed = false;
        this.isStopped = false;
        this.hasError = false;
        this.thrownError = null;
    }
    [_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_5__["rxSubscriber"]]() {
        return new SubjectSubscriber(this);
    }
    lift(operator) {
        const subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    }
    next(value) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
        }
        if (!this.isStopped) {
            const { observers } = this;
            const len = observers.length;
            const copy = observers.slice();
            for (let i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    }
    error(err) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        const { observers } = this;
        const len = observers.length;
        const copy = observers.slice();
        for (let i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    }
    complete() {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
        }
        this.isStopped = true;
        const { observers } = this;
        const len = observers.length;
        const copy = observers.slice();
        for (let i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    }
    unsubscribe() {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    }
    _trySubscribe(subscriber) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
        }
        else {
            return super._trySubscribe(subscriber);
        }
    }
    _subscribe(subscriber) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__["ObjectUnsubscribedError"]();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_4__["SubjectSubscription"](this, subscriber);
        }
    }
    asObservable() {
        const observable = new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
        observable.source = this;
        return observable;
    }
}
Subject.create = (destination, source) => {
    return new AnonymousSubject(destination, source);
};
class AnonymousSubject extends Subject {
    constructor(destination, source) {
        super();
        this.destination = destination;
        this.source = source;
    }
    next(value) {
        const { destination } = this;
        if (destination && destination.next) {
            destination.next(value);
        }
    }
    error(err) {
        const { destination } = this;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    }
    complete() {
        const { destination } = this;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    }
    _subscribe(subscriber) {
        const { source } = this;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        }
    }
}
//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "ZzcO":
/*!***********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/exhaustMap.js ***!
  \***********************************************************************************************/
/*! exports provided: exhaustMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exhaustMap", function() { return exhaustMap; });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "YtkY");
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/from */ "GoAz");
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../innerSubscribe */ "uCWR");



function exhaustMap(project, resultSelector) {
    if (resultSelector) {
        return (source) => source.pipe(exhaustMap((a, i) => Object(_observable_from__WEBPACK_IMPORTED_MODULE_1__["from"])(project(a, i)).pipe(Object(_map__WEBPACK_IMPORTED_MODULE_0__["map"])((b, ii) => resultSelector(a, b, i, ii)))));
    }
    return (source) => source.lift(new ExhaustMapOperator(project));
}
class ExhaustMapOperator {
    constructor(project) {
        this.project = project;
    }
    call(subscriber, source) {
        return source.subscribe(new ExhaustMapSubscriber(subscriber, this.project));
    }
}
class ExhaustMapSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["SimpleOuterSubscriber"] {
    constructor(destination, project) {
        super(destination);
        this.project = project;
        this.hasSubscription = false;
        this.hasCompleted = false;
        this.index = 0;
    }
    _next(value) {
        if (!this.hasSubscription) {
            this.tryNext(value);
        }
    }
    tryNext(value) {
        let result;
        const index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.hasSubscription = true;
        this._innerSub(result);
    }
    _innerSub(result) {
        const innerSubscriber = new _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["SimpleInnerSubscriber"](this);
        const destination = this.destination;
        destination.add(innerSubscriber);
        const innerSubscription = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["innerSubscribe"])(result, innerSubscriber);
        if (innerSubscription !== innerSubscriber) {
            destination.add(innerSubscription);
        }
    }
    _complete() {
        this.hasCompleted = true;
        if (!this.hasSubscription) {
            this.destination.complete();
        }
        this.unsubscribe();
    }
    notifyNext(innerValue) {
        this.destination.next(innerValue);
    }
    notifyError(err) {
        this.destination.error(err);
    }
    notifyComplete() {
        this.hasSubscription = false;
        if (this.hasCompleted) {
            this.destination.complete();
        }
    }
}
//# sourceMappingURL=exhaustMap.js.map

/***/ }),

/***/ "aNQL":
/*!******************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/onErrorResumeNext.js ***!
  \******************************************************************************************************/
/*! exports provided: onErrorResumeNext, onErrorResumeNextStatic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function() { return onErrorResumeNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onErrorResumeNextStatic", function() { return onErrorResumeNextStatic; });
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/from */ "GoAz");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "FU6l");
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../innerSubscribe */ "uCWR");



function onErrorResumeNext(...nextSources) {
    if (nextSources.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(nextSources[0])) {
        nextSources = nextSources[0];
    }
    return (source) => source.lift(new OnErrorResumeNextOperator(nextSources));
}
function onErrorResumeNextStatic(...nextSources) {
    let source = undefined;
    if (nextSources.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(nextSources[0])) {
        nextSources = nextSources[0];
    }
    source = nextSources.shift();
    return Object(_observable_from__WEBPACK_IMPORTED_MODULE_0__["from"])(source).lift(new OnErrorResumeNextOperator(nextSources));
}
class OnErrorResumeNextOperator {
    constructor(nextSources) {
        this.nextSources = nextSources;
    }
    call(subscriber, source) {
        return source.subscribe(new OnErrorResumeNextSubscriber(subscriber, this.nextSources));
    }
}
class OnErrorResumeNextSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["SimpleOuterSubscriber"] {
    constructor(destination, nextSources) {
        super(destination);
        this.destination = destination;
        this.nextSources = nextSources;
    }
    notifyError() {
        this.subscribeToNextSource();
    }
    notifyComplete() {
        this.subscribeToNextSource();
    }
    _error(err) {
        this.subscribeToNextSource();
        this.unsubscribe();
    }
    _complete() {
        this.subscribeToNextSource();
        this.unsubscribe();
    }
    subscribeToNextSource() {
        const next = this.nextSources.shift();
        if (!!next) {
            const innerSubscriber = new _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["SimpleInnerSubscriber"](this);
            const destination = this.destination;
            destination.add(innerSubscriber);
            const innerSubscription = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["innerSubscribe"])(next, innerSubscriber);
            if (innerSubscription !== innerSubscriber) {
                destination.add(innerSubscription);
            }
        }
        else {
            this.destination.complete();
        }
    }
}
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ }),

/***/ "aV0t":
/*!*************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/startConnectionTimeout.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ "Rj9D");

/**
 * Starts a timeout and calls the callback with an error
 * if the timeout completes before the stop function is called.
 */
/* harmony default export */ __webpack_exports__["default"] = ((timeout, callback) => {
    let timeoutId;
    if (timeout !== undefined) {
        timeoutId = window.setTimeout(() => {
            const error = new Error(`Connection timed out after ${timeout}ms`);
            error.code = _enums__WEBPACK_IMPORTED_MODULE_0__["ErrorCode"].ConnectionTimeout;
            callback(error);
        }, timeout);
    }
    return () => {
        clearTimeout(timeoutId);
    };
});


/***/ }),

/***/ "aXqC":
/*!********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/isEmpty.js ***!
  \********************************************************************************************/
/*! exports provided: isEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");

function isEmpty() {
    return (source) => source.lift(new IsEmptyOperator());
}
class IsEmptyOperator {
    call(observer, source) {
        return source.subscribe(new IsEmptySubscriber(observer));
    }
}
class IsEmptySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination) {
        super(destination);
    }
    notifyComplete(isEmpty) {
        const destination = this.destination;
        destination.next(isEmpty);
        destination.complete();
    }
    _next(value) {
        this.notifyComplete(false);
    }
    _complete() {
        this.notifyComplete(true);
    }
}
//# sourceMappingURL=isEmpty.js.map

/***/ }),

/***/ "bl/x":
/*!******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/retry.js ***!
  \******************************************************************************************/
/*! exports provided: retry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retry", function() { return retry; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");

function retry(count = -1) {
    return (source) => source.lift(new RetryOperator(count, source));
}
class RetryOperator {
    constructor(count, source) {
        this.count = count;
        this.source = source;
    }
    call(subscriber, source) {
        return source.subscribe(new RetrySubscriber(subscriber, this.count, this.source));
    }
}
class RetrySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, count, source) {
        super(destination);
        this.count = count;
        this.source = source;
    }
    error(err) {
        if (!this.isStopped) {
            const { source, count } = this;
            if (count === 0) {
                return super.error(err);
            }
            else if (count > -1) {
                this.count = count - 1;
            }
            source.subscribe(this._unsubscribeAndRecycle());
        }
    }
}
//# sourceMappingURL=retry.js.map

/***/ }),

/***/ "bwdy":
/*!***************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/Subscription.js ***!
  \***************************************************************************************/
/*! exports provided: Subscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return Subscription; });
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/isArray */ "FU6l");
/* harmony import */ var _util_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/isObject */ "X0qr");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/isFunction */ "IJgj");
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/UnsubscriptionError */ "uTrF");




class Subscription {
    constructor(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
        }
    }
    unsubscribe() {
        let errors;
        if (this.closed) {
            return;
        }
        let { _parentOrParents, _ctorUnsubscribe, _unsubscribe, _subscriptions } = this;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (let index = 0; index < _parentOrParents.length; ++index) {
                const parent = _parentOrParents[index];
                parent.remove(this);
            }
        }
        if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(_unsubscribe)) {
            if (_ctorUnsubscribe) {
                this._unsubscribe = undefined;
            }
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"] ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(_subscriptions)) {
            let index = -1;
            let len = _subscriptions.length;
            while (++index < len) {
                const sub = _subscriptions[index];
                if (Object(_util_isObject__WEBPACK_IMPORTED_MODULE_1__["isObject"])(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"]) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
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
    add(teardown) {
        let subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    const tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        let { _parentOrParents } = subscription;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        const subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    }
    remove(subscription) {
        const subscriptions = this._subscriptions;
        if (subscriptions) {
            const subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    }
}
Subscription.EMPTY = (function (empty) {
    empty.closed = true;
    return empty;
}(new Subscription()));
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce((errs, err) => errs.concat((err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"]) ? err.errors : err), []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "cJ9h":
/*!*********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/mergeMap.js ***!
  \*********************************************************************************************/
/*! exports provided: mergeMap, MergeMapOperator, MergeMapSubscriber, flatMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeMap", function() { return mergeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeMapOperator", function() { return MergeMapOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeMapSubscriber", function() { return MergeMapSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatMap", function() { return flatMap; });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "YtkY");
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/from */ "GoAz");
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../innerSubscribe */ "uCWR");



function mergeMap(project, resultSelector, concurrent = Number.POSITIVE_INFINITY) {
    if (typeof resultSelector === 'function') {
        return (source) => source.pipe(mergeMap((a, i) => Object(_observable_from__WEBPACK_IMPORTED_MODULE_1__["from"])(project(a, i)).pipe(Object(_map__WEBPACK_IMPORTED_MODULE_0__["map"])((b, ii) => resultSelector(a, b, i, ii))), concurrent));
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return (source) => source.lift(new MergeMapOperator(project, concurrent));
}
class MergeMapOperator {
    constructor(project, concurrent = Number.POSITIVE_INFINITY) {
        this.project = project;
        this.concurrent = concurrent;
    }
    call(observer, source) {
        return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
    }
}
class MergeMapSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["SimpleOuterSubscriber"] {
    constructor(destination, project, concurrent = Number.POSITIVE_INFINITY) {
        super(destination);
        this.project = project;
        this.concurrent = concurrent;
        this.hasCompleted = false;
        this.buffer = [];
        this.active = 0;
        this.index = 0;
    }
    _next(value) {
        if (this.active < this.concurrent) {
            this._tryNext(value);
        }
        else {
            this.buffer.push(value);
        }
    }
    _tryNext(value) {
        let result;
        const index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.active++;
        this._innerSub(result);
    }
    _innerSub(ish) {
        const innerSubscriber = new _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["SimpleInnerSubscriber"](this);
        const destination = this.destination;
        destination.add(innerSubscriber);
        const innerSubscription = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["innerSubscribe"])(ish, innerSubscriber);
        if (innerSubscription !== innerSubscriber) {
            destination.add(innerSubscription);
        }
    }
    _complete() {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
        this.unsubscribe();
    }
    notifyNext(innerValue) {
        this.destination.next(innerValue);
    }
    notifyComplete() {
        const buffer = this.buffer;
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    }
}
const flatMap = mergeMap;
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ "ckkg":
/*!***********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/fromArray.js ***!
  \***********************************************************************************************/
/*! exports provided: fromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromArray", function() { return fromArray; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "IdLP");
/* harmony import */ var _util_subscribeToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToArray */ "dUuy");
/* harmony import */ var _scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduled/scheduleArray */ "czMQ");



function fromArray(input, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToArray__WEBPACK_IMPORTED_MODULE_1__["subscribeToArray"])(input));
    }
    else {
        return Object(_scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_2__["scheduleArray"])(input, scheduler);
    }
}
//# sourceMappingURL=fromArray.js.map

/***/ }),

/***/ "cmhy":
/*!********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/TimeoutError.js ***!
  \********************************************************************************************/
/*! exports provided: TimeoutError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return TimeoutError; });
const TimeoutErrorImpl = (() => {
    function TimeoutErrorImpl() {
        Error.call(this);
        this.message = 'Timeout has occurred';
        this.name = 'TimeoutError';
        return this;
    }
    TimeoutErrorImpl.prototype = Object.create(Error.prototype);
    return TimeoutErrorImpl;
})();
const TimeoutError = TimeoutErrorImpl;
//# sourceMappingURL=TimeoutError.js.map

/***/ }),

/***/ "czMQ":
/*!**************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduled/scheduleArray.js ***!
  \**************************************************************************************************/
/*! exports provided: scheduleArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleArray", function() { return scheduleArray; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "IdLP");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "bwdy");


function scheduleArray(input, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        const sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        let i = 0;
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
}
//# sourceMappingURL=scheduleArray.js.map

/***/ }),

/***/ "d+O9":
/*!*******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
  \*******************************************************************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ "bwdy");

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__["Subscription"] {
    constructor(scheduler, work) {
        super();
    }
    schedule(state, delay = 0) {
        return this;
    }
}
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ "dUuy":
/*!************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/subscribeToArray.js ***!
  \************************************************************************************************/
/*! exports provided: subscribeToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToArray", function() { return subscribeToArray; });
const subscribeToArray = (array) => (subscriber) => {
    for (let i = 0, len = array.length; i < len && !subscriber.closed; i++) {
        subscriber.next(array[i]);
    }
    subscriber.complete();
};
//# sourceMappingURL=subscribeToArray.js.map

/***/ }),

/***/ "eY+9":
/*!*******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/isArrayLike.js ***!
  \*******************************************************************************************/
/*! exports provided: isArrayLike */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike; });
const isArrayLike = ((x) => x && typeof x.length === 'number' && typeof x !== 'function');
//# sourceMappingURL=isArrayLike.js.map

/***/ }),

/***/ "eZPq":
/*!**********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/elementAt.js ***!
  \**********************************************************************************************/
/*! exports provided: elementAt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementAt", function() { return elementAt; });
/* harmony import */ var _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/ArgumentOutOfRangeError */ "PNff");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ "xVbo");
/* harmony import */ var _throwIfEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./throwIfEmpty */ "fbWu");
/* harmony import */ var _defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultIfEmpty */ "iqFP");
/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./take */ "J+dc");





function elementAt(index, defaultValue) {
    if (index < 0) {
        throw new _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_0__["ArgumentOutOfRangeError"]();
    }
    const hasDefaultValue = arguments.length >= 2;
    return (source) => source.pipe(Object(_filter__WEBPACK_IMPORTED_MODULE_1__["filter"])((v, i) => i === index), Object(_take__WEBPACK_IMPORTED_MODULE_4__["take"])(1), hasDefaultValue
        ? Object(_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__["defaultIfEmpty"])(defaultValue)
        : Object(_throwIfEmpty__WEBPACK_IMPORTED_MODULE_2__["throwIfEmpty"])(() => new _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_0__["ArgumentOutOfRangeError"]()));
}
//# sourceMappingURL=elementAt.js.map

/***/ }),

/***/ "f/66":
/*!*******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/expand.js ***!
  \*******************************************************************************************/
/*! exports provided: expand, ExpandOperator, ExpandSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expand", function() { return expand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandOperator", function() { return ExpandOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandSubscriber", function() { return ExpandSubscriber; });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ "uCWR");

function expand(project, concurrent = Number.POSITIVE_INFINITY, scheduler) {
    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
    return (source) => source.lift(new ExpandOperator(project, concurrent, scheduler));
}
class ExpandOperator {
    constructor(project, concurrent, scheduler) {
        this.project = project;
        this.concurrent = concurrent;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler));
    }
}
class ExpandSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleOuterSubscriber"] {
    constructor(destination, project, concurrent, scheduler) {
        super(destination);
        this.project = project;
        this.concurrent = concurrent;
        this.scheduler = scheduler;
        this.index = 0;
        this.active = 0;
        this.hasCompleted = false;
        if (concurrent < Number.POSITIVE_INFINITY) {
            this.buffer = [];
        }
    }
    static dispatch(arg) {
        const { subscriber, result, value, index } = arg;
        subscriber.subscribeToProjection(result, value, index);
    }
    _next(value) {
        const destination = this.destination;
        if (destination.closed) {
            this._complete();
            return;
        }
        const index = this.index++;
        if (this.active < this.concurrent) {
            destination.next(value);
            try {
                const { project } = this;
                const result = project(value, index);
                if (!this.scheduler) {
                    this.subscribeToProjection(result, value, index);
                }
                else {
                    const state = { subscriber: this, result, value, index };
                    const destination = this.destination;
                    destination.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
                }
            }
            catch (e) {
                destination.error(e);
            }
        }
        else {
            this.buffer.push(value);
        }
    }
    subscribeToProjection(result, value, index) {
        this.active++;
        const destination = this.destination;
        destination.add(Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["innerSubscribe"])(result, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleInnerSubscriber"](this)));
    }
    _complete() {
        this.hasCompleted = true;
        if (this.hasCompleted && this.active === 0) {
            this.destination.complete();
        }
        this.unsubscribe();
    }
    notifyNext(innerValue) {
        this._next(innerValue);
    }
    notifyComplete() {
        const buffer = this.buffer;
        this.active--;
        if (buffer && buffer.length > 0) {
            this._next(buffer.shift());
        }
        if (this.hasCompleted && this.active === 0) {
            this.destination.complete();
        }
    }
}
//# sourceMappingURL=expand.js.map

/***/ }),

/***/ "f8VV":
/*!***********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduler/AsapAction.js ***!
  \***********************************************************************************************/
/*! exports provided: AsapAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsapAction", function() { return AsapAction; });
/* harmony import */ var _util_Immediate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Immediate */ "L7US");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ "EWqr");


class AsapAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_1__["AsyncAction"] {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && delay > 0) {
            return super.requestAsyncId(scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = _util_Immediate__WEBPACK_IMPORTED_MODULE_0__["Immediate"].setImmediate(scheduler.flush.bind(scheduler, null)));
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return super.recycleAsyncId(scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            _util_Immediate__WEBPACK_IMPORTED_MODULE_0__["Immediate"].clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    }
}
//# sourceMappingURL=AsapAction.js.map

/***/ }),

/***/ "fNrB":
/*!**********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/mergeScan.js ***!
  \**********************************************************************************************/
/*! exports provided: mergeScan, MergeScanOperator, MergeScanSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeScan", function() { return mergeScan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeScanOperator", function() { return MergeScanOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeScanSubscriber", function() { return MergeScanSubscriber; });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ "uCWR");

function mergeScan(accumulator, seed, concurrent = Number.POSITIVE_INFINITY) {
    return (source) => source.lift(new MergeScanOperator(accumulator, seed, concurrent));
}
class MergeScanOperator {
    constructor(accumulator, seed, concurrent) {
        this.accumulator = accumulator;
        this.seed = seed;
        this.concurrent = concurrent;
    }
    call(subscriber, source) {
        return source.subscribe(new MergeScanSubscriber(subscriber, this.accumulator, this.seed, this.concurrent));
    }
}
class MergeScanSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleOuterSubscriber"] {
    constructor(destination, accumulator, acc, concurrent) {
        super(destination);
        this.accumulator = accumulator;
        this.acc = acc;
        this.concurrent = concurrent;
        this.hasValue = false;
        this.hasCompleted = false;
        this.buffer = [];
        this.active = 0;
        this.index = 0;
    }
    _next(value) {
        if (this.active < this.concurrent) {
            const index = this.index++;
            const destination = this.destination;
            let ish;
            try {
                const { accumulator } = this;
                ish = accumulator(this.acc, value, index);
            }
            catch (e) {
                return destination.error(e);
            }
            this.active++;
            this._innerSub(ish);
        }
        else {
            this.buffer.push(value);
        }
    }
    _innerSub(ish) {
        const innerSubscriber = new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleInnerSubscriber"](this);
        const destination = this.destination;
        destination.add(innerSubscriber);
        const innerSubscription = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["innerSubscribe"])(ish, innerSubscriber);
        if (innerSubscription !== innerSubscriber) {
            destination.add(innerSubscription);
        }
    }
    _complete() {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            if (this.hasValue === false) {
                this.destination.next(this.acc);
            }
            this.destination.complete();
        }
        this.unsubscribe();
    }
    notifyNext(innerValue) {
        const { destination } = this;
        this.acc = innerValue;
        this.hasValue = true;
        destination.next(innerValue);
    }
    notifyComplete() {
        const buffer = this.buffer;
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            if (this.hasValue === false) {
                this.destination.next(this.acc);
            }
            this.destination.complete();
        }
    }
}
//# sourceMappingURL=mergeScan.js.map

/***/ }),

/***/ "fSpn":
/*!************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/child/connectToParent.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createDestructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createDestructor */ "tUyG");
/* harmony import */ var _createLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createLogger */ "hmHb");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums */ "Rj9D");
/* harmony import */ var _validateWindowIsIframe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validateWindowIsIframe */ "B+tH");
/* harmony import */ var _handleSynAckMessageFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handleSynAckMessageFactory */ "Hk/K");
/* harmony import */ var _startConnectionTimeout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../startConnectionTimeout */ "aV0t");






const areGlobalsAccessible = () => {
    try {
        clearTimeout();
    }
    catch (e) {
        return false;
    }
    return true;
};
/**
 * Attempts to establish communication with the parent window.
 */
/* harmony default export */ __webpack_exports__["default"] = ((options = {}) => {
    const { parentOrigin = '*', methods = {}, timeout, debug = false } = options;
    const log = Object(_createLogger__WEBPACK_IMPORTED_MODULE_1__["default"])(debug);
    const destructor = Object(_createDestructor__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const { destroy, onDestroy } = destructor;
    Object(_validateWindowIsIframe__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const handleSynAckMessage = Object(_handleSynAckMessageFactory__WEBPACK_IMPORTED_MODULE_4__["default"])(parentOrigin, methods, destructor, log);
    const sendSynMessage = () => {
        log('Child: Handshake - Sending SYN');
        const synMessage = { penpal: _enums__WEBPACK_IMPORTED_MODULE_2__["MessageType"].Syn };
        const parentOriginForSyn = parentOrigin instanceof RegExp ? '*' : parentOrigin;
        window.parent.postMessage(synMessage, parentOriginForSyn);
    };
    const promise = new Promise((resolve, reject) => {
        const stopConnectionTimeout = Object(_startConnectionTimeout__WEBPACK_IMPORTED_MODULE_5__["default"])(timeout, destroy);
        const handleMessage = (event) => {
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
                const callSender = handleSynAckMessage(event);
                if (callSender) {
                    window.removeEventListener(_enums__WEBPACK_IMPORTED_MODULE_2__["NativeEventType"].Message, handleMessage);
                    stopConnectionTimeout();
                    resolve(callSender);
                }
            }
        };
        window.addEventListener(_enums__WEBPACK_IMPORTED_MODULE_2__["NativeEventType"].Message, handleMessage);
        sendSynMessage();
        onDestroy((error) => {
            window.removeEventListener(_enums__WEBPACK_IMPORTED_MODULE_2__["NativeEventType"].Message, handleMessage);
            if (!error) {
                error = new Error('Connection destroyed');
                error.code = _enums__WEBPACK_IMPORTED_MODULE_2__["ErrorCode"].ConnectionDestroyed;
            }
            reject(error);
        });
    });
    return {
        promise,
        destroy() {
            // Don't allow consumer to pass an error into destroy.
            destroy();
        }
    };
});


/***/ }),

/***/ "fbWu":
/*!*************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/throwIfEmpty.js ***!
  \*************************************************************************************************/
/*! exports provided: throwIfEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfEmpty", function() { return throwIfEmpty; });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/EmptyError */ "VxHp");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "5uGe");


function throwIfEmpty(errorFactory = defaultErrorFactory) {
    return (source) => {
        return source.lift(new ThrowIfEmptyOperator(errorFactory));
    };
}
class ThrowIfEmptyOperator {
    constructor(errorFactory) {
        this.errorFactory = errorFactory;
    }
    call(subscriber, source) {
        return source.subscribe(new ThrowIfEmptySubscriber(subscriber, this.errorFactory));
    }
}
class ThrowIfEmptySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"] {
    constructor(destination, errorFactory) {
        super(destination);
        this.errorFactory = errorFactory;
        this.hasValue = false;
    }
    _next(value) {
        this.hasValue = true;
        this.destination.next(value);
    }
    _complete() {
        if (!this.hasValue) {
            let err;
            try {
                err = this.errorFactory();
            }
            catch (e) {
                err = e;
            }
            this.destination.error(err);
        }
        else {
            return this.destination.complete();
        }
    }
}
function defaultErrorFactory() {
    return new _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__["EmptyError"]();
}
//# sourceMappingURL=throwIfEmpty.js.map

/***/ }),

/***/ "flkW":
/*!******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/merge.js ***!
  \******************************************************************************************/
/*! exports provided: merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony import */ var _observable_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/merge */ "g6G6");

function merge(...observables) {
    return (source) => source.lift.call(Object(_observable_merge__WEBPACK_IMPORTED_MODULE_0__["merge"])(source, ...observables));
}
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ "fnmL":
/*!**************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/combineLatest.js ***!
  \**************************************************************************************************/
/*! exports provided: combineLatest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineLatest", function() { return combineLatest; });
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isArray */ "FU6l");
/* harmony import */ var _observable_combineLatest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/combineLatest */ "HM3f");
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/from */ "GoAz");



const none = {};
function combineLatest(...observables) {
    let project = null;
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    if (observables.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(observables[0])) {
        observables = observables[0].slice();
    }
    return (source) => source.lift.call(Object(_observable_from__WEBPACK_IMPORTED_MODULE_2__["from"])([source, ...observables]), new _observable_combineLatest__WEBPACK_IMPORTED_MODULE_1__["CombineLatestOperator"](project));
}
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ "g6G6":
/*!*******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/merge.js ***!
  \*******************************************************************************************/
/*! exports provided: merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "IdLP");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ "gBlb");
/* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/mergeAll */ "3lSR");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fromArray */ "ckkg");




function merge(...observables) {
    let concurrent = Number.POSITIVE_INFINITY;
    let scheduler = null;
    let last = observables[observables.length - 1];
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__["isScheduler"])(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
        }
    }
    else if (typeof last === 'number') {
        concurrent = observables.pop();
    }
    if (scheduler === null && observables.length === 1 && observables[0] instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
        return observables[0];
    }
    return Object(_operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__["mergeAll"])(concurrent)(Object(_fromArray__WEBPACK_IMPORTED_MODULE_3__["fromArray"])(observables, scheduler));
}
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ "gBlb":
/*!*******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/isScheduler.js ***!
  \*******************************************************************************************/
/*! exports provided: isScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScheduler", function() { return isScheduler; });
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
//# sourceMappingURL=isScheduler.js.map

/***/ }),

/***/ "gMuT":
/*!**********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduled/scheduled.js ***!
  \**********************************************************************************************/
/*! exports provided: scheduled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduled", function() { return scheduled; });
/* harmony import */ var _scheduleObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduleObservable */ "4wde");
/* harmony import */ var _schedulePromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedulePromise */ "PmMP");
/* harmony import */ var _scheduleArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scheduleArray */ "czMQ");
/* harmony import */ var _scheduleIterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scheduleIterable */ "+ynE");
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isInteropObservable */ "hZDH");
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isPromise */ "/vgl");
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/isArrayLike */ "eY+9");
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/isIterable */ "On4S");








function scheduled(input, scheduler) {
    if (input != null) {
        if (Object(_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_4__["isInteropObservable"])(input)) {
            return Object(_scheduleObservable__WEBPACK_IMPORTED_MODULE_0__["scheduleObservable"])(input, scheduler);
        }
        else if (Object(_util_isPromise__WEBPACK_IMPORTED_MODULE_5__["isPromise"])(input)) {
            return Object(_schedulePromise__WEBPACK_IMPORTED_MODULE_1__["schedulePromise"])(input, scheduler);
        }
        else if (Object(_util_isArrayLike__WEBPACK_IMPORTED_MODULE_6__["isArrayLike"])(input)) {
            return Object(_scheduleArray__WEBPACK_IMPORTED_MODULE_2__["scheduleArray"])(input, scheduler);
        }
        else if (Object(_util_isIterable__WEBPACK_IMPORTED_MODULE_7__["isIterable"])(input) || typeof input === 'string') {
            return Object(_scheduleIterable__WEBPACK_IMPORTED_MODULE_3__["scheduleIterable"])(input, scheduler);
        }
    }
    throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}
//# sourceMappingURL=scheduled.js.map

/***/ }),

/***/ "gdbe":
/*!***********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/combineAll.js ***!
  \***********************************************************************************************/
/*! exports provided: combineAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineAll", function() { return combineAll; });
/* harmony import */ var _observable_combineLatest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/combineLatest */ "HM3f");

function combineAll(project) {
    return (source) => source.lift(new _observable_combineLatest__WEBPACK_IMPORTED_MODULE_0__["CombineLatestOperator"](project));
}
//# sourceMappingURL=combineAll.js.map

/***/ }),

/***/ "ghXf":
/*!*******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/repeat.js ***!
  \*******************************************************************************************/
/*! exports provided: repeat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return repeat; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/empty */ "6Oco");


function repeat(count = -1) {
    return (source) => {
        if (count === 0) {
            return Object(_observable_empty__WEBPACK_IMPORTED_MODULE_1__["empty"])();
        }
        else if (count < 0) {
            return source.lift(new RepeatOperator(-1, source));
        }
        else {
            return source.lift(new RepeatOperator(count - 1, source));
        }
    };
}
class RepeatOperator {
    constructor(count, source) {
        this.count = count;
        this.source = source;
    }
    call(subscriber, source) {
        return source.subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
    }
}
class RepeatSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, count, source) {
        super(destination);
        this.count = count;
        this.source = source;
    }
    complete() {
        if (!this.isStopped) {
            const { source, count } = this;
            if (count === 0) {
                return super.complete();
            }
            else if (count > -1) {
                this.count = count - 1;
            }
            source.subscribe(this._unsubscribeAndRecycle());
        }
    }
}
//# sourceMappingURL=repeat.js.map

/***/ }),

/***/ "hFTr":
/*!*************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/timeInterval.js ***!
  \*************************************************************************************************/
/*! exports provided: timeInterval, TimeInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeInterval", function() { return timeInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeInterval", function() { return TimeInterval; });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ "Efrr");
/* harmony import */ var _scan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan */ "SrNW");
/* harmony import */ var _observable_defer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/defer */ "i9xl");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map */ "YtkY");




function timeInterval(scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__["async"]) {
    return (source) => Object(_observable_defer__WEBPACK_IMPORTED_MODULE_2__["defer"])(() => {
        return source.pipe(Object(_scan__WEBPACK_IMPORTED_MODULE_1__["scan"])(({ current }, value) => ({ value, current: scheduler.now(), last: current }), { current: scheduler.now(), value: undefined, last: undefined }), Object(_map__WEBPACK_IMPORTED_MODULE_3__["map"])(({ current, last, value }) => new TimeInterval(value, current - last)));
    });
}
class TimeInterval {
    constructor(value, interval) {
        this.value = value;
        this.interval = interval;
    }
}
//# sourceMappingURL=timeInterval.js.map

/***/ }),

/***/ "hZDH":
/*!***************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/isInteropObservable.js ***!
  \***************************************************************************************************/
/*! exports provided: isInteropObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteropObservable", function() { return isInteropObservable; });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/observable */ "qEfY");

function isInteropObservable(input) {
    return input && typeof input[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__["observable"]] === 'function';
}
//# sourceMappingURL=isInteropObservable.js.map

/***/ }),

/***/ "hmHb":
/*!***************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/createLogger.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((debug) => {
    /**
     * Logs a message if debug is enabled.
     */
    return (...args) => {
        if (debug) {
            console.log('[Penpal]', ...args); // eslint-disable-line no-console
        }
    };
});


/***/ }),

/***/ "i7Dj":
/*!*********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/refCount.js ***!
  \*********************************************************************************************/
/*! exports provided: refCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refCount", function() { return refCount; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");

function refCount() {
    return function refCountOperatorFunction(source) {
        return source.lift(new RefCountOperator(source));
    };
}
class RefCountOperator {
    constructor(connectable) {
        this.connectable = connectable;
    }
    call(subscriber, source) {
        const { connectable } = this;
        connectable._refCount++;
        const refCounter = new RefCountSubscriber(subscriber, connectable);
        const subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    }
}
class RefCountSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, connectable) {
        super(destination);
        this.connectable = connectable;
    }
    _unsubscribe() {
        const { connectable } = this;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        const refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        const { connection } = this;
        const sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    }
}
//# sourceMappingURL=refCount.js.map

/***/ }),

/***/ "i9P/":
/*!***********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/hostReportError.js ***!
  \***********************************************************************************************/
/*! exports provided: hostReportError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hostReportError", function() { return hostReportError; });
function hostReportError(err) {
    setTimeout(() => { throw err; }, 0);
}
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ "i9xl":
/*!*******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/defer.js ***!
  \*******************************************************************************************/
/*! exports provided: defer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return defer; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "IdLP");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ "GoAz");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty */ "6Oco");



function defer(observableFactory) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](subscriber => {
        let input;
        try {
            input = observableFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        const source = input ? Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(input) : Object(_empty__WEBPACK_IMPORTED_MODULE_2__["empty"])();
        return source.subscribe(subscriber);
    });
}
//# sourceMappingURL=defer.js.map

/***/ }),

/***/ "iLlD":
/*!******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/pluck.js ***!
  \******************************************************************************************/
/*! exports provided: pluck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return pluck; });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "YtkY");

function pluck(...properties) {
    const length = properties.length;
    if (length === 0) {
        throw new Error('list of properties cannot be empty.');
    }
    return (source) => Object(_map__WEBPACK_IMPORTED_MODULE_0__["map"])(plucker(properties, length))(source);
}
function plucker(props, length) {
    const mapper = (x) => {
        let currentProp = x;
        for (let i = 0; i < length; i++) {
            const p = currentProp != null ? currentProp[props[i]] : undefined;
            if (p !== void 0) {
                currentProp = p;
            }
            else {
                return undefined;
            }
        }
        return currentProp;
    };
    return mapper;
}
//# sourceMappingURL=pluck.js.map

/***/ }),

/***/ "iRe+":
/*!**************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/isDate.js ***!
  \**************************************************************************************/
/*! exports provided: isDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
function isDate(value) {
    return value instanceof Date && !isNaN(+value);
}
//# sourceMappingURL=isDate.js.map

/***/ }),

/***/ "iT4G":
/*!********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/timeout.js ***!
  \********************************************************************************************/
/*! exports provided: timeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return timeout; });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ "Efrr");
/* harmony import */ var _util_TimeoutError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/TimeoutError */ "cmhy");
/* harmony import */ var _timeoutWith__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeoutWith */ "vAPC");
/* harmony import */ var _observable_throwError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observable/throwError */ "47ST");




function timeout(due, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__["async"]) {
    return Object(_timeoutWith__WEBPACK_IMPORTED_MODULE_2__["timeoutWith"])(due, Object(_observable_throwError__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _util_TimeoutError__WEBPACK_IMPORTED_MODULE_1__["TimeoutError"]()), scheduler);
}
//# sourceMappingURL=timeout.js.map

/***/ }),

/***/ "iqFP":
/*!***************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/defaultIfEmpty.js ***!
  \***************************************************************************************************/
/*! exports provided: defaultIfEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultIfEmpty", function() { return defaultIfEmpty; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");

function defaultIfEmpty(defaultValue = null) {
    return (source) => source.lift(new DefaultIfEmptyOperator(defaultValue));
}
class DefaultIfEmptyOperator {
    constructor(defaultValue) {
        this.defaultValue = defaultValue;
    }
    call(subscriber, source) {
        return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
    }
}
class DefaultIfEmptySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, defaultValue) {
        super(destination);
        this.defaultValue = defaultValue;
        this.isEmpty = true;
    }
    _next(value) {
        this.isEmpty = false;
        this.destination.next(value);
    }
    _complete() {
        if (this.isEmpty) {
            this.destination.next(this.defaultValue);
        }
        this.destination.complete();
    }
}
//# sourceMappingURL=defaultIfEmpty.js.map

/***/ }),

/***/ "it7j":
/*!**********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/timestamp.js ***!
  \**********************************************************************************************/
/*! exports provided: timestamp, Timestamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestamp", function() { return timestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timestamp", function() { return Timestamp; });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ "Efrr");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "YtkY");


function timestamp(scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__["async"]) {
    return Object(_map__WEBPACK_IMPORTED_MODULE_1__["map"])((value) => new Timestamp(value, scheduler.now()));
}
class Timestamp {
    constructor(value, timestamp) {
        this.value = value;
        this.timestamp = timestamp;
    }
}
//# sourceMappingURL=timestamp.js.map

/***/ }),

/***/ "j71X":
/*!************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/windowCount.js ***!
  \************************************************************************************************/
/*! exports provided: windowCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowCount", function() { return windowCount; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subject */ "ZTXN");


function windowCount(windowSize, startWindowEvery = 0) {
    return function windowCountOperatorFunction(source) {
        return source.lift(new WindowCountOperator(windowSize, startWindowEvery));
    };
}
class WindowCountOperator {
    constructor(windowSize, startWindowEvery) {
        this.windowSize = windowSize;
        this.startWindowEvery = startWindowEvery;
    }
    call(subscriber, source) {
        return source.subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
    }
}
class WindowCountSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, windowSize, startWindowEvery) {
        super(destination);
        this.destination = destination;
        this.windowSize = windowSize;
        this.startWindowEvery = startWindowEvery;
        this.windows = [new _Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]()];
        this.count = 0;
        destination.next(this.windows[0]);
    }
    _next(value) {
        const startWindowEvery = (this.startWindowEvery > 0) ? this.startWindowEvery : this.windowSize;
        const destination = this.destination;
        const windowSize = this.windowSize;
        const windows = this.windows;
        const len = windows.length;
        for (let i = 0; i < len && !this.closed; i++) {
            windows[i].next(value);
        }
        const c = this.count - windowSize + 1;
        if (c >= 0 && c % startWindowEvery === 0 && !this.closed) {
            windows.shift().complete();
        }
        if (++this.count % startWindowEvery === 0 && !this.closed) {
            const window = new _Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
            windows.push(window);
            destination.next(window);
        }
    }
    _error(err) {
        const windows = this.windows;
        if (windows) {
            while (windows.length > 0 && !this.closed) {
                windows.shift().error(err);
            }
        }
        this.destination.error(err);
    }
    _complete() {
        const windows = this.windows;
        if (windows) {
            while (windows.length > 0 && !this.closed) {
                windows.shift().complete();
            }
        }
        this.destination.complete();
    }
    _unsubscribe() {
        this.count = 0;
        this.windows = null;
    }
}
//# sourceMappingURL=windowCount.js.map

/***/ }),

/***/ "jIqt":
/*!**********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/startWith.js ***!
  \**********************************************************************************************/
/*! exports provided: startWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startWith", function() { return startWith; });
/* harmony import */ var _observable_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/concat */ "qZtG");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ "gBlb");


function startWith(...array) {
    const scheduler = array[array.length - 1];
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__["isScheduler"])(scheduler)) {
        array.pop();
        return (source) => Object(_observable_concat__WEBPACK_IMPORTED_MODULE_0__["concat"])(array, source, scheduler);
    }
    else {
        return (source) => Object(_observable_concat__WEBPACK_IMPORTED_MODULE_0__["concat"])(array, source);
    }
}
//# sourceMappingURL=startWith.js.map

/***/ }),

/***/ "jNqi":
/*!************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/bufferCount.js ***!
  \************************************************************************************************/
/*! exports provided: bufferCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bufferCount", function() { return bufferCount; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");

function bufferCount(bufferSize, startBufferEvery = null) {
    return function bufferCountOperatorFunction(source) {
        return source.lift(new BufferCountOperator(bufferSize, startBufferEvery));
    };
}
class BufferCountOperator {
    constructor(bufferSize, startBufferEvery) {
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
        if (!startBufferEvery || bufferSize === startBufferEvery) {
            this.subscriberClass = BufferCountSubscriber;
        }
        else {
            this.subscriberClass = BufferSkipCountSubscriber;
        }
    }
    call(subscriber, source) {
        return source.subscribe(new this.subscriberClass(subscriber, this.bufferSize, this.startBufferEvery));
    }
}
class BufferCountSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, bufferSize) {
        super(destination);
        this.bufferSize = bufferSize;
        this.buffer = [];
    }
    _next(value) {
        const buffer = this.buffer;
        buffer.push(value);
        if (buffer.length == this.bufferSize) {
            this.destination.next(buffer);
            this.buffer = [];
        }
    }
    _complete() {
        const buffer = this.buffer;
        if (buffer.length > 0) {
            this.destination.next(buffer);
        }
        super._complete();
    }
}
class BufferSkipCountSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, bufferSize, startBufferEvery) {
        super(destination);
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
        this.buffers = [];
        this.count = 0;
    }
    _next(value) {
        const { bufferSize, startBufferEvery, buffers, count } = this;
        this.count++;
        if (count % startBufferEvery === 0) {
            buffers.push([]);
        }
        for (let i = buffers.length; i--;) {
            const buffer = buffers[i];
            buffer.push(value);
            if (buffer.length === bufferSize) {
                buffers.splice(i, 1);
                this.destination.next(buffer);
            }
        }
    }
    _complete() {
        const { buffers, destination } = this;
        while (buffers.length > 0) {
            let buffer = buffers.shift();
            if (buffer.length > 0) {
                destination.next(buffer);
            }
        }
        super._complete();
    }
}
//# sourceMappingURL=bufferCount.js.map

/***/ }),

/***/ "jOdJ":
/*!******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/first.js ***!
  \******************************************************************************************/
/*! exports provided: first */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/EmptyError */ "VxHp");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ "xVbo");
/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./take */ "J+dc");
/* harmony import */ var _defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultIfEmpty */ "iqFP");
/* harmony import */ var _throwIfEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./throwIfEmpty */ "fbWu");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/identity */ "5E2i");






function first(predicate, defaultValue) {
    const hasDefaultValue = arguments.length >= 2;
    return (source) => source.pipe(predicate ? Object(_filter__WEBPACK_IMPORTED_MODULE_1__["filter"])((v, i) => predicate(v, i, source)) : _util_identity__WEBPACK_IMPORTED_MODULE_5__["identity"], Object(_take__WEBPACK_IMPORTED_MODULE_2__["take"])(1), hasDefaultValue ? Object(_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__["defaultIfEmpty"])(defaultValue) : Object(_throwIfEmpty__WEBPACK_IMPORTED_MODULE_4__["throwIfEmpty"])(() => new _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__["EmptyError"]()));
}
//# sourceMappingURL=first.js.map

/***/ }),

/***/ "jhgp":
/*!**************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/sequenceEqual.js ***!
  \**************************************************************************************************/
/*! exports provided: sequenceEqual, SequenceEqualOperator, SequenceEqualSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequenceEqual", function() { return sequenceEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SequenceEqualOperator", function() { return SequenceEqualOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SequenceEqualSubscriber", function() { return SequenceEqualSubscriber; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");

function sequenceEqual(compareTo, comparator) {
    return (source) => source.lift(new SequenceEqualOperator(compareTo, comparator));
}
class SequenceEqualOperator {
    constructor(compareTo, comparator) {
        this.compareTo = compareTo;
        this.comparator = comparator;
    }
    call(subscriber, source) {
        return source.subscribe(new SequenceEqualSubscriber(subscriber, this.compareTo, this.comparator));
    }
}
class SequenceEqualSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, compareTo, comparator) {
        super(destination);
        this.compareTo = compareTo;
        this.comparator = comparator;
        this._a = [];
        this._b = [];
        this._oneComplete = false;
        this.destination.add(compareTo.subscribe(new SequenceEqualCompareToSubscriber(destination, this)));
    }
    _next(value) {
        if (this._oneComplete && this._b.length === 0) {
            this.emit(false);
        }
        else {
            this._a.push(value);
            this.checkValues();
        }
    }
    _complete() {
        if (this._oneComplete) {
            this.emit(this._a.length === 0 && this._b.length === 0);
        }
        else {
            this._oneComplete = true;
        }
        this.unsubscribe();
    }
    checkValues() {
        const { _a, _b, comparator } = this;
        while (_a.length > 0 && _b.length > 0) {
            let a = _a.shift();
            let b = _b.shift();
            let areEqual = false;
            try {
                areEqual = comparator ? comparator(a, b) : a === b;
            }
            catch (e) {
                this.destination.error(e);
            }
            if (!areEqual) {
                this.emit(false);
            }
        }
    }
    emit(value) {
        const { destination } = this;
        destination.next(value);
        destination.complete();
    }
    nextB(value) {
        if (this._oneComplete && this._a.length === 0) {
            this.emit(false);
        }
        else {
            this._b.push(value);
            this.checkValues();
        }
    }
    completeB() {
        if (this._oneComplete) {
            this.emit(this._a.length === 0 && this._b.length === 0);
        }
        else {
            this._oneComplete = true;
        }
    }
}
class SequenceEqualCompareToSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, parent) {
        super(destination);
        this.parent = parent;
    }
    _next(value) {
        this.parent.nextB(value);
    }
    _error(err) {
        this.parent.error(err);
        this.unsubscribe();
    }
    _complete() {
        this.parent.completeB();
        this.unsubscribe();
    }
}
//# sourceMappingURL=sequenceEqual.js.map

/***/ }),

/***/ "jwFC":
/*!*********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/skipLast.js ***!
  \*********************************************************************************************/
/*! exports provided: skipLast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipLast", function() { return skipLast; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");
/* harmony import */ var _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ArgumentOutOfRangeError */ "PNff");


function skipLast(count) {
    return (source) => source.lift(new SkipLastOperator(count));
}
class SkipLastOperator {
    constructor(_skipCount) {
        this._skipCount = _skipCount;
        if (this._skipCount < 0) {
            throw new _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_1__["ArgumentOutOfRangeError"];
        }
    }
    call(subscriber, source) {
        if (this._skipCount === 0) {
            return source.subscribe(new _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"](subscriber));
        }
        else {
            return source.subscribe(new SkipLastSubscriber(subscriber, this._skipCount));
        }
    }
}
class SkipLastSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, _skipCount) {
        super(destination);
        this._skipCount = _skipCount;
        this._count = 0;
        this._ring = new Array(_skipCount);
    }
    _next(value) {
        const skipCount = this._skipCount;
        const count = this._count++;
        if (count < skipCount) {
            this._ring[count] = value;
        }
        else {
            const currentIndex = count % skipCount;
            const ring = this._ring;
            const oldValue = ring[currentIndex];
            ring[currentIndex] = value;
            this.destination.next(oldValue);
        }
    }
}
//# sourceMappingURL=skipLast.js.map

/***/ }),

/***/ "kLnN":
/*!****************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/zip.js ***!
  \****************************************************************************************/
/*! exports provided: zip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return zip; });
/* harmony import */ var _observable_zip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/zip */ "wTjk");

function zip(...observables) {
    return function zipOperatorFunction(source) {
        return source.lift.call(Object(_observable_zip__WEBPACK_IMPORTED_MODULE_0__["zip"])(source, ...observables));
    };
}
//# sourceMappingURL=zip.js.map

/***/ }),

/***/ "kSHZ":
/*!******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduler/queue.js ***!
  \******************************************************************************************/
/*! exports provided: queueScheduler, queue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queueScheduler", function() { return queueScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queue", function() { return queue; });
/* harmony import */ var _QueueAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueueAction */ "HFsJ");
/* harmony import */ var _QueueScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueueScheduler */ "246g");


const queueScheduler = new _QueueScheduler__WEBPACK_IMPORTED_MODULE_1__["QueueScheduler"](_QueueAction__WEBPACK_IMPORTED_MODULE_0__["QueueAction"]);
const queue = queueScheduler;
//# sourceMappingURL=queue.js.map

/***/ }),

/***/ "kgbq":
/*!************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/noop.js ***!
  \************************************************************************************/
/*! exports provided: noop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
function noop() { }
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ "kuMc":
/*!**********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/takeUntil.js ***!
  \**********************************************************************************************/
/*! exports provided: takeUntil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeUntil", function() { return takeUntil; });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ "uCWR");

function takeUntil(notifier) {
    return (source) => source.lift(new TakeUntilOperator(notifier));
}
class TakeUntilOperator {
    constructor(notifier) {
        this.notifier = notifier;
    }
    call(subscriber, source) {
        const takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
        const notifierSubscription = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["innerSubscribe"])(this.notifier, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleInnerSubscriber"](takeUntilSubscriber));
        if (notifierSubscription && !takeUntilSubscriber.seenValue) {
            takeUntilSubscriber.add(notifierSubscription);
            return source.subscribe(takeUntilSubscriber);
        }
        return takeUntilSubscriber;
    }
}
class TakeUntilSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleOuterSubscriber"] {
    constructor(destination) {
        super(destination);
        this.seenValue = false;
    }
    notifyNext() {
        this.seenValue = true;
        this.complete();
    }
    notifyComplete() {
    }
}
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ "lJSs":
/*!******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/count.js ***!
  \******************************************************************************************/
/*! exports provided: count */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "count", function() { return count; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");

function count(predicate) {
    return (source) => source.lift(new CountOperator(predicate, source));
}
class CountOperator {
    constructor(predicate, source) {
        this.predicate = predicate;
        this.source = source;
    }
    call(subscriber, source) {
        return source.subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
    }
}
class CountSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, predicate, source) {
        super(destination);
        this.predicate = predicate;
        this.source = source;
        this.count = 0;
        this.index = 0;
    }
    _next(value) {
        if (this.predicate) {
            this._tryPredicate(value);
        }
        else {
            this.count++;
        }
    }
    _tryPredicate(value) {
        let result;
        try {
            result = this.predicate(value, this.index++, this.source);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.count++;
        }
    }
    _complete() {
        this.destination.next(this.count);
        this.destination.complete();
    }
}
//# sourceMappingURL=count.js.map

/***/ }),

/***/ "lmh5":
/*!**********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/partition.js ***!
  \**********************************************************************************************/
/*! exports provided: partition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
/* harmony import */ var _util_not__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/not */ "Xm0Y");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ "xVbo");


function partition(predicate, thisArg) {
    return (source) => [
        Object(_filter__WEBPACK_IMPORTED_MODULE_1__["filter"])(predicate, thisArg)(source),
        Object(_filter__WEBPACK_IMPORTED_MODULE_1__["filter"])(Object(_util_not__WEBPACK_IMPORTED_MODULE_0__["not"])(predicate, thisArg))(source)
    ];
}
//# sourceMappingURL=partition.js.map

/***/ }),

/***/ "m0VI":
/*!***************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/AsyncSubject.js ***!
  \***************************************************************************************/
/*! exports provided: AsyncSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncSubject", function() { return AsyncSubject; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "ZTXN");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscription */ "bwdy");


class AsyncSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"] {
    constructor() {
        super(...arguments);
        this.value = null;
        this.hasNext = false;
        this.hasCompleted = false;
    }
    _subscribe(subscriber) {
        if (this.hasError) {
            subscriber.error(this.thrownError);
            return _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        }
        else if (this.hasCompleted && this.hasNext) {
            subscriber.next(this.value);
            subscriber.complete();
            return _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        }
        return super._subscribe(subscriber);
    }
    next(value) {
        if (!this.hasCompleted) {
            this.value = value;
            this.hasNext = true;
        }
    }
    error(error) {
        if (!this.hasCompleted) {
            super.error(error);
        }
    }
    complete() {
        this.hasCompleted = true;
        if (this.hasNext) {
            super.next(this.value);
        }
        super.complete();
    }
}
//# sourceMappingURL=AsyncSubject.js.map

/***/ }),

/***/ "mW0F":
/*!*************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js ***!
  \*************************************************************************************************/
/*! exports provided: subscribeToResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToResult", function() { return subscribeToResult; });
/* harmony import */ var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../InnerSubscriber */ "r9RI");
/* harmony import */ var _subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscribeTo */ "1MAX");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ "IdLP");



function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, innerSubscriber = new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__["InnerSubscriber"](outerSubscriber, outerValue, outerIndex)) {
    if (innerSubscriber.closed) {
        return undefined;
    }
    if (result instanceof _Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]) {
        return result.subscribe(innerSubscriber);
    }
    return Object(_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(result)(innerSubscriber);
}
//# sourceMappingURL=subscribeToResult.js.map

/***/ }),

/***/ "mWib":
/*!*************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/debounceTime.js ***!
  \*************************************************************************************************/
/*! exports provided: debounceTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounceTime", function() { return debounceTime; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ "Efrr");


function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"]) {
    return (source) => source.lift(new DebounceTimeOperator(dueTime, scheduler));
}
class DebounceTimeOperator {
    constructor(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    }
}
class DebounceTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, dueTime, scheduler) {
        super(destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    _next(value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    }
    _complete() {
        this.debouncedNext();
        this.destination.complete();
    }
    debouncedNext() {
        this.clearDebounce();
        if (this.hasValue) {
            const { lastValue } = this;
            this.lastValue = null;
            this.hasValue = false;
            this.destination.next(lastValue);
        }
    }
    clearDebounce() {
        const debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    }
}
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ "mawV":
/*!**********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/concatAll.js ***!
  \**********************************************************************************************/
/*! exports provided: concatAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatAll", function() { return concatAll; });
/* harmony import */ var _mergeAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeAll */ "3lSR");

function concatAll() {
    return Object(_mergeAll__WEBPACK_IMPORTED_MODULE_0__["mergeAll"])(1);
}
//# sourceMappingURL=concatAll.js.map

/***/ }),

/***/ "nPMJ":
/*!********************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/connectCallSender.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generateId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateId */ "S5ru");
/* harmony import */ var _errorSerialization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errorSerialization */ "Uxnb");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums */ "Rj9D");



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
/* harmony default export */ __webpack_exports__["default"] = ((callSender, info, methodNames, destroyConnection, log) => {
    const { localName, local, remote, originForSending, originForReceiving } = info;
    let destroyed = false;
    log(`${localName}: Connecting call sender`);
    const createMethodProxy = (methodName) => {
        return (...args) => {
            log(`${localName}: Sending ${methodName}() call`);
            // This handles the case where the iframe has been removed from the DOM
            // (and therefore its window closed), the consumer has not yet
            // called destroy(), and the user calls a method exposed by
            // the remote. We detect the iframe has been removed and force
            // a destroy() immediately so that the consumer sees the error saying
            // the connection has been destroyed. We wrap this check in a try catch
            // because Edge throws an "Object expected" error when accessing
            // contentWindow.closed on a contentWindow from an iframe that's been
            // removed from the DOM.
            let iframeRemoved;
            try {
                if (remote.closed) {
                    iframeRemoved = true;
                }
            }
            catch (e) {
                iframeRemoved = true;
            }
            if (iframeRemoved) {
                destroyConnection();
            }
            if (destroyed) {
                const error = new Error(`Unable to send ${methodName}() call due ` + `to destroyed connection`);
                error.code = _enums__WEBPACK_IMPORTED_MODULE_2__["ErrorCode"].ConnectionDestroyed;
                throw error;
            }
            return new Promise((resolve, reject) => {
                const id = Object(_generateId__WEBPACK_IMPORTED_MODULE_0__["default"])();
                const handleMessageEvent = (event) => {
                    if (event.source !== remote ||
                        event.data.penpal !== _enums__WEBPACK_IMPORTED_MODULE_2__["MessageType"].Reply ||
                        event.data.id !== id) {
                        return;
                    }
                    if (event.origin !== originForReceiving) {
                        log(`${localName} received message from origin ${event.origin} which did not match expected origin ${originForReceiving}`);
                        return;
                    }
                    const replyMessage = event.data;
                    log(`${localName}: Received ${methodName}() reply`);
                    local.removeEventListener(_enums__WEBPACK_IMPORTED_MODULE_2__["NativeEventType"].Message, handleMessageEvent);
                    let returnValue = replyMessage.returnValue;
                    if (replyMessage.returnValueIsError) {
                        returnValue = Object(_errorSerialization__WEBPACK_IMPORTED_MODULE_1__["deserializeError"])(returnValue);
                    }
                    (replyMessage.resolution === _enums__WEBPACK_IMPORTED_MODULE_2__["Resolution"].Fulfilled ? resolve : reject)(returnValue);
                };
                local.addEventListener(_enums__WEBPACK_IMPORTED_MODULE_2__["NativeEventType"].Message, handleMessageEvent);
                const callMessage = {
                    penpal: _enums__WEBPACK_IMPORTED_MODULE_2__["MessageType"].Call,
                    id,
                    methodName,
                    args
                };
                remote.postMessage(callMessage, originForSending);
            });
        };
    };
    methodNames.reduce((api, methodName) => {
        api[methodName] = createMethodProxy(methodName);
        return api;
    }, callSender);
    return () => {
        destroyed = true;
    };
});


/***/ }),

/***/ "oTGV":
/*!****************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/min.js ***!
  \****************************************************************************************/
/*! exports provided: min */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reduce */ "0iRq");

function min(comparer) {
    const min = (typeof comparer === 'function')
        ? (x, y) => comparer(x, y) < 0 ? x : y
        : (x, y) => x < y ? x : y;
    return Object(_reduce__WEBPACK_IMPORTED_MODULE_0__["reduce"])(min);
}
//# sourceMappingURL=min.js.map

/***/ }),

/***/ "oUj0":
/*!******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/audit.js ***!
  \******************************************************************************************/
/*! exports provided: audit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audit", function() { return audit; });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ "uCWR");

function audit(durationSelector) {
    return function auditOperatorFunction(source) {
        return source.lift(new AuditOperator(durationSelector));
    };
}
class AuditOperator {
    constructor(durationSelector) {
        this.durationSelector = durationSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new AuditSubscriber(subscriber, this.durationSelector));
    }
}
class AuditSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleOuterSubscriber"] {
    constructor(destination, durationSelector) {
        super(destination);
        this.durationSelector = durationSelector;
        this.hasValue = false;
    }
    _next(value) {
        this.value = value;
        this.hasValue = true;
        if (!this.throttled) {
            let duration;
            try {
                const { durationSelector } = this;
                duration = durationSelector(value);
            }
            catch (err) {
                return this.destination.error(err);
            }
            const innerSubscription = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["innerSubscribe"])(duration, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleInnerSubscriber"](this));
            if (!innerSubscription || innerSubscription.closed) {
                this.clearThrottle();
            }
            else {
                this.add(this.throttled = innerSubscription);
            }
        }
    }
    clearThrottle() {
        const { value, hasValue, throttled } = this;
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
    notifyNext() {
        this.clearThrottle();
    }
    notifyComplete() {
        this.clearThrottle();
    }
}
//# sourceMappingURL=audit.js.map

/***/ }),

/***/ "pBDD":
/*!******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/OuterSubscriber.js ***!
  \******************************************************************************************/
/*! exports provided: OuterSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OuterSubscriber", function() { return OuterSubscriber; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ "5uGe");

class OuterSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    }
    notifyError(error, innerSub) {
        this.destination.error(error);
    }
    notifyComplete(innerSub) {
        this.destination.complete();
    }
}
//# sourceMappingURL=OuterSubscriber.js.map

/***/ }),

/***/ "pScO":
/*!**********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/switchAll.js ***!
  \**********************************************************************************************/
/*! exports provided: switchAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchAll", function() { return switchAll; });
/* harmony import */ var _switchMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switchMap */ "TLy2");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/identity */ "5E2i");


function switchAll() {
    return Object(_switchMap__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(_util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"]);
}
//# sourceMappingURL=switchAll.js.map

/***/ }),

/***/ "pZOY":
/*!*********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/parent/handleSynMessageFactory.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ "Rj9D");

/**
 * Handles a SYN handshake message.
 */
/* harmony default export */ __webpack_exports__["default"] = ((log, methods, childOrigin, originForSending) => {
    return (event) => {
        if (event.origin !== childOrigin) {
            log(`Parent: Handshake - Received SYN message from origin ${event.origin} which did not match expected origin ${childOrigin}`);
            return;
        }
        log('Parent: Handshake - Received SYN, responding with SYN-ACK');
        const synAckMessage = {
            penpal: _enums__WEBPACK_IMPORTED_MODULE_0__["MessageType"].SynAck,
            methodNames: Object.keys(methods)
        };
        event.source.postMessage(synAckMessage, originForSending);
    };
});


/***/ }),

/***/ "prE9":
/*!**********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/auditTime.js ***!
  \**********************************************************************************************/
/*! exports provided: auditTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auditTime", function() { return auditTime; });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ "Efrr");
/* harmony import */ var _audit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audit */ "oUj0");
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/timer */ "8lHc");



function auditTime(duration, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__["async"]) {
    return Object(_audit__WEBPACK_IMPORTED_MODULE_1__["audit"])(() => Object(_observable_timer__WEBPACK_IMPORTED_MODULE_2__["timer"])(duration, scheduler));
}
//# sourceMappingURL=auditTime.js.map

/***/ }),

/***/ "qEfY":
/*!********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/symbol/observable.js ***!
  \********************************************************************************************/
/*! exports provided: observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
const observable = (() => typeof Symbol === 'function' && Symbol.observable || '@@observable')();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "qNSz":
/*!********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/toSubscriber.js ***!
  \********************************************************************************************/
/*! exports provided: toSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSubscriber", function() { return toSubscriber; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");
/* harmony import */ var _symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/rxSubscriber */ "25CY");
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observer */ "rWo0");



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
}
//# sourceMappingURL=toSubscriber.js.map

/***/ }),

/***/ "qZtG":
/*!********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/concat.js ***!
  \********************************************************************************************/
/*! exports provided: concat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony import */ var _of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./of */ "ROBh");
/* harmony import */ var _operators_concatAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/concatAll */ "mawV");


function concat(...observables) {
    return Object(_operators_concatAll__WEBPACK_IMPORTED_MODULE_1__["concatAll"])()(Object(_of__WEBPACK_IMPORTED_MODULE_0__["of"])(...observables));
}
//# sourceMappingURL=concat.js.map

/***/ }),

/***/ "qhtU":
/*!***************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/subscribeToIterable.js ***!
  \***************************************************************************************************/
/*! exports provided: subscribeToIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToIterable", function() { return subscribeToIterable; });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/iterator */ "sWLk");

const subscribeToIterable = (iterable) => (subscriber) => {
    const iterator = iterable[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__["iterator"]]();
    do {
        let item;
        try {
            item = iterator.next();
        }
        catch (err) {
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
    if (typeof iterator.return === 'function') {
        subscriber.add(() => {
            if (iterator.return) {
                iterator.return();
            }
        });
    }
    return subscriber;
};
//# sourceMappingURL=subscribeToIterable.js.map

/***/ }),

/***/ "qplQ":
/*!***********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/windowWhen.js ***!
  \***********************************************************************************************/
/*! exports provided: windowWhen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowWhen", function() { return windowWhen; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ "ZTXN");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OuterSubscriber */ "pBDD");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/subscribeToResult */ "mW0F");



function windowWhen(closingSelector) {
    return function windowWhenOperatorFunction(source) {
        return source.lift(new WindowOperator(closingSelector));
    };
}
class WindowOperator {
    constructor(closingSelector) {
        this.closingSelector = closingSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new WindowSubscriber(subscriber, this.closingSelector));
    }
}
class WindowSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_1__["OuterSubscriber"] {
    constructor(destination, closingSelector) {
        super(destination);
        this.destination = destination;
        this.closingSelector = closingSelector;
        this.openWindow();
    }
    notifyNext(_outerValue, _innerValue, _outerIndex, _innerIndex, innerSub) {
        this.openWindow(innerSub);
    }
    notifyError(error) {
        this._error(error);
    }
    notifyComplete(innerSub) {
        this.openWindow(innerSub);
    }
    _next(value) {
        this.window.next(value);
    }
    _error(err) {
        this.window.error(err);
        this.destination.error(err);
        this.unsubscribeClosingNotification();
    }
    _complete() {
        this.window.complete();
        this.destination.complete();
        this.unsubscribeClosingNotification();
    }
    unsubscribeClosingNotification() {
        if (this.closingNotification) {
            this.closingNotification.unsubscribe();
        }
    }
    openWindow(innerSub = null) {
        if (innerSub) {
            this.remove(innerSub);
            innerSub.unsubscribe();
        }
        const prevWindow = this.window;
        if (prevWindow) {
            prevWindow.complete();
        }
        const window = this.window = new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.destination.next(window);
        let closingNotifier;
        try {
            const { closingSelector } = this;
            closingNotifier = closingSelector();
        }
        catch (e) {
            this.destination.error(e);
            this.window.error(e);
            return;
        }
        this.add(this.closingNotification = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_2__["subscribeToResult"])(this, closingNotifier));
    }
}
//# sourceMappingURL=windowWhen.js.map

/***/ }),

/***/ "r9RI":
/*!******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/InnerSubscriber.js ***!
  \******************************************************************************************/
/*! exports provided: InnerSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerSubscriber", function() { return InnerSubscriber; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ "5uGe");

class InnerSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(parent, outerValue, outerIndex) {
        super();
        this.parent = parent;
        this.outerValue = outerValue;
        this.outerIndex = outerIndex;
        this.index = 0;
    }
    _next(value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    }
    _error(error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    }
    _complete() {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    }
}
//# sourceMappingURL=InnerSubscriber.js.map

/***/ }),

/***/ "rNc+":
/*!***********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/mergeMapTo.js ***!
  \***********************************************************************************************/
/*! exports provided: mergeMapTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeMapTo", function() { return mergeMapTo; });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeMap */ "cJ9h");

function mergeMapTo(innerObservable, resultSelector, concurrent = Number.POSITIVE_INFINITY) {
    if (typeof resultSelector === 'function') {
        return Object(_mergeMap__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(() => innerObservable, resultSelector, concurrent);
    }
    if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return Object(_mergeMap__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(() => innerObservable, concurrent);
}
//# sourceMappingURL=mergeMapTo.js.map

/***/ }),

/***/ "rVMB":
/*!*******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/zipAll.js ***!
  \*******************************************************************************************/
/*! exports provided: zipAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zipAll", function() { return zipAll; });
/* harmony import */ var _observable_zip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/zip */ "wTjk");

function zipAll(project) {
    return (source) => source.lift(new _observable_zip__WEBPACK_IMPORTED_MODULE_0__["ZipOperator"](project));
}
//# sourceMappingURL=zipAll.js.map

/***/ }),

/***/ "rWo0":
/*!***********************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/Observer.js ***!
  \***********************************************************************************/
/*! exports provided: empty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "HgnN");
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/hostReportError */ "i9P/");


const empty = {
    closed: true,
    next(value) { },
    error(err) {
        if (_config__WEBPACK_IMPORTED_MODULE_0__["config"].useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_1__["hostReportError"])(err);
        }
    },
    complete() { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "ruxD":
/*!*********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/finalize.js ***!
  \*********************************************************************************************/
/*! exports provided: finalize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finalize", function() { return finalize; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "bwdy");


function finalize(callback) {
    return (source) => source.lift(new FinallyOperator(callback));
}
class FinallyOperator {
    constructor(callback) {
        this.callback = callback;
    }
    call(subscriber, source) {
        return source.subscribe(new FinallySubscriber(subscriber, this.callback));
    }
}
class FinallySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, callback) {
        super(destination);
        this.add(new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"](callback));
    }
}
//# sourceMappingURL=finalize.js.map

/***/ }),

/***/ "ryP2":
/*!***************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/Notification.js ***!
  \***************************************************************************************/
/*! exports provided: NotificationKind, Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationKind", function() { return NotificationKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observable/empty */ "6Oco");
/* harmony import */ var _observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observable/of */ "ROBh");
/* harmony import */ var _observable_throwError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observable/throwError */ "47ST");



var NotificationKind;
(function (NotificationKind) {
    NotificationKind["NEXT"] = "N";
    NotificationKind["ERROR"] = "E";
    NotificationKind["COMPLETE"] = "C";
})(NotificationKind || (NotificationKind = {}));
class Notification {
    constructor(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    observe(observer) {
        switch (this.kind) {
            case 'N':
                return observer.next && observer.next(this.value);
            case 'E':
                return observer.error && observer.error(this.error);
            case 'C':
                return observer.complete && observer.complete();
        }
    }
    do(next, error, complete) {
        const kind = this.kind;
        switch (kind) {
            case 'N':
                return next && next(this.value);
            case 'E':
                return error && error(this.error);
            case 'C':
                return complete && complete();
        }
    }
    accept(nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    }
    toObservable() {
        const kind = this.kind;
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
    static createNext(value) {
        if (typeof value !== 'undefined') {
            return new Notification('N', value);
        }
        return Notification.undefinedValueNotification;
    }
    static createError(err) {
        return new Notification('E', undefined, err);
    }
    static createComplete() {
        return Notification.completeNotification;
    }
}
Notification.completeNotification = new Notification('C');
Notification.undefinedValueNotification = new Notification('N', undefined);
//# sourceMappingURL=Notification.js.map

/***/ }),

/***/ "sWLk":
/*!******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/symbol/iterator.js ***!
  \******************************************************************************************/
/*! exports provided: getSymbolIterator, iterator, $$iterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSymbolIterator", function() { return getSymbolIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterator", function() { return iterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$iterator", function() { return $$iterator; });
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
const iterator = getSymbolIterator();
const $$iterator = iterator;
//# sourceMappingURL=iterator.js.map

/***/ }),

/***/ "soHz":
/*!************************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/distinctUntilKeyChanged.js ***!
  \************************************************************************************************************/
/*! exports provided: distinctUntilKeyChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinctUntilKeyChanged", function() { return distinctUntilKeyChanged; });
/* harmony import */ var _distinctUntilChanged__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distinctUntilChanged */ "Ohay");

function distinctUntilKeyChanged(key, compare) {
    return Object(_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])((x, y) => compare ? compare(x[key], y[key]) : x[key] === y[key]);
}
//# sourceMappingURL=distinctUntilKeyChanged.js.map

/***/ }),

/***/ "tDaw":
/*!*********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/distinct.js ***!
  \*********************************************************************************************/
/*! exports provided: distinct, DistinctSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinct", function() { return distinct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistinctSubscriber", function() { return DistinctSubscriber; });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ "uCWR");

function distinct(keySelector, flushes) {
    return (source) => source.lift(new DistinctOperator(keySelector, flushes));
}
class DistinctOperator {
    constructor(keySelector, flushes) {
        this.keySelector = keySelector;
        this.flushes = flushes;
    }
    call(subscriber, source) {
        return source.subscribe(new DistinctSubscriber(subscriber, this.keySelector, this.flushes));
    }
}
class DistinctSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleOuterSubscriber"] {
    constructor(destination, keySelector, flushes) {
        super(destination);
        this.keySelector = keySelector;
        this.values = new Set();
        if (flushes) {
            this.add(Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["innerSubscribe"])(flushes, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleInnerSubscriber"](this)));
        }
    }
    notifyNext() {
        this.values.clear();
    }
    notifyError(error) {
        this._error(error);
    }
    _next(value) {
        if (this.keySelector) {
            this._useKeySelector(value);
        }
        else {
            this._finalizeNext(value, value);
        }
    }
    _useKeySelector(value) {
        let key;
        const { destination } = this;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        this._finalizeNext(key, value);
    }
    _finalizeNext(key, value) {
        const { values } = this;
        if (!values.has(key)) {
            values.add(key);
            this.destination.next(value);
        }
    }
}
//# sourceMappingURL=distinct.js.map

/***/ }),

/***/ "tGer":
/*!********************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/index.js ***!
  \********************************************************************/
/*! exports provided: connectToChild, connectToParent, ErrorCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parent_connectToChild__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parent/connectToChild */ "503g");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectToChild", function() { return _parent_connectToChild__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _child_connectToParent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./child/connectToParent */ "fSpn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectToParent", function() { return _child_connectToParent__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums */ "Rj9D");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorCode", function() { return _enums__WEBPACK_IMPORTED_MODULE_2__["ErrorCode"]; });






/***/ }),

/***/ "tII7":
/*!**********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/findIndex.js ***!
  \**********************************************************************************************/
/*! exports provided: findIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony import */ var _operators_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../operators/find */ "14JN");

function findIndex(predicate, thisArg) {
    return (source) => source.lift(new _operators_find__WEBPACK_IMPORTED_MODULE_0__["FindValueOperator"](predicate, source, true, thisArg));
}
//# sourceMappingURL=findIndex.js.map

/***/ }),

/***/ "tUyG":
/*!*******************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/penpal/lib/createDestructor.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {
    const callbacks = [];
    let destroyed = false;
    return {
        destroy(error) {
            destroyed = true;
            callbacks.forEach(callback => {
                callback(error);
            });
        },
        onDestroy(callback) {
            destroyed ? callback() : callbacks.push(callback);
        }
    };
});


/***/ }),

/***/ "uCWR":
/*!*****************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/innerSubscribe.js ***!
  \*****************************************************************************************/
/*! exports provided: SimpleInnerSubscriber, ComplexInnerSubscriber, SimpleOuterSubscriber, ComplexOuterSubscriber, innerSubscribe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleInnerSubscriber", function() { return SimpleInnerSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplexInnerSubscriber", function() { return ComplexInnerSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleOuterSubscriber", function() { return SimpleOuterSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplexOuterSubscriber", function() { return ComplexOuterSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "innerSubscribe", function() { return innerSubscribe; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ "5uGe");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Observable */ "IdLP");
/* harmony import */ var _util_subscribeTo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/subscribeTo */ "1MAX");



class SimpleInnerSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(parent) {
        super();
        this.parent = parent;
    }
    _next(value) {
        this.parent.notifyNext(value);
    }
    _error(error) {
        this.parent.notifyError(error);
        this.unsubscribe();
    }
    _complete() {
        this.parent.notifyComplete();
        this.unsubscribe();
    }
}
class ComplexInnerSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(parent, outerValue, outerIndex) {
        super();
        this.parent = parent;
        this.outerValue = outerValue;
        this.outerIndex = outerIndex;
    }
    _next(value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this);
    }
    _error(error) {
        this.parent.notifyError(error);
        this.unsubscribe();
    }
    _complete() {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    }
}
class SimpleOuterSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    notifyNext(innerValue) {
        this.destination.next(innerValue);
    }
    notifyError(err) {
        this.destination.error(err);
    }
    notifyComplete() {
        this.destination.complete();
    }
}
class ComplexOuterSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    notifyNext(_outerValue, innerValue, _outerIndex, _innerSub) {
        this.destination.next(innerValue);
    }
    notifyError(error) {
        this.destination.error(error);
    }
    notifyComplete(_innerSub) {
        this.destination.complete();
    }
}
function innerSubscribe(result, innerSubscriber) {
    if (innerSubscriber.closed) {
        return undefined;
    }
    if (result instanceof _Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]) {
        return result.subscribe(innerSubscriber);
    }
    return Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_2__["subscribeTo"])(result)(innerSubscriber);
}
//# sourceMappingURL=innerSubscribe.js.map

/***/ }),

/***/ "uDlg":
/*!*******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/sample.js ***!
  \*******************************************************************************************/
/*! exports provided: sample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return sample; });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ "uCWR");

function sample(notifier) {
    return (source) => source.lift(new SampleOperator(notifier));
}
class SampleOperator {
    constructor(notifier) {
        this.notifier = notifier;
    }
    call(subscriber, source) {
        const sampleSubscriber = new SampleSubscriber(subscriber);
        const subscription = source.subscribe(sampleSubscriber);
        subscription.add(Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["innerSubscribe"])(this.notifier, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleInnerSubscriber"](sampleSubscriber)));
        return subscription;
    }
}
class SampleSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__["SimpleOuterSubscriber"] {
    constructor() {
        super(...arguments);
        this.hasValue = false;
    }
    _next(value) {
        this.value = value;
        this.hasValue = true;
    }
    notifyNext() {
        this.emitValue();
    }
    notifyComplete() {
        this.emitValue();
    }
    emitValue() {
        if (this.hasValue) {
            this.hasValue = false;
            this.destination.next(this.value);
        }
    }
}
//# sourceMappingURL=sample.js.map

/***/ }),

/***/ "uTrF":
/*!***************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/UnsubscriptionError.js ***!
  \***************************************************************************************************/
/*! exports provided: UnsubscriptionError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function() { return UnsubscriptionError; });
const UnsubscriptionErrorImpl = (() => {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join('\n  ')}` : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
const UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "vAPC":
/*!************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/timeoutWith.js ***!
  \************************************************************************************************/
/*! exports provided: timeoutWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeoutWith", function() { return timeoutWith; });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ "Efrr");
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isDate */ "iRe+");
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../innerSubscribe */ "uCWR");



function timeoutWith(due, withObservable, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__["async"]) {
    return (source) => {
        let absoluteTimeout = Object(_util_isDate__WEBPACK_IMPORTED_MODULE_1__["isDate"])(due);
        let waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
        return source.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
    };
}
class TimeoutWithOperator {
    constructor(waitFor, absoluteTimeout, withObservable, scheduler) {
        this.waitFor = waitFor;
        this.absoluteTimeout = absoluteTimeout;
        this.withObservable = withObservable;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
    }
}
class TimeoutWithSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["SimpleOuterSubscriber"] {
    constructor(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
        super(destination);
        this.absoluteTimeout = absoluteTimeout;
        this.waitFor = waitFor;
        this.withObservable = withObservable;
        this.scheduler = scheduler;
        this.scheduleTimeout();
    }
    static dispatchTimeout(subscriber) {
        const { withObservable } = subscriber;
        subscriber._unsubscribeAndRecycle();
        subscriber.add(Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["innerSubscribe"])(withObservable, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__["SimpleInnerSubscriber"](subscriber)));
    }
    scheduleTimeout() {
        const { action } = this;
        if (action) {
            this.action = action.schedule(this, this.waitFor);
        }
        else {
            this.add(this.action = this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, this));
        }
    }
    _next(value) {
        if (!this.absoluteTimeout) {
            this.scheduleTimeout();
        }
        super._next(value);
    }
    _unsubscribe() {
        this.action = undefined;
        this.scheduler = null;
        this.withObservable = null;
    }
}
//# sourceMappingURL=timeoutWith.js.map

/***/ }),

/***/ "vOrQ":
/*!**************************!*\
  !*** external "ng.core" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vOrQ__;

/***/ }),

/***/ "vT4p":
/*!*****************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/scheduler/asap.js ***!
  \*****************************************************************************************/
/*! exports provided: asapScheduler, asap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asapScheduler", function() { return asapScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asap", function() { return asap; });
/* harmony import */ var _AsapAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsapAction */ "f8VV");
/* harmony import */ var _AsapScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsapScheduler */ "ZNOZ");


const asapScheduler = new _AsapScheduler__WEBPACK_IMPORTED_MODULE_1__["AsapScheduler"](_AsapAction__WEBPACK_IMPORTED_MODULE_0__["AsapAction"]);
const asap = asapScheduler;
//# sourceMappingURL=asap.js.map

/***/ }),

/***/ "vcZZ":
/*!***********************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/SubscribeOnObservable.js ***!
  \***********************************************************************************************************/
/*! exports provided: SubscribeOnObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeOnObservable", function() { return SubscribeOnObservable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "IdLP");
/* harmony import */ var _scheduler_asap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/asap */ "vT4p");
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isNumeric */ "KRZI");



class SubscribeOnObservable extends _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"] {
    constructor(source, delayTime = 0, scheduler = _scheduler_asap__WEBPACK_IMPORTED_MODULE_1__["asap"]) {
        super();
        this.source = source;
        this.delayTime = delayTime;
        this.scheduler = scheduler;
        if (!Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(delayTime) || delayTime < 0) {
            this.delayTime = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            this.scheduler = _scheduler_asap__WEBPACK_IMPORTED_MODULE_1__["asap"];
        }
    }
    static create(source, delay = 0, scheduler = _scheduler_asap__WEBPACK_IMPORTED_MODULE_1__["asap"]) {
        return new SubscribeOnObservable(source, delay, scheduler);
    }
    static dispatch(arg) {
        const { source, subscriber } = arg;
        return this.add(source.subscribe(subscriber));
    }
    _subscribe(subscriber) {
        const delay = this.delayTime;
        const source = this.source;
        const scheduler = this.scheduler;
        return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
            source, subscriber
        });
    }
}
//# sourceMappingURL=SubscribeOnObservable.js.map

/***/ }),

/***/ "vjgY":
/*!**************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/dematerialize.js ***!
  \**************************************************************************************************/
/*! exports provided: dematerialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dematerialize", function() { return dematerialize; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");

function dematerialize() {
    return function dematerializeOperatorFunction(source) {
        return source.lift(new DeMaterializeOperator());
    };
}
class DeMaterializeOperator {
    call(subscriber, source) {
        return source.subscribe(new DeMaterializeSubscriber(subscriber));
    }
}
class DeMaterializeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination) {
        super(destination);
    }
    _next(value) {
        value.observe(this.destination);
    }
}
//# sourceMappingURL=dematerialize.js.map

/***/ }),

/***/ "w0kG":
/*!***************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/withLatestFrom.js ***!
  \***************************************************************************************************/
/*! exports provided: withLatestFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withLatestFrom", function() { return withLatestFrom; });
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OuterSubscriber */ "pBDD");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToResult */ "mW0F");


function withLatestFrom(...args) {
    return (source) => {
        let project;
        if (typeof args[args.length - 1] === 'function') {
            project = args.pop();
        }
        const observables = args;
        return source.lift(new WithLatestFromOperator(observables, project));
    };
}
class WithLatestFromOperator {
    constructor(observables, project) {
        this.observables = observables;
        this.project = project;
    }
    call(subscriber, source) {
        return source.subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
    }
}
class WithLatestFromSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__["OuterSubscriber"] {
    constructor(destination, observables, project) {
        super(destination);
        this.observables = observables;
        this.project = project;
        this.toRespond = [];
        const len = observables.length;
        this.values = new Array(len);
        for (let i = 0; i < len; i++) {
            this.toRespond.push(i);
        }
        for (let i = 0; i < len; i++) {
            let observable = observables[i];
            this.add(Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__["subscribeToResult"])(this, observable, undefined, i));
        }
    }
    notifyNext(_outerValue, innerValue, outerIndex) {
        this.values[outerIndex] = innerValue;
        const toRespond = this.toRespond;
        if (toRespond.length > 0) {
            const found = toRespond.indexOf(outerIndex);
            if (found !== -1) {
                toRespond.splice(found, 1);
            }
        }
    }
    notifyComplete() {
    }
    _next(value) {
        if (this.toRespond.length === 0) {
            const args = [value, ...this.values];
            if (this.project) {
                this._tryProject(args);
            }
            else {
                this.destination.next(args);
            }
        }
    }
    _tryProject(args) {
        let result;
        try {
            result = this.project.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    }
}
//# sourceMappingURL=withLatestFrom.js.map

/***/ }),

/***/ "w2TD":
/*!********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/endWith.js ***!
  \********************************************************************************************/
/*! exports provided: endWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endWith", function() { return endWith; });
/* harmony import */ var _observable_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/concat */ "qZtG");
/* harmony import */ var _observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/of */ "ROBh");


function endWith(...array) {
    return (source) => Object(_observable_concat__WEBPACK_IMPORTED_MODULE_0__["concat"])(source, Object(_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])(...array));
}
//# sourceMappingURL=endWith.js.map

/***/ }),

/***/ "wIzt":
/*!*****************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/util/subscribeToObservable.js ***!
  \*****************************************************************************************************/
/*! exports provided: subscribeToObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToObservable", function() { return subscribeToObservable; });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/observable */ "qEfY");

const subscribeToObservable = (obj) => (subscriber) => {
    const obs = obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__["observable"]]();
    if (typeof obs.subscribe !== 'function') {
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    }
    else {
        return obs.subscribe(subscriber);
    }
};
//# sourceMappingURL=subscribeToObservable.js.map

/***/ }),

/***/ "wTjk":
/*!*****************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/observable/zip.js ***!
  \*****************************************************************************************/
/*! exports provided: zip, ZipOperator, ZipSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return zip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipOperator", function() { return ZipOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipSubscriber", function() { return ZipSubscriber; });
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromArray */ "ckkg");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "FU6l");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscriber */ "5uGe");
/* harmony import */ var _internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal/symbol/iterator */ "sWLk");
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../innerSubscribe */ "uCWR");





function zip(...observables) {
    const resultSelector = observables[observables.length - 1];
    if (typeof resultSelector === 'function') {
        observables.pop();
    }
    return Object(_fromArray__WEBPACK_IMPORTED_MODULE_0__["fromArray"])(observables, undefined).lift(new ZipOperator(resultSelector));
}
class ZipOperator {
    constructor(resultSelector) {
        this.resultSelector = resultSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
    }
}
class ZipSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_2__["Subscriber"] {
    constructor(destination, resultSelector, values = Object.create(null)) {
        super(destination);
        this.resultSelector = resultSelector;
        this.iterators = [];
        this.active = 0;
        this.resultSelector = (typeof resultSelector === 'function') ? resultSelector : undefined;
    }
    _next(value) {
        const iterators = this.iterators;
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value)) {
            iterators.push(new StaticArrayIterator(value));
        }
        else if (typeof value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__["iterator"]] === 'function') {
            iterators.push(new StaticIterator(value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__["iterator"]]()));
        }
        else {
            iterators.push(new ZipBufferIterator(this.destination, this, value));
        }
    }
    _complete() {
        const iterators = this.iterators;
        const len = iterators.length;
        this.unsubscribe();
        if (len === 0) {
            this.destination.complete();
            return;
        }
        this.active = len;
        for (let i = 0; i < len; i++) {
            let iterator = iterators[i];
            if (iterator.stillUnsubscribed) {
                const destination = this.destination;
                destination.add(iterator.subscribe());
            }
            else {
                this.active--;
            }
        }
    }
    notifyInactive() {
        this.active--;
        if (this.active === 0) {
            this.destination.complete();
        }
    }
    checkIterators() {
        const iterators = this.iterators;
        const len = iterators.length;
        const destination = this.destination;
        for (let i = 0; i < len; i++) {
            let iterator = iterators[i];
            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                return;
            }
        }
        let shouldComplete = false;
        const args = [];
        for (let i = 0; i < len; i++) {
            let iterator = iterators[i];
            let result = iterator.next();
            if (iterator.hasCompleted()) {
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
        }
        else {
            destination.next(args);
        }
        if (shouldComplete) {
            destination.complete();
        }
    }
    _tryresultSelector(args) {
        let result;
        try {
            result = this.resultSelector.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    }
}
class StaticIterator {
    constructor(iterator) {
        this.iterator = iterator;
        this.nextResult = iterator.next();
    }
    hasValue() {
        return true;
    }
    next() {
        const result = this.nextResult;
        this.nextResult = this.iterator.next();
        return result;
    }
    hasCompleted() {
        const nextResult = this.nextResult;
        return Boolean(nextResult && nextResult.done);
    }
}
class StaticArrayIterator {
    constructor(array) {
        this.array = array;
        this.index = 0;
        this.length = 0;
        this.length = array.length;
    }
    [_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__["iterator"]]() {
        return this;
    }
    next(value) {
        const i = this.index++;
        const array = this.array;
        return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
    }
    hasValue() {
        return this.array.length > this.index;
    }
    hasCompleted() {
        return this.array.length === this.index;
    }
}
class ZipBufferIterator extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_4__["SimpleOuterSubscriber"] {
    constructor(destination, parent, observable) {
        super(destination);
        this.parent = parent;
        this.observable = observable;
        this.stillUnsubscribed = true;
        this.buffer = [];
        this.isComplete = false;
    }
    [_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_3__["iterator"]]() {
        return this;
    }
    next() {
        const buffer = this.buffer;
        if (buffer.length === 0 && this.isComplete) {
            return { value: null, done: true };
        }
        else {
            return { value: buffer.shift(), done: false };
        }
    }
    hasValue() {
        return this.buffer.length > 0;
    }
    hasCompleted() {
        return this.buffer.length === 0 && this.isComplete;
    }
    notifyComplete() {
        if (this.buffer.length > 0) {
            this.isComplete = true;
            this.parent.notifyInactive();
        }
        else {
            this.destination.complete();
        }
    }
    notifyNext(innerValue) {
        this.buffer.push(innerValue);
        this.parent.checkIterators();
    }
    subscribe() {
        return Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_4__["innerSubscribe"])(this.observable, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_4__["SimpleInnerSubscriber"](this));
    }
}
//# sourceMappingURL=zip.js.map

/***/ }),

/***/ "wqq/":
/*!************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/shareReplay.js ***!
  \************************************************************************************************/
/*! exports provided: shareReplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shareReplay", function() { return shareReplay; });
/* harmony import */ var _ReplaySubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ReplaySubject */ "QQZH");

function shareReplay(configOrBufferSize, windowTime, scheduler) {
    let config;
    if (configOrBufferSize && typeof configOrBufferSize === 'object') {
        config = configOrBufferSize;
    }
    else {
        config = {
            bufferSize: configOrBufferSize,
            windowTime,
            refCount: false,
            scheduler
        };
    }
    return (source) => source.lift(shareReplayOperator(config));
}
function shareReplayOperator({ bufferSize = Number.POSITIVE_INFINITY, windowTime = Number.POSITIVE_INFINITY, refCount: useRefCount, scheduler }) {
    let subject;
    let refCount = 0;
    let subscription;
    let hasError = false;
    let isComplete = false;
    return function shareReplayOperation(source) {
        refCount++;
        let innerSub;
        if (!subject || hasError) {
            hasError = false;
            subject = new _ReplaySubject__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](bufferSize, windowTime, scheduler);
            innerSub = subject.subscribe(this);
            subscription = source.subscribe({
                next(value) { subject.next(value); },
                error(err) {
                    hasError = true;
                    subject.error(err);
                },
                complete() {
                    isComplete = true;
                    subscription = undefined;
                    subject.complete();
                },
            });
        }
        else {
            innerSub = subject.subscribe(this);
        }
        this.add(() => {
            refCount--;
            innerSub.unsubscribe();
            if (subscription && !isComplete && useRefCount && refCount === 0) {
                subscription.unsubscribe();
                subscription = undefined;
                subject = undefined;
            }
        });
    };
}
//# sourceMappingURL=shareReplay.js.map

/***/ }),

/***/ "xOLM":
/*!**********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/retryWhen.js ***!
  \**********************************************************************************************/
/*! exports provided: retryWhen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retryWhen", function() { return retryWhen; });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ "ZTXN");
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../innerSubscribe */ "uCWR");


function retryWhen(notifier) {
    return (source) => source.lift(new RetryWhenOperator(notifier, source));
}
class RetryWhenOperator {
    constructor(notifier, source) {
        this.notifier = notifier;
        this.source = source;
    }
    call(subscriber, source) {
        return source.subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
    }
}
class RetryWhenSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_1__["SimpleOuterSubscriber"] {
    constructor(destination, notifier, source) {
        super(destination);
        this.notifier = notifier;
        this.source = source;
    }
    error(err) {
        if (!this.isStopped) {
            let errors = this.errors;
            let retries = this.retries;
            let retriesSubscription = this.retriesSubscription;
            if (!retries) {
                errors = new _Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
                try {
                    const { notifier } = this;
                    retries = notifier(errors);
                }
                catch (e) {
                    return super.error(e);
                }
                retriesSubscription = Object(_innerSubscribe__WEBPACK_IMPORTED_MODULE_1__["innerSubscribe"])(retries, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_1__["SimpleInnerSubscriber"](this));
            }
            else {
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
    _unsubscribe() {
        const { errors, retriesSubscription } = this;
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
    notifyNext() {
        const { _unsubscribe } = this;
        this._unsubscribe = null;
        this._unsubscribeAndRecycle();
        this._unsubscribe = _unsubscribe;
        this.source.subscribe(this);
    }
}
//# sourceMappingURL=retryWhen.js.map

/***/ }),

/***/ "xVbo":
/*!*******************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/filter.js ***!
  \*******************************************************************************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");

function filter(predicate, thisArg) {
    return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
    };
}
class FilterOperator {
    constructor(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    call(subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    }
}
class FilterSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, predicate, thisArg) {
        super(destination);
        this.predicate = predicate;
        this.thisArg = thisArg;
        this.count = 0;
    }
    _next(value) {
        let result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.destination.next(value);
        }
    }
}
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "xtkq":
/*!********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/groupBy.js ***!
  \********************************************************************************************/
/*! exports provided: groupBy, GroupedObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupedObservable", function() { return GroupedObservable; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "5uGe");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "bwdy");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ "IdLP");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Subject */ "ZTXN");




function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return (source) => source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
}
class GroupByOperator {
    constructor(keySelector, elementSelector, durationSelector, subjectSelector) {
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
    }
}
class GroupBySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
        super(destination);
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
        this.groups = null;
        this.attemptedToUnsubscribe = false;
        this.count = 0;
    }
    _next(value) {
        let key;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            this.error(err);
            return;
        }
        this._group(value, key);
    }
    _group(value, key) {
        let groups = this.groups;
        if (!groups) {
            groups = this.groups = new Map();
        }
        let group = groups.get(key);
        let element;
        if (this.elementSelector) {
            try {
                element = this.elementSelector(value);
            }
            catch (err) {
                this.error(err);
            }
        }
        else {
            element = value;
        }
        if (!group) {
            group = (this.subjectSelector ? this.subjectSelector() : new _Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]());
            groups.set(key, group);
            const groupedObservable = new GroupedObservable(key, group, this);
            this.destination.next(groupedObservable);
            if (this.durationSelector) {
                let duration;
                try {
                    duration = this.durationSelector(new GroupedObservable(key, group));
                }
                catch (err) {
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
    _error(err) {
        const groups = this.groups;
        if (groups) {
            groups.forEach((group, key) => {
                group.error(err);
            });
            groups.clear();
        }
        this.destination.error(err);
    }
    _complete() {
        const groups = this.groups;
        if (groups) {
            groups.forEach((group, key) => {
                group.complete();
            });
            groups.clear();
        }
        this.destination.complete();
    }
    removeGroup(key) {
        this.groups.delete(key);
    }
    unsubscribe() {
        if (!this.closed) {
            this.attemptedToUnsubscribe = true;
            if (this.count === 0) {
                super.unsubscribe();
            }
        }
    }
}
class GroupDurationSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"] {
    constructor(key, group, parent) {
        super(group);
        this.key = key;
        this.group = group;
        this.parent = parent;
    }
    _next(value) {
        this.complete();
    }
    _unsubscribe() {
        const { parent, key } = this;
        this.key = this.parent = null;
        if (parent) {
            parent.removeGroup(key);
        }
    }
}
class GroupedObservable extends _Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"] {
    constructor(key, groupSubject, refCountSubscription) {
        super();
        this.key = key;
        this.groupSubject = groupSubject;
        this.refCountSubscription = refCountSubscription;
    }
    _subscribe(subscriber) {
        const subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        const { refCountSubscription, groupSubject } = this;
        if (refCountSubscription && !refCountSubscription.closed) {
            subscription.add(new InnerRefCountSubscription(refCountSubscription));
        }
        subscription.add(groupSubject.subscribe(subscriber));
        return subscription;
    }
}
class InnerRefCountSubscription extends _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"] {
    constructor(parent) {
        super();
        this.parent = parent;
        parent.count++;
    }
    unsubscribe() {
        const parent = this.parent;
        if (!parent.closed && !this.closed) {
            super.unsubscribe();
            parent.count -= 1;
            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                parent.unsubscribe();
            }
        }
    }
}
//# sourceMappingURL=groupBy.js.map

/***/ }),

/***/ "yCv1":
/*!************************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/operators/subscribeOn.js ***!
  \************************************************************************************************/
/*! exports provided: subscribeOn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeOn", function() { return subscribeOn; });
/* harmony import */ var _observable_SubscribeOnObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/SubscribeOnObservable */ "vcZZ");

function subscribeOn(scheduler, delay = 0) {
    return function subscribeOnOperatorFunction(source) {
        return source.lift(new SubscribeOnOperator(scheduler, delay));
    };
}
class SubscribeOnOperator {
    constructor(scheduler, delay) {
        this.scheduler = scheduler;
        this.delay = delay;
    }
    call(subscriber, source) {
        return new _observable_SubscribeOnObservable__WEBPACK_IMPORTED_MODULE_0__["SubscribeOnObservable"](source, this.delay, this.scheduler).subscribe(subscriber);
    }
}
//# sourceMappingURL=subscribeOn.js.map

/***/ }),

/***/ "yTkW":
/*!**********************************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/node_modules/rxjs/_esm2015/internal/SubjectSubscription.js ***!
  \**********************************************************************************************/
/*! exports provided: SubjectSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSubscription", function() { return SubjectSubscription; });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscription */ "bwdy");

class SubjectSubscription extends _Subscription__WEBPACK_IMPORTED_MODULE_0__["Subscription"] {
    constructor(subject, subscriber) {
        super();
        this.subject = subject;
        this.subscriber = subscriber;
        this.closed = false;
    }
    unsubscribe() {
        if (this.closed) {
            return;
        }
        this.closed = true;
        const subject = this.subject;
        const observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        const subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    }
}
//# sourceMappingURL=SubjectSubscription.js.map

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: ButtonComponent, ChildIframeEvents, IFrameChatService, SharedComponent, SharedModule, TabComponent, TabsComponent, TestService, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared */ "9hGb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return shared__WEBPACK_IMPORTED_MODULE_0__["ButtonComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChildIframeEvents", function() { return shared__WEBPACK_IMPORTED_MODULE_0__["ChildIframeEvents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IFrameChatService", function() { return shared__WEBPACK_IMPORTED_MODULE_0__["IFrameChatService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedComponent", function() { return shared__WEBPACK_IMPORTED_MODULE_0__["SharedComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return shared__WEBPACK_IMPORTED_MODULE_0__["TabComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return shared__WEBPACK_IMPORTED_MODULE_0__["TabsComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return shared__WEBPACK_IMPORTED_MODULE_0__["TestService"]; });



/* harmony default export */ __webpack_exports__["default"] = (shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]);


/***/ })

/******/ });
});
//# sourceMappingURL=shared.js.map
//# sourceMappingURL=shared.js.map