import { Component, OnInit, input } from '@angular/core';
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
export class HighlightPreviewItemComponent implements OnInit {
  //#region Properties
  data = input.required<HighlightPreviewItemInputModel>();
  isLoading = input.required<boolean>();
  isInWishlist = input.required<boolean>();
  isWishlistProcessing = input.required<boolean>();
  wishlistButtonCaption = input.required<WishListButtonCaptionModel>();
  highlightButtonTypeCaption = input.required<HighlightButtonTypeEnumCaptionModel>();

  clickWishlistButtonEvent = output<string>();
  clickItemEvent = output<string>();

  public buttonTypeEnum: typeof HighlightButtonEnum = HighlightButtonEnum;
  public buttonTypeEnumInput: HighlightButtonEnum | undefined;
  //#endregion

  //#region Lifecycle methods
  ngOnInit(): void {
    this.buttonTypeEnumInput = this.data().highlightButtonType;
  }
  //#endregion

  //#region Handler methods
  public onClickItemEventHandler(id: string): void {
    this.clickItemEvent.emit(id);
  }

  public onClickWishlistButtonEventHandler(id: string): void {
    if (this.isWishlistProcessing()) return;

    this.clickWishlistButtonEvent.emit(id);
  }
  //#endregion
}
