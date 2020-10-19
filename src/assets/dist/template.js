'use strict';
/// <reference path="../@types/PostmateMethod.d.ts" />
/// <reference path="../@types/PostmatEvents.d.ts" />
/// <reference path="../@types/PostmateEx.d.ts" />
/// <reference path="../@types/MutationObserver.d.ts" />
/// <reference path="../@types/HTMLDOMElement.d.ts" />
exports.__esModule = true;
//#region Element
// Element.matches() polyfill
if (!Element.prototype.matches) {
	Element.prototype.matches =
		Element.prototype.matchesSelector ||
		Element.prototype.mozMatchesSelector ||
		Element.prototype.msMatchesSelector ||
		Element.prototype.oMatchesSelector ||
		Element.prototype.webkitMatchesSelector ||
		function (s) {
			var matches = (this.document || this.ownerDocument).querySelectorAll(s),
				i = matches.length;
			while (--i >= 0 && matches.item(i) !== this) {}
			return i > -1;
		};
}
HTMLElement.prototype.getParents = function (selector) {
	// Set up a parent array
	var parents = [];
	var elem = this;
	// Push each parent element to the array
	for (; elem && !document.isSameNode(elem); elem = elem.parentNode) {
		if (selector) {
			if (elem.matches(selector)) {
				parents.push(elem);
			}
			continue;
		}
		parents.push(elem);
	}
	// Return our parent array
	return parents;
};
if (!HTMLElement.prototype.closest)
	HTMLElement.prototype.closest = function (s) {
		var el = this;
		if (!document.documentElement.contains(el)) return null;
		do {
			if (el.matches(s)) return el;
			el = el.parentElement;
		} while (el !== null);
		return null;
	};
messageHandlers.InDesign = true;
// messageHandlers.Addons = [];
// messageHandlers.AddAddons = (...addons: IAddon[]) => {
//   messageHandlers.Addons = [...addons, ...messageHandlers.Addons];
// };
messageHandlers.IFrameLeft = 0;
messageHandlers.IFrameTop = 0;
messageHandlers.SetIframePos = function (left, top) {
	messageHandlers.IFrameLeft = left;
	messageHandlers.IFrameTop = top;
	return true;
};
messageHandlers.ToggleDesignState = function (indesign) {
	messageHandlers.InDesign = indesign;
	if (indesign) return messageHandlers.AddClass('html', 'indesign');
	else return messageHandlers.RemoveClass('html', 'indesign');
};
messageHandlers.AddClass = function (selector, classname) {
	document.querySelector(selector).classList.add(classname);
};
messageHandlers.RemoveClass = function (selector, classname) {
	document.querySelector(selector).classList.remove(classname);
};
messageHandlers.Del = function (addonId, removeEmptyParent) {
	var delElement = document.querySelector('[data-addon-id="' + addonId + '"]');
	if (delElement == null || typeof delElement === 'undefined') return true;
	var parent = delElement.parentElement;
	delElement.remove();
	if (!removeEmptyParent) {
		return true;
	}
	var parents = parent.getParents('[data-addon]');
	parents.forEach(function (p) {
		var containAddon = p.querySelector('[data-addon]');
		if (containAddon == null || typeof containAddon === 'undefined') p.remove();
	});
	return true;
};
var Template = /** @class */ (function () {
	function Template() {}
	Template.prototype.Init = function () {
		var _this = this;
		var MutationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver;
		if (MutationObserver) {
			this.mutationObserverConfig = {
				childList: true,
				subtree: true,
				characterData: true
			};
			this.observer = new MutationObserver(function (mutationsList) {
				if (!messageHandlers.InDesign) return;
				_this.currentElementInfo = _this.getAddonElementTree(_this.currentAddonElement);
				designer.emit('onTrackHoverElement', _this.currentElementInfo);
			});
		}
		this.disableClick();
		this.hoverAddonElement();
		this.attachScroll();
		designer.emit('onScriptInited');
	};
	/**
	 * 禁用页面单击，防止页面跳转
	 */
	Template.prototype.disableClick = function () {
		document.onclick = function (e) {
			if (messageHandlers.InDesign) {
				window.event ? (window.event.cancelBubble = true) : event.stopPropagation();
				var event = event || window.event; //用于IE
				if (event.preventDefault) event.preventDefault(); //标准技术
				if (event.returnValue) event.returnValue = false; //IE
				e.stopImmediatePropagation();
			}
		};
	};
	Template.prototype.attachScroll = function () {
		document.onscroll = function (e) {
			designer.emit('onScroll', document.scrollingElement.scrollTop);
		};
	};
	Template.prototype.hoverAddonElement = function () {
		var _this = this;
		document.onmouseover = function (e) {
			if (!messageHandlers.InDesign) return;
			e.stopPropagation();
			var srcElement = e.target.closest('[data-addon]');
			if (srcElement != null && typeof srcElement !== 'undefined') {
				if (_this.currentAddonElement && _this.currentAddonElement.isSameNode(srcElement)) {
					designer.emit('onTrackHoverElement', _this.currentElementInfo);
				}
				_this.currentAddonElement = srcElement;
				_this.currentElementInfo = _this.getAddonElementTree(srcElement);
				designer.emit('onTrackHoverElement', _this.currentElementInfo);
				_this.trackElement(_this.currentAddonElement);
			}
		};
	};
	/**
	 * 跟踪元素的改变
	 * @param element 需要跟踪的元素
	 */
	Template.prototype.trackElement = function (element) {
		this.observer.disconnect();
		this.observer.observe(element.parentNode ? element : element.parentNode, this.mutationObserverConfig);
	};
	/**
	 * 获取Element的信息
	 */
	Template.prototype.getAddonElementTree = function (element) {
		var _this = this;
		var addonElems = element.getParents('[data-addon]').reverse();
		// let rootElementInfo: ElementInfo;
		// let parentElementInfo: ElementInfo;
		// for (let index = 0; index < addonElems.length; index++) {
		//   const element = addonElems[index];
		//   if (index == 0) {
		//     parentElementInfo = this.getAddonElementInfo(element);
		//     rootElementInfo = parentElementInfo;
		//     continue;
		//   }
		//   parentElementInfo.ChildElement = this.getAddonElementInfo(element);
		//   parentElementInfo = parentElementInfo.ChildElement;
		// }
		// return rootElementInfo;
		var elementInfos = [];
		addonElems.forEach(function (ele) {
			elementInfos.push(_this.getAddonElementInfo(ele));
		});
		return elementInfos;
	};
	Template.prototype.getAddonElementInfo = function (element) {
		var rect = element.getBoundingClientRect();
		return {
			id: element.getAttribute('data-addon-id'),
			type: element.getAttribute('data-addon'),
			pos: {
				left: rect.left + messageHandlers.IFrameLeft,
				top: rect.top + messageHandlers.IFrameTop,
				height: rect.height,
				width: rect.width
			}
		};
	};
	return Template;
})();
var template = new Template();
template.Init();
