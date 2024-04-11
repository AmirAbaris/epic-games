import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, input } from '@angular/core';
import { WishListButtonCaptionModel } from '../models/caption-models/wishlist-button-caption.model';

@Component({
  selector: 'app-wish-list-button',
  templateUrl: './wish-list-button.component.html',
  styleUrl: './wish-list-button.component.scss'
})
export class WishListButtonComponent implements OnChanges, OnInit {
  //#region Properties
  itemId = input.required<string>();
  isItemInWishlist = input.required<boolean>();
  isAddingToWishlistInProgress: boolean | undefined;
  caption = input.required<WishListButtonCaptionModel>();

  public wishlistToolTipText: string | null | undefined;

  @Output() clickWishlistButtonEvent = new EventEmitter<string>();
  //#endregion

  // TODO: add a output for router link in tooltip

  //#region Lifecycle methods
  ngOnInit(): void {
    this._manageWishlistProgress();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('isInWishlist' in changes) {
      this._setTooltipMessage();
    }
  }
  //#endregion

  //#region Main logic methods
  private _setTooltipMessage(): void {
    // TODO: make it enums
    if (this.isItemInWishlist()) {
      this.wishlistToolTipText = 'SAVED! See all of your wishlist items';
    } else {
      this.wishlistToolTipText = 'Removed';
    }
  }

  /**
   * changes the loading value based of the isInWishlist methods value
   * if the the item was not in wishlist, it loads, else it will not load
   */
  private _manageWishlistProgress(): void {
    this.isAddingToWishlistInProgress = !this.isItemInWishlist();
  }
  //#endregion

  //#region Handler methods
  public onClickWishlistHandler(id: string): void {
    this.clickWishlistButtonEvent.emit(id);
  }
  //#endregion
}