import { Component } from '@angular/core';

@Component({
	selector: 'app-plugin-col',
	template: ''
})
export class ColComponent implements IAddon {
	IsContainer = true;
	Title = 'Col';
}
