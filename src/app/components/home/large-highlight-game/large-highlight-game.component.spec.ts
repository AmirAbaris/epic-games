import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeHighlightGameComponent } from './large-highlight-game.component';

describe('LargeHighlightGameComponent', () => {
  let component: LargeHighlightGameComponent;
  let fixture: ComponentFixture<LargeHighlightGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LargeHighlightGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LargeHighlightGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
