import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GameSliderComponent} from './game-slider.component';

describe('GameCardManagementComponent', () => {
  let component: GameSliderComponent;
  let fixture: ComponentFixture<GameSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameSliderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GameSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
