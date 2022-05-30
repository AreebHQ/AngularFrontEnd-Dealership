import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesSearchResultComponent } from './sales-search-result.component';

describe('SalesSearchResultComponent', () => {
  let component: SalesSearchResultComponent;
  let fixture: ComponentFixture<SalesSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesSearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
