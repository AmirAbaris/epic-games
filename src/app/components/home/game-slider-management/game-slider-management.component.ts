import { AfterViewInit, Component, ElementRef, input, output, viewChild } from '@angular/core';
import { GameSliderItemInputModel } from "../models/game-slider-item-input.model";
import { GameSliderCaptionModel } from "../models/caption-models/game-slider-caption.model";
import { SwiperOptions } from 'swiper/types';

@Component({
    selector: 'app-game-slider-management',
    templateUrl: './game-slider-management.component.html',
    styleUrl: './game-slider-management.component.scss'
})
export class GameSliderManagementComponent implements AfterViewInit {
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

    swiper = viewChild.required<ElementRef<HTMLElement>>('swiper');

    private readonly _swiperConfig: SwiperOptions = {
        slidesPerView: 5,
        navigation: {
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
        }
    };
    //#endregion

    //#region Lifecycle methods
    ngAfterViewInit(): void {
        this._initSwiperElement(this.swiper(), this._swiperConfig);
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

    //#region Main logic methods
    /**
 * Initializes the Swiper element with the provided configuration options.
 * @param element The ElementRef of the HTMLElement representing the Swiper container.
 * @param config The configuration options for the Swiper.
 */
    private _initSwiperElement(element: ElementRef<HTMLElement>, config: SwiperOptions): void {
        // Assign configuration options to the Swiper element
        Object.assign(element.nativeElement, config);

        // Initialize the Swiper element (this is a side effect of using Swiper elements)
        // Note: Using @ts-ignore is not a recommended practice, but it's necessary in this case due to Swiper's implementation.
        // @ts-ignore
        element.nativeElement.initialize();
    }
    //#endregion
}
