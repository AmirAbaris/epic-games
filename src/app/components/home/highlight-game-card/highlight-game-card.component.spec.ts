import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightGameCardComponent } from './highlight-game-card.component';

describe('HighlightGameCardComponent', () => {
  let component: HighlightGameCardComponent;
  let fixture: ComponentFixture<HighlightGameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightGameCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighlightGameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
