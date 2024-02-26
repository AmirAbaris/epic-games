import { Component, EventEmitter, Output, input } from '@angular/core';
import { FortniteCardDto } from '../dtos/fortnite-card-dto';
import { FortniteCardManagementCaptionModel } from '../models/caption-models/fortnite-management-caption.model';

@Component({
  selector: 'app-fortnite-card-management',
  templateUrl: './fortnite-card-management.component.html',
  styleUrl: './fortnite-card-management.component.scss'
})
export class FortniteCardManagementComponent {
  //#region properties
  gameInput = input.required<FortniteCardDto[]>();
  captionInput = input.required<FortniteCardManagementCaptionModel>();

  @Output('addWishlistButton') AddToWishListButtonEvent = new EventEmitter<string>();
  //#region 

  //#region handler methods
  public onAddToWishlistButtonEvent(gameId: string): void {
    this.AddToWishListButtonEvent.emit(gameId);
  }
  //#endregion
}
