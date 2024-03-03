import {Component, input} from '@angular/core';
import {GameListItemDto} from '../dtos/game-list-item-dto';
import {GameItemCaptionModel} from "../models/caption-models/game-item-caption.model";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent {
  //#region properties
  gameInput = input.required<GameListItemDto>();
  captionInput = input.required<GameItemCaptionModel>();
  titleInput = input.required<string>();
  categoryTypeInput = input.required<GameCategoryEnum>();

  @Output() clickGameEvent = new EventEmitter<string>();
  @Output() clickWishlistEvent = new EventEmitter<string>();
  @Output() clickViewMoreButtonEvent = new EventEmitter<GameCategoryEnum>();

  //#endregion

  //region Handler methods
  emitClickGameEvent(gameId: string): void {
    this.clickGameEvent.emit(gameId);
  }

  emitClickWishlistEvent(gameId: string): void {
    this.clickWishlistEvent.emit(gameId);
  }

  emitClickViewMoreButtonEvent(categoryType: GameCategoryEnum): void {
    this.clickViewMoreButtonEvent.emit(categoryType);
  }

  //endregion
}
