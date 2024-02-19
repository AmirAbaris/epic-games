import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeGameCardManagementComponent } from './free-game-card-management.component';

describe('FreeGameCardManagementComponent', () => {
  let component: FreeGameCardManagementComponent;
  let fixture: ComponentFixture<FreeGameCardManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreeGameCardManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreeGameCardManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
