import { Component, input } from '@angular/core';
import { CategoryListCaptionModel } from "../models/caption-models/category-list-caption.model";
import { CategoryItemCaptionModel } from "../models/caption-models/category-item-caption.model";
import { CategoryManagementInputModel } from "../models/category-management-input.model";
import { output } from "@angular/core";
import { CategoryEnum } from '../enums/category.enum';

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrl: './category-management.component.scss'
})
export class CategoryManagementComponent {
  //region Properties
  data = input.required<CategoryManagementInputModel>();
  categoryListCaption = input.required<CategoryListCaptionModel>();
  categoryItemCaption = input.required<CategoryItemCaptionModel>();
  isLoading = input.required<boolean>();
  isWishlistProcessing = input.required<boolean>();
  wishlistIds = input.required<string[]>();

  clickGameEvent = output<string>();
  clickWishlistButtonEvent = output<string>();
  clickViewMoreButtonEvent = output<CategoryEnum>();

  //endregion

  //region Handler methods
  public onClickGameEventHandler(gameId: string): void {
    this.clickGameEvent.emit(gameId);
  }

  public onClickWishlistEventHandler(gameId: string): void {
    this.clickWishlistButtonEvent.emit(gameId);
  }

  public onClickViewMoreButtonEventHandler(categoryType: CategoryEnum): void {
    this.clickViewMoreButtonEvent.emit(categoryType);
  }

  //endregion
}
