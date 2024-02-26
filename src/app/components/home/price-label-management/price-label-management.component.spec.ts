import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceLabelManagementComponent } from './price-label-management.component';

describe('PriceLabelManagementComponent', () => {
  let component: PriceLabelManagementComponent;
  let fixture: ComponentFixture<PriceLabelManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceLabelManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriceLabelManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
