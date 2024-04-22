import { Component, EventEmitter, Output, input } from '@angular/core';
import { HighlightMainInputType } from '../models/highlight-main-input.model';
import { WishListButtonCaptionModel } from '../models/caption-models/wishlist-button-caption.model';
import { HighlightButtonTypeEnumCaptionModel } from '../models/caption-models/highlight-button-type-enum-caption.model';

@Component({
  selector: 'app-highlight-main',
  templateUrl: './highlight-main.component.html',
  styleUrl: './highlight-main.component.scss'
})
export class HighlightMainComponent {
  //#region Properties
  data = input.required<HighlightMainInputType>();
  isLoading = input.required<boolean>();
  isActive = input.required<boolean>();
  isInWishlist = input.required<boolean>();
  isWishlistProcessing = input.required<boolean>();
  wishlistButtonCaption = input.required<WishListButtonCaptionModel>();
  highlightButtonTypeCaption = input.required<HighlightButtonTypeEnumCaptionModel>();

  @Output() clickWishlistButtonEvent = new EventEmitter<string>();
  @Output() clickItemEvent = new EventEmitter<string>();
  //#endregion

  //#region Handler methods
  public onClickWishlistButtonEventHandler(id: string): void {
    // TODO: maybe add guard!?
    this.clickWishlistButtonEvent.emit(id);
  }

  public onClickItemEventHandler(id: string): void {
    this.clickItemEvent.emit(id);
  }
  //#endregion
}
