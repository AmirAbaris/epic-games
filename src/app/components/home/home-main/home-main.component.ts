import { Component, inject, OnInit } from "@angular/core";
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

@Component({
  selector: "app-home-main",
  templateUrl: "./home-main.component.html",
  styleUrl: "./home-main.component.scss",
})
export class HomeMainComponent implements OnInit {
  //region properties
  private _translateService = inject(TranslateService);

  public categoryManagementData: CategoryManagementInputModel = mockData;
  public gameSliderItemData: GameSliderItemInputModel[] = gameSliderItems;
  public isLoading: boolean = true;
  public isActive = true;
  public freeGamesCaption: FreeGameCardCaptionModel | undefined;
  public freeGameList: FreeGameListInputModel = freeGameItemMockData;
  public sliderGameType: GameType = GameType.BASE_GAME;
  public highlightSmallItemData = [{
    isActive: false,
    cover: '../assets/game-covers/highlight-small-item-cover/sc.jpg',
    name: 'squad'
  },
  {
    isActive: false,
    cover: '../assets/game-covers/highlight-small-item-cover/sc.jpg',
    name: 'squad'
  }];

  public gameItemCaption: CategoryItemCaptionModel | undefined;
  public categoryListCaption: CategoryListCaptionModel | undefined;
  public categoryItemCaption: CategoryItemCaptionModel | undefined;
  public gameSliderCaption: GameSliderCaptionModel | undefined;
  public freeGameItemCaption: FreeGameItemCaptionModel | undefined;
  public freeGameListCaption: FreeGameListCaptionModel | undefined;

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
    this._completeLoading();
  }

  //endregion

  //region main logic methods
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

  private _completeLoading(): void {
    interval(2000).pipe(
      take(1),
      finalize(() => {
        this.isLoading = false;
      })).subscribe();
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