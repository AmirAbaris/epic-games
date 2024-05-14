import { Component, OnInit, input } from '@angular/core';
import { HomeCardGameInputModel } from '../models/home-card-game-input.model';
import { SizeEnum } from '../enums/size.enum';
import { PriceLabelModel } from '../models/price-label.model';
import { output } from "@angular/core";

@Component({
  selector: 'app-home-card-game',
  templateUrl: './home-card-game.component.html',
  styleUrl: './home-card-game.component.scss'
})
export class HomeCardGameComponent implements OnInit {
  //#region Properties
  data = input.required<HomeCardGameInputModel>();
  isInWishlist = input.required<boolean>();
  isWishlistProcessing = input.required<boolean>();

  clickWishlistButtonEvent = output<string>();
  clickCardEvent = output<void>();

  public priceLabelSize: SizeEnum = SizeEnum.BIG;
  public priceLabelData: PriceLabelModel | undefined;
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
