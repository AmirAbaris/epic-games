import { Component, input, model } from '@angular/core';
import { WishListButtonCaptionModel } from '../models/caption-models/wishlist-button-caption.model';
import { HighlightButtonTypeEnumCaptionModel } from '../models/caption-models/highlight-button-type-enum-caption.model';
import { HighlightMainInputModel } from '../types/highlight-main-input.type';
import { HighlightPreviewItemInputModel } from '../models/highlight-preview-item-input.model';
import { HighlightSmallItemInputModel } from '../models/highlight-small-item-input.model';
import { output } from "@angular/core";

@Component({
  selector: 'app-highlight-main',
  templateUrl: './highlight-main.component.html',
  styleUrl: './highlight-main.component.scss'
})
export class HighlightMainComponent {
  //#region Properties
  data = input.required<HighlightMainInputModel>();
  isLoading = input.required<boolean>();
  isActive = model.required<boolean>();
  isInWishlist = input.required<boolean>();
  isWishlistProcessing = input.required<boolean>();
  wishlistButtonCaption = input.required<WishListButtonCaptionModel>();
  highlightButtonTypeCaption = input.required<HighlightButtonTypeEnumCaptionModel>();
  currentIndex = model.required<number>();

  clickWishlistButtonEvent = output<string>();
  clickItemEvent = output<string>();

  public highlightPreviewData: HighlightPreviewItemInputModel[] = [];
  public highlightSmallData: HighlightSmallItemInputModel[] = [];
  //#endregion

  //#region Handler methods
  public onClickWishlistButtonEventHandler(id: string): void {
    this.clickWishlistButtonEvent.emit(id);
  }

  public onClickItemEventHandler(id: string): void {
    this.clickItemEvent.emit(id);
  }

  public onClickSmallItemEventHandler(index: number): void {
    this._activateItem();
    this._updateGlobalIndex(index);
  }
  //#endregion

  //#region Main logic methods
  private _activateItem(): void {
    this.isActive.set(true);
  }

  /**
 * when user clicks on the small item, the index will replace preview item index
 * and 2 components shows the same index and item (syncs 2 component indexes)
 * @param index 
 * @returns 
 */
  private _updateGlobalIndex(index: number): void {
    // check if length of the preview data is not null
    if (index > this.data().highlightPreviewItem.length) return;

    this.currentIndex.set(index);
  }
}
