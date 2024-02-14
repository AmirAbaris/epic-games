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
