import { Component, computed, input, model } from '@angular/core';
import { HighlightPreviewItemInputModel } from '../models/highlight-preview-item-input.model';
import { HighlightButtonEnum } from '../enums/highlight-button.enum';
import { HighlightButtonTypeEnumCaptionModel } from '../models/caption-models/highlight-button-type-enum-caption.model';
import { WishListButtonCaptionModel } from '../models/caption-models/wishlist-button-caption.model';
import { output } from "@angular/core";

@Component({
  selector: 'app-highlight-preview-item',
  templateUrl: './highlight-preview-item.component.html',
  styleUrl: './highlight-preview-item.component.scss'
})
export class HighlightPreviewItemComponent {
  //#region Properties
  data = input.required<HighlightPreviewItemInputModel>();
  isLoading = input.required<boolean>();
  wishlistListIds = model.required<string[]>();
  isWishlistProcessing = input.required<boolean>();
  wishlistButtonCaption = input.required<WishListButtonCaptionModel>();
  highlightButtonTypeCaption = input.required<HighlightButtonTypeEnumCaptionModel>();

  clickWishlistButtonEvent = output<string>();
  clickItemEvent = output<string>();

  public buttonTypeEnum: typeof HighlightButtonEnum = HighlightButtonEnum;
  //#endregion

  //#region Handler methods
  public onClickItemEventHandler(id: string): void {
    this.clickItemEvent.emit(id);
  }
  
  public onClickWishlistButtonEventHandler(id: string): void {
    if (this.isWishlistProcessing()) return;

    if (this.wishlistListIds().includes(id)) {
      this._removeIdFromWishlistIds(id);

    } else {
      this._addIdToWishlistIds(id);

      this.clickWishlistButtonEvent.emit(id);
    }
  }
  //#endregion

  //#region Main logic methods
  private _removeIdFromWishlistIds(id: string): void {
    if (!this.wishlistListIds().includes(id)) return;

    this.wishlistListIds.update((item) => item.filter((ids) => ids !== id));
  }

  private _addIdToWishlistIds(id: string): void {
    if (this.wishlistListIds().includes(id)) return;

    this.wishlistListIds.update((item) => [...item, id]);
  }
  //#endregion
}
