import { Component, input } from '@angular/core';
import { GameCardModel } from '../models/game-card.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {
  //#region properties
  gameCardInputs = input.required<GameCardModel[]>();
  //#endregion
}
