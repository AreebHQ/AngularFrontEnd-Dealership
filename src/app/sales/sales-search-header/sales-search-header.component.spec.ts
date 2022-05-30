import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesSearchHeaderComponent } from './sales-search-header.component';

describe('SalesSearchHeaderComponent', () => {
  let component: SalesSearchHeaderComponent;
  let fixture: ComponentFixture<SalesSearchHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesSearchHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesSearchHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
