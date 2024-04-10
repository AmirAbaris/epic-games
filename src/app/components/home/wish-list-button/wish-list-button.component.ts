import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Output, input } from '@angular/core';
import { WishListButtonCaptionModel } from '../models/caption-models/wishlist-button-caption.model';

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
      transition('* => rotation-add', [animate('1000ms')]),
      transition('* => rotation-remove', [animate('1000ms')]),
    ])
  ]
})
export class WishListButtonComponent {
  itemId = input.required<string>();
  caption = input.required<WishListButtonCaptionModel>();

  @Output() clickWishlistButtonEvent = new EventEmitter<string>();

  public isInWishlist = false;

  public getTooltipMessage(): string {
    if (this.isInWishlist) {
      return 'SAVED! See all of your wishlist items';
    } else {
      return 'Removed';
    }
  }

  public onClickWishlistHandler(id: string): void {
    this.clickWishlistButtonEvent.emit(id);
  }
}