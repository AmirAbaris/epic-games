import {Component, EventEmitter, input, Output} from '@angular/core';
import {CategoryType} from '../enums/category-type.enum';
import {CategoryListInputModel} from "../models/category-list-input.model";
import {CategoryListCaption} from "../models/caption-models/category-list-caption.model";
import {CategoryItemCaption} from "../models/caption-models/category-item-caption.model";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss',
})
export class CategoryListComponent {
  //region Properties
  data = input.required<CategoryListInputModel>();
  caption = input.required<CategoryListCaption>();
  itemCaption = input.required<CategoryItemCaption>();

  @Output() clickGameEvent = new EventEmitter<string>();
  @Output() clickWishlistEvent = new EventEmitter<string>();
  @Output() clickViewMoreButtonEvent = new EventEmitter<CategoryType>();

  public readonly maxNumberItemIndex: number = 5;

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

    console.log(categoryType);
  }

  //endregion
}
