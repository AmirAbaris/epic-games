import { Component, EventEmitter, Output, input } from '@angular/core';
import { HighlightSmallItemInputModel } from '../models/highlight-small-item-input.model';
import { state, style, trigger } from '@angular/animations';

@Component({
  selector: 'app-highlight-small-item',
  templateUrl: './highlight-small-item.component.html',
  styleUrl: './highlight-small-item.component.scss',
})
export class HighlightSmallItemComponent {
  //#region Properties
  data = input.required<HighlightSmallItemInputModel>();
  isLoading = input.required<boolean>();
  isActive = input.required<boolean>();

  @Output() clickItemEvent = new EventEmitter<void>();
  //#endregion

  //#region Handler methods
  public clickItemEventHandler(): void {
    this.clickItemEvent.emit();
  }
  //#endregion
}
