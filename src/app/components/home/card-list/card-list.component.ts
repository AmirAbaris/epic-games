import { Component, EventEmitter, Output, input } from '@angular/core';
import { CardListInputType } from '../types/card-list-input.type';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  //#region Properties
  data = input.required<CardListInputType>();
  isLoading = input.required<boolean>();

  @Output() clickCardEvent = new EventEmitter<void>();
  @Output() clickWishlistButtonEvent = new EventEmitter<string>();
  //#endregion

  //#region Handler methods
  public onClickCardEventHandler(): void {
    this.clickCardEvent.emit();
  }

  public onClickWishlistButtonEventHandler(id: string): void {
    this.clickWishlistButtonEvent.emit(id);
  }
  //#endregion
}
