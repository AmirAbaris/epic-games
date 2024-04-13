import { Component, EventEmitter, OnInit, Output, input } from '@angular/core';
import { WishListButtonCaptionModel } from '../models/caption-models/wishlist-button-caption.model';

@Component({
  selector: 'app-wish-list-button',
  templateUrl: './wish-list-button.component.html',
  styleUrl: './wish-list-button.component.scss'
})
export class WishListButtonComponent implements OnInit {
  //#region Properties
  itemId = input.required<string>();
  isInWishlist = input.required<boolean>();
  caption = input.required<WishListButtonCaptionModel>();
  
  public isAddingToWishlistInProgress = false;
  public showTooltip = false;

  @Output() clickWishlistButtonEvent = new EventEmitter<string>();
  //#endregion

  //#region Lifecycle methods
  ngOnInit(): void {
    this._manageWishlistProgress();
  }
  //#endregion

  //#region Main logic methods
  /**
   * changes the loading value based of the isInWishlist methods value
   * if the the item was not in wishlist, it loads, else it will not load
   */
  private _manageWishlistProgress(): void {
    this.isAddingToWishlistInProgress = !this.isInWishlist();
  }

  private _displayTooltip(): void {
    this.showTooltip = true;
  }
  //#endregion

  //#region Handler methods
  public handleWishlistButtonClickEvents(id: string): void {
    this._onClickWishlistButtonEventHandler(id);
    this._displayTooltip();

  }
  private _onClickWishlistButtonEventHandler(id: string): void {
    this.clickWishlistButtonEvent.emit(id);
  }
  //#endregion
}