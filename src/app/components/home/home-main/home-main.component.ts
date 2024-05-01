import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { FreeGameCardCaptionModel } from "../models/caption-models/free-game-card-caption.model";
import { finalize, forkJoin, interval, take } from "rxjs";
import { CategoryItemCaptionModel } from "../models/caption-models/category-item-caption.model";
import { CategoryType } from "../enums/category-type.enum";
import { CategoryListCaptionModel } from "../models/caption-models/category-list-caption.model";
import { CategoryManagementInputModel } from "../models/category-management-input.model";
import { GameSliderItemInputModel } from "../models/game-slider-item-input.model";
import { GameType } from "../../../enums/game-type.enum";
import { FreeGameItemCaptionModel } from "../models/caption-models/free-game-item-caption.model";
import { FreeGameListInputModel } from "../models/free-game-list-input.model";
import { FreeGameListCaptionModel } from "../models/caption-models/free-game-list-caption.model";
import { GameSliderCaptionModel } from "../models/caption-models/game-slider-caption.model";
import { HighlightButtonEnum } from "../enums/highlight-button.enum";
import { HighlightMainInputModel } from "../types/highlight-main-input.type";
import { GameService } from "../../../services/game.service";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: "app-home-main",
  templateUrl: "./home-main.component.html",
  styleUrl: "./home-main.component.scss",
})
export class HomeMainComponent implements OnInit {
  //region Properties
  private _translateService = inject(TranslateService);
  private _destroyRef = inject(DestroyRef);
  private _gameService = inject(GameService);

  public categoryManagementData: CategoryManagementInputModel = mockData;
  public gameSliderItemData: GameSliderItemInputModel[] = gameSliderItems;
  public isLoading: boolean = true;
  public isActive = false;
  public isInWishlist = false;
  public isWishlistProcessing = false;
  public freeGamesCaption: FreeGameCardCaptionModel | undefined;
  public freeGameList: FreeGameListInputModel = freeGameItemMockData;
  public sliderGameType: GameType = GameType.BASE_GAME;
  public gameItemCaption: CategoryItemCaptionModel | undefined;
  public categoryListCaption: CategoryListCaptionModel | undefined;
  public categoryItemCaption: CategoryItemCaptionModel | undefined;
  public gameSliderCaption: GameSliderCaptionModel | undefined;
  public freeGameItemCaption: FreeGameItemCaptionModel | undefined;
  public freeGameListCaption: FreeGameListCaptionModel | undefined;
  public highlightMainData: HighlightMainInputModel[] = highlightPreviewMockData;
  public wishlistIds: string[] = [];

  private readonly captionPaths = {
    freeGameCard: "home.FreeGameCard",
    gameItemList: 'home.GameItemList',
    categoryList: 'home.CategoryList',
    categoryItem: 'home.CategoryItem',
    freeGameList: 'home.FreeGameList',
    freeGameItem: 'home.FreeGameItem',
    gameType: 'home.enum-captions.gameType'
  }
  //endregion

  //region lifecycle methods
  ngOnInit(): void {
    this._getCaptions();
    this._testGameService();
  }

  //endregion

  //region Main logic methods
  public clickCard(): void {
    // needs refactor after implementing the routes!
    console.log('click card works');
  }

  private _getCaptions(): void {
    const freeGamesCaption = this._translateService.get(this.captionPaths.freeGameCard);
    const gameItemCaption = this._translateService.get(this.captionPaths.gameItemList);
    const categoryListCaption = this._translateService.get(this.captionPaths.categoryList);
    const categoryItemCaption = this._translateService.get(this.captionPaths.categoryItem);
    const freeGameItemCaption = this._translateService.get(this.captionPaths.freeGameItem);
    const freeGameListCaption = this._translateService.get(this.captionPaths.freeGameList);

    forkJoin([
      freeGamesCaption,
      gameItemCaption,
      categoryListCaption,
      categoryItemCaption,
      freeGameItemCaption,
      freeGameListCaption
    ]).subscribe(([freeGamesCaption, gameItemCaption, categoryListCaption, categoryItemCaption, freeGameItemCaption, freeGameList]) => {
      this.freeGamesCaption = freeGamesCaption;
      this.gameItemCaption = gameItemCaption;
      this.categoryListCaption = categoryListCaption;
      this.categoryItemCaption = categoryItemCaption;
      this.freeGameItemCaption = freeGameItemCaption;
      this.freeGameListCaption = freeGameList;
    });
  }

