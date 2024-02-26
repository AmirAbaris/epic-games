import { Component, EventEmitter, OnInit, Output, input } from '@angular/core';
import { GameCardDto } from '../dtos/game-card-dto';
import { PriceLabelModel } from '../models/price-label.model';
import { SizeEnum } from '../enums/size.enum';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent implements OnInit {
  //#region properties
  gameCardInputs = input.required<GameCardDto>();
  iconInput = input.required<string>();

  @Output('addWishlistButton') AddToWishListButtonEvent = new EventEmitter<string>();

  public priceLabel: PriceLabelModel | undefined;
  //#endregion

  //#region lifecycle methods
  ngOnInit(): void {
    this._completePriceLabelData();
  }
  //#endregion

  //#region main logic methods
  private _completePriceLabelData(): void {
    const prices: PriceLabelModel = {
      discountPercent: this.gameCardInputs().discountPercent,
      basePrice: this.gameCardInputs().basePrice,
      finalPrice: this.gameCardInputs().finalPrice,
      size: SizeEnum.Medium
    }

    this.priceLabel = prices;
  }
  //#endregion

  //#region handler methods
  public onAddToWishlistButtonEvent(gameId: string): void {
    this.AddToWishListButtonEvent.emit(gameId);
  }
  //#endregion
}
