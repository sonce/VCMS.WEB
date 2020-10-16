import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiLevelNavComponent } from './multilevelnav.component';

describe('MultilevelnavComponent', () => {
  let component: MultiLevelNavComponent;
  let fixture: ComponentFixture<MultiLevelNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultiLevelNavComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiLevelNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
