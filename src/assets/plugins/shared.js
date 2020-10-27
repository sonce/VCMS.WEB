(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ng.common"), require("ng.core"));
	else if(typeof define === 'function' && define.amd)
		define(["ng.common", "ng.core"], factory);
	else if(typeof exports === 'object')
		exports["shared"] = factory(require("ng.common"), require("ng.core"));
	else
		root["shared"] = factory(root["ng.common"], root["ng.core"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__0S4P__, __WEBPACK_EXTERNAL_MODULE_vOrQ__) {
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

/***/ "9hGb":
/*!*******************************************************************************!*\
  !*** F:/d/Project/VSoft/VCMS.WEB/dist/shared/__ivy_ngcc__/fesm2015/shared.js ***!
  \*******************************************************************************/
/*! exports provided: ButtonComponent, SharedComponent, SharedModule, TabComponent, TabsComponent, TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponent", function() { return SharedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "vOrQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "0S4P");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);






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
                template: "<ul class=\"tabs\">\n  <li *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\" class=\"tab\" [class.tab--active]=\"!tab.hidden\">\n    {{ tab.title }}\n  </li>\n</ul>\n<div class=\"tab-body\">\n  <ng-content></ng-content>\n</div>\n",
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
/*! exports provided: ButtonComponent, SharedComponent, SharedModule, TabComponent, TabsComponent, TestService, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared */ "9hGb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return shared__WEBPACK_IMPORTED_MODULE_0__["ButtonComponent"]; });

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