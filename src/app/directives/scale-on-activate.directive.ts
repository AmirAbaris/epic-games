import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[scaleOnActivateDir]'
})
export class ScaleOnActivateDirective {
  //#region Properties
  private readonly SCALE_DURATION = 150; // milliseconds
  //#endregion

  //#region Constructor
  constructor(private elementRef: ElementRef) { }
  //#endregion

  //#region Main logic methods
  /**
   * changes the scale of the image when users clicks on the parent section
   */
  @HostListener('click') scaleCoverOnClicked(): void {
    const targetElement = this._getTargetElement();
    this._scaleUpCover(targetElement);
    setTimeout(() => {
      this._scaleDownCover(targetElement);
    }, this.SCALE_DURATION);
  }

  private _getTargetElement(): HTMLElement {
    return this.elementRef.nativeElement.querySelector('.item-cover');
  }

  private _scaleUpCover(element: HTMLElement): void {
    element.classList.add('scale-110');
  }

  private _scaleDownCover(element: HTMLElement): void {
    element.classList.remove('scale-110');
  }
  //#endregion
}
