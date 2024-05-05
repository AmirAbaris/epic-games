import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { FreeGameCardCaptionModel } from "../models/caption-models/free-game-card-caption.model";
import { finalize, forkJoin } from "rxjs";
import { CategoryItemCaptionModel } from "../models/caption-models/category-item-caption.model";
import { CategoryListCaptionModel } from "../models/caption-models/category-list-caption.model";
import { FreeGameItemCaptionModel } from "../models/caption-models/free-game-item-caption.model";
import { FreeGameListCaptionModel } from "../models/caption-models/free-game-list-caption.model";
import { GameSliderCaptionModel } from "../models/caption-models/game-slider-caption.model";
import { HighlightButtonEnum } from "../enums/highlight-button.enum";
import { HighlightMainInputModel } from "../types/highlight-main-input.type";
import { GameService } from "../../../services/game.service";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { GameDto } from "../dtos/game.dto";
import { HighlightMainCaptionModel } from "../models/caption-models/highlight-main-caption.model";
import { GameSliderItemInputModel } from "../models/game-slider-item-input.model";
import { FreeGameListInputModel } from "../models/free-game-list-input.model";
import { FreeGameItemInputModel } from "../models/free-game-item-input.model";
import { HomeCardActionInputModel } from "../models/home-card-action-input.model";
import { HomeCardInputModel } from "../models/home-card-input.model";
import { HomeCardGameInputModel } from "../models/home-card-game-input.model";
import { CategoryListInputModel } from "../models/category-list-input.model";
import { CategoryManagementInputModel } from "../models/category-management-input.model";
import { CategoryType } from "../enums/category-type.enum";
import { CategoryItemInputModel } from "../models/category-item-input.model";

@Component({
  selector: "app-home-main",
  templateUrl: "./home-main.component.html",
  styleUrl: "./home-main.component.scss",
})
export class HomeMainComponent implements OnInit {
  //#region Properties
  private _translateService = inject(TranslateService);
  protected _destroyRef = inject(DestroyRef);
  private _gameService = inject(GameService);

  public isLoading: boolean = true;
  public isActive = false;
  public isInWishlist = false;
  public isWishlistProcessing = false;
  public wishlistIds: string[] = [];

  //TODO separate caps and regular vars!

  public highlightMainCaption: HighlightMainCaptionModel | undefined;
  public gameSliderCaption: GameSliderCaptionModel | undefined;
  public freeGamesCaption: FreeGameCardCaptionModel | undefined;
  public freeGameItemCaption: FreeGameItemCaptionModel | undefined;
  public freeGameListCaption: FreeGameListCaptionModel | undefined;
  public categoryListCaption: CategoryListCaptionModel | undefined;
  public categoryItemCaption: CategoryItemCaptionModel | undefined;

  public highlightMainData: HighlightMainInputModel[] | undefined;
  public sliderManagementData: GameSliderItemInputModel[] | undefined;
  public homeCardActionData: HomeCardActionInputModel[] | undefined;
  public freeGameListData: FreeGameListInputModel | undefined;
  public fortniteGameData: HomeCardActionInputModel[] | undefined;
  public homeCardGameData: HomeCardGameInputModel[] | undefined;
  public categoryManagementData: CategoryManagementInputModel | undefined;

  private readonly captionPaths = {
    wishlistButton: 'home.WishListButton',
    gameSliderItem: 'home.GameSliderItem',
    freeGameList: 'home.FreeGameList',
    freeGameItem: 'home.FreeGameItem',
    // freeGameCard: "home.FreeGameCard",
    gameItemList: 'home.GameItemList',
    categoryList: 'home.CategoryList',
    categoryItem: 'home.CategoryItem',

    highlightButtonType: 'enum-captions.HighlightButtonType',
    gameType: 'enum-captions.gameType',
  }
  //#endregion

  //#region Lifecycle methods
  ngOnInit(): void {
    this._getGames();
    this._getCaptions();
  }
  //#endregion

  //#region Handler methods
  public onClickWishlistButtonEventHandler(id: string): void {
    if (this.wishlistIds.includes(id)) {
      this._removeIdFromWishlistIds(id);
    } else {
      this._addIdToWishlistIds(id);
    }
  }

  public onClickItemEventHandler(id: string): void {
    console.log(id);
  }
  //#endregion

  //#region Main logic methods
  public clickCard(): void {
    // needs refactor after implementing the routes!
    console.log('click card works');
  }

