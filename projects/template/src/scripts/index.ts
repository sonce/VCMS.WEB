import { connectToParent } from 'penpal';
import { AsyncMethodReturns } from 'penpal/lib/types';
import { IParentWindowAPI } from 'shared';
import { ChildAPIModel } from './ChildAPIModel';
import { ElementUtil } from 'js-dom-utility';

let parentAPI: AsyncMethodReturns<IParentWindowAPI>;
const apiModel = new ChildAPIModel();

class Template {
	private mutationObserverConfig: MutationObserverInit;
	private observer: MutationObserver;

	currentAddonElement: HTMLElement;
	currentElementInfo: ElementInfo[];

	Init() {
		const MutationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver;
		if (MutationObserver) {
			this.mutationObserverConfig = {
				childList: true,
				subtree: true,
				characterData: true
			};
			this.observer = new MutationObserver(() => {
				if (!apiModel.InDesign) return;
				this.currentElementInfo = this.getAddonElementTree(this.currentAddonElement);
				parentAPI.onTrackHoverElement(this.currentElementInfo);
			});
		}

		this.handClick();
		this.hoverAddonElement();
		this.attachScroll();
		this.onElementHeightChange(document.body, function (h: number) {
			if (parentAPI) parentAPI.onsizechanged(h);
		});

		parentAPI.onScriptInited();
	}

	onElementHeightChange(elm: HTMLElement, callback: (h: number) => void) {
		let lastHeight = elm.clientHeight,
			newHeight: number;

		(function run() {
			newHeight = elm.clientHeight;
			if (lastHeight != newHeight) callback(newHeight);
			lastHeight = newHeight;

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			if ((elm as any).onElementHeightChangeTimer) clearTimeout((elm as any).onElementHeightChangeTimer);

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(elm as any).onElementHeightChangeTimer = setTimeout(run, 200);
		})();
	}

	/**
	 * 单击后的事件传递，以及禁用页面单击，防止页面跳转。
	 */
	handClick() {
		document.onclick = (e: MouseEvent) => {
			if (apiModel.InDesign) {
				window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
				const event = e || window.event; //用于IE
				if (event.preventDefault) event.preventDefault(); //标准技术
				if (event.returnValue) event.returnValue = false; //IE
				e.stopImmediatePropagation();
				parentAPI.onClick(this.currentElementInfo);
			}
		};
	}

	attachScroll() {
		document.onscroll = function () {
			parentAPI.onScroll(document.scrollingElement.scrollTop);
		};
	}

	hoverAddonElement() {
		document.onmouseover = (e: MouseEvent) => {
			if (!apiModel.InDesign) return;
			e.stopPropagation();
			const srcElement = (e.target as HTMLElement).closest<HTMLElement>('[data-addon]');
			if (srcElement != null && typeof srcElement !== 'undefined') {
				if (this.currentAddonElement && this.currentAddonElement.isSameNode(srcElement)) {
					parentAPI.onTrackHoverElement(this.currentElementInfo);
				}
				this.currentAddonElement = srcElement;
				this.currentElementInfo = this.getAddonElementTree(srcElement);
				parentAPI.onTrackHoverElement(this.currentElementInfo);
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
		const addonElems = ElementUtil.getParents(element, '[data-addon]').reverse();
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
		const elementInfos: ElementInfo[] = [];
		addonElems.forEach((ele) => {
			elementInfos.push(this.getAddonElementInfo(ele));
		});
		return elementInfos;
	}

	private getAddonElementInfo(element: Element): ElementInfo {
		const rect = element.getBoundingClientRect();
		return {
			id: element.getAttribute('data-addon-id'),
			type: element.getAttribute('data-addon'),
			pos: {
				left: rect.left + apiModel.IFrameLeft,
				top: rect.top + apiModel.IFrameTop,
				height: rect.height,
				width: rect.width
			}
		};
	}
}
const template = new Template();
const connection = connectToParent<IParentWindowAPI>({
	methods: apiModel
});
connection.promise.then((parent) => {
	parentAPI = parent;
	template.Init();
});
