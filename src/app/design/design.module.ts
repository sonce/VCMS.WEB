import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-bootstrap-spinner'
import { DesignComponent } from './design.component';
import { DesignRoutingModule } from './design-routing.module';
import { DesignResolver } from './design-resolver.service';
@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, NgbModule, SharedModule, DesignRoutingModule, NgxSpinnerModule],
  declarations: [DesignComponent],
  providers: [DesignResolver]
})
export class DesignModule { }
