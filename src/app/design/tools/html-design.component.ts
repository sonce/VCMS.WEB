import { Component, Input, ViewChild, AfterViewInit, ElementRef, EventEmitter, Output } from '@angular/core';
import { PluginLoaderService } from '@app/services/plugin-loader/plugin-loader.service';
import { StringUtil } from 'js-dom-utility';
import { BehaviorSubject, Observable, forkJoin, from } from 'rxjs';
import { IFrameChatService, IParentWindowAPI } from 'shared';
import { HtmlDesignService } from './html-design.service';
import { ParentWindowAPI } from './ParentWindowAPI';

@Component({
	selector: 'v-html-design',
	// changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './html-design.component.html',
	styleUrls: ['./html-design.component.scss']
})
export class HTMLDesignComponent implements AfterViewInit {
	@ViewChild('iframe') iframe: ElementRef<HTMLIFrameElement>;
	private inited = false;

	private currentElementInfos: ElementInfo[];
	private parentAPI: IParentWindowAPI;

	/** IFRAME的位置 */
	iframePos: {
		top: number;
		left: number;
		offsetLeft: number;
		offsetTop: number;
	} = {
		top: 0,
		left: 0,
		offsetLeft: 0,
		offsetTop: 0
	};
	/**
	 * 所有支持的插件
	 */
	private addons: IAddon[];
	private _url: string;
	/** 编辑的URL */
	@Input()
	set url(val: string) {
		if (this._url != val) {
			this.startLoad.emit(val);
			this._url = val;
			this.onUrlChanged();
		}
	}
	get url(): string {
		return this._url;
	}

	public isMobile$: BehaviorSubject<boolean> = new BehaviorSubject(false);
	/** 显示移动端 */
	@Input() set IsMobile(val: boolean) {
		this.isMobile$.next(val);
	}

	/** 显示尺子 */
	@Input() ShowRule: boolean;

	private _inDesign = false;
	/**
	 * 是否在设计中
	 */
	@Input()
	set InDesign(val: boolean) {
		this._inDesign = val;
		this.changeDesignState(val);
	}
	get InDesign(): boolean {
		return this._inDesign;
	}

	/** 页面加载完成 */
	@Output() loaded: EventEmitter<boolean> = new EventEmitter(false);
	/** 页面开始加载 */
	@Output() startLoad: EventEmitter<string> = new EventEmitter();
	/** 页面改变 */
	@Output() pageChanged: EventEmitter<string> = new EventEmitter();

	private iframeChatService: IFrameChatService;
	constructor(private pluginLoader: PluginLoaderService, private htlmdesignerService: HtmlDesignService) {
		this.parentAPI = new ParentWindowAPI();
	}

	ngAfterViewInit(): void {
		this.htlmdesignerService.onDel.subscribe((x: { element: ElementInfo; autoDelEmpty: boolean }) => {
			this.iframeChatService.childAPI.Del(x.element.id, x.autoDelEmpty);
		});
		this.init();
	}

	private onUrlChanged() {
		this.pageChanged.emit(this._url);
		//在切换页面时重新初始化
		this.init();
	}

