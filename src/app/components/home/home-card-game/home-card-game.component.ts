import { Component, EventEmitter, Output, input } from '@angular/core';
import { HomeCardGameInputModel } from '../models/home-card-game-input.model';
import { SizeEnum } from '../enums/size.enum';

@Component({
  selector: 'app-home-card-game',
  templateUrl: './home-card-game.component.html',
  styleUrl: './home-card-game.component.scss'
})
export class HomeCardGameComponent {
  //#region Properties
  data = input.required<HomeCardGameInputModel>();
  isLoading = input.required<boolean>();
  public priceLabelSize: SizeEnum = SizeEnum.BIG;

  @Output() clickWishlistButtonEvent = new EventEmitter<string>();
  @Output() clickCardEvent = new EventEmitter<void>();
  //#endregion

  //#region Handler methods
  public onClickWishlistButtonEventHandler(id: string): void {
    this.clickWishlistButtonEvent.emit(id);
  }

  public onClickCardEventHandler(): void {
    this.clickCardEvent.emit();
  }
  //#endregion
}
