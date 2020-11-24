import { EventEmitter, Injectable, Input } from '@angular/core';
import { ConfirmationDialogService } from 'shared';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class HtmlDesignService {
	/** 最上层的容器 */
	RootContainerInfo: ElementInfo;
	/** 包含内容元素的容器 */
	@Input() ContainerInfo: ElementInfo;
	/** 内容元素 */
	@Input() ContentElementInfo: ElementInfo;

	@Input() InHover = false;
	onDel: EventEmitter<{
		element: ElementInfo;
		autoDelEmpty: boolean;
	}> = new EventEmitter();

	constructor(
		private confirmationDialogService: ConfirmationDialogService,
		private translateService: TranslateService
	) {}

	public setHoverElementInfo(elementInfo: ElementInfo[]): void {
		if (elementInfo.length <= 0) return;
		//没有内容元素
		this.quit();
		this.RootContainerInfo = elementInfo.find((x) => x.addon.IsRootContainer);
		// if (elementInfo.findIndex((x) => !x.addon.IsContainer) == -1) return;

		// for (let index = elementInfo.length - 1; index >= 0; index--) {
		// 	const element = elementInfo[index];
		// 	if (typeof this.ContainerInfo === 'undefined' && element.addon.IsContainer) this.ContainerInfo = element;
		// 	if (typeof this.ContentElementInfo === 'undefined' && !element.addon.IsContainer)
		// 		this.ContentElementInfo = element;
		// 	if (typeof this.ContainerInfo !== 'undefined' && typeof this.ContentElementInfo !== 'undefined') break;
		// }
		this.ContentElementInfo = elementInfo.find((x) => !x.addon.IsContainer);
		this.ContainerInfo = elementInfo.find((x) => x.addon.IsContainer);
		//没有容器
		if (typeof this.ContainerInfo === 'undefined') this.ContainerInfo = this.ContentElementInfo;
		this.InHover = true;
	}

	delElement(event: MouseEvent, elementInfo: ElementInfo, autoDelEmpty = true): void {
		event.stopPropagation();
		event.stopImmediatePropagation();

		this.confirmationDialogService
			.confirm(
				this.translateService.instant('Please confirm'),
				this.translateService.instant('Do you want to Del') + ' ' + elementInfo.type
			)
			.then((confirmed) => {
				if (confirmed) {
					this.quit();
					this.onDel.emit({ element: elementInfo, autoDelEmpty: autoDelEmpty });
				}
			})
			.catch(() => {
				// console.log(
				//   'User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'
				// )
			});
	}

	/** 退出所有的HOVER */
	quit(): void {
		this.InHover = false;
		this.ContentElementInfo = undefined;
		this.RootContainerInfo = undefined;
		this.ContainerInfo = undefined;
	}
}
