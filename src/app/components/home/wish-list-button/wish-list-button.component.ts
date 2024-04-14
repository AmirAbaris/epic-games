import { Component, OnInit, input } from '@angular/core';
import { WishListButtonCaptionModel } from '../models/caption-models/wishlist-button-caption.model';

@Component({
  selector: 'app-wish-list-button',
  templateUrl: './wish-list-button.component.html',
  styleUrl: './wish-list-button.component.scss'
})
export class WishListButtonComponent implements OnInit {
  //#region Properties
  isInWishlist = input.required<boolean>();
  iconInput = input.required<string>();
  caption = input.required<WishListButtonCaptionModel>();

  public isAddingToWishlistInProgress = false;
  public showTooltip = false;
  //#endregion

  //#region Lifecycle methods
  ngOnInit(): void {
    this._manageWishlistProgress();
  }
  //#endregion

  //#region Main logic methods
  public displayTooltip(): void {
    this.showTooltip = true;
  }

  /**
   * changes the loading value based of the isInWishlist methods value
   * if the the item was not in wishlist, it loads, else it will not load
   */
  private _manageWishlistProgress(): void {
    this.isAddingToWishlistInProgress = !this.isInWishlist();
  }

  //#endregion
}