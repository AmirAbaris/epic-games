import {Component, EventEmitter, input, OnInit, Output,} from '@angular/core';
import {PriceLabelModel} from '../models/price-label.model';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SizeEnum} from '../enums/size.enum';
import {CategoryItemInputModel} from '../models/category-item-input.model';
import {CategoryItemCaptionModel} from "../models/caption-models/category-item-caption.model";

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.scss',
  animations: [
    trigger('fadeInOut', [
      state(
        'loading',
        style({
          opacity: 1,
        }),
      ),
      state(
        'loaded',
        style({
          opacity: 0,
        }),
      ),
      transition('loading => loaded', [animate('0.3s')]),
      transition('loaded => loading', [animate('0.3s')]),
    ]),
  ],
})
export class CategoryItemComponent implements OnInit {
  //region Properties
  data = input.required<CategoryItemInputModel>();
  caption = input.required<CategoryItemCaptionModel>();
  isLoading = input.required<boolean>();

  @Output() clickWishlistButtonEvent = new EventEmitter<string>();
  @Output() clickItemEvent = new EventEmitter<string>();

  public readonly SizeEnum = SizeEnum;
  public priceLabelData: PriceLabelModel | undefined;
  
  //endregion

  //region Lifecycle methods
  public ngOnInit(): void {
    this._updatePriceLabelData();
  }

  //endregion

  //region Handler methods
  public onClickWishlistButtonHandler(event: MouseEvent, gameId: string): void {
    // Prevent event propagation
    event.stopPropagation();

    // Emit the clickWishlistButtonEvent
    this.clickWishlistButtonEvent.emit(gameId);

    console.log(gameId);
    console.log('wishlist called');
  }

  public onClickItemHandler(gameId: string): void {
    this.clickItemEvent.emit(gameId);

    console.log('clicked called');
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

  private _updatePriceLabelData(): void {
    this.priceLabelData = this._convertCategoryItemModelToPriceLabelModel(this.data());
  }

  //endregion
}
