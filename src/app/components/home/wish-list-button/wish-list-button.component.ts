import { Component, EventEmitter, Output, input } from '@angular/core';
import { WishListButtonCaptionModel } from '../models/caption-models/wishlist-button-caption.model';

@Component({
  selector: 'app-wish-list-button',
  templateUrl: './wish-list-button.component.html',
  styleUrl: './wish-list-button.component.scss'
})
export class WishListButtonComponent {
  //#region Properties
  isInWishlist = input.required<boolean>();
  isWishlistProcessing = input.required<boolean>();
  caption = input.required<WishListButtonCaptionModel>();
  public showTooltip = false;

  @Output() clickWishlistButtonEvent = new EventEmitter<void>();
  //#endregion

  //#region Handler methods
  public onClickWishlistButtonEventHandler(): void {
    this.clickWishlistButtonEvent.emit();
    this.showTooltip = !this.showTooltip;
  }
  //#endregion
}