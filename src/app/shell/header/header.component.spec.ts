import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthenticationService, CredentialsService } from '@app/auth';
import { MockAuthenticationService } from '@app/auth/authentication.service.mock';
import { MockCredentialsService } from '@app/auth/credentials.service.mock';
import { I18nModule } from '@app/i18n';
import { HeaderComponent } from './header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/@shared';
import { TreeModule } from '@circlon/angular-tree-component';
import { SitePagesDropdownComponent } from '../components';
import { NgxSpinnerModule } from 'ngx-bootstrap-spinner';
import { CoreModule } from '@app/@core';
import { HttpClientModule } from '@angular/common/http';

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				NgbModule,
				TranslateModule.forRoot(),
				SharedModule,
				CoreModule,
				HttpClientModule,
				I18nModule,
				NgxSpinnerModule,
				TreeModule,
				ReactiveFormsModule
			],
			declarations: [HeaderComponent, SitePagesDropdownComponent],
			providers: [
				{ provide: AuthenticationService, useClass: MockAuthenticationService },
				{ provide: CredentialsService, useClass: MockCredentialsService }
			]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
