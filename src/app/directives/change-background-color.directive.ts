import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[changeBackgroundColorDir]'
})
export class ChangeBackgroundColorDirective {
  //#region Properties
  private readonly SCALE_DURATION = 5000; // milliseconds
  //#endregion

  //#region Constructor
  constructor(private elementRef: ElementRef) { }
  //#endregion

  //#region Main logic methods
  /**
   * changes the background color when clicks on the section and removes the added background color after 5 sec
   */
  @HostListener('click') changeBackgroundColor(): void {
    const targetElement = this._getTargetElement();

    this._addBackgroundColor(targetElement);
    setTimeout(() => {
      this._removeBackgroundColor(targetElement);
    }, this.SCALE_DURATION);
  }

  private _getTargetElement(): HTMLElement {
    return this.elementRef.nativeElement.querySelector('.container');
  }

  private _addBackgroundColor(targetElement: HTMLElement): void {
    targetElement.classList.add('bg-darkCharcoal');
  }

  private _removeBackgroundColor(targetElement: HTMLElement): void {
    targetElement.classList.remove('bg-darkCharcoal');
  }
  //#endregion
}
