import { Component, ElementRef, EventEmitter, Output, input, model, viewChild } from '@angular/core';
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
  targetSection = viewChild<ElementRef<HTMLElement>>('section');
  //#endregion

  //#region Handler methods
  public onClickItemEventHandler(): void {
    this.clickItemEvent.emit();
  }
  //#endregion
}
