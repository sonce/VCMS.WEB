interface EventEmitter<T> {
	/**
	 * Creates an instance of this class that can
	 * deliver events synchronously or asynchronously.
	 *
	 * @param [isAsync=false] When true, deliver events asynchronously.
	 *
	 */
	// eslint-disable-next-line @typescript-eslint/no-misused-new
	new (isAsync?: boolean): EventEmitter<T>;
	/**
	 * Emits an event containing a given value.
	 * @param value The value to emit.
	 */
	emit(value?: T): void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ElementInfo<T = any> {
	id: string;
	type: string;
	pos: {
		left: number;
		top: number;
		width: number;
		height: number;
	};
	config?: T;
	addon?: IAddon;
	// ChildElement?: ElementInfo;
}

type PostmatEventNames = keyof PostmatEvents;
// declare var PostmatEvents: PostmatEvents;
declare interface PostmatEvents {
	onloaded: EventEmitter<boolean>;
	onsizechanged: EventEmitter<number>;
	onScriptInited: EventEmitter<string>;
	onTrackHoverElement: EventEmitter<ElementInfo[]>;
	onScroll: EventEmitter<number>;
}
