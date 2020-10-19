import { AfterViewInit, Component } from '@angular/core';

@Component({
	selector: 'app-plugin-1',
	templateUrl: './plugin1.component.html'
})
export class Plugin1Component implements AfterViewInit {
	x = false;

	ngAfterViewInit(): void {
		debugger;
		console.log('aaa');
	}
}
