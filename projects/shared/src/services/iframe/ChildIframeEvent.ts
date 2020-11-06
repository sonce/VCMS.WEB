import { EventEmitter } from '@angular/core';
import { IChildIframeEvents } from './IChildIframeAPI';

export class ChildIframeEvents implements IChildIframeEvents {
	onloaded: EventEmitter<boolean> = new EventEmitter<boolean>();
	onsizechanged: EventEmitter<number> = new EventEmitter<number>();
	onScriptInited: EventEmitter<string> = new EventEmitter<string>();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onTrackHoverElement: EventEmitter<ElementInfo<any>[]> = new EventEmitter<ElementInfo<any>[]>();
	onScroll: EventEmitter<number> = new EventEmitter<number>();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onClick: EventEmitter<ElementInfo<any>[]> = new EventEmitter<ElementInfo<any>[]>();
}
