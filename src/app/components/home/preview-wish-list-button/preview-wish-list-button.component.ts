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
  wishlistListIds = input.required<string[]>();
  isWishlistProcessing = input.required<boolean>();
  itemId = input.required<string>();
  caption = input.required<WishListButtonCaptionModel>();

  clickWishlistButtonEvent = output<string>();
  //#endregion

  //#region Handler methods
  public onClickWishlistButtonEventHandler(id: string): void {
    this.clickWishlistButtonEvent.emit(id);
  }
  //#endregion
}
