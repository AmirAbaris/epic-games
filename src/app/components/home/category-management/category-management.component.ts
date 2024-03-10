import {Component, EventEmitter, input, Output} from '@angular/core';
import {CategoryType} from "../enums/category-type.enum";
import {CategoryListCaptionModel} from "../models/caption-models/category-list-caption.model";
import {CategoryItemCaptionModel} from "../models/caption-models/category-item-caption.model";
import {CategoryListInputModel} from "../models/category-list-input.model";

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrl: './category-management.component.scss'
})
export class CategoryManagementComponent {
  //region Properties
  data = input.required<CategoryListInputModel[]>();
  categoryListCaption = input.required<CategoryListCaptionModel>();
  categoryItemCaption = input.required<CategoryItemCaptionModel>();
  isLoading = input.required<boolean>();

  @Output() clickGameEvent = new EventEmitter<string>();
  @Output() clickWishlistButtonEvent = new EventEmitter<string>();
  @Output() clickViewMoreButtonEvent = new EventEmitter<CategoryType>();

  //endregion

  //region Handler methods
  public onClickGameEventHandler(gameId: string): void {
    this.clickGameEvent.emit(gameId);
  }

  public onClickWishlistEventHandler(gameId: string): void {
    this.clickWishlistButtonEvent.emit(gameId);
  }

  public onClickViewMoreButtonEventHandler(categoryType: CategoryType): void {
    this.clickViewMoreButtonEvent.emit(categoryType);
  }

  //endregion
}
