import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightMainComponent } from './highlight-main.component';

describe('HighlightMainComponent', () => {
  let component: HighlightMainComponent;
  let fixture: ComponentFixture<HighlightMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighlightMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