  private _getCaptions(): void {
    const wishListButtonCaption = this._translateService.get(this.captionPaths.wishlistButton);
    const highlightButtonTypeCaption = this._translateService.get(this.captionPaths.highlightButtonType);
    const gameSliderItemCaption = this._translateService.get(this.captionPaths.gameSliderItem);
    const gameTypeCaption = this._translateService.get(this.captionPaths.gameType);
    const freeGameListCaption = this._translateService.get(this.captionPaths.freeGameList);
    const freeGameItemCaption = this._translateService.get(this.captionPaths.freeGameItem);

    // const freeGamesCaption = this._translateService.get(this.captionPaths.freeGameCard);
    const gameItemCaption = this._translateService.get(this.captionPaths.gameItemList);
    const categoryListCaption = this._translateService.get(this.captionPaths.categoryList);
    const categoryItemCaption = this._translateService.get(this.captionPaths.categoryItem);

    forkJoin([
      wishListButtonCaption,
      highlightButtonTypeCaption,
      gameSliderItemCaption,
      gameTypeCaption,
      freeGameItemCaption,
      freeGameListCaption,
      gameItemCaption,
      categoryListCaption,
      categoryItemCaption
    ]).subscribe(([wishListButtonCaption, highlightButtonTypeCaption, gameSliderItemCaption, gameTypeCaption,
      , freeGameListCaption, gameItemCaption, categoryListCaption, categoryItemCaption]) => {
      this.highlightMainCaption = {
        wishlistButtonCaption: wishListButtonCaption,
        highlightButtonTypeCaption: highlightButtonTypeCaption
      }

      this.gameSliderCaption = {
        freeTitle: gameSliderItemCaption,
        gameType: gameTypeCaption
      }

      // this.freeGamesCaption = freeGamesCaption;
      // this.gameItemCaption = free;
      this.categoryListCaption = categoryListCaption;
      this.categoryItemCaption = categoryItemCaption;
      this.freeGameListCaption = freeGameListCaption;
      this.freeGameItemCaption = gameItemCaption;
    });
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

  private _getGames(): void {
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
      .subscribe(([highlightItems, sliderItems, homeActionItems, freeItems,
        fortniteItems, newReleaseItems, topPlayerItems, trendingItems,
        mostPopularItems, recentUploadedItems]) => {
        this.highlightMainData = this._convertGameDtoToHighlightMainInputModel(highlightItems);
        this.sliderManagementData = this._convertGameDtoToGameSliderItemInputModel(sliderItems);
        this.homeCardActionData = this._convertGameDtoToHomeCardActionInputModel(homeActionItems);
        this.freeGameListData = this._convertGameDtoToFreeGameListInputModel(freeItems);
        this.fortniteGameData = this._convertGameDtoToHomeCardActionInputModel(fortniteItems);
        console.log(this.fortniteGameData);
        this.categoryManagementData = this._convertGameDtoToCategoryManagementInputModel(newReleaseItems);
      });
  }

  /**
  * check the input item to has any property of the HighlightMainInputModel and its properties should not be undefined!
  * @param item the GameDto item
  * @returns the checked highlight main input model type if items has the properties and the properties we want are not undefined
  */
  private _isValidHighlightMain(item: GameDto): boolean {
    const propertiesToCheck: (keyof GameDto)[] = ['id', 'name', 'thumbnailCover', 'logo', 'description'];

    for (const property of propertiesToCheck) {
      if (item[property] === undefined) {
        return false;
      }
    }

    return true;
  }

  /**
   * check the input item to has any property of the gameSlider and its properties should not be undefined!
   * @param item the GameDto item
   * @returns the checked slider items model type if items has the properties and the properties we want are not undefined
   */
  private _isValidGameSliderItem(item: GameDto): boolean {
    const propertiesToCheck: (keyof GameDto)[] = ['id', 'name', 'isFree', 'type'];

    for (const property of propertiesToCheck) {
      if (item[property] === undefined) {
        return false;
      }
    }

    return true;
  }

  private _isValidFreeGameItem(item: GameDto): boolean {
    const propertiesToCheck: (keyof GameDto)[] = ['id', 'name', 'freeEndDate'];

    for (const property of propertiesToCheck) {
      if (item[property] === undefined) {
        return false;
      }
    }

    return true;
  }

  private _isValidCategoryItem(item: GameDto): boolean {
    const propertiesToCheck: (keyof GameDto)[] = ['id', 'name', 'cover', 'discountPercent',
      'basePrice', 'finalPrice', 'isFree', 'isPublished'];

    for (const property of propertiesToCheck) {
      if (item[property] === undefined) {
        return false;
      }
    }

    return true;
  }

  // TODO: move to helpers
  private _createCategoryItem(item: GameDto): CategoryItemInputModel {
    return {
      id: item.id!,
      thumbnailCover: item.cover!,
      name: item.name!,
      discountPercent: item.discountPercent!,
      basePrice: item.basePrice!,
      finalPrice: item.finalPrice!,
      isFree: item.isFree!,
      publishDate: item.publishDate,
      isPublished: item.isPublished!
    };
  }

  private _createHighlightMainItem(item: GameDto): HighlightMainInputModel {
    return {
      id: item.id!,
      name: item.name!,
      minimalCover: item.thumbnailCover!,
      largeCover: item.cover,
      logo: item.logo!,
      description: item.description!,
      price: item.price,
      highlightButtonType: HighlightButtonEnum.FREE
    }
  }

  private _createGameSliderItem(item: GameDto): GameSliderItemInputModel {
    return {
      id: item.id!,
      cover: item.cover,
      name: item.name!,
      discountPercent: item.discountPercent!,
      basePrice: item.basePrice!,
      finalPrice: item.finalPrice!,
      isFree: item.isFree!,
      type: item.type!
    }
  }

  // TODO: just convert. main convert = check and convert name! move them in helper
  private _createHomeCardItem(item: GameDto): HomeCardInputModel {
    return {
      id: item.id,
      cover: item.cover,
      description: item.description,
      name: item.name!,
      hasWishlist: true
    }
  }

  private _createFreeGameItem(item: GameDto): FreeGameItemInputModel {
    return {
      id: item.id!,
      cover: item.cover,
      name: item.name!,
      freeStartDate: item.freeStartDate,
      freeEndDate: item.freeEndDate!
    }
  }
  //#endregion

  //#region Helper methods
  /**
     * converts GameDto items to HighlightMainInputModel items
   * @param items the GameDto input items we get from service
   * @returns highlight main input model typed array
   */
  private _convertGameDtoToHighlightMainInputModel(items: GameDto[]): HighlightMainInputModel[] {
    return items
      // TODO: fix names for isValid more specific
      .filter((item: GameDto) => this._isValidHighlightMain(item))
      .map((item: GameDto) => this._createHighlightMainItem(item));
  }

  /**
   * Converts an array of GameDto items to an array of GameSliderItemInputModel objects
   * @param items items The array of GameDto items to convert
   * @returns an array of converted GameSliderItemInputModel objects
   */
  private _convertGameDtoToGameSliderItemInputModel(items: GameDto[]): GameSliderItemInputModel[] {
    return items
      .filter((items) => this._isValidGameSliderItem(items))
      .map((item) => this._createGameSliderItem(item));
  }

  /**
  * converts GameDto items to HomeCardActionInputModel
  * @param items the game dto from service data
  * @returns our home card action data
  */
  private _convertGameDtoToHomeCardActionInputModel(items: GameDto[]): HomeCardActionInputModel[] {
    const validItems = items.filter((item: GameDto) => item.id !== undefined);
    const cardDataItem = validItems.map((item: GameDto) => this._createHomeCardItem(item));

    return cardDataItem.map((cardItem) => ({
      actionName: 'Play',
      cardData: cardItem,
      clickCardFn: () => {
        console.log(`Clicked`);
      }
    }));
  }

  /**
   * Converts an array of GameDto items to an array of FreeGameListInputModel objects
   * @param items items The array of GameDto items to convert
   * @returns an array of converted FreeGameListInputModel objects
   */
  private _convertGameDtoToFreeGameListInputModel(items: GameDto[]): FreeGameListInputModel {
    const validItems = items.filter((item: GameDto) => this._isValidFreeGameItem(item));
    const freeGameItem = validItems.map((item: GameDto) => this._createFreeGameItem(item));

    return {
      freeGameItemData: [...freeGameItem]
    }
  }

  // TODO: use it
  // private _convertGameDtoToHomeCardGameInputModel(items: GameDto[]): HomeCardGameInputModel[] {
  //   const result: HomeCardGameInputModel[] = [];

  //   items.forEach(item => {
  //     if (!item.name) return;

  //     const homeCardGameItem: HomeCardGameInputModel = {
  //       discountPercent: 22,
  //       basePrice: 12,
  //       finalPrice: 55,
  //       cardData: {
  //         id: item.id,
  //         cover: item.cover,
  //         description: item.description,
  //         name: item.name,
  //         hasWishlist: false
  //       }
  //     }

  //     return result.push(homeCardGameItem);
  //   });

  //   return result;
  // }

  private _convertGameDtoToCategoryManagementInputModel(items: GameDto[]): CategoryManagementInputModel {
    const validItems = items.filter((item: GameDto) => this._isValidCategoryItem(item));

    const categoryList: CategoryListInputModel = {
      title: 'New Releases',
      categoryItem: validItems.map((item: GameDto) => this._createCategoryItem(item)),
      categoryType: CategoryType.MOST_PLAYED
    }

    return {
      categoryListData: [categoryList]
    }
  }
  //#endregion
}

// TODO: research! lodash