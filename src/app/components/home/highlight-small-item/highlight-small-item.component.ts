import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, effect, input, model, untracked, viewChild } from '@angular/core';
import { HighlightSmallItemInputModel } from '../models/highlight-small-item-input.model';

@Component({
  selector: 'app-highlight-small-item',
  templateUrl: './highlight-small-item.component.html',
  styleUrl: './highlight-small-item.component.scss',
})
export class HighlightSmallItemComponent implements AfterContentChecked {
  //#region Properties
  data = input.required<HighlightSmallItemInputModel>();
  isLoading = input.required<boolean>();
  isActive = model.required<boolean>();

  @Output() clickItemEvent = new EventEmitter<void>();
  targetSection = viewChild<ElementRef<HTMLElement>>('section');
  //#endregion

  //#region Lifecycle methods
  ngAfterContentChecked(): void {
    this._toggleBackgroundColor();
  }
  //#endregion

  //#region Handler methods
  public onClickItemEventHandler(): void {
    this.clickItemEvent.emit();
  }
  //#endregion

  //#region Main logic methods
  /**
   * manipulate the section based on isActive input value to change the background color of the section
   */
  private _toggleBackgroundColor(): void {
    const sectionElement = this.targetSection()?.nativeElement;

    if (this.isActive() && sectionElement) {
      sectionElement.classList.add('bg-darkCharcoal');
    } else if (sectionElement) {
      sectionElement.classList.remove('bg-darkCharcoal');
    }
  }
  //#endregion
}
