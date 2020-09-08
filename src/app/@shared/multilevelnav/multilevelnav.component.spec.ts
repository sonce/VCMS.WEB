import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultilevelnavComponent } from './multilevelnav.component';

describe('MultilevelnavComponent', () => {
  let component: MultilevelnavComponent;
  let fixture: ComponentFixture<MultilevelnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultilevelnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultilevelnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
