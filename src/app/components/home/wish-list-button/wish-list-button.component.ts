import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-wish-list-button',
  templateUrl: './wish-list-button.component.html',
  styleUrl: './wish-list-button.component.scss',
  animations: [
    trigger('spin-icon', [
      state('rotation-add', style({
        transform: 'rotate(-360deg)',
      })),
      state('rotation-remove', style({
        transform: 'rotate(360deg)',
      })),
      transition('rotation-remove <=> rotation-add', [animate('1000ms')])
    ])
  ]
})
export class WishListButtonComponent {
  @Output() clickWishlistButtonEvent = new EventEmitter<string>();

  public itemId = '12';
  // caption = '';
  public isInWishlist = false;
  public operationInProgress = false;
  public wishlistClicked = false;
  public removedFromWishlist = false;

  public onClickWishlistHandler(id: string): void {
    this.wishlistClicked = true;
    this._wishlistButtonEventHandler(id);

    if (!this.isInWishlist) {
      this._addToWishlistHandler();
    } else {
      this._removeFromWishlist();
    }
  }

  private _addToWishlistHandler(): void {
    // Update the state when the button is clicked
    this.wishlistClicked = true;

    this.operationInProgress = true;

    setTimeout(() => {
      this.operationInProgress = false;
      this.isInWishlist = true;
    }, 2000);
  }

  private _removeFromWishlist(): void {
    this.operationInProgress = true;

    setTimeout(() => {
      this.operationInProgress = false;
      this.isInWishlist = false;
      this.removedFromWishlist = true;
    }, 2000);
  }

  getTooltipMessage(): string {
    if (this.isInWishlist) {
      return 'SAVED! See all of your wishlist items';
    } else {
      return 'Removed';
    }
  }

  private _wishlistButtonEventHandler(id: string): void {
    this.clickWishlistButtonEvent.emit(id);
  }
}