	private init() {
		//iframe还没有渲染
		if (!this.iframe) return;
		this.htlmdesignerService.quit();

		//第二次初始化，只要握手IFRAME即可
		if (this.iframeChatService) {
			this.iframeChatService.Init(this.iframe.nativeElement, this.parentAPI);
			return;
		}

		this.iframeChatService = new IFrameChatService(this.iframe.nativeElement, this.parentAPI);

		//加载完JS，并执行JS的初始化后
		this.iframeChatService.childEvents.onScriptInited.subscribe(() => {
			this.getIframePos();
			forkJoin([
				this.iframeChatService.childAPI.loadCSS('http://localhost:4200/assets/template/main'),
				this.iframeChatService.childAPI.SetIframePos(
					this.iframePos.left,
					this.iframePos.top,
					this.iframePos.offsetLeft,
					this.iframePos.offsetTop
				),
				this.changeDesignState(this.InDesign)
			]).subscribe(() => {
				//切换手机PC模式
				if (!this.inited) {
					this.toggleMobileMode(this.isMobile$.value);
				}
				this.isMobile$.subscribe((val: boolean) => {
					if (this.inited) this.toggleMobileMode(val);
				});
				this.inited = true;
				this.loaded.emit(true);
			});
		});

		// //先加载JS
		// this.iframeChatService.onConnected.subscribe(() => {
		// 	//优先加载JS
		// 	this.iframeChatService.childAPI.loadScript('http://localhost:4200/assets/template/main');
		// });

		this.iframeChatService.childEvents.onScroll.subscribe(() => {
			this.htlmdesignerService.quit();
		});

		this.iframeChatService.childEvents.onsizechanged.subscribe(() => {
			this.htlmdesignerService.quit();
			if (this.getIframePos()) {
				this.iframeChatService.childAPI.SetIframePos(
					this.iframePos.left,
					this.iframePos.top,
					this.iframePos.offsetLeft,
					this.iframePos.offsetTop
				);
			}
		});

		this.iframeChatService.childEvents.onTrackHoverElement.subscribe((elementsInfo: ElementInfo[]) => {
			//获取当前元素的插件
			this.loadPlugin(...elementsInfo).then((addons: IAddon[]) => {
				const elements: ElementInfo[] = [];
				elementsInfo.forEach((eleInfo) => {
					const theAddon = addons.find((x) => x.OwnPlugin.name.toLocaleLowerCase() == eleInfo.type);
					eleInfo.addon = theAddon;
					if (theAddon) elements.push(eleInfo);
				});
				this.currentElementInfos = elements;
				this.htlmdesignerService.setHoverElementInfo(elements);
			});
		});

		this.iframeChatService.childEvents.onClick.subscribe(() => {
			const ele: ElementInfo = this.currentElementInfos[this.currentElementInfos.length - 1];
			console.log(ele);
		});
	}

	/**
	 * 获取IFRAME的位置
	 */
	private getIframePos(): boolean {
		const rect = this.iframe.nativeElement.getBoundingClientRect();
		if (rect.left == this.iframePos.left && rect.top == this.iframePos.top) return false;

		this.iframePos.left = rect.left;
		this.iframePos.top = rect.top;
		this.iframePos.offsetLeft = this.iframe.nativeElement.offsetLeft;
		this.iframePos.offsetTop = this.iframe.nativeElement.offsetTop;

		return true;
	}

	private changeDesignState(val: boolean): Observable<void> {
		if (!this.iframeChatService) return null;
		return from(this.iframeChatService.childAPI.ToggleDesignState(val));
	}

	/**
	 * 手机模式切换
	 * @param val 手机模式
	 */
	private toggleMobileMode(val: boolean) {
		if (!this.iframeChatService) return null;
		if (val) return this.iframeChatService.childAPI.AddClass('html', 'mobile');
		else return this.iframeChatService.childAPI.RemoveClass('html', 'mobile');
	}

	private loadPlugin(...elementsInfo: ElementInfo[]): Promise<IAddon[]> {
		const loadPluginPromises = [];
		elementsInfo.forEach((eleInfo) => {
			if (!StringUtil.isNullOrEmpty(eleInfo.type)) loadPluginPromises.push(this.pluginLoader.load(eleInfo.type));
		});
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return Promise.allSettled(loadPluginPromises).then((moduleTypes: PromiseSettledResult<any>[]) => {
			const addons = [];
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			moduleTypes
				.filter((x) => x.status == 'fulfilled')
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				.forEach((moduleType: PromiseFulfilledResult<any>) => {
					addons.push(moduleType.value.config as IAddon);
				});

			moduleTypes
				.filter((x) => x.status == 'rejected')
				.forEach((result: PromiseRejectedResult) => {
					console.log(result.reason);
				});

			return addons;
		});
	}
}
