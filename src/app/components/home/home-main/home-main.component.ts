import { Component, inject, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { GameService } from "../../../services/game.service";
import { HighlightGamesModel } from "../models/highlight-games-model";
import { GameListItemModel } from "../models/game-list-item.model";
import { GameCardModel } from "../models/game-card.model";
import { FreeGameCardModel } from "../models/free-game-card.model";
import { FortniteCardModel } from "../models/fortnite-card.model";
import { LargeHighlightGameCaptionModel } from "../models/caption-models/large-highlight-game-caption.model";
import { HighlightGamesDto } from "../dtos/highlight-games-dto";
import { GameCardDto } from "../dtos/game-card-dto";
import { FreeGameCardDto } from "../dtos/free-game-card-dto";
import { FreeGameCardCaptionModel } from "../models/caption-models/free-game-card-caption.model";
import { freeGameCardManagementCaptionModel } from "../models/caption-models/free-game-card-management-caption.model";
import { FortniteCardDto } from "../dtos/fortnite-card-dto";
import { FortniteCardManagementCaptionModel } from "../models/caption-models/fortnite-management-caption.model";
import { BannerDto } from "../dtos/banner-dto";
import { BannerModel } from "../models/banner.model";
import { GameListItemDto } from "../dtos/game-list-item-dto";
import { finalize, forkJoin, interval, take } from "rxjs";
import { CategoryItemCaptionModel } from "../models/caption-models/category-item-caption.model";
import { CategoryType } from "../enums/category-type.enum";
import { CategoryListCaptionModel } from "../models/caption-models/category-list-caption.model";
import { CategoryManagementInputModel } from "../models/category-management-input.model";
import { GameSliderItemInputModel } from "../models/game-slider-item-input.model";
import { GameType } from "../../../enums/game-type.enum";
import { FreeGameItemInputModel } from "../models/free-game-item-input.model";
import { FreeGameItemCaptionModel } from "../models/caption-models/free-game-item-caption.model";

@Component({
  selector: "app-home-main",
  templateUrl: "./home-main.component.html",
  styleUrl: "./home-main.component.scss",
})
export class HomeMainComponent implements OnInit {
  //region properties
  public highlightGames: HighlightGamesDto | undefined;
  public gameCards: GameCardDto[] | undefined;
  public freeGameCards: FreeGameCardDto[] | undefined;
  public fortniteGameCards: FortniteCardDto[] | undefined;
  public banners: BannerDto[] | undefined;
  public gameBanners: BannerDto[] | undefined;
  public nonGameBanners: BannerDto[] | undefined;
  public gameListItem: GameListItemDto[] | undefined;
  public categoryManagementData: CategoryManagementInputModel = mockData;
  public gameSliderItemData: GameSliderItemInputModel[] = gameSliderItems;
  public isLoading: boolean = true;

  public largeHighlightGameCaption: LargeHighlightGameCaptionModel | undefined;
  public freeGamesCaption: FreeGameCardCaptionModel | undefined;
  public freeGameManagementCaption: freeGameCardManagementCaptionModel | undefined;
  public freeGameItem: FreeGameItemInputModel[] = freeGameItemMockData;
  public fortniteCaption: FortniteCardManagementCaptionModel | undefined;
  public gameItemCaption: CategoryItemCaptionModel | undefined;
  public categoryListCaption: CategoryListCaptionModel | undefined;
  public categoryItemCaption: CategoryItemCaptionModel | undefined;
  // public gameSliderCaption: GameSliderCaptionModel | undefined;
  public freeGameItemCaption: FreeGameItemCaptionModel | undefined;

  private _gameService = inject(GameService);
  private _translateService = inject(TranslateService);

  private readonly captionPaths = {
    largeHighlightGame: "home.LargeHighlightGame",
    freeGameCardManagement: "home.FreeGameCardManagement",
    freeGameCard: "home.FreeGameCard",
    fortniteCardManagement: "home.FortniteCardManagement",
    gameItemList: 'home.GameItemList',
    categoryList: 'home.CategoryList',
    categoryItem: 'home.CategoryItem',
    gameSliderItem: 'home.GameSliderItem',
    freeGameItem: 'home.FreeGameItem',
    gameType: 'home.enum-captions.gameType'
  }
  //endregion

  //region lifecycle methods
  ngOnInit(): void {
    this._getAllGameData();
    this._filterGamesInGameBanners();
    this._filterNonGamesInGameBanners();
    this._getCaptions();
    this._completeLoading();
  }

  //endregion

  //region main logic methods
  private _getAllGameData(): void {
    forkJoin([
      this._gameService.getHighlightGames(),
      this._gameService.getGameCards(),
      this._gameService.getFreeGames(),
      this._gameService.getFortniteGames(),
      this._gameService.getGameBanners(),
      this._gameService.getGameList()
    ]).subscribe(([highlightGames, gameCards, freeGames, fortniteGames, gameBanner, gameItems]) => {
      this.highlightGames = this._convertHighlightGamesModelToHighlightGamesDto(highlightGames);
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
    const gameItemCaption = this._translateService.get(this.captionPaths.gameItemList);
    const categoryListCaption = this._translateService.get(this.captionPaths.categoryList);
    const categoryItemCaption = this._translateService.get(this.captionPaths.categoryItem);
    const freeGameItemCaption = this._translateService.get(this.captionPaths.freeGameItem);

    forkJoin([
      largeHighlightGameCaption,
      freeGameManagementCaption,
      freeGamesCaption,
      fortniteCaption,
      gameItemCaption,
      categoryListCaption,
      categoryItemCaption,
      freeGameItemCaption
    ]).subscribe(([largeHighlightGameCaption, freeGameManagementCaption, freeGamesCaption, fortniteCaption, gameItemCaption, categoryListCaption, categoryItemCaption, freeGameItemCaption]) => {
      this.largeHighlightGameCaption = largeHighlightGameCaption;
      this.freeGameManagementCaption = freeGameManagementCaption;
      this.freeGamesCaption = freeGamesCaption;
      this.fortniteCaption = fortniteCaption;
      this.gameItemCaption = gameItemCaption;
      this.categoryListCaption = categoryListCaption;
      this.categoryItemCaption = categoryItemCaption;
      this.freeGameItemCaption = freeGameItemCaption;
    });
  }

  private _completeLoading(): void {
    interval(5000).pipe(
      take(1),
      finalize(() => {
        this.isLoading = false;
      })).subscribe();
  }

  private _filterGamesInGameBanners(): void {
    this.gameBanners = this.banners?.filter((game) => game.isAGame);
  }

  private _filterNonGamesInGameBanners(): void {
    this.nonGameBanners = this.banners?.filter((game) => !game.isAGame);
  }

  //endregion

  //region helper methods
  private _convertHighlightGamesModelToHighlightGamesDto(highlightGames: HighlightGamesModel): HighlightGamesDto {
    return {
      smallHighlightGames: highlightGames.smallHighlightGames,
      largeHighlightGames: highlightGames.largeHighlightGames
    };
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
        id: game.id,
        thumbnailCover: game.thumbnailCover,
        name: game.name,
        discountPercent: game.discountPercent,
        basePrice: game.basePrice,
        finalPrice: game.finalPrice,
        isFree: game.isFree,
        publishDate: game.publishDate,
        isPublished: game.isPublished
      }

      gameItems.push(gameItem);
    });

    return gameItems;
  }

  //endregion
}

