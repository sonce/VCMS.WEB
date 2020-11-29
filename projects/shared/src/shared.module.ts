import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedComponent } from './lib/shared.component';
import { TabsComponent } from './lib/tabs/tabs.component';
import { TabComponent } from './lib/tabs/tab.component';
import { ButtonComponent } from './lib/button/button.component';
import { ConfirmationDialogComponent, ConfirmationDialogService } from './lib/confirmation-dialog';

import { TestService } from './services';
import { RadiogroupComponent } from './lib/radiogroup/radiogroup.component';
import { RadiogroupItemComponent } from './lib/radiogroup/radiogroupitem.component';

const sharedComponents = [
	SharedComponent,
	ButtonComponent,
	TabComponent,
	TabsComponent,
	ConfirmationDialogComponent,
	RadiogroupComponent,
	RadiogroupItemComponent
];

@NgModule({
	imports: [CommonModule, FormsModule, TranslateModule, NgbModule],
	providers: [TestService, ConfirmationDialogService],
	declarations: [...sharedComponents],
	exports: [...sharedComponents]
})
export class SharedModule {}
