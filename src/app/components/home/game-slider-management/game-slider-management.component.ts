import { AfterContentInit, AfterViewInit, Component, input, output } from '@angular/core';
import { GameSliderItemInputModel } from "../models/game-slider-item-input.model";
import { GameSliderCaptionModel } from "../models/caption-models/game-slider-caption.model";
import { Swiper } from 'swiper';

@Component({
    selector: 'app-game-slider-management',
    templateUrl: './game-slider-management.component.html',
    styleUrl: './game-slider-management.component.scss'
})
export class GameSliderManagementComponent implements AfterContentInit {
    //#region Properties
    gameCardInputs = input.required<GameSliderItemInputModel[]>();
    isLoading = input.required<boolean>();
    caption = input.required<GameSliderCaptionModel>();

    // added a title input for dynamic title values
    titleCaption = input.required<string>();
    isTitleClickable = input.required<boolean>();

    clickItemEventHandler = output<string>();
    clickWishlistButtonEvent = output<string>();
    clickTitleEvent = output<string>();
    //#endregion

    //#region Lifecycle methods
    ngAfterContentInit(): void {
        const swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.next-btn',
                prevEl: '.prev-btn',
            }
        });
    }
    //#endregion

    //#region Handler methods
    public onClickItemEventHandler(gameId: string): void {
        this.clickItemEventHandler.emit(gameId);
    }

    public onClickWishlistButtonEventHandler(gameId: string): void {
        this.clickWishlistButtonEvent.emit(gameId);
    }

    public onClickTitleEventHandler(title: string): void {
        if (this.isTitleClickable()) {
            this.clickTitleEvent.emit(title);
        }
    }
    //#endregion
}
