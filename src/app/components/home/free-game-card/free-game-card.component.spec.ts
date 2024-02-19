import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeGameCardComponent } from './free-game-card.component';

describe('FreeGameCardComponent', () => {
  let component: FreeGameCardComponent;
  let fixture: ComponentFixture<FreeGameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreeGameCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreeGameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
