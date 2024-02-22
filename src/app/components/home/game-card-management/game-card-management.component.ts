import { Component, input } from '@angular/core';
import { GameCardModel } from '../models/game-card.model';
import { GameCardDto } from '../dots/game-card-dto';

@Component({
  selector: 'app-game-card-management',
  templateUrl: './game-card-management.component.html',
  styleUrl: './game-card-management.component.scss'
})
export class GameCardManagementComponent {
  //#region properties
  gameCardInputs = input.required<GameCardDto[]>();
  //#endregion
}
