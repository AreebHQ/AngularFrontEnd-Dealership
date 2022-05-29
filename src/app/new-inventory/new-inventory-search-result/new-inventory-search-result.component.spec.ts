import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInventorySearchResultComponent } from './new-inventory-search-result.component';

describe('NewInventorySearchResultComponent', () => {
  let component: NewInventorySearchResultComponent;
  let fixture: ComponentFixture<NewInventorySearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewInventorySearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInventorySearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
