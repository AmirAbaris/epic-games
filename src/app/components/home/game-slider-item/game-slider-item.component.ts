import {Component, EventEmitter, input, OnInit, Output} from '@angular/core';
import {GameSliderItemInputModel} from "../models/game-slider-item-input.model";
import {SizeEnum} from "../enums/size.enum";
import {PriceLabelModel} from "../models/price-label.model";
import {GameSliderCaptionModel} from "../models/caption-models/game-slider-caption.model";
import {GameType} from "../enums/game-type.enum";

@Component({
    selector: 'app-game-slider-item',
    templateUrl: './game-slider-item.component.html',
    styleUrl: './game-slider-item.component.scss'
})
export class GameSliderItemComponent implements OnInit {
    //region Properties
    data = input.required<GameSliderItemInputModel>();
    caption = input.required<GameSliderCaptionModel>();
    isLoading = input.required<boolean>();

    @Output() clickItemEvent = new EventEmitter<string>();
    @Output() clickWishlistButtonEvent = new EventEmitter<string>();

    public readonly SizeEnum = SizeEnum;
    public priceLabelData: PriceLabelModel | undefined;

    //endregion

    //region Lifecycle methods
    ngOnInit(): void {
        this._setPriceLabelData();
    }

    //endregion

    //region Main logic methods


    public getCaptionForType(type: GameType): string {
        switch (type) {
            case GameType.BASE_GAME:
                return this.caption().gameType.BASE_GAME;
            case GameType.EDITION:
                return this.caption().gameType.EDITION;

            default:
                return this.caption().gameType.BASE_GAME;
        }
    }

    private _setPriceLabelData(): void {
        this.priceLabelData = this._convertGameSliderItemInputModelToPriceLabelModel(this.data());
    }

    //endregion

    //region Handler methods
    public onClickItemEventHandler(id: string): void {
        this.clickItemEvent.emit(id);
    }

    public onClickWishlistButtonEventHandler(event: MouseEvent, id: string): void {
        // Prevent event propagation
        event.stopPropagation();

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
    protected readonly GameType = GameType;
}
