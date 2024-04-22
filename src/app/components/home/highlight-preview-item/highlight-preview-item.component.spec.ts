import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightPreviewItemComponent } from './highlight-preview-item.component';

describe('HighlightPreviewItemComponent', () => {
  let component: HighlightPreviewItemComponent;
  let fixture: ComponentFixture<HighlightPreviewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightPreviewItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighlightPreviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
