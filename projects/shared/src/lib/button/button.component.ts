import { Component } from '@angular/core';

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'button[sharedBtn]',
	template: '<ng-content></ng-content>',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent {}
