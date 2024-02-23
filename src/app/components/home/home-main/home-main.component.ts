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
import { FreeGameCardDto } from "../dots/free-game-card-dto";
import { FreeGameCardCaptionModel } from "../models/caption-models/free-game-card-caption.model";
import { freeGameCardManagementCaptionModel } from "../models/caption-models/free-game-card-management-caption.model";
import { FreeCardCaptionsModel } from "../models/caption-models/free-card-captions.model";
import { FortniteCardDto } from "../dots/fortnite-card-dto";
import { FortniteCardManagementCaptionModel } from "../models/caption-models/fortnite-management-caption.model";

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
  // public fortniteCard!: FortniteCardModel;
  public highlightGames: HighlightGamesDto | undefined;
  public gameCards: GameCardDto[] | undefined;
  public freeGameCards: FreeGameCardDto[] | undefined;
  public fortniteGameCards: FortniteCardDto[] | undefined;

  public largeHighlightGameCaption: LargeHighlightGameCaptionModel | undefined;
  public freeGamesCaption: FreeGameCardCaptionModel | undefined;
  public freeGameManagementCaption: freeGameCardManagementCaptionModel | undefined;
  public fortniteCaption: FortniteCardManagementCaptionModel | undefined;

  private readonly captionPaths = {
    largeHighlightGame: "home.LargeHighlightGame",
    freeGameCardManagement: "home.FreeGameCardManagement",
    freeGameCard: "home.FreeGameCard",
    fortniteCardManagement: "home.FortniteCardManagement"
  };
  //#endregion

  //#region lifecycle methods
  ngOnInit(): void {
    this._getHighlightGames();
    this._getGameCards();
    this._getFreeGames();
    this._getFortniteGames();

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
    this._gameService.getGameCards().pipe(takeUntilDestroyed(this._destroyRef)).subscribe((gameCards) => {
      this.gameCards = this._convertGameCardModelToGameCardDto(gameCards);
    });
  }

  private _getFreeGames(): void {
    this._gameService.getFreeGames().pipe(takeUntilDestroyed(this._destroyRef)).subscribe((freeGames) => {
      this.freeGameCards = this._convertFreeGameModelToFreeGamesDto(freeGames);
    });
  }

  private _getFortniteGames(): void {
    this._gameService.getFortniteGames().pipe(takeUntilDestroyed(this._destroyRef)).subscribe((fortniteGames) => {
      this.fortniteGameCards = this._convertFortniteCardModelToFortniteCardDto(fortniteGames);
    });
  }

  private _getCaptions(): void {
    this._translateService.get(this.captionPaths.largeHighlightGame).subscribe((caption) => {
      this.largeHighlightGameCaption = caption;
    });

    this._translateService.get(this.captionPaths.freeGameCardManagement).subscribe((caption) => {
      this.freeGameManagementCaption = caption;
    });

    this._translateService.get(this.captionPaths.freeGameCard).subscribe((caption) => {
      this.freeGamesCaption = caption;
    });

    this._translateService.get(this.captionPaths.fortniteCardManagement).subscribe((caption) => {
      this.fortniteCaption = caption;
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

  private _convertFreeGameModelToFreeGamesDto(freeGame: FreeGameCardModel[]): FreeGameCardDto[] {
    const freeGamesDto: FreeGameCardDto[] = [];

    freeGame.forEach((game) => {
      const gameCardDto: FreeGameCardDto = {
        name: game.name,
        type: game.type,
        isFree: game.isFree,
        cover: game.cover,
        isPublished: game.isPublished
      };

      freeGamesDto.push(gameCardDto);
    });

    return freeGamesDto;
  }

  private _convertFortniteCardModelToFortniteCardDto(fortniteGames: FortniteCardModel[]): FortniteCardDto[] {
    const fortniteCardsDto: FortniteCardDto[] = [];

    fortniteGames.forEach((game) => {
      const fortniteCard: FortniteCardDto = {
        cover: game.cover,
        name: game.name,
        type: game.type

      };

      fortniteCardsDto.push(fortniteCard);
    });

    return fortniteCardsDto;
  }
  //#endregion
}
