(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ng.common"), require("rxjs"), require("rxjs.operators"), require("ng.core"));
	else if(typeof define === 'function' && define.amd)
		define(["ng.common", "rxjs", "rxjs.operators", "ng.core"], factory);
	else if(typeof exports === 'object')
		exports["shared"] = factory(require("ng.common"), require("rxjs"), require("rxjs.operators"), require("ng.core"));
	else
		root["shared"] = factory(root["ng.common"], root["rxjs"], root["rxjs.operators"], root["ng.core"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__0S4P__, __WEBPACK_EXTERNAL_MODULE_Vgaj__, __WEBPACK_EXTERNAL_MODULE_aP7H__, __WEBPACK_EXTERNAL_MODULE_vOrQ__) {
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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\d\Project\VSoft\VCMS.WEB\projects\plugins\src\main.ts */"zUnb");


/***/ }),

/***/ "0S4P":
/*!****************************!*\
  !*** external "ng.common" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0S4P__;

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "aP7H");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);









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
    // constructor(iframe: HTMLIFrameElement, parentAPI?: IParentWindowAPI) {
    // 	if (parentAPI) parentAPI.iframeChatService = this;
    // 	this.Init(iframe, parentAPI);
    // }
    constructor() {
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
    Init(iframe, parentAPI) {
        if (parentAPI)
            parentAPI.iframeChatService = this;
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
            this.hadInit = true;
            this.onConnected.emit(true);
        }))
            .subscribe();
    }
    destroy() {
        this.hadInit = false;
        if (this.childAPI)
            this.connection.destroy();
    }
}
IFrameChatService.ɵfac = function IFrameChatService_Factory(t) { return new (t || IFrameChatService)(); };
IFrameChatService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function IFrameChatService_Factory() { return new IFrameChatService(); }, token: IFrameChatService, providedIn: "root" });
IFrameChatService.ctorParameters = () => [];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IFrameChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

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

/***/ "aP7H":
/*!*********************************!*\
  !*** external "rxjs.operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_aP7H__;

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

/***/ "vOrQ":
/*!**************************!*\
  !*** external "ng.core" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vOrQ__;

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