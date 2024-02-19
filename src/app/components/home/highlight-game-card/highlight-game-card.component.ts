import { Component, EventEmitter, Output, computed, input } from '@angular/core';
import { HomeMainCaptionModel } from '../models/caption-models/home-main-captions.model';
import { HighlightGamesModel } from '../models/highlight-games-model';

@Component({
  selector: 'app-highlight-game-card',
  templateUrl: './highlight-game-card.component.html',
  styleUrl: './highlight-game-card.component.scss'
})
export class HighlightGameCardComponent {
  //#region properties
  gameInputs = input.required<HighlightGamesModel>();
  currentGameIndexInput = input.required<number>();
  captionInputs = input.required<HomeMainCaptionModel>();

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

  getTargetEvent(targetIndex: number): void {
    // can't set the new value to signal input!
    computed(() => this.currentGameIndexInput());
  }
  //#endregion
}
