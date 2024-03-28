import { Component, EventEmitter, Output, input } from '@angular/core';
import { HomeCardInputModel } from '../models/home-card-input.model';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.scss'
})
export class HomeCardComponent {
  //#region Properties
  data = input.required<HomeCardInputModel>();
  isLoading = input.required<boolean>();

  @Output() clickCardEvent = new EventEmitter<void>();
  @Output() clickWishlistButtonEvent = new EventEmitter<string>();
  //#endregion

  //#region Handler methods
  public onClickCardEventHandler(): void {
    this.clickCardEvent.emit();
  }

  public onClickWishlistButtonEventHandler(id: string | undefined): void {
    if (this.data().hasWishlist && this.data().id) {
      this.clickWishlistButtonEvent.emit(id);
    }
  }
  //#endregion
}
