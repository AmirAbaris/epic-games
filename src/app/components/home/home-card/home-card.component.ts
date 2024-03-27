import { Component, input, output } from '@angular/core';
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

  clickCardEvent = output<void>();
  clickWishlistButton = output<string>();
  //#endregion

  //#region Handler methods
  public onClickCardEventHandler(): void {
    this.clickCardEvent.emit();
  }

  public onClickWishlistButton(id: string): void {
    if (this.data().hasWishlist) {
      this.clickWishlistButton.emit(id);
    } else {
      return;
    }
  }
  //#endregion
}
