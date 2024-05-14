import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeItemSkeletonComponent } from './free-item-skeleton.component';

describe('FreeItemSkeletonComponent', () => {
  let component: FreeItemSkeletonComponent;
  let fixture: ComponentFixture<FreeItemSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreeItemSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreeItemSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
