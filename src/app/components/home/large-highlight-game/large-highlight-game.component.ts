import { Component, EventEmitter, Output, computed, input } from '@angular/core';
import { GameModel } from '../models/game.model';
import { HomeCaptionModel } from '../models/caption-models/home-captions.model';
import { LargeHighlightGameCaptionModel } from '../models/caption-models/large-highlight-game-caption.model';

@Component({
  selector: 'app-large-highlight-game',
  templateUrl: './large-highlight-game.component.html',
  styleUrl: './large-highlight-game.component.scss'
})
export class LargeHighlightGameComponent {
  //#region properties
  gameInputs = input.required<GameModel[]>();
  currentGameIndexInput = input.required<number>();
  captionInput = input.required<LargeHighlightGameCaptionModel>();

  @Output('playButton') playButtonEvent = new EventEmitter();
  @Output('addWishlistButton') AddToWishListButtonEvent = new EventEmitter();
  //#endregion

  //#region handler methods
  public onPlayButtonEvent(): void {
    this.playButtonEvent.emit();
  }

  public onAddToWishlistButtonEvent(): void {
    this.playButtonEvent.emit();
  }
  //#endregion
}
