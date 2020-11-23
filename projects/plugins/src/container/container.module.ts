import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerComponent } from './container.component';
import { SharedModule } from 'shared';

@NgModule({
	imports: [CommonModule, SharedModule],
	declarations: [ContainerComponent],
	entryComponents: [ContainerComponent]
})
export class ContainerModule {
	static entry = ContainerComponent;
}
