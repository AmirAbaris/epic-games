import { Component, input } from '@angular/core';
import { BannerDto } from '../dots/banner-dto';

@Component({
  selector: 'app-game-banner-action',
  templateUrl: './game-banner-action.component.html',
  styleUrl: './game-banner-action.component.scss'
})
export class GameBannerActionComponent {
  //#region properties
  gameInput = input.required<BannerDto>();
  //#endregion
}
