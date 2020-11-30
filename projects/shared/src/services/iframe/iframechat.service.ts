import { connectToChild } from 'penpal';
import { EventEmitter, Injectable } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AsyncMethodReturns, Connection } from 'penpal/lib/types';
import { IChildIframeEvents, IClientIframeAPI } from './IChildIframeAPI';
import { IParentWindowAPI } from './IParentWindowAPI';
import { ChildIframeEvents } from './ChildIframeEvent';

@Injectable({
	providedIn: 'root'
})
export class IFrameChatService {
	/** 是否已经握手初始化 */
	public hadInit = false;
	private connection: Connection<IClientIframeAPI>;
	/** 子IFRAME的API，需要在握手后才能访问 */
	public childAPI: AsyncMethodReturns<IClientIframeAPI>;

	/** 子IFRAME的事件 */
	public childEvents: IChildIframeEvents = new ChildIframeEvents();
	/**
	 * 链接到iframe
	 */
	onConnected: EventEmitter<boolean> = new EventEmitter();

	// constructor(iframe: HTMLIFrameElement, parentAPI?: IParentWindowAPI) {
	// 	if (parentAPI) parentAPI.iframeChatService = this;
	// 	this.Init(iframe, parentAPI);
	// }

	/**
	 * 初始化Postmate，用于父子页面的交互
	 */
	public Init(iframe: HTMLIFrameElement, parentAPI?: IParentWindowAPI): Subscription {
		if (parentAPI) parentAPI.iframeChatService = this;
		if (this.childAPI) this.connection.destroy();
		this.connection = connectToChild<IClientIframeAPI>({
			// The iframe to which a connection should be made
			iframe,
			// Methods the parent is exposing to the child
			methods: parentAPI
		});

		return from(this.connection.promise)
			.pipe(
				tap((child) => {
					this.childAPI = { ...child, ...this.childEvents };
					this.hadInit = true;
					this.onConnected.emit(true);
				})
			)
			.subscribe();
	}

	destroy(): void {
		this.hadInit = false;
		if (this.childAPI) this.connection.destroy();
	}
}
