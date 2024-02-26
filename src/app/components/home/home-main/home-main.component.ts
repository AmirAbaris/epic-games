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
import { HighlightGamesDto } from "../dtos/highlight-games-dto";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { GameCardDto } from "../dtos/game-card-dto";
import { FreeGameCardDto } from "../dtos/free-game-card-dto";
import { FreeGameCardCaptionModel } from "../models/caption-models/free-game-card-caption.model";
import { freeGameCardManagementCaptionModel } from "../models/caption-models/free-game-card-management-caption.model";
import { FreeCardCaptionsModel } from "../models/caption-models/free-card-captions.model";
import { FortniteCardDto } from "../dtos/fortnite-card-dto";
import { FortniteCardManagementCaptionModel } from "../models/caption-models/fortnite-management-caption.model";
import { BannerDto } from "../dtos/banner-dto";
import { BannerModel } from "../models/banner.model";
import { GameListItemDto } from "../dtos/game-list-item-dto";
import { forkJoin } from "rxjs";

@Component({
  selector: "app-home-main",
  templateUrl: "./home-main.component.html",
  styleUrl: "./home-main.component.scss",
})
export class HomeMainComponent implements OnInit {
  //#region inject functions
  private _gameService = inject(GameService);
  private _translateService = inject(TranslateService);
  //#endregion

  //#region properties
  public highlightGames: HighlightGamesDto | undefined;
  public gameCards: GameCardDto[] | undefined;
  public freeGameCards: FreeGameCardDto[] | undefined;
  public fortniteGameCards: FortniteCardDto[] | undefined;
  public banners: BannerDto[] | undefined;
  public gameBanners: BannerDto[] | undefined;
  public nonGameBanners: BannerDto[] | undefined;
  public gameListItem: GameListItemDto[] | undefined;

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
    this._getAllGameData();
    this._filterGamesInGameBanners();
    this._filterNonGamesInGameBanners();
    this._getCaptions();
  }
  //#endregion

  //#region main logic methods
  private _getAllGameData(): void {
    forkJoin([
      this._gameService.getHighlightGames(),
      this._gameService.getGameCards(),
      this._gameService.getFreeGames(),
      this._gameService.getFortniteGames(),
      this._gameService.getGameBanners(),
      this._gameService.getGameList()
    ]).subscribe(([highlighGames, gameCards, freeGames, fortniteGames, gameBanner, gameItems]) => {
      this.highlightGames = this._convertHighlightGamesModelToHighlightGamesDto(highlighGames);
      this.gameCards = this._convertGameCardModelToGameCardDto(gameCards);
      this.freeGameCards = this._convertFreeGameModelToFreeGamesDto(freeGames);
      this.fortniteGameCards = this._convertFortniteCardModelToFortniteCardDto(fortniteGames);
      this.banners = this._convertGameBannerModelToGameBannerDto(gameBanner);
      this.gameListItem = this._convertGameListItemModelToGameListItemDto(gameItems);
    });
  }

  private _getCaptions(): void {
    const largeHighlightGameCaption = this._translateService.get(this.captionPaths.largeHighlightGame);
    const freeGameManagementCaption = this._translateService.get(this.captionPaths.freeGameCardManagement);
    const freeGamesCaption = this._translateService.get(this.captionPaths.freeGameCard);
    const fortniteCaption = this._translateService.get(this.captionPaths.fortniteCardManagement);

    forkJoin([
      largeHighlightGameCaption,
      freeGameManagementCaption,
      freeGamesCaption,
      fortniteCaption
    ]).subscribe(([largeHighlightGameCaption, freeGameManagementCaption, freeGamesCaption, fortniteCaption]) => {
      this.largeHighlightGameCaption = largeHighlightGameCaption;
      this.freeGameManagementCaption = freeGameManagementCaption;
      this.freeGamesCaption = freeGamesCaption;
      this.fortniteCaption = fortniteCaption;
    });
  }

  private _filterGamesInGameBanners(): void {
    this.gameBanners = this.banners?.filter((game) => game.isAGame);
  }

  private _filterNonGamesInGameBanners(): void {
    this.nonGameBanners = this.banners?.filter((game) => !game.isAGame);
  }
  //#endregion

  //#region handler methods
  public buyGame(gameId: string): void {
    console.log(gameId);
  }

  public addGameToWishList(gameId: string): void {
    console.log(gameId);
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
      }

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
      }

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

      }

      fortniteCardsDto.push(fortniteCard);
    });

    return fortniteCardsDto;
  }

  private _convertGameBannerModelToGameBannerDto(gameBannersModel: BannerModel[]): BannerDto[] {
    const gameBanners: BannerDto[] = [];

    gameBannersModel.forEach((game) => {
      const gameBanner: BannerDto = {
        cover: game.cover,
        name: game.name,
        bio: game.bio,
        isFree: game.isFree,
        price: game.price,
        isAGame: game.isAGame,
        playable: game.playable
      }

      gameBanners.push(gameBanner);
    });

    return gameBanners;
  }

  private _convertGameListItemModelToGameListItemDto(gameListItems: GameListItemModel[]): GameListItemDto[] {
    const gameItems: GameListItemDto[] = [];

    gameListItems.forEach((game) => {
      const gameItem: GameListItemDto = {
        thumbnailCover: game.thumbnailCover,
        name: game.name,
        discountPercent: game.discountPercent,
        basePrice: game.basePrice,
        finalPrice: game.finalPrice,
        isFree: game.isFree,
        categoryType: game.categoryType
      }

      gameItems.push(gameItem);
    });

    return gameItems;
  }
  //#endregion
}
