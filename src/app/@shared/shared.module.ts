import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SortablejsModule } from 'ngx-sortablejs';
import { VDropdownComponent } from './components/vdropdown/vdropdown.component';
import { TranslateModule } from '@ngx-translate/core';
import { MultiLevelNavComponent, MultiLevelNavitemDirective, MultiLevelNavChildComponent } from './components/multilevelnav';
import { ClickStopPropagation, AutofocusDirective } from './directives'
import { RadiogroupComponent, RadiogroupItemComponent } from './components/readiogroup';
import { FormsModule } from '@angular/forms';
import { HTMLDesignComponent } from './components/htmldesign';
import { SafePipe } from './pipes';

@NgModule({
  imports: [CommonModule, NgbModule, TranslateModule, SortablejsModule, FormsModule],
  declarations: [VDropdownComponent, MultiLevelNavComponent, MultiLevelNavitemDirective, MultiLevelNavChildComponent,
    ClickStopPropagation, AutofocusDirective, RadiogroupComponent, RadiogroupItemComponent, HTMLDesignComponent,
    SafePipe],
  exports: [VDropdownComponent, MultiLevelNavComponent, MultiLevelNavitemDirective, MultiLevelNavChildComponent,
    ClickStopPropagation, AutofocusDirective, RadiogroupComponent, RadiogroupItemComponent, HTMLDesignComponent,
    SafePipe],
})
export class SharedModule { }
