import { IFrameChatService, IParentWindowAPI } from 'shared';

export class ParentWindowAPI implements IParentWindowAPI {
	iframeChatService: IFrameChatService;
	onloaded = (isLoaded: boolean): void => {
		this.iframeChatService.childEvents.onloaded.emit(isLoaded);
	};
	onsizechanged = (height: number): void => {
		this.iframeChatService.childEvents.onsizechanged.emit(height);
	};
	onScriptInited = (): void => {
		this.iframeChatService.childEvents.onScriptInited.emit();
	};
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onTrackHoverElement = (elementsInfo: ElementInfo<any>[]): void => {
		this.iframeChatService.childEvents.onTrackHoverElement.emit(elementsInfo);
	};
	onScroll = (y: number): void => {
		this.iframeChatService.childEvents.onScroll.emit(y);
	};
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onClick = (elementsInfo: ElementInfo<any>[]): void => {
		this.iframeChatService.childEvents.onClick.emit(elementsInfo);
	};
}
