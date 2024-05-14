import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightMainSkeletonComponent } from './highlight-main-skeleton.component';

describe('HighlightMainSkeletonComponent', () => {
  let component: HighlightMainSkeletonComponent;
  let fixture: ComponentFixture<HighlightMainSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightMainSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighlightMainSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
