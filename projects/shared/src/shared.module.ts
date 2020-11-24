import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponent } from './lib/shared.component';
import { TabsComponent } from './lib/tabs/tabs.component';
import { TabComponent } from './lib/tabs/tab.component';
import { ButtonComponent } from './lib/button/button.component';
import { ConfirmationDialogComponent, ConfirmationDialogService } from './lib/confirmation-dialog';
import { TestService } from './services';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const sharedComponents = [SharedComponent, ButtonComponent, TabComponent, TabsComponent, ConfirmationDialogComponent];

@NgModule({
	imports: [CommonModule, NgbModule],
	providers: [TestService, ConfirmationDialogService],
	declarations: [...sharedComponents],
	exports: [...sharedComponents]
})
export class SharedModule {}
