import { Component, EventEmitter, Output, input } from '@angular/core';
import { HomeMainCaptionModel } from '../models/caption-models/home-main-captions.model';
import { HighlightGamesModel } from '../models/highlight-games-model';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-highlight-game-card',
  templateUrl: './highlight-game-card.component.html',
  styleUrl: './highlight-game-card.component.scss'
})
export class HighlightGameCardComponent {
  //#region properties
  gameInputs = input.required<HighlightGamesModel>();
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
  //#endregion
}
