import { AfterViewChecked, Component, ElementRef, EventEmitter, Output, input, viewChild } from '@angular/core';
import { HighlightPreviewItemInputModel } from '../models/highlight-preview-item-input.model';
import { HighlightButtonEnum } from '../enums/highlight-button.enum';
import { HighlightButtonTypeEnumCaptionModel } from '../models/caption-models/highlight-button-type-enum-caption.model';
import { WishListButtonCaptionModel } from '../models/caption-models/wishlist-button-caption.model';

@Component({
  selector: 'app-highlight-preview-item',
  templateUrl: './highlight-preview-item.component.html',
  styleUrl: './highlight-preview-item.component.scss'
})
export class HighlightPreviewItemComponent implements AfterViewChecked {
  //#region Properties
  data = input.required<HighlightPreviewItemInputModel>();
  isLoading = input.required<boolean>();
  isInWishlist = input.required<boolean>();
  isWishlistProcessing = input.required<boolean>();
  wishlistButtonCaption = input.required<WishListButtonCaptionModel>();
  highlightButtonTypeCaption = input.required<HighlightButtonTypeEnumCaptionModel>();
  public buttonTypeEnum: typeof HighlightButtonEnum = HighlightButtonEnum;

  @Output() clickWishlistButtonEvent = new EventEmitter<string>();
  @Output() clickItemEvent = new EventEmitter<string>();
  bgContainerRef = viewChild.required<ElementRef<HTMLDivElement>>('bgContainer');
  //#endregion

  ngAfterViewChecked(): void {
    console.log(this.bgContainerRef);
    setTimeout(() => {
      const linear = 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),'
      this.bgContainerRef().nativeElement.style.backgroundImage = `${linear} url(${this.data().cover})`;
    }, 1000)
  }

  //#region Handler methods
  public onClickItemEventHandler(id: string): void {
    this.clickItemEvent.emit(id);
  }

  public onClickWishlistButtonEventHandler(id: string): void {
    this.clickWishlistButtonEvent.emit(id);
  }
  //#endregion
}
