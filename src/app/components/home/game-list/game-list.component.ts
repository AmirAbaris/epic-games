import { Component, OnInit, input } from '@angular/core';
import { GameListItemModel } from '../models/game-list-item.model';
import { GameListItemDto } from '../dtos/game-list-item-dto';
import { GameCategoryEnum } from '../enums/category-types.enum';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent implements OnInit {
  //#region properties
  gameInput = input.required<GameListItemDto[]>();
  public gameCategories: GameCategoryEnum[] = [GameCategoryEnum.TopSellers, GameCategoryEnum.MostPlayed, GameCategoryEnum.TopUpcomingWishlisted];

  public firstGameCategory: GameListItemDto[] | undefined;
  public secondGameCategory: GameListItemDto[] | undefined;
  public thirdGameCategory: GameListItemDto[] | undefined;
  //#endregion

  //#region lifecycle methods
  ngOnInit(): void {
    this.filterGames(this.gameInput());
  }
  //#endregion

  //#region main logic methods
  filterGames(games: GameListItemDto[]): void {
    this.firstGameCategory = games.filter((game) => game.categoryType === this.gameCategories[0]);
    this.secondGameCategory = games.filter((game) => game.categoryType === this.gameCategories[1]);
    this.thirdGameCategory = games.filter((game) => game.categoryType === this.gameCategories[2]);
  }
  //#endregion
}
