import { Component, input, output } from '@angular/core';
import { CardListInputType } from '../types/card-list-input.type';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  //#region Properties
  data = input.required<CardListInputType[]>();
  isLoading = input.required<boolean>();
  isWishlistProcessing = input.required<boolean>();
  wishlistIds = input.required<string[]>();

  clickCardEvent = output<string>();
  clickWishlistButtonEvent = output<string>();
  //#endregion

  //#region Handler methods
  public onClickCardEventHandler(id: string | undefined): void {
    if (id) {
      this.clickCardEvent.emit(id);
    }
  }

  public onClickWishlistButtonEventHandler(id: string): void {
    this.clickWishlistButtonEvent.emit(id);
  }
  //#endregion
}
