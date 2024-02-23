import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBannerManagementComponent } from './game-banner-management.component';

describe('GameBannerManagementComponent', () => {
  let component: GameBannerManagementComponent;
  let fixture: ComponentFixture<GameBannerManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameBannerManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameBannerManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
