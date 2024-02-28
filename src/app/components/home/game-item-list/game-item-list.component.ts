import { Component, EventEmitter, OnInit, Output, input } from '@angular/core';
import { GameListItemModel } from '../models/game-list-item.model';
import { GameListItemDto } from '../dtos/game-list-item-dto';

@Component({
  selector: 'app-game-item-list',
  templateUrl: './game-item-list.component.html',
  styleUrl: './game-item-list.component.scss'
})
export class GameItemListComponent {
  //#region properties
  gameInput = input.required<GameListItemDto>();

  @Output() clickWishlistButtonEvent = new EventEmitter<string>();
  @Output() clickItemEvent = new EventEmitter<string>();

  public showWishlist: boolean = false;
  //#endregion

  //region Handler methods
  onClickWishlistButton(gameId: string) {
    this.clickWishlistButtonEvent.emit(gameId);

    console.log(gameId);
  }

  onClickItem(gameId: string) {
    this.clickItemEvent.emit(gameId);

    console.log(gameId);
  }
  //endregion
}
