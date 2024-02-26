import { Component, input } from '@angular/core';
import { GameModel } from '../models/game.model';
import { FreeGameCardCaptionModel } from '../models/caption-models/free-game-card-caption.model';
import { FreeGameCardModel } from '../models/free-game-card.model';
import { FreeGameCardDto } from '../dtos/free-game-card-dto';

@Component({
  selector: 'app-free-game-card',
  templateUrl: './free-game-card.component.html',
  styleUrl: './free-game-card.component.scss'
})
export class FreeGameCardComponent {
  //#region properties
  public gameInputs = input.required<FreeGameCardDto>();
  public captionInput = input.required<FreeGameCardCaptionModel>();
  //#endregion
}
