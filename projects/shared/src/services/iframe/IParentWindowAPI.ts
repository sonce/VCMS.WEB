import { IFrameChatService } from './iframechat.service';

export interface IParentWindowAPI {
	iframeChatService: IFrameChatService;
	/** 页面加载完成 */
	onloaded: (isLoaded: boolean) => void;
	/** 页面尺寸改变 */
	onsizechanged: (height: number) => void;
	/** 页面脚本初始化完成 */
	onScriptInited: () => void;
	/** 当前元素跟踪改变 */
	onTrackHoverElement: (elementsInfo: ElementInfo[]) => void;
	/** 页面滚动 */
	onScroll: (y: number) => void;
	/** 元素单击 */
	onClick: (elementsInfo: ElementInfo[]) => void;
}
