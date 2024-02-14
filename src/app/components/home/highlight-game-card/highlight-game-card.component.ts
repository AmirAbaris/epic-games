import { Component, input } from '@angular/core';
import { HomeMainCaptionModel } from '../models/caption-models/home-main-captions.model';
import { HighlightGameModels } from '../models/highlight-game-models';

@Component({
  selector: 'app-highlight-game-card',
  templateUrl: './highlight-game-card.component.html',
  styleUrl: './highlight-game-card.component.scss'
})
export class HighlightGameCardComponent {
  //#region properties
  gameInputs = input.required<HighlightGameModels>();
  currentGameIndexInput = input.required<number>();
  captionInputs = input.required<HomeMainCaptionModel>();
  //#endregion
}
