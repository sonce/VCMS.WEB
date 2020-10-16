import { SitePagesDropdownComponent } from './sitePagesDropdown.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/@shared';
import { I18nModule } from '@app/i18n';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-bootstrap-spinner';
import { TreeModule } from '@circlon/angular-tree-component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '@app/@core';

describe('SitePagesDropdownComponent', () => {
  let component: SitePagesDropdownComponent;
  let fixture: ComponentFixture<SitePagesDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgbModule,
        TranslateModule.forRoot(),
        SharedModule,
        TreeModule,
        HttpClientModule,
        I18nModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
        CoreModule,
      ],
      declarations: [SitePagesDropdownComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitePagesDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
