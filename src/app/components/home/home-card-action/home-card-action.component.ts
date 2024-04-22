import { Component, input } from '@angular/core';
import { HomeCardActionInputModel } from '../models/home-card-action-input.model';
import { output } from "@angular/core";

@Component({
  selector: 'app-home-card-action',
  templateUrl: './home-card-action.component.html',
  styleUrl: './home-card-action.component.scss'
})
export class HomeCardActionComponent {
  //#region Properties
  data = input.required<HomeCardActionInputModel>();
  isLoading = input.required<boolean>();

  clickCardEvent = output<void>();
  clickWishlistButtonEvent = output<string>();
  //#endregion

  //#region Handler methods
  public onClickCardEventHandler(): void {
    this.clickCardEvent.emit();
  }

  public onClickWishlistButtonEventHandler(id: string): void {
    this.clickWishlistButtonEvent.emit(id);
  }

  public onClickCardFnHandler(): void {
    this.data().clickCardFn();
  }
  //#endregion
}
