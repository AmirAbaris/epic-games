import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightSmallItemComponent } from './highlight-small-item.component';

describe('HighlightSmallItemComponent', () => {
  let component: HighlightSmallItemComponent;
  let fixture: ComponentFixture<HighlightSmallItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightSmallItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighlightSmallItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
