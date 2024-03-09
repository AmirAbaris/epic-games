import {Component, EventEmitter, inject, input, OnInit, Output} from '@angular/core';
import {CategoryType} from "../enums/category-type.enum";
import {CategoryListInputModel} from "../models/category-list-input.model";
import {TranslateService} from "@ngx-translate/core";
import {forkJoin} from "rxjs";
import {CategoryListCaption} from "../models/caption-models/category-list-caption.model";
import {CategoryItemCaption} from "../models/caption-models/category-item-caption.model";
import {CategoryItemInputModel} from "../models/category-item-input.model";

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrl: './category-management.component.scss'
})
export class CategoryManagementComponent implements OnInit {
  //region Properties
  categoryItem = input.required<CategoryItemInputModel[]>();

  @Output() clickGameEvent = new EventEmitter<string>();
  @Output() clickWishlistEvent = new EventEmitter<string>();
  @Output() clickViewMoreButtonEvent = new EventEmitter<CategoryType>();

  public categoryListCaption: CategoryListCaption | undefined;
  public categoryItemCaption: CategoryItemCaption | undefined;
  public categoryList: CategoryListInputModel = mockData;

  private _translateService = inject(TranslateService);
  private readonly _captionRoutes = {
    gameItemListCaption: 'home.GameItemList',
    gameListCaption: 'home.GameList',
  }

  //endregion

  //region Lifecycle methods
  public ngOnInit(): void {
    this._getCaption();
  }

  //endregion

  //region Main logic methods
  private _getCaption(): void {
    forkJoin([
      this._translateService.get(this._captionRoutes.gameItemListCaption),
      this._translateService.get(this._captionRoutes.gameListCaption),
    ]).subscribe(([gameItemCap, gameListCap]) => {
      this.categoryItemCaption = gameItemCap;
      this.categoryListCaption = gameListCap;
    });
  }

  //endregion

  //region Handler methods
  public onClickGameEventHandler(gameId: string): void {
    this.clickGameEvent.emit(gameId);
  }

  public onClickWishlistEventHandler(gameId: string): void {
    this.clickWishlistEvent.emit(gameId);
  }

  public onClickViewMoreButtonEventHandler(categoryType: CategoryType): void {
    this.clickViewMoreButtonEvent.emit(categoryType);
  }

  //endregion
}

// TODO MOCK, REMOVE
const mockData: CategoryListInputModel = {
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
    },
    {
      id: '16',
      thumbnailCover: "../assets/game-covers/game-list/l15.jpeg",
      name: "Game 16",
      discountPercent: 0,
      basePrice: 29.99,
      finalPrice: 29.99,
      isFree: false,
      publishDate: new Date(),
      isPublished: false,
    },
    {
      id: '16',
      thumbnailCover: "../assets/game-covers/game-list/l15.jpeg",
      name: "Game 16",
      discountPercent: 0,
      basePrice: 29.99,
      finalPrice: 29.99,
      isFree: false,
      isPublished: false,
    },
    {
      id: '16',
      thumbnailCover: "../assets/game-covers/game-list/l15.jpeg",
      name: "Game 16",
      discountPercent: 0,
      basePrice: 29.99,
      finalPrice: 29.99,
      isFree: false,
      isPublished: false,
    },
    {
      id: '16',
      thumbnailCover: "../assets/game-covers/game-list/l15.jpeg",
      name: "Game 16",
      discountPercent: 0,
      basePrice: 29.99,
      finalPrice: 29.99,
      isFree: false,
      isPublished: false,
    },
    {
      id: '16',
      thumbnailCover: "../assets/game-covers/game-list/l15.jpeg",
      name: "Game 16",
      discountPercent: 0,
      basePrice: 29.99,
      finalPrice: 29.99,
      isFree: false,
      isPublished: false,
    },
    {
      id: '16',
      thumbnailCover: "../assets/game-covers/game-list/l15.jpeg",
      name: "Game 16",
      discountPercent: 0,
      basePrice: 29.99,
      finalPrice: 29.99,
      isFree: false,
      isPublished: false,
    },
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
