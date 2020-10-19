import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { VDropdownComponent } from '..';

describe('VDropdownComponent', () => {
	let component: VDropdownComponent;
	let fixture: ComponentFixture<VDropdownComponent>;

	beforeAll(async(() => {
		TestBed.configureTestingModule({
			imports: [NgbModule],
			declarations: [VDropdownComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(VDropdownComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('when open the chevron class change', () => {
		component.open();
		expect(component.IsOpen).toBeTruthy();
		const compiled = fixture.debugElement.nativeElement as HTMLElement;
		console.log(compiled.querySelector('i.iconfont').className);
		expect(compiled.querySelector('i.iconfont').classList.contains('icon-chevron-up')).toBeTruthy();

		component.close();
		expect(component.IsOpen).toBeFalsy();
		expect(compiled.querySelector('i.iconfont').classList.contains('icon-chevron-down')).toBeTruthy();
	});
});
