import { Component, input, OnInit } from '@angular/core';
import { PriceLabelModel } from '../models/price-label.model';
import { SizeEnum } from '../enums/size.enum';
import { CategoryItemInputModel } from '../models/category-item-input.model';
import { CategoryItemCaptionModel } from "../models/caption-models/category-item-caption.model";
import { output } from "@angular/core";

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.scss'
})
export class CategoryItemComponent implements OnInit {
  //region Properties
  data = input.required<CategoryItemInputModel>();
  caption = input.required<CategoryItemCaptionModel>();
  isLoading = input.required<boolean>();
  isInWishlist = input.required<boolean>();
  isWishlistProcessing = input.required<boolean>();

  clickWishlistButtonEvent = output<string>();
  clickItemEvent = output<string>();

  public readonly SizeEnum = SizeEnum;
  public priceLabelData: PriceLabelModel | undefined;

  //endregion

  //region Lifecycle methods
  public ngOnInit(): void {
    this._setPriceLabelData();
  }

  //endregion

  //region Main logic method
  private _setPriceLabelData(): void {
    this.priceLabelData = this._convertCategoryItemModelToPriceLabelModel(this.data());
  }

  //endregion

  //region Handler methods
  public onClickWishlistButtonHandler(gameId: string): void {
    this.clickWishlistButtonEvent.emit(gameId);
  }

  public onClickItemHandler(gameId: string): void {
    this.clickItemEvent.emit(gameId);
  }

  //endregion

  //region Helper methods
  private _convertCategoryItemModelToPriceLabelModel(item: CategoryItemInputModel): PriceLabelModel {
    return {
      discountPercent: item.discountPercent,
      basePrice: item.basePrice,
      finalPrice: item.finalPrice,
    }
  }

  //endregion
}
