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
      // transition('* => rotation-add', [animate('1000ms')]),
      transition('rotation-add <=> rotation-remove', [animate('1000ms')])
    ])
  ]
})
export class WishListButtonComponent {
  @Output() clickWishlistButtonEvent = new EventEmitter<string>();

  public itemId = '12';
  caption = '';
  public loading = false; // input it
  public isInWishlist = false;
  public wishlistClicked = false;
  public removedFromWishlist = false;

  public onClickWishlistHandler(id: string): void {
    this._wishlistButtonClicked();
    this._wishlistButtonEventHandler(id);

    if (!this.isInWishlist) {
      this._addToWishlistHandler();
    } else {
      this._removeFromWishlist();
    }
  }

  public getTooltipMessage(): string {
    if (this.removedFromWishlist) {
      return 'Removed';
    } else if (this.isInWishlist) {
      return 'SAVED! See all of your wishlist items';
    } else {
      return 'Remove From Wishlist';
    }
  }

  private _wishlistButtonClicked(): void {
    this.wishlistClicked = true;
  }

  private _wishlistButtonEventHandler(id: string): void {
    this.clickWishlistButtonEvent.emit(id);
  }

  /**
   * just to test the animation; it can be removed!
   */
  private _addToWishlistHandler(): void {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.isInWishlist = true;
    }, 2000);
  }

  private _removeFromWishlist(): void {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.isInWishlist = false;
      this.removedFromWishlist = true;
    }, 2000);
  }
}
