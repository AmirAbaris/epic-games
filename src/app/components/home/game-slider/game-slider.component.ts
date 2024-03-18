import {AfterViewInit, Component, EventEmitter, input, Output} from '@angular/core';
import {GameSliderItemCaptionModel} from "../models/caption-models/game-slider-item-caption.model";
import {GameSliderInputModel} from "../models/game-slider-input.model";
import Swiper from "swiper";

@Component({
  selector: 'app-game-slider',
  templateUrl: './game-slider.component.html',
  styleUrl: './game-slider.component.scss'
})
export class GameSliderComponent implements AfterViewInit {
  //region Properties
  data = input.required<GameSliderInputModel>();
  isLoading = input.required<boolean>();
  itemCaption = input.required<GameSliderItemCaptionModel>();

  @Output() clickGameEvent = new EventEmitter<string>();
  @Output() clickWishlistButtonEvent = new EventEmitter<string>();
  @Output() clickTitleEvent = new EventEmitter();

  //endregion

  //region Lifecycle methods
  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 5,
      spaceBetween: 20,
      navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        }
      }

    });
  }

  //endregion

  //region Handler methods
  public onClickGameEventHandler(gameId: string): void {
    this.clickGameEvent.emit(gameId);
  }

  public onClickWishlistButtonEventHandler(gameId: string): void {
    this.clickWishlistButtonEvent.emit(gameId);
  }

  public onClickTitleEventHandler(): void {
    if (this.data().titleIsClickable) {
      this.clickTitleEvent.emit();
    }
  }

  //endregion
}
