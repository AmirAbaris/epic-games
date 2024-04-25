import { AfterViewInit, Directive, ElementRef, OnChanges, SimpleChanges, inject, input } from '@angular/core';

@Directive({
  selector: '[scaleOnActivateDir]'
})
export class ScaleOnActivateDirective implements OnChanges, AfterViewInit {
  //#region Properties
  private _elementRef = inject(ElementRef);

  isActive = input.required<boolean>();
  public targetElement: HTMLElement | undefined;
  private readonly _SCALE_DURATION = 150; // milliseconds
  //#endregion

  //#region Lifecycle methods
  ngAfterViewInit(): void {
    // set a global target element to access it easer via methods
    this._setTargetElement();

    this._applyScale();
    console.log(this.isActive());
  }

  /**
   * listens to value changes for scaleOnActivateDir input
   * @param changes 
   */
  ngOnChanges(changes: SimpleChanges): void {
    if ('isActive' in changes) {
      this._applyScale();
    }
  }
  //#endregion

  //#region Main logic methods
  private _applyScale(): void {
    if (!this.isActive()) return;

    this._scaleUpCover(this.targetElement);
    setTimeout(() => {
      this._scaleDownCover(this.targetElement);
    }, this._SCALE_DURATION);
  }

  private _setTargetElement(): void {
    this.targetElement = this._elementRef.nativeElement;
  }

  private _scaleUpCover(element: HTMLElement | undefined): void {
    if (element) {
      element.classList.add('scale-110');
    }
  }

  private _scaleDownCover(element: HTMLElement | undefined): void {
    if (element) {
      element.classList.remove('scale-110');
    }
  }
  //#endregion
}
