import { Component, input } from '@angular/core';
import { GameListItemModel } from '../models/game-list-item.model';
import { GameListItemDto } from '../dots/game-list-item-dto';
import { GameCategoryEnum } from '../enums/category-types.enum';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent {
  //#region properties
  gameInput = input.required<GameListItemDto[]>();
  public gameCategories: GameCategoryEnum | undefined;
  //#endregion
}
