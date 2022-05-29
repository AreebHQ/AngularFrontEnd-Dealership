import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedInventoryComponent } from './used-inventory.component';

describe('UsedInventoryComponent', () => {
  let component: UsedInventoryComponent;
  let fixture: ComponentFixture<UsedInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsedInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
