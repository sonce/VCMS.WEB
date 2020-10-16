import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-bootstrap-spinner';

@NgModule({
  imports: [CommonModule, TranslateModule, NgbModule, SharedModule, HomeRoutingModule, NgxSpinnerModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
