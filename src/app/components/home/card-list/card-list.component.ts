import { Component, EventEmitter, Output, input } from '@angular/core';
import { CardListInputType } from '../types/card-list-input.type';
import { HomeCardActionInputModel } from '../models/home-card-action-input.model';
import { HomeCardGameInputModel } from '../models/home-card-game-input.model';

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

  //#region Main logic methods
  public isHomeCardAction(item: HomeCardActionInputModel | HomeCardGameInputModel): item is HomeCardActionInputModel {
    return (item as HomeCardActionInputModel).actionName !== undefined;
  }
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
