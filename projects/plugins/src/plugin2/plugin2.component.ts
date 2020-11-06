import { Component } from '@angular/core';
import { TestService } from 'shared';

@Component({
	selector: 'app-plugin-2',
	templateUrl: './plugin2.component.html'
})
export class Plugin2Component {
	constructor(private testService: TestService) {
		testService.HelloWorld();
		const v: ElementInfo<string> = {
			id: 'a',
			type: 'aa',
			pos: { left: 1, top: 1, width: 2, height: 3 }
		};
		if (v) console.log('a');
	}
}
