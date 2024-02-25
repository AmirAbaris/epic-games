import { Component, input } from '@angular/core';
import { BannerDto } from '../dots/banner-dto';

@Component({
  selector: 'app-game-banner-management',
  templateUrl: './game-banner-management.component.html',
  styleUrl: './game-banner-management.component.scss'
})
export class GameBannerManagementComponent {
  //#region properties
  gameInput = input.required<BannerDto[]>();
  //#endregion
}
