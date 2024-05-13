import { Component, input } from '@angular/core';
import { CategoryListInputModel } from "../models/category-list-input.model";
import { CategoryListCaptionModel } from "../models/caption-models/category-list-caption.model";
import { CategoryItemCaptionModel } from "../models/caption-models/category-item-caption.model";
import { output } from "@angular/core";
import { CategoryEnum } from '../enums/category.enum';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss',
})
export class CategoryListComponent {
  //region Properties
  data = input.required<CategoryListInputModel>();
  caption = input.required<CategoryListCaptionModel>();
  itemCaption = input.required<CategoryItemCaptionModel>();
  isWishlistProcessing = input.required<boolean>();
  wishlistIds = input.required<string[]>();

  clickGameEvent = output<string>();
  clickWishlistEvent = output<string>();
  clickViewMoreButtonEvent = output<CategoryEnum>();

  public readonly maxNumberItemIndex: number = 5;

  //endregion

  //region Handler methods
  public onClickGameEventHandler(gameId: string): void {
    this.clickGameEvent.emit(gameId);
  }

  public onClickWishlistEventHandler(gameId: string): void {
    this.clickWishlistEvent.emit(gameId);
  }

  public onClickViewMoreButtonEventHandler(categoryType: CategoryEnum): void {
    this.clickViewMoreButtonEvent.emit(categoryType);
  }

  //endregion
}
