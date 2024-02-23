import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBannerActionComponent } from './game-banner-action.component';

describe('GameBannerActionComponent', () => {
  let component: GameBannerActionComponent;
  let fixture: ComponentFixture<GameBannerActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameBannerActionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameBannerActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
