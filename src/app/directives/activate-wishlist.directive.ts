import {AfterViewInit, Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[activateWishlistDir]'
})
export class ActivateWishlistDirective implements AfterViewInit {
  //region Constructor
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this._showWishlist(false);
  }

  //region Main logic methods
  @HostListener('mouseenter') onMouseEnter(): void {
    this._showWishlist(true);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this._showWishlist(false);
  }

  private _showWishlist(isShow: boolean): void {
    const wishlist = this.el.nativeElement.querySelector('.wishlist');
    if (wishlist) {
      if (isShow) {
        this.renderer.setStyle(wishlist, 'display', 'block');
      } else {
        this.renderer.setStyle(wishlist, 'display', 'none');
      }
    }
  }

  //endregion
}
