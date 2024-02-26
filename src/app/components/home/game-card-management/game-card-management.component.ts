import { Component, EventEmitter, Output, input } from '@angular/core';
import { GameCardDto } from '../dtos/game-card-dto';

@Component({
  selector: 'app-game-card-management',
  templateUrl: './game-card-management.component.html',
  styleUrl: './game-card-management.component.scss'
})
export class GameCardManagementComponent {
  //#region properties
  gameCardInputs = input.required<GameCardDto[]>();

  @Output('addWishlistButton') AddToWishListButtonEvent = new EventEmitter<string>();
  //#endregion

  //#region handler methods
  public onAddToWishlistButtonEvent(gameId: string): void {
    this.AddToWishListButtonEvent.emit(gameId);
  }
  //#endregion
}
