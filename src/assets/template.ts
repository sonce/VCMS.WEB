/// <reference path="../@types/PostmateMethod.d.ts" />
/// <reference path="../@types/PostmatEvents.d.ts" />
/// <reference path="../@types/PostmateEx.d.ts" />
/// <reference path="../@types/MutationObserver.d.ts" />
/// <reference path="../@types/HTMLDOMElement.d.ts" />

import Postmate from 'postmate';

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

HTMLElement.prototype.getParents = function (this: HTMLElement, selector: string) {
  // Set up a parent array
  var parents: HTMLElement[] = [];
  let elem = this;
  // Push each parent element to the array
  for (; elem && !document.isSameNode(elem); elem = elem.parentNode as HTMLElement) {
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
  HTMLElement.prototype.closest = function (this: HTMLElement, s) {
    var el = this;
    if (!document.documentElement.contains(el)) return null;
    do {
      if (el.matches(s)) return el;
      el = el.parentElement;
    } while (el !== null);
    return null;
  };

//#endregion

declare var designer: Postmate.ChildAPI;
declare var messageHandlers: PostmateMethod;

messageHandlers.InDesign = true;
// messageHandlers.Addons = [];
// messageHandlers.AddAddons = (...addons: IAddon[]) => {
//   messageHandlers.Addons = [...addons, ...messageHandlers.Addons];
// };
messageHandlers.IFrameLeft = 0;
messageHandlers.IFrameTop = 0;
messageHandlers.SetIframePos = (left: number, top: number) => {
  messageHandlers.IFrameLeft = left;
  messageHandlers.IFrameTop = top;
  return true;
};
messageHandlers.ToggleDesignState = (indesign: boolean) => {
  messageHandlers.InDesign = indesign;
  if (indesign) return messageHandlers.AddClass('html', 'indesign');
  else return messageHandlers.RemoveClass('html', 'indesign');
};
messageHandlers.AddClass = (selector, classname) => {
  document.querySelector(selector).classList.add(classname);
};
messageHandlers.RemoveClass = (selector: string, classname: string) => {
  document.querySelector(selector).classList.remove(classname);
};
messageHandlers.Del = (addonId: string, removeEmptyParent: boolean) => {
  let delElement = document.querySelector<HTMLElement>(`[data-addon-id="${addonId}"]`);
  if (delElement == null || typeof delElement === 'undefined') return true;
  let parent = delElement.parentElement;
  delElement.remove();
  if (!removeEmptyParent) {
    return true;
  }
  let parents: HTMLElement[] = parent.getParents('[data-addon]');
  parents.forEach((p) => {
    let containAddon = p.querySelector('[data-addon]');
    if (containAddon == null || typeof containAddon === 'undefined') p.remove();
  });
  return true;
};

class Template {
  private mutationObserverConfig: MutationObserverInit;
  private observer: MutationObserver;

  Init() {
    var MutationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver;
    if (MutationObserver) {
      this.mutationObserverConfig = {
        childList: true,
        subtree: true,
        characterData: true,
      };
      this.observer = new MutationObserver((mutationsList: MutationRecord[]) => {
        if (!messageHandlers.InDesign) return;
        this.currentElementInfo = this.getAddonElementTree(this.currentAddonElement);
        designer.emit<ElementInfo[]>('onTrackHoverElement', this.currentElementInfo);
      });
    }

    this.disableClick();
    this.hoverAddonElement();
    this.attachScroll();

    designer.emit('onScriptInited');
  }

  /**
   * 禁用页面单击，防止页面跳转
   */
  disableClick() {
    document.onclick = function (e: MouseEvent) {
      if (messageHandlers.InDesign) {
        window.event ? (window.event.cancelBubble = true) : event.stopPropagation();
        var event = event || window.event; //用于IE
        if (event.preventDefault) event.preventDefault(); //标准技术
        if (event.returnValue) event.returnValue = false; //IE
        e.stopImmediatePropagation();
      }
    };
  }

  attachScroll() {
    document.onscroll = function (e: Event) {
      designer.emit<number>('onScroll', document.scrollingElement.scrollTop);
    };
  }

  currentAddonElement: HTMLElement;
  currentElementInfo: ElementInfo[];
  hoverAddonElement() {
    document.onmouseover = (e: MouseEvent) => {
      if (!messageHandlers.InDesign) return;
      e.stopPropagation();
      const srcElement = (e.target as HTMLElement).closest<HTMLElement>('[data-addon]');
      if (srcElement != null && typeof srcElement !== 'undefined') {
        if (this.currentAddonElement && this.currentAddonElement.isSameNode(srcElement)) {
          designer.emit<ElementInfo[]>('onTrackHoverElement', this.currentElementInfo);
        }
        this.currentAddonElement = srcElement;
        this.currentElementInfo = this.getAddonElementTree(srcElement);
        designer.emit<ElementInfo[]>('onTrackHoverElement', this.currentElementInfo);
        this.trackElement(this.currentAddonElement);
      }
    };
  }

  /**
   * 跟踪元素的改变
   * @param element 需要跟踪的元素
   */
  private trackElement(element: HTMLElement) {
    this.observer.disconnect();
    this.observer.observe(element.parentNode ? element : element.parentNode, this.mutationObserverConfig);
  }

  /**
   * 获取Element的信息
   */
  private getAddonElementTree(element: HTMLElement): ElementInfo[] {
    const addonElems = element.getParents('[data-addon]').reverse();
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
    let elementInfos: ElementInfo[] = [];
    addonElems.forEach((ele) => {
      elementInfos.push(this.getAddonElementInfo(ele));
    });
    return elementInfos;
  }

  private getAddonElementInfo(element: HTMLElement): ElementInfo {
    var rect = element.getBoundingClientRect();
    return {
      id: element.getAttribute('data-addon-id'),
      type: element.getAttribute('data-addon'),
      pos: {
        left: rect.left + messageHandlers.IFrameLeft,
        top: rect.top + messageHandlers.IFrameTop,
        height: rect.height,
        width: rect.width,
      },
    };
  }
}
var template = new Template();
template.Init();
