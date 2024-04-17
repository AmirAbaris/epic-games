import { Component, EventEmitter, OnChanges, Output, SimpleChanges, input } from '@angular/core';
import { WishListButtonCaptionModel } from '../models/caption-models/wishlist-button-caption.model';

@Component({
  selector: 'app-wish-list-button',
  templateUrl: './wish-list-button.component.html',
  styleUrl: './wish-list-button.component.scss'
})
export class WishListButtonComponent implements OnChanges {
  //#region Properties
  isInWishlist = input.required<boolean>();
  isWishlistProcessing = input.required<boolean>();
  caption = input.required<WishListButtonCaptionModel>();
  public showTooltip = true;

  @Output() clickWishlistButtonEvent = new EventEmitter<void>();
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
}