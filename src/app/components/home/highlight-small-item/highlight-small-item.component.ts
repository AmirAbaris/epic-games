import { Component, EventEmitter, Output, input } from '@angular/core';
import { HighlightSmallItemInputModel } from '../models/highlight-small-item-input.model';

@Component({
  selector: 'app-highlight-small-item',
  templateUrl: './highlight-small-item.component.html',
  styleUrl: './highlight-small-item.component.scss'
})
export class HighlightSmallItemComponent {
  //#region Properties
  data = input.required<HighlightSmallItemInputModel>();
  isLoading = input.required<boolean>();

  @Output() clickItemEvent = new EventEmitter<void>();

  private readonly SCALE_DURATION = 5000;
  //#endregion

  //#region Main logic methods
  /**
   * activates the item, then after 5 sec will deactivate it
   */
  public manageItemActiveStatus(): void {
    this._activateItem();
    setTimeout(() => {
      this._deactivateItem();
    }, this.SCALE_DURATION);
  }
  private _activateItem(): void {
    this.data().isActive = true;
  }

  private _deactivateItem(): void {
    this.data().isActive = false;
  }
  //#endregion

  //#region HandlerMethods
  public clickItemEventHandler(): void {
    if (this.data().isActive) {
      this.clickItemEvent.emit();
    }
  }
  //#endregion
}
