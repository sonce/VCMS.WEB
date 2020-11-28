import { Component } from '@angular/core';

@Component({
	selector: 'app-plugin-2',
	template: ''
})
export class TextComponent implements IAddon {
	Title = 'Text';
	dependencies = {
		scripts: ['medium-editor-textcolor.umd.js']
	};
}
