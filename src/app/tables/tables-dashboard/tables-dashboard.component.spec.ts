import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesDashboard2Component } from './tables-dashboard.component';

describe('TablesDashboard2Component', () => {
  let component: TablesDashboard2Component;
  let fixture: ComponentFixture<TablesDashboard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesDashboard2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesDashboard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
