import { Component, EventEmitter, Output, SimpleChanges, input } from '@angular/core';
import { WishListButtonCaptionModel } from '../models/caption-models/wishlist-button-caption.model';
import { output } from "@angular/core";

@Component({
  selector: 'app-preview-wish-list-button',
  templateUrl: './preview-wish-list-button.component.html',
  styleUrl: './preview-wish-list-button.component.scss'
})
export class PreviewWishListButtonComponent {
  //#region Properties
  isInWishlist = input.required<boolean>();
  isWishlistProcessing = input.required<boolean>();
  caption = input.required<WishListButtonCaptionModel>();
  public showTooltip = true;

  //#endregion
    clickWishlistButtonEvent = output<void>();
  //#endregion

  //#region Lifecycle methods
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isInWishlist']) {
      this._toggleTooltip();
    }
  }
  //#endregion

  //#region Handler methods
  public onClickWishlistButtonEventHandler(): void {
    this.clickWishlistButtonEvent.emit();
  }

  private _toggleTooltip(): void {
    this.showTooltip = !this.showTooltip;
  }
  //#endregion
;
}
