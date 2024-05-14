import { Directive, ElementRef, HostListener, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[textHoverIndicatorDir]'
})
export class TextHoverIndicatorDirective {
  //#region Properties
  private _elementRef = inject(ElementRef);
  private _renderer = inject(Renderer2);
  //#endregion

  //#region Handler methods
  @HostListener('mouseover') onMouseOverHandler(): void {
    this._renderer.addClass(this._setElementQuery(), 'hovered');
  }

  @HostListener('mouseout') onMouseOutHandler(): void {
    this._renderer.removeClass(this._setElementQuery(), 'hovered');
  }
  //#endregion

  //#region Main logic methods
  private _setElementQuery(): string {
    return this._elementRef.nativeElement.querySelector('.icon-display');
  }
  //#endregion
}
