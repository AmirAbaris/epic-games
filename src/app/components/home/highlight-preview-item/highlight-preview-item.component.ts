import { Component, input } from '@angular/core';
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
  wishlistListIds = input.required<string[]>();
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

    // Retrieve the wishlist list array
    const wishlistList = this.wishlistListIds();

    if (this.wishlistListIds().includes(id)) {
      // If the ID is already in the wishlist list, remove it
      const index = wishlistList.indexOf(id);
      index !== -1 && wishlistList.splice(index, 1);
    } else {
      // If the ID is not in the wishlist list, add it
      wishlistList.push(id);
      // Emit the event indicating the button click
      this.clickWishlistButtonEvent.emit(id);
    }

    // Log the current wishlist list IDs
    console.log(wishlistList);
  }
  //#endregion
}
