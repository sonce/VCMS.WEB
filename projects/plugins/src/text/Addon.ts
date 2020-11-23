import { Injectable } from '@angular/core';

@Injectable()
export class Addon implements IAddon {
	Title = 'Text';
	dependencies = {
		scripts: ['medium-editor-textcolor.umd.js']
	};
}
