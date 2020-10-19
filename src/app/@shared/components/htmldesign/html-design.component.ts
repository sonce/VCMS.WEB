import { Component, Input, ViewChild, AfterViewInit, ElementRef, EventEmitter, Output } from '@angular/core';
import { AddonService } from '@app/@core/services';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { HoverboxComponent } from './hoverbox.component';
import { IFrameChatService } from './iframechat.service';

@Component({
	selector: 'v-html-design',
	// changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './html-design.component.html',
	styleUrls: ['./html-design.component.scss']
})
export class HTMLDesignComponent implements AfterViewInit {
	@ViewChild('iframe') iframe: ElementRef<HTMLIFrameElement>;
	@ViewChild(HoverboxComponent) hoverBox: HoverboxComponent;
	private inited = false;

	/** IFRAME的位置 */
	iframePos: { top: number; left: number } = { top: 0, left: 0 };
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
	constructor(private addonService: AddonService) {}

	ngAfterViewInit(): void {
		this.hoverBox.onDel.subscribe((x: { element: ElementInfo; autoDelEmpty: boolean }) => {
			this.iframeChatService.PostMessage('Del', x.element.id, x.autoDelEmpty);
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
		//第二次初始化，只要握手IFRAME即可
		if (this.iframeChatService) {
			this.iframeChatService.Init(this.iframe.nativeElement);
			return;
		}

		this.iframeChatService = new IFrameChatService(this.iframe.nativeElement);
		//加载完JS，并执行JS的初始化后
		this.iframeChatService.onScriptInited.subscribe(() => {
			this.getIframePos();
			forkJoin([
				this.iframeChatService.PostMessage<boolean>('loadCSS', 'http://localhost:4200/assets/dist/template'),
				this.iframeChatService.PostMessage<boolean>('SetIframePos', this.iframePos.left, this.iframePos.top),
				this.changeDesignState(this.InDesign),
				this.addonService.getAll()
			]).subscribe((result: [boolean, boolean, boolean, IAddon[]]) => {
				this.addons = result[3];
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
		//先加载JS
		this.iframeChatService.onConnected.subscribe(() => {
			//优先加载JS
			this.iframeChatService.PostMessage('loadScript', 'http://localhost:4200/assets/dist/template');
		});
		this.iframeChatService.onTrackHoverElement.subscribe((info: ElementInfo[]) => {
			//获取当前元素的插件
			const elements: ElementInfo[] = [];
			info.forEach((theInfo) => {
				const theAddon = this.addons.find((x) => x.Name.toLocaleLowerCase() == theInfo.type);
				theInfo.addon = theAddon;
				if (theAddon) elements.push(theInfo);
			});
			this.hoverBox.setElementInfo(elements);
			this.hoverBox.InHover = true;
		});
		this.iframeChatService.onScroll.subscribe(() => {
			this.hoverBox.quit();
		});
		this.iframeChatService.onsizechanged.subscribe(() => {
			this.hoverBox.quit();
			if (this.getIframePos()) {
				this.iframeChatService.PostMessage<boolean>('SetIframePos', this.iframePos.left, this.iframePos.top);
			}
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

		return true;
	}

	private changeDesignState(val: boolean): Observable<boolean> {
		if (!this.iframeChatService) return null;
		return this.iframeChatService.PostMessage<boolean>('ToggleDesignState', val);
	}

	/**
	 * 手机模式切换
	 * @param val 手机模式
	 */
	private toggleMobileMode(val: boolean) {
		if (!this.iframeChatService) return null;
		if (val) return this.iframeChatService.PostMessage('AddClass', 'html', 'mobile');
		else return this.iframeChatService.PostMessage('RemoveClass', 'html', 'mobile');
	}
}
