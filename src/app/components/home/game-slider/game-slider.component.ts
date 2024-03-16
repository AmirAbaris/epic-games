import {Component, EventEmitter, input, Output} from '@angular/core';
import {GameSliderItemCaptionModel} from "../models/caption-models/game-slider-item-caption.model";
import {GameSliderInputModel} from "../models/game-slider-input.model";

@Component({
  selector: 'app-game-slider',
  templateUrl: './game-slider.component.html',
  styleUrl: './game-slider.component.scss'
})
export class GameSliderComponent {
  //region Properties
  data = input.required<GameSliderInputModel>();
  isLoading = input.required<boolean>();
  itemCaption = input.required<GameSliderItemCaptionModel>();

  @Output() clickGameEvent = new EventEmitter<string>();
  @Output() clickWishlistButtonEvent = new EventEmitter<string>();
  @Output() clickTitleEvent = new EventEmitter();

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
