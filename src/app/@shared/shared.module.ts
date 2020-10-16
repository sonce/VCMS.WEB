import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VDropdownComponent } from './components/vdropdown/vdropdown.component';
import { TranslateModule } from '@ngx-translate/core';

import { ClickStopPropagation, AutofocusDirective } from './directives';
import { FormsModule } from '@angular/forms';
import { SafePipe } from './pipes';
import {
  ConfirmationDialogService,
  MultiLevelNavComponent,
  MultiLevelNavitemDirective,
  MultiLevelNavChildComponent,
  RadiogroupComponent,
  RadiogroupItemComponent,
  HTMLDesignComponent,
  HoverboxComponent,
} from './components';

@NgModule({
  imports: [CommonModule, NgbModule, TranslateModule, FormsModule],
  declarations: [
    VDropdownComponent,
    MultiLevelNavComponent,
    MultiLevelNavitemDirective,
    MultiLevelNavChildComponent,
    ClickStopPropagation,
    AutofocusDirective,
    RadiogroupComponent,
    RadiogroupItemComponent,
    HTMLDesignComponent,
    HoverboxComponent,
    SafePipe,
  ],
  providers: [ConfirmationDialogService],
  exports: [
    VDropdownComponent,
    MultiLevelNavComponent,
    MultiLevelNavitemDirective,
    MultiLevelNavChildComponent,
    ClickStopPropagation,
    AutofocusDirective,
    RadiogroupComponent,
    RadiogroupItemComponent,
    HTMLDesignComponent,
    SafePipe,
  ],
})
export class SharedModule {}
