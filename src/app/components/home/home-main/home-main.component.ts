import { AfterViewChecked, Component, DestroyRef, ElementRef, inject, OnDestroy, OnInit, viewChild } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { FreeGameCardCaptionModel } from "../models/caption-models/free-game-card-caption.model";
import { finalize, forkJoin } from "rxjs";
import { CategoryItemCaptionModel } from "../models/caption-models/category-item-caption.model";
import { CategoryListCaptionModel } from "../models/caption-models/category-list-caption.model";
import { GameType } from "../../../enums/game-type.enum";
import { FreeGameItemCaptionModel } from "../models/caption-models/free-game-item-caption.model";
import { FreeGameListCaptionModel } from "../models/caption-models/free-game-list-caption.model";
import { GameSliderCaptionModel } from "../models/caption-models/game-slider-caption.model";
import { HighlightButtonEnum } from "../enums/highlight-button.enum";
import { HighlightMainInputModel } from "../types/highlight-main-input.type";
import { GameService } from "../../../services/game.service";
import { GameDto } from "../dtos/game.dto";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: "app-home-main",
  templateUrl: "./home-main.component.html",
  styleUrl: "./home-main.component.scss",
})
export class HomeMainComponent implements OnInit, OnDestroy, AfterViewChecked {
  //region Properties
  private _translateService = inject(TranslateService);
  private _destroyRef = inject(DestroyRef);
  private _gameService = inject(GameService);

  public container = viewChild.required<ElementRef<HTMLElement>>('container');

  // public categoryManagementData: CategoryManagementInputModel = mockData;
  // public gameSliderItemData: GameSliderItemInputModel[] = gameSliderItems;
  public isLoading: boolean = true;
  public isActive = false;
  public isInWishlist = false;
  public isWishlistProcessing = false;
  public freeGamesCaption: FreeGameCardCaptionModel | undefined;
  // public freeGameList: FreeGameListInputModel = freeGameItemMockData;
  public sliderGameType: GameType = GameType.BASE_GAME;
  public gameItemCaption: CategoryItemCaptionModel | undefined;
  public categoryListCaption: CategoryListCaptionModel | undefined;
  public categoryItemCaption: CategoryItemCaptionModel | undefined;
  public gameSliderCaption: GameSliderCaptionModel | undefined;
  public freeGameItemCaption: FreeGameItemCaptionModel | undefined;
  public freeGameListCaption: FreeGameListCaptionModel | undefined;
  public highlightMainData: HighlightMainInputModel[] | undefined;
  public wishlistIds: string[] = [];
  private observer: IntersectionObserver | undefined;
  private _isObserverTriggered = false;


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
  }

  ngOnDestroy(): void {
    this._destroyObserver();
  }

  ngAfterViewChecked(): void {
    this._observeIntersection(this.container().nativeElement);
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

  /**
   * note this is just a test method!
   */
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
        highlightItems.forEach(item => {
          const highlightMain = this._convertGameDtoToHighlightMainInputModel(item);

          if (!highlightMain) return;
          if (!this.highlightMainData) {
            this.highlightMainData = [];
          }

          this.highlightMainData.push(highlightMain);
          console.log(highlightMain);
        });
      });
  }

  /**
   * applies lazy loading on view to emit data from service
   * we have a boolean value (_isObserverTriggered) to prevent infinite calls on the method inside!
   * @param element 
   */
  private _observeIntersection(element: HTMLElement): void {
    // first we make sure we don't have any ongoing observer
    this._destroyObserver();

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !this._isObserverTriggered) {
        this._isObserverTriggered = !this._isObserverTriggered;
        console.log('call count log');

        this._getGames();

        this._destroyObserver();
      }
    });

    observer.observe(element);
  }

  private _destroyObserver(): void {
    if (!this.observer) return;

    this.observer.disconnect();
  }
  //endregion

  //#region Helper methods
  private _convertGameDtoToHighlightMainInputModel(item: GameDto): HighlightMainInputModel | null {
    if (!(item.id && item.name && item.thumbnailCover && item.logo && item.description)) return null;

    return {
      id: item.id,
      name: item.name,
      minimalCover: item.thumbnailCover,
      largeCover: item.cover,
      logo: item.logo,
      description: item.description,
      price: item.price,
      highlightButtonType: HighlightButtonEnum.FREE
    }
  }
  //#endregion
}