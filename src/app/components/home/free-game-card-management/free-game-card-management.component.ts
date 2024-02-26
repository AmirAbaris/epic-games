import { Component, input } from '@angular/core';
import { FreeCardCaptionsModel } from '../models/caption-models/free-card-captions.model';
import { FreeGameCardModel } from '../models/free-game-card.model';
import { FreeGameCardDto } from '../dots/free-game-card-dto';
import { FreeGameCardCaptionModel } from '../models/caption-models/free-game-card-caption.model';
import { freeGameCardManagementCaptionModel } from '../models/caption-models/free-game-card-management-caption.model';

@Component({
  selector: 'app-free-game-card-management',
  templateUrl: './free-game-card-management.component.html',
  styleUrl: './free-game-card-management.component.scss'
})
export class FreeGameCardManagementComponent {
  //#region properties
  public gameInputs = input.required<FreeGameCardDto[]>();

  public managementCaption = input.required<freeGameCardManagementCaptionModel>();
  public cardCaption = input.required<FreeGameCardCaptionModel>();

  public iconInput = input.required<string>();
  //#endregion
}
