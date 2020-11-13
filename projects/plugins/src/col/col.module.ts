import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColComponent } from './col.component';
import { SharedModule } from 'shared';

@NgModule({
	imports: [CommonModule, SharedModule],
	declarations: [ColComponent],
	entryComponents: [ColComponent]
})
export class ColModule {
	static config: IAddon = {
		IsContainer: true,
		Title: 'Col',
		indexComponent: ColComponent
	};
}