  // TODO: removable test!
  /**
   * this method just tests the functionality of wishlistIds and wishlistEvent handler
   * you can remove it if component is clear and Ok!
   * @param id 
   */
  public testWishlistButtonEventHandler(id: string): void {
    if (this.wishlistIds.includes(id)) {
      this._removeIdFromWishlistIds(id);
      console.log('removed from ids', this.wishlistIds);

    } else {
      this._addIdToWishlistIds(id);
      console.log('added to ids', this.wishlistIds);
    }
  }

  private _removeIdFromWishlistIds(id: string): void {
    // check if we even have id in our list, if we didn't have the id, it will not continue! (extra layer of protection)
    if (!this.wishlistIds.includes(id)) return;

    this.wishlistIds = this.wishlistIds.filter((arrayId) => arrayId !== id);
  }

  private _addIdToWishlistIds(id: string): void {
    // check if we have id in our array, if we have it, it will stop the method! (extra layer of protection)
    if (this.wishlistIds.includes(id)) return;

    this.wishlistIds = [...this.wishlistIds, id];
  }

  private _testGameService(): void {
    console.log('calls the test');
    forkJoin([
      this._gameService.getHighlightItems(),
      this._gameService.getSliderItems(),
      this._gameService.getHomeActionItems(),
      this._gameService.getFreeItems(),
      this._gameService.getFortniteItems(),
      this._gameService.getNewReleaseItems(),
      this._gameService.getTopPlayerItems(),
      this._gameService.getComingSoonItems(),
      this._gameService.getTrendingItems(),
      this._gameService.getMostPopularItems(),
      this._gameService.getRecentlyUploadedItems()
    ]).pipe(
      takeUntilDestroyed(this._destroyRef),
      finalize(() => this.isLoading = false)
    )
      .subscribe((items) => {
        console.log(items);
      });
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

const freeGameItemMockData: FreeGameListInputModel =
{
  freeGameItemData: [
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
  ]
}

const highlightPreviewMockData: HighlightMainInputModel[] = [
  {
    id: '1',
    name: 'item 1',
    minimalCover: '../assets/game-covers/highlight-small-item-cover/sc.jpg',
    largeCover: '../assets/game-covers/highlight-preview-item-cover/egg.jpg',
    logo: '../assets/game-covers/highlight-preview-item-cover/egg2.png',
    description: 'Description 1',
    price: 10,
    highlightButtonType: HighlightButtonEnum.FREE
  },
  {
    id: '2',
    name: 'item 1',
    minimalCover: '../assets/game-covers/highlight-small-item-cover/sc.jpg',
    largeCover: '../assets/game-covers/highlight-preview-item-cover/egg.jpg',
    logo: '../assets/game-covers/highlight-preview-item-cover/egg2.png',
    description: 'Description 1',
    price: 10,
    highlightButtonType: HighlightButtonEnum.PUBLISHED
  },
  {
    id: '3',
    name: 'item 1',
    minimalCover: '../assets/game-covers/highlight-small-item-cover/sc.jpg',
    largeCover: '../assets/game-covers/highlight-preview-item-cover/egg.jpg',
    logo: '../assets/game-covers/highlight-preview-item-cover/egg2.png',
    description: 'Description 1',
    price: 10,
    highlightButtonType: HighlightButtonEnum.ARTICLE
  },
  {
    id: '4',
    name: 'item 1',
    minimalCover: '../assets/game-covers/highlight-small-item-cover/sc.jpg',
    largeCover: '../assets/game-covers/highlight-preview-item-cover/egg.jpg',
    logo: '../assets/game-covers/highlight-preview-item-cover/egg2.png',
    description: 'Description 1',
    price: 10,
    highlightButtonType: HighlightButtonEnum.FREE

  },
  {
    id: '5',
    name: 'item 1',
    minimalCover: '../assets/game-covers/highlight-small-item-cover/sc.jpg',
    largeCover: '../assets/game-covers/highlight-preview-item-cover/egg.jpg',
    logo: '../assets/game-covers/highlight-preview-item-cover/egg2.png',
    description: 'Description 1',
    price: 10,
    highlightButtonType: HighlightButtonEnum.NOT_PUBLISHED
  }
];