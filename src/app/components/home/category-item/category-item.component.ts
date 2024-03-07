import {Component, EventEmitter, Input, input, OnInit, Output,} from '@angular/core';
import {PriceLabelModel} from '../models/price-label.model';
import {finalize, interval, take, tap} from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SizeEnum} from '../enums/size.enum';
import {CategoryItemModel} from '../models/category-item.model';
import {CategoryItemCaption} from "../models/caption-models/category-item-caption.model";

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
  data = input.required<CategoryItemModel>();
  caption = input.required<CategoryItemCaption>();
  @Input({required: true}) isLoading: boolean | undefined;

  @Output() clickWishlistButtonEvent = new EventEmitter<string>();
  @Output() clickItemEvent = new EventEmitter<string>();

  public SizeEnum = SizeEnum;
  public priceLabelData: PriceLabelModel | undefined;
  //endregion

  //region Lifecycle methods
  public ngOnInit(): void {
    this._completeLoading();
  }

  //endregion

  //region Main logic methods
  private _completeLoading(): void {
    interval(5000).pipe(
      take(1),
      tap(() => {
        this.priceLabelData = this._convertCategoryItemModelToPriceLabelModel(this.data())
      }),
      finalize(() => {
        this.isLoading = false;
      })).subscribe();
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
  private _convertCategoryItemModelToPriceLabelModel(item: CategoryItemModel): PriceLabelModel {
    return {
      discountPercent: item.discountPercent,
      basePrice: item.basePrice,
      finalPrice: item.finalPrice,
    }
  }

  //endregion
}
