import { AfterViewInit, Component } from '@angular/core';
import { TestService } from 'shared';

@Component({
	selector: 'app-plugin-1',
	templateUrl: './plugin1.component.html'
})
export class Plugin1Component implements AfterViewInit {
	x = false;
	constructor(private testService: TestService) {
		testService.HelloWorld();
	}
	ngAfterViewInit(): void {
		console.log('aaa');
	}
}
