import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@shared';

import { I18nModule } from '@app/i18n';
import { AuthModule } from '@app/auth';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { TreeModule } from '@circlon/angular-tree-component';
import { SitePagesDropdownComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-bootstrap-spinner';
import { SharedModule as SharedLibModule } from 'shared';

@NgModule({
	imports: [
		CommonModule,
		TranslateModule,
		NgbModule,
		AuthModule,
		I18nModule,
		RouterModule,
		ReactiveFormsModule,
		SharedModule,
		SharedLibModule,
		TreeModule,
		NgxSpinnerModule
	],
	declarations: [HeaderComponent, ShellComponent, SitePagesDropdownComponent]
})
export class ShellModule {}
