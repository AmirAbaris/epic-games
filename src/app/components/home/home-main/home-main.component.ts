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

  //TODO separate caps and regular vars!

  public highlightMainCaption: HighlightMainCaptionModel | undefined;
  public freeGamesCaption: FreeGameCardCaptionModel | undefined;
  // public sliderGameType: GameType = GameType.BASE_GAME;
  public gameItemCaption: CategoryItemCaptionModel | undefined;
  public categoryListCaption: CategoryListCaptionModel | undefined;
  public categoryItemCaption: CategoryItemCaptionModel | undefined;
  public gameSliderCaption: GameSliderCaptionModel | undefined;
  public freeGameItemCaption: FreeGameItemCaptionModel | undefined;
  public freeGameListCaption: FreeGameListCaptionModel | undefined;
  public wishlistIds: string[] = [];
  public highlightMainData: HighlightMainInputModel[] | undefined;
  public sliderManagementData: GameSliderItemInputModel[] | undefined;

  private readonly captionPaths = {
    wishlistButton: 'home.WishListButton',
    highlightButtonType: 'enum-captions.HighlightButtonType',
    freeGameCard: "home.FreeGameCard",
    gameItemList: 'home.GameItemList',
    categoryList: 'home.CategoryList',
    categoryItem: 'home.CategoryItem',
    freeGameList: 'home.FreeGameList',
    freeGameItem: 'home.FreeGameItem',

    // TODO changed it (removed 'home' from path!)
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
    const freeGamesCaption = this._translateService.get(this.captionPaths.freeGameCard);
    const gameItemCaption = this._translateService.get(this.captionPaths.gameItemList);
    const categoryListCaption = this._translateService.get(this.captionPaths.categoryList);
    const categoryItemCaption = this._translateService.get(this.captionPaths.categoryItem);
    const freeGameItemCaption = this._translateService.get(this.captionPaths.freeGameItem);
    const freeGameListCaption = this._translateService.get(this.captionPaths.freeGameList);

    forkJoin([
      wishListButtonCaption,
      highlightButtonTypeCaption,
      freeGamesCaption,
      gameItemCaption,
      categoryListCaption,
      categoryItemCaption,
      freeGameItemCaption,
      freeGameListCaption
    ]).subscribe(([wishListButtonCaption, highlightButtonTypeCaption, freeGamesCaption, gameItemCaption, categoryListCaption, categoryItemCaption, freeGameItemCaption, freeGameList]) => {
      this.highlightMainCaption = {
        wishlistButtonCaption: wishListButtonCaption,
        highlightButtonTypeCaption: highlightButtonTypeCaption
      }

      this.freeGamesCaption = freeGamesCaption;
      this.gameItemCaption = gameItemCaption;
      this.categoryListCaption = categoryListCaption;
      this.categoryItemCaption = categoryItemCaption;
      this.freeGameItemCaption = freeGameItemCaption;
      this.freeGameListCaption = freeGameList;
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
      .subscribe(([highlightItems, sliderItems, homeActionItems, freeItems,
        fortniteItems, newReleaseItems, topPlayerItems, trendingItems,
        mostPopularItems, recentUploadedItems]) => {
        this.highlightMainData = this._convertGameDtoToHighlightMainInputModel(highlightItems);
        this.sliderManagementData = this._convertGameDtoToGameSliderItemInputModel(sliderItems);

        console.log(sliderItems);
      });
  }

  private _iterateOverGameDtos(items: GameDto[], callback: (item: GameDto) => void): void {
    items.forEach(callback);
  }
  //#endregion

  //#region Helper methods
  private _convertGameDtoToHighlightMainInputModel(items: GameDto[]): HighlightMainInputModel[] {
    const result: HighlightMainInputModel[] = [];

    this._iterateOverGameDtos(items, (item) => {
      if (this._checksUndefinedForHighlightMainInputModelConvertor(item)) {
        const highlightItem: HighlightMainInputModel = {
          id: item.id!,
          name: item.name!,
          minimalCover: item.thumbnailCover!,
          largeCover: item.cover,
          logo: item.logo!,
          description: item.description!,
          price: item.price,
          highlightButtonType: HighlightButtonEnum.FREE
        }

        result.push(highlightItem);
      }
    });

    return result;
  }

  /**
   * Converts an array of GameDto items to an array of GameSliderItemInputModel objects
   * @param items items The array of GameDto items to convert.
   * @returns An array of converted GameSliderItemInputModel objects.
   */
  private _convertGameDtoToGameSliderItemInputModel(items: GameDto[]): GameSliderItemInputModel[] {
    const result: GameSliderItemInputModel[] = [];

    this._iterateOverGameDtos(items, (item) => {
      if (this._checksUndefinedForGameSliderItemInputModelConvertor(item)) {
        const sliderItem: GameSliderItemInputModel = {
          id: item.id!,
          cover: item.cover,
          name: item.name!,
          discountPercent: item.discountPercent,
          basePrice: item.basePrice,
          finalPrice: item.finalPrice,
          isFree: item.isFree!,
          type: item.type!
        }

        result.push(sliderItem);
      }
    });

    return result;
  }

  private _checksUndefinedForHighlightMainInputModelConvertor(item: GameDto): boolean {
    return !!(item.id !== undefined && item.name !== undefined && item.thumbnailCover !== undefined && item.logo !== undefined
      && item.description !== undefined);
  }

  private _checksUndefinedForGameSliderItemInputModelConvertor(item: GameDto): boolean {
    return !!(item.id !== undefined && item.name !== undefined && item.isFree !== undefined && item.type !== undefined);
  }
  //#endregion
}

