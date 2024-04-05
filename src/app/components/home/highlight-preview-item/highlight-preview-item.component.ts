import { Component, EventEmitter, Output, input } from '@angular/core';
import { HighlightPreviewItemInputModel } from '../models/highlight-preview-item-input.model';
import { HighlightButtonEnum } from '../enums/highlight-button.enum';
import { HighlightButtonTypeEnumCaptionModel } from '../models/caption-models/highlight-button-type-caption.model';
import { HighlightPreviewItemCaptionModel } from '../models/caption-models/highlight-preview-item-caption.model';

@Component({
  selector: 'app-highlight-preview-item',
  templateUrl: './highlight-preview-item.component.html',
  styleUrl: './highlight-preview-item.component.scss'
})
export class HighlightPreviewItemComponent {
  //#region Properties
  data = input.required<HighlightPreviewItemInputModel>();
  isLoading = input.required<boolean>();
  caption = input.required<HighlightPreviewItemCaptionModel>();
  public buttonTypeEnum: typeof HighlightButtonEnum = HighlightButtonEnum;

  @Output() clickWishlistButtonEvent = new EventEmitter<string>();
  @Output() clickItemEvent = new EventEmitter<void>();

  // mock data for button type component caption
  public highlightButtonTypeCaptionData: HighlightButtonTypeEnumCaptionModel = {
    freePlay: "Play for free",
    wishlistPlay: "Wishlist now",
    buyPlay: "Buy now"
  }
  //#endregion

  //#region Handler methods
  public onClickWishlistButtonEventHandler(id: string): void {
    this.clickWishlistButtonEvent.emit(id);
  }

  public onClickItemEvent(): void {
    this.clickItemEvent.emit();
  }
  //#endregion
}
