import { Component, input } from '@angular/core';
import { HighlightSmallItemInputModel } from '../models/highlight-small-item-input.model';
import { output } from "@angular/core";

@Component({
  selector: 'app-highlight-small-item',
  templateUrl: './highlight-small-item.component.html',
  styleUrl: './highlight-small-item.component.scss',
})
export class HighlightSmallItemComponent {
  //#region Properties
  data = input.required<HighlightSmallItemInputModel>();
  isActive = input.required<boolean>();

  clickItemEvent = output<void>();
  //#endregion

  //#region Handler methods
  public onClickItemEventHandler(): void {
    this.clickItemEvent.emit();
  }
  //#endregion
}
