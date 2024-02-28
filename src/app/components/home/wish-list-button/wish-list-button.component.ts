import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-wish-list-button',
  templateUrl: './wish-list-button.component.html',
  styleUrl: './wish-list-button.component.scss'
})
export class WishListButtonComponent {
  //region Properties
  @Output() clickButtonEvent = new EventEmitter<string>();

  public tooltipMessage: string = 'Add to Wishlist';
  //endregion

  //region Handler methods
  public onClickButtonEvent(gameId: string): void {
    this.clickButtonEvent.emit(gameId);
  }
  //endregion
}
