import { Component, EventEmitter, Output, input, model } from '@angular/core';
import { HighlightSmallItemInputModel } from '../models/highlight-small-item-input.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-highlight-small-item',
  templateUrl: './highlight-small-item.component.html',
  styleUrl: './highlight-small-item.component.scss',
  animations: [
    trigger('scale-via-isActive', [
      state('scale-on-active', style({
        transform: 'scale(1.1)'
      })),
      state('on-deActive', style({
        transform: 'scale(1)'
      })),
      transition('on-deActive => scale-on-active', animate('100ms ease-in')),
      transition('scale-on-active => on-deActive ', animate('100ms ease-out'))
    ])
  ]
})
export class HighlightSmallItemComponent {
  //#region Properties
  data = input.required<HighlightSmallItemInputModel>();
  isLoading = input.required<boolean>();

  // used new signal model to change the init model value
  isActive = model.required<boolean>();

  @Output() clickItemEvent = new EventEmitter<void>();

  private readonly SCALE_DURATION = 5000;
  //#endregion

  //#region Main logic methods
  /**
   * activates the item, then after 5 sec it will deactivates it
   */
  public manageItemActiveStatus(): void {
    this._activateItem();
    setTimeout(() => {
      this._deactivateItem();
    }, this.SCALE_DURATION);
  }
  private _activateItem(): void {
    this.isActive.set(true);
  }

  private _deactivateItem(): void {
    this.isActive.set(false);
  }
  //#endregion

  //#region Handler methods
  public clickItemEventHandler(): void {
    if (this.isActive()) {
      this.clickItemEvent.emit();
    }
  }
  //#endregion
}
