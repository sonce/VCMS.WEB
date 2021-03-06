import { EventEmitter } from '@angular/core';

export interface IClientIframeAPI extends IChildIframeEvents, IChildIframeMethods {}
export interface IChildIframeMethods {
	InDesign: boolean;
	// Addons: IAddon[];
	// AddAddons: (...addons: IAddon[]) => void;
	IFrameLeft: number;
	IFrameTop: number;
	SetIframePos: (left: number, top: number, offsetLeft: number, offsetTop: number) => boolean;
	ToggleDesignState: (inDesign: boolean) => void;
	AddClass: (selector: string, className: string) => void;
	RemoveClass: (selector: string, className: string) => void;
	/**
	 * 删除元素
	 *
	 * @param addonId 元素id
	 * @param removeEmptyParent 是否移除空的父元素
	 */
	Del: (addonId: string, removeEmptyParent?: boolean) => boolean;
	loadScript: (fileName: string, callback?: () => void, into?: keyof HTMLElementTagNameMap) => Promise<boolean>;
	loadCSS: (fileName: string, callback?: () => void, into?: keyof HTMLElementTagNameMap) => Promise<boolean>;
	/**
	 * 移动位置
	 *
	 * @param addonId 插件Id
	 * @param toIndex 在当前父元素中位置索引
	 * @returns 移动成功返回true，否则false
	 */
	moveToIndex: (addonId: string, toIndex: number) => boolean;
	test: () => void;
}

export interface IChildIframeEvents {
	/** 页面加载完成 */
	onloaded: EventEmitter<boolean>;
	/** 页面尺寸改变 */
	onsizechanged: EventEmitter<number>;
	/** 页面脚本初始化完成 */
	onScriptInited: EventEmitter<string>;
	/** 当前元素跟踪改变 */
	onTrackHoverElement: EventEmitter<ElementInfo[]>;
	/** 页面滚动 */
	onScroll: EventEmitter<number>;
	/** 元素单击 */
	onClick: EventEmitter<ElementInfo[]>;
}
