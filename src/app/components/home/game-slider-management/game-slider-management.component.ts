import { AfterViewChecked, Component, input } from '@angular/core';
import { GameSliderItemInputModel } from "../models/game-slider-item-input.model";
import { GameSliderCaptionModel } from "../models/caption-models/game-slider-caption.model";
import Swiper from 'swiper';

@Component({
    selector: 'app-game-slider-management',
    templateUrl: './game-slider-management.component.html',
    styleUrl: './game-slider-management.component.scss'
})
export class GameSliderManagementComponent implements AfterViewChecked {
    //#region Properties
    gameCardInputs = input.required<GameSliderItemInputModel[]>();
    isLoading = input.required<boolean>();
    caption = input.required<GameSliderCaptionModel>();
    //#endregion

    //#region Lifecycle methods
    ngAfterViewChecked(): void {
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 5,
            spaceBetween: 2,
            navigation: {
                nextEl: '.next-btn',
                prevEl: '.prev-btn',
            }
        });
    }
    //#endregion
}
