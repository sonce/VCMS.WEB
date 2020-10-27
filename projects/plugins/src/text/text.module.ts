import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextComponent } from './text.component';
import { SharedModule } from 'shared';

@NgModule({
	imports: [CommonModule, SharedModule],
	declarations: [TextComponent],
	entryComponents: [TextComponent]
})
export class TextModule {
	static entry = TextComponent;
}
