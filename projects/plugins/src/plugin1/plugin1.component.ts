import { AfterViewInit, Component } from '@angular/core';
import { IFrameChatService, TestService } from 'shared';

@Component({
	selector: 'app-plugin-1',
	templateUrl: './plugin1.component.html'
})
export class Plugin1Component implements AfterViewInit, IAddon {
	x = false;
	Title = 'Plugin 1';
	dependencies = {
		scripts: ['medium-editor-textcolor.umd.js']
	};

	constructor(private testService: TestService, iframechatservice: IFrameChatService) {
		testService.HelloWorld();
		iframechatservice.childEvents.onClick.subscribe(() => {
			alert('a');
		});
	}
	ngAfterViewInit(): void {
		console.log('aaa');
	}
}
