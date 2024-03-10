import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GameSliderItemComponent} from './game-slider-item.component';

describe('GameCardComponent', () => {
  let component: GameSliderItemComponent;
  let fixture: ComponentFixture<GameSliderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameSliderItemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GameSliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
