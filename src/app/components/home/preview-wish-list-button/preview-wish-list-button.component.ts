import { Component, input } from '@angular/core';
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

  clickWishlistButtonEvent = output<void>();
  //#endregion

  //#region Handler methods
  public onClickWishlistButtonEventHandler(): void {
    this.clickWishlistButtonEvent.emit();
  }
  //#endregion
}
