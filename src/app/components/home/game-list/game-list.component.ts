import {Component, EventEmitter, inject, input, OnInit, Output} from '@angular/core';
import {CategoryType} from "../enums/category-type.enum";
import {GameListInputModel} from "../models/game-list-input.model";
import {TranslateService} from "@ngx-translate/core";
import {GameItemCaptionModel} from "../models/caption-models/game-item-caption.model";
import {forkJoin} from "rxjs";
import {GameListCaptionModel} from "../models/caption-models/game-list-caption.model";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent implements OnInit {
  //region Properties
  gameListInput = input.required<GameListInputModel>();

  @Output() clickGameEvent = new EventEmitter<string>();
  @Output() clickWishlistEvent = new EventEmitter<string>();
  @Output() clickViewMoreButtonEvent = new EventEmitter<CategoryType>();

  public gameListCaption: GameListCaptionModel | undefined;
  public gameItemListCaption: GameItemCaptionModel | undefined;

  private readonly _captionRoutes = {
    gameItemListCaption: 'home.GameItemList',
    gameListCaption: 'home.GameList'
  }

  private _translateService = inject(TranslateService);

  //endregion

  //region Lifecycle methods
  public ngOnInit(): void {
    this._getCaption();
  }

  //endregion

  //region Handler methods
  public onClickGameEventHandler(gameId: string): void {
    this.clickGameEvent.emit(gameId);
  }

  //endregion

  public onClickWishlistEventHandler(gameId: string): void {
    this.clickWishlistEvent.emit(gameId);
  }

  public onClickViewMoreButtonEventHandler(categoryType: CategoryType): void {
    this.clickViewMoreButtonEvent.emit(categoryType);

    console.log(categoryType);
  }

  //region Main logic methods
  private _getCaption(): void {
    forkJoin([
      this._translateService.get(this._captionRoutes.gameItemListCaption),
      this._translateService.get(this._captionRoutes.gameListCaption)
    ]).subscribe(([gameItemCap, gameListCap]) => {
      this.gameItemListCaption = gameItemCap;
      this.gameListCaption = gameListCap;
    });
  }

  //endregion
}
