import { Component, inject, input } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { output } from "@angular/core";
import { WishlistCaptionModel } from '../models/caption-models/wishlist-caption.model';

@Component({
  selector: 'app-wish-list-icon',
  templateUrl: './wish-list-icon.component.html',
  styleUrl: './wish-list-icon.component.scss'
})
export class WishListIconComponent {
  //#region Properties
  private _translateService = inject(TranslateService);

  isInWishlist = input.required<boolean>();
  isWishlistProcessing = input.required<boolean>();

  clickButtonEvent = output<void>();

  public tooltipMessage: WishlistCaptionModel = this._translateService.instant('home.Wishlist');
  //#endregion

  //#region Handler methods
  public onClickButtonEventHandler(event: MouseEvent): void {
    // to just call this method if there was another click event for the parent
    // it will not let both methods to be called when clicked on the wishlist button, just calls this one!
    event.stopPropagation();

    this.clickButtonEvent.emit();
  }
  //#endregion
}