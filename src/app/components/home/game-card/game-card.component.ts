import {Component, input, OnInit} from '@angular/core';
import {GameCardDto} from '../dtos/game-card-dto';
import {PriceLabelModel} from '../models/price-label.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent implements OnInit {
  //#region properties
  gameCardInputs = input.required<GameCardDto>();

  public priceLabel: PriceLabelModel | undefined;
  //#endregion

  //#region lifecycle methods
  ngOnInit(): void {
    this._completePriceLabelData();
    //#endregion
  }

  //#region main logic methods
  private _completePriceLabelData(): void {
    this.priceLabel = {
      discountPercent: this.gameCardInputs().discountPercent,
      basePrice: this.gameCardInputs().basePrice,
      finalPrice: this.gameCardInputs().finalPrice
    };
  }
}
