import { Component, input } from '@angular/core';
import { GameSliderItemInputModel } from "../models/game-slider-item-input.model";
import { GameSliderCaptionModel } from "../models/caption-models/game-slider-caption.model";

@Component({
    selector: 'app-game-slider-management',
    templateUrl: './game-slider-management.component.html',
    styleUrl: './game-slider-management.component.scss'
})
export class GameSliderManagementComponent {
    //region properties
    gameCardInputs = input.required<GameSliderItemInputModel[]>();
    isLoading = input.required<boolean>();
    caption = input.required<GameSliderCaptionModel>();

    //endregion
}
