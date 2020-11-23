import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponent } from './lib/shared.component';
import { TabsComponent } from './lib/tabs/tabs.component';
import { TabComponent } from './lib/tabs/tab.component';
import { ButtonComponent } from './lib/button/button.component';
import { TestService } from './services';

const sharedComponents = [SharedComponent, ButtonComponent, TabComponent, TabsComponent];

@NgModule({
	imports: [CommonModule],
	providers: [TestService],
	declarations: [...sharedComponents],
	exports: [...sharedComponents]
})
export class SharedModule {}
