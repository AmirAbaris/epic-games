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

  clickCardEvent = output<void>();
  clickWishlistButtonEvent = output<string>();
  //#endregion

  //#region Handler methods
  public onClickCardEventHandler(): void {
    this._callClickCardFn();
  }

  public onClickWishlistButtonEventHandler(id: string): void {
    this.clickWishlistButtonEvent.emit(id);
  }

  public onClickCardFnHandler(): void {
    this._callClickCardFn();
  }
  //#endregion

  //#region Main logic methods
  /**
   * because we call this fun multiple times, by giving it a separate func it'll make the logic more readable
   */
  private _callClickCardFn(): void {
    this.data().clickCardFn();
  }
  //#endregion
}
