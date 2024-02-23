import { Component, input } from '@angular/core';
import { GameBannerDto } from '../dots/game-banner-dto';

@Component({
  selector: 'app-game-banner-management',
  templateUrl: './game-banner-management.component.html',
  styleUrl: './game-banner-management.component.scss'
})
export class GameBannerManagementComponent {
  //#region properties
  gameInput = input.required<GameBannerDto[]>();
  //#endregion
}
