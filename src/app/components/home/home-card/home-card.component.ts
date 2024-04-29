import { Component, EventEmitter, Output, input } from '@angular/core';
import { HomeCardInputModel } from '../models/home-card-input.model';
import { output } from "@angular/core";

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.scss'
})
export class HomeCardComponent {
  //#region Properties
  data = input.required<HomeCardInputModel>();
  isLoading = input.required<boolean>();

  clickCardEvent = output<void>();
  clickWishlistButtonEvent = output<string>();
  //#endregion

  //#region Handler methods
  public onClickCardEventHandler(): void {
    this.clickCardEvent.emit();
  }

  public onClickWishlistButtonEventHandler(id: string | undefined): void {
    if (this.data().hasWishlist && this.data().id && id) {
      this.clickWishlistButtonEvent.emit(id);
    }
  }
  //#endregion
  ;
  ;
}
