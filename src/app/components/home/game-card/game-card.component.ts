import { Component, input } from '@angular/core';
import { GameCardModel } from '../models/game-card.model';
import { GameCardDto } from '../dtos/game-card-dto';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {
  //#region properties
  gameCardInputs = input.required<GameCardDto>();
  //#endregion
}
