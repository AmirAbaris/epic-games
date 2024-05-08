import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
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
import { HomeCardActionCaptionModel } from "../models/caption-models/home-card-action-caption.model";
import { SliderTitleCaptionModel } from "../models/caption-models/slider-title-caption.model";

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

  public highlightMainCaption: HighlightMainCaptionModel | undefined;
  public gameSliderCaption: GameSliderCaptionModel | undefined;
  public freeGameItemCaption: FreeGameItemCaptionModel | undefined;
  public freeGameListCaption: FreeGameListCaptionModel | undefined;
  public categoryListCaption: CategoryListCaptionModel | undefined;
  public categoryItemCaption: CategoryItemCaptionModel | undefined;
  public homeCardActionCaption: HomeCardActionCaptionModel | undefined;

  // created dynamic title captions for slider titles!
  // it's not in slider main caption model because more simpler logic handlings
  // if to merge all slider caption models in one model; we'll have more complex logics in getCaptions method because of different enum path in en.json
  public sliderTitleCaption: SliderTitleCaptionModel | undefined;

  public highlightMainData: HighlightMainInputModel[] | undefined;
  public sliderData: GameSliderItemInputModel[] | undefined;
  public trendingSliderData: GameSliderItemInputModel[] | undefined;
  public recentSliderData: GameSliderItemInputModel[] | undefined;
  public homeCardActionData: HomeCardActionInputModel[] | undefined;
  public homeCardGameData: HomeCardGameInputModel[] | undefined;
  public freeGameListData: FreeGameListInputModel | undefined;
  public fortniteGameData: HomeCardActionInputModel[] | undefined;
  public categoryManagementData: CategoryManagementInputModel | undefined;

  private readonly captionPaths = {
    wishlistButton: 'home.WishListButton',
    gameSliderItem: 'home.GameSliderItem',
    freeGameList: 'home.FreeGameList',
    freeGameItem: 'home.FreeGameItem',
    gameItemList: 'home.GameItemList',
    categoryList: 'home.CategoryList',
    categoryItem: 'home.CategoryItem',
    cardActionItem: 'home.HomeCardAction',
    sliderTitleItem: 'home.GameSliderTitles',

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

  /**
   * some ids may be null
   */
  public onClickItemEventHandler(id: string | undefined): void {
    if (!id) return;

    console.log(id);
  }

  public onClickViewMoreCategoryItemEventHandler(title: string): void {
    console.log(title);
  }

  public onCLickViewMoreFreeItemEventHandler(moreGameRoutePath: string): void {
    console.log(`Routes to ${moreGameRoutePath}`);
  }

  public onClickTitleEventHandler(title: string): void {
    console.log(title);
  }
  //#endregion

  //#region Main logic methods
  private _getCaptions(): void {
    const wishListButtonCaption = this._translateService.get(this.captionPaths.wishlistButton);
    const highlightButtonTypeCaption = this._translateService.get(this.captionPaths.highlightButtonType);
    const gameSliderItemCaption = this._translateService.get(this.captionPaths.gameSliderItem);
    const gameTypeCaption = this._translateService.get(this.captionPaths.gameType);
    const freeGameListCaption = this._translateService.get(this.captionPaths.freeGameList);
    const freeGameItemCaption = this._translateService.get(this.captionPaths.freeGameItem);
    const categoryListCaption = this._translateService.get(this.captionPaths.categoryList);
    const categoryItemCaption = this._translateService.get(this.captionPaths.categoryItem);
    const homeCardActionCaption = this._translateService.get(this.captionPaths.cardActionItem);
    const sliderTitleCaption = this._translateService.get(this.captionPaths.sliderTitleItem);

    forkJoin([
      wishListButtonCaption,
      highlightButtonTypeCaption,
      gameSliderItemCaption,
      gameTypeCaption,
      freeGameItemCaption,
      freeGameListCaption,
      categoryListCaption,
      categoryItemCaption,
      homeCardActionCaption,
      sliderTitleCaption
    ]).subscribe(([wishListButtonCaption, highlightButtonTypeCaption, gameSliderItemCaption, gameTypeCaption,
      freeGameItemCaption, freeGameListCaption, categoryListCaption, categoryItemCaption, homeCardActionCaption, sliderTitleCaption]) => {
      this.highlightMainCaption = {
        wishlistButtonCaption: wishListButtonCaption,
        highlightButtonTypeCaption: highlightButtonTypeCaption
      }

      this.gameSliderCaption = {
        freeTitle: gameSliderItemCaption,
        gameType: gameTypeCaption
      }

      this.categoryListCaption = categoryListCaption;
      this.categoryItemCaption = categoryItemCaption;
      this.freeGameListCaption = freeGameListCaption;
      this.freeGameItemCaption = freeGameItemCaption;
      this.homeCardActionCaption = homeCardActionCaption;
      this.sliderTitleCaption = sliderTitleCaption;
      console.log(this.sliderTitleCaption);
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
        this.highlightMainData = this._convertAndCheckGameDtoToHighlightMainInputModel(highlightItems);
        this.sliderData = this._convertAndCheckGameDtoToGameSliderItemInputModel(sliderItems);
        this.homeCardActionData = this._convertAndCheckGameDtoToHomeCardActionInputModel(homeActionItems);
        this.homeCardGameData = this._convertAndCheckGameDtoToHomeCardGameInputModel(homeActionItems);
        this.freeGameListData = this._convertAndCheckGameDtoToFreeGameListInputModel(freeItems);
        this.fortniteGameData = this._convertAndCheckGameDtoToHomeCardActionInputModel(fortniteItems);
        if (this.categoryListCaption) {
          this.categoryManagementData = this._convertAndCheckGameDtoToCategoryManagementInputModel(newReleaseItems, this.categoryListCaption.newReleaseTitle);
          this.categoryManagementData = this._convertAndCheckGameDtoToCategoryManagementInputModel(topPlayerItems, this.categoryListCaption.topRatedTitle);
          this.categoryManagementData = this._convertAndCheckGameDtoToCategoryManagementInputModel(trendingItems, this.categoryListCaption.comingSoonTitle);
        }
        this.trendingSliderData = this._convertAndCheckGameDtoToGameSliderItemInputModel(mostPopularItems);
        this.recentSliderData = this._convertAndCheckGameDtoToGameSliderItemInputModel(recentUploadedItems);
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
    const propertiesToCheck: (keyof GameDto)[] = ['id', 'name', 'discountPercent', 'basePrice',
      'finalPrice', 'isFree', 'type'];

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
    const propertiesToCheck: (keyof GameDto)[] = ['id', 'name', 'cover', 'isFree', 'isPublished'];

    for (const property of propertiesToCheck) {
      if (item[property] === undefined) {
        return false;
      }
    }

    return true;
  }

  /**
   * handles texts for homeAction item components.
   * @param index number of index it receive from a for loop on each item
   * @returns a string of text or undefined
   */
  private _setActionNameViaItemIndex(index: number): string | undefined {
    if (!this.homeCardActionCaption) return;

    switch (index) {
      case 0:
        return this.homeCardActionCaption.browseTitle;

      case 1:
        return this.homeCardActionCaption.discoverTitle;

      case 2:
        return this.homeCardActionCaption.freePlayTitle;

      default:
        return this.homeCardActionCaption.discoverTitle;
    }
  }

  /**
   * merges all the arrays components need. we added to to prevent component usage on the last input array data!
   */
  private _mergeCategoryLists(newCategoryList: CategoryListInputModel): CategoryListInputModel[] {
    const categoryListData: CategoryListInputModel[] = this.categoryManagementData ?
      [...this.categoryManagementData.categoryListData] :
      [];

    categoryListData.push(newCategoryList);
    return categoryListData;
  }

  /**
   * we set the wishlist true for homeCardGame component 
   * note wishlist is by default false became of homeCardAction
   */
  private _setHasWishlistToTrueForHomeCardGames(items: HomeCardInputModel[]): void {
    items.forEach(item => {
      item.hasWishlist = true;
    });
  }
  //#endregion

  //#region Helper methods
  /**
     * converts GameDto items to HighlightMainInputModel items
   * @param items the GameDto input items we get from service
   * @returns highlight main input model typed array
   */
  private _convertAndCheckGameDtoToHighlightMainInputModel(items: GameDto[]): HighlightMainInputModel[] {
    return items
      .filter((item: GameDto) => this._isValidHighlightMain(item))
      .map((item: GameDto) => this._convertGameDtoToHighlightMainInputModel(item));
  }

  /**
   * Converts an array of GameDto items to an array of GameSliderItemInputModel objects
   * @param items items The array of GameDto items to convert
   * @returns an array of converted GameSliderItemInputModel objects
   */
  private _convertAndCheckGameDtoToGameSliderItemInputModel(items: GameDto[]): GameSliderItemInputModel[] {
    return items
      .filter((items) => this._isValidGameSliderItem(items))
      .map((item) => this._convertGameDtoToGameSliderItemInputModel(item));
  }

  /**
  * converts GameDto items to HomeCardActionInputModel
  * @param items the game dto from service data
  * @returns our home card action data
  */
  private _convertAndCheckGameDtoToHomeCardActionInputModel(items: GameDto[]): HomeCardActionInputModel[] {
    const validItems = items.filter((item: GameDto) => item.name !== undefined);
    const cardDataItem = validItems.map((item: GameDto) => this._convertGameDtoToHomeCardInputModel(item));

    return cardDataItem.map((cardItem, index) => ({
      // we used || and its value if our methods returns undefined!
      // it will not be the case but just to make sure we handled that senario like this
      actionName: this._setActionNameViaItemIndex(index) || 'Discover',
      cardData: cardItem,
      clickCardFn: () => {
        console.log(`click fn works!`);
      }
    }));
  }

  /**
   * converts the GameDto to array of HomeCardGameInputModel
   * note we set the hasWishlist to true in here for GameAction components!
   */
  private _convertAndCheckGameDtoToHomeCardGameInputModel(items: GameDto[]): HomeCardGameInputModel[] {
    const validItems: GameDto[] = items.filter((item: GameDto) => item.name !== undefined);
    const cardDataItems: HomeCardInputModel[] = validItems.map((item: GameDto) => (this._convertGameDtoToHomeCardInputModel(item)));

    // sets the wishlist to true for our games
    this._setHasWishlistToTrueForHomeCardGames(cardDataItems);

    return validItems.map((item: GameDto, index: number) => this._convertGameDtoToHomeCardGameInputModel(item, cardDataItems[index]));
  }

  private _convertAndCheckGameDtoToCategoryManagementInputModel(items: GameDto[], title: string): CategoryManagementInputModel {
    const validItems = items.filter((item: GameDto) => this._isValidCategoryItem(item));

    const categoryList: CategoryListInputModel = this._convertGameDtoToCategoryListInputModel(validItems, title);

    const categoryManagementInput: CategoryManagementInputModel = {
      categoryListData: this._mergeCategoryLists(categoryList)
    }

    return categoryManagementInput;
  }

  /**
   * Converts an array of GameDto items to an array of FreeGameListInputModel objects
   * @param items items The array of GameDto items to convert
   * @returns an array of converted FreeGameListInputModel objects
   */
  private _convertAndCheckGameDtoToFreeGameListInputModel(items: GameDto[]): FreeGameListInputModel {
    const validItems = items.filter((item: GameDto) => this._isValidFreeGameItem(item));
    const freeGameItem = validItems.map((item: GameDto) => this._convertGameDtoToFreeGameItemInputModel(item));

    return {
      freeGameItemData: [...freeGameItem]
    }
  }

  /**
   * note we used '!' only became we ALWAYS check for undefined values by another methods!
   */
  private _convertGameDtoToCategoryItemInputModel(item: GameDto): CategoryItemInputModel {
    return {
      id: item.id!,
      thumbnailCover: item.cover!,
      name: item.name!,
      discountPercent: item.discountPercent || 0,
      basePrice: item.basePrice || 0,
      finalPrice: item.finalPrice || 0,
      isFree: item.isFree!,
      publishDate: item.publishDate,
      isPublished: item.isPublished!
    };
  }

  private _convertGameDtoToCategoryListInputModel(validItems: GameDto[], title: string): CategoryListInputModel {
    return {
      title: title,
      categoryItem: validItems.map((item: GameDto) => this._convertGameDtoToCategoryItemInputModel(item)),
      categoryType: CategoryType.MOST_PLAYED
    }
  }

  private _convertGameDtoToHighlightMainInputModel(item: GameDto): HighlightMainInputModel {
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

  private _convertGameDtoToGameSliderItemInputModel(item: GameDto): GameSliderItemInputModel {
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

  private _convertGameDtoToHomeCardInputModel(item: GameDto): HomeCardInputModel {
    return {
      id: item.id,
      cover: item.cover,
      description: item.description,
      name: item.name!,
      hasWishlist: false
    }
  }

  private _convertGameDtoToHomeCardGameInputModel(item: GameDto, cardDataItem: HomeCardInputModel): HomeCardGameInputModel {
    return {
      discountPercent: item.discountPercent,
      basePrice: item.basePrice,
      finalPrice: item.finalPrice,
      cardData: cardDataItem
    }
  }

  private _convertGameDtoToFreeGameItemInputModel(item: GameDto): FreeGameItemInputModel {
    return {
      id: item.id!,
      cover: item.cover,
      name: item.name!,
      freeStartDate: item.freeStartDate,
      freeEndDate: item.freeEndDate!
    }
  }
  //#endregion
}