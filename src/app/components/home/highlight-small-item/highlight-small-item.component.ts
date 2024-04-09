import { Component, EventEmitter, Output, input, model } from '@angular/core';
import { HighlightSmallItemInputModel } from '../models/highlight-small-item-input.model';

@Component({
  selector: 'app-highlight-small-item',
  templateUrl: './highlight-small-item.component.html',
  styleUrl: './highlight-small-item.component.scss',
})
export class HighlightSmallItemComponent {
  //#region Properties
  data = input.required<HighlightSmallItemInputModel>();
  isLoading = input.required<boolean>();
  isActive = model.required<boolean>();

  @Output() clickItemEvent = new EventEmitter<void>();
  //#endregion

  //#region Main logic method
  private _activateItem(): void {
    this.isActive.set(true);
  }
  //#region 

  //#region Handler methods
  public clickItemEventHandler(): void {
    this.clickItemEvent.emit();
  }

  public handleItemClick(): void {
    this._activateItem();
    this.clickItemEventHandler();
  }
  //#endregion
}
