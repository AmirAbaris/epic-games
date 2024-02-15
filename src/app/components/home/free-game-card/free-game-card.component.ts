import { Component, input } from '@angular/core';
import { GameModel } from '../models/game.model';
import { FreeGameCardCaptionModel } from '../models/caption-models/free-game-card-caption.model';

@Component({
  selector: 'app-free-game-card',
  templateUrl: './free-game-card.component.html',
  styleUrl: './free-game-card.component.scss'
})
export class FreeGameCardComponent {
  //#region properties
  public gameInputs = input.required<GameModel[]>();
  public captionInput = input.required<FreeGameCardCaptionModel>();
  //#endregion
}
