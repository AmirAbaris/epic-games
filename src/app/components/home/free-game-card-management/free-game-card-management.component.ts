import { Component, EventEmitter, Output, input } from '@angular/core';
import { FreeCardCaptionsModel } from '../models/caption-models/free-card-captions.model';
import { FreeGameCardModel } from '../models/free-game-card.model';
import { FreeGameCardDto } from '../dtos/free-game-card-dto';
import { FreeGameCardCaptionModel } from '../models/caption-models/free-game-card-caption.model';
import { freeGameCardManagementCaptionModel } from '../models/caption-models/free-game-card-management-caption.model';

@Component({
  selector: 'app-free-game-card-management',
  templateUrl: './free-game-card-management.component.html',
  styleUrl: './free-game-card-management.component.scss'
})
export class FreeGameCardManagementComponent {
  //#region properties
  gameInputs = input.required<FreeGameCardDto[]>();
  managementCaption = input.required<freeGameCardManagementCaptionModel>();
  cardCaption = input.required<FreeGameCardCaptionModel>();
  iconInput = input.required<string>();

  @Output('viewMoreButton') viewMore = new EventEmitter<string>();
  //#endregion

  //#region handler methods
  public onViewMore(data: string): void {
    this.viewMore.emit(data);
  }
  //#endregion
}
