import { Component, EventEmitter, OnInit, Output, input } from '@angular/core';
import { GameListItemModel } from '../models/game-list-item.model';

@Component({
  selector: 'app-game-item-list',
  templateUrl: './game-item-list.component.html',
  styleUrl: './game-item-list.component.scss'
})
export class GameItemListComponent {
  //#region properties
  gameInput = input.required<GameListItemModel[]>();
  categoryType = input<string>();
  //#endregion
}
