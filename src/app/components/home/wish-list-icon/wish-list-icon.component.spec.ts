import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListButtonComponent } from './wish-list-icon.component';

describe('WishListButtonComponent', () => {
  let component: WishListButtonComponent;
  let fixture: ComponentFixture<WishListButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WishListButtonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WishListButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
