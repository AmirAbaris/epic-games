import { Component, input, OnInit } from '@angular/core';
import { GameSliderItemInputModel } from "../models/game-slider-item-input.model";
import { SizeEnum } from "../enums/size.enum";
import { PriceLabelModel } from "../models/price-label.model";
import { GameSliderCaptionModel } from "../models/caption-models/game-slider-caption.model";
import { output } from "@angular/core";

@Component({
    selector: 'app-game-slider-item',
    templateUrl: './game-slider-item.component.html',
    styleUrl: './game-slider-item.component.scss'
})
export class GameSliderItemComponent implements OnInit {
    //region Properties
    data = input.required<GameSliderItemInputModel>();
    caption = input.required<GameSliderCaptionModel>();
    isWishlistProcessing = input.required<boolean>();
    wishlistIds = input.required<string[]>();

    clickItemEvent = output<string>();
    clickWishlistButtonEvent = output<string>();

    public readonly SizeEnum = SizeEnum;
    public priceLabelData: PriceLabelModel | undefined;

    //endregion

    //region Lifecycle methods
    ngOnInit(): void {
        this._setPriceLabelData();
    }

    //endregion

    //region Main logic methods
    private _setPriceLabelData(): void {
        this.priceLabelData = this._convertGameSliderItemInputModelToPriceLabelModel(this.data());
    }

    //endregion

    //region Handler methods
    public onClickItemEventHandler(id: string): void {
        this.clickItemEvent.emit(id);
    }

    public onClickWishlistButtonEventHandler(id: string): void {
        this.clickWishlistButtonEvent.emit(id);
    }

    //endregion

    //region Helper methods
    private _convertGameSliderItemInputModelToPriceLabelModel(gameSliderInput: GameSliderItemInputModel): PriceLabelModel {
        return {
            discountPercent: gameSliderInput.discountPercent,
            basePrice: gameSliderInput.basePrice,
            finalPrice: gameSliderInput.finalPrice
        }
    }

    //endregion
}
