import { Component, EventEmitter, OnInit, Output, input } from '@angular/core';
import { HomeCardGameInputModel } from '../models/home-card-game-input.model';
import { SizeEnum } from '../enums/size.enum';
import { PriceLabelModel } from '../models/price-label.model';

@Component({
  selector: 'app-home-card-game',
  templateUrl: './home-card-game.component.html',
  styleUrl: './home-card-game.component.scss'
})
export class HomeCardGameComponent implements OnInit {
  //#region Properties
  data = input.required<HomeCardGameInputModel>();
  isLoading = input.required<boolean>();
  public priceLabelSize: SizeEnum = SizeEnum.BIG;
  public priceLabelData: PriceLabelModel | undefined;

  @Output() clickWishlistButtonEvent = new EventEmitter<string>();
  @Output() clickCardEvent = new EventEmitter<void>();
  //#endregion

  //#region Lifecycle methods
  ngOnInit(): void {
    this._setInitValueOfData();
  }
  //#endregion

  //#region Main logic methods
  private _setInitValueOfData(): void {
    this.priceLabelData = this._convertDataToPriceLabelModel(this.data());
  }
  //#endregion

  //#region Handler methods
  public onClickWishlistButtonEventHandler(id: string): void {
    this.clickWishlistButtonEvent.emit(id);
  }

  public onClickCardEventHandler(): void {
    this.clickCardEvent.emit();
  }
  //#endregion

  //#region Helper methods
  private _convertDataToPriceLabelModel(data: HomeCardGameInputModel): PriceLabelModel {
    return {
      discountPercent: data.discountPercent,
      basePrice: data.basePrice,
      finalPrice: data.finalPrice
    }
  }
  //#endregion
}