// TODO MOCK, REMOVE
const mockData: CategoryManagementInputModel = {
  categoryListData: [
    {
      categoryItem: [
        {
          id: '16',
          thumbnailCover: "../assets/game-covers/game-list/l15.jpeg",
          name: "Game 16",
          discountPercent: 0,
          basePrice: 29.99,
          finalPrice: 29.99,
          isFree: false,
          isPublished: false,
        }
      ],
      title: 'Top Sellers',
      categoryType: CategoryType.TOP_SELLERS
    }
  ]
}

const gameSliderItems: GameSliderItemInputModel[] = [
  {
    id: "1",
    name: 'game 1',
    type: GameType.BASE_GAME,
    cover: '../assets/game-covers/game-card-covers/1.jpeg',
    basePrice: 29.99,
    finalPrice: 14.99,
    isFree: true
  },
  {
    id: "2",
    name: 'game 1',
    type: GameType.BASE_GAME,
    cover: '../assets/game-covers/game-card-covers/2.jpeg',
    basePrice: 29.99,
    finalPrice: 14.99,
    isFree: true
  },
  {
    id: "3",
    name: 'game 1',
    type: GameType.BASE_GAME,
    cover: '../assets/game-covers/game-card-covers/4.jpeg',
    discountPercent: 12,
    basePrice: 29.99,
    finalPrice: 14.99,
    isFree: false
  },
  {
    id: "4",
    name: 'game 1',
    type: GameType.BASE_GAME,
    cover: '../assets/game-covers/game-card-covers/2.jpeg',
    basePrice: 29.99,
    finalPrice: 14.99,
    isFree: true
  }
];

const freeGameItemMockData: FreeGameItemInputModel[] = [
  {
    id: '1',
    cover: '../assets/game-covers/free-games/a1.jpg',
    name: 'Game 1',
    freeStartDate: new Date('2024-03-01'),
    freeEndDate: new Date('2024-03-15')
  },
  {
    id: '2',
    cover: '../assets/game-covers/free-games/a1.jpg',
    name: 'Game 2',
    freeStartDate: new Date('2024-03-10'),
    freeEndDate: new Date('2024-03-20')
  },
  {
    id: '3',
    cover: '../assets/game-covers/free-games/a1.jpg',
    name: 'Game 3',
    freeEndDate: new Date('2025-02-01')
  }
];