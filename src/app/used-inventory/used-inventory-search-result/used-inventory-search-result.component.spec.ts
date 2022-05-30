import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedInventorySearchResultComponent } from './used-inventory-search-result.component';

describe('UsedInventorySearchResultComponent', () => {
  let component: UsedInventorySearchResultComponent;
  let fixture: ComponentFixture<UsedInventorySearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsedInventorySearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedInventorySearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
