import { Component, EventEmitter, Output, input } from '@angular/core';
import { HomeCardActionInputModel } from '../models/home-card-action-input.model';

@Component({
  selector: 'app-home-card-action',
  templateUrl: './home-card-action.component.html',
  styleUrl: './home-card-action.component.scss'
})
export class HomeCardActionComponent {
  //#region Properties
  data = input.required<HomeCardActionInputModel>();
  isLoading = input.required<boolean>();

  @Output() clickCardEvent = new EventEmitter<void>();
  @Output() clickWishlistButtonEvent = new EventEmitter<string>();
  //#endregion

  //#region HandlerMethods
  public onClickCardEventHandler(): void {
    this.clickCardEvent.emit();
  }

  public onClickWishlistButtonEventHandler(id: string): void {
    this.clickWishlistButtonEvent.emit(id);
  }
  //#endregion
}
