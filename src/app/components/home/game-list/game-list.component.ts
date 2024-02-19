import { Component, input } from '@angular/core';
import { GameListItemModel } from '../models/game-list-item.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent {
  //#region properties
  gameInput = input.required<GameListItemModel[]>();
  //#endregion
}
