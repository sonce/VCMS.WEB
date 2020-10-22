import Postmate from 'postmate';
import { EventEmitter } from '@angular/core';
import { from, Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

export class IFrameChatService implements PostmatEvents {
	private postmateClient: Postmate.ParentAPI;

	/**
	 * 链接到iframe
	 */
	onConnected: EventEmitter<boolean> = new EventEmitter();

	onloaded: EventEmitter<boolean> = new EventEmitter();
	onsizechanged: EventEmitter<number> = new EventEmitter();

	constructor(iframe: HTMLIFrameElement) {
		this.Init(iframe);
	}
	onClick: EventEmitter<ElementInfo[]> = new EventEmitter<ElementInfo[]>();
	onScroll: EventEmitter<number> = new EventEmitter<number>();
	onTrackHoverElement: EventEmitter<ElementInfo[]> = new EventEmitter<ElementInfo[]>();
	onScriptInited: EventEmitter<string> = new EventEmitter();

	/**
	 * 初始化Postmate，用于父子页面的交互
	 */
	public Init(iframe: HTMLIFrameElement): Subscription {
		// Postmate.debug = true;
		if (this.postmateClient) this.postmateClient.destroy();
		return from(
			new Postmate({
				iframeOrSelector: iframe,
				url: iframe.src
			})
		)
			.pipe(
				tap((x) => {
					this.postmateClient = x;
					this.postmateClient.on('onloaded', () => this.onloaded.emit(true));
					this.postmateClient.on('onsizechanged', (height: number) => this.onsizechanged.emit(height));
					this.postmateClient.on('onScriptInited', () => this.onScriptInited.emit());
					this.postmateClient.on('onTrackHoverElement', (data: ElementInfo[]) => this.onTrackHoverElement.emit(data));
					this.postmateClient.on('onScroll', (y: number) => this.onScroll.emit(y));
					this.postmateClient.on('onClick', (data: ElementInfo[]) => this.onClick.emit(data));
					this.onConnected.emit(true);
				})
			)
			.subscribe();
	}

	PostMessage<T>(messageName: PostmatMethodNames, ...args: unknown[]): Observable<T> {
		return from(this.postmateClient.get(messageName, args));
	}
}
