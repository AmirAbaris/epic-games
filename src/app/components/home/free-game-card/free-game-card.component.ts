import {Component, input} from '@angular/core';
import {FreeGameCardCaptionModel} from '../models/caption-models/free-game-card-caption.model';
import {FreeGameCardDto} from '../dtos/free-game-card-dto';

@Component({
  selector: 'app-free-game-slider-item',
  templateUrl: './free-game-card.component.html',
  styleUrl: './free-game-card.component.scss'
})
export class FreeGameCardComponent {
  //#region properties
  public gameInputs = input.required<FreeGameCardDto>();
  public captionInput = input.required<FreeGameCardCaptionModel>();
  //#endregion
}
