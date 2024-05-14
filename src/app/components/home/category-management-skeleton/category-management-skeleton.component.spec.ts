import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryManagementSkeletonComponent } from './category-management-skeleton.component';

describe('CategoryManagementSkeletonComponent', () => {
  let component: CategoryManagementSkeletonComponent;
  let fixture: ComponentFixture<CategoryManagementSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryManagementSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryManagementSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
