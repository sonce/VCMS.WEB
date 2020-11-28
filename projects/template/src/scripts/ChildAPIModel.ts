import { ElementUtil, ObjectUtil } from 'js-dom-utility';
import { IChildIframeMethods } from 'shared';

export class ChildAPIModel implements IChildIframeMethods {
	InDesign: boolean;
	IFrameLeft: number;
	IFrameOffsetLeft: number;
	IFrameTop: number;
	IFrameOffsetTop: number;

	/**
	 * 动态加载JS文件的方法
	 * Load javascript file method
	 *
	 * @param {String}   fileName              JS文件名
	 * @param {Function} [callback=function()] 加载成功后执行的回调函数
	 * @param {String}   [into="head"]         嵌入页面的位置
	 */
	loadScript = (fileName: string, callback: () => void, into: keyof HTMLElementTagNameMap): Promise<boolean> => {
		into = into || 'head';
		callback = callback || function () {};

		let script = null;
		script = document.createElement('script');
		script.id = fileName.replace(/[\./]+/g, '-');
		script.type = 'text/javascript';
		script.src = fileName + '.js';
		const isIE = /*@cc_on!@*/ false || !!document.documentMode;
		const isIE8 = isIE && navigator.appVersion.match(/8./i).toString() == '8.';

		return new Promise((resolve) => {
			if (isIE8) {
				script.onreadystatechange = function () {
					if (script.readyState) {
						if (script.readyState === 'loaded' || script.readyState === 'complete') {
							script.onreadystatechange = null;
							resolve();
							callback();
						}
					}
				};
			} else {
				script.onload = function () {
					resolve();
					callback();
				};
			}

			if (into === 'head') {
				document.getElementsByTagName('head')[0].appendChild(script);
			} else {
				document.body.appendChild(script);
			}
		});
	};
	/**
	 * 动态加载CSS文件的方法
	 * Load css file method
	 *
	 * @param {String}   fileName              CSS文件名
	 * @param {Function} [callback=function()] 加载成功后执行的回调函数
	 * @param {String}   [into="head"]         嵌入页面的位置
	 */
	loadCSS = (fileName: string, callback: () => void, into: keyof HTMLElementTagNameMap): Promise<boolean> => {
		into = into || 'head';
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		callback = callback || function () {};

		const css = document.createElement('link');
		css.type = 'text/css';
		css.rel = 'stylesheet';
		css.href = fileName + '.css';
		return new Promise((resolve) => {
			css.onload = css.onreadystatechange = function () {
				callback();
				resolve();
			};
			if (into === 'head') {
				document.getElementsByTagName('head')[0].appendChild(css);
			} else {
				document.body.appendChild(css);
			}
		});
	};

	SetIframePos = (left: number, top: number, offsetLeft: number, offsetTop: number): boolean => {
		this.IFrameLeft = left;
		this.IFrameTop = top;
		this.IFrameOffsetLeft = offsetLeft;
		this.IFrameOffsetTop = offsetTop;
		return true;
	};
	ToggleDesignState = (inDesign: boolean): void => {
		this.InDesign = inDesign;
		if (inDesign) return this.AddClass('html', 'indesign');
		else return this.RemoveClass('html', 'indesign');
	};
	AddClass = (selector: string, className: string): void => {
		document.querySelector(selector).classList.add(className);
	};
	RemoveClass = (selector: string, className: string): void => {
		document.querySelector(selector).classList.remove(className);
	};
	Del = (addonId: string, removeEmptyParent?: boolean): boolean => {
		const delElement = document.querySelector<HTMLElement>(`[data-addon-id="${addonId}"]`);
		if (delElement == null || typeof delElement === 'undefined') return true;
		const parent = delElement.parentElement;
		delElement.remove();
		if (!removeEmptyParent) {
			return true;
		}

		const parents: Element[] = ElementUtil.getParents(parent, '[data-addon]');
		parents.forEach((p) => {
			const containAddon = p.querySelector('[data-addon]');
			if (containAddon == null || typeof containAddon === 'undefined') p.remove();
		});
		return true;
	};

	moveToIndex = (addonId: string, toIndex: number): boolean => {
		const targetElement = document.querySelector<HTMLElement>(`[data-addon-id="${addonId}"]`);
		if (ObjectUtil.isNull(targetElement)) return false;
		else {
			const parentElement = targetElement.parentElement;
			const refElement = targetElement.parentElement.children.item(toIndex);
			if (ObjectUtil.isNull(refElement)) return false;
			else {
				parentElement.insertBefore(targetElement, refElement);
				return true;
			}
		}
	};
	test = (): void => {
		alert('a');
	};
}
