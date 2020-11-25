import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IFrameChatService, ConfirmationDialogService } from 'shared';

@Component({
	template: ''
})
export class ContainerComponent implements IAddon {
	constructor(
		private iframeChatService: IFrameChatService,
		private confirmationDialogService: ConfirmationDialogService,
		private translateService: TranslateService
	) {}
	IsContainer = true;
	IsRootContainer = true;
	Title = 'Container';

	moveup(): boolean {
		alert('move up');
		return true;
	}

	movedown(): boolean {
		alert('move down');
		return true;
	}

	config(): void {
		alert('config');
	}

	del(elementInfo: ElementInfo): boolean | PromiseLike<boolean> {
		return this.confirmationDialogService
			.confirm(
				this.translateService.instant('Please confirm'),
				this.translateService.instant('Do you want to Del') + ' ' + elementInfo.type
			)
			.then((result) => {
				if (!result) {
					return false;
				}
				return this.iframeChatService.childAPI.Del(elementInfo.id);
			});
	}
}
