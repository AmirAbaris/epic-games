import { Component, EventEmitter, Output, input } from '@angular/core';
import { LargeHighlightGameCaptionModel } from '../models/caption-models/large-highlight-game-caption.model';
import { LargeHighlightGameModel } from '../models/large-highlight-game.model';

@Component({
  selector: 'app-large-highlight-game',
  templateUrl: './large-highlight-game.component.html',
  styleUrl: './large-highlight-game.component.scss'
})
export class LargeHighlightGameComponent {
  //#region properties
  gameInputs = input.required<LargeHighlightGameModel[]>();
  currentGameIndexInput = input.required<number>();
  captionInput = input.required<LargeHighlightGameCaptionModel>();
  addIconInput = input.required<string>();

  @Output('buyButton') buyButtonEvent = new EventEmitter<string>();
  @Output('addWishlistButton') addToWishListButtonEvent = new EventEmitter<string>();
  //#endregion

  //#region handler methods
  public onPlayButtonEvent(gameId: string): void {
    this.buyButtonEvent.emit(gameId);
  }

  public onAddToWishlistButtonEvent(gameId: string): void {
    this.addToWishListButtonEvent.emit(gameId);
  }
  //#endregion
}
