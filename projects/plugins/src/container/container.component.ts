import { Component } from '@angular/core';
import { IFrameChatService } from 'shared';

@Component({
	selector: 'app-plugin-container',
	template: ''
})
export class ContainerComponent implements IAddon {
	constructor(private iframeChatService: IFrameChatService) {}
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

	del(): boolean {
		this.iframeChatService.childAPI.test();
		return true;
	}
}
