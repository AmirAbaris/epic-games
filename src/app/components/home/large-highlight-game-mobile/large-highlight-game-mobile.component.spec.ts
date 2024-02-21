import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeHighlightGameMobileComponent } from './large-highlight-game-mobile.component';

describe('LargeHighlightGameMobileComponent', () => {
  let component: LargeHighlightGameMobileComponent;
  let fixture: ComponentFixture<LargeHighlightGameMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LargeHighlightGameMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LargeHighlightGameMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
