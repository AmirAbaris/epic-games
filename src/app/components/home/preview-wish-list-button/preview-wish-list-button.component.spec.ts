import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewWishListButtonComponent } from './preview-wish-list-button.component';

describe('PreviewWishListButtonComponent', () => {
  let component: PreviewWishListButtonComponent;
  let fixture: ComponentFixture<PreviewWishListButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviewWishListButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviewWishListButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
