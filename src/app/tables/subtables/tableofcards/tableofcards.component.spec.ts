import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableofcardsComponent } from './tableofcards.component';

describe('TableofcardsComponent', () => {
  let component: TableofcardsComponent;
  let fixture: ComponentFixture<TableofcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableofcardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableofcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
