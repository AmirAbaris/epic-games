import { Component, input } from '@angular/core';
import { BannerDto } from '../dots/banner-dto';

@Component({
  selector: 'app-game-banner',
  templateUrl: './game-banner.component.html',
  styleUrl: './game-banner.component.scss'
})
export class GameBannerComponent {
  //#region properties
  gameInput = input.required<BannerDto>();
  //#endregion
}
