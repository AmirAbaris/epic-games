import { Component, input } from '@angular/core';
import { GameModel } from '../models/game.model';
import { HomeCaptionModel } from '../models/caption-models/home-captions.model';

@Component({
  selector: 'app-highlight-game-card',
  templateUrl: './highlight-game-card.component.html',
  styleUrl: './highlight-game-card.component.scss'
})
export class HighlightGameCardComponent {
  //#region properties
  gameInputs = input.required<GameModel[]>();
  currentGameIndexInput = input.required<number>();
  captionInputs = input.required<HomeCaptionModel>();
  //#endregion
}
