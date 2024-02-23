import { Component, input } from '@angular/core';
import { GameBannerDto } from '../dots/game-banner-dto';

@Component({
  selector: 'app-game-banner-action',
  templateUrl: './game-banner-action.component.html',
  styleUrl: './game-banner-action.component.scss'
})
export class GameBannerActionComponent {
  //#region properties
  gameInput = input.required<GameBannerDto>();
  //#endregion
}
