import { Component, EventEmitter, OnInit, Output, input, model } from '@angular/core';
import { HighlightPreviewItemInputModel } from '../models/highlight-preview-item-input.model';
import { HighlightButtonEnum } from '../enums/highlight-button.enum';
import { HighlightButtonTypeEnumCaptionModel } from '../models/caption-models/highlight-button-type-enum-caption.model';
import { WishListButtonCaptionModel } from '../models/caption-models/wishlist-button-caption.model';

@Component({
  selector: 'app-highlight-preview-item',
  templateUrl: './highlight-preview-item.component.html',
  styleUrl: './highlight-preview-item.component.scss'
})
export class HighlightPreviewItemComponent implements OnInit {
  //#region Properties
  data = input.required<HighlightPreviewItemInputModel>();
  isLoading = input.required<boolean>();
  isInWishlist = model.required<boolean>();
  wishlistAddProcessing = model.required<boolean>();
  wishlistButtonCaption = input.required<WishListButtonCaptionModel>();
  highlightButtonTypeCaption = input.required<HighlightButtonTypeEnumCaptionModel>();
  public buttonTypeEnum: typeof HighlightButtonEnum = HighlightButtonEnum;
  public itemId: string | undefined;

  @Output() clickWishlistButtonEvent = new EventEmitter<string>();
  @Output() clickItemEvent = new EventEmitter<void>();
  //#endregion

  //#region Lifecycle methods
  ngOnInit(): void {
    this._setItemIdValue();
  }
  //#endregion

  //#region Handler methods
  public onClickItemEventHandler(event: MouseEvent): void {
    let isOnWishlistButton = this._isOnWishlistButton(event);

    if (isOnWishlistButton) return;

    this.clickItemEvent.emit();
  }

  public onClickWishlistButtonEventHandler(id: string): void {
    this.clickWishlistButtonEvent.emit(id);
  }
  //#endregion

  //#region Main logic methods
  private _setItemIdValue(): void {
    this.itemId = this._convertDataToItemId();
  }

  /**
   * checks if the mouse is just on the target we want; (not wishlist button!)
   * @param target 
   * @returns if the mouse is on the wishlist button or not
   */
  private _isOnWishlistButton(event: MouseEvent): boolean {
    const target = event.target as HTMLElement;

    return !!target.closest('.wishlist');
  }
  //#endregion

  //#region Helper methods
  private _convertDataToItemId(): string {
    return this.data().id;
  }
  //#endregion 
}
