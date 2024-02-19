import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallHighlightGameComponent } from './small-highlight-game.component';

describe('SmallHighlightGameComponent', () => {
  let component: SmallHighlightGameComponent;
  let fixture: ComponentFixture<SmallHighlightGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmallHighlightGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallHighlightGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
