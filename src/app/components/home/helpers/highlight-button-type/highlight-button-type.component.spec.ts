import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightButtonTypeComponent } from './highlight-button-type.component';

describe('HighlightButtonTypeComponent', () => {
  let component: HighlightButtonTypeComponent;
  let fixture: ComponentFixture<HighlightButtonTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightButtonTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighlightButtonTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
