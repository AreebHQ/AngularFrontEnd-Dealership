import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSearchHeaderComponent } from './admin-search-header.component';

describe('AdminSearchHeaderComponent', () => {
  let component: AdminSearchHeaderComponent;
  let fixture: ComponentFixture<AdminSearchHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSearchHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSearchHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
