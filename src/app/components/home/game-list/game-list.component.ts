import {Component, EventEmitter, inject, input, OnInit, Output} from '@angular/core';
import {CategoryType} from "../enums/category-type.enum";
import {GameListInputModel} from "../models/game-list-input.model";
import {TranslateService} from "@ngx-translate/core";
import {GameItemCaptionModel} from "../models/caption-models/game-item-caption.model";

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

  protected readonly CategoryType = Object.values(CategoryType);
  protected childCaption: GameItemCaptionModel | undefined;
  
  // mock data for caption
  private _translateService = inject(TranslateService);

  //endregion

  public ngOnInit(): void {
    this._translateService.get('home.GameItemList').subscribe((caption) => {
      this.childCaption = caption;
      console.log(this.childCaption);
    });
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
  }

  //endregion
}
