import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortniteCardManagementComponent } from './fortnite-card-management.component';

describe('FortniteCardManagementComponent', () => {
  let component: FortniteCardManagementComponent;
  let fixture: ComponentFixture<FortniteCardManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FortniteCardManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FortniteCardManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
