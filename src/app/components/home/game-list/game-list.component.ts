import {Component, EventEmitter, inject, input, OnInit, Output} from '@angular/core';
import {CategoryType} from "../enums/category-type.enum";
import {GameListInputModel} from "../models/game-list-input.model";
import {TranslateService} from "@ngx-translate/core";
import {GameItemCaptionModel} from "../models/caption-models/game-item-caption.model";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent implements OnInit {
  //region properties
  gameListInput = input.required<GameListInputModel>();

  @Output() clickGameEvent = new EventEmitter<string>();
  @Output() clickWishlistEvent = new EventEmitter<string>();
  @Output() clickViewMoreButtonEvent = new EventEmitter<CategoryType>();

  public viewMoreCaption: string | undefined;
  // to mock data for childs input
  protected childCaption: GameItemCaptionModel | undefined;
  //endregion
  protected readonly CategoryType = CategoryType;
  private _captionRoutes = {
    gameItemListCaption: 'home.GameItemList',
    gameListCaption: 'home.GameList'
  }
  // mock data for caption
  private _translateService = inject(TranslateService);

  //endregion

  //region Lifecycle methods
  public ngOnInit(): void {
    this._getCaption();
  }

  //region Handler methods
  public onClickGameEventHandler(gameId: string): void {
    this.clickGameEvent.emit(gameId);
  }

  public onClickWishlistEventHandler(gameId: string): void {
    this.clickWishlistEvent.emit(gameId);
  }

  public onClickViewMoreButtonEventHandler(categoryType: CategoryType): void {
    this.clickViewMoreButtonEvent.emit(categoryType);

    console.log(categoryType);
  }

  private _getCaption(): void {
    forkJoin([
      this._translateService.get(this._captionRoutes.gameItemListCaption),
      this._translateService.get(this._captionRoutes.gameListCaption)
    ]).subscribe(([gameItemCap, gameListCap]) => {
      this.childCaption = gameItemCap;
      this.viewMoreCaption = gameListCap.viewTitle;

      console.log(this.viewMoreCaption);
    });
  }
}
