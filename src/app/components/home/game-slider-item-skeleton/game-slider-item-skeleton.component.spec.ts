import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSliderItemSkeletonComponent } from './game-slider-item-skeleton.component';

describe('GameSliderItemSkeletonComponent', () => {
  let component: GameSliderItemSkeletonComponent;
  let fixture: ComponentFixture<GameSliderItemSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameSliderItemSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameSliderItemSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
