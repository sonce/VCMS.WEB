import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VDropdownComponent } from './components/vdropdown/vdropdown.component';
import { TranslateModule } from '@ngx-translate/core';

import { ClickStopPropagationDirective, AutofocusDirective } from './directives';
import { FormsModule } from '@angular/forms';
import { SafePipe } from './pipes';
import { MultiLevelNavComponent, MultiLevelNavitemDirective, MultiLevelNavChildComponent } from './components';

@NgModule({
	imports: [CommonModule, NgbModule, TranslateModule, FormsModule],
	declarations: [
		VDropdownComponent,
		MultiLevelNavComponent,
		MultiLevelNavitemDirective,
		MultiLevelNavChildComponent,
		ClickStopPropagationDirective,
		AutofocusDirective,
		SafePipe
	],
	exports: [
		VDropdownComponent,
		MultiLevelNavComponent,
		MultiLevelNavitemDirective,
		MultiLevelNavChildComponent,
		ClickStopPropagationDirective,
		AutofocusDirective,
		SafePipe
	]
})
export class SharedModule {}
