import {Component, EventEmitter, input, Output} from '@angular/core';
import {GameCategoryEnum} from "../enums/category-types.enum";
import {GameListItemDto} from "../dtos/game-list-item-dto";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent {
  //#region properties
  // gameListInputModelInput = input.required<GameListInputModel>();
  gameItemInput = input.required<GameListItemDto[]>();

  @Output() clickGameEvent = new EventEmitter<string>();
  @Output() clickWishlistEvent = new EventEmitter<string>();
  @Output() clickViewMoreButtonEvent = new EventEmitter<GameCategoryEnum>();

  protected GameCategoryEnum = Object.values(GameCategoryEnum);
  //endregion

  //region Handler methods
  public onClickGameEventHandler(gameId: string): void {
    this.clickGameEvent.emit(gameId);
  }

  public onClickWishlistEventHandler(gameId: string): void {
    this.clickWishlistEvent.emit(gameId);
  }

  public onClickViewMoreButtonEventHandler(categoryType: GameCategoryEnum): void {
    this.clickViewMoreButtonEvent.emit(categoryType);
  }

  //endregion
}
