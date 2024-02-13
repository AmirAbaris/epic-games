import { Component, input } from '@angular/core';
import { GameModel } from '../models/game.model';

@Component({
  selector: 'app-free-game-card-management',
  templateUrl: './free-game-card-management.component.html',
  styleUrl: './free-game-card-management.component.scss'
})
export class FreeGameCardManagementComponent {
  //#region properties
  public gameInputs = input.required<GameModel[]>();
  //#endregion
}
