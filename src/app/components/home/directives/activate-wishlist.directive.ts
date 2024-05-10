import { AfterViewInit, Directive, ElementRef, HostListener, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[activateWishlistDir]'
})
export class ActivateWishlistDirective implements AfterViewInit {
  //#region Properties
  private _elementRef = inject(ElementRef);
  private _renderer = inject(Renderer2);

  private _wishlistClasses = ['absolute', 'right-4', 'top-2', 'cursor-pointer', 'z-10'];
  private _targetElement: HTMLElement | undefined;
  private _imageElement: HTMLElement | null | undefined;
  //#endregion

  //#region Lifecycle methods
  ngAfterViewInit() {
    this._setElementValues();
    this._toggleWishlistVisibility(false);
  }
  //#endregion

  //#region Main logic methods
  @HostListener('mouseover', ['$event'])
  onMouseOver(event: MouseEvent): void {
    if (event.target === this._imageElement) {
      this._toggleWishlistVisibility(true);
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(): void {
    this._toggleWishlistVisibility(false);
    this._removeWishlistClasses();
  }

  /**
   * it shows/hides the wishlist component based on if the mouse is on it or not
   * @param isVisible 
   */
  private _toggleWishlistVisibility(isVisible: boolean): void {
    if (this._targetElement) {
      // determine the display style based on visibility
      const displayStyle = isVisible ? 'block' : 'none';

      // add wishlist classes to the element
      this._addClassesToElement();

      // sets wishlist tailwind classes
      this._setElementDisplayStyle(displayStyle);
    }
  }

  private _setElementValues(): void {
    this._targetElement = this._elementRef.nativeElement.querySelector('.wishlist');
    this._imageElement = this._elementRef.nativeElement.querySelector('.item-cover');
  }

  private _setElementDisplayStyle(displayStyle: string): void {
    this._renderer.setStyle(this._targetElement, 'display', displayStyle);
  }

  private _addClassesToElement(): void {
    this._wishlistClasses.forEach((className: string) => {
      this._renderer.addClass(this._targetElement, className);
    });
  }

  private _removeWishlistClasses(): void {
    this._wishlistClasses.forEach((className: string) => {
      this._renderer.removeClass(this._targetElement, className);
    });
  }
  //#endregion
}
