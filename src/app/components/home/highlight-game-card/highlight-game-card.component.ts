import { Component, input } from '@angular/core';
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
  //#endregion
}
