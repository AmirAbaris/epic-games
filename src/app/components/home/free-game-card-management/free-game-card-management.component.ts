import {Component, input} from '@angular/core';
import {FreeGameCardDto} from '../dtos/free-game-card-dto';
import {FreeGameCardCaptionModel} from '../models/caption-models/free-game-card-caption.model';
import {freeGameCardManagementCaptionModel} from '../models/caption-models/free-game-card-management-caption.model';

@Component({
  selector: 'app-free-game-slider-item-management',
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
