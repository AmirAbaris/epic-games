import {Component, EventEmitter, input, Output} from '@angular/core';
import {HomeCardGameInputModel} from "../models/home-card-game-input.model";

@Component({
  selector: 'app-home-card-game',
  templateUrl: './home-card-game.component.html',
  styleUrl: './home-card-game.component.scss'
})
export class HomeCardGameComponent {
  //region Properties
  data = input.required<HomeCardGameInputModel>();
  isLoading = input.required<boolean>();

  @Output() clickWishlistButtonEvent = new EventEmitter<string>();
  @Output() clickCardEvent = new EventEmitter<string>();

  // //endregion

  //region Handler methods
  public onClickWishlistButtonEvent(gameId: string): void {
    this.clickWishlistButtonEvent.emit(gameId);
  }

  public onClickCardEvent(gameId: string): void {
    this.clickCardEvent.emit(gameId);
  }

  //endregion
}
