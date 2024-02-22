import { Component, DestroyRef, OnInit, inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { GameService } from "../../../services/game.service";
import { HomeMainCaptionModel } from "../models/caption-models/home-main-captions.model";
import { HighlightGamesModel } from "../models/highlight-games-model";
import { GameListItemModel } from "../models/game-list-item.model";
import { GameCardModel } from "../models/game-card.model";
import { FreeGameCardModel } from "../models/free-game-card.model";
import { FortniteCardModel } from "../models/fortnite-card.model";
import { LargeHighlightGameCaptionModel } from "../models/caption-models/large-highlight-game-caption.model";
import { HighlightGamesDto } from "../dots/highlight-games-dto";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { GameCardDto } from "../dots/game-card-dto";

@Component({
  selector: "app-home-main",
  templateUrl: "./home-main.component.html",
  styleUrl: "./home-main.component.scss",
})
export class HomeMainComponent implements OnInit {
  //#region inject functions
  private _gameService = inject(GameService);
  private _translateService = inject(TranslateService);
  private _destroyRef = inject(DestroyRef);
  //#endregion

  //#region properties
  // public gameListItem!: GameListItemModel;
  // public freeGameCard!: FreeGameCardModel;
  // public fortniteCard!: FortniteCardModel;
  public highlightGames: HighlightGamesDto | undefined;
  public gameCards: GameCardDto[] | undefined;

  public largeHighlightGameCaption: LargeHighlightGameCaptionModel | undefined;

  private readonly captionPaths = {
    largeHighlightGame: "home.LargeHighlightGame",
    freeGameCardManagement: "home.FreeGameCardManagement",
    freeGameCard: "home.FreeGameCard",
  };
  //#endregion

  //#region lifecycle methods
  ngOnInit(): void {
    this._getHighlightGames();
    this._getGameCards();
    this._getCaptions();
  }
  //#endregion

  //#region main logic methods
  private _getHighlightGames(): void {
    this._gameService.getHighlightGames().pipe(takeUntilDestroyed(this._destroyRef)).subscribe((highlightGames) => {
      this.highlightGames = this._convertHighlightGamesModelToHighlightGamesDto(highlightGames);
    });
  }

  private _getGameCards(): void {
    this._gameService.getGameCards().subscribe((gameCards) => {
      this.gameCards = this._convertGameCardModelToGameCardDto(gameCards);
    });
  }

  private _getCaptions(): void {
    this._translateService.get(this.captionPaths.largeHighlightGame).subscribe((caption) => {
      this.largeHighlightGameCaption = caption;
    });
  }
  //#endregion

  //#region helper methods
  private _convertHighlightGamesModelToHighlightGamesDto(highlightGames: HighlightGamesModel): HighlightGamesDto {
    const highlightGamesDto: HighlightGamesDto = {
      smallHighlightGames: highlightGames.smallHighlightGames,
      largeHighlightGames: highlightGames.largeHighlightGames
    }

    return highlightGamesDto;
  }

  private _convertGameCardModelToGameCardDto(gameCards: GameCardModel[]): GameCardDto[] {
    const gameCardsDto: GameCardDto[] = [];

    gameCards.forEach((gameCard) => {
      const gameCardDto: GameCardDto = {
        name: gameCard.name,
        type: gameCard.type,
        cover: gameCard.cover,
        discountPercent: gameCard.discountPercent,
        basePrice: gameCard.basePrice,
        finalPrice: gameCard.finalPrice,
        isFree: gameCard.isFree
      };

      gameCardsDto.push(gameCardDto);
    });

    return gameCardsDto;
  }

  //#endregion
}
