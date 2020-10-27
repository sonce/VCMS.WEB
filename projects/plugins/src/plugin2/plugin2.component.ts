import { Component } from '@angular/core';
import { TestService } from 'shared';

@Component({
	selector: 'app-plugin-2',
	templateUrl: './plugin2.component.html'
})
export class Plugin2Component {
	constructor(private testService: TestService) {
		testService.HelloWorld();
	}
}
