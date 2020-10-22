import { Component, EventEmitter, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationDialogService } from '../confirmation-dialog';

@Component({
	selector: 'v-hoverbox',
	templateUrl: './hoverbox.component.html',
	styleUrls: ['./hoverbox.component.scss']
})
export class HoverboxComponent {
	@Input() CurrentElementInfo: ElementInfo;
	@Input() RootContainerInfo: ElementInfo;
	@Input() ContainerInfo: ElementInfo;

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
		if (elementInfo.findIndex((x) => !x.addon.IsContainer) == -1) return;
		this.quit();
		if (elementInfo[0].addon.IsContainer) this.RootContainerInfo = elementInfo[0];
		// if (elementInfo.findIndex((x) => !x.addon.IsContainer) == -1) return;

		for (let index = elementInfo.length - 1; index >= 0; index--) {
			const element = elementInfo[index];
			if (typeof this.ContainerInfo === 'undefined' && element.addon.IsContainer) this.ContainerInfo = element;
			if (typeof this.CurrentElementInfo === 'undefined' && !element.addon.IsContainer)
				this.CurrentElementInfo = element;
			if (typeof this.ContainerInfo !== 'undefined' && typeof this.CurrentElementInfo !== 'undefined') break;
		}
		//没有容器
		if (typeof this.ContainerInfo === 'undefined') this.ContainerInfo = this.CurrentElementInfo;
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
		this.CurrentElementInfo = undefined;
		this.RootContainerInfo = undefined;
		this.ContainerInfo = undefined;
	}
}
