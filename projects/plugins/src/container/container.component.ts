import { Component } from '@angular/core';
import { IFrameChatService, ConfirmationDialogService } from 'shared';

@Component({
	selector: 'app-plugin-container',
	template: ''
})
export class ContainerComponent implements IAddon {
	constructor(
		private iframeChatService: IFrameChatService,
		private confirmationDialogService: ConfirmationDialogService
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
		return this.confirmationDialogService.confirm('删除', '确定删除').then((result) => {
			if (!result) {
				return false;
			}
			this.iframeChatService.childAPI.Del(elementInfo.id);
			return true;
		});
	}
}
