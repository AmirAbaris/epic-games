import { AfterViewInit, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[activateWishlistDir]'
})
export class ActivateWishlistDirective implements AfterViewInit {
  //#region Properties
  private _wishlistClasses = ['absolute', 'right-4', 'top-2', 'cursor-pointer', 'z-10'];
  //#endregion

  //#region Constructor
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  //#endregion

  //#region Lifecycle methods
  ngAfterViewInit() {
    this._toggleWishlistVisibility(false);
  }
  //#endregion

  //#region Main logic methods
  @HostListener('mouseenter') onMouseEnter(): void {
    this._toggleWishlistVisibility(true);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this._toggleWishlistVisibility(false);
    this._removeWishlistClasses();
  }

  /**
   * it shows/hides the wishlist component based on if the mouse is on it or not
   * @param isVisible 
   */
  private _toggleWishlistVisibility(isVisible: boolean): void {
    const wishlistElement = this._getWishlistElement();

    if (wishlistElement) {
      // determine the display style based on visibility
      const displayStyle = isVisible ? 'block' : 'none';

      // add wishlist classes to the element
      this._addWishlistClasses(wishlistElement);

      // sets wishlist tailwind classes
      this._setElementDisplayStyle(wishlistElement, displayStyle);
    }
  }

  private _getWishlistElement(): HTMLElement | null {
    return this.el.nativeElement.querySelector('.wishlist');
  }

  private _setElementDisplayStyle(element: HTMLElement, displayStyle: string): void {
    this.renderer.setStyle(element, 'display', displayStyle);
  }

  private _addWishlistClasses(element: HTMLElement): void {
    this._wishlistClasses.forEach((className: string) => {
      this.renderer.addClass(element, className);
    });
  }

  private _removeWishlistClasses(): void {
    const wishlistElement = this._getWishlistElement();

    this._wishlistClasses.forEach((className: string) => {
      this.renderer.removeClass(wishlistElement, className);
    });
  }
  //#endregion
}
