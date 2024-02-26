import { Component, EventEmitter, Output, input } from '@angular/core';
import { FortniteCardDto } from '../dtos/fortnite-card-dto';

@Component({
  selector: 'app-fortnite-card',
  templateUrl: './fortnite-card.component.html',
  styleUrl: './fortnite-card.component.scss'
})
export class FortniteCardComponent {
  //#region properties
  gameInput = input.required<FortniteCardDto>();
  iconInput = input.required<string>();

  @Output('addWishlistButton') AddToWishListButtonEvent = new EventEmitter<string>();
  //#endregion

  //#region handler methods
  public onAddToWishlistButtonEvent(gameId: string): void {
    this.AddToWishListButtonEvent.emit(gameId);
  }
  //#endregion
}
