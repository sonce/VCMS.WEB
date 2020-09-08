import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SortablejsModule } from 'ngx-sortablejs';
import { VDropdownComponent } from './vdropdown/vdropdown.component';
import { TranslateModule } from '@ngx-translate/core';
import { MultiLevelNavComponent, MultiLevelNavitemDirective, MultiLevelNavChildComponent } from './multilevelnav';
import { ClickStopPropagation, AutofocusDirective } from './directives'
import { RadiogroupComponent, RadiogroupItemComponent } from './readiogroup';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, NgbModule, TranslateModule, SortablejsModule,FormsModule],
  declarations: [VDropdownComponent, MultiLevelNavComponent, MultiLevelNavitemDirective, MultiLevelNavChildComponent,
    ClickStopPropagation, AutofocusDirective, RadiogroupComponent, RadiogroupItemComponent],
  exports: [VDropdownComponent, MultiLevelNavComponent, MultiLevelNavitemDirective, MultiLevelNavChildComponent,
    ClickStopPropagation, AutofocusDirective, RadiogroupComponent, RadiogroupItemComponent],
})
export class SharedModule { }